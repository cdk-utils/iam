# `connect` Submodule <a name="`connect` Submodule" id="@cdk_utils/iam.connect"></a>


## Structs <a name="Structs" id="Structs"></a>

### ConnectAgentStatusArnComponents <a name="ConnectAgentStatusArnComponents" id="@cdk_utils/iam.connect.ConnectAgentStatusArnComponents"></a>

Parsed components of a agent-status ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAgentStatusArnComponents: connect.ConnectAgentStatusArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.agentStatusId">agentStatusId</a></code> | <code>string</code> | The AgentStatusId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentStatusId`<sup>Required</sup> <a name="agentStatusId" id="@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.agentStatusId"></a>

```typescript
public readonly agentStatusId: string;
```

- *Type:* string

The AgentStatusId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAgentStatusArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectAgentStatusArnProps <a name="ConnectAgentStatusArnProps" id="@cdk_utils/iam.connect.ConnectAgentStatusArnProps"></a>

Properties for building a agent-status ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAgentStatusArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAgentStatusArnProps: connect.ConnectAgentStatusArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.agentStatusId">agentStatusId</a></code> | <code>string</code> | The AgentStatusId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentStatusId`<sup>Required</sup> <a name="agentStatusId" id="@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.agentStatusId"></a>

```typescript
public readonly agentStatusId: string;
```

- *Type:* string

The AgentStatusId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAgentStatusArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectAiAgentArnComponents <a name="ConnectAiAgentArnComponents" id="@cdk_utils/iam.connect.ConnectAiAgentArnComponents"></a>

Parsed components of a ai-agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAiAgentArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAiAgentArnComponents: connect.ConnectAiAgentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.aiAgentId">aiAgentId</a></code> | <code>string</code> | The AIAgentId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.version">version</a></code> | <code>string</code> | The Version component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aiAgentId`<sup>Required</sup> <a name="aiAgentId" id="@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.aiAgentId"></a>

```typescript
public readonly aiAgentId: string;
```

- *Type:* string

The AIAgentId component.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.connect.ConnectAiAgentArnComponents.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component.

---

### ConnectAiAgentArnProps <a name="ConnectAiAgentArnProps" id="@cdk_utils/iam.connect.ConnectAiAgentArnProps"></a>

Properties for building a ai-agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAiAgentArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAiAgentArnProps: connect.ConnectAiAgentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.aiAgentId">aiAgentId</a></code> | <code>string</code> | The AIAgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.assistantId">assistantId</a></code> | <code>string</code> | The AssistantId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.version">version</a></code> | <code>string</code> | The Version component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aiAgentId`<sup>Required</sup> <a name="aiAgentId" id="@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.aiAgentId"></a>

```typescript
public readonly aiAgentId: string;
```

- *Type:* string

The AIAgentId component of the ARN.

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.assistantId"></a>

```typescript
public readonly assistantId: string;
```

- *Type:* string

The AssistantId component of the ARN.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAiAgentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectAttachedFileArnComponents <a name="ConnectAttachedFileArnComponents" id="@cdk_utils/iam.connect.ConnectAttachedFileArnComponents"></a>

Parsed components of a attached-file ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAttachedFileArnComponents: connect.ConnectAttachedFileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.fileId">fileId</a></code> | <code>string</code> | The FileId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fileId`<sup>Required</sup> <a name="fileId" id="@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.fileId"></a>

```typescript
public readonly fileId: string;
```

- *Type:* string

The FileId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAttachedFileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectAttachedFileArnProps <a name="ConnectAttachedFileArnProps" id="@cdk_utils/iam.connect.ConnectAttachedFileArnProps"></a>

Properties for building a attached-file ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAttachedFileArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAttachedFileArnProps: connect.ConnectAttachedFileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.fileId">fileId</a></code> | <code>string</code> | The FileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fileId`<sup>Required</sup> <a name="fileId" id="@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.fileId"></a>

```typescript
public readonly fileId: string;
```

- *Type:* string

The FileId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAttachedFileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectAuthenticationProfileArnComponents <a name="ConnectAuthenticationProfileArnComponents" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents"></a>

Parsed components of a authentication-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAuthenticationProfileArnComponents: connect.ConnectAuthenticationProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.authenticationProfileId">authenticationProfileId</a></code> | <code>string</code> | The AuthenticationProfileId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `authenticationProfileId`<sup>Required</sup> <a name="authenticationProfileId" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.authenticationProfileId"></a>

```typescript
public readonly authenticationProfileId: string;
```

- *Type:* string

The AuthenticationProfileId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectAuthenticationProfileArnProps <a name="ConnectAuthenticationProfileArnProps" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps"></a>

Properties for building a authentication-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAuthenticationProfileArnProps: connect.ConnectAuthenticationProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.authenticationProfileId">authenticationProfileId</a></code> | <code>string</code> | The AuthenticationProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `authenticationProfileId`<sup>Required</sup> <a name="authenticationProfileId" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.authenticationProfileId"></a>

```typescript
public readonly authenticationProfileId: string;
```

- *Type:* string

The AuthenticationProfileId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectAWSManagedViewArnComponents <a name="ConnectAWSManagedViewArnComponents" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents"></a>

Parsed components of a aws-managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAWSManagedViewArnComponents: connect.ConnectAWSManagedViewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnComponents.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component.

---

### ConnectAWSManagedViewArnProps <a name="ConnectAWSManagedViewArnProps" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps"></a>

Properties for building a aws-managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectAWSManagedViewArnProps: connect.ConnectAWSManagedViewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectContactArnComponents <a name="ConnectContactArnComponents" id="@cdk_utils/iam.connect.ConnectContactArnComponents"></a>

Parsed components of a contact ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectContactArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectContactArnComponents: connect.ConnectContactArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnComponents.property.contactId">contactId</a></code> | <code>string</code> | The ContactId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectContactArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdk_utils/iam.connect.ConnectContactArnComponents.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

The ContactId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectContactArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectContactArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectContactArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectContactArnProps <a name="ConnectContactArnProps" id="@cdk_utils/iam.connect.ConnectContactArnProps"></a>

Properties for building a contact ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectContactArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectContactArnProps: connect.ConnectContactArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnProps.property.contactId">contactId</a></code> | <code>string</code> | The ContactId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdk_utils/iam.connect.ConnectContactArnProps.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

The ContactId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectContactArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectContactArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectContactArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectContactArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectContactEvaluationArnComponents <a name="ConnectContactEvaluationArnComponents" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents"></a>

Parsed components of a contact-evaluation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectContactEvaluationArnComponents: connect.ConnectContactEvaluationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.evaluationId">evaluationId</a></code> | <code>string</code> | The EvaluationId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `evaluationId`<sup>Required</sup> <a name="evaluationId" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.evaluationId"></a>

```typescript
public readonly evaluationId: string;
```

- *Type:* string

The EvaluationId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectContactEvaluationArnProps <a name="ConnectContactEvaluationArnProps" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnProps"></a>

Properties for building a contact-evaluation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectContactEvaluationArnProps: connect.ConnectContactEvaluationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.evaluationId">evaluationId</a></code> | <code>string</code> | The EvaluationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `evaluationId`<sup>Required</sup> <a name="evaluationId" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.evaluationId"></a>

```typescript
public readonly evaluationId: string;
```

- *Type:* string

The EvaluationId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectContactEvaluationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectContactFlowArnComponents <a name="ConnectContactFlowArnComponents" id="@cdk_utils/iam.connect.ConnectContactFlowArnComponents"></a>

Parsed components of a contact-flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectContactFlowArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectContactFlowArnComponents: connect.ConnectContactFlowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | The ContactFlowId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

The ContactFlowId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectContactFlowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectContactFlowArnProps <a name="ConnectContactFlowArnProps" id="@cdk_utils/iam.connect.ConnectContactFlowArnProps"></a>

Properties for building a contact-flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectContactFlowArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectContactFlowArnProps: connect.ConnectContactFlowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.contactFlowId">contactFlowId</a></code> | <code>string</code> | The ContactFlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.contactFlowId"></a>

```typescript
public readonly contactFlowId: string;
```

- *Type:* string

The ContactFlowId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectContactFlowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectContactFlowModuleArnComponents <a name="ConnectContactFlowModuleArnComponents" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents"></a>

Parsed components of a contact-flow-module ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectContactFlowModuleArnComponents: connect.ConnectContactFlowModuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.contactFlowModuleId">contactFlowModuleId</a></code> | <code>string</code> | The ContactFlowModuleId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactFlowModuleId`<sup>Required</sup> <a name="contactFlowModuleId" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.contactFlowModuleId"></a>

```typescript
public readonly contactFlowModuleId: string;
```

- *Type:* string

The ContactFlowModuleId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectContactFlowModuleArnProps <a name="ConnectContactFlowModuleArnProps" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps"></a>

Properties for building a contact-flow-module ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectContactFlowModuleArnProps: connect.ConnectContactFlowModuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.contactFlowModuleId">contactFlowModuleId</a></code> | <code>string</code> | The ContactFlowModuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactFlowModuleId`<sup>Required</sup> <a name="contactFlowModuleId" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.contactFlowModuleId"></a>

```typescript
public readonly contactFlowModuleId: string;
```

- *Type:* string

The ContactFlowModuleId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectCustomerManagedViewArnComponents <a name="ConnectCustomerManagedViewArnComponents" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents"></a>

Parsed components of a customer-managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectCustomerManagedViewArnComponents: connect.ConnectCustomerManagedViewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnComponents.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component.

---

### ConnectCustomerManagedViewArnProps <a name="ConnectCustomerManagedViewArnProps" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps"></a>

Properties for building a customer-managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectCustomerManagedViewArnProps: connect.ConnectCustomerManagedViewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectCustomerManagedViewVersionArnComponents <a name="ConnectCustomerManagedViewVersionArnComponents" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents"></a>

Parsed components of a customer-managed-view-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectCustomerManagedViewVersionArnComponents: connect.ConnectCustomerManagedViewVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.viewVersion">viewVersion</a></code> | <code>string</code> | The ViewVersion component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component.

---

##### `viewVersion`<sup>Required</sup> <a name="viewVersion" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnComponents.property.viewVersion"></a>

```typescript
public readonly viewVersion: string;
```

- *Type:* string

The ViewVersion component.

---

### ConnectCustomerManagedViewVersionArnProps <a name="ConnectCustomerManagedViewVersionArnProps" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps"></a>

Properties for building a customer-managed-view-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectCustomerManagedViewVersionArnProps: connect.ConnectCustomerManagedViewVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.viewVersion">viewVersion</a></code> | <code>string</code> | The ViewVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component of the ARN.

---

##### `viewVersion`<sup>Required</sup> <a name="viewVersion" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.viewVersion"></a>

```typescript
public readonly viewVersion: string;
```

- *Type:* string

The ViewVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectDataTableArnComponents <a name="ConnectDataTableArnComponents" id="@cdk_utils/iam.connect.ConnectDataTableArnComponents"></a>

Parsed components of a data-table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectDataTableArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectDataTableArnComponents: connect.ConnectDataTableArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.dataTableId">dataTableId</a></code> | <code>string</code> | The DataTableId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.dataTableId"></a>

```typescript
public readonly dataTableId: string;
```

- *Type:* string

The DataTableId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectDataTableArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectDataTableArnProps <a name="ConnectDataTableArnProps" id="@cdk_utils/iam.connect.ConnectDataTableArnProps"></a>

Properties for building a data-table ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectDataTableArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectDataTableArnProps: connect.ConnectDataTableArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnProps.property.dataTableId">dataTableId</a></code> | <code>string</code> | The DataTableId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectDataTableArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataTableId`<sup>Required</sup> <a name="dataTableId" id="@cdk_utils/iam.connect.ConnectDataTableArnProps.property.dataTableId"></a>

```typescript
public readonly dataTableId: string;
```

- *Type:* string

The DataTableId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectDataTableArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectDataTableArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectDataTableArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectDataTableArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectEmailAddressArnComponents <a name="ConnectEmailAddressArnComponents" id="@cdk_utils/iam.connect.ConnectEmailAddressArnComponents"></a>

Parsed components of a email-address ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectEmailAddressArnComponents: connect.ConnectEmailAddressArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.emailAddressId">emailAddressId</a></code> | <code>string</code> | The EmailAddressId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `emailAddressId`<sup>Required</sup> <a name="emailAddressId" id="@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.emailAddressId"></a>

```typescript
public readonly emailAddressId: string;
```

- *Type:* string

The EmailAddressId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectEmailAddressArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectEmailAddressArnProps <a name="ConnectEmailAddressArnProps" id="@cdk_utils/iam.connect.ConnectEmailAddressArnProps"></a>

Properties for building a email-address ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectEmailAddressArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectEmailAddressArnProps: connect.ConnectEmailAddressArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.emailAddressId">emailAddressId</a></code> | <code>string</code> | The EmailAddressId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `emailAddressId`<sup>Required</sup> <a name="emailAddressId" id="@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.emailAddressId"></a>

```typescript
public readonly emailAddressId: string;
```

- *Type:* string

The EmailAddressId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectEmailAddressArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectEvaluationFormArnComponents <a name="ConnectEvaluationFormArnComponents" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents"></a>

Parsed components of a evaluation-form ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectEvaluationFormArnComponents: connect.ConnectEvaluationFormArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.formId">formId</a></code> | <code>string</code> | The FormId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `formId`<sup>Required</sup> <a name="formId" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.formId"></a>

```typescript
public readonly formId: string;
```

- *Type:* string

The FormId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectEvaluationFormArnProps <a name="ConnectEvaluationFormArnProps" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnProps"></a>

Properties for building a evaluation-form ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectEvaluationFormArnProps: connect.ConnectEvaluationFormArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.formId">formId</a></code> | <code>string</code> | The FormId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `formId`<sup>Required</sup> <a name="formId" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.formId"></a>

```typescript
public readonly formId: string;
```

- *Type:* string

The FormId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectEvaluationFormArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectHierarchyGroupArnComponents <a name="ConnectHierarchyGroupArnComponents" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents"></a>

Parsed components of a hierarchy-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectHierarchyGroupArnComponents: connect.ConnectHierarchyGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.hierarchyGroupId">hierarchyGroupId</a></code> | <code>string</code> | The HierarchyGroupId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hierarchyGroupId`<sup>Required</sup> <a name="hierarchyGroupId" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.hierarchyGroupId"></a>

```typescript
public readonly hierarchyGroupId: string;
```

- *Type:* string

The HierarchyGroupId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectHierarchyGroupArnProps <a name="ConnectHierarchyGroupArnProps" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps"></a>

Properties for building a hierarchy-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectHierarchyGroupArnProps: connect.ConnectHierarchyGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.hierarchyGroupId">hierarchyGroupId</a></code> | <code>string</code> | The HierarchyGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hierarchyGroupId`<sup>Required</sup> <a name="hierarchyGroupId" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.hierarchyGroupId"></a>

```typescript
public readonly hierarchyGroupId: string;
```

- *Type:* string

The HierarchyGroupId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectHoursOfOperationArnComponents <a name="ConnectHoursOfOperationArnComponents" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents"></a>

Parsed components of a hours-of-operation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectHoursOfOperationArnComponents: connect.ConnectHoursOfOperationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>string</code> | The HoursOfOperationId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.hoursOfOperationId"></a>

```typescript
public readonly hoursOfOperationId: string;
```

- *Type:* string

The HoursOfOperationId component.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectHoursOfOperationArnProps <a name="ConnectHoursOfOperationArnProps" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps"></a>

Properties for building a hours-of-operation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectHoursOfOperationArnProps: connect.ConnectHoursOfOperationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>string</code> | The HoursOfOperationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.hoursOfOperationId"></a>

```typescript
public readonly hoursOfOperationId: string;
```

- *Type:* string

The HoursOfOperationId component of the ARN.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectInstanceArnComponents <a name="ConnectInstanceArnComponents" id="@cdk_utils/iam.connect.ConnectInstanceArnComponents"></a>

Parsed components of a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectInstanceArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectInstanceArnComponents: connect.ConnectInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectInstanceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectInstanceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectInstanceArnProps <a name="ConnectInstanceArnProps" id="@cdk_utils/iam.connect.ConnectInstanceArnProps"></a>

Properties for building a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectInstanceArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectInstanceArnProps: connect.ConnectInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectInstanceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectInstanceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectIntegrationAssociationArnComponents <a name="ConnectIntegrationAssociationArnComponents" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents"></a>

Parsed components of a integration-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectIntegrationAssociationArnComponents: connect.ConnectIntegrationAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The IntegrationAssociationId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The IntegrationAssociationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectIntegrationAssociationArnProps <a name="ConnectIntegrationAssociationArnProps" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps"></a>

Properties for building a integration-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectIntegrationAssociationArnProps: connect.ConnectIntegrationAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.integrationAssociationId">integrationAssociationId</a></code> | <code>string</code> | The IntegrationAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `integrationAssociationId`<sup>Required</sup> <a name="integrationAssociationId" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.integrationAssociationId"></a>

```typescript
public readonly integrationAssociationId: string;
```

- *Type:* string

The IntegrationAssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectLegacyPhoneNumberArnComponents <a name="ConnectLegacyPhoneNumberArnComponents" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents"></a>

Parsed components of a legacy-phone-number ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectLegacyPhoneNumberArnComponents: connect.ConnectLegacyPhoneNumberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | The PhoneNumberId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

The PhoneNumberId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectLegacyPhoneNumberArnProps <a name="ConnectLegacyPhoneNumberArnProps" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps"></a>

Properties for building a legacy-phone-number ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectLegacyPhoneNumberArnProps: connect.ConnectLegacyPhoneNumberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | The PhoneNumberId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

The PhoneNumberId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectMetricArnComponents <a name="ConnectMetricArnComponents" id="@cdk_utils/iam.connect.ConnectMetricArnComponents"></a>

Parsed components of a metric ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectMetricArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectMetricArnComponents: connect.ConnectMetricArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnComponents.property.metricId">metricId</a></code> | <code>string</code> | The MetricId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectMetricArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectMetricArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `metricId`<sup>Required</sup> <a name="metricId" id="@cdk_utils/iam.connect.ConnectMetricArnComponents.property.metricId"></a>

```typescript
public readonly metricId: string;
```

- *Type:* string

The MetricId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectMetricArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectMetricArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectMetricArnProps <a name="ConnectMetricArnProps" id="@cdk_utils/iam.connect.ConnectMetricArnProps"></a>

Properties for building a metric ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectMetricArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectMetricArnProps: connect.ConnectMetricArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnProps.property.metricId">metricId</a></code> | <code>string</code> | The MetricId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectMetricArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectMetricArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `metricId`<sup>Required</sup> <a name="metricId" id="@cdk_utils/iam.connect.ConnectMetricArnProps.property.metricId"></a>

```typescript
public readonly metricId: string;
```

- *Type:* string

The MetricId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectMetricArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectMetricArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectMetricArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectNotificationArnComponents <a name="ConnectNotificationArnComponents" id="@cdk_utils/iam.connect.ConnectNotificationArnComponents"></a>

Parsed components of a notification ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectNotificationArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectNotificationArnComponents: connect.ConnectNotificationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.notificationId">notificationId</a></code> | <code>string</code> | The NotificationId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `notificationId`<sup>Required</sup> <a name="notificationId" id="@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.notificationId"></a>

```typescript
public readonly notificationId: string;
```

- *Type:* string

The NotificationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectNotificationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectNotificationArnProps <a name="ConnectNotificationArnProps" id="@cdk_utils/iam.connect.ConnectNotificationArnProps"></a>

Properties for building a notification ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectNotificationArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectNotificationArnProps: connect.ConnectNotificationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnProps.property.notificationId">notificationId</a></code> | <code>string</code> | The NotificationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectNotificationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectNotificationArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `notificationId`<sup>Required</sup> <a name="notificationId" id="@cdk_utils/iam.connect.ConnectNotificationArnProps.property.notificationId"></a>

```typescript
public readonly notificationId: string;
```

- *Type:* string

The NotificationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectNotificationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectNotificationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectNotificationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectPhoneNumberArnComponents <a name="ConnectPhoneNumberArnComponents" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents"></a>

Parsed components of a phone-number ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectPhoneNumberArnComponents: connect.ConnectPhoneNumberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | The PhoneNumberId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

The PhoneNumberId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectPhoneNumberArnProps <a name="ConnectPhoneNumberArnProps" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnProps"></a>

Properties for building a phone-number ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectPhoneNumberArnProps: connect.ConnectPhoneNumberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | The PhoneNumberId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

The PhoneNumberId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectPhoneNumberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectPromptArnComponents <a name="ConnectPromptArnComponents" id="@cdk_utils/iam.connect.ConnectPromptArnComponents"></a>

Parsed components of a prompt ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectPromptArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectPromptArnComponents: connect.ConnectPromptArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnComponents.property.promptId">promptId</a></code> | <code>string</code> | The PromptId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectPromptArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectPromptArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectPromptArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdk_utils/iam.connect.ConnectPromptArnComponents.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

The PromptId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectPromptArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectPromptArnProps <a name="ConnectPromptArnProps" id="@cdk_utils/iam.connect.ConnectPromptArnProps"></a>

Properties for building a prompt ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectPromptArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectPromptArnProps: connect.ConnectPromptArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnProps.property.promptId">promptId</a></code> | <code>string</code> | The PromptId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectPromptArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectPromptArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `promptId`<sup>Required</sup> <a name="promptId" id="@cdk_utils/iam.connect.ConnectPromptArnProps.property.promptId"></a>

```typescript
public readonly promptId: string;
```

- *Type:* string

The PromptId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectPromptArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectPromptArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectPromptArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectQualifiedAWSManagedViewArnComponents <a name="ConnectQualifiedAWSManagedViewArnComponents" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents"></a>

Parsed components of a qualified-aws-managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQualifiedAWSManagedViewArnComponents: connect.ConnectQualifiedAWSManagedViewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.viewQualifier">viewQualifier</a></code> | <code>string</code> | The ViewQualifier component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component.

---

##### `viewQualifier`<sup>Required</sup> <a name="viewQualifier" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnComponents.property.viewQualifier"></a>

```typescript
public readonly viewQualifier: string;
```

- *Type:* string

The ViewQualifier component.

---

### ConnectQualifiedAWSManagedViewArnProps <a name="ConnectQualifiedAWSManagedViewArnProps" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps"></a>

Properties for building a qualified-aws-managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQualifiedAWSManagedViewArnProps: connect.ConnectQualifiedAWSManagedViewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.viewQualifier">viewQualifier</a></code> | <code>string</code> | The ViewQualifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component of the ARN.

---

##### `viewQualifier`<sup>Required</sup> <a name="viewQualifier" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.viewQualifier"></a>

```typescript
public readonly viewQualifier: string;
```

- *Type:* string

The ViewQualifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectQualifiedCustomerManagedViewArnComponents <a name="ConnectQualifiedCustomerManagedViewArnComponents" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents"></a>

Parsed components of a qualified-customer-managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQualifiedCustomerManagedViewArnComponents: connect.ConnectQualifiedCustomerManagedViewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.viewQualifier">viewQualifier</a></code> | <code>string</code> | The ViewQualifier component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component.

---

##### `viewQualifier`<sup>Required</sup> <a name="viewQualifier" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnComponents.property.viewQualifier"></a>

```typescript
public readonly viewQualifier: string;
```

- *Type:* string

The ViewQualifier component.

---

### ConnectQualifiedCustomerManagedViewArnProps <a name="ConnectQualifiedCustomerManagedViewArnProps" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps"></a>

Properties for building a qualified-customer-managed-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQualifiedCustomerManagedViewArnProps: connect.ConnectQualifiedCustomerManagedViewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.viewId">viewId</a></code> | <code>string</code> | The ViewId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.viewQualifier">viewQualifier</a></code> | <code>string</code> | The ViewQualifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

The ViewId component of the ARN.

---

##### `viewQualifier`<sup>Required</sup> <a name="viewQualifier" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.viewQualifier"></a>

```typescript
public readonly viewQualifier: string;
```

- *Type:* string

The ViewQualifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectQualifiedMetricArnComponents <a name="ConnectQualifiedMetricArnComponents" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents"></a>

Parsed components of a qualified-metric ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQualifiedMetricArnComponents: connect.ConnectQualifiedMetricArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.metricId">metricId</a></code> | <code>string</code> | The MetricId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.metricQualifier">metricQualifier</a></code> | <code>string</code> | The MetricQualifier component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `metricId`<sup>Required</sup> <a name="metricId" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.metricId"></a>

```typescript
public readonly metricId: string;
```

- *Type:* string

The MetricId component.

---

##### `metricQualifier`<sup>Required</sup> <a name="metricQualifier" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.metricQualifier"></a>

```typescript
public readonly metricQualifier: string;
```

- *Type:* string

The MetricQualifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectQualifiedMetricArnProps <a name="ConnectQualifiedMetricArnProps" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps"></a>

Properties for building a qualified-metric ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQualifiedMetricArnProps: connect.ConnectQualifiedMetricArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.metricId">metricId</a></code> | <code>string</code> | The MetricId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.metricQualifier">metricQualifier</a></code> | <code>string</code> | The MetricQualifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `metricId`<sup>Required</sup> <a name="metricId" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.metricId"></a>

```typescript
public readonly metricId: string;
```

- *Type:* string

The MetricId component of the ARN.

---

##### `metricQualifier`<sup>Required</sup> <a name="metricQualifier" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.metricQualifier"></a>

```typescript
public readonly metricQualifier: string;
```

- *Type:* string

The MetricQualifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectQueueArnComponents <a name="ConnectQueueArnComponents" id="@cdk_utils/iam.connect.ConnectQueueArnComponents"></a>

Parsed components of a queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQueueArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQueueArnComponents: connect.ConnectQueueArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnComponents.property.queueId">queueId</a></code> | <code>string</code> | The QueueId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQueueArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectQueueArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQueueArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdk_utils/iam.connect.ConnectQueueArnComponents.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

The QueueId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQueueArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectQueueArnProps <a name="ConnectQueueArnProps" id="@cdk_utils/iam.connect.ConnectQueueArnProps"></a>

Properties for building a queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQueueArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQueueArnProps: connect.ConnectQueueArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnProps.property.queueId">queueId</a></code> | <code>string</code> | The QueueId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQueueArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectQueueArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdk_utils/iam.connect.ConnectQueueArnProps.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

The QueueId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQueueArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQueueArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQueueArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectQuickConnectArnComponents <a name="ConnectQuickConnectArnComponents" id="@cdk_utils/iam.connect.ConnectQuickConnectArnComponents"></a>

Parsed components of a quick-connect ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQuickConnectArnComponents: connect.ConnectQuickConnectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.quickConnectId">quickConnectId</a></code> | <code>string</code> | The QuickConnectId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `quickConnectId`<sup>Required</sup> <a name="quickConnectId" id="@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.quickConnectId"></a>

```typescript
public readonly quickConnectId: string;
```

- *Type:* string

The QuickConnectId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQuickConnectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectQuickConnectArnProps <a name="ConnectQuickConnectArnProps" id="@cdk_utils/iam.connect.ConnectQuickConnectArnProps"></a>

Properties for building a quick-connect ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectQuickConnectArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectQuickConnectArnProps: connect.ConnectQuickConnectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.quickConnectId">quickConnectId</a></code> | <code>string</code> | The QuickConnectId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `quickConnectId`<sup>Required</sup> <a name="quickConnectId" id="@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.quickConnectId"></a>

```typescript
public readonly quickConnectId: string;
```

- *Type:* string

The QuickConnectId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectQuickConnectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectRoutingProfileArnComponents <a name="ConnectRoutingProfileArnComponents" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents"></a>

Parsed components of a routing-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectRoutingProfileArnComponents: connect.ConnectRoutingProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | The RoutingProfileId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnComponents.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

The RoutingProfileId component.

---

### ConnectRoutingProfileArnProps <a name="ConnectRoutingProfileArnProps" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnProps"></a>

Properties for building a routing-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectRoutingProfileArnProps: connect.ConnectRoutingProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.routingProfileId">routingProfileId</a></code> | <code>string</code> | The RoutingProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `routingProfileId`<sup>Required</sup> <a name="routingProfileId" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.routingProfileId"></a>

```typescript
public readonly routingProfileId: string;
```

- *Type:* string

The RoutingProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectRoutingProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectRuleArnComponents <a name="ConnectRuleArnComponents" id="@cdk_utils/iam.connect.ConnectRuleArnComponents"></a>

Parsed components of a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectRuleArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectRuleArnComponents: connect.ConnectRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnComponents.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectRuleArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.connect.ConnectRuleArnComponents.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component.

---

### ConnectRuleArnProps <a name="ConnectRuleArnProps" id="@cdk_utils/iam.connect.ConnectRuleArnProps"></a>

Properties for building a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectRuleArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectRuleArnProps: connect.ConnectRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnProps.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectRuleArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.connect.ConnectRuleArnProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectSecurityProfileArnComponents <a name="ConnectSecurityProfileArnComponents" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents"></a>

Parsed components of a security-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectSecurityProfileArnComponents: connect.ConnectSecurityProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.securityProfileId">securityProfileId</a></code> | <code>string</code> | The SecurityProfileId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `securityProfileId`<sup>Required</sup> <a name="securityProfileId" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnComponents.property.securityProfileId"></a>

```typescript
public readonly securityProfileId: string;
```

- *Type:* string

The SecurityProfileId component.

---

### ConnectSecurityProfileArnProps <a name="ConnectSecurityProfileArnProps" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnProps"></a>

Properties for building a security-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectSecurityProfileArnProps: connect.ConnectSecurityProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.securityProfileId">securityProfileId</a></code> | <code>string</code> | The SecurityProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `securityProfileId`<sup>Required</sup> <a name="securityProfileId" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.securityProfileId"></a>

```typescript
public readonly securityProfileId: string;
```

- *Type:* string

The SecurityProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectSecurityProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectTaskTemplateArnComponents <a name="ConnectTaskTemplateArnComponents" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents"></a>

Parsed components of a task-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectTaskTemplateArnComponents: connect.ConnectTaskTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.taskTemplateId">taskTemplateId</a></code> | <code>string</code> | The TaskTemplateId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskTemplateId`<sup>Required</sup> <a name="taskTemplateId" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnComponents.property.taskTemplateId"></a>

```typescript
public readonly taskTemplateId: string;
```

- *Type:* string

The TaskTemplateId component.

---

### ConnectTaskTemplateArnProps <a name="ConnectTaskTemplateArnProps" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnProps"></a>

Properties for building a task-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectTaskTemplateArnProps: connect.ConnectTaskTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.taskTemplateId">taskTemplateId</a></code> | <code>string</code> | The TaskTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `taskTemplateId`<sup>Required</sup> <a name="taskTemplateId" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.taskTemplateId"></a>

```typescript
public readonly taskTemplateId: string;
```

- *Type:* string

The TaskTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectTaskTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectTrafficDistributionGroupArnComponents <a name="ConnectTrafficDistributionGroupArnComponents" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents"></a>

Parsed components of a traffic-distribution-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectTrafficDistributionGroupArnComponents: connect.ConnectTrafficDistributionGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.property.trafficDistributionGroupId">trafficDistributionGroupId</a></code> | <code>string</code> | The TrafficDistributionGroupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trafficDistributionGroupId`<sup>Required</sup> <a name="trafficDistributionGroupId" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnComponents.property.trafficDistributionGroupId"></a>

```typescript
public readonly trafficDistributionGroupId: string;
```

- *Type:* string

The TrafficDistributionGroupId component.

---

### ConnectTrafficDistributionGroupArnProps <a name="ConnectTrafficDistributionGroupArnProps" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps"></a>

Properties for building a traffic-distribution-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectTrafficDistributionGroupArnProps: connect.ConnectTrafficDistributionGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.property.trafficDistributionGroupId">trafficDistributionGroupId</a></code> | <code>string</code> | The TrafficDistributionGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `trafficDistributionGroupId`<sup>Required</sup> <a name="trafficDistributionGroupId" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.property.trafficDistributionGroupId"></a>

```typescript
public readonly trafficDistributionGroupId: string;
```

- *Type:* string

The TrafficDistributionGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectUseCaseArnComponents <a name="ConnectUseCaseArnComponents" id="@cdk_utils/iam.connect.ConnectUseCaseArnComponents"></a>

Parsed components of a use-case ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectUseCaseArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectUseCaseArnComponents: connect.ConnectUseCaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.useCaseId">useCaseId</a></code> | <code>string</code> | The UseCaseId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `useCaseId`<sup>Required</sup> <a name="useCaseId" id="@cdk_utils/iam.connect.ConnectUseCaseArnComponents.property.useCaseId"></a>

```typescript
public readonly useCaseId: string;
```

- *Type:* string

The UseCaseId component.

---

### ConnectUseCaseArnProps <a name="ConnectUseCaseArnProps" id="@cdk_utils/iam.connect.ConnectUseCaseArnProps"></a>

Properties for building a use-case ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectUseCaseArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectUseCaseArnProps: connect.ConnectUseCaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.useCaseId">useCaseId</a></code> | <code>string</code> | The UseCaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `useCaseId`<sup>Required</sup> <a name="useCaseId" id="@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.useCaseId"></a>

```typescript
public readonly useCaseId: string;
```

- *Type:* string

The UseCaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectUseCaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectUserArnComponents <a name="ConnectUserArnComponents" id="@cdk_utils/iam.connect.ConnectUserArnComponents"></a>

Parsed components of a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectUserArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectUserArnComponents: connect.ConnectUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnComponents.property.userId">userId</a></code> | <code>string</code> | The UserId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectUserArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.connect.ConnectUserArnComponents.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component.

---

### ConnectUserArnProps <a name="ConnectUserArnProps" id="@cdk_utils/iam.connect.ConnectUserArnProps"></a>

Properties for building a user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectUserArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectUserArnProps: connect.ConnectUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnProps.property.userId">userId</a></code> | <code>string</code> | The UserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectUserArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.connect.ConnectUserArnProps.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectVocabularyArnComponents <a name="ConnectVocabularyArnComponents" id="@cdk_utils/iam.connect.ConnectVocabularyArnComponents"></a>

Parsed components of a vocabulary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectVocabularyArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectVocabularyArnComponents: connect.ConnectVocabularyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.vocabularyId">vocabularyId</a></code> | <code>string</code> | The VocabularyId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vocabularyId`<sup>Required</sup> <a name="vocabularyId" id="@cdk_utils/iam.connect.ConnectVocabularyArnComponents.property.vocabularyId"></a>

```typescript
public readonly vocabularyId: string;
```

- *Type:* string

The VocabularyId component.

---

### ConnectVocabularyArnProps <a name="ConnectVocabularyArnProps" id="@cdk_utils/iam.connect.ConnectVocabularyArnProps"></a>

Properties for building a vocabulary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectVocabularyArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectVocabularyArnProps: connect.ConnectVocabularyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.vocabularyId">vocabularyId</a></code> | <code>string</code> | The VocabularyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `vocabularyId`<sup>Required</sup> <a name="vocabularyId" id="@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.vocabularyId"></a>

```typescript
public readonly vocabularyId: string;
```

- *Type:* string

The VocabularyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectVocabularyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectWildcardAgentStatusArnComponents <a name="ConnectWildcardAgentStatusArnComponents" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents"></a>

Parsed components of a wildcard-agent-status ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardAgentStatusArnComponents: connect.ConnectWildcardAgentStatusArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectWildcardAgentStatusArnProps <a name="ConnectWildcardAgentStatusArnProps" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps"></a>

Properties for building a wildcard-agent-status ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardAgentStatusArnProps: connect.ConnectWildcardAgentStatusArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectWildcardContactFlowArnComponents <a name="ConnectWildcardContactFlowArnComponents" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents"></a>

Parsed components of a wildcard-contact-flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardContactFlowArnComponents: connect.ConnectWildcardContactFlowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectWildcardContactFlowArnProps <a name="ConnectWildcardContactFlowArnProps" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps"></a>

Properties for building a wildcard-contact-flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardContactFlowArnProps: connect.ConnectWildcardContactFlowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectWildcardLegacyPhoneNumberArnComponents <a name="ConnectWildcardLegacyPhoneNumberArnComponents" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents"></a>

Parsed components of a wildcard-legacy-phone-number ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardLegacyPhoneNumberArnComponents: connect.ConnectWildcardLegacyPhoneNumberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectWildcardLegacyPhoneNumberArnProps <a name="ConnectWildcardLegacyPhoneNumberArnProps" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps"></a>

Properties for building a wildcard-legacy-phone-number ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardLegacyPhoneNumberArnProps: connect.ConnectWildcardLegacyPhoneNumberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectWildcardPhoneNumberArnComponents <a name="ConnectWildcardPhoneNumberArnComponents" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnComponents"></a>

Parsed components of a wildcard-phone-number ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardPhoneNumberArnComponents: connect.ConnectWildcardPhoneNumberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectWildcardPhoneNumberArnProps <a name="ConnectWildcardPhoneNumberArnProps" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps"></a>

Properties for building a wildcard-phone-number ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardPhoneNumberArnProps: connect.ConnectWildcardPhoneNumberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectWildcardQueueArnComponents <a name="ConnectWildcardQueueArnComponents" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents"></a>

Parsed components of a wildcard-queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardQueueArnComponents: connect.ConnectWildcardQueueArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectWildcardQueueArnProps <a name="ConnectWildcardQueueArnProps" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnProps"></a>

Properties for building a wildcard-queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardQueueArnProps: connect.ConnectWildcardQueueArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardQueueArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectWildcardQuickConnectArnComponents <a name="ConnectWildcardQuickConnectArnComponents" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents"></a>

Parsed components of a wildcard-quick-connect ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardQuickConnectArnComponents: connect.ConnectWildcardQuickConnectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectWildcardQuickConnectArnProps <a name="ConnectWildcardQuickConnectArnProps" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps"></a>

Properties for building a wildcard-quick-connect ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWildcardQuickConnectArnProps: connect.ConnectWildcardQuickConnectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ConnectWorkspaceArnComponents <a name="ConnectWorkspaceArnComponents" id="@cdk_utils/iam.connect.ConnectWorkspaceArnComponents"></a>

Parsed components of a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWorkspaceArnComponents: connect.ConnectWorkspaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.connect.ConnectWorkspaceArnComponents.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component.

---

### ConnectWorkspaceArnProps <a name="ConnectWorkspaceArnProps" id="@cdk_utils/iam.connect.ConnectWorkspaceArnProps"></a>

Properties for building a workspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect.ConnectWorkspaceArnProps.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

const connectWorkspaceArnProps: connect.ConnectWorkspaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.workspaceId">workspaceId</a></code> | <code>string</code> | The WorkspaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

The WorkspaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect.ConnectWorkspaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectActions <a name="ConnectActions" id="@cdk_utils/iam.connect.ConnectActions"></a>

IAM action constants for the connect service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.connect.ConnectActions.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

new connect.ConnectActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetAttachedFile">actionGetAttachedFile</a></code> | <code>string</code> | [Read] connect:GetAttachedFile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetContactAttributes">actionGetContactAttributes</a></code> | <code>string</code> | [Read] connect:GetContactAttributes. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetContactMetrics">actionGetContactMetrics</a></code> | <code>string</code> | [Read] connect:GetContactMetrics. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetCurrentMetricData">actionGetCurrentMetricData</a></code> | <code>string</code> | [Read] connect:GetCurrentMetricData. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetCurrentUserData">actionGetCurrentUserData</a></code> | <code>string</code> | [Read] connect:GetCurrentUserData. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetEffectiveHoursOfOperations">actionGetEffectiveHoursOfOperations</a></code> | <code>string</code> | [Read] connect:GetEffectiveHoursOfOperations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetEvaluationFormValidation">actionGetEvaluationFormValidation</a></code> | <code>string</code> | [Read] connect:GetEvaluationFormValidation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetFederationToken">actionGetFederationToken</a></code> | <code>string</code> | [Read] connect:GetFederationToken. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetFlowAssociation">actionGetFlowAssociation</a></code> | <code>string</code> | [Read] connect:GetFlowAssociation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetMetricData">actionGetMetricData</a></code> | <code>string</code> | [Read] connect:GetMetricData. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetMetricDataV2">actionGetMetricDataV2</a></code> | <code>string</code> | [Read] connect:GetMetricDataV2. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetPromptFile">actionGetPromptFile</a></code> | <code>string</code> | [Read] connect:GetPromptFile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetTaskTemplate">actionGetTaskTemplate</a></code> | <code>string</code> | [Read] connect:GetTaskTemplate. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.actionGetTrafficDistribution">actionGetTrafficDistribution</a></code> | <code>string</code> | [List] connect:GetTrafficDistribution. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ActivateEvaluationForm">ActivateEvaluationForm</a></code> | <code>string</code> | [Write] connect:ActivateEvaluationForm. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AdminGetEmergencyAccessToken">AdminGetEmergencyAccessToken</a></code> | <code>string</code> | [Write] connect:AdminGetEmergencyAccessToken. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateAnalyticsDataSet">AssociateAnalyticsDataSet</a></code> | <code>string</code> | [Write] connect:AssociateAnalyticsDataSet. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateApprovedOrigin">AssociateApprovedOrigin</a></code> | <code>string</code> | [Write] connect:AssociateApprovedOrigin. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateBot">AssociateBot</a></code> | <code>string</code> | [Write] connect:AssociateBot. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateContactWithUser">AssociateContactWithUser</a></code> | <code>string</code> | [Write] connect:AssociateContactWithUser. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateCustomerProfilesDomain">AssociateCustomerProfilesDomain</a></code> | <code>string</code> | [Write] connect:AssociateCustomerProfilesDomain. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateDefaultVocabulary">AssociateDefaultVocabulary</a></code> | <code>string</code> | [Write] connect:AssociateDefaultVocabulary. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateEmailAddressAlias">AssociateEmailAddressAlias</a></code> | <code>string</code> | [Write] connect:AssociateEmailAddressAlias. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateFlow">AssociateFlow</a></code> | <code>string</code> | [Write] connect:AssociateFlow. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateInstanceStorageConfig">AssociateInstanceStorageConfig</a></code> | <code>string</code> | [Write] connect:AssociateInstanceStorageConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateLambdaFunction">AssociateLambdaFunction</a></code> | <code>string</code> | [Write] connect:AssociateLambdaFunction. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateLexBot">AssociateLexBot</a></code> | <code>string</code> | [Write] connect:AssociateLexBot. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociatePhoneNumberContactFlow">AssociatePhoneNumberContactFlow</a></code> | <code>string</code> | [Write] connect:AssociatePhoneNumberContactFlow. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateQueueEmailAddresses">AssociateQueueEmailAddresses</a></code> | <code>string</code> | [Write] connect:AssociateQueueEmailAddresses. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateQueueQuickConnects">AssociateQueueQuickConnects</a></code> | <code>string</code> | [Write] connect:AssociateQueueQuickConnects. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateRoutingProfileQueues">AssociateRoutingProfileQueues</a></code> | <code>string</code> | [Write] connect:AssociateRoutingProfileQueues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateSecurityKey">AssociateSecurityKey</a></code> | <code>string</code> | [Write] connect:AssociateSecurityKey. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateSecurityProfiles">AssociateSecurityProfiles</a></code> | <code>string</code> | [Write] connect:AssociateSecurityProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateTrafficDistributionGroupUser">AssociateTrafficDistributionGroupUser</a></code> | <code>string</code> | [Write] connect:AssociateTrafficDistributionGroupUser. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateUserProficiencies">AssociateUserProficiencies</a></code> | <code>string</code> | [Write] connect:AssociateUserProficiencies. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.AssociateWorkspace">AssociateWorkspace</a></code> | <code>string</code> | [Write] connect:AssociateWorkspace. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchAssociateAnalyticsDataSet">BatchAssociateAnalyticsDataSet</a></code> | <code>string</code> | [Write] connect:BatchAssociateAnalyticsDataSet. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchCreateDataTableValue">BatchCreateDataTableValue</a></code> | <code>string</code> | [Write] connect:BatchCreateDataTableValue. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchDeleteDataTableValue">BatchDeleteDataTableValue</a></code> | <code>string</code> | [Write] connect:BatchDeleteDataTableValue. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchDescribeDataTableValue">BatchDescribeDataTableValue</a></code> | <code>string</code> | [Read] connect:BatchDescribeDataTableValue. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchDisassociateAnalyticsDataSet">BatchDisassociateAnalyticsDataSet</a></code> | <code>string</code> | [Write] connect:BatchDisassociateAnalyticsDataSet. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchGetAttachedFileMetadata">BatchGetAttachedFileMetadata</a></code> | <code>string</code> | [Read] connect:BatchGetAttachedFileMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchGetFlowAssociation">BatchGetFlowAssociation</a></code> | <code>string</code> | [List] connect:BatchGetFlowAssociation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchPutContact">BatchPutContact</a></code> | <code>string</code> | [Write] connect:BatchPutContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.BatchUpdateDataTableValue">BatchUpdateDataTableValue</a></code> | <code>string</code> | [Write] connect:BatchUpdateDataTableValue. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ClaimPhoneNumber">ClaimPhoneNumber</a></code> | <code>string</code> | [Write] connect:ClaimPhoneNumber. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CompleteAttachedFileUpload">CompleteAttachedFileUpload</a></code> | <code>string</code> | [Write] connect:CompleteAttachedFileUpload. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateAgentStatus">CreateAgentStatus</a></code> | <code>string</code> | [Write] connect:CreateAgentStatus. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateAttachedFile">CreateAttachedFile</a></code> | <code>string</code> | [Write] connect:CreateAttachedFile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateAuthenticationProfile">CreateAuthenticationProfile</a></code> | <code>string</code> | [Write] connect:CreateAuthenticationProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateContact">CreateContact</a></code> | <code>string</code> | [Write] connect:CreateContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlow">CreateContactFlow</a></code> | <code>string</code> | [Write] connect:CreateContactFlow. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlowModule">CreateContactFlowModule</a></code> | <code>string</code> | [Write] connect:CreateContactFlowModule. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlowModuleAlias">CreateContactFlowModuleAlias</a></code> | <code>string</code> | [Write] connect:CreateContactFlowModuleAlias. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlowModuleVersion">CreateContactFlowModuleVersion</a></code> | <code>string</code> | [Write] connect:CreateContactFlowModuleVersion. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlowVersion">CreateContactFlowVersion</a></code> | <code>string</code> | [Write] connect:CreateContactFlowVersion. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateDataTable">CreateDataTable</a></code> | <code>string</code> | [Write] connect:CreateDataTable. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateDataTableAttribute">CreateDataTableAttribute</a></code> | <code>string</code> | [Write] connect:CreateDataTableAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateEmailAddress">CreateEmailAddress</a></code> | <code>string</code> | [Write] connect:CreateEmailAddress. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateEvaluationForm">CreateEvaluationForm</a></code> | <code>string</code> | [Write] connect:CreateEvaluationForm. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateHoursOfOperation">CreateHoursOfOperation</a></code> | <code>string</code> | [Write] connect:CreateHoursOfOperation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateHoursOfOperationOverride">CreateHoursOfOperationOverride</a></code> | <code>string</code> | [Write] connect:CreateHoursOfOperationOverride. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateInstance">CreateInstance</a></code> | <code>string</code> | [Write] connect:CreateInstance. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateIntegrationAssociation">CreateIntegrationAssociation</a></code> | <code>string</code> | [Write] connect:CreateIntegrationAssociation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateMetric">CreateMetric</a></code> | <code>string</code> | [Write] connect:CreateMetric. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateNotification">CreateNotification</a></code> | <code>string</code> | [Write] connect:CreateNotification. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateParticipant">CreateParticipant</a></code> | <code>string</code> | [Write] connect:CreateParticipant. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreatePersistentContactAssociation">CreatePersistentContactAssociation</a></code> | <code>string</code> | [Write] connect:CreatePersistentContactAssociation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreatePredefinedAttribute">CreatePredefinedAttribute</a></code> | <code>string</code> | [Write] connect:CreatePredefinedAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreatePrompt">CreatePrompt</a></code> | <code>string</code> | [Write] connect:CreatePrompt. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreatePushNotificationRegistration">CreatePushNotificationRegistration</a></code> | <code>string</code> | [Write] connect:CreatePushNotificationRegistration. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateQueue">CreateQueue</a></code> | <code>string</code> | [Write] connect:CreateQueue. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateQuickConnect">CreateQuickConnect</a></code> | <code>string</code> | [Write] connect:CreateQuickConnect. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateRoutingProfile">CreateRoutingProfile</a></code> | <code>string</code> | [Write] connect:CreateRoutingProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] connect:CreateRule. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateSecurityProfile">CreateSecurityProfile</a></code> | <code>string</code> | [Write] connect:CreateSecurityProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateTaskTemplate">CreateTaskTemplate</a></code> | <code>string</code> | [Write] connect:CreateTaskTemplate. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateTrafficDistributionGroup">CreateTrafficDistributionGroup</a></code> | <code>string</code> | [Write] connect:CreateTrafficDistributionGroup. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateUseCase">CreateUseCase</a></code> | <code>string</code> | [Write] connect:CreateUseCase. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] connect:CreateUser. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateUserHierarchyGroup">CreateUserHierarchyGroup</a></code> | <code>string</code> | [Write] connect:CreateUserHierarchyGroup. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateView">CreateView</a></code> | <code>string</code> | [Write] connect:CreateView. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateViewVersion">CreateViewVersion</a></code> | <code>string</code> | [Write] connect:CreateViewVersion. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateVocabulary">CreateVocabulary</a></code> | <code>string</code> | [Write] connect:CreateVocabulary. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string</code> | [Write] connect:CreateWorkspace. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.CreateWorkspacePage">CreateWorkspacePage</a></code> | <code>string</code> | [Write] connect:CreateWorkspacePage. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeactivateEvaluationForm">DeactivateEvaluationForm</a></code> | <code>string</code> | [Write] connect:DeactivateEvaluationForm. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteAttachedFile">DeleteAttachedFile</a></code> | <code>string</code> | [Write] connect:DeleteAttachedFile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteContactEvaluation">DeleteContactEvaluation</a></code> | <code>string</code> | [Write] connect:DeleteContactEvaluation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlow">DeleteContactFlow</a></code> | <code>string</code> | [Write] connect:DeleteContactFlow. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlowModule">DeleteContactFlowModule</a></code> | <code>string</code> | [Write] connect:DeleteContactFlowModule. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlowModuleAlias">DeleteContactFlowModuleAlias</a></code> | <code>string</code> | [Write] connect:DeleteContactFlowModuleAlias. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlowModuleVersion">DeleteContactFlowModuleVersion</a></code> | <code>string</code> | [Write] connect:DeleteContactFlowModuleVersion. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlowVersion">DeleteContactFlowVersion</a></code> | <code>string</code> | [Write] connect:DeleteContactFlowVersion. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteDataTable">DeleteDataTable</a></code> | <code>string</code> | [Write] connect:DeleteDataTable. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteDataTableAttribute">DeleteDataTableAttribute</a></code> | <code>string</code> | [Write] connect:DeleteDataTableAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteEmailAddress">DeleteEmailAddress</a></code> | <code>string</code> | [Write] connect:DeleteEmailAddress. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteEvaluationForm">DeleteEvaluationForm</a></code> | <code>string</code> | [Write] connect:DeleteEvaluationForm. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteHoursOfOperation">DeleteHoursOfOperation</a></code> | <code>string</code> | [Write] connect:DeleteHoursOfOperation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteHoursOfOperationOverride">DeleteHoursOfOperationOverride</a></code> | <code>string</code> | [Write] connect:DeleteHoursOfOperationOverride. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteInstance">DeleteInstance</a></code> | <code>string</code> | [Write] connect:DeleteInstance. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteIntegrationAssociation">DeleteIntegrationAssociation</a></code> | <code>string</code> | [Write] connect:DeleteIntegrationAssociation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteMetric">DeleteMetric</a></code> | <code>string</code> | [Write] connect:DeleteMetric. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteNotification">DeleteNotification</a></code> | <code>string</code> | [Write] connect:DeleteNotification. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeletePredefinedAttribute">DeletePredefinedAttribute</a></code> | <code>string</code> | [Write] connect:DeletePredefinedAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeletePrompt">DeletePrompt</a></code> | <code>string</code> | [Write] connect:DeletePrompt. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeletePushNotificationRegistration">DeletePushNotificationRegistration</a></code> | <code>string</code> | [Write] connect:DeletePushNotificationRegistration. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteQueue">DeleteQueue</a></code> | <code>string</code> | [Write] connect:DeleteQueue. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteQuickConnect">DeleteQuickConnect</a></code> | <code>string</code> | [Write] connect:DeleteQuickConnect. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteRoutingProfile">DeleteRoutingProfile</a></code> | <code>string</code> | [Write] connect:DeleteRoutingProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] connect:DeleteRule. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteSecurityProfile">DeleteSecurityProfile</a></code> | <code>string</code> | [Write] connect:DeleteSecurityProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteTaskTemplate">DeleteTaskTemplate</a></code> | <code>string</code> | [Write] connect:DeleteTaskTemplate. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteTrafficDistributionGroup">DeleteTrafficDistributionGroup</a></code> | <code>string</code> | [Write] connect:DeleteTrafficDistributionGroup. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteUseCase">DeleteUseCase</a></code> | <code>string</code> | [Write] connect:DeleteUseCase. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] connect:DeleteUser. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteUserHierarchyGroup">DeleteUserHierarchyGroup</a></code> | <code>string</code> | [Write] connect:DeleteUserHierarchyGroup. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteView">DeleteView</a></code> | <code>string</code> | [Write] connect:DeleteView. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteViewVersion">DeleteViewVersion</a></code> | <code>string</code> | [Write] connect:DeleteViewVersion. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteVocabulary">DeleteVocabulary</a></code> | <code>string</code> | [Write] connect:DeleteVocabulary. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string</code> | [Write] connect:DeleteWorkspace. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteWorkspaceMedia">DeleteWorkspaceMedia</a></code> | <code>string</code> | [Write] connect:DeleteWorkspaceMedia. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DeleteWorkspacePage">DeleteWorkspacePage</a></code> | <code>string</code> | [Write] connect:DeleteWorkspacePage. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeAgentStatus">DescribeAgentStatus</a></code> | <code>string</code> | [Read] connect:DescribeAgentStatus. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeAttachedFilesConfiguration">DescribeAttachedFilesConfiguration</a></code> | <code>string</code> | [Read] connect:DescribeAttachedFilesConfiguration. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeAuthenticationProfile">DescribeAuthenticationProfile</a></code> | <code>string</code> | [Read] connect:DescribeAuthenticationProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeContact">DescribeContact</a></code> | <code>string</code> | [Read] connect:DescribeContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeContactEvaluation">DescribeContactEvaluation</a></code> | <code>string</code> | [Read] connect:DescribeContactEvaluation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeContactFlow">DescribeContactFlow</a></code> | <code>string</code> | [Read] connect:DescribeContactFlow. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeContactFlowModule">DescribeContactFlowModule</a></code> | <code>string</code> | [Read] connect:DescribeContactFlowModule. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeContactFlowModuleAlias">DescribeContactFlowModuleAlias</a></code> | <code>string</code> | [Read] connect:DescribeContactFlowModuleAlias. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeDataTable">DescribeDataTable</a></code> | <code>string</code> | [Read] connect:DescribeDataTable. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeDataTableAttribute">DescribeDataTableAttribute</a></code> | <code>string</code> | [Read] connect:DescribeDataTableAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeEmailAddress">DescribeEmailAddress</a></code> | <code>string</code> | [Read] connect:DescribeEmailAddress. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeEvaluationForm">DescribeEvaluationForm</a></code> | <code>string</code> | [Read] connect:DescribeEvaluationForm. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeForecastingPlanningSchedulingIntegration">DescribeForecastingPlanningSchedulingIntegration</a></code> | <code>string</code> | [Read] connect:DescribeForecastingPlanningSchedulingIntegration. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeHoursOfOperation">DescribeHoursOfOperation</a></code> | <code>string</code> | [Read] connect:DescribeHoursOfOperation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeHoursOfOperationOverride">DescribeHoursOfOperationOverride</a></code> | <code>string</code> | [Read] connect:DescribeHoursOfOperationOverride. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeInstance">DescribeInstance</a></code> | <code>string</code> | [Read] connect:DescribeInstance. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeInstanceAttribute">DescribeInstanceAttribute</a></code> | <code>string</code> | [Read] connect:DescribeInstanceAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeInstanceStorageConfig">DescribeInstanceStorageConfig</a></code> | <code>string</code> | [Read] connect:DescribeInstanceStorageConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeMetric">DescribeMetric</a></code> | <code>string</code> | [Read] connect:DescribeMetric. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeNotification">DescribeNotification</a></code> | <code>string</code> | [Read] connect:DescribeNotification. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribePhoneNumber">DescribePhoneNumber</a></code> | <code>string</code> | [Read] connect:DescribePhoneNumber. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribePredefinedAttribute">DescribePredefinedAttribute</a></code> | <code>string</code> | [Read] connect:DescribePredefinedAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribePrompt">DescribePrompt</a></code> | <code>string</code> | [Read] connect:DescribePrompt. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeQueue">DescribeQueue</a></code> | <code>string</code> | [Read] connect:DescribeQueue. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeQuickConnect">DescribeQuickConnect</a></code> | <code>string</code> | [Read] connect:DescribeQuickConnect. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeRoutingProfile">DescribeRoutingProfile</a></code> | <code>string</code> | [Read] connect:DescribeRoutingProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeRule">DescribeRule</a></code> | <code>string</code> | [Read] connect:DescribeRule. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeSecurityProfile">DescribeSecurityProfile</a></code> | <code>string</code> | [Read] connect:DescribeSecurityProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeTrafficDistributionGroup">DescribeTrafficDistributionGroup</a></code> | <code>string</code> | [Read] connect:DescribeTrafficDistributionGroup. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeUser">DescribeUser</a></code> | <code>string</code> | [Read] connect:DescribeUser. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeUserHierarchyGroup">DescribeUserHierarchyGroup</a></code> | <code>string</code> | [Read] connect:DescribeUserHierarchyGroup. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeUserHierarchyStructure">DescribeUserHierarchyStructure</a></code> | <code>string</code> | [Read] connect:DescribeUserHierarchyStructure. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeView">DescribeView</a></code> | <code>string</code> | [Read] connect:DescribeView. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeVocabulary">DescribeVocabulary</a></code> | <code>string</code> | [Read] connect:DescribeVocabulary. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DescribeWorkspace">DescribeWorkspace</a></code> | <code>string</code> | [Read] connect:DescribeWorkspace. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateAnalyticsDataSet">DisassociateAnalyticsDataSet</a></code> | <code>string</code> | [Write] connect:DisassociateAnalyticsDataSet. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateApprovedOrigin">DisassociateApprovedOrigin</a></code> | <code>string</code> | [Write] connect:DisassociateApprovedOrigin. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateBot">DisassociateBot</a></code> | <code>string</code> | [Write] connect:DisassociateBot. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateCustomerProfilesDomain">DisassociateCustomerProfilesDomain</a></code> | <code>string</code> | [Write] connect:DisassociateCustomerProfilesDomain. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateEmailAddressAlias">DisassociateEmailAddressAlias</a></code> | <code>string</code> | [Write] connect:DisassociateEmailAddressAlias. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateFlow">DisassociateFlow</a></code> | <code>string</code> | [Write] connect:DisassociateFlow. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateInstanceStorageConfig">DisassociateInstanceStorageConfig</a></code> | <code>string</code> | [Write] connect:DisassociateInstanceStorageConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateLambdaFunction">DisassociateLambdaFunction</a></code> | <code>string</code> | [Write] connect:DisassociateLambdaFunction. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateLexBot">DisassociateLexBot</a></code> | <code>string</code> | [Write] connect:DisassociateLexBot. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociatePhoneNumberContactFlow">DisassociatePhoneNumberContactFlow</a></code> | <code>string</code> | [Write] connect:DisassociatePhoneNumberContactFlow. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateQueueEmailAddresses">DisassociateQueueEmailAddresses</a></code> | <code>string</code> | [Write] connect:DisassociateQueueEmailAddresses. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateQueueQuickConnects">DisassociateQueueQuickConnects</a></code> | <code>string</code> | [Write] connect:DisassociateQueueQuickConnects. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateRoutingProfileQueues">DisassociateRoutingProfileQueues</a></code> | <code>string</code> | [Write] connect:DisassociateRoutingProfileQueues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateSecurityKey">DisassociateSecurityKey</a></code> | <code>string</code> | [Write] connect:DisassociateSecurityKey. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateSecurityProfiles">DisassociateSecurityProfiles</a></code> | <code>string</code> | [Write] connect:DisassociateSecurityProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateTrafficDistributionGroupUser">DisassociateTrafficDistributionGroupUser</a></code> | <code>string</code> | [Write] connect:DisassociateTrafficDistributionGroupUser. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateUserProficiencies">DisassociateUserProficiencies</a></code> | <code>string</code> | [Write] connect:DisassociateUserProficiencies. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DisassociateWorkspace">DisassociateWorkspace</a></code> | <code>string</code> | [Write] connect:DisassociateWorkspace. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.DismissUserContact">DismissUserContact</a></code> | <code>string</code> | [Write] connect:DismissUserContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.EvaluateDataTableValues">EvaluateDataTableValues</a></code> | <code>string</code> | [Read] connect:EvaluateDataTableValues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ImportPhoneNumber">ImportPhoneNumber</a></code> | <code>string</code> | [Write] connect:ImportPhoneNumber. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ImportWorkspaceMedia">ImportWorkspaceMedia</a></code> | <code>string</code> | [Write] connect:ImportWorkspaceMedia. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListAgentStatuses">ListAgentStatuses</a></code> | <code>string</code> | [List] connect:ListAgentStatuses. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListAnalyticsDataAssociations">ListAnalyticsDataAssociations</a></code> | <code>string</code> | [List] connect:ListAnalyticsDataAssociations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListAnalyticsDataLakeDataSets">ListAnalyticsDataLakeDataSets</a></code> | <code>string</code> | [List] connect:ListAnalyticsDataLakeDataSets. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListApprovedOrigins">ListApprovedOrigins</a></code> | <code>string</code> | [List] connect:ListApprovedOrigins. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListAssociatedContacts">ListAssociatedContacts</a></code> | <code>string</code> | [List] connect:ListAssociatedContacts. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListAttachedFilesConfigurations">ListAttachedFilesConfigurations</a></code> | <code>string</code> | [List] connect:ListAttachedFilesConfigurations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListAuthenticationProfiles">ListAuthenticationProfiles</a></code> | <code>string</code> | [List] connect:ListAuthenticationProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListBots">ListBots</a></code> | <code>string</code> | [List] connect:ListBots. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListContactEvaluations">ListContactEvaluations</a></code> | <code>string</code> | [List] connect:ListContactEvaluations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListContactFlowModuleAliases">ListContactFlowModuleAliases</a></code> | <code>string</code> | [List] connect:ListContactFlowModuleAliases. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListContactFlowModules">ListContactFlowModules</a></code> | <code>string</code> | [List] connect:ListContactFlowModules. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListContactFlowModuleVersions">ListContactFlowModuleVersions</a></code> | <code>string</code> | [List] connect:ListContactFlowModuleVersions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListContactFlows">ListContactFlows</a></code> | <code>string</code> | [List] connect:ListContactFlows. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListContactFlowVersions">ListContactFlowVersions</a></code> | <code>string</code> | [List] connect:ListContactFlowVersions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListContactReferences">ListContactReferences</a></code> | <code>string</code> | [List] connect:ListContactReferences. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListDataTableAttributes">ListDataTableAttributes</a></code> | <code>string</code> | [List] connect:ListDataTableAttributes. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListDataTablePrimaryValues">ListDataTablePrimaryValues</a></code> | <code>string</code> | [List] connect:ListDataTablePrimaryValues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListDataTables">ListDataTables</a></code> | <code>string</code> | [List] connect:ListDataTables. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListDataTableValues">ListDataTableValues</a></code> | <code>string</code> | [List] connect:ListDataTableValues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListDefaultVocabularies">ListDefaultVocabularies</a></code> | <code>string</code> | [List] connect:ListDefaultVocabularies. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListEntitySecurityProfiles">ListEntitySecurityProfiles</a></code> | <code>string</code> | [List] connect:ListEntitySecurityProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListEvaluationForms">ListEvaluationForms</a></code> | <code>string</code> | [List] connect:ListEvaluationForms. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListEvaluationFormVersions">ListEvaluationFormVersions</a></code> | <code>string</code> | [List] connect:ListEvaluationFormVersions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListFlowAssociations">ListFlowAssociations</a></code> | <code>string</code> | [List] connect:ListFlowAssociations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListHoursOfOperationOverrides">ListHoursOfOperationOverrides</a></code> | <code>string</code> | [List] connect:ListHoursOfOperationOverrides. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListHoursOfOperations">ListHoursOfOperations</a></code> | <code>string</code> | [List] connect:ListHoursOfOperations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListInstanceAttributes">ListInstanceAttributes</a></code> | <code>string</code> | [List] connect:ListInstanceAttributes. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListInstances">ListInstances</a></code> | <code>string</code> | [List] connect:ListInstances. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListInstanceStorageConfigs">ListInstanceStorageConfigs</a></code> | <code>string</code> | [List] connect:ListInstanceStorageConfigs. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListIntegrationAssociations">ListIntegrationAssociations</a></code> | <code>string</code> | [List] connect:ListIntegrationAssociations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListLambdaFunctions">ListLambdaFunctions</a></code> | <code>string</code> | [List] connect:ListLambdaFunctions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListLexBots">ListLexBots</a></code> | <code>string</code> | [List] connect:ListLexBots. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListMetrics">ListMetrics</a></code> | <code>string</code> | [List] connect:ListMetrics. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListNotifications">ListNotifications</a></code> | <code>string</code> | [Read] connect:ListNotifications. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListPhoneNumbers">ListPhoneNumbers</a></code> | <code>string</code> | [List] connect:ListPhoneNumbers. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListPhoneNumbersV2">ListPhoneNumbersV2</a></code> | <code>string</code> | [List] connect:ListPhoneNumbersV2. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListPredefinedAttributes">ListPredefinedAttributes</a></code> | <code>string</code> | [List] connect:ListPredefinedAttributes. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListPrompts">ListPrompts</a></code> | <code>string</code> | [List] connect:ListPrompts. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListQueueEmailAddresses">ListQueueEmailAddresses</a></code> | <code>string</code> | [List] connect:ListQueueEmailAddresses. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListQueueQuickConnects">ListQueueQuickConnects</a></code> | <code>string</code> | [List] connect:ListQueueQuickConnects. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListQueues">ListQueues</a></code> | <code>string</code> | [List] connect:ListQueues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListQuickConnects">ListQuickConnects</a></code> | <code>string</code> | [List] connect:ListQuickConnects. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListRealtimeContactAnalysisSegments">ListRealtimeContactAnalysisSegments</a></code> | <code>string</code> | [Read] connect:ListRealtimeContactAnalysisSegments. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListRealtimeContactAnalysisSegmentsV2">ListRealtimeContactAnalysisSegmentsV2</a></code> | <code>string</code> | [List] connect:ListRealtimeContactAnalysisSegmentsV2. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListRoutingProfileManualAssignmentQueues">ListRoutingProfileManualAssignmentQueues</a></code> | <code>string</code> | [List] connect:ListRoutingProfileManualAssignmentQueues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListRoutingProfileQueues">ListRoutingProfileQueues</a></code> | <code>string</code> | [List] connect:ListRoutingProfileQueues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListRoutingProfiles">ListRoutingProfiles</a></code> | <code>string</code> | [List] connect:ListRoutingProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListRules">ListRules</a></code> | <code>string</code> | [List] connect:ListRules. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListSecurityKeys">ListSecurityKeys</a></code> | <code>string</code> | [List] connect:ListSecurityKeys. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListSecurityProfileApplications">ListSecurityProfileApplications</a></code> | <code>string</code> | [List] connect:ListSecurityProfileApplications. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListSecurityProfileFlowModules">ListSecurityProfileFlowModules</a></code> | <code>string</code> | [List] connect:ListSecurityProfileFlowModules. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListSecurityProfilePermissions">ListSecurityProfilePermissions</a></code> | <code>string</code> | [List] connect:ListSecurityProfilePermissions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListSecurityProfiles">ListSecurityProfiles</a></code> | <code>string</code> | [List] connect:ListSecurityProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] connect:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListTaskTemplates">ListTaskTemplates</a></code> | <code>string</code> | [List] connect:ListTaskTemplates. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListTrafficDistributionGroups">ListTrafficDistributionGroups</a></code> | <code>string</code> | [List] connect:ListTrafficDistributionGroups. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListTrafficDistributionGroupUsers">ListTrafficDistributionGroupUsers</a></code> | <code>string</code> | [List] connect:ListTrafficDistributionGroupUsers. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListUseCases">ListUseCases</a></code> | <code>string</code> | [List] connect:ListUseCases. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListUserHierarchyGroups">ListUserHierarchyGroups</a></code> | <code>string</code> | [List] connect:ListUserHierarchyGroups. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListUserNotifications">ListUserNotifications</a></code> | <code>string</code> | [Read] connect:ListUserNotifications. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListUserProficiencies">ListUserProficiencies</a></code> | <code>string</code> | [List] connect:ListUserProficiencies. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] connect:ListUsers. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListViews">ListViews</a></code> | <code>string</code> | [List] connect:ListViews. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListViewVersions">ListViewVersions</a></code> | <code>string</code> | [List] connect:ListViewVersions. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListWorkspaceMedia">ListWorkspaceMedia</a></code> | <code>string</code> | [List] connect:ListWorkspaceMedia. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListWorkspacePages">ListWorkspacePages</a></code> | <code>string</code> | [List] connect:ListWorkspacePages. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string</code> | [List] connect:ListWorkspaces. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.MonitorContact">MonitorContact</a></code> | <code>string</code> | [Write] connect:MonitorContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.PauseContact">PauseContact</a></code> | <code>string</code> | [Write] connect:PauseContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.PutUserStatus">PutUserStatus</a></code> | <code>string</code> | [Write] connect:PutUserStatus. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ReleasePhoneNumber">ReleasePhoneNumber</a></code> | <code>string</code> | [Write] connect:ReleasePhoneNumber. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ReplicateInstance">ReplicateInstance</a></code> | <code>string</code> | [Write] connect:ReplicateInstance. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ResumeContact">ResumeContact</a></code> | <code>string</code> | [Write] connect:ResumeContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.ResumeContactRecording">ResumeContactRecording</a></code> | <code>string</code> | [Write] connect:ResumeContactRecording. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchAgentStatuses">SearchAgentStatuses</a></code> | <code>string</code> | [Read] connect:SearchAgentStatuses. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchAvailablePhoneNumbers">SearchAvailablePhoneNumbers</a></code> | <code>string</code> | [List] connect:SearchAvailablePhoneNumbers. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchContactEvaluations">SearchContactEvaluations</a></code> | <code>string</code> | [Read] connect:SearchContactEvaluations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchContactFlowModules">SearchContactFlowModules</a></code> | <code>string</code> | [Read] connect:SearchContactFlowModules. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchContactFlows">SearchContactFlows</a></code> | <code>string</code> | [Read] connect:SearchContactFlows. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchContacts">SearchContacts</a></code> | <code>string</code> | [Read] connect:SearchContacts. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchDataTables">SearchDataTables</a></code> | <code>string</code> | [Read] connect:SearchDataTables. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchEmailAddresses">SearchEmailAddresses</a></code> | <code>string</code> | [Read] connect:SearchEmailAddresses. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchEvaluationForms">SearchEvaluationForms</a></code> | <code>string</code> | [Read] connect:SearchEvaluationForms. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchHoursOfOperationOverrides">SearchHoursOfOperationOverrides</a></code> | <code>string</code> | [Read] connect:SearchHoursOfOperationOverrides. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchHoursOfOperations">SearchHoursOfOperations</a></code> | <code>string</code> | [Read] connect:SearchHoursOfOperations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchMetrics">SearchMetrics</a></code> | <code>string</code> | [Read] connect:SearchMetrics. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchNotifications">SearchNotifications</a></code> | <code>string</code> | [Read] connect:SearchNotifications. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchPredefinedAttributes">SearchPredefinedAttributes</a></code> | <code>string</code> | [Read] connect:SearchPredefinedAttributes. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchPrompts">SearchPrompts</a></code> | <code>string</code> | [Read] connect:SearchPrompts. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchQueues">SearchQueues</a></code> | <code>string</code> | [Read] connect:SearchQueues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchQuickConnects">SearchQuickConnects</a></code> | <code>string</code> | [Read] connect:SearchQuickConnects. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchResourceTags">SearchResourceTags</a></code> | <code>string</code> | [List] connect:SearchResourceTags. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchRoutingProfiles">SearchRoutingProfiles</a></code> | <code>string</code> | [Read] connect:SearchRoutingProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchRules">SearchRules</a></code> | <code>string</code> | [Read] connect:SearchRules. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchSecurityProfiles">SearchSecurityProfiles</a></code> | <code>string</code> | [Read] connect:SearchSecurityProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchUserHierarchyGroups">SearchUserHierarchyGroups</a></code> | <code>string</code> | [Read] connect:SearchUserHierarchyGroups. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchUsers">SearchUsers</a></code> | <code>string</code> | [Read] connect:SearchUsers. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchViews">SearchViews</a></code> | <code>string</code> | [Read] connect:SearchViews. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchVocabularies">SearchVocabularies</a></code> | <code>string</code> | [List] connect:SearchVocabularies. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchWorkspaceAssociations">SearchWorkspaceAssociations</a></code> | <code>string</code> | [Read] connect:SearchWorkspaceAssociations. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SearchWorkspaces">SearchWorkspaces</a></code> | <code>string</code> | [Read] connect:SearchWorkspaces. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SendChatIntegrationEvent">SendChatIntegrationEvent</a></code> | <code>string</code> | [Write] connect:SendChatIntegrationEvent. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SendIntegrationEvent">SendIntegrationEvent</a></code> | <code>string</code> | [Write] connect:SendIntegrationEvent. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SendOutboundChatMessage">SendOutboundChatMessage</a></code> | <code>string</code> | [Write] connect:SendOutboundChatMessage. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SendOutboundEmail">SendOutboundEmail</a></code> | <code>string</code> | [Write] connect:SendOutboundEmail. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SendOutboundWebNotification">SendOutboundWebNotification</a></code> | <code>string</code> | [Write] connect:SendOutboundWebNotification. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartAttachedFileUpload">StartAttachedFileUpload</a></code> | <code>string</code> | [Write] connect:StartAttachedFileUpload. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartChatContact">StartChatContact</a></code> | <code>string</code> | [Write] connect:StartChatContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartContactConversationalAnalyticsJob">StartContactConversationalAnalyticsJob</a></code> | <code>string</code> | [Write] connect:StartContactConversationalAnalyticsJob. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartContactEvaluation">StartContactEvaluation</a></code> | <code>string</code> | [Write] connect:StartContactEvaluation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartContactMediaProcessing">StartContactMediaProcessing</a></code> | <code>string</code> | [Write] connect:StartContactMediaProcessing. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartContactRecording">StartContactRecording</a></code> | <code>string</code> | [Write] connect:StartContactRecording. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartContactStreaming">StartContactStreaming</a></code> | <code>string</code> | [Write] connect:StartContactStreaming. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartEmailContact">StartEmailContact</a></code> | <code>string</code> | [Write] connect:StartEmailContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartEvaluationFormValidation">StartEvaluationFormValidation</a></code> | <code>string</code> | [Write] connect:StartEvaluationFormValidation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartForecastingPlanningSchedulingIntegration">StartForecastingPlanningSchedulingIntegration</a></code> | <code>string</code> | [Write] connect:StartForecastingPlanningSchedulingIntegration. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartOutboundChatContact">StartOutboundChatContact</a></code> | <code>string</code> | [Write] connect:StartOutboundChatContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartOutboundEmailContact">StartOutboundEmailContact</a></code> | <code>string</code> | [Write] connect:StartOutboundEmailContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartOutboundVoiceContact">StartOutboundVoiceContact</a></code> | <code>string</code> | [Write] connect:StartOutboundVoiceContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartScreenSharing">StartScreenSharing</a></code> | <code>string</code> | [Write] connect:StartScreenSharing. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartTaskContact">StartTaskContact</a></code> | <code>string</code> | [Write] connect:StartTaskContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StartWebRTCContact">StartWebRTCContact</a></code> | <code>string</code> | [Write] connect:StartWebRTCContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StopContact">StopContact</a></code> | <code>string</code> | [Write] connect:StopContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StopContactMediaProcessing">StopContactMediaProcessing</a></code> | <code>string</code> | [Write] connect:StopContactMediaProcessing. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StopContactRecording">StopContactRecording</a></code> | <code>string</code> | [Write] connect:StopContactRecording. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StopContactStreaming">StopContactStreaming</a></code> | <code>string</code> | [Write] connect:StopContactStreaming. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.StopForecastingPlanningSchedulingIntegration">StopForecastingPlanningSchedulingIntegration</a></code> | <code>string</code> | [Write] connect:StopForecastingPlanningSchedulingIntegration. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SubmitContactEvaluation">SubmitContactEvaluation</a></code> | <code>string</code> | [Write] connect:SubmitContactEvaluation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.SuspendContactRecording">SuspendContactRecording</a></code> | <code>string</code> | [Write] connect:SuspendContactRecording. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.TagContact">TagContact</a></code> | <code>string</code> | [Write] connect:TagContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] connect:TagResource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.TransferContact">TransferContact</a></code> | <code>string</code> | [Write] connect:TransferContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UntagContact">UntagContact</a></code> | <code>string</code> | [Write] connect:UntagContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] connect:UntagResource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateAgentStatus">UpdateAgentStatus</a></code> | <code>string</code> | [Write] connect:UpdateAgentStatus. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateAttachedFilesConfiguration">UpdateAttachedFilesConfiguration</a></code> | <code>string</code> | [Write] connect:UpdateAttachedFilesConfiguration. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateAuthenticationProfile">UpdateAuthenticationProfile</a></code> | <code>string</code> | [Write] connect:UpdateAuthenticationProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContact">UpdateContact</a></code> | <code>string</code> | [Write] connect:UpdateContact. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactAttributes">UpdateContactAttributes</a></code> | <code>string</code> | [Write] connect:UpdateContactAttributes. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactEvaluation">UpdateContactEvaluation</a></code> | <code>string</code> | [Write] connect:UpdateContactEvaluation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowContent">UpdateContactFlowContent</a></code> | <code>string</code> | [Write] connect:UpdateContactFlowContent. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowMetadata">UpdateContactFlowMetadata</a></code> | <code>string</code> | [Write] connect:UpdateContactFlowMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowModuleAlias">UpdateContactFlowModuleAlias</a></code> | <code>string</code> | [Write] connect:UpdateContactFlowModuleAlias. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowModuleContent">UpdateContactFlowModuleContent</a></code> | <code>string</code> | [Write] connect:UpdateContactFlowModuleContent. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowModuleMetadata">UpdateContactFlowModuleMetadata</a></code> | <code>string</code> | [Write] connect:UpdateContactFlowModuleMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowName">UpdateContactFlowName</a></code> | <code>string</code> | [Write] connect:UpdateContactFlowName. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactRoutingData">UpdateContactRoutingData</a></code> | <code>string</code> | [Write] connect:UpdateContactRoutingData. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateContactSchedule">UpdateContactSchedule</a></code> | <code>string</code> | [Write] connect:UpdateContactSchedule. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateDataTableAttribute">UpdateDataTableAttribute</a></code> | <code>string</code> | [Write] connect:UpdateDataTableAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateDataTableMetadata">UpdateDataTableMetadata</a></code> | <code>string</code> | [Write] connect:UpdateDataTableMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateDataTablePrimaryValues">UpdateDataTablePrimaryValues</a></code> | <code>string</code> | [Write] connect:UpdateDataTablePrimaryValues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateEmailAddressMetadata">UpdateEmailAddressMetadata</a></code> | <code>string</code> | [Write] connect:UpdateEmailAddressMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateEvaluationForm">UpdateEvaluationForm</a></code> | <code>string</code> | [Write] connect:UpdateEvaluationForm. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateHoursOfOperation">UpdateHoursOfOperation</a></code> | <code>string</code> | [Write] connect:UpdateHoursOfOperation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateHoursOfOperationOverride">UpdateHoursOfOperationOverride</a></code> | <code>string</code> | [Write] connect:UpdateHoursOfOperationOverride. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateInstanceAttribute">UpdateInstanceAttribute</a></code> | <code>string</code> | [Write] connect:UpdateInstanceAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateInstanceStorageConfig">UpdateInstanceStorageConfig</a></code> | <code>string</code> | [Write] connect:UpdateInstanceStorageConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateMetricContent">UpdateMetricContent</a></code> | <code>string</code> | [Write] connect:UpdateMetricContent. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateMetricMetadata">UpdateMetricMetadata</a></code> | <code>string</code> | [Write] connect:UpdateMetricMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateNotificationContent">UpdateNotificationContent</a></code> | <code>string</code> | [Write] connect:UpdateNotificationContent. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateParticipantAuthentication">UpdateParticipantAuthentication</a></code> | <code>string</code> | [Write] connect:UpdateParticipantAuthentication. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateParticipantRoleConfig">UpdateParticipantRoleConfig</a></code> | <code>string</code> | [Write] connect:UpdateParticipantRoleConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdatePhoneNumber">UpdatePhoneNumber</a></code> | <code>string</code> | [Write] connect:UpdatePhoneNumber. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdatePhoneNumberMetadata">UpdatePhoneNumberMetadata</a></code> | <code>string</code> | [Write] connect:UpdatePhoneNumberMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdatePredefinedAttribute">UpdatePredefinedAttribute</a></code> | <code>string</code> | [Write] connect:UpdatePredefinedAttribute. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdatePrompt">UpdatePrompt</a></code> | <code>string</code> | [Write] connect:UpdatePrompt. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueHoursOfOperation">UpdateQueueHoursOfOperation</a></code> | <code>string</code> | [Write] connect:UpdateQueueHoursOfOperation. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueMaxContacts">UpdateQueueMaxContacts</a></code> | <code>string</code> | [Write] connect:UpdateQueueMaxContacts. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueName">UpdateQueueName</a></code> | <code>string</code> | [Write] connect:UpdateQueueName. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueOutboundCallerConfig">UpdateQueueOutboundCallerConfig</a></code> | <code>string</code> | [Write] connect:UpdateQueueOutboundCallerConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueOutboundEmailConfig">UpdateQueueOutboundEmailConfig</a></code> | <code>string</code> | [Write] connect:UpdateQueueOutboundEmailConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueStatus">UpdateQueueStatus</a></code> | <code>string</code> | [Write] connect:UpdateQueueStatus. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateQuickConnectConfig">UpdateQuickConnectConfig</a></code> | <code>string</code> | [Write] connect:UpdateQuickConnectConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateQuickConnectName">UpdateQuickConnectName</a></code> | <code>string</code> | [Write] connect:UpdateQuickConnectName. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileAgentAvailabilityTimer">UpdateRoutingProfileAgentAvailabilityTimer</a></code> | <code>string</code> | [Write] connect:UpdateRoutingProfileAgentAvailabilityTimer. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileConcurrency">UpdateRoutingProfileConcurrency</a></code> | <code>string</code> | [Write] connect:UpdateRoutingProfileConcurrency. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileDefaultOutboundQueue">UpdateRoutingProfileDefaultOutboundQueue</a></code> | <code>string</code> | [Write] connect:UpdateRoutingProfileDefaultOutboundQueue. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileName">UpdateRoutingProfileName</a></code> | <code>string</code> | [Write] connect:UpdateRoutingProfileName. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileQueues">UpdateRoutingProfileQueues</a></code> | <code>string</code> | [Write] connect:UpdateRoutingProfileQueues. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateRule">UpdateRule</a></code> | <code>string</code> | [Write] connect:UpdateRule. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateSecurityProfile">UpdateSecurityProfile</a></code> | <code>string</code> | [Write] connect:UpdateSecurityProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateTaskTemplate">UpdateTaskTemplate</a></code> | <code>string</code> | [Write] connect:UpdateTaskTemplate. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateTrafficDistribution">UpdateTrafficDistribution</a></code> | <code>string</code> | [Write] connect:UpdateTrafficDistribution. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserHierarchy">UpdateUserHierarchy</a></code> | <code>string</code> | [Write] connect:UpdateUserHierarchy. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserHierarchyGroupName">UpdateUserHierarchyGroupName</a></code> | <code>string</code> | [Write] connect:UpdateUserHierarchyGroupName. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserHierarchyStructure">UpdateUserHierarchyStructure</a></code> | <code>string</code> | [Write] connect:UpdateUserHierarchyStructure. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserIdentityInfo">UpdateUserIdentityInfo</a></code> | <code>string</code> | [Write] connect:UpdateUserIdentityInfo. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserNotificationStatus">UpdateUserNotificationStatus</a></code> | <code>string</code> | [Write] connect:UpdateUserNotificationStatus. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserPhoneConfig">UpdateUserPhoneConfig</a></code> | <code>string</code> | [Write] connect:UpdateUserPhoneConfig. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserProficiencies">UpdateUserProficiencies</a></code> | <code>string</code> | [Write] connect:UpdateUserProficiencies. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserRoutingProfile">UpdateUserRoutingProfile</a></code> | <code>string</code> | [Write] connect:UpdateUserRoutingProfile. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateUserSecurityProfiles">UpdateUserSecurityProfiles</a></code> | <code>string</code> | [Write] connect:UpdateUserSecurityProfiles. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateViewContent">UpdateViewContent</a></code> | <code>string</code> | [Write] connect:UpdateViewContent. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateViewMetadata">UpdateViewMetadata</a></code> | <code>string</code> | [Write] connect:UpdateViewMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateWorkspaceMetadata">UpdateWorkspaceMetadata</a></code> | <code>string</code> | [Write] connect:UpdateWorkspaceMetadata. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateWorkspacePage">UpdateWorkspacePage</a></code> | <code>string</code> | [Write] connect:UpdateWorkspacePage. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateWorkspaceTheme">UpdateWorkspaceTheme</a></code> | <code>string</code> | [Write] connect:UpdateWorkspaceTheme. |
| <code><a href="#@cdk_utils/iam.connect.ConnectActions.property.UpdateWorkspaceVisibility">UpdateWorkspaceVisibility</a></code> | <code>string</code> | [Write] connect:UpdateWorkspaceVisibility. |

---

##### `actionGetAttachedFile`<sup>Required</sup> <a name="actionGetAttachedFile" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetAttachedFile"></a>

```typescript
public readonly actionGetAttachedFile: string;
```

- *Type:* string

[Read] connect:GetAttachedFile.

---

##### `actionGetContactAttributes`<sup>Required</sup> <a name="actionGetContactAttributes" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetContactAttributes"></a>

```typescript
public readonly actionGetContactAttributes: string;
```

- *Type:* string

[Read] connect:GetContactAttributes.

---

##### `actionGetContactMetrics`<sup>Required</sup> <a name="actionGetContactMetrics" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetContactMetrics"></a>

```typescript
public readonly actionGetContactMetrics: string;
```

- *Type:* string

[Read] connect:GetContactMetrics.

---

##### `actionGetCurrentMetricData`<sup>Required</sup> <a name="actionGetCurrentMetricData" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetCurrentMetricData"></a>

```typescript
public readonly actionGetCurrentMetricData: string;
```

- *Type:* string

[Read] connect:GetCurrentMetricData.

---

##### `actionGetCurrentUserData`<sup>Required</sup> <a name="actionGetCurrentUserData" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetCurrentUserData"></a>

```typescript
public readonly actionGetCurrentUserData: string;
```

- *Type:* string

[Read] connect:GetCurrentUserData.

---

##### `actionGetEffectiveHoursOfOperations`<sup>Required</sup> <a name="actionGetEffectiveHoursOfOperations" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetEffectiveHoursOfOperations"></a>

```typescript
public readonly actionGetEffectiveHoursOfOperations: string;
```

- *Type:* string

[Read] connect:GetEffectiveHoursOfOperations.

---

##### `actionGetEvaluationFormValidation`<sup>Required</sup> <a name="actionGetEvaluationFormValidation" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetEvaluationFormValidation"></a>

```typescript
public readonly actionGetEvaluationFormValidation: string;
```

- *Type:* string

[Read] connect:GetEvaluationFormValidation.

---

##### `actionGetFederationToken`<sup>Required</sup> <a name="actionGetFederationToken" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetFederationToken"></a>

```typescript
public readonly actionGetFederationToken: string;
```

- *Type:* string

[Read] connect:GetFederationToken.

---

##### `actionGetFlowAssociation`<sup>Required</sup> <a name="actionGetFlowAssociation" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetFlowAssociation"></a>

```typescript
public readonly actionGetFlowAssociation: string;
```

- *Type:* string

[Read] connect:GetFlowAssociation.

---

##### `actionGetMetricData`<sup>Required</sup> <a name="actionGetMetricData" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetMetricData"></a>

```typescript
public readonly actionGetMetricData: string;
```

- *Type:* string

[Read] connect:GetMetricData.

---

##### `actionGetMetricDataV2`<sup>Required</sup> <a name="actionGetMetricDataV2" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetMetricDataV2"></a>

```typescript
public readonly actionGetMetricDataV2: string;
```

- *Type:* string

[Read] connect:GetMetricDataV2.

---

##### `actionGetPromptFile`<sup>Required</sup> <a name="actionGetPromptFile" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetPromptFile"></a>

```typescript
public readonly actionGetPromptFile: string;
```

- *Type:* string

[Read] connect:GetPromptFile.

---

##### `actionGetTaskTemplate`<sup>Required</sup> <a name="actionGetTaskTemplate" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetTaskTemplate"></a>

```typescript
public readonly actionGetTaskTemplate: string;
```

- *Type:* string

[Read] connect:GetTaskTemplate.

---

##### `actionGetTrafficDistribution`<sup>Required</sup> <a name="actionGetTrafficDistribution" id="@cdk_utils/iam.connect.ConnectActions.property.actionGetTrafficDistribution"></a>

```typescript
public readonly actionGetTrafficDistribution: string;
```

- *Type:* string

[List] connect:GetTrafficDistribution.

---

##### `ActivateEvaluationForm`<sup>Required</sup> <a name="ActivateEvaluationForm" id="@cdk_utils/iam.connect.ConnectActions.property.ActivateEvaluationForm"></a>

```typescript
public readonly ActivateEvaluationForm: string;
```

- *Type:* string

[Write] connect:ActivateEvaluationForm.

---

##### `AdminGetEmergencyAccessToken`<sup>Required</sup> <a name="AdminGetEmergencyAccessToken" id="@cdk_utils/iam.connect.ConnectActions.property.AdminGetEmergencyAccessToken"></a>

```typescript
public readonly AdminGetEmergencyAccessToken: string;
```

- *Type:* string

[Write] connect:AdminGetEmergencyAccessToken.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.connect.ConnectActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.connect.ConnectActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.connect.ConnectActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.connect.ConnectActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.connect.ConnectActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAnalyticsDataSet`<sup>Required</sup> <a name="AssociateAnalyticsDataSet" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateAnalyticsDataSet"></a>

```typescript
public readonly AssociateAnalyticsDataSet: string;
```

- *Type:* string

[Write] connect:AssociateAnalyticsDataSet.

---

##### `AssociateApprovedOrigin`<sup>Required</sup> <a name="AssociateApprovedOrigin" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateApprovedOrigin"></a>

```typescript
public readonly AssociateApprovedOrigin: string;
```

- *Type:* string

[Write] connect:AssociateApprovedOrigin.

---

##### `AssociateBot`<sup>Required</sup> <a name="AssociateBot" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateBot"></a>

```typescript
public readonly AssociateBot: string;
```

- *Type:* string

[Write] connect:AssociateBot.

---

##### `AssociateContactWithUser`<sup>Required</sup> <a name="AssociateContactWithUser" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateContactWithUser"></a>

```typescript
public readonly AssociateContactWithUser: string;
```

- *Type:* string

[Write] connect:AssociateContactWithUser.

---

##### `AssociateCustomerProfilesDomain`<sup>Required</sup> <a name="AssociateCustomerProfilesDomain" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateCustomerProfilesDomain"></a>

```typescript
public readonly AssociateCustomerProfilesDomain: string;
```

- *Type:* string

[Write] connect:AssociateCustomerProfilesDomain.

---

##### `AssociateDefaultVocabulary`<sup>Required</sup> <a name="AssociateDefaultVocabulary" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateDefaultVocabulary"></a>

```typescript
public readonly AssociateDefaultVocabulary: string;
```

- *Type:* string

[Write] connect:AssociateDefaultVocabulary.

---

##### `AssociateEmailAddressAlias`<sup>Required</sup> <a name="AssociateEmailAddressAlias" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateEmailAddressAlias"></a>

```typescript
public readonly AssociateEmailAddressAlias: string;
```

- *Type:* string

[Write] connect:AssociateEmailAddressAlias.

---

##### `AssociateFlow`<sup>Required</sup> <a name="AssociateFlow" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateFlow"></a>

```typescript
public readonly AssociateFlow: string;
```

- *Type:* string

[Write] connect:AssociateFlow.

---

##### `AssociateInstanceStorageConfig`<sup>Required</sup> <a name="AssociateInstanceStorageConfig" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateInstanceStorageConfig"></a>

```typescript
public readonly AssociateInstanceStorageConfig: string;
```

- *Type:* string

[Write] connect:AssociateInstanceStorageConfig.

---

##### `AssociateLambdaFunction`<sup>Required</sup> <a name="AssociateLambdaFunction" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateLambdaFunction"></a>

```typescript
public readonly AssociateLambdaFunction: string;
```

- *Type:* string

[Write] connect:AssociateLambdaFunction.

---

##### `AssociateLexBot`<sup>Required</sup> <a name="AssociateLexBot" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateLexBot"></a>

```typescript
public readonly AssociateLexBot: string;
```

- *Type:* string

[Write] connect:AssociateLexBot.

---

##### `AssociatePhoneNumberContactFlow`<sup>Required</sup> <a name="AssociatePhoneNumberContactFlow" id="@cdk_utils/iam.connect.ConnectActions.property.AssociatePhoneNumberContactFlow"></a>

```typescript
public readonly AssociatePhoneNumberContactFlow: string;
```

- *Type:* string

[Write] connect:AssociatePhoneNumberContactFlow.

---

##### `AssociateQueueEmailAddresses`<sup>Required</sup> <a name="AssociateQueueEmailAddresses" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateQueueEmailAddresses"></a>

```typescript
public readonly AssociateQueueEmailAddresses: string;
```

- *Type:* string

[Write] connect:AssociateQueueEmailAddresses.

---

##### `AssociateQueueQuickConnects`<sup>Required</sup> <a name="AssociateQueueQuickConnects" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateQueueQuickConnects"></a>

```typescript
public readonly AssociateQueueQuickConnects: string;
```

- *Type:* string

[Write] connect:AssociateQueueQuickConnects.

---

##### `AssociateRoutingProfileQueues`<sup>Required</sup> <a name="AssociateRoutingProfileQueues" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateRoutingProfileQueues"></a>

```typescript
public readonly AssociateRoutingProfileQueues: string;
```

- *Type:* string

[Write] connect:AssociateRoutingProfileQueues.

---

##### `AssociateSecurityKey`<sup>Required</sup> <a name="AssociateSecurityKey" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateSecurityKey"></a>

```typescript
public readonly AssociateSecurityKey: string;
```

- *Type:* string

[Write] connect:AssociateSecurityKey.

---

##### `AssociateSecurityProfiles`<sup>Required</sup> <a name="AssociateSecurityProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateSecurityProfiles"></a>

```typescript
public readonly AssociateSecurityProfiles: string;
```

- *Type:* string

[Write] connect:AssociateSecurityProfiles.

---

##### `AssociateTrafficDistributionGroupUser`<sup>Required</sup> <a name="AssociateTrafficDistributionGroupUser" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateTrafficDistributionGroupUser"></a>

```typescript
public readonly AssociateTrafficDistributionGroupUser: string;
```

- *Type:* string

[Write] connect:AssociateTrafficDistributionGroupUser.

---

##### `AssociateUserProficiencies`<sup>Required</sup> <a name="AssociateUserProficiencies" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateUserProficiencies"></a>

```typescript
public readonly AssociateUserProficiencies: string;
```

- *Type:* string

[Write] connect:AssociateUserProficiencies.

---

##### `AssociateWorkspace`<sup>Required</sup> <a name="AssociateWorkspace" id="@cdk_utils/iam.connect.ConnectActions.property.AssociateWorkspace"></a>

```typescript
public readonly AssociateWorkspace: string;
```

- *Type:* string

[Write] connect:AssociateWorkspace.

---

##### `BatchAssociateAnalyticsDataSet`<sup>Required</sup> <a name="BatchAssociateAnalyticsDataSet" id="@cdk_utils/iam.connect.ConnectActions.property.BatchAssociateAnalyticsDataSet"></a>

```typescript
public readonly BatchAssociateAnalyticsDataSet: string;
```

- *Type:* string

[Write] connect:BatchAssociateAnalyticsDataSet.

---

##### `BatchCreateDataTableValue`<sup>Required</sup> <a name="BatchCreateDataTableValue" id="@cdk_utils/iam.connect.ConnectActions.property.BatchCreateDataTableValue"></a>

```typescript
public readonly BatchCreateDataTableValue: string;
```

- *Type:* string

[Write] connect:BatchCreateDataTableValue.

---

##### `BatchDeleteDataTableValue`<sup>Required</sup> <a name="BatchDeleteDataTableValue" id="@cdk_utils/iam.connect.ConnectActions.property.BatchDeleteDataTableValue"></a>

```typescript
public readonly BatchDeleteDataTableValue: string;
```

- *Type:* string

[Write] connect:BatchDeleteDataTableValue.

---

##### `BatchDescribeDataTableValue`<sup>Required</sup> <a name="BatchDescribeDataTableValue" id="@cdk_utils/iam.connect.ConnectActions.property.BatchDescribeDataTableValue"></a>

```typescript
public readonly BatchDescribeDataTableValue: string;
```

- *Type:* string

[Read] connect:BatchDescribeDataTableValue.

---

##### `BatchDisassociateAnalyticsDataSet`<sup>Required</sup> <a name="BatchDisassociateAnalyticsDataSet" id="@cdk_utils/iam.connect.ConnectActions.property.BatchDisassociateAnalyticsDataSet"></a>

```typescript
public readonly BatchDisassociateAnalyticsDataSet: string;
```

- *Type:* string

[Write] connect:BatchDisassociateAnalyticsDataSet.

---

##### `BatchGetAttachedFileMetadata`<sup>Required</sup> <a name="BatchGetAttachedFileMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.BatchGetAttachedFileMetadata"></a>

```typescript
public readonly BatchGetAttachedFileMetadata: string;
```

- *Type:* string

[Read] connect:BatchGetAttachedFileMetadata.

---

##### `BatchGetFlowAssociation`<sup>Required</sup> <a name="BatchGetFlowAssociation" id="@cdk_utils/iam.connect.ConnectActions.property.BatchGetFlowAssociation"></a>

```typescript
public readonly BatchGetFlowAssociation: string;
```

- *Type:* string

[List] connect:BatchGetFlowAssociation.

---

##### `BatchPutContact`<sup>Required</sup> <a name="BatchPutContact" id="@cdk_utils/iam.connect.ConnectActions.property.BatchPutContact"></a>

```typescript
public readonly BatchPutContact: string;
```

- *Type:* string

[Write] connect:BatchPutContact.

---

##### `BatchUpdateDataTableValue`<sup>Required</sup> <a name="BatchUpdateDataTableValue" id="@cdk_utils/iam.connect.ConnectActions.property.BatchUpdateDataTableValue"></a>

```typescript
public readonly BatchUpdateDataTableValue: string;
```

- *Type:* string

[Write] connect:BatchUpdateDataTableValue.

---

##### `ClaimPhoneNumber`<sup>Required</sup> <a name="ClaimPhoneNumber" id="@cdk_utils/iam.connect.ConnectActions.property.ClaimPhoneNumber"></a>

```typescript
public readonly ClaimPhoneNumber: string;
```

- *Type:* string

[Write] connect:ClaimPhoneNumber.

---

##### `CompleteAttachedFileUpload`<sup>Required</sup> <a name="CompleteAttachedFileUpload" id="@cdk_utils/iam.connect.ConnectActions.property.CompleteAttachedFileUpload"></a>

```typescript
public readonly CompleteAttachedFileUpload: string;
```

- *Type:* string

[Write] connect:CompleteAttachedFileUpload.

---

##### `CreateAgentStatus`<sup>Required</sup> <a name="CreateAgentStatus" id="@cdk_utils/iam.connect.ConnectActions.property.CreateAgentStatus"></a>

```typescript
public readonly CreateAgentStatus: string;
```

- *Type:* string

[Write] connect:CreateAgentStatus.

---

##### `CreateAttachedFile`<sup>Required</sup> <a name="CreateAttachedFile" id="@cdk_utils/iam.connect.ConnectActions.property.CreateAttachedFile"></a>

```typescript
public readonly CreateAttachedFile: string;
```

- *Type:* string

[Write] connect:CreateAttachedFile.

---

##### `CreateAuthenticationProfile`<sup>Required</sup> <a name="CreateAuthenticationProfile" id="@cdk_utils/iam.connect.ConnectActions.property.CreateAuthenticationProfile"></a>

```typescript
public readonly CreateAuthenticationProfile: string;
```

- *Type:* string

[Write] connect:CreateAuthenticationProfile.

---

##### `CreateContact`<sup>Required</sup> <a name="CreateContact" id="@cdk_utils/iam.connect.ConnectActions.property.CreateContact"></a>

```typescript
public readonly CreateContact: string;
```

- *Type:* string

[Write] connect:CreateContact.

---

##### `CreateContactFlow`<sup>Required</sup> <a name="CreateContactFlow" id="@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlow"></a>

```typescript
public readonly CreateContactFlow: string;
```

- *Type:* string

[Write] connect:CreateContactFlow.

---

##### `CreateContactFlowModule`<sup>Required</sup> <a name="CreateContactFlowModule" id="@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlowModule"></a>

```typescript
public readonly CreateContactFlowModule: string;
```

- *Type:* string

[Write] connect:CreateContactFlowModule.

---

##### `CreateContactFlowModuleAlias`<sup>Required</sup> <a name="CreateContactFlowModuleAlias" id="@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlowModuleAlias"></a>

```typescript
public readonly CreateContactFlowModuleAlias: string;
```

- *Type:* string

[Write] connect:CreateContactFlowModuleAlias.

---

##### `CreateContactFlowModuleVersion`<sup>Required</sup> <a name="CreateContactFlowModuleVersion" id="@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlowModuleVersion"></a>

```typescript
public readonly CreateContactFlowModuleVersion: string;
```

- *Type:* string

[Write] connect:CreateContactFlowModuleVersion.

---

##### `CreateContactFlowVersion`<sup>Required</sup> <a name="CreateContactFlowVersion" id="@cdk_utils/iam.connect.ConnectActions.property.CreateContactFlowVersion"></a>

```typescript
public readonly CreateContactFlowVersion: string;
```

- *Type:* string

[Write] connect:CreateContactFlowVersion.

---

##### `CreateDataTable`<sup>Required</sup> <a name="CreateDataTable" id="@cdk_utils/iam.connect.ConnectActions.property.CreateDataTable"></a>

```typescript
public readonly CreateDataTable: string;
```

- *Type:* string

[Write] connect:CreateDataTable.

---

##### `CreateDataTableAttribute`<sup>Required</sup> <a name="CreateDataTableAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.CreateDataTableAttribute"></a>

```typescript
public readonly CreateDataTableAttribute: string;
```

- *Type:* string

[Write] connect:CreateDataTableAttribute.

---

##### `CreateEmailAddress`<sup>Required</sup> <a name="CreateEmailAddress" id="@cdk_utils/iam.connect.ConnectActions.property.CreateEmailAddress"></a>

```typescript
public readonly CreateEmailAddress: string;
```

- *Type:* string

[Write] connect:CreateEmailAddress.

---

##### `CreateEvaluationForm`<sup>Required</sup> <a name="CreateEvaluationForm" id="@cdk_utils/iam.connect.ConnectActions.property.CreateEvaluationForm"></a>

```typescript
public readonly CreateEvaluationForm: string;
```

- *Type:* string

[Write] connect:CreateEvaluationForm.

---

##### `CreateHoursOfOperation`<sup>Required</sup> <a name="CreateHoursOfOperation" id="@cdk_utils/iam.connect.ConnectActions.property.CreateHoursOfOperation"></a>

```typescript
public readonly CreateHoursOfOperation: string;
```

- *Type:* string

[Write] connect:CreateHoursOfOperation.

---

##### `CreateHoursOfOperationOverride`<sup>Required</sup> <a name="CreateHoursOfOperationOverride" id="@cdk_utils/iam.connect.ConnectActions.property.CreateHoursOfOperationOverride"></a>

```typescript
public readonly CreateHoursOfOperationOverride: string;
```

- *Type:* string

[Write] connect:CreateHoursOfOperationOverride.

---

##### `CreateInstance`<sup>Required</sup> <a name="CreateInstance" id="@cdk_utils/iam.connect.ConnectActions.property.CreateInstance"></a>

```typescript
public readonly CreateInstance: string;
```

- *Type:* string

[Write] connect:CreateInstance.

---

##### `CreateIntegrationAssociation`<sup>Required</sup> <a name="CreateIntegrationAssociation" id="@cdk_utils/iam.connect.ConnectActions.property.CreateIntegrationAssociation"></a>

```typescript
public readonly CreateIntegrationAssociation: string;
```

- *Type:* string

[Write] connect:CreateIntegrationAssociation.

---

##### `CreateMetric`<sup>Required</sup> <a name="CreateMetric" id="@cdk_utils/iam.connect.ConnectActions.property.CreateMetric"></a>

```typescript
public readonly CreateMetric: string;
```

- *Type:* string

[Write] connect:CreateMetric.

---

##### `CreateNotification`<sup>Required</sup> <a name="CreateNotification" id="@cdk_utils/iam.connect.ConnectActions.property.CreateNotification"></a>

```typescript
public readonly CreateNotification: string;
```

- *Type:* string

[Write] connect:CreateNotification.

---

##### `CreateParticipant`<sup>Required</sup> <a name="CreateParticipant" id="@cdk_utils/iam.connect.ConnectActions.property.CreateParticipant"></a>

```typescript
public readonly CreateParticipant: string;
```

- *Type:* string

[Write] connect:CreateParticipant.

---

##### `CreatePersistentContactAssociation`<sup>Required</sup> <a name="CreatePersistentContactAssociation" id="@cdk_utils/iam.connect.ConnectActions.property.CreatePersistentContactAssociation"></a>

```typescript
public readonly CreatePersistentContactAssociation: string;
```

- *Type:* string

[Write] connect:CreatePersistentContactAssociation.

---

##### `CreatePredefinedAttribute`<sup>Required</sup> <a name="CreatePredefinedAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.CreatePredefinedAttribute"></a>

```typescript
public readonly CreatePredefinedAttribute: string;
```

- *Type:* string

[Write] connect:CreatePredefinedAttribute.

---

##### `CreatePrompt`<sup>Required</sup> <a name="CreatePrompt" id="@cdk_utils/iam.connect.ConnectActions.property.CreatePrompt"></a>

```typescript
public readonly CreatePrompt: string;
```

- *Type:* string

[Write] connect:CreatePrompt.

---

##### `CreatePushNotificationRegistration`<sup>Required</sup> <a name="CreatePushNotificationRegistration" id="@cdk_utils/iam.connect.ConnectActions.property.CreatePushNotificationRegistration"></a>

```typescript
public readonly CreatePushNotificationRegistration: string;
```

- *Type:* string

[Write] connect:CreatePushNotificationRegistration.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.connect.ConnectActions.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string;
```

- *Type:* string

[Write] connect:CreateQueue.

---

##### `CreateQuickConnect`<sup>Required</sup> <a name="CreateQuickConnect" id="@cdk_utils/iam.connect.ConnectActions.property.CreateQuickConnect"></a>

```typescript
public readonly CreateQuickConnect: string;
```

- *Type:* string

[Write] connect:CreateQuickConnect.

---

##### `CreateRoutingProfile`<sup>Required</sup> <a name="CreateRoutingProfile" id="@cdk_utils/iam.connect.ConnectActions.property.CreateRoutingProfile"></a>

```typescript
public readonly CreateRoutingProfile: string;
```

- *Type:* string

[Write] connect:CreateRoutingProfile.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.connect.ConnectActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] connect:CreateRule.

---

##### `CreateSecurityProfile`<sup>Required</sup> <a name="CreateSecurityProfile" id="@cdk_utils/iam.connect.ConnectActions.property.CreateSecurityProfile"></a>

```typescript
public readonly CreateSecurityProfile: string;
```

- *Type:* string

[Write] connect:CreateSecurityProfile.

---

##### `CreateTaskTemplate`<sup>Required</sup> <a name="CreateTaskTemplate" id="@cdk_utils/iam.connect.ConnectActions.property.CreateTaskTemplate"></a>

```typescript
public readonly CreateTaskTemplate: string;
```

- *Type:* string

[Write] connect:CreateTaskTemplate.

---

##### `CreateTrafficDistributionGroup`<sup>Required</sup> <a name="CreateTrafficDistributionGroup" id="@cdk_utils/iam.connect.ConnectActions.property.CreateTrafficDistributionGroup"></a>

```typescript
public readonly CreateTrafficDistributionGroup: string;
```

- *Type:* string

[Write] connect:CreateTrafficDistributionGroup.

---

##### `CreateUseCase`<sup>Required</sup> <a name="CreateUseCase" id="@cdk_utils/iam.connect.ConnectActions.property.CreateUseCase"></a>

```typescript
public readonly CreateUseCase: string;
```

- *Type:* string

[Write] connect:CreateUseCase.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.connect.ConnectActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] connect:CreateUser.

---

##### `CreateUserHierarchyGroup`<sup>Required</sup> <a name="CreateUserHierarchyGroup" id="@cdk_utils/iam.connect.ConnectActions.property.CreateUserHierarchyGroup"></a>

```typescript
public readonly CreateUserHierarchyGroup: string;
```

- *Type:* string

[Write] connect:CreateUserHierarchyGroup.

---

##### `CreateView`<sup>Required</sup> <a name="CreateView" id="@cdk_utils/iam.connect.ConnectActions.property.CreateView"></a>

```typescript
public readonly CreateView: string;
```

- *Type:* string

[Write] connect:CreateView.

---

##### `CreateViewVersion`<sup>Required</sup> <a name="CreateViewVersion" id="@cdk_utils/iam.connect.ConnectActions.property.CreateViewVersion"></a>

```typescript
public readonly CreateViewVersion: string;
```

- *Type:* string

[Write] connect:CreateViewVersion.

---

##### `CreateVocabulary`<sup>Required</sup> <a name="CreateVocabulary" id="@cdk_utils/iam.connect.ConnectActions.property.CreateVocabulary"></a>

```typescript
public readonly CreateVocabulary: string;
```

- *Type:* string

[Write] connect:CreateVocabulary.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.connect.ConnectActions.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string;
```

- *Type:* string

[Write] connect:CreateWorkspace.

---

##### `CreateWorkspacePage`<sup>Required</sup> <a name="CreateWorkspacePage" id="@cdk_utils/iam.connect.ConnectActions.property.CreateWorkspacePage"></a>

```typescript
public readonly CreateWorkspacePage: string;
```

- *Type:* string

[Write] connect:CreateWorkspacePage.

---

##### `DeactivateEvaluationForm`<sup>Required</sup> <a name="DeactivateEvaluationForm" id="@cdk_utils/iam.connect.ConnectActions.property.DeactivateEvaluationForm"></a>

```typescript
public readonly DeactivateEvaluationForm: string;
```

- *Type:* string

[Write] connect:DeactivateEvaluationForm.

---

##### `DeleteAttachedFile`<sup>Required</sup> <a name="DeleteAttachedFile" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteAttachedFile"></a>

```typescript
public readonly DeleteAttachedFile: string;
```

- *Type:* string

[Write] connect:DeleteAttachedFile.

---

##### `DeleteContactEvaluation`<sup>Required</sup> <a name="DeleteContactEvaluation" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteContactEvaluation"></a>

```typescript
public readonly DeleteContactEvaluation: string;
```

- *Type:* string

[Write] connect:DeleteContactEvaluation.

---

##### `DeleteContactFlow`<sup>Required</sup> <a name="DeleteContactFlow" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlow"></a>

```typescript
public readonly DeleteContactFlow: string;
```

- *Type:* string

[Write] connect:DeleteContactFlow.

---

##### `DeleteContactFlowModule`<sup>Required</sup> <a name="DeleteContactFlowModule" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlowModule"></a>

```typescript
public readonly DeleteContactFlowModule: string;
```

- *Type:* string

[Write] connect:DeleteContactFlowModule.

---

##### `DeleteContactFlowModuleAlias`<sup>Required</sup> <a name="DeleteContactFlowModuleAlias" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlowModuleAlias"></a>

```typescript
public readonly DeleteContactFlowModuleAlias: string;
```

- *Type:* string

[Write] connect:DeleteContactFlowModuleAlias.

---

##### `DeleteContactFlowModuleVersion`<sup>Required</sup> <a name="DeleteContactFlowModuleVersion" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlowModuleVersion"></a>

```typescript
public readonly DeleteContactFlowModuleVersion: string;
```

- *Type:* string

[Write] connect:DeleteContactFlowModuleVersion.

---

##### `DeleteContactFlowVersion`<sup>Required</sup> <a name="DeleteContactFlowVersion" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteContactFlowVersion"></a>

```typescript
public readonly DeleteContactFlowVersion: string;
```

- *Type:* string

[Write] connect:DeleteContactFlowVersion.

---

##### `DeleteDataTable`<sup>Required</sup> <a name="DeleteDataTable" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteDataTable"></a>

```typescript
public readonly DeleteDataTable: string;
```

- *Type:* string

[Write] connect:DeleteDataTable.

---

##### `DeleteDataTableAttribute`<sup>Required</sup> <a name="DeleteDataTableAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteDataTableAttribute"></a>

```typescript
public readonly DeleteDataTableAttribute: string;
```

- *Type:* string

[Write] connect:DeleteDataTableAttribute.

---

##### `DeleteEmailAddress`<sup>Required</sup> <a name="DeleteEmailAddress" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteEmailAddress"></a>

```typescript
public readonly DeleteEmailAddress: string;
```

- *Type:* string

[Write] connect:DeleteEmailAddress.

---

##### `DeleteEvaluationForm`<sup>Required</sup> <a name="DeleteEvaluationForm" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteEvaluationForm"></a>

```typescript
public readonly DeleteEvaluationForm: string;
```

- *Type:* string

[Write] connect:DeleteEvaluationForm.

---

##### `DeleteHoursOfOperation`<sup>Required</sup> <a name="DeleteHoursOfOperation" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteHoursOfOperation"></a>

```typescript
public readonly DeleteHoursOfOperation: string;
```

- *Type:* string

[Write] connect:DeleteHoursOfOperation.

---

##### `DeleteHoursOfOperationOverride`<sup>Required</sup> <a name="DeleteHoursOfOperationOverride" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteHoursOfOperationOverride"></a>

```typescript
public readonly DeleteHoursOfOperationOverride: string;
```

- *Type:* string

[Write] connect:DeleteHoursOfOperationOverride.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string;
```

- *Type:* string

[Write] connect:DeleteInstance.

---

##### `DeleteIntegrationAssociation`<sup>Required</sup> <a name="DeleteIntegrationAssociation" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteIntegrationAssociation"></a>

```typescript
public readonly DeleteIntegrationAssociation: string;
```

- *Type:* string

[Write] connect:DeleteIntegrationAssociation.

---

##### `DeleteMetric`<sup>Required</sup> <a name="DeleteMetric" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteMetric"></a>

```typescript
public readonly DeleteMetric: string;
```

- *Type:* string

[Write] connect:DeleteMetric.

---

##### `DeleteNotification`<sup>Required</sup> <a name="DeleteNotification" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteNotification"></a>

```typescript
public readonly DeleteNotification: string;
```

- *Type:* string

[Write] connect:DeleteNotification.

---

##### `DeletePredefinedAttribute`<sup>Required</sup> <a name="DeletePredefinedAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.DeletePredefinedAttribute"></a>

```typescript
public readonly DeletePredefinedAttribute: string;
```

- *Type:* string

[Write] connect:DeletePredefinedAttribute.

---

##### `DeletePrompt`<sup>Required</sup> <a name="DeletePrompt" id="@cdk_utils/iam.connect.ConnectActions.property.DeletePrompt"></a>

```typescript
public readonly DeletePrompt: string;
```

- *Type:* string

[Write] connect:DeletePrompt.

---

##### `DeletePushNotificationRegistration`<sup>Required</sup> <a name="DeletePushNotificationRegistration" id="@cdk_utils/iam.connect.ConnectActions.property.DeletePushNotificationRegistration"></a>

```typescript
public readonly DeletePushNotificationRegistration: string;
```

- *Type:* string

[Write] connect:DeletePushNotificationRegistration.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string;
```

- *Type:* string

[Write] connect:DeleteQueue.

---

##### `DeleteQuickConnect`<sup>Required</sup> <a name="DeleteQuickConnect" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteQuickConnect"></a>

```typescript
public readonly DeleteQuickConnect: string;
```

- *Type:* string

[Write] connect:DeleteQuickConnect.

---

##### `DeleteRoutingProfile`<sup>Required</sup> <a name="DeleteRoutingProfile" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteRoutingProfile"></a>

```typescript
public readonly DeleteRoutingProfile: string;
```

- *Type:* string

[Write] connect:DeleteRoutingProfile.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] connect:DeleteRule.

---

##### `DeleteSecurityProfile`<sup>Required</sup> <a name="DeleteSecurityProfile" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteSecurityProfile"></a>

```typescript
public readonly DeleteSecurityProfile: string;
```

- *Type:* string

[Write] connect:DeleteSecurityProfile.

---

##### `DeleteTaskTemplate`<sup>Required</sup> <a name="DeleteTaskTemplate" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteTaskTemplate"></a>

```typescript
public readonly DeleteTaskTemplate: string;
```

- *Type:* string

[Write] connect:DeleteTaskTemplate.

---

##### `DeleteTrafficDistributionGroup`<sup>Required</sup> <a name="DeleteTrafficDistributionGroup" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteTrafficDistributionGroup"></a>

```typescript
public readonly DeleteTrafficDistributionGroup: string;
```

- *Type:* string

[Write] connect:DeleteTrafficDistributionGroup.

---

##### `DeleteUseCase`<sup>Required</sup> <a name="DeleteUseCase" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteUseCase"></a>

```typescript
public readonly DeleteUseCase: string;
```

- *Type:* string

[Write] connect:DeleteUseCase.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] connect:DeleteUser.

---

##### `DeleteUserHierarchyGroup`<sup>Required</sup> <a name="DeleteUserHierarchyGroup" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteUserHierarchyGroup"></a>

```typescript
public readonly DeleteUserHierarchyGroup: string;
```

- *Type:* string

[Write] connect:DeleteUserHierarchyGroup.

---

##### `DeleteView`<sup>Required</sup> <a name="DeleteView" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteView"></a>

```typescript
public readonly DeleteView: string;
```

- *Type:* string

[Write] connect:DeleteView.

---

##### `DeleteViewVersion`<sup>Required</sup> <a name="DeleteViewVersion" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteViewVersion"></a>

```typescript
public readonly DeleteViewVersion: string;
```

- *Type:* string

[Write] connect:DeleteViewVersion.

---

##### `DeleteVocabulary`<sup>Required</sup> <a name="DeleteVocabulary" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteVocabulary"></a>

```typescript
public readonly DeleteVocabulary: string;
```

- *Type:* string

[Write] connect:DeleteVocabulary.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string;
```

- *Type:* string

[Write] connect:DeleteWorkspace.

---

##### `DeleteWorkspaceMedia`<sup>Required</sup> <a name="DeleteWorkspaceMedia" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteWorkspaceMedia"></a>

```typescript
public readonly DeleteWorkspaceMedia: string;
```

- *Type:* string

[Write] connect:DeleteWorkspaceMedia.

---

##### `DeleteWorkspacePage`<sup>Required</sup> <a name="DeleteWorkspacePage" id="@cdk_utils/iam.connect.ConnectActions.property.DeleteWorkspacePage"></a>

```typescript
public readonly DeleteWorkspacePage: string;
```

- *Type:* string

[Write] connect:DeleteWorkspacePage.

---

##### `DescribeAgentStatus`<sup>Required</sup> <a name="DescribeAgentStatus" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeAgentStatus"></a>

```typescript
public readonly DescribeAgentStatus: string;
```

- *Type:* string

[Read] connect:DescribeAgentStatus.

---

##### `DescribeAttachedFilesConfiguration`<sup>Required</sup> <a name="DescribeAttachedFilesConfiguration" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeAttachedFilesConfiguration"></a>

```typescript
public readonly DescribeAttachedFilesConfiguration: string;
```

- *Type:* string

[Read] connect:DescribeAttachedFilesConfiguration.

---

##### `DescribeAuthenticationProfile`<sup>Required</sup> <a name="DescribeAuthenticationProfile" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeAuthenticationProfile"></a>

```typescript
public readonly DescribeAuthenticationProfile: string;
```

- *Type:* string

[Read] connect:DescribeAuthenticationProfile.

---

##### `DescribeContact`<sup>Required</sup> <a name="DescribeContact" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeContact"></a>

```typescript
public readonly DescribeContact: string;
```

- *Type:* string

[Read] connect:DescribeContact.

---

##### `DescribeContactEvaluation`<sup>Required</sup> <a name="DescribeContactEvaluation" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeContactEvaluation"></a>

```typescript
public readonly DescribeContactEvaluation: string;
```

- *Type:* string

[Read] connect:DescribeContactEvaluation.

---

##### `DescribeContactFlow`<sup>Required</sup> <a name="DescribeContactFlow" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeContactFlow"></a>

```typescript
public readonly DescribeContactFlow: string;
```

- *Type:* string

[Read] connect:DescribeContactFlow.

---

##### `DescribeContactFlowModule`<sup>Required</sup> <a name="DescribeContactFlowModule" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeContactFlowModule"></a>

```typescript
public readonly DescribeContactFlowModule: string;
```

- *Type:* string

[Read] connect:DescribeContactFlowModule.

---

##### `DescribeContactFlowModuleAlias`<sup>Required</sup> <a name="DescribeContactFlowModuleAlias" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeContactFlowModuleAlias"></a>

```typescript
public readonly DescribeContactFlowModuleAlias: string;
```

- *Type:* string

[Read] connect:DescribeContactFlowModuleAlias.

---

##### `DescribeDataTable`<sup>Required</sup> <a name="DescribeDataTable" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeDataTable"></a>

```typescript
public readonly DescribeDataTable: string;
```

- *Type:* string

[Read] connect:DescribeDataTable.

---

##### `DescribeDataTableAttribute`<sup>Required</sup> <a name="DescribeDataTableAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeDataTableAttribute"></a>

```typescript
public readonly DescribeDataTableAttribute: string;
```

- *Type:* string

[Read] connect:DescribeDataTableAttribute.

---

##### `DescribeEmailAddress`<sup>Required</sup> <a name="DescribeEmailAddress" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeEmailAddress"></a>

```typescript
public readonly DescribeEmailAddress: string;
```

- *Type:* string

[Read] connect:DescribeEmailAddress.

---

##### `DescribeEvaluationForm`<sup>Required</sup> <a name="DescribeEvaluationForm" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeEvaluationForm"></a>

```typescript
public readonly DescribeEvaluationForm: string;
```

- *Type:* string

[Read] connect:DescribeEvaluationForm.

---

##### `DescribeForecastingPlanningSchedulingIntegration`<sup>Required</sup> <a name="DescribeForecastingPlanningSchedulingIntegration" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeForecastingPlanningSchedulingIntegration"></a>

```typescript
public readonly DescribeForecastingPlanningSchedulingIntegration: string;
```

- *Type:* string

[Read] connect:DescribeForecastingPlanningSchedulingIntegration.

---

##### `DescribeHoursOfOperation`<sup>Required</sup> <a name="DescribeHoursOfOperation" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeHoursOfOperation"></a>

```typescript
public readonly DescribeHoursOfOperation: string;
```

- *Type:* string

[Read] connect:DescribeHoursOfOperation.

---

##### `DescribeHoursOfOperationOverride`<sup>Required</sup> <a name="DescribeHoursOfOperationOverride" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeHoursOfOperationOverride"></a>

```typescript
public readonly DescribeHoursOfOperationOverride: string;
```

- *Type:* string

[Read] connect:DescribeHoursOfOperationOverride.

---

##### `DescribeInstance`<sup>Required</sup> <a name="DescribeInstance" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeInstance"></a>

```typescript
public readonly DescribeInstance: string;
```

- *Type:* string

[Read] connect:DescribeInstance.

---

##### `DescribeInstanceAttribute`<sup>Required</sup> <a name="DescribeInstanceAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeInstanceAttribute"></a>

```typescript
public readonly DescribeInstanceAttribute: string;
```

- *Type:* string

[Read] connect:DescribeInstanceAttribute.

---

##### `DescribeInstanceStorageConfig`<sup>Required</sup> <a name="DescribeInstanceStorageConfig" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeInstanceStorageConfig"></a>

```typescript
public readonly DescribeInstanceStorageConfig: string;
```

- *Type:* string

[Read] connect:DescribeInstanceStorageConfig.

---

##### `DescribeMetric`<sup>Required</sup> <a name="DescribeMetric" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeMetric"></a>

```typescript
public readonly DescribeMetric: string;
```

- *Type:* string

[Read] connect:DescribeMetric.

---

##### `DescribeNotification`<sup>Required</sup> <a name="DescribeNotification" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeNotification"></a>

```typescript
public readonly DescribeNotification: string;
```

- *Type:* string

[Read] connect:DescribeNotification.

---

##### `DescribePhoneNumber`<sup>Required</sup> <a name="DescribePhoneNumber" id="@cdk_utils/iam.connect.ConnectActions.property.DescribePhoneNumber"></a>

```typescript
public readonly DescribePhoneNumber: string;
```

- *Type:* string

[Read] connect:DescribePhoneNumber.

---

##### `DescribePredefinedAttribute`<sup>Required</sup> <a name="DescribePredefinedAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.DescribePredefinedAttribute"></a>

```typescript
public readonly DescribePredefinedAttribute: string;
```

- *Type:* string

[Read] connect:DescribePredefinedAttribute.

---

##### `DescribePrompt`<sup>Required</sup> <a name="DescribePrompt" id="@cdk_utils/iam.connect.ConnectActions.property.DescribePrompt"></a>

```typescript
public readonly DescribePrompt: string;
```

- *Type:* string

[Read] connect:DescribePrompt.

---

##### `DescribeQueue`<sup>Required</sup> <a name="DescribeQueue" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeQueue"></a>

```typescript
public readonly DescribeQueue: string;
```

- *Type:* string

[Read] connect:DescribeQueue.

---

##### `DescribeQuickConnect`<sup>Required</sup> <a name="DescribeQuickConnect" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeQuickConnect"></a>

```typescript
public readonly DescribeQuickConnect: string;
```

- *Type:* string

[Read] connect:DescribeQuickConnect.

---

##### `DescribeRoutingProfile`<sup>Required</sup> <a name="DescribeRoutingProfile" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeRoutingProfile"></a>

```typescript
public readonly DescribeRoutingProfile: string;
```

- *Type:* string

[Read] connect:DescribeRoutingProfile.

---

##### `DescribeRule`<sup>Required</sup> <a name="DescribeRule" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeRule"></a>

```typescript
public readonly DescribeRule: string;
```

- *Type:* string

[Read] connect:DescribeRule.

---

##### `DescribeSecurityProfile`<sup>Required</sup> <a name="DescribeSecurityProfile" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeSecurityProfile"></a>

```typescript
public readonly DescribeSecurityProfile: string;
```

- *Type:* string

[Read] connect:DescribeSecurityProfile.

---

##### `DescribeTrafficDistributionGroup`<sup>Required</sup> <a name="DescribeTrafficDistributionGroup" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeTrafficDistributionGroup"></a>

```typescript
public readonly DescribeTrafficDistributionGroup: string;
```

- *Type:* string

[Read] connect:DescribeTrafficDistributionGroup.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string;
```

- *Type:* string

[Read] connect:DescribeUser.

---

##### `DescribeUserHierarchyGroup`<sup>Required</sup> <a name="DescribeUserHierarchyGroup" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeUserHierarchyGroup"></a>

```typescript
public readonly DescribeUserHierarchyGroup: string;
```

- *Type:* string

[Read] connect:DescribeUserHierarchyGroup.

---

##### `DescribeUserHierarchyStructure`<sup>Required</sup> <a name="DescribeUserHierarchyStructure" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeUserHierarchyStructure"></a>

```typescript
public readonly DescribeUserHierarchyStructure: string;
```

- *Type:* string

[Read] connect:DescribeUserHierarchyStructure.

---

##### `DescribeView`<sup>Required</sup> <a name="DescribeView" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeView"></a>

```typescript
public readonly DescribeView: string;
```

- *Type:* string

[Read] connect:DescribeView.

---

##### `DescribeVocabulary`<sup>Required</sup> <a name="DescribeVocabulary" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeVocabulary"></a>

```typescript
public readonly DescribeVocabulary: string;
```

- *Type:* string

[Read] connect:DescribeVocabulary.

---

##### `DescribeWorkspace`<sup>Required</sup> <a name="DescribeWorkspace" id="@cdk_utils/iam.connect.ConnectActions.property.DescribeWorkspace"></a>

```typescript
public readonly DescribeWorkspace: string;
```

- *Type:* string

[Read] connect:DescribeWorkspace.

---

##### `DisassociateAnalyticsDataSet`<sup>Required</sup> <a name="DisassociateAnalyticsDataSet" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateAnalyticsDataSet"></a>

```typescript
public readonly DisassociateAnalyticsDataSet: string;
```

- *Type:* string

[Write] connect:DisassociateAnalyticsDataSet.

---

##### `DisassociateApprovedOrigin`<sup>Required</sup> <a name="DisassociateApprovedOrigin" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateApprovedOrigin"></a>

```typescript
public readonly DisassociateApprovedOrigin: string;
```

- *Type:* string

[Write] connect:DisassociateApprovedOrigin.

---

##### `DisassociateBot`<sup>Required</sup> <a name="DisassociateBot" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateBot"></a>

```typescript
public readonly DisassociateBot: string;
```

- *Type:* string

[Write] connect:DisassociateBot.

---

##### `DisassociateCustomerProfilesDomain`<sup>Required</sup> <a name="DisassociateCustomerProfilesDomain" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateCustomerProfilesDomain"></a>

```typescript
public readonly DisassociateCustomerProfilesDomain: string;
```

- *Type:* string

[Write] connect:DisassociateCustomerProfilesDomain.

---

##### `DisassociateEmailAddressAlias`<sup>Required</sup> <a name="DisassociateEmailAddressAlias" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateEmailAddressAlias"></a>

```typescript
public readonly DisassociateEmailAddressAlias: string;
```

- *Type:* string

[Write] connect:DisassociateEmailAddressAlias.

---

##### `DisassociateFlow`<sup>Required</sup> <a name="DisassociateFlow" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateFlow"></a>

```typescript
public readonly DisassociateFlow: string;
```

- *Type:* string

[Write] connect:DisassociateFlow.

---

##### `DisassociateInstanceStorageConfig`<sup>Required</sup> <a name="DisassociateInstanceStorageConfig" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateInstanceStorageConfig"></a>

```typescript
public readonly DisassociateInstanceStorageConfig: string;
```

- *Type:* string

[Write] connect:DisassociateInstanceStorageConfig.

---

##### `DisassociateLambdaFunction`<sup>Required</sup> <a name="DisassociateLambdaFunction" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateLambdaFunction"></a>

```typescript
public readonly DisassociateLambdaFunction: string;
```

- *Type:* string

[Write] connect:DisassociateLambdaFunction.

---

##### `DisassociateLexBot`<sup>Required</sup> <a name="DisassociateLexBot" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateLexBot"></a>

```typescript
public readonly DisassociateLexBot: string;
```

- *Type:* string

[Write] connect:DisassociateLexBot.

---

##### `DisassociatePhoneNumberContactFlow`<sup>Required</sup> <a name="DisassociatePhoneNumberContactFlow" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociatePhoneNumberContactFlow"></a>

```typescript
public readonly DisassociatePhoneNumberContactFlow: string;
```

- *Type:* string

[Write] connect:DisassociatePhoneNumberContactFlow.

---

##### `DisassociateQueueEmailAddresses`<sup>Required</sup> <a name="DisassociateQueueEmailAddresses" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateQueueEmailAddresses"></a>

```typescript
public readonly DisassociateQueueEmailAddresses: string;
```

- *Type:* string

[Write] connect:DisassociateQueueEmailAddresses.

---

##### `DisassociateQueueQuickConnects`<sup>Required</sup> <a name="DisassociateQueueQuickConnects" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateQueueQuickConnects"></a>

```typescript
public readonly DisassociateQueueQuickConnects: string;
```

- *Type:* string

[Write] connect:DisassociateQueueQuickConnects.

---

##### `DisassociateRoutingProfileQueues`<sup>Required</sup> <a name="DisassociateRoutingProfileQueues" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateRoutingProfileQueues"></a>

```typescript
public readonly DisassociateRoutingProfileQueues: string;
```

- *Type:* string

[Write] connect:DisassociateRoutingProfileQueues.

---

##### `DisassociateSecurityKey`<sup>Required</sup> <a name="DisassociateSecurityKey" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateSecurityKey"></a>

```typescript
public readonly DisassociateSecurityKey: string;
```

- *Type:* string

[Write] connect:DisassociateSecurityKey.

---

##### `DisassociateSecurityProfiles`<sup>Required</sup> <a name="DisassociateSecurityProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateSecurityProfiles"></a>

```typescript
public readonly DisassociateSecurityProfiles: string;
```

- *Type:* string

[Write] connect:DisassociateSecurityProfiles.

---

##### `DisassociateTrafficDistributionGroupUser`<sup>Required</sup> <a name="DisassociateTrafficDistributionGroupUser" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateTrafficDistributionGroupUser"></a>

```typescript
public readonly DisassociateTrafficDistributionGroupUser: string;
```

- *Type:* string

[Write] connect:DisassociateTrafficDistributionGroupUser.

---

##### `DisassociateUserProficiencies`<sup>Required</sup> <a name="DisassociateUserProficiencies" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateUserProficiencies"></a>

```typescript
public readonly DisassociateUserProficiencies: string;
```

- *Type:* string

[Write] connect:DisassociateUserProficiencies.

---

##### `DisassociateWorkspace`<sup>Required</sup> <a name="DisassociateWorkspace" id="@cdk_utils/iam.connect.ConnectActions.property.DisassociateWorkspace"></a>

```typescript
public readonly DisassociateWorkspace: string;
```

- *Type:* string

[Write] connect:DisassociateWorkspace.

---

##### `DismissUserContact`<sup>Required</sup> <a name="DismissUserContact" id="@cdk_utils/iam.connect.ConnectActions.property.DismissUserContact"></a>

```typescript
public readonly DismissUserContact: string;
```

- *Type:* string

[Write] connect:DismissUserContact.

---

##### `EvaluateDataTableValues`<sup>Required</sup> <a name="EvaluateDataTableValues" id="@cdk_utils/iam.connect.ConnectActions.property.EvaluateDataTableValues"></a>

```typescript
public readonly EvaluateDataTableValues: string;
```

- *Type:* string

[Read] connect:EvaluateDataTableValues.

---

##### `ImportPhoneNumber`<sup>Required</sup> <a name="ImportPhoneNumber" id="@cdk_utils/iam.connect.ConnectActions.property.ImportPhoneNumber"></a>

```typescript
public readonly ImportPhoneNumber: string;
```

- *Type:* string

[Write] connect:ImportPhoneNumber.

---

##### `ImportWorkspaceMedia`<sup>Required</sup> <a name="ImportWorkspaceMedia" id="@cdk_utils/iam.connect.ConnectActions.property.ImportWorkspaceMedia"></a>

```typescript
public readonly ImportWorkspaceMedia: string;
```

- *Type:* string

[Write] connect:ImportWorkspaceMedia.

---

##### `ListAgentStatuses`<sup>Required</sup> <a name="ListAgentStatuses" id="@cdk_utils/iam.connect.ConnectActions.property.ListAgentStatuses"></a>

```typescript
public readonly ListAgentStatuses: string;
```

- *Type:* string

[List] connect:ListAgentStatuses.

---

##### `ListAnalyticsDataAssociations`<sup>Required</sup> <a name="ListAnalyticsDataAssociations" id="@cdk_utils/iam.connect.ConnectActions.property.ListAnalyticsDataAssociations"></a>

```typescript
public readonly ListAnalyticsDataAssociations: string;
```

- *Type:* string

[List] connect:ListAnalyticsDataAssociations.

---

##### `ListAnalyticsDataLakeDataSets`<sup>Required</sup> <a name="ListAnalyticsDataLakeDataSets" id="@cdk_utils/iam.connect.ConnectActions.property.ListAnalyticsDataLakeDataSets"></a>

```typescript
public readonly ListAnalyticsDataLakeDataSets: string;
```

- *Type:* string

[List] connect:ListAnalyticsDataLakeDataSets.

---

##### `ListApprovedOrigins`<sup>Required</sup> <a name="ListApprovedOrigins" id="@cdk_utils/iam.connect.ConnectActions.property.ListApprovedOrigins"></a>

```typescript
public readonly ListApprovedOrigins: string;
```

- *Type:* string

[List] connect:ListApprovedOrigins.

---

##### `ListAssociatedContacts`<sup>Required</sup> <a name="ListAssociatedContacts" id="@cdk_utils/iam.connect.ConnectActions.property.ListAssociatedContacts"></a>

```typescript
public readonly ListAssociatedContacts: string;
```

- *Type:* string

[List] connect:ListAssociatedContacts.

---

##### `ListAttachedFilesConfigurations`<sup>Required</sup> <a name="ListAttachedFilesConfigurations" id="@cdk_utils/iam.connect.ConnectActions.property.ListAttachedFilesConfigurations"></a>

```typescript
public readonly ListAttachedFilesConfigurations: string;
```

- *Type:* string

[List] connect:ListAttachedFilesConfigurations.

---

##### `ListAuthenticationProfiles`<sup>Required</sup> <a name="ListAuthenticationProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.ListAuthenticationProfiles"></a>

```typescript
public readonly ListAuthenticationProfiles: string;
```

- *Type:* string

[List] connect:ListAuthenticationProfiles.

---

##### `ListBots`<sup>Required</sup> <a name="ListBots" id="@cdk_utils/iam.connect.ConnectActions.property.ListBots"></a>

```typescript
public readonly ListBots: string;
```

- *Type:* string

[List] connect:ListBots.

---

##### `ListContactEvaluations`<sup>Required</sup> <a name="ListContactEvaluations" id="@cdk_utils/iam.connect.ConnectActions.property.ListContactEvaluations"></a>

```typescript
public readonly ListContactEvaluations: string;
```

- *Type:* string

[List] connect:ListContactEvaluations.

---

##### `ListContactFlowModuleAliases`<sup>Required</sup> <a name="ListContactFlowModuleAliases" id="@cdk_utils/iam.connect.ConnectActions.property.ListContactFlowModuleAliases"></a>

```typescript
public readonly ListContactFlowModuleAliases: string;
```

- *Type:* string

[List] connect:ListContactFlowModuleAliases.

---

##### `ListContactFlowModules`<sup>Required</sup> <a name="ListContactFlowModules" id="@cdk_utils/iam.connect.ConnectActions.property.ListContactFlowModules"></a>

```typescript
public readonly ListContactFlowModules: string;
```

- *Type:* string

[List] connect:ListContactFlowModules.

---

##### `ListContactFlowModuleVersions`<sup>Required</sup> <a name="ListContactFlowModuleVersions" id="@cdk_utils/iam.connect.ConnectActions.property.ListContactFlowModuleVersions"></a>

```typescript
public readonly ListContactFlowModuleVersions: string;
```

- *Type:* string

[List] connect:ListContactFlowModuleVersions.

---

##### `ListContactFlows`<sup>Required</sup> <a name="ListContactFlows" id="@cdk_utils/iam.connect.ConnectActions.property.ListContactFlows"></a>

```typescript
public readonly ListContactFlows: string;
```

- *Type:* string

[List] connect:ListContactFlows.

---

##### `ListContactFlowVersions`<sup>Required</sup> <a name="ListContactFlowVersions" id="@cdk_utils/iam.connect.ConnectActions.property.ListContactFlowVersions"></a>

```typescript
public readonly ListContactFlowVersions: string;
```

- *Type:* string

[List] connect:ListContactFlowVersions.

---

##### `ListContactReferences`<sup>Required</sup> <a name="ListContactReferences" id="@cdk_utils/iam.connect.ConnectActions.property.ListContactReferences"></a>

```typescript
public readonly ListContactReferences: string;
```

- *Type:* string

[List] connect:ListContactReferences.

---

##### `ListDataTableAttributes`<sup>Required</sup> <a name="ListDataTableAttributes" id="@cdk_utils/iam.connect.ConnectActions.property.ListDataTableAttributes"></a>

```typescript
public readonly ListDataTableAttributes: string;
```

- *Type:* string

[List] connect:ListDataTableAttributes.

---

##### `ListDataTablePrimaryValues`<sup>Required</sup> <a name="ListDataTablePrimaryValues" id="@cdk_utils/iam.connect.ConnectActions.property.ListDataTablePrimaryValues"></a>

```typescript
public readonly ListDataTablePrimaryValues: string;
```

- *Type:* string

[List] connect:ListDataTablePrimaryValues.

---

##### `ListDataTables`<sup>Required</sup> <a name="ListDataTables" id="@cdk_utils/iam.connect.ConnectActions.property.ListDataTables"></a>

```typescript
public readonly ListDataTables: string;
```

- *Type:* string

[List] connect:ListDataTables.

---

##### `ListDataTableValues`<sup>Required</sup> <a name="ListDataTableValues" id="@cdk_utils/iam.connect.ConnectActions.property.ListDataTableValues"></a>

```typescript
public readonly ListDataTableValues: string;
```

- *Type:* string

[List] connect:ListDataTableValues.

---

##### `ListDefaultVocabularies`<sup>Required</sup> <a name="ListDefaultVocabularies" id="@cdk_utils/iam.connect.ConnectActions.property.ListDefaultVocabularies"></a>

```typescript
public readonly ListDefaultVocabularies: string;
```

- *Type:* string

[List] connect:ListDefaultVocabularies.

---

##### `ListEntitySecurityProfiles`<sup>Required</sup> <a name="ListEntitySecurityProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.ListEntitySecurityProfiles"></a>

```typescript
public readonly ListEntitySecurityProfiles: string;
```

- *Type:* string

[List] connect:ListEntitySecurityProfiles.

---

##### `ListEvaluationForms`<sup>Required</sup> <a name="ListEvaluationForms" id="@cdk_utils/iam.connect.ConnectActions.property.ListEvaluationForms"></a>

```typescript
public readonly ListEvaluationForms: string;
```

- *Type:* string

[List] connect:ListEvaluationForms.

---

##### `ListEvaluationFormVersions`<sup>Required</sup> <a name="ListEvaluationFormVersions" id="@cdk_utils/iam.connect.ConnectActions.property.ListEvaluationFormVersions"></a>

```typescript
public readonly ListEvaluationFormVersions: string;
```

- *Type:* string

[List] connect:ListEvaluationFormVersions.

---

##### `ListFlowAssociations`<sup>Required</sup> <a name="ListFlowAssociations" id="@cdk_utils/iam.connect.ConnectActions.property.ListFlowAssociations"></a>

```typescript
public readonly ListFlowAssociations: string;
```

- *Type:* string

[List] connect:ListFlowAssociations.

---

##### `ListHoursOfOperationOverrides`<sup>Required</sup> <a name="ListHoursOfOperationOverrides" id="@cdk_utils/iam.connect.ConnectActions.property.ListHoursOfOperationOverrides"></a>

```typescript
public readonly ListHoursOfOperationOverrides: string;
```

- *Type:* string

[List] connect:ListHoursOfOperationOverrides.

---

##### `ListHoursOfOperations`<sup>Required</sup> <a name="ListHoursOfOperations" id="@cdk_utils/iam.connect.ConnectActions.property.ListHoursOfOperations"></a>

```typescript
public readonly ListHoursOfOperations: string;
```

- *Type:* string

[List] connect:ListHoursOfOperations.

---

##### `ListInstanceAttributes`<sup>Required</sup> <a name="ListInstanceAttributes" id="@cdk_utils/iam.connect.ConnectActions.property.ListInstanceAttributes"></a>

```typescript
public readonly ListInstanceAttributes: string;
```

- *Type:* string

[List] connect:ListInstanceAttributes.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.connect.ConnectActions.property.ListInstances"></a>

```typescript
public readonly ListInstances: string;
```

- *Type:* string

[List] connect:ListInstances.

---

##### `ListInstanceStorageConfigs`<sup>Required</sup> <a name="ListInstanceStorageConfigs" id="@cdk_utils/iam.connect.ConnectActions.property.ListInstanceStorageConfigs"></a>

```typescript
public readonly ListInstanceStorageConfigs: string;
```

- *Type:* string

[List] connect:ListInstanceStorageConfigs.

---

##### `ListIntegrationAssociations`<sup>Required</sup> <a name="ListIntegrationAssociations" id="@cdk_utils/iam.connect.ConnectActions.property.ListIntegrationAssociations"></a>

```typescript
public readonly ListIntegrationAssociations: string;
```

- *Type:* string

[List] connect:ListIntegrationAssociations.

---

##### `ListLambdaFunctions`<sup>Required</sup> <a name="ListLambdaFunctions" id="@cdk_utils/iam.connect.ConnectActions.property.ListLambdaFunctions"></a>

```typescript
public readonly ListLambdaFunctions: string;
```

- *Type:* string

[List] connect:ListLambdaFunctions.

---

##### `ListLexBots`<sup>Required</sup> <a name="ListLexBots" id="@cdk_utils/iam.connect.ConnectActions.property.ListLexBots"></a>

```typescript
public readonly ListLexBots: string;
```

- *Type:* string

[List] connect:ListLexBots.

---

##### `ListMetrics`<sup>Required</sup> <a name="ListMetrics" id="@cdk_utils/iam.connect.ConnectActions.property.ListMetrics"></a>

```typescript
public readonly ListMetrics: string;
```

- *Type:* string

[List] connect:ListMetrics.

---

##### `ListNotifications`<sup>Required</sup> <a name="ListNotifications" id="@cdk_utils/iam.connect.ConnectActions.property.ListNotifications"></a>

```typescript
public readonly ListNotifications: string;
```

- *Type:* string

[Read] connect:ListNotifications.

---

##### `ListPhoneNumbers`<sup>Required</sup> <a name="ListPhoneNumbers" id="@cdk_utils/iam.connect.ConnectActions.property.ListPhoneNumbers"></a>

```typescript
public readonly ListPhoneNumbers: string;
```

- *Type:* string

[List] connect:ListPhoneNumbers.

---

##### `ListPhoneNumbersV2`<sup>Required</sup> <a name="ListPhoneNumbersV2" id="@cdk_utils/iam.connect.ConnectActions.property.ListPhoneNumbersV2"></a>

```typescript
public readonly ListPhoneNumbersV2: string;
```

- *Type:* string

[List] connect:ListPhoneNumbersV2.

---

##### `ListPredefinedAttributes`<sup>Required</sup> <a name="ListPredefinedAttributes" id="@cdk_utils/iam.connect.ConnectActions.property.ListPredefinedAttributes"></a>

```typescript
public readonly ListPredefinedAttributes: string;
```

- *Type:* string

[List] connect:ListPredefinedAttributes.

---

##### `ListPrompts`<sup>Required</sup> <a name="ListPrompts" id="@cdk_utils/iam.connect.ConnectActions.property.ListPrompts"></a>

```typescript
public readonly ListPrompts: string;
```

- *Type:* string

[List] connect:ListPrompts.

---

##### `ListQueueEmailAddresses`<sup>Required</sup> <a name="ListQueueEmailAddresses" id="@cdk_utils/iam.connect.ConnectActions.property.ListQueueEmailAddresses"></a>

```typescript
public readonly ListQueueEmailAddresses: string;
```

- *Type:* string

[List] connect:ListQueueEmailAddresses.

---

##### `ListQueueQuickConnects`<sup>Required</sup> <a name="ListQueueQuickConnects" id="@cdk_utils/iam.connect.ConnectActions.property.ListQueueQuickConnects"></a>

```typescript
public readonly ListQueueQuickConnects: string;
```

- *Type:* string

[List] connect:ListQueueQuickConnects.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.connect.ConnectActions.property.ListQueues"></a>

```typescript
public readonly ListQueues: string;
```

- *Type:* string

[List] connect:ListQueues.

---

##### `ListQuickConnects`<sup>Required</sup> <a name="ListQuickConnects" id="@cdk_utils/iam.connect.ConnectActions.property.ListQuickConnects"></a>

```typescript
public readonly ListQuickConnects: string;
```

- *Type:* string

[List] connect:ListQuickConnects.

---

##### `ListRealtimeContactAnalysisSegments`<sup>Required</sup> <a name="ListRealtimeContactAnalysisSegments" id="@cdk_utils/iam.connect.ConnectActions.property.ListRealtimeContactAnalysisSegments"></a>

```typescript
public readonly ListRealtimeContactAnalysisSegments: string;
```

- *Type:* string

[Read] connect:ListRealtimeContactAnalysisSegments.

---

##### `ListRealtimeContactAnalysisSegmentsV2`<sup>Required</sup> <a name="ListRealtimeContactAnalysisSegmentsV2" id="@cdk_utils/iam.connect.ConnectActions.property.ListRealtimeContactAnalysisSegmentsV2"></a>

```typescript
public readonly ListRealtimeContactAnalysisSegmentsV2: string;
```

- *Type:* string

[List] connect:ListRealtimeContactAnalysisSegmentsV2.

---

##### `ListRoutingProfileManualAssignmentQueues`<sup>Required</sup> <a name="ListRoutingProfileManualAssignmentQueues" id="@cdk_utils/iam.connect.ConnectActions.property.ListRoutingProfileManualAssignmentQueues"></a>

```typescript
public readonly ListRoutingProfileManualAssignmentQueues: string;
```

- *Type:* string

[List] connect:ListRoutingProfileManualAssignmentQueues.

---

##### `ListRoutingProfileQueues`<sup>Required</sup> <a name="ListRoutingProfileQueues" id="@cdk_utils/iam.connect.ConnectActions.property.ListRoutingProfileQueues"></a>

```typescript
public readonly ListRoutingProfileQueues: string;
```

- *Type:* string

[List] connect:ListRoutingProfileQueues.

---

##### `ListRoutingProfiles`<sup>Required</sup> <a name="ListRoutingProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.ListRoutingProfiles"></a>

```typescript
public readonly ListRoutingProfiles: string;
```

- *Type:* string

[List] connect:ListRoutingProfiles.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.connect.ConnectActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[List] connect:ListRules.

---

##### `ListSecurityKeys`<sup>Required</sup> <a name="ListSecurityKeys" id="@cdk_utils/iam.connect.ConnectActions.property.ListSecurityKeys"></a>

```typescript
public readonly ListSecurityKeys: string;
```

- *Type:* string

[List] connect:ListSecurityKeys.

---

##### `ListSecurityProfileApplications`<sup>Required</sup> <a name="ListSecurityProfileApplications" id="@cdk_utils/iam.connect.ConnectActions.property.ListSecurityProfileApplications"></a>

```typescript
public readonly ListSecurityProfileApplications: string;
```

- *Type:* string

[List] connect:ListSecurityProfileApplications.

---

##### `ListSecurityProfileFlowModules`<sup>Required</sup> <a name="ListSecurityProfileFlowModules" id="@cdk_utils/iam.connect.ConnectActions.property.ListSecurityProfileFlowModules"></a>

```typescript
public readonly ListSecurityProfileFlowModules: string;
```

- *Type:* string

[List] connect:ListSecurityProfileFlowModules.

---

##### `ListSecurityProfilePermissions`<sup>Required</sup> <a name="ListSecurityProfilePermissions" id="@cdk_utils/iam.connect.ConnectActions.property.ListSecurityProfilePermissions"></a>

```typescript
public readonly ListSecurityProfilePermissions: string;
```

- *Type:* string

[List] connect:ListSecurityProfilePermissions.

---

##### `ListSecurityProfiles`<sup>Required</sup> <a name="ListSecurityProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.ListSecurityProfiles"></a>

```typescript
public readonly ListSecurityProfiles: string;
```

- *Type:* string

[List] connect:ListSecurityProfiles.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.connect.ConnectActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] connect:ListTagsForResource.

---

##### `ListTaskTemplates`<sup>Required</sup> <a name="ListTaskTemplates" id="@cdk_utils/iam.connect.ConnectActions.property.ListTaskTemplates"></a>

```typescript
public readonly ListTaskTemplates: string;
```

- *Type:* string

[List] connect:ListTaskTemplates.

---

##### `ListTrafficDistributionGroups`<sup>Required</sup> <a name="ListTrafficDistributionGroups" id="@cdk_utils/iam.connect.ConnectActions.property.ListTrafficDistributionGroups"></a>

```typescript
public readonly ListTrafficDistributionGroups: string;
```

- *Type:* string

[List] connect:ListTrafficDistributionGroups.

---

##### `ListTrafficDistributionGroupUsers`<sup>Required</sup> <a name="ListTrafficDistributionGroupUsers" id="@cdk_utils/iam.connect.ConnectActions.property.ListTrafficDistributionGroupUsers"></a>

```typescript
public readonly ListTrafficDistributionGroupUsers: string;
```

- *Type:* string

[List] connect:ListTrafficDistributionGroupUsers.

---

##### `ListUseCases`<sup>Required</sup> <a name="ListUseCases" id="@cdk_utils/iam.connect.ConnectActions.property.ListUseCases"></a>

```typescript
public readonly ListUseCases: string;
```

- *Type:* string

[List] connect:ListUseCases.

---

##### `ListUserHierarchyGroups`<sup>Required</sup> <a name="ListUserHierarchyGroups" id="@cdk_utils/iam.connect.ConnectActions.property.ListUserHierarchyGroups"></a>

```typescript
public readonly ListUserHierarchyGroups: string;
```

- *Type:* string

[List] connect:ListUserHierarchyGroups.

---

##### `ListUserNotifications`<sup>Required</sup> <a name="ListUserNotifications" id="@cdk_utils/iam.connect.ConnectActions.property.ListUserNotifications"></a>

```typescript
public readonly ListUserNotifications: string;
```

- *Type:* string

[Read] connect:ListUserNotifications.

---

##### `ListUserProficiencies`<sup>Required</sup> <a name="ListUserProficiencies" id="@cdk_utils/iam.connect.ConnectActions.property.ListUserProficiencies"></a>

```typescript
public readonly ListUserProficiencies: string;
```

- *Type:* string

[List] connect:ListUserProficiencies.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.connect.ConnectActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] connect:ListUsers.

---

##### `ListViews`<sup>Required</sup> <a name="ListViews" id="@cdk_utils/iam.connect.ConnectActions.property.ListViews"></a>

```typescript
public readonly ListViews: string;
```

- *Type:* string

[List] connect:ListViews.

---

##### `ListViewVersions`<sup>Required</sup> <a name="ListViewVersions" id="@cdk_utils/iam.connect.ConnectActions.property.ListViewVersions"></a>

```typescript
public readonly ListViewVersions: string;
```

- *Type:* string

[List] connect:ListViewVersions.

---

##### `ListWorkspaceMedia`<sup>Required</sup> <a name="ListWorkspaceMedia" id="@cdk_utils/iam.connect.ConnectActions.property.ListWorkspaceMedia"></a>

```typescript
public readonly ListWorkspaceMedia: string;
```

- *Type:* string

[List] connect:ListWorkspaceMedia.

---

##### `ListWorkspacePages`<sup>Required</sup> <a name="ListWorkspacePages" id="@cdk_utils/iam.connect.ConnectActions.property.ListWorkspacePages"></a>

```typescript
public readonly ListWorkspacePages: string;
```

- *Type:* string

[List] connect:ListWorkspacePages.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.connect.ConnectActions.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string;
```

- *Type:* string

[List] connect:ListWorkspaces.

---

##### `MonitorContact`<sup>Required</sup> <a name="MonitorContact" id="@cdk_utils/iam.connect.ConnectActions.property.MonitorContact"></a>

```typescript
public readonly MonitorContact: string;
```

- *Type:* string

[Write] connect:MonitorContact.

---

##### `PauseContact`<sup>Required</sup> <a name="PauseContact" id="@cdk_utils/iam.connect.ConnectActions.property.PauseContact"></a>

```typescript
public readonly PauseContact: string;
```

- *Type:* string

[Write] connect:PauseContact.

---

##### `PutUserStatus`<sup>Required</sup> <a name="PutUserStatus" id="@cdk_utils/iam.connect.ConnectActions.property.PutUserStatus"></a>

```typescript
public readonly PutUserStatus: string;
```

- *Type:* string

[Write] connect:PutUserStatus.

---

##### `ReleasePhoneNumber`<sup>Required</sup> <a name="ReleasePhoneNumber" id="@cdk_utils/iam.connect.ConnectActions.property.ReleasePhoneNumber"></a>

```typescript
public readonly ReleasePhoneNumber: string;
```

- *Type:* string

[Write] connect:ReleasePhoneNumber.

---

##### `ReplicateInstance`<sup>Required</sup> <a name="ReplicateInstance" id="@cdk_utils/iam.connect.ConnectActions.property.ReplicateInstance"></a>

```typescript
public readonly ReplicateInstance: string;
```

- *Type:* string

[Write] connect:ReplicateInstance.

---

##### `ResumeContact`<sup>Required</sup> <a name="ResumeContact" id="@cdk_utils/iam.connect.ConnectActions.property.ResumeContact"></a>

```typescript
public readonly ResumeContact: string;
```

- *Type:* string

[Write] connect:ResumeContact.

---

##### `ResumeContactRecording`<sup>Required</sup> <a name="ResumeContactRecording" id="@cdk_utils/iam.connect.ConnectActions.property.ResumeContactRecording"></a>

```typescript
public readonly ResumeContactRecording: string;
```

- *Type:* string

[Write] connect:ResumeContactRecording.

---

##### `SearchAgentStatuses`<sup>Required</sup> <a name="SearchAgentStatuses" id="@cdk_utils/iam.connect.ConnectActions.property.SearchAgentStatuses"></a>

```typescript
public readonly SearchAgentStatuses: string;
```

- *Type:* string

[Read] connect:SearchAgentStatuses.

---

##### `SearchAvailablePhoneNumbers`<sup>Required</sup> <a name="SearchAvailablePhoneNumbers" id="@cdk_utils/iam.connect.ConnectActions.property.SearchAvailablePhoneNumbers"></a>

```typescript
public readonly SearchAvailablePhoneNumbers: string;
```

- *Type:* string

[List] connect:SearchAvailablePhoneNumbers.

---

##### `SearchContactEvaluations`<sup>Required</sup> <a name="SearchContactEvaluations" id="@cdk_utils/iam.connect.ConnectActions.property.SearchContactEvaluations"></a>

```typescript
public readonly SearchContactEvaluations: string;
```

- *Type:* string

[Read] connect:SearchContactEvaluations.

---

##### `SearchContactFlowModules`<sup>Required</sup> <a name="SearchContactFlowModules" id="@cdk_utils/iam.connect.ConnectActions.property.SearchContactFlowModules"></a>

```typescript
public readonly SearchContactFlowModules: string;
```

- *Type:* string

[Read] connect:SearchContactFlowModules.

---

##### `SearchContactFlows`<sup>Required</sup> <a name="SearchContactFlows" id="@cdk_utils/iam.connect.ConnectActions.property.SearchContactFlows"></a>

```typescript
public readonly SearchContactFlows: string;
```

- *Type:* string

[Read] connect:SearchContactFlows.

---

##### `SearchContacts`<sup>Required</sup> <a name="SearchContacts" id="@cdk_utils/iam.connect.ConnectActions.property.SearchContacts"></a>

```typescript
public readonly SearchContacts: string;
```

- *Type:* string

[Read] connect:SearchContacts.

---

##### `SearchDataTables`<sup>Required</sup> <a name="SearchDataTables" id="@cdk_utils/iam.connect.ConnectActions.property.SearchDataTables"></a>

```typescript
public readonly SearchDataTables: string;
```

- *Type:* string

[Read] connect:SearchDataTables.

---

##### `SearchEmailAddresses`<sup>Required</sup> <a name="SearchEmailAddresses" id="@cdk_utils/iam.connect.ConnectActions.property.SearchEmailAddresses"></a>

```typescript
public readonly SearchEmailAddresses: string;
```

- *Type:* string

[Read] connect:SearchEmailAddresses.

---

##### `SearchEvaluationForms`<sup>Required</sup> <a name="SearchEvaluationForms" id="@cdk_utils/iam.connect.ConnectActions.property.SearchEvaluationForms"></a>

```typescript
public readonly SearchEvaluationForms: string;
```

- *Type:* string

[Read] connect:SearchEvaluationForms.

---

##### `SearchHoursOfOperationOverrides`<sup>Required</sup> <a name="SearchHoursOfOperationOverrides" id="@cdk_utils/iam.connect.ConnectActions.property.SearchHoursOfOperationOverrides"></a>

```typescript
public readonly SearchHoursOfOperationOverrides: string;
```

- *Type:* string

[Read] connect:SearchHoursOfOperationOverrides.

---

##### `SearchHoursOfOperations`<sup>Required</sup> <a name="SearchHoursOfOperations" id="@cdk_utils/iam.connect.ConnectActions.property.SearchHoursOfOperations"></a>

```typescript
public readonly SearchHoursOfOperations: string;
```

- *Type:* string

[Read] connect:SearchHoursOfOperations.

---

##### `SearchMetrics`<sup>Required</sup> <a name="SearchMetrics" id="@cdk_utils/iam.connect.ConnectActions.property.SearchMetrics"></a>

```typescript
public readonly SearchMetrics: string;
```

- *Type:* string

[Read] connect:SearchMetrics.

---

##### `SearchNotifications`<sup>Required</sup> <a name="SearchNotifications" id="@cdk_utils/iam.connect.ConnectActions.property.SearchNotifications"></a>

```typescript
public readonly SearchNotifications: string;
```

- *Type:* string

[Read] connect:SearchNotifications.

---

##### `SearchPredefinedAttributes`<sup>Required</sup> <a name="SearchPredefinedAttributes" id="@cdk_utils/iam.connect.ConnectActions.property.SearchPredefinedAttributes"></a>

```typescript
public readonly SearchPredefinedAttributes: string;
```

- *Type:* string

[Read] connect:SearchPredefinedAttributes.

---

##### `SearchPrompts`<sup>Required</sup> <a name="SearchPrompts" id="@cdk_utils/iam.connect.ConnectActions.property.SearchPrompts"></a>

```typescript
public readonly SearchPrompts: string;
```

- *Type:* string

[Read] connect:SearchPrompts.

---

##### `SearchQueues`<sup>Required</sup> <a name="SearchQueues" id="@cdk_utils/iam.connect.ConnectActions.property.SearchQueues"></a>

```typescript
public readonly SearchQueues: string;
```

- *Type:* string

[Read] connect:SearchQueues.

---

##### `SearchQuickConnects`<sup>Required</sup> <a name="SearchQuickConnects" id="@cdk_utils/iam.connect.ConnectActions.property.SearchQuickConnects"></a>

```typescript
public readonly SearchQuickConnects: string;
```

- *Type:* string

[Read] connect:SearchQuickConnects.

---

##### `SearchResourceTags`<sup>Required</sup> <a name="SearchResourceTags" id="@cdk_utils/iam.connect.ConnectActions.property.SearchResourceTags"></a>

```typescript
public readonly SearchResourceTags: string;
```

- *Type:* string

[List] connect:SearchResourceTags.

---

##### `SearchRoutingProfiles`<sup>Required</sup> <a name="SearchRoutingProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.SearchRoutingProfiles"></a>

```typescript
public readonly SearchRoutingProfiles: string;
```

- *Type:* string

[Read] connect:SearchRoutingProfiles.

---

##### `SearchRules`<sup>Required</sup> <a name="SearchRules" id="@cdk_utils/iam.connect.ConnectActions.property.SearchRules"></a>

```typescript
public readonly SearchRules: string;
```

- *Type:* string

[Read] connect:SearchRules.

---

##### `SearchSecurityProfiles`<sup>Required</sup> <a name="SearchSecurityProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.SearchSecurityProfiles"></a>

```typescript
public readonly SearchSecurityProfiles: string;
```

- *Type:* string

[Read] connect:SearchSecurityProfiles.

---

##### `SearchUserHierarchyGroups`<sup>Required</sup> <a name="SearchUserHierarchyGroups" id="@cdk_utils/iam.connect.ConnectActions.property.SearchUserHierarchyGroups"></a>

```typescript
public readonly SearchUserHierarchyGroups: string;
```

- *Type:* string

[Read] connect:SearchUserHierarchyGroups.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.connect.ConnectActions.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string;
```

- *Type:* string

[Read] connect:SearchUsers.

---

##### `SearchViews`<sup>Required</sup> <a name="SearchViews" id="@cdk_utils/iam.connect.ConnectActions.property.SearchViews"></a>

```typescript
public readonly SearchViews: string;
```

- *Type:* string

[Read] connect:SearchViews.

---

##### `SearchVocabularies`<sup>Required</sup> <a name="SearchVocabularies" id="@cdk_utils/iam.connect.ConnectActions.property.SearchVocabularies"></a>

```typescript
public readonly SearchVocabularies: string;
```

- *Type:* string

[List] connect:SearchVocabularies.

---

##### `SearchWorkspaceAssociations`<sup>Required</sup> <a name="SearchWorkspaceAssociations" id="@cdk_utils/iam.connect.ConnectActions.property.SearchWorkspaceAssociations"></a>

```typescript
public readonly SearchWorkspaceAssociations: string;
```

- *Type:* string

[Read] connect:SearchWorkspaceAssociations.

---

##### `SearchWorkspaces`<sup>Required</sup> <a name="SearchWorkspaces" id="@cdk_utils/iam.connect.ConnectActions.property.SearchWorkspaces"></a>

```typescript
public readonly SearchWorkspaces: string;
```

- *Type:* string

[Read] connect:SearchWorkspaces.

---

##### `SendChatIntegrationEvent`<sup>Required</sup> <a name="SendChatIntegrationEvent" id="@cdk_utils/iam.connect.ConnectActions.property.SendChatIntegrationEvent"></a>

```typescript
public readonly SendChatIntegrationEvent: string;
```

- *Type:* string

[Write] connect:SendChatIntegrationEvent.

---

##### `SendIntegrationEvent`<sup>Required</sup> <a name="SendIntegrationEvent" id="@cdk_utils/iam.connect.ConnectActions.property.SendIntegrationEvent"></a>

```typescript
public readonly SendIntegrationEvent: string;
```

- *Type:* string

[Write] connect:SendIntegrationEvent.

---

##### `SendOutboundChatMessage`<sup>Required</sup> <a name="SendOutboundChatMessage" id="@cdk_utils/iam.connect.ConnectActions.property.SendOutboundChatMessage"></a>

```typescript
public readonly SendOutboundChatMessage: string;
```

- *Type:* string

[Write] connect:SendOutboundChatMessage.

---

##### `SendOutboundEmail`<sup>Required</sup> <a name="SendOutboundEmail" id="@cdk_utils/iam.connect.ConnectActions.property.SendOutboundEmail"></a>

```typescript
public readonly SendOutboundEmail: string;
```

- *Type:* string

[Write] connect:SendOutboundEmail.

---

##### `SendOutboundWebNotification`<sup>Required</sup> <a name="SendOutboundWebNotification" id="@cdk_utils/iam.connect.ConnectActions.property.SendOutboundWebNotification"></a>

```typescript
public readonly SendOutboundWebNotification: string;
```

- *Type:* string

[Write] connect:SendOutboundWebNotification.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.connect.ConnectActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAttachedFileUpload`<sup>Required</sup> <a name="StartAttachedFileUpload" id="@cdk_utils/iam.connect.ConnectActions.property.StartAttachedFileUpload"></a>

```typescript
public readonly StartAttachedFileUpload: string;
```

- *Type:* string

[Write] connect:StartAttachedFileUpload.

---

##### `StartChatContact`<sup>Required</sup> <a name="StartChatContact" id="@cdk_utils/iam.connect.ConnectActions.property.StartChatContact"></a>

```typescript
public readonly StartChatContact: string;
```

- *Type:* string

[Write] connect:StartChatContact.

---

##### `StartContactConversationalAnalyticsJob`<sup>Required</sup> <a name="StartContactConversationalAnalyticsJob" id="@cdk_utils/iam.connect.ConnectActions.property.StartContactConversationalAnalyticsJob"></a>

```typescript
public readonly StartContactConversationalAnalyticsJob: string;
```

- *Type:* string

[Write] connect:StartContactConversationalAnalyticsJob.

---

##### `StartContactEvaluation`<sup>Required</sup> <a name="StartContactEvaluation" id="@cdk_utils/iam.connect.ConnectActions.property.StartContactEvaluation"></a>

```typescript
public readonly StartContactEvaluation: string;
```

- *Type:* string

[Write] connect:StartContactEvaluation.

---

##### `StartContactMediaProcessing`<sup>Required</sup> <a name="StartContactMediaProcessing" id="@cdk_utils/iam.connect.ConnectActions.property.StartContactMediaProcessing"></a>

```typescript
public readonly StartContactMediaProcessing: string;
```

- *Type:* string

[Write] connect:StartContactMediaProcessing.

---

##### `StartContactRecording`<sup>Required</sup> <a name="StartContactRecording" id="@cdk_utils/iam.connect.ConnectActions.property.StartContactRecording"></a>

```typescript
public readonly StartContactRecording: string;
```

- *Type:* string

[Write] connect:StartContactRecording.

---

##### `StartContactStreaming`<sup>Required</sup> <a name="StartContactStreaming" id="@cdk_utils/iam.connect.ConnectActions.property.StartContactStreaming"></a>

```typescript
public readonly StartContactStreaming: string;
```

- *Type:* string

[Write] connect:StartContactStreaming.

---

##### `StartEmailContact`<sup>Required</sup> <a name="StartEmailContact" id="@cdk_utils/iam.connect.ConnectActions.property.StartEmailContact"></a>

```typescript
public readonly StartEmailContact: string;
```

- *Type:* string

[Write] connect:StartEmailContact.

---

##### `StartEvaluationFormValidation`<sup>Required</sup> <a name="StartEvaluationFormValidation" id="@cdk_utils/iam.connect.ConnectActions.property.StartEvaluationFormValidation"></a>

```typescript
public readonly StartEvaluationFormValidation: string;
```

- *Type:* string

[Write] connect:StartEvaluationFormValidation.

---

##### `StartForecastingPlanningSchedulingIntegration`<sup>Required</sup> <a name="StartForecastingPlanningSchedulingIntegration" id="@cdk_utils/iam.connect.ConnectActions.property.StartForecastingPlanningSchedulingIntegration"></a>

```typescript
public readonly StartForecastingPlanningSchedulingIntegration: string;
```

- *Type:* string

[Write] connect:StartForecastingPlanningSchedulingIntegration.

---

##### `StartOutboundChatContact`<sup>Required</sup> <a name="StartOutboundChatContact" id="@cdk_utils/iam.connect.ConnectActions.property.StartOutboundChatContact"></a>

```typescript
public readonly StartOutboundChatContact: string;
```

- *Type:* string

[Write] connect:StartOutboundChatContact.

---

##### `StartOutboundEmailContact`<sup>Required</sup> <a name="StartOutboundEmailContact" id="@cdk_utils/iam.connect.ConnectActions.property.StartOutboundEmailContact"></a>

```typescript
public readonly StartOutboundEmailContact: string;
```

- *Type:* string

[Write] connect:StartOutboundEmailContact.

---

##### `StartOutboundVoiceContact`<sup>Required</sup> <a name="StartOutboundVoiceContact" id="@cdk_utils/iam.connect.ConnectActions.property.StartOutboundVoiceContact"></a>

```typescript
public readonly StartOutboundVoiceContact: string;
```

- *Type:* string

[Write] connect:StartOutboundVoiceContact.

---

##### `StartScreenSharing`<sup>Required</sup> <a name="StartScreenSharing" id="@cdk_utils/iam.connect.ConnectActions.property.StartScreenSharing"></a>

```typescript
public readonly StartScreenSharing: string;
```

- *Type:* string

[Write] connect:StartScreenSharing.

---

##### `StartTaskContact`<sup>Required</sup> <a name="StartTaskContact" id="@cdk_utils/iam.connect.ConnectActions.property.StartTaskContact"></a>

```typescript
public readonly StartTaskContact: string;
```

- *Type:* string

[Write] connect:StartTaskContact.

---

##### `StartWebRTCContact`<sup>Required</sup> <a name="StartWebRTCContact" id="@cdk_utils/iam.connect.ConnectActions.property.StartWebRTCContact"></a>

```typescript
public readonly StartWebRTCContact: string;
```

- *Type:* string

[Write] connect:StartWebRTCContact.

---

##### `StopContact`<sup>Required</sup> <a name="StopContact" id="@cdk_utils/iam.connect.ConnectActions.property.StopContact"></a>

```typescript
public readonly StopContact: string;
```

- *Type:* string

[Write] connect:StopContact.

---

##### `StopContactMediaProcessing`<sup>Required</sup> <a name="StopContactMediaProcessing" id="@cdk_utils/iam.connect.ConnectActions.property.StopContactMediaProcessing"></a>

```typescript
public readonly StopContactMediaProcessing: string;
```

- *Type:* string

[Write] connect:StopContactMediaProcessing.

---

##### `StopContactRecording`<sup>Required</sup> <a name="StopContactRecording" id="@cdk_utils/iam.connect.ConnectActions.property.StopContactRecording"></a>

```typescript
public readonly StopContactRecording: string;
```

- *Type:* string

[Write] connect:StopContactRecording.

---

##### `StopContactStreaming`<sup>Required</sup> <a name="StopContactStreaming" id="@cdk_utils/iam.connect.ConnectActions.property.StopContactStreaming"></a>

```typescript
public readonly StopContactStreaming: string;
```

- *Type:* string

[Write] connect:StopContactStreaming.

---

##### `StopForecastingPlanningSchedulingIntegration`<sup>Required</sup> <a name="StopForecastingPlanningSchedulingIntegration" id="@cdk_utils/iam.connect.ConnectActions.property.StopForecastingPlanningSchedulingIntegration"></a>

```typescript
public readonly StopForecastingPlanningSchedulingIntegration: string;
```

- *Type:* string

[Write] connect:StopForecastingPlanningSchedulingIntegration.

---

##### `SubmitContactEvaluation`<sup>Required</sup> <a name="SubmitContactEvaluation" id="@cdk_utils/iam.connect.ConnectActions.property.SubmitContactEvaluation"></a>

```typescript
public readonly SubmitContactEvaluation: string;
```

- *Type:* string

[Write] connect:SubmitContactEvaluation.

---

##### `SuspendContactRecording`<sup>Required</sup> <a name="SuspendContactRecording" id="@cdk_utils/iam.connect.ConnectActions.property.SuspendContactRecording"></a>

```typescript
public readonly SuspendContactRecording: string;
```

- *Type:* string

[Write] connect:SuspendContactRecording.

---

##### `TagContact`<sup>Required</sup> <a name="TagContact" id="@cdk_utils/iam.connect.ConnectActions.property.TagContact"></a>

```typescript
public readonly TagContact: string;
```

- *Type:* string

[Write] connect:TagContact.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.connect.ConnectActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] connect:TagResource.

---

##### `TransferContact`<sup>Required</sup> <a name="TransferContact" id="@cdk_utils/iam.connect.ConnectActions.property.TransferContact"></a>

```typescript
public readonly TransferContact: string;
```

- *Type:* string

[Write] connect:TransferContact.

---

##### `UntagContact`<sup>Required</sup> <a name="UntagContact" id="@cdk_utils/iam.connect.ConnectActions.property.UntagContact"></a>

```typescript
public readonly UntagContact: string;
```

- *Type:* string

[Write] connect:UntagContact.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.connect.ConnectActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] connect:UntagResource.

---

##### `UpdateAgentStatus`<sup>Required</sup> <a name="UpdateAgentStatus" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateAgentStatus"></a>

```typescript
public readonly UpdateAgentStatus: string;
```

- *Type:* string

[Write] connect:UpdateAgentStatus.

---

##### `UpdateAttachedFilesConfiguration`<sup>Required</sup> <a name="UpdateAttachedFilesConfiguration" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateAttachedFilesConfiguration"></a>

```typescript
public readonly UpdateAttachedFilesConfiguration: string;
```

- *Type:* string

[Write] connect:UpdateAttachedFilesConfiguration.

---

##### `UpdateAuthenticationProfile`<sup>Required</sup> <a name="UpdateAuthenticationProfile" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateAuthenticationProfile"></a>

```typescript
public readonly UpdateAuthenticationProfile: string;
```

- *Type:* string

[Write] connect:UpdateAuthenticationProfile.

---

##### `UpdateContact`<sup>Required</sup> <a name="UpdateContact" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContact"></a>

```typescript
public readonly UpdateContact: string;
```

- *Type:* string

[Write] connect:UpdateContact.

---

##### `UpdateContactAttributes`<sup>Required</sup> <a name="UpdateContactAttributes" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactAttributes"></a>

```typescript
public readonly UpdateContactAttributes: string;
```

- *Type:* string

[Write] connect:UpdateContactAttributes.

---

##### `UpdateContactEvaluation`<sup>Required</sup> <a name="UpdateContactEvaluation" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactEvaluation"></a>

```typescript
public readonly UpdateContactEvaluation: string;
```

- *Type:* string

[Write] connect:UpdateContactEvaluation.

---

##### `UpdateContactFlowContent`<sup>Required</sup> <a name="UpdateContactFlowContent" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowContent"></a>

```typescript
public readonly UpdateContactFlowContent: string;
```

- *Type:* string

[Write] connect:UpdateContactFlowContent.

---

##### `UpdateContactFlowMetadata`<sup>Required</sup> <a name="UpdateContactFlowMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowMetadata"></a>

```typescript
public readonly UpdateContactFlowMetadata: string;
```

- *Type:* string

[Write] connect:UpdateContactFlowMetadata.

---

##### `UpdateContactFlowModuleAlias`<sup>Required</sup> <a name="UpdateContactFlowModuleAlias" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowModuleAlias"></a>

```typescript
public readonly UpdateContactFlowModuleAlias: string;
```

- *Type:* string

[Write] connect:UpdateContactFlowModuleAlias.

---

##### `UpdateContactFlowModuleContent`<sup>Required</sup> <a name="UpdateContactFlowModuleContent" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowModuleContent"></a>

```typescript
public readonly UpdateContactFlowModuleContent: string;
```

- *Type:* string

[Write] connect:UpdateContactFlowModuleContent.

---

##### `UpdateContactFlowModuleMetadata`<sup>Required</sup> <a name="UpdateContactFlowModuleMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowModuleMetadata"></a>

```typescript
public readonly UpdateContactFlowModuleMetadata: string;
```

- *Type:* string

[Write] connect:UpdateContactFlowModuleMetadata.

---

##### `UpdateContactFlowName`<sup>Required</sup> <a name="UpdateContactFlowName" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactFlowName"></a>

```typescript
public readonly UpdateContactFlowName: string;
```

- *Type:* string

[Write] connect:UpdateContactFlowName.

---

##### `UpdateContactRoutingData`<sup>Required</sup> <a name="UpdateContactRoutingData" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactRoutingData"></a>

```typescript
public readonly UpdateContactRoutingData: string;
```

- *Type:* string

[Write] connect:UpdateContactRoutingData.

---

##### `UpdateContactSchedule`<sup>Required</sup> <a name="UpdateContactSchedule" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateContactSchedule"></a>

```typescript
public readonly UpdateContactSchedule: string;
```

- *Type:* string

[Write] connect:UpdateContactSchedule.

---

##### `UpdateDataTableAttribute`<sup>Required</sup> <a name="UpdateDataTableAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateDataTableAttribute"></a>

```typescript
public readonly UpdateDataTableAttribute: string;
```

- *Type:* string

[Write] connect:UpdateDataTableAttribute.

---

##### `UpdateDataTableMetadata`<sup>Required</sup> <a name="UpdateDataTableMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateDataTableMetadata"></a>

```typescript
public readonly UpdateDataTableMetadata: string;
```

- *Type:* string

[Write] connect:UpdateDataTableMetadata.

---

##### `UpdateDataTablePrimaryValues`<sup>Required</sup> <a name="UpdateDataTablePrimaryValues" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateDataTablePrimaryValues"></a>

```typescript
public readonly UpdateDataTablePrimaryValues: string;
```

- *Type:* string

[Write] connect:UpdateDataTablePrimaryValues.

---

##### `UpdateEmailAddressMetadata`<sup>Required</sup> <a name="UpdateEmailAddressMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateEmailAddressMetadata"></a>

```typescript
public readonly UpdateEmailAddressMetadata: string;
```

- *Type:* string

[Write] connect:UpdateEmailAddressMetadata.

---

##### `UpdateEvaluationForm`<sup>Required</sup> <a name="UpdateEvaluationForm" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateEvaluationForm"></a>

```typescript
public readonly UpdateEvaluationForm: string;
```

- *Type:* string

[Write] connect:UpdateEvaluationForm.

---

##### `UpdateHoursOfOperation`<sup>Required</sup> <a name="UpdateHoursOfOperation" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateHoursOfOperation"></a>

```typescript
public readonly UpdateHoursOfOperation: string;
```

- *Type:* string

[Write] connect:UpdateHoursOfOperation.

---

##### `UpdateHoursOfOperationOverride`<sup>Required</sup> <a name="UpdateHoursOfOperationOverride" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateHoursOfOperationOverride"></a>

```typescript
public readonly UpdateHoursOfOperationOverride: string;
```

- *Type:* string

[Write] connect:UpdateHoursOfOperationOverride.

---

##### `UpdateInstanceAttribute`<sup>Required</sup> <a name="UpdateInstanceAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateInstanceAttribute"></a>

```typescript
public readonly UpdateInstanceAttribute: string;
```

- *Type:* string

[Write] connect:UpdateInstanceAttribute.

---

##### `UpdateInstanceStorageConfig`<sup>Required</sup> <a name="UpdateInstanceStorageConfig" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateInstanceStorageConfig"></a>

```typescript
public readonly UpdateInstanceStorageConfig: string;
```

- *Type:* string

[Write] connect:UpdateInstanceStorageConfig.

---

##### `UpdateMetricContent`<sup>Required</sup> <a name="UpdateMetricContent" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateMetricContent"></a>

```typescript
public readonly UpdateMetricContent: string;
```

- *Type:* string

[Write] connect:UpdateMetricContent.

---

##### `UpdateMetricMetadata`<sup>Required</sup> <a name="UpdateMetricMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateMetricMetadata"></a>

```typescript
public readonly UpdateMetricMetadata: string;
```

- *Type:* string

[Write] connect:UpdateMetricMetadata.

---

##### `UpdateNotificationContent`<sup>Required</sup> <a name="UpdateNotificationContent" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateNotificationContent"></a>

```typescript
public readonly UpdateNotificationContent: string;
```

- *Type:* string

[Write] connect:UpdateNotificationContent.

---

##### `UpdateParticipantAuthentication`<sup>Required</sup> <a name="UpdateParticipantAuthentication" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateParticipantAuthentication"></a>

```typescript
public readonly UpdateParticipantAuthentication: string;
```

- *Type:* string

[Write] connect:UpdateParticipantAuthentication.

---

##### `UpdateParticipantRoleConfig`<sup>Required</sup> <a name="UpdateParticipantRoleConfig" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateParticipantRoleConfig"></a>

```typescript
public readonly UpdateParticipantRoleConfig: string;
```

- *Type:* string

[Write] connect:UpdateParticipantRoleConfig.

---

##### `UpdatePhoneNumber`<sup>Required</sup> <a name="UpdatePhoneNumber" id="@cdk_utils/iam.connect.ConnectActions.property.UpdatePhoneNumber"></a>

```typescript
public readonly UpdatePhoneNumber: string;
```

- *Type:* string

[Write] connect:UpdatePhoneNumber.

---

##### `UpdatePhoneNumberMetadata`<sup>Required</sup> <a name="UpdatePhoneNumberMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.UpdatePhoneNumberMetadata"></a>

```typescript
public readonly UpdatePhoneNumberMetadata: string;
```

- *Type:* string

[Write] connect:UpdatePhoneNumberMetadata.

---

##### `UpdatePredefinedAttribute`<sup>Required</sup> <a name="UpdatePredefinedAttribute" id="@cdk_utils/iam.connect.ConnectActions.property.UpdatePredefinedAttribute"></a>

```typescript
public readonly UpdatePredefinedAttribute: string;
```

- *Type:* string

[Write] connect:UpdatePredefinedAttribute.

---

##### `UpdatePrompt`<sup>Required</sup> <a name="UpdatePrompt" id="@cdk_utils/iam.connect.ConnectActions.property.UpdatePrompt"></a>

```typescript
public readonly UpdatePrompt: string;
```

- *Type:* string

[Write] connect:UpdatePrompt.

---

##### `UpdateQueueHoursOfOperation`<sup>Required</sup> <a name="UpdateQueueHoursOfOperation" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueHoursOfOperation"></a>

```typescript
public readonly UpdateQueueHoursOfOperation: string;
```

- *Type:* string

[Write] connect:UpdateQueueHoursOfOperation.

---

##### `UpdateQueueMaxContacts`<sup>Required</sup> <a name="UpdateQueueMaxContacts" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueMaxContacts"></a>

```typescript
public readonly UpdateQueueMaxContacts: string;
```

- *Type:* string

[Write] connect:UpdateQueueMaxContacts.

---

##### `UpdateQueueName`<sup>Required</sup> <a name="UpdateQueueName" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueName"></a>

```typescript
public readonly UpdateQueueName: string;
```

- *Type:* string

[Write] connect:UpdateQueueName.

---

##### `UpdateQueueOutboundCallerConfig`<sup>Required</sup> <a name="UpdateQueueOutboundCallerConfig" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueOutboundCallerConfig"></a>

```typescript
public readonly UpdateQueueOutboundCallerConfig: string;
```

- *Type:* string

[Write] connect:UpdateQueueOutboundCallerConfig.

---

##### `UpdateQueueOutboundEmailConfig`<sup>Required</sup> <a name="UpdateQueueOutboundEmailConfig" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueOutboundEmailConfig"></a>

```typescript
public readonly UpdateQueueOutboundEmailConfig: string;
```

- *Type:* string

[Write] connect:UpdateQueueOutboundEmailConfig.

---

##### `UpdateQueueStatus`<sup>Required</sup> <a name="UpdateQueueStatus" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateQueueStatus"></a>

```typescript
public readonly UpdateQueueStatus: string;
```

- *Type:* string

[Write] connect:UpdateQueueStatus.

---

##### `UpdateQuickConnectConfig`<sup>Required</sup> <a name="UpdateQuickConnectConfig" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateQuickConnectConfig"></a>

```typescript
public readonly UpdateQuickConnectConfig: string;
```

- *Type:* string

[Write] connect:UpdateQuickConnectConfig.

---

##### `UpdateQuickConnectName`<sup>Required</sup> <a name="UpdateQuickConnectName" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateQuickConnectName"></a>

```typescript
public readonly UpdateQuickConnectName: string;
```

- *Type:* string

[Write] connect:UpdateQuickConnectName.

---

##### `UpdateRoutingProfileAgentAvailabilityTimer`<sup>Required</sup> <a name="UpdateRoutingProfileAgentAvailabilityTimer" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileAgentAvailabilityTimer"></a>

```typescript
public readonly UpdateRoutingProfileAgentAvailabilityTimer: string;
```

- *Type:* string

[Write] connect:UpdateRoutingProfileAgentAvailabilityTimer.

---

##### `UpdateRoutingProfileConcurrency`<sup>Required</sup> <a name="UpdateRoutingProfileConcurrency" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileConcurrency"></a>

```typescript
public readonly UpdateRoutingProfileConcurrency: string;
```

- *Type:* string

[Write] connect:UpdateRoutingProfileConcurrency.

---

##### `UpdateRoutingProfileDefaultOutboundQueue`<sup>Required</sup> <a name="UpdateRoutingProfileDefaultOutboundQueue" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileDefaultOutboundQueue"></a>

```typescript
public readonly UpdateRoutingProfileDefaultOutboundQueue: string;
```

- *Type:* string

[Write] connect:UpdateRoutingProfileDefaultOutboundQueue.

---

##### `UpdateRoutingProfileName`<sup>Required</sup> <a name="UpdateRoutingProfileName" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileName"></a>

```typescript
public readonly UpdateRoutingProfileName: string;
```

- *Type:* string

[Write] connect:UpdateRoutingProfileName.

---

##### `UpdateRoutingProfileQueues`<sup>Required</sup> <a name="UpdateRoutingProfileQueues" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateRoutingProfileQueues"></a>

```typescript
public readonly UpdateRoutingProfileQueues: string;
```

- *Type:* string

[Write] connect:UpdateRoutingProfileQueues.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string;
```

- *Type:* string

[Write] connect:UpdateRule.

---

##### `UpdateSecurityProfile`<sup>Required</sup> <a name="UpdateSecurityProfile" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateSecurityProfile"></a>

```typescript
public readonly UpdateSecurityProfile: string;
```

- *Type:* string

[Write] connect:UpdateSecurityProfile.

---

##### `UpdateTaskTemplate`<sup>Required</sup> <a name="UpdateTaskTemplate" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateTaskTemplate"></a>

```typescript
public readonly UpdateTaskTemplate: string;
```

- *Type:* string

[Write] connect:UpdateTaskTemplate.

---

##### `UpdateTrafficDistribution`<sup>Required</sup> <a name="UpdateTrafficDistribution" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateTrafficDistribution"></a>

```typescript
public readonly UpdateTrafficDistribution: string;
```

- *Type:* string

[Write] connect:UpdateTrafficDistribution.

---

##### `UpdateUserHierarchy`<sup>Required</sup> <a name="UpdateUserHierarchy" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserHierarchy"></a>

```typescript
public readonly UpdateUserHierarchy: string;
```

- *Type:* string

[Write] connect:UpdateUserHierarchy.

---

##### `UpdateUserHierarchyGroupName`<sup>Required</sup> <a name="UpdateUserHierarchyGroupName" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserHierarchyGroupName"></a>

```typescript
public readonly UpdateUserHierarchyGroupName: string;
```

- *Type:* string

[Write] connect:UpdateUserHierarchyGroupName.

---

##### `UpdateUserHierarchyStructure`<sup>Required</sup> <a name="UpdateUserHierarchyStructure" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserHierarchyStructure"></a>

```typescript
public readonly UpdateUserHierarchyStructure: string;
```

- *Type:* string

[Write] connect:UpdateUserHierarchyStructure.

---

##### `UpdateUserIdentityInfo`<sup>Required</sup> <a name="UpdateUserIdentityInfo" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserIdentityInfo"></a>

```typescript
public readonly UpdateUserIdentityInfo: string;
```

- *Type:* string

[Write] connect:UpdateUserIdentityInfo.

---

##### `UpdateUserNotificationStatus`<sup>Required</sup> <a name="UpdateUserNotificationStatus" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserNotificationStatus"></a>

```typescript
public readonly UpdateUserNotificationStatus: string;
```

- *Type:* string

[Write] connect:UpdateUserNotificationStatus.

---

##### `UpdateUserPhoneConfig`<sup>Required</sup> <a name="UpdateUserPhoneConfig" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserPhoneConfig"></a>

```typescript
public readonly UpdateUserPhoneConfig: string;
```

- *Type:* string

[Write] connect:UpdateUserPhoneConfig.

---

##### `UpdateUserProficiencies`<sup>Required</sup> <a name="UpdateUserProficiencies" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserProficiencies"></a>

```typescript
public readonly UpdateUserProficiencies: string;
```

- *Type:* string

[Write] connect:UpdateUserProficiencies.

---

##### `UpdateUserRoutingProfile`<sup>Required</sup> <a name="UpdateUserRoutingProfile" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserRoutingProfile"></a>

```typescript
public readonly UpdateUserRoutingProfile: string;
```

- *Type:* string

[Write] connect:UpdateUserRoutingProfile.

---

##### `UpdateUserSecurityProfiles`<sup>Required</sup> <a name="UpdateUserSecurityProfiles" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateUserSecurityProfiles"></a>

```typescript
public readonly UpdateUserSecurityProfiles: string;
```

- *Type:* string

[Write] connect:UpdateUserSecurityProfiles.

---

##### `UpdateViewContent`<sup>Required</sup> <a name="UpdateViewContent" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateViewContent"></a>

```typescript
public readonly UpdateViewContent: string;
```

- *Type:* string

[Write] connect:UpdateViewContent.

---

##### `UpdateViewMetadata`<sup>Required</sup> <a name="UpdateViewMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateViewMetadata"></a>

```typescript
public readonly UpdateViewMetadata: string;
```

- *Type:* string

[Write] connect:UpdateViewMetadata.

---

##### `UpdateWorkspaceMetadata`<sup>Required</sup> <a name="UpdateWorkspaceMetadata" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateWorkspaceMetadata"></a>

```typescript
public readonly UpdateWorkspaceMetadata: string;
```

- *Type:* string

[Write] connect:UpdateWorkspaceMetadata.

---

##### `UpdateWorkspacePage`<sup>Required</sup> <a name="UpdateWorkspacePage" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateWorkspacePage"></a>

```typescript
public readonly UpdateWorkspacePage: string;
```

- *Type:* string

[Write] connect:UpdateWorkspacePage.

---

##### `UpdateWorkspaceTheme`<sup>Required</sup> <a name="UpdateWorkspaceTheme" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateWorkspaceTheme"></a>

```typescript
public readonly UpdateWorkspaceTheme: string;
```

- *Type:* string

[Write] connect:UpdateWorkspaceTheme.

---

##### `UpdateWorkspaceVisibility`<sup>Required</sup> <a name="UpdateWorkspaceVisibility" id="@cdk_utils/iam.connect.ConnectActions.property.UpdateWorkspaceVisibility"></a>

```typescript
public readonly UpdateWorkspaceVisibility: string;
```

- *Type:* string

[Write] connect:UpdateWorkspaceVisibility.

---

### ConnectConditions <a name="ConnectConditions" id="@cdk_utils/iam.connect.ConnectConditions"></a>

Condition key constants and builders for connect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.connect.ConnectConditions.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

new connect.ConnectConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.assignmentType">assignmentType</a></code> | Generates a condition block for `connect:AssignmentType`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.attributeType">attributeType</a></code> | Generates a condition block for `connect:AttributeType`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.channel">channel</a></code> | Generates a condition block for `connect:Channel`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.contactAssociationId">contactAssociationId</a></code> | Generates a condition block for `connect:ContactAssociationId`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.contactInitiationMethod">contactInitiationMethod</a></code> | Generates a condition block for `connect:ContactInitiationMethod`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.expressionValue">expressionValue</a></code> | Generates a condition block for `connect:ExpressionValue`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.flowType">flowType</a></code> | Generates a condition block for `connect:FlowType`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.instanceId">instanceId</a></code> | Generates a condition block for `connect:InstanceId`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.listRealtimeContactAnalysisSegmentsByOutputType">listRealtimeContactAnalysisSegmentsByOutputType</a></code> | Generates a condition block for `connect:ListRealtimeContactAnalysisSegmentsByOutputType`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.listRealtimeContactAnalysisSegmentsBySegmentType">listRealtimeContactAnalysisSegmentsBySegmentType</a></code> | Generates a condition block for `connect:ListRealtimeContactAnalysisSegmentsBySegmentType`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.monitorCapabilities">monitorCapabilities</a></code> | Generates a condition block for `connect:MonitorCapabilities`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.preferredUserARN">preferredUserARN</a></code> | Generates a condition block for `connect:PreferredUserArn`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.primaryAttribute">primaryAttribute</a></code> | Generates a condition block for `connect:PrimaryAttribute/${PrimaryAttribute}`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.searchContactsByContactAnalysis">searchContactsByContactAnalysis</a></code> | Generates a condition block for `connect:SearchContactsByContactAnalysis`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.searchTag">searchTag</a></code> | Generates a condition block for `connect:SearchTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.storageResourceType">storageResourceType</a></code> | Generates a condition block for `connect:StorageResourceType`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.subtype">subtype</a></code> | Generates a condition block for `connect:Subtype`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.userARN">userARN</a></code> | Generates a condition block for `connect:UserArn`. |

---

##### `assignmentType` <a name="assignmentType" id="@cdk_utils/iam.connect.ConnectConditions.assignmentType"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.assignmentType(value: string)
```

Generates a condition block for `connect:AssignmentType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.assignmentType.parameter.value"></a>

- *Type:* string

---

##### `attributeType` <a name="attributeType" id="@cdk_utils/iam.connect.ConnectConditions.attributeType"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.attributeType(value: string)
```

Generates a condition block for `connect:AttributeType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.attributeType.parameter.value"></a>

- *Type:* string

---

##### `channel` <a name="channel" id="@cdk_utils/iam.connect.ConnectConditions.channel"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.channel(value: string)
```

Generates a condition block for `connect:Channel`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.channel.parameter.value"></a>

- *Type:* string

---

##### `contactAssociationId` <a name="contactAssociationId" id="@cdk_utils/iam.connect.ConnectConditions.contactAssociationId"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.contactAssociationId(value: string)
```

Generates a condition block for `connect:ContactAssociationId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.contactAssociationId.parameter.value"></a>

- *Type:* string

---

##### `contactInitiationMethod` <a name="contactInitiationMethod" id="@cdk_utils/iam.connect.ConnectConditions.contactInitiationMethod"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.contactInitiationMethod(value: string)
```

Generates a condition block for `connect:ContactInitiationMethod`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.contactInitiationMethod.parameter.value"></a>

- *Type:* string

---

##### `expressionValue` <a name="expressionValue" id="@cdk_utils/iam.connect.ConnectConditions.expressionValue"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.expressionValue(value: string)
```

Generates a condition block for `connect:ExpressionValue`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.expressionValue.parameter.value"></a>

- *Type:* string

---

##### `flowType` <a name="flowType" id="@cdk_utils/iam.connect.ConnectConditions.flowType"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.flowType(values: string[])
```

Generates a condition block for `connect:FlowType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.connect.ConnectConditions.flowType.parameter.values"></a>

- *Type:* string[]

---

##### `instanceId` <a name="instanceId" id="@cdk_utils/iam.connect.ConnectConditions.instanceId"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.instanceId(value: string)
```

Generates a condition block for `connect:InstanceId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.instanceId.parameter.value"></a>

- *Type:* string

---

##### `listRealtimeContactAnalysisSegmentsByOutputType` <a name="listRealtimeContactAnalysisSegmentsByOutputType" id="@cdk_utils/iam.connect.ConnectConditions.listRealtimeContactAnalysisSegmentsByOutputType"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.listRealtimeContactAnalysisSegmentsByOutputType(value: string)
```

Generates a condition block for `connect:ListRealtimeContactAnalysisSegmentsByOutputType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.listRealtimeContactAnalysisSegmentsByOutputType.parameter.value"></a>

- *Type:* string

---

##### `listRealtimeContactAnalysisSegmentsBySegmentType` <a name="listRealtimeContactAnalysisSegmentsBySegmentType" id="@cdk_utils/iam.connect.ConnectConditions.listRealtimeContactAnalysisSegmentsBySegmentType"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.listRealtimeContactAnalysisSegmentsBySegmentType(values: string[])
```

Generates a condition block for `connect:ListRealtimeContactAnalysisSegmentsBySegmentType`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.connect.ConnectConditions.listRealtimeContactAnalysisSegmentsBySegmentType.parameter.values"></a>

- *Type:* string[]

---

##### `monitorCapabilities` <a name="monitorCapabilities" id="@cdk_utils/iam.connect.ConnectConditions.monitorCapabilities"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.monitorCapabilities(values: string[])
```

Generates a condition block for `connect:MonitorCapabilities`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.connect.ConnectConditions.monitorCapabilities.parameter.values"></a>

- *Type:* string[]

---

##### `preferredUserARN` <a name="preferredUserARN" id="@cdk_utils/iam.connect.ConnectConditions.preferredUserARN"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.preferredUserARN(value: string)
```

Generates a condition block for `connect:PreferredUserArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.preferredUserARN.parameter.value"></a>

- *Type:* string

---

##### `primaryAttribute` <a name="primaryAttribute" id="@cdk_utils/iam.connect.ConnectConditions.primaryAttribute"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.primaryAttribute(value: string)
```

Generates a condition block for `connect:PrimaryAttribute/${PrimaryAttribute}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.primaryAttribute.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.connect.ConnectConditions.requestTag"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.connect.ConnectConditions.resourceTag"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `searchContactsByContactAnalysis` <a name="searchContactsByContactAnalysis" id="@cdk_utils/iam.connect.ConnectConditions.searchContactsByContactAnalysis"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.searchContactsByContactAnalysis(values: string[])
```

Generates a condition block for `connect:SearchContactsByContactAnalysis`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.connect.ConnectConditions.searchContactsByContactAnalysis.parameter.values"></a>

- *Type:* string[]

---

##### `searchTag` <a name="searchTag" id="@cdk_utils/iam.connect.ConnectConditions.searchTag"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.searchTag(value: string)
```

Generates a condition block for `connect:SearchTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.searchTag.parameter.value"></a>

- *Type:* string

---

##### `storageResourceType` <a name="storageResourceType" id="@cdk_utils/iam.connect.ConnectConditions.storageResourceType"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.storageResourceType(value: string)
```

Generates a condition block for `connect:StorageResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.storageResourceType.parameter.value"></a>

- *Type:* string

---

##### `subtype` <a name="subtype" id="@cdk_utils/iam.connect.ConnectConditions.subtype"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.subtype(value: string)
```

Generates a condition block for `connect:Subtype`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.subtype.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.connect.ConnectConditions.tagKeys"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.connect.ConnectConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userARN` <a name="userARN" id="@cdk_utils/iam.connect.ConnectConditions.userARN"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectConditions.userARN(value: string)
```

Generates a condition block for `connect:UserArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect.ConnectConditions.userARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetAttachedFileConditionKeys">actionGetAttachedFileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAttachedFile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetContactAttributesConditionKeys">actionGetContactAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetContactAttributes action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetContactMetricsConditionKeys">actionGetContactMetricsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetContactMetrics action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetCurrentMetricDataConditionKeys">actionGetCurrentMetricDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCurrentMetricData action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetCurrentUserDataConditionKeys">actionGetCurrentUserDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCurrentUserData action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetEffectiveHoursOfOperationsConditionKeys">actionGetEffectiveHoursOfOperationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEffectiveHoursOfOperations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetEvaluationFormValidationConditionKeys">actionGetEvaluationFormValidationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEvaluationFormValidation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetFederationTokenConditionKeys">actionGetFederationTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetFederationToken action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetFlowAssociationConditionKeys">actionGetFlowAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetFlowAssociation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetMetricDataConditionKeys">actionGetMetricDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMetricData action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetMetricDataV2ConditionKeys">actionGetMetricDataV2ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMetricDataV2 action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetPromptFileConditionKeys">actionGetPromptFileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPromptFile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetTaskTemplateConditionKeys">actionGetTaskTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTaskTemplate action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.actionGetTrafficDistributionConditionKeys">actionGetTrafficDistributionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTrafficDistribution action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ActivateEvaluationFormConditionKeys">ActivateEvaluationFormConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ActivateEvaluationForm action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ASSIGNMENT_TYPE">ASSIGNMENT_TYPE</a></code> | <code>string</code> | Condition key: connect:AssignmentType (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateAnalyticsDataSetConditionKeys">AssociateAnalyticsDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateAnalyticsDataSet action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateApprovedOriginConditionKeys">AssociateApprovedOriginConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateApprovedOrigin action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateBotConditionKeys">AssociateBotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateBot action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateContactWithUserConditionKeys">AssociateContactWithUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateContactWithUser action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateDefaultVocabularyConditionKeys">AssociateDefaultVocabularyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateDefaultVocabulary action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateEmailAddressAliasConditionKeys">AssociateEmailAddressAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateEmailAddressAlias action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateFlowConditionKeys">AssociateFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateFlow action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateInstanceStorageConfigConditionKeys">AssociateInstanceStorageConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateInstanceStorageConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateLambdaFunctionConditionKeys">AssociateLambdaFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateLambdaFunction action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateLexBotConditionKeys">AssociateLexBotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateLexBot action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociatePhoneNumberContactFlowConditionKeys">AssociatePhoneNumberContactFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociatePhoneNumberContactFlow action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateQueueEmailAddressesConditionKeys">AssociateQueueEmailAddressesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateQueueEmailAddresses action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateQueueQuickConnectsConditionKeys">AssociateQueueQuickConnectsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateQueueQuickConnects action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateRoutingProfileQueuesConditionKeys">AssociateRoutingProfileQueuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateRoutingProfileQueues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateSecurityKeyConditionKeys">AssociateSecurityKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateSecurityKey action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateSecurityProfilesConditionKeys">AssociateSecurityProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateSecurityProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateTrafficDistributionGroupUserConditionKeys">AssociateTrafficDistributionGroupUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateTrafficDistributionGroupUser action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateUserProficienciesConditionKeys">AssociateUserProficienciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateUserProficiencies action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AssociateWorkspaceConditionKeys">AssociateWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateWorkspace action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ATTRIBUTE_TYPE">ATTRIBUTE_TYPE</a></code> | <code>string</code> | Condition key: connect:AttributeType (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchAssociateAnalyticsDataSetConditionKeys">BatchAssociateAnalyticsDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchAssociateAnalyticsDataSet action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchCreateDataTableValueConditionKeys">BatchCreateDataTableValueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchCreateDataTableValue action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchDeleteDataTableValueConditionKeys">BatchDeleteDataTableValueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDeleteDataTableValue action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchDescribeDataTableValueConditionKeys">BatchDescribeDataTableValueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDescribeDataTableValue action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchDisassociateAnalyticsDataSetConditionKeys">BatchDisassociateAnalyticsDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDisassociateAnalyticsDataSet action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchGetAttachedFileMetadataConditionKeys">BatchGetAttachedFileMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetAttachedFileMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchGetFlowAssociationConditionKeys">BatchGetFlowAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchGetFlowAssociation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchPutContactConditionKeys">BatchPutContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchPutContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.BatchUpdateDataTableValueConditionKeys">BatchUpdateDataTableValueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchUpdateDataTableValue action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CHANNEL">CHANNEL</a></code> | <code>string</code> | Condition key: connect:Channel (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ClaimPhoneNumberConditionKeys">ClaimPhoneNumberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ClaimPhoneNumber action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CompleteAttachedFileUploadConditionKeys">CompleteAttachedFileUploadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CompleteAttachedFileUpload action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CONTACT_ASSOCIATION_ID">CONTACT_ASSOCIATION_ID</a></code> | <code>string</code> | Condition key: connect:ContactAssociationId (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CONTACT_INITIATION_METHOD">CONTACT_INITIATION_METHOD</a></code> | <code>string</code> | Condition key: connect:ContactInitiationMethod (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateAgentStatusConditionKeys">CreateAgentStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentStatus action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateAttachedFileConditionKeys">CreateAttachedFileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAttachedFile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateAuthenticationProfileConditionKeys">CreateAuthenticationProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAuthenticationProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateContactConditionKeys">CreateContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowConditionKeys">CreateContactFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContactFlow action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowModuleAliasConditionKeys">CreateContactFlowModuleAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContactFlowModuleAlias action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowModuleConditionKeys">CreateContactFlowModuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContactFlowModule action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowModuleVersionConditionKeys">CreateContactFlowModuleVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContactFlowModuleVersion action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowVersionConditionKeys">CreateContactFlowVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContactFlowVersion action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateDataTableAttributeConditionKeys">CreateDataTableAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataTableAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateDataTableConditionKeys">CreateDataTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataTable action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateEmailAddressConditionKeys">CreateEmailAddressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEmailAddress action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateEvaluationFormConditionKeys">CreateEvaluationFormConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEvaluationForm action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateHoursOfOperationConditionKeys">CreateHoursOfOperationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHoursOfOperation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateHoursOfOperationOverrideConditionKeys">CreateHoursOfOperationOverrideConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHoursOfOperationOverride action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateInstanceConditionKeys">CreateInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstance action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateIntegrationAssociationConditionKeys">CreateIntegrationAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIntegrationAssociation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateMetricConditionKeys">CreateMetricConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMetric action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateNotificationConditionKeys">CreateNotificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotification action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateParticipantConditionKeys">CreateParticipantConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateParticipant action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreatePersistentContactAssociationConditionKeys">CreatePersistentContactAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePersistentContactAssociation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreatePredefinedAttributeConditionKeys">CreatePredefinedAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePredefinedAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreatePromptConditionKeys">CreatePromptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePrompt action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreatePushNotificationRegistrationConditionKeys">CreatePushNotificationRegistrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePushNotificationRegistration action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateQueueConditionKeys">CreateQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQueue action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateQuickConnectConditionKeys">CreateQuickConnectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQuickConnect action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateRoutingProfileConditionKeys">CreateRoutingProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRoutingProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateRuleConditionKeys">CreateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRule action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateSecurityProfileConditionKeys">CreateSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateTrafficDistributionGroupConditionKeys">CreateTrafficDistributionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrafficDistributionGroup action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateUseCaseConditionKeys">CreateUseCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUseCase action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateUserConditionKeys">CreateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUser action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateUserHierarchyGroupConditionKeys">CreateUserHierarchyGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUserHierarchyGroup action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateViewConditionKeys">CreateViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateView action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateViewVersionConditionKeys">CreateViewVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateViewVersion action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateVocabularyConditionKeys">CreateVocabularyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVocabulary action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateWorkspaceConditionKeys">CreateWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkspace action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.CreateWorkspacePageConditionKeys">CreateWorkspacePageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkspacePage action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeactivateEvaluationFormConditionKeys">DeactivateEvaluationFormConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeactivateEvaluationForm action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteAttachedFileConditionKeys">DeleteAttachedFileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAttachedFile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactEvaluationConditionKeys">DeleteContactEvaluationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteContactEvaluation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowConditionKeys">DeleteContactFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteContactFlow action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowModuleAliasConditionKeys">DeleteContactFlowModuleAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteContactFlowModuleAlias action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowModuleConditionKeys">DeleteContactFlowModuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteContactFlowModule action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowModuleVersionConditionKeys">DeleteContactFlowModuleVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteContactFlowModuleVersion action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowVersionConditionKeys">DeleteContactFlowVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteContactFlowVersion action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteDataTableAttributeConditionKeys">DeleteDataTableAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDataTableAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteDataTableConditionKeys">DeleteDataTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDataTable action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteEmailAddressConditionKeys">DeleteEmailAddressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEmailAddress action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteEvaluationFormConditionKeys">DeleteEvaluationFormConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEvaluationForm action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteHoursOfOperationConditionKeys">DeleteHoursOfOperationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteHoursOfOperation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteHoursOfOperationOverrideConditionKeys">DeleteHoursOfOperationOverrideConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteHoursOfOperationOverride action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteInstanceConditionKeys">DeleteInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteInstance action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteIntegrationAssociationConditionKeys">DeleteIntegrationAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIntegrationAssociation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteMetricConditionKeys">DeleteMetricConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteMetric action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteNotificationConditionKeys">DeleteNotificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteNotification action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeletePredefinedAttributeConditionKeys">DeletePredefinedAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePredefinedAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeletePromptConditionKeys">DeletePromptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePrompt action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeletePushNotificationRegistrationConditionKeys">DeletePushNotificationRegistrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePushNotificationRegistration action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteQueueConditionKeys">DeleteQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteQueue action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteQuickConnectConditionKeys">DeleteQuickConnectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteQuickConnect action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteRoutingProfileConditionKeys">DeleteRoutingProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRoutingProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteRuleConditionKeys">DeleteRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRule action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteSecurityProfileConditionKeys">DeleteSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteTaskTemplateConditionKeys">DeleteTaskTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTaskTemplate action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteTrafficDistributionGroupConditionKeys">DeleteTrafficDistributionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTrafficDistributionGroup action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteUseCaseConditionKeys">DeleteUseCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUseCase action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteUserConditionKeys">DeleteUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUser action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteUserHierarchyGroupConditionKeys">DeleteUserHierarchyGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUserHierarchyGroup action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteViewConditionKeys">DeleteViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteView action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteViewVersionConditionKeys">DeleteViewVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteViewVersion action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteVocabularyConditionKeys">DeleteVocabularyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteVocabulary action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteWorkspaceConditionKeys">DeleteWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteWorkspace action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteWorkspaceMediaConditionKeys">DeleteWorkspaceMediaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteWorkspaceMedia action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DeleteWorkspacePageConditionKeys">DeleteWorkspacePageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteWorkspacePage action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeAgentStatusConditionKeys">DescribeAgentStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAgentStatus action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeAttachedFilesConfigurationConditionKeys">DescribeAttachedFilesConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAttachedFilesConfiguration action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeAuthenticationProfileConditionKeys">DescribeAuthenticationProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAuthenticationProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactConditionKeys">DescribeContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactEvaluationConditionKeys">DescribeContactEvaluationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeContactEvaluation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactFlowConditionKeys">DescribeContactFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeContactFlow action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactFlowModuleAliasConditionKeys">DescribeContactFlowModuleAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeContactFlowModuleAlias action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactFlowModuleConditionKeys">DescribeContactFlowModuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeContactFlowModule action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeDataTableAttributeConditionKeys">DescribeDataTableAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDataTableAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeDataTableConditionKeys">DescribeDataTableConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDataTable action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeEmailAddressConditionKeys">DescribeEmailAddressConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeEmailAddress action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeEvaluationFormConditionKeys">DescribeEvaluationFormConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeEvaluationForm action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeForecastingPlanningSchedulingIntegrationConditionKeys">DescribeForecastingPlanningSchedulingIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeForecastingPlanningSchedulingIntegration action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeHoursOfOperationConditionKeys">DescribeHoursOfOperationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeHoursOfOperation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeHoursOfOperationOverrideConditionKeys">DescribeHoursOfOperationOverrideConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeHoursOfOperationOverride action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeInstanceAttributeConditionKeys">DescribeInstanceAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeInstanceAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeInstanceConditionKeys">DescribeInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeInstance action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeInstanceStorageConfigConditionKeys">DescribeInstanceStorageConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeInstanceStorageConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeMetricConditionKeys">DescribeMetricConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeMetric action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeNotificationConditionKeys">DescribeNotificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeNotification action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribePhoneNumberConditionKeys">DescribePhoneNumberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribePhoneNumber action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribePredefinedAttributeConditionKeys">DescribePredefinedAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribePredefinedAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribePromptConditionKeys">DescribePromptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribePrompt action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeQueueConditionKeys">DescribeQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeQueue action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeQuickConnectConditionKeys">DescribeQuickConnectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeQuickConnect action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeRoutingProfileConditionKeys">DescribeRoutingProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeRoutingProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeRuleConditionKeys">DescribeRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeRule action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeSecurityProfileConditionKeys">DescribeSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeTrafficDistributionGroupConditionKeys">DescribeTrafficDistributionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeTrafficDistributionGroup action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeUserConditionKeys">DescribeUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUser action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeUserHierarchyGroupConditionKeys">DescribeUserHierarchyGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUserHierarchyGroup action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeUserHierarchyStructureConditionKeys">DescribeUserHierarchyStructureConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUserHierarchyStructure action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeViewConditionKeys">DescribeViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeView action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeVocabularyConditionKeys">DescribeVocabularyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeVocabulary action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DescribeWorkspaceConditionKeys">DescribeWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeWorkspace action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateAnalyticsDataSetConditionKeys">DisassociateAnalyticsDataSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateAnalyticsDataSet action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateApprovedOriginConditionKeys">DisassociateApprovedOriginConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateApprovedOrigin action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateBotConditionKeys">DisassociateBotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateBot action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateEmailAddressAliasConditionKeys">DisassociateEmailAddressAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateEmailAddressAlias action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateFlowConditionKeys">DisassociateFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateFlow action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateInstanceStorageConfigConditionKeys">DisassociateInstanceStorageConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateInstanceStorageConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateLambdaFunctionConditionKeys">DisassociateLambdaFunctionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateLambdaFunction action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateLexBotConditionKeys">DisassociateLexBotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateLexBot action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociatePhoneNumberContactFlowConditionKeys">DisassociatePhoneNumberContactFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociatePhoneNumberContactFlow action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateQueueEmailAddressesConditionKeys">DisassociateQueueEmailAddressesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateQueueEmailAddresses action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateQueueQuickConnectsConditionKeys">DisassociateQueueQuickConnectsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateQueueQuickConnects action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateRoutingProfileQueuesConditionKeys">DisassociateRoutingProfileQueuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateRoutingProfileQueues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateSecurityKeyConditionKeys">DisassociateSecurityKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateSecurityKey action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateSecurityProfilesConditionKeys">DisassociateSecurityProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateSecurityProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateTrafficDistributionGroupUserConditionKeys">DisassociateTrafficDistributionGroupUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateTrafficDistributionGroupUser action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateUserProficienciesConditionKeys">DisassociateUserProficienciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateUserProficiencies action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DisassociateWorkspaceConditionKeys">DisassociateWorkspaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateWorkspace action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.DismissUserContactConditionKeys">DismissUserContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DismissUserContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.EvaluateDataTableValuesConditionKeys">EvaluateDataTableValuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EvaluateDataTableValues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.EXPRESSION_VALUE">EXPRESSION_VALUE</a></code> | <code>string</code> | Condition key: connect:ExpressionValue (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.FLOW_TYPE">FLOW_TYPE</a></code> | <code>string</code> | Condition key: connect:FlowType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ImportPhoneNumberConditionKeys">ImportPhoneNumberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportPhoneNumber action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ImportWorkspaceMediaConditionKeys">ImportWorkspaceMediaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportWorkspaceMedia action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.INSTANCE_ID">INSTANCE_ID</a></code> | <code>string</code> | Condition key: connect:InstanceId (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_OUTPUT_TYPE">LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_OUTPUT_TYPE</a></code> | <code>string</code> | Condition key: connect:ListRealtimeContactAnalysisSegmentsByOutputType (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_SEGMENT_TYPE">LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_SEGMENT_TYPE</a></code> | <code>string</code> | Condition key: connect:ListRealtimeContactAnalysisSegmentsBySegmentType (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListAnalyticsDataAssociationsConditionKeys">ListAnalyticsDataAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAnalyticsDataAssociations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListAnalyticsDataLakeDataSetsConditionKeys">ListAnalyticsDataLakeDataSetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAnalyticsDataLakeDataSets action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListApprovedOriginsConditionKeys">ListApprovedOriginsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListApprovedOrigins action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListAssociatedContactsConditionKeys">ListAssociatedContactsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAssociatedContacts action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListAttachedFilesConfigurationsConditionKeys">ListAttachedFilesConfigurationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAttachedFilesConfigurations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListAuthenticationProfilesConditionKeys">ListAuthenticationProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAuthenticationProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListBotsConditionKeys">ListBotsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBots action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListContactEvaluationsConditionKeys">ListContactEvaluationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListContactEvaluations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListContactFlowModuleAliasesConditionKeys">ListContactFlowModuleAliasesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListContactFlowModuleAliases action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListContactFlowModuleVersionsConditionKeys">ListContactFlowModuleVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListContactFlowModuleVersions action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListContactFlowsConditionKeys">ListContactFlowsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListContactFlows action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListContactFlowVersionsConditionKeys">ListContactFlowVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListContactFlowVersions action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListContactReferencesConditionKeys">ListContactReferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListContactReferences action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListDataTableAttributesConditionKeys">ListDataTableAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDataTableAttributes action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListDataTablePrimaryValuesConditionKeys">ListDataTablePrimaryValuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDataTablePrimaryValues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListDataTablesConditionKeys">ListDataTablesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDataTables action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListDataTableValuesConditionKeys">ListDataTableValuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDataTableValues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListDefaultVocabulariesConditionKeys">ListDefaultVocabulariesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDefaultVocabularies action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListEntitySecurityProfilesConditionKeys">ListEntitySecurityProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEntitySecurityProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListEvaluationFormsConditionKeys">ListEvaluationFormsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEvaluationForms action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListEvaluationFormVersionsConditionKeys">ListEvaluationFormVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEvaluationFormVersions action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListFlowAssociationsConditionKeys">ListFlowAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListFlowAssociations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListHoursOfOperationOverridesConditionKeys">ListHoursOfOperationOverridesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListHoursOfOperationOverrides action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListHoursOfOperationsConditionKeys">ListHoursOfOperationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListHoursOfOperations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListInstanceAttributesConditionKeys">ListInstanceAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListInstanceAttributes action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListInstanceStorageConfigsConditionKeys">ListInstanceStorageConfigsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListInstanceStorageConfigs action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListIntegrationAssociationsConditionKeys">ListIntegrationAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListIntegrationAssociations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListLambdaFunctionsConditionKeys">ListLambdaFunctionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListLambdaFunctions action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListLexBotsConditionKeys">ListLexBotsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListLexBots action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListMetricsConditionKeys">ListMetricsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMetrics action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListNotificationsConditionKeys">ListNotificationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListNotifications action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListPredefinedAttributesConditionKeys">ListPredefinedAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPredefinedAttributes action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListPromptsConditionKeys">ListPromptsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPrompts action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListQueueEmailAddressesConditionKeys">ListQueueEmailAddressesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListQueueEmailAddresses action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListQueueQuickConnectsConditionKeys">ListQueueQuickConnectsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListQueueQuickConnects action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListRealtimeContactAnalysisSegmentsConditionKeys">ListRealtimeContactAnalysisSegmentsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRealtimeContactAnalysisSegments action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListRealtimeContactAnalysisSegmentsV2ConditionKeys">ListRealtimeContactAnalysisSegmentsV2ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRealtimeContactAnalysisSegmentsV2 action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListRoutingProfileManualAssignmentQueuesConditionKeys">ListRoutingProfileManualAssignmentQueuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRoutingProfileManualAssignmentQueues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListRoutingProfileQueuesConditionKeys">ListRoutingProfileQueuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRoutingProfileQueues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListRoutingProfilesConditionKeys">ListRoutingProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRoutingProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListRulesConditionKeys">ListRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRules action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityKeysConditionKeys">ListSecurityKeysConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSecurityKeys action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityProfileApplicationsConditionKeys">ListSecurityProfileApplicationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSecurityProfileApplications action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityProfileFlowModulesConditionKeys">ListSecurityProfileFlowModulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSecurityProfileFlowModules action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityProfilePermissionsConditionKeys">ListSecurityProfilePermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSecurityProfilePermissions action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityProfilesConditionKeys">ListSecurityProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSecurityProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListTrafficDistributionGroupUsersConditionKeys">ListTrafficDistributionGroupUsersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTrafficDistributionGroupUsers action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListUseCasesConditionKeys">ListUseCasesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListUseCases action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListUserHierarchyGroupsConditionKeys">ListUserHierarchyGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListUserHierarchyGroups action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListUserNotificationsConditionKeys">ListUserNotificationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListUserNotifications action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListUserProficienciesConditionKeys">ListUserProficienciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListUserProficiencies action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListUsersConditionKeys">ListUsersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListUsers action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListViewsConditionKeys">ListViewsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListViews action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListViewVersionsConditionKeys">ListViewVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListViewVersions action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListWorkspaceMediaConditionKeys">ListWorkspaceMediaConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListWorkspaceMedia action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListWorkspacePagesConditionKeys">ListWorkspacePagesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListWorkspacePages action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ListWorkspacesConditionKeys">ListWorkspacesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListWorkspaces action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.MONITOR_CAPABILITIES">MONITOR_CAPABILITIES</a></code> | <code>string</code> | Condition key: connect:MonitorCapabilities (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.MonitorContactConditionKeys">MonitorContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the MonitorContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.PauseContactConditionKeys">PauseContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PauseContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.PREFERRED_USER_ARN">PREFERRED_USER_ARN</a></code> | <code>string</code> | Condition key: connect:PreferredUserArn (ARN). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.PRIMARY_ATTRIBUTE">PRIMARY_ATTRIBUTE</a></code> | <code>string</code> | Condition key: connect:PrimaryAttribute/${PrimaryAttribute} (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.PutUserStatusConditionKeys">PutUserStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutUserStatus action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ReleasePhoneNumberConditionKeys">ReleasePhoneNumberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReleasePhoneNumber action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ReplicateInstanceConditionKeys">ReplicateInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReplicateInstance action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ResumeContactConditionKeys">ResumeContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ResumeContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.ResumeContactRecordingConditionKeys">ResumeContactRecordingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ResumeContactRecording action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SEARCH_CONTACTS_BY_CONTACT_ANALYSIS">SEARCH_CONTACTS_BY_CONTACT_ANALYSIS</a></code> | <code>string</code> | Condition key: connect:SearchContactsByContactAnalysis (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SEARCH_TAG">SEARCH_TAG</a></code> | <code>string</code> | Condition key: connect:SearchTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchAgentStatusesConditionKeys">SearchAgentStatusesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchAgentStatuses action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchContactEvaluationsConditionKeys">SearchContactEvaluationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchContactEvaluations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchContactFlowModulesConditionKeys">SearchContactFlowModulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchContactFlowModules action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchContactFlowsConditionKeys">SearchContactFlowsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchContactFlows action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchContactsConditionKeys">SearchContactsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchContacts action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchDataTablesConditionKeys">SearchDataTablesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchDataTables action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchEmailAddressesConditionKeys">SearchEmailAddressesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchEmailAddresses action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchEvaluationFormsConditionKeys">SearchEvaluationFormsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchEvaluationForms action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchHoursOfOperationOverridesConditionKeys">SearchHoursOfOperationOverridesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchHoursOfOperationOverrides action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchHoursOfOperationsConditionKeys">SearchHoursOfOperationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchHoursOfOperations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchMetricsConditionKeys">SearchMetricsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchMetrics action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchNotificationsConditionKeys">SearchNotificationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchNotifications action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchPredefinedAttributesConditionKeys">SearchPredefinedAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchPredefinedAttributes action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchPromptsConditionKeys">SearchPromptsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchPrompts action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchQueuesConditionKeys">SearchQueuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchQueues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchQuickConnectsConditionKeys">SearchQuickConnectsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchQuickConnects action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchResourceTagsConditionKeys">SearchResourceTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchResourceTags action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchRoutingProfilesConditionKeys">SearchRoutingProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchRoutingProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchRulesConditionKeys">SearchRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchRules action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchSecurityProfilesConditionKeys">SearchSecurityProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchSecurityProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchUserHierarchyGroupsConditionKeys">SearchUserHierarchyGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchUserHierarchyGroups action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchUsersConditionKeys">SearchUsersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchUsers action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchViewsConditionKeys">SearchViewsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchViews action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchVocabulariesConditionKeys">SearchVocabulariesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchVocabularies action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchWorkspaceAssociationsConditionKeys">SearchWorkspaceAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchWorkspaceAssociations action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SearchWorkspacesConditionKeys">SearchWorkspacesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchWorkspaces action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SendOutboundChatMessageConditionKeys">SendOutboundChatMessageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendOutboundChatMessage action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SendOutboundEmailConditionKeys">SendOutboundEmailConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendOutboundEmail action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SendOutboundWebNotificationConditionKeys">SendOutboundWebNotificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendOutboundWebNotification action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartAttachedFileUploadConditionKeys">StartAttachedFileUploadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAttachedFileUpload action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartChatContactConditionKeys">StartChatContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartChatContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartContactConversationalAnalyticsJobConditionKeys">StartContactConversationalAnalyticsJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartContactConversationalAnalyticsJob action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartContactEvaluationConditionKeys">StartContactEvaluationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartContactEvaluation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartContactMediaProcessingConditionKeys">StartContactMediaProcessingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartContactMediaProcessing action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartContactRecordingConditionKeys">StartContactRecordingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartContactRecording action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartContactStreamingConditionKeys">StartContactStreamingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartContactStreaming action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartEmailContactConditionKeys">StartEmailContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartEmailContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartEvaluationFormValidationConditionKeys">StartEvaluationFormValidationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartEvaluationFormValidation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartForecastingPlanningSchedulingIntegrationConditionKeys">StartForecastingPlanningSchedulingIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartForecastingPlanningSchedulingIntegration action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartOutboundChatContactConditionKeys">StartOutboundChatContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartOutboundChatContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartOutboundEmailContactConditionKeys">StartOutboundEmailContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartOutboundEmailContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartScreenSharingConditionKeys">StartScreenSharingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartScreenSharing action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartTaskContactConditionKeys">StartTaskContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTaskContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StartWebRTCContactConditionKeys">StartWebRTCContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartWebRTCContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StopContactConditionKeys">StopContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StopContactMediaProcessingConditionKeys">StopContactMediaProcessingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopContactMediaProcessing action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StopContactRecordingConditionKeys">StopContactRecordingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopContactRecording action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StopContactStreamingConditionKeys">StopContactStreamingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopContactStreaming action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.StopForecastingPlanningSchedulingIntegrationConditionKeys">StopForecastingPlanningSchedulingIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopForecastingPlanningSchedulingIntegration action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.STORAGE_RESOURCE_TYPE">STORAGE_RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: connect:StorageResourceType (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SubmitContactEvaluationConditionKeys">SubmitContactEvaluationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SubmitContactEvaluation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SUBTYPE">SUBTYPE</a></code> | <code>string</code> | Condition key: connect:Subtype (String). |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.SuspendContactRecordingConditionKeys">SuspendContactRecordingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SuspendContactRecording action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.TagContactConditionKeys">TagContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.TransferContactConditionKeys">TransferContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TransferContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UntagContactConditionKeys">UntagContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateAgentStatusConditionKeys">UpdateAgentStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAgentStatus action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateAttachedFilesConfigurationConditionKeys">UpdateAttachedFilesConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAttachedFilesConfiguration action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateAuthenticationProfileConditionKeys">UpdateAuthenticationProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAuthenticationProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactAttributesConditionKeys">UpdateContactAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactAttributes action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactConditionKeys">UpdateContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContact action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactEvaluationConditionKeys">UpdateContactEvaluationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactEvaluation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowContentConditionKeys">UpdateContactFlowContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactFlowContent action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowMetadataConditionKeys">UpdateContactFlowMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactFlowMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowModuleAliasConditionKeys">UpdateContactFlowModuleAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactFlowModuleAlias action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowModuleContentConditionKeys">UpdateContactFlowModuleContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactFlowModuleContent action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowModuleMetadataConditionKeys">UpdateContactFlowModuleMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactFlowModuleMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowNameConditionKeys">UpdateContactFlowNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactFlowName action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactRoutingDataConditionKeys">UpdateContactRoutingDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactRoutingData action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactScheduleConditionKeys">UpdateContactScheduleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateContactSchedule action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateDataTableAttributeConditionKeys">UpdateDataTableAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataTableAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateDataTableMetadataConditionKeys">UpdateDataTableMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataTableMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateDataTablePrimaryValuesConditionKeys">UpdateDataTablePrimaryValuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDataTablePrimaryValues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateEmailAddressMetadataConditionKeys">UpdateEmailAddressMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEmailAddressMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateEvaluationFormConditionKeys">UpdateEvaluationFormConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEvaluationForm action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateHoursOfOperationConditionKeys">UpdateHoursOfOperationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateHoursOfOperation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateHoursOfOperationOverrideConditionKeys">UpdateHoursOfOperationOverrideConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateHoursOfOperationOverride action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateInstanceAttributeConditionKeys">UpdateInstanceAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInstanceAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateInstanceStorageConfigConditionKeys">UpdateInstanceStorageConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInstanceStorageConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateMetricContentConditionKeys">UpdateMetricContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateMetricContent action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateMetricMetadataConditionKeys">UpdateMetricMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateMetricMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateNotificationContentConditionKeys">UpdateNotificationContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateNotificationContent action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateParticipantAuthenticationConditionKeys">UpdateParticipantAuthenticationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateParticipantAuthentication action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateParticipantRoleConfigConditionKeys">UpdateParticipantRoleConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateParticipantRoleConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdatePhoneNumberConditionKeys">UpdatePhoneNumberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePhoneNumber action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdatePhoneNumberMetadataConditionKeys">UpdatePhoneNumberMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePhoneNumberMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdatePredefinedAttributeConditionKeys">UpdatePredefinedAttributeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePredefinedAttribute action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdatePromptConditionKeys">UpdatePromptConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePrompt action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueHoursOfOperationConditionKeys">UpdateQueueHoursOfOperationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQueueHoursOfOperation action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueMaxContactsConditionKeys">UpdateQueueMaxContactsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQueueMaxContacts action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueNameConditionKeys">UpdateQueueNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQueueName action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueOutboundCallerConfigConditionKeys">UpdateQueueOutboundCallerConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQueueOutboundCallerConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueOutboundEmailConfigConditionKeys">UpdateQueueOutboundEmailConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQueueOutboundEmailConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueStatusConditionKeys">UpdateQueueStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQueueStatus action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateQuickConnectConfigConditionKeys">UpdateQuickConnectConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQuickConnectConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateQuickConnectNameConditionKeys">UpdateQuickConnectNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateQuickConnectName action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileAgentAvailabilityTimerConditionKeys">UpdateRoutingProfileAgentAvailabilityTimerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoutingProfileAgentAvailabilityTimer action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileConcurrencyConditionKeys">UpdateRoutingProfileConcurrencyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoutingProfileConcurrency action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileDefaultOutboundQueueConditionKeys">UpdateRoutingProfileDefaultOutboundQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoutingProfileDefaultOutboundQueue action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileNameConditionKeys">UpdateRoutingProfileNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoutingProfileName action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileQueuesConditionKeys">UpdateRoutingProfileQueuesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoutingProfileQueues action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateRuleConditionKeys">UpdateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRule action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateSecurityProfileConditionKeys">UpdateSecurityProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSecurityProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateTaskTemplateConditionKeys">UpdateTaskTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTaskTemplate action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateTrafficDistributionConditionKeys">UpdateTrafficDistributionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTrafficDistribution action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserHierarchyConditionKeys">UpdateUserHierarchyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserHierarchy action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserHierarchyGroupNameConditionKeys">UpdateUserHierarchyGroupNameConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserHierarchyGroupName action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserHierarchyStructureConditionKeys">UpdateUserHierarchyStructureConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserHierarchyStructure action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserIdentityInfoConditionKeys">UpdateUserIdentityInfoConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserIdentityInfo action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserNotificationStatusConditionKeys">UpdateUserNotificationStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserNotificationStatus action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserPhoneConfigConditionKeys">UpdateUserPhoneConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserPhoneConfig action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserProficienciesConditionKeys">UpdateUserProficienciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserProficiencies action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserRoutingProfileConditionKeys">UpdateUserRoutingProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserRoutingProfile action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserSecurityProfilesConditionKeys">UpdateUserSecurityProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserSecurityProfiles action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateViewContentConditionKeys">UpdateViewContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateViewContent action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateViewMetadataConditionKeys">UpdateViewMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateViewMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateWorkspaceMetadataConditionKeys">UpdateWorkspaceMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkspaceMetadata action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateWorkspacePageConditionKeys">UpdateWorkspacePageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkspacePage action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateWorkspaceThemeConditionKeys">UpdateWorkspaceThemeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkspaceTheme action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.UpdateWorkspaceVisibilityConditionKeys">UpdateWorkspaceVisibilityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkspaceVisibility action. |
| <code><a href="#@cdk_utils/iam.connect.ConnectConditions.property.USER_ARN">USER_ARN</a></code> | <code>string</code> | Condition key: connect:UserArn (ARN). |

---

##### `actionGetAttachedFileConditionKeys`<sup>Required</sup> <a name="actionGetAttachedFileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetAttachedFileConditionKeys"></a>

```typescript
public readonly actionGetAttachedFileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAttachedFile action.

---

##### `actionGetContactAttributesConditionKeys`<sup>Required</sup> <a name="actionGetContactAttributesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetContactAttributesConditionKeys"></a>

```typescript
public readonly actionGetContactAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetContactAttributes action.

---

##### `actionGetContactMetricsConditionKeys`<sup>Required</sup> <a name="actionGetContactMetricsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetContactMetricsConditionKeys"></a>

```typescript
public readonly actionGetContactMetricsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetContactMetrics action.

---

##### `actionGetCurrentMetricDataConditionKeys`<sup>Required</sup> <a name="actionGetCurrentMetricDataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetCurrentMetricDataConditionKeys"></a>

```typescript
public readonly actionGetCurrentMetricDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCurrentMetricData action.

---

##### `actionGetCurrentUserDataConditionKeys`<sup>Required</sup> <a name="actionGetCurrentUserDataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetCurrentUserDataConditionKeys"></a>

```typescript
public readonly actionGetCurrentUserDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCurrentUserData action.

---

##### `actionGetEffectiveHoursOfOperationsConditionKeys`<sup>Required</sup> <a name="actionGetEffectiveHoursOfOperationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetEffectiveHoursOfOperationsConditionKeys"></a>

```typescript
public readonly actionGetEffectiveHoursOfOperationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEffectiveHoursOfOperations action.

---

##### `actionGetEvaluationFormValidationConditionKeys`<sup>Required</sup> <a name="actionGetEvaluationFormValidationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetEvaluationFormValidationConditionKeys"></a>

```typescript
public readonly actionGetEvaluationFormValidationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEvaluationFormValidation action.

---

##### `actionGetFederationTokenConditionKeys`<sup>Required</sup> <a name="actionGetFederationTokenConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetFederationTokenConditionKeys"></a>

```typescript
public readonly actionGetFederationTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetFederationToken action.

---

##### `actionGetFlowAssociationConditionKeys`<sup>Required</sup> <a name="actionGetFlowAssociationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetFlowAssociationConditionKeys"></a>

```typescript
public readonly actionGetFlowAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetFlowAssociation action.

---

##### `actionGetMetricDataConditionKeys`<sup>Required</sup> <a name="actionGetMetricDataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetMetricDataConditionKeys"></a>

```typescript
public readonly actionGetMetricDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMetricData action.

---

##### `actionGetMetricDataV2ConditionKeys`<sup>Required</sup> <a name="actionGetMetricDataV2ConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetMetricDataV2ConditionKeys"></a>

```typescript
public readonly actionGetMetricDataV2ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMetricDataV2 action.

---

##### `actionGetPromptFileConditionKeys`<sup>Required</sup> <a name="actionGetPromptFileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetPromptFileConditionKeys"></a>

```typescript
public readonly actionGetPromptFileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPromptFile action.

---

##### `actionGetTaskTemplateConditionKeys`<sup>Required</sup> <a name="actionGetTaskTemplateConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetTaskTemplateConditionKeys"></a>

```typescript
public readonly actionGetTaskTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTaskTemplate action.

---

##### `actionGetTrafficDistributionConditionKeys`<sup>Required</sup> <a name="actionGetTrafficDistributionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.actionGetTrafficDistributionConditionKeys"></a>

```typescript
public readonly actionGetTrafficDistributionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTrafficDistribution action.

---

##### `ActivateEvaluationFormConditionKeys`<sup>Required</sup> <a name="ActivateEvaluationFormConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ActivateEvaluationFormConditionKeys"></a>

```typescript
public readonly ActivateEvaluationFormConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ActivateEvaluationForm action.

---

##### `ASSIGNMENT_TYPE`<sup>Required</sup> <a name="ASSIGNMENT_TYPE" id="@cdk_utils/iam.connect.ConnectConditions.property.ASSIGNMENT_TYPE"></a>

```typescript
public readonly ASSIGNMENT_TYPE: string;
```

- *Type:* string

Condition key: connect:AssignmentType (String).

---

##### `AssociateAnalyticsDataSetConditionKeys`<sup>Required</sup> <a name="AssociateAnalyticsDataSetConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateAnalyticsDataSetConditionKeys"></a>

```typescript
public readonly AssociateAnalyticsDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateAnalyticsDataSet action.

---

##### `AssociateApprovedOriginConditionKeys`<sup>Required</sup> <a name="AssociateApprovedOriginConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateApprovedOriginConditionKeys"></a>

```typescript
public readonly AssociateApprovedOriginConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateApprovedOrigin action.

---

##### `AssociateBotConditionKeys`<sup>Required</sup> <a name="AssociateBotConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateBotConditionKeys"></a>

```typescript
public readonly AssociateBotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateBot action.

---

##### `AssociateContactWithUserConditionKeys`<sup>Required</sup> <a name="AssociateContactWithUserConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateContactWithUserConditionKeys"></a>

```typescript
public readonly AssociateContactWithUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateContactWithUser action.

---

##### `AssociateDefaultVocabularyConditionKeys`<sup>Required</sup> <a name="AssociateDefaultVocabularyConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateDefaultVocabularyConditionKeys"></a>

```typescript
public readonly AssociateDefaultVocabularyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateDefaultVocabulary action.

---

##### `AssociateEmailAddressAliasConditionKeys`<sup>Required</sup> <a name="AssociateEmailAddressAliasConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateEmailAddressAliasConditionKeys"></a>

```typescript
public readonly AssociateEmailAddressAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateEmailAddressAlias action.

---

##### `AssociateFlowConditionKeys`<sup>Required</sup> <a name="AssociateFlowConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateFlowConditionKeys"></a>

```typescript
public readonly AssociateFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateFlow action.

---

##### `AssociateInstanceStorageConfigConditionKeys`<sup>Required</sup> <a name="AssociateInstanceStorageConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateInstanceStorageConfigConditionKeys"></a>

```typescript
public readonly AssociateInstanceStorageConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateInstanceStorageConfig action.

---

##### `AssociateLambdaFunctionConditionKeys`<sup>Required</sup> <a name="AssociateLambdaFunctionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateLambdaFunctionConditionKeys"></a>

```typescript
public readonly AssociateLambdaFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateLambdaFunction action.

---

##### `AssociateLexBotConditionKeys`<sup>Required</sup> <a name="AssociateLexBotConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateLexBotConditionKeys"></a>

```typescript
public readonly AssociateLexBotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateLexBot action.

---

##### `AssociatePhoneNumberContactFlowConditionKeys`<sup>Required</sup> <a name="AssociatePhoneNumberContactFlowConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociatePhoneNumberContactFlowConditionKeys"></a>

```typescript
public readonly AssociatePhoneNumberContactFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociatePhoneNumberContactFlow action.

---

##### `AssociateQueueEmailAddressesConditionKeys`<sup>Required</sup> <a name="AssociateQueueEmailAddressesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateQueueEmailAddressesConditionKeys"></a>

```typescript
public readonly AssociateQueueEmailAddressesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateQueueEmailAddresses action.

---

##### `AssociateQueueQuickConnectsConditionKeys`<sup>Required</sup> <a name="AssociateQueueQuickConnectsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateQueueQuickConnectsConditionKeys"></a>

```typescript
public readonly AssociateQueueQuickConnectsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateQueueQuickConnects action.

---

##### `AssociateRoutingProfileQueuesConditionKeys`<sup>Required</sup> <a name="AssociateRoutingProfileQueuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateRoutingProfileQueuesConditionKeys"></a>

```typescript
public readonly AssociateRoutingProfileQueuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateRoutingProfileQueues action.

---

##### `AssociateSecurityKeyConditionKeys`<sup>Required</sup> <a name="AssociateSecurityKeyConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateSecurityKeyConditionKeys"></a>

```typescript
public readonly AssociateSecurityKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateSecurityKey action.

---

##### `AssociateSecurityProfilesConditionKeys`<sup>Required</sup> <a name="AssociateSecurityProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateSecurityProfilesConditionKeys"></a>

```typescript
public readonly AssociateSecurityProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateSecurityProfiles action.

---

##### `AssociateTrafficDistributionGroupUserConditionKeys`<sup>Required</sup> <a name="AssociateTrafficDistributionGroupUserConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateTrafficDistributionGroupUserConditionKeys"></a>

```typescript
public readonly AssociateTrafficDistributionGroupUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateTrafficDistributionGroupUser action.

---

##### `AssociateUserProficienciesConditionKeys`<sup>Required</sup> <a name="AssociateUserProficienciesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateUserProficienciesConditionKeys"></a>

```typescript
public readonly AssociateUserProficienciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateUserProficiencies action.

---

##### `AssociateWorkspaceConditionKeys`<sup>Required</sup> <a name="AssociateWorkspaceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.AssociateWorkspaceConditionKeys"></a>

```typescript
public readonly AssociateWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateWorkspace action.

---

##### `ATTRIBUTE_TYPE`<sup>Required</sup> <a name="ATTRIBUTE_TYPE" id="@cdk_utils/iam.connect.ConnectConditions.property.ATTRIBUTE_TYPE"></a>

```typescript
public readonly ATTRIBUTE_TYPE: string;
```

- *Type:* string

Condition key: connect:AttributeType (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.connect.ConnectConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.connect.ConnectConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.connect.ConnectConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchAssociateAnalyticsDataSetConditionKeys`<sup>Required</sup> <a name="BatchAssociateAnalyticsDataSetConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchAssociateAnalyticsDataSetConditionKeys"></a>

```typescript
public readonly BatchAssociateAnalyticsDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchAssociateAnalyticsDataSet action.

---

##### `BatchCreateDataTableValueConditionKeys`<sup>Required</sup> <a name="BatchCreateDataTableValueConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchCreateDataTableValueConditionKeys"></a>

```typescript
public readonly BatchCreateDataTableValueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchCreateDataTableValue action.

---

##### `BatchDeleteDataTableValueConditionKeys`<sup>Required</sup> <a name="BatchDeleteDataTableValueConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchDeleteDataTableValueConditionKeys"></a>

```typescript
public readonly BatchDeleteDataTableValueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDeleteDataTableValue action.

---

##### `BatchDescribeDataTableValueConditionKeys`<sup>Required</sup> <a name="BatchDescribeDataTableValueConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchDescribeDataTableValueConditionKeys"></a>

```typescript
public readonly BatchDescribeDataTableValueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDescribeDataTableValue action.

---

##### `BatchDisassociateAnalyticsDataSetConditionKeys`<sup>Required</sup> <a name="BatchDisassociateAnalyticsDataSetConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchDisassociateAnalyticsDataSetConditionKeys"></a>

```typescript
public readonly BatchDisassociateAnalyticsDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDisassociateAnalyticsDataSet action.

---

##### `BatchGetAttachedFileMetadataConditionKeys`<sup>Required</sup> <a name="BatchGetAttachedFileMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchGetAttachedFileMetadataConditionKeys"></a>

```typescript
public readonly BatchGetAttachedFileMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetAttachedFileMetadata action.

---

##### `BatchGetFlowAssociationConditionKeys`<sup>Required</sup> <a name="BatchGetFlowAssociationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchGetFlowAssociationConditionKeys"></a>

```typescript
public readonly BatchGetFlowAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchGetFlowAssociation action.

---

##### `BatchPutContactConditionKeys`<sup>Required</sup> <a name="BatchPutContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchPutContactConditionKeys"></a>

```typescript
public readonly BatchPutContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchPutContact action.

---

##### `BatchUpdateDataTableValueConditionKeys`<sup>Required</sup> <a name="BatchUpdateDataTableValueConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.BatchUpdateDataTableValueConditionKeys"></a>

```typescript
public readonly BatchUpdateDataTableValueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchUpdateDataTableValue action.

---

##### `CHANNEL`<sup>Required</sup> <a name="CHANNEL" id="@cdk_utils/iam.connect.ConnectConditions.property.CHANNEL"></a>

```typescript
public readonly CHANNEL: string;
```

- *Type:* string

Condition key: connect:Channel (String).

---

##### `ClaimPhoneNumberConditionKeys`<sup>Required</sup> <a name="ClaimPhoneNumberConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ClaimPhoneNumberConditionKeys"></a>

```typescript
public readonly ClaimPhoneNumberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ClaimPhoneNumber action.

---

##### `CompleteAttachedFileUploadConditionKeys`<sup>Required</sup> <a name="CompleteAttachedFileUploadConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CompleteAttachedFileUploadConditionKeys"></a>

```typescript
public readonly CompleteAttachedFileUploadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CompleteAttachedFileUpload action.

---

##### `CONTACT_ASSOCIATION_ID`<sup>Required</sup> <a name="CONTACT_ASSOCIATION_ID" id="@cdk_utils/iam.connect.ConnectConditions.property.CONTACT_ASSOCIATION_ID"></a>

```typescript
public readonly CONTACT_ASSOCIATION_ID: string;
```

- *Type:* string

Condition key: connect:ContactAssociationId (String).

---

##### `CONTACT_INITIATION_METHOD`<sup>Required</sup> <a name="CONTACT_INITIATION_METHOD" id="@cdk_utils/iam.connect.ConnectConditions.property.CONTACT_INITIATION_METHOD"></a>

```typescript
public readonly CONTACT_INITIATION_METHOD: string;
```

- *Type:* string

Condition key: connect:ContactInitiationMethod (String).

---

##### `CreateAgentStatusConditionKeys`<sup>Required</sup> <a name="CreateAgentStatusConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateAgentStatusConditionKeys"></a>

```typescript
public readonly CreateAgentStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentStatus action.

---

##### `CreateAttachedFileConditionKeys`<sup>Required</sup> <a name="CreateAttachedFileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateAttachedFileConditionKeys"></a>

```typescript
public readonly CreateAttachedFileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAttachedFile action.

---

##### `CreateAuthenticationProfileConditionKeys`<sup>Required</sup> <a name="CreateAuthenticationProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateAuthenticationProfileConditionKeys"></a>

```typescript
public readonly CreateAuthenticationProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAuthenticationProfile action.

---

##### `CreateContactConditionKeys`<sup>Required</sup> <a name="CreateContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateContactConditionKeys"></a>

```typescript
public readonly CreateContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContact action.

---

##### `CreateContactFlowConditionKeys`<sup>Required</sup> <a name="CreateContactFlowConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowConditionKeys"></a>

```typescript
public readonly CreateContactFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContactFlow action.

---

##### `CreateContactFlowModuleAliasConditionKeys`<sup>Required</sup> <a name="CreateContactFlowModuleAliasConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowModuleAliasConditionKeys"></a>

```typescript
public readonly CreateContactFlowModuleAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContactFlowModuleAlias action.

---

##### `CreateContactFlowModuleConditionKeys`<sup>Required</sup> <a name="CreateContactFlowModuleConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowModuleConditionKeys"></a>

```typescript
public readonly CreateContactFlowModuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContactFlowModule action.

---

##### `CreateContactFlowModuleVersionConditionKeys`<sup>Required</sup> <a name="CreateContactFlowModuleVersionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowModuleVersionConditionKeys"></a>

```typescript
public readonly CreateContactFlowModuleVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContactFlowModuleVersion action.

---

##### `CreateContactFlowVersionConditionKeys`<sup>Required</sup> <a name="CreateContactFlowVersionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateContactFlowVersionConditionKeys"></a>

```typescript
public readonly CreateContactFlowVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContactFlowVersion action.

---

##### `CreateDataTableAttributeConditionKeys`<sup>Required</sup> <a name="CreateDataTableAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateDataTableAttributeConditionKeys"></a>

```typescript
public readonly CreateDataTableAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataTableAttribute action.

---

##### `CreateDataTableConditionKeys`<sup>Required</sup> <a name="CreateDataTableConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateDataTableConditionKeys"></a>

```typescript
public readonly CreateDataTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataTable action.

---

##### `CreateEmailAddressConditionKeys`<sup>Required</sup> <a name="CreateEmailAddressConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateEmailAddressConditionKeys"></a>

```typescript
public readonly CreateEmailAddressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEmailAddress action.

---

##### `CreateEvaluationFormConditionKeys`<sup>Required</sup> <a name="CreateEvaluationFormConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateEvaluationFormConditionKeys"></a>

```typescript
public readonly CreateEvaluationFormConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEvaluationForm action.

---

##### `CreateHoursOfOperationConditionKeys`<sup>Required</sup> <a name="CreateHoursOfOperationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateHoursOfOperationConditionKeys"></a>

```typescript
public readonly CreateHoursOfOperationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHoursOfOperation action.

---

##### `CreateHoursOfOperationOverrideConditionKeys`<sup>Required</sup> <a name="CreateHoursOfOperationOverrideConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateHoursOfOperationOverrideConditionKeys"></a>

```typescript
public readonly CreateHoursOfOperationOverrideConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHoursOfOperationOverride action.

---

##### `CreateInstanceConditionKeys`<sup>Required</sup> <a name="CreateInstanceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateInstanceConditionKeys"></a>

```typescript
public readonly CreateInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstance action.

---

##### `CreateIntegrationAssociationConditionKeys`<sup>Required</sup> <a name="CreateIntegrationAssociationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateIntegrationAssociationConditionKeys"></a>

```typescript
public readonly CreateIntegrationAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIntegrationAssociation action.

---

##### `CreateMetricConditionKeys`<sup>Required</sup> <a name="CreateMetricConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateMetricConditionKeys"></a>

```typescript
public readonly CreateMetricConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMetric action.

---

##### `CreateNotificationConditionKeys`<sup>Required</sup> <a name="CreateNotificationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateNotificationConditionKeys"></a>

```typescript
public readonly CreateNotificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotification action.

---

##### `CreateParticipantConditionKeys`<sup>Required</sup> <a name="CreateParticipantConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateParticipantConditionKeys"></a>

```typescript
public readonly CreateParticipantConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateParticipant action.

---

##### `CreatePersistentContactAssociationConditionKeys`<sup>Required</sup> <a name="CreatePersistentContactAssociationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreatePersistentContactAssociationConditionKeys"></a>

```typescript
public readonly CreatePersistentContactAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePersistentContactAssociation action.

---

##### `CreatePredefinedAttributeConditionKeys`<sup>Required</sup> <a name="CreatePredefinedAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreatePredefinedAttributeConditionKeys"></a>

```typescript
public readonly CreatePredefinedAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePredefinedAttribute action.

---

##### `CreatePromptConditionKeys`<sup>Required</sup> <a name="CreatePromptConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreatePromptConditionKeys"></a>

```typescript
public readonly CreatePromptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePrompt action.

---

##### `CreatePushNotificationRegistrationConditionKeys`<sup>Required</sup> <a name="CreatePushNotificationRegistrationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreatePushNotificationRegistrationConditionKeys"></a>

```typescript
public readonly CreatePushNotificationRegistrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePushNotificationRegistration action.

---

##### `CreateQueueConditionKeys`<sup>Required</sup> <a name="CreateQueueConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateQueueConditionKeys"></a>

```typescript
public readonly CreateQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQueue action.

---

##### `CreateQuickConnectConditionKeys`<sup>Required</sup> <a name="CreateQuickConnectConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateQuickConnectConditionKeys"></a>

```typescript
public readonly CreateQuickConnectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQuickConnect action.

---

##### `CreateRoutingProfileConditionKeys`<sup>Required</sup> <a name="CreateRoutingProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateRoutingProfileConditionKeys"></a>

```typescript
public readonly CreateRoutingProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRoutingProfile action.

---

##### `CreateRuleConditionKeys`<sup>Required</sup> <a name="CreateRuleConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateRuleConditionKeys"></a>

```typescript
public readonly CreateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRule action.

---

##### `CreateSecurityProfileConditionKeys`<sup>Required</sup> <a name="CreateSecurityProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateSecurityProfileConditionKeys"></a>

```typescript
public readonly CreateSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSecurityProfile action.

---

##### `CreateTrafficDistributionGroupConditionKeys`<sup>Required</sup> <a name="CreateTrafficDistributionGroupConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateTrafficDistributionGroupConditionKeys"></a>

```typescript
public readonly CreateTrafficDistributionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrafficDistributionGroup action.

---

##### `CreateUseCaseConditionKeys`<sup>Required</sup> <a name="CreateUseCaseConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateUseCaseConditionKeys"></a>

```typescript
public readonly CreateUseCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUseCase action.

---

##### `CreateUserConditionKeys`<sup>Required</sup> <a name="CreateUserConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateUserConditionKeys"></a>

```typescript
public readonly CreateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUser action.

---

##### `CreateUserHierarchyGroupConditionKeys`<sup>Required</sup> <a name="CreateUserHierarchyGroupConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateUserHierarchyGroupConditionKeys"></a>

```typescript
public readonly CreateUserHierarchyGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUserHierarchyGroup action.

---

##### `CreateViewConditionKeys`<sup>Required</sup> <a name="CreateViewConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateViewConditionKeys"></a>

```typescript
public readonly CreateViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateView action.

---

##### `CreateViewVersionConditionKeys`<sup>Required</sup> <a name="CreateViewVersionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateViewVersionConditionKeys"></a>

```typescript
public readonly CreateViewVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateViewVersion action.

---

##### `CreateVocabularyConditionKeys`<sup>Required</sup> <a name="CreateVocabularyConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateVocabularyConditionKeys"></a>

```typescript
public readonly CreateVocabularyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVocabulary action.

---

##### `CreateWorkspaceConditionKeys`<sup>Required</sup> <a name="CreateWorkspaceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateWorkspaceConditionKeys"></a>

```typescript
public readonly CreateWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkspace action.

---

##### `CreateWorkspacePageConditionKeys`<sup>Required</sup> <a name="CreateWorkspacePageConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.CreateWorkspacePageConditionKeys"></a>

```typescript
public readonly CreateWorkspacePageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkspacePage action.

---

##### `DeactivateEvaluationFormConditionKeys`<sup>Required</sup> <a name="DeactivateEvaluationFormConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeactivateEvaluationFormConditionKeys"></a>

```typescript
public readonly DeactivateEvaluationFormConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeactivateEvaluationForm action.

---

##### `DeleteAttachedFileConditionKeys`<sup>Required</sup> <a name="DeleteAttachedFileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteAttachedFileConditionKeys"></a>

```typescript
public readonly DeleteAttachedFileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAttachedFile action.

---

##### `DeleteContactEvaluationConditionKeys`<sup>Required</sup> <a name="DeleteContactEvaluationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactEvaluationConditionKeys"></a>

```typescript
public readonly DeleteContactEvaluationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteContactEvaluation action.

---

##### `DeleteContactFlowConditionKeys`<sup>Required</sup> <a name="DeleteContactFlowConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowConditionKeys"></a>

```typescript
public readonly DeleteContactFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteContactFlow action.

---

##### `DeleteContactFlowModuleAliasConditionKeys`<sup>Required</sup> <a name="DeleteContactFlowModuleAliasConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowModuleAliasConditionKeys"></a>

```typescript
public readonly DeleteContactFlowModuleAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteContactFlowModuleAlias action.

---

##### `DeleteContactFlowModuleConditionKeys`<sup>Required</sup> <a name="DeleteContactFlowModuleConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowModuleConditionKeys"></a>

```typescript
public readonly DeleteContactFlowModuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteContactFlowModule action.

---

##### `DeleteContactFlowModuleVersionConditionKeys`<sup>Required</sup> <a name="DeleteContactFlowModuleVersionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowModuleVersionConditionKeys"></a>

```typescript
public readonly DeleteContactFlowModuleVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteContactFlowModuleVersion action.

---

##### `DeleteContactFlowVersionConditionKeys`<sup>Required</sup> <a name="DeleteContactFlowVersionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteContactFlowVersionConditionKeys"></a>

```typescript
public readonly DeleteContactFlowVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteContactFlowVersion action.

---

##### `DeleteDataTableAttributeConditionKeys`<sup>Required</sup> <a name="DeleteDataTableAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteDataTableAttributeConditionKeys"></a>

```typescript
public readonly DeleteDataTableAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDataTableAttribute action.

---

##### `DeleteDataTableConditionKeys`<sup>Required</sup> <a name="DeleteDataTableConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteDataTableConditionKeys"></a>

```typescript
public readonly DeleteDataTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDataTable action.

---

##### `DeleteEmailAddressConditionKeys`<sup>Required</sup> <a name="DeleteEmailAddressConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteEmailAddressConditionKeys"></a>

```typescript
public readonly DeleteEmailAddressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEmailAddress action.

---

##### `DeleteEvaluationFormConditionKeys`<sup>Required</sup> <a name="DeleteEvaluationFormConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteEvaluationFormConditionKeys"></a>

```typescript
public readonly DeleteEvaluationFormConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEvaluationForm action.

---

##### `DeleteHoursOfOperationConditionKeys`<sup>Required</sup> <a name="DeleteHoursOfOperationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteHoursOfOperationConditionKeys"></a>

```typescript
public readonly DeleteHoursOfOperationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteHoursOfOperation action.

---

##### `DeleteHoursOfOperationOverrideConditionKeys`<sup>Required</sup> <a name="DeleteHoursOfOperationOverrideConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteHoursOfOperationOverrideConditionKeys"></a>

```typescript
public readonly DeleteHoursOfOperationOverrideConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteHoursOfOperationOverride action.

---

##### `DeleteInstanceConditionKeys`<sup>Required</sup> <a name="DeleteInstanceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteInstanceConditionKeys"></a>

```typescript
public readonly DeleteInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteInstance action.

---

##### `DeleteIntegrationAssociationConditionKeys`<sup>Required</sup> <a name="DeleteIntegrationAssociationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteIntegrationAssociationConditionKeys"></a>

```typescript
public readonly DeleteIntegrationAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIntegrationAssociation action.

---

##### `DeleteMetricConditionKeys`<sup>Required</sup> <a name="DeleteMetricConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteMetricConditionKeys"></a>

```typescript
public readonly DeleteMetricConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteMetric action.

---

##### `DeleteNotificationConditionKeys`<sup>Required</sup> <a name="DeleteNotificationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteNotificationConditionKeys"></a>

```typescript
public readonly DeleteNotificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteNotification action.

---

##### `DeletePredefinedAttributeConditionKeys`<sup>Required</sup> <a name="DeletePredefinedAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeletePredefinedAttributeConditionKeys"></a>

```typescript
public readonly DeletePredefinedAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePredefinedAttribute action.

---

##### `DeletePromptConditionKeys`<sup>Required</sup> <a name="DeletePromptConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeletePromptConditionKeys"></a>

```typescript
public readonly DeletePromptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePrompt action.

---

##### `DeletePushNotificationRegistrationConditionKeys`<sup>Required</sup> <a name="DeletePushNotificationRegistrationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeletePushNotificationRegistrationConditionKeys"></a>

```typescript
public readonly DeletePushNotificationRegistrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePushNotificationRegistration action.

---

##### `DeleteQueueConditionKeys`<sup>Required</sup> <a name="DeleteQueueConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteQueueConditionKeys"></a>

```typescript
public readonly DeleteQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteQueue action.

---

##### `DeleteQuickConnectConditionKeys`<sup>Required</sup> <a name="DeleteQuickConnectConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteQuickConnectConditionKeys"></a>

```typescript
public readonly DeleteQuickConnectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteQuickConnect action.

---

##### `DeleteRoutingProfileConditionKeys`<sup>Required</sup> <a name="DeleteRoutingProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteRoutingProfileConditionKeys"></a>

```typescript
public readonly DeleteRoutingProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRoutingProfile action.

---

##### `DeleteRuleConditionKeys`<sup>Required</sup> <a name="DeleteRuleConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteRuleConditionKeys"></a>

```typescript
public readonly DeleteRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRule action.

---

##### `DeleteSecurityProfileConditionKeys`<sup>Required</sup> <a name="DeleteSecurityProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteSecurityProfileConditionKeys"></a>

```typescript
public readonly DeleteSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSecurityProfile action.

---

##### `DeleteTaskTemplateConditionKeys`<sup>Required</sup> <a name="DeleteTaskTemplateConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteTaskTemplateConditionKeys"></a>

```typescript
public readonly DeleteTaskTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTaskTemplate action.

---

##### `DeleteTrafficDistributionGroupConditionKeys`<sup>Required</sup> <a name="DeleteTrafficDistributionGroupConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteTrafficDistributionGroupConditionKeys"></a>

```typescript
public readonly DeleteTrafficDistributionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTrafficDistributionGroup action.

---

##### `DeleteUseCaseConditionKeys`<sup>Required</sup> <a name="DeleteUseCaseConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteUseCaseConditionKeys"></a>

```typescript
public readonly DeleteUseCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUseCase action.

---

##### `DeleteUserConditionKeys`<sup>Required</sup> <a name="DeleteUserConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteUserConditionKeys"></a>

```typescript
public readonly DeleteUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUser action.

---

##### `DeleteUserHierarchyGroupConditionKeys`<sup>Required</sup> <a name="DeleteUserHierarchyGroupConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteUserHierarchyGroupConditionKeys"></a>

```typescript
public readonly DeleteUserHierarchyGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUserHierarchyGroup action.

---

##### `DeleteViewConditionKeys`<sup>Required</sup> <a name="DeleteViewConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteViewConditionKeys"></a>

```typescript
public readonly DeleteViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteView action.

---

##### `DeleteViewVersionConditionKeys`<sup>Required</sup> <a name="DeleteViewVersionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteViewVersionConditionKeys"></a>

```typescript
public readonly DeleteViewVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteViewVersion action.

---

##### `DeleteVocabularyConditionKeys`<sup>Required</sup> <a name="DeleteVocabularyConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteVocabularyConditionKeys"></a>

```typescript
public readonly DeleteVocabularyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteVocabulary action.

---

##### `DeleteWorkspaceConditionKeys`<sup>Required</sup> <a name="DeleteWorkspaceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteWorkspaceConditionKeys"></a>

```typescript
public readonly DeleteWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteWorkspace action.

---

##### `DeleteWorkspaceMediaConditionKeys`<sup>Required</sup> <a name="DeleteWorkspaceMediaConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteWorkspaceMediaConditionKeys"></a>

```typescript
public readonly DeleteWorkspaceMediaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteWorkspaceMedia action.

---

##### `DeleteWorkspacePageConditionKeys`<sup>Required</sup> <a name="DeleteWorkspacePageConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DeleteWorkspacePageConditionKeys"></a>

```typescript
public readonly DeleteWorkspacePageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteWorkspacePage action.

---

##### `DescribeAgentStatusConditionKeys`<sup>Required</sup> <a name="DescribeAgentStatusConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeAgentStatusConditionKeys"></a>

```typescript
public readonly DescribeAgentStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAgentStatus action.

---

##### `DescribeAttachedFilesConfigurationConditionKeys`<sup>Required</sup> <a name="DescribeAttachedFilesConfigurationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeAttachedFilesConfigurationConditionKeys"></a>

```typescript
public readonly DescribeAttachedFilesConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAttachedFilesConfiguration action.

---

##### `DescribeAuthenticationProfileConditionKeys`<sup>Required</sup> <a name="DescribeAuthenticationProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeAuthenticationProfileConditionKeys"></a>

```typescript
public readonly DescribeAuthenticationProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAuthenticationProfile action.

---

##### `DescribeContactConditionKeys`<sup>Required</sup> <a name="DescribeContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactConditionKeys"></a>

```typescript
public readonly DescribeContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeContact action.

---

##### `DescribeContactEvaluationConditionKeys`<sup>Required</sup> <a name="DescribeContactEvaluationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactEvaluationConditionKeys"></a>

```typescript
public readonly DescribeContactEvaluationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeContactEvaluation action.

---

##### `DescribeContactFlowConditionKeys`<sup>Required</sup> <a name="DescribeContactFlowConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactFlowConditionKeys"></a>

```typescript
public readonly DescribeContactFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeContactFlow action.

---

##### `DescribeContactFlowModuleAliasConditionKeys`<sup>Required</sup> <a name="DescribeContactFlowModuleAliasConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactFlowModuleAliasConditionKeys"></a>

```typescript
public readonly DescribeContactFlowModuleAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeContactFlowModuleAlias action.

---

##### `DescribeContactFlowModuleConditionKeys`<sup>Required</sup> <a name="DescribeContactFlowModuleConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeContactFlowModuleConditionKeys"></a>

```typescript
public readonly DescribeContactFlowModuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeContactFlowModule action.

---

##### `DescribeDataTableAttributeConditionKeys`<sup>Required</sup> <a name="DescribeDataTableAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeDataTableAttributeConditionKeys"></a>

```typescript
public readonly DescribeDataTableAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDataTableAttribute action.

---

##### `DescribeDataTableConditionKeys`<sup>Required</sup> <a name="DescribeDataTableConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeDataTableConditionKeys"></a>

```typescript
public readonly DescribeDataTableConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDataTable action.

---

##### `DescribeEmailAddressConditionKeys`<sup>Required</sup> <a name="DescribeEmailAddressConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeEmailAddressConditionKeys"></a>

```typescript
public readonly DescribeEmailAddressConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeEmailAddress action.

---

##### `DescribeEvaluationFormConditionKeys`<sup>Required</sup> <a name="DescribeEvaluationFormConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeEvaluationFormConditionKeys"></a>

```typescript
public readonly DescribeEvaluationFormConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeEvaluationForm action.

---

##### `DescribeForecastingPlanningSchedulingIntegrationConditionKeys`<sup>Required</sup> <a name="DescribeForecastingPlanningSchedulingIntegrationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeForecastingPlanningSchedulingIntegrationConditionKeys"></a>

```typescript
public readonly DescribeForecastingPlanningSchedulingIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeForecastingPlanningSchedulingIntegration action.

---

##### `DescribeHoursOfOperationConditionKeys`<sup>Required</sup> <a name="DescribeHoursOfOperationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeHoursOfOperationConditionKeys"></a>

```typescript
public readonly DescribeHoursOfOperationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeHoursOfOperation action.

---

##### `DescribeHoursOfOperationOverrideConditionKeys`<sup>Required</sup> <a name="DescribeHoursOfOperationOverrideConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeHoursOfOperationOverrideConditionKeys"></a>

```typescript
public readonly DescribeHoursOfOperationOverrideConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeHoursOfOperationOverride action.

---

##### `DescribeInstanceAttributeConditionKeys`<sup>Required</sup> <a name="DescribeInstanceAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeInstanceAttributeConditionKeys"></a>

```typescript
public readonly DescribeInstanceAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeInstanceAttribute action.

---

##### `DescribeInstanceConditionKeys`<sup>Required</sup> <a name="DescribeInstanceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeInstanceConditionKeys"></a>

```typescript
public readonly DescribeInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeInstance action.

---

##### `DescribeInstanceStorageConfigConditionKeys`<sup>Required</sup> <a name="DescribeInstanceStorageConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeInstanceStorageConfigConditionKeys"></a>

```typescript
public readonly DescribeInstanceStorageConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeInstanceStorageConfig action.

---

##### `DescribeMetricConditionKeys`<sup>Required</sup> <a name="DescribeMetricConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeMetricConditionKeys"></a>

```typescript
public readonly DescribeMetricConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeMetric action.

---

##### `DescribeNotificationConditionKeys`<sup>Required</sup> <a name="DescribeNotificationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeNotificationConditionKeys"></a>

```typescript
public readonly DescribeNotificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeNotification action.

---

##### `DescribePhoneNumberConditionKeys`<sup>Required</sup> <a name="DescribePhoneNumberConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribePhoneNumberConditionKeys"></a>

```typescript
public readonly DescribePhoneNumberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribePhoneNumber action.

---

##### `DescribePredefinedAttributeConditionKeys`<sup>Required</sup> <a name="DescribePredefinedAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribePredefinedAttributeConditionKeys"></a>

```typescript
public readonly DescribePredefinedAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribePredefinedAttribute action.

---

##### `DescribePromptConditionKeys`<sup>Required</sup> <a name="DescribePromptConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribePromptConditionKeys"></a>

```typescript
public readonly DescribePromptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribePrompt action.

---

##### `DescribeQueueConditionKeys`<sup>Required</sup> <a name="DescribeQueueConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeQueueConditionKeys"></a>

```typescript
public readonly DescribeQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeQueue action.

---

##### `DescribeQuickConnectConditionKeys`<sup>Required</sup> <a name="DescribeQuickConnectConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeQuickConnectConditionKeys"></a>

```typescript
public readonly DescribeQuickConnectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeQuickConnect action.

---

##### `DescribeRoutingProfileConditionKeys`<sup>Required</sup> <a name="DescribeRoutingProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeRoutingProfileConditionKeys"></a>

```typescript
public readonly DescribeRoutingProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeRoutingProfile action.

---

##### `DescribeRuleConditionKeys`<sup>Required</sup> <a name="DescribeRuleConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeRuleConditionKeys"></a>

```typescript
public readonly DescribeRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeRule action.

---

##### `DescribeSecurityProfileConditionKeys`<sup>Required</sup> <a name="DescribeSecurityProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeSecurityProfileConditionKeys"></a>

```typescript
public readonly DescribeSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeSecurityProfile action.

---

##### `DescribeTrafficDistributionGroupConditionKeys`<sup>Required</sup> <a name="DescribeTrafficDistributionGroupConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeTrafficDistributionGroupConditionKeys"></a>

```typescript
public readonly DescribeTrafficDistributionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeTrafficDistributionGroup action.

---

##### `DescribeUserConditionKeys`<sup>Required</sup> <a name="DescribeUserConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeUserConditionKeys"></a>

```typescript
public readonly DescribeUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUser action.

---

##### `DescribeUserHierarchyGroupConditionKeys`<sup>Required</sup> <a name="DescribeUserHierarchyGroupConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeUserHierarchyGroupConditionKeys"></a>

```typescript
public readonly DescribeUserHierarchyGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUserHierarchyGroup action.

---

##### `DescribeUserHierarchyStructureConditionKeys`<sup>Required</sup> <a name="DescribeUserHierarchyStructureConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeUserHierarchyStructureConditionKeys"></a>

```typescript
public readonly DescribeUserHierarchyStructureConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUserHierarchyStructure action.

---

##### `DescribeViewConditionKeys`<sup>Required</sup> <a name="DescribeViewConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeViewConditionKeys"></a>

```typescript
public readonly DescribeViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeView action.

---

##### `DescribeVocabularyConditionKeys`<sup>Required</sup> <a name="DescribeVocabularyConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeVocabularyConditionKeys"></a>

```typescript
public readonly DescribeVocabularyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeVocabulary action.

---

##### `DescribeWorkspaceConditionKeys`<sup>Required</sup> <a name="DescribeWorkspaceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DescribeWorkspaceConditionKeys"></a>

```typescript
public readonly DescribeWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeWorkspace action.

---

##### `DisassociateAnalyticsDataSetConditionKeys`<sup>Required</sup> <a name="DisassociateAnalyticsDataSetConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateAnalyticsDataSetConditionKeys"></a>

```typescript
public readonly DisassociateAnalyticsDataSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateAnalyticsDataSet action.

---

##### `DisassociateApprovedOriginConditionKeys`<sup>Required</sup> <a name="DisassociateApprovedOriginConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateApprovedOriginConditionKeys"></a>

```typescript
public readonly DisassociateApprovedOriginConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateApprovedOrigin action.

---

##### `DisassociateBotConditionKeys`<sup>Required</sup> <a name="DisassociateBotConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateBotConditionKeys"></a>

```typescript
public readonly DisassociateBotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateBot action.

---

##### `DisassociateEmailAddressAliasConditionKeys`<sup>Required</sup> <a name="DisassociateEmailAddressAliasConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateEmailAddressAliasConditionKeys"></a>

```typescript
public readonly DisassociateEmailAddressAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateEmailAddressAlias action.

---

##### `DisassociateFlowConditionKeys`<sup>Required</sup> <a name="DisassociateFlowConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateFlowConditionKeys"></a>

```typescript
public readonly DisassociateFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateFlow action.

---

##### `DisassociateInstanceStorageConfigConditionKeys`<sup>Required</sup> <a name="DisassociateInstanceStorageConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateInstanceStorageConfigConditionKeys"></a>

```typescript
public readonly DisassociateInstanceStorageConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateInstanceStorageConfig action.

---

##### `DisassociateLambdaFunctionConditionKeys`<sup>Required</sup> <a name="DisassociateLambdaFunctionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateLambdaFunctionConditionKeys"></a>

```typescript
public readonly DisassociateLambdaFunctionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateLambdaFunction action.

---

##### `DisassociateLexBotConditionKeys`<sup>Required</sup> <a name="DisassociateLexBotConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateLexBotConditionKeys"></a>

```typescript
public readonly DisassociateLexBotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateLexBot action.

---

##### `DisassociatePhoneNumberContactFlowConditionKeys`<sup>Required</sup> <a name="DisassociatePhoneNumberContactFlowConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociatePhoneNumberContactFlowConditionKeys"></a>

```typescript
public readonly DisassociatePhoneNumberContactFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociatePhoneNumberContactFlow action.

---

##### `DisassociateQueueEmailAddressesConditionKeys`<sup>Required</sup> <a name="DisassociateQueueEmailAddressesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateQueueEmailAddressesConditionKeys"></a>

```typescript
public readonly DisassociateQueueEmailAddressesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateQueueEmailAddresses action.

---

##### `DisassociateQueueQuickConnectsConditionKeys`<sup>Required</sup> <a name="DisassociateQueueQuickConnectsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateQueueQuickConnectsConditionKeys"></a>

```typescript
public readonly DisassociateQueueQuickConnectsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateQueueQuickConnects action.

---

##### `DisassociateRoutingProfileQueuesConditionKeys`<sup>Required</sup> <a name="DisassociateRoutingProfileQueuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateRoutingProfileQueuesConditionKeys"></a>

```typescript
public readonly DisassociateRoutingProfileQueuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateRoutingProfileQueues action.

---

##### `DisassociateSecurityKeyConditionKeys`<sup>Required</sup> <a name="DisassociateSecurityKeyConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateSecurityKeyConditionKeys"></a>

```typescript
public readonly DisassociateSecurityKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateSecurityKey action.

---

##### `DisassociateSecurityProfilesConditionKeys`<sup>Required</sup> <a name="DisassociateSecurityProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateSecurityProfilesConditionKeys"></a>

```typescript
public readonly DisassociateSecurityProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateSecurityProfiles action.

---

##### `DisassociateTrafficDistributionGroupUserConditionKeys`<sup>Required</sup> <a name="DisassociateTrafficDistributionGroupUserConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateTrafficDistributionGroupUserConditionKeys"></a>

```typescript
public readonly DisassociateTrafficDistributionGroupUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateTrafficDistributionGroupUser action.

---

##### `DisassociateUserProficienciesConditionKeys`<sup>Required</sup> <a name="DisassociateUserProficienciesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateUserProficienciesConditionKeys"></a>

```typescript
public readonly DisassociateUserProficienciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateUserProficiencies action.

---

##### `DisassociateWorkspaceConditionKeys`<sup>Required</sup> <a name="DisassociateWorkspaceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DisassociateWorkspaceConditionKeys"></a>

```typescript
public readonly DisassociateWorkspaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateWorkspace action.

---

##### `DismissUserContactConditionKeys`<sup>Required</sup> <a name="DismissUserContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.DismissUserContactConditionKeys"></a>

```typescript
public readonly DismissUserContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DismissUserContact action.

---

##### `EvaluateDataTableValuesConditionKeys`<sup>Required</sup> <a name="EvaluateDataTableValuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.EvaluateDataTableValuesConditionKeys"></a>

```typescript
public readonly EvaluateDataTableValuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EvaluateDataTableValues action.

---

##### `EXPRESSION_VALUE`<sup>Required</sup> <a name="EXPRESSION_VALUE" id="@cdk_utils/iam.connect.ConnectConditions.property.EXPRESSION_VALUE"></a>

```typescript
public readonly EXPRESSION_VALUE: string;
```

- *Type:* string

Condition key: connect:ExpressionValue (String).

---

##### `FLOW_TYPE`<sup>Required</sup> <a name="FLOW_TYPE" id="@cdk_utils/iam.connect.ConnectConditions.property.FLOW_TYPE"></a>

```typescript
public readonly FLOW_TYPE: string;
```

- *Type:* string

Condition key: connect:FlowType (ArrayOfString).

---

##### `ImportPhoneNumberConditionKeys`<sup>Required</sup> <a name="ImportPhoneNumberConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ImportPhoneNumberConditionKeys"></a>

```typescript
public readonly ImportPhoneNumberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportPhoneNumber action.

---

##### `ImportWorkspaceMediaConditionKeys`<sup>Required</sup> <a name="ImportWorkspaceMediaConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ImportWorkspaceMediaConditionKeys"></a>

```typescript
public readonly ImportWorkspaceMediaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportWorkspaceMedia action.

---

##### `INSTANCE_ID`<sup>Required</sup> <a name="INSTANCE_ID" id="@cdk_utils/iam.connect.ConnectConditions.property.INSTANCE_ID"></a>

```typescript
public readonly INSTANCE_ID: string;
```

- *Type:* string

Condition key: connect:InstanceId (String).

---

##### `LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_OUTPUT_TYPE`<sup>Required</sup> <a name="LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_OUTPUT_TYPE" id="@cdk_utils/iam.connect.ConnectConditions.property.LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_OUTPUT_TYPE"></a>

```typescript
public readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_OUTPUT_TYPE: string;
```

- *Type:* string

Condition key: connect:ListRealtimeContactAnalysisSegmentsByOutputType (String).

---

##### `LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_SEGMENT_TYPE`<sup>Required</sup> <a name="LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_SEGMENT_TYPE" id="@cdk_utils/iam.connect.ConnectConditions.property.LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_SEGMENT_TYPE"></a>

```typescript
public readonly LIST_REALTIME_CONTACT_ANALYSIS_SEGMENTS_BY_SEGMENT_TYPE: string;
```

- *Type:* string

Condition key: connect:ListRealtimeContactAnalysisSegmentsBySegmentType (ArrayOfString).

---

##### `ListAnalyticsDataAssociationsConditionKeys`<sup>Required</sup> <a name="ListAnalyticsDataAssociationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListAnalyticsDataAssociationsConditionKeys"></a>

```typescript
public readonly ListAnalyticsDataAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAnalyticsDataAssociations action.

---

##### `ListAnalyticsDataLakeDataSetsConditionKeys`<sup>Required</sup> <a name="ListAnalyticsDataLakeDataSetsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListAnalyticsDataLakeDataSetsConditionKeys"></a>

```typescript
public readonly ListAnalyticsDataLakeDataSetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAnalyticsDataLakeDataSets action.

---

##### `ListApprovedOriginsConditionKeys`<sup>Required</sup> <a name="ListApprovedOriginsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListApprovedOriginsConditionKeys"></a>

```typescript
public readonly ListApprovedOriginsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListApprovedOrigins action.

---

##### `ListAssociatedContactsConditionKeys`<sup>Required</sup> <a name="ListAssociatedContactsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListAssociatedContactsConditionKeys"></a>

```typescript
public readonly ListAssociatedContactsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAssociatedContacts action.

---

##### `ListAttachedFilesConfigurationsConditionKeys`<sup>Required</sup> <a name="ListAttachedFilesConfigurationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListAttachedFilesConfigurationsConditionKeys"></a>

```typescript
public readonly ListAttachedFilesConfigurationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAttachedFilesConfigurations action.

---

##### `ListAuthenticationProfilesConditionKeys`<sup>Required</sup> <a name="ListAuthenticationProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListAuthenticationProfilesConditionKeys"></a>

```typescript
public readonly ListAuthenticationProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAuthenticationProfiles action.

---

##### `ListBotsConditionKeys`<sup>Required</sup> <a name="ListBotsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListBotsConditionKeys"></a>

```typescript
public readonly ListBotsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBots action.

---

##### `ListContactEvaluationsConditionKeys`<sup>Required</sup> <a name="ListContactEvaluationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListContactEvaluationsConditionKeys"></a>

```typescript
public readonly ListContactEvaluationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListContactEvaluations action.

---

##### `ListContactFlowModuleAliasesConditionKeys`<sup>Required</sup> <a name="ListContactFlowModuleAliasesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListContactFlowModuleAliasesConditionKeys"></a>

```typescript
public readonly ListContactFlowModuleAliasesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListContactFlowModuleAliases action.

---

##### `ListContactFlowModuleVersionsConditionKeys`<sup>Required</sup> <a name="ListContactFlowModuleVersionsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListContactFlowModuleVersionsConditionKeys"></a>

```typescript
public readonly ListContactFlowModuleVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListContactFlowModuleVersions action.

---

##### `ListContactFlowsConditionKeys`<sup>Required</sup> <a name="ListContactFlowsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListContactFlowsConditionKeys"></a>

```typescript
public readonly ListContactFlowsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListContactFlows action.

---

##### `ListContactFlowVersionsConditionKeys`<sup>Required</sup> <a name="ListContactFlowVersionsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListContactFlowVersionsConditionKeys"></a>

```typescript
public readonly ListContactFlowVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListContactFlowVersions action.

---

##### `ListContactReferencesConditionKeys`<sup>Required</sup> <a name="ListContactReferencesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListContactReferencesConditionKeys"></a>

```typescript
public readonly ListContactReferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListContactReferences action.

---

##### `ListDataTableAttributesConditionKeys`<sup>Required</sup> <a name="ListDataTableAttributesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListDataTableAttributesConditionKeys"></a>

```typescript
public readonly ListDataTableAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDataTableAttributes action.

---

##### `ListDataTablePrimaryValuesConditionKeys`<sup>Required</sup> <a name="ListDataTablePrimaryValuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListDataTablePrimaryValuesConditionKeys"></a>

```typescript
public readonly ListDataTablePrimaryValuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDataTablePrimaryValues action.

---

##### `ListDataTablesConditionKeys`<sup>Required</sup> <a name="ListDataTablesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListDataTablesConditionKeys"></a>

```typescript
public readonly ListDataTablesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDataTables action.

---

##### `ListDataTableValuesConditionKeys`<sup>Required</sup> <a name="ListDataTableValuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListDataTableValuesConditionKeys"></a>

```typescript
public readonly ListDataTableValuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDataTableValues action.

---

##### `ListDefaultVocabulariesConditionKeys`<sup>Required</sup> <a name="ListDefaultVocabulariesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListDefaultVocabulariesConditionKeys"></a>

```typescript
public readonly ListDefaultVocabulariesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDefaultVocabularies action.

---

##### `ListEntitySecurityProfilesConditionKeys`<sup>Required</sup> <a name="ListEntitySecurityProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListEntitySecurityProfilesConditionKeys"></a>

```typescript
public readonly ListEntitySecurityProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEntitySecurityProfiles action.

---

##### `ListEvaluationFormsConditionKeys`<sup>Required</sup> <a name="ListEvaluationFormsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListEvaluationFormsConditionKeys"></a>

```typescript
public readonly ListEvaluationFormsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEvaluationForms action.

---

##### `ListEvaluationFormVersionsConditionKeys`<sup>Required</sup> <a name="ListEvaluationFormVersionsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListEvaluationFormVersionsConditionKeys"></a>

```typescript
public readonly ListEvaluationFormVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEvaluationFormVersions action.

---

##### `ListFlowAssociationsConditionKeys`<sup>Required</sup> <a name="ListFlowAssociationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListFlowAssociationsConditionKeys"></a>

```typescript
public readonly ListFlowAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListFlowAssociations action.

---

##### `ListHoursOfOperationOverridesConditionKeys`<sup>Required</sup> <a name="ListHoursOfOperationOverridesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListHoursOfOperationOverridesConditionKeys"></a>

```typescript
public readonly ListHoursOfOperationOverridesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListHoursOfOperationOverrides action.

---

##### `ListHoursOfOperationsConditionKeys`<sup>Required</sup> <a name="ListHoursOfOperationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListHoursOfOperationsConditionKeys"></a>

```typescript
public readonly ListHoursOfOperationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListHoursOfOperations action.

---

##### `ListInstanceAttributesConditionKeys`<sup>Required</sup> <a name="ListInstanceAttributesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListInstanceAttributesConditionKeys"></a>

```typescript
public readonly ListInstanceAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListInstanceAttributes action.

---

##### `ListInstanceStorageConfigsConditionKeys`<sup>Required</sup> <a name="ListInstanceStorageConfigsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListInstanceStorageConfigsConditionKeys"></a>

```typescript
public readonly ListInstanceStorageConfigsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListInstanceStorageConfigs action.

---

##### `ListIntegrationAssociationsConditionKeys`<sup>Required</sup> <a name="ListIntegrationAssociationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListIntegrationAssociationsConditionKeys"></a>

```typescript
public readonly ListIntegrationAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListIntegrationAssociations action.

---

##### `ListLambdaFunctionsConditionKeys`<sup>Required</sup> <a name="ListLambdaFunctionsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListLambdaFunctionsConditionKeys"></a>

```typescript
public readonly ListLambdaFunctionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListLambdaFunctions action.

---

##### `ListLexBotsConditionKeys`<sup>Required</sup> <a name="ListLexBotsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListLexBotsConditionKeys"></a>

```typescript
public readonly ListLexBotsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListLexBots action.

---

##### `ListMetricsConditionKeys`<sup>Required</sup> <a name="ListMetricsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListMetricsConditionKeys"></a>

```typescript
public readonly ListMetricsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMetrics action.

---

##### `ListNotificationsConditionKeys`<sup>Required</sup> <a name="ListNotificationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListNotificationsConditionKeys"></a>

```typescript
public readonly ListNotificationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListNotifications action.

---

##### `ListPredefinedAttributesConditionKeys`<sup>Required</sup> <a name="ListPredefinedAttributesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListPredefinedAttributesConditionKeys"></a>

```typescript
public readonly ListPredefinedAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPredefinedAttributes action.

---

##### `ListPromptsConditionKeys`<sup>Required</sup> <a name="ListPromptsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListPromptsConditionKeys"></a>

```typescript
public readonly ListPromptsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPrompts action.

---

##### `ListQueueEmailAddressesConditionKeys`<sup>Required</sup> <a name="ListQueueEmailAddressesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListQueueEmailAddressesConditionKeys"></a>

```typescript
public readonly ListQueueEmailAddressesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListQueueEmailAddresses action.

---

##### `ListQueueQuickConnectsConditionKeys`<sup>Required</sup> <a name="ListQueueQuickConnectsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListQueueQuickConnectsConditionKeys"></a>

```typescript
public readonly ListQueueQuickConnectsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListQueueQuickConnects action.

---

##### `ListRealtimeContactAnalysisSegmentsConditionKeys`<sup>Required</sup> <a name="ListRealtimeContactAnalysisSegmentsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListRealtimeContactAnalysisSegmentsConditionKeys"></a>

```typescript
public readonly ListRealtimeContactAnalysisSegmentsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRealtimeContactAnalysisSegments action.

---

##### `ListRealtimeContactAnalysisSegmentsV2ConditionKeys`<sup>Required</sup> <a name="ListRealtimeContactAnalysisSegmentsV2ConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListRealtimeContactAnalysisSegmentsV2ConditionKeys"></a>

```typescript
public readonly ListRealtimeContactAnalysisSegmentsV2ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRealtimeContactAnalysisSegmentsV2 action.

---

##### `ListRoutingProfileManualAssignmentQueuesConditionKeys`<sup>Required</sup> <a name="ListRoutingProfileManualAssignmentQueuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListRoutingProfileManualAssignmentQueuesConditionKeys"></a>

```typescript
public readonly ListRoutingProfileManualAssignmentQueuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRoutingProfileManualAssignmentQueues action.

---

##### `ListRoutingProfileQueuesConditionKeys`<sup>Required</sup> <a name="ListRoutingProfileQueuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListRoutingProfileQueuesConditionKeys"></a>

```typescript
public readonly ListRoutingProfileQueuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRoutingProfileQueues action.

---

##### `ListRoutingProfilesConditionKeys`<sup>Required</sup> <a name="ListRoutingProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListRoutingProfilesConditionKeys"></a>

```typescript
public readonly ListRoutingProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRoutingProfiles action.

---

##### `ListRulesConditionKeys`<sup>Required</sup> <a name="ListRulesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListRulesConditionKeys"></a>

```typescript
public readonly ListRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRules action.

---

##### `ListSecurityKeysConditionKeys`<sup>Required</sup> <a name="ListSecurityKeysConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityKeysConditionKeys"></a>

```typescript
public readonly ListSecurityKeysConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSecurityKeys action.

---

##### `ListSecurityProfileApplicationsConditionKeys`<sup>Required</sup> <a name="ListSecurityProfileApplicationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityProfileApplicationsConditionKeys"></a>

```typescript
public readonly ListSecurityProfileApplicationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSecurityProfileApplications action.

---

##### `ListSecurityProfileFlowModulesConditionKeys`<sup>Required</sup> <a name="ListSecurityProfileFlowModulesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityProfileFlowModulesConditionKeys"></a>

```typescript
public readonly ListSecurityProfileFlowModulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSecurityProfileFlowModules action.

---

##### `ListSecurityProfilePermissionsConditionKeys`<sup>Required</sup> <a name="ListSecurityProfilePermissionsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityProfilePermissionsConditionKeys"></a>

```typescript
public readonly ListSecurityProfilePermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSecurityProfilePermissions action.

---

##### `ListSecurityProfilesConditionKeys`<sup>Required</sup> <a name="ListSecurityProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListSecurityProfilesConditionKeys"></a>

```typescript
public readonly ListSecurityProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSecurityProfiles action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListTrafficDistributionGroupUsersConditionKeys`<sup>Required</sup> <a name="ListTrafficDistributionGroupUsersConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListTrafficDistributionGroupUsersConditionKeys"></a>

```typescript
public readonly ListTrafficDistributionGroupUsersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTrafficDistributionGroupUsers action.

---

##### `ListUseCasesConditionKeys`<sup>Required</sup> <a name="ListUseCasesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListUseCasesConditionKeys"></a>

```typescript
public readonly ListUseCasesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListUseCases action.

---

##### `ListUserHierarchyGroupsConditionKeys`<sup>Required</sup> <a name="ListUserHierarchyGroupsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListUserHierarchyGroupsConditionKeys"></a>

```typescript
public readonly ListUserHierarchyGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListUserHierarchyGroups action.

---

##### `ListUserNotificationsConditionKeys`<sup>Required</sup> <a name="ListUserNotificationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListUserNotificationsConditionKeys"></a>

```typescript
public readonly ListUserNotificationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListUserNotifications action.

---

##### `ListUserProficienciesConditionKeys`<sup>Required</sup> <a name="ListUserProficienciesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListUserProficienciesConditionKeys"></a>

```typescript
public readonly ListUserProficienciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListUserProficiencies action.

---

##### `ListUsersConditionKeys`<sup>Required</sup> <a name="ListUsersConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListUsersConditionKeys"></a>

```typescript
public readonly ListUsersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListUsers action.

---

##### `ListViewsConditionKeys`<sup>Required</sup> <a name="ListViewsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListViewsConditionKeys"></a>

```typescript
public readonly ListViewsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListViews action.

---

##### `ListViewVersionsConditionKeys`<sup>Required</sup> <a name="ListViewVersionsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListViewVersionsConditionKeys"></a>

```typescript
public readonly ListViewVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListViewVersions action.

---

##### `ListWorkspaceMediaConditionKeys`<sup>Required</sup> <a name="ListWorkspaceMediaConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListWorkspaceMediaConditionKeys"></a>

```typescript
public readonly ListWorkspaceMediaConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListWorkspaceMedia action.

---

##### `ListWorkspacePagesConditionKeys`<sup>Required</sup> <a name="ListWorkspacePagesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListWorkspacePagesConditionKeys"></a>

```typescript
public readonly ListWorkspacePagesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListWorkspacePages action.

---

##### `ListWorkspacesConditionKeys`<sup>Required</sup> <a name="ListWorkspacesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ListWorkspacesConditionKeys"></a>

```typescript
public readonly ListWorkspacesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListWorkspaces action.

---

##### `MONITOR_CAPABILITIES`<sup>Required</sup> <a name="MONITOR_CAPABILITIES" id="@cdk_utils/iam.connect.ConnectConditions.property.MONITOR_CAPABILITIES"></a>

```typescript
public readonly MONITOR_CAPABILITIES: string;
```

- *Type:* string

Condition key: connect:MonitorCapabilities (ArrayOfString).

---

##### `MonitorContactConditionKeys`<sup>Required</sup> <a name="MonitorContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.MonitorContactConditionKeys"></a>

```typescript
public readonly MonitorContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the MonitorContact action.

---

##### `PauseContactConditionKeys`<sup>Required</sup> <a name="PauseContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.PauseContactConditionKeys"></a>

```typescript
public readonly PauseContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PauseContact action.

---

##### `PREFERRED_USER_ARN`<sup>Required</sup> <a name="PREFERRED_USER_ARN" id="@cdk_utils/iam.connect.ConnectConditions.property.PREFERRED_USER_ARN"></a>

```typescript
public readonly PREFERRED_USER_ARN: string;
```

- *Type:* string

Condition key: connect:PreferredUserArn (ARN).

---

##### `PRIMARY_ATTRIBUTE`<sup>Required</sup> <a name="PRIMARY_ATTRIBUTE" id="@cdk_utils/iam.connect.ConnectConditions.property.PRIMARY_ATTRIBUTE"></a>

```typescript
public readonly PRIMARY_ATTRIBUTE: string;
```

- *Type:* string

Condition key: connect:PrimaryAttribute/${PrimaryAttribute} (String).

---

##### `PutUserStatusConditionKeys`<sup>Required</sup> <a name="PutUserStatusConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.PutUserStatusConditionKeys"></a>

```typescript
public readonly PutUserStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutUserStatus action.

---

##### `ReleasePhoneNumberConditionKeys`<sup>Required</sup> <a name="ReleasePhoneNumberConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ReleasePhoneNumberConditionKeys"></a>

```typescript
public readonly ReleasePhoneNumberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReleasePhoneNumber action.

---

##### `ReplicateInstanceConditionKeys`<sup>Required</sup> <a name="ReplicateInstanceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ReplicateInstanceConditionKeys"></a>

```typescript
public readonly ReplicateInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReplicateInstance action.

---

##### `ResumeContactConditionKeys`<sup>Required</sup> <a name="ResumeContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ResumeContactConditionKeys"></a>

```typescript
public readonly ResumeContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ResumeContact action.

---

##### `ResumeContactRecordingConditionKeys`<sup>Required</sup> <a name="ResumeContactRecordingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.ResumeContactRecordingConditionKeys"></a>

```typescript
public readonly ResumeContactRecordingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ResumeContactRecording action.

---

##### `SEARCH_CONTACTS_BY_CONTACT_ANALYSIS`<sup>Required</sup> <a name="SEARCH_CONTACTS_BY_CONTACT_ANALYSIS" id="@cdk_utils/iam.connect.ConnectConditions.property.SEARCH_CONTACTS_BY_CONTACT_ANALYSIS"></a>

```typescript
public readonly SEARCH_CONTACTS_BY_CONTACT_ANALYSIS: string;
```

- *Type:* string

Condition key: connect:SearchContactsByContactAnalysis (ArrayOfString).

---

##### `SEARCH_TAG`<sup>Required</sup> <a name="SEARCH_TAG" id="@cdk_utils/iam.connect.ConnectConditions.property.SEARCH_TAG"></a>

```typescript
public readonly SEARCH_TAG: string;
```

- *Type:* string

Condition key: connect:SearchTag/${TagKey} (String).

---

##### `SearchAgentStatusesConditionKeys`<sup>Required</sup> <a name="SearchAgentStatusesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchAgentStatusesConditionKeys"></a>

```typescript
public readonly SearchAgentStatusesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchAgentStatuses action.

---

##### `SearchContactEvaluationsConditionKeys`<sup>Required</sup> <a name="SearchContactEvaluationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchContactEvaluationsConditionKeys"></a>

```typescript
public readonly SearchContactEvaluationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchContactEvaluations action.

---

##### `SearchContactFlowModulesConditionKeys`<sup>Required</sup> <a name="SearchContactFlowModulesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchContactFlowModulesConditionKeys"></a>

```typescript
public readonly SearchContactFlowModulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchContactFlowModules action.

---

##### `SearchContactFlowsConditionKeys`<sup>Required</sup> <a name="SearchContactFlowsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchContactFlowsConditionKeys"></a>

```typescript
public readonly SearchContactFlowsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchContactFlows action.

---

##### `SearchContactsConditionKeys`<sup>Required</sup> <a name="SearchContactsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchContactsConditionKeys"></a>

```typescript
public readonly SearchContactsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchContacts action.

---

##### `SearchDataTablesConditionKeys`<sup>Required</sup> <a name="SearchDataTablesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchDataTablesConditionKeys"></a>

```typescript
public readonly SearchDataTablesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchDataTables action.

---

##### `SearchEmailAddressesConditionKeys`<sup>Required</sup> <a name="SearchEmailAddressesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchEmailAddressesConditionKeys"></a>

```typescript
public readonly SearchEmailAddressesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchEmailAddresses action.

---

##### `SearchEvaluationFormsConditionKeys`<sup>Required</sup> <a name="SearchEvaluationFormsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchEvaluationFormsConditionKeys"></a>

```typescript
public readonly SearchEvaluationFormsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchEvaluationForms action.

---

##### `SearchHoursOfOperationOverridesConditionKeys`<sup>Required</sup> <a name="SearchHoursOfOperationOverridesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchHoursOfOperationOverridesConditionKeys"></a>

```typescript
public readonly SearchHoursOfOperationOverridesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchHoursOfOperationOverrides action.

---

##### `SearchHoursOfOperationsConditionKeys`<sup>Required</sup> <a name="SearchHoursOfOperationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchHoursOfOperationsConditionKeys"></a>

```typescript
public readonly SearchHoursOfOperationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchHoursOfOperations action.

---

##### `SearchMetricsConditionKeys`<sup>Required</sup> <a name="SearchMetricsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchMetricsConditionKeys"></a>

```typescript
public readonly SearchMetricsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchMetrics action.

---

##### `SearchNotificationsConditionKeys`<sup>Required</sup> <a name="SearchNotificationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchNotificationsConditionKeys"></a>

```typescript
public readonly SearchNotificationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchNotifications action.

---

##### `SearchPredefinedAttributesConditionKeys`<sup>Required</sup> <a name="SearchPredefinedAttributesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchPredefinedAttributesConditionKeys"></a>

```typescript
public readonly SearchPredefinedAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchPredefinedAttributes action.

---

##### `SearchPromptsConditionKeys`<sup>Required</sup> <a name="SearchPromptsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchPromptsConditionKeys"></a>

```typescript
public readonly SearchPromptsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchPrompts action.

---

##### `SearchQueuesConditionKeys`<sup>Required</sup> <a name="SearchQueuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchQueuesConditionKeys"></a>

```typescript
public readonly SearchQueuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchQueues action.

---

##### `SearchQuickConnectsConditionKeys`<sup>Required</sup> <a name="SearchQuickConnectsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchQuickConnectsConditionKeys"></a>

```typescript
public readonly SearchQuickConnectsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchQuickConnects action.

---

##### `SearchResourceTagsConditionKeys`<sup>Required</sup> <a name="SearchResourceTagsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchResourceTagsConditionKeys"></a>

```typescript
public readonly SearchResourceTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchResourceTags action.

---

##### `SearchRoutingProfilesConditionKeys`<sup>Required</sup> <a name="SearchRoutingProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchRoutingProfilesConditionKeys"></a>

```typescript
public readonly SearchRoutingProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchRoutingProfiles action.

---

##### `SearchRulesConditionKeys`<sup>Required</sup> <a name="SearchRulesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchRulesConditionKeys"></a>

```typescript
public readonly SearchRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchRules action.

---

##### `SearchSecurityProfilesConditionKeys`<sup>Required</sup> <a name="SearchSecurityProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchSecurityProfilesConditionKeys"></a>

```typescript
public readonly SearchSecurityProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchSecurityProfiles action.

---

##### `SearchUserHierarchyGroupsConditionKeys`<sup>Required</sup> <a name="SearchUserHierarchyGroupsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchUserHierarchyGroupsConditionKeys"></a>

```typescript
public readonly SearchUserHierarchyGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchUserHierarchyGroups action.

---

##### `SearchUsersConditionKeys`<sup>Required</sup> <a name="SearchUsersConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchUsersConditionKeys"></a>

```typescript
public readonly SearchUsersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchUsers action.

---

##### `SearchViewsConditionKeys`<sup>Required</sup> <a name="SearchViewsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchViewsConditionKeys"></a>

```typescript
public readonly SearchViewsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchViews action.

---

##### `SearchVocabulariesConditionKeys`<sup>Required</sup> <a name="SearchVocabulariesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchVocabulariesConditionKeys"></a>

```typescript
public readonly SearchVocabulariesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchVocabularies action.

---

##### `SearchWorkspaceAssociationsConditionKeys`<sup>Required</sup> <a name="SearchWorkspaceAssociationsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchWorkspaceAssociationsConditionKeys"></a>

```typescript
public readonly SearchWorkspaceAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchWorkspaceAssociations action.

---

##### `SearchWorkspacesConditionKeys`<sup>Required</sup> <a name="SearchWorkspacesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SearchWorkspacesConditionKeys"></a>

```typescript
public readonly SearchWorkspacesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchWorkspaces action.

---

##### `SendOutboundChatMessageConditionKeys`<sup>Required</sup> <a name="SendOutboundChatMessageConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SendOutboundChatMessageConditionKeys"></a>

```typescript
public readonly SendOutboundChatMessageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendOutboundChatMessage action.

---

##### `SendOutboundEmailConditionKeys`<sup>Required</sup> <a name="SendOutboundEmailConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SendOutboundEmailConditionKeys"></a>

```typescript
public readonly SendOutboundEmailConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendOutboundEmail action.

---

##### `SendOutboundWebNotificationConditionKeys`<sup>Required</sup> <a name="SendOutboundWebNotificationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SendOutboundWebNotificationConditionKeys"></a>

```typescript
public readonly SendOutboundWebNotificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendOutboundWebNotification action.

---

##### `StartAttachedFileUploadConditionKeys`<sup>Required</sup> <a name="StartAttachedFileUploadConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartAttachedFileUploadConditionKeys"></a>

```typescript
public readonly StartAttachedFileUploadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAttachedFileUpload action.

---

##### `StartChatContactConditionKeys`<sup>Required</sup> <a name="StartChatContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartChatContactConditionKeys"></a>

```typescript
public readonly StartChatContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartChatContact action.

---

##### `StartContactConversationalAnalyticsJobConditionKeys`<sup>Required</sup> <a name="StartContactConversationalAnalyticsJobConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartContactConversationalAnalyticsJobConditionKeys"></a>

```typescript
public readonly StartContactConversationalAnalyticsJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartContactConversationalAnalyticsJob action.

---

##### `StartContactEvaluationConditionKeys`<sup>Required</sup> <a name="StartContactEvaluationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartContactEvaluationConditionKeys"></a>

```typescript
public readonly StartContactEvaluationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartContactEvaluation action.

---

##### `StartContactMediaProcessingConditionKeys`<sup>Required</sup> <a name="StartContactMediaProcessingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartContactMediaProcessingConditionKeys"></a>

```typescript
public readonly StartContactMediaProcessingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartContactMediaProcessing action.

---

##### `StartContactRecordingConditionKeys`<sup>Required</sup> <a name="StartContactRecordingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartContactRecordingConditionKeys"></a>

```typescript
public readonly StartContactRecordingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartContactRecording action.

---

##### `StartContactStreamingConditionKeys`<sup>Required</sup> <a name="StartContactStreamingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartContactStreamingConditionKeys"></a>

```typescript
public readonly StartContactStreamingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartContactStreaming action.

---

##### `StartEmailContactConditionKeys`<sup>Required</sup> <a name="StartEmailContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartEmailContactConditionKeys"></a>

```typescript
public readonly StartEmailContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartEmailContact action.

---

##### `StartEvaluationFormValidationConditionKeys`<sup>Required</sup> <a name="StartEvaluationFormValidationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartEvaluationFormValidationConditionKeys"></a>

```typescript
public readonly StartEvaluationFormValidationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartEvaluationFormValidation action.

---

##### `StartForecastingPlanningSchedulingIntegrationConditionKeys`<sup>Required</sup> <a name="StartForecastingPlanningSchedulingIntegrationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartForecastingPlanningSchedulingIntegrationConditionKeys"></a>

```typescript
public readonly StartForecastingPlanningSchedulingIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartForecastingPlanningSchedulingIntegration action.

---

##### `StartOutboundChatContactConditionKeys`<sup>Required</sup> <a name="StartOutboundChatContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartOutboundChatContactConditionKeys"></a>

```typescript
public readonly StartOutboundChatContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartOutboundChatContact action.

---

##### `StartOutboundEmailContactConditionKeys`<sup>Required</sup> <a name="StartOutboundEmailContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartOutboundEmailContactConditionKeys"></a>

```typescript
public readonly StartOutboundEmailContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartOutboundEmailContact action.

---

##### `StartScreenSharingConditionKeys`<sup>Required</sup> <a name="StartScreenSharingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartScreenSharingConditionKeys"></a>

```typescript
public readonly StartScreenSharingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartScreenSharing action.

---

##### `StartTaskContactConditionKeys`<sup>Required</sup> <a name="StartTaskContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartTaskContactConditionKeys"></a>

```typescript
public readonly StartTaskContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTaskContact action.

---

##### `StartWebRTCContactConditionKeys`<sup>Required</sup> <a name="StartWebRTCContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StartWebRTCContactConditionKeys"></a>

```typescript
public readonly StartWebRTCContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartWebRTCContact action.

---

##### `StopContactConditionKeys`<sup>Required</sup> <a name="StopContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StopContactConditionKeys"></a>

```typescript
public readonly StopContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopContact action.

---

##### `StopContactMediaProcessingConditionKeys`<sup>Required</sup> <a name="StopContactMediaProcessingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StopContactMediaProcessingConditionKeys"></a>

```typescript
public readonly StopContactMediaProcessingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopContactMediaProcessing action.

---

##### `StopContactRecordingConditionKeys`<sup>Required</sup> <a name="StopContactRecordingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StopContactRecordingConditionKeys"></a>

```typescript
public readonly StopContactRecordingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopContactRecording action.

---

##### `StopContactStreamingConditionKeys`<sup>Required</sup> <a name="StopContactStreamingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StopContactStreamingConditionKeys"></a>

```typescript
public readonly StopContactStreamingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopContactStreaming action.

---

##### `StopForecastingPlanningSchedulingIntegrationConditionKeys`<sup>Required</sup> <a name="StopForecastingPlanningSchedulingIntegrationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.StopForecastingPlanningSchedulingIntegrationConditionKeys"></a>

```typescript
public readonly StopForecastingPlanningSchedulingIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopForecastingPlanningSchedulingIntegration action.

---

##### `STORAGE_RESOURCE_TYPE`<sup>Required</sup> <a name="STORAGE_RESOURCE_TYPE" id="@cdk_utils/iam.connect.ConnectConditions.property.STORAGE_RESOURCE_TYPE"></a>

```typescript
public readonly STORAGE_RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: connect:StorageResourceType (String).

---

##### `SubmitContactEvaluationConditionKeys`<sup>Required</sup> <a name="SubmitContactEvaluationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SubmitContactEvaluationConditionKeys"></a>

```typescript
public readonly SubmitContactEvaluationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SubmitContactEvaluation action.

---

##### `SUBTYPE`<sup>Required</sup> <a name="SUBTYPE" id="@cdk_utils/iam.connect.ConnectConditions.property.SUBTYPE"></a>

```typescript
public readonly SUBTYPE: string;
```

- *Type:* string

Condition key: connect:Subtype (String).

---

##### `SuspendContactRecordingConditionKeys`<sup>Required</sup> <a name="SuspendContactRecordingConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.SuspendContactRecordingConditionKeys"></a>

```typescript
public readonly SuspendContactRecordingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SuspendContactRecording action.

---

##### `TagContactConditionKeys`<sup>Required</sup> <a name="TagContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.TagContactConditionKeys"></a>

```typescript
public readonly TagContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagContact action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TransferContactConditionKeys`<sup>Required</sup> <a name="TransferContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.TransferContactConditionKeys"></a>

```typescript
public readonly TransferContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TransferContact action.

---

##### `UntagContactConditionKeys`<sup>Required</sup> <a name="UntagContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UntagContactConditionKeys"></a>

```typescript
public readonly UntagContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagContact action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAgentStatusConditionKeys`<sup>Required</sup> <a name="UpdateAgentStatusConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateAgentStatusConditionKeys"></a>

```typescript
public readonly UpdateAgentStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAgentStatus action.

---

##### `UpdateAttachedFilesConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateAttachedFilesConfigurationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateAttachedFilesConfigurationConditionKeys"></a>

```typescript
public readonly UpdateAttachedFilesConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAttachedFilesConfiguration action.

---

##### `UpdateAuthenticationProfileConditionKeys`<sup>Required</sup> <a name="UpdateAuthenticationProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateAuthenticationProfileConditionKeys"></a>

```typescript
public readonly UpdateAuthenticationProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAuthenticationProfile action.

---

##### `UpdateContactAttributesConditionKeys`<sup>Required</sup> <a name="UpdateContactAttributesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactAttributesConditionKeys"></a>

```typescript
public readonly UpdateContactAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactAttributes action.

---

##### `UpdateContactConditionKeys`<sup>Required</sup> <a name="UpdateContactConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactConditionKeys"></a>

```typescript
public readonly UpdateContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContact action.

---

##### `UpdateContactEvaluationConditionKeys`<sup>Required</sup> <a name="UpdateContactEvaluationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactEvaluationConditionKeys"></a>

```typescript
public readonly UpdateContactEvaluationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactEvaluation action.

---

##### `UpdateContactFlowContentConditionKeys`<sup>Required</sup> <a name="UpdateContactFlowContentConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowContentConditionKeys"></a>

```typescript
public readonly UpdateContactFlowContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactFlowContent action.

---

##### `UpdateContactFlowMetadataConditionKeys`<sup>Required</sup> <a name="UpdateContactFlowMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowMetadataConditionKeys"></a>

```typescript
public readonly UpdateContactFlowMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactFlowMetadata action.

---

##### `UpdateContactFlowModuleAliasConditionKeys`<sup>Required</sup> <a name="UpdateContactFlowModuleAliasConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowModuleAliasConditionKeys"></a>

```typescript
public readonly UpdateContactFlowModuleAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactFlowModuleAlias action.

---

##### `UpdateContactFlowModuleContentConditionKeys`<sup>Required</sup> <a name="UpdateContactFlowModuleContentConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowModuleContentConditionKeys"></a>

```typescript
public readonly UpdateContactFlowModuleContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactFlowModuleContent action.

---

##### `UpdateContactFlowModuleMetadataConditionKeys`<sup>Required</sup> <a name="UpdateContactFlowModuleMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowModuleMetadataConditionKeys"></a>

```typescript
public readonly UpdateContactFlowModuleMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactFlowModuleMetadata action.

---

##### `UpdateContactFlowNameConditionKeys`<sup>Required</sup> <a name="UpdateContactFlowNameConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactFlowNameConditionKeys"></a>

```typescript
public readonly UpdateContactFlowNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactFlowName action.

---

##### `UpdateContactRoutingDataConditionKeys`<sup>Required</sup> <a name="UpdateContactRoutingDataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactRoutingDataConditionKeys"></a>

```typescript
public readonly UpdateContactRoutingDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactRoutingData action.

---

##### `UpdateContactScheduleConditionKeys`<sup>Required</sup> <a name="UpdateContactScheduleConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateContactScheduleConditionKeys"></a>

```typescript
public readonly UpdateContactScheduleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateContactSchedule action.

---

##### `UpdateDataTableAttributeConditionKeys`<sup>Required</sup> <a name="UpdateDataTableAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateDataTableAttributeConditionKeys"></a>

```typescript
public readonly UpdateDataTableAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataTableAttribute action.

---

##### `UpdateDataTableMetadataConditionKeys`<sup>Required</sup> <a name="UpdateDataTableMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateDataTableMetadataConditionKeys"></a>

```typescript
public readonly UpdateDataTableMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataTableMetadata action.

---

##### `UpdateDataTablePrimaryValuesConditionKeys`<sup>Required</sup> <a name="UpdateDataTablePrimaryValuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateDataTablePrimaryValuesConditionKeys"></a>

```typescript
public readonly UpdateDataTablePrimaryValuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDataTablePrimaryValues action.

---

##### `UpdateEmailAddressMetadataConditionKeys`<sup>Required</sup> <a name="UpdateEmailAddressMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateEmailAddressMetadataConditionKeys"></a>

```typescript
public readonly UpdateEmailAddressMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEmailAddressMetadata action.

---

##### `UpdateEvaluationFormConditionKeys`<sup>Required</sup> <a name="UpdateEvaluationFormConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateEvaluationFormConditionKeys"></a>

```typescript
public readonly UpdateEvaluationFormConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEvaluationForm action.

---

##### `UpdateHoursOfOperationConditionKeys`<sup>Required</sup> <a name="UpdateHoursOfOperationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateHoursOfOperationConditionKeys"></a>

```typescript
public readonly UpdateHoursOfOperationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateHoursOfOperation action.

---

##### `UpdateHoursOfOperationOverrideConditionKeys`<sup>Required</sup> <a name="UpdateHoursOfOperationOverrideConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateHoursOfOperationOverrideConditionKeys"></a>

```typescript
public readonly UpdateHoursOfOperationOverrideConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateHoursOfOperationOverride action.

---

##### `UpdateInstanceAttributeConditionKeys`<sup>Required</sup> <a name="UpdateInstanceAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateInstanceAttributeConditionKeys"></a>

```typescript
public readonly UpdateInstanceAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInstanceAttribute action.

---

##### `UpdateInstanceStorageConfigConditionKeys`<sup>Required</sup> <a name="UpdateInstanceStorageConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateInstanceStorageConfigConditionKeys"></a>

```typescript
public readonly UpdateInstanceStorageConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInstanceStorageConfig action.

---

##### `UpdateMetricContentConditionKeys`<sup>Required</sup> <a name="UpdateMetricContentConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateMetricContentConditionKeys"></a>

```typescript
public readonly UpdateMetricContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateMetricContent action.

---

##### `UpdateMetricMetadataConditionKeys`<sup>Required</sup> <a name="UpdateMetricMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateMetricMetadataConditionKeys"></a>

```typescript
public readonly UpdateMetricMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateMetricMetadata action.

---

##### `UpdateNotificationContentConditionKeys`<sup>Required</sup> <a name="UpdateNotificationContentConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateNotificationContentConditionKeys"></a>

```typescript
public readonly UpdateNotificationContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateNotificationContent action.

---

##### `UpdateParticipantAuthenticationConditionKeys`<sup>Required</sup> <a name="UpdateParticipantAuthenticationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateParticipantAuthenticationConditionKeys"></a>

```typescript
public readonly UpdateParticipantAuthenticationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateParticipantAuthentication action.

---

##### `UpdateParticipantRoleConfigConditionKeys`<sup>Required</sup> <a name="UpdateParticipantRoleConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateParticipantRoleConfigConditionKeys"></a>

```typescript
public readonly UpdateParticipantRoleConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateParticipantRoleConfig action.

---

##### `UpdatePhoneNumberConditionKeys`<sup>Required</sup> <a name="UpdatePhoneNumberConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdatePhoneNumberConditionKeys"></a>

```typescript
public readonly UpdatePhoneNumberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePhoneNumber action.

---

##### `UpdatePhoneNumberMetadataConditionKeys`<sup>Required</sup> <a name="UpdatePhoneNumberMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdatePhoneNumberMetadataConditionKeys"></a>

```typescript
public readonly UpdatePhoneNumberMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePhoneNumberMetadata action.

---

##### `UpdatePredefinedAttributeConditionKeys`<sup>Required</sup> <a name="UpdatePredefinedAttributeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdatePredefinedAttributeConditionKeys"></a>

```typescript
public readonly UpdatePredefinedAttributeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePredefinedAttribute action.

---

##### `UpdatePromptConditionKeys`<sup>Required</sup> <a name="UpdatePromptConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdatePromptConditionKeys"></a>

```typescript
public readonly UpdatePromptConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePrompt action.

---

##### `UpdateQueueHoursOfOperationConditionKeys`<sup>Required</sup> <a name="UpdateQueueHoursOfOperationConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueHoursOfOperationConditionKeys"></a>

```typescript
public readonly UpdateQueueHoursOfOperationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQueueHoursOfOperation action.

---

##### `UpdateQueueMaxContactsConditionKeys`<sup>Required</sup> <a name="UpdateQueueMaxContactsConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueMaxContactsConditionKeys"></a>

```typescript
public readonly UpdateQueueMaxContactsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQueueMaxContacts action.

---

##### `UpdateQueueNameConditionKeys`<sup>Required</sup> <a name="UpdateQueueNameConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueNameConditionKeys"></a>

```typescript
public readonly UpdateQueueNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQueueName action.

---

##### `UpdateQueueOutboundCallerConfigConditionKeys`<sup>Required</sup> <a name="UpdateQueueOutboundCallerConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueOutboundCallerConfigConditionKeys"></a>

```typescript
public readonly UpdateQueueOutboundCallerConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQueueOutboundCallerConfig action.

---

##### `UpdateQueueOutboundEmailConfigConditionKeys`<sup>Required</sup> <a name="UpdateQueueOutboundEmailConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueOutboundEmailConfigConditionKeys"></a>

```typescript
public readonly UpdateQueueOutboundEmailConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQueueOutboundEmailConfig action.

---

##### `UpdateQueueStatusConditionKeys`<sup>Required</sup> <a name="UpdateQueueStatusConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateQueueStatusConditionKeys"></a>

```typescript
public readonly UpdateQueueStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQueueStatus action.

---

##### `UpdateQuickConnectConfigConditionKeys`<sup>Required</sup> <a name="UpdateQuickConnectConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateQuickConnectConfigConditionKeys"></a>

```typescript
public readonly UpdateQuickConnectConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQuickConnectConfig action.

---

##### `UpdateQuickConnectNameConditionKeys`<sup>Required</sup> <a name="UpdateQuickConnectNameConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateQuickConnectNameConditionKeys"></a>

```typescript
public readonly UpdateQuickConnectNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateQuickConnectName action.

---

##### `UpdateRoutingProfileAgentAvailabilityTimerConditionKeys`<sup>Required</sup> <a name="UpdateRoutingProfileAgentAvailabilityTimerConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileAgentAvailabilityTimerConditionKeys"></a>

```typescript
public readonly UpdateRoutingProfileAgentAvailabilityTimerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoutingProfileAgentAvailabilityTimer action.

---

##### `UpdateRoutingProfileConcurrencyConditionKeys`<sup>Required</sup> <a name="UpdateRoutingProfileConcurrencyConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileConcurrencyConditionKeys"></a>

```typescript
public readonly UpdateRoutingProfileConcurrencyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoutingProfileConcurrency action.

---

##### `UpdateRoutingProfileDefaultOutboundQueueConditionKeys`<sup>Required</sup> <a name="UpdateRoutingProfileDefaultOutboundQueueConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileDefaultOutboundQueueConditionKeys"></a>

```typescript
public readonly UpdateRoutingProfileDefaultOutboundQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoutingProfileDefaultOutboundQueue action.

---

##### `UpdateRoutingProfileNameConditionKeys`<sup>Required</sup> <a name="UpdateRoutingProfileNameConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileNameConditionKeys"></a>

```typescript
public readonly UpdateRoutingProfileNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoutingProfileName action.

---

##### `UpdateRoutingProfileQueuesConditionKeys`<sup>Required</sup> <a name="UpdateRoutingProfileQueuesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateRoutingProfileQueuesConditionKeys"></a>

```typescript
public readonly UpdateRoutingProfileQueuesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoutingProfileQueues action.

---

##### `UpdateRuleConditionKeys`<sup>Required</sup> <a name="UpdateRuleConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateRuleConditionKeys"></a>

```typescript
public readonly UpdateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRule action.

---

##### `UpdateSecurityProfileConditionKeys`<sup>Required</sup> <a name="UpdateSecurityProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateSecurityProfileConditionKeys"></a>

```typescript
public readonly UpdateSecurityProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSecurityProfile action.

---

##### `UpdateTaskTemplateConditionKeys`<sup>Required</sup> <a name="UpdateTaskTemplateConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateTaskTemplateConditionKeys"></a>

```typescript
public readonly UpdateTaskTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTaskTemplate action.

---

##### `UpdateTrafficDistributionConditionKeys`<sup>Required</sup> <a name="UpdateTrafficDistributionConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateTrafficDistributionConditionKeys"></a>

```typescript
public readonly UpdateTrafficDistributionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTrafficDistribution action.

---

##### `UpdateUserHierarchyConditionKeys`<sup>Required</sup> <a name="UpdateUserHierarchyConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserHierarchyConditionKeys"></a>

```typescript
public readonly UpdateUserHierarchyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserHierarchy action.

---

##### `UpdateUserHierarchyGroupNameConditionKeys`<sup>Required</sup> <a name="UpdateUserHierarchyGroupNameConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserHierarchyGroupNameConditionKeys"></a>

```typescript
public readonly UpdateUserHierarchyGroupNameConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserHierarchyGroupName action.

---

##### `UpdateUserHierarchyStructureConditionKeys`<sup>Required</sup> <a name="UpdateUserHierarchyStructureConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserHierarchyStructureConditionKeys"></a>

```typescript
public readonly UpdateUserHierarchyStructureConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserHierarchyStructure action.

---

##### `UpdateUserIdentityInfoConditionKeys`<sup>Required</sup> <a name="UpdateUserIdentityInfoConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserIdentityInfoConditionKeys"></a>

```typescript
public readonly UpdateUserIdentityInfoConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserIdentityInfo action.

---

##### `UpdateUserNotificationStatusConditionKeys`<sup>Required</sup> <a name="UpdateUserNotificationStatusConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserNotificationStatusConditionKeys"></a>

```typescript
public readonly UpdateUserNotificationStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserNotificationStatus action.

---

##### `UpdateUserPhoneConfigConditionKeys`<sup>Required</sup> <a name="UpdateUserPhoneConfigConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserPhoneConfigConditionKeys"></a>

```typescript
public readonly UpdateUserPhoneConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserPhoneConfig action.

---

##### `UpdateUserProficienciesConditionKeys`<sup>Required</sup> <a name="UpdateUserProficienciesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserProficienciesConditionKeys"></a>

```typescript
public readonly UpdateUserProficienciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserProficiencies action.

---

##### `UpdateUserRoutingProfileConditionKeys`<sup>Required</sup> <a name="UpdateUserRoutingProfileConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserRoutingProfileConditionKeys"></a>

```typescript
public readonly UpdateUserRoutingProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserRoutingProfile action.

---

##### `UpdateUserSecurityProfilesConditionKeys`<sup>Required</sup> <a name="UpdateUserSecurityProfilesConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateUserSecurityProfilesConditionKeys"></a>

```typescript
public readonly UpdateUserSecurityProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserSecurityProfiles action.

---

##### `UpdateViewContentConditionKeys`<sup>Required</sup> <a name="UpdateViewContentConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateViewContentConditionKeys"></a>

```typescript
public readonly UpdateViewContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateViewContent action.

---

##### `UpdateViewMetadataConditionKeys`<sup>Required</sup> <a name="UpdateViewMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateViewMetadataConditionKeys"></a>

```typescript
public readonly UpdateViewMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateViewMetadata action.

---

##### `UpdateWorkspaceMetadataConditionKeys`<sup>Required</sup> <a name="UpdateWorkspaceMetadataConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateWorkspaceMetadataConditionKeys"></a>

```typescript
public readonly UpdateWorkspaceMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkspaceMetadata action.

---

##### `UpdateWorkspacePageConditionKeys`<sup>Required</sup> <a name="UpdateWorkspacePageConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateWorkspacePageConditionKeys"></a>

```typescript
public readonly UpdateWorkspacePageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkspacePage action.

---

##### `UpdateWorkspaceThemeConditionKeys`<sup>Required</sup> <a name="UpdateWorkspaceThemeConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateWorkspaceThemeConditionKeys"></a>

```typescript
public readonly UpdateWorkspaceThemeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkspaceTheme action.

---

##### `UpdateWorkspaceVisibilityConditionKeys`<sup>Required</sup> <a name="UpdateWorkspaceVisibilityConditionKeys" id="@cdk_utils/iam.connect.ConnectConditions.property.UpdateWorkspaceVisibilityConditionKeys"></a>

```typescript
public readonly UpdateWorkspaceVisibilityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkspaceVisibility action.

---

##### `USER_ARN`<sup>Required</sup> <a name="USER_ARN" id="@cdk_utils/iam.connect.ConnectConditions.property.USER_ARN"></a>

```typescript
public readonly USER_ARN: string;
```

- *Type:* string

Condition key: connect:UserArn (ARN).

---

### ConnectOperations <a name="ConnectOperations" id="@cdk_utils/iam.connect.ConnectOperations"></a>

API operation to required IAM actions mapping for connect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.connect.ConnectOperations.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

new connect.ConnectOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ActivateEvaluationForm">ActivateEvaluationForm</a></code> | <code>string[]</code> | IAM actions required for the ActivateEvaluationForm API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateAnalyticsDataSet">AssociateAnalyticsDataSet</a></code> | <code>string[]</code> | IAM actions required for the AssociateAnalyticsDataSet API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateApprovedOrigin">AssociateApprovedOrigin</a></code> | <code>string[]</code> | IAM actions required for the AssociateApprovedOrigin API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateBot">AssociateBot</a></code> | <code>string[]</code> | IAM actions required for the AssociateBot API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateContactWithUser">AssociateContactWithUser</a></code> | <code>string[]</code> | IAM actions required for the AssociateContactWithUser API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateDefaultVocabulary">AssociateDefaultVocabulary</a></code> | <code>string[]</code> | IAM actions required for the AssociateDefaultVocabulary API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateEmailAddressAlias">AssociateEmailAddressAlias</a></code> | <code>string[]</code> | IAM actions required for the AssociateEmailAddressAlias API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateFlow">AssociateFlow</a></code> | <code>string[]</code> | IAM actions required for the AssociateFlow API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateHoursOfOperations">AssociateHoursOfOperations</a></code> | <code>string[]</code> | IAM actions required for the AssociateHoursOfOperations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateInstanceStorageConfig">AssociateInstanceStorageConfig</a></code> | <code>string[]</code> | IAM actions required for the AssociateInstanceStorageConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateLambdaFunction">AssociateLambdaFunction</a></code> | <code>string[]</code> | IAM actions required for the AssociateLambdaFunction API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateLexBot">AssociateLexBot</a></code> | <code>string[]</code> | IAM actions required for the AssociateLexBot API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociatePhoneNumberContactFlow">AssociatePhoneNumberContactFlow</a></code> | <code>string[]</code> | IAM actions required for the AssociatePhoneNumberContactFlow API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateQueueEmailAddresses">AssociateQueueEmailAddresses</a></code> | <code>string[]</code> | IAM actions required for the AssociateQueueEmailAddresses API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateQueueQuickConnects">AssociateQueueQuickConnects</a></code> | <code>string[]</code> | IAM actions required for the AssociateQueueQuickConnects API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateRoutingProfileQueues">AssociateRoutingProfileQueues</a></code> | <code>string[]</code> | IAM actions required for the AssociateRoutingProfileQueues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateSecurityKey">AssociateSecurityKey</a></code> | <code>string[]</code> | IAM actions required for the AssociateSecurityKey API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateSecurityProfiles">AssociateSecurityProfiles</a></code> | <code>string[]</code> | IAM actions required for the AssociateSecurityProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateTrafficDistributionGroupUser">AssociateTrafficDistributionGroupUser</a></code> | <code>string[]</code> | IAM actions required for the AssociateTrafficDistributionGroupUser API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateUserProficiencies">AssociateUserProficiencies</a></code> | <code>string[]</code> | IAM actions required for the AssociateUserProficiencies API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.AssociateWorkspace">AssociateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the AssociateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchAssociateAnalyticsDataSet">BatchAssociateAnalyticsDataSet</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateAnalyticsDataSet API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchCreateDataTableValue">BatchCreateDataTableValue</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateDataTableValue API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchDeleteDataTableValue">BatchDeleteDataTableValue</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteDataTableValue API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchDescribeDataTableValue">BatchDescribeDataTableValue</a></code> | <code>string[]</code> | IAM actions required for the BatchDescribeDataTableValue API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchDisassociateAnalyticsDataSet">BatchDisassociateAnalyticsDataSet</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateAnalyticsDataSet API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchGetAttachedFileMetadata">BatchGetAttachedFileMetadata</a></code> | <code>string[]</code> | IAM actions required for the BatchGetAttachedFileMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchGetFlowAssociation">BatchGetFlowAssociation</a></code> | <code>string[]</code> | IAM actions required for the BatchGetFlowAssociation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchPutContact">BatchPutContact</a></code> | <code>string[]</code> | IAM actions required for the BatchPutContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.BatchUpdateDataTableValue">BatchUpdateDataTableValue</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateDataTableValue API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CancelParticipantAuthentication">CancelParticipantAuthentication</a></code> | <code>string[]</code> | IAM actions required for the CancelParticipantAuthentication API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ClaimPhoneNumber">ClaimPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the ClaimPhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CompleteAttachedFileUpload">CompleteAttachedFileUpload</a></code> | <code>string[]</code> | IAM actions required for the CompleteAttachedFileUpload API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CompleteAttachmentUpload">CompleteAttachmentUpload</a></code> | <code>string[]</code> | IAM actions required for the CompleteAttachmentUpload API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateAgentStatus">CreateAgentStatus</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentStatus API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateAttachedFile">CreateAttachedFile</a></code> | <code>string[]</code> | IAM actions required for the CreateAttachedFile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateAuthCode">CreateAuthCode</a></code> | <code>string[]</code> | IAM actions required for the CreateAuthCode API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateContact">CreateContact</a></code> | <code>string[]</code> | IAM actions required for the CreateContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlow">CreateContactFlow</a></code> | <code>string[]</code> | IAM actions required for the CreateContactFlow API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlowModule">CreateContactFlowModule</a></code> | <code>string[]</code> | IAM actions required for the CreateContactFlowModule API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlowModuleAlias">CreateContactFlowModuleAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateContactFlowModuleAlias API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlowModuleVersion">CreateContactFlowModuleVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateContactFlowModuleVersion API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlowVersion">CreateContactFlowVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateContactFlowVersion API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateDataTable">CreateDataTable</a></code> | <code>string[]</code> | IAM actions required for the CreateDataTable API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateDataTableAttribute">CreateDataTableAttribute</a></code> | <code>string[]</code> | IAM actions required for the CreateDataTableAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateEmailAddress">CreateEmailAddress</a></code> | <code>string[]</code> | IAM actions required for the CreateEmailAddress API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateEvaluationForm">CreateEvaluationForm</a></code> | <code>string[]</code> | IAM actions required for the CreateEvaluationForm API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateExtractionDefinition">CreateExtractionDefinition</a></code> | <code>string[]</code> | IAM actions required for the CreateExtractionDefinition API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateHoursOfOperation">CreateHoursOfOperation</a></code> | <code>string[]</code> | IAM actions required for the CreateHoursOfOperation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateHoursOfOperationOverride">CreateHoursOfOperationOverride</a></code> | <code>string[]</code> | IAM actions required for the CreateHoursOfOperationOverride API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateInstance">CreateInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateInstance API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateIntegrationAssociation">CreateIntegrationAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateIntegrationAssociation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateMetric">CreateMetric</a></code> | <code>string[]</code> | IAM actions required for the CreateMetric API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateNotification">CreateNotification</a></code> | <code>string[]</code> | IAM actions required for the CreateNotification API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateParticipant">CreateParticipant</a></code> | <code>string[]</code> | IAM actions required for the CreateParticipant API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateParticipantConnection">CreateParticipantConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateParticipantConnection API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreatePersistentContactAssociation">CreatePersistentContactAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreatePersistentContactAssociation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreatePredefinedAttribute">CreatePredefinedAttribute</a></code> | <code>string[]</code> | IAM actions required for the CreatePredefinedAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreatePrompt">CreatePrompt</a></code> | <code>string[]</code> | IAM actions required for the CreatePrompt API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreatePushNotificationRegistration">CreatePushNotificationRegistration</a></code> | <code>string[]</code> | IAM actions required for the CreatePushNotificationRegistration API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateQueue">CreateQueue</a></code> | <code>string[]</code> | IAM actions required for the CreateQueue API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateQuickConnect">CreateQuickConnect</a></code> | <code>string[]</code> | IAM actions required for the CreateQuickConnect API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateRoutingProfile">CreateRoutingProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateRoutingProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateSecurityProfile">CreateSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateTaskTemplate">CreateTaskTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateTaskTemplate API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateTestCase">CreateTestCase</a></code> | <code>string[]</code> | IAM actions required for the CreateTestCase API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateTrafficDistributionGroup">CreateTrafficDistributionGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateTrafficDistributionGroup API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateUseCase">CreateUseCase</a></code> | <code>string[]</code> | IAM actions required for the CreateUseCase API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateUserHierarchyGroup">CreateUserHierarchyGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateUserHierarchyGroup API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateView">CreateView</a></code> | <code>string[]</code> | IAM actions required for the CreateView API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateViewVersion">CreateViewVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateViewVersion API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateVocabulary">CreateVocabulary</a></code> | <code>string[]</code> | IAM actions required for the CreateVocabulary API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateWorkspace">CreateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.CreateWorkspacePage">CreateWorkspacePage</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkspacePage API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeactivateEvaluationForm">DeactivateEvaluationForm</a></code> | <code>string[]</code> | IAM actions required for the DeactivateEvaluationForm API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteAttachedFile">DeleteAttachedFile</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttachedFile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactData">DeleteContactData</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactData API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactEvaluation">DeleteContactEvaluation</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactEvaluation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlow">DeleteContactFlow</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactFlow API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlowModule">DeleteContactFlowModule</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactFlowModule API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlowModuleAlias">DeleteContactFlowModuleAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactFlowModuleAlias API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlowModuleVersion">DeleteContactFlowModuleVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactFlowModuleVersion API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlowVersion">DeleteContactFlowVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteContactFlowVersion API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteDataTable">DeleteDataTable</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataTable API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteDataTableAttribute">DeleteDataTableAttribute</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataTableAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteEmailAddress">DeleteEmailAddress</a></code> | <code>string[]</code> | IAM actions required for the DeleteEmailAddress API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteEvaluationForm">DeleteEvaluationForm</a></code> | <code>string[]</code> | IAM actions required for the DeleteEvaluationForm API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteExtractionDefinition">DeleteExtractionDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteExtractionDefinition API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteHoursOfOperation">DeleteHoursOfOperation</a></code> | <code>string[]</code> | IAM actions required for the DeleteHoursOfOperation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteHoursOfOperationOverride">DeleteHoursOfOperationOverride</a></code> | <code>string[]</code> | IAM actions required for the DeleteHoursOfOperationOverride API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteInstance">DeleteInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstance API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteIntegrationAssociation">DeleteIntegrationAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntegrationAssociation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteMetric">DeleteMetric</a></code> | <code>string[]</code> | IAM actions required for the DeleteMetric API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteNotification">DeleteNotification</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotification API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeletePredefinedAttribute">DeletePredefinedAttribute</a></code> | <code>string[]</code> | IAM actions required for the DeletePredefinedAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeletePrompt">DeletePrompt</a></code> | <code>string[]</code> | IAM actions required for the DeletePrompt API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeletePushNotificationRegistration">DeletePushNotificationRegistration</a></code> | <code>string[]</code> | IAM actions required for the DeletePushNotificationRegistration API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteQueue">DeleteQueue</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueue API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteQuickConnect">DeleteQuickConnect</a></code> | <code>string[]</code> | IAM actions required for the DeleteQuickConnect API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteRoutingProfile">DeleteRoutingProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoutingProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteSecurityProfile">DeleteSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteSession">DeleteSession</a></code> | <code>string[]</code> | IAM actions required for the DeleteSession API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteTaskTemplate">DeleteTaskTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteTaskTemplate API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteTestCase">DeleteTestCase</a></code> | <code>string[]</code> | IAM actions required for the DeleteTestCase API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteTrafficDistributionGroup">DeleteTrafficDistributionGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrafficDistributionGroup API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteUseCase">DeleteUseCase</a></code> | <code>string[]</code> | IAM actions required for the DeleteUseCase API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteUserHierarchyGroup">DeleteUserHierarchyGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserHierarchyGroup API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteView">DeleteView</a></code> | <code>string[]</code> | IAM actions required for the DeleteView API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteViewVersion">DeleteViewVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteViewVersion API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteVocabulary">DeleteVocabulary</a></code> | <code>string[]</code> | IAM actions required for the DeleteVocabulary API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteWorkspace">DeleteWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspace API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteWorkspaceMedia">DeleteWorkspaceMedia</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspaceMedia API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DeleteWorkspacePage">DeleteWorkspacePage</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkspacePage API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeAgentStatus">DescribeAgentStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeAgentStatus API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeAttachedFilesConfiguration">DescribeAttachedFilesConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeAttachedFilesConfiguration API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeAuthenticationProfile">DescribeAuthenticationProfile</a></code> | <code>string[]</code> | IAM actions required for the DescribeAuthenticationProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeContact">DescribeContact</a></code> | <code>string[]</code> | IAM actions required for the DescribeContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeContactEvaluation">DescribeContactEvaluation</a></code> | <code>string[]</code> | IAM actions required for the DescribeContactEvaluation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeContactFlow">DescribeContactFlow</a></code> | <code>string[]</code> | IAM actions required for the DescribeContactFlow API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeContactFlowModule">DescribeContactFlowModule</a></code> | <code>string[]</code> | IAM actions required for the DescribeContactFlowModule API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeContactFlowModuleAlias">DescribeContactFlowModuleAlias</a></code> | <code>string[]</code> | IAM actions required for the DescribeContactFlowModuleAlias API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeDataTable">DescribeDataTable</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataTable API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeDataTableAttribute">DescribeDataTableAttribute</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataTableAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeEmailAddress">DescribeEmailAddress</a></code> | <code>string[]</code> | IAM actions required for the DescribeEmailAddress API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeEvaluationForm">DescribeEvaluationForm</a></code> | <code>string[]</code> | IAM actions required for the DescribeEvaluationForm API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeExtractionDefinition">DescribeExtractionDefinition</a></code> | <code>string[]</code> | IAM actions required for the DescribeExtractionDefinition API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeHoursOfOperation">DescribeHoursOfOperation</a></code> | <code>string[]</code> | IAM actions required for the DescribeHoursOfOperation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeHoursOfOperationOverride">DescribeHoursOfOperationOverride</a></code> | <code>string[]</code> | IAM actions required for the DescribeHoursOfOperationOverride API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeInstance">DescribeInstance</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstance API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeInstanceAttribute">DescribeInstanceAttribute</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeInstanceStorageConfig">DescribeInstanceStorageConfig</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceStorageConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeMetric">DescribeMetric</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetric API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeNotification">DescribeNotification</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotification API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribePhoneNumber">DescribePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the DescribePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribePredefinedAttribute">DescribePredefinedAttribute</a></code> | <code>string[]</code> | IAM actions required for the DescribePredefinedAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribePrompt">DescribePrompt</a></code> | <code>string[]</code> | IAM actions required for the DescribePrompt API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeQueue">DescribeQueue</a></code> | <code>string[]</code> | IAM actions required for the DescribeQueue API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeQuickConnect">DescribeQuickConnect</a></code> | <code>string[]</code> | IAM actions required for the DescribeQuickConnect API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeRoutingProfile">DescribeRoutingProfile</a></code> | <code>string[]</code> | IAM actions required for the DescribeRoutingProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeRule">DescribeRule</a></code> | <code>string[]</code> | IAM actions required for the DescribeRule API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeSecurityProfile">DescribeSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the DescribeSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeTestCase">DescribeTestCase</a></code> | <code>string[]</code> | IAM actions required for the DescribeTestCase API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeTrafficDistributionGroup">DescribeTrafficDistributionGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrafficDistributionGroup API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeUser">DescribeUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeUser API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeUserHierarchyGroup">DescribeUserHierarchyGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeUserHierarchyGroup API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeUserHierarchyStructure">DescribeUserHierarchyStructure</a></code> | <code>string[]</code> | IAM actions required for the DescribeUserHierarchyStructure API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeView">DescribeView</a></code> | <code>string[]</code> | IAM actions required for the DescribeView API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeVocabulary">DescribeVocabulary</a></code> | <code>string[]</code> | IAM actions required for the DescribeVocabulary API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DescribeWorkspace">DescribeWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkspace API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateAnalyticsDataSet">DisassociateAnalyticsDataSet</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAnalyticsDataSet API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateApprovedOrigin">DisassociateApprovedOrigin</a></code> | <code>string[]</code> | IAM actions required for the DisassociateApprovedOrigin API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateBot">DisassociateBot</a></code> | <code>string[]</code> | IAM actions required for the DisassociateBot API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateEmailAddressAlias">DisassociateEmailAddressAlias</a></code> | <code>string[]</code> | IAM actions required for the DisassociateEmailAddressAlias API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateFlow">DisassociateFlow</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFlow API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateHoursOfOperations">DisassociateHoursOfOperations</a></code> | <code>string[]</code> | IAM actions required for the DisassociateHoursOfOperations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateInstanceStorageConfig">DisassociateInstanceStorageConfig</a></code> | <code>string[]</code> | IAM actions required for the DisassociateInstanceStorageConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateLambdaFunction">DisassociateLambdaFunction</a></code> | <code>string[]</code> | IAM actions required for the DisassociateLambdaFunction API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateLexBot">DisassociateLexBot</a></code> | <code>string[]</code> | IAM actions required for the DisassociateLexBot API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociatePhoneNumberContactFlow">DisassociatePhoneNumberContactFlow</a></code> | <code>string[]</code> | IAM actions required for the DisassociatePhoneNumberContactFlow API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateQueueEmailAddresses">DisassociateQueueEmailAddresses</a></code> | <code>string[]</code> | IAM actions required for the DisassociateQueueEmailAddresses API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateQueueQuickConnects">DisassociateQueueQuickConnects</a></code> | <code>string[]</code> | IAM actions required for the DisassociateQueueQuickConnects API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateRoutingProfileQueues">DisassociateRoutingProfileQueues</a></code> | <code>string[]</code> | IAM actions required for the DisassociateRoutingProfileQueues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateSecurityKey">DisassociateSecurityKey</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSecurityKey API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateSecurityProfiles">DisassociateSecurityProfiles</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSecurityProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateTrafficDistributionGroupUser">DisassociateTrafficDistributionGroupUser</a></code> | <code>string[]</code> | IAM actions required for the DisassociateTrafficDistributionGroupUser API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateUserProficiencies">DisassociateUserProficiencies</a></code> | <code>string[]</code> | IAM actions required for the DisassociateUserProficiencies API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisassociateWorkspace">DisassociateWorkspace</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWorkspace API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DisconnectParticipant">DisconnectParticipant</a></code> | <code>string[]</code> | IAM actions required for the DisconnectParticipant API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.DismissUserContact">DismissUserContact</a></code> | <code>string[]</code> | IAM actions required for the DismissUserContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.EvaluateDataTableValues">EvaluateDataTableValues</a></code> | <code>string[]</code> | IAM actions required for the EvaluateDataTableValues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ImportPhoneNumber">ImportPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the ImportPhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ImportWorkspaceMedia">ImportWorkspaceMedia</a></code> | <code>string[]</code> | IAM actions required for the ImportWorkspaceMedia API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListAgentStatuses">ListAgentStatuses</a></code> | <code>string[]</code> | IAM actions required for the ListAgentStatuses API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListAnalyticsDataAssociations">ListAnalyticsDataAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListAnalyticsDataAssociations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListAnalyticsDataLakeDataSets">ListAnalyticsDataLakeDataSets</a></code> | <code>string[]</code> | IAM actions required for the ListAnalyticsDataLakeDataSets API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListApprovedOrigins">ListApprovedOrigins</a></code> | <code>string[]</code> | IAM actions required for the ListApprovedOrigins API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListAssociatedContacts">ListAssociatedContacts</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedContacts API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListAttachedFilesConfigurations">ListAttachedFilesConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListAttachedFilesConfigurations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListAuthenticationProfiles">ListAuthenticationProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListAuthenticationProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListBots">ListBots</a></code> | <code>string[]</code> | IAM actions required for the ListBots API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListChildHoursOfOperations">ListChildHoursOfOperations</a></code> | <code>string[]</code> | IAM actions required for the ListChildHoursOfOperations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListContactEvaluations">ListContactEvaluations</a></code> | <code>string[]</code> | IAM actions required for the ListContactEvaluations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlowModuleAliases">ListContactFlowModuleAliases</a></code> | <code>string[]</code> | IAM actions required for the ListContactFlowModuleAliases API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlowModules">ListContactFlowModules</a></code> | <code>string[]</code> | IAM actions required for the ListContactFlowModules API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlowModuleVersions">ListContactFlowModuleVersions</a></code> | <code>string[]</code> | IAM actions required for the ListContactFlowModuleVersions API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlows">ListContactFlows</a></code> | <code>string[]</code> | IAM actions required for the ListContactFlows API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlowVersions">ListContactFlowVersions</a></code> | <code>string[]</code> | IAM actions required for the ListContactFlowVersions API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListContactReferences">ListContactReferences</a></code> | <code>string[]</code> | IAM actions required for the ListContactReferences API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListDataTableAttributes">ListDataTableAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListDataTableAttributes API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListDataTablePrimaryValues">ListDataTablePrimaryValues</a></code> | <code>string[]</code> | IAM actions required for the ListDataTablePrimaryValues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListDataTables">ListDataTables</a></code> | <code>string[]</code> | IAM actions required for the ListDataTables API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListDataTableValues">ListDataTableValues</a></code> | <code>string[]</code> | IAM actions required for the ListDataTableValues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListDefaultVocabularies">ListDefaultVocabularies</a></code> | <code>string[]</code> | IAM actions required for the ListDefaultVocabularies API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListEntitySecurityProfiles">ListEntitySecurityProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListEntitySecurityProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListEvaluationForms">ListEvaluationForms</a></code> | <code>string[]</code> | IAM actions required for the ListEvaluationForms API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListEvaluationFormVersions">ListEvaluationFormVersions</a></code> | <code>string[]</code> | IAM actions required for the ListEvaluationFormVersions API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListExtractionDefinitions">ListExtractionDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListExtractionDefinitions API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListFlowAssociations">ListFlowAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListFlowAssociations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListHoursOfOperationOverrides">ListHoursOfOperationOverrides</a></code> | <code>string[]</code> | IAM actions required for the ListHoursOfOperationOverrides API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListHoursOfOperations">ListHoursOfOperations</a></code> | <code>string[]</code> | IAM actions required for the ListHoursOfOperations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListInstanceAttributes">ListInstanceAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceAttributes API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListInstances">ListInstances</a></code> | <code>string[]</code> | IAM actions required for the ListInstances API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListInstanceStorageConfigs">ListInstanceStorageConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListInstanceStorageConfigs API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListIntegrationAssociations">ListIntegrationAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListIntegrationAssociations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListLambdaFunctions">ListLambdaFunctions</a></code> | <code>string[]</code> | IAM actions required for the ListLambdaFunctions API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListLexBots">ListLexBots</a></code> | <code>string[]</code> | IAM actions required for the ListLexBots API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListMetrics">ListMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListMetrics API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListNotifications">ListNotifications</a></code> | <code>string[]</code> | IAM actions required for the ListNotifications API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListPhoneNumbers">ListPhoneNumbers</a></code> | <code>string[]</code> | IAM actions required for the ListPhoneNumbers API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListPhoneNumbersV2">ListPhoneNumbersV2</a></code> | <code>string[]</code> | IAM actions required for the ListPhoneNumbersV2 API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListPredefinedAttributes">ListPredefinedAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListPredefinedAttributes API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListPrompts">ListPrompts</a></code> | <code>string[]</code> | IAM actions required for the ListPrompts API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListQueueEmailAddresses">ListQueueEmailAddresses</a></code> | <code>string[]</code> | IAM actions required for the ListQueueEmailAddresses API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListQueueQuickConnects">ListQueueQuickConnects</a></code> | <code>string[]</code> | IAM actions required for the ListQueueQuickConnects API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListQueues">ListQueues</a></code> | <code>string[]</code> | IAM actions required for the ListQueues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListQuickConnects">ListQuickConnects</a></code> | <code>string[]</code> | IAM actions required for the ListQuickConnects API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListRealtimeContactAnalysisSegments">ListRealtimeContactAnalysisSegments</a></code> | <code>string[]</code> | IAM actions required for the ListRealtimeContactAnalysisSegments API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListRealtimeContactAnalysisSegmentsV2">ListRealtimeContactAnalysisSegmentsV2</a></code> | <code>string[]</code> | IAM actions required for the ListRealtimeContactAnalysisSegmentsV2 API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListRoutingProfileManualAssignmentQueues">ListRoutingProfileManualAssignmentQueues</a></code> | <code>string[]</code> | IAM actions required for the ListRoutingProfileManualAssignmentQueues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListRoutingProfileQueues">ListRoutingProfileQueues</a></code> | <code>string[]</code> | IAM actions required for the ListRoutingProfileQueues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListRoutingProfiles">ListRoutingProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListRoutingProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityKeys">ListSecurityKeys</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityKeys API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityProfileApplications">ListSecurityProfileApplications</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityProfileApplications API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityProfileFlowModules">ListSecurityProfileFlowModules</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityProfileFlowModules API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityProfilePermissions">ListSecurityProfilePermissions</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityProfilePermissions API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityProfiles">ListSecurityProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListSecurityProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListTaskTemplates">ListTaskTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTaskTemplates API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListTestCaseExecutionRecords">ListTestCaseExecutionRecords</a></code> | <code>string[]</code> | IAM actions required for the ListTestCaseExecutionRecords API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListTestCaseExecutions">ListTestCaseExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListTestCaseExecutions API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListTestCases">ListTestCases</a></code> | <code>string[]</code> | IAM actions required for the ListTestCases API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListTrafficDistributionGroups">ListTrafficDistributionGroups</a></code> | <code>string[]</code> | IAM actions required for the ListTrafficDistributionGroups API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListTrafficDistributionGroupUsers">ListTrafficDistributionGroupUsers</a></code> | <code>string[]</code> | IAM actions required for the ListTrafficDistributionGroupUsers API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListUseCases">ListUseCases</a></code> | <code>string[]</code> | IAM actions required for the ListUseCases API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListUserHierarchyGroups">ListUserHierarchyGroups</a></code> | <code>string[]</code> | IAM actions required for the ListUserHierarchyGroups API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListUserNotifications">ListUserNotifications</a></code> | <code>string[]</code> | IAM actions required for the ListUserNotifications API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListUserProficiencies">ListUserProficiencies</a></code> | <code>string[]</code> | IAM actions required for the ListUserProficiencies API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListViews">ListViews</a></code> | <code>string[]</code> | IAM actions required for the ListViews API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListViewVersions">ListViewVersions</a></code> | <code>string[]</code> | IAM actions required for the ListViewVersions API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListWorkspaceMedia">ListWorkspaceMedia</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaceMedia API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListWorkspacePages">ListWorkspacePages</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspacePages API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ListWorkspaces">ListWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the ListWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.MonitorContact">MonitorContact</a></code> | <code>string[]</code> | IAM actions required for the MonitorContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetAttachedFile">opGetAttachedFile</a></code> | <code>string[]</code> | IAM actions required for the GetAttachedFile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetAttachment">opGetAttachment</a></code> | <code>string[]</code> | IAM actions required for the GetAttachment API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetAuthenticationUrl">opGetAuthenticationUrl</a></code> | <code>string[]</code> | IAM actions required for the GetAuthenticationUrl API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetContactAttributes">opGetContactAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetContactAttributes API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetContactMetrics">opGetContactMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetContactMetrics API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetCurrentMetricData">opGetCurrentMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetCurrentMetricData API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetCurrentUserData">opGetCurrentUserData</a></code> | <code>string[]</code> | IAM actions required for the GetCurrentUserData API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetEffectiveHoursOfOperations">opGetEffectiveHoursOfOperations</a></code> | <code>string[]</code> | IAM actions required for the GetEffectiveHoursOfOperations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetEvaluationFormValidation">opGetEvaluationFormValidation</a></code> | <code>string[]</code> | IAM actions required for the GetEvaluationFormValidation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetFederationToken">opGetFederationToken</a></code> | <code>string[]</code> | IAM actions required for the GetFederationToken API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetFlowAssociation">opGetFlowAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetFlowAssociation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetMetricData">opGetMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetMetricData API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetMetricDataV2">opGetMetricDataV2</a></code> | <code>string[]</code> | IAM actions required for the GetMetricDataV2 API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetPromptFile">opGetPromptFile</a></code> | <code>string[]</code> | IAM actions required for the GetPromptFile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetTaskTemplate">opGetTaskTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetTaskTemplate API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetTestCaseExecutionSummary">opGetTestCaseExecutionSummary</a></code> | <code>string[]</code> | IAM actions required for the GetTestCaseExecutionSummary API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetTrafficDistribution">opGetTrafficDistribution</a></code> | <code>string[]</code> | IAM actions required for the GetTrafficDistribution API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.opGetTranscript">opGetTranscript</a></code> | <code>string[]</code> | IAM actions required for the GetTranscript API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.PauseContact">PauseContact</a></code> | <code>string[]</code> | IAM actions required for the PauseContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.PutUserStatus">PutUserStatus</a></code> | <code>string[]</code> | IAM actions required for the PutUserStatus API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ReleasePhoneNumber">ReleasePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the ReleasePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ReplicateInstance">ReplicateInstance</a></code> | <code>string[]</code> | IAM actions required for the ReplicateInstance API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ResumeContact">ResumeContact</a></code> | <code>string[]</code> | IAM actions required for the ResumeContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.ResumeContactRecording">ResumeContactRecording</a></code> | <code>string[]</code> | IAM actions required for the ResumeContactRecording API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchAgentStatuses">SearchAgentStatuses</a></code> | <code>string[]</code> | IAM actions required for the SearchAgentStatuses API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchAvailablePhoneNumbers">SearchAvailablePhoneNumbers</a></code> | <code>string[]</code> | IAM actions required for the SearchAvailablePhoneNumbers API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchContactEvaluations">SearchContactEvaluations</a></code> | <code>string[]</code> | IAM actions required for the SearchContactEvaluations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchContactFlowModules">SearchContactFlowModules</a></code> | <code>string[]</code> | IAM actions required for the SearchContactFlowModules API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchContactFlows">SearchContactFlows</a></code> | <code>string[]</code> | IAM actions required for the SearchContactFlows API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchContacts">SearchContacts</a></code> | <code>string[]</code> | IAM actions required for the SearchContacts API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchDataTables">SearchDataTables</a></code> | <code>string[]</code> | IAM actions required for the SearchDataTables API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchEmailAddresses">SearchEmailAddresses</a></code> | <code>string[]</code> | IAM actions required for the SearchEmailAddresses API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchEvaluationForms">SearchEvaluationForms</a></code> | <code>string[]</code> | IAM actions required for the SearchEvaluationForms API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchHoursOfOperationOverrides">SearchHoursOfOperationOverrides</a></code> | <code>string[]</code> | IAM actions required for the SearchHoursOfOperationOverrides API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchHoursOfOperations">SearchHoursOfOperations</a></code> | <code>string[]</code> | IAM actions required for the SearchHoursOfOperations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchMetrics">SearchMetrics</a></code> | <code>string[]</code> | IAM actions required for the SearchMetrics API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchNotifications">SearchNotifications</a></code> | <code>string[]</code> | IAM actions required for the SearchNotifications API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchPredefinedAttributes">SearchPredefinedAttributes</a></code> | <code>string[]</code> | IAM actions required for the SearchPredefinedAttributes API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchPrompts">SearchPrompts</a></code> | <code>string[]</code> | IAM actions required for the SearchPrompts API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchQueues">SearchQueues</a></code> | <code>string[]</code> | IAM actions required for the SearchQueues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchQuickConnects">SearchQuickConnects</a></code> | <code>string[]</code> | IAM actions required for the SearchQuickConnects API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchResourceTags">SearchResourceTags</a></code> | <code>string[]</code> | IAM actions required for the SearchResourceTags API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchRoutingProfiles">SearchRoutingProfiles</a></code> | <code>string[]</code> | IAM actions required for the SearchRoutingProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchRules">SearchRules</a></code> | <code>string[]</code> | IAM actions required for the SearchRules API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchSecurityProfiles">SearchSecurityProfiles</a></code> | <code>string[]</code> | IAM actions required for the SearchSecurityProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchTestCases">SearchTestCases</a></code> | <code>string[]</code> | IAM actions required for the SearchTestCases API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchUserHierarchyGroups">SearchUserHierarchyGroups</a></code> | <code>string[]</code> | IAM actions required for the SearchUserHierarchyGroups API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchUsers">SearchUsers</a></code> | <code>string[]</code> | IAM actions required for the SearchUsers API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchViews">SearchViews</a></code> | <code>string[]</code> | IAM actions required for the SearchViews API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchVocabularies">SearchVocabularies</a></code> | <code>string[]</code> | IAM actions required for the SearchVocabularies API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchWorkspaceAssociations">SearchWorkspaceAssociations</a></code> | <code>string[]</code> | IAM actions required for the SearchWorkspaceAssociations API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SearchWorkspaces">SearchWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the SearchWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SendChatIntegrationEvent">SendChatIntegrationEvent</a></code> | <code>string[]</code> | IAM actions required for the SendChatIntegrationEvent API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SendEvent">SendEvent</a></code> | <code>string[]</code> | IAM actions required for the SendEvent API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SendMessage">SendMessage</a></code> | <code>string[]</code> | IAM actions required for the SendMessage API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SendOutboundEmail">SendOutboundEmail</a></code> | <code>string[]</code> | IAM actions required for the SendOutboundEmail API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SendOutboundWebNotification">SendOutboundWebNotification</a></code> | <code>string[]</code> | IAM actions required for the SendOutboundWebNotification API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartAssistantContact">StartAssistantContact</a></code> | <code>string[]</code> | IAM actions required for the StartAssistantContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartAttachedFileUpload">StartAttachedFileUpload</a></code> | <code>string[]</code> | IAM actions required for the StartAttachedFileUpload API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartAttachmentUpload">StartAttachmentUpload</a></code> | <code>string[]</code> | IAM actions required for the StartAttachmentUpload API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartChatContact">StartChatContact</a></code> | <code>string[]</code> | IAM actions required for the StartChatContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartContactConversationalAnalyticsJob">StartContactConversationalAnalyticsJob</a></code> | <code>string[]</code> | IAM actions required for the StartContactConversationalAnalyticsJob API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartContactEvaluation">StartContactEvaluation</a></code> | <code>string[]</code> | IAM actions required for the StartContactEvaluation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartContactMediaProcessing">StartContactMediaProcessing</a></code> | <code>string[]</code> | IAM actions required for the StartContactMediaProcessing API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartContactRecording">StartContactRecording</a></code> | <code>string[]</code> | IAM actions required for the StartContactRecording API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartContactStreaming">StartContactStreaming</a></code> | <code>string[]</code> | IAM actions required for the StartContactStreaming API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartEmailContact">StartEmailContact</a></code> | <code>string[]</code> | IAM actions required for the StartEmailContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartEvaluationFormValidation">StartEvaluationFormValidation</a></code> | <code>string[]</code> | IAM actions required for the StartEvaluationFormValidation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartOutboundChatContact">StartOutboundChatContact</a></code> | <code>string[]</code> | IAM actions required for the StartOutboundChatContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartOutboundEmailContact">StartOutboundEmailContact</a></code> | <code>string[]</code> | IAM actions required for the StartOutboundEmailContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartOutboundVoiceContact">StartOutboundVoiceContact</a></code> | <code>string[]</code> | IAM actions required for the StartOutboundVoiceContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartScreenSharing">StartScreenSharing</a></code> | <code>string[]</code> | IAM actions required for the StartScreenSharing API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartTaskContact">StartTaskContact</a></code> | <code>string[]</code> | IAM actions required for the StartTaskContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartTestCaseExecution">StartTestCaseExecution</a></code> | <code>string[]</code> | IAM actions required for the StartTestCaseExecution API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StartWebRTCContact">StartWebRTCContact</a></code> | <code>string[]</code> | IAM actions required for the StartWebRTCContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StopContact">StopContact</a></code> | <code>string[]</code> | IAM actions required for the StopContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StopContactMediaProcessing">StopContactMediaProcessing</a></code> | <code>string[]</code> | IAM actions required for the StopContactMediaProcessing API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StopContactRecording">StopContactRecording</a></code> | <code>string[]</code> | IAM actions required for the StopContactRecording API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StopContactStreaming">StopContactStreaming</a></code> | <code>string[]</code> | IAM actions required for the StopContactStreaming API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.StopTestCaseExecution">StopTestCaseExecution</a></code> | <code>string[]</code> | IAM actions required for the StopTestCaseExecution API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SubmitContactEvaluation">SubmitContactEvaluation</a></code> | <code>string[]</code> | IAM actions required for the SubmitContactEvaluation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.SuspendContactRecording">SuspendContactRecording</a></code> | <code>string[]</code> | IAM actions required for the SuspendContactRecording API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.TagContact">TagContact</a></code> | <code>string[]</code> | IAM actions required for the TagContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.TransferContact">TransferContact</a></code> | <code>string[]</code> | IAM actions required for the TransferContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UntagContact">UntagContact</a></code> | <code>string[]</code> | IAM actions required for the UntagContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateAgentStatus">UpdateAgentStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentStatus API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateAttachedFilesConfiguration">UpdateAttachedFilesConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateAttachedFilesConfiguration API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateAuthenticationProfile">UpdateAuthenticationProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateAuthenticationProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContact">UpdateContact</a></code> | <code>string[]</code> | IAM actions required for the UpdateContact API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactAttributes">UpdateContactAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactAttributes API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactEvaluation">UpdateContactEvaluation</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactEvaluation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowContent">UpdateContactFlowContent</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactFlowContent API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowMetadata">UpdateContactFlowMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactFlowMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowModuleAlias">UpdateContactFlowModuleAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactFlowModuleAlias API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowModuleContent">UpdateContactFlowModuleContent</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactFlowModuleContent API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowModuleMetadata">UpdateContactFlowModuleMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactFlowModuleMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowName">UpdateContactFlowName</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactFlowName API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactRoutingData">UpdateContactRoutingData</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactRoutingData API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactSchedule">UpdateContactSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactSchedule API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactTaskTemplate">UpdateContactTaskTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateContactTaskTemplate API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateDataTableAttribute">UpdateDataTableAttribute</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataTableAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateDataTableMetadata">UpdateDataTableMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataTableMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateDataTablePrimaryValues">UpdateDataTablePrimaryValues</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataTablePrimaryValues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateEmailAddressMetadata">UpdateEmailAddressMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateEmailAddressMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateEvaluationForm">UpdateEvaluationForm</a></code> | <code>string[]</code> | IAM actions required for the UpdateEvaluationForm API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateExtractionDefinition">UpdateExtractionDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateExtractionDefinition API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateHoursOfOperation">UpdateHoursOfOperation</a></code> | <code>string[]</code> | IAM actions required for the UpdateHoursOfOperation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateHoursOfOperationOverride">UpdateHoursOfOperationOverride</a></code> | <code>string[]</code> | IAM actions required for the UpdateHoursOfOperationOverride API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateInstanceAttribute">UpdateInstanceAttribute</a></code> | <code>string[]</code> | IAM actions required for the UpdateInstanceAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateInstanceStorageConfig">UpdateInstanceStorageConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateInstanceStorageConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateMetricContent">UpdateMetricContent</a></code> | <code>string[]</code> | IAM actions required for the UpdateMetricContent API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateMetricMetadata">UpdateMetricMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateMetricMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateNotificationContent">UpdateNotificationContent</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotificationContent API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateParticipantAuthentication">UpdateParticipantAuthentication</a></code> | <code>string[]</code> | IAM actions required for the UpdateParticipantAuthentication API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateParticipantRoleConfig">UpdateParticipantRoleConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateParticipantRoleConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdatePhoneNumber">UpdatePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the UpdatePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdatePhoneNumberMetadata">UpdatePhoneNumberMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdatePhoneNumberMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdatePredefinedAttribute">UpdatePredefinedAttribute</a></code> | <code>string[]</code> | IAM actions required for the UpdatePredefinedAttribute API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdatePrompt">UpdatePrompt</a></code> | <code>string[]</code> | IAM actions required for the UpdatePrompt API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueHoursOfOperation">UpdateQueueHoursOfOperation</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueHoursOfOperation API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueMaxContacts">UpdateQueueMaxContacts</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueMaxContacts API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueName">UpdateQueueName</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueName API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueOutboundCallerConfig">UpdateQueueOutboundCallerConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueOutboundCallerConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueOutboundEmailConfig">UpdateQueueOutboundEmailConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueOutboundEmailConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueStatus">UpdateQueueStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueueStatus API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateQuickConnectConfig">UpdateQuickConnectConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateQuickConnectConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateQuickConnectName">UpdateQuickConnectName</a></code> | <code>string[]</code> | IAM actions required for the UpdateQuickConnectName API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileAgentAvailabilityTimer">UpdateRoutingProfileAgentAvailabilityTimer</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoutingProfileAgentAvailabilityTimer API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileConcurrency">UpdateRoutingProfileConcurrency</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoutingProfileConcurrency API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileDefaultOutboundQueue">UpdateRoutingProfileDefaultOutboundQueue</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoutingProfileDefaultOutboundQueue API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileName">UpdateRoutingProfileName</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoutingProfileName API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileQueues">UpdateRoutingProfileQueues</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoutingProfileQueues API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateRule">UpdateRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRule API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateSecurityProfile">UpdateSecurityProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateSecurityProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateTaskTemplate">UpdateTaskTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateTaskTemplate API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateTestCase">UpdateTestCase</a></code> | <code>string[]</code> | IAM actions required for the UpdateTestCase API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateTrafficDistribution">UpdateTrafficDistribution</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrafficDistribution API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserConfig">UpdateUserConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserHierarchy">UpdateUserHierarchy</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserHierarchy API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserHierarchyGroupName">UpdateUserHierarchyGroupName</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserHierarchyGroupName API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserHierarchyStructure">UpdateUserHierarchyStructure</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserHierarchyStructure API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserIdentityInfo">UpdateUserIdentityInfo</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserIdentityInfo API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserNotificationStatus">UpdateUserNotificationStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserNotificationStatus API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserPhoneConfig">UpdateUserPhoneConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserPhoneConfig API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserProficiencies">UpdateUserProficiencies</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserProficiencies API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserRoutingProfile">UpdateUserRoutingProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserRoutingProfile API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserSecurityProfiles">UpdateUserSecurityProfiles</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserSecurityProfiles API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateViewContent">UpdateViewContent</a></code> | <code>string[]</code> | IAM actions required for the UpdateViewContent API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateViewMetadata">UpdateViewMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateViewMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateWorkspaceMetadata">UpdateWorkspaceMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceMetadata API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateWorkspacePage">UpdateWorkspacePage</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspacePage API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateWorkspaceTheme">UpdateWorkspaceTheme</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceTheme API call. |
| <code><a href="#@cdk_utils/iam.connect.ConnectOperations.property.UpdateWorkspaceVisibility">UpdateWorkspaceVisibility</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkspaceVisibility API call. |

---

##### `ActivateEvaluationForm`<sup>Required</sup> <a name="ActivateEvaluationForm" id="@cdk_utils/iam.connect.ConnectOperations.property.ActivateEvaluationForm"></a>

```typescript
public readonly ActivateEvaluationForm: string[];
```

- *Type:* string[]

IAM actions required for the ActivateEvaluationForm API call.

---

##### `AssociateAnalyticsDataSet`<sup>Required</sup> <a name="AssociateAnalyticsDataSet" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateAnalyticsDataSet"></a>

```typescript
public readonly AssociateAnalyticsDataSet: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAnalyticsDataSet API call.

---

##### `AssociateApprovedOrigin`<sup>Required</sup> <a name="AssociateApprovedOrigin" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateApprovedOrigin"></a>

```typescript
public readonly AssociateApprovedOrigin: string[];
```

- *Type:* string[]

IAM actions required for the AssociateApprovedOrigin API call.

---

##### `AssociateBot`<sup>Required</sup> <a name="AssociateBot" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateBot"></a>

```typescript
public readonly AssociateBot: string[];
```

- *Type:* string[]

IAM actions required for the AssociateBot API call.

---

##### `AssociateContactWithUser`<sup>Required</sup> <a name="AssociateContactWithUser" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateContactWithUser"></a>

```typescript
public readonly AssociateContactWithUser: string[];
```

- *Type:* string[]

IAM actions required for the AssociateContactWithUser API call.

---

##### `AssociateDefaultVocabulary`<sup>Required</sup> <a name="AssociateDefaultVocabulary" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateDefaultVocabulary"></a>

```typescript
public readonly AssociateDefaultVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDefaultVocabulary API call.

---

##### `AssociateEmailAddressAlias`<sup>Required</sup> <a name="AssociateEmailAddressAlias" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateEmailAddressAlias"></a>

```typescript
public readonly AssociateEmailAddressAlias: string[];
```

- *Type:* string[]

IAM actions required for the AssociateEmailAddressAlias API call.

---

##### `AssociateFlow`<sup>Required</sup> <a name="AssociateFlow" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateFlow"></a>

```typescript
public readonly AssociateFlow: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFlow API call.

---

##### `AssociateHoursOfOperations`<sup>Required</sup> <a name="AssociateHoursOfOperations" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateHoursOfOperations"></a>

```typescript
public readonly AssociateHoursOfOperations: string[];
```

- *Type:* string[]

IAM actions required for the AssociateHoursOfOperations API call.

---

##### `AssociateInstanceStorageConfig`<sup>Required</sup> <a name="AssociateInstanceStorageConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateInstanceStorageConfig"></a>

```typescript
public readonly AssociateInstanceStorageConfig: string[];
```

- *Type:* string[]

IAM actions required for the AssociateInstanceStorageConfig API call.

---

##### `AssociateLambdaFunction`<sup>Required</sup> <a name="AssociateLambdaFunction" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateLambdaFunction"></a>

```typescript
public readonly AssociateLambdaFunction: string[];
```

- *Type:* string[]

IAM actions required for the AssociateLambdaFunction API call.

---

##### `AssociateLexBot`<sup>Required</sup> <a name="AssociateLexBot" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateLexBot"></a>

```typescript
public readonly AssociateLexBot: string[];
```

- *Type:* string[]

IAM actions required for the AssociateLexBot API call.

---

##### `AssociatePhoneNumberContactFlow`<sup>Required</sup> <a name="AssociatePhoneNumberContactFlow" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociatePhoneNumberContactFlow"></a>

```typescript
public readonly AssociatePhoneNumberContactFlow: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePhoneNumberContactFlow API call.

---

##### `AssociateQueueEmailAddresses`<sup>Required</sup> <a name="AssociateQueueEmailAddresses" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateQueueEmailAddresses"></a>

```typescript
public readonly AssociateQueueEmailAddresses: string[];
```

- *Type:* string[]

IAM actions required for the AssociateQueueEmailAddresses API call.

---

##### `AssociateQueueQuickConnects`<sup>Required</sup> <a name="AssociateQueueQuickConnects" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateQueueQuickConnects"></a>

```typescript
public readonly AssociateQueueQuickConnects: string[];
```

- *Type:* string[]

IAM actions required for the AssociateQueueQuickConnects API call.

---

##### `AssociateRoutingProfileQueues`<sup>Required</sup> <a name="AssociateRoutingProfileQueues" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateRoutingProfileQueues"></a>

```typescript
public readonly AssociateRoutingProfileQueues: string[];
```

- *Type:* string[]

IAM actions required for the AssociateRoutingProfileQueues API call.

---

##### `AssociateSecurityKey`<sup>Required</sup> <a name="AssociateSecurityKey" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateSecurityKey"></a>

```typescript
public readonly AssociateSecurityKey: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSecurityKey API call.

---

##### `AssociateSecurityProfiles`<sup>Required</sup> <a name="AssociateSecurityProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateSecurityProfiles"></a>

```typescript
public readonly AssociateSecurityProfiles: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSecurityProfiles API call.

---

##### `AssociateTrafficDistributionGroupUser`<sup>Required</sup> <a name="AssociateTrafficDistributionGroupUser" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateTrafficDistributionGroupUser"></a>

```typescript
public readonly AssociateTrafficDistributionGroupUser: string[];
```

- *Type:* string[]

IAM actions required for the AssociateTrafficDistributionGroupUser API call.

---

##### `AssociateUserProficiencies`<sup>Required</sup> <a name="AssociateUserProficiencies" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateUserProficiencies"></a>

```typescript
public readonly AssociateUserProficiencies: string[];
```

- *Type:* string[]

IAM actions required for the AssociateUserProficiencies API call.

---

##### `AssociateWorkspace`<sup>Required</sup> <a name="AssociateWorkspace" id="@cdk_utils/iam.connect.ConnectOperations.property.AssociateWorkspace"></a>

```typescript
public readonly AssociateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWorkspace API call.

---

##### `BatchAssociateAnalyticsDataSet`<sup>Required</sup> <a name="BatchAssociateAnalyticsDataSet" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchAssociateAnalyticsDataSet"></a>

```typescript
public readonly BatchAssociateAnalyticsDataSet: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateAnalyticsDataSet API call.

---

##### `BatchCreateDataTableValue`<sup>Required</sup> <a name="BatchCreateDataTableValue" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchCreateDataTableValue"></a>

```typescript
public readonly BatchCreateDataTableValue: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateDataTableValue API call.

---

##### `BatchDeleteDataTableValue`<sup>Required</sup> <a name="BatchDeleteDataTableValue" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchDeleteDataTableValue"></a>

```typescript
public readonly BatchDeleteDataTableValue: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteDataTableValue API call.

---

##### `BatchDescribeDataTableValue`<sup>Required</sup> <a name="BatchDescribeDataTableValue" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchDescribeDataTableValue"></a>

```typescript
public readonly BatchDescribeDataTableValue: string[];
```

- *Type:* string[]

IAM actions required for the BatchDescribeDataTableValue API call.

---

##### `BatchDisassociateAnalyticsDataSet`<sup>Required</sup> <a name="BatchDisassociateAnalyticsDataSet" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchDisassociateAnalyticsDataSet"></a>

```typescript
public readonly BatchDisassociateAnalyticsDataSet: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateAnalyticsDataSet API call.

---

##### `BatchGetAttachedFileMetadata`<sup>Required</sup> <a name="BatchGetAttachedFileMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchGetAttachedFileMetadata"></a>

```typescript
public readonly BatchGetAttachedFileMetadata: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetAttachedFileMetadata API call.

---

##### `BatchGetFlowAssociation`<sup>Required</sup> <a name="BatchGetFlowAssociation" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchGetFlowAssociation"></a>

```typescript
public readonly BatchGetFlowAssociation: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetFlowAssociation API call.

---

##### `BatchPutContact`<sup>Required</sup> <a name="BatchPutContact" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchPutContact"></a>

```typescript
public readonly BatchPutContact: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutContact API call.

---

##### `BatchUpdateDataTableValue`<sup>Required</sup> <a name="BatchUpdateDataTableValue" id="@cdk_utils/iam.connect.ConnectOperations.property.BatchUpdateDataTableValue"></a>

```typescript
public readonly BatchUpdateDataTableValue: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateDataTableValue API call.

---

##### `CancelParticipantAuthentication`<sup>Required</sup> <a name="CancelParticipantAuthentication" id="@cdk_utils/iam.connect.ConnectOperations.property.CancelParticipantAuthentication"></a>

```typescript
public readonly CancelParticipantAuthentication: string[];
```

- *Type:* string[]

IAM actions required for the CancelParticipantAuthentication API call.

---

##### `ClaimPhoneNumber`<sup>Required</sup> <a name="ClaimPhoneNumber" id="@cdk_utils/iam.connect.ConnectOperations.property.ClaimPhoneNumber"></a>

```typescript
public readonly ClaimPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the ClaimPhoneNumber API call.

---

##### `CompleteAttachedFileUpload`<sup>Required</sup> <a name="CompleteAttachedFileUpload" id="@cdk_utils/iam.connect.ConnectOperations.property.CompleteAttachedFileUpload"></a>

```typescript
public readonly CompleteAttachedFileUpload: string[];
```

- *Type:* string[]

IAM actions required for the CompleteAttachedFileUpload API call.

---

##### `CompleteAttachmentUpload`<sup>Required</sup> <a name="CompleteAttachmentUpload" id="@cdk_utils/iam.connect.ConnectOperations.property.CompleteAttachmentUpload"></a>

```typescript
public readonly CompleteAttachmentUpload: string[];
```

- *Type:* string[]

IAM actions required for the CompleteAttachmentUpload API call.

---

##### `CreateAgentStatus`<sup>Required</sup> <a name="CreateAgentStatus" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateAgentStatus"></a>

```typescript
public readonly CreateAgentStatus: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentStatus API call.

---

##### `CreateAttachedFile`<sup>Required</sup> <a name="CreateAttachedFile" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateAttachedFile"></a>

```typescript
public readonly CreateAttachedFile: string[];
```

- *Type:* string[]

IAM actions required for the CreateAttachedFile API call.

---

##### `CreateAuthCode`<sup>Required</sup> <a name="CreateAuthCode" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateAuthCode"></a>

```typescript
public readonly CreateAuthCode: string[];
```

- *Type:* string[]

IAM actions required for the CreateAuthCode API call.

---

##### `CreateContact`<sup>Required</sup> <a name="CreateContact" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateContact"></a>

```typescript
public readonly CreateContact: string[];
```

- *Type:* string[]

IAM actions required for the CreateContact API call.

---

##### `CreateContactFlow`<sup>Required</sup> <a name="CreateContactFlow" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlow"></a>

```typescript
public readonly CreateContactFlow: string[];
```

- *Type:* string[]

IAM actions required for the CreateContactFlow API call.

---

##### `CreateContactFlowModule`<sup>Required</sup> <a name="CreateContactFlowModule" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlowModule"></a>

```typescript
public readonly CreateContactFlowModule: string[];
```

- *Type:* string[]

IAM actions required for the CreateContactFlowModule API call.

---

##### `CreateContactFlowModuleAlias`<sup>Required</sup> <a name="CreateContactFlowModuleAlias" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlowModuleAlias"></a>

```typescript
public readonly CreateContactFlowModuleAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateContactFlowModuleAlias API call.

---

##### `CreateContactFlowModuleVersion`<sup>Required</sup> <a name="CreateContactFlowModuleVersion" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlowModuleVersion"></a>

```typescript
public readonly CreateContactFlowModuleVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateContactFlowModuleVersion API call.

---

##### `CreateContactFlowVersion`<sup>Required</sup> <a name="CreateContactFlowVersion" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateContactFlowVersion"></a>

```typescript
public readonly CreateContactFlowVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateContactFlowVersion API call.

---

##### `CreateDataTable`<sup>Required</sup> <a name="CreateDataTable" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateDataTable"></a>

```typescript
public readonly CreateDataTable: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataTable API call.

---

##### `CreateDataTableAttribute`<sup>Required</sup> <a name="CreateDataTableAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateDataTableAttribute"></a>

```typescript
public readonly CreateDataTableAttribute: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataTableAttribute API call.

---

##### `CreateEmailAddress`<sup>Required</sup> <a name="CreateEmailAddress" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateEmailAddress"></a>

```typescript
public readonly CreateEmailAddress: string[];
```

- *Type:* string[]

IAM actions required for the CreateEmailAddress API call.

---

##### `CreateEvaluationForm`<sup>Required</sup> <a name="CreateEvaluationForm" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateEvaluationForm"></a>

```typescript
public readonly CreateEvaluationForm: string[];
```

- *Type:* string[]

IAM actions required for the CreateEvaluationForm API call.

---

##### `CreateExtractionDefinition`<sup>Required</sup> <a name="CreateExtractionDefinition" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateExtractionDefinition"></a>

```typescript
public readonly CreateExtractionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the CreateExtractionDefinition API call.

---

##### `CreateHoursOfOperation`<sup>Required</sup> <a name="CreateHoursOfOperation" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateHoursOfOperation"></a>

```typescript
public readonly CreateHoursOfOperation: string[];
```

- *Type:* string[]

IAM actions required for the CreateHoursOfOperation API call.

---

##### `CreateHoursOfOperationOverride`<sup>Required</sup> <a name="CreateHoursOfOperationOverride" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateHoursOfOperationOverride"></a>

```typescript
public readonly CreateHoursOfOperationOverride: string[];
```

- *Type:* string[]

IAM actions required for the CreateHoursOfOperationOverride API call.

---

##### `CreateInstance`<sup>Required</sup> <a name="CreateInstance" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateInstance"></a>

```typescript
public readonly CreateInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstance API call.

---

##### `CreateIntegrationAssociation`<sup>Required</sup> <a name="CreateIntegrationAssociation" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateIntegrationAssociation"></a>

```typescript
public readonly CreateIntegrationAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntegrationAssociation API call.

---

##### `CreateMetric`<sup>Required</sup> <a name="CreateMetric" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateMetric"></a>

```typescript
public readonly CreateMetric: string[];
```

- *Type:* string[]

IAM actions required for the CreateMetric API call.

---

##### `CreateNotification`<sup>Required</sup> <a name="CreateNotification" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateNotification"></a>

```typescript
public readonly CreateNotification: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotification API call.

---

##### `CreateParticipant`<sup>Required</sup> <a name="CreateParticipant" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateParticipant"></a>

```typescript
public readonly CreateParticipant: string[];
```

- *Type:* string[]

IAM actions required for the CreateParticipant API call.

---

##### `CreateParticipantConnection`<sup>Required</sup> <a name="CreateParticipantConnection" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateParticipantConnection"></a>

```typescript
public readonly CreateParticipantConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateParticipantConnection API call.

---

##### `CreatePersistentContactAssociation`<sup>Required</sup> <a name="CreatePersistentContactAssociation" id="@cdk_utils/iam.connect.ConnectOperations.property.CreatePersistentContactAssociation"></a>

```typescript
public readonly CreatePersistentContactAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreatePersistentContactAssociation API call.

---

##### `CreatePredefinedAttribute`<sup>Required</sup> <a name="CreatePredefinedAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.CreatePredefinedAttribute"></a>

```typescript
public readonly CreatePredefinedAttribute: string[];
```

- *Type:* string[]

IAM actions required for the CreatePredefinedAttribute API call.

---

##### `CreatePrompt`<sup>Required</sup> <a name="CreatePrompt" id="@cdk_utils/iam.connect.ConnectOperations.property.CreatePrompt"></a>

```typescript
public readonly CreatePrompt: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrompt API call.

---

##### `CreatePushNotificationRegistration`<sup>Required</sup> <a name="CreatePushNotificationRegistration" id="@cdk_utils/iam.connect.ConnectOperations.property.CreatePushNotificationRegistration"></a>

```typescript
public readonly CreatePushNotificationRegistration: string[];
```

- *Type:* string[]

IAM actions required for the CreatePushNotificationRegistration API call.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueue API call.

---

##### `CreateQuickConnect`<sup>Required</sup> <a name="CreateQuickConnect" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateQuickConnect"></a>

```typescript
public readonly CreateQuickConnect: string[];
```

- *Type:* string[]

IAM actions required for the CreateQuickConnect API call.

---

##### `CreateRoutingProfile`<sup>Required</sup> <a name="CreateRoutingProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateRoutingProfile"></a>

```typescript
public readonly CreateRoutingProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoutingProfile API call.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `CreateSecurityProfile`<sup>Required</sup> <a name="CreateSecurityProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateSecurityProfile"></a>

```typescript
public readonly CreateSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateSecurityProfile API call.

---

##### `CreateTaskTemplate`<sup>Required</sup> <a name="CreateTaskTemplate" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateTaskTemplate"></a>

```typescript
public readonly CreateTaskTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateTaskTemplate API call.

---

##### `CreateTestCase`<sup>Required</sup> <a name="CreateTestCase" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateTestCase"></a>

```typescript
public readonly CreateTestCase: string[];
```

- *Type:* string[]

IAM actions required for the CreateTestCase API call.

---

##### `CreateTrafficDistributionGroup`<sup>Required</sup> <a name="CreateTrafficDistributionGroup" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateTrafficDistributionGroup"></a>

```typescript
public readonly CreateTrafficDistributionGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrafficDistributionGroup API call.

---

##### `CreateUseCase`<sup>Required</sup> <a name="CreateUseCase" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateUseCase"></a>

```typescript
public readonly CreateUseCase: string[];
```

- *Type:* string[]

IAM actions required for the CreateUseCase API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `CreateUserHierarchyGroup`<sup>Required</sup> <a name="CreateUserHierarchyGroup" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateUserHierarchyGroup"></a>

```typescript
public readonly CreateUserHierarchyGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserHierarchyGroup API call.

---

##### `CreateView`<sup>Required</sup> <a name="CreateView" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateView"></a>

```typescript
public readonly CreateView: string[];
```

- *Type:* string[]

IAM actions required for the CreateView API call.

---

##### `CreateViewVersion`<sup>Required</sup> <a name="CreateViewVersion" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateViewVersion"></a>

```typescript
public readonly CreateViewVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateViewVersion API call.

---

##### `CreateVocabulary`<sup>Required</sup> <a name="CreateVocabulary" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateVocabulary"></a>

```typescript
public readonly CreateVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the CreateVocabulary API call.

---

##### `CreateWorkspace`<sup>Required</sup> <a name="CreateWorkspace" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateWorkspace"></a>

```typescript
public readonly CreateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspace API call.

---

##### `CreateWorkspacePage`<sup>Required</sup> <a name="CreateWorkspacePage" id="@cdk_utils/iam.connect.ConnectOperations.property.CreateWorkspacePage"></a>

```typescript
public readonly CreateWorkspacePage: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkspacePage API call.

---

##### `DeactivateEvaluationForm`<sup>Required</sup> <a name="DeactivateEvaluationForm" id="@cdk_utils/iam.connect.ConnectOperations.property.DeactivateEvaluationForm"></a>

```typescript
public readonly DeactivateEvaluationForm: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateEvaluationForm API call.

---

##### `DeleteAttachedFile`<sup>Required</sup> <a name="DeleteAttachedFile" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteAttachedFile"></a>

```typescript
public readonly DeleteAttachedFile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttachedFile API call.

---

##### `DeleteContactData`<sup>Required</sup> <a name="DeleteContactData" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactData"></a>

```typescript
public readonly DeleteContactData: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactData API call.

---

##### `DeleteContactEvaluation`<sup>Required</sup> <a name="DeleteContactEvaluation" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactEvaluation"></a>

```typescript
public readonly DeleteContactEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactEvaluation API call.

---

##### `DeleteContactFlow`<sup>Required</sup> <a name="DeleteContactFlow" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlow"></a>

```typescript
public readonly DeleteContactFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactFlow API call.

---

##### `DeleteContactFlowModule`<sup>Required</sup> <a name="DeleteContactFlowModule" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlowModule"></a>

```typescript
public readonly DeleteContactFlowModule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactFlowModule API call.

---

##### `DeleteContactFlowModuleAlias`<sup>Required</sup> <a name="DeleteContactFlowModuleAlias" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlowModuleAlias"></a>

```typescript
public readonly DeleteContactFlowModuleAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactFlowModuleAlias API call.

---

##### `DeleteContactFlowModuleVersion`<sup>Required</sup> <a name="DeleteContactFlowModuleVersion" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlowModuleVersion"></a>

```typescript
public readonly DeleteContactFlowModuleVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactFlowModuleVersion API call.

---

##### `DeleteContactFlowVersion`<sup>Required</sup> <a name="DeleteContactFlowVersion" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteContactFlowVersion"></a>

```typescript
public readonly DeleteContactFlowVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContactFlowVersion API call.

---

##### `DeleteDataTable`<sup>Required</sup> <a name="DeleteDataTable" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteDataTable"></a>

```typescript
public readonly DeleteDataTable: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataTable API call.

---

##### `DeleteDataTableAttribute`<sup>Required</sup> <a name="DeleteDataTableAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteDataTableAttribute"></a>

```typescript
public readonly DeleteDataTableAttribute: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataTableAttribute API call.

---

##### `DeleteEmailAddress`<sup>Required</sup> <a name="DeleteEmailAddress" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteEmailAddress"></a>

```typescript
public readonly DeleteEmailAddress: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEmailAddress API call.

---

##### `DeleteEvaluationForm`<sup>Required</sup> <a name="DeleteEvaluationForm" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteEvaluationForm"></a>

```typescript
public readonly DeleteEvaluationForm: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEvaluationForm API call.

---

##### `DeleteExtractionDefinition`<sup>Required</sup> <a name="DeleteExtractionDefinition" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteExtractionDefinition"></a>

```typescript
public readonly DeleteExtractionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExtractionDefinition API call.

---

##### `DeleteHoursOfOperation`<sup>Required</sup> <a name="DeleteHoursOfOperation" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteHoursOfOperation"></a>

```typescript
public readonly DeleteHoursOfOperation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHoursOfOperation API call.

---

##### `DeleteHoursOfOperationOverride`<sup>Required</sup> <a name="DeleteHoursOfOperationOverride" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteHoursOfOperationOverride"></a>

```typescript
public readonly DeleteHoursOfOperationOverride: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHoursOfOperationOverride API call.

---

##### `DeleteInstance`<sup>Required</sup> <a name="DeleteInstance" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteInstance"></a>

```typescript
public readonly DeleteInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstance API call.

---

##### `DeleteIntegrationAssociation`<sup>Required</sup> <a name="DeleteIntegrationAssociation" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteIntegrationAssociation"></a>

```typescript
public readonly DeleteIntegrationAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntegrationAssociation API call.

---

##### `DeleteMetric`<sup>Required</sup> <a name="DeleteMetric" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteMetric"></a>

```typescript
public readonly DeleteMetric: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMetric API call.

---

##### `DeleteNotification`<sup>Required</sup> <a name="DeleteNotification" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteNotification"></a>

```typescript
public readonly DeleteNotification: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotification API call.

---

##### `DeletePredefinedAttribute`<sup>Required</sup> <a name="DeletePredefinedAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.DeletePredefinedAttribute"></a>

```typescript
public readonly DeletePredefinedAttribute: string[];
```

- *Type:* string[]

IAM actions required for the DeletePredefinedAttribute API call.

---

##### `DeletePrompt`<sup>Required</sup> <a name="DeletePrompt" id="@cdk_utils/iam.connect.ConnectOperations.property.DeletePrompt"></a>

```typescript
public readonly DeletePrompt: string[];
```

- *Type:* string[]

IAM actions required for the DeletePrompt API call.

---

##### `DeletePushNotificationRegistration`<sup>Required</sup> <a name="DeletePushNotificationRegistration" id="@cdk_utils/iam.connect.ConnectOperations.property.DeletePushNotificationRegistration"></a>

```typescript
public readonly DeletePushNotificationRegistration: string[];
```

- *Type:* string[]

IAM actions required for the DeletePushNotificationRegistration API call.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueue API call.

---

##### `DeleteQuickConnect`<sup>Required</sup> <a name="DeleteQuickConnect" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteQuickConnect"></a>

```typescript
public readonly DeleteQuickConnect: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQuickConnect API call.

---

##### `DeleteRoutingProfile`<sup>Required</sup> <a name="DeleteRoutingProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteRoutingProfile"></a>

```typescript
public readonly DeleteRoutingProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoutingProfile API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DeleteSecurityProfile`<sup>Required</sup> <a name="DeleteSecurityProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteSecurityProfile"></a>

```typescript
public readonly DeleteSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSecurityProfile API call.

---

##### `DeleteSession`<sup>Required</sup> <a name="DeleteSession" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteSession"></a>

```typescript
public readonly DeleteSession: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSession API call.

---

##### `DeleteTaskTemplate`<sup>Required</sup> <a name="DeleteTaskTemplate" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteTaskTemplate"></a>

```typescript
public readonly DeleteTaskTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTaskTemplate API call.

---

##### `DeleteTestCase`<sup>Required</sup> <a name="DeleteTestCase" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteTestCase"></a>

```typescript
public readonly DeleteTestCase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTestCase API call.

---

##### `DeleteTrafficDistributionGroup`<sup>Required</sup> <a name="DeleteTrafficDistributionGroup" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteTrafficDistributionGroup"></a>

```typescript
public readonly DeleteTrafficDistributionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrafficDistributionGroup API call.

---

##### `DeleteUseCase`<sup>Required</sup> <a name="DeleteUseCase" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteUseCase"></a>

```typescript
public readonly DeleteUseCase: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUseCase API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DeleteUserHierarchyGroup`<sup>Required</sup> <a name="DeleteUserHierarchyGroup" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteUserHierarchyGroup"></a>

```typescript
public readonly DeleteUserHierarchyGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserHierarchyGroup API call.

---

##### `DeleteView`<sup>Required</sup> <a name="DeleteView" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteView"></a>

```typescript
public readonly DeleteView: string[];
```

- *Type:* string[]

IAM actions required for the DeleteView API call.

---

##### `DeleteViewVersion`<sup>Required</sup> <a name="DeleteViewVersion" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteViewVersion"></a>

```typescript
public readonly DeleteViewVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteViewVersion API call.

---

##### `DeleteVocabulary`<sup>Required</sup> <a name="DeleteVocabulary" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteVocabulary"></a>

```typescript
public readonly DeleteVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVocabulary API call.

---

##### `DeleteWorkspace`<sup>Required</sup> <a name="DeleteWorkspace" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteWorkspace"></a>

```typescript
public readonly DeleteWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspace API call.

---

##### `DeleteWorkspaceMedia`<sup>Required</sup> <a name="DeleteWorkspaceMedia" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteWorkspaceMedia"></a>

```typescript
public readonly DeleteWorkspaceMedia: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspaceMedia API call.

---

##### `DeleteWorkspacePage`<sup>Required</sup> <a name="DeleteWorkspacePage" id="@cdk_utils/iam.connect.ConnectOperations.property.DeleteWorkspacePage"></a>

```typescript
public readonly DeleteWorkspacePage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkspacePage API call.

---

##### `DescribeAgentStatus`<sup>Required</sup> <a name="DescribeAgentStatus" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeAgentStatus"></a>

```typescript
public readonly DescribeAgentStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAgentStatus API call.

---

##### `DescribeAttachedFilesConfiguration`<sup>Required</sup> <a name="DescribeAttachedFilesConfiguration" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeAttachedFilesConfiguration"></a>

```typescript
public readonly DescribeAttachedFilesConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAttachedFilesConfiguration API call.

---

##### `DescribeAuthenticationProfile`<sup>Required</sup> <a name="DescribeAuthenticationProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeAuthenticationProfile"></a>

```typescript
public readonly DescribeAuthenticationProfile: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAuthenticationProfile API call.

---

##### `DescribeContact`<sup>Required</sup> <a name="DescribeContact" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeContact"></a>

```typescript
public readonly DescribeContact: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContact API call.

---

##### `DescribeContactEvaluation`<sup>Required</sup> <a name="DescribeContactEvaluation" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeContactEvaluation"></a>

```typescript
public readonly DescribeContactEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContactEvaluation API call.

---

##### `DescribeContactFlow`<sup>Required</sup> <a name="DescribeContactFlow" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeContactFlow"></a>

```typescript
public readonly DescribeContactFlow: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContactFlow API call.

---

##### `DescribeContactFlowModule`<sup>Required</sup> <a name="DescribeContactFlowModule" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeContactFlowModule"></a>

```typescript
public readonly DescribeContactFlowModule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContactFlowModule API call.

---

##### `DescribeContactFlowModuleAlias`<sup>Required</sup> <a name="DescribeContactFlowModuleAlias" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeContactFlowModuleAlias"></a>

```typescript
public readonly DescribeContactFlowModuleAlias: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContactFlowModuleAlias API call.

---

##### `DescribeDataTable`<sup>Required</sup> <a name="DescribeDataTable" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeDataTable"></a>

```typescript
public readonly DescribeDataTable: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataTable API call.

---

##### `DescribeDataTableAttribute`<sup>Required</sup> <a name="DescribeDataTableAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeDataTableAttribute"></a>

```typescript
public readonly DescribeDataTableAttribute: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataTableAttribute API call.

---

##### `DescribeEmailAddress`<sup>Required</sup> <a name="DescribeEmailAddress" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeEmailAddress"></a>

```typescript
public readonly DescribeEmailAddress: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEmailAddress API call.

---

##### `DescribeEvaluationForm`<sup>Required</sup> <a name="DescribeEvaluationForm" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeEvaluationForm"></a>

```typescript
public readonly DescribeEvaluationForm: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEvaluationForm API call.

---

##### `DescribeExtractionDefinition`<sup>Required</sup> <a name="DescribeExtractionDefinition" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeExtractionDefinition"></a>

```typescript
public readonly DescribeExtractionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExtractionDefinition API call.

---

##### `DescribeHoursOfOperation`<sup>Required</sup> <a name="DescribeHoursOfOperation" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeHoursOfOperation"></a>

```typescript
public readonly DescribeHoursOfOperation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHoursOfOperation API call.

---

##### `DescribeHoursOfOperationOverride`<sup>Required</sup> <a name="DescribeHoursOfOperationOverride" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeHoursOfOperationOverride"></a>

```typescript
public readonly DescribeHoursOfOperationOverride: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHoursOfOperationOverride API call.

---

##### `DescribeInstance`<sup>Required</sup> <a name="DescribeInstance" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeInstance"></a>

```typescript
public readonly DescribeInstance: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstance API call.

---

##### `DescribeInstanceAttribute`<sup>Required</sup> <a name="DescribeInstanceAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeInstanceAttribute"></a>

```typescript
public readonly DescribeInstanceAttribute: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceAttribute API call.

---

##### `DescribeInstanceStorageConfig`<sup>Required</sup> <a name="DescribeInstanceStorageConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeInstanceStorageConfig"></a>

```typescript
public readonly DescribeInstanceStorageConfig: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceStorageConfig API call.

---

##### `DescribeMetric`<sup>Required</sup> <a name="DescribeMetric" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeMetric"></a>

```typescript
public readonly DescribeMetric: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetric API call.

---

##### `DescribeNotification`<sup>Required</sup> <a name="DescribeNotification" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeNotification"></a>

```typescript
public readonly DescribeNotification: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotification API call.

---

##### `DescribePhoneNumber`<sup>Required</sup> <a name="DescribePhoneNumber" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribePhoneNumber"></a>

```typescript
public readonly DescribePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the DescribePhoneNumber API call.

---

##### `DescribePredefinedAttribute`<sup>Required</sup> <a name="DescribePredefinedAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribePredefinedAttribute"></a>

```typescript
public readonly DescribePredefinedAttribute: string[];
```

- *Type:* string[]

IAM actions required for the DescribePredefinedAttribute API call.

---

##### `DescribePrompt`<sup>Required</sup> <a name="DescribePrompt" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribePrompt"></a>

```typescript
public readonly DescribePrompt: string[];
```

- *Type:* string[]

IAM actions required for the DescribePrompt API call.

---

##### `DescribeQueue`<sup>Required</sup> <a name="DescribeQueue" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeQueue"></a>

```typescript
public readonly DescribeQueue: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQueue API call.

---

##### `DescribeQuickConnect`<sup>Required</sup> <a name="DescribeQuickConnect" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeQuickConnect"></a>

```typescript
public readonly DescribeQuickConnect: string[];
```

- *Type:* string[]

IAM actions required for the DescribeQuickConnect API call.

---

##### `DescribeRoutingProfile`<sup>Required</sup> <a name="DescribeRoutingProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeRoutingProfile"></a>

```typescript
public readonly DescribeRoutingProfile: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRoutingProfile API call.

---

##### `DescribeRule`<sup>Required</sup> <a name="DescribeRule" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeRule"></a>

```typescript
public readonly DescribeRule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRule API call.

---

##### `DescribeSecurityProfile`<sup>Required</sup> <a name="DescribeSecurityProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeSecurityProfile"></a>

```typescript
public readonly DescribeSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSecurityProfile API call.

---

##### `DescribeTestCase`<sup>Required</sup> <a name="DescribeTestCase" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeTestCase"></a>

```typescript
public readonly DescribeTestCase: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTestCase API call.

---

##### `DescribeTrafficDistributionGroup`<sup>Required</sup> <a name="DescribeTrafficDistributionGroup" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeTrafficDistributionGroup"></a>

```typescript
public readonly DescribeTrafficDistributionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrafficDistributionGroup API call.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUser API call.

---

##### `DescribeUserHierarchyGroup`<sup>Required</sup> <a name="DescribeUserHierarchyGroup" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeUserHierarchyGroup"></a>

```typescript
public readonly DescribeUserHierarchyGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUserHierarchyGroup API call.

---

##### `DescribeUserHierarchyStructure`<sup>Required</sup> <a name="DescribeUserHierarchyStructure" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeUserHierarchyStructure"></a>

```typescript
public readonly DescribeUserHierarchyStructure: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUserHierarchyStructure API call.

---

##### `DescribeView`<sup>Required</sup> <a name="DescribeView" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeView"></a>

```typescript
public readonly DescribeView: string[];
```

- *Type:* string[]

IAM actions required for the DescribeView API call.

---

##### `DescribeVocabulary`<sup>Required</sup> <a name="DescribeVocabulary" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeVocabulary"></a>

```typescript
public readonly DescribeVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVocabulary API call.

---

##### `DescribeWorkspace`<sup>Required</sup> <a name="DescribeWorkspace" id="@cdk_utils/iam.connect.ConnectOperations.property.DescribeWorkspace"></a>

```typescript
public readonly DescribeWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkspace API call.

---

##### `DisassociateAnalyticsDataSet`<sup>Required</sup> <a name="DisassociateAnalyticsDataSet" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateAnalyticsDataSet"></a>

```typescript
public readonly DisassociateAnalyticsDataSet: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAnalyticsDataSet API call.

---

##### `DisassociateApprovedOrigin`<sup>Required</sup> <a name="DisassociateApprovedOrigin" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateApprovedOrigin"></a>

```typescript
public readonly DisassociateApprovedOrigin: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateApprovedOrigin API call.

---

##### `DisassociateBot`<sup>Required</sup> <a name="DisassociateBot" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateBot"></a>

```typescript
public readonly DisassociateBot: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateBot API call.

---

##### `DisassociateEmailAddressAlias`<sup>Required</sup> <a name="DisassociateEmailAddressAlias" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateEmailAddressAlias"></a>

```typescript
public readonly DisassociateEmailAddressAlias: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateEmailAddressAlias API call.

---

##### `DisassociateFlow`<sup>Required</sup> <a name="DisassociateFlow" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateFlow"></a>

```typescript
public readonly DisassociateFlow: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFlow API call.

---

##### `DisassociateHoursOfOperations`<sup>Required</sup> <a name="DisassociateHoursOfOperations" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateHoursOfOperations"></a>

```typescript
public readonly DisassociateHoursOfOperations: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateHoursOfOperations API call.

---

##### `DisassociateInstanceStorageConfig`<sup>Required</sup> <a name="DisassociateInstanceStorageConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateInstanceStorageConfig"></a>

```typescript
public readonly DisassociateInstanceStorageConfig: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateInstanceStorageConfig API call.

---

##### `DisassociateLambdaFunction`<sup>Required</sup> <a name="DisassociateLambdaFunction" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateLambdaFunction"></a>

```typescript
public readonly DisassociateLambdaFunction: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateLambdaFunction API call.

---

##### `DisassociateLexBot`<sup>Required</sup> <a name="DisassociateLexBot" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateLexBot"></a>

```typescript
public readonly DisassociateLexBot: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateLexBot API call.

---

##### `DisassociatePhoneNumberContactFlow`<sup>Required</sup> <a name="DisassociatePhoneNumberContactFlow" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociatePhoneNumberContactFlow"></a>

```typescript
public readonly DisassociatePhoneNumberContactFlow: string[];
```

- *Type:* string[]

IAM actions required for the DisassociatePhoneNumberContactFlow API call.

---

##### `DisassociateQueueEmailAddresses`<sup>Required</sup> <a name="DisassociateQueueEmailAddresses" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateQueueEmailAddresses"></a>

```typescript
public readonly DisassociateQueueEmailAddresses: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateQueueEmailAddresses API call.

---

##### `DisassociateQueueQuickConnects`<sup>Required</sup> <a name="DisassociateQueueQuickConnects" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateQueueQuickConnects"></a>

```typescript
public readonly DisassociateQueueQuickConnects: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateQueueQuickConnects API call.

---

##### `DisassociateRoutingProfileQueues`<sup>Required</sup> <a name="DisassociateRoutingProfileQueues" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateRoutingProfileQueues"></a>

```typescript
public readonly DisassociateRoutingProfileQueues: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateRoutingProfileQueues API call.

---

##### `DisassociateSecurityKey`<sup>Required</sup> <a name="DisassociateSecurityKey" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateSecurityKey"></a>

```typescript
public readonly DisassociateSecurityKey: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSecurityKey API call.

---

##### `DisassociateSecurityProfiles`<sup>Required</sup> <a name="DisassociateSecurityProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateSecurityProfiles"></a>

```typescript
public readonly DisassociateSecurityProfiles: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSecurityProfiles API call.

---

##### `DisassociateTrafficDistributionGroupUser`<sup>Required</sup> <a name="DisassociateTrafficDistributionGroupUser" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateTrafficDistributionGroupUser"></a>

```typescript
public readonly DisassociateTrafficDistributionGroupUser: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateTrafficDistributionGroupUser API call.

---

##### `DisassociateUserProficiencies`<sup>Required</sup> <a name="DisassociateUserProficiencies" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateUserProficiencies"></a>

```typescript
public readonly DisassociateUserProficiencies: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateUserProficiencies API call.

---

##### `DisassociateWorkspace`<sup>Required</sup> <a name="DisassociateWorkspace" id="@cdk_utils/iam.connect.ConnectOperations.property.DisassociateWorkspace"></a>

```typescript
public readonly DisassociateWorkspace: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWorkspace API call.

---

##### `DisconnectParticipant`<sup>Required</sup> <a name="DisconnectParticipant" id="@cdk_utils/iam.connect.ConnectOperations.property.DisconnectParticipant"></a>

```typescript
public readonly DisconnectParticipant: string[];
```

- *Type:* string[]

IAM actions required for the DisconnectParticipant API call.

---

##### `DismissUserContact`<sup>Required</sup> <a name="DismissUserContact" id="@cdk_utils/iam.connect.ConnectOperations.property.DismissUserContact"></a>

```typescript
public readonly DismissUserContact: string[];
```

- *Type:* string[]

IAM actions required for the DismissUserContact API call.

---

##### `EvaluateDataTableValues`<sup>Required</sup> <a name="EvaluateDataTableValues" id="@cdk_utils/iam.connect.ConnectOperations.property.EvaluateDataTableValues"></a>

```typescript
public readonly EvaluateDataTableValues: string[];
```

- *Type:* string[]

IAM actions required for the EvaluateDataTableValues API call.

---

##### `ImportPhoneNumber`<sup>Required</sup> <a name="ImportPhoneNumber" id="@cdk_utils/iam.connect.ConnectOperations.property.ImportPhoneNumber"></a>

```typescript
public readonly ImportPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the ImportPhoneNumber API call.

---

##### `ImportWorkspaceMedia`<sup>Required</sup> <a name="ImportWorkspaceMedia" id="@cdk_utils/iam.connect.ConnectOperations.property.ImportWorkspaceMedia"></a>

```typescript
public readonly ImportWorkspaceMedia: string[];
```

- *Type:* string[]

IAM actions required for the ImportWorkspaceMedia API call.

---

##### `ListAgentStatuses`<sup>Required</sup> <a name="ListAgentStatuses" id="@cdk_utils/iam.connect.ConnectOperations.property.ListAgentStatuses"></a>

```typescript
public readonly ListAgentStatuses: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentStatuses API call.

---

##### `ListAnalyticsDataAssociations`<sup>Required</sup> <a name="ListAnalyticsDataAssociations" id="@cdk_utils/iam.connect.ConnectOperations.property.ListAnalyticsDataAssociations"></a>

```typescript
public readonly ListAnalyticsDataAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalyticsDataAssociations API call.

---

##### `ListAnalyticsDataLakeDataSets`<sup>Required</sup> <a name="ListAnalyticsDataLakeDataSets" id="@cdk_utils/iam.connect.ConnectOperations.property.ListAnalyticsDataLakeDataSets"></a>

```typescript
public readonly ListAnalyticsDataLakeDataSets: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalyticsDataLakeDataSets API call.

---

##### `ListApprovedOrigins`<sup>Required</sup> <a name="ListApprovedOrigins" id="@cdk_utils/iam.connect.ConnectOperations.property.ListApprovedOrigins"></a>

```typescript
public readonly ListApprovedOrigins: string[];
```

- *Type:* string[]

IAM actions required for the ListApprovedOrigins API call.

---

##### `ListAssociatedContacts`<sup>Required</sup> <a name="ListAssociatedContacts" id="@cdk_utils/iam.connect.ConnectOperations.property.ListAssociatedContacts"></a>

```typescript
public readonly ListAssociatedContacts: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedContacts API call.

---

##### `ListAttachedFilesConfigurations`<sup>Required</sup> <a name="ListAttachedFilesConfigurations" id="@cdk_utils/iam.connect.ConnectOperations.property.ListAttachedFilesConfigurations"></a>

```typescript
public readonly ListAttachedFilesConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachedFilesConfigurations API call.

---

##### `ListAuthenticationProfiles`<sup>Required</sup> <a name="ListAuthenticationProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.ListAuthenticationProfiles"></a>

```typescript
public readonly ListAuthenticationProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListAuthenticationProfiles API call.

---

##### `ListBots`<sup>Required</sup> <a name="ListBots" id="@cdk_utils/iam.connect.ConnectOperations.property.ListBots"></a>

```typescript
public readonly ListBots: string[];
```

- *Type:* string[]

IAM actions required for the ListBots API call.

---

##### `ListChildHoursOfOperations`<sup>Required</sup> <a name="ListChildHoursOfOperations" id="@cdk_utils/iam.connect.ConnectOperations.property.ListChildHoursOfOperations"></a>

```typescript
public readonly ListChildHoursOfOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListChildHoursOfOperations API call.

---

##### `ListContactEvaluations`<sup>Required</sup> <a name="ListContactEvaluations" id="@cdk_utils/iam.connect.ConnectOperations.property.ListContactEvaluations"></a>

```typescript
public readonly ListContactEvaluations: string[];
```

- *Type:* string[]

IAM actions required for the ListContactEvaluations API call.

---

##### `ListContactFlowModuleAliases`<sup>Required</sup> <a name="ListContactFlowModuleAliases" id="@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlowModuleAliases"></a>

```typescript
public readonly ListContactFlowModuleAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListContactFlowModuleAliases API call.

---

##### `ListContactFlowModules`<sup>Required</sup> <a name="ListContactFlowModules" id="@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlowModules"></a>

```typescript
public readonly ListContactFlowModules: string[];
```

- *Type:* string[]

IAM actions required for the ListContactFlowModules API call.

---

##### `ListContactFlowModuleVersions`<sup>Required</sup> <a name="ListContactFlowModuleVersions" id="@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlowModuleVersions"></a>

```typescript
public readonly ListContactFlowModuleVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListContactFlowModuleVersions API call.

---

##### `ListContactFlows`<sup>Required</sup> <a name="ListContactFlows" id="@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlows"></a>

```typescript
public readonly ListContactFlows: string[];
```

- *Type:* string[]

IAM actions required for the ListContactFlows API call.

---

##### `ListContactFlowVersions`<sup>Required</sup> <a name="ListContactFlowVersions" id="@cdk_utils/iam.connect.ConnectOperations.property.ListContactFlowVersions"></a>

```typescript
public readonly ListContactFlowVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListContactFlowVersions API call.

---

##### `ListContactReferences`<sup>Required</sup> <a name="ListContactReferences" id="@cdk_utils/iam.connect.ConnectOperations.property.ListContactReferences"></a>

```typescript
public readonly ListContactReferences: string[];
```

- *Type:* string[]

IAM actions required for the ListContactReferences API call.

---

##### `ListDataTableAttributes`<sup>Required</sup> <a name="ListDataTableAttributes" id="@cdk_utils/iam.connect.ConnectOperations.property.ListDataTableAttributes"></a>

```typescript
public readonly ListDataTableAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListDataTableAttributes API call.

---

##### `ListDataTablePrimaryValues`<sup>Required</sup> <a name="ListDataTablePrimaryValues" id="@cdk_utils/iam.connect.ConnectOperations.property.ListDataTablePrimaryValues"></a>

```typescript
public readonly ListDataTablePrimaryValues: string[];
```

- *Type:* string[]

IAM actions required for the ListDataTablePrimaryValues API call.

---

##### `ListDataTables`<sup>Required</sup> <a name="ListDataTables" id="@cdk_utils/iam.connect.ConnectOperations.property.ListDataTables"></a>

```typescript
public readonly ListDataTables: string[];
```

- *Type:* string[]

IAM actions required for the ListDataTables API call.

---

##### `ListDataTableValues`<sup>Required</sup> <a name="ListDataTableValues" id="@cdk_utils/iam.connect.ConnectOperations.property.ListDataTableValues"></a>

```typescript
public readonly ListDataTableValues: string[];
```

- *Type:* string[]

IAM actions required for the ListDataTableValues API call.

---

##### `ListDefaultVocabularies`<sup>Required</sup> <a name="ListDefaultVocabularies" id="@cdk_utils/iam.connect.ConnectOperations.property.ListDefaultVocabularies"></a>

```typescript
public readonly ListDefaultVocabularies: string[];
```

- *Type:* string[]

IAM actions required for the ListDefaultVocabularies API call.

---

##### `ListEntitySecurityProfiles`<sup>Required</sup> <a name="ListEntitySecurityProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.ListEntitySecurityProfiles"></a>

```typescript
public readonly ListEntitySecurityProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListEntitySecurityProfiles API call.

---

##### `ListEvaluationForms`<sup>Required</sup> <a name="ListEvaluationForms" id="@cdk_utils/iam.connect.ConnectOperations.property.ListEvaluationForms"></a>

```typescript
public readonly ListEvaluationForms: string[];
```

- *Type:* string[]

IAM actions required for the ListEvaluationForms API call.

---

##### `ListEvaluationFormVersions`<sup>Required</sup> <a name="ListEvaluationFormVersions" id="@cdk_utils/iam.connect.ConnectOperations.property.ListEvaluationFormVersions"></a>

```typescript
public readonly ListEvaluationFormVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListEvaluationFormVersions API call.

---

##### `ListExtractionDefinitions`<sup>Required</sup> <a name="ListExtractionDefinitions" id="@cdk_utils/iam.connect.ConnectOperations.property.ListExtractionDefinitions"></a>

```typescript
public readonly ListExtractionDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListExtractionDefinitions API call.

---

##### `ListFlowAssociations`<sup>Required</sup> <a name="ListFlowAssociations" id="@cdk_utils/iam.connect.ConnectOperations.property.ListFlowAssociations"></a>

```typescript
public readonly ListFlowAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListFlowAssociations API call.

---

##### `ListHoursOfOperationOverrides`<sup>Required</sup> <a name="ListHoursOfOperationOverrides" id="@cdk_utils/iam.connect.ConnectOperations.property.ListHoursOfOperationOverrides"></a>

```typescript
public readonly ListHoursOfOperationOverrides: string[];
```

- *Type:* string[]

IAM actions required for the ListHoursOfOperationOverrides API call.

---

##### `ListHoursOfOperations`<sup>Required</sup> <a name="ListHoursOfOperations" id="@cdk_utils/iam.connect.ConnectOperations.property.ListHoursOfOperations"></a>

```typescript
public readonly ListHoursOfOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListHoursOfOperations API call.

---

##### `ListInstanceAttributes`<sup>Required</sup> <a name="ListInstanceAttributes" id="@cdk_utils/iam.connect.ConnectOperations.property.ListInstanceAttributes"></a>

```typescript
public readonly ListInstanceAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceAttributes API call.

---

##### `ListInstances`<sup>Required</sup> <a name="ListInstances" id="@cdk_utils/iam.connect.ConnectOperations.property.ListInstances"></a>

```typescript
public readonly ListInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListInstances API call.

---

##### `ListInstanceStorageConfigs`<sup>Required</sup> <a name="ListInstanceStorageConfigs" id="@cdk_utils/iam.connect.ConnectOperations.property.ListInstanceStorageConfigs"></a>

```typescript
public readonly ListInstanceStorageConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListInstanceStorageConfigs API call.

---

##### `ListIntegrationAssociations`<sup>Required</sup> <a name="ListIntegrationAssociations" id="@cdk_utils/iam.connect.ConnectOperations.property.ListIntegrationAssociations"></a>

```typescript
public readonly ListIntegrationAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListIntegrationAssociations API call.

---

##### `ListLambdaFunctions`<sup>Required</sup> <a name="ListLambdaFunctions" id="@cdk_utils/iam.connect.ConnectOperations.property.ListLambdaFunctions"></a>

```typescript
public readonly ListLambdaFunctions: string[];
```

- *Type:* string[]

IAM actions required for the ListLambdaFunctions API call.

---

##### `ListLexBots`<sup>Required</sup> <a name="ListLexBots" id="@cdk_utils/iam.connect.ConnectOperations.property.ListLexBots"></a>

```typescript
public readonly ListLexBots: string[];
```

- *Type:* string[]

IAM actions required for the ListLexBots API call.

---

##### `ListMetrics`<sup>Required</sup> <a name="ListMetrics" id="@cdk_utils/iam.connect.ConnectOperations.property.ListMetrics"></a>

```typescript
public readonly ListMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListMetrics API call.

---

##### `ListNotifications`<sup>Required</sup> <a name="ListNotifications" id="@cdk_utils/iam.connect.ConnectOperations.property.ListNotifications"></a>

```typescript
public readonly ListNotifications: string[];
```

- *Type:* string[]

IAM actions required for the ListNotifications API call.

---

##### `ListPhoneNumbers`<sup>Required</sup> <a name="ListPhoneNumbers" id="@cdk_utils/iam.connect.ConnectOperations.property.ListPhoneNumbers"></a>

```typescript
public readonly ListPhoneNumbers: string[];
```

- *Type:* string[]

IAM actions required for the ListPhoneNumbers API call.

---

##### `ListPhoneNumbersV2`<sup>Required</sup> <a name="ListPhoneNumbersV2" id="@cdk_utils/iam.connect.ConnectOperations.property.ListPhoneNumbersV2"></a>

```typescript
public readonly ListPhoneNumbersV2: string[];
```

- *Type:* string[]

IAM actions required for the ListPhoneNumbersV2 API call.

---

##### `ListPredefinedAttributes`<sup>Required</sup> <a name="ListPredefinedAttributes" id="@cdk_utils/iam.connect.ConnectOperations.property.ListPredefinedAttributes"></a>

```typescript
public readonly ListPredefinedAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListPredefinedAttributes API call.

---

##### `ListPrompts`<sup>Required</sup> <a name="ListPrompts" id="@cdk_utils/iam.connect.ConnectOperations.property.ListPrompts"></a>

```typescript
public readonly ListPrompts: string[];
```

- *Type:* string[]

IAM actions required for the ListPrompts API call.

---

##### `ListQueueEmailAddresses`<sup>Required</sup> <a name="ListQueueEmailAddresses" id="@cdk_utils/iam.connect.ConnectOperations.property.ListQueueEmailAddresses"></a>

```typescript
public readonly ListQueueEmailAddresses: string[];
```

- *Type:* string[]

IAM actions required for the ListQueueEmailAddresses API call.

---

##### `ListQueueQuickConnects`<sup>Required</sup> <a name="ListQueueQuickConnects" id="@cdk_utils/iam.connect.ConnectOperations.property.ListQueueQuickConnects"></a>

```typescript
public readonly ListQueueQuickConnects: string[];
```

- *Type:* string[]

IAM actions required for the ListQueueQuickConnects API call.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.connect.ConnectOperations.property.ListQueues"></a>

```typescript
public readonly ListQueues: string[];
```

- *Type:* string[]

IAM actions required for the ListQueues API call.

---

##### `ListQuickConnects`<sup>Required</sup> <a name="ListQuickConnects" id="@cdk_utils/iam.connect.ConnectOperations.property.ListQuickConnects"></a>

```typescript
public readonly ListQuickConnects: string[];
```

- *Type:* string[]

IAM actions required for the ListQuickConnects API call.

---

##### `ListRealtimeContactAnalysisSegments`<sup>Required</sup> <a name="ListRealtimeContactAnalysisSegments" id="@cdk_utils/iam.connect.ConnectOperations.property.ListRealtimeContactAnalysisSegments"></a>

```typescript
public readonly ListRealtimeContactAnalysisSegments: string[];
```

- *Type:* string[]

IAM actions required for the ListRealtimeContactAnalysisSegments API call.

---

##### `ListRealtimeContactAnalysisSegmentsV2`<sup>Required</sup> <a name="ListRealtimeContactAnalysisSegmentsV2" id="@cdk_utils/iam.connect.ConnectOperations.property.ListRealtimeContactAnalysisSegmentsV2"></a>

```typescript
public readonly ListRealtimeContactAnalysisSegmentsV2: string[];
```

- *Type:* string[]

IAM actions required for the ListRealtimeContactAnalysisSegmentsV2 API call.

---

##### `ListRoutingProfileManualAssignmentQueues`<sup>Required</sup> <a name="ListRoutingProfileManualAssignmentQueues" id="@cdk_utils/iam.connect.ConnectOperations.property.ListRoutingProfileManualAssignmentQueues"></a>

```typescript
public readonly ListRoutingProfileManualAssignmentQueues: string[];
```

- *Type:* string[]

IAM actions required for the ListRoutingProfileManualAssignmentQueues API call.

---

##### `ListRoutingProfileQueues`<sup>Required</sup> <a name="ListRoutingProfileQueues" id="@cdk_utils/iam.connect.ConnectOperations.property.ListRoutingProfileQueues"></a>

```typescript
public readonly ListRoutingProfileQueues: string[];
```

- *Type:* string[]

IAM actions required for the ListRoutingProfileQueues API call.

---

##### `ListRoutingProfiles`<sup>Required</sup> <a name="ListRoutingProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.ListRoutingProfiles"></a>

```typescript
public readonly ListRoutingProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListRoutingProfiles API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.connect.ConnectOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListSecurityKeys`<sup>Required</sup> <a name="ListSecurityKeys" id="@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityKeys"></a>

```typescript
public readonly ListSecurityKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityKeys API call.

---

##### `ListSecurityProfileApplications`<sup>Required</sup> <a name="ListSecurityProfileApplications" id="@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityProfileApplications"></a>

```typescript
public readonly ListSecurityProfileApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityProfileApplications API call.

---

##### `ListSecurityProfileFlowModules`<sup>Required</sup> <a name="ListSecurityProfileFlowModules" id="@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityProfileFlowModules"></a>

```typescript
public readonly ListSecurityProfileFlowModules: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityProfileFlowModules API call.

---

##### `ListSecurityProfilePermissions`<sup>Required</sup> <a name="ListSecurityProfilePermissions" id="@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityProfilePermissions"></a>

```typescript
public readonly ListSecurityProfilePermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityProfilePermissions API call.

---

##### `ListSecurityProfiles`<sup>Required</sup> <a name="ListSecurityProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.ListSecurityProfiles"></a>

```typescript
public readonly ListSecurityProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListSecurityProfiles API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.connect.ConnectOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTaskTemplates`<sup>Required</sup> <a name="ListTaskTemplates" id="@cdk_utils/iam.connect.ConnectOperations.property.ListTaskTemplates"></a>

```typescript
public readonly ListTaskTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTaskTemplates API call.

---

##### `ListTestCaseExecutionRecords`<sup>Required</sup> <a name="ListTestCaseExecutionRecords" id="@cdk_utils/iam.connect.ConnectOperations.property.ListTestCaseExecutionRecords"></a>

```typescript
public readonly ListTestCaseExecutionRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListTestCaseExecutionRecords API call.

---

##### `ListTestCaseExecutions`<sup>Required</sup> <a name="ListTestCaseExecutions" id="@cdk_utils/iam.connect.ConnectOperations.property.ListTestCaseExecutions"></a>

```typescript
public readonly ListTestCaseExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListTestCaseExecutions API call.

---

##### `ListTestCases`<sup>Required</sup> <a name="ListTestCases" id="@cdk_utils/iam.connect.ConnectOperations.property.ListTestCases"></a>

```typescript
public readonly ListTestCases: string[];
```

- *Type:* string[]

IAM actions required for the ListTestCases API call.

---

##### `ListTrafficDistributionGroups`<sup>Required</sup> <a name="ListTrafficDistributionGroups" id="@cdk_utils/iam.connect.ConnectOperations.property.ListTrafficDistributionGroups"></a>

```typescript
public readonly ListTrafficDistributionGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListTrafficDistributionGroups API call.

---

##### `ListTrafficDistributionGroupUsers`<sup>Required</sup> <a name="ListTrafficDistributionGroupUsers" id="@cdk_utils/iam.connect.ConnectOperations.property.ListTrafficDistributionGroupUsers"></a>

```typescript
public readonly ListTrafficDistributionGroupUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListTrafficDistributionGroupUsers API call.

---

##### `ListUseCases`<sup>Required</sup> <a name="ListUseCases" id="@cdk_utils/iam.connect.ConnectOperations.property.ListUseCases"></a>

```typescript
public readonly ListUseCases: string[];
```

- *Type:* string[]

IAM actions required for the ListUseCases API call.

---

##### `ListUserHierarchyGroups`<sup>Required</sup> <a name="ListUserHierarchyGroups" id="@cdk_utils/iam.connect.ConnectOperations.property.ListUserHierarchyGroups"></a>

```typescript
public readonly ListUserHierarchyGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListUserHierarchyGroups API call.

---

##### `ListUserNotifications`<sup>Required</sup> <a name="ListUserNotifications" id="@cdk_utils/iam.connect.ConnectOperations.property.ListUserNotifications"></a>

```typescript
public readonly ListUserNotifications: string[];
```

- *Type:* string[]

IAM actions required for the ListUserNotifications API call.

---

##### `ListUserProficiencies`<sup>Required</sup> <a name="ListUserProficiencies" id="@cdk_utils/iam.connect.ConnectOperations.property.ListUserProficiencies"></a>

```typescript
public readonly ListUserProficiencies: string[];
```

- *Type:* string[]

IAM actions required for the ListUserProficiencies API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.connect.ConnectOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `ListViews`<sup>Required</sup> <a name="ListViews" id="@cdk_utils/iam.connect.ConnectOperations.property.ListViews"></a>

```typescript
public readonly ListViews: string[];
```

- *Type:* string[]

IAM actions required for the ListViews API call.

---

##### `ListViewVersions`<sup>Required</sup> <a name="ListViewVersions" id="@cdk_utils/iam.connect.ConnectOperations.property.ListViewVersions"></a>

```typescript
public readonly ListViewVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListViewVersions API call.

---

##### `ListWorkspaceMedia`<sup>Required</sup> <a name="ListWorkspaceMedia" id="@cdk_utils/iam.connect.ConnectOperations.property.ListWorkspaceMedia"></a>

```typescript
public readonly ListWorkspaceMedia: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaceMedia API call.

---

##### `ListWorkspacePages`<sup>Required</sup> <a name="ListWorkspacePages" id="@cdk_utils/iam.connect.ConnectOperations.property.ListWorkspacePages"></a>

```typescript
public readonly ListWorkspacePages: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspacePages API call.

---

##### `ListWorkspaces`<sup>Required</sup> <a name="ListWorkspaces" id="@cdk_utils/iam.connect.ConnectOperations.property.ListWorkspaces"></a>

```typescript
public readonly ListWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkspaces API call.

---

##### `MonitorContact`<sup>Required</sup> <a name="MonitorContact" id="@cdk_utils/iam.connect.ConnectOperations.property.MonitorContact"></a>

```typescript
public readonly MonitorContact: string[];
```

- *Type:* string[]

IAM actions required for the MonitorContact API call.

---

##### `opGetAttachedFile`<sup>Required</sup> <a name="opGetAttachedFile" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetAttachedFile"></a>

```typescript
public readonly opGetAttachedFile: string[];
```

- *Type:* string[]

IAM actions required for the GetAttachedFile API call.

---

##### `opGetAttachment`<sup>Required</sup> <a name="opGetAttachment" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetAttachment"></a>

```typescript
public readonly opGetAttachment: string[];
```

- *Type:* string[]

IAM actions required for the GetAttachment API call.

---

##### `opGetAuthenticationUrl`<sup>Required</sup> <a name="opGetAuthenticationUrl" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetAuthenticationUrl"></a>

```typescript
public readonly opGetAuthenticationUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetAuthenticationUrl API call.

---

##### `opGetContactAttributes`<sup>Required</sup> <a name="opGetContactAttributes" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetContactAttributes"></a>

```typescript
public readonly opGetContactAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetContactAttributes API call.

---

##### `opGetContactMetrics`<sup>Required</sup> <a name="opGetContactMetrics" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetContactMetrics"></a>

```typescript
public readonly opGetContactMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetContactMetrics API call.

---

##### `opGetCurrentMetricData`<sup>Required</sup> <a name="opGetCurrentMetricData" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetCurrentMetricData"></a>

```typescript
public readonly opGetCurrentMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetCurrentMetricData API call.

---

##### `opGetCurrentUserData`<sup>Required</sup> <a name="opGetCurrentUserData" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetCurrentUserData"></a>

```typescript
public readonly opGetCurrentUserData: string[];
```

- *Type:* string[]

IAM actions required for the GetCurrentUserData API call.

---

##### `opGetEffectiveHoursOfOperations`<sup>Required</sup> <a name="opGetEffectiveHoursOfOperations" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetEffectiveHoursOfOperations"></a>

```typescript
public readonly opGetEffectiveHoursOfOperations: string[];
```

- *Type:* string[]

IAM actions required for the GetEffectiveHoursOfOperations API call.

---

##### `opGetEvaluationFormValidation`<sup>Required</sup> <a name="opGetEvaluationFormValidation" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetEvaluationFormValidation"></a>

```typescript
public readonly opGetEvaluationFormValidation: string[];
```

- *Type:* string[]

IAM actions required for the GetEvaluationFormValidation API call.

---

##### `opGetFederationToken`<sup>Required</sup> <a name="opGetFederationToken" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetFederationToken"></a>

```typescript
public readonly opGetFederationToken: string[];
```

- *Type:* string[]

IAM actions required for the GetFederationToken API call.

---

##### `opGetFlowAssociation`<sup>Required</sup> <a name="opGetFlowAssociation" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetFlowAssociation"></a>

```typescript
public readonly opGetFlowAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetFlowAssociation API call.

---

##### `opGetMetricData`<sup>Required</sup> <a name="opGetMetricData" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetMetricData"></a>

```typescript
public readonly opGetMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricData API call.

---

##### `opGetMetricDataV2`<sup>Required</sup> <a name="opGetMetricDataV2" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetMetricDataV2"></a>

```typescript
public readonly opGetMetricDataV2: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricDataV2 API call.

---

##### `opGetPromptFile`<sup>Required</sup> <a name="opGetPromptFile" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetPromptFile"></a>

```typescript
public readonly opGetPromptFile: string[];
```

- *Type:* string[]

IAM actions required for the GetPromptFile API call.

---

##### `opGetTaskTemplate`<sup>Required</sup> <a name="opGetTaskTemplate" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetTaskTemplate"></a>

```typescript
public readonly opGetTaskTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetTaskTemplate API call.

---

##### `opGetTestCaseExecutionSummary`<sup>Required</sup> <a name="opGetTestCaseExecutionSummary" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetTestCaseExecutionSummary"></a>

```typescript
public readonly opGetTestCaseExecutionSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetTestCaseExecutionSummary API call.

---

##### `opGetTrafficDistribution`<sup>Required</sup> <a name="opGetTrafficDistribution" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetTrafficDistribution"></a>

```typescript
public readonly opGetTrafficDistribution: string[];
```

- *Type:* string[]

IAM actions required for the GetTrafficDistribution API call.

---

##### `opGetTranscript`<sup>Required</sup> <a name="opGetTranscript" id="@cdk_utils/iam.connect.ConnectOperations.property.opGetTranscript"></a>

```typescript
public readonly opGetTranscript: string[];
```

- *Type:* string[]

IAM actions required for the GetTranscript API call.

---

##### `PauseContact`<sup>Required</sup> <a name="PauseContact" id="@cdk_utils/iam.connect.ConnectOperations.property.PauseContact"></a>

```typescript
public readonly PauseContact: string[];
```

- *Type:* string[]

IAM actions required for the PauseContact API call.

---

##### `PutUserStatus`<sup>Required</sup> <a name="PutUserStatus" id="@cdk_utils/iam.connect.ConnectOperations.property.PutUserStatus"></a>

```typescript
public readonly PutUserStatus: string[];
```

- *Type:* string[]

IAM actions required for the PutUserStatus API call.

---

##### `ReleasePhoneNumber`<sup>Required</sup> <a name="ReleasePhoneNumber" id="@cdk_utils/iam.connect.ConnectOperations.property.ReleasePhoneNumber"></a>

```typescript
public readonly ReleasePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the ReleasePhoneNumber API call.

---

##### `ReplicateInstance`<sup>Required</sup> <a name="ReplicateInstance" id="@cdk_utils/iam.connect.ConnectOperations.property.ReplicateInstance"></a>

```typescript
public readonly ReplicateInstance: string[];
```

- *Type:* string[]

IAM actions required for the ReplicateInstance API call.

---

##### `ResumeContact`<sup>Required</sup> <a name="ResumeContact" id="@cdk_utils/iam.connect.ConnectOperations.property.ResumeContact"></a>

```typescript
public readonly ResumeContact: string[];
```

- *Type:* string[]

IAM actions required for the ResumeContact API call.

---

##### `ResumeContactRecording`<sup>Required</sup> <a name="ResumeContactRecording" id="@cdk_utils/iam.connect.ConnectOperations.property.ResumeContactRecording"></a>

```typescript
public readonly ResumeContactRecording: string[];
```

- *Type:* string[]

IAM actions required for the ResumeContactRecording API call.

---

##### `SearchAgentStatuses`<sup>Required</sup> <a name="SearchAgentStatuses" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchAgentStatuses"></a>

```typescript
public readonly SearchAgentStatuses: string[];
```

- *Type:* string[]

IAM actions required for the SearchAgentStatuses API call.

---

##### `SearchAvailablePhoneNumbers`<sup>Required</sup> <a name="SearchAvailablePhoneNumbers" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchAvailablePhoneNumbers"></a>

```typescript
public readonly SearchAvailablePhoneNumbers: string[];
```

- *Type:* string[]

IAM actions required for the SearchAvailablePhoneNumbers API call.

---

##### `SearchContactEvaluations`<sup>Required</sup> <a name="SearchContactEvaluations" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchContactEvaluations"></a>

```typescript
public readonly SearchContactEvaluations: string[];
```

- *Type:* string[]

IAM actions required for the SearchContactEvaluations API call.

---

##### `SearchContactFlowModules`<sup>Required</sup> <a name="SearchContactFlowModules" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchContactFlowModules"></a>

```typescript
public readonly SearchContactFlowModules: string[];
```

- *Type:* string[]

IAM actions required for the SearchContactFlowModules API call.

---

##### `SearchContactFlows`<sup>Required</sup> <a name="SearchContactFlows" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchContactFlows"></a>

```typescript
public readonly SearchContactFlows: string[];
```

- *Type:* string[]

IAM actions required for the SearchContactFlows API call.

---

##### `SearchContacts`<sup>Required</sup> <a name="SearchContacts" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchContacts"></a>

```typescript
public readonly SearchContacts: string[];
```

- *Type:* string[]

IAM actions required for the SearchContacts API call.

---

##### `SearchDataTables`<sup>Required</sup> <a name="SearchDataTables" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchDataTables"></a>

```typescript
public readonly SearchDataTables: string[];
```

- *Type:* string[]

IAM actions required for the SearchDataTables API call.

---

##### `SearchEmailAddresses`<sup>Required</sup> <a name="SearchEmailAddresses" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchEmailAddresses"></a>

```typescript
public readonly SearchEmailAddresses: string[];
```

- *Type:* string[]

IAM actions required for the SearchEmailAddresses API call.

---

##### `SearchEvaluationForms`<sup>Required</sup> <a name="SearchEvaluationForms" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchEvaluationForms"></a>

```typescript
public readonly SearchEvaluationForms: string[];
```

- *Type:* string[]

IAM actions required for the SearchEvaluationForms API call.

---

##### `SearchHoursOfOperationOverrides`<sup>Required</sup> <a name="SearchHoursOfOperationOverrides" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchHoursOfOperationOverrides"></a>

```typescript
public readonly SearchHoursOfOperationOverrides: string[];
```

- *Type:* string[]

IAM actions required for the SearchHoursOfOperationOverrides API call.

---

##### `SearchHoursOfOperations`<sup>Required</sup> <a name="SearchHoursOfOperations" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchHoursOfOperations"></a>

```typescript
public readonly SearchHoursOfOperations: string[];
```

- *Type:* string[]

IAM actions required for the SearchHoursOfOperations API call.

---

##### `SearchMetrics`<sup>Required</sup> <a name="SearchMetrics" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchMetrics"></a>

```typescript
public readonly SearchMetrics: string[];
```

- *Type:* string[]

IAM actions required for the SearchMetrics API call.

---

##### `SearchNotifications`<sup>Required</sup> <a name="SearchNotifications" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchNotifications"></a>

```typescript
public readonly SearchNotifications: string[];
```

- *Type:* string[]

IAM actions required for the SearchNotifications API call.

---

##### `SearchPredefinedAttributes`<sup>Required</sup> <a name="SearchPredefinedAttributes" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchPredefinedAttributes"></a>

```typescript
public readonly SearchPredefinedAttributes: string[];
```

- *Type:* string[]

IAM actions required for the SearchPredefinedAttributes API call.

---

##### `SearchPrompts`<sup>Required</sup> <a name="SearchPrompts" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchPrompts"></a>

```typescript
public readonly SearchPrompts: string[];
```

- *Type:* string[]

IAM actions required for the SearchPrompts API call.

---

##### `SearchQueues`<sup>Required</sup> <a name="SearchQueues" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchQueues"></a>

```typescript
public readonly SearchQueues: string[];
```

- *Type:* string[]

IAM actions required for the SearchQueues API call.

---

##### `SearchQuickConnects`<sup>Required</sup> <a name="SearchQuickConnects" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchQuickConnects"></a>

```typescript
public readonly SearchQuickConnects: string[];
```

- *Type:* string[]

IAM actions required for the SearchQuickConnects API call.

---

##### `SearchResourceTags`<sup>Required</sup> <a name="SearchResourceTags" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchResourceTags"></a>

```typescript
public readonly SearchResourceTags: string[];
```

- *Type:* string[]

IAM actions required for the SearchResourceTags API call.

---

##### `SearchRoutingProfiles`<sup>Required</sup> <a name="SearchRoutingProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchRoutingProfiles"></a>

```typescript
public readonly SearchRoutingProfiles: string[];
```

- *Type:* string[]

IAM actions required for the SearchRoutingProfiles API call.

---

##### `SearchRules`<sup>Required</sup> <a name="SearchRules" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchRules"></a>

```typescript
public readonly SearchRules: string[];
```

- *Type:* string[]

IAM actions required for the SearchRules API call.

---

##### `SearchSecurityProfiles`<sup>Required</sup> <a name="SearchSecurityProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchSecurityProfiles"></a>

```typescript
public readonly SearchSecurityProfiles: string[];
```

- *Type:* string[]

IAM actions required for the SearchSecurityProfiles API call.

---

##### `SearchTestCases`<sup>Required</sup> <a name="SearchTestCases" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchTestCases"></a>

```typescript
public readonly SearchTestCases: string[];
```

- *Type:* string[]

IAM actions required for the SearchTestCases API call.

---

##### `SearchUserHierarchyGroups`<sup>Required</sup> <a name="SearchUserHierarchyGroups" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchUserHierarchyGroups"></a>

```typescript
public readonly SearchUserHierarchyGroups: string[];
```

- *Type:* string[]

IAM actions required for the SearchUserHierarchyGroups API call.

---

##### `SearchUsers`<sup>Required</sup> <a name="SearchUsers" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchUsers"></a>

```typescript
public readonly SearchUsers: string[];
```

- *Type:* string[]

IAM actions required for the SearchUsers API call.

---

##### `SearchViews`<sup>Required</sup> <a name="SearchViews" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchViews"></a>

```typescript
public readonly SearchViews: string[];
```

- *Type:* string[]

IAM actions required for the SearchViews API call.

---

##### `SearchVocabularies`<sup>Required</sup> <a name="SearchVocabularies" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchVocabularies"></a>

```typescript
public readonly SearchVocabularies: string[];
```

- *Type:* string[]

IAM actions required for the SearchVocabularies API call.

---

##### `SearchWorkspaceAssociations`<sup>Required</sup> <a name="SearchWorkspaceAssociations" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchWorkspaceAssociations"></a>

```typescript
public readonly SearchWorkspaceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the SearchWorkspaceAssociations API call.

---

##### `SearchWorkspaces`<sup>Required</sup> <a name="SearchWorkspaces" id="@cdk_utils/iam.connect.ConnectOperations.property.SearchWorkspaces"></a>

```typescript
public readonly SearchWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the SearchWorkspaces API call.

---

##### `SendChatIntegrationEvent`<sup>Required</sup> <a name="SendChatIntegrationEvent" id="@cdk_utils/iam.connect.ConnectOperations.property.SendChatIntegrationEvent"></a>

```typescript
public readonly SendChatIntegrationEvent: string[];
```

- *Type:* string[]

IAM actions required for the SendChatIntegrationEvent API call.

---

##### `SendEvent`<sup>Required</sup> <a name="SendEvent" id="@cdk_utils/iam.connect.ConnectOperations.property.SendEvent"></a>

```typescript
public readonly SendEvent: string[];
```

- *Type:* string[]

IAM actions required for the SendEvent API call.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.connect.ConnectOperations.property.SendMessage"></a>

```typescript
public readonly SendMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendMessage API call.

---

##### `SendOutboundEmail`<sup>Required</sup> <a name="SendOutboundEmail" id="@cdk_utils/iam.connect.ConnectOperations.property.SendOutboundEmail"></a>

```typescript
public readonly SendOutboundEmail: string[];
```

- *Type:* string[]

IAM actions required for the SendOutboundEmail API call.

---

##### `SendOutboundWebNotification`<sup>Required</sup> <a name="SendOutboundWebNotification" id="@cdk_utils/iam.connect.ConnectOperations.property.SendOutboundWebNotification"></a>

```typescript
public readonly SendOutboundWebNotification: string[];
```

- *Type:* string[]

IAM actions required for the SendOutboundWebNotification API call.

---

##### `StartAssistantContact`<sup>Required</sup> <a name="StartAssistantContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StartAssistantContact"></a>

```typescript
public readonly StartAssistantContact: string[];
```

- *Type:* string[]

IAM actions required for the StartAssistantContact API call.

---

##### `StartAttachedFileUpload`<sup>Required</sup> <a name="StartAttachedFileUpload" id="@cdk_utils/iam.connect.ConnectOperations.property.StartAttachedFileUpload"></a>

```typescript
public readonly StartAttachedFileUpload: string[];
```

- *Type:* string[]

IAM actions required for the StartAttachedFileUpload API call.

---

##### `StartAttachmentUpload`<sup>Required</sup> <a name="StartAttachmentUpload" id="@cdk_utils/iam.connect.ConnectOperations.property.StartAttachmentUpload"></a>

```typescript
public readonly StartAttachmentUpload: string[];
```

- *Type:* string[]

IAM actions required for the StartAttachmentUpload API call.

---

##### `StartChatContact`<sup>Required</sup> <a name="StartChatContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StartChatContact"></a>

```typescript
public readonly StartChatContact: string[];
```

- *Type:* string[]

IAM actions required for the StartChatContact API call.

---

##### `StartContactConversationalAnalyticsJob`<sup>Required</sup> <a name="StartContactConversationalAnalyticsJob" id="@cdk_utils/iam.connect.ConnectOperations.property.StartContactConversationalAnalyticsJob"></a>

```typescript
public readonly StartContactConversationalAnalyticsJob: string[];
```

- *Type:* string[]

IAM actions required for the StartContactConversationalAnalyticsJob API call.

---

##### `StartContactEvaluation`<sup>Required</sup> <a name="StartContactEvaluation" id="@cdk_utils/iam.connect.ConnectOperations.property.StartContactEvaluation"></a>

```typescript
public readonly StartContactEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the StartContactEvaluation API call.

---

##### `StartContactMediaProcessing`<sup>Required</sup> <a name="StartContactMediaProcessing" id="@cdk_utils/iam.connect.ConnectOperations.property.StartContactMediaProcessing"></a>

```typescript
public readonly StartContactMediaProcessing: string[];
```

- *Type:* string[]

IAM actions required for the StartContactMediaProcessing API call.

---

##### `StartContactRecording`<sup>Required</sup> <a name="StartContactRecording" id="@cdk_utils/iam.connect.ConnectOperations.property.StartContactRecording"></a>

```typescript
public readonly StartContactRecording: string[];
```

- *Type:* string[]

IAM actions required for the StartContactRecording API call.

---

##### `StartContactStreaming`<sup>Required</sup> <a name="StartContactStreaming" id="@cdk_utils/iam.connect.ConnectOperations.property.StartContactStreaming"></a>

```typescript
public readonly StartContactStreaming: string[];
```

- *Type:* string[]

IAM actions required for the StartContactStreaming API call.

---

##### `StartEmailContact`<sup>Required</sup> <a name="StartEmailContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StartEmailContact"></a>

```typescript
public readonly StartEmailContact: string[];
```

- *Type:* string[]

IAM actions required for the StartEmailContact API call.

---

##### `StartEvaluationFormValidation`<sup>Required</sup> <a name="StartEvaluationFormValidation" id="@cdk_utils/iam.connect.ConnectOperations.property.StartEvaluationFormValidation"></a>

```typescript
public readonly StartEvaluationFormValidation: string[];
```

- *Type:* string[]

IAM actions required for the StartEvaluationFormValidation API call.

---

##### `StartOutboundChatContact`<sup>Required</sup> <a name="StartOutboundChatContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StartOutboundChatContact"></a>

```typescript
public readonly StartOutboundChatContact: string[];
```

- *Type:* string[]

IAM actions required for the StartOutboundChatContact API call.

---

##### `StartOutboundEmailContact`<sup>Required</sup> <a name="StartOutboundEmailContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StartOutboundEmailContact"></a>

```typescript
public readonly StartOutboundEmailContact: string[];
```

- *Type:* string[]

IAM actions required for the StartOutboundEmailContact API call.

---

##### `StartOutboundVoiceContact`<sup>Required</sup> <a name="StartOutboundVoiceContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StartOutboundVoiceContact"></a>

```typescript
public readonly StartOutboundVoiceContact: string[];
```

- *Type:* string[]

IAM actions required for the StartOutboundVoiceContact API call.

---

##### `StartScreenSharing`<sup>Required</sup> <a name="StartScreenSharing" id="@cdk_utils/iam.connect.ConnectOperations.property.StartScreenSharing"></a>

```typescript
public readonly StartScreenSharing: string[];
```

- *Type:* string[]

IAM actions required for the StartScreenSharing API call.

---

##### `StartTaskContact`<sup>Required</sup> <a name="StartTaskContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StartTaskContact"></a>

```typescript
public readonly StartTaskContact: string[];
```

- *Type:* string[]

IAM actions required for the StartTaskContact API call.

---

##### `StartTestCaseExecution`<sup>Required</sup> <a name="StartTestCaseExecution" id="@cdk_utils/iam.connect.ConnectOperations.property.StartTestCaseExecution"></a>

```typescript
public readonly StartTestCaseExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartTestCaseExecution API call.

---

##### `StartWebRTCContact`<sup>Required</sup> <a name="StartWebRTCContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StartWebRTCContact"></a>

```typescript
public readonly StartWebRTCContact: string[];
```

- *Type:* string[]

IAM actions required for the StartWebRTCContact API call.

---

##### `StopContact`<sup>Required</sup> <a name="StopContact" id="@cdk_utils/iam.connect.ConnectOperations.property.StopContact"></a>

```typescript
public readonly StopContact: string[];
```

- *Type:* string[]

IAM actions required for the StopContact API call.

---

##### `StopContactMediaProcessing`<sup>Required</sup> <a name="StopContactMediaProcessing" id="@cdk_utils/iam.connect.ConnectOperations.property.StopContactMediaProcessing"></a>

```typescript
public readonly StopContactMediaProcessing: string[];
```

- *Type:* string[]

IAM actions required for the StopContactMediaProcessing API call.

---

##### `StopContactRecording`<sup>Required</sup> <a name="StopContactRecording" id="@cdk_utils/iam.connect.ConnectOperations.property.StopContactRecording"></a>

```typescript
public readonly StopContactRecording: string[];
```

- *Type:* string[]

IAM actions required for the StopContactRecording API call.

---

##### `StopContactStreaming`<sup>Required</sup> <a name="StopContactStreaming" id="@cdk_utils/iam.connect.ConnectOperations.property.StopContactStreaming"></a>

```typescript
public readonly StopContactStreaming: string[];
```

- *Type:* string[]

IAM actions required for the StopContactStreaming API call.

---

##### `StopTestCaseExecution`<sup>Required</sup> <a name="StopTestCaseExecution" id="@cdk_utils/iam.connect.ConnectOperations.property.StopTestCaseExecution"></a>

```typescript
public readonly StopTestCaseExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopTestCaseExecution API call.

---

##### `SubmitContactEvaluation`<sup>Required</sup> <a name="SubmitContactEvaluation" id="@cdk_utils/iam.connect.ConnectOperations.property.SubmitContactEvaluation"></a>

```typescript
public readonly SubmitContactEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the SubmitContactEvaluation API call.

---

##### `SuspendContactRecording`<sup>Required</sup> <a name="SuspendContactRecording" id="@cdk_utils/iam.connect.ConnectOperations.property.SuspendContactRecording"></a>

```typescript
public readonly SuspendContactRecording: string[];
```

- *Type:* string[]

IAM actions required for the SuspendContactRecording API call.

---

##### `TagContact`<sup>Required</sup> <a name="TagContact" id="@cdk_utils/iam.connect.ConnectOperations.property.TagContact"></a>

```typescript
public readonly TagContact: string[];
```

- *Type:* string[]

IAM actions required for the TagContact API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.connect.ConnectOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TransferContact`<sup>Required</sup> <a name="TransferContact" id="@cdk_utils/iam.connect.ConnectOperations.property.TransferContact"></a>

```typescript
public readonly TransferContact: string[];
```

- *Type:* string[]

IAM actions required for the TransferContact API call.

---

##### `UntagContact`<sup>Required</sup> <a name="UntagContact" id="@cdk_utils/iam.connect.ConnectOperations.property.UntagContact"></a>

```typescript
public readonly UntagContact: string[];
```

- *Type:* string[]

IAM actions required for the UntagContact API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.connect.ConnectOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAgentStatus`<sup>Required</sup> <a name="UpdateAgentStatus" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateAgentStatus"></a>

```typescript
public readonly UpdateAgentStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentStatus API call.

---

##### `UpdateAttachedFilesConfiguration`<sup>Required</sup> <a name="UpdateAttachedFilesConfiguration" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateAttachedFilesConfiguration"></a>

```typescript
public readonly UpdateAttachedFilesConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAttachedFilesConfiguration API call.

---

##### `UpdateAuthenticationProfile`<sup>Required</sup> <a name="UpdateAuthenticationProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateAuthenticationProfile"></a>

```typescript
public readonly UpdateAuthenticationProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAuthenticationProfile API call.

---

##### `UpdateContact`<sup>Required</sup> <a name="UpdateContact" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContact"></a>

```typescript
public readonly UpdateContact: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContact API call.

---

##### `UpdateContactAttributes`<sup>Required</sup> <a name="UpdateContactAttributes" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactAttributes"></a>

```typescript
public readonly UpdateContactAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactAttributes API call.

---

##### `UpdateContactEvaluation`<sup>Required</sup> <a name="UpdateContactEvaluation" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactEvaluation"></a>

```typescript
public readonly UpdateContactEvaluation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactEvaluation API call.

---

##### `UpdateContactFlowContent`<sup>Required</sup> <a name="UpdateContactFlowContent" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowContent"></a>

```typescript
public readonly UpdateContactFlowContent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactFlowContent API call.

---

##### `UpdateContactFlowMetadata`<sup>Required</sup> <a name="UpdateContactFlowMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowMetadata"></a>

```typescript
public readonly UpdateContactFlowMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactFlowMetadata API call.

---

##### `UpdateContactFlowModuleAlias`<sup>Required</sup> <a name="UpdateContactFlowModuleAlias" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowModuleAlias"></a>

```typescript
public readonly UpdateContactFlowModuleAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactFlowModuleAlias API call.

---

##### `UpdateContactFlowModuleContent`<sup>Required</sup> <a name="UpdateContactFlowModuleContent" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowModuleContent"></a>

```typescript
public readonly UpdateContactFlowModuleContent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactFlowModuleContent API call.

---

##### `UpdateContactFlowModuleMetadata`<sup>Required</sup> <a name="UpdateContactFlowModuleMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowModuleMetadata"></a>

```typescript
public readonly UpdateContactFlowModuleMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactFlowModuleMetadata API call.

---

##### `UpdateContactFlowName`<sup>Required</sup> <a name="UpdateContactFlowName" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactFlowName"></a>

```typescript
public readonly UpdateContactFlowName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactFlowName API call.

---

##### `UpdateContactRoutingData`<sup>Required</sup> <a name="UpdateContactRoutingData" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactRoutingData"></a>

```typescript
public readonly UpdateContactRoutingData: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactRoutingData API call.

---

##### `UpdateContactSchedule`<sup>Required</sup> <a name="UpdateContactSchedule" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactSchedule"></a>

```typescript
public readonly UpdateContactSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactSchedule API call.

---

##### `UpdateContactTaskTemplate`<sup>Required</sup> <a name="UpdateContactTaskTemplate" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateContactTaskTemplate"></a>

```typescript
public readonly UpdateContactTaskTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContactTaskTemplate API call.

---

##### `UpdateDataTableAttribute`<sup>Required</sup> <a name="UpdateDataTableAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateDataTableAttribute"></a>

```typescript
public readonly UpdateDataTableAttribute: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataTableAttribute API call.

---

##### `UpdateDataTableMetadata`<sup>Required</sup> <a name="UpdateDataTableMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateDataTableMetadata"></a>

```typescript
public readonly UpdateDataTableMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataTableMetadata API call.

---

##### `UpdateDataTablePrimaryValues`<sup>Required</sup> <a name="UpdateDataTablePrimaryValues" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateDataTablePrimaryValues"></a>

```typescript
public readonly UpdateDataTablePrimaryValues: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataTablePrimaryValues API call.

---

##### `UpdateEmailAddressMetadata`<sup>Required</sup> <a name="UpdateEmailAddressMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateEmailAddressMetadata"></a>

```typescript
public readonly UpdateEmailAddressMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEmailAddressMetadata API call.

---

##### `UpdateEvaluationForm`<sup>Required</sup> <a name="UpdateEvaluationForm" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateEvaluationForm"></a>

```typescript
public readonly UpdateEvaluationForm: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEvaluationForm API call.

---

##### `UpdateExtractionDefinition`<sup>Required</sup> <a name="UpdateExtractionDefinition" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateExtractionDefinition"></a>

```typescript
public readonly UpdateExtractionDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExtractionDefinition API call.

---

##### `UpdateHoursOfOperation`<sup>Required</sup> <a name="UpdateHoursOfOperation" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateHoursOfOperation"></a>

```typescript
public readonly UpdateHoursOfOperation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHoursOfOperation API call.

---

##### `UpdateHoursOfOperationOverride`<sup>Required</sup> <a name="UpdateHoursOfOperationOverride" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateHoursOfOperationOverride"></a>

```typescript
public readonly UpdateHoursOfOperationOverride: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHoursOfOperationOverride API call.

---

##### `UpdateInstanceAttribute`<sup>Required</sup> <a name="UpdateInstanceAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateInstanceAttribute"></a>

```typescript
public readonly UpdateInstanceAttribute: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInstanceAttribute API call.

---

##### `UpdateInstanceStorageConfig`<sup>Required</sup> <a name="UpdateInstanceStorageConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateInstanceStorageConfig"></a>

```typescript
public readonly UpdateInstanceStorageConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInstanceStorageConfig API call.

---

##### `UpdateMetricContent`<sup>Required</sup> <a name="UpdateMetricContent" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateMetricContent"></a>

```typescript
public readonly UpdateMetricContent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMetricContent API call.

---

##### `UpdateMetricMetadata`<sup>Required</sup> <a name="UpdateMetricMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateMetricMetadata"></a>

```typescript
public readonly UpdateMetricMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMetricMetadata API call.

---

##### `UpdateNotificationContent`<sup>Required</sup> <a name="UpdateNotificationContent" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateNotificationContent"></a>

```typescript
public readonly UpdateNotificationContent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotificationContent API call.

---

##### `UpdateParticipantAuthentication`<sup>Required</sup> <a name="UpdateParticipantAuthentication" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateParticipantAuthentication"></a>

```typescript
public readonly UpdateParticipantAuthentication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateParticipantAuthentication API call.

---

##### `UpdateParticipantRoleConfig`<sup>Required</sup> <a name="UpdateParticipantRoleConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateParticipantRoleConfig"></a>

```typescript
public readonly UpdateParticipantRoleConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateParticipantRoleConfig API call.

---

##### `UpdatePhoneNumber`<sup>Required</sup> <a name="UpdatePhoneNumber" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdatePhoneNumber"></a>

```typescript
public readonly UpdatePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePhoneNumber API call.

---

##### `UpdatePhoneNumberMetadata`<sup>Required</sup> <a name="UpdatePhoneNumberMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdatePhoneNumberMetadata"></a>

```typescript
public readonly UpdatePhoneNumberMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePhoneNumberMetadata API call.

---

##### `UpdatePredefinedAttribute`<sup>Required</sup> <a name="UpdatePredefinedAttribute" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdatePredefinedAttribute"></a>

```typescript
public readonly UpdatePredefinedAttribute: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePredefinedAttribute API call.

---

##### `UpdatePrompt`<sup>Required</sup> <a name="UpdatePrompt" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdatePrompt"></a>

```typescript
public readonly UpdatePrompt: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePrompt API call.

---

##### `UpdateQueueHoursOfOperation`<sup>Required</sup> <a name="UpdateQueueHoursOfOperation" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueHoursOfOperation"></a>

```typescript
public readonly UpdateQueueHoursOfOperation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueHoursOfOperation API call.

---

##### `UpdateQueueMaxContacts`<sup>Required</sup> <a name="UpdateQueueMaxContacts" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueMaxContacts"></a>

```typescript
public readonly UpdateQueueMaxContacts: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueMaxContacts API call.

---

##### `UpdateQueueName`<sup>Required</sup> <a name="UpdateQueueName" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueName"></a>

```typescript
public readonly UpdateQueueName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueName API call.

---

##### `UpdateQueueOutboundCallerConfig`<sup>Required</sup> <a name="UpdateQueueOutboundCallerConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueOutboundCallerConfig"></a>

```typescript
public readonly UpdateQueueOutboundCallerConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueOutboundCallerConfig API call.

---

##### `UpdateQueueOutboundEmailConfig`<sup>Required</sup> <a name="UpdateQueueOutboundEmailConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueOutboundEmailConfig"></a>

```typescript
public readonly UpdateQueueOutboundEmailConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueOutboundEmailConfig API call.

---

##### `UpdateQueueStatus`<sup>Required</sup> <a name="UpdateQueueStatus" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateQueueStatus"></a>

```typescript
public readonly UpdateQueueStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueueStatus API call.

---

##### `UpdateQuickConnectConfig`<sup>Required</sup> <a name="UpdateQuickConnectConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateQuickConnectConfig"></a>

```typescript
public readonly UpdateQuickConnectConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQuickConnectConfig API call.

---

##### `UpdateQuickConnectName`<sup>Required</sup> <a name="UpdateQuickConnectName" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateQuickConnectName"></a>

```typescript
public readonly UpdateQuickConnectName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQuickConnectName API call.

---

##### `UpdateRoutingProfileAgentAvailabilityTimer`<sup>Required</sup> <a name="UpdateRoutingProfileAgentAvailabilityTimer" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileAgentAvailabilityTimer"></a>

```typescript
public readonly UpdateRoutingProfileAgentAvailabilityTimer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoutingProfileAgentAvailabilityTimer API call.

---

##### `UpdateRoutingProfileConcurrency`<sup>Required</sup> <a name="UpdateRoutingProfileConcurrency" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileConcurrency"></a>

```typescript
public readonly UpdateRoutingProfileConcurrency: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoutingProfileConcurrency API call.

---

##### `UpdateRoutingProfileDefaultOutboundQueue`<sup>Required</sup> <a name="UpdateRoutingProfileDefaultOutboundQueue" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileDefaultOutboundQueue"></a>

```typescript
public readonly UpdateRoutingProfileDefaultOutboundQueue: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoutingProfileDefaultOutboundQueue API call.

---

##### `UpdateRoutingProfileName`<sup>Required</sup> <a name="UpdateRoutingProfileName" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileName"></a>

```typescript
public readonly UpdateRoutingProfileName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoutingProfileName API call.

---

##### `UpdateRoutingProfileQueues`<sup>Required</sup> <a name="UpdateRoutingProfileQueues" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateRoutingProfileQueues"></a>

```typescript
public readonly UpdateRoutingProfileQueues: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoutingProfileQueues API call.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRule API call.

---

##### `UpdateSecurityProfile`<sup>Required</sup> <a name="UpdateSecurityProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateSecurityProfile"></a>

```typescript
public readonly UpdateSecurityProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSecurityProfile API call.

---

##### `UpdateTaskTemplate`<sup>Required</sup> <a name="UpdateTaskTemplate" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateTaskTemplate"></a>

```typescript
public readonly UpdateTaskTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTaskTemplate API call.

---

##### `UpdateTestCase`<sup>Required</sup> <a name="UpdateTestCase" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateTestCase"></a>

```typescript
public readonly UpdateTestCase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTestCase API call.

---

##### `UpdateTrafficDistribution`<sup>Required</sup> <a name="UpdateTrafficDistribution" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateTrafficDistribution"></a>

```typescript
public readonly UpdateTrafficDistribution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrafficDistribution API call.

---

##### `UpdateUserConfig`<sup>Required</sup> <a name="UpdateUserConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserConfig"></a>

```typescript
public readonly UpdateUserConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserConfig API call.

---

##### `UpdateUserHierarchy`<sup>Required</sup> <a name="UpdateUserHierarchy" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserHierarchy"></a>

```typescript
public readonly UpdateUserHierarchy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserHierarchy API call.

---

##### `UpdateUserHierarchyGroupName`<sup>Required</sup> <a name="UpdateUserHierarchyGroupName" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserHierarchyGroupName"></a>

```typescript
public readonly UpdateUserHierarchyGroupName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserHierarchyGroupName API call.

---

##### `UpdateUserHierarchyStructure`<sup>Required</sup> <a name="UpdateUserHierarchyStructure" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserHierarchyStructure"></a>

```typescript
public readonly UpdateUserHierarchyStructure: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserHierarchyStructure API call.

---

##### `UpdateUserIdentityInfo`<sup>Required</sup> <a name="UpdateUserIdentityInfo" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserIdentityInfo"></a>

```typescript
public readonly UpdateUserIdentityInfo: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserIdentityInfo API call.

---

##### `UpdateUserNotificationStatus`<sup>Required</sup> <a name="UpdateUserNotificationStatus" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserNotificationStatus"></a>

```typescript
public readonly UpdateUserNotificationStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserNotificationStatus API call.

---

##### `UpdateUserPhoneConfig`<sup>Required</sup> <a name="UpdateUserPhoneConfig" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserPhoneConfig"></a>

```typescript
public readonly UpdateUserPhoneConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserPhoneConfig API call.

---

##### `UpdateUserProficiencies`<sup>Required</sup> <a name="UpdateUserProficiencies" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserProficiencies"></a>

```typescript
public readonly UpdateUserProficiencies: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserProficiencies API call.

---

##### `UpdateUserRoutingProfile`<sup>Required</sup> <a name="UpdateUserRoutingProfile" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserRoutingProfile"></a>

```typescript
public readonly UpdateUserRoutingProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserRoutingProfile API call.

---

##### `UpdateUserSecurityProfiles`<sup>Required</sup> <a name="UpdateUserSecurityProfiles" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateUserSecurityProfiles"></a>

```typescript
public readonly UpdateUserSecurityProfiles: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserSecurityProfiles API call.

---

##### `UpdateViewContent`<sup>Required</sup> <a name="UpdateViewContent" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateViewContent"></a>

```typescript
public readonly UpdateViewContent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateViewContent API call.

---

##### `UpdateViewMetadata`<sup>Required</sup> <a name="UpdateViewMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateViewMetadata"></a>

```typescript
public readonly UpdateViewMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateViewMetadata API call.

---

##### `UpdateWorkspaceMetadata`<sup>Required</sup> <a name="UpdateWorkspaceMetadata" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateWorkspaceMetadata"></a>

```typescript
public readonly UpdateWorkspaceMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceMetadata API call.

---

##### `UpdateWorkspacePage`<sup>Required</sup> <a name="UpdateWorkspacePage" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateWorkspacePage"></a>

```typescript
public readonly UpdateWorkspacePage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspacePage API call.

---

##### `UpdateWorkspaceTheme`<sup>Required</sup> <a name="UpdateWorkspaceTheme" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateWorkspaceTheme"></a>

```typescript
public readonly UpdateWorkspaceTheme: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceTheme API call.

---

##### `UpdateWorkspaceVisibility`<sup>Required</sup> <a name="UpdateWorkspaceVisibility" id="@cdk_utils/iam.connect.ConnectOperations.property.UpdateWorkspaceVisibility"></a>

```typescript
public readonly UpdateWorkspaceVisibility: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkspaceVisibility API call.

---

### ConnectResources <a name="ConnectResources" id="@cdk_utils/iam.connect.ConnectResources"></a>

ARN builders, validators, and parsers for connect resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.connect.ConnectResources.Initializer"></a>

```typescript
import { connect } from '@cdk_utils/iam'

new connect.ConnectResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.agentStatus">agentStatus</a></code> | Builds an ARN for the agent-status resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.aiAgent">aiAgent</a></code> | Builds an ARN for the ai-agent resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.attachedFile">attachedFile</a></code> | Builds an ARN for the attached-file resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.authenticationProfile">authenticationProfile</a></code> | Builds an ARN for the authentication-profile resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.awsManagedView">awsManagedView</a></code> | Builds an ARN for the aws-managed-view resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.contact">contact</a></code> | Builds an ARN for the contact resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.contactEvaluation">contactEvaluation</a></code> | Builds an ARN for the contact-evaluation resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.contactFlow">contactFlow</a></code> | Builds an ARN for the contact-flow resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.contactFlowModule">contactFlowModule</a></code> | Builds an ARN for the contact-flow-module resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.customerManagedView">customerManagedView</a></code> | Builds an ARN for the customer-managed-view resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.customerManagedViewVersion">customerManagedViewVersion</a></code> | Builds an ARN for the customer-managed-view-version resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.dataTable">dataTable</a></code> | Builds an ARN for the data-table resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.emailAddress">emailAddress</a></code> | Builds an ARN for the email-address resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.evaluationForm">evaluationForm</a></code> | Builds an ARN for the evaluation-form resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.hierarchyGroup">hierarchyGroup</a></code> | Builds an ARN for the hierarchy-group resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.hoursOfOperation">hoursOfOperation</a></code> | Builds an ARN for the hours-of-operation resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.instance">instance</a></code> | Builds an ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.integrationAssociation">integrationAssociation</a></code> | Builds an ARN for the integration-association resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidAgentStatusArn">isValidAgentStatusArn</a></code> | Validates whether a string is a valid ARN for the agent-status resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidAiAgentArn">isValidAiAgentArn</a></code> | Validates whether a string is a valid ARN for the ai-agent resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidAttachedFileArn">isValidAttachedFileArn</a></code> | Validates whether a string is a valid ARN for the attached-file resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidAuthenticationProfileArn">isValidAuthenticationProfileArn</a></code> | Validates whether a string is a valid ARN for the authentication-profile resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidAWSManagedViewArn">isValidAWSManagedViewArn</a></code> | Validates whether a string is a valid ARN for the aws-managed-view resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidContactArn">isValidContactArn</a></code> | Validates whether a string is a valid ARN for the contact resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidContactEvaluationArn">isValidContactEvaluationArn</a></code> | Validates whether a string is a valid ARN for the contact-evaluation resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidContactFlowArn">isValidContactFlowArn</a></code> | Validates whether a string is a valid ARN for the contact-flow resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidContactFlowModuleArn">isValidContactFlowModuleArn</a></code> | Validates whether a string is a valid ARN for the contact-flow-module resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidCustomerManagedViewArn">isValidCustomerManagedViewArn</a></code> | Validates whether a string is a valid ARN for the customer-managed-view resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidCustomerManagedViewVersionArn">isValidCustomerManagedViewVersionArn</a></code> | Validates whether a string is a valid ARN for the customer-managed-view-version resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidDataTableArn">isValidDataTableArn</a></code> | Validates whether a string is a valid ARN for the data-table resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidEmailAddressArn">isValidEmailAddressArn</a></code> | Validates whether a string is a valid ARN for the email-address resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidEvaluationFormArn">isValidEvaluationFormArn</a></code> | Validates whether a string is a valid ARN for the evaluation-form resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidHierarchyGroupArn">isValidHierarchyGroupArn</a></code> | Validates whether a string is a valid ARN for the hierarchy-group resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidHoursOfOperationArn">isValidHoursOfOperationArn</a></code> | Validates whether a string is a valid ARN for the hours-of-operation resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidInstanceArn">isValidInstanceArn</a></code> | Validates whether a string is a valid ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidIntegrationAssociationArn">isValidIntegrationAssociationArn</a></code> | Validates whether a string is a valid ARN for the integration-association resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidLegacyPhoneNumberArn">isValidLegacyPhoneNumberArn</a></code> | Validates whether a string is a valid ARN for the legacy-phone-number resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidMetricArn">isValidMetricArn</a></code> | Validates whether a string is a valid ARN for the metric resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidNotificationArn">isValidNotificationArn</a></code> | Validates whether a string is a valid ARN for the notification resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidPhoneNumberArn">isValidPhoneNumberArn</a></code> | Validates whether a string is a valid ARN for the phone-number resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidPromptArn">isValidPromptArn</a></code> | Validates whether a string is a valid ARN for the prompt resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidQualifiedAWSManagedViewArn">isValidQualifiedAWSManagedViewArn</a></code> | Validates whether a string is a valid ARN for the qualified-aws-managed-view resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidQualifiedCustomerManagedViewArn">isValidQualifiedCustomerManagedViewArn</a></code> | Validates whether a string is a valid ARN for the qualified-customer-managed-view resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidQualifiedMetricArn">isValidQualifiedMetricArn</a></code> | Validates whether a string is a valid ARN for the qualified-metric resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidQueueArn">isValidQueueArn</a></code> | Validates whether a string is a valid ARN for the queue resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidQuickConnectArn">isValidQuickConnectArn</a></code> | Validates whether a string is a valid ARN for the quick-connect resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidRoutingProfileArn">isValidRoutingProfileArn</a></code> | Validates whether a string is a valid ARN for the routing-profile resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidRuleArn">isValidRuleArn</a></code> | Validates whether a string is a valid ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidSecurityProfileArn">isValidSecurityProfileArn</a></code> | Validates whether a string is a valid ARN for the security-profile resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidTaskTemplateArn">isValidTaskTemplateArn</a></code> | Validates whether a string is a valid ARN for the task-template resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidTrafficDistributionGroupArn">isValidTrafficDistributionGroupArn</a></code> | Validates whether a string is a valid ARN for the traffic-distribution-group resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidUseCaseArn">isValidUseCaseArn</a></code> | Validates whether a string is a valid ARN for the use-case resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidVocabularyArn">isValidVocabularyArn</a></code> | Validates whether a string is a valid ARN for the vocabulary resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidWildcardAgentStatusArn">isValidWildcardAgentStatusArn</a></code> | Validates whether a string is a valid ARN for the wildcard-agent-status resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidWildcardContactFlowArn">isValidWildcardContactFlowArn</a></code> | Validates whether a string is a valid ARN for the wildcard-contact-flow resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidWildcardLegacyPhoneNumberArn">isValidWildcardLegacyPhoneNumberArn</a></code> | Validates whether a string is a valid ARN for the wildcard-legacy-phone-number resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidWildcardPhoneNumberArn">isValidWildcardPhoneNumberArn</a></code> | Validates whether a string is a valid ARN for the wildcard-phone-number resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidWildcardQueueArn">isValidWildcardQueueArn</a></code> | Validates whether a string is a valid ARN for the wildcard-queue resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidWildcardQuickConnectArn">isValidWildcardQuickConnectArn</a></code> | Validates whether a string is a valid ARN for the wildcard-quick-connect resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.isValidWorkspaceArn">isValidWorkspaceArn</a></code> | Validates whether a string is a valid ARN for the workspace resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.legacyPhoneNumber">legacyPhoneNumber</a></code> | Builds an ARN for the legacy-phone-number resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.metric">metric</a></code> | Builds an ARN for the metric resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.notification">notification</a></code> | Builds an ARN for the notification resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseAgentStatusArn">parseAgentStatusArn</a></code> | Parses a agent-status ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseAiAgentArn">parseAiAgentArn</a></code> | Parses a ai-agent ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseAttachedFileArn">parseAttachedFileArn</a></code> | Parses a attached-file ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseAuthenticationProfileArn">parseAuthenticationProfileArn</a></code> | Parses a authentication-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseAWSManagedViewArn">parseAWSManagedViewArn</a></code> | Parses a aws-managed-view ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseContactArn">parseContactArn</a></code> | Parses a contact ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseContactEvaluationArn">parseContactEvaluationArn</a></code> | Parses a contact-evaluation ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseContactFlowArn">parseContactFlowArn</a></code> | Parses a contact-flow ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseContactFlowModuleArn">parseContactFlowModuleArn</a></code> | Parses a contact-flow-module ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseCustomerManagedViewArn">parseCustomerManagedViewArn</a></code> | Parses a customer-managed-view ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseCustomerManagedViewVersionArn">parseCustomerManagedViewVersionArn</a></code> | Parses a customer-managed-view-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseDataTableArn">parseDataTableArn</a></code> | Parses a data-table ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseEmailAddressArn">parseEmailAddressArn</a></code> | Parses a email-address ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseEvaluationFormArn">parseEvaluationFormArn</a></code> | Parses a evaluation-form ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseHierarchyGroupArn">parseHierarchyGroupArn</a></code> | Parses a hierarchy-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseHoursOfOperationArn">parseHoursOfOperationArn</a></code> | Parses a hours-of-operation ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseInstanceArn">parseInstanceArn</a></code> | Parses a instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseIntegrationAssociationArn">parseIntegrationAssociationArn</a></code> | Parses a integration-association ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseLegacyPhoneNumberArn">parseLegacyPhoneNumberArn</a></code> | Parses a legacy-phone-number ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseMetricArn">parseMetricArn</a></code> | Parses a metric ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseNotificationArn">parseNotificationArn</a></code> | Parses a notification ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parsePhoneNumberArn">parsePhoneNumberArn</a></code> | Parses a phone-number ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parsePromptArn">parsePromptArn</a></code> | Parses a prompt ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseQualifiedAWSManagedViewArn">parseQualifiedAWSManagedViewArn</a></code> | Parses a qualified-aws-managed-view ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseQualifiedCustomerManagedViewArn">parseQualifiedCustomerManagedViewArn</a></code> | Parses a qualified-customer-managed-view ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseQualifiedMetricArn">parseQualifiedMetricArn</a></code> | Parses a qualified-metric ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseQueueArn">parseQueueArn</a></code> | Parses a queue ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseQuickConnectArn">parseQuickConnectArn</a></code> | Parses a quick-connect ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseRoutingProfileArn">parseRoutingProfileArn</a></code> | Parses a routing-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseRuleArn">parseRuleArn</a></code> | Parses a rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseSecurityProfileArn">parseSecurityProfileArn</a></code> | Parses a security-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseTaskTemplateArn">parseTaskTemplateArn</a></code> | Parses a task-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseTrafficDistributionGroupArn">parseTrafficDistributionGroupArn</a></code> | Parses a traffic-distribution-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseUseCaseArn">parseUseCaseArn</a></code> | Parses a use-case ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseUserArn">parseUserArn</a></code> | Parses a user ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseVocabularyArn">parseVocabularyArn</a></code> | Parses a vocabulary ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseWildcardAgentStatusArn">parseWildcardAgentStatusArn</a></code> | Parses a wildcard-agent-status ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseWildcardContactFlowArn">parseWildcardContactFlowArn</a></code> | Parses a wildcard-contact-flow ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseWildcardLegacyPhoneNumberArn">parseWildcardLegacyPhoneNumberArn</a></code> | Parses a wildcard-legacy-phone-number ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseWildcardPhoneNumberArn">parseWildcardPhoneNumberArn</a></code> | Parses a wildcard-phone-number ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseWildcardQueueArn">parseWildcardQueueArn</a></code> | Parses a wildcard-queue ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseWildcardQuickConnectArn">parseWildcardQuickConnectArn</a></code> | Parses a wildcard-quick-connect ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.parseWorkspaceArn">parseWorkspaceArn</a></code> | Parses a workspace ARN into its components. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.phoneNumber">phoneNumber</a></code> | Builds an ARN for the phone-number resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.prompt">prompt</a></code> | Builds an ARN for the prompt resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.qualifiedAWSManagedView">qualifiedAWSManagedView</a></code> | Builds an ARN for the qualified-aws-managed-view resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.qualifiedCustomerManagedView">qualifiedCustomerManagedView</a></code> | Builds an ARN for the qualified-customer-managed-view resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.qualifiedMetric">qualifiedMetric</a></code> | Builds an ARN for the qualified-metric resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.queue">queue</a></code> | Builds an ARN for the queue resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.quickConnect">quickConnect</a></code> | Builds an ARN for the quick-connect resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.routingProfile">routingProfile</a></code> | Builds an ARN for the routing-profile resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.rule">rule</a></code> | Builds an ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.securityProfile">securityProfile</a></code> | Builds an ARN for the security-profile resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.taskTemplate">taskTemplate</a></code> | Builds an ARN for the task-template resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.trafficDistributionGroup">trafficDistributionGroup</a></code> | Builds an ARN for the traffic-distribution-group resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.useCase">useCase</a></code> | Builds an ARN for the use-case resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.user">user</a></code> | Builds an ARN for the user resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.vocabulary">vocabulary</a></code> | Builds an ARN for the vocabulary resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.wildcardAgentStatus">wildcardAgentStatus</a></code> | Builds an ARN for the wildcard-agent-status resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.wildcardContactFlow">wildcardContactFlow</a></code> | Builds an ARN for the wildcard-contact-flow resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.wildcardLegacyPhoneNumber">wildcardLegacyPhoneNumber</a></code> | Builds an ARN for the wildcard-legacy-phone-number resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.wildcardPhoneNumber">wildcardPhoneNumber</a></code> | Builds an ARN for the wildcard-phone-number resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.wildcardQueue">wildcardQueue</a></code> | Builds an ARN for the wildcard-queue resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.wildcardQuickConnect">wildcardQuickConnect</a></code> | Builds an ARN for the wildcard-quick-connect resource. |
| <code><a href="#@cdk_utils/iam.connect.ConnectResources.workspace">workspace</a></code> | Builds an ARN for the workspace resource. |

---

##### `agentStatus` <a name="agentStatus" id="@cdk_utils/iam.connect.ConnectResources.agentStatus"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.agentStatus(props: ConnectAgentStatusArnProps)
```

Builds an ARN for the agent-status resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.agentStatus.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectAgentStatusArnProps">ConnectAgentStatusArnProps</a>

---

##### `aiAgent` <a name="aiAgent" id="@cdk_utils/iam.connect.ConnectResources.aiAgent"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.aiAgent(props: ConnectAiAgentArnProps)
```

Builds an ARN for the ai-agent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.aiAgent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectAiAgentArnProps">ConnectAiAgentArnProps</a>

---

##### `attachedFile` <a name="attachedFile" id="@cdk_utils/iam.connect.ConnectResources.attachedFile"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.attachedFile(props: ConnectAttachedFileArnProps)
```

Builds an ARN for the attached-file resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.attachedFile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectAttachedFileArnProps">ConnectAttachedFileArnProps</a>

---

##### `authenticationProfile` <a name="authenticationProfile" id="@cdk_utils/iam.connect.ConnectResources.authenticationProfile"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.authenticationProfile(props: ConnectAuthenticationProfileArnProps)
```

Builds an ARN for the authentication-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.authenticationProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectAuthenticationProfileArnProps">ConnectAuthenticationProfileArnProps</a>

---

##### `awsManagedView` <a name="awsManagedView" id="@cdk_utils/iam.connect.ConnectResources.awsManagedView"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.awsManagedView(props: ConnectAWSManagedViewArnProps)
```

Builds an ARN for the aws-managed-view resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.awsManagedView.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectAWSManagedViewArnProps">ConnectAWSManagedViewArnProps</a>

---

##### `contact` <a name="contact" id="@cdk_utils/iam.connect.ConnectResources.contact"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.contact(props: ConnectContactArnProps)
```

Builds an ARN for the contact resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.contact.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectContactArnProps">ConnectContactArnProps</a>

---

##### `contactEvaluation` <a name="contactEvaluation" id="@cdk_utils/iam.connect.ConnectResources.contactEvaluation"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.contactEvaluation(props: ConnectContactEvaluationArnProps)
```

Builds an ARN for the contact-evaluation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.contactEvaluation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectContactEvaluationArnProps">ConnectContactEvaluationArnProps</a>

---

##### `contactFlow` <a name="contactFlow" id="@cdk_utils/iam.connect.ConnectResources.contactFlow"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.contactFlow(props: ConnectContactFlowArnProps)
```

Builds an ARN for the contact-flow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.contactFlow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectContactFlowArnProps">ConnectContactFlowArnProps</a>

---

##### `contactFlowModule` <a name="contactFlowModule" id="@cdk_utils/iam.connect.ConnectResources.contactFlowModule"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.contactFlowModule(props: ConnectContactFlowModuleArnProps)
```

Builds an ARN for the contact-flow-module resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.contactFlowModule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectContactFlowModuleArnProps">ConnectContactFlowModuleArnProps</a>

---

##### `customerManagedView` <a name="customerManagedView" id="@cdk_utils/iam.connect.ConnectResources.customerManagedView"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.customerManagedView(props: ConnectCustomerManagedViewArnProps)
```

Builds an ARN for the customer-managed-view resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.customerManagedView.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewArnProps">ConnectCustomerManagedViewArnProps</a>

---

##### `customerManagedViewVersion` <a name="customerManagedViewVersion" id="@cdk_utils/iam.connect.ConnectResources.customerManagedViewVersion"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.customerManagedViewVersion(props: ConnectCustomerManagedViewVersionArnProps)
```

Builds an ARN for the customer-managed-view-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.customerManagedViewVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectCustomerManagedViewVersionArnProps">ConnectCustomerManagedViewVersionArnProps</a>

---

##### `dataTable` <a name="dataTable" id="@cdk_utils/iam.connect.ConnectResources.dataTable"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.dataTable(props: ConnectDataTableArnProps)
```

Builds an ARN for the data-table resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.dataTable.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectDataTableArnProps">ConnectDataTableArnProps</a>

---

##### `emailAddress` <a name="emailAddress" id="@cdk_utils/iam.connect.ConnectResources.emailAddress"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.emailAddress(props: ConnectEmailAddressArnProps)
```

Builds an ARN for the email-address resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.emailAddress.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectEmailAddressArnProps">ConnectEmailAddressArnProps</a>

---

##### `evaluationForm` <a name="evaluationForm" id="@cdk_utils/iam.connect.ConnectResources.evaluationForm"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.evaluationForm(props: ConnectEvaluationFormArnProps)
```

Builds an ARN for the evaluation-form resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.evaluationForm.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectEvaluationFormArnProps">ConnectEvaluationFormArnProps</a>

---

##### `hierarchyGroup` <a name="hierarchyGroup" id="@cdk_utils/iam.connect.ConnectResources.hierarchyGroup"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.hierarchyGroup(props: ConnectHierarchyGroupArnProps)
```

Builds an ARN for the hierarchy-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.hierarchyGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectHierarchyGroupArnProps">ConnectHierarchyGroupArnProps</a>

---

##### `hoursOfOperation` <a name="hoursOfOperation" id="@cdk_utils/iam.connect.ConnectResources.hoursOfOperation"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.hoursOfOperation(props: ConnectHoursOfOperationArnProps)
```

Builds an ARN for the hours-of-operation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.hoursOfOperation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectHoursOfOperationArnProps">ConnectHoursOfOperationArnProps</a>

---

##### `instance` <a name="instance" id="@cdk_utils/iam.connect.ConnectResources.instance"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.instance(props: ConnectInstanceArnProps)
```

Builds an ARN for the instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.instance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectInstanceArnProps">ConnectInstanceArnProps</a>

---

##### `integrationAssociation` <a name="integrationAssociation" id="@cdk_utils/iam.connect.ConnectResources.integrationAssociation"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.integrationAssociation(props: ConnectIntegrationAssociationArnProps)
```

Builds an ARN for the integration-association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.integrationAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectIntegrationAssociationArnProps">ConnectIntegrationAssociationArnProps</a>

---

##### `isValidAgentStatusArn` <a name="isValidAgentStatusArn" id="@cdk_utils/iam.connect.ConnectResources.isValidAgentStatusArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidAgentStatusArn(arn: string)
```

Validates whether a string is a valid ARN for the agent-status resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidAgentStatusArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAiAgentArn` <a name="isValidAiAgentArn" id="@cdk_utils/iam.connect.ConnectResources.isValidAiAgentArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidAiAgentArn(arn: string)
```

Validates whether a string is a valid ARN for the ai-agent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidAiAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAttachedFileArn` <a name="isValidAttachedFileArn" id="@cdk_utils/iam.connect.ConnectResources.isValidAttachedFileArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidAttachedFileArn(arn: string)
```

Validates whether a string is a valid ARN for the attached-file resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidAttachedFileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAuthenticationProfileArn` <a name="isValidAuthenticationProfileArn" id="@cdk_utils/iam.connect.ConnectResources.isValidAuthenticationProfileArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidAuthenticationProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the authentication-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidAuthenticationProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAWSManagedViewArn` <a name="isValidAWSManagedViewArn" id="@cdk_utils/iam.connect.ConnectResources.isValidAWSManagedViewArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidAWSManagedViewArn(arn: string)
```

Validates whether a string is a valid ARN for the aws-managed-view resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidAWSManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContactArn` <a name="isValidContactArn" id="@cdk_utils/iam.connect.ConnectResources.isValidContactArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidContactArn(arn: string)
```

Validates whether a string is a valid ARN for the contact resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidContactArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContactEvaluationArn` <a name="isValidContactEvaluationArn" id="@cdk_utils/iam.connect.ConnectResources.isValidContactEvaluationArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidContactEvaluationArn(arn: string)
```

Validates whether a string is a valid ARN for the contact-evaluation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidContactEvaluationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContactFlowArn` <a name="isValidContactFlowArn" id="@cdk_utils/iam.connect.ConnectResources.isValidContactFlowArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidContactFlowArn(arn: string)
```

Validates whether a string is a valid ARN for the contact-flow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidContactFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContactFlowModuleArn` <a name="isValidContactFlowModuleArn" id="@cdk_utils/iam.connect.ConnectResources.isValidContactFlowModuleArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidContactFlowModuleArn(arn: string)
```

Validates whether a string is a valid ARN for the contact-flow-module resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidContactFlowModuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomerManagedViewArn` <a name="isValidCustomerManagedViewArn" id="@cdk_utils/iam.connect.ConnectResources.isValidCustomerManagedViewArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidCustomerManagedViewArn(arn: string)
```

Validates whether a string is a valid ARN for the customer-managed-view resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidCustomerManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomerManagedViewVersionArn` <a name="isValidCustomerManagedViewVersionArn" id="@cdk_utils/iam.connect.ConnectResources.isValidCustomerManagedViewVersionArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidCustomerManagedViewVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the customer-managed-view-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidCustomerManagedViewVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataTableArn` <a name="isValidDataTableArn" id="@cdk_utils/iam.connect.ConnectResources.isValidDataTableArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidDataTableArn(arn: string)
```

Validates whether a string is a valid ARN for the data-table resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidDataTableArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEmailAddressArn` <a name="isValidEmailAddressArn" id="@cdk_utils/iam.connect.ConnectResources.isValidEmailAddressArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidEmailAddressArn(arn: string)
```

Validates whether a string is a valid ARN for the email-address resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidEmailAddressArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEvaluationFormArn` <a name="isValidEvaluationFormArn" id="@cdk_utils/iam.connect.ConnectResources.isValidEvaluationFormArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidEvaluationFormArn(arn: string)
```

Validates whether a string is a valid ARN for the evaluation-form resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidEvaluationFormArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHierarchyGroupArn` <a name="isValidHierarchyGroupArn" id="@cdk_utils/iam.connect.ConnectResources.isValidHierarchyGroupArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidHierarchyGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the hierarchy-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidHierarchyGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHoursOfOperationArn` <a name="isValidHoursOfOperationArn" id="@cdk_utils/iam.connect.ConnectResources.isValidHoursOfOperationArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidHoursOfOperationArn(arn: string)
```

Validates whether a string is a valid ARN for the hours-of-operation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidHoursOfOperationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceArn` <a name="isValidInstanceArn" id="@cdk_utils/iam.connect.ConnectResources.isValidInstanceArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntegrationAssociationArn` <a name="isValidIntegrationAssociationArn" id="@cdk_utils/iam.connect.ConnectResources.isValidIntegrationAssociationArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidIntegrationAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the integration-association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidIntegrationAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLegacyPhoneNumberArn` <a name="isValidLegacyPhoneNumberArn" id="@cdk_utils/iam.connect.ConnectResources.isValidLegacyPhoneNumberArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidLegacyPhoneNumberArn(arn: string)
```

Validates whether a string is a valid ARN for the legacy-phone-number resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidLegacyPhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMetricArn` <a name="isValidMetricArn" id="@cdk_utils/iam.connect.ConnectResources.isValidMetricArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidMetricArn(arn: string)
```

Validates whether a string is a valid ARN for the metric resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidMetricArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNotificationArn` <a name="isValidNotificationArn" id="@cdk_utils/iam.connect.ConnectResources.isValidNotificationArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidNotificationArn(arn: string)
```

Validates whether a string is a valid ARN for the notification resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidNotificationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPhoneNumberArn` <a name="isValidPhoneNumberArn" id="@cdk_utils/iam.connect.ConnectResources.isValidPhoneNumberArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidPhoneNumberArn(arn: string)
```

Validates whether a string is a valid ARN for the phone-number resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidPhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPromptArn` <a name="isValidPromptArn" id="@cdk_utils/iam.connect.ConnectResources.isValidPromptArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidPromptArn(arn: string)
```

Validates whether a string is a valid ARN for the prompt resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidPromptArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQualifiedAWSManagedViewArn` <a name="isValidQualifiedAWSManagedViewArn" id="@cdk_utils/iam.connect.ConnectResources.isValidQualifiedAWSManagedViewArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidQualifiedAWSManagedViewArn(arn: string)
```

Validates whether a string is a valid ARN for the qualified-aws-managed-view resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidQualifiedAWSManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQualifiedCustomerManagedViewArn` <a name="isValidQualifiedCustomerManagedViewArn" id="@cdk_utils/iam.connect.ConnectResources.isValidQualifiedCustomerManagedViewArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidQualifiedCustomerManagedViewArn(arn: string)
```

Validates whether a string is a valid ARN for the qualified-customer-managed-view resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidQualifiedCustomerManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQualifiedMetricArn` <a name="isValidQualifiedMetricArn" id="@cdk_utils/iam.connect.ConnectResources.isValidQualifiedMetricArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidQualifiedMetricArn(arn: string)
```

Validates whether a string is a valid ARN for the qualified-metric resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidQualifiedMetricArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQueueArn` <a name="isValidQueueArn" id="@cdk_utils/iam.connect.ConnectResources.isValidQueueArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidQueueArn(arn: string)
```

Validates whether a string is a valid ARN for the queue resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQuickConnectArn` <a name="isValidQuickConnectArn" id="@cdk_utils/iam.connect.ConnectResources.isValidQuickConnectArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidQuickConnectArn(arn: string)
```

Validates whether a string is a valid ARN for the quick-connect resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidQuickConnectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRoutingProfileArn` <a name="isValidRoutingProfileArn" id="@cdk_utils/iam.connect.ConnectResources.isValidRoutingProfileArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidRoutingProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the routing-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidRoutingProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleArn` <a name="isValidRuleArn" id="@cdk_utils/iam.connect.ConnectResources.isValidRuleArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSecurityProfileArn` <a name="isValidSecurityProfileArn" id="@cdk_utils/iam.connect.ConnectResources.isValidSecurityProfileArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidSecurityProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the security-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidSecurityProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskTemplateArn` <a name="isValidTaskTemplateArn" id="@cdk_utils/iam.connect.ConnectResources.isValidTaskTemplateArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidTaskTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the task-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidTaskTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrafficDistributionGroupArn` <a name="isValidTrafficDistributionGroupArn" id="@cdk_utils/iam.connect.ConnectResources.isValidTrafficDistributionGroupArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidTrafficDistributionGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the traffic-distribution-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidTrafficDistributionGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUseCaseArn` <a name="isValidUseCaseArn" id="@cdk_utils/iam.connect.ConnectResources.isValidUseCaseArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidUseCaseArn(arn: string)
```

Validates whether a string is a valid ARN for the use-case resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidUseCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.connect.ConnectResources.isValidUserArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVocabularyArn` <a name="isValidVocabularyArn" id="@cdk_utils/iam.connect.ConnectResources.isValidVocabularyArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidVocabularyArn(arn: string)
```

Validates whether a string is a valid ARN for the vocabulary resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidVocabularyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWildcardAgentStatusArn` <a name="isValidWildcardAgentStatusArn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardAgentStatusArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidWildcardAgentStatusArn(arn: string)
```

Validates whether a string is a valid ARN for the wildcard-agent-status resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardAgentStatusArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWildcardContactFlowArn` <a name="isValidWildcardContactFlowArn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardContactFlowArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidWildcardContactFlowArn(arn: string)
```

Validates whether a string is a valid ARN for the wildcard-contact-flow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardContactFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWildcardLegacyPhoneNumberArn` <a name="isValidWildcardLegacyPhoneNumberArn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardLegacyPhoneNumberArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidWildcardLegacyPhoneNumberArn(arn: string)
```

Validates whether a string is a valid ARN for the wildcard-legacy-phone-number resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardLegacyPhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWildcardPhoneNumberArn` <a name="isValidWildcardPhoneNumberArn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardPhoneNumberArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidWildcardPhoneNumberArn(arn: string)
```

Validates whether a string is a valid ARN for the wildcard-phone-number resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardPhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWildcardQueueArn` <a name="isValidWildcardQueueArn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardQueueArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidWildcardQueueArn(arn: string)
```

Validates whether a string is a valid ARN for the wildcard-queue resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWildcardQuickConnectArn` <a name="isValidWildcardQuickConnectArn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardQuickConnectArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidWildcardQuickConnectArn(arn: string)
```

Validates whether a string is a valid ARN for the wildcard-quick-connect resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidWildcardQuickConnectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkspaceArn` <a name="isValidWorkspaceArn" id="@cdk_utils/iam.connect.ConnectResources.isValidWorkspaceArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.isValidWorkspaceArn(arn: string)
```

Validates whether a string is a valid ARN for the workspace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.isValidWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `legacyPhoneNumber` <a name="legacyPhoneNumber" id="@cdk_utils/iam.connect.ConnectResources.legacyPhoneNumber"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.legacyPhoneNumber(props: ConnectLegacyPhoneNumberArnProps)
```

Builds an ARN for the legacy-phone-number resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.legacyPhoneNumber.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectLegacyPhoneNumberArnProps">ConnectLegacyPhoneNumberArnProps</a>

---

##### `metric` <a name="metric" id="@cdk_utils/iam.connect.ConnectResources.metric"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.metric(props: ConnectMetricArnProps)
```

Builds an ARN for the metric resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.metric.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectMetricArnProps">ConnectMetricArnProps</a>

---

##### `notification` <a name="notification" id="@cdk_utils/iam.connect.ConnectResources.notification"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.notification(props: ConnectNotificationArnProps)
```

Builds an ARN for the notification resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.notification.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectNotificationArnProps">ConnectNotificationArnProps</a>

---

##### `parseAgentStatusArn` <a name="parseAgentStatusArn" id="@cdk_utils/iam.connect.ConnectResources.parseAgentStatusArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseAgentStatusArn(arn: string)
```

Parses a agent-status ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseAgentStatusArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAiAgentArn` <a name="parseAiAgentArn" id="@cdk_utils/iam.connect.ConnectResources.parseAiAgentArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseAiAgentArn(arn: string)
```

Parses a ai-agent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseAiAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAttachedFileArn` <a name="parseAttachedFileArn" id="@cdk_utils/iam.connect.ConnectResources.parseAttachedFileArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseAttachedFileArn(arn: string)
```

Parses a attached-file ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseAttachedFileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAuthenticationProfileArn` <a name="parseAuthenticationProfileArn" id="@cdk_utils/iam.connect.ConnectResources.parseAuthenticationProfileArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseAuthenticationProfileArn(arn: string)
```

Parses a authentication-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseAuthenticationProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAWSManagedViewArn` <a name="parseAWSManagedViewArn" id="@cdk_utils/iam.connect.ConnectResources.parseAWSManagedViewArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseAWSManagedViewArn(arn: string)
```

Parses a aws-managed-view ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseAWSManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContactArn` <a name="parseContactArn" id="@cdk_utils/iam.connect.ConnectResources.parseContactArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseContactArn(arn: string)
```

Parses a contact ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseContactArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContactEvaluationArn` <a name="parseContactEvaluationArn" id="@cdk_utils/iam.connect.ConnectResources.parseContactEvaluationArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseContactEvaluationArn(arn: string)
```

Parses a contact-evaluation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseContactEvaluationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContactFlowArn` <a name="parseContactFlowArn" id="@cdk_utils/iam.connect.ConnectResources.parseContactFlowArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseContactFlowArn(arn: string)
```

Parses a contact-flow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseContactFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContactFlowModuleArn` <a name="parseContactFlowModuleArn" id="@cdk_utils/iam.connect.ConnectResources.parseContactFlowModuleArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseContactFlowModuleArn(arn: string)
```

Parses a contact-flow-module ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseContactFlowModuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomerManagedViewArn` <a name="parseCustomerManagedViewArn" id="@cdk_utils/iam.connect.ConnectResources.parseCustomerManagedViewArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseCustomerManagedViewArn(arn: string)
```

Parses a customer-managed-view ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseCustomerManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomerManagedViewVersionArn` <a name="parseCustomerManagedViewVersionArn" id="@cdk_utils/iam.connect.ConnectResources.parseCustomerManagedViewVersionArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseCustomerManagedViewVersionArn(arn: string)
```

Parses a customer-managed-view-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseCustomerManagedViewVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataTableArn` <a name="parseDataTableArn" id="@cdk_utils/iam.connect.ConnectResources.parseDataTableArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseDataTableArn(arn: string)
```

Parses a data-table ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseDataTableArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEmailAddressArn` <a name="parseEmailAddressArn" id="@cdk_utils/iam.connect.ConnectResources.parseEmailAddressArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseEmailAddressArn(arn: string)
```

Parses a email-address ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseEmailAddressArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEvaluationFormArn` <a name="parseEvaluationFormArn" id="@cdk_utils/iam.connect.ConnectResources.parseEvaluationFormArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseEvaluationFormArn(arn: string)
```

Parses a evaluation-form ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseEvaluationFormArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHierarchyGroupArn` <a name="parseHierarchyGroupArn" id="@cdk_utils/iam.connect.ConnectResources.parseHierarchyGroupArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseHierarchyGroupArn(arn: string)
```

Parses a hierarchy-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseHierarchyGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHoursOfOperationArn` <a name="parseHoursOfOperationArn" id="@cdk_utils/iam.connect.ConnectResources.parseHoursOfOperationArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseHoursOfOperationArn(arn: string)
```

Parses a hours-of-operation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseHoursOfOperationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceArn` <a name="parseInstanceArn" id="@cdk_utils/iam.connect.ConnectResources.parseInstanceArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseInstanceArn(arn: string)
```

Parses a instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntegrationAssociationArn` <a name="parseIntegrationAssociationArn" id="@cdk_utils/iam.connect.ConnectResources.parseIntegrationAssociationArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseIntegrationAssociationArn(arn: string)
```

Parses a integration-association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseIntegrationAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLegacyPhoneNumberArn` <a name="parseLegacyPhoneNumberArn" id="@cdk_utils/iam.connect.ConnectResources.parseLegacyPhoneNumberArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseLegacyPhoneNumberArn(arn: string)
```

Parses a legacy-phone-number ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseLegacyPhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMetricArn` <a name="parseMetricArn" id="@cdk_utils/iam.connect.ConnectResources.parseMetricArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseMetricArn(arn: string)
```

Parses a metric ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseMetricArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNotificationArn` <a name="parseNotificationArn" id="@cdk_utils/iam.connect.ConnectResources.parseNotificationArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseNotificationArn(arn: string)
```

Parses a notification ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseNotificationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePhoneNumberArn` <a name="parsePhoneNumberArn" id="@cdk_utils/iam.connect.ConnectResources.parsePhoneNumberArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parsePhoneNumberArn(arn: string)
```

Parses a phone-number ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parsePhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePromptArn` <a name="parsePromptArn" id="@cdk_utils/iam.connect.ConnectResources.parsePromptArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parsePromptArn(arn: string)
```

Parses a prompt ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parsePromptArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQualifiedAWSManagedViewArn` <a name="parseQualifiedAWSManagedViewArn" id="@cdk_utils/iam.connect.ConnectResources.parseQualifiedAWSManagedViewArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseQualifiedAWSManagedViewArn(arn: string)
```

Parses a qualified-aws-managed-view ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseQualifiedAWSManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQualifiedCustomerManagedViewArn` <a name="parseQualifiedCustomerManagedViewArn" id="@cdk_utils/iam.connect.ConnectResources.parseQualifiedCustomerManagedViewArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseQualifiedCustomerManagedViewArn(arn: string)
```

Parses a qualified-customer-managed-view ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseQualifiedCustomerManagedViewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQualifiedMetricArn` <a name="parseQualifiedMetricArn" id="@cdk_utils/iam.connect.ConnectResources.parseQualifiedMetricArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseQualifiedMetricArn(arn: string)
```

Parses a qualified-metric ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseQualifiedMetricArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQueueArn` <a name="parseQueueArn" id="@cdk_utils/iam.connect.ConnectResources.parseQueueArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseQueueArn(arn: string)
```

Parses a queue ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQuickConnectArn` <a name="parseQuickConnectArn" id="@cdk_utils/iam.connect.ConnectResources.parseQuickConnectArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseQuickConnectArn(arn: string)
```

Parses a quick-connect ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseQuickConnectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoutingProfileArn` <a name="parseRoutingProfileArn" id="@cdk_utils/iam.connect.ConnectResources.parseRoutingProfileArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseRoutingProfileArn(arn: string)
```

Parses a routing-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseRoutingProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleArn` <a name="parseRuleArn" id="@cdk_utils/iam.connect.ConnectResources.parseRuleArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseRuleArn(arn: string)
```

Parses a rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSecurityProfileArn` <a name="parseSecurityProfileArn" id="@cdk_utils/iam.connect.ConnectResources.parseSecurityProfileArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseSecurityProfileArn(arn: string)
```

Parses a security-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseSecurityProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskTemplateArn` <a name="parseTaskTemplateArn" id="@cdk_utils/iam.connect.ConnectResources.parseTaskTemplateArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseTaskTemplateArn(arn: string)
```

Parses a task-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseTaskTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrafficDistributionGroupArn` <a name="parseTrafficDistributionGroupArn" id="@cdk_utils/iam.connect.ConnectResources.parseTrafficDistributionGroupArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseTrafficDistributionGroupArn(arn: string)
```

Parses a traffic-distribution-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseTrafficDistributionGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUseCaseArn` <a name="parseUseCaseArn" id="@cdk_utils/iam.connect.ConnectResources.parseUseCaseArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseUseCaseArn(arn: string)
```

Parses a use-case ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseUseCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.connect.ConnectResources.parseUserArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseUserArn(arn: string)
```

Parses a user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVocabularyArn` <a name="parseVocabularyArn" id="@cdk_utils/iam.connect.ConnectResources.parseVocabularyArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseVocabularyArn(arn: string)
```

Parses a vocabulary ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseVocabularyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWildcardAgentStatusArn` <a name="parseWildcardAgentStatusArn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardAgentStatusArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseWildcardAgentStatusArn(arn: string)
```

Parses a wildcard-agent-status ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardAgentStatusArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWildcardContactFlowArn` <a name="parseWildcardContactFlowArn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardContactFlowArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseWildcardContactFlowArn(arn: string)
```

Parses a wildcard-contact-flow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardContactFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWildcardLegacyPhoneNumberArn` <a name="parseWildcardLegacyPhoneNumberArn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardLegacyPhoneNumberArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseWildcardLegacyPhoneNumberArn(arn: string)
```

Parses a wildcard-legacy-phone-number ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardLegacyPhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWildcardPhoneNumberArn` <a name="parseWildcardPhoneNumberArn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardPhoneNumberArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseWildcardPhoneNumberArn(arn: string)
```

Parses a wildcard-phone-number ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardPhoneNumberArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWildcardQueueArn` <a name="parseWildcardQueueArn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardQueueArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseWildcardQueueArn(arn: string)
```

Parses a wildcard-queue ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWildcardQuickConnectArn` <a name="parseWildcardQuickConnectArn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardQuickConnectArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseWildcardQuickConnectArn(arn: string)
```

Parses a wildcard-quick-connect ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseWildcardQuickConnectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkspaceArn` <a name="parseWorkspaceArn" id="@cdk_utils/iam.connect.ConnectResources.parseWorkspaceArn"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.parseWorkspaceArn(arn: string)
```

Parses a workspace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect.ConnectResources.parseWorkspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `phoneNumber` <a name="phoneNumber" id="@cdk_utils/iam.connect.ConnectResources.phoneNumber"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.phoneNumber(props: ConnectPhoneNumberArnProps)
```

Builds an ARN for the phone-number resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.phoneNumber.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectPhoneNumberArnProps">ConnectPhoneNumberArnProps</a>

---

##### `prompt` <a name="prompt" id="@cdk_utils/iam.connect.ConnectResources.prompt"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.prompt(props: ConnectPromptArnProps)
```

Builds an ARN for the prompt resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.prompt.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectPromptArnProps">ConnectPromptArnProps</a>

---

##### `qualifiedAWSManagedView` <a name="qualifiedAWSManagedView" id="@cdk_utils/iam.connect.ConnectResources.qualifiedAWSManagedView"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.qualifiedAWSManagedView(props: ConnectQualifiedAWSManagedViewArnProps)
```

Builds an ARN for the qualified-aws-managed-view resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.qualifiedAWSManagedView.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectQualifiedAWSManagedViewArnProps">ConnectQualifiedAWSManagedViewArnProps</a>

---

##### `qualifiedCustomerManagedView` <a name="qualifiedCustomerManagedView" id="@cdk_utils/iam.connect.ConnectResources.qualifiedCustomerManagedView"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.qualifiedCustomerManagedView(props: ConnectQualifiedCustomerManagedViewArnProps)
```

Builds an ARN for the qualified-customer-managed-view resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.qualifiedCustomerManagedView.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectQualifiedCustomerManagedViewArnProps">ConnectQualifiedCustomerManagedViewArnProps</a>

---

##### `qualifiedMetric` <a name="qualifiedMetric" id="@cdk_utils/iam.connect.ConnectResources.qualifiedMetric"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.qualifiedMetric(props: ConnectQualifiedMetricArnProps)
```

Builds an ARN for the qualified-metric resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.qualifiedMetric.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectQualifiedMetricArnProps">ConnectQualifiedMetricArnProps</a>

---

##### `queue` <a name="queue" id="@cdk_utils/iam.connect.ConnectResources.queue"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.queue(props: ConnectQueueArnProps)
```

Builds an ARN for the queue resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.queue.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectQueueArnProps">ConnectQueueArnProps</a>

---

##### `quickConnect` <a name="quickConnect" id="@cdk_utils/iam.connect.ConnectResources.quickConnect"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.quickConnect(props: ConnectQuickConnectArnProps)
```

Builds an ARN for the quick-connect resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.quickConnect.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectQuickConnectArnProps">ConnectQuickConnectArnProps</a>

---

##### `routingProfile` <a name="routingProfile" id="@cdk_utils/iam.connect.ConnectResources.routingProfile"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.routingProfile(props: ConnectRoutingProfileArnProps)
```

Builds an ARN for the routing-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.routingProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectRoutingProfileArnProps">ConnectRoutingProfileArnProps</a>

---

##### `rule` <a name="rule" id="@cdk_utils/iam.connect.ConnectResources.rule"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.rule(props: ConnectRuleArnProps)
```

Builds an ARN for the rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.rule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectRuleArnProps">ConnectRuleArnProps</a>

---

##### `securityProfile` <a name="securityProfile" id="@cdk_utils/iam.connect.ConnectResources.securityProfile"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.securityProfile(props: ConnectSecurityProfileArnProps)
```

Builds an ARN for the security-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.securityProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectSecurityProfileArnProps">ConnectSecurityProfileArnProps</a>

---

##### `taskTemplate` <a name="taskTemplate" id="@cdk_utils/iam.connect.ConnectResources.taskTemplate"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.taskTemplate(props: ConnectTaskTemplateArnProps)
```

Builds an ARN for the task-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.taskTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectTaskTemplateArnProps">ConnectTaskTemplateArnProps</a>

---

##### `trafficDistributionGroup` <a name="trafficDistributionGroup" id="@cdk_utils/iam.connect.ConnectResources.trafficDistributionGroup"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.trafficDistributionGroup(props: ConnectTrafficDistributionGroupArnProps)
```

Builds an ARN for the traffic-distribution-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.trafficDistributionGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectTrafficDistributionGroupArnProps">ConnectTrafficDistributionGroupArnProps</a>

---

##### `useCase` <a name="useCase" id="@cdk_utils/iam.connect.ConnectResources.useCase"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.useCase(props: ConnectUseCaseArnProps)
```

Builds an ARN for the use-case resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.useCase.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectUseCaseArnProps">ConnectUseCaseArnProps</a>

---

##### `user` <a name="user" id="@cdk_utils/iam.connect.ConnectResources.user"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.user(props: ConnectUserArnProps)
```

Builds an ARN for the user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectUserArnProps">ConnectUserArnProps</a>

---

##### `vocabulary` <a name="vocabulary" id="@cdk_utils/iam.connect.ConnectResources.vocabulary"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.vocabulary(props: ConnectVocabularyArnProps)
```

Builds an ARN for the vocabulary resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.vocabulary.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectVocabularyArnProps">ConnectVocabularyArnProps</a>

---

##### `wildcardAgentStatus` <a name="wildcardAgentStatus" id="@cdk_utils/iam.connect.ConnectResources.wildcardAgentStatus"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.wildcardAgentStatus(props: ConnectWildcardAgentStatusArnProps)
```

Builds an ARN for the wildcard-agent-status resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.wildcardAgentStatus.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectWildcardAgentStatusArnProps">ConnectWildcardAgentStatusArnProps</a>

---

##### `wildcardContactFlow` <a name="wildcardContactFlow" id="@cdk_utils/iam.connect.ConnectResources.wildcardContactFlow"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.wildcardContactFlow(props: ConnectWildcardContactFlowArnProps)
```

Builds an ARN for the wildcard-contact-flow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.wildcardContactFlow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectWildcardContactFlowArnProps">ConnectWildcardContactFlowArnProps</a>

---

##### `wildcardLegacyPhoneNumber` <a name="wildcardLegacyPhoneNumber" id="@cdk_utils/iam.connect.ConnectResources.wildcardLegacyPhoneNumber"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.wildcardLegacyPhoneNumber(props: ConnectWildcardLegacyPhoneNumberArnProps)
```

Builds an ARN for the wildcard-legacy-phone-number resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.wildcardLegacyPhoneNumber.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectWildcardLegacyPhoneNumberArnProps">ConnectWildcardLegacyPhoneNumberArnProps</a>

---

##### `wildcardPhoneNumber` <a name="wildcardPhoneNumber" id="@cdk_utils/iam.connect.ConnectResources.wildcardPhoneNumber"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.wildcardPhoneNumber(props: ConnectWildcardPhoneNumberArnProps)
```

Builds an ARN for the wildcard-phone-number resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.wildcardPhoneNumber.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectWildcardPhoneNumberArnProps">ConnectWildcardPhoneNumberArnProps</a>

---

##### `wildcardQueue` <a name="wildcardQueue" id="@cdk_utils/iam.connect.ConnectResources.wildcardQueue"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.wildcardQueue(props: ConnectWildcardQueueArnProps)
```

Builds an ARN for the wildcard-queue resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.wildcardQueue.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectWildcardQueueArnProps">ConnectWildcardQueueArnProps</a>

---

##### `wildcardQuickConnect` <a name="wildcardQuickConnect" id="@cdk_utils/iam.connect.ConnectResources.wildcardQuickConnect"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.wildcardQuickConnect(props: ConnectWildcardQuickConnectArnProps)
```

Builds an ARN for the wildcard-quick-connect resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.wildcardQuickConnect.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectWildcardQuickConnectArnProps">ConnectWildcardQuickConnectArnProps</a>

---

##### `workspace` <a name="workspace" id="@cdk_utils/iam.connect.ConnectResources.workspace"></a>

```typescript
import { connect } from '@cdk_utils/iam'

connect.ConnectResources.workspace(props: ConnectWorkspaceArnProps)
```

Builds an ARN for the workspace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect.ConnectResources.workspace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect.ConnectWorkspaceArnProps">ConnectWorkspaceArnProps</a>

---




