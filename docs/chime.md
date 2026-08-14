# `chime` Submodule <a name="`chime` Submodule" id="@cdk_utils/iam.chime"></a>


## Structs <a name="Structs" id="Structs"></a>

### ChimeAppInstanceArnComponents <a name="ChimeAppInstanceArnComponents" id="@cdk_utils/iam.chime.ChimeAppInstanceArnComponents"></a>

Parsed components of a app-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeAppInstanceArnComponents: chime.ChimeAppInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeAppInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeAppInstanceArnProps <a name="ChimeAppInstanceArnProps" id="@cdk_utils/iam.chime.ChimeAppInstanceArnProps"></a>

Properties for building a app-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeAppInstanceArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeAppInstanceArnProps: chime.ChimeAppInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeAppInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeAppInstanceBotArnComponents <a name="ChimeAppInstanceBotArnComponents" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents"></a>

Parsed components of a app-instance-bot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeAppInstanceBotArnComponents: chime.ChimeAppInstanceBotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.appInstanceBotId">appInstanceBotId</a></code> | <code>string</code> | The AppInstanceBotId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `appInstanceBotId`<sup>Required</sup> <a name="appInstanceBotId" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.appInstanceBotId"></a>

```typescript
public readonly appInstanceBotId: string;
```

- *Type:* string

The AppInstanceBotId component.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeAppInstanceBotArnProps <a name="ChimeAppInstanceBotArnProps" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps"></a>

Properties for building a app-instance-bot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeAppInstanceBotArnProps: chime.ChimeAppInstanceBotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.appInstanceBotId">appInstanceBotId</a></code> | <code>string</code> | The AppInstanceBotId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `appInstanceBotId`<sup>Required</sup> <a name="appInstanceBotId" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.appInstanceBotId"></a>

```typescript
public readonly appInstanceBotId: string;
```

- *Type:* string

The AppInstanceBotId component of the ARN.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeAppInstanceUserArnComponents <a name="ChimeAppInstanceUserArnComponents" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents"></a>

Parsed components of a app-instance-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeAppInstanceUserArnComponents: chime.ChimeAppInstanceUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.appInstanceUserId">appInstanceUserId</a></code> | <code>string</code> | The AppInstanceUserId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component.

---

##### `appInstanceUserId`<sup>Required</sup> <a name="appInstanceUserId" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.appInstanceUserId"></a>

```typescript
public readonly appInstanceUserId: string;
```

- *Type:* string

The AppInstanceUserId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeAppInstanceUserArnProps <a name="ChimeAppInstanceUserArnProps" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps"></a>

Properties for building a app-instance-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeAppInstanceUserArnProps: chime.ChimeAppInstanceUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.appInstanceUserId">appInstanceUserId</a></code> | <code>string</code> | The AppInstanceUserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component of the ARN.

---

##### `appInstanceUserId`<sup>Required</sup> <a name="appInstanceUserId" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.appInstanceUserId"></a>

```typescript
public readonly appInstanceUserId: string;
```

- *Type:* string

The AppInstanceUserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeChannelArnComponents <a name="ChimeChannelArnComponents" id="@cdk_utils/iam.chime.ChimeChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeChannelArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeChannelArnComponents: chime.ChimeChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnComponents.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnComponents.property.channelId">channelId</a></code> | <code>string</code> | The ChannelId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeChannelArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeChannelArnComponents.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component.

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdk_utils/iam.chime.ChimeChannelArnComponents.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ChannelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeChannelArnProps <a name="ChimeChannelArnProps" id="@cdk_utils/iam.chime.ChimeChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeChannelArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeChannelArnProps: chime.ChimeChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnProps.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnProps.property.channelId">channelId</a></code> | <code>string</code> | The ChannelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeChannelArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeChannelArnProps.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component of the ARN.

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdk_utils/iam.chime.ChimeChannelArnProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ChannelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeChannelFlowArnComponents <a name="ChimeChannelFlowArnComponents" id="@cdk_utils/iam.chime.ChimeChannelFlowArnComponents"></a>

Parsed components of a channel-flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeChannelFlowArnComponents: chime.ChimeChannelFlowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.channelFlowId">channelFlowId</a></code> | <code>string</code> | The ChannelFlowId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component.

---

##### `channelFlowId`<sup>Required</sup> <a name="channelFlowId" id="@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.channelFlowId"></a>

```typescript
public readonly channelFlowId: string;
```

- *Type:* string

The ChannelFlowId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeChannelFlowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeChannelFlowArnProps <a name="ChimeChannelFlowArnProps" id="@cdk_utils/iam.chime.ChimeChannelFlowArnProps"></a>

Properties for building a channel-flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeChannelFlowArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeChannelFlowArnProps: chime.ChimeChannelFlowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.appInstanceId">appInstanceId</a></code> | <code>string</code> | The AppInstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.channelFlowId">channelFlowId</a></code> | <code>string</code> | The ChannelFlowId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `appInstanceId`<sup>Required</sup> <a name="appInstanceId" id="@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.appInstanceId"></a>

```typescript
public readonly appInstanceId: string;
```

- *Type:* string

The AppInstanceId component of the ARN.

---

##### `channelFlowId`<sup>Required</sup> <a name="channelFlowId" id="@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.channelFlowId"></a>

```typescript
public readonly channelFlowId: string;
```

- *Type:* string

The ChannelFlowId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeChannelFlowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeMediaInsightsPipelineConfigurationArnComponents <a name="ChimeMediaInsightsPipelineConfigurationArnComponents" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents"></a>

Parsed components of a media-insights-pipeline-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeMediaInsightsPipelineConfigurationArnComponents: chime.ChimeMediaInsightsPipelineConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.configurationName">configurationName</a></code> | <code>string</code> | The ConfigurationName component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

The ConfigurationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeMediaInsightsPipelineConfigurationArnProps <a name="ChimeMediaInsightsPipelineConfigurationArnProps" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps"></a>

Properties for building a media-insights-pipeline-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeMediaInsightsPipelineConfigurationArnProps: chime.ChimeMediaInsightsPipelineConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.configurationName">configurationName</a></code> | <code>string</code> | The ConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `configurationName`<sup>Required</sup> <a name="configurationName" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.configurationName"></a>

```typescript
public readonly configurationName: string;
```

- *Type:* string

The ConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeMediaPipelineArnComponents <a name="ChimeMediaPipelineArnComponents" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents"></a>

Parsed components of a media-pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeMediaPipelineArnComponents: chime.ChimeMediaPipelineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.mediaPipelineId">mediaPipelineId</a></code> | <code>string</code> | The MediaPipelineId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `mediaPipelineId`<sup>Required</sup> <a name="mediaPipelineId" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.mediaPipelineId"></a>

```typescript
public readonly mediaPipelineId: string;
```

- *Type:* string

The MediaPipelineId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeMediaPipelineArnProps <a name="ChimeMediaPipelineArnProps" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnProps"></a>

Properties for building a media-pipeline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeMediaPipelineArnProps: chime.ChimeMediaPipelineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.mediaPipelineId">mediaPipelineId</a></code> | <code>string</code> | The MediaPipelineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `mediaPipelineId`<sup>Required</sup> <a name="mediaPipelineId" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.mediaPipelineId"></a>

```typescript
public readonly mediaPipelineId: string;
```

- *Type:* string

The MediaPipelineId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeMediaPipelineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeMediaPipelineKinesisVideoStreamPoolArnComponents <a name="ChimeMediaPipelineKinesisVideoStreamPoolArnComponents" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents"></a>

Parsed components of a media-pipeline-kinesis-video-stream-pool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeMediaPipelineKinesisVideoStreamPoolArnComponents: chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.poolName">poolName</a></code> | <code>string</code> | The PoolName component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

The PoolName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeMediaPipelineKinesisVideoStreamPoolArnProps <a name="ChimeMediaPipelineKinesisVideoStreamPoolArnProps" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps"></a>

Properties for building a media-pipeline-kinesis-video-stream-pool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeMediaPipelineKinesisVideoStreamPoolArnProps: chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.poolName">poolName</a></code> | <code>string</code> | The PoolName component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

The PoolName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeMeetingArnComponents <a name="ChimeMeetingArnComponents" id="@cdk_utils/iam.chime.ChimeMeetingArnComponents"></a>

Parsed components of a meeting ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeMeetingArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeMeetingArnComponents: chime.ChimeMeetingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.meetingId">meetingId</a></code> | <code>string</code> | The MeetingId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `meetingId`<sup>Required</sup> <a name="meetingId" id="@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.meetingId"></a>

```typescript
public readonly meetingId: string;
```

- *Type:* string

The MeetingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeMeetingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ChimeMeetingArnProps <a name="ChimeMeetingArnProps" id="@cdk_utils/iam.chime.ChimeMeetingArnProps"></a>

Properties for building a meeting ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeMeetingArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeMeetingArnProps: chime.ChimeMeetingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnProps.property.meetingId">meetingId</a></code> | <code>string</code> | The MeetingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeMeetingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeMeetingArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `meetingId`<sup>Required</sup> <a name="meetingId" id="@cdk_utils/iam.chime.ChimeMeetingArnProps.property.meetingId"></a>

```typescript
public readonly meetingId: string;
```

- *Type:* string

The MeetingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeMeetingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeMeetingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeMeetingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeSipMediaApplicationArnComponents <a name="ChimeSipMediaApplicationArnComponents" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents"></a>

Parsed components of a sip-media-application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeSipMediaApplicationArnComponents: chime.ChimeSipMediaApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.sipMediaApplicationId">sipMediaApplicationId</a></code> | <code>string</code> | The SipMediaApplicationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="sipMediaApplicationId" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnComponents.property.sipMediaApplicationId"></a>

```typescript
public readonly sipMediaApplicationId: string;
```

- *Type:* string

The SipMediaApplicationId component.

---

### ChimeSipMediaApplicationArnProps <a name="ChimeSipMediaApplicationArnProps" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps"></a>

Properties for building a sip-media-application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeSipMediaApplicationArnProps: chime.ChimeSipMediaApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.sipMediaApplicationId">sipMediaApplicationId</a></code> | <code>string</code> | The SipMediaApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `sipMediaApplicationId`<sup>Required</sup> <a name="sipMediaApplicationId" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.sipMediaApplicationId"></a>

```typescript
public readonly sipMediaApplicationId: string;
```

- *Type:* string

The SipMediaApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeVoiceConnectorArnComponents <a name="ChimeVoiceConnectorArnComponents" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents"></a>

Parsed components of a voice-connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeVoiceConnectorArnComponents: chime.ChimeVoiceConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | The VoiceConnectorId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnComponents.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

The VoiceConnectorId component.

---

### ChimeVoiceConnectorArnProps <a name="ChimeVoiceConnectorArnProps" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps"></a>

Properties for building a voice-connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeVoiceConnectorArnProps: chime.ChimeVoiceConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | The VoiceConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

The VoiceConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeVoiceProfileArnComponents <a name="ChimeVoiceProfileArnComponents" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents"></a>

Parsed components of a voice-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeVoiceProfileArnComponents: chime.ChimeVoiceProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.voiceProfileId">voiceProfileId</a></code> | <code>string</code> | The VoiceProfileId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `voiceProfileId`<sup>Required</sup> <a name="voiceProfileId" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnComponents.property.voiceProfileId"></a>

```typescript
public readonly voiceProfileId: string;
```

- *Type:* string

The VoiceProfileId component.

---

### ChimeVoiceProfileArnProps <a name="ChimeVoiceProfileArnProps" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnProps"></a>

Properties for building a voice-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeVoiceProfileArnProps: chime.ChimeVoiceProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.voiceProfileId">voiceProfileId</a></code> | <code>string</code> | The VoiceProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `voiceProfileId`<sup>Required</sup> <a name="voiceProfileId" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.voiceProfileId"></a>

```typescript
public readonly voiceProfileId: string;
```

- *Type:* string

The VoiceProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeVoiceProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ChimeVoiceProfileDomainArnComponents <a name="ChimeVoiceProfileDomainArnComponents" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents"></a>

Parsed components of a voice-profile-domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeVoiceProfileDomainArnComponents: chime.ChimeVoiceProfileDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.voiceProfileDomainId">voiceProfileDomainId</a></code> | <code>string</code> | The VoiceProfileDomainId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `voiceProfileDomainId`<sup>Required</sup> <a name="voiceProfileDomainId" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnComponents.property.voiceProfileDomainId"></a>

```typescript
public readonly voiceProfileDomainId: string;
```

- *Type:* string

The VoiceProfileDomainId component.

---

### ChimeVoiceProfileDomainArnProps <a name="ChimeVoiceProfileDomainArnProps" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps"></a>

Properties for building a voice-profile-domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

const chimeVoiceProfileDomainArnProps: chime.ChimeVoiceProfileDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.voiceProfileDomainId">voiceProfileDomainId</a></code> | <code>string</code> | The VoiceProfileDomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `voiceProfileDomainId`<sup>Required</sup> <a name="voiceProfileDomainId" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.voiceProfileDomainId"></a>

```typescript
public readonly voiceProfileDomainId: string;
```

- *Type:* string

The VoiceProfileDomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeActions <a name="ChimeActions" id="@cdk_utils/iam.chime.ChimeActions"></a>

IAM action constants for the chime service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.chime.ChimeActions.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

new chime.ChimeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AcceptDelegate">AcceptDelegate</a></code> | <code>string</code> | [Write] chime:AcceptDelegate. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetAccount">actionGetAccount</a></code> | <code>string</code> | [Read] chime:GetAccount. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetAccountResource">actionGetAccountResource</a></code> | <code>string</code> | [Read] chime:GetAccountResource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] chime:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetAccountWithOpenIdConfig">actionGetAccountWithOpenIdConfig</a></code> | <code>string</code> | [Read] chime:GetAccountWithOpenIdConfig. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetAppInstanceRetentionSettings">actionGetAppInstanceRetentionSettings</a></code> | <code>string</code> | [Read] chime:GetAppInstanceRetentionSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetAppInstanceStreamingConfigurations">actionGetAppInstanceStreamingConfigurations</a></code> | <code>string</code> | [Read] chime:GetAppInstanceStreamingConfigurations. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetAttendee">actionGetAttendee</a></code> | <code>string</code> | [Read] chime:GetAttendee. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetBot">actionGetBot</a></code> | <code>string</code> | [Read] chime:GetBot. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetCDRBucket">actionGetCDRBucket</a></code> | <code>string</code> | [Read] chime:GetCDRBucket. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetChannelMembershipPreferences">actionGetChannelMembershipPreferences</a></code> | <code>string</code> | [Read] chime:GetChannelMembershipPreferences. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetChannelMessage">actionGetChannelMessage</a></code> | <code>string</code> | [Read] chime:GetChannelMessage. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetChannelMessageStatus">actionGetChannelMessageStatus</a></code> | <code>string</code> | [Read] chime:GetChannelMessageStatus. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetDomain">actionGetDomain</a></code> | <code>string</code> | [Read] chime:GetDomain. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetEventsConfiguration">actionGetEventsConfiguration</a></code> | <code>string</code> | [Read] chime:GetEventsConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetGlobalSettings">actionGetGlobalSettings</a></code> | <code>string</code> | [Read] chime:GetGlobalSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetMediaCapturePipeline">actionGetMediaCapturePipeline</a></code> | <code>string</code> | [Read] chime:GetMediaCapturePipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetMediaInsightsPipelineConfiguration">actionGetMediaInsightsPipelineConfiguration</a></code> | <code>string</code> | [Read] chime:GetMediaInsightsPipelineConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetMediaPipeline">actionGetMediaPipeline</a></code> | <code>string</code> | [Read] chime:GetMediaPipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetMediaPipelineKinesisVideoStreamPool">actionGetMediaPipelineKinesisVideoStreamPool</a></code> | <code>string</code> | [Read] chime:GetMediaPipelineKinesisVideoStreamPool. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetMeeting">actionGetMeeting</a></code> | <code>string</code> | [Read] chime:GetMeeting. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetMeetingDetail">actionGetMeetingDetail</a></code> | <code>string</code> | [Read] chime:GetMeetingDetail. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetMessagingSessionEndpoint">actionGetMessagingSessionEndpoint</a></code> | <code>string</code> | [Read] chime:GetMessagingSessionEndpoint. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetMessagingStreamingConfigurations">actionGetMessagingStreamingConfigurations</a></code> | <code>string</code> | [Read] chime:GetMessagingStreamingConfigurations. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetPhoneNumber">actionGetPhoneNumber</a></code> | <code>string</code> | [Read] chime:GetPhoneNumber. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetPhoneNumberOrder">actionGetPhoneNumberOrder</a></code> | <code>string</code> | [Read] chime:GetPhoneNumberOrder. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetPhoneNumberSettings">actionGetPhoneNumberSettings</a></code> | <code>string</code> | [Read] chime:GetPhoneNumberSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetProxySession">actionGetProxySession</a></code> | <code>string</code> | [Read] chime:GetProxySession. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetRetentionSettings">actionGetRetentionSettings</a></code> | <code>string</code> | [Read] chime:GetRetentionSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetRoom">actionGetRoom</a></code> | <code>string</code> | [Read] chime:GetRoom. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetSipMediaApplication">actionGetSipMediaApplication</a></code> | <code>string</code> | [Read] chime:GetSipMediaApplication. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetSipMediaApplicationAlexaSkillConfiguration">actionGetSipMediaApplicationAlexaSkillConfiguration</a></code> | <code>string</code> | [Read] chime:GetSipMediaApplicationAlexaSkillConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetSipMediaApplicationLoggingConfiguration">actionGetSipMediaApplicationLoggingConfiguration</a></code> | <code>string</code> | [Read] chime:GetSipMediaApplicationLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetSipRule">actionGetSipRule</a></code> | <code>string</code> | [Read] chime:GetSipRule. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetSpeakerSearchTask">actionGetSpeakerSearchTask</a></code> | <code>string</code> | [Read] chime:GetSpeakerSearchTask. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetTelephonyLimits">actionGetTelephonyLimits</a></code> | <code>string</code> | [Read] chime:GetTelephonyLimits. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetUser">actionGetUser</a></code> | <code>string</code> | [Read] chime:GetUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetUserActivityReportData">actionGetUserActivityReportData</a></code> | <code>string</code> | [Read] chime:GetUserActivityReportData. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetUserByEmail">actionGetUserByEmail</a></code> | <code>string</code> | [Read] chime:GetUserByEmail. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetUserSettings">actionGetUserSettings</a></code> | <code>string</code> | [Read] chime:GetUserSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnector">actionGetVoiceConnector</a></code> | <code>string</code> | [Read] chime:GetVoiceConnector. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorEmergencyCallingConfiguration">actionGetVoiceConnectorEmergencyCallingConfiguration</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorEmergencyCallingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorExternalSystemsConfiguration">actionGetVoiceConnectorExternalSystemsConfiguration</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorExternalSystemsConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorGroup">actionGetVoiceConnectorGroup</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorGroup. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorLoggingConfiguration">actionGetVoiceConnectorLoggingConfiguration</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorOrigination">actionGetVoiceConnectorOrigination</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorOrigination. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorProxy">actionGetVoiceConnectorProxy</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorProxy. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorStreamingConfiguration">actionGetVoiceConnectorStreamingConfiguration</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorStreamingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorTermination">actionGetVoiceConnectorTermination</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorTermination. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorTerminationHealth">actionGetVoiceConnectorTerminationHealth</a></code> | <code>string</code> | [Read] chime:GetVoiceConnectorTerminationHealth. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceProfile">actionGetVoiceProfile</a></code> | <code>string</code> | [Read] chime:GetVoiceProfile. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceProfileDomain">actionGetVoiceProfileDomain</a></code> | <code>string</code> | [Read] chime:GetVoiceProfileDomain. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceToneAnalysisTask">actionGetVoiceToneAnalysisTask</a></code> | <code>string</code> | [Read] chime:GetVoiceToneAnalysisTask. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ActivateUsers">ActivateUsers</a></code> | <code>string</code> | [Write] chime:ActivateUsers. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AddDomain">AddDomain</a></code> | <code>string</code> | [Write] chime:AddDomain. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AddOrUpdateGroups">AddOrUpdateGroups</a></code> | <code>string</code> | [Write] chime:AddOrUpdateGroups. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AssociateChannelFlow">AssociateChannelFlow</a></code> | <code>string</code> | [Write] chime:AssociateChannelFlow. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AssociatePhoneNumbersWithVoiceConnector">AssociatePhoneNumbersWithVoiceConnector</a></code> | <code>string</code> | [Write] chime:AssociatePhoneNumbersWithVoiceConnector. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AssociatePhoneNumbersWithVoiceConnectorGroup">AssociatePhoneNumbersWithVoiceConnectorGroup</a></code> | <code>string</code> | [Write] chime:AssociatePhoneNumbersWithVoiceConnectorGroup. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AssociatePhoneNumberWithUser">AssociatePhoneNumberWithUser</a></code> | <code>string</code> | [Write] chime:AssociatePhoneNumberWithUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AssociateSigninDelegateGroupsWithAccount">AssociateSigninDelegateGroupsWithAccount</a></code> | <code>string</code> | [Write] chime:AssociateSigninDelegateGroupsWithAccount. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AssociateVoiceConnectorConnect">AssociateVoiceConnectorConnect</a></code> | <code>string</code> | [Write] chime:AssociateVoiceConnectorConnect. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.AuthorizeDirectory">AuthorizeDirectory</a></code> | <code>string</code> | [Write] chime:AuthorizeDirectory. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchCreateAttendee">BatchCreateAttendee</a></code> | <code>string</code> | [Write] chime:BatchCreateAttendee. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchCreateChannelMembership">BatchCreateChannelMembership</a></code> | <code>string</code> | [Write] chime:BatchCreateChannelMembership. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchCreateRoomMembership">BatchCreateRoomMembership</a></code> | <code>string</code> | [Write] chime:BatchCreateRoomMembership. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchDeletePhoneNumber">BatchDeletePhoneNumber</a></code> | <code>string</code> | [Write] chime:BatchDeletePhoneNumber. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchSuspendUser">BatchSuspendUser</a></code> | <code>string</code> | [Write] chime:BatchSuspendUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchUnsuspendUser">BatchUnsuspendUser</a></code> | <code>string</code> | [Write] chime:BatchUnsuspendUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchUpdateAttendeeCapabilitiesExcept">BatchUpdateAttendeeCapabilitiesExcept</a></code> | <code>string</code> | [Write] chime:BatchUpdateAttendeeCapabilitiesExcept. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchUpdatePhoneNumber">BatchUpdatePhoneNumber</a></code> | <code>string</code> | [Write] chime:BatchUpdatePhoneNumber. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.BatchUpdateUser">BatchUpdateUser</a></code> | <code>string</code> | [Write] chime:BatchUpdateUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ChannelFlowCallback">ChannelFlowCallback</a></code> | <code>string</code> | [Write] chime:ChannelFlowCallback. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.Connect">Connect</a></code> | <code>string</code> | [Write] chime:Connect. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ConnectDirectory">ConnectDirectory</a></code> | <code>string</code> | [Write] chime:ConnectDirectory. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateAccount">CreateAccount</a></code> | <code>string</code> | [Write] chime:CreateAccount. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateApiKey">CreateApiKey</a></code> | <code>string</code> | [Write] chime:CreateApiKey. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateAppInstance">CreateAppInstance</a></code> | <code>string</code> | [Write] chime:CreateAppInstance. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateAppInstanceAdmin">CreateAppInstanceAdmin</a></code> | <code>string</code> | [Write] chime:CreateAppInstanceAdmin. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateAppInstanceBot">CreateAppInstanceBot</a></code> | <code>string</code> | [Write] chime:CreateAppInstanceBot. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateAppInstanceUser">CreateAppInstanceUser</a></code> | <code>string</code> | [Write] chime:CreateAppInstanceUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateAttendee">CreateAttendee</a></code> | <code>string</code> | [Write] chime:CreateAttendee. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateBot">CreateBot</a></code> | <code>string</code> | [Write] chime:CreateBot. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateCDRBucket">CreateCDRBucket</a></code> | <code>string</code> | [Write] chime:CreateCDRBucket. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] chime:CreateChannel. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateChannelBan">CreateChannelBan</a></code> | <code>string</code> | [Write] chime:CreateChannelBan. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateChannelFlow">CreateChannelFlow</a></code> | <code>string</code> | [Write] chime:CreateChannelFlow. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateChannelMembership">CreateChannelMembership</a></code> | <code>string</code> | [Write] chime:CreateChannelMembership. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateChannelModerator">CreateChannelModerator</a></code> | <code>string</code> | [Write] chime:CreateChannelModerator. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateConnectAnalyticsConnector">CreateConnectAnalyticsConnector</a></code> | <code>string</code> | [Write] chime:CreateConnectAnalyticsConnector. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateConnectCallTransferConnector">CreateConnectCallTransferConnector</a></code> | <code>string</code> | [Write] chime:CreateConnectCallTransferConnector. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMediaCapturePipeline">CreateMediaCapturePipeline</a></code> | <code>string</code> | [Write] chime:CreateMediaCapturePipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMediaConcatenationPipeline">CreateMediaConcatenationPipeline</a></code> | <code>string</code> | [Write] chime:CreateMediaConcatenationPipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMediaInsightsPipeline">CreateMediaInsightsPipeline</a></code> | <code>string</code> | [Write] chime:CreateMediaInsightsPipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMediaInsightsPipelineConfiguration">CreateMediaInsightsPipelineConfiguration</a></code> | <code>string</code> | [Write] chime:CreateMediaInsightsPipelineConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMediaLiveConnectorPipeline">CreateMediaLiveConnectorPipeline</a></code> | <code>string</code> | [Write] chime:CreateMediaLiveConnectorPipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMediaPipelineKinesisVideoStreamPool">CreateMediaPipelineKinesisVideoStreamPool</a></code> | <code>string</code> | [Write] chime:CreateMediaPipelineKinesisVideoStreamPool. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMediaStreamPipeline">CreateMediaStreamPipeline</a></code> | <code>string</code> | [Write] chime:CreateMediaStreamPipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMeeting">CreateMeeting</a></code> | <code>string</code> | [Write] chime:CreateMeeting. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMeetingDialOut">CreateMeetingDialOut</a></code> | <code>string</code> | [Write] chime:CreateMeetingDialOut. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateMeetingWithAttendees">CreateMeetingWithAttendees</a></code> | <code>string</code> | [Write] chime:CreateMeetingWithAttendees. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreatePhoneNumberOrder">CreatePhoneNumberOrder</a></code> | <code>string</code> | [Write] chime:CreatePhoneNumberOrder. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateProxySession">CreateProxySession</a></code> | <code>string</code> | [Write] chime:CreateProxySession. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateRoom">CreateRoom</a></code> | <code>string</code> | [Write] chime:CreateRoom. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateRoomMembership">CreateRoomMembership</a></code> | <code>string</code> | [Write] chime:CreateRoomMembership. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateSipMediaApplication">CreateSipMediaApplication</a></code> | <code>string</code> | [Write] chime:CreateSipMediaApplication. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateSipMediaApplicationCall">CreateSipMediaApplicationCall</a></code> | <code>string</code> | [Write] chime:CreateSipMediaApplicationCall. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateSipRule">CreateSipRule</a></code> | <code>string</code> | [Write] chime:CreateSipRule. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] chime:CreateUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateVoiceConnector">CreateVoiceConnector</a></code> | <code>string</code> | [Write] chime:CreateVoiceConnector. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateVoiceConnectorGroup">CreateVoiceConnectorGroup</a></code> | <code>string</code> | [Write] chime:CreateVoiceConnectorGroup. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateVoiceProfile">CreateVoiceProfile</a></code> | <code>string</code> | [Write] chime:CreateVoiceProfile. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.CreateVoiceProfileDomain">CreateVoiceProfileDomain</a></code> | <code>string</code> | [Write] chime:CreateVoiceProfileDomain. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteAccount">DeleteAccount</a></code> | <code>string</code> | [Write] chime:DeleteAccount. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteAccountOpenIdConfig">DeleteAccountOpenIdConfig</a></code> | <code>string</code> | [Write] chime:DeleteAccountOpenIdConfig. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteApiKey">DeleteApiKey</a></code> | <code>string</code> | [Write] chime:DeleteApiKey. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstance">DeleteAppInstance</a></code> | <code>string</code> | [Write] chime:DeleteAppInstance. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstanceAdmin">DeleteAppInstanceAdmin</a></code> | <code>string</code> | [Write] chime:DeleteAppInstanceAdmin. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstanceBot">DeleteAppInstanceBot</a></code> | <code>string</code> | [Write] chime:DeleteAppInstanceBot. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstanceStreamingConfigurations">DeleteAppInstanceStreamingConfigurations</a></code> | <code>string</code> | [Write] chime:DeleteAppInstanceStreamingConfigurations. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstanceUser">DeleteAppInstanceUser</a></code> | <code>string</code> | [Write] chime:DeleteAppInstanceUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteAttendee">DeleteAttendee</a></code> | <code>string</code> | [Write] chime:DeleteAttendee. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteCDRBucket">DeleteCDRBucket</a></code> | <code>string</code> | [Write] chime:DeleteCDRBucket. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] chime:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelBan">DeleteChannelBan</a></code> | <code>string</code> | [Write] chime:DeleteChannelBan. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelFlow">DeleteChannelFlow</a></code> | <code>string</code> | [Write] chime:DeleteChannelFlow. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelMembership">DeleteChannelMembership</a></code> | <code>string</code> | [Write] chime:DeleteChannelMembership. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelMessage">DeleteChannelMessage</a></code> | <code>string</code> | [Write] chime:DeleteChannelMessage. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelModerator">DeleteChannelModerator</a></code> | <code>string</code> | [Write] chime:DeleteChannelModerator. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteDelegate">DeleteDelegate</a></code> | <code>string</code> | [Write] chime:DeleteDelegate. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] chime:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteEventsConfiguration">DeleteEventsConfiguration</a></code> | <code>string</code> | [Write] chime:DeleteEventsConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteGroups">DeleteGroups</a></code> | <code>string</code> | [Write] chime:DeleteGroups. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteMediaCapturePipeline">DeleteMediaCapturePipeline</a></code> | <code>string</code> | [Write] chime:DeleteMediaCapturePipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteMediaInsightsPipelineConfiguration">DeleteMediaInsightsPipelineConfiguration</a></code> | <code>string</code> | [Write] chime:DeleteMediaInsightsPipelineConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteMediaPipeline">DeleteMediaPipeline</a></code> | <code>string</code> | [Write] chime:DeleteMediaPipeline. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteMediaPipelineKinesisVideoStreamPool">DeleteMediaPipelineKinesisVideoStreamPool</a></code> | <code>string</code> | [Write] chime:DeleteMediaPipelineKinesisVideoStreamPool. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteMeeting">DeleteMeeting</a></code> | <code>string</code> | [Write] chime:DeleteMeeting. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteMessagingStreamingConfigurations">DeleteMessagingStreamingConfigurations</a></code> | <code>string</code> | [Write] chime:DeleteMessagingStreamingConfigurations. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeletePhoneNumber">DeletePhoneNumber</a></code> | <code>string</code> | [Write] chime:DeletePhoneNumber. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteProxySession">DeleteProxySession</a></code> | <code>string</code> | [Write] chime:DeleteProxySession. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteRoom">DeleteRoom</a></code> | <code>string</code> | [Write] chime:DeleteRoom. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteRoomMembership">DeleteRoomMembership</a></code> | <code>string</code> | [Write] chime:DeleteRoomMembership. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteSipMediaApplication">DeleteSipMediaApplication</a></code> | <code>string</code> | [Write] chime:DeleteSipMediaApplication. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteSipRule">DeleteSipRule</a></code> | <code>string</code> | [Write] chime:DeleteSipRule. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnector">DeleteVoiceConnector</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnector. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorEmergencyCallingConfiguration">DeleteVoiceConnectorEmergencyCallingConfiguration</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnectorEmergencyCallingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorExternalSystemsConfiguration">DeleteVoiceConnectorExternalSystemsConfiguration</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnectorExternalSystemsConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorGroup">DeleteVoiceConnectorGroup</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnectorGroup. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorOrigination">DeleteVoiceConnectorOrigination</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnectorOrigination. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorProxy">DeleteVoiceConnectorProxy</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnectorProxy. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorStreamingConfiguration">DeleteVoiceConnectorStreamingConfiguration</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnectorStreamingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorTermination">DeleteVoiceConnectorTermination</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnectorTermination. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorTerminationCredentials">DeleteVoiceConnectorTerminationCredentials</a></code> | <code>string</code> | [Write] chime:DeleteVoiceConnectorTerminationCredentials. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceProfile">DeleteVoiceProfile</a></code> | <code>string</code> | [Write] chime:DeleteVoiceProfile. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceProfileDomain">DeleteVoiceProfileDomain</a></code> | <code>string</code> | [Write] chime:DeleteVoiceProfileDomain. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DeregisterAppInstanceUserEndpoint">DeregisterAppInstanceUserEndpoint</a></code> | <code>string</code> | [Write] chime:DeregisterAppInstanceUserEndpoint. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstance">DescribeAppInstance</a></code> | <code>string</code> | [Read] chime:DescribeAppInstance. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstanceAdmin">DescribeAppInstanceAdmin</a></code> | <code>string</code> | [Read] chime:DescribeAppInstanceAdmin. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstanceBot">DescribeAppInstanceBot</a></code> | <code>string</code> | [Read] chime:DescribeAppInstanceBot. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstanceUser">DescribeAppInstanceUser</a></code> | <code>string</code> | [Read] chime:DescribeAppInstanceUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstanceUserEndpoint">DescribeAppInstanceUserEndpoint</a></code> | <code>string</code> | [Read] chime:DescribeAppInstanceUserEndpoint. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeChannel">DescribeChannel</a></code> | <code>string</code> | [Read] chime:DescribeChannel. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelBan">DescribeChannelBan</a></code> | <code>string</code> | [Read] chime:DescribeChannelBan. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelFlow">DescribeChannelFlow</a></code> | <code>string</code> | [Read] chime:DescribeChannelFlow. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelMembership">DescribeChannelMembership</a></code> | <code>string</code> | [Read] chime:DescribeChannelMembership. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelMembershipForAppInstanceUser">DescribeChannelMembershipForAppInstanceUser</a></code> | <code>string</code> | [Read] chime:DescribeChannelMembershipForAppInstanceUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelModeratedByAppInstanceUser">DescribeChannelModeratedByAppInstanceUser</a></code> | <code>string</code> | [Read] chime:DescribeChannelModeratedByAppInstanceUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelModerator">DescribeChannelModerator</a></code> | <code>string</code> | [Read] chime:DescribeChannelModerator. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DisassociateChannelFlow">DisassociateChannelFlow</a></code> | <code>string</code> | [Write] chime:DisassociateChannelFlow. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DisassociatePhoneNumberFromUser">DisassociatePhoneNumberFromUser</a></code> | <code>string</code> | [Write] chime:DisassociatePhoneNumberFromUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DisassociatePhoneNumbersFromVoiceConnector">DisassociatePhoneNumbersFromVoiceConnector</a></code> | <code>string</code> | [Write] chime:DisassociatePhoneNumbersFromVoiceConnector. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DisassociatePhoneNumbersFromVoiceConnectorGroup">DisassociatePhoneNumbersFromVoiceConnectorGroup</a></code> | <code>string</code> | [Write] chime:DisassociatePhoneNumbersFromVoiceConnectorGroup. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DisassociateSigninDelegateGroupsFromAccount">DisassociateSigninDelegateGroupsFromAccount</a></code> | <code>string</code> | [Write] chime:DisassociateSigninDelegateGroupsFromAccount. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DisassociateVoiceConnectorConnect">DisassociateVoiceConnectorConnect</a></code> | <code>string</code> | [Write] chime:DisassociateVoiceConnectorConnect. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.DisconnectDirectory">DisconnectDirectory</a></code> | <code>string</code> | [Write] chime:DisconnectDirectory. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.InviteDelegate">InviteDelegate</a></code> | <code>string</code> | [Write] chime:InviteDelegate. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.InviteUsers">InviteUsers</a></code> | <code>string</code> | [Write] chime:InviteUsers. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.InviteUsersFromProvider">InviteUsersFromProvider</a></code> | <code>string</code> | [Write] chime:InviteUsersFromProvider. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAccounts">ListAccounts</a></code> | <code>string</code> | [List] chime:ListAccounts. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAccountUsageReportData">ListAccountUsageReportData</a></code> | <code>string</code> | [List] chime:ListAccountUsageReportData. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListApiKeys">ListApiKeys</a></code> | <code>string</code> | [List] chime:ListApiKeys. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAppInstanceAdmins">ListAppInstanceAdmins</a></code> | <code>string</code> | [List] chime:ListAppInstanceAdmins. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAppInstanceBots">ListAppInstanceBots</a></code> | <code>string</code> | [List] chime:ListAppInstanceBots. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAppInstances">ListAppInstances</a></code> | <code>string</code> | [List] chime:ListAppInstances. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAppInstanceUserEndpoints">ListAppInstanceUserEndpoints</a></code> | <code>string</code> | [List] chime:ListAppInstanceUserEndpoints. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAppInstanceUsers">ListAppInstanceUsers</a></code> | <code>string</code> | [List] chime:ListAppInstanceUsers. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAttendees">ListAttendees</a></code> | <code>string</code> | [List] chime:ListAttendees. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAttendeeTags">ListAttendeeTags</a></code> | <code>string</code> | [List] chime:ListAttendeeTags. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListAvailableVoiceConnectorRegions">ListAvailableVoiceConnectorRegions</a></code> | <code>string</code> | [List] chime:ListAvailableVoiceConnectorRegions. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListBots">ListBots</a></code> | <code>string</code> | [List] chime:ListBots. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListCallingRegions">ListCallingRegions</a></code> | <code>string</code> | [List] chime:ListCallingRegions. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListCDRBucket">ListCDRBucket</a></code> | <code>string</code> | [List] chime:ListCDRBucket. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannelBans">ListChannelBans</a></code> | <code>string</code> | [List] chime:ListChannelBans. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannelFlows">ListChannelFlows</a></code> | <code>string</code> | [List] chime:ListChannelFlows. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannelMemberships">ListChannelMemberships</a></code> | <code>string</code> | [List] chime:ListChannelMemberships. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannelMembershipsForAppInstanceUser">ListChannelMembershipsForAppInstanceUser</a></code> | <code>string</code> | [List] chime:ListChannelMembershipsForAppInstanceUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannelMessages">ListChannelMessages</a></code> | <code>string</code> | [Read] chime:ListChannelMessages. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannelModerators">ListChannelModerators</a></code> | <code>string</code> | [List] chime:ListChannelModerators. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [List] chime:ListChannels. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannelsAssociatedWithChannelFlow">ListChannelsAssociatedWithChannelFlow</a></code> | <code>string</code> | [List] chime:ListChannelsAssociatedWithChannelFlow. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListChannelsModeratedByAppInstanceUser">ListChannelsModeratedByAppInstanceUser</a></code> | <code>string</code> | [List] chime:ListChannelsModeratedByAppInstanceUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListDelegates">ListDelegates</a></code> | <code>string</code> | [List] chime:ListDelegates. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListDirectories">ListDirectories</a></code> | <code>string</code> | [List] chime:ListDirectories. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] chime:ListDomains. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] chime:ListGroups. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListMediaCapturePipelines">ListMediaCapturePipelines</a></code> | <code>string</code> | [List] chime:ListMediaCapturePipelines. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListMediaInsightsPipelineConfigurations">ListMediaInsightsPipelineConfigurations</a></code> | <code>string</code> | [List] chime:ListMediaInsightsPipelineConfigurations. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListMediaPipelineKinesisVideoStreamPools">ListMediaPipelineKinesisVideoStreamPools</a></code> | <code>string</code> | [List] chime:ListMediaPipelineKinesisVideoStreamPools. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListMediaPipelines">ListMediaPipelines</a></code> | <code>string</code> | [List] chime:ListMediaPipelines. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListMeetingEvents">ListMeetingEvents</a></code> | <code>string</code> | [List] chime:ListMeetingEvents. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListMeetings">ListMeetings</a></code> | <code>string</code> | [List] chime:ListMeetings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListMeetingsReportData">ListMeetingsReportData</a></code> | <code>string</code> | [List] chime:ListMeetingsReportData. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListMeetingTags">ListMeetingTags</a></code> | <code>string</code> | [List] chime:ListMeetingTags. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListPhoneNumberOrders">ListPhoneNumberOrders</a></code> | <code>string</code> | [List] chime:ListPhoneNumberOrders. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListPhoneNumbers">ListPhoneNumbers</a></code> | <code>string</code> | [List] chime:ListPhoneNumbers. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListProxySessions">ListProxySessions</a></code> | <code>string</code> | [List] chime:ListProxySessions. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListRoomMemberships">ListRoomMemberships</a></code> | <code>string</code> | [List] chime:ListRoomMemberships. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListRooms">ListRooms</a></code> | <code>string</code> | [List] chime:ListRooms. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListSipMediaApplications">ListSipMediaApplications</a></code> | <code>string</code> | [List] chime:ListSipMediaApplications. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListSipRules">ListSipRules</a></code> | <code>string</code> | [List] chime:ListSipRules. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListSubChannels">ListSubChannels</a></code> | <code>string</code> | [List] chime:ListSubChannels. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListSupportedPhoneNumberCountries">ListSupportedPhoneNumberCountries</a></code> | <code>string</code> | [List] chime:ListSupportedPhoneNumberCountries. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] chime:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] chime:ListUsers. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListVoiceConnectorGroups">ListVoiceConnectorGroups</a></code> | <code>string</code> | [List] chime:ListVoiceConnectorGroups. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListVoiceConnectors">ListVoiceConnectors</a></code> | <code>string</code> | [List] chime:ListVoiceConnectors. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListVoiceConnectorTerminationCredentials">ListVoiceConnectorTerminationCredentials</a></code> | <code>string</code> | [List] chime:ListVoiceConnectorTerminationCredentials. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListVoiceProfileDomains">ListVoiceProfileDomains</a></code> | <code>string</code> | [List] chime:ListVoiceProfileDomains. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ListVoiceProfiles">ListVoiceProfiles</a></code> | <code>string</code> | [List] chime:ListVoiceProfiles. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.LogoutUser">LogoutUser</a></code> | <code>string</code> | [Write] chime:LogoutUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutAppInstanceRetentionSettings">PutAppInstanceRetentionSettings</a></code> | <code>string</code> | [Write] chime:PutAppInstanceRetentionSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutAppInstanceStreamingConfigurations">PutAppInstanceStreamingConfigurations</a></code> | <code>string</code> | [Write] chime:PutAppInstanceStreamingConfigurations. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutAppInstanceUserExpirationSettings">PutAppInstanceUserExpirationSettings</a></code> | <code>string</code> | [Write] chime:PutAppInstanceUserExpirationSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutChannelExpirationSettings">PutChannelExpirationSettings</a></code> | <code>string</code> | [Write] chime:PutChannelExpirationSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutChannelMembershipPreferences">PutChannelMembershipPreferences</a></code> | <code>string</code> | [Write] chime:PutChannelMembershipPreferences. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutEventsConfiguration">PutEventsConfiguration</a></code> | <code>string</code> | [Write] chime:PutEventsConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutMessagingStreamingConfigurations">PutMessagingStreamingConfigurations</a></code> | <code>string</code> | [Write] chime:PutMessagingStreamingConfigurations. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutRetentionSettings">PutRetentionSettings</a></code> | <code>string</code> | [Write] chime:PutRetentionSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutSipMediaApplicationAlexaSkillConfiguration">PutSipMediaApplicationAlexaSkillConfiguration</a></code> | <code>string</code> | [Write] chime:PutSipMediaApplicationAlexaSkillConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutSipMediaApplicationLoggingConfiguration">PutSipMediaApplicationLoggingConfiguration</a></code> | <code>string</code> | [Write] chime:PutSipMediaApplicationLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorEmergencyCallingConfiguration">PutVoiceConnectorEmergencyCallingConfiguration</a></code> | <code>string</code> | [Write] chime:PutVoiceConnectorEmergencyCallingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorExternalSystemsConfiguration">PutVoiceConnectorExternalSystemsConfiguration</a></code> | <code>string</code> | [Write] chime:PutVoiceConnectorExternalSystemsConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorLoggingConfiguration">PutVoiceConnectorLoggingConfiguration</a></code> | <code>string</code> | [Write] chime:PutVoiceConnectorLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorOrigination">PutVoiceConnectorOrigination</a></code> | <code>string</code> | [Write] chime:PutVoiceConnectorOrigination. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorProxy">PutVoiceConnectorProxy</a></code> | <code>string</code> | [Write] chime:PutVoiceConnectorProxy. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorStreamingConfiguration">PutVoiceConnectorStreamingConfiguration</a></code> | <code>string</code> | [Write] chime:PutVoiceConnectorStreamingConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorTermination">PutVoiceConnectorTermination</a></code> | <code>string</code> | [Write] chime:PutVoiceConnectorTermination. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorTerminationCredentials">PutVoiceConnectorTerminationCredentials</a></code> | <code>string</code> | [Write] chime:PutVoiceConnectorTerminationCredentials. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RedactChannelMessage">RedactChannelMessage</a></code> | <code>string</code> | [Write] chime:RedactChannelMessage. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RedactConversationMessage">RedactConversationMessage</a></code> | <code>string</code> | [Write] chime:RedactConversationMessage. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RedactRoomMessage">RedactRoomMessage</a></code> | <code>string</code> | [Write] chime:RedactRoomMessage. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RegenerateSecurityToken">RegenerateSecurityToken</a></code> | <code>string</code> | [Write] chime:RegenerateSecurityToken. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RegisterAppInstanceUserEndpoint">RegisterAppInstanceUserEndpoint</a></code> | <code>string</code> | [Write] chime:RegisterAppInstanceUserEndpoint. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RenameAccount">RenameAccount</a></code> | <code>string</code> | [Write] chime:RenameAccount. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RenewDelegate">RenewDelegate</a></code> | <code>string</code> | [Write] chime:RenewDelegate. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ResetAccountResource">ResetAccountResource</a></code> | <code>string</code> | [Write] chime:ResetAccountResource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ResetPersonalPIN">ResetPersonalPIN</a></code> | <code>string</code> | [Write] chime:ResetPersonalPIN. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RestorePhoneNumber">RestorePhoneNumber</a></code> | <code>string</code> | [Write] chime:RestorePhoneNumber. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.RetrieveDataExports">RetrieveDataExports</a></code> | <code>string</code> | [Read] chime:RetrieveDataExports. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.SearchAvailablePhoneNumbers">SearchAvailablePhoneNumbers</a></code> | <code>string</code> | [Read] chime:SearchAvailablePhoneNumbers. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.SearchChannels">SearchChannels</a></code> | <code>string</code> | [List] chime:SearchChannels. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.SendChannelMessage">SendChannelMessage</a></code> | <code>string</code> | [Write] chime:SendChannelMessage. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.StartDataExport">StartDataExport</a></code> | <code>string</code> | [Write] chime:StartDataExport. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.StartMeetingTranscription">StartMeetingTranscription</a></code> | <code>string</code> | [Write] chime:StartMeetingTranscription. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.StartSpeakerSearchTask">StartSpeakerSearchTask</a></code> | <code>string</code> | [Write] chime:StartSpeakerSearchTask. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.StartVoiceToneAnalysisTask">StartVoiceToneAnalysisTask</a></code> | <code>string</code> | [Write] chime:StartVoiceToneAnalysisTask. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.StopMeetingTranscription">StopMeetingTranscription</a></code> | <code>string</code> | [Write] chime:StopMeetingTranscription. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.StopSpeakerSearchTask">StopSpeakerSearchTask</a></code> | <code>string</code> | [Write] chime:StopSpeakerSearchTask. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.StopVoiceToneAnalysisTask">StopVoiceToneAnalysisTask</a></code> | <code>string</code> | [Write] chime:StopVoiceToneAnalysisTask. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.SubmitSupportRequest">SubmitSupportRequest</a></code> | <code>string</code> | [Write] chime:SubmitSupportRequest. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.SuspendUsers">SuspendUsers</a></code> | <code>string</code> | [Write] chime:SuspendUsers. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.TagAttendee">TagAttendee</a></code> | <code>string</code> | [Tagging] chime:TagAttendee. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.TagMeeting">TagMeeting</a></code> | <code>string</code> | [Tagging] chime:TagMeeting. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] chime:TagResource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UnauthorizeDirectory">UnauthorizeDirectory</a></code> | <code>string</code> | [Write] chime:UnauthorizeDirectory. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UntagAttendee">UntagAttendee</a></code> | <code>string</code> | [Tagging] chime:UntagAttendee. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UntagMeeting">UntagMeeting</a></code> | <code>string</code> | [Tagging] chime:UntagMeeting. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] chime:UntagResource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAccount">UpdateAccount</a></code> | <code>string</code> | [Write] chime:UpdateAccount. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAccountOpenIdConfig">UpdateAccountOpenIdConfig</a></code> | <code>string</code> | [Write] chime:UpdateAccountOpenIdConfig. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAccountResource">UpdateAccountResource</a></code> | <code>string</code> | [Write] chime:UpdateAccountResource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] chime:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAppInstance">UpdateAppInstance</a></code> | <code>string</code> | [Write] chime:UpdateAppInstance. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAppInstanceBot">UpdateAppInstanceBot</a></code> | <code>string</code> | [Write] chime:UpdateAppInstanceBot. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAppInstanceUser">UpdateAppInstanceUser</a></code> | <code>string</code> | [Write] chime:UpdateAppInstanceUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAppInstanceUserEndpoint">UpdateAppInstanceUserEndpoint</a></code> | <code>string</code> | [Write] chime:UpdateAppInstanceUserEndpoint. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateAttendeeCapabilities">UpdateAttendeeCapabilities</a></code> | <code>string</code> | [Write] chime:UpdateAttendeeCapabilities. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateBot">UpdateBot</a></code> | <code>string</code> | [Write] chime:UpdateBot. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateCDRSettings">UpdateCDRSettings</a></code> | <code>string</code> | [Write] chime:UpdateCDRSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] chime:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateChannelFlow">UpdateChannelFlow</a></code> | <code>string</code> | [Write] chime:UpdateChannelFlow. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateChannelMessage">UpdateChannelMessage</a></code> | <code>string</code> | [Write] chime:UpdateChannelMessage. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateChannelReadMarker">UpdateChannelReadMarker</a></code> | <code>string</code> | [Write] chime:UpdateChannelReadMarker. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateGlobalSettings">UpdateGlobalSettings</a></code> | <code>string</code> | [Write] chime:UpdateGlobalSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateMediaInsightsPipelineConfiguration">UpdateMediaInsightsPipelineConfiguration</a></code> | <code>string</code> | [Write] chime:UpdateMediaInsightsPipelineConfiguration. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateMediaInsightsPipelineStatus">UpdateMediaInsightsPipelineStatus</a></code> | <code>string</code> | [Write] chime:UpdateMediaInsightsPipelineStatus. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateMediaPipelineKinesisVideoStreamPool">UpdateMediaPipelineKinesisVideoStreamPool</a></code> | <code>string</code> | [Write] chime:UpdateMediaPipelineKinesisVideoStreamPool. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdatePhoneNumber">UpdatePhoneNumber</a></code> | <code>string</code> | [Write] chime:UpdatePhoneNumber. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdatePhoneNumberSettings">UpdatePhoneNumberSettings</a></code> | <code>string</code> | [Write] chime:UpdatePhoneNumberSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateProxySession">UpdateProxySession</a></code> | <code>string</code> | [Write] chime:UpdateProxySession. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateRoom">UpdateRoom</a></code> | <code>string</code> | [Write] chime:UpdateRoom. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateRoomMembership">UpdateRoomMembership</a></code> | <code>string</code> | [Write] chime:UpdateRoomMembership. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateSipMediaApplication">UpdateSipMediaApplication</a></code> | <code>string</code> | [Write] chime:UpdateSipMediaApplication. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateSipMediaApplicationCall">UpdateSipMediaApplicationCall</a></code> | <code>string</code> | [Write] chime:UpdateSipMediaApplicationCall. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateSipRule">UpdateSipRule</a></code> | <code>string</code> | [Write] chime:UpdateSipRule. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateSupportedLicenses">UpdateSupportedLicenses</a></code> | <code>string</code> | [Write] chime:UpdateSupportedLicenses. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] chime:UpdateUser. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateUserLicenses">UpdateUserLicenses</a></code> | <code>string</code> | [Write] chime:UpdateUserLicenses. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateUserSettings">UpdateUserSettings</a></code> | <code>string</code> | [Write] chime:UpdateUserSettings. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateVoiceConnector">UpdateVoiceConnector</a></code> | <code>string</code> | [Write] chime:UpdateVoiceConnector. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateVoiceConnectorGroup">UpdateVoiceConnectorGroup</a></code> | <code>string</code> | [Write] chime:UpdateVoiceConnectorGroup. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateVoiceProfile">UpdateVoiceProfile</a></code> | <code>string</code> | [Write] chime:UpdateVoiceProfile. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.UpdateVoiceProfileDomain">UpdateVoiceProfileDomain</a></code> | <code>string</code> | [Write] chime:UpdateVoiceProfileDomain. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ValidateAccountResource">ValidateAccountResource</a></code> | <code>string</code> | [Read] chime:ValidateAccountResource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeActions.property.ValidateE911Address">ValidateE911Address</a></code> | <code>string</code> | [Read] chime:ValidateE911Address. |

---

##### `AcceptDelegate`<sup>Required</sup> <a name="AcceptDelegate" id="@cdk_utils/iam.chime.ChimeActions.property.AcceptDelegate"></a>

```typescript
public readonly AcceptDelegate: string;
```

- *Type:* string

[Write] chime:AcceptDelegate.

---

##### `actionGetAccount`<sup>Required</sup> <a name="actionGetAccount" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetAccount"></a>

```typescript
public readonly actionGetAccount: string;
```

- *Type:* string

[Read] chime:GetAccount.

---

##### `actionGetAccountResource`<sup>Required</sup> <a name="actionGetAccountResource" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetAccountResource"></a>

```typescript
public readonly actionGetAccountResource: string;
```

- *Type:* string

[Read] chime:GetAccountResource.

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] chime:GetAccountSettings.

---

##### `actionGetAccountWithOpenIdConfig`<sup>Required</sup> <a name="actionGetAccountWithOpenIdConfig" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetAccountWithOpenIdConfig"></a>

```typescript
public readonly actionGetAccountWithOpenIdConfig: string;
```

- *Type:* string

[Read] chime:GetAccountWithOpenIdConfig.

---

##### `actionGetAppInstanceRetentionSettings`<sup>Required</sup> <a name="actionGetAppInstanceRetentionSettings" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetAppInstanceRetentionSettings"></a>

```typescript
public readonly actionGetAppInstanceRetentionSettings: string;
```

- *Type:* string

[Read] chime:GetAppInstanceRetentionSettings.

---

##### `actionGetAppInstanceStreamingConfigurations`<sup>Required</sup> <a name="actionGetAppInstanceStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetAppInstanceStreamingConfigurations"></a>

```typescript
public readonly actionGetAppInstanceStreamingConfigurations: string;
```

- *Type:* string

[Read] chime:GetAppInstanceStreamingConfigurations.

---

##### `actionGetAttendee`<sup>Required</sup> <a name="actionGetAttendee" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetAttendee"></a>

```typescript
public readonly actionGetAttendee: string;
```

- *Type:* string

[Read] chime:GetAttendee.

---

##### `actionGetBot`<sup>Required</sup> <a name="actionGetBot" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetBot"></a>

```typescript
public readonly actionGetBot: string;
```

- *Type:* string

[Read] chime:GetBot.

---

##### `actionGetCDRBucket`<sup>Required</sup> <a name="actionGetCDRBucket" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetCDRBucket"></a>

```typescript
public readonly actionGetCDRBucket: string;
```

- *Type:* string

[Read] chime:GetCDRBucket.

---

##### `actionGetChannelMembershipPreferences`<sup>Required</sup> <a name="actionGetChannelMembershipPreferences" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetChannelMembershipPreferences"></a>

```typescript
public readonly actionGetChannelMembershipPreferences: string;
```

- *Type:* string

[Read] chime:GetChannelMembershipPreferences.

---

##### `actionGetChannelMessage`<sup>Required</sup> <a name="actionGetChannelMessage" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetChannelMessage"></a>

```typescript
public readonly actionGetChannelMessage: string;
```

- *Type:* string

[Read] chime:GetChannelMessage.

---

##### `actionGetChannelMessageStatus`<sup>Required</sup> <a name="actionGetChannelMessageStatus" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetChannelMessageStatus"></a>

```typescript
public readonly actionGetChannelMessageStatus: string;
```

- *Type:* string

[Read] chime:GetChannelMessageStatus.

---

##### `actionGetDomain`<sup>Required</sup> <a name="actionGetDomain" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetDomain"></a>

```typescript
public readonly actionGetDomain: string;
```

- *Type:* string

[Read] chime:GetDomain.

---

##### `actionGetEventsConfiguration`<sup>Required</sup> <a name="actionGetEventsConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetEventsConfiguration"></a>

```typescript
public readonly actionGetEventsConfiguration: string;
```

- *Type:* string

[Read] chime:GetEventsConfiguration.

---

##### `actionGetGlobalSettings`<sup>Required</sup> <a name="actionGetGlobalSettings" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetGlobalSettings"></a>

```typescript
public readonly actionGetGlobalSettings: string;
```

- *Type:* string

[Read] chime:GetGlobalSettings.

---

##### `actionGetMediaCapturePipeline`<sup>Required</sup> <a name="actionGetMediaCapturePipeline" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetMediaCapturePipeline"></a>

```typescript
public readonly actionGetMediaCapturePipeline: string;
```

- *Type:* string

[Read] chime:GetMediaCapturePipeline.

---

##### `actionGetMediaInsightsPipelineConfiguration`<sup>Required</sup> <a name="actionGetMediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetMediaInsightsPipelineConfiguration"></a>

```typescript
public readonly actionGetMediaInsightsPipelineConfiguration: string;
```

- *Type:* string

[Read] chime:GetMediaInsightsPipelineConfiguration.

---

##### `actionGetMediaPipeline`<sup>Required</sup> <a name="actionGetMediaPipeline" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetMediaPipeline"></a>

```typescript
public readonly actionGetMediaPipeline: string;
```

- *Type:* string

[Read] chime:GetMediaPipeline.

---

##### `actionGetMediaPipelineKinesisVideoStreamPool`<sup>Required</sup> <a name="actionGetMediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetMediaPipelineKinesisVideoStreamPool"></a>

```typescript
public readonly actionGetMediaPipelineKinesisVideoStreamPool: string;
```

- *Type:* string

[Read] chime:GetMediaPipelineKinesisVideoStreamPool.

---

##### `actionGetMeeting`<sup>Required</sup> <a name="actionGetMeeting" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetMeeting"></a>

```typescript
public readonly actionGetMeeting: string;
```

- *Type:* string

[Read] chime:GetMeeting.

---

##### `actionGetMeetingDetail`<sup>Required</sup> <a name="actionGetMeetingDetail" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetMeetingDetail"></a>

```typescript
public readonly actionGetMeetingDetail: string;
```

- *Type:* string

[Read] chime:GetMeetingDetail.

---

##### `actionGetMessagingSessionEndpoint`<sup>Required</sup> <a name="actionGetMessagingSessionEndpoint" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetMessagingSessionEndpoint"></a>

```typescript
public readonly actionGetMessagingSessionEndpoint: string;
```

- *Type:* string

[Read] chime:GetMessagingSessionEndpoint.

---

##### `actionGetMessagingStreamingConfigurations`<sup>Required</sup> <a name="actionGetMessagingStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetMessagingStreamingConfigurations"></a>

```typescript
public readonly actionGetMessagingStreamingConfigurations: string;
```

- *Type:* string

[Read] chime:GetMessagingStreamingConfigurations.

---

##### `actionGetPhoneNumber`<sup>Required</sup> <a name="actionGetPhoneNumber" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetPhoneNumber"></a>

```typescript
public readonly actionGetPhoneNumber: string;
```

- *Type:* string

[Read] chime:GetPhoneNumber.

---

##### `actionGetPhoneNumberOrder`<sup>Required</sup> <a name="actionGetPhoneNumberOrder" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetPhoneNumberOrder"></a>

```typescript
public readonly actionGetPhoneNumberOrder: string;
```

- *Type:* string

[Read] chime:GetPhoneNumberOrder.

---

##### `actionGetPhoneNumberSettings`<sup>Required</sup> <a name="actionGetPhoneNumberSettings" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetPhoneNumberSettings"></a>

```typescript
public readonly actionGetPhoneNumberSettings: string;
```

- *Type:* string

[Read] chime:GetPhoneNumberSettings.

---

##### `actionGetProxySession`<sup>Required</sup> <a name="actionGetProxySession" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetProxySession"></a>

```typescript
public readonly actionGetProxySession: string;
```

- *Type:* string

[Read] chime:GetProxySession.

---

##### `actionGetRetentionSettings`<sup>Required</sup> <a name="actionGetRetentionSettings" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetRetentionSettings"></a>

```typescript
public readonly actionGetRetentionSettings: string;
```

- *Type:* string

[Read] chime:GetRetentionSettings.

---

##### `actionGetRoom`<sup>Required</sup> <a name="actionGetRoom" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetRoom"></a>

```typescript
public readonly actionGetRoom: string;
```

- *Type:* string

[Read] chime:GetRoom.

---

##### `actionGetSipMediaApplication`<sup>Required</sup> <a name="actionGetSipMediaApplication" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetSipMediaApplication"></a>

```typescript
public readonly actionGetSipMediaApplication: string;
```

- *Type:* string

[Read] chime:GetSipMediaApplication.

---

##### `actionGetSipMediaApplicationAlexaSkillConfiguration`<sup>Required</sup> <a name="actionGetSipMediaApplicationAlexaSkillConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetSipMediaApplicationAlexaSkillConfiguration"></a>

```typescript
public readonly actionGetSipMediaApplicationAlexaSkillConfiguration: string;
```

- *Type:* string

[Read] chime:GetSipMediaApplicationAlexaSkillConfiguration.

---

##### `actionGetSipMediaApplicationLoggingConfiguration`<sup>Required</sup> <a name="actionGetSipMediaApplicationLoggingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetSipMediaApplicationLoggingConfiguration"></a>

```typescript
public readonly actionGetSipMediaApplicationLoggingConfiguration: string;
```

- *Type:* string

[Read] chime:GetSipMediaApplicationLoggingConfiguration.

---

##### `actionGetSipRule`<sup>Required</sup> <a name="actionGetSipRule" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetSipRule"></a>

```typescript
public readonly actionGetSipRule: string;
```

- *Type:* string

[Read] chime:GetSipRule.

---

##### `actionGetSpeakerSearchTask`<sup>Required</sup> <a name="actionGetSpeakerSearchTask" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetSpeakerSearchTask"></a>

```typescript
public readonly actionGetSpeakerSearchTask: string;
```

- *Type:* string

[Read] chime:GetSpeakerSearchTask.

---

##### `actionGetTelephonyLimits`<sup>Required</sup> <a name="actionGetTelephonyLimits" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetTelephonyLimits"></a>

```typescript
public readonly actionGetTelephonyLimits: string;
```

- *Type:* string

[Read] chime:GetTelephonyLimits.

---

##### `actionGetUser`<sup>Required</sup> <a name="actionGetUser" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetUser"></a>

```typescript
public readonly actionGetUser: string;
```

- *Type:* string

[Read] chime:GetUser.

---

##### `actionGetUserActivityReportData`<sup>Required</sup> <a name="actionGetUserActivityReportData" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetUserActivityReportData"></a>

```typescript
public readonly actionGetUserActivityReportData: string;
```

- *Type:* string

[Read] chime:GetUserActivityReportData.

---

##### `actionGetUserByEmail`<sup>Required</sup> <a name="actionGetUserByEmail" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetUserByEmail"></a>

```typescript
public readonly actionGetUserByEmail: string;
```

- *Type:* string

[Read] chime:GetUserByEmail.

---

##### `actionGetUserSettings`<sup>Required</sup> <a name="actionGetUserSettings" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetUserSettings"></a>

```typescript
public readonly actionGetUserSettings: string;
```

- *Type:* string

[Read] chime:GetUserSettings.

---

##### `actionGetVoiceConnector`<sup>Required</sup> <a name="actionGetVoiceConnector" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnector"></a>

```typescript
public readonly actionGetVoiceConnector: string;
```

- *Type:* string

[Read] chime:GetVoiceConnector.

---

##### `actionGetVoiceConnectorEmergencyCallingConfiguration`<sup>Required</sup> <a name="actionGetVoiceConnectorEmergencyCallingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public readonly actionGetVoiceConnectorEmergencyCallingConfiguration: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorEmergencyCallingConfiguration.

---

##### `actionGetVoiceConnectorExternalSystemsConfiguration`<sup>Required</sup> <a name="actionGetVoiceConnectorExternalSystemsConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorExternalSystemsConfiguration"></a>

```typescript
public readonly actionGetVoiceConnectorExternalSystemsConfiguration: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorExternalSystemsConfiguration.

---

##### `actionGetVoiceConnectorGroup`<sup>Required</sup> <a name="actionGetVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorGroup"></a>

```typescript
public readonly actionGetVoiceConnectorGroup: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorGroup.

---

##### `actionGetVoiceConnectorLoggingConfiguration`<sup>Required</sup> <a name="actionGetVoiceConnectorLoggingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorLoggingConfiguration"></a>

```typescript
public readonly actionGetVoiceConnectorLoggingConfiguration: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorLoggingConfiguration.

---

##### `actionGetVoiceConnectorOrigination`<sup>Required</sup> <a name="actionGetVoiceConnectorOrigination" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorOrigination"></a>

```typescript
public readonly actionGetVoiceConnectorOrigination: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorOrigination.

---

##### `actionGetVoiceConnectorProxy`<sup>Required</sup> <a name="actionGetVoiceConnectorProxy" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorProxy"></a>

```typescript
public readonly actionGetVoiceConnectorProxy: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorProxy.

---

##### `actionGetVoiceConnectorStreamingConfiguration`<sup>Required</sup> <a name="actionGetVoiceConnectorStreamingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorStreamingConfiguration"></a>

```typescript
public readonly actionGetVoiceConnectorStreamingConfiguration: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorStreamingConfiguration.

---

##### `actionGetVoiceConnectorTermination`<sup>Required</sup> <a name="actionGetVoiceConnectorTermination" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorTermination"></a>

```typescript
public readonly actionGetVoiceConnectorTermination: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorTermination.

---

##### `actionGetVoiceConnectorTerminationHealth`<sup>Required</sup> <a name="actionGetVoiceConnectorTerminationHealth" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceConnectorTerminationHealth"></a>

```typescript
public readonly actionGetVoiceConnectorTerminationHealth: string;
```

- *Type:* string

[Read] chime:GetVoiceConnectorTerminationHealth.

---

##### `actionGetVoiceProfile`<sup>Required</sup> <a name="actionGetVoiceProfile" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceProfile"></a>

```typescript
public readonly actionGetVoiceProfile: string;
```

- *Type:* string

[Read] chime:GetVoiceProfile.

---

##### `actionGetVoiceProfileDomain`<sup>Required</sup> <a name="actionGetVoiceProfileDomain" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceProfileDomain"></a>

```typescript
public readonly actionGetVoiceProfileDomain: string;
```

- *Type:* string

[Read] chime:GetVoiceProfileDomain.

---

##### `actionGetVoiceToneAnalysisTask`<sup>Required</sup> <a name="actionGetVoiceToneAnalysisTask" id="@cdk_utils/iam.chime.ChimeActions.property.actionGetVoiceToneAnalysisTask"></a>

```typescript
public readonly actionGetVoiceToneAnalysisTask: string;
```

- *Type:* string

[Read] chime:GetVoiceToneAnalysisTask.

---

##### `ActivateUsers`<sup>Required</sup> <a name="ActivateUsers" id="@cdk_utils/iam.chime.ChimeActions.property.ActivateUsers"></a>

```typescript
public readonly ActivateUsers: string;
```

- *Type:* string

[Write] chime:ActivateUsers.

---

##### `AddDomain`<sup>Required</sup> <a name="AddDomain" id="@cdk_utils/iam.chime.ChimeActions.property.AddDomain"></a>

```typescript
public readonly AddDomain: string;
```

- *Type:* string

[Write] chime:AddDomain.

---

##### `AddOrUpdateGroups`<sup>Required</sup> <a name="AddOrUpdateGroups" id="@cdk_utils/iam.chime.ChimeActions.property.AddOrUpdateGroups"></a>

```typescript
public readonly AddOrUpdateGroups: string;
```

- *Type:* string

[Write] chime:AddOrUpdateGroups.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.chime.ChimeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.chime.ChimeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.chime.ChimeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.chime.ChimeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.chime.ChimeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateChannelFlow`<sup>Required</sup> <a name="AssociateChannelFlow" id="@cdk_utils/iam.chime.ChimeActions.property.AssociateChannelFlow"></a>

```typescript
public readonly AssociateChannelFlow: string;
```

- *Type:* string

[Write] chime:AssociateChannelFlow.

---

##### `AssociatePhoneNumbersWithVoiceConnector`<sup>Required</sup> <a name="AssociatePhoneNumbersWithVoiceConnector" id="@cdk_utils/iam.chime.ChimeActions.property.AssociatePhoneNumbersWithVoiceConnector"></a>

```typescript
public readonly AssociatePhoneNumbersWithVoiceConnector: string;
```

- *Type:* string

[Write] chime:AssociatePhoneNumbersWithVoiceConnector.

---

##### `AssociatePhoneNumbersWithVoiceConnectorGroup`<sup>Required</sup> <a name="AssociatePhoneNumbersWithVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeActions.property.AssociatePhoneNumbersWithVoiceConnectorGroup"></a>

```typescript
public readonly AssociatePhoneNumbersWithVoiceConnectorGroup: string;
```

- *Type:* string

[Write] chime:AssociatePhoneNumbersWithVoiceConnectorGroup.

---

##### `AssociatePhoneNumberWithUser`<sup>Required</sup> <a name="AssociatePhoneNumberWithUser" id="@cdk_utils/iam.chime.ChimeActions.property.AssociatePhoneNumberWithUser"></a>

```typescript
public readonly AssociatePhoneNumberWithUser: string;
```

- *Type:* string

[Write] chime:AssociatePhoneNumberWithUser.

---

##### `AssociateSigninDelegateGroupsWithAccount`<sup>Required</sup> <a name="AssociateSigninDelegateGroupsWithAccount" id="@cdk_utils/iam.chime.ChimeActions.property.AssociateSigninDelegateGroupsWithAccount"></a>

```typescript
public readonly AssociateSigninDelegateGroupsWithAccount: string;
```

- *Type:* string

[Write] chime:AssociateSigninDelegateGroupsWithAccount.

---

##### `AssociateVoiceConnectorConnect`<sup>Required</sup> <a name="AssociateVoiceConnectorConnect" id="@cdk_utils/iam.chime.ChimeActions.property.AssociateVoiceConnectorConnect"></a>

```typescript
public readonly AssociateVoiceConnectorConnect: string;
```

- *Type:* string

[Write] chime:AssociateVoiceConnectorConnect.

---

##### `AuthorizeDirectory`<sup>Required</sup> <a name="AuthorizeDirectory" id="@cdk_utils/iam.chime.ChimeActions.property.AuthorizeDirectory"></a>

```typescript
public readonly AuthorizeDirectory: string;
```

- *Type:* string

[Write] chime:AuthorizeDirectory.

---

##### `BatchCreateAttendee`<sup>Required</sup> <a name="BatchCreateAttendee" id="@cdk_utils/iam.chime.ChimeActions.property.BatchCreateAttendee"></a>

```typescript
public readonly BatchCreateAttendee: string;
```

- *Type:* string

[Write] chime:BatchCreateAttendee.

---

##### `BatchCreateChannelMembership`<sup>Required</sup> <a name="BatchCreateChannelMembership" id="@cdk_utils/iam.chime.ChimeActions.property.BatchCreateChannelMembership"></a>

```typescript
public readonly BatchCreateChannelMembership: string;
```

- *Type:* string

[Write] chime:BatchCreateChannelMembership.

---

##### `BatchCreateRoomMembership`<sup>Required</sup> <a name="BatchCreateRoomMembership" id="@cdk_utils/iam.chime.ChimeActions.property.BatchCreateRoomMembership"></a>

```typescript
public readonly BatchCreateRoomMembership: string;
```

- *Type:* string

[Write] chime:BatchCreateRoomMembership.

---

##### `BatchDeletePhoneNumber`<sup>Required</sup> <a name="BatchDeletePhoneNumber" id="@cdk_utils/iam.chime.ChimeActions.property.BatchDeletePhoneNumber"></a>

```typescript
public readonly BatchDeletePhoneNumber: string;
```

- *Type:* string

[Write] chime:BatchDeletePhoneNumber.

---

##### `BatchSuspendUser`<sup>Required</sup> <a name="BatchSuspendUser" id="@cdk_utils/iam.chime.ChimeActions.property.BatchSuspendUser"></a>

```typescript
public readonly BatchSuspendUser: string;
```

- *Type:* string

[Write] chime:BatchSuspendUser.

---

##### `BatchUnsuspendUser`<sup>Required</sup> <a name="BatchUnsuspendUser" id="@cdk_utils/iam.chime.ChimeActions.property.BatchUnsuspendUser"></a>

```typescript
public readonly BatchUnsuspendUser: string;
```

- *Type:* string

[Write] chime:BatchUnsuspendUser.

---

##### `BatchUpdateAttendeeCapabilitiesExcept`<sup>Required</sup> <a name="BatchUpdateAttendeeCapabilitiesExcept" id="@cdk_utils/iam.chime.ChimeActions.property.BatchUpdateAttendeeCapabilitiesExcept"></a>

```typescript
public readonly BatchUpdateAttendeeCapabilitiesExcept: string;
```

- *Type:* string

[Write] chime:BatchUpdateAttendeeCapabilitiesExcept.

---

##### `BatchUpdatePhoneNumber`<sup>Required</sup> <a name="BatchUpdatePhoneNumber" id="@cdk_utils/iam.chime.ChimeActions.property.BatchUpdatePhoneNumber"></a>

```typescript
public readonly BatchUpdatePhoneNumber: string;
```

- *Type:* string

[Write] chime:BatchUpdatePhoneNumber.

---

##### `BatchUpdateUser`<sup>Required</sup> <a name="BatchUpdateUser" id="@cdk_utils/iam.chime.ChimeActions.property.BatchUpdateUser"></a>

```typescript
public readonly BatchUpdateUser: string;
```

- *Type:* string

[Write] chime:BatchUpdateUser.

---

##### `ChannelFlowCallback`<sup>Required</sup> <a name="ChannelFlowCallback" id="@cdk_utils/iam.chime.ChimeActions.property.ChannelFlowCallback"></a>

```typescript
public readonly ChannelFlowCallback: string;
```

- *Type:* string

[Write] chime:ChannelFlowCallback.

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdk_utils/iam.chime.ChimeActions.property.Connect"></a>

```typescript
public readonly Connect: string;
```

- *Type:* string

[Write] chime:Connect.

---

##### `ConnectDirectory`<sup>Required</sup> <a name="ConnectDirectory" id="@cdk_utils/iam.chime.ChimeActions.property.ConnectDirectory"></a>

```typescript
public readonly ConnectDirectory: string;
```

- *Type:* string

[Write] chime:ConnectDirectory.

---

##### `CreateAccount`<sup>Required</sup> <a name="CreateAccount" id="@cdk_utils/iam.chime.ChimeActions.property.CreateAccount"></a>

```typescript
public readonly CreateAccount: string;
```

- *Type:* string

[Write] chime:CreateAccount.

---

##### `CreateApiKey`<sup>Required</sup> <a name="CreateApiKey" id="@cdk_utils/iam.chime.ChimeActions.property.CreateApiKey"></a>

```typescript
public readonly CreateApiKey: string;
```

- *Type:* string

[Write] chime:CreateApiKey.

---

##### `CreateAppInstance`<sup>Required</sup> <a name="CreateAppInstance" id="@cdk_utils/iam.chime.ChimeActions.property.CreateAppInstance"></a>

```typescript
public readonly CreateAppInstance: string;
```

- *Type:* string

[Write] chime:CreateAppInstance.

---

##### `CreateAppInstanceAdmin`<sup>Required</sup> <a name="CreateAppInstanceAdmin" id="@cdk_utils/iam.chime.ChimeActions.property.CreateAppInstanceAdmin"></a>

```typescript
public readonly CreateAppInstanceAdmin: string;
```

- *Type:* string

[Write] chime:CreateAppInstanceAdmin.

---

##### `CreateAppInstanceBot`<sup>Required</sup> <a name="CreateAppInstanceBot" id="@cdk_utils/iam.chime.ChimeActions.property.CreateAppInstanceBot"></a>

```typescript
public readonly CreateAppInstanceBot: string;
```

- *Type:* string

[Write] chime:CreateAppInstanceBot.

---

##### `CreateAppInstanceUser`<sup>Required</sup> <a name="CreateAppInstanceUser" id="@cdk_utils/iam.chime.ChimeActions.property.CreateAppInstanceUser"></a>

```typescript
public readonly CreateAppInstanceUser: string;
```

- *Type:* string

[Write] chime:CreateAppInstanceUser.

---

##### `CreateAttendee`<sup>Required</sup> <a name="CreateAttendee" id="@cdk_utils/iam.chime.ChimeActions.property.CreateAttendee"></a>

```typescript
public readonly CreateAttendee: string;
```

- *Type:* string

[Write] chime:CreateAttendee.

---

##### `CreateBot`<sup>Required</sup> <a name="CreateBot" id="@cdk_utils/iam.chime.ChimeActions.property.CreateBot"></a>

```typescript
public readonly CreateBot: string;
```

- *Type:* string

[Write] chime:CreateBot.

---

##### `CreateCDRBucket`<sup>Required</sup> <a name="CreateCDRBucket" id="@cdk_utils/iam.chime.ChimeActions.property.CreateCDRBucket"></a>

```typescript
public readonly CreateCDRBucket: string;
```

- *Type:* string

[Write] chime:CreateCDRBucket.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.chime.ChimeActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] chime:CreateChannel.

---

##### `CreateChannelBan`<sup>Required</sup> <a name="CreateChannelBan" id="@cdk_utils/iam.chime.ChimeActions.property.CreateChannelBan"></a>

```typescript
public readonly CreateChannelBan: string;
```

- *Type:* string

[Write] chime:CreateChannelBan.

---

##### `CreateChannelFlow`<sup>Required</sup> <a name="CreateChannelFlow" id="@cdk_utils/iam.chime.ChimeActions.property.CreateChannelFlow"></a>

```typescript
public readonly CreateChannelFlow: string;
```

- *Type:* string

[Write] chime:CreateChannelFlow.

---

##### `CreateChannelMembership`<sup>Required</sup> <a name="CreateChannelMembership" id="@cdk_utils/iam.chime.ChimeActions.property.CreateChannelMembership"></a>

```typescript
public readonly CreateChannelMembership: string;
```

- *Type:* string

[Write] chime:CreateChannelMembership.

---

##### `CreateChannelModerator`<sup>Required</sup> <a name="CreateChannelModerator" id="@cdk_utils/iam.chime.ChimeActions.property.CreateChannelModerator"></a>

```typescript
public readonly CreateChannelModerator: string;
```

- *Type:* string

[Write] chime:CreateChannelModerator.

---

##### `CreateConnectAnalyticsConnector`<sup>Required</sup> <a name="CreateConnectAnalyticsConnector" id="@cdk_utils/iam.chime.ChimeActions.property.CreateConnectAnalyticsConnector"></a>

```typescript
public readonly CreateConnectAnalyticsConnector: string;
```

- *Type:* string

[Write] chime:CreateConnectAnalyticsConnector.

---

##### `CreateConnectCallTransferConnector`<sup>Required</sup> <a name="CreateConnectCallTransferConnector" id="@cdk_utils/iam.chime.ChimeActions.property.CreateConnectCallTransferConnector"></a>

```typescript
public readonly CreateConnectCallTransferConnector: string;
```

- *Type:* string

[Write] chime:CreateConnectCallTransferConnector.

---

##### `CreateMediaCapturePipeline`<sup>Required</sup> <a name="CreateMediaCapturePipeline" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMediaCapturePipeline"></a>

```typescript
public readonly CreateMediaCapturePipeline: string;
```

- *Type:* string

[Write] chime:CreateMediaCapturePipeline.

---

##### `CreateMediaConcatenationPipeline`<sup>Required</sup> <a name="CreateMediaConcatenationPipeline" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMediaConcatenationPipeline"></a>

```typescript
public readonly CreateMediaConcatenationPipeline: string;
```

- *Type:* string

[Write] chime:CreateMediaConcatenationPipeline.

---

##### `CreateMediaInsightsPipeline`<sup>Required</sup> <a name="CreateMediaInsightsPipeline" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMediaInsightsPipeline"></a>

```typescript
public readonly CreateMediaInsightsPipeline: string;
```

- *Type:* string

[Write] chime:CreateMediaInsightsPipeline.

---

##### `CreateMediaInsightsPipelineConfiguration`<sup>Required</sup> <a name="CreateMediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMediaInsightsPipelineConfiguration"></a>

```typescript
public readonly CreateMediaInsightsPipelineConfiguration: string;
```

- *Type:* string

[Write] chime:CreateMediaInsightsPipelineConfiguration.

---

##### `CreateMediaLiveConnectorPipeline`<sup>Required</sup> <a name="CreateMediaLiveConnectorPipeline" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMediaLiveConnectorPipeline"></a>

```typescript
public readonly CreateMediaLiveConnectorPipeline: string;
```

- *Type:* string

[Write] chime:CreateMediaLiveConnectorPipeline.

---

##### `CreateMediaPipelineKinesisVideoStreamPool`<sup>Required</sup> <a name="CreateMediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMediaPipelineKinesisVideoStreamPool"></a>

```typescript
public readonly CreateMediaPipelineKinesisVideoStreamPool: string;
```

- *Type:* string

[Write] chime:CreateMediaPipelineKinesisVideoStreamPool.

---

##### `CreateMediaStreamPipeline`<sup>Required</sup> <a name="CreateMediaStreamPipeline" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMediaStreamPipeline"></a>

```typescript
public readonly CreateMediaStreamPipeline: string;
```

- *Type:* string

[Write] chime:CreateMediaStreamPipeline.

---

##### `CreateMeeting`<sup>Required</sup> <a name="CreateMeeting" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMeeting"></a>

```typescript
public readonly CreateMeeting: string;
```

- *Type:* string

[Write] chime:CreateMeeting.

---

##### `CreateMeetingDialOut`<sup>Required</sup> <a name="CreateMeetingDialOut" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMeetingDialOut"></a>

```typescript
public readonly CreateMeetingDialOut: string;
```

- *Type:* string

[Write] chime:CreateMeetingDialOut.

---

##### `CreateMeetingWithAttendees`<sup>Required</sup> <a name="CreateMeetingWithAttendees" id="@cdk_utils/iam.chime.ChimeActions.property.CreateMeetingWithAttendees"></a>

```typescript
public readonly CreateMeetingWithAttendees: string;
```

- *Type:* string

[Write] chime:CreateMeetingWithAttendees.

---

##### `CreatePhoneNumberOrder`<sup>Required</sup> <a name="CreatePhoneNumberOrder" id="@cdk_utils/iam.chime.ChimeActions.property.CreatePhoneNumberOrder"></a>

```typescript
public readonly CreatePhoneNumberOrder: string;
```

- *Type:* string

[Write] chime:CreatePhoneNumberOrder.

---

##### `CreateProxySession`<sup>Required</sup> <a name="CreateProxySession" id="@cdk_utils/iam.chime.ChimeActions.property.CreateProxySession"></a>

```typescript
public readonly CreateProxySession: string;
```

- *Type:* string

[Write] chime:CreateProxySession.

---

##### `CreateRoom`<sup>Required</sup> <a name="CreateRoom" id="@cdk_utils/iam.chime.ChimeActions.property.CreateRoom"></a>

```typescript
public readonly CreateRoom: string;
```

- *Type:* string

[Write] chime:CreateRoom.

---

##### `CreateRoomMembership`<sup>Required</sup> <a name="CreateRoomMembership" id="@cdk_utils/iam.chime.ChimeActions.property.CreateRoomMembership"></a>

```typescript
public readonly CreateRoomMembership: string;
```

- *Type:* string

[Write] chime:CreateRoomMembership.

---

##### `CreateSipMediaApplication`<sup>Required</sup> <a name="CreateSipMediaApplication" id="@cdk_utils/iam.chime.ChimeActions.property.CreateSipMediaApplication"></a>

```typescript
public readonly CreateSipMediaApplication: string;
```

- *Type:* string

[Write] chime:CreateSipMediaApplication.

---

##### `CreateSipMediaApplicationCall`<sup>Required</sup> <a name="CreateSipMediaApplicationCall" id="@cdk_utils/iam.chime.ChimeActions.property.CreateSipMediaApplicationCall"></a>

```typescript
public readonly CreateSipMediaApplicationCall: string;
```

- *Type:* string

[Write] chime:CreateSipMediaApplicationCall.

---

##### `CreateSipRule`<sup>Required</sup> <a name="CreateSipRule" id="@cdk_utils/iam.chime.ChimeActions.property.CreateSipRule"></a>

```typescript
public readonly CreateSipRule: string;
```

- *Type:* string

[Write] chime:CreateSipRule.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.chime.ChimeActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] chime:CreateUser.

---

##### `CreateVoiceConnector`<sup>Required</sup> <a name="CreateVoiceConnector" id="@cdk_utils/iam.chime.ChimeActions.property.CreateVoiceConnector"></a>

```typescript
public readonly CreateVoiceConnector: string;
```

- *Type:* string

[Write] chime:CreateVoiceConnector.

---

##### `CreateVoiceConnectorGroup`<sup>Required</sup> <a name="CreateVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeActions.property.CreateVoiceConnectorGroup"></a>

```typescript
public readonly CreateVoiceConnectorGroup: string;
```

- *Type:* string

[Write] chime:CreateVoiceConnectorGroup.

---

##### `CreateVoiceProfile`<sup>Required</sup> <a name="CreateVoiceProfile" id="@cdk_utils/iam.chime.ChimeActions.property.CreateVoiceProfile"></a>

```typescript
public readonly CreateVoiceProfile: string;
```

- *Type:* string

[Write] chime:CreateVoiceProfile.

---

##### `CreateVoiceProfileDomain`<sup>Required</sup> <a name="CreateVoiceProfileDomain" id="@cdk_utils/iam.chime.ChimeActions.property.CreateVoiceProfileDomain"></a>

```typescript
public readonly CreateVoiceProfileDomain: string;
```

- *Type:* string

[Write] chime:CreateVoiceProfileDomain.

---

##### `DeleteAccount`<sup>Required</sup> <a name="DeleteAccount" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteAccount"></a>

```typescript
public readonly DeleteAccount: string;
```

- *Type:* string

[Write] chime:DeleteAccount.

---

##### `DeleteAccountOpenIdConfig`<sup>Required</sup> <a name="DeleteAccountOpenIdConfig" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteAccountOpenIdConfig"></a>

```typescript
public readonly DeleteAccountOpenIdConfig: string;
```

- *Type:* string

[Write] chime:DeleteAccountOpenIdConfig.

---

##### `DeleteApiKey`<sup>Required</sup> <a name="DeleteApiKey" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteApiKey"></a>

```typescript
public readonly DeleteApiKey: string;
```

- *Type:* string

[Write] chime:DeleteApiKey.

---

##### `DeleteAppInstance`<sup>Required</sup> <a name="DeleteAppInstance" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstance"></a>

```typescript
public readonly DeleteAppInstance: string;
```

- *Type:* string

[Write] chime:DeleteAppInstance.

---

##### `DeleteAppInstanceAdmin`<sup>Required</sup> <a name="DeleteAppInstanceAdmin" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstanceAdmin"></a>

```typescript
public readonly DeleteAppInstanceAdmin: string;
```

- *Type:* string

[Write] chime:DeleteAppInstanceAdmin.

---

##### `DeleteAppInstanceBot`<sup>Required</sup> <a name="DeleteAppInstanceBot" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstanceBot"></a>

```typescript
public readonly DeleteAppInstanceBot: string;
```

- *Type:* string

[Write] chime:DeleteAppInstanceBot.

---

##### `DeleteAppInstanceStreamingConfigurations`<sup>Required</sup> <a name="DeleteAppInstanceStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstanceStreamingConfigurations"></a>

```typescript
public readonly DeleteAppInstanceStreamingConfigurations: string;
```

- *Type:* string

[Write] chime:DeleteAppInstanceStreamingConfigurations.

---

##### `DeleteAppInstanceUser`<sup>Required</sup> <a name="DeleteAppInstanceUser" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteAppInstanceUser"></a>

```typescript
public readonly DeleteAppInstanceUser: string;
```

- *Type:* string

[Write] chime:DeleteAppInstanceUser.

---

##### `DeleteAttendee`<sup>Required</sup> <a name="DeleteAttendee" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteAttendee"></a>

```typescript
public readonly DeleteAttendee: string;
```

- *Type:* string

[Write] chime:DeleteAttendee.

---

##### `DeleteCDRBucket`<sup>Required</sup> <a name="DeleteCDRBucket" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteCDRBucket"></a>

```typescript
public readonly DeleteCDRBucket: string;
```

- *Type:* string

[Write] chime:DeleteCDRBucket.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] chime:DeleteChannel.

---

##### `DeleteChannelBan`<sup>Required</sup> <a name="DeleteChannelBan" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelBan"></a>

```typescript
public readonly DeleteChannelBan: string;
```

- *Type:* string

[Write] chime:DeleteChannelBan.

---

##### `DeleteChannelFlow`<sup>Required</sup> <a name="DeleteChannelFlow" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelFlow"></a>

```typescript
public readonly DeleteChannelFlow: string;
```

- *Type:* string

[Write] chime:DeleteChannelFlow.

---

##### `DeleteChannelMembership`<sup>Required</sup> <a name="DeleteChannelMembership" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelMembership"></a>

```typescript
public readonly DeleteChannelMembership: string;
```

- *Type:* string

[Write] chime:DeleteChannelMembership.

---

##### `DeleteChannelMessage`<sup>Required</sup> <a name="DeleteChannelMessage" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelMessage"></a>

```typescript
public readonly DeleteChannelMessage: string;
```

- *Type:* string

[Write] chime:DeleteChannelMessage.

---

##### `DeleteChannelModerator`<sup>Required</sup> <a name="DeleteChannelModerator" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteChannelModerator"></a>

```typescript
public readonly DeleteChannelModerator: string;
```

- *Type:* string

[Write] chime:DeleteChannelModerator.

---

##### `DeleteDelegate`<sup>Required</sup> <a name="DeleteDelegate" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteDelegate"></a>

```typescript
public readonly DeleteDelegate: string;
```

- *Type:* string

[Write] chime:DeleteDelegate.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] chime:DeleteDomain.

---

##### `DeleteEventsConfiguration`<sup>Required</sup> <a name="DeleteEventsConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteEventsConfiguration"></a>

```typescript
public readonly DeleteEventsConfiguration: string;
```

- *Type:* string

[Write] chime:DeleteEventsConfiguration.

---

##### `DeleteGroups`<sup>Required</sup> <a name="DeleteGroups" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteGroups"></a>

```typescript
public readonly DeleteGroups: string;
```

- *Type:* string

[Write] chime:DeleteGroups.

---

##### `DeleteMediaCapturePipeline`<sup>Required</sup> <a name="DeleteMediaCapturePipeline" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteMediaCapturePipeline"></a>

```typescript
public readonly DeleteMediaCapturePipeline: string;
```

- *Type:* string

[Write] chime:DeleteMediaCapturePipeline.

---

##### `DeleteMediaInsightsPipelineConfiguration`<sup>Required</sup> <a name="DeleteMediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteMediaInsightsPipelineConfiguration"></a>

```typescript
public readonly DeleteMediaInsightsPipelineConfiguration: string;
```

- *Type:* string

[Write] chime:DeleteMediaInsightsPipelineConfiguration.

---

##### `DeleteMediaPipeline`<sup>Required</sup> <a name="DeleteMediaPipeline" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteMediaPipeline"></a>

```typescript
public readonly DeleteMediaPipeline: string;
```

- *Type:* string

[Write] chime:DeleteMediaPipeline.

---

##### `DeleteMediaPipelineKinesisVideoStreamPool`<sup>Required</sup> <a name="DeleteMediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteMediaPipelineKinesisVideoStreamPool"></a>

```typescript
public readonly DeleteMediaPipelineKinesisVideoStreamPool: string;
```

- *Type:* string

[Write] chime:DeleteMediaPipelineKinesisVideoStreamPool.

---

##### `DeleteMeeting`<sup>Required</sup> <a name="DeleteMeeting" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteMeeting"></a>

```typescript
public readonly DeleteMeeting: string;
```

- *Type:* string

[Write] chime:DeleteMeeting.

---

##### `DeleteMessagingStreamingConfigurations`<sup>Required</sup> <a name="DeleteMessagingStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteMessagingStreamingConfigurations"></a>

```typescript
public readonly DeleteMessagingStreamingConfigurations: string;
```

- *Type:* string

[Write] chime:DeleteMessagingStreamingConfigurations.

---

##### `DeletePhoneNumber`<sup>Required</sup> <a name="DeletePhoneNumber" id="@cdk_utils/iam.chime.ChimeActions.property.DeletePhoneNumber"></a>

```typescript
public readonly DeletePhoneNumber: string;
```

- *Type:* string

[Write] chime:DeletePhoneNumber.

---

##### `DeleteProxySession`<sup>Required</sup> <a name="DeleteProxySession" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteProxySession"></a>

```typescript
public readonly DeleteProxySession: string;
```

- *Type:* string

[Write] chime:DeleteProxySession.

---

##### `DeleteRoom`<sup>Required</sup> <a name="DeleteRoom" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteRoom"></a>

```typescript
public readonly DeleteRoom: string;
```

- *Type:* string

[Write] chime:DeleteRoom.

---

##### `DeleteRoomMembership`<sup>Required</sup> <a name="DeleteRoomMembership" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteRoomMembership"></a>

```typescript
public readonly DeleteRoomMembership: string;
```

- *Type:* string

[Write] chime:DeleteRoomMembership.

---

##### `DeleteSipMediaApplication`<sup>Required</sup> <a name="DeleteSipMediaApplication" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteSipMediaApplication"></a>

```typescript
public readonly DeleteSipMediaApplication: string;
```

- *Type:* string

[Write] chime:DeleteSipMediaApplication.

---

##### `DeleteSipRule`<sup>Required</sup> <a name="DeleteSipRule" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteSipRule"></a>

```typescript
public readonly DeleteSipRule: string;
```

- *Type:* string

[Write] chime:DeleteSipRule.

---

##### `DeleteVoiceConnector`<sup>Required</sup> <a name="DeleteVoiceConnector" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnector"></a>

```typescript
public readonly DeleteVoiceConnector: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnector.

---

##### `DeleteVoiceConnectorEmergencyCallingConfiguration`<sup>Required</sup> <a name="DeleteVoiceConnectorEmergencyCallingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public readonly DeleteVoiceConnectorEmergencyCallingConfiguration: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnectorEmergencyCallingConfiguration.

---

##### `DeleteVoiceConnectorExternalSystemsConfiguration`<sup>Required</sup> <a name="DeleteVoiceConnectorExternalSystemsConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorExternalSystemsConfiguration"></a>

```typescript
public readonly DeleteVoiceConnectorExternalSystemsConfiguration: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnectorExternalSystemsConfiguration.

---

##### `DeleteVoiceConnectorGroup`<sup>Required</sup> <a name="DeleteVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorGroup"></a>

```typescript
public readonly DeleteVoiceConnectorGroup: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnectorGroup.

---

##### `DeleteVoiceConnectorOrigination`<sup>Required</sup> <a name="DeleteVoiceConnectorOrigination" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorOrigination"></a>

```typescript
public readonly DeleteVoiceConnectorOrigination: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnectorOrigination.

---

##### `DeleteVoiceConnectorProxy`<sup>Required</sup> <a name="DeleteVoiceConnectorProxy" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorProxy"></a>

```typescript
public readonly DeleteVoiceConnectorProxy: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnectorProxy.

---

##### `DeleteVoiceConnectorStreamingConfiguration`<sup>Required</sup> <a name="DeleteVoiceConnectorStreamingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorStreamingConfiguration"></a>

```typescript
public readonly DeleteVoiceConnectorStreamingConfiguration: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnectorStreamingConfiguration.

---

##### `DeleteVoiceConnectorTermination`<sup>Required</sup> <a name="DeleteVoiceConnectorTermination" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorTermination"></a>

```typescript
public readonly DeleteVoiceConnectorTermination: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnectorTermination.

---

##### `DeleteVoiceConnectorTerminationCredentials`<sup>Required</sup> <a name="DeleteVoiceConnectorTerminationCredentials" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceConnectorTerminationCredentials"></a>

```typescript
public readonly DeleteVoiceConnectorTerminationCredentials: string;
```

- *Type:* string

[Write] chime:DeleteVoiceConnectorTerminationCredentials.

---

##### `DeleteVoiceProfile`<sup>Required</sup> <a name="DeleteVoiceProfile" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceProfile"></a>

```typescript
public readonly DeleteVoiceProfile: string;
```

- *Type:* string

[Write] chime:DeleteVoiceProfile.

---

##### `DeleteVoiceProfileDomain`<sup>Required</sup> <a name="DeleteVoiceProfileDomain" id="@cdk_utils/iam.chime.ChimeActions.property.DeleteVoiceProfileDomain"></a>

```typescript
public readonly DeleteVoiceProfileDomain: string;
```

- *Type:* string

[Write] chime:DeleteVoiceProfileDomain.

---

##### `DeregisterAppInstanceUserEndpoint`<sup>Required</sup> <a name="DeregisterAppInstanceUserEndpoint" id="@cdk_utils/iam.chime.ChimeActions.property.DeregisterAppInstanceUserEndpoint"></a>

```typescript
public readonly DeregisterAppInstanceUserEndpoint: string;
```

- *Type:* string

[Write] chime:DeregisterAppInstanceUserEndpoint.

---

##### `DescribeAppInstance`<sup>Required</sup> <a name="DescribeAppInstance" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstance"></a>

```typescript
public readonly DescribeAppInstance: string;
```

- *Type:* string

[Read] chime:DescribeAppInstance.

---

##### `DescribeAppInstanceAdmin`<sup>Required</sup> <a name="DescribeAppInstanceAdmin" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstanceAdmin"></a>

```typescript
public readonly DescribeAppInstanceAdmin: string;
```

- *Type:* string

[Read] chime:DescribeAppInstanceAdmin.

---

##### `DescribeAppInstanceBot`<sup>Required</sup> <a name="DescribeAppInstanceBot" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstanceBot"></a>

```typescript
public readonly DescribeAppInstanceBot: string;
```

- *Type:* string

[Read] chime:DescribeAppInstanceBot.

---

##### `DescribeAppInstanceUser`<sup>Required</sup> <a name="DescribeAppInstanceUser" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstanceUser"></a>

```typescript
public readonly DescribeAppInstanceUser: string;
```

- *Type:* string

[Read] chime:DescribeAppInstanceUser.

---

##### `DescribeAppInstanceUserEndpoint`<sup>Required</sup> <a name="DescribeAppInstanceUserEndpoint" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeAppInstanceUserEndpoint"></a>

```typescript
public readonly DescribeAppInstanceUserEndpoint: string;
```

- *Type:* string

[Read] chime:DescribeAppInstanceUserEndpoint.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string;
```

- *Type:* string

[Read] chime:DescribeChannel.

---

##### `DescribeChannelBan`<sup>Required</sup> <a name="DescribeChannelBan" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelBan"></a>

```typescript
public readonly DescribeChannelBan: string;
```

- *Type:* string

[Read] chime:DescribeChannelBan.

---

##### `DescribeChannelFlow`<sup>Required</sup> <a name="DescribeChannelFlow" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelFlow"></a>

```typescript
public readonly DescribeChannelFlow: string;
```

- *Type:* string

[Read] chime:DescribeChannelFlow.

---

##### `DescribeChannelMembership`<sup>Required</sup> <a name="DescribeChannelMembership" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelMembership"></a>

```typescript
public readonly DescribeChannelMembership: string;
```

- *Type:* string

[Read] chime:DescribeChannelMembership.

---

##### `DescribeChannelMembershipForAppInstanceUser`<sup>Required</sup> <a name="DescribeChannelMembershipForAppInstanceUser" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelMembershipForAppInstanceUser"></a>

```typescript
public readonly DescribeChannelMembershipForAppInstanceUser: string;
```

- *Type:* string

[Read] chime:DescribeChannelMembershipForAppInstanceUser.

---

##### `DescribeChannelModeratedByAppInstanceUser`<sup>Required</sup> <a name="DescribeChannelModeratedByAppInstanceUser" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelModeratedByAppInstanceUser"></a>

```typescript
public readonly DescribeChannelModeratedByAppInstanceUser: string;
```

- *Type:* string

[Read] chime:DescribeChannelModeratedByAppInstanceUser.

---

##### `DescribeChannelModerator`<sup>Required</sup> <a name="DescribeChannelModerator" id="@cdk_utils/iam.chime.ChimeActions.property.DescribeChannelModerator"></a>

```typescript
public readonly DescribeChannelModerator: string;
```

- *Type:* string

[Read] chime:DescribeChannelModerator.

---

##### `DisassociateChannelFlow`<sup>Required</sup> <a name="DisassociateChannelFlow" id="@cdk_utils/iam.chime.ChimeActions.property.DisassociateChannelFlow"></a>

```typescript
public readonly DisassociateChannelFlow: string;
```

- *Type:* string

[Write] chime:DisassociateChannelFlow.

---

##### `DisassociatePhoneNumberFromUser`<sup>Required</sup> <a name="DisassociatePhoneNumberFromUser" id="@cdk_utils/iam.chime.ChimeActions.property.DisassociatePhoneNumberFromUser"></a>

```typescript
public readonly DisassociatePhoneNumberFromUser: string;
```

- *Type:* string

[Write] chime:DisassociatePhoneNumberFromUser.

---

##### `DisassociatePhoneNumbersFromVoiceConnector`<sup>Required</sup> <a name="DisassociatePhoneNumbersFromVoiceConnector" id="@cdk_utils/iam.chime.ChimeActions.property.DisassociatePhoneNumbersFromVoiceConnector"></a>

```typescript
public readonly DisassociatePhoneNumbersFromVoiceConnector: string;
```

- *Type:* string

[Write] chime:DisassociatePhoneNumbersFromVoiceConnector.

---

##### `DisassociatePhoneNumbersFromVoiceConnectorGroup`<sup>Required</sup> <a name="DisassociatePhoneNumbersFromVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeActions.property.DisassociatePhoneNumbersFromVoiceConnectorGroup"></a>

```typescript
public readonly DisassociatePhoneNumbersFromVoiceConnectorGroup: string;
```

- *Type:* string

[Write] chime:DisassociatePhoneNumbersFromVoiceConnectorGroup.

---

##### `DisassociateSigninDelegateGroupsFromAccount`<sup>Required</sup> <a name="DisassociateSigninDelegateGroupsFromAccount" id="@cdk_utils/iam.chime.ChimeActions.property.DisassociateSigninDelegateGroupsFromAccount"></a>

```typescript
public readonly DisassociateSigninDelegateGroupsFromAccount: string;
```

- *Type:* string

[Write] chime:DisassociateSigninDelegateGroupsFromAccount.

---

##### `DisassociateVoiceConnectorConnect`<sup>Required</sup> <a name="DisassociateVoiceConnectorConnect" id="@cdk_utils/iam.chime.ChimeActions.property.DisassociateVoiceConnectorConnect"></a>

```typescript
public readonly DisassociateVoiceConnectorConnect: string;
```

- *Type:* string

[Write] chime:DisassociateVoiceConnectorConnect.

---

##### `DisconnectDirectory`<sup>Required</sup> <a name="DisconnectDirectory" id="@cdk_utils/iam.chime.ChimeActions.property.DisconnectDirectory"></a>

```typescript
public readonly DisconnectDirectory: string;
```

- *Type:* string

[Write] chime:DisconnectDirectory.

---

##### `InviteDelegate`<sup>Required</sup> <a name="InviteDelegate" id="@cdk_utils/iam.chime.ChimeActions.property.InviteDelegate"></a>

```typescript
public readonly InviteDelegate: string;
```

- *Type:* string

[Write] chime:InviteDelegate.

---

##### `InviteUsers`<sup>Required</sup> <a name="InviteUsers" id="@cdk_utils/iam.chime.ChimeActions.property.InviteUsers"></a>

```typescript
public readonly InviteUsers: string;
```

- *Type:* string

[Write] chime:InviteUsers.

---

##### `InviteUsersFromProvider`<sup>Required</sup> <a name="InviteUsersFromProvider" id="@cdk_utils/iam.chime.ChimeActions.property.InviteUsersFromProvider"></a>

```typescript
public readonly InviteUsersFromProvider: string;
```

- *Type:* string

[Write] chime:InviteUsersFromProvider.

---

##### `ListAccounts`<sup>Required</sup> <a name="ListAccounts" id="@cdk_utils/iam.chime.ChimeActions.property.ListAccounts"></a>

```typescript
public readonly ListAccounts: string;
```

- *Type:* string

[List] chime:ListAccounts.

---

##### `ListAccountUsageReportData`<sup>Required</sup> <a name="ListAccountUsageReportData" id="@cdk_utils/iam.chime.ChimeActions.property.ListAccountUsageReportData"></a>

```typescript
public readonly ListAccountUsageReportData: string;
```

- *Type:* string

[List] chime:ListAccountUsageReportData.

---

##### `ListApiKeys`<sup>Required</sup> <a name="ListApiKeys" id="@cdk_utils/iam.chime.ChimeActions.property.ListApiKeys"></a>

```typescript
public readonly ListApiKeys: string;
```

- *Type:* string

[List] chime:ListApiKeys.

---

##### `ListAppInstanceAdmins`<sup>Required</sup> <a name="ListAppInstanceAdmins" id="@cdk_utils/iam.chime.ChimeActions.property.ListAppInstanceAdmins"></a>

```typescript
public readonly ListAppInstanceAdmins: string;
```

- *Type:* string

[List] chime:ListAppInstanceAdmins.

---

##### `ListAppInstanceBots`<sup>Required</sup> <a name="ListAppInstanceBots" id="@cdk_utils/iam.chime.ChimeActions.property.ListAppInstanceBots"></a>

```typescript
public readonly ListAppInstanceBots: string;
```

- *Type:* string

[List] chime:ListAppInstanceBots.

---

##### `ListAppInstances`<sup>Required</sup> <a name="ListAppInstances" id="@cdk_utils/iam.chime.ChimeActions.property.ListAppInstances"></a>

```typescript
public readonly ListAppInstances: string;
```

- *Type:* string

[List] chime:ListAppInstances.

---

##### `ListAppInstanceUserEndpoints`<sup>Required</sup> <a name="ListAppInstanceUserEndpoints" id="@cdk_utils/iam.chime.ChimeActions.property.ListAppInstanceUserEndpoints"></a>

```typescript
public readonly ListAppInstanceUserEndpoints: string;
```

- *Type:* string

[List] chime:ListAppInstanceUserEndpoints.

---

##### `ListAppInstanceUsers`<sup>Required</sup> <a name="ListAppInstanceUsers" id="@cdk_utils/iam.chime.ChimeActions.property.ListAppInstanceUsers"></a>

```typescript
public readonly ListAppInstanceUsers: string;
```

- *Type:* string

[List] chime:ListAppInstanceUsers.

---

##### `ListAttendees`<sup>Required</sup> <a name="ListAttendees" id="@cdk_utils/iam.chime.ChimeActions.property.ListAttendees"></a>

```typescript
public readonly ListAttendees: string;
```

- *Type:* string

[List] chime:ListAttendees.

---

##### `ListAttendeeTags`<sup>Required</sup> <a name="ListAttendeeTags" id="@cdk_utils/iam.chime.ChimeActions.property.ListAttendeeTags"></a>

```typescript
public readonly ListAttendeeTags: string;
```

- *Type:* string

[List] chime:ListAttendeeTags.

---

##### `ListAvailableVoiceConnectorRegions`<sup>Required</sup> <a name="ListAvailableVoiceConnectorRegions" id="@cdk_utils/iam.chime.ChimeActions.property.ListAvailableVoiceConnectorRegions"></a>

```typescript
public readonly ListAvailableVoiceConnectorRegions: string;
```

- *Type:* string

[List] chime:ListAvailableVoiceConnectorRegions.

---

##### `ListBots`<sup>Required</sup> <a name="ListBots" id="@cdk_utils/iam.chime.ChimeActions.property.ListBots"></a>

```typescript
public readonly ListBots: string;
```

- *Type:* string

[List] chime:ListBots.

---

##### `ListCallingRegions`<sup>Required</sup> <a name="ListCallingRegions" id="@cdk_utils/iam.chime.ChimeActions.property.ListCallingRegions"></a>

```typescript
public readonly ListCallingRegions: string;
```

- *Type:* string

[List] chime:ListCallingRegions.

---

##### `ListCDRBucket`<sup>Required</sup> <a name="ListCDRBucket" id="@cdk_utils/iam.chime.ChimeActions.property.ListCDRBucket"></a>

```typescript
public readonly ListCDRBucket: string;
```

- *Type:* string

[List] chime:ListCDRBucket.

---

##### `ListChannelBans`<sup>Required</sup> <a name="ListChannelBans" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannelBans"></a>

```typescript
public readonly ListChannelBans: string;
```

- *Type:* string

[List] chime:ListChannelBans.

---

##### `ListChannelFlows`<sup>Required</sup> <a name="ListChannelFlows" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannelFlows"></a>

```typescript
public readonly ListChannelFlows: string;
```

- *Type:* string

[List] chime:ListChannelFlows.

---

##### `ListChannelMemberships`<sup>Required</sup> <a name="ListChannelMemberships" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannelMemberships"></a>

```typescript
public readonly ListChannelMemberships: string;
```

- *Type:* string

[List] chime:ListChannelMemberships.

---

##### `ListChannelMembershipsForAppInstanceUser`<sup>Required</sup> <a name="ListChannelMembershipsForAppInstanceUser" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannelMembershipsForAppInstanceUser"></a>

```typescript
public readonly ListChannelMembershipsForAppInstanceUser: string;
```

- *Type:* string

[List] chime:ListChannelMembershipsForAppInstanceUser.

---

##### `ListChannelMessages`<sup>Required</sup> <a name="ListChannelMessages" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannelMessages"></a>

```typescript
public readonly ListChannelMessages: string;
```

- *Type:* string

[Read] chime:ListChannelMessages.

---

##### `ListChannelModerators`<sup>Required</sup> <a name="ListChannelModerators" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannelModerators"></a>

```typescript
public readonly ListChannelModerators: string;
```

- *Type:* string

[List] chime:ListChannelModerators.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[List] chime:ListChannels.

---

##### `ListChannelsAssociatedWithChannelFlow`<sup>Required</sup> <a name="ListChannelsAssociatedWithChannelFlow" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannelsAssociatedWithChannelFlow"></a>

```typescript
public readonly ListChannelsAssociatedWithChannelFlow: string;
```

- *Type:* string

[List] chime:ListChannelsAssociatedWithChannelFlow.

---

##### `ListChannelsModeratedByAppInstanceUser`<sup>Required</sup> <a name="ListChannelsModeratedByAppInstanceUser" id="@cdk_utils/iam.chime.ChimeActions.property.ListChannelsModeratedByAppInstanceUser"></a>

```typescript
public readonly ListChannelsModeratedByAppInstanceUser: string;
```

- *Type:* string

[List] chime:ListChannelsModeratedByAppInstanceUser.

---

##### `ListDelegates`<sup>Required</sup> <a name="ListDelegates" id="@cdk_utils/iam.chime.ChimeActions.property.ListDelegates"></a>

```typescript
public readonly ListDelegates: string;
```

- *Type:* string

[List] chime:ListDelegates.

---

##### `ListDirectories`<sup>Required</sup> <a name="ListDirectories" id="@cdk_utils/iam.chime.ChimeActions.property.ListDirectories"></a>

```typescript
public readonly ListDirectories: string;
```

- *Type:* string

[List] chime:ListDirectories.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.chime.ChimeActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] chime:ListDomains.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.chime.ChimeActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] chime:ListGroups.

---

##### `ListMediaCapturePipelines`<sup>Required</sup> <a name="ListMediaCapturePipelines" id="@cdk_utils/iam.chime.ChimeActions.property.ListMediaCapturePipelines"></a>

```typescript
public readonly ListMediaCapturePipelines: string;
```

- *Type:* string

[List] chime:ListMediaCapturePipelines.

---

##### `ListMediaInsightsPipelineConfigurations`<sup>Required</sup> <a name="ListMediaInsightsPipelineConfigurations" id="@cdk_utils/iam.chime.ChimeActions.property.ListMediaInsightsPipelineConfigurations"></a>

```typescript
public readonly ListMediaInsightsPipelineConfigurations: string;
```

- *Type:* string

[List] chime:ListMediaInsightsPipelineConfigurations.

---

##### `ListMediaPipelineKinesisVideoStreamPools`<sup>Required</sup> <a name="ListMediaPipelineKinesisVideoStreamPools" id="@cdk_utils/iam.chime.ChimeActions.property.ListMediaPipelineKinesisVideoStreamPools"></a>

```typescript
public readonly ListMediaPipelineKinesisVideoStreamPools: string;
```

- *Type:* string

[List] chime:ListMediaPipelineKinesisVideoStreamPools.

---

##### `ListMediaPipelines`<sup>Required</sup> <a name="ListMediaPipelines" id="@cdk_utils/iam.chime.ChimeActions.property.ListMediaPipelines"></a>

```typescript
public readonly ListMediaPipelines: string;
```

- *Type:* string

[List] chime:ListMediaPipelines.

---

##### `ListMeetingEvents`<sup>Required</sup> <a name="ListMeetingEvents" id="@cdk_utils/iam.chime.ChimeActions.property.ListMeetingEvents"></a>

```typescript
public readonly ListMeetingEvents: string;
```

- *Type:* string

[List] chime:ListMeetingEvents.

---

##### `ListMeetings`<sup>Required</sup> <a name="ListMeetings" id="@cdk_utils/iam.chime.ChimeActions.property.ListMeetings"></a>

```typescript
public readonly ListMeetings: string;
```

- *Type:* string

[List] chime:ListMeetings.

---

##### `ListMeetingsReportData`<sup>Required</sup> <a name="ListMeetingsReportData" id="@cdk_utils/iam.chime.ChimeActions.property.ListMeetingsReportData"></a>

```typescript
public readonly ListMeetingsReportData: string;
```

- *Type:* string

[List] chime:ListMeetingsReportData.

---

##### `ListMeetingTags`<sup>Required</sup> <a name="ListMeetingTags" id="@cdk_utils/iam.chime.ChimeActions.property.ListMeetingTags"></a>

```typescript
public readonly ListMeetingTags: string;
```

- *Type:* string

[List] chime:ListMeetingTags.

---

##### `ListPhoneNumberOrders`<sup>Required</sup> <a name="ListPhoneNumberOrders" id="@cdk_utils/iam.chime.ChimeActions.property.ListPhoneNumberOrders"></a>

```typescript
public readonly ListPhoneNumberOrders: string;
```

- *Type:* string

[List] chime:ListPhoneNumberOrders.

---

##### `ListPhoneNumbers`<sup>Required</sup> <a name="ListPhoneNumbers" id="@cdk_utils/iam.chime.ChimeActions.property.ListPhoneNumbers"></a>

```typescript
public readonly ListPhoneNumbers: string;
```

- *Type:* string

[List] chime:ListPhoneNumbers.

---

##### `ListProxySessions`<sup>Required</sup> <a name="ListProxySessions" id="@cdk_utils/iam.chime.ChimeActions.property.ListProxySessions"></a>

```typescript
public readonly ListProxySessions: string;
```

- *Type:* string

[List] chime:ListProxySessions.

---

##### `ListRoomMemberships`<sup>Required</sup> <a name="ListRoomMemberships" id="@cdk_utils/iam.chime.ChimeActions.property.ListRoomMemberships"></a>

```typescript
public readonly ListRoomMemberships: string;
```

- *Type:* string

[List] chime:ListRoomMemberships.

---

##### `ListRooms`<sup>Required</sup> <a name="ListRooms" id="@cdk_utils/iam.chime.ChimeActions.property.ListRooms"></a>

```typescript
public readonly ListRooms: string;
```

- *Type:* string

[List] chime:ListRooms.

---

##### `ListSipMediaApplications`<sup>Required</sup> <a name="ListSipMediaApplications" id="@cdk_utils/iam.chime.ChimeActions.property.ListSipMediaApplications"></a>

```typescript
public readonly ListSipMediaApplications: string;
```

- *Type:* string

[List] chime:ListSipMediaApplications.

---

##### `ListSipRules`<sup>Required</sup> <a name="ListSipRules" id="@cdk_utils/iam.chime.ChimeActions.property.ListSipRules"></a>

```typescript
public readonly ListSipRules: string;
```

- *Type:* string

[List] chime:ListSipRules.

---

##### `ListSubChannels`<sup>Required</sup> <a name="ListSubChannels" id="@cdk_utils/iam.chime.ChimeActions.property.ListSubChannels"></a>

```typescript
public readonly ListSubChannels: string;
```

- *Type:* string

[List] chime:ListSubChannels.

---

##### `ListSupportedPhoneNumberCountries`<sup>Required</sup> <a name="ListSupportedPhoneNumberCountries" id="@cdk_utils/iam.chime.ChimeActions.property.ListSupportedPhoneNumberCountries"></a>

```typescript
public readonly ListSupportedPhoneNumberCountries: string;
```

- *Type:* string

[List] chime:ListSupportedPhoneNumberCountries.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.chime.ChimeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] chime:ListTagsForResource.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.chime.ChimeActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] chime:ListUsers.

---

##### `ListVoiceConnectorGroups`<sup>Required</sup> <a name="ListVoiceConnectorGroups" id="@cdk_utils/iam.chime.ChimeActions.property.ListVoiceConnectorGroups"></a>

```typescript
public readonly ListVoiceConnectorGroups: string;
```

- *Type:* string

[List] chime:ListVoiceConnectorGroups.

---

##### `ListVoiceConnectors`<sup>Required</sup> <a name="ListVoiceConnectors" id="@cdk_utils/iam.chime.ChimeActions.property.ListVoiceConnectors"></a>

```typescript
public readonly ListVoiceConnectors: string;
```

- *Type:* string

[List] chime:ListVoiceConnectors.

---

##### `ListVoiceConnectorTerminationCredentials`<sup>Required</sup> <a name="ListVoiceConnectorTerminationCredentials" id="@cdk_utils/iam.chime.ChimeActions.property.ListVoiceConnectorTerminationCredentials"></a>

```typescript
public readonly ListVoiceConnectorTerminationCredentials: string;
```

- *Type:* string

[List] chime:ListVoiceConnectorTerminationCredentials.

---

##### `ListVoiceProfileDomains`<sup>Required</sup> <a name="ListVoiceProfileDomains" id="@cdk_utils/iam.chime.ChimeActions.property.ListVoiceProfileDomains"></a>

```typescript
public readonly ListVoiceProfileDomains: string;
```

- *Type:* string

[List] chime:ListVoiceProfileDomains.

---

##### `ListVoiceProfiles`<sup>Required</sup> <a name="ListVoiceProfiles" id="@cdk_utils/iam.chime.ChimeActions.property.ListVoiceProfiles"></a>

```typescript
public readonly ListVoiceProfiles: string;
```

- *Type:* string

[List] chime:ListVoiceProfiles.

---

##### `LogoutUser`<sup>Required</sup> <a name="LogoutUser" id="@cdk_utils/iam.chime.ChimeActions.property.LogoutUser"></a>

```typescript
public readonly LogoutUser: string;
```

- *Type:* string

[Write] chime:LogoutUser.

---

##### `PutAppInstanceRetentionSettings`<sup>Required</sup> <a name="PutAppInstanceRetentionSettings" id="@cdk_utils/iam.chime.ChimeActions.property.PutAppInstanceRetentionSettings"></a>

```typescript
public readonly PutAppInstanceRetentionSettings: string;
```

- *Type:* string

[Write] chime:PutAppInstanceRetentionSettings.

---

##### `PutAppInstanceStreamingConfigurations`<sup>Required</sup> <a name="PutAppInstanceStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeActions.property.PutAppInstanceStreamingConfigurations"></a>

```typescript
public readonly PutAppInstanceStreamingConfigurations: string;
```

- *Type:* string

[Write] chime:PutAppInstanceStreamingConfigurations.

---

##### `PutAppInstanceUserExpirationSettings`<sup>Required</sup> <a name="PutAppInstanceUserExpirationSettings" id="@cdk_utils/iam.chime.ChimeActions.property.PutAppInstanceUserExpirationSettings"></a>

```typescript
public readonly PutAppInstanceUserExpirationSettings: string;
```

- *Type:* string

[Write] chime:PutAppInstanceUserExpirationSettings.

---

##### `PutChannelExpirationSettings`<sup>Required</sup> <a name="PutChannelExpirationSettings" id="@cdk_utils/iam.chime.ChimeActions.property.PutChannelExpirationSettings"></a>

```typescript
public readonly PutChannelExpirationSettings: string;
```

- *Type:* string

[Write] chime:PutChannelExpirationSettings.

---

##### `PutChannelMembershipPreferences`<sup>Required</sup> <a name="PutChannelMembershipPreferences" id="@cdk_utils/iam.chime.ChimeActions.property.PutChannelMembershipPreferences"></a>

```typescript
public readonly PutChannelMembershipPreferences: string;
```

- *Type:* string

[Write] chime:PutChannelMembershipPreferences.

---

##### `PutEventsConfiguration`<sup>Required</sup> <a name="PutEventsConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.PutEventsConfiguration"></a>

```typescript
public readonly PutEventsConfiguration: string;
```

- *Type:* string

[Write] chime:PutEventsConfiguration.

---

##### `PutMessagingStreamingConfigurations`<sup>Required</sup> <a name="PutMessagingStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeActions.property.PutMessagingStreamingConfigurations"></a>

```typescript
public readonly PutMessagingStreamingConfigurations: string;
```

- *Type:* string

[Write] chime:PutMessagingStreamingConfigurations.

---

##### `PutRetentionSettings`<sup>Required</sup> <a name="PutRetentionSettings" id="@cdk_utils/iam.chime.ChimeActions.property.PutRetentionSettings"></a>

```typescript
public readonly PutRetentionSettings: string;
```

- *Type:* string

[Write] chime:PutRetentionSettings.

---

##### `PutSipMediaApplicationAlexaSkillConfiguration`<sup>Required</sup> <a name="PutSipMediaApplicationAlexaSkillConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.PutSipMediaApplicationAlexaSkillConfiguration"></a>

```typescript
public readonly PutSipMediaApplicationAlexaSkillConfiguration: string;
```

- *Type:* string

[Write] chime:PutSipMediaApplicationAlexaSkillConfiguration.

---

##### `PutSipMediaApplicationLoggingConfiguration`<sup>Required</sup> <a name="PutSipMediaApplicationLoggingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.PutSipMediaApplicationLoggingConfiguration"></a>

```typescript
public readonly PutSipMediaApplicationLoggingConfiguration: string;
```

- *Type:* string

[Write] chime:PutSipMediaApplicationLoggingConfiguration.

---

##### `PutVoiceConnectorEmergencyCallingConfiguration`<sup>Required</sup> <a name="PutVoiceConnectorEmergencyCallingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public readonly PutVoiceConnectorEmergencyCallingConfiguration: string;
```

- *Type:* string

[Write] chime:PutVoiceConnectorEmergencyCallingConfiguration.

---

##### `PutVoiceConnectorExternalSystemsConfiguration`<sup>Required</sup> <a name="PutVoiceConnectorExternalSystemsConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorExternalSystemsConfiguration"></a>

```typescript
public readonly PutVoiceConnectorExternalSystemsConfiguration: string;
```

- *Type:* string

[Write] chime:PutVoiceConnectorExternalSystemsConfiguration.

---

##### `PutVoiceConnectorLoggingConfiguration`<sup>Required</sup> <a name="PutVoiceConnectorLoggingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorLoggingConfiguration"></a>

```typescript
public readonly PutVoiceConnectorLoggingConfiguration: string;
```

- *Type:* string

[Write] chime:PutVoiceConnectorLoggingConfiguration.

---

##### `PutVoiceConnectorOrigination`<sup>Required</sup> <a name="PutVoiceConnectorOrigination" id="@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorOrigination"></a>

```typescript
public readonly PutVoiceConnectorOrigination: string;
```

- *Type:* string

[Write] chime:PutVoiceConnectorOrigination.

---

##### `PutVoiceConnectorProxy`<sup>Required</sup> <a name="PutVoiceConnectorProxy" id="@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorProxy"></a>

```typescript
public readonly PutVoiceConnectorProxy: string;
```

- *Type:* string

[Write] chime:PutVoiceConnectorProxy.

---

##### `PutVoiceConnectorStreamingConfiguration`<sup>Required</sup> <a name="PutVoiceConnectorStreamingConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorStreamingConfiguration"></a>

```typescript
public readonly PutVoiceConnectorStreamingConfiguration: string;
```

- *Type:* string

[Write] chime:PutVoiceConnectorStreamingConfiguration.

---

##### `PutVoiceConnectorTermination`<sup>Required</sup> <a name="PutVoiceConnectorTermination" id="@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorTermination"></a>

```typescript
public readonly PutVoiceConnectorTermination: string;
```

- *Type:* string

[Write] chime:PutVoiceConnectorTermination.

---

##### `PutVoiceConnectorTerminationCredentials`<sup>Required</sup> <a name="PutVoiceConnectorTerminationCredentials" id="@cdk_utils/iam.chime.ChimeActions.property.PutVoiceConnectorTerminationCredentials"></a>

```typescript
public readonly PutVoiceConnectorTerminationCredentials: string;
```

- *Type:* string

[Write] chime:PutVoiceConnectorTerminationCredentials.

---

##### `RedactChannelMessage`<sup>Required</sup> <a name="RedactChannelMessage" id="@cdk_utils/iam.chime.ChimeActions.property.RedactChannelMessage"></a>

```typescript
public readonly RedactChannelMessage: string;
```

- *Type:* string

[Write] chime:RedactChannelMessage.

---

##### `RedactConversationMessage`<sup>Required</sup> <a name="RedactConversationMessage" id="@cdk_utils/iam.chime.ChimeActions.property.RedactConversationMessage"></a>

```typescript
public readonly RedactConversationMessage: string;
```

- *Type:* string

[Write] chime:RedactConversationMessage.

---

##### `RedactRoomMessage`<sup>Required</sup> <a name="RedactRoomMessage" id="@cdk_utils/iam.chime.ChimeActions.property.RedactRoomMessage"></a>

```typescript
public readonly RedactRoomMessage: string;
```

- *Type:* string

[Write] chime:RedactRoomMessage.

---

##### `RegenerateSecurityToken`<sup>Required</sup> <a name="RegenerateSecurityToken" id="@cdk_utils/iam.chime.ChimeActions.property.RegenerateSecurityToken"></a>

```typescript
public readonly RegenerateSecurityToken: string;
```

- *Type:* string

[Write] chime:RegenerateSecurityToken.

---

##### `RegisterAppInstanceUserEndpoint`<sup>Required</sup> <a name="RegisterAppInstanceUserEndpoint" id="@cdk_utils/iam.chime.ChimeActions.property.RegisterAppInstanceUserEndpoint"></a>

```typescript
public readonly RegisterAppInstanceUserEndpoint: string;
```

- *Type:* string

[Write] chime:RegisterAppInstanceUserEndpoint.

---

##### `RenameAccount`<sup>Required</sup> <a name="RenameAccount" id="@cdk_utils/iam.chime.ChimeActions.property.RenameAccount"></a>

```typescript
public readonly RenameAccount: string;
```

- *Type:* string

[Write] chime:RenameAccount.

---

##### `RenewDelegate`<sup>Required</sup> <a name="RenewDelegate" id="@cdk_utils/iam.chime.ChimeActions.property.RenewDelegate"></a>

```typescript
public readonly RenewDelegate: string;
```

- *Type:* string

[Write] chime:RenewDelegate.

---

##### `ResetAccountResource`<sup>Required</sup> <a name="ResetAccountResource" id="@cdk_utils/iam.chime.ChimeActions.property.ResetAccountResource"></a>

```typescript
public readonly ResetAccountResource: string;
```

- *Type:* string

[Write] chime:ResetAccountResource.

---

##### `ResetPersonalPIN`<sup>Required</sup> <a name="ResetPersonalPIN" id="@cdk_utils/iam.chime.ChimeActions.property.ResetPersonalPIN"></a>

```typescript
public readonly ResetPersonalPIN: string;
```

- *Type:* string

[Write] chime:ResetPersonalPIN.

---

##### `RestorePhoneNumber`<sup>Required</sup> <a name="RestorePhoneNumber" id="@cdk_utils/iam.chime.ChimeActions.property.RestorePhoneNumber"></a>

```typescript
public readonly RestorePhoneNumber: string;
```

- *Type:* string

[Write] chime:RestorePhoneNumber.

---

##### `RetrieveDataExports`<sup>Required</sup> <a name="RetrieveDataExports" id="@cdk_utils/iam.chime.ChimeActions.property.RetrieveDataExports"></a>

```typescript
public readonly RetrieveDataExports: string;
```

- *Type:* string

[Read] chime:RetrieveDataExports.

---

##### `SearchAvailablePhoneNumbers`<sup>Required</sup> <a name="SearchAvailablePhoneNumbers" id="@cdk_utils/iam.chime.ChimeActions.property.SearchAvailablePhoneNumbers"></a>

```typescript
public readonly SearchAvailablePhoneNumbers: string;
```

- *Type:* string

[Read] chime:SearchAvailablePhoneNumbers.

---

##### `SearchChannels`<sup>Required</sup> <a name="SearchChannels" id="@cdk_utils/iam.chime.ChimeActions.property.SearchChannels"></a>

```typescript
public readonly SearchChannels: string;
```

- *Type:* string

[List] chime:SearchChannels.

---

##### `SendChannelMessage`<sup>Required</sup> <a name="SendChannelMessage" id="@cdk_utils/iam.chime.ChimeActions.property.SendChannelMessage"></a>

```typescript
public readonly SendChannelMessage: string;
```

- *Type:* string

[Write] chime:SendChannelMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.chime.ChimeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDataExport`<sup>Required</sup> <a name="StartDataExport" id="@cdk_utils/iam.chime.ChimeActions.property.StartDataExport"></a>

```typescript
public readonly StartDataExport: string;
```

- *Type:* string

[Write] chime:StartDataExport.

---

##### `StartMeetingTranscription`<sup>Required</sup> <a name="StartMeetingTranscription" id="@cdk_utils/iam.chime.ChimeActions.property.StartMeetingTranscription"></a>

```typescript
public readonly StartMeetingTranscription: string;
```

- *Type:* string

[Write] chime:StartMeetingTranscription.

---

##### `StartSpeakerSearchTask`<sup>Required</sup> <a name="StartSpeakerSearchTask" id="@cdk_utils/iam.chime.ChimeActions.property.StartSpeakerSearchTask"></a>

```typescript
public readonly StartSpeakerSearchTask: string;
```

- *Type:* string

[Write] chime:StartSpeakerSearchTask.

---

##### `StartVoiceToneAnalysisTask`<sup>Required</sup> <a name="StartVoiceToneAnalysisTask" id="@cdk_utils/iam.chime.ChimeActions.property.StartVoiceToneAnalysisTask"></a>

```typescript
public readonly StartVoiceToneAnalysisTask: string;
```

- *Type:* string

[Write] chime:StartVoiceToneAnalysisTask.

---

##### `StopMeetingTranscription`<sup>Required</sup> <a name="StopMeetingTranscription" id="@cdk_utils/iam.chime.ChimeActions.property.StopMeetingTranscription"></a>

```typescript
public readonly StopMeetingTranscription: string;
```

- *Type:* string

[Write] chime:StopMeetingTranscription.

---

##### `StopSpeakerSearchTask`<sup>Required</sup> <a name="StopSpeakerSearchTask" id="@cdk_utils/iam.chime.ChimeActions.property.StopSpeakerSearchTask"></a>

```typescript
public readonly StopSpeakerSearchTask: string;
```

- *Type:* string

[Write] chime:StopSpeakerSearchTask.

---

##### `StopVoiceToneAnalysisTask`<sup>Required</sup> <a name="StopVoiceToneAnalysisTask" id="@cdk_utils/iam.chime.ChimeActions.property.StopVoiceToneAnalysisTask"></a>

```typescript
public readonly StopVoiceToneAnalysisTask: string;
```

- *Type:* string

[Write] chime:StopVoiceToneAnalysisTask.

---

##### `SubmitSupportRequest`<sup>Required</sup> <a name="SubmitSupportRequest" id="@cdk_utils/iam.chime.ChimeActions.property.SubmitSupportRequest"></a>

```typescript
public readonly SubmitSupportRequest: string;
```

- *Type:* string

[Write] chime:SubmitSupportRequest.

---

##### `SuspendUsers`<sup>Required</sup> <a name="SuspendUsers" id="@cdk_utils/iam.chime.ChimeActions.property.SuspendUsers"></a>

```typescript
public readonly SuspendUsers: string;
```

- *Type:* string

[Write] chime:SuspendUsers.

---

##### `TagAttendee`<sup>Required</sup> <a name="TagAttendee" id="@cdk_utils/iam.chime.ChimeActions.property.TagAttendee"></a>

```typescript
public readonly TagAttendee: string;
```

- *Type:* string

[Tagging] chime:TagAttendee.

---

##### `TagMeeting`<sup>Required</sup> <a name="TagMeeting" id="@cdk_utils/iam.chime.ChimeActions.property.TagMeeting"></a>

```typescript
public readonly TagMeeting: string;
```

- *Type:* string

[Tagging] chime:TagMeeting.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.chime.ChimeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] chime:TagResource.

---

##### `UnauthorizeDirectory`<sup>Required</sup> <a name="UnauthorizeDirectory" id="@cdk_utils/iam.chime.ChimeActions.property.UnauthorizeDirectory"></a>

```typescript
public readonly UnauthorizeDirectory: string;
```

- *Type:* string

[Write] chime:UnauthorizeDirectory.

---

##### `UntagAttendee`<sup>Required</sup> <a name="UntagAttendee" id="@cdk_utils/iam.chime.ChimeActions.property.UntagAttendee"></a>

```typescript
public readonly UntagAttendee: string;
```

- *Type:* string

[Tagging] chime:UntagAttendee.

---

##### `UntagMeeting`<sup>Required</sup> <a name="UntagMeeting" id="@cdk_utils/iam.chime.ChimeActions.property.UntagMeeting"></a>

```typescript
public readonly UntagMeeting: string;
```

- *Type:* string

[Tagging] chime:UntagMeeting.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.chime.ChimeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] chime:UntagResource.

---

##### `UpdateAccount`<sup>Required</sup> <a name="UpdateAccount" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAccount"></a>

```typescript
public readonly UpdateAccount: string;
```

- *Type:* string

[Write] chime:UpdateAccount.

---

##### `UpdateAccountOpenIdConfig`<sup>Required</sup> <a name="UpdateAccountOpenIdConfig" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAccountOpenIdConfig"></a>

```typescript
public readonly UpdateAccountOpenIdConfig: string;
```

- *Type:* string

[Write] chime:UpdateAccountOpenIdConfig.

---

##### `UpdateAccountResource`<sup>Required</sup> <a name="UpdateAccountResource" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAccountResource"></a>

```typescript
public readonly UpdateAccountResource: string;
```

- *Type:* string

[Write] chime:UpdateAccountResource.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] chime:UpdateAccountSettings.

---

##### `UpdateAppInstance`<sup>Required</sup> <a name="UpdateAppInstance" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAppInstance"></a>

```typescript
public readonly UpdateAppInstance: string;
```

- *Type:* string

[Write] chime:UpdateAppInstance.

---

##### `UpdateAppInstanceBot`<sup>Required</sup> <a name="UpdateAppInstanceBot" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAppInstanceBot"></a>

```typescript
public readonly UpdateAppInstanceBot: string;
```

- *Type:* string

[Write] chime:UpdateAppInstanceBot.

---

##### `UpdateAppInstanceUser`<sup>Required</sup> <a name="UpdateAppInstanceUser" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAppInstanceUser"></a>

```typescript
public readonly UpdateAppInstanceUser: string;
```

- *Type:* string

[Write] chime:UpdateAppInstanceUser.

---

##### `UpdateAppInstanceUserEndpoint`<sup>Required</sup> <a name="UpdateAppInstanceUserEndpoint" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAppInstanceUserEndpoint"></a>

```typescript
public readonly UpdateAppInstanceUserEndpoint: string;
```

- *Type:* string

[Write] chime:UpdateAppInstanceUserEndpoint.

---

##### `UpdateAttendeeCapabilities`<sup>Required</sup> <a name="UpdateAttendeeCapabilities" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateAttendeeCapabilities"></a>

```typescript
public readonly UpdateAttendeeCapabilities: string;
```

- *Type:* string

[Write] chime:UpdateAttendeeCapabilities.

---

##### `UpdateBot`<sup>Required</sup> <a name="UpdateBot" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateBot"></a>

```typescript
public readonly UpdateBot: string;
```

- *Type:* string

[Write] chime:UpdateBot.

---

##### `UpdateCDRSettings`<sup>Required</sup> <a name="UpdateCDRSettings" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateCDRSettings"></a>

```typescript
public readonly UpdateCDRSettings: string;
```

- *Type:* string

[Write] chime:UpdateCDRSettings.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] chime:UpdateChannel.

---

##### `UpdateChannelFlow`<sup>Required</sup> <a name="UpdateChannelFlow" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateChannelFlow"></a>

```typescript
public readonly UpdateChannelFlow: string;
```

- *Type:* string

[Write] chime:UpdateChannelFlow.

---

##### `UpdateChannelMessage`<sup>Required</sup> <a name="UpdateChannelMessage" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateChannelMessage"></a>

```typescript
public readonly UpdateChannelMessage: string;
```

- *Type:* string

[Write] chime:UpdateChannelMessage.

---

##### `UpdateChannelReadMarker`<sup>Required</sup> <a name="UpdateChannelReadMarker" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateChannelReadMarker"></a>

```typescript
public readonly UpdateChannelReadMarker: string;
```

- *Type:* string

[Write] chime:UpdateChannelReadMarker.

---

##### `UpdateGlobalSettings`<sup>Required</sup> <a name="UpdateGlobalSettings" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateGlobalSettings"></a>

```typescript
public readonly UpdateGlobalSettings: string;
```

- *Type:* string

[Write] chime:UpdateGlobalSettings.

---

##### `UpdateMediaInsightsPipelineConfiguration`<sup>Required</sup> <a name="UpdateMediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateMediaInsightsPipelineConfiguration"></a>

```typescript
public readonly UpdateMediaInsightsPipelineConfiguration: string;
```

- *Type:* string

[Write] chime:UpdateMediaInsightsPipelineConfiguration.

---

##### `UpdateMediaInsightsPipelineStatus`<sup>Required</sup> <a name="UpdateMediaInsightsPipelineStatus" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateMediaInsightsPipelineStatus"></a>

```typescript
public readonly UpdateMediaInsightsPipelineStatus: string;
```

- *Type:* string

[Write] chime:UpdateMediaInsightsPipelineStatus.

---

##### `UpdateMediaPipelineKinesisVideoStreamPool`<sup>Required</sup> <a name="UpdateMediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateMediaPipelineKinesisVideoStreamPool"></a>

```typescript
public readonly UpdateMediaPipelineKinesisVideoStreamPool: string;
```

- *Type:* string

[Write] chime:UpdateMediaPipelineKinesisVideoStreamPool.

---

##### `UpdatePhoneNumber`<sup>Required</sup> <a name="UpdatePhoneNumber" id="@cdk_utils/iam.chime.ChimeActions.property.UpdatePhoneNumber"></a>

```typescript
public readonly UpdatePhoneNumber: string;
```

- *Type:* string

[Write] chime:UpdatePhoneNumber.

---

##### `UpdatePhoneNumberSettings`<sup>Required</sup> <a name="UpdatePhoneNumberSettings" id="@cdk_utils/iam.chime.ChimeActions.property.UpdatePhoneNumberSettings"></a>

```typescript
public readonly UpdatePhoneNumberSettings: string;
```

- *Type:* string

[Write] chime:UpdatePhoneNumberSettings.

---

##### `UpdateProxySession`<sup>Required</sup> <a name="UpdateProxySession" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateProxySession"></a>

```typescript
public readonly UpdateProxySession: string;
```

- *Type:* string

[Write] chime:UpdateProxySession.

---

##### `UpdateRoom`<sup>Required</sup> <a name="UpdateRoom" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateRoom"></a>

```typescript
public readonly UpdateRoom: string;
```

- *Type:* string

[Write] chime:UpdateRoom.

---

##### `UpdateRoomMembership`<sup>Required</sup> <a name="UpdateRoomMembership" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateRoomMembership"></a>

```typescript
public readonly UpdateRoomMembership: string;
```

- *Type:* string

[Write] chime:UpdateRoomMembership.

---

##### `UpdateSipMediaApplication`<sup>Required</sup> <a name="UpdateSipMediaApplication" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateSipMediaApplication"></a>

```typescript
public readonly UpdateSipMediaApplication: string;
```

- *Type:* string

[Write] chime:UpdateSipMediaApplication.

---

##### `UpdateSipMediaApplicationCall`<sup>Required</sup> <a name="UpdateSipMediaApplicationCall" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateSipMediaApplicationCall"></a>

```typescript
public readonly UpdateSipMediaApplicationCall: string;
```

- *Type:* string

[Write] chime:UpdateSipMediaApplicationCall.

---

##### `UpdateSipRule`<sup>Required</sup> <a name="UpdateSipRule" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateSipRule"></a>

```typescript
public readonly UpdateSipRule: string;
```

- *Type:* string

[Write] chime:UpdateSipRule.

---

##### `UpdateSupportedLicenses`<sup>Required</sup> <a name="UpdateSupportedLicenses" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateSupportedLicenses"></a>

```typescript
public readonly UpdateSupportedLicenses: string;
```

- *Type:* string

[Write] chime:UpdateSupportedLicenses.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] chime:UpdateUser.

---

##### `UpdateUserLicenses`<sup>Required</sup> <a name="UpdateUserLicenses" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateUserLicenses"></a>

```typescript
public readonly UpdateUserLicenses: string;
```

- *Type:* string

[Write] chime:UpdateUserLicenses.

---

##### `UpdateUserSettings`<sup>Required</sup> <a name="UpdateUserSettings" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateUserSettings"></a>

```typescript
public readonly UpdateUserSettings: string;
```

- *Type:* string

[Write] chime:UpdateUserSettings.

---

##### `UpdateVoiceConnector`<sup>Required</sup> <a name="UpdateVoiceConnector" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateVoiceConnector"></a>

```typescript
public readonly UpdateVoiceConnector: string;
```

- *Type:* string

[Write] chime:UpdateVoiceConnector.

---

##### `UpdateVoiceConnectorGroup`<sup>Required</sup> <a name="UpdateVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateVoiceConnectorGroup"></a>

```typescript
public readonly UpdateVoiceConnectorGroup: string;
```

- *Type:* string

[Write] chime:UpdateVoiceConnectorGroup.

---

##### `UpdateVoiceProfile`<sup>Required</sup> <a name="UpdateVoiceProfile" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateVoiceProfile"></a>

```typescript
public readonly UpdateVoiceProfile: string;
```

- *Type:* string

[Write] chime:UpdateVoiceProfile.

---

##### `UpdateVoiceProfileDomain`<sup>Required</sup> <a name="UpdateVoiceProfileDomain" id="@cdk_utils/iam.chime.ChimeActions.property.UpdateVoiceProfileDomain"></a>

```typescript
public readonly UpdateVoiceProfileDomain: string;
```

- *Type:* string

[Write] chime:UpdateVoiceProfileDomain.

---

##### `ValidateAccountResource`<sup>Required</sup> <a name="ValidateAccountResource" id="@cdk_utils/iam.chime.ChimeActions.property.ValidateAccountResource"></a>

```typescript
public readonly ValidateAccountResource: string;
```

- *Type:* string

[Read] chime:ValidateAccountResource.

---

##### `ValidateE911Address`<sup>Required</sup> <a name="ValidateE911Address" id="@cdk_utils/iam.chime.ChimeActions.property.ValidateE911Address"></a>

```typescript
public readonly ValidateE911Address: string;
```

- *Type:* string

[Read] chime:ValidateE911Address.

---

### ChimeConditions <a name="ChimeConditions" id="@cdk_utils/iam.chime.ChimeConditions"></a>

Condition key constants and builders for chime.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.chime.ChimeConditions.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

new chime.ChimeConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.chime.ChimeConditions.requestTag"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.chime.ChimeConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.chime.ChimeConditions.resourceTag"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.chime.ChimeConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.chime.ChimeConditions.tagKeys"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.chime.ChimeConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateAppInstanceBotConditionKeys">CreateAppInstanceBotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppInstanceBot action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateAppInstanceConditionKeys">CreateAppInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppInstance action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateAppInstanceUserConditionKeys">CreateAppInstanceUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppInstanceUser action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateChannelFlowConditionKeys">CreateChannelFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannelFlow action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateConnectAnalyticsConnectorConditionKeys">CreateConnectAnalyticsConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectAnalyticsConnector action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateConnectCallTransferConnectorConditionKeys">CreateConnectCallTransferConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectCallTransferConnector action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaCapturePipelineConditionKeys">CreateMediaCapturePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMediaCapturePipeline action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaConcatenationPipelineConditionKeys">CreateMediaConcatenationPipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMediaConcatenationPipeline action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaInsightsPipelineConditionKeys">CreateMediaInsightsPipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMediaInsightsPipeline action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaInsightsPipelineConfigurationConditionKeys">CreateMediaInsightsPipelineConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMediaInsightsPipelineConfiguration action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaLiveConnectorPipelineConditionKeys">CreateMediaLiveConnectorPipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMediaLiveConnectorPipeline action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaPipelineKinesisVideoStreamPoolConditionKeys">CreateMediaPipelineKinesisVideoStreamPoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMediaPipelineKinesisVideoStreamPool action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaStreamPipelineConditionKeys">CreateMediaStreamPipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMediaStreamPipeline action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMeetingConditionKeys">CreateMeetingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMeeting action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateMeetingWithAttendeesConditionKeys">CreateMeetingWithAttendeesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMeetingWithAttendees action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateSipMediaApplicationConditionKeys">CreateSipMediaApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSipMediaApplication action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateVoiceConnectorConditionKeys">CreateVoiceConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVoiceConnector action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.CreateVoiceProfileDomainConditionKeys">CreateVoiceProfileDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVoiceProfileDomain action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.TagMeetingConditionKeys">TagMeetingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagMeeting action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.chime.ChimeConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.chime.ChimeConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.chime.ChimeConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.chime.ChimeConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAppInstanceBotConditionKeys`<sup>Required</sup> <a name="CreateAppInstanceBotConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateAppInstanceBotConditionKeys"></a>

```typescript
public readonly CreateAppInstanceBotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppInstanceBot action.

---

##### `CreateAppInstanceConditionKeys`<sup>Required</sup> <a name="CreateAppInstanceConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateAppInstanceConditionKeys"></a>

```typescript
public readonly CreateAppInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppInstance action.

---

##### `CreateAppInstanceUserConditionKeys`<sup>Required</sup> <a name="CreateAppInstanceUserConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateAppInstanceUserConditionKeys"></a>

```typescript
public readonly CreateAppInstanceUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppInstanceUser action.

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateChannelFlowConditionKeys`<sup>Required</sup> <a name="CreateChannelFlowConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateChannelFlowConditionKeys"></a>

```typescript
public readonly CreateChannelFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannelFlow action.

---

##### `CreateConnectAnalyticsConnectorConditionKeys`<sup>Required</sup> <a name="CreateConnectAnalyticsConnectorConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateConnectAnalyticsConnectorConditionKeys"></a>

```typescript
public readonly CreateConnectAnalyticsConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectAnalyticsConnector action.

---

##### `CreateConnectCallTransferConnectorConditionKeys`<sup>Required</sup> <a name="CreateConnectCallTransferConnectorConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateConnectCallTransferConnectorConditionKeys"></a>

```typescript
public readonly CreateConnectCallTransferConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectCallTransferConnector action.

---

##### `CreateMediaCapturePipelineConditionKeys`<sup>Required</sup> <a name="CreateMediaCapturePipelineConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaCapturePipelineConditionKeys"></a>

```typescript
public readonly CreateMediaCapturePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMediaCapturePipeline action.

---

##### `CreateMediaConcatenationPipelineConditionKeys`<sup>Required</sup> <a name="CreateMediaConcatenationPipelineConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaConcatenationPipelineConditionKeys"></a>

```typescript
public readonly CreateMediaConcatenationPipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMediaConcatenationPipeline action.

---

##### `CreateMediaInsightsPipelineConditionKeys`<sup>Required</sup> <a name="CreateMediaInsightsPipelineConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaInsightsPipelineConditionKeys"></a>

```typescript
public readonly CreateMediaInsightsPipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMediaInsightsPipeline action.

---

##### `CreateMediaInsightsPipelineConfigurationConditionKeys`<sup>Required</sup> <a name="CreateMediaInsightsPipelineConfigurationConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaInsightsPipelineConfigurationConditionKeys"></a>

```typescript
public readonly CreateMediaInsightsPipelineConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMediaInsightsPipelineConfiguration action.

---

##### `CreateMediaLiveConnectorPipelineConditionKeys`<sup>Required</sup> <a name="CreateMediaLiveConnectorPipelineConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaLiveConnectorPipelineConditionKeys"></a>

```typescript
public readonly CreateMediaLiveConnectorPipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMediaLiveConnectorPipeline action.

---

##### `CreateMediaPipelineKinesisVideoStreamPoolConditionKeys`<sup>Required</sup> <a name="CreateMediaPipelineKinesisVideoStreamPoolConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaPipelineKinesisVideoStreamPoolConditionKeys"></a>

```typescript
public readonly CreateMediaPipelineKinesisVideoStreamPoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMediaPipelineKinesisVideoStreamPool action.

---

##### `CreateMediaStreamPipelineConditionKeys`<sup>Required</sup> <a name="CreateMediaStreamPipelineConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMediaStreamPipelineConditionKeys"></a>

```typescript
public readonly CreateMediaStreamPipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMediaStreamPipeline action.

---

##### `CreateMeetingConditionKeys`<sup>Required</sup> <a name="CreateMeetingConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMeetingConditionKeys"></a>

```typescript
public readonly CreateMeetingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMeeting action.

---

##### `CreateMeetingWithAttendeesConditionKeys`<sup>Required</sup> <a name="CreateMeetingWithAttendeesConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateMeetingWithAttendeesConditionKeys"></a>

```typescript
public readonly CreateMeetingWithAttendeesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMeetingWithAttendees action.

---

##### `CreateSipMediaApplicationConditionKeys`<sup>Required</sup> <a name="CreateSipMediaApplicationConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateSipMediaApplicationConditionKeys"></a>

```typescript
public readonly CreateSipMediaApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSipMediaApplication action.

---

##### `CreateVoiceConnectorConditionKeys`<sup>Required</sup> <a name="CreateVoiceConnectorConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateVoiceConnectorConditionKeys"></a>

```typescript
public readonly CreateVoiceConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVoiceConnector action.

---

##### `CreateVoiceProfileDomainConditionKeys`<sup>Required</sup> <a name="CreateVoiceProfileDomainConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.CreateVoiceProfileDomainConditionKeys"></a>

```typescript
public readonly CreateVoiceProfileDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVoiceProfileDomain action.

---

##### `TagMeetingConditionKeys`<sup>Required</sup> <a name="TagMeetingConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.TagMeetingConditionKeys"></a>

```typescript
public readonly TagMeetingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagMeeting action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.chime.ChimeConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ChimeOperations <a name="ChimeOperations" id="@cdk_utils/iam.chime.ChimeOperations"></a>

API operation to required IAM actions mapping for chime.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.chime.ChimeOperations.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

new chime.ChimeOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.AssociateChannelFlow">AssociateChannelFlow</a></code> | <code>string[]</code> | IAM actions required for the AssociateChannelFlow API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.AssociatePhoneNumbersWithVoiceConnector">AssociatePhoneNumbersWithVoiceConnector</a></code> | <code>string[]</code> | IAM actions required for the AssociatePhoneNumbersWithVoiceConnector API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.AssociatePhoneNumbersWithVoiceConnectorGroup">AssociatePhoneNumbersWithVoiceConnectorGroup</a></code> | <code>string[]</code> | IAM actions required for the AssociatePhoneNumbersWithVoiceConnectorGroup API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.AssociatePhoneNumberWithUser">AssociatePhoneNumberWithUser</a></code> | <code>string[]</code> | IAM actions required for the AssociatePhoneNumberWithUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.AssociateSigninDelegateGroupsWithAccount">AssociateSigninDelegateGroupsWithAccount</a></code> | <code>string[]</code> | IAM actions required for the AssociateSigninDelegateGroupsWithAccount API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchCreateAttendee">BatchCreateAttendee</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateAttendee API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchCreateChannelMembership">BatchCreateChannelMembership</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateChannelMembership API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchCreateRoomMembership">BatchCreateRoomMembership</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateRoomMembership API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchDeletePhoneNumber">BatchDeletePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the BatchDeletePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchSuspendUser">BatchSuspendUser</a></code> | <code>string[]</code> | IAM actions required for the BatchSuspendUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchUnsuspendUser">BatchUnsuspendUser</a></code> | <code>string[]</code> | IAM actions required for the BatchUnsuspendUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchUpdateAttendeeCapabilitiesExcept">BatchUpdateAttendeeCapabilitiesExcept</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateAttendeeCapabilitiesExcept API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchUpdatePhoneNumber">BatchUpdatePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdatePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.BatchUpdateUser">BatchUpdateUser</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ChannelFlowCallback">ChannelFlowCallback</a></code> | <code>string[]</code> | IAM actions required for the ChannelFlowCallback API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateAccount">CreateAccount</a></code> | <code>string[]</code> | IAM actions required for the CreateAccount API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateAppInstance">CreateAppInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateAppInstance API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateAppInstanceAdmin">CreateAppInstanceAdmin</a></code> | <code>string[]</code> | IAM actions required for the CreateAppInstanceAdmin API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateAppInstanceBot">CreateAppInstanceBot</a></code> | <code>string[]</code> | IAM actions required for the CreateAppInstanceBot API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateAppInstanceUser">CreateAppInstanceUser</a></code> | <code>string[]</code> | IAM actions required for the CreateAppInstanceUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateAttendee">CreateAttendee</a></code> | <code>string[]</code> | IAM actions required for the CreateAttendee API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateBot">CreateBot</a></code> | <code>string[]</code> | IAM actions required for the CreateBot API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateChannelBan">CreateChannelBan</a></code> | <code>string[]</code> | IAM actions required for the CreateChannelBan API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateChannelFlow">CreateChannelFlow</a></code> | <code>string[]</code> | IAM actions required for the CreateChannelFlow API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateChannelMembership">CreateChannelMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateChannelMembership API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateChannelModerator">CreateChannelModerator</a></code> | <code>string[]</code> | IAM actions required for the CreateChannelModerator API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaCapturePipeline">CreateMediaCapturePipeline</a></code> | <code>string[]</code> | IAM actions required for the CreateMediaCapturePipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaConcatenationPipeline">CreateMediaConcatenationPipeline</a></code> | <code>string[]</code> | IAM actions required for the CreateMediaConcatenationPipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaInsightsPipeline">CreateMediaInsightsPipeline</a></code> | <code>string[]</code> | IAM actions required for the CreateMediaInsightsPipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaInsightsPipelineConfiguration">CreateMediaInsightsPipelineConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateMediaInsightsPipelineConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaLiveConnectorPipeline">CreateMediaLiveConnectorPipeline</a></code> | <code>string[]</code> | IAM actions required for the CreateMediaLiveConnectorPipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaPipelineKinesisVideoStreamPool">CreateMediaPipelineKinesisVideoStreamPool</a></code> | <code>string[]</code> | IAM actions required for the CreateMediaPipelineKinesisVideoStreamPool API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaStreamPipeline">CreateMediaStreamPipeline</a></code> | <code>string[]</code> | IAM actions required for the CreateMediaStreamPipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMeeting">CreateMeeting</a></code> | <code>string[]</code> | IAM actions required for the CreateMeeting API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMeetingDialOut">CreateMeetingDialOut</a></code> | <code>string[]</code> | IAM actions required for the CreateMeetingDialOut API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateMeetingWithAttendees">CreateMeetingWithAttendees</a></code> | <code>string[]</code> | IAM actions required for the CreateMeetingWithAttendees API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreatePhoneNumberOrder">CreatePhoneNumberOrder</a></code> | <code>string[]</code> | IAM actions required for the CreatePhoneNumberOrder API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateProxySession">CreateProxySession</a></code> | <code>string[]</code> | IAM actions required for the CreateProxySession API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateRoom">CreateRoom</a></code> | <code>string[]</code> | IAM actions required for the CreateRoom API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateRoomMembership">CreateRoomMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateRoomMembership API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateSipMediaApplication">CreateSipMediaApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateSipMediaApplication API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateSipMediaApplicationCall">CreateSipMediaApplicationCall</a></code> | <code>string[]</code> | IAM actions required for the CreateSipMediaApplicationCall API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateSipRule">CreateSipRule</a></code> | <code>string[]</code> | IAM actions required for the CreateSipRule API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateVoiceConnector">CreateVoiceConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateVoiceConnector API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateVoiceConnectorGroup">CreateVoiceConnectorGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateVoiceConnectorGroup API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateVoiceProfile">CreateVoiceProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateVoiceProfile API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.CreateVoiceProfileDomain">CreateVoiceProfileDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateVoiceProfileDomain API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteAccount">DeleteAccount</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccount API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteAppInstance">DeleteAppInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppInstance API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteAppInstanceAdmin">DeleteAppInstanceAdmin</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppInstanceAdmin API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteAppInstanceBot">DeleteAppInstanceBot</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppInstanceBot API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteAppInstanceUser">DeleteAppInstanceUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppInstanceUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteAttendee">DeleteAttendee</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttendee API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannel">DeleteChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannel API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelBan">DeleteChannelBan</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelBan API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelFlow">DeleteChannelFlow</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelFlow API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelMembership">DeleteChannelMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelMembership API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelMessage">DeleteChannelMessage</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelMessage API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelModerator">DeleteChannelModerator</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelModerator API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteEventsConfiguration">DeleteEventsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteMediaCapturePipeline">DeleteMediaCapturePipeline</a></code> | <code>string[]</code> | IAM actions required for the DeleteMediaCapturePipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteMediaInsightsPipelineConfiguration">DeleteMediaInsightsPipelineConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteMediaInsightsPipelineConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteMediaPipeline">DeleteMediaPipeline</a></code> | <code>string[]</code> | IAM actions required for the DeleteMediaPipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteMediaPipelineKinesisVideoStreamPool">DeleteMediaPipelineKinesisVideoStreamPool</a></code> | <code>string[]</code> | IAM actions required for the DeleteMediaPipelineKinesisVideoStreamPool API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteMeeting">DeleteMeeting</a></code> | <code>string[]</code> | IAM actions required for the DeleteMeeting API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteMessagingStreamingConfigurations">DeleteMessagingStreamingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DeleteMessagingStreamingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeletePhoneNumber">DeletePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the DeletePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteProxySession">DeleteProxySession</a></code> | <code>string[]</code> | IAM actions required for the DeleteProxySession API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteRoom">DeleteRoom</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoom API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteRoomMembership">DeleteRoomMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoomMembership API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteSipMediaApplication">DeleteSipMediaApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteSipMediaApplication API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteSipRule">DeleteSipRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteSipRule API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnector">DeleteVoiceConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnector API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorEmergencyCallingConfiguration">DeleteVoiceConnectorEmergencyCallingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnectorEmergencyCallingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorExternalSystemsConfiguration">DeleteVoiceConnectorExternalSystemsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnectorExternalSystemsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorGroup">DeleteVoiceConnectorGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnectorGroup API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorOrigination">DeleteVoiceConnectorOrigination</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnectorOrigination API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorProxy">DeleteVoiceConnectorProxy</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnectorProxy API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorStreamingConfiguration">DeleteVoiceConnectorStreamingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnectorStreamingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorTermination">DeleteVoiceConnectorTermination</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnectorTermination API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorTerminationCredentials">DeleteVoiceConnectorTerminationCredentials</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceConnectorTerminationCredentials API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceProfile">DeleteVoiceProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceProfile API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceProfileDomain">DeleteVoiceProfileDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteVoiceProfileDomain API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DeregisterAppInstanceUserEndpoint">DeregisterAppInstanceUserEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeregisterAppInstanceUserEndpoint API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstance">DescribeAppInstance</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppInstance API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstanceAdmin">DescribeAppInstanceAdmin</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppInstanceAdmin API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstanceBot">DescribeAppInstanceBot</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppInstanceBot API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstanceUser">DescribeAppInstanceUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppInstanceUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstanceUserEndpoint">DescribeAppInstanceUserEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppInstanceUserEndpoint API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannel">DescribeChannel</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannel API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelBan">DescribeChannelBan</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannelBan API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelFlow">DescribeChannelFlow</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannelFlow API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelMembership">DescribeChannelMembership</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannelMembership API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelMembershipForAppInstanceUser">DescribeChannelMembershipForAppInstanceUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannelMembershipForAppInstanceUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelModeratedByAppInstanceUser">DescribeChannelModeratedByAppInstanceUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannelModeratedByAppInstanceUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelModerator">DescribeChannelModerator</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannelModerator API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DisassociateChannelFlow">DisassociateChannelFlow</a></code> | <code>string[]</code> | IAM actions required for the DisassociateChannelFlow API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DisassociatePhoneNumberFromUser">DisassociatePhoneNumberFromUser</a></code> | <code>string[]</code> | IAM actions required for the DisassociatePhoneNumberFromUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DisassociatePhoneNumbersFromVoiceConnector">DisassociatePhoneNumbersFromVoiceConnector</a></code> | <code>string[]</code> | IAM actions required for the DisassociatePhoneNumbersFromVoiceConnector API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DisassociatePhoneNumbersFromVoiceConnectorGroup">DisassociatePhoneNumbersFromVoiceConnectorGroup</a></code> | <code>string[]</code> | IAM actions required for the DisassociatePhoneNumbersFromVoiceConnectorGroup API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.DisassociateSigninDelegateGroupsFromAccount">DisassociateSigninDelegateGroupsFromAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSigninDelegateGroupsFromAccount API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.InviteUsers">InviteUsers</a></code> | <code>string[]</code> | IAM actions required for the InviteUsers API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListAccounts">ListAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListAccounts API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstanceAdmins">ListAppInstanceAdmins</a></code> | <code>string[]</code> | IAM actions required for the ListAppInstanceAdmins API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstanceBots">ListAppInstanceBots</a></code> | <code>string[]</code> | IAM actions required for the ListAppInstanceBots API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstances">ListAppInstances</a></code> | <code>string[]</code> | IAM actions required for the ListAppInstances API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstanceUserEndpoints">ListAppInstanceUserEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListAppInstanceUserEndpoints API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstanceUsers">ListAppInstanceUsers</a></code> | <code>string[]</code> | IAM actions required for the ListAppInstanceUsers API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListAttendees">ListAttendees</a></code> | <code>string[]</code> | IAM actions required for the ListAttendees API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListAvailableVoiceConnectorRegions">ListAvailableVoiceConnectorRegions</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableVoiceConnectorRegions API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListBots">ListBots</a></code> | <code>string[]</code> | IAM actions required for the ListBots API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannelBans">ListChannelBans</a></code> | <code>string[]</code> | IAM actions required for the ListChannelBans API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannelFlows">ListChannelFlows</a></code> | <code>string[]</code> | IAM actions required for the ListChannelFlows API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannelMemberships">ListChannelMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListChannelMemberships API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannelMembershipsForAppInstanceUser">ListChannelMembershipsForAppInstanceUser</a></code> | <code>string[]</code> | IAM actions required for the ListChannelMembershipsForAppInstanceUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannelMessages">ListChannelMessages</a></code> | <code>string[]</code> | IAM actions required for the ListChannelMessages API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannelModerators">ListChannelModerators</a></code> | <code>string[]</code> | IAM actions required for the ListChannelModerators API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannelsAssociatedWithChannelFlow">ListChannelsAssociatedWithChannelFlow</a></code> | <code>string[]</code> | IAM actions required for the ListChannelsAssociatedWithChannelFlow API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListChannelsModeratedByAppInstanceUser">ListChannelsModeratedByAppInstanceUser</a></code> | <code>string[]</code> | IAM actions required for the ListChannelsModeratedByAppInstanceUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListMediaCapturePipelines">ListMediaCapturePipelines</a></code> | <code>string[]</code> | IAM actions required for the ListMediaCapturePipelines API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListMediaInsightsPipelineConfigurations">ListMediaInsightsPipelineConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListMediaInsightsPipelineConfigurations API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListMediaPipelineKinesisVideoStreamPools">ListMediaPipelineKinesisVideoStreamPools</a></code> | <code>string[]</code> | IAM actions required for the ListMediaPipelineKinesisVideoStreamPools API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListMediaPipelines">ListMediaPipelines</a></code> | <code>string[]</code> | IAM actions required for the ListMediaPipelines API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListPhoneNumberOrders">ListPhoneNumberOrders</a></code> | <code>string[]</code> | IAM actions required for the ListPhoneNumberOrders API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListPhoneNumbers">ListPhoneNumbers</a></code> | <code>string[]</code> | IAM actions required for the ListPhoneNumbers API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListProxySessions">ListProxySessions</a></code> | <code>string[]</code> | IAM actions required for the ListProxySessions API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListRoomMemberships">ListRoomMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListRoomMemberships API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListRooms">ListRooms</a></code> | <code>string[]</code> | IAM actions required for the ListRooms API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListSipMediaApplications">ListSipMediaApplications</a></code> | <code>string[]</code> | IAM actions required for the ListSipMediaApplications API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListSipRules">ListSipRules</a></code> | <code>string[]</code> | IAM actions required for the ListSipRules API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListSubChannels">ListSubChannels</a></code> | <code>string[]</code> | IAM actions required for the ListSubChannels API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListSupportedPhoneNumberCountries">ListSupportedPhoneNumberCountries</a></code> | <code>string[]</code> | IAM actions required for the ListSupportedPhoneNumberCountries API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceConnectorGroups">ListVoiceConnectorGroups</a></code> | <code>string[]</code> | IAM actions required for the ListVoiceConnectorGroups API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceConnectors">ListVoiceConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListVoiceConnectors API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceConnectorTerminationCredentials">ListVoiceConnectorTerminationCredentials</a></code> | <code>string[]</code> | IAM actions required for the ListVoiceConnectorTerminationCredentials API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceProfileDomains">ListVoiceProfileDomains</a></code> | <code>string[]</code> | IAM actions required for the ListVoiceProfileDomains API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceProfiles">ListVoiceProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListVoiceProfiles API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.LogoutUser">LogoutUser</a></code> | <code>string[]</code> | IAM actions required for the LogoutUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetAccount">opGetAccount</a></code> | <code>string[]</code> | IAM actions required for the GetAccount API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetAppInstanceRetentionSettings">opGetAppInstanceRetentionSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAppInstanceRetentionSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetAttendee">opGetAttendee</a></code> | <code>string[]</code> | IAM actions required for the GetAttendee API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetBot">opGetBot</a></code> | <code>string[]</code> | IAM actions required for the GetBot API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetChannelMembershipPreferences">opGetChannelMembershipPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetChannelMembershipPreferences API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetChannelMessage">opGetChannelMessage</a></code> | <code>string[]</code> | IAM actions required for the GetChannelMessage API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetChannelMessageStatus">opGetChannelMessageStatus</a></code> | <code>string[]</code> | IAM actions required for the GetChannelMessageStatus API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetEventsConfiguration">opGetEventsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetEventsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetGlobalSettings">opGetGlobalSettings</a></code> | <code>string[]</code> | IAM actions required for the GetGlobalSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetMediaCapturePipeline">opGetMediaCapturePipeline</a></code> | <code>string[]</code> | IAM actions required for the GetMediaCapturePipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetMediaInsightsPipelineConfiguration">opGetMediaInsightsPipelineConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetMediaInsightsPipelineConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetMediaPipeline">opGetMediaPipeline</a></code> | <code>string[]</code> | IAM actions required for the GetMediaPipeline API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetMediaPipelineKinesisVideoStreamPool">opGetMediaPipelineKinesisVideoStreamPool</a></code> | <code>string[]</code> | IAM actions required for the GetMediaPipelineKinesisVideoStreamPool API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetMeeting">opGetMeeting</a></code> | <code>string[]</code> | IAM actions required for the GetMeeting API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetMessagingSessionEndpoint">opGetMessagingSessionEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetMessagingSessionEndpoint API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetMessagingStreamingConfigurations">opGetMessagingStreamingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the GetMessagingStreamingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetPhoneNumber">opGetPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the GetPhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetPhoneNumberOrder">opGetPhoneNumberOrder</a></code> | <code>string[]</code> | IAM actions required for the GetPhoneNumberOrder API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetPhoneNumberSettings">opGetPhoneNumberSettings</a></code> | <code>string[]</code> | IAM actions required for the GetPhoneNumberSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetProxySession">opGetProxySession</a></code> | <code>string[]</code> | IAM actions required for the GetProxySession API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetRetentionSettings">opGetRetentionSettings</a></code> | <code>string[]</code> | IAM actions required for the GetRetentionSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetRoom">opGetRoom</a></code> | <code>string[]</code> | IAM actions required for the GetRoom API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetSipMediaApplication">opGetSipMediaApplication</a></code> | <code>string[]</code> | IAM actions required for the GetSipMediaApplication API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetSipMediaApplicationAlexaSkillConfiguration">opGetSipMediaApplicationAlexaSkillConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetSipMediaApplicationAlexaSkillConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetSipMediaApplicationLoggingConfiguration">opGetSipMediaApplicationLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetSipMediaApplicationLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetSipRule">opGetSipRule</a></code> | <code>string[]</code> | IAM actions required for the GetSipRule API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetSpeakerSearchTask">opGetSpeakerSearchTask</a></code> | <code>string[]</code> | IAM actions required for the GetSpeakerSearchTask API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetUser">opGetUser</a></code> | <code>string[]</code> | IAM actions required for the GetUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetUserSettings">opGetUserSettings</a></code> | <code>string[]</code> | IAM actions required for the GetUserSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnector">opGetVoiceConnector</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnector API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorEmergencyCallingConfiguration">opGetVoiceConnectorEmergencyCallingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorEmergencyCallingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorExternalSystemsConfiguration">opGetVoiceConnectorExternalSystemsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorExternalSystemsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorGroup">opGetVoiceConnectorGroup</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorGroup API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorLoggingConfiguration">opGetVoiceConnectorLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorOrigination">opGetVoiceConnectorOrigination</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorOrigination API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorProxy">opGetVoiceConnectorProxy</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorProxy API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorStreamingConfiguration">opGetVoiceConnectorStreamingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorStreamingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorTermination">opGetVoiceConnectorTermination</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorTermination API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorTerminationHealth">opGetVoiceConnectorTerminationHealth</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceConnectorTerminationHealth API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceProfile">opGetVoiceProfile</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceProfile API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceProfileDomain">opGetVoiceProfileDomain</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceProfileDomain API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceToneAnalysisTask">opGetVoiceToneAnalysisTask</a></code> | <code>string[]</code> | IAM actions required for the GetVoiceToneAnalysisTask API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutAppInstanceRetentionSettings">PutAppInstanceRetentionSettings</a></code> | <code>string[]</code> | IAM actions required for the PutAppInstanceRetentionSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutAppInstanceUserExpirationSettings">PutAppInstanceUserExpirationSettings</a></code> | <code>string[]</code> | IAM actions required for the PutAppInstanceUserExpirationSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutChannelExpirationSettings">PutChannelExpirationSettings</a></code> | <code>string[]</code> | IAM actions required for the PutChannelExpirationSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutChannelMembershipPreferences">PutChannelMembershipPreferences</a></code> | <code>string[]</code> | IAM actions required for the PutChannelMembershipPreferences API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutEventsConfiguration">PutEventsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutEventsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutMessagingStreamingConfigurations">PutMessagingStreamingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the PutMessagingStreamingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutRetentionSettings">PutRetentionSettings</a></code> | <code>string[]</code> | IAM actions required for the PutRetentionSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutSipMediaApplicationAlexaSkillConfiguration">PutSipMediaApplicationAlexaSkillConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutSipMediaApplicationAlexaSkillConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutSipMediaApplicationLoggingConfiguration">PutSipMediaApplicationLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutSipMediaApplicationLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorEmergencyCallingConfiguration">PutVoiceConnectorEmergencyCallingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutVoiceConnectorEmergencyCallingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorExternalSystemsConfiguration">PutVoiceConnectorExternalSystemsConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutVoiceConnectorExternalSystemsConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorLoggingConfiguration">PutVoiceConnectorLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutVoiceConnectorLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorOrigination">PutVoiceConnectorOrigination</a></code> | <code>string[]</code> | IAM actions required for the PutVoiceConnectorOrigination API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorProxy">PutVoiceConnectorProxy</a></code> | <code>string[]</code> | IAM actions required for the PutVoiceConnectorProxy API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorStreamingConfiguration">PutVoiceConnectorStreamingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutVoiceConnectorStreamingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorTermination">PutVoiceConnectorTermination</a></code> | <code>string[]</code> | IAM actions required for the PutVoiceConnectorTermination API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorTerminationCredentials">PutVoiceConnectorTerminationCredentials</a></code> | <code>string[]</code> | IAM actions required for the PutVoiceConnectorTerminationCredentials API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.RedactChannelMessage">RedactChannelMessage</a></code> | <code>string[]</code> | IAM actions required for the RedactChannelMessage API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.RedactConversationMessage">RedactConversationMessage</a></code> | <code>string[]</code> | IAM actions required for the RedactConversationMessage API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.RedactRoomMessage">RedactRoomMessage</a></code> | <code>string[]</code> | IAM actions required for the RedactRoomMessage API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.RegenerateSecurityToken">RegenerateSecurityToken</a></code> | <code>string[]</code> | IAM actions required for the RegenerateSecurityToken API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.RegisterAppInstanceUserEndpoint">RegisterAppInstanceUserEndpoint</a></code> | <code>string[]</code> | IAM actions required for the RegisterAppInstanceUserEndpoint API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ResetPersonalPIN">ResetPersonalPIN</a></code> | <code>string[]</code> | IAM actions required for the ResetPersonalPIN API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.RestorePhoneNumber">RestorePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the RestorePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.SearchAvailablePhoneNumbers">SearchAvailablePhoneNumbers</a></code> | <code>string[]</code> | IAM actions required for the SearchAvailablePhoneNumbers API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.SearchChannels">SearchChannels</a></code> | <code>string[]</code> | IAM actions required for the SearchChannels API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.SendChannelMessage">SendChannelMessage</a></code> | <code>string[]</code> | IAM actions required for the SendChannelMessage API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.StartMeetingTranscription">StartMeetingTranscription</a></code> | <code>string[]</code> | IAM actions required for the StartMeetingTranscription API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.StartSpeakerSearchTask">StartSpeakerSearchTask</a></code> | <code>string[]</code> | IAM actions required for the StartSpeakerSearchTask API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.StartVoiceToneAnalysisTask">StartVoiceToneAnalysisTask</a></code> | <code>string[]</code> | IAM actions required for the StartVoiceToneAnalysisTask API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.StopMeetingTranscription">StopMeetingTranscription</a></code> | <code>string[]</code> | IAM actions required for the StopMeetingTranscription API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.StopSpeakerSearchTask">StopSpeakerSearchTask</a></code> | <code>string[]</code> | IAM actions required for the StopSpeakerSearchTask API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.StopVoiceToneAnalysisTask">StopVoiceToneAnalysisTask</a></code> | <code>string[]</code> | IAM actions required for the StopVoiceToneAnalysisTask API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateAccount">UpdateAccount</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccount API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateAppInstance">UpdateAppInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppInstance API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateAppInstanceBot">UpdateAppInstanceBot</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppInstanceBot API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateAppInstanceUser">UpdateAppInstanceUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppInstanceUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateAppInstanceUserEndpoint">UpdateAppInstanceUserEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppInstanceUserEndpoint API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateAttendeeCapabilities">UpdateAttendeeCapabilities</a></code> | <code>string[]</code> | IAM actions required for the UpdateAttendeeCapabilities API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateBot">UpdateBot</a></code> | <code>string[]</code> | IAM actions required for the UpdateBot API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateChannelFlow">UpdateChannelFlow</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannelFlow API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateChannelMessage">UpdateChannelMessage</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannelMessage API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateChannelReadMarker">UpdateChannelReadMarker</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannelReadMarker API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateGlobalSettings">UpdateGlobalSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlobalSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateMediaInsightsPipelineConfiguration">UpdateMediaInsightsPipelineConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateMediaInsightsPipelineConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateMediaInsightsPipelineStatus">UpdateMediaInsightsPipelineStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateMediaInsightsPipelineStatus API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateMediaPipelineKinesisVideoStreamPool">UpdateMediaPipelineKinesisVideoStreamPool</a></code> | <code>string[]</code> | IAM actions required for the UpdateMediaPipelineKinesisVideoStreamPool API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdatePhoneNumber">UpdatePhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the UpdatePhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdatePhoneNumberSettings">UpdatePhoneNumberSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdatePhoneNumberSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateProxySession">UpdateProxySession</a></code> | <code>string[]</code> | IAM actions required for the UpdateProxySession API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateRoom">UpdateRoom</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoom API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateRoomMembership">UpdateRoomMembership</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoomMembership API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateSipMediaApplication">UpdateSipMediaApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateSipMediaApplication API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateSipMediaApplicationCall">UpdateSipMediaApplicationCall</a></code> | <code>string[]</code> | IAM actions required for the UpdateSipMediaApplicationCall API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateSipRule">UpdateSipRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateSipRule API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateUserSettings">UpdateUserSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserSettings API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateVoiceConnector">UpdateVoiceConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateVoiceConnector API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateVoiceConnectorGroup">UpdateVoiceConnectorGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateVoiceConnectorGroup API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateVoiceProfile">UpdateVoiceProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateVoiceProfile API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.UpdateVoiceProfileDomain">UpdateVoiceProfileDomain</a></code> | <code>string[]</code> | IAM actions required for the UpdateVoiceProfileDomain API call. |
| <code><a href="#@cdk_utils/iam.chime.ChimeOperations.property.ValidateE911Address">ValidateE911Address</a></code> | <code>string[]</code> | IAM actions required for the ValidateE911Address API call. |

---

##### `AssociateChannelFlow`<sup>Required</sup> <a name="AssociateChannelFlow" id="@cdk_utils/iam.chime.ChimeOperations.property.AssociateChannelFlow"></a>

```typescript
public readonly AssociateChannelFlow: string[];
```

- *Type:* string[]

IAM actions required for the AssociateChannelFlow API call.

---

##### `AssociatePhoneNumbersWithVoiceConnector`<sup>Required</sup> <a name="AssociatePhoneNumbersWithVoiceConnector" id="@cdk_utils/iam.chime.ChimeOperations.property.AssociatePhoneNumbersWithVoiceConnector"></a>

```typescript
public readonly AssociatePhoneNumbersWithVoiceConnector: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePhoneNumbersWithVoiceConnector API call.

---

##### `AssociatePhoneNumbersWithVoiceConnectorGroup`<sup>Required</sup> <a name="AssociatePhoneNumbersWithVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeOperations.property.AssociatePhoneNumbersWithVoiceConnectorGroup"></a>

```typescript
public readonly AssociatePhoneNumbersWithVoiceConnectorGroup: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePhoneNumbersWithVoiceConnectorGroup API call.

---

##### `AssociatePhoneNumberWithUser`<sup>Required</sup> <a name="AssociatePhoneNumberWithUser" id="@cdk_utils/iam.chime.ChimeOperations.property.AssociatePhoneNumberWithUser"></a>

```typescript
public readonly AssociatePhoneNumberWithUser: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePhoneNumberWithUser API call.

---

##### `AssociateSigninDelegateGroupsWithAccount`<sup>Required</sup> <a name="AssociateSigninDelegateGroupsWithAccount" id="@cdk_utils/iam.chime.ChimeOperations.property.AssociateSigninDelegateGroupsWithAccount"></a>

```typescript
public readonly AssociateSigninDelegateGroupsWithAccount: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSigninDelegateGroupsWithAccount API call.

---

##### `BatchCreateAttendee`<sup>Required</sup> <a name="BatchCreateAttendee" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchCreateAttendee"></a>

```typescript
public readonly BatchCreateAttendee: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateAttendee API call.

---

##### `BatchCreateChannelMembership`<sup>Required</sup> <a name="BatchCreateChannelMembership" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchCreateChannelMembership"></a>

```typescript
public readonly BatchCreateChannelMembership: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateChannelMembership API call.

---

##### `BatchCreateRoomMembership`<sup>Required</sup> <a name="BatchCreateRoomMembership" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchCreateRoomMembership"></a>

```typescript
public readonly BatchCreateRoomMembership: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateRoomMembership API call.

---

##### `BatchDeletePhoneNumber`<sup>Required</sup> <a name="BatchDeletePhoneNumber" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchDeletePhoneNumber"></a>

```typescript
public readonly BatchDeletePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeletePhoneNumber API call.

---

##### `BatchSuspendUser`<sup>Required</sup> <a name="BatchSuspendUser" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchSuspendUser"></a>

```typescript
public readonly BatchSuspendUser: string[];
```

- *Type:* string[]

IAM actions required for the BatchSuspendUser API call.

---

##### `BatchUnsuspendUser`<sup>Required</sup> <a name="BatchUnsuspendUser" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchUnsuspendUser"></a>

```typescript
public readonly BatchUnsuspendUser: string[];
```

- *Type:* string[]

IAM actions required for the BatchUnsuspendUser API call.

---

##### `BatchUpdateAttendeeCapabilitiesExcept`<sup>Required</sup> <a name="BatchUpdateAttendeeCapabilitiesExcept" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchUpdateAttendeeCapabilitiesExcept"></a>

```typescript
public readonly BatchUpdateAttendeeCapabilitiesExcept: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateAttendeeCapabilitiesExcept API call.

---

##### `BatchUpdatePhoneNumber`<sup>Required</sup> <a name="BatchUpdatePhoneNumber" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchUpdatePhoneNumber"></a>

```typescript
public readonly BatchUpdatePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdatePhoneNumber API call.

---

##### `BatchUpdateUser`<sup>Required</sup> <a name="BatchUpdateUser" id="@cdk_utils/iam.chime.ChimeOperations.property.BatchUpdateUser"></a>

```typescript
public readonly BatchUpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateUser API call.

---

##### `ChannelFlowCallback`<sup>Required</sup> <a name="ChannelFlowCallback" id="@cdk_utils/iam.chime.ChimeOperations.property.ChannelFlowCallback"></a>

```typescript
public readonly ChannelFlowCallback: string[];
```

- *Type:* string[]

IAM actions required for the ChannelFlowCallback API call.

---

##### `CreateAccount`<sup>Required</sup> <a name="CreateAccount" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateAccount"></a>

```typescript
public readonly CreateAccount: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccount API call.

---

##### `CreateAppInstance`<sup>Required</sup> <a name="CreateAppInstance" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateAppInstance"></a>

```typescript
public readonly CreateAppInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppInstance API call.

---

##### `CreateAppInstanceAdmin`<sup>Required</sup> <a name="CreateAppInstanceAdmin" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateAppInstanceAdmin"></a>

```typescript
public readonly CreateAppInstanceAdmin: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppInstanceAdmin API call.

---

##### `CreateAppInstanceBot`<sup>Required</sup> <a name="CreateAppInstanceBot" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateAppInstanceBot"></a>

```typescript
public readonly CreateAppInstanceBot: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppInstanceBot API call.

---

##### `CreateAppInstanceUser`<sup>Required</sup> <a name="CreateAppInstanceUser" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateAppInstanceUser"></a>

```typescript
public readonly CreateAppInstanceUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppInstanceUser API call.

---

##### `CreateAttendee`<sup>Required</sup> <a name="CreateAttendee" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateAttendee"></a>

```typescript
public readonly CreateAttendee: string[];
```

- *Type:* string[]

IAM actions required for the CreateAttendee API call.

---

##### `CreateBot`<sup>Required</sup> <a name="CreateBot" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateBot"></a>

```typescript
public readonly CreateBot: string[];
```

- *Type:* string[]

IAM actions required for the CreateBot API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateChannelBan`<sup>Required</sup> <a name="CreateChannelBan" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateChannelBan"></a>

```typescript
public readonly CreateChannelBan: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannelBan API call.

---

##### `CreateChannelFlow`<sup>Required</sup> <a name="CreateChannelFlow" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateChannelFlow"></a>

```typescript
public readonly CreateChannelFlow: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannelFlow API call.

---

##### `CreateChannelMembership`<sup>Required</sup> <a name="CreateChannelMembership" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateChannelMembership"></a>

```typescript
public readonly CreateChannelMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannelMembership API call.

---

##### `CreateChannelModerator`<sup>Required</sup> <a name="CreateChannelModerator" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateChannelModerator"></a>

```typescript
public readonly CreateChannelModerator: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannelModerator API call.

---

##### `CreateMediaCapturePipeline`<sup>Required</sup> <a name="CreateMediaCapturePipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaCapturePipeline"></a>

```typescript
public readonly CreateMediaCapturePipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreateMediaCapturePipeline API call.

---

##### `CreateMediaConcatenationPipeline`<sup>Required</sup> <a name="CreateMediaConcatenationPipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaConcatenationPipeline"></a>

```typescript
public readonly CreateMediaConcatenationPipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreateMediaConcatenationPipeline API call.

---

##### `CreateMediaInsightsPipeline`<sup>Required</sup> <a name="CreateMediaInsightsPipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaInsightsPipeline"></a>

```typescript
public readonly CreateMediaInsightsPipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreateMediaInsightsPipeline API call.

---

##### `CreateMediaInsightsPipelineConfiguration`<sup>Required</sup> <a name="CreateMediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaInsightsPipelineConfiguration"></a>

```typescript
public readonly CreateMediaInsightsPipelineConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateMediaInsightsPipelineConfiguration API call.

---

##### `CreateMediaLiveConnectorPipeline`<sup>Required</sup> <a name="CreateMediaLiveConnectorPipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaLiveConnectorPipeline"></a>

```typescript
public readonly CreateMediaLiveConnectorPipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreateMediaLiveConnectorPipeline API call.

---

##### `CreateMediaPipelineKinesisVideoStreamPool`<sup>Required</sup> <a name="CreateMediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaPipelineKinesisVideoStreamPool"></a>

```typescript
public readonly CreateMediaPipelineKinesisVideoStreamPool: string[];
```

- *Type:* string[]

IAM actions required for the CreateMediaPipelineKinesisVideoStreamPool API call.

---

##### `CreateMediaStreamPipeline`<sup>Required</sup> <a name="CreateMediaStreamPipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMediaStreamPipeline"></a>

```typescript
public readonly CreateMediaStreamPipeline: string[];
```

- *Type:* string[]

IAM actions required for the CreateMediaStreamPipeline API call.

---

##### `CreateMeeting`<sup>Required</sup> <a name="CreateMeeting" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMeeting"></a>

```typescript
public readonly CreateMeeting: string[];
```

- *Type:* string[]

IAM actions required for the CreateMeeting API call.

---

##### `CreateMeetingDialOut`<sup>Required</sup> <a name="CreateMeetingDialOut" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMeetingDialOut"></a>

```typescript
public readonly CreateMeetingDialOut: string[];
```

- *Type:* string[]

IAM actions required for the CreateMeetingDialOut API call.

---

##### `CreateMeetingWithAttendees`<sup>Required</sup> <a name="CreateMeetingWithAttendees" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateMeetingWithAttendees"></a>

```typescript
public readonly CreateMeetingWithAttendees: string[];
```

- *Type:* string[]

IAM actions required for the CreateMeetingWithAttendees API call.

---

##### `CreatePhoneNumberOrder`<sup>Required</sup> <a name="CreatePhoneNumberOrder" id="@cdk_utils/iam.chime.ChimeOperations.property.CreatePhoneNumberOrder"></a>

```typescript
public readonly CreatePhoneNumberOrder: string[];
```

- *Type:* string[]

IAM actions required for the CreatePhoneNumberOrder API call.

---

##### `CreateProxySession`<sup>Required</sup> <a name="CreateProxySession" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateProxySession"></a>

```typescript
public readonly CreateProxySession: string[];
```

- *Type:* string[]

IAM actions required for the CreateProxySession API call.

---

##### `CreateRoom`<sup>Required</sup> <a name="CreateRoom" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateRoom"></a>

```typescript
public readonly CreateRoom: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoom API call.

---

##### `CreateRoomMembership`<sup>Required</sup> <a name="CreateRoomMembership" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateRoomMembership"></a>

```typescript
public readonly CreateRoomMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoomMembership API call.

---

##### `CreateSipMediaApplication`<sup>Required</sup> <a name="CreateSipMediaApplication" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateSipMediaApplication"></a>

```typescript
public readonly CreateSipMediaApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateSipMediaApplication API call.

---

##### `CreateSipMediaApplicationCall`<sup>Required</sup> <a name="CreateSipMediaApplicationCall" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateSipMediaApplicationCall"></a>

```typescript
public readonly CreateSipMediaApplicationCall: string[];
```

- *Type:* string[]

IAM actions required for the CreateSipMediaApplicationCall API call.

---

##### `CreateSipRule`<sup>Required</sup> <a name="CreateSipRule" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateSipRule"></a>

```typescript
public readonly CreateSipRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateSipRule API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `CreateVoiceConnector`<sup>Required</sup> <a name="CreateVoiceConnector" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateVoiceConnector"></a>

```typescript
public readonly CreateVoiceConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateVoiceConnector API call.

---

##### `CreateVoiceConnectorGroup`<sup>Required</sup> <a name="CreateVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateVoiceConnectorGroup"></a>

```typescript
public readonly CreateVoiceConnectorGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateVoiceConnectorGroup API call.

---

##### `CreateVoiceProfile`<sup>Required</sup> <a name="CreateVoiceProfile" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateVoiceProfile"></a>

```typescript
public readonly CreateVoiceProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateVoiceProfile API call.

---

##### `CreateVoiceProfileDomain`<sup>Required</sup> <a name="CreateVoiceProfileDomain" id="@cdk_utils/iam.chime.ChimeOperations.property.CreateVoiceProfileDomain"></a>

```typescript
public readonly CreateVoiceProfileDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateVoiceProfileDomain API call.

---

##### `DeleteAccount`<sup>Required</sup> <a name="DeleteAccount" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteAccount"></a>

```typescript
public readonly DeleteAccount: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccount API call.

---

##### `DeleteAppInstance`<sup>Required</sup> <a name="DeleteAppInstance" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteAppInstance"></a>

```typescript
public readonly DeleteAppInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppInstance API call.

---

##### `DeleteAppInstanceAdmin`<sup>Required</sup> <a name="DeleteAppInstanceAdmin" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteAppInstanceAdmin"></a>

```typescript
public readonly DeleteAppInstanceAdmin: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppInstanceAdmin API call.

---

##### `DeleteAppInstanceBot`<sup>Required</sup> <a name="DeleteAppInstanceBot" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteAppInstanceBot"></a>

```typescript
public readonly DeleteAppInstanceBot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppInstanceBot API call.

---

##### `DeleteAppInstanceUser`<sup>Required</sup> <a name="DeleteAppInstanceUser" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteAppInstanceUser"></a>

```typescript
public readonly DeleteAppInstanceUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppInstanceUser API call.

---

##### `DeleteAttendee`<sup>Required</sup> <a name="DeleteAttendee" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteAttendee"></a>

```typescript
public readonly DeleteAttendee: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttendee API call.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannel API call.

---

##### `DeleteChannelBan`<sup>Required</sup> <a name="DeleteChannelBan" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelBan"></a>

```typescript
public readonly DeleteChannelBan: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelBan API call.

---

##### `DeleteChannelFlow`<sup>Required</sup> <a name="DeleteChannelFlow" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelFlow"></a>

```typescript
public readonly DeleteChannelFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelFlow API call.

---

##### `DeleteChannelMembership`<sup>Required</sup> <a name="DeleteChannelMembership" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelMembership"></a>

```typescript
public readonly DeleteChannelMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelMembership API call.

---

##### `DeleteChannelMessage`<sup>Required</sup> <a name="DeleteChannelMessage" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelMessage"></a>

```typescript
public readonly DeleteChannelMessage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelMessage API call.

---

##### `DeleteChannelModerator`<sup>Required</sup> <a name="DeleteChannelModerator" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteChannelModerator"></a>

```typescript
public readonly DeleteChannelModerator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelModerator API call.

---

##### `DeleteEventsConfiguration`<sup>Required</sup> <a name="DeleteEventsConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteEventsConfiguration"></a>

```typescript
public readonly DeleteEventsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventsConfiguration API call.

---

##### `DeleteMediaCapturePipeline`<sup>Required</sup> <a name="DeleteMediaCapturePipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteMediaCapturePipeline"></a>

```typescript
public readonly DeleteMediaCapturePipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMediaCapturePipeline API call.

---

##### `DeleteMediaInsightsPipelineConfiguration`<sup>Required</sup> <a name="DeleteMediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteMediaInsightsPipelineConfiguration"></a>

```typescript
public readonly DeleteMediaInsightsPipelineConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMediaInsightsPipelineConfiguration API call.

---

##### `DeleteMediaPipeline`<sup>Required</sup> <a name="DeleteMediaPipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteMediaPipeline"></a>

```typescript
public readonly DeleteMediaPipeline: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMediaPipeline API call.

---

##### `DeleteMediaPipelineKinesisVideoStreamPool`<sup>Required</sup> <a name="DeleteMediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteMediaPipelineKinesisVideoStreamPool"></a>

```typescript
public readonly DeleteMediaPipelineKinesisVideoStreamPool: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMediaPipelineKinesisVideoStreamPool API call.

---

##### `DeleteMeeting`<sup>Required</sup> <a name="DeleteMeeting" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteMeeting"></a>

```typescript
public readonly DeleteMeeting: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMeeting API call.

---

##### `DeleteMessagingStreamingConfigurations`<sup>Required</sup> <a name="DeleteMessagingStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteMessagingStreamingConfigurations"></a>

```typescript
public readonly DeleteMessagingStreamingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMessagingStreamingConfigurations API call.

---

##### `DeletePhoneNumber`<sup>Required</sup> <a name="DeletePhoneNumber" id="@cdk_utils/iam.chime.ChimeOperations.property.DeletePhoneNumber"></a>

```typescript
public readonly DeletePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the DeletePhoneNumber API call.

---

##### `DeleteProxySession`<sup>Required</sup> <a name="DeleteProxySession" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteProxySession"></a>

```typescript
public readonly DeleteProxySession: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProxySession API call.

---

##### `DeleteRoom`<sup>Required</sup> <a name="DeleteRoom" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteRoom"></a>

```typescript
public readonly DeleteRoom: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoom API call.

---

##### `DeleteRoomMembership`<sup>Required</sup> <a name="DeleteRoomMembership" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteRoomMembership"></a>

```typescript
public readonly DeleteRoomMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoomMembership API call.

---

##### `DeleteSipMediaApplication`<sup>Required</sup> <a name="DeleteSipMediaApplication" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteSipMediaApplication"></a>

```typescript
public readonly DeleteSipMediaApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSipMediaApplication API call.

---

##### `DeleteSipRule`<sup>Required</sup> <a name="DeleteSipRule" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteSipRule"></a>

```typescript
public readonly DeleteSipRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSipRule API call.

---

##### `DeleteVoiceConnector`<sup>Required</sup> <a name="DeleteVoiceConnector" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnector"></a>

```typescript
public readonly DeleteVoiceConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnector API call.

---

##### `DeleteVoiceConnectorEmergencyCallingConfiguration`<sup>Required</sup> <a name="DeleteVoiceConnectorEmergencyCallingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public readonly DeleteVoiceConnectorEmergencyCallingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnectorEmergencyCallingConfiguration API call.

---

##### `DeleteVoiceConnectorExternalSystemsConfiguration`<sup>Required</sup> <a name="DeleteVoiceConnectorExternalSystemsConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorExternalSystemsConfiguration"></a>

```typescript
public readonly DeleteVoiceConnectorExternalSystemsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnectorExternalSystemsConfiguration API call.

---

##### `DeleteVoiceConnectorGroup`<sup>Required</sup> <a name="DeleteVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorGroup"></a>

```typescript
public readonly DeleteVoiceConnectorGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnectorGroup API call.

---

##### `DeleteVoiceConnectorOrigination`<sup>Required</sup> <a name="DeleteVoiceConnectorOrigination" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorOrigination"></a>

```typescript
public readonly DeleteVoiceConnectorOrigination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnectorOrigination API call.

---

##### `DeleteVoiceConnectorProxy`<sup>Required</sup> <a name="DeleteVoiceConnectorProxy" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorProxy"></a>

```typescript
public readonly DeleteVoiceConnectorProxy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnectorProxy API call.

---

##### `DeleteVoiceConnectorStreamingConfiguration`<sup>Required</sup> <a name="DeleteVoiceConnectorStreamingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorStreamingConfiguration"></a>

```typescript
public readonly DeleteVoiceConnectorStreamingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnectorStreamingConfiguration API call.

---

##### `DeleteVoiceConnectorTermination`<sup>Required</sup> <a name="DeleteVoiceConnectorTermination" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorTermination"></a>

```typescript
public readonly DeleteVoiceConnectorTermination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnectorTermination API call.

---

##### `DeleteVoiceConnectorTerminationCredentials`<sup>Required</sup> <a name="DeleteVoiceConnectorTerminationCredentials" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceConnectorTerminationCredentials"></a>

```typescript
public readonly DeleteVoiceConnectorTerminationCredentials: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceConnectorTerminationCredentials API call.

---

##### `DeleteVoiceProfile`<sup>Required</sup> <a name="DeleteVoiceProfile" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceProfile"></a>

```typescript
public readonly DeleteVoiceProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceProfile API call.

---

##### `DeleteVoiceProfileDomain`<sup>Required</sup> <a name="DeleteVoiceProfileDomain" id="@cdk_utils/iam.chime.ChimeOperations.property.DeleteVoiceProfileDomain"></a>

```typescript
public readonly DeleteVoiceProfileDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVoiceProfileDomain API call.

---

##### `DeregisterAppInstanceUserEndpoint`<sup>Required</sup> <a name="DeregisterAppInstanceUserEndpoint" id="@cdk_utils/iam.chime.ChimeOperations.property.DeregisterAppInstanceUserEndpoint"></a>

```typescript
public readonly DeregisterAppInstanceUserEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterAppInstanceUserEndpoint API call.

---

##### `DescribeAppInstance`<sup>Required</sup> <a name="DescribeAppInstance" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstance"></a>

```typescript
public readonly DescribeAppInstance: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppInstance API call.

---

##### `DescribeAppInstanceAdmin`<sup>Required</sup> <a name="DescribeAppInstanceAdmin" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstanceAdmin"></a>

```typescript
public readonly DescribeAppInstanceAdmin: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppInstanceAdmin API call.

---

##### `DescribeAppInstanceBot`<sup>Required</sup> <a name="DescribeAppInstanceBot" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstanceBot"></a>

```typescript
public readonly DescribeAppInstanceBot: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppInstanceBot API call.

---

##### `DescribeAppInstanceUser`<sup>Required</sup> <a name="DescribeAppInstanceUser" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstanceUser"></a>

```typescript
public readonly DescribeAppInstanceUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppInstanceUser API call.

---

##### `DescribeAppInstanceUserEndpoint`<sup>Required</sup> <a name="DescribeAppInstanceUserEndpoint" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeAppInstanceUserEndpoint"></a>

```typescript
public readonly DescribeAppInstanceUserEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppInstanceUserEndpoint API call.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannel API call.

---

##### `DescribeChannelBan`<sup>Required</sup> <a name="DescribeChannelBan" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelBan"></a>

```typescript
public readonly DescribeChannelBan: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannelBan API call.

---

##### `DescribeChannelFlow`<sup>Required</sup> <a name="DescribeChannelFlow" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelFlow"></a>

```typescript
public readonly DescribeChannelFlow: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannelFlow API call.

---

##### `DescribeChannelMembership`<sup>Required</sup> <a name="DescribeChannelMembership" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelMembership"></a>

```typescript
public readonly DescribeChannelMembership: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannelMembership API call.

---

##### `DescribeChannelMembershipForAppInstanceUser`<sup>Required</sup> <a name="DescribeChannelMembershipForAppInstanceUser" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelMembershipForAppInstanceUser"></a>

```typescript
public readonly DescribeChannelMembershipForAppInstanceUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannelMembershipForAppInstanceUser API call.

---

##### `DescribeChannelModeratedByAppInstanceUser`<sup>Required</sup> <a name="DescribeChannelModeratedByAppInstanceUser" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelModeratedByAppInstanceUser"></a>

```typescript
public readonly DescribeChannelModeratedByAppInstanceUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannelModeratedByAppInstanceUser API call.

---

##### `DescribeChannelModerator`<sup>Required</sup> <a name="DescribeChannelModerator" id="@cdk_utils/iam.chime.ChimeOperations.property.DescribeChannelModerator"></a>

```typescript
public readonly DescribeChannelModerator: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannelModerator API call.

---

##### `DisassociateChannelFlow`<sup>Required</sup> <a name="DisassociateChannelFlow" id="@cdk_utils/iam.chime.ChimeOperations.property.DisassociateChannelFlow"></a>

```typescript
public readonly DisassociateChannelFlow: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateChannelFlow API call.

---

##### `DisassociatePhoneNumberFromUser`<sup>Required</sup> <a name="DisassociatePhoneNumberFromUser" id="@cdk_utils/iam.chime.ChimeOperations.property.DisassociatePhoneNumberFromUser"></a>

```typescript
public readonly DisassociatePhoneNumberFromUser: string[];
```

- *Type:* string[]

IAM actions required for the DisassociatePhoneNumberFromUser API call.

---

##### `DisassociatePhoneNumbersFromVoiceConnector`<sup>Required</sup> <a name="DisassociatePhoneNumbersFromVoiceConnector" id="@cdk_utils/iam.chime.ChimeOperations.property.DisassociatePhoneNumbersFromVoiceConnector"></a>

```typescript
public readonly DisassociatePhoneNumbersFromVoiceConnector: string[];
```

- *Type:* string[]

IAM actions required for the DisassociatePhoneNumbersFromVoiceConnector API call.

---

##### `DisassociatePhoneNumbersFromVoiceConnectorGroup`<sup>Required</sup> <a name="DisassociatePhoneNumbersFromVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeOperations.property.DisassociatePhoneNumbersFromVoiceConnectorGroup"></a>

```typescript
public readonly DisassociatePhoneNumbersFromVoiceConnectorGroup: string[];
```

- *Type:* string[]

IAM actions required for the DisassociatePhoneNumbersFromVoiceConnectorGroup API call.

---

##### `DisassociateSigninDelegateGroupsFromAccount`<sup>Required</sup> <a name="DisassociateSigninDelegateGroupsFromAccount" id="@cdk_utils/iam.chime.ChimeOperations.property.DisassociateSigninDelegateGroupsFromAccount"></a>

```typescript
public readonly DisassociateSigninDelegateGroupsFromAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSigninDelegateGroupsFromAccount API call.

---

##### `InviteUsers`<sup>Required</sup> <a name="InviteUsers" id="@cdk_utils/iam.chime.ChimeOperations.property.InviteUsers"></a>

```typescript
public readonly InviteUsers: string[];
```

- *Type:* string[]

IAM actions required for the InviteUsers API call.

---

##### `ListAccounts`<sup>Required</sup> <a name="ListAccounts" id="@cdk_utils/iam.chime.ChimeOperations.property.ListAccounts"></a>

```typescript
public readonly ListAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListAccounts API call.

---

##### `ListAppInstanceAdmins`<sup>Required</sup> <a name="ListAppInstanceAdmins" id="@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstanceAdmins"></a>

```typescript
public readonly ListAppInstanceAdmins: string[];
```

- *Type:* string[]

IAM actions required for the ListAppInstanceAdmins API call.

---

##### `ListAppInstanceBots`<sup>Required</sup> <a name="ListAppInstanceBots" id="@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstanceBots"></a>

```typescript
public readonly ListAppInstanceBots: string[];
```

- *Type:* string[]

IAM actions required for the ListAppInstanceBots API call.

---

##### `ListAppInstances`<sup>Required</sup> <a name="ListAppInstances" id="@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstances"></a>

```typescript
public readonly ListAppInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListAppInstances API call.

---

##### `ListAppInstanceUserEndpoints`<sup>Required</sup> <a name="ListAppInstanceUserEndpoints" id="@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstanceUserEndpoints"></a>

```typescript
public readonly ListAppInstanceUserEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListAppInstanceUserEndpoints API call.

---

##### `ListAppInstanceUsers`<sup>Required</sup> <a name="ListAppInstanceUsers" id="@cdk_utils/iam.chime.ChimeOperations.property.ListAppInstanceUsers"></a>

```typescript
public readonly ListAppInstanceUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListAppInstanceUsers API call.

---

##### `ListAttendees`<sup>Required</sup> <a name="ListAttendees" id="@cdk_utils/iam.chime.ChimeOperations.property.ListAttendees"></a>

```typescript
public readonly ListAttendees: string[];
```

- *Type:* string[]

IAM actions required for the ListAttendees API call.

---

##### `ListAvailableVoiceConnectorRegions`<sup>Required</sup> <a name="ListAvailableVoiceConnectorRegions" id="@cdk_utils/iam.chime.ChimeOperations.property.ListAvailableVoiceConnectorRegions"></a>

```typescript
public readonly ListAvailableVoiceConnectorRegions: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableVoiceConnectorRegions API call.

---

##### `ListBots`<sup>Required</sup> <a name="ListBots" id="@cdk_utils/iam.chime.ChimeOperations.property.ListBots"></a>

```typescript
public readonly ListBots: string[];
```

- *Type:* string[]

IAM actions required for the ListBots API call.

---

##### `ListChannelBans`<sup>Required</sup> <a name="ListChannelBans" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannelBans"></a>

```typescript
public readonly ListChannelBans: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelBans API call.

---

##### `ListChannelFlows`<sup>Required</sup> <a name="ListChannelFlows" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannelFlows"></a>

```typescript
public readonly ListChannelFlows: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelFlows API call.

---

##### `ListChannelMemberships`<sup>Required</sup> <a name="ListChannelMemberships" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannelMemberships"></a>

```typescript
public readonly ListChannelMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelMemberships API call.

---

##### `ListChannelMembershipsForAppInstanceUser`<sup>Required</sup> <a name="ListChannelMembershipsForAppInstanceUser" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannelMembershipsForAppInstanceUser"></a>

```typescript
public readonly ListChannelMembershipsForAppInstanceUser: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelMembershipsForAppInstanceUser API call.

---

##### `ListChannelMessages`<sup>Required</sup> <a name="ListChannelMessages" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannelMessages"></a>

```typescript
public readonly ListChannelMessages: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelMessages API call.

---

##### `ListChannelModerators`<sup>Required</sup> <a name="ListChannelModerators" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannelModerators"></a>

```typescript
public readonly ListChannelModerators: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelModerators API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListChannelsAssociatedWithChannelFlow`<sup>Required</sup> <a name="ListChannelsAssociatedWithChannelFlow" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannelsAssociatedWithChannelFlow"></a>

```typescript
public readonly ListChannelsAssociatedWithChannelFlow: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelsAssociatedWithChannelFlow API call.

---

##### `ListChannelsModeratedByAppInstanceUser`<sup>Required</sup> <a name="ListChannelsModeratedByAppInstanceUser" id="@cdk_utils/iam.chime.ChimeOperations.property.ListChannelsModeratedByAppInstanceUser"></a>

```typescript
public readonly ListChannelsModeratedByAppInstanceUser: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelsModeratedByAppInstanceUser API call.

---

##### `ListMediaCapturePipelines`<sup>Required</sup> <a name="ListMediaCapturePipelines" id="@cdk_utils/iam.chime.ChimeOperations.property.ListMediaCapturePipelines"></a>

```typescript
public readonly ListMediaCapturePipelines: string[];
```

- *Type:* string[]

IAM actions required for the ListMediaCapturePipelines API call.

---

##### `ListMediaInsightsPipelineConfigurations`<sup>Required</sup> <a name="ListMediaInsightsPipelineConfigurations" id="@cdk_utils/iam.chime.ChimeOperations.property.ListMediaInsightsPipelineConfigurations"></a>

```typescript
public readonly ListMediaInsightsPipelineConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListMediaInsightsPipelineConfigurations API call.

---

##### `ListMediaPipelineKinesisVideoStreamPools`<sup>Required</sup> <a name="ListMediaPipelineKinesisVideoStreamPools" id="@cdk_utils/iam.chime.ChimeOperations.property.ListMediaPipelineKinesisVideoStreamPools"></a>

```typescript
public readonly ListMediaPipelineKinesisVideoStreamPools: string[];
```

- *Type:* string[]

IAM actions required for the ListMediaPipelineKinesisVideoStreamPools API call.

---

##### `ListMediaPipelines`<sup>Required</sup> <a name="ListMediaPipelines" id="@cdk_utils/iam.chime.ChimeOperations.property.ListMediaPipelines"></a>

```typescript
public readonly ListMediaPipelines: string[];
```

- *Type:* string[]

IAM actions required for the ListMediaPipelines API call.

---

##### `ListPhoneNumberOrders`<sup>Required</sup> <a name="ListPhoneNumberOrders" id="@cdk_utils/iam.chime.ChimeOperations.property.ListPhoneNumberOrders"></a>

```typescript
public readonly ListPhoneNumberOrders: string[];
```

- *Type:* string[]

IAM actions required for the ListPhoneNumberOrders API call.

---

##### `ListPhoneNumbers`<sup>Required</sup> <a name="ListPhoneNumbers" id="@cdk_utils/iam.chime.ChimeOperations.property.ListPhoneNumbers"></a>

```typescript
public readonly ListPhoneNumbers: string[];
```

- *Type:* string[]

IAM actions required for the ListPhoneNumbers API call.

---

##### `ListProxySessions`<sup>Required</sup> <a name="ListProxySessions" id="@cdk_utils/iam.chime.ChimeOperations.property.ListProxySessions"></a>

```typescript
public readonly ListProxySessions: string[];
```

- *Type:* string[]

IAM actions required for the ListProxySessions API call.

---

##### `ListRoomMemberships`<sup>Required</sup> <a name="ListRoomMemberships" id="@cdk_utils/iam.chime.ChimeOperations.property.ListRoomMemberships"></a>

```typescript
public readonly ListRoomMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListRoomMemberships API call.

---

##### `ListRooms`<sup>Required</sup> <a name="ListRooms" id="@cdk_utils/iam.chime.ChimeOperations.property.ListRooms"></a>

```typescript
public readonly ListRooms: string[];
```

- *Type:* string[]

IAM actions required for the ListRooms API call.

---

##### `ListSipMediaApplications`<sup>Required</sup> <a name="ListSipMediaApplications" id="@cdk_utils/iam.chime.ChimeOperations.property.ListSipMediaApplications"></a>

```typescript
public readonly ListSipMediaApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListSipMediaApplications API call.

---

##### `ListSipRules`<sup>Required</sup> <a name="ListSipRules" id="@cdk_utils/iam.chime.ChimeOperations.property.ListSipRules"></a>

```typescript
public readonly ListSipRules: string[];
```

- *Type:* string[]

IAM actions required for the ListSipRules API call.

---

##### `ListSubChannels`<sup>Required</sup> <a name="ListSubChannels" id="@cdk_utils/iam.chime.ChimeOperations.property.ListSubChannels"></a>

```typescript
public readonly ListSubChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListSubChannels API call.

---

##### `ListSupportedPhoneNumberCountries`<sup>Required</sup> <a name="ListSupportedPhoneNumberCountries" id="@cdk_utils/iam.chime.ChimeOperations.property.ListSupportedPhoneNumberCountries"></a>

```typescript
public readonly ListSupportedPhoneNumberCountries: string[];
```

- *Type:* string[]

IAM actions required for the ListSupportedPhoneNumberCountries API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.chime.ChimeOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.chime.ChimeOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `ListVoiceConnectorGroups`<sup>Required</sup> <a name="ListVoiceConnectorGroups" id="@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceConnectorGroups"></a>

```typescript
public readonly ListVoiceConnectorGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListVoiceConnectorGroups API call.

---

##### `ListVoiceConnectors`<sup>Required</sup> <a name="ListVoiceConnectors" id="@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceConnectors"></a>

```typescript
public readonly ListVoiceConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListVoiceConnectors API call.

---

##### `ListVoiceConnectorTerminationCredentials`<sup>Required</sup> <a name="ListVoiceConnectorTerminationCredentials" id="@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceConnectorTerminationCredentials"></a>

```typescript
public readonly ListVoiceConnectorTerminationCredentials: string[];
```

- *Type:* string[]

IAM actions required for the ListVoiceConnectorTerminationCredentials API call.

---

##### `ListVoiceProfileDomains`<sup>Required</sup> <a name="ListVoiceProfileDomains" id="@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceProfileDomains"></a>

```typescript
public readonly ListVoiceProfileDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListVoiceProfileDomains API call.

---

##### `ListVoiceProfiles`<sup>Required</sup> <a name="ListVoiceProfiles" id="@cdk_utils/iam.chime.ChimeOperations.property.ListVoiceProfiles"></a>

```typescript
public readonly ListVoiceProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListVoiceProfiles API call.

---

##### `LogoutUser`<sup>Required</sup> <a name="LogoutUser" id="@cdk_utils/iam.chime.ChimeOperations.property.LogoutUser"></a>

```typescript
public readonly LogoutUser: string[];
```

- *Type:* string[]

IAM actions required for the LogoutUser API call.

---

##### `opGetAccount`<sup>Required</sup> <a name="opGetAccount" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetAccount"></a>

```typescript
public readonly opGetAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetAccount API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetAppInstanceRetentionSettings`<sup>Required</sup> <a name="opGetAppInstanceRetentionSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetAppInstanceRetentionSettings"></a>

```typescript
public readonly opGetAppInstanceRetentionSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAppInstanceRetentionSettings API call.

---

##### `opGetAttendee`<sup>Required</sup> <a name="opGetAttendee" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetAttendee"></a>

```typescript
public readonly opGetAttendee: string[];
```

- *Type:* string[]

IAM actions required for the GetAttendee API call.

---

##### `opGetBot`<sup>Required</sup> <a name="opGetBot" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetBot"></a>

```typescript
public readonly opGetBot: string[];
```

- *Type:* string[]

IAM actions required for the GetBot API call.

---

##### `opGetChannelMembershipPreferences`<sup>Required</sup> <a name="opGetChannelMembershipPreferences" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetChannelMembershipPreferences"></a>

```typescript
public readonly opGetChannelMembershipPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetChannelMembershipPreferences API call.

---

##### `opGetChannelMessage`<sup>Required</sup> <a name="opGetChannelMessage" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetChannelMessage"></a>

```typescript
public readonly opGetChannelMessage: string[];
```

- *Type:* string[]

IAM actions required for the GetChannelMessage API call.

---

##### `opGetChannelMessageStatus`<sup>Required</sup> <a name="opGetChannelMessageStatus" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetChannelMessageStatus"></a>

```typescript
public readonly opGetChannelMessageStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetChannelMessageStatus API call.

---

##### `opGetEventsConfiguration`<sup>Required</sup> <a name="opGetEventsConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetEventsConfiguration"></a>

```typescript
public readonly opGetEventsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetEventsConfiguration API call.

---

##### `opGetGlobalSettings`<sup>Required</sup> <a name="opGetGlobalSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetGlobalSettings"></a>

```typescript
public readonly opGetGlobalSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetGlobalSettings API call.

---

##### `opGetMediaCapturePipeline`<sup>Required</sup> <a name="opGetMediaCapturePipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetMediaCapturePipeline"></a>

```typescript
public readonly opGetMediaCapturePipeline: string[];
```

- *Type:* string[]

IAM actions required for the GetMediaCapturePipeline API call.

---

##### `opGetMediaInsightsPipelineConfiguration`<sup>Required</sup> <a name="opGetMediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetMediaInsightsPipelineConfiguration"></a>

```typescript
public readonly opGetMediaInsightsPipelineConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetMediaInsightsPipelineConfiguration API call.

---

##### `opGetMediaPipeline`<sup>Required</sup> <a name="opGetMediaPipeline" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetMediaPipeline"></a>

```typescript
public readonly opGetMediaPipeline: string[];
```

- *Type:* string[]

IAM actions required for the GetMediaPipeline API call.

---

##### `opGetMediaPipelineKinesisVideoStreamPool`<sup>Required</sup> <a name="opGetMediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetMediaPipelineKinesisVideoStreamPool"></a>

```typescript
public readonly opGetMediaPipelineKinesisVideoStreamPool: string[];
```

- *Type:* string[]

IAM actions required for the GetMediaPipelineKinesisVideoStreamPool API call.

---

##### `opGetMeeting`<sup>Required</sup> <a name="opGetMeeting" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetMeeting"></a>

```typescript
public readonly opGetMeeting: string[];
```

- *Type:* string[]

IAM actions required for the GetMeeting API call.

---

##### `opGetMessagingSessionEndpoint`<sup>Required</sup> <a name="opGetMessagingSessionEndpoint" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetMessagingSessionEndpoint"></a>

```typescript
public readonly opGetMessagingSessionEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetMessagingSessionEndpoint API call.

---

##### `opGetMessagingStreamingConfigurations`<sup>Required</sup> <a name="opGetMessagingStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetMessagingStreamingConfigurations"></a>

```typescript
public readonly opGetMessagingStreamingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the GetMessagingStreamingConfigurations API call.

---

##### `opGetPhoneNumber`<sup>Required</sup> <a name="opGetPhoneNumber" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetPhoneNumber"></a>

```typescript
public readonly opGetPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the GetPhoneNumber API call.

---

##### `opGetPhoneNumberOrder`<sup>Required</sup> <a name="opGetPhoneNumberOrder" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetPhoneNumberOrder"></a>

```typescript
public readonly opGetPhoneNumberOrder: string[];
```

- *Type:* string[]

IAM actions required for the GetPhoneNumberOrder API call.

---

##### `opGetPhoneNumberSettings`<sup>Required</sup> <a name="opGetPhoneNumberSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetPhoneNumberSettings"></a>

```typescript
public readonly opGetPhoneNumberSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetPhoneNumberSettings API call.

---

##### `opGetProxySession`<sup>Required</sup> <a name="opGetProxySession" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetProxySession"></a>

```typescript
public readonly opGetProxySession: string[];
```

- *Type:* string[]

IAM actions required for the GetProxySession API call.

---

##### `opGetRetentionSettings`<sup>Required</sup> <a name="opGetRetentionSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetRetentionSettings"></a>

```typescript
public readonly opGetRetentionSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetRetentionSettings API call.

---

##### `opGetRoom`<sup>Required</sup> <a name="opGetRoom" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetRoom"></a>

```typescript
public readonly opGetRoom: string[];
```

- *Type:* string[]

IAM actions required for the GetRoom API call.

---

##### `opGetSipMediaApplication`<sup>Required</sup> <a name="opGetSipMediaApplication" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetSipMediaApplication"></a>

```typescript
public readonly opGetSipMediaApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetSipMediaApplication API call.

---

##### `opGetSipMediaApplicationAlexaSkillConfiguration`<sup>Required</sup> <a name="opGetSipMediaApplicationAlexaSkillConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetSipMediaApplicationAlexaSkillConfiguration"></a>

```typescript
public readonly opGetSipMediaApplicationAlexaSkillConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetSipMediaApplicationAlexaSkillConfiguration API call.

---

##### `opGetSipMediaApplicationLoggingConfiguration`<sup>Required</sup> <a name="opGetSipMediaApplicationLoggingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetSipMediaApplicationLoggingConfiguration"></a>

```typescript
public readonly opGetSipMediaApplicationLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetSipMediaApplicationLoggingConfiguration API call.

---

##### `opGetSipRule`<sup>Required</sup> <a name="opGetSipRule" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetSipRule"></a>

```typescript
public readonly opGetSipRule: string[];
```

- *Type:* string[]

IAM actions required for the GetSipRule API call.

---

##### `opGetSpeakerSearchTask`<sup>Required</sup> <a name="opGetSpeakerSearchTask" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetSpeakerSearchTask"></a>

```typescript
public readonly opGetSpeakerSearchTask: string[];
```

- *Type:* string[]

IAM actions required for the GetSpeakerSearchTask API call.

---

##### `opGetUser`<sup>Required</sup> <a name="opGetUser" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetUser"></a>

```typescript
public readonly opGetUser: string[];
```

- *Type:* string[]

IAM actions required for the GetUser API call.

---

##### `opGetUserSettings`<sup>Required</sup> <a name="opGetUserSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetUserSettings"></a>

```typescript
public readonly opGetUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetUserSettings API call.

---

##### `opGetVoiceConnector`<sup>Required</sup> <a name="opGetVoiceConnector" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnector"></a>

```typescript
public readonly opGetVoiceConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnector API call.

---

##### `opGetVoiceConnectorEmergencyCallingConfiguration`<sup>Required</sup> <a name="opGetVoiceConnectorEmergencyCallingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public readonly opGetVoiceConnectorEmergencyCallingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorEmergencyCallingConfiguration API call.

---

##### `opGetVoiceConnectorExternalSystemsConfiguration`<sup>Required</sup> <a name="opGetVoiceConnectorExternalSystemsConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorExternalSystemsConfiguration"></a>

```typescript
public readonly opGetVoiceConnectorExternalSystemsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorExternalSystemsConfiguration API call.

---

##### `opGetVoiceConnectorGroup`<sup>Required</sup> <a name="opGetVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorGroup"></a>

```typescript
public readonly opGetVoiceConnectorGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorGroup API call.

---

##### `opGetVoiceConnectorLoggingConfiguration`<sup>Required</sup> <a name="opGetVoiceConnectorLoggingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorLoggingConfiguration"></a>

```typescript
public readonly opGetVoiceConnectorLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorLoggingConfiguration API call.

---

##### `opGetVoiceConnectorOrigination`<sup>Required</sup> <a name="opGetVoiceConnectorOrigination" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorOrigination"></a>

```typescript
public readonly opGetVoiceConnectorOrigination: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorOrigination API call.

---

##### `opGetVoiceConnectorProxy`<sup>Required</sup> <a name="opGetVoiceConnectorProxy" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorProxy"></a>

```typescript
public readonly opGetVoiceConnectorProxy: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorProxy API call.

---

##### `opGetVoiceConnectorStreamingConfiguration`<sup>Required</sup> <a name="opGetVoiceConnectorStreamingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorStreamingConfiguration"></a>

```typescript
public readonly opGetVoiceConnectorStreamingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorStreamingConfiguration API call.

---

##### `opGetVoiceConnectorTermination`<sup>Required</sup> <a name="opGetVoiceConnectorTermination" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorTermination"></a>

```typescript
public readonly opGetVoiceConnectorTermination: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorTermination API call.

---

##### `opGetVoiceConnectorTerminationHealth`<sup>Required</sup> <a name="opGetVoiceConnectorTerminationHealth" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceConnectorTerminationHealth"></a>

```typescript
public readonly opGetVoiceConnectorTerminationHealth: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceConnectorTerminationHealth API call.

---

##### `opGetVoiceProfile`<sup>Required</sup> <a name="opGetVoiceProfile" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceProfile"></a>

```typescript
public readonly opGetVoiceProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceProfile API call.

---

##### `opGetVoiceProfileDomain`<sup>Required</sup> <a name="opGetVoiceProfileDomain" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceProfileDomain"></a>

```typescript
public readonly opGetVoiceProfileDomain: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceProfileDomain API call.

---

##### `opGetVoiceToneAnalysisTask`<sup>Required</sup> <a name="opGetVoiceToneAnalysisTask" id="@cdk_utils/iam.chime.ChimeOperations.property.opGetVoiceToneAnalysisTask"></a>

```typescript
public readonly opGetVoiceToneAnalysisTask: string[];
```

- *Type:* string[]

IAM actions required for the GetVoiceToneAnalysisTask API call.

---

##### `PutAppInstanceRetentionSettings`<sup>Required</sup> <a name="PutAppInstanceRetentionSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.PutAppInstanceRetentionSettings"></a>

```typescript
public readonly PutAppInstanceRetentionSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutAppInstanceRetentionSettings API call.

---

##### `PutAppInstanceUserExpirationSettings`<sup>Required</sup> <a name="PutAppInstanceUserExpirationSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.PutAppInstanceUserExpirationSettings"></a>

```typescript
public readonly PutAppInstanceUserExpirationSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutAppInstanceUserExpirationSettings API call.

---

##### `PutChannelExpirationSettings`<sup>Required</sup> <a name="PutChannelExpirationSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.PutChannelExpirationSettings"></a>

```typescript
public readonly PutChannelExpirationSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutChannelExpirationSettings API call.

---

##### `PutChannelMembershipPreferences`<sup>Required</sup> <a name="PutChannelMembershipPreferences" id="@cdk_utils/iam.chime.ChimeOperations.property.PutChannelMembershipPreferences"></a>

```typescript
public readonly PutChannelMembershipPreferences: string[];
```

- *Type:* string[]

IAM actions required for the PutChannelMembershipPreferences API call.

---

##### `PutEventsConfiguration`<sup>Required</sup> <a name="PutEventsConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.PutEventsConfiguration"></a>

```typescript
public readonly PutEventsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutEventsConfiguration API call.

---

##### `PutMessagingStreamingConfigurations`<sup>Required</sup> <a name="PutMessagingStreamingConfigurations" id="@cdk_utils/iam.chime.ChimeOperations.property.PutMessagingStreamingConfigurations"></a>

```typescript
public readonly PutMessagingStreamingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the PutMessagingStreamingConfigurations API call.

---

##### `PutRetentionSettings`<sup>Required</sup> <a name="PutRetentionSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.PutRetentionSettings"></a>

```typescript
public readonly PutRetentionSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutRetentionSettings API call.

---

##### `PutSipMediaApplicationAlexaSkillConfiguration`<sup>Required</sup> <a name="PutSipMediaApplicationAlexaSkillConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.PutSipMediaApplicationAlexaSkillConfiguration"></a>

```typescript
public readonly PutSipMediaApplicationAlexaSkillConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutSipMediaApplicationAlexaSkillConfiguration API call.

---

##### `PutSipMediaApplicationLoggingConfiguration`<sup>Required</sup> <a name="PutSipMediaApplicationLoggingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.PutSipMediaApplicationLoggingConfiguration"></a>

```typescript
public readonly PutSipMediaApplicationLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutSipMediaApplicationLoggingConfiguration API call.

---

##### `PutVoiceConnectorEmergencyCallingConfiguration`<sup>Required</sup> <a name="PutVoiceConnectorEmergencyCallingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorEmergencyCallingConfiguration"></a>

```typescript
public readonly PutVoiceConnectorEmergencyCallingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutVoiceConnectorEmergencyCallingConfiguration API call.

---

##### `PutVoiceConnectorExternalSystemsConfiguration`<sup>Required</sup> <a name="PutVoiceConnectorExternalSystemsConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorExternalSystemsConfiguration"></a>

```typescript
public readonly PutVoiceConnectorExternalSystemsConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutVoiceConnectorExternalSystemsConfiguration API call.

---

##### `PutVoiceConnectorLoggingConfiguration`<sup>Required</sup> <a name="PutVoiceConnectorLoggingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorLoggingConfiguration"></a>

```typescript
public readonly PutVoiceConnectorLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutVoiceConnectorLoggingConfiguration API call.

---

##### `PutVoiceConnectorOrigination`<sup>Required</sup> <a name="PutVoiceConnectorOrigination" id="@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorOrigination"></a>

```typescript
public readonly PutVoiceConnectorOrigination: string[];
```

- *Type:* string[]

IAM actions required for the PutVoiceConnectorOrigination API call.

---

##### `PutVoiceConnectorProxy`<sup>Required</sup> <a name="PutVoiceConnectorProxy" id="@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorProxy"></a>

```typescript
public readonly PutVoiceConnectorProxy: string[];
```

- *Type:* string[]

IAM actions required for the PutVoiceConnectorProxy API call.

---

##### `PutVoiceConnectorStreamingConfiguration`<sup>Required</sup> <a name="PutVoiceConnectorStreamingConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorStreamingConfiguration"></a>

```typescript
public readonly PutVoiceConnectorStreamingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutVoiceConnectorStreamingConfiguration API call.

---

##### `PutVoiceConnectorTermination`<sup>Required</sup> <a name="PutVoiceConnectorTermination" id="@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorTermination"></a>

```typescript
public readonly PutVoiceConnectorTermination: string[];
```

- *Type:* string[]

IAM actions required for the PutVoiceConnectorTermination API call.

---

##### `PutVoiceConnectorTerminationCredentials`<sup>Required</sup> <a name="PutVoiceConnectorTerminationCredentials" id="@cdk_utils/iam.chime.ChimeOperations.property.PutVoiceConnectorTerminationCredentials"></a>

```typescript
public readonly PutVoiceConnectorTerminationCredentials: string[];
```

- *Type:* string[]

IAM actions required for the PutVoiceConnectorTerminationCredentials API call.

---

##### `RedactChannelMessage`<sup>Required</sup> <a name="RedactChannelMessage" id="@cdk_utils/iam.chime.ChimeOperations.property.RedactChannelMessage"></a>

```typescript
public readonly RedactChannelMessage: string[];
```

- *Type:* string[]

IAM actions required for the RedactChannelMessage API call.

---

##### `RedactConversationMessage`<sup>Required</sup> <a name="RedactConversationMessage" id="@cdk_utils/iam.chime.ChimeOperations.property.RedactConversationMessage"></a>

```typescript
public readonly RedactConversationMessage: string[];
```

- *Type:* string[]

IAM actions required for the RedactConversationMessage API call.

---

##### `RedactRoomMessage`<sup>Required</sup> <a name="RedactRoomMessage" id="@cdk_utils/iam.chime.ChimeOperations.property.RedactRoomMessage"></a>

```typescript
public readonly RedactRoomMessage: string[];
```

- *Type:* string[]

IAM actions required for the RedactRoomMessage API call.

---

##### `RegenerateSecurityToken`<sup>Required</sup> <a name="RegenerateSecurityToken" id="@cdk_utils/iam.chime.ChimeOperations.property.RegenerateSecurityToken"></a>

```typescript
public readonly RegenerateSecurityToken: string[];
```

- *Type:* string[]

IAM actions required for the RegenerateSecurityToken API call.

---

##### `RegisterAppInstanceUserEndpoint`<sup>Required</sup> <a name="RegisterAppInstanceUserEndpoint" id="@cdk_utils/iam.chime.ChimeOperations.property.RegisterAppInstanceUserEndpoint"></a>

```typescript
public readonly RegisterAppInstanceUserEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the RegisterAppInstanceUserEndpoint API call.

---

##### `ResetPersonalPIN`<sup>Required</sup> <a name="ResetPersonalPIN" id="@cdk_utils/iam.chime.ChimeOperations.property.ResetPersonalPIN"></a>

```typescript
public readonly ResetPersonalPIN: string[];
```

- *Type:* string[]

IAM actions required for the ResetPersonalPIN API call.

---

##### `RestorePhoneNumber`<sup>Required</sup> <a name="RestorePhoneNumber" id="@cdk_utils/iam.chime.ChimeOperations.property.RestorePhoneNumber"></a>

```typescript
public readonly RestorePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the RestorePhoneNumber API call.

---

##### `SearchAvailablePhoneNumbers`<sup>Required</sup> <a name="SearchAvailablePhoneNumbers" id="@cdk_utils/iam.chime.ChimeOperations.property.SearchAvailablePhoneNumbers"></a>

```typescript
public readonly SearchAvailablePhoneNumbers: string[];
```

- *Type:* string[]

IAM actions required for the SearchAvailablePhoneNumbers API call.

---

##### `SearchChannels`<sup>Required</sup> <a name="SearchChannels" id="@cdk_utils/iam.chime.ChimeOperations.property.SearchChannels"></a>

```typescript
public readonly SearchChannels: string[];
```

- *Type:* string[]

IAM actions required for the SearchChannels API call.

---

##### `SendChannelMessage`<sup>Required</sup> <a name="SendChannelMessage" id="@cdk_utils/iam.chime.ChimeOperations.property.SendChannelMessage"></a>

```typescript
public readonly SendChannelMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendChannelMessage API call.

---

##### `StartMeetingTranscription`<sup>Required</sup> <a name="StartMeetingTranscription" id="@cdk_utils/iam.chime.ChimeOperations.property.StartMeetingTranscription"></a>

```typescript
public readonly StartMeetingTranscription: string[];
```

- *Type:* string[]

IAM actions required for the StartMeetingTranscription API call.

---

##### `StartSpeakerSearchTask`<sup>Required</sup> <a name="StartSpeakerSearchTask" id="@cdk_utils/iam.chime.ChimeOperations.property.StartSpeakerSearchTask"></a>

```typescript
public readonly StartSpeakerSearchTask: string[];
```

- *Type:* string[]

IAM actions required for the StartSpeakerSearchTask API call.

---

##### `StartVoiceToneAnalysisTask`<sup>Required</sup> <a name="StartVoiceToneAnalysisTask" id="@cdk_utils/iam.chime.ChimeOperations.property.StartVoiceToneAnalysisTask"></a>

```typescript
public readonly StartVoiceToneAnalysisTask: string[];
```

- *Type:* string[]

IAM actions required for the StartVoiceToneAnalysisTask API call.

---

##### `StopMeetingTranscription`<sup>Required</sup> <a name="StopMeetingTranscription" id="@cdk_utils/iam.chime.ChimeOperations.property.StopMeetingTranscription"></a>

```typescript
public readonly StopMeetingTranscription: string[];
```

- *Type:* string[]

IAM actions required for the StopMeetingTranscription API call.

---

##### `StopSpeakerSearchTask`<sup>Required</sup> <a name="StopSpeakerSearchTask" id="@cdk_utils/iam.chime.ChimeOperations.property.StopSpeakerSearchTask"></a>

```typescript
public readonly StopSpeakerSearchTask: string[];
```

- *Type:* string[]

IAM actions required for the StopSpeakerSearchTask API call.

---

##### `StopVoiceToneAnalysisTask`<sup>Required</sup> <a name="StopVoiceToneAnalysisTask" id="@cdk_utils/iam.chime.ChimeOperations.property.StopVoiceToneAnalysisTask"></a>

```typescript
public readonly StopVoiceToneAnalysisTask: string[];
```

- *Type:* string[]

IAM actions required for the StopVoiceToneAnalysisTask API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.chime.ChimeOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.chime.ChimeOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccount`<sup>Required</sup> <a name="UpdateAccount" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateAccount"></a>

```typescript
public readonly UpdateAccount: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccount API call.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSettings API call.

---

##### `UpdateAppInstance`<sup>Required</sup> <a name="UpdateAppInstance" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateAppInstance"></a>

```typescript
public readonly UpdateAppInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppInstance API call.

---

##### `UpdateAppInstanceBot`<sup>Required</sup> <a name="UpdateAppInstanceBot" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateAppInstanceBot"></a>

```typescript
public readonly UpdateAppInstanceBot: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppInstanceBot API call.

---

##### `UpdateAppInstanceUser`<sup>Required</sup> <a name="UpdateAppInstanceUser" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateAppInstanceUser"></a>

```typescript
public readonly UpdateAppInstanceUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppInstanceUser API call.

---

##### `UpdateAppInstanceUserEndpoint`<sup>Required</sup> <a name="UpdateAppInstanceUserEndpoint" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateAppInstanceUserEndpoint"></a>

```typescript
public readonly UpdateAppInstanceUserEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppInstanceUserEndpoint API call.

---

##### `UpdateAttendeeCapabilities`<sup>Required</sup> <a name="UpdateAttendeeCapabilities" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateAttendeeCapabilities"></a>

```typescript
public readonly UpdateAttendeeCapabilities: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAttendeeCapabilities API call.

---

##### `UpdateBot`<sup>Required</sup> <a name="UpdateBot" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateBot"></a>

```typescript
public readonly UpdateBot: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBot API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateChannelFlow`<sup>Required</sup> <a name="UpdateChannelFlow" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateChannelFlow"></a>

```typescript
public readonly UpdateChannelFlow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannelFlow API call.

---

##### `UpdateChannelMessage`<sup>Required</sup> <a name="UpdateChannelMessage" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateChannelMessage"></a>

```typescript
public readonly UpdateChannelMessage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannelMessage API call.

---

##### `UpdateChannelReadMarker`<sup>Required</sup> <a name="UpdateChannelReadMarker" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateChannelReadMarker"></a>

```typescript
public readonly UpdateChannelReadMarker: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannelReadMarker API call.

---

##### `UpdateGlobalSettings`<sup>Required</sup> <a name="UpdateGlobalSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateGlobalSettings"></a>

```typescript
public readonly UpdateGlobalSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlobalSettings API call.

---

##### `UpdateMediaInsightsPipelineConfiguration`<sup>Required</sup> <a name="UpdateMediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateMediaInsightsPipelineConfiguration"></a>

```typescript
public readonly UpdateMediaInsightsPipelineConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMediaInsightsPipelineConfiguration API call.

---

##### `UpdateMediaInsightsPipelineStatus`<sup>Required</sup> <a name="UpdateMediaInsightsPipelineStatus" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateMediaInsightsPipelineStatus"></a>

```typescript
public readonly UpdateMediaInsightsPipelineStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMediaInsightsPipelineStatus API call.

---

##### `UpdateMediaPipelineKinesisVideoStreamPool`<sup>Required</sup> <a name="UpdateMediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateMediaPipelineKinesisVideoStreamPool"></a>

```typescript
public readonly UpdateMediaPipelineKinesisVideoStreamPool: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMediaPipelineKinesisVideoStreamPool API call.

---

##### `UpdatePhoneNumber`<sup>Required</sup> <a name="UpdatePhoneNumber" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdatePhoneNumber"></a>

```typescript
public readonly UpdatePhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePhoneNumber API call.

---

##### `UpdatePhoneNumberSettings`<sup>Required</sup> <a name="UpdatePhoneNumberSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdatePhoneNumberSettings"></a>

```typescript
public readonly UpdatePhoneNumberSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePhoneNumberSettings API call.

---

##### `UpdateProxySession`<sup>Required</sup> <a name="UpdateProxySession" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateProxySession"></a>

```typescript
public readonly UpdateProxySession: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProxySession API call.

---

##### `UpdateRoom`<sup>Required</sup> <a name="UpdateRoom" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateRoom"></a>

```typescript
public readonly UpdateRoom: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoom API call.

---

##### `UpdateRoomMembership`<sup>Required</sup> <a name="UpdateRoomMembership" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateRoomMembership"></a>

```typescript
public readonly UpdateRoomMembership: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoomMembership API call.

---

##### `UpdateSipMediaApplication`<sup>Required</sup> <a name="UpdateSipMediaApplication" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateSipMediaApplication"></a>

```typescript
public readonly UpdateSipMediaApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSipMediaApplication API call.

---

##### `UpdateSipMediaApplicationCall`<sup>Required</sup> <a name="UpdateSipMediaApplicationCall" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateSipMediaApplicationCall"></a>

```typescript
public readonly UpdateSipMediaApplicationCall: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSipMediaApplicationCall API call.

---

##### `UpdateSipRule`<sup>Required</sup> <a name="UpdateSipRule" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateSipRule"></a>

```typescript
public readonly UpdateSipRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSipRule API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

##### `UpdateUserSettings`<sup>Required</sup> <a name="UpdateUserSettings" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateUserSettings"></a>

```typescript
public readonly UpdateUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserSettings API call.

---

##### `UpdateVoiceConnector`<sup>Required</sup> <a name="UpdateVoiceConnector" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateVoiceConnector"></a>

```typescript
public readonly UpdateVoiceConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVoiceConnector API call.

---

##### `UpdateVoiceConnectorGroup`<sup>Required</sup> <a name="UpdateVoiceConnectorGroup" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateVoiceConnectorGroup"></a>

```typescript
public readonly UpdateVoiceConnectorGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVoiceConnectorGroup API call.

---

##### `UpdateVoiceProfile`<sup>Required</sup> <a name="UpdateVoiceProfile" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateVoiceProfile"></a>

```typescript
public readonly UpdateVoiceProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVoiceProfile API call.

---

##### `UpdateVoiceProfileDomain`<sup>Required</sup> <a name="UpdateVoiceProfileDomain" id="@cdk_utils/iam.chime.ChimeOperations.property.UpdateVoiceProfileDomain"></a>

```typescript
public readonly UpdateVoiceProfileDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVoiceProfileDomain API call.

---

##### `ValidateE911Address`<sup>Required</sup> <a name="ValidateE911Address" id="@cdk_utils/iam.chime.ChimeOperations.property.ValidateE911Address"></a>

```typescript
public readonly ValidateE911Address: string[];
```

- *Type:* string[]

IAM actions required for the ValidateE911Address API call.

---

### ChimeResources <a name="ChimeResources" id="@cdk_utils/iam.chime.ChimeResources"></a>

ARN builders, validators, and parsers for chime resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.chime.ChimeResources.Initializer"></a>

```typescript
import { chime } from '@cdk_utils/iam'

new chime.ChimeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.appInstance">appInstance</a></code> | Builds an ARN for the app-instance resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.appInstanceBot">appInstanceBot</a></code> | Builds an ARN for the app-instance-bot resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.appInstanceUser">appInstanceUser</a></code> | Builds an ARN for the app-instance-user resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.channelFlow">channelFlow</a></code> | Builds an ARN for the channel-flow resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceArn">isValidAppInstanceArn</a></code> | Validates whether a string is a valid ARN for the app-instance resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceBotArn">isValidAppInstanceBotArn</a></code> | Validates whether a string is a valid ARN for the app-instance-bot resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceUserArn">isValidAppInstanceUserArn</a></code> | Validates whether a string is a valid ARN for the app-instance-user resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidChannelFlowArn">isValidChannelFlowArn</a></code> | Validates whether a string is a valid ARN for the channel-flow resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidMediaInsightsPipelineConfigurationArn">isValidMediaInsightsPipelineConfigurationArn</a></code> | Validates whether a string is a valid ARN for the media-insights-pipeline-configuration resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidMediaPipelineArn">isValidMediaPipelineArn</a></code> | Validates whether a string is a valid ARN for the media-pipeline resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidMediaPipelineKinesisVideoStreamPoolArn">isValidMediaPipelineKinesisVideoStreamPoolArn</a></code> | Validates whether a string is a valid ARN for the media-pipeline-kinesis-video-stream-pool resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidMeetingArn">isValidMeetingArn</a></code> | Validates whether a string is a valid ARN for the meeting resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidSipMediaApplicationArn">isValidSipMediaApplicationArn</a></code> | Validates whether a string is a valid ARN for the sip-media-application resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidVoiceConnectorArn">isValidVoiceConnectorArn</a></code> | Validates whether a string is a valid ARN for the voice-connector resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidVoiceProfileArn">isValidVoiceProfileArn</a></code> | Validates whether a string is a valid ARN for the voice-profile resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.isValidVoiceProfileDomainArn">isValidVoiceProfileDomainArn</a></code> | Validates whether a string is a valid ARN for the voice-profile-domain resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.mediaInsightsPipelineConfiguration">mediaInsightsPipelineConfiguration</a></code> | Builds an ARN for the media-insights-pipeline-configuration resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.mediaPipeline">mediaPipeline</a></code> | Builds an ARN for the media-pipeline resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.mediaPipelineKinesisVideoStreamPool">mediaPipelineKinesisVideoStreamPool</a></code> | Builds an ARN for the media-pipeline-kinesis-video-stream-pool resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.meeting">meeting</a></code> | Builds an ARN for the meeting resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseAppInstanceArn">parseAppInstanceArn</a></code> | Parses a app-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseAppInstanceBotArn">parseAppInstanceBotArn</a></code> | Parses a app-instance-bot ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseAppInstanceUserArn">parseAppInstanceUserArn</a></code> | Parses a app-instance-user ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseChannelFlowArn">parseChannelFlowArn</a></code> | Parses a channel-flow ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseMediaInsightsPipelineConfigurationArn">parseMediaInsightsPipelineConfigurationArn</a></code> | Parses a media-insights-pipeline-configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseMediaPipelineArn">parseMediaPipelineArn</a></code> | Parses a media-pipeline ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseMediaPipelineKinesisVideoStreamPoolArn">parseMediaPipelineKinesisVideoStreamPoolArn</a></code> | Parses a media-pipeline-kinesis-video-stream-pool ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseMeetingArn">parseMeetingArn</a></code> | Parses a meeting ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseSipMediaApplicationArn">parseSipMediaApplicationArn</a></code> | Parses a sip-media-application ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseVoiceConnectorArn">parseVoiceConnectorArn</a></code> | Parses a voice-connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseVoiceProfileArn">parseVoiceProfileArn</a></code> | Parses a voice-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.parseVoiceProfileDomainArn">parseVoiceProfileDomainArn</a></code> | Parses a voice-profile-domain ARN into its components. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.sipMediaApplication">sipMediaApplication</a></code> | Builds an ARN for the sip-media-application resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.voiceConnector">voiceConnector</a></code> | Builds an ARN for the voice-connector resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.voiceProfile">voiceProfile</a></code> | Builds an ARN for the voice-profile resource. |
| <code><a href="#@cdk_utils/iam.chime.ChimeResources.voiceProfileDomain">voiceProfileDomain</a></code> | Builds an ARN for the voice-profile-domain resource. |

---

##### `appInstance` <a name="appInstance" id="@cdk_utils/iam.chime.ChimeResources.appInstance"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.appInstance(props: ChimeAppInstanceArnProps)
```

Builds an ARN for the app-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.appInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeAppInstanceArnProps">ChimeAppInstanceArnProps</a>

---

##### `appInstanceBot` <a name="appInstanceBot" id="@cdk_utils/iam.chime.ChimeResources.appInstanceBot"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.appInstanceBot(props: ChimeAppInstanceBotArnProps)
```

Builds an ARN for the app-instance-bot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.appInstanceBot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeAppInstanceBotArnProps">ChimeAppInstanceBotArnProps</a>

---

##### `appInstanceUser` <a name="appInstanceUser" id="@cdk_utils/iam.chime.ChimeResources.appInstanceUser"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.appInstanceUser(props: ChimeAppInstanceUserArnProps)
```

Builds an ARN for the app-instance-user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.appInstanceUser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeAppInstanceUserArnProps">ChimeAppInstanceUserArnProps</a>

---

##### `channel` <a name="channel" id="@cdk_utils/iam.chime.ChimeResources.channel"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.channel(props: ChimeChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeChannelArnProps">ChimeChannelArnProps</a>

---

##### `channelFlow` <a name="channelFlow" id="@cdk_utils/iam.chime.ChimeResources.channelFlow"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.channelFlow(props: ChimeChannelFlowArnProps)
```

Builds an ARN for the channel-flow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.channelFlow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeChannelFlowArnProps">ChimeChannelFlowArnProps</a>

---

##### `isValidAppInstanceArn` <a name="isValidAppInstanceArn" id="@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidAppInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the app-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAppInstanceBotArn` <a name="isValidAppInstanceBotArn" id="@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceBotArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidAppInstanceBotArn(arn: string)
```

Validates whether a string is a valid ARN for the app-instance-bot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceBotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAppInstanceUserArn` <a name="isValidAppInstanceUserArn" id="@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceUserArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidAppInstanceUserArn(arn: string)
```

Validates whether a string is a valid ARN for the app-instance-user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidAppInstanceUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.chime.ChimeResources.isValidChannelArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelFlowArn` <a name="isValidChannelFlowArn" id="@cdk_utils/iam.chime.ChimeResources.isValidChannelFlowArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidChannelFlowArn(arn: string)
```

Validates whether a string is a valid ARN for the channel-flow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidChannelFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMediaInsightsPipelineConfigurationArn` <a name="isValidMediaInsightsPipelineConfigurationArn" id="@cdk_utils/iam.chime.ChimeResources.isValidMediaInsightsPipelineConfigurationArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidMediaInsightsPipelineConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the media-insights-pipeline-configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidMediaInsightsPipelineConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMediaPipelineArn` <a name="isValidMediaPipelineArn" id="@cdk_utils/iam.chime.ChimeResources.isValidMediaPipelineArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidMediaPipelineArn(arn: string)
```

Validates whether a string is a valid ARN for the media-pipeline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidMediaPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMediaPipelineKinesisVideoStreamPoolArn` <a name="isValidMediaPipelineKinesisVideoStreamPoolArn" id="@cdk_utils/iam.chime.ChimeResources.isValidMediaPipelineKinesisVideoStreamPoolArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidMediaPipelineKinesisVideoStreamPoolArn(arn: string)
```

Validates whether a string is a valid ARN for the media-pipeline-kinesis-video-stream-pool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidMediaPipelineKinesisVideoStreamPoolArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMeetingArn` <a name="isValidMeetingArn" id="@cdk_utils/iam.chime.ChimeResources.isValidMeetingArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidMeetingArn(arn: string)
```

Validates whether a string is a valid ARN for the meeting resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidMeetingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSipMediaApplicationArn` <a name="isValidSipMediaApplicationArn" id="@cdk_utils/iam.chime.ChimeResources.isValidSipMediaApplicationArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidSipMediaApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the sip-media-application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidSipMediaApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVoiceConnectorArn` <a name="isValidVoiceConnectorArn" id="@cdk_utils/iam.chime.ChimeResources.isValidVoiceConnectorArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidVoiceConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the voice-connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidVoiceConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVoiceProfileArn` <a name="isValidVoiceProfileArn" id="@cdk_utils/iam.chime.ChimeResources.isValidVoiceProfileArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidVoiceProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the voice-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidVoiceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVoiceProfileDomainArn` <a name="isValidVoiceProfileDomainArn" id="@cdk_utils/iam.chime.ChimeResources.isValidVoiceProfileDomainArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.isValidVoiceProfileDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the voice-profile-domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.isValidVoiceProfileDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `mediaInsightsPipelineConfiguration` <a name="mediaInsightsPipelineConfiguration" id="@cdk_utils/iam.chime.ChimeResources.mediaInsightsPipelineConfiguration"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.mediaInsightsPipelineConfiguration(props: ChimeMediaInsightsPipelineConfigurationArnProps)
```

Builds an ARN for the media-insights-pipeline-configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.mediaInsightsPipelineConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeMediaInsightsPipelineConfigurationArnProps">ChimeMediaInsightsPipelineConfigurationArnProps</a>

---

##### `mediaPipeline` <a name="mediaPipeline" id="@cdk_utils/iam.chime.ChimeResources.mediaPipeline"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.mediaPipeline(props: ChimeMediaPipelineArnProps)
```

Builds an ARN for the media-pipeline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.mediaPipeline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeMediaPipelineArnProps">ChimeMediaPipelineArnProps</a>

---

##### `mediaPipelineKinesisVideoStreamPool` <a name="mediaPipelineKinesisVideoStreamPool" id="@cdk_utils/iam.chime.ChimeResources.mediaPipelineKinesisVideoStreamPool"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.mediaPipelineKinesisVideoStreamPool(props: ChimeMediaPipelineKinesisVideoStreamPoolArnProps)
```

Builds an ARN for the media-pipeline-kinesis-video-stream-pool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.mediaPipelineKinesisVideoStreamPool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeMediaPipelineKinesisVideoStreamPoolArnProps">ChimeMediaPipelineKinesisVideoStreamPoolArnProps</a>

---

##### `meeting` <a name="meeting" id="@cdk_utils/iam.chime.ChimeResources.meeting"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.meeting(props: ChimeMeetingArnProps)
```

Builds an ARN for the meeting resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.meeting.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeMeetingArnProps">ChimeMeetingArnProps</a>

---

##### `parseAppInstanceArn` <a name="parseAppInstanceArn" id="@cdk_utils/iam.chime.ChimeResources.parseAppInstanceArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseAppInstanceArn(arn: string)
```

Parses a app-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseAppInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppInstanceBotArn` <a name="parseAppInstanceBotArn" id="@cdk_utils/iam.chime.ChimeResources.parseAppInstanceBotArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseAppInstanceBotArn(arn: string)
```

Parses a app-instance-bot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseAppInstanceBotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppInstanceUserArn` <a name="parseAppInstanceUserArn" id="@cdk_utils/iam.chime.ChimeResources.parseAppInstanceUserArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseAppInstanceUserArn(arn: string)
```

Parses a app-instance-user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseAppInstanceUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.chime.ChimeResources.parseChannelArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelFlowArn` <a name="parseChannelFlowArn" id="@cdk_utils/iam.chime.ChimeResources.parseChannelFlowArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseChannelFlowArn(arn: string)
```

Parses a channel-flow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseChannelFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMediaInsightsPipelineConfigurationArn` <a name="parseMediaInsightsPipelineConfigurationArn" id="@cdk_utils/iam.chime.ChimeResources.parseMediaInsightsPipelineConfigurationArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseMediaInsightsPipelineConfigurationArn(arn: string)
```

Parses a media-insights-pipeline-configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseMediaInsightsPipelineConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMediaPipelineArn` <a name="parseMediaPipelineArn" id="@cdk_utils/iam.chime.ChimeResources.parseMediaPipelineArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseMediaPipelineArn(arn: string)
```

Parses a media-pipeline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseMediaPipelineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMediaPipelineKinesisVideoStreamPoolArn` <a name="parseMediaPipelineKinesisVideoStreamPoolArn" id="@cdk_utils/iam.chime.ChimeResources.parseMediaPipelineKinesisVideoStreamPoolArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseMediaPipelineKinesisVideoStreamPoolArn(arn: string)
```

Parses a media-pipeline-kinesis-video-stream-pool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseMediaPipelineKinesisVideoStreamPoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMeetingArn` <a name="parseMeetingArn" id="@cdk_utils/iam.chime.ChimeResources.parseMeetingArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseMeetingArn(arn: string)
```

Parses a meeting ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseMeetingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSipMediaApplicationArn` <a name="parseSipMediaApplicationArn" id="@cdk_utils/iam.chime.ChimeResources.parseSipMediaApplicationArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseSipMediaApplicationArn(arn: string)
```

Parses a sip-media-application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseSipMediaApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVoiceConnectorArn` <a name="parseVoiceConnectorArn" id="@cdk_utils/iam.chime.ChimeResources.parseVoiceConnectorArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseVoiceConnectorArn(arn: string)
```

Parses a voice-connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseVoiceConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVoiceProfileArn` <a name="parseVoiceProfileArn" id="@cdk_utils/iam.chime.ChimeResources.parseVoiceProfileArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseVoiceProfileArn(arn: string)
```

Parses a voice-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseVoiceProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVoiceProfileDomainArn` <a name="parseVoiceProfileDomainArn" id="@cdk_utils/iam.chime.ChimeResources.parseVoiceProfileDomainArn"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.parseVoiceProfileDomainArn(arn: string)
```

Parses a voice-profile-domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chime.ChimeResources.parseVoiceProfileDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `sipMediaApplication` <a name="sipMediaApplication" id="@cdk_utils/iam.chime.ChimeResources.sipMediaApplication"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.sipMediaApplication(props: ChimeSipMediaApplicationArnProps)
```

Builds an ARN for the sip-media-application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.sipMediaApplication.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeSipMediaApplicationArnProps">ChimeSipMediaApplicationArnProps</a>

---

##### `voiceConnector` <a name="voiceConnector" id="@cdk_utils/iam.chime.ChimeResources.voiceConnector"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.voiceConnector(props: ChimeVoiceConnectorArnProps)
```

Builds an ARN for the voice-connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.voiceConnector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeVoiceConnectorArnProps">ChimeVoiceConnectorArnProps</a>

---

##### `voiceProfile` <a name="voiceProfile" id="@cdk_utils/iam.chime.ChimeResources.voiceProfile"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.voiceProfile(props: ChimeVoiceProfileArnProps)
```

Builds an ARN for the voice-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.voiceProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeVoiceProfileArnProps">ChimeVoiceProfileArnProps</a>

---

##### `voiceProfileDomain` <a name="voiceProfileDomain" id="@cdk_utils/iam.chime.ChimeResources.voiceProfileDomain"></a>

```typescript
import { chime } from '@cdk_utils/iam'

chime.ChimeResources.voiceProfileDomain(props: ChimeVoiceProfileDomainArnProps)
```

Builds an ARN for the voice-profile-domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chime.ChimeResources.voiceProfileDomain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chime.ChimeVoiceProfileDomainArnProps">ChimeVoiceProfileDomainArnProps</a>

---




