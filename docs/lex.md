# `lex` Submodule <a name="`lex` Submodule" id="@cdk_utils/iam.lex"></a>


## Structs <a name="Structs" id="Structs"></a>

### LexBotAliasArnComponents <a name="LexBotAliasArnComponents" id="@cdk_utils/iam.lex.LexBotAliasArnComponents"></a>

Parsed components of a bot alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexBotAliasArnComponents.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexBotAliasArnComponents: lex.LexBotAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasArnComponents.property.botAliasId">botAliasId</a></code> | <code>string</code> | The BotAliasId component. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasArnComponents.property.botId">botId</a></code> | <code>string</code> | The BotId component. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lex.LexBotAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `botAliasId`<sup>Required</sup> <a name="botAliasId" id="@cdk_utils/iam.lex.LexBotAliasArnComponents.property.botAliasId"></a>

```typescript
public readonly botAliasId: string;
```

- *Type:* string

The BotAliasId component.

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdk_utils/iam.lex.LexBotAliasArnComponents.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

The BotId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lex.LexBotAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lex.LexBotAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LexBotAliasVariant1ArnProps <a name="LexBotAliasVariant1ArnProps" id="@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps"></a>

Properties for building a bot aliasVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexBotAliasVariant1ArnProps: lex.LexBotAliasVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.botAliasId">botAliasId</a></code> | <code>string</code> | The BotAliasId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.botId">botId</a></code> | <code>string</code> | The BotId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `botAliasId`<sup>Required</sup> <a name="botAliasId" id="@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.botAliasId"></a>

```typescript
public readonly botAliasId: string;
```

- *Type:* string

The BotAliasId component of the ARN.

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

The BotId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LexBotAliasVariant2ArnProps <a name="LexBotAliasVariant2ArnProps" id="@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps"></a>

Properties for building a bot aliasVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexBotAliasVariant2ArnProps: lex.LexBotAliasVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.botAlias">botAlias</a></code> | <code>string</code> | The BotAlias component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.botName">botName</a></code> | <code>string</code> | The BotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `botAlias`<sup>Required</sup> <a name="botAlias" id="@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.botAlias"></a>

```typescript
public readonly botAlias: string;
```

- *Type:* string

The BotAlias component of the ARN.

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

The BotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LexBotArnComponents <a name="LexBotArnComponents" id="@cdk_utils/iam.lex.LexBotArnComponents"></a>

Parsed components of a bot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexBotArnComponents.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexBotArnComponents: lex.LexBotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexBotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexBotArnComponents.property.botId">botId</a></code> | <code>string</code> | The BotId component. |
| <code><a href="#@cdk_utils/iam.lex.LexBotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexBotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lex.LexBotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdk_utils/iam.lex.LexBotArnComponents.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

The BotId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lex.LexBotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lex.LexBotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LexBotVariant1ArnProps <a name="LexBotVariant1ArnProps" id="@cdk_utils/iam.lex.LexBotVariant1ArnProps"></a>

Properties for building a botVariant1 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexBotVariant1ArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexBotVariant1ArnProps: lex.LexBotVariant1ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexBotVariant1ArnProps.property.botId">botId</a></code> | <code>string</code> | The BotId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVariant1ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVariant1ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVariant1ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `botId`<sup>Required</sup> <a name="botId" id="@cdk_utils/iam.lex.LexBotVariant1ArnProps.property.botId"></a>

```typescript
public readonly botId: string;
```

- *Type:* string

The BotId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexBotVariant1ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexBotVariant1ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexBotVariant1ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LexBotVariant2ArnProps <a name="LexBotVariant2ArnProps" id="@cdk_utils/iam.lex.LexBotVariant2ArnProps"></a>

Properties for building a botVariant2 ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexBotVariant2ArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexBotVariant2ArnProps: lex.LexBotVariant2ArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexBotVariant2ArnProps.property.botName">botName</a></code> | <code>string</code> | The BotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVariant2ArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVariant2ArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVariant2ArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdk_utils/iam.lex.LexBotVariant2ArnProps.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

The BotName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexBotVariant2ArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexBotVariant2ArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexBotVariant2ArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LexBotVersionArnComponents <a name="LexBotVersionArnComponents" id="@cdk_utils/iam.lex.LexBotVersionArnComponents"></a>

Parsed components of a bot version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexBotVersionArnComponents.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexBotVersionArnComponents: lex.LexBotVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnComponents.property.botName">botName</a></code> | <code>string</code> | The BotName component. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnComponents.property.botVersion">botVersion</a></code> | <code>string</code> | The BotVersion component. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lex.LexBotVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdk_utils/iam.lex.LexBotVersionArnComponents.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

The BotName component.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdk_utils/iam.lex.LexBotVersionArnComponents.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

The BotVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lex.LexBotVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lex.LexBotVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LexBotVersionArnProps <a name="LexBotVersionArnProps" id="@cdk_utils/iam.lex.LexBotVersionArnProps"></a>

Properties for building a bot version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexBotVersionArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexBotVersionArnProps: lex.LexBotVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnProps.property.botName">botName</a></code> | <code>string</code> | The BotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnProps.property.botVersion">botVersion</a></code> | <code>string</code> | The BotVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexBotVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdk_utils/iam.lex.LexBotVersionArnProps.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

The BotName component of the ARN.

---

##### `botVersion`<sup>Required</sup> <a name="botVersion" id="@cdk_utils/iam.lex.LexBotVersionArnProps.property.botVersion"></a>

```typescript
public readonly botVersion: string;
```

- *Type:* string

The BotVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexBotVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexBotVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexBotVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LexChannelArnComponents <a name="LexChannelArnComponents" id="@cdk_utils/iam.lex.LexChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexChannelArnComponents.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexChannelArnComponents: lex.LexChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnComponents.property.botAlias">botAlias</a></code> | <code>string</code> | The BotAlias component. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnComponents.property.botName">botName</a></code> | <code>string</code> | The BotName component. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lex.LexChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `botAlias`<sup>Required</sup> <a name="botAlias" id="@cdk_utils/iam.lex.LexChannelArnComponents.property.botAlias"></a>

```typescript
public readonly botAlias: string;
```

- *Type:* string

The BotAlias component.

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdk_utils/iam.lex.LexChannelArnComponents.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

The BotName component.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.lex.LexChannelArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lex.LexChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lex.LexChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LexChannelArnProps <a name="LexChannelArnProps" id="@cdk_utils/iam.lex.LexChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexChannelArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexChannelArnProps: lex.LexChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnProps.property.botAlias">botAlias</a></code> | <code>string</code> | The BotAlias component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnProps.property.botName">botName</a></code> | <code>string</code> | The BotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `botAlias`<sup>Required</sup> <a name="botAlias" id="@cdk_utils/iam.lex.LexChannelArnProps.property.botAlias"></a>

```typescript
public readonly botAlias: string;
```

- *Type:* string

The BotAlias component of the ARN.

---

##### `botName`<sup>Required</sup> <a name="botName" id="@cdk_utils/iam.lex.LexChannelArnProps.property.botName"></a>

```typescript
public readonly botName: string;
```

- *Type:* string

The BotName component of the ARN.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.lex.LexChannelArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LexIntentVersionArnComponents <a name="LexIntentVersionArnComponents" id="@cdk_utils/iam.lex.LexIntentVersionArnComponents"></a>

Parsed components of a intent version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexIntentVersionArnComponents.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexIntentVersionArnComponents: lex.LexIntentVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.intentName">intentName</a></code> | <code>string</code> | The IntentName component. |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.intentVersion">intentVersion</a></code> | <code>string</code> | The IntentVersion component. |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `intentName`<sup>Required</sup> <a name="intentName" id="@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.intentName"></a>

```typescript
public readonly intentName: string;
```

- *Type:* string

The IntentName component.

---

##### `intentVersion`<sup>Required</sup> <a name="intentVersion" id="@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.intentVersion"></a>

```typescript
public readonly intentVersion: string;
```

- *Type:* string

The IntentVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lex.LexIntentVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LexIntentVersionArnProps <a name="LexIntentVersionArnProps" id="@cdk_utils/iam.lex.LexIntentVersionArnProps"></a>

Properties for building a intent version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexIntentVersionArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexIntentVersionArnProps: lex.LexIntentVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnProps.property.intentName">intentName</a></code> | <code>string</code> | The IntentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnProps.property.intentVersion">intentVersion</a></code> | <code>string</code> | The IntentVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexIntentVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `intentName`<sup>Required</sup> <a name="intentName" id="@cdk_utils/iam.lex.LexIntentVersionArnProps.property.intentName"></a>

```typescript
public readonly intentName: string;
```

- *Type:* string

The IntentName component of the ARN.

---

##### `intentVersion`<sup>Required</sup> <a name="intentVersion" id="@cdk_utils/iam.lex.LexIntentVersionArnProps.property.intentVersion"></a>

```typescript
public readonly intentVersion: string;
```

- *Type:* string

The IntentVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexIntentVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexIntentVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexIntentVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LexSlottypeVersionArnComponents <a name="LexSlottypeVersionArnComponents" id="@cdk_utils/iam.lex.LexSlottypeVersionArnComponents"></a>

Parsed components of a slottype version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexSlottypeVersionArnComponents: lex.LexSlottypeVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.slotName">slotName</a></code> | <code>string</code> | The SlotName component. |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.slotVersion">slotVersion</a></code> | <code>string</code> | The SlotVersion component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

The SlotName component.

---

##### `slotVersion`<sup>Required</sup> <a name="slotVersion" id="@cdk_utils/iam.lex.LexSlottypeVersionArnComponents.property.slotVersion"></a>

```typescript
public readonly slotVersion: string;
```

- *Type:* string

The SlotVersion component.

---

### LexSlottypeVersionArnProps <a name="LexSlottypeVersionArnProps" id="@cdk_utils/iam.lex.LexSlottypeVersionArnProps"></a>

Properties for building a slottype version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexSlottypeVersionArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexSlottypeVersionArnProps: lex.LexSlottypeVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.slotName">slotName</a></code> | <code>string</code> | The SlotName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.slotVersion">slotVersion</a></code> | <code>string</code> | The SlotVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

The SlotName component of the ARN.

---

##### `slotVersion`<sup>Required</sup> <a name="slotVersion" id="@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.slotVersion"></a>

```typescript
public readonly slotVersion: string;
```

- *Type:* string

The SlotVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexSlottypeVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LexTestSetArnComponents <a name="LexTestSetArnComponents" id="@cdk_utils/iam.lex.LexTestSetArnComponents"></a>

Parsed components of a test set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexTestSetArnComponents.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexTestSetArnComponents: lex.LexTestSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexTestSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexTestSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexTestSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.lex.LexTestSetArnComponents.property.testSetId">testSetId</a></code> | <code>string</code> | The TestSetId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lex.LexTestSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lex.LexTestSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lex.LexTestSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `testSetId`<sup>Required</sup> <a name="testSetId" id="@cdk_utils/iam.lex.LexTestSetArnComponents.property.testSetId"></a>

```typescript
public readonly testSetId: string;
```

- *Type:* string

The TestSetId component.

---

### LexTestSetArnProps <a name="LexTestSetArnProps" id="@cdk_utils/iam.lex.LexTestSetArnProps"></a>

Properties for building a test set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lex.LexTestSetArnProps.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

const lexTestSetArnProps: lex.LexTestSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexTestSetArnProps.property.testSetId">testSetId</a></code> | <code>string</code> | The TestSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.lex.LexTestSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lex.LexTestSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lex.LexTestSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `testSetId`<sup>Required</sup> <a name="testSetId" id="@cdk_utils/iam.lex.LexTestSetArnProps.property.testSetId"></a>

```typescript
public readonly testSetId: string;
```

- *Type:* string

The TestSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lex.LexTestSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lex.LexTestSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lex.LexTestSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LexActions <a name="LexActions" id="@cdk_utils/iam.lex.LexActions"></a>

IAM action constants for the lex service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lex.LexActions.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

new lex.LexActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBot">actionGetBot</a></code> | <code>string</code> | [Read] lex:GetBot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBotAlias">actionGetBotAlias</a></code> | <code>string</code> | [Read] lex:GetBotAlias. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBotAliases">actionGetBotAliases</a></code> | <code>string</code> | [List] lex:GetBotAliases. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBotChannelAssociation">actionGetBotChannelAssociation</a></code> | <code>string</code> | [Read] lex:GetBotChannelAssociation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBotChannelAssociations">actionGetBotChannelAssociations</a></code> | <code>string</code> | [List] lex:GetBotChannelAssociations. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBots">actionGetBots</a></code> | <code>string</code> | [List] lex:GetBots. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBotVersions">actionGetBotVersions</a></code> | <code>string</code> | [List] lex:GetBotVersions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBuiltinIntent">actionGetBuiltinIntent</a></code> | <code>string</code> | [Read] lex:GetBuiltinIntent. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBuiltinIntents">actionGetBuiltinIntents</a></code> | <code>string</code> | [Read] lex:GetBuiltinIntents. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetBuiltinSlotTypes">actionGetBuiltinSlotTypes</a></code> | <code>string</code> | [Read] lex:GetBuiltinSlotTypes. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetExport">actionGetExport</a></code> | <code>string</code> | [Read] lex:GetExport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetImport">actionGetImport</a></code> | <code>string</code> | [Read] lex:GetImport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetIntent">actionGetIntent</a></code> | <code>string</code> | [Read] lex:GetIntent. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetIntents">actionGetIntents</a></code> | <code>string</code> | [List] lex:GetIntents. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetIntentVersions">actionGetIntentVersions</a></code> | <code>string</code> | [List] lex:GetIntentVersions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetMigration">actionGetMigration</a></code> | <code>string</code> | [Read] lex:GetMigration. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetMigrations">actionGetMigrations</a></code> | <code>string</code> | [List] lex:GetMigrations. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetSession">actionGetSession</a></code> | <code>string</code> | [Read] lex:GetSession. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetSlotType">actionGetSlotType</a></code> | <code>string</code> | [Read] lex:GetSlotType. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetSlotTypes">actionGetSlotTypes</a></code> | <code>string</code> | [List] lex:GetSlotTypes. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetSlotTypeVersions">actionGetSlotTypeVersions</a></code> | <code>string</code> | [List] lex:GetSlotTypeVersions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetTestExecutionArtifactsUrl">actionGetTestExecutionArtifactsUrl</a></code> | <code>string</code> | [Read] lex:GetTestExecutionArtifactsUrl. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.actionGetUtterancesView">actionGetUtterancesView</a></code> | <code>string</code> | [List] lex:GetUtterancesView. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.BatchCreateCustomVocabularyItem">BatchCreateCustomVocabularyItem</a></code> | <code>string</code> | [Write] lex:BatchCreateCustomVocabularyItem. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.BatchDeleteCustomVocabularyItem">BatchDeleteCustomVocabularyItem</a></code> | <code>string</code> | [Write] lex:BatchDeleteCustomVocabularyItem. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.BatchUpdateCustomVocabularyItem">BatchUpdateCustomVocabularyItem</a></code> | <code>string</code> | [Write] lex:BatchUpdateCustomVocabularyItem. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.BuildBotLocale">BuildBotLocale</a></code> | <code>string</code> | [Write] lex:BuildBotLocale. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateBot">CreateBot</a></code> | <code>string</code> | [Write] lex:CreateBot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateBotAlias">CreateBotAlias</a></code> | <code>string</code> | [Write] lex:CreateBotAlias. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateBotChannel">CreateBotChannel</a></code> | <code>string</code> | [Write] lex:CreateBotChannel. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateBotLocale">CreateBotLocale</a></code> | <code>string</code> | [Write] lex:CreateBotLocale. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateBotReplica">CreateBotReplica</a></code> | <code>string</code> | [Write] lex:CreateBotReplica. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateBotVersion">CreateBotVersion</a></code> | <code>string</code> | [Write] lex:CreateBotVersion. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateCustomVocabulary">CreateCustomVocabulary</a></code> | <code>string</code> | [Write] lex:CreateCustomVocabulary. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateExport">CreateExport</a></code> | <code>string</code> | [Write] lex:CreateExport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateIntent">CreateIntent</a></code> | <code>string</code> | [Write] lex:CreateIntent. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateIntentVersion">CreateIntentVersion</a></code> | <code>string</code> | [Write] lex:CreateIntentVersion. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateResourcePolicy">CreateResourcePolicy</a></code> | <code>string</code> | [Write] lex:CreateResourcePolicy. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateResourcePolicyStatement">CreateResourcePolicyStatement</a></code> | <code>string</code> | [Write] lex:CreateResourcePolicyStatement. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateSlot">CreateSlot</a></code> | <code>string</code> | [Write] lex:CreateSlot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateSlotType">CreateSlotType</a></code> | <code>string</code> | [Write] lex:CreateSlotType. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateSlotTypeVersion">CreateSlotTypeVersion</a></code> | <code>string</code> | [Write] lex:CreateSlotTypeVersion. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateTestSet">CreateTestSet</a></code> | <code>string</code> | [Write] lex:CreateTestSet. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateTestSetDiscrepancyReport">CreateTestSetDiscrepancyReport</a></code> | <code>string</code> | [Write] lex:CreateTestSetDiscrepancyReport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.CreateUploadUrl">CreateUploadUrl</a></code> | <code>string</code> | [Write] lex:CreateUploadUrl. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteBot">DeleteBot</a></code> | <code>string</code> | [Write] lex:DeleteBot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteBotAlias">DeleteBotAlias</a></code> | <code>string</code> | [Write] lex:DeleteBotAlias. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteBotAnalyzerRecommendation">DeleteBotAnalyzerRecommendation</a></code> | <code>string</code> | [Write] lex:DeleteBotAnalyzerRecommendation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteBotChannel">DeleteBotChannel</a></code> | <code>string</code> | [Write] lex:DeleteBotChannel. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteBotChannelAssociation">DeleteBotChannelAssociation</a></code> | <code>string</code> | [Write] lex:DeleteBotChannelAssociation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteBotLocale">DeleteBotLocale</a></code> | <code>string</code> | [Write] lex:DeleteBotLocale. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteBotReplica">DeleteBotReplica</a></code> | <code>string</code> | [Write] lex:DeleteBotReplica. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteBotVersion">DeleteBotVersion</a></code> | <code>string</code> | [Write] lex:DeleteBotVersion. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteCustomVocabulary">DeleteCustomVocabulary</a></code> | <code>string</code> | [Write] lex:DeleteCustomVocabulary. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteExport">DeleteExport</a></code> | <code>string</code> | [Write] lex:DeleteExport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteImport">DeleteImport</a></code> | <code>string</code> | [Write] lex:DeleteImport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteIntent">DeleteIntent</a></code> | <code>string</code> | [Write] lex:DeleteIntent. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteIntentVersion">DeleteIntentVersion</a></code> | <code>string</code> | [Write] lex:DeleteIntentVersion. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] lex:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteResourcePolicyStatement">DeleteResourcePolicyStatement</a></code> | <code>string</code> | [Write] lex:DeleteResourcePolicyStatement. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteSession">DeleteSession</a></code> | <code>string</code> | [Write] lex:DeleteSession. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteSlot">DeleteSlot</a></code> | <code>string</code> | [Write] lex:DeleteSlot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteSlotType">DeleteSlotType</a></code> | <code>string</code> | [Write] lex:DeleteSlotType. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteSlotTypeVersion">DeleteSlotTypeVersion</a></code> | <code>string</code> | [Write] lex:DeleteSlotTypeVersion. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteTestSet">DeleteTestSet</a></code> | <code>string</code> | [Write] lex:DeleteTestSet. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DeleteUtterances">DeleteUtterances</a></code> | <code>string</code> | [Write] lex:DeleteUtterances. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBot">DescribeBot</a></code> | <code>string</code> | [Read] lex:DescribeBot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBotAlias">DescribeBotAlias</a></code> | <code>string</code> | [Read] lex:DescribeBotAlias. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBotAnalyzerRecommendation">DescribeBotAnalyzerRecommendation</a></code> | <code>string</code> | [Read] lex:DescribeBotAnalyzerRecommendation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBotChannel">DescribeBotChannel</a></code> | <code>string</code> | [Read] lex:DescribeBotChannel. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBotLocale">DescribeBotLocale</a></code> | <code>string</code> | [Read] lex:DescribeBotLocale. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBotRecommendation">DescribeBotRecommendation</a></code> | <code>string</code> | [Read] lex:DescribeBotRecommendation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBotReplica">DescribeBotReplica</a></code> | <code>string</code> | [Read] lex:DescribeBotReplica. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBotResourceGeneration">DescribeBotResourceGeneration</a></code> | <code>string</code> | [Read] lex:DescribeBotResourceGeneration. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeBotVersion">DescribeBotVersion</a></code> | <code>string</code> | [Read] lex:DescribeBotVersion. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeCustomVocabulary">DescribeCustomVocabulary</a></code> | <code>string</code> | [Read] lex:DescribeCustomVocabulary. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeCustomVocabularyMetadata">DescribeCustomVocabularyMetadata</a></code> | <code>string</code> | [Read] lex:DescribeCustomVocabularyMetadata. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeExport">DescribeExport</a></code> | <code>string</code> | [Read] lex:DescribeExport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeImport">DescribeImport</a></code> | <code>string</code> | [Read] lex:DescribeImport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeIntent">DescribeIntent</a></code> | <code>string</code> | [Read] lex:DescribeIntent. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string</code> | [Read] lex:DescribeResourcePolicy. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeSlot">DescribeSlot</a></code> | <code>string</code> | [Read] lex:DescribeSlot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeSlotType">DescribeSlotType</a></code> | <code>string</code> | [Read] lex:DescribeSlotType. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeTestExecution">DescribeTestExecution</a></code> | <code>string</code> | [Read] lex:DescribeTestExecution. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeTestSet">DescribeTestSet</a></code> | <code>string</code> | [Read] lex:DescribeTestSet. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeTestSetDiscrepancyReport">DescribeTestSetDiscrepancyReport</a></code> | <code>string</code> | [Read] lex:DescribeTestSetDiscrepancyReport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.DescribeTestSetGeneration">DescribeTestSetGeneration</a></code> | <code>string</code> | [Read] lex:DescribeTestSetGeneration. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.GenerateBotElement">GenerateBotElement</a></code> | <code>string</code> | [Read] lex:GenerateBotElement. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListAggregatedUtterances">ListAggregatedUtterances</a></code> | <code>string</code> | [List] lex:ListAggregatedUtterances. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotAliases">ListBotAliases</a></code> | <code>string</code> | [List] lex:ListBotAliases. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotAliasReplicas">ListBotAliasReplicas</a></code> | <code>string</code> | [List] lex:ListBotAliasReplicas. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotAnalyzerRecommendations">ListBotAnalyzerRecommendations</a></code> | <code>string</code> | [List] lex:ListBotAnalyzerRecommendations. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotChannels">ListBotChannels</a></code> | <code>string</code> | [List] lex:ListBotChannels. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotLocales">ListBotLocales</a></code> | <code>string</code> | [List] lex:ListBotLocales. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotRecommendations">ListBotRecommendations</a></code> | <code>string</code> | [List] lex:ListBotRecommendations. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotReplicas">ListBotReplicas</a></code> | <code>string</code> | [List] lex:ListBotReplicas. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotResourceGenerations">ListBotResourceGenerations</a></code> | <code>string</code> | [List] lex:ListBotResourceGenerations. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBots">ListBots</a></code> | <code>string</code> | [List] lex:ListBots. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotVersionReplicas">ListBotVersionReplicas</a></code> | <code>string</code> | [List] lex:ListBotVersionReplicas. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBotVersions">ListBotVersions</a></code> | <code>string</code> | [List] lex:ListBotVersions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBuiltInIntents">ListBuiltInIntents</a></code> | <code>string</code> | [List] lex:ListBuiltInIntents. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListBuiltInSlotTypes">ListBuiltInSlotTypes</a></code> | <code>string</code> | [List] lex:ListBuiltInSlotTypes. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListCustomVocabularyItems">ListCustomVocabularyItems</a></code> | <code>string</code> | [List] lex:ListCustomVocabularyItems. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListExports">ListExports</a></code> | <code>string</code> | [List] lex:ListExports. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListImports">ListImports</a></code> | <code>string</code> | [List] lex:ListImports. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListIntentMetrics">ListIntentMetrics</a></code> | <code>string</code> | [List] lex:ListIntentMetrics. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListIntentPaths">ListIntentPaths</a></code> | <code>string</code> | [List] lex:ListIntentPaths. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListIntents">ListIntents</a></code> | <code>string</code> | [List] lex:ListIntents. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListIntentStageMetrics">ListIntentStageMetrics</a></code> | <code>string</code> | [List] lex:ListIntentStageMetrics. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListRecommendedIntents">ListRecommendedIntents</a></code> | <code>string</code> | [List] lex:ListRecommendedIntents. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListSessionAnalyticsData">ListSessionAnalyticsData</a></code> | <code>string</code> | [List] lex:ListSessionAnalyticsData. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListSessionMetrics">ListSessionMetrics</a></code> | <code>string</code> | [List] lex:ListSessionMetrics. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListSlots">ListSlots</a></code> | <code>string</code> | [List] lex:ListSlots. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListSlotTypes">ListSlotTypes</a></code> | <code>string</code> | [List] lex:ListSlotTypes. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] lex:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListTestExecutionResultItems">ListTestExecutionResultItems</a></code> | <code>string</code> | [Read] lex:ListTestExecutionResultItems. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListTestExecutions">ListTestExecutions</a></code> | <code>string</code> | [List] lex:ListTestExecutions. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListTestSetRecords">ListTestSetRecords</a></code> | <code>string</code> | [Read] lex:ListTestSetRecords. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.ListTestSets">ListTestSets</a></code> | <code>string</code> | [List] lex:ListTestSets. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.PostContent">PostContent</a></code> | <code>string</code> | [Write] lex:PostContent. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.PostText">PostText</a></code> | <code>string</code> | [Write] lex:PostText. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.PutBot">PutBot</a></code> | <code>string</code> | [Write] lex:PutBot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.PutBotAlias">PutBotAlias</a></code> | <code>string</code> | [Write] lex:PutBotAlias. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.PutIntent">PutIntent</a></code> | <code>string</code> | [Write] lex:PutIntent. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.PutSession">PutSession</a></code> | <code>string</code> | [Write] lex:PutSession. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.PutSlotType">PutSlotType</a></code> | <code>string</code> | [Write] lex:PutSlotType. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.RecognizeText">RecognizeText</a></code> | <code>string</code> | [Write] lex:RecognizeText. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.RecognizeUtterance">RecognizeUtterance</a></code> | <code>string</code> | [Write] lex:RecognizeUtterance. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.SearchAssociatedTranscripts">SearchAssociatedTranscripts</a></code> | <code>string</code> | [List] lex:SearchAssociatedTranscripts. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StartBotAnalyzer">StartBotAnalyzer</a></code> | <code>string</code> | [Write] lex:StartBotAnalyzer. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StartBotRecommendation">StartBotRecommendation</a></code> | <code>string</code> | [Write] lex:StartBotRecommendation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StartBotResourceGeneration">StartBotResourceGeneration</a></code> | <code>string</code> | [Write] lex:StartBotResourceGeneration. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StartConversation">StartConversation</a></code> | <code>string</code> | [Write] lex:StartConversation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StartImport">StartImport</a></code> | <code>string</code> | [Write] lex:StartImport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StartMigration">StartMigration</a></code> | <code>string</code> | [Write] lex:StartMigration. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StartTestExecution">StartTestExecution</a></code> | <code>string</code> | [Write] lex:StartTestExecution. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StartTestSetGeneration">StartTestSetGeneration</a></code> | <code>string</code> | [Write] lex:StartTestSetGeneration. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StopBotAnalyzer">StopBotAnalyzer</a></code> | <code>string</code> | [Write] lex:StopBotAnalyzer. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.StopBotRecommendation">StopBotRecommendation</a></code> | <code>string</code> | [Write] lex:StopBotRecommendation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] lex:TagResource. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] lex:UntagResource. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateBot">UpdateBot</a></code> | <code>string</code> | [Write] lex:UpdateBot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateBotAlias">UpdateBotAlias</a></code> | <code>string</code> | [Write] lex:UpdateBotAlias. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateBotLocale">UpdateBotLocale</a></code> | <code>string</code> | [Write] lex:UpdateBotLocale. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateBotRecommendation">UpdateBotRecommendation</a></code> | <code>string</code> | [Write] lex:UpdateBotRecommendation. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateCustomVocabulary">UpdateCustomVocabulary</a></code> | <code>string</code> | [Write] lex:UpdateCustomVocabulary. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateExport">UpdateExport</a></code> | <code>string</code> | [Write] lex:UpdateExport. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateIntent">UpdateIntent</a></code> | <code>string</code> | [Write] lex:UpdateIntent. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateResourcePolicy">UpdateResourcePolicy</a></code> | <code>string</code> | [Write] lex:UpdateResourcePolicy. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateSlot">UpdateSlot</a></code> | <code>string</code> | [Write] lex:UpdateSlot. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateSlotType">UpdateSlotType</a></code> | <code>string</code> | [Write] lex:UpdateSlotType. |
| <code><a href="#@cdk_utils/iam.lex.LexActions.property.UpdateTestSet">UpdateTestSet</a></code> | <code>string</code> | [Write] lex:UpdateTestSet. |

---

##### `actionGetBot`<sup>Required</sup> <a name="actionGetBot" id="@cdk_utils/iam.lex.LexActions.property.actionGetBot"></a>

```typescript
public readonly actionGetBot: string;
```

- *Type:* string

[Read] lex:GetBot.

---

##### `actionGetBotAlias`<sup>Required</sup> <a name="actionGetBotAlias" id="@cdk_utils/iam.lex.LexActions.property.actionGetBotAlias"></a>

```typescript
public readonly actionGetBotAlias: string;
```

- *Type:* string

[Read] lex:GetBotAlias.

---

##### `actionGetBotAliases`<sup>Required</sup> <a name="actionGetBotAliases" id="@cdk_utils/iam.lex.LexActions.property.actionGetBotAliases"></a>

```typescript
public readonly actionGetBotAliases: string;
```

- *Type:* string

[List] lex:GetBotAliases.

---

##### `actionGetBotChannelAssociation`<sup>Required</sup> <a name="actionGetBotChannelAssociation" id="@cdk_utils/iam.lex.LexActions.property.actionGetBotChannelAssociation"></a>

```typescript
public readonly actionGetBotChannelAssociation: string;
```

- *Type:* string

[Read] lex:GetBotChannelAssociation.

---

##### `actionGetBotChannelAssociations`<sup>Required</sup> <a name="actionGetBotChannelAssociations" id="@cdk_utils/iam.lex.LexActions.property.actionGetBotChannelAssociations"></a>

```typescript
public readonly actionGetBotChannelAssociations: string;
```

- *Type:* string

[List] lex:GetBotChannelAssociations.

---

##### `actionGetBots`<sup>Required</sup> <a name="actionGetBots" id="@cdk_utils/iam.lex.LexActions.property.actionGetBots"></a>

```typescript
public readonly actionGetBots: string;
```

- *Type:* string

[List] lex:GetBots.

---

##### `actionGetBotVersions`<sup>Required</sup> <a name="actionGetBotVersions" id="@cdk_utils/iam.lex.LexActions.property.actionGetBotVersions"></a>

```typescript
public readonly actionGetBotVersions: string;
```

- *Type:* string

[List] lex:GetBotVersions.

---

##### `actionGetBuiltinIntent`<sup>Required</sup> <a name="actionGetBuiltinIntent" id="@cdk_utils/iam.lex.LexActions.property.actionGetBuiltinIntent"></a>

```typescript
public readonly actionGetBuiltinIntent: string;
```

- *Type:* string

[Read] lex:GetBuiltinIntent.

---

##### `actionGetBuiltinIntents`<sup>Required</sup> <a name="actionGetBuiltinIntents" id="@cdk_utils/iam.lex.LexActions.property.actionGetBuiltinIntents"></a>

```typescript
public readonly actionGetBuiltinIntents: string;
```

- *Type:* string

[Read] lex:GetBuiltinIntents.

---

##### `actionGetBuiltinSlotTypes`<sup>Required</sup> <a name="actionGetBuiltinSlotTypes" id="@cdk_utils/iam.lex.LexActions.property.actionGetBuiltinSlotTypes"></a>

```typescript
public readonly actionGetBuiltinSlotTypes: string;
```

- *Type:* string

[Read] lex:GetBuiltinSlotTypes.

---

##### `actionGetExport`<sup>Required</sup> <a name="actionGetExport" id="@cdk_utils/iam.lex.LexActions.property.actionGetExport"></a>

```typescript
public readonly actionGetExport: string;
```

- *Type:* string

[Read] lex:GetExport.

---

##### `actionGetImport`<sup>Required</sup> <a name="actionGetImport" id="@cdk_utils/iam.lex.LexActions.property.actionGetImport"></a>

```typescript
public readonly actionGetImport: string;
```

- *Type:* string

[Read] lex:GetImport.

---

##### `actionGetIntent`<sup>Required</sup> <a name="actionGetIntent" id="@cdk_utils/iam.lex.LexActions.property.actionGetIntent"></a>

```typescript
public readonly actionGetIntent: string;
```

- *Type:* string

[Read] lex:GetIntent.

---

##### `actionGetIntents`<sup>Required</sup> <a name="actionGetIntents" id="@cdk_utils/iam.lex.LexActions.property.actionGetIntents"></a>

```typescript
public readonly actionGetIntents: string;
```

- *Type:* string

[List] lex:GetIntents.

---

##### `actionGetIntentVersions`<sup>Required</sup> <a name="actionGetIntentVersions" id="@cdk_utils/iam.lex.LexActions.property.actionGetIntentVersions"></a>

```typescript
public readonly actionGetIntentVersions: string;
```

- *Type:* string

[List] lex:GetIntentVersions.

---

##### `actionGetMigration`<sup>Required</sup> <a name="actionGetMigration" id="@cdk_utils/iam.lex.LexActions.property.actionGetMigration"></a>

```typescript
public readonly actionGetMigration: string;
```

- *Type:* string

[Read] lex:GetMigration.

---

##### `actionGetMigrations`<sup>Required</sup> <a name="actionGetMigrations" id="@cdk_utils/iam.lex.LexActions.property.actionGetMigrations"></a>

```typescript
public readonly actionGetMigrations: string;
```

- *Type:* string

[List] lex:GetMigrations.

---

##### `actionGetSession`<sup>Required</sup> <a name="actionGetSession" id="@cdk_utils/iam.lex.LexActions.property.actionGetSession"></a>

```typescript
public readonly actionGetSession: string;
```

- *Type:* string

[Read] lex:GetSession.

---

##### `actionGetSlotType`<sup>Required</sup> <a name="actionGetSlotType" id="@cdk_utils/iam.lex.LexActions.property.actionGetSlotType"></a>

```typescript
public readonly actionGetSlotType: string;
```

- *Type:* string

[Read] lex:GetSlotType.

---

##### `actionGetSlotTypes`<sup>Required</sup> <a name="actionGetSlotTypes" id="@cdk_utils/iam.lex.LexActions.property.actionGetSlotTypes"></a>

```typescript
public readonly actionGetSlotTypes: string;
```

- *Type:* string

[List] lex:GetSlotTypes.

---

##### `actionGetSlotTypeVersions`<sup>Required</sup> <a name="actionGetSlotTypeVersions" id="@cdk_utils/iam.lex.LexActions.property.actionGetSlotTypeVersions"></a>

```typescript
public readonly actionGetSlotTypeVersions: string;
```

- *Type:* string

[List] lex:GetSlotTypeVersions.

---

##### `actionGetTestExecutionArtifactsUrl`<sup>Required</sup> <a name="actionGetTestExecutionArtifactsUrl" id="@cdk_utils/iam.lex.LexActions.property.actionGetTestExecutionArtifactsUrl"></a>

```typescript
public readonly actionGetTestExecutionArtifactsUrl: string;
```

- *Type:* string

[Read] lex:GetTestExecutionArtifactsUrl.

---

##### `actionGetUtterancesView`<sup>Required</sup> <a name="actionGetUtterancesView" id="@cdk_utils/iam.lex.LexActions.property.actionGetUtterancesView"></a>

```typescript
public readonly actionGetUtterancesView: string;
```

- *Type:* string

[List] lex:GetUtterancesView.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.lex.LexActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.lex.LexActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.lex.LexActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.lex.LexActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.lex.LexActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCreateCustomVocabularyItem`<sup>Required</sup> <a name="BatchCreateCustomVocabularyItem" id="@cdk_utils/iam.lex.LexActions.property.BatchCreateCustomVocabularyItem"></a>

```typescript
public readonly BatchCreateCustomVocabularyItem: string;
```

- *Type:* string

[Write] lex:BatchCreateCustomVocabularyItem.

---

##### `BatchDeleteCustomVocabularyItem`<sup>Required</sup> <a name="BatchDeleteCustomVocabularyItem" id="@cdk_utils/iam.lex.LexActions.property.BatchDeleteCustomVocabularyItem"></a>

```typescript
public readonly BatchDeleteCustomVocabularyItem: string;
```

- *Type:* string

[Write] lex:BatchDeleteCustomVocabularyItem.

---

##### `BatchUpdateCustomVocabularyItem`<sup>Required</sup> <a name="BatchUpdateCustomVocabularyItem" id="@cdk_utils/iam.lex.LexActions.property.BatchUpdateCustomVocabularyItem"></a>

```typescript
public readonly BatchUpdateCustomVocabularyItem: string;
```

- *Type:* string

[Write] lex:BatchUpdateCustomVocabularyItem.

---

##### `BuildBotLocale`<sup>Required</sup> <a name="BuildBotLocale" id="@cdk_utils/iam.lex.LexActions.property.BuildBotLocale"></a>

```typescript
public readonly BuildBotLocale: string;
```

- *Type:* string

[Write] lex:BuildBotLocale.

---

##### `CreateBot`<sup>Required</sup> <a name="CreateBot" id="@cdk_utils/iam.lex.LexActions.property.CreateBot"></a>

```typescript
public readonly CreateBot: string;
```

- *Type:* string

[Write] lex:CreateBot.

---

##### `CreateBotAlias`<sup>Required</sup> <a name="CreateBotAlias" id="@cdk_utils/iam.lex.LexActions.property.CreateBotAlias"></a>

```typescript
public readonly CreateBotAlias: string;
```

- *Type:* string

[Write] lex:CreateBotAlias.

---

##### `CreateBotChannel`<sup>Required</sup> <a name="CreateBotChannel" id="@cdk_utils/iam.lex.LexActions.property.CreateBotChannel"></a>

```typescript
public readonly CreateBotChannel: string;
```

- *Type:* string

[Write] lex:CreateBotChannel.

---

##### `CreateBotLocale`<sup>Required</sup> <a name="CreateBotLocale" id="@cdk_utils/iam.lex.LexActions.property.CreateBotLocale"></a>

```typescript
public readonly CreateBotLocale: string;
```

- *Type:* string

[Write] lex:CreateBotLocale.

---

##### `CreateBotReplica`<sup>Required</sup> <a name="CreateBotReplica" id="@cdk_utils/iam.lex.LexActions.property.CreateBotReplica"></a>

```typescript
public readonly CreateBotReplica: string;
```

- *Type:* string

[Write] lex:CreateBotReplica.

---

##### `CreateBotVersion`<sup>Required</sup> <a name="CreateBotVersion" id="@cdk_utils/iam.lex.LexActions.property.CreateBotVersion"></a>

```typescript
public readonly CreateBotVersion: string;
```

- *Type:* string

[Write] lex:CreateBotVersion.

---

##### `CreateCustomVocabulary`<sup>Required</sup> <a name="CreateCustomVocabulary" id="@cdk_utils/iam.lex.LexActions.property.CreateCustomVocabulary"></a>

```typescript
public readonly CreateCustomVocabulary: string;
```

- *Type:* string

[Write] lex:CreateCustomVocabulary.

---

##### `CreateExport`<sup>Required</sup> <a name="CreateExport" id="@cdk_utils/iam.lex.LexActions.property.CreateExport"></a>

```typescript
public readonly CreateExport: string;
```

- *Type:* string

[Write] lex:CreateExport.

---

##### `CreateIntent`<sup>Required</sup> <a name="CreateIntent" id="@cdk_utils/iam.lex.LexActions.property.CreateIntent"></a>

```typescript
public readonly CreateIntent: string;
```

- *Type:* string

[Write] lex:CreateIntent.

---

##### `CreateIntentVersion`<sup>Required</sup> <a name="CreateIntentVersion" id="@cdk_utils/iam.lex.LexActions.property.CreateIntentVersion"></a>

```typescript
public readonly CreateIntentVersion: string;
```

- *Type:* string

[Write] lex:CreateIntentVersion.

---

##### `CreateResourcePolicy`<sup>Required</sup> <a name="CreateResourcePolicy" id="@cdk_utils/iam.lex.LexActions.property.CreateResourcePolicy"></a>

```typescript
public readonly CreateResourcePolicy: string;
```

- *Type:* string

[Write] lex:CreateResourcePolicy.

---

##### `CreateResourcePolicyStatement`<sup>Required</sup> <a name="CreateResourcePolicyStatement" id="@cdk_utils/iam.lex.LexActions.property.CreateResourcePolicyStatement"></a>

```typescript
public readonly CreateResourcePolicyStatement: string;
```

- *Type:* string

[Write] lex:CreateResourcePolicyStatement.

---

##### `CreateSlot`<sup>Required</sup> <a name="CreateSlot" id="@cdk_utils/iam.lex.LexActions.property.CreateSlot"></a>

```typescript
public readonly CreateSlot: string;
```

- *Type:* string

[Write] lex:CreateSlot.

---

##### `CreateSlotType`<sup>Required</sup> <a name="CreateSlotType" id="@cdk_utils/iam.lex.LexActions.property.CreateSlotType"></a>

```typescript
public readonly CreateSlotType: string;
```

- *Type:* string

[Write] lex:CreateSlotType.

---

##### `CreateSlotTypeVersion`<sup>Required</sup> <a name="CreateSlotTypeVersion" id="@cdk_utils/iam.lex.LexActions.property.CreateSlotTypeVersion"></a>

```typescript
public readonly CreateSlotTypeVersion: string;
```

- *Type:* string

[Write] lex:CreateSlotTypeVersion.

---

##### `CreateTestSet`<sup>Required</sup> <a name="CreateTestSet" id="@cdk_utils/iam.lex.LexActions.property.CreateTestSet"></a>

```typescript
public readonly CreateTestSet: string;
```

- *Type:* string

[Write] lex:CreateTestSet.

---

##### `CreateTestSetDiscrepancyReport`<sup>Required</sup> <a name="CreateTestSetDiscrepancyReport" id="@cdk_utils/iam.lex.LexActions.property.CreateTestSetDiscrepancyReport"></a>

```typescript
public readonly CreateTestSetDiscrepancyReport: string;
```

- *Type:* string

[Write] lex:CreateTestSetDiscrepancyReport.

---

##### `CreateUploadUrl`<sup>Required</sup> <a name="CreateUploadUrl" id="@cdk_utils/iam.lex.LexActions.property.CreateUploadUrl"></a>

```typescript
public readonly CreateUploadUrl: string;
```

- *Type:* string

[Write] lex:CreateUploadUrl.

---

##### `DeleteBot`<sup>Required</sup> <a name="DeleteBot" id="@cdk_utils/iam.lex.LexActions.property.DeleteBot"></a>

```typescript
public readonly DeleteBot: string;
```

- *Type:* string

[Write] lex:DeleteBot.

---

##### `DeleteBotAlias`<sup>Required</sup> <a name="DeleteBotAlias" id="@cdk_utils/iam.lex.LexActions.property.DeleteBotAlias"></a>

```typescript
public readonly DeleteBotAlias: string;
```

- *Type:* string

[Write] lex:DeleteBotAlias.

---

##### `DeleteBotAnalyzerRecommendation`<sup>Required</sup> <a name="DeleteBotAnalyzerRecommendation" id="@cdk_utils/iam.lex.LexActions.property.DeleteBotAnalyzerRecommendation"></a>

```typescript
public readonly DeleteBotAnalyzerRecommendation: string;
```

- *Type:* string

[Write] lex:DeleteBotAnalyzerRecommendation.

---

##### `DeleteBotChannel`<sup>Required</sup> <a name="DeleteBotChannel" id="@cdk_utils/iam.lex.LexActions.property.DeleteBotChannel"></a>

```typescript
public readonly DeleteBotChannel: string;
```

- *Type:* string

[Write] lex:DeleteBotChannel.

---

##### `DeleteBotChannelAssociation`<sup>Required</sup> <a name="DeleteBotChannelAssociation" id="@cdk_utils/iam.lex.LexActions.property.DeleteBotChannelAssociation"></a>

```typescript
public readonly DeleteBotChannelAssociation: string;
```

- *Type:* string

[Write] lex:DeleteBotChannelAssociation.

---

##### `DeleteBotLocale`<sup>Required</sup> <a name="DeleteBotLocale" id="@cdk_utils/iam.lex.LexActions.property.DeleteBotLocale"></a>

```typescript
public readonly DeleteBotLocale: string;
```

- *Type:* string

[Write] lex:DeleteBotLocale.

---

##### `DeleteBotReplica`<sup>Required</sup> <a name="DeleteBotReplica" id="@cdk_utils/iam.lex.LexActions.property.DeleteBotReplica"></a>

```typescript
public readonly DeleteBotReplica: string;
```

- *Type:* string

[Write] lex:DeleteBotReplica.

---

##### `DeleteBotVersion`<sup>Required</sup> <a name="DeleteBotVersion" id="@cdk_utils/iam.lex.LexActions.property.DeleteBotVersion"></a>

```typescript
public readonly DeleteBotVersion: string;
```

- *Type:* string

[Write] lex:DeleteBotVersion.

---

##### `DeleteCustomVocabulary`<sup>Required</sup> <a name="DeleteCustomVocabulary" id="@cdk_utils/iam.lex.LexActions.property.DeleteCustomVocabulary"></a>

```typescript
public readonly DeleteCustomVocabulary: string;
```

- *Type:* string

[Write] lex:DeleteCustomVocabulary.

---

##### `DeleteExport`<sup>Required</sup> <a name="DeleteExport" id="@cdk_utils/iam.lex.LexActions.property.DeleteExport"></a>

```typescript
public readonly DeleteExport: string;
```

- *Type:* string

[Write] lex:DeleteExport.

---

##### `DeleteImport`<sup>Required</sup> <a name="DeleteImport" id="@cdk_utils/iam.lex.LexActions.property.DeleteImport"></a>

```typescript
public readonly DeleteImport: string;
```

- *Type:* string

[Write] lex:DeleteImport.

---

##### `DeleteIntent`<sup>Required</sup> <a name="DeleteIntent" id="@cdk_utils/iam.lex.LexActions.property.DeleteIntent"></a>

```typescript
public readonly DeleteIntent: string;
```

- *Type:* string

[Write] lex:DeleteIntent.

---

##### `DeleteIntentVersion`<sup>Required</sup> <a name="DeleteIntentVersion" id="@cdk_utils/iam.lex.LexActions.property.DeleteIntentVersion"></a>

```typescript
public readonly DeleteIntentVersion: string;
```

- *Type:* string

[Write] lex:DeleteIntentVersion.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.lex.LexActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] lex:DeleteResourcePolicy.

---

##### `DeleteResourcePolicyStatement`<sup>Required</sup> <a name="DeleteResourcePolicyStatement" id="@cdk_utils/iam.lex.LexActions.property.DeleteResourcePolicyStatement"></a>

```typescript
public readonly DeleteResourcePolicyStatement: string;
```

- *Type:* string

[Write] lex:DeleteResourcePolicyStatement.

---

##### `DeleteSession`<sup>Required</sup> <a name="DeleteSession" id="@cdk_utils/iam.lex.LexActions.property.DeleteSession"></a>

```typescript
public readonly DeleteSession: string;
```

- *Type:* string

[Write] lex:DeleteSession.

---

##### `DeleteSlot`<sup>Required</sup> <a name="DeleteSlot" id="@cdk_utils/iam.lex.LexActions.property.DeleteSlot"></a>

```typescript
public readonly DeleteSlot: string;
```

- *Type:* string

[Write] lex:DeleteSlot.

---

##### `DeleteSlotType`<sup>Required</sup> <a name="DeleteSlotType" id="@cdk_utils/iam.lex.LexActions.property.DeleteSlotType"></a>

```typescript
public readonly DeleteSlotType: string;
```

- *Type:* string

[Write] lex:DeleteSlotType.

---

##### `DeleteSlotTypeVersion`<sup>Required</sup> <a name="DeleteSlotTypeVersion" id="@cdk_utils/iam.lex.LexActions.property.DeleteSlotTypeVersion"></a>

```typescript
public readonly DeleteSlotTypeVersion: string;
```

- *Type:* string

[Write] lex:DeleteSlotTypeVersion.

---

##### `DeleteTestSet`<sup>Required</sup> <a name="DeleteTestSet" id="@cdk_utils/iam.lex.LexActions.property.DeleteTestSet"></a>

```typescript
public readonly DeleteTestSet: string;
```

- *Type:* string

[Write] lex:DeleteTestSet.

---

##### `DeleteUtterances`<sup>Required</sup> <a name="DeleteUtterances" id="@cdk_utils/iam.lex.LexActions.property.DeleteUtterances"></a>

```typescript
public readonly DeleteUtterances: string;
```

- *Type:* string

[Write] lex:DeleteUtterances.

---

##### `DescribeBot`<sup>Required</sup> <a name="DescribeBot" id="@cdk_utils/iam.lex.LexActions.property.DescribeBot"></a>

```typescript
public readonly DescribeBot: string;
```

- *Type:* string

[Read] lex:DescribeBot.

---

##### `DescribeBotAlias`<sup>Required</sup> <a name="DescribeBotAlias" id="@cdk_utils/iam.lex.LexActions.property.DescribeBotAlias"></a>

```typescript
public readonly DescribeBotAlias: string;
```

- *Type:* string

[Read] lex:DescribeBotAlias.

---

##### `DescribeBotAnalyzerRecommendation`<sup>Required</sup> <a name="DescribeBotAnalyzerRecommendation" id="@cdk_utils/iam.lex.LexActions.property.DescribeBotAnalyzerRecommendation"></a>

```typescript
public readonly DescribeBotAnalyzerRecommendation: string;
```

- *Type:* string

[Read] lex:DescribeBotAnalyzerRecommendation.

---

##### `DescribeBotChannel`<sup>Required</sup> <a name="DescribeBotChannel" id="@cdk_utils/iam.lex.LexActions.property.DescribeBotChannel"></a>

```typescript
public readonly DescribeBotChannel: string;
```

- *Type:* string

[Read] lex:DescribeBotChannel.

---

##### `DescribeBotLocale`<sup>Required</sup> <a name="DescribeBotLocale" id="@cdk_utils/iam.lex.LexActions.property.DescribeBotLocale"></a>

```typescript
public readonly DescribeBotLocale: string;
```

- *Type:* string

[Read] lex:DescribeBotLocale.

---

##### `DescribeBotRecommendation`<sup>Required</sup> <a name="DescribeBotRecommendation" id="@cdk_utils/iam.lex.LexActions.property.DescribeBotRecommendation"></a>

```typescript
public readonly DescribeBotRecommendation: string;
```

- *Type:* string

[Read] lex:DescribeBotRecommendation.

---

##### `DescribeBotReplica`<sup>Required</sup> <a name="DescribeBotReplica" id="@cdk_utils/iam.lex.LexActions.property.DescribeBotReplica"></a>

```typescript
public readonly DescribeBotReplica: string;
```

- *Type:* string

[Read] lex:DescribeBotReplica.

---

##### `DescribeBotResourceGeneration`<sup>Required</sup> <a name="DescribeBotResourceGeneration" id="@cdk_utils/iam.lex.LexActions.property.DescribeBotResourceGeneration"></a>

```typescript
public readonly DescribeBotResourceGeneration: string;
```

- *Type:* string

[Read] lex:DescribeBotResourceGeneration.

---

##### `DescribeBotVersion`<sup>Required</sup> <a name="DescribeBotVersion" id="@cdk_utils/iam.lex.LexActions.property.DescribeBotVersion"></a>

```typescript
public readonly DescribeBotVersion: string;
```

- *Type:* string

[Read] lex:DescribeBotVersion.

---

##### `DescribeCustomVocabulary`<sup>Required</sup> <a name="DescribeCustomVocabulary" id="@cdk_utils/iam.lex.LexActions.property.DescribeCustomVocabulary"></a>

```typescript
public readonly DescribeCustomVocabulary: string;
```

- *Type:* string

[Read] lex:DescribeCustomVocabulary.

---

##### `DescribeCustomVocabularyMetadata`<sup>Required</sup> <a name="DescribeCustomVocabularyMetadata" id="@cdk_utils/iam.lex.LexActions.property.DescribeCustomVocabularyMetadata"></a>

```typescript
public readonly DescribeCustomVocabularyMetadata: string;
```

- *Type:* string

[Read] lex:DescribeCustomVocabularyMetadata.

---

##### `DescribeExport`<sup>Required</sup> <a name="DescribeExport" id="@cdk_utils/iam.lex.LexActions.property.DescribeExport"></a>

```typescript
public readonly DescribeExport: string;
```

- *Type:* string

[Read] lex:DescribeExport.

---

##### `DescribeImport`<sup>Required</sup> <a name="DescribeImport" id="@cdk_utils/iam.lex.LexActions.property.DescribeImport"></a>

```typescript
public readonly DescribeImport: string;
```

- *Type:* string

[Read] lex:DescribeImport.

---

##### `DescribeIntent`<sup>Required</sup> <a name="DescribeIntent" id="@cdk_utils/iam.lex.LexActions.property.DescribeIntent"></a>

```typescript
public readonly DescribeIntent: string;
```

- *Type:* string

[Read] lex:DescribeIntent.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.lex.LexActions.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string;
```

- *Type:* string

[Read] lex:DescribeResourcePolicy.

---

##### `DescribeSlot`<sup>Required</sup> <a name="DescribeSlot" id="@cdk_utils/iam.lex.LexActions.property.DescribeSlot"></a>

```typescript
public readonly DescribeSlot: string;
```

- *Type:* string

[Read] lex:DescribeSlot.

---

##### `DescribeSlotType`<sup>Required</sup> <a name="DescribeSlotType" id="@cdk_utils/iam.lex.LexActions.property.DescribeSlotType"></a>

```typescript
public readonly DescribeSlotType: string;
```

- *Type:* string

[Read] lex:DescribeSlotType.

---

##### `DescribeTestExecution`<sup>Required</sup> <a name="DescribeTestExecution" id="@cdk_utils/iam.lex.LexActions.property.DescribeTestExecution"></a>

```typescript
public readonly DescribeTestExecution: string;
```

- *Type:* string

[Read] lex:DescribeTestExecution.

---

##### `DescribeTestSet`<sup>Required</sup> <a name="DescribeTestSet" id="@cdk_utils/iam.lex.LexActions.property.DescribeTestSet"></a>

```typescript
public readonly DescribeTestSet: string;
```

- *Type:* string

[Read] lex:DescribeTestSet.

---

##### `DescribeTestSetDiscrepancyReport`<sup>Required</sup> <a name="DescribeTestSetDiscrepancyReport" id="@cdk_utils/iam.lex.LexActions.property.DescribeTestSetDiscrepancyReport"></a>

```typescript
public readonly DescribeTestSetDiscrepancyReport: string;
```

- *Type:* string

[Read] lex:DescribeTestSetDiscrepancyReport.

---

##### `DescribeTestSetGeneration`<sup>Required</sup> <a name="DescribeTestSetGeneration" id="@cdk_utils/iam.lex.LexActions.property.DescribeTestSetGeneration"></a>

```typescript
public readonly DescribeTestSetGeneration: string;
```

- *Type:* string

[Read] lex:DescribeTestSetGeneration.

---

##### `GenerateBotElement`<sup>Required</sup> <a name="GenerateBotElement" id="@cdk_utils/iam.lex.LexActions.property.GenerateBotElement"></a>

```typescript
public readonly GenerateBotElement: string;
```

- *Type:* string

[Read] lex:GenerateBotElement.

---

##### `ListAggregatedUtterances`<sup>Required</sup> <a name="ListAggregatedUtterances" id="@cdk_utils/iam.lex.LexActions.property.ListAggregatedUtterances"></a>

```typescript
public readonly ListAggregatedUtterances: string;
```

- *Type:* string

[List] lex:ListAggregatedUtterances.

---

##### `ListBotAliases`<sup>Required</sup> <a name="ListBotAliases" id="@cdk_utils/iam.lex.LexActions.property.ListBotAliases"></a>

```typescript
public readonly ListBotAliases: string;
```

- *Type:* string

[List] lex:ListBotAliases.

---

##### `ListBotAliasReplicas`<sup>Required</sup> <a name="ListBotAliasReplicas" id="@cdk_utils/iam.lex.LexActions.property.ListBotAliasReplicas"></a>

```typescript
public readonly ListBotAliasReplicas: string;
```

- *Type:* string

[List] lex:ListBotAliasReplicas.

---

##### `ListBotAnalyzerRecommendations`<sup>Required</sup> <a name="ListBotAnalyzerRecommendations" id="@cdk_utils/iam.lex.LexActions.property.ListBotAnalyzerRecommendations"></a>

```typescript
public readonly ListBotAnalyzerRecommendations: string;
```

- *Type:* string

[List] lex:ListBotAnalyzerRecommendations.

---

##### `ListBotChannels`<sup>Required</sup> <a name="ListBotChannels" id="@cdk_utils/iam.lex.LexActions.property.ListBotChannels"></a>

```typescript
public readonly ListBotChannels: string;
```

- *Type:* string

[List] lex:ListBotChannels.

---

##### `ListBotLocales`<sup>Required</sup> <a name="ListBotLocales" id="@cdk_utils/iam.lex.LexActions.property.ListBotLocales"></a>

```typescript
public readonly ListBotLocales: string;
```

- *Type:* string

[List] lex:ListBotLocales.

---

##### `ListBotRecommendations`<sup>Required</sup> <a name="ListBotRecommendations" id="@cdk_utils/iam.lex.LexActions.property.ListBotRecommendations"></a>

```typescript
public readonly ListBotRecommendations: string;
```

- *Type:* string

[List] lex:ListBotRecommendations.

---

##### `ListBotReplicas`<sup>Required</sup> <a name="ListBotReplicas" id="@cdk_utils/iam.lex.LexActions.property.ListBotReplicas"></a>

```typescript
public readonly ListBotReplicas: string;
```

- *Type:* string

[List] lex:ListBotReplicas.

---

##### `ListBotResourceGenerations`<sup>Required</sup> <a name="ListBotResourceGenerations" id="@cdk_utils/iam.lex.LexActions.property.ListBotResourceGenerations"></a>

```typescript
public readonly ListBotResourceGenerations: string;
```

- *Type:* string

[List] lex:ListBotResourceGenerations.

---

##### `ListBots`<sup>Required</sup> <a name="ListBots" id="@cdk_utils/iam.lex.LexActions.property.ListBots"></a>

```typescript
public readonly ListBots: string;
```

- *Type:* string

[List] lex:ListBots.

---

##### `ListBotVersionReplicas`<sup>Required</sup> <a name="ListBotVersionReplicas" id="@cdk_utils/iam.lex.LexActions.property.ListBotVersionReplicas"></a>

```typescript
public readonly ListBotVersionReplicas: string;
```

- *Type:* string

[List] lex:ListBotVersionReplicas.

---

##### `ListBotVersions`<sup>Required</sup> <a name="ListBotVersions" id="@cdk_utils/iam.lex.LexActions.property.ListBotVersions"></a>

```typescript
public readonly ListBotVersions: string;
```

- *Type:* string

[List] lex:ListBotVersions.

---

##### `ListBuiltInIntents`<sup>Required</sup> <a name="ListBuiltInIntents" id="@cdk_utils/iam.lex.LexActions.property.ListBuiltInIntents"></a>

```typescript
public readonly ListBuiltInIntents: string;
```

- *Type:* string

[List] lex:ListBuiltInIntents.

---

##### `ListBuiltInSlotTypes`<sup>Required</sup> <a name="ListBuiltInSlotTypes" id="@cdk_utils/iam.lex.LexActions.property.ListBuiltInSlotTypes"></a>

```typescript
public readonly ListBuiltInSlotTypes: string;
```

- *Type:* string

[List] lex:ListBuiltInSlotTypes.

---

##### `ListCustomVocabularyItems`<sup>Required</sup> <a name="ListCustomVocabularyItems" id="@cdk_utils/iam.lex.LexActions.property.ListCustomVocabularyItems"></a>

```typescript
public readonly ListCustomVocabularyItems: string;
```

- *Type:* string

[List] lex:ListCustomVocabularyItems.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.lex.LexActions.property.ListExports"></a>

```typescript
public readonly ListExports: string;
```

- *Type:* string

[List] lex:ListExports.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.lex.LexActions.property.ListImports"></a>

```typescript
public readonly ListImports: string;
```

- *Type:* string

[List] lex:ListImports.

---

##### `ListIntentMetrics`<sup>Required</sup> <a name="ListIntentMetrics" id="@cdk_utils/iam.lex.LexActions.property.ListIntentMetrics"></a>

```typescript
public readonly ListIntentMetrics: string;
```

- *Type:* string

[List] lex:ListIntentMetrics.

---

##### `ListIntentPaths`<sup>Required</sup> <a name="ListIntentPaths" id="@cdk_utils/iam.lex.LexActions.property.ListIntentPaths"></a>

```typescript
public readonly ListIntentPaths: string;
```

- *Type:* string

[List] lex:ListIntentPaths.

---

##### `ListIntents`<sup>Required</sup> <a name="ListIntents" id="@cdk_utils/iam.lex.LexActions.property.ListIntents"></a>

```typescript
public readonly ListIntents: string;
```

- *Type:* string

[List] lex:ListIntents.

---

##### `ListIntentStageMetrics`<sup>Required</sup> <a name="ListIntentStageMetrics" id="@cdk_utils/iam.lex.LexActions.property.ListIntentStageMetrics"></a>

```typescript
public readonly ListIntentStageMetrics: string;
```

- *Type:* string

[List] lex:ListIntentStageMetrics.

---

##### `ListRecommendedIntents`<sup>Required</sup> <a name="ListRecommendedIntents" id="@cdk_utils/iam.lex.LexActions.property.ListRecommendedIntents"></a>

```typescript
public readonly ListRecommendedIntents: string;
```

- *Type:* string

[List] lex:ListRecommendedIntents.

---

##### `ListSessionAnalyticsData`<sup>Required</sup> <a name="ListSessionAnalyticsData" id="@cdk_utils/iam.lex.LexActions.property.ListSessionAnalyticsData"></a>

```typescript
public readonly ListSessionAnalyticsData: string;
```

- *Type:* string

[List] lex:ListSessionAnalyticsData.

---

##### `ListSessionMetrics`<sup>Required</sup> <a name="ListSessionMetrics" id="@cdk_utils/iam.lex.LexActions.property.ListSessionMetrics"></a>

```typescript
public readonly ListSessionMetrics: string;
```

- *Type:* string

[List] lex:ListSessionMetrics.

---

##### `ListSlots`<sup>Required</sup> <a name="ListSlots" id="@cdk_utils/iam.lex.LexActions.property.ListSlots"></a>

```typescript
public readonly ListSlots: string;
```

- *Type:* string

[List] lex:ListSlots.

---

##### `ListSlotTypes`<sup>Required</sup> <a name="ListSlotTypes" id="@cdk_utils/iam.lex.LexActions.property.ListSlotTypes"></a>

```typescript
public readonly ListSlotTypes: string;
```

- *Type:* string

[List] lex:ListSlotTypes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.lex.LexActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] lex:ListTagsForResource.

---

##### `ListTestExecutionResultItems`<sup>Required</sup> <a name="ListTestExecutionResultItems" id="@cdk_utils/iam.lex.LexActions.property.ListTestExecutionResultItems"></a>

```typescript
public readonly ListTestExecutionResultItems: string;
```

- *Type:* string

[Read] lex:ListTestExecutionResultItems.

---

##### `ListTestExecutions`<sup>Required</sup> <a name="ListTestExecutions" id="@cdk_utils/iam.lex.LexActions.property.ListTestExecutions"></a>

```typescript
public readonly ListTestExecutions: string;
```

- *Type:* string

[List] lex:ListTestExecutions.

---

##### `ListTestSetRecords`<sup>Required</sup> <a name="ListTestSetRecords" id="@cdk_utils/iam.lex.LexActions.property.ListTestSetRecords"></a>

```typescript
public readonly ListTestSetRecords: string;
```

- *Type:* string

[Read] lex:ListTestSetRecords.

---

##### `ListTestSets`<sup>Required</sup> <a name="ListTestSets" id="@cdk_utils/iam.lex.LexActions.property.ListTestSets"></a>

```typescript
public readonly ListTestSets: string;
```

- *Type:* string

[List] lex:ListTestSets.

---

##### `PostContent`<sup>Required</sup> <a name="PostContent" id="@cdk_utils/iam.lex.LexActions.property.PostContent"></a>

```typescript
public readonly PostContent: string;
```

- *Type:* string

[Write] lex:PostContent.

---

##### `PostText`<sup>Required</sup> <a name="PostText" id="@cdk_utils/iam.lex.LexActions.property.PostText"></a>

```typescript
public readonly PostText: string;
```

- *Type:* string

[Write] lex:PostText.

---

##### `PutBot`<sup>Required</sup> <a name="PutBot" id="@cdk_utils/iam.lex.LexActions.property.PutBot"></a>

```typescript
public readonly PutBot: string;
```

- *Type:* string

[Write] lex:PutBot.

---

##### `PutBotAlias`<sup>Required</sup> <a name="PutBotAlias" id="@cdk_utils/iam.lex.LexActions.property.PutBotAlias"></a>

```typescript
public readonly PutBotAlias: string;
```

- *Type:* string

[Write] lex:PutBotAlias.

---

##### `PutIntent`<sup>Required</sup> <a name="PutIntent" id="@cdk_utils/iam.lex.LexActions.property.PutIntent"></a>

```typescript
public readonly PutIntent: string;
```

- *Type:* string

[Write] lex:PutIntent.

---

##### `PutSession`<sup>Required</sup> <a name="PutSession" id="@cdk_utils/iam.lex.LexActions.property.PutSession"></a>

```typescript
public readonly PutSession: string;
```

- *Type:* string

[Write] lex:PutSession.

---

##### `PutSlotType`<sup>Required</sup> <a name="PutSlotType" id="@cdk_utils/iam.lex.LexActions.property.PutSlotType"></a>

```typescript
public readonly PutSlotType: string;
```

- *Type:* string

[Write] lex:PutSlotType.

---

##### `RecognizeText`<sup>Required</sup> <a name="RecognizeText" id="@cdk_utils/iam.lex.LexActions.property.RecognizeText"></a>

```typescript
public readonly RecognizeText: string;
```

- *Type:* string

[Write] lex:RecognizeText.

---

##### `RecognizeUtterance`<sup>Required</sup> <a name="RecognizeUtterance" id="@cdk_utils/iam.lex.LexActions.property.RecognizeUtterance"></a>

```typescript
public readonly RecognizeUtterance: string;
```

- *Type:* string

[Write] lex:RecognizeUtterance.

---

##### `SearchAssociatedTranscripts`<sup>Required</sup> <a name="SearchAssociatedTranscripts" id="@cdk_utils/iam.lex.LexActions.property.SearchAssociatedTranscripts"></a>

```typescript
public readonly SearchAssociatedTranscripts: string;
```

- *Type:* string

[List] lex:SearchAssociatedTranscripts.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.lex.LexActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBotAnalyzer`<sup>Required</sup> <a name="StartBotAnalyzer" id="@cdk_utils/iam.lex.LexActions.property.StartBotAnalyzer"></a>

```typescript
public readonly StartBotAnalyzer: string;
```

- *Type:* string

[Write] lex:StartBotAnalyzer.

---

##### `StartBotRecommendation`<sup>Required</sup> <a name="StartBotRecommendation" id="@cdk_utils/iam.lex.LexActions.property.StartBotRecommendation"></a>

```typescript
public readonly StartBotRecommendation: string;
```

- *Type:* string

[Write] lex:StartBotRecommendation.

---

##### `StartBotResourceGeneration`<sup>Required</sup> <a name="StartBotResourceGeneration" id="@cdk_utils/iam.lex.LexActions.property.StartBotResourceGeneration"></a>

```typescript
public readonly StartBotResourceGeneration: string;
```

- *Type:* string

[Write] lex:StartBotResourceGeneration.

---

##### `StartConversation`<sup>Required</sup> <a name="StartConversation" id="@cdk_utils/iam.lex.LexActions.property.StartConversation"></a>

```typescript
public readonly StartConversation: string;
```

- *Type:* string

[Write] lex:StartConversation.

---

##### `StartImport`<sup>Required</sup> <a name="StartImport" id="@cdk_utils/iam.lex.LexActions.property.StartImport"></a>

```typescript
public readonly StartImport: string;
```

- *Type:* string

[Write] lex:StartImport.

---

##### `StartMigration`<sup>Required</sup> <a name="StartMigration" id="@cdk_utils/iam.lex.LexActions.property.StartMigration"></a>

```typescript
public readonly StartMigration: string;
```

- *Type:* string

[Write] lex:StartMigration.

---

##### `StartTestExecution`<sup>Required</sup> <a name="StartTestExecution" id="@cdk_utils/iam.lex.LexActions.property.StartTestExecution"></a>

```typescript
public readonly StartTestExecution: string;
```

- *Type:* string

[Write] lex:StartTestExecution.

---

##### `StartTestSetGeneration`<sup>Required</sup> <a name="StartTestSetGeneration" id="@cdk_utils/iam.lex.LexActions.property.StartTestSetGeneration"></a>

```typescript
public readonly StartTestSetGeneration: string;
```

- *Type:* string

[Write] lex:StartTestSetGeneration.

---

##### `StopBotAnalyzer`<sup>Required</sup> <a name="StopBotAnalyzer" id="@cdk_utils/iam.lex.LexActions.property.StopBotAnalyzer"></a>

```typescript
public readonly StopBotAnalyzer: string;
```

- *Type:* string

[Write] lex:StopBotAnalyzer.

---

##### `StopBotRecommendation`<sup>Required</sup> <a name="StopBotRecommendation" id="@cdk_utils/iam.lex.LexActions.property.StopBotRecommendation"></a>

```typescript
public readonly StopBotRecommendation: string;
```

- *Type:* string

[Write] lex:StopBotRecommendation.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lex.LexActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] lex:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lex.LexActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] lex:UntagResource.

---

##### `UpdateBot`<sup>Required</sup> <a name="UpdateBot" id="@cdk_utils/iam.lex.LexActions.property.UpdateBot"></a>

```typescript
public readonly UpdateBot: string;
```

- *Type:* string

[Write] lex:UpdateBot.

---

##### `UpdateBotAlias`<sup>Required</sup> <a name="UpdateBotAlias" id="@cdk_utils/iam.lex.LexActions.property.UpdateBotAlias"></a>

```typescript
public readonly UpdateBotAlias: string;
```

- *Type:* string

[Write] lex:UpdateBotAlias.

---

##### `UpdateBotLocale`<sup>Required</sup> <a name="UpdateBotLocale" id="@cdk_utils/iam.lex.LexActions.property.UpdateBotLocale"></a>

```typescript
public readonly UpdateBotLocale: string;
```

- *Type:* string

[Write] lex:UpdateBotLocale.

---

##### `UpdateBotRecommendation`<sup>Required</sup> <a name="UpdateBotRecommendation" id="@cdk_utils/iam.lex.LexActions.property.UpdateBotRecommendation"></a>

```typescript
public readonly UpdateBotRecommendation: string;
```

- *Type:* string

[Write] lex:UpdateBotRecommendation.

---

##### `UpdateCustomVocabulary`<sup>Required</sup> <a name="UpdateCustomVocabulary" id="@cdk_utils/iam.lex.LexActions.property.UpdateCustomVocabulary"></a>

```typescript
public readonly UpdateCustomVocabulary: string;
```

- *Type:* string

[Write] lex:UpdateCustomVocabulary.

---

##### `UpdateExport`<sup>Required</sup> <a name="UpdateExport" id="@cdk_utils/iam.lex.LexActions.property.UpdateExport"></a>

```typescript
public readonly UpdateExport: string;
```

- *Type:* string

[Write] lex:UpdateExport.

---

##### `UpdateIntent`<sup>Required</sup> <a name="UpdateIntent" id="@cdk_utils/iam.lex.LexActions.property.UpdateIntent"></a>

```typescript
public readonly UpdateIntent: string;
```

- *Type:* string

[Write] lex:UpdateIntent.

---

##### `UpdateResourcePolicy`<sup>Required</sup> <a name="UpdateResourcePolicy" id="@cdk_utils/iam.lex.LexActions.property.UpdateResourcePolicy"></a>

```typescript
public readonly UpdateResourcePolicy: string;
```

- *Type:* string

[Write] lex:UpdateResourcePolicy.

---

##### `UpdateSlot`<sup>Required</sup> <a name="UpdateSlot" id="@cdk_utils/iam.lex.LexActions.property.UpdateSlot"></a>

```typescript
public readonly UpdateSlot: string;
```

- *Type:* string

[Write] lex:UpdateSlot.

---

##### `UpdateSlotType`<sup>Required</sup> <a name="UpdateSlotType" id="@cdk_utils/iam.lex.LexActions.property.UpdateSlotType"></a>

```typescript
public readonly UpdateSlotType: string;
```

- *Type:* string

[Write] lex:UpdateSlotType.

---

##### `UpdateTestSet`<sup>Required</sup> <a name="UpdateTestSet" id="@cdk_utils/iam.lex.LexActions.property.UpdateTestSet"></a>

```typescript
public readonly UpdateTestSet: string;
```

- *Type:* string

[Write] lex:UpdateTestSet.

---

### LexConditions <a name="LexConditions" id="@cdk_utils/iam.lex.LexConditions"></a>

Condition key constants and builders for lex.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lex.LexConditions.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

new lex.LexConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.associatedIntents">associatedIntents</a></code> | Generates a condition block for `lex:associatedIntents`. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.associatedSlotTypes">associatedSlotTypes</a></code> | Generates a condition block for `lex:associatedSlotTypes`. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.channelType">channelType</a></code> | Generates a condition block for `lex:channelType`. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `associatedIntents` <a name="associatedIntents" id="@cdk_utils/iam.lex.LexConditions.associatedIntents"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexConditions.associatedIntents(values: string[])
```

Generates a condition block for `lex:associatedIntents`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lex.LexConditions.associatedIntents.parameter.values"></a>

- *Type:* string[]

---

##### `associatedSlotTypes` <a name="associatedSlotTypes" id="@cdk_utils/iam.lex.LexConditions.associatedSlotTypes"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexConditions.associatedSlotTypes(values: string[])
```

Generates a condition block for `lex:associatedSlotTypes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lex.LexConditions.associatedSlotTypes.parameter.values"></a>

- *Type:* string[]

---

##### `channelType` <a name="channelType" id="@cdk_utils/iam.lex.LexConditions.channelType"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexConditions.channelType(value: string)
```

Generates a condition block for `lex:channelType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lex.LexConditions.channelType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.lex.LexConditions.requestTag"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lex.LexConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.lex.LexConditions.resourceTag"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lex.LexConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.lex.LexConditions.tagKeys"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lex.LexConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.ASSOCIATED_INTENTS">ASSOCIATED_INTENTS</a></code> | <code>string</code> | Condition key: lex:associatedIntents (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.ASSOCIATED_SLOT_TYPES">ASSOCIATED_SLOT_TYPES</a></code> | <code>string</code> | Condition key: lex:associatedSlotTypes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.CHANNEL_TYPE">CHANNEL_TYPE</a></code> | <code>string</code> | Condition key: lex:channelType (String). |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.CreateBotAliasConditionKeys">CreateBotAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBotAlias action. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.CreateBotConditionKeys">CreateBotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBot action. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.PutBotAliasConditionKeys">PutBotAliasConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutBotAlias action. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.PutBotConditionKeys">PutBotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutBot action. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.StartImportConditionKeys">StartImportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartImport action. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.lex.LexConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `ASSOCIATED_INTENTS`<sup>Required</sup> <a name="ASSOCIATED_INTENTS" id="@cdk_utils/iam.lex.LexConditions.property.ASSOCIATED_INTENTS"></a>

```typescript
public readonly ASSOCIATED_INTENTS: string;
```

- *Type:* string

Condition key: lex:associatedIntents (ArrayOfString).

---

##### `ASSOCIATED_SLOT_TYPES`<sup>Required</sup> <a name="ASSOCIATED_SLOT_TYPES" id="@cdk_utils/iam.lex.LexConditions.property.ASSOCIATED_SLOT_TYPES"></a>

```typescript
public readonly ASSOCIATED_SLOT_TYPES: string;
```

- *Type:* string

Condition key: lex:associatedSlotTypes (ArrayOfString).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.lex.LexConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.lex.LexConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.lex.LexConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CHANNEL_TYPE`<sup>Required</sup> <a name="CHANNEL_TYPE" id="@cdk_utils/iam.lex.LexConditions.property.CHANNEL_TYPE"></a>

```typescript
public readonly CHANNEL_TYPE: string;
```

- *Type:* string

Condition key: lex:channelType (String).

---

##### `CreateBotAliasConditionKeys`<sup>Required</sup> <a name="CreateBotAliasConditionKeys" id="@cdk_utils/iam.lex.LexConditions.property.CreateBotAliasConditionKeys"></a>

```typescript
public readonly CreateBotAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBotAlias action.

---

##### `CreateBotConditionKeys`<sup>Required</sup> <a name="CreateBotConditionKeys" id="@cdk_utils/iam.lex.LexConditions.property.CreateBotConditionKeys"></a>

```typescript
public readonly CreateBotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBot action.

---

##### `PutBotAliasConditionKeys`<sup>Required</sup> <a name="PutBotAliasConditionKeys" id="@cdk_utils/iam.lex.LexConditions.property.PutBotAliasConditionKeys"></a>

```typescript
public readonly PutBotAliasConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutBotAlias action.

---

##### `PutBotConditionKeys`<sup>Required</sup> <a name="PutBotConditionKeys" id="@cdk_utils/iam.lex.LexConditions.property.PutBotConditionKeys"></a>

```typescript
public readonly PutBotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutBot action.

---

##### `StartImportConditionKeys`<sup>Required</sup> <a name="StartImportConditionKeys" id="@cdk_utils/iam.lex.LexConditions.property.StartImportConditionKeys"></a>

```typescript
public readonly StartImportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartImport action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.lex.LexConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.lex.LexConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### LexOperations <a name="LexOperations" id="@cdk_utils/iam.lex.LexOperations"></a>

API operation to required IAM actions mapping for lex.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lex.LexOperations.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

new lex.LexOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.BatchCreateCustomVocabularyItem">BatchCreateCustomVocabularyItem</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateCustomVocabularyItem API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.BatchDeleteCustomVocabularyItem">BatchDeleteCustomVocabularyItem</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteCustomVocabularyItem API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.BatchUpdateCustomVocabularyItem">BatchUpdateCustomVocabularyItem</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateCustomVocabularyItem API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.BuildBotLocale">BuildBotLocale</a></code> | <code>string[]</code> | IAM actions required for the BuildBotLocale API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateBot">CreateBot</a></code> | <code>string[]</code> | IAM actions required for the CreateBot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateBotAlias">CreateBotAlias</a></code> | <code>string[]</code> | IAM actions required for the CreateBotAlias API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateBotLocale">CreateBotLocale</a></code> | <code>string[]</code> | IAM actions required for the CreateBotLocale API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateBotReplica">CreateBotReplica</a></code> | <code>string[]</code> | IAM actions required for the CreateBotReplica API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateBotVersion">CreateBotVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateBotVersion API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateExport">CreateExport</a></code> | <code>string[]</code> | IAM actions required for the CreateExport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateIntent">CreateIntent</a></code> | <code>string[]</code> | IAM actions required for the CreateIntent API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateIntentVersion">CreateIntentVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateIntentVersion API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateResourcePolicy">CreateResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateResourcePolicyStatement">CreateResourcePolicyStatement</a></code> | <code>string[]</code> | IAM actions required for the CreateResourcePolicyStatement API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateSlot">CreateSlot</a></code> | <code>string[]</code> | IAM actions required for the CreateSlot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateSlotType">CreateSlotType</a></code> | <code>string[]</code> | IAM actions required for the CreateSlotType API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateSlotTypeVersion">CreateSlotTypeVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateSlotTypeVersion API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateTestSetDiscrepancyReport">CreateTestSetDiscrepancyReport</a></code> | <code>string[]</code> | IAM actions required for the CreateTestSetDiscrepancyReport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.CreateUploadUrl">CreateUploadUrl</a></code> | <code>string[]</code> | IAM actions required for the CreateUploadUrl API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteBot">DeleteBot</a></code> | <code>string[]</code> | IAM actions required for the DeleteBot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteBotAlias">DeleteBotAlias</a></code> | <code>string[]</code> | IAM actions required for the DeleteBotAlias API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteBotAnalyzerRecommendation">DeleteBotAnalyzerRecommendation</a></code> | <code>string[]</code> | IAM actions required for the DeleteBotAnalyzerRecommendation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteBotChannelAssociation">DeleteBotChannelAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteBotChannelAssociation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteBotLocale">DeleteBotLocale</a></code> | <code>string[]</code> | IAM actions required for the DeleteBotLocale API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteBotReplica">DeleteBotReplica</a></code> | <code>string[]</code> | IAM actions required for the DeleteBotReplica API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteBotVersion">DeleteBotVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteBotVersion API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteCustomVocabulary">DeleteCustomVocabulary</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomVocabulary API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteExport">DeleteExport</a></code> | <code>string[]</code> | IAM actions required for the DeleteExport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteImport">DeleteImport</a></code> | <code>string[]</code> | IAM actions required for the DeleteImport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteIntent">DeleteIntent</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntent API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteIntentVersion">DeleteIntentVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteIntentVersion API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteResourcePolicyStatement">DeleteResourcePolicyStatement</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicyStatement API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteSession">DeleteSession</a></code> | <code>string[]</code> | IAM actions required for the DeleteSession API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteSlot">DeleteSlot</a></code> | <code>string[]</code> | IAM actions required for the DeleteSlot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteSlotType">DeleteSlotType</a></code> | <code>string[]</code> | IAM actions required for the DeleteSlotType API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteSlotTypeVersion">DeleteSlotTypeVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteSlotTypeVersion API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteTestSet">DeleteTestSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteTestSet API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DeleteUtterances">DeleteUtterances</a></code> | <code>string[]</code> | IAM actions required for the DeleteUtterances API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeBot">DescribeBot</a></code> | <code>string[]</code> | IAM actions required for the DescribeBot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeBotAlias">DescribeBotAlias</a></code> | <code>string[]</code> | IAM actions required for the DescribeBotAlias API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeBotAnalyzerRecommendation">DescribeBotAnalyzerRecommendation</a></code> | <code>string[]</code> | IAM actions required for the DescribeBotAnalyzerRecommendation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeBotLocale">DescribeBotLocale</a></code> | <code>string[]</code> | IAM actions required for the DescribeBotLocale API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeBotRecommendation">DescribeBotRecommendation</a></code> | <code>string[]</code> | IAM actions required for the DescribeBotRecommendation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeBotReplica">DescribeBotReplica</a></code> | <code>string[]</code> | IAM actions required for the DescribeBotReplica API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeBotResourceGeneration">DescribeBotResourceGeneration</a></code> | <code>string[]</code> | IAM actions required for the DescribeBotResourceGeneration API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeBotVersion">DescribeBotVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribeBotVersion API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeCustomVocabularyMetadata">DescribeCustomVocabularyMetadata</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomVocabularyMetadata API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeExport">DescribeExport</a></code> | <code>string[]</code> | IAM actions required for the DescribeExport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeImport">DescribeImport</a></code> | <code>string[]</code> | IAM actions required for the DescribeImport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeIntent">DescribeIntent</a></code> | <code>string[]</code> | IAM actions required for the DescribeIntent API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeSlot">DescribeSlot</a></code> | <code>string[]</code> | IAM actions required for the DescribeSlot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeSlotType">DescribeSlotType</a></code> | <code>string[]</code> | IAM actions required for the DescribeSlotType API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeTestExecution">DescribeTestExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeTestExecution API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeTestSet">DescribeTestSet</a></code> | <code>string[]</code> | IAM actions required for the DescribeTestSet API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeTestSetDiscrepancyReport">DescribeTestSetDiscrepancyReport</a></code> | <code>string[]</code> | IAM actions required for the DescribeTestSetDiscrepancyReport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.DescribeTestSetGeneration">DescribeTestSetGeneration</a></code> | <code>string[]</code> | IAM actions required for the DescribeTestSetGeneration API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.GenerateBotElement">GenerateBotElement</a></code> | <code>string[]</code> | IAM actions required for the GenerateBotElement API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListAggregatedUtterances">ListAggregatedUtterances</a></code> | <code>string[]</code> | IAM actions required for the ListAggregatedUtterances API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotAliases">ListBotAliases</a></code> | <code>string[]</code> | IAM actions required for the ListBotAliases API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotAliasReplicas">ListBotAliasReplicas</a></code> | <code>string[]</code> | IAM actions required for the ListBotAliasReplicas API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotAnalyzerHistory">ListBotAnalyzerHistory</a></code> | <code>string[]</code> | IAM actions required for the ListBotAnalyzerHistory API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotLocales">ListBotLocales</a></code> | <code>string[]</code> | IAM actions required for the ListBotLocales API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotRecommendations">ListBotRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListBotRecommendations API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotReplicas">ListBotReplicas</a></code> | <code>string[]</code> | IAM actions required for the ListBotReplicas API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotResourceGenerations">ListBotResourceGenerations</a></code> | <code>string[]</code> | IAM actions required for the ListBotResourceGenerations API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBots">ListBots</a></code> | <code>string[]</code> | IAM actions required for the ListBots API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotVersionReplicas">ListBotVersionReplicas</a></code> | <code>string[]</code> | IAM actions required for the ListBotVersionReplicas API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBotVersions">ListBotVersions</a></code> | <code>string[]</code> | IAM actions required for the ListBotVersions API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBuiltInIntents">ListBuiltInIntents</a></code> | <code>string[]</code> | IAM actions required for the ListBuiltInIntents API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListBuiltInSlotTypes">ListBuiltInSlotTypes</a></code> | <code>string[]</code> | IAM actions required for the ListBuiltInSlotTypes API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListCustomVocabularyItems">ListCustomVocabularyItems</a></code> | <code>string[]</code> | IAM actions required for the ListCustomVocabularyItems API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListExports">ListExports</a></code> | <code>string[]</code> | IAM actions required for the ListExports API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListImports">ListImports</a></code> | <code>string[]</code> | IAM actions required for the ListImports API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListIntentMetrics">ListIntentMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListIntentMetrics API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListIntentPaths">ListIntentPaths</a></code> | <code>string[]</code> | IAM actions required for the ListIntentPaths API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListIntents">ListIntents</a></code> | <code>string[]</code> | IAM actions required for the ListIntents API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListIntentStageMetrics">ListIntentStageMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListIntentStageMetrics API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListRecommendedIntents">ListRecommendedIntents</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendedIntents API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListSessionAnalyticsData">ListSessionAnalyticsData</a></code> | <code>string[]</code> | IAM actions required for the ListSessionAnalyticsData API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListSessionMetrics">ListSessionMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListSessionMetrics API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListSlots">ListSlots</a></code> | <code>string[]</code> | IAM actions required for the ListSlots API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListSlotTypes">ListSlotTypes</a></code> | <code>string[]</code> | IAM actions required for the ListSlotTypes API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListTestExecutionResultItems">ListTestExecutionResultItems</a></code> | <code>string[]</code> | IAM actions required for the ListTestExecutionResultItems API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListTestExecutions">ListTestExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListTestExecutions API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListTestSetRecords">ListTestSetRecords</a></code> | <code>string[]</code> | IAM actions required for the ListTestSetRecords API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListTestSets">ListTestSets</a></code> | <code>string[]</code> | IAM actions required for the ListTestSets API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListUtteranceAnalyticsData">ListUtteranceAnalyticsData</a></code> | <code>string[]</code> | IAM actions required for the ListUtteranceAnalyticsData API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.ListUtteranceMetrics">ListUtteranceMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListUtteranceMetrics API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBot">opGetBot</a></code> | <code>string[]</code> | IAM actions required for the GetBot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBotAlias">opGetBotAlias</a></code> | <code>string[]</code> | IAM actions required for the GetBotAlias API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBotAliases">opGetBotAliases</a></code> | <code>string[]</code> | IAM actions required for the GetBotAliases API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBotChannelAssociation">opGetBotChannelAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetBotChannelAssociation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBotChannelAssociations">opGetBotChannelAssociations</a></code> | <code>string[]</code> | IAM actions required for the GetBotChannelAssociations API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBots">opGetBots</a></code> | <code>string[]</code> | IAM actions required for the GetBots API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBotVersions">opGetBotVersions</a></code> | <code>string[]</code> | IAM actions required for the GetBotVersions API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBuiltinIntent">opGetBuiltinIntent</a></code> | <code>string[]</code> | IAM actions required for the GetBuiltinIntent API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBuiltinIntents">opGetBuiltinIntents</a></code> | <code>string[]</code> | IAM actions required for the GetBuiltinIntents API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetBuiltinSlotTypes">opGetBuiltinSlotTypes</a></code> | <code>string[]</code> | IAM actions required for the GetBuiltinSlotTypes API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetExport">opGetExport</a></code> | <code>string[]</code> | IAM actions required for the GetExport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetImport">opGetImport</a></code> | <code>string[]</code> | IAM actions required for the GetImport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetIntent">opGetIntent</a></code> | <code>string[]</code> | IAM actions required for the GetIntent API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetIntents">opGetIntents</a></code> | <code>string[]</code> | IAM actions required for the GetIntents API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetIntentVersions">opGetIntentVersions</a></code> | <code>string[]</code> | IAM actions required for the GetIntentVersions API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetMigration">opGetMigration</a></code> | <code>string[]</code> | IAM actions required for the GetMigration API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetMigrations">opGetMigrations</a></code> | <code>string[]</code> | IAM actions required for the GetMigrations API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetSession">opGetSession</a></code> | <code>string[]</code> | IAM actions required for the GetSession API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetSlotType">opGetSlotType</a></code> | <code>string[]</code> | IAM actions required for the GetSlotType API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetSlotTypes">opGetSlotTypes</a></code> | <code>string[]</code> | IAM actions required for the GetSlotTypes API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetSlotTypeVersions">opGetSlotTypeVersions</a></code> | <code>string[]</code> | IAM actions required for the GetSlotTypeVersions API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetTestExecutionArtifactsUrl">opGetTestExecutionArtifactsUrl</a></code> | <code>string[]</code> | IAM actions required for the GetTestExecutionArtifactsUrl API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.opGetUtterancesView">opGetUtterancesView</a></code> | <code>string[]</code> | IAM actions required for the GetUtterancesView API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.PostContent">PostContent</a></code> | <code>string[]</code> | IAM actions required for the PostContent API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.PostText">PostText</a></code> | <code>string[]</code> | IAM actions required for the PostText API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.PutBot">PutBot</a></code> | <code>string[]</code> | IAM actions required for the PutBot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.PutBotAlias">PutBotAlias</a></code> | <code>string[]</code> | IAM actions required for the PutBotAlias API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.PutIntent">PutIntent</a></code> | <code>string[]</code> | IAM actions required for the PutIntent API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.PutSession">PutSession</a></code> | <code>string[]</code> | IAM actions required for the PutSession API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.PutSlotType">PutSlotType</a></code> | <code>string[]</code> | IAM actions required for the PutSlotType API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.RecognizeText">RecognizeText</a></code> | <code>string[]</code> | IAM actions required for the RecognizeText API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.RecognizeUtterance">RecognizeUtterance</a></code> | <code>string[]</code> | IAM actions required for the RecognizeUtterance API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.SearchAssociatedTranscripts">SearchAssociatedTranscripts</a></code> | <code>string[]</code> | IAM actions required for the SearchAssociatedTranscripts API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StartBotAnalyzer">StartBotAnalyzer</a></code> | <code>string[]</code> | IAM actions required for the StartBotAnalyzer API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StartBotRecommendation">StartBotRecommendation</a></code> | <code>string[]</code> | IAM actions required for the StartBotRecommendation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StartBotResourceGeneration">StartBotResourceGeneration</a></code> | <code>string[]</code> | IAM actions required for the StartBotResourceGeneration API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StartConversation">StartConversation</a></code> | <code>string[]</code> | IAM actions required for the StartConversation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StartImport">StartImport</a></code> | <code>string[]</code> | IAM actions required for the StartImport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StartMigration">StartMigration</a></code> | <code>string[]</code> | IAM actions required for the StartMigration API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StartTestExecution">StartTestExecution</a></code> | <code>string[]</code> | IAM actions required for the StartTestExecution API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StartTestSetGeneration">StartTestSetGeneration</a></code> | <code>string[]</code> | IAM actions required for the StartTestSetGeneration API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StopBotAnalyzer">StopBotAnalyzer</a></code> | <code>string[]</code> | IAM actions required for the StopBotAnalyzer API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.StopBotRecommendation">StopBotRecommendation</a></code> | <code>string[]</code> | IAM actions required for the StopBotRecommendation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateBot">UpdateBot</a></code> | <code>string[]</code> | IAM actions required for the UpdateBot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateBotAlias">UpdateBotAlias</a></code> | <code>string[]</code> | IAM actions required for the UpdateBotAlias API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateBotLocale">UpdateBotLocale</a></code> | <code>string[]</code> | IAM actions required for the UpdateBotLocale API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateBotRecommendation">UpdateBotRecommendation</a></code> | <code>string[]</code> | IAM actions required for the UpdateBotRecommendation API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateExport">UpdateExport</a></code> | <code>string[]</code> | IAM actions required for the UpdateExport API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateIntent">UpdateIntent</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntent API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateResourcePolicy">UpdateResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateSlot">UpdateSlot</a></code> | <code>string[]</code> | IAM actions required for the UpdateSlot API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateSlotType">UpdateSlotType</a></code> | <code>string[]</code> | IAM actions required for the UpdateSlotType API call. |
| <code><a href="#@cdk_utils/iam.lex.LexOperations.property.UpdateTestSet">UpdateTestSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateTestSet API call. |

---

##### `BatchCreateCustomVocabularyItem`<sup>Required</sup> <a name="BatchCreateCustomVocabularyItem" id="@cdk_utils/iam.lex.LexOperations.property.BatchCreateCustomVocabularyItem"></a>

```typescript
public readonly BatchCreateCustomVocabularyItem: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateCustomVocabularyItem API call.

---

##### `BatchDeleteCustomVocabularyItem`<sup>Required</sup> <a name="BatchDeleteCustomVocabularyItem" id="@cdk_utils/iam.lex.LexOperations.property.BatchDeleteCustomVocabularyItem"></a>

```typescript
public readonly BatchDeleteCustomVocabularyItem: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteCustomVocabularyItem API call.

---

##### `BatchUpdateCustomVocabularyItem`<sup>Required</sup> <a name="BatchUpdateCustomVocabularyItem" id="@cdk_utils/iam.lex.LexOperations.property.BatchUpdateCustomVocabularyItem"></a>

```typescript
public readonly BatchUpdateCustomVocabularyItem: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateCustomVocabularyItem API call.

---

##### `BuildBotLocale`<sup>Required</sup> <a name="BuildBotLocale" id="@cdk_utils/iam.lex.LexOperations.property.BuildBotLocale"></a>

```typescript
public readonly BuildBotLocale: string[];
```

- *Type:* string[]

IAM actions required for the BuildBotLocale API call.

---

##### `CreateBot`<sup>Required</sup> <a name="CreateBot" id="@cdk_utils/iam.lex.LexOperations.property.CreateBot"></a>

```typescript
public readonly CreateBot: string[];
```

- *Type:* string[]

IAM actions required for the CreateBot API call.

---

##### `CreateBotAlias`<sup>Required</sup> <a name="CreateBotAlias" id="@cdk_utils/iam.lex.LexOperations.property.CreateBotAlias"></a>

```typescript
public readonly CreateBotAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreateBotAlias API call.

---

##### `CreateBotLocale`<sup>Required</sup> <a name="CreateBotLocale" id="@cdk_utils/iam.lex.LexOperations.property.CreateBotLocale"></a>

```typescript
public readonly CreateBotLocale: string[];
```

- *Type:* string[]

IAM actions required for the CreateBotLocale API call.

---

##### `CreateBotReplica`<sup>Required</sup> <a name="CreateBotReplica" id="@cdk_utils/iam.lex.LexOperations.property.CreateBotReplica"></a>

```typescript
public readonly CreateBotReplica: string[];
```

- *Type:* string[]

IAM actions required for the CreateBotReplica API call.

---

##### `CreateBotVersion`<sup>Required</sup> <a name="CreateBotVersion" id="@cdk_utils/iam.lex.LexOperations.property.CreateBotVersion"></a>

```typescript
public readonly CreateBotVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateBotVersion API call.

---

##### `CreateExport`<sup>Required</sup> <a name="CreateExport" id="@cdk_utils/iam.lex.LexOperations.property.CreateExport"></a>

```typescript
public readonly CreateExport: string[];
```

- *Type:* string[]

IAM actions required for the CreateExport API call.

---

##### `CreateIntent`<sup>Required</sup> <a name="CreateIntent" id="@cdk_utils/iam.lex.LexOperations.property.CreateIntent"></a>

```typescript
public readonly CreateIntent: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntent API call.

---

##### `CreateIntentVersion`<sup>Required</sup> <a name="CreateIntentVersion" id="@cdk_utils/iam.lex.LexOperations.property.CreateIntentVersion"></a>

```typescript
public readonly CreateIntentVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateIntentVersion API call.

---

##### `CreateResourcePolicy`<sup>Required</sup> <a name="CreateResourcePolicy" id="@cdk_utils/iam.lex.LexOperations.property.CreateResourcePolicy"></a>

```typescript
public readonly CreateResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourcePolicy API call.

---

##### `CreateResourcePolicyStatement`<sup>Required</sup> <a name="CreateResourcePolicyStatement" id="@cdk_utils/iam.lex.LexOperations.property.CreateResourcePolicyStatement"></a>

```typescript
public readonly CreateResourcePolicyStatement: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourcePolicyStatement API call.

---

##### `CreateSlot`<sup>Required</sup> <a name="CreateSlot" id="@cdk_utils/iam.lex.LexOperations.property.CreateSlot"></a>

```typescript
public readonly CreateSlot: string[];
```

- *Type:* string[]

IAM actions required for the CreateSlot API call.

---

##### `CreateSlotType`<sup>Required</sup> <a name="CreateSlotType" id="@cdk_utils/iam.lex.LexOperations.property.CreateSlotType"></a>

```typescript
public readonly CreateSlotType: string[];
```

- *Type:* string[]

IAM actions required for the CreateSlotType API call.

---

##### `CreateSlotTypeVersion`<sup>Required</sup> <a name="CreateSlotTypeVersion" id="@cdk_utils/iam.lex.LexOperations.property.CreateSlotTypeVersion"></a>

```typescript
public readonly CreateSlotTypeVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateSlotTypeVersion API call.

---

##### `CreateTestSetDiscrepancyReport`<sup>Required</sup> <a name="CreateTestSetDiscrepancyReport" id="@cdk_utils/iam.lex.LexOperations.property.CreateTestSetDiscrepancyReport"></a>

```typescript
public readonly CreateTestSetDiscrepancyReport: string[];
```

- *Type:* string[]

IAM actions required for the CreateTestSetDiscrepancyReport API call.

---

##### `CreateUploadUrl`<sup>Required</sup> <a name="CreateUploadUrl" id="@cdk_utils/iam.lex.LexOperations.property.CreateUploadUrl"></a>

```typescript
public readonly CreateUploadUrl: string[];
```

- *Type:* string[]

IAM actions required for the CreateUploadUrl API call.

---

##### `DeleteBot`<sup>Required</sup> <a name="DeleteBot" id="@cdk_utils/iam.lex.LexOperations.property.DeleteBot"></a>

```typescript
public readonly DeleteBot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBot API call.

---

##### `DeleteBotAlias`<sup>Required</sup> <a name="DeleteBotAlias" id="@cdk_utils/iam.lex.LexOperations.property.DeleteBotAlias"></a>

```typescript
public readonly DeleteBotAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBotAlias API call.

---

##### `DeleteBotAnalyzerRecommendation`<sup>Required</sup> <a name="DeleteBotAnalyzerRecommendation" id="@cdk_utils/iam.lex.LexOperations.property.DeleteBotAnalyzerRecommendation"></a>

```typescript
public readonly DeleteBotAnalyzerRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBotAnalyzerRecommendation API call.

---

##### `DeleteBotChannelAssociation`<sup>Required</sup> <a name="DeleteBotChannelAssociation" id="@cdk_utils/iam.lex.LexOperations.property.DeleteBotChannelAssociation"></a>

```typescript
public readonly DeleteBotChannelAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBotChannelAssociation API call.

---

##### `DeleteBotLocale`<sup>Required</sup> <a name="DeleteBotLocale" id="@cdk_utils/iam.lex.LexOperations.property.DeleteBotLocale"></a>

```typescript
public readonly DeleteBotLocale: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBotLocale API call.

---

##### `DeleteBotReplica`<sup>Required</sup> <a name="DeleteBotReplica" id="@cdk_utils/iam.lex.LexOperations.property.DeleteBotReplica"></a>

```typescript
public readonly DeleteBotReplica: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBotReplica API call.

---

##### `DeleteBotVersion`<sup>Required</sup> <a name="DeleteBotVersion" id="@cdk_utils/iam.lex.LexOperations.property.DeleteBotVersion"></a>

```typescript
public readonly DeleteBotVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBotVersion API call.

---

##### `DeleteCustomVocabulary`<sup>Required</sup> <a name="DeleteCustomVocabulary" id="@cdk_utils/iam.lex.LexOperations.property.DeleteCustomVocabulary"></a>

```typescript
public readonly DeleteCustomVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomVocabulary API call.

---

##### `DeleteExport`<sup>Required</sup> <a name="DeleteExport" id="@cdk_utils/iam.lex.LexOperations.property.DeleteExport"></a>

```typescript
public readonly DeleteExport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExport API call.

---

##### `DeleteImport`<sup>Required</sup> <a name="DeleteImport" id="@cdk_utils/iam.lex.LexOperations.property.DeleteImport"></a>

```typescript
public readonly DeleteImport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteImport API call.

---

##### `DeleteIntent`<sup>Required</sup> <a name="DeleteIntent" id="@cdk_utils/iam.lex.LexOperations.property.DeleteIntent"></a>

```typescript
public readonly DeleteIntent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntent API call.

---

##### `DeleteIntentVersion`<sup>Required</sup> <a name="DeleteIntentVersion" id="@cdk_utils/iam.lex.LexOperations.property.DeleteIntentVersion"></a>

```typescript
public readonly DeleteIntentVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIntentVersion API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.lex.LexOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteResourcePolicyStatement`<sup>Required</sup> <a name="DeleteResourcePolicyStatement" id="@cdk_utils/iam.lex.LexOperations.property.DeleteResourcePolicyStatement"></a>

```typescript
public readonly DeleteResourcePolicyStatement: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicyStatement API call.

---

##### `DeleteSession`<sup>Required</sup> <a name="DeleteSession" id="@cdk_utils/iam.lex.LexOperations.property.DeleteSession"></a>

```typescript
public readonly DeleteSession: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSession API call.

---

##### `DeleteSlot`<sup>Required</sup> <a name="DeleteSlot" id="@cdk_utils/iam.lex.LexOperations.property.DeleteSlot"></a>

```typescript
public readonly DeleteSlot: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSlot API call.

---

##### `DeleteSlotType`<sup>Required</sup> <a name="DeleteSlotType" id="@cdk_utils/iam.lex.LexOperations.property.DeleteSlotType"></a>

```typescript
public readonly DeleteSlotType: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSlotType API call.

---

##### `DeleteSlotTypeVersion`<sup>Required</sup> <a name="DeleteSlotTypeVersion" id="@cdk_utils/iam.lex.LexOperations.property.DeleteSlotTypeVersion"></a>

```typescript
public readonly DeleteSlotTypeVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSlotTypeVersion API call.

---

##### `DeleteTestSet`<sup>Required</sup> <a name="DeleteTestSet" id="@cdk_utils/iam.lex.LexOperations.property.DeleteTestSet"></a>

```typescript
public readonly DeleteTestSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTestSet API call.

---

##### `DeleteUtterances`<sup>Required</sup> <a name="DeleteUtterances" id="@cdk_utils/iam.lex.LexOperations.property.DeleteUtterances"></a>

```typescript
public readonly DeleteUtterances: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUtterances API call.

---

##### `DescribeBot`<sup>Required</sup> <a name="DescribeBot" id="@cdk_utils/iam.lex.LexOperations.property.DescribeBot"></a>

```typescript
public readonly DescribeBot: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBot API call.

---

##### `DescribeBotAlias`<sup>Required</sup> <a name="DescribeBotAlias" id="@cdk_utils/iam.lex.LexOperations.property.DescribeBotAlias"></a>

```typescript
public readonly DescribeBotAlias: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBotAlias API call.

---

##### `DescribeBotAnalyzerRecommendation`<sup>Required</sup> <a name="DescribeBotAnalyzerRecommendation" id="@cdk_utils/iam.lex.LexOperations.property.DescribeBotAnalyzerRecommendation"></a>

```typescript
public readonly DescribeBotAnalyzerRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBotAnalyzerRecommendation API call.

---

##### `DescribeBotLocale`<sup>Required</sup> <a name="DescribeBotLocale" id="@cdk_utils/iam.lex.LexOperations.property.DescribeBotLocale"></a>

```typescript
public readonly DescribeBotLocale: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBotLocale API call.

---

##### `DescribeBotRecommendation`<sup>Required</sup> <a name="DescribeBotRecommendation" id="@cdk_utils/iam.lex.LexOperations.property.DescribeBotRecommendation"></a>

```typescript
public readonly DescribeBotRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBotRecommendation API call.

---

##### `DescribeBotReplica`<sup>Required</sup> <a name="DescribeBotReplica" id="@cdk_utils/iam.lex.LexOperations.property.DescribeBotReplica"></a>

```typescript
public readonly DescribeBotReplica: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBotReplica API call.

---

##### `DescribeBotResourceGeneration`<sup>Required</sup> <a name="DescribeBotResourceGeneration" id="@cdk_utils/iam.lex.LexOperations.property.DescribeBotResourceGeneration"></a>

```typescript
public readonly DescribeBotResourceGeneration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBotResourceGeneration API call.

---

##### `DescribeBotVersion`<sup>Required</sup> <a name="DescribeBotVersion" id="@cdk_utils/iam.lex.LexOperations.property.DescribeBotVersion"></a>

```typescript
public readonly DescribeBotVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBotVersion API call.

---

##### `DescribeCustomVocabularyMetadata`<sup>Required</sup> <a name="DescribeCustomVocabularyMetadata" id="@cdk_utils/iam.lex.LexOperations.property.DescribeCustomVocabularyMetadata"></a>

```typescript
public readonly DescribeCustomVocabularyMetadata: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomVocabularyMetadata API call.

---

##### `DescribeExport`<sup>Required</sup> <a name="DescribeExport" id="@cdk_utils/iam.lex.LexOperations.property.DescribeExport"></a>

```typescript
public readonly DescribeExport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeExport API call.

---

##### `DescribeImport`<sup>Required</sup> <a name="DescribeImport" id="@cdk_utils/iam.lex.LexOperations.property.DescribeImport"></a>

```typescript
public readonly DescribeImport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImport API call.

---

##### `DescribeIntent`<sup>Required</sup> <a name="DescribeIntent" id="@cdk_utils/iam.lex.LexOperations.property.DescribeIntent"></a>

```typescript
public readonly DescribeIntent: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIntent API call.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.lex.LexOperations.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourcePolicy API call.

---

##### `DescribeSlot`<sup>Required</sup> <a name="DescribeSlot" id="@cdk_utils/iam.lex.LexOperations.property.DescribeSlot"></a>

```typescript
public readonly DescribeSlot: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSlot API call.

---

##### `DescribeSlotType`<sup>Required</sup> <a name="DescribeSlotType" id="@cdk_utils/iam.lex.LexOperations.property.DescribeSlotType"></a>

```typescript
public readonly DescribeSlotType: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSlotType API call.

---

##### `DescribeTestExecution`<sup>Required</sup> <a name="DescribeTestExecution" id="@cdk_utils/iam.lex.LexOperations.property.DescribeTestExecution"></a>

```typescript
public readonly DescribeTestExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTestExecution API call.

---

##### `DescribeTestSet`<sup>Required</sup> <a name="DescribeTestSet" id="@cdk_utils/iam.lex.LexOperations.property.DescribeTestSet"></a>

```typescript
public readonly DescribeTestSet: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTestSet API call.

---

##### `DescribeTestSetDiscrepancyReport`<sup>Required</sup> <a name="DescribeTestSetDiscrepancyReport" id="@cdk_utils/iam.lex.LexOperations.property.DescribeTestSetDiscrepancyReport"></a>

```typescript
public readonly DescribeTestSetDiscrepancyReport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTestSetDiscrepancyReport API call.

---

##### `DescribeTestSetGeneration`<sup>Required</sup> <a name="DescribeTestSetGeneration" id="@cdk_utils/iam.lex.LexOperations.property.DescribeTestSetGeneration"></a>

```typescript
public readonly DescribeTestSetGeneration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTestSetGeneration API call.

---

##### `GenerateBotElement`<sup>Required</sup> <a name="GenerateBotElement" id="@cdk_utils/iam.lex.LexOperations.property.GenerateBotElement"></a>

```typescript
public readonly GenerateBotElement: string[];
```

- *Type:* string[]

IAM actions required for the GenerateBotElement API call.

---

##### `ListAggregatedUtterances`<sup>Required</sup> <a name="ListAggregatedUtterances" id="@cdk_utils/iam.lex.LexOperations.property.ListAggregatedUtterances"></a>

```typescript
public readonly ListAggregatedUtterances: string[];
```

- *Type:* string[]

IAM actions required for the ListAggregatedUtterances API call.

---

##### `ListBotAliases`<sup>Required</sup> <a name="ListBotAliases" id="@cdk_utils/iam.lex.LexOperations.property.ListBotAliases"></a>

```typescript
public readonly ListBotAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListBotAliases API call.

---

##### `ListBotAliasReplicas`<sup>Required</sup> <a name="ListBotAliasReplicas" id="@cdk_utils/iam.lex.LexOperations.property.ListBotAliasReplicas"></a>

```typescript
public readonly ListBotAliasReplicas: string[];
```

- *Type:* string[]

IAM actions required for the ListBotAliasReplicas API call.

---

##### `ListBotAnalyzerHistory`<sup>Required</sup> <a name="ListBotAnalyzerHistory" id="@cdk_utils/iam.lex.LexOperations.property.ListBotAnalyzerHistory"></a>

```typescript
public readonly ListBotAnalyzerHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListBotAnalyzerHistory API call.

---

##### `ListBotLocales`<sup>Required</sup> <a name="ListBotLocales" id="@cdk_utils/iam.lex.LexOperations.property.ListBotLocales"></a>

```typescript
public readonly ListBotLocales: string[];
```

- *Type:* string[]

IAM actions required for the ListBotLocales API call.

---

##### `ListBotRecommendations`<sup>Required</sup> <a name="ListBotRecommendations" id="@cdk_utils/iam.lex.LexOperations.property.ListBotRecommendations"></a>

```typescript
public readonly ListBotRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListBotRecommendations API call.

---

##### `ListBotReplicas`<sup>Required</sup> <a name="ListBotReplicas" id="@cdk_utils/iam.lex.LexOperations.property.ListBotReplicas"></a>

```typescript
public readonly ListBotReplicas: string[];
```

- *Type:* string[]

IAM actions required for the ListBotReplicas API call.

---

##### `ListBotResourceGenerations`<sup>Required</sup> <a name="ListBotResourceGenerations" id="@cdk_utils/iam.lex.LexOperations.property.ListBotResourceGenerations"></a>

```typescript
public readonly ListBotResourceGenerations: string[];
```

- *Type:* string[]

IAM actions required for the ListBotResourceGenerations API call.

---

##### `ListBots`<sup>Required</sup> <a name="ListBots" id="@cdk_utils/iam.lex.LexOperations.property.ListBots"></a>

```typescript
public readonly ListBots: string[];
```

- *Type:* string[]

IAM actions required for the ListBots API call.

---

##### `ListBotVersionReplicas`<sup>Required</sup> <a name="ListBotVersionReplicas" id="@cdk_utils/iam.lex.LexOperations.property.ListBotVersionReplicas"></a>

```typescript
public readonly ListBotVersionReplicas: string[];
```

- *Type:* string[]

IAM actions required for the ListBotVersionReplicas API call.

---

##### `ListBotVersions`<sup>Required</sup> <a name="ListBotVersions" id="@cdk_utils/iam.lex.LexOperations.property.ListBotVersions"></a>

```typescript
public readonly ListBotVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListBotVersions API call.

---

##### `ListBuiltInIntents`<sup>Required</sup> <a name="ListBuiltInIntents" id="@cdk_utils/iam.lex.LexOperations.property.ListBuiltInIntents"></a>

```typescript
public readonly ListBuiltInIntents: string[];
```

- *Type:* string[]

IAM actions required for the ListBuiltInIntents API call.

---

##### `ListBuiltInSlotTypes`<sup>Required</sup> <a name="ListBuiltInSlotTypes" id="@cdk_utils/iam.lex.LexOperations.property.ListBuiltInSlotTypes"></a>

```typescript
public readonly ListBuiltInSlotTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListBuiltInSlotTypes API call.

---

##### `ListCustomVocabularyItems`<sup>Required</sup> <a name="ListCustomVocabularyItems" id="@cdk_utils/iam.lex.LexOperations.property.ListCustomVocabularyItems"></a>

```typescript
public readonly ListCustomVocabularyItems: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomVocabularyItems API call.

---

##### `ListExports`<sup>Required</sup> <a name="ListExports" id="@cdk_utils/iam.lex.LexOperations.property.ListExports"></a>

```typescript
public readonly ListExports: string[];
```

- *Type:* string[]

IAM actions required for the ListExports API call.

---

##### `ListImports`<sup>Required</sup> <a name="ListImports" id="@cdk_utils/iam.lex.LexOperations.property.ListImports"></a>

```typescript
public readonly ListImports: string[];
```

- *Type:* string[]

IAM actions required for the ListImports API call.

---

##### `ListIntentMetrics`<sup>Required</sup> <a name="ListIntentMetrics" id="@cdk_utils/iam.lex.LexOperations.property.ListIntentMetrics"></a>

```typescript
public readonly ListIntentMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListIntentMetrics API call.

---

##### `ListIntentPaths`<sup>Required</sup> <a name="ListIntentPaths" id="@cdk_utils/iam.lex.LexOperations.property.ListIntentPaths"></a>

```typescript
public readonly ListIntentPaths: string[];
```

- *Type:* string[]

IAM actions required for the ListIntentPaths API call.

---

##### `ListIntents`<sup>Required</sup> <a name="ListIntents" id="@cdk_utils/iam.lex.LexOperations.property.ListIntents"></a>

```typescript
public readonly ListIntents: string[];
```

- *Type:* string[]

IAM actions required for the ListIntents API call.

---

##### `ListIntentStageMetrics`<sup>Required</sup> <a name="ListIntentStageMetrics" id="@cdk_utils/iam.lex.LexOperations.property.ListIntentStageMetrics"></a>

```typescript
public readonly ListIntentStageMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListIntentStageMetrics API call.

---

##### `ListRecommendedIntents`<sup>Required</sup> <a name="ListRecommendedIntents" id="@cdk_utils/iam.lex.LexOperations.property.ListRecommendedIntents"></a>

```typescript
public readonly ListRecommendedIntents: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendedIntents API call.

---

##### `ListSessionAnalyticsData`<sup>Required</sup> <a name="ListSessionAnalyticsData" id="@cdk_utils/iam.lex.LexOperations.property.ListSessionAnalyticsData"></a>

```typescript
public readonly ListSessionAnalyticsData: string[];
```

- *Type:* string[]

IAM actions required for the ListSessionAnalyticsData API call.

---

##### `ListSessionMetrics`<sup>Required</sup> <a name="ListSessionMetrics" id="@cdk_utils/iam.lex.LexOperations.property.ListSessionMetrics"></a>

```typescript
public readonly ListSessionMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListSessionMetrics API call.

---

##### `ListSlots`<sup>Required</sup> <a name="ListSlots" id="@cdk_utils/iam.lex.LexOperations.property.ListSlots"></a>

```typescript
public readonly ListSlots: string[];
```

- *Type:* string[]

IAM actions required for the ListSlots API call.

---

##### `ListSlotTypes`<sup>Required</sup> <a name="ListSlotTypes" id="@cdk_utils/iam.lex.LexOperations.property.ListSlotTypes"></a>

```typescript
public readonly ListSlotTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListSlotTypes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.lex.LexOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTestExecutionResultItems`<sup>Required</sup> <a name="ListTestExecutionResultItems" id="@cdk_utils/iam.lex.LexOperations.property.ListTestExecutionResultItems"></a>

```typescript
public readonly ListTestExecutionResultItems: string[];
```

- *Type:* string[]

IAM actions required for the ListTestExecutionResultItems API call.

---

##### `ListTestExecutions`<sup>Required</sup> <a name="ListTestExecutions" id="@cdk_utils/iam.lex.LexOperations.property.ListTestExecutions"></a>

```typescript
public readonly ListTestExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListTestExecutions API call.

---

##### `ListTestSetRecords`<sup>Required</sup> <a name="ListTestSetRecords" id="@cdk_utils/iam.lex.LexOperations.property.ListTestSetRecords"></a>

```typescript
public readonly ListTestSetRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListTestSetRecords API call.

---

##### `ListTestSets`<sup>Required</sup> <a name="ListTestSets" id="@cdk_utils/iam.lex.LexOperations.property.ListTestSets"></a>

```typescript
public readonly ListTestSets: string[];
```

- *Type:* string[]

IAM actions required for the ListTestSets API call.

---

##### `ListUtteranceAnalyticsData`<sup>Required</sup> <a name="ListUtteranceAnalyticsData" id="@cdk_utils/iam.lex.LexOperations.property.ListUtteranceAnalyticsData"></a>

```typescript
public readonly ListUtteranceAnalyticsData: string[];
```

- *Type:* string[]

IAM actions required for the ListUtteranceAnalyticsData API call.

---

##### `ListUtteranceMetrics`<sup>Required</sup> <a name="ListUtteranceMetrics" id="@cdk_utils/iam.lex.LexOperations.property.ListUtteranceMetrics"></a>

```typescript
public readonly ListUtteranceMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListUtteranceMetrics API call.

---

##### `opGetBot`<sup>Required</sup> <a name="opGetBot" id="@cdk_utils/iam.lex.LexOperations.property.opGetBot"></a>

```typescript
public readonly opGetBot: string[];
```

- *Type:* string[]

IAM actions required for the GetBot API call.

---

##### `opGetBotAlias`<sup>Required</sup> <a name="opGetBotAlias" id="@cdk_utils/iam.lex.LexOperations.property.opGetBotAlias"></a>

```typescript
public readonly opGetBotAlias: string[];
```

- *Type:* string[]

IAM actions required for the GetBotAlias API call.

---

##### `opGetBotAliases`<sup>Required</sup> <a name="opGetBotAliases" id="@cdk_utils/iam.lex.LexOperations.property.opGetBotAliases"></a>

```typescript
public readonly opGetBotAliases: string[];
```

- *Type:* string[]

IAM actions required for the GetBotAliases API call.

---

##### `opGetBotChannelAssociation`<sup>Required</sup> <a name="opGetBotChannelAssociation" id="@cdk_utils/iam.lex.LexOperations.property.opGetBotChannelAssociation"></a>

```typescript
public readonly opGetBotChannelAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetBotChannelAssociation API call.

---

##### `opGetBotChannelAssociations`<sup>Required</sup> <a name="opGetBotChannelAssociations" id="@cdk_utils/iam.lex.LexOperations.property.opGetBotChannelAssociations"></a>

```typescript
public readonly opGetBotChannelAssociations: string[];
```

- *Type:* string[]

IAM actions required for the GetBotChannelAssociations API call.

---

##### `opGetBots`<sup>Required</sup> <a name="opGetBots" id="@cdk_utils/iam.lex.LexOperations.property.opGetBots"></a>

```typescript
public readonly opGetBots: string[];
```

- *Type:* string[]

IAM actions required for the GetBots API call.

---

##### `opGetBotVersions`<sup>Required</sup> <a name="opGetBotVersions" id="@cdk_utils/iam.lex.LexOperations.property.opGetBotVersions"></a>

```typescript
public readonly opGetBotVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetBotVersions API call.

---

##### `opGetBuiltinIntent`<sup>Required</sup> <a name="opGetBuiltinIntent" id="@cdk_utils/iam.lex.LexOperations.property.opGetBuiltinIntent"></a>

```typescript
public readonly opGetBuiltinIntent: string[];
```

- *Type:* string[]

IAM actions required for the GetBuiltinIntent API call.

---

##### `opGetBuiltinIntents`<sup>Required</sup> <a name="opGetBuiltinIntents" id="@cdk_utils/iam.lex.LexOperations.property.opGetBuiltinIntents"></a>

```typescript
public readonly opGetBuiltinIntents: string[];
```

- *Type:* string[]

IAM actions required for the GetBuiltinIntents API call.

---

##### `opGetBuiltinSlotTypes`<sup>Required</sup> <a name="opGetBuiltinSlotTypes" id="@cdk_utils/iam.lex.LexOperations.property.opGetBuiltinSlotTypes"></a>

```typescript
public readonly opGetBuiltinSlotTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetBuiltinSlotTypes API call.

---

##### `opGetExport`<sup>Required</sup> <a name="opGetExport" id="@cdk_utils/iam.lex.LexOperations.property.opGetExport"></a>

```typescript
public readonly opGetExport: string[];
```

- *Type:* string[]

IAM actions required for the GetExport API call.

---

##### `opGetImport`<sup>Required</sup> <a name="opGetImport" id="@cdk_utils/iam.lex.LexOperations.property.opGetImport"></a>

```typescript
public readonly opGetImport: string[];
```

- *Type:* string[]

IAM actions required for the GetImport API call.

---

##### `opGetIntent`<sup>Required</sup> <a name="opGetIntent" id="@cdk_utils/iam.lex.LexOperations.property.opGetIntent"></a>

```typescript
public readonly opGetIntent: string[];
```

- *Type:* string[]

IAM actions required for the GetIntent API call.

---

##### `opGetIntents`<sup>Required</sup> <a name="opGetIntents" id="@cdk_utils/iam.lex.LexOperations.property.opGetIntents"></a>

```typescript
public readonly opGetIntents: string[];
```

- *Type:* string[]

IAM actions required for the GetIntents API call.

---

##### `opGetIntentVersions`<sup>Required</sup> <a name="opGetIntentVersions" id="@cdk_utils/iam.lex.LexOperations.property.opGetIntentVersions"></a>

```typescript
public readonly opGetIntentVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetIntentVersions API call.

---

##### `opGetMigration`<sup>Required</sup> <a name="opGetMigration" id="@cdk_utils/iam.lex.LexOperations.property.opGetMigration"></a>

```typescript
public readonly opGetMigration: string[];
```

- *Type:* string[]

IAM actions required for the GetMigration API call.

---

##### `opGetMigrations`<sup>Required</sup> <a name="opGetMigrations" id="@cdk_utils/iam.lex.LexOperations.property.opGetMigrations"></a>

```typescript
public readonly opGetMigrations: string[];
```

- *Type:* string[]

IAM actions required for the GetMigrations API call.

---

##### `opGetSession`<sup>Required</sup> <a name="opGetSession" id="@cdk_utils/iam.lex.LexOperations.property.opGetSession"></a>

```typescript
public readonly opGetSession: string[];
```

- *Type:* string[]

IAM actions required for the GetSession API call.

---

##### `opGetSlotType`<sup>Required</sup> <a name="opGetSlotType" id="@cdk_utils/iam.lex.LexOperations.property.opGetSlotType"></a>

```typescript
public readonly opGetSlotType: string[];
```

- *Type:* string[]

IAM actions required for the GetSlotType API call.

---

##### `opGetSlotTypes`<sup>Required</sup> <a name="opGetSlotTypes" id="@cdk_utils/iam.lex.LexOperations.property.opGetSlotTypes"></a>

```typescript
public readonly opGetSlotTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetSlotTypes API call.

---

##### `opGetSlotTypeVersions`<sup>Required</sup> <a name="opGetSlotTypeVersions" id="@cdk_utils/iam.lex.LexOperations.property.opGetSlotTypeVersions"></a>

```typescript
public readonly opGetSlotTypeVersions: string[];
```

- *Type:* string[]

IAM actions required for the GetSlotTypeVersions API call.

---

##### `opGetTestExecutionArtifactsUrl`<sup>Required</sup> <a name="opGetTestExecutionArtifactsUrl" id="@cdk_utils/iam.lex.LexOperations.property.opGetTestExecutionArtifactsUrl"></a>

```typescript
public readonly opGetTestExecutionArtifactsUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetTestExecutionArtifactsUrl API call.

---

##### `opGetUtterancesView`<sup>Required</sup> <a name="opGetUtterancesView" id="@cdk_utils/iam.lex.LexOperations.property.opGetUtterancesView"></a>

```typescript
public readonly opGetUtterancesView: string[];
```

- *Type:* string[]

IAM actions required for the GetUtterancesView API call.

---

##### `PostContent`<sup>Required</sup> <a name="PostContent" id="@cdk_utils/iam.lex.LexOperations.property.PostContent"></a>

```typescript
public readonly PostContent: string[];
```

- *Type:* string[]

IAM actions required for the PostContent API call.

---

##### `PostText`<sup>Required</sup> <a name="PostText" id="@cdk_utils/iam.lex.LexOperations.property.PostText"></a>

```typescript
public readonly PostText: string[];
```

- *Type:* string[]

IAM actions required for the PostText API call.

---

##### `PutBot`<sup>Required</sup> <a name="PutBot" id="@cdk_utils/iam.lex.LexOperations.property.PutBot"></a>

```typescript
public readonly PutBot: string[];
```

- *Type:* string[]

IAM actions required for the PutBot API call.

---

##### `PutBotAlias`<sup>Required</sup> <a name="PutBotAlias" id="@cdk_utils/iam.lex.LexOperations.property.PutBotAlias"></a>

```typescript
public readonly PutBotAlias: string[];
```

- *Type:* string[]

IAM actions required for the PutBotAlias API call.

---

##### `PutIntent`<sup>Required</sup> <a name="PutIntent" id="@cdk_utils/iam.lex.LexOperations.property.PutIntent"></a>

```typescript
public readonly PutIntent: string[];
```

- *Type:* string[]

IAM actions required for the PutIntent API call.

---

##### `PutSession`<sup>Required</sup> <a name="PutSession" id="@cdk_utils/iam.lex.LexOperations.property.PutSession"></a>

```typescript
public readonly PutSession: string[];
```

- *Type:* string[]

IAM actions required for the PutSession API call.

---

##### `PutSlotType`<sup>Required</sup> <a name="PutSlotType" id="@cdk_utils/iam.lex.LexOperations.property.PutSlotType"></a>

```typescript
public readonly PutSlotType: string[];
```

- *Type:* string[]

IAM actions required for the PutSlotType API call.

---

##### `RecognizeText`<sup>Required</sup> <a name="RecognizeText" id="@cdk_utils/iam.lex.LexOperations.property.RecognizeText"></a>

```typescript
public readonly RecognizeText: string[];
```

- *Type:* string[]

IAM actions required for the RecognizeText API call.

---

##### `RecognizeUtterance`<sup>Required</sup> <a name="RecognizeUtterance" id="@cdk_utils/iam.lex.LexOperations.property.RecognizeUtterance"></a>

```typescript
public readonly RecognizeUtterance: string[];
```

- *Type:* string[]

IAM actions required for the RecognizeUtterance API call.

---

##### `SearchAssociatedTranscripts`<sup>Required</sup> <a name="SearchAssociatedTranscripts" id="@cdk_utils/iam.lex.LexOperations.property.SearchAssociatedTranscripts"></a>

```typescript
public readonly SearchAssociatedTranscripts: string[];
```

- *Type:* string[]

IAM actions required for the SearchAssociatedTranscripts API call.

---

##### `StartBotAnalyzer`<sup>Required</sup> <a name="StartBotAnalyzer" id="@cdk_utils/iam.lex.LexOperations.property.StartBotAnalyzer"></a>

```typescript
public readonly StartBotAnalyzer: string[];
```

- *Type:* string[]

IAM actions required for the StartBotAnalyzer API call.

---

##### `StartBotRecommendation`<sup>Required</sup> <a name="StartBotRecommendation" id="@cdk_utils/iam.lex.LexOperations.property.StartBotRecommendation"></a>

```typescript
public readonly StartBotRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the StartBotRecommendation API call.

---

##### `StartBotResourceGeneration`<sup>Required</sup> <a name="StartBotResourceGeneration" id="@cdk_utils/iam.lex.LexOperations.property.StartBotResourceGeneration"></a>

```typescript
public readonly StartBotResourceGeneration: string[];
```

- *Type:* string[]

IAM actions required for the StartBotResourceGeneration API call.

---

##### `StartConversation`<sup>Required</sup> <a name="StartConversation" id="@cdk_utils/iam.lex.LexOperations.property.StartConversation"></a>

```typescript
public readonly StartConversation: string[];
```

- *Type:* string[]

IAM actions required for the StartConversation API call.

---

##### `StartImport`<sup>Required</sup> <a name="StartImport" id="@cdk_utils/iam.lex.LexOperations.property.StartImport"></a>

```typescript
public readonly StartImport: string[];
```

- *Type:* string[]

IAM actions required for the StartImport API call.

---

##### `StartMigration`<sup>Required</sup> <a name="StartMigration" id="@cdk_utils/iam.lex.LexOperations.property.StartMigration"></a>

```typescript
public readonly StartMigration: string[];
```

- *Type:* string[]

IAM actions required for the StartMigration API call.

---

##### `StartTestExecution`<sup>Required</sup> <a name="StartTestExecution" id="@cdk_utils/iam.lex.LexOperations.property.StartTestExecution"></a>

```typescript
public readonly StartTestExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartTestExecution API call.

---

##### `StartTestSetGeneration`<sup>Required</sup> <a name="StartTestSetGeneration" id="@cdk_utils/iam.lex.LexOperations.property.StartTestSetGeneration"></a>

```typescript
public readonly StartTestSetGeneration: string[];
```

- *Type:* string[]

IAM actions required for the StartTestSetGeneration API call.

---

##### `StopBotAnalyzer`<sup>Required</sup> <a name="StopBotAnalyzer" id="@cdk_utils/iam.lex.LexOperations.property.StopBotAnalyzer"></a>

```typescript
public readonly StopBotAnalyzer: string[];
```

- *Type:* string[]

IAM actions required for the StopBotAnalyzer API call.

---

##### `StopBotRecommendation`<sup>Required</sup> <a name="StopBotRecommendation" id="@cdk_utils/iam.lex.LexOperations.property.StopBotRecommendation"></a>

```typescript
public readonly StopBotRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the StopBotRecommendation API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lex.LexOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lex.LexOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBot`<sup>Required</sup> <a name="UpdateBot" id="@cdk_utils/iam.lex.LexOperations.property.UpdateBot"></a>

```typescript
public readonly UpdateBot: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBot API call.

---

##### `UpdateBotAlias`<sup>Required</sup> <a name="UpdateBotAlias" id="@cdk_utils/iam.lex.LexOperations.property.UpdateBotAlias"></a>

```typescript
public readonly UpdateBotAlias: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBotAlias API call.

---

##### `UpdateBotLocale`<sup>Required</sup> <a name="UpdateBotLocale" id="@cdk_utils/iam.lex.LexOperations.property.UpdateBotLocale"></a>

```typescript
public readonly UpdateBotLocale: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBotLocale API call.

---

##### `UpdateBotRecommendation`<sup>Required</sup> <a name="UpdateBotRecommendation" id="@cdk_utils/iam.lex.LexOperations.property.UpdateBotRecommendation"></a>

```typescript
public readonly UpdateBotRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBotRecommendation API call.

---

##### `UpdateExport`<sup>Required</sup> <a name="UpdateExport" id="@cdk_utils/iam.lex.LexOperations.property.UpdateExport"></a>

```typescript
public readonly UpdateExport: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExport API call.

---

##### `UpdateIntent`<sup>Required</sup> <a name="UpdateIntent" id="@cdk_utils/iam.lex.LexOperations.property.UpdateIntent"></a>

```typescript
public readonly UpdateIntent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntent API call.

---

##### `UpdateResourcePolicy`<sup>Required</sup> <a name="UpdateResourcePolicy" id="@cdk_utils/iam.lex.LexOperations.property.UpdateResourcePolicy"></a>

```typescript
public readonly UpdateResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourcePolicy API call.

---

##### `UpdateSlot`<sup>Required</sup> <a name="UpdateSlot" id="@cdk_utils/iam.lex.LexOperations.property.UpdateSlot"></a>

```typescript
public readonly UpdateSlot: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSlot API call.

---

##### `UpdateSlotType`<sup>Required</sup> <a name="UpdateSlotType" id="@cdk_utils/iam.lex.LexOperations.property.UpdateSlotType"></a>

```typescript
public readonly UpdateSlotType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSlotType API call.

---

##### `UpdateTestSet`<sup>Required</sup> <a name="UpdateTestSet" id="@cdk_utils/iam.lex.LexOperations.property.UpdateTestSet"></a>

```typescript
public readonly UpdateTestSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTestSet API call.

---

### LexResources <a name="LexResources" id="@cdk_utils/iam.lex.LexResources"></a>

ARN builders, validators, and parsers for lex resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lex.LexResources.Initializer"></a>

```typescript
import { lex } from '@cdk_utils/iam'

new lex.LexResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lex.LexResources.botAliasVariant1">botAliasVariant1</a></code> | Builds an ARN for the bot aliasVariant1 resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.botAliasVariant2">botAliasVariant2</a></code> | Builds an ARN for the bot aliasVariant2 resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.botVariant1">botVariant1</a></code> | Builds an ARN for the botVariant1 resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.botVariant2">botVariant2</a></code> | Builds an ARN for the botVariant2 resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.botVersion">botVersion</a></code> | Builds an ARN for the bot version resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.intentVersion">intentVersion</a></code> | Builds an ARN for the intent version resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.isValidBotAliasArn">isValidBotAliasArn</a></code> | Validates whether a string is a valid ARN for the bot alias resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.isValidBotArn">isValidBotArn</a></code> | Validates whether a string is a valid ARN for the bot resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.isValidBotVersionArn">isValidBotVersionArn</a></code> | Validates whether a string is a valid ARN for the bot version resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.isValidIntentVersionArn">isValidIntentVersionArn</a></code> | Validates whether a string is a valid ARN for the intent version resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.isValidSlottypeVersionArn">isValidSlottypeVersionArn</a></code> | Validates whether a string is a valid ARN for the slottype version resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.isValidTestSetArn">isValidTestSetArn</a></code> | Validates whether a string is a valid ARN for the test set resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.parseBotAliasArn">parseBotAliasArn</a></code> | Parses a bot alias ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.lex.LexResources.parseBotArn">parseBotArn</a></code> | Parses a bot ARN into its components (uses first ARN variant format). |
| <code><a href="#@cdk_utils/iam.lex.LexResources.parseBotVersionArn">parseBotVersionArn</a></code> | Parses a bot version ARN into its components. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.parseIntentVersionArn">parseIntentVersionArn</a></code> | Parses a intent version ARN into its components. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.parseSlottypeVersionArn">parseSlottypeVersionArn</a></code> | Parses a slottype version ARN into its components. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.parseTestSetArn">parseTestSetArn</a></code> | Parses a test set ARN into its components. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.slottypeVersion">slottypeVersion</a></code> | Builds an ARN for the slottype version resource. |
| <code><a href="#@cdk_utils/iam.lex.LexResources.testSet">testSet</a></code> | Builds an ARN for the test set resource. |

---

##### `botAliasVariant1` <a name="botAliasVariant1" id="@cdk_utils/iam.lex.LexResources.botAliasVariant1"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.botAliasVariant1(props: LexBotAliasVariant1ArnProps)
```

Builds an ARN for the bot aliasVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.botAliasVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexBotAliasVariant1ArnProps">LexBotAliasVariant1ArnProps</a>

---

##### `botAliasVariant2` <a name="botAliasVariant2" id="@cdk_utils/iam.lex.LexResources.botAliasVariant2"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.botAliasVariant2(props: LexBotAliasVariant2ArnProps)
```

Builds an ARN for the bot aliasVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.botAliasVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexBotAliasVariant2ArnProps">LexBotAliasVariant2ArnProps</a>

---

##### `botVariant1` <a name="botVariant1" id="@cdk_utils/iam.lex.LexResources.botVariant1"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.botVariant1(props: LexBotVariant1ArnProps)
```

Builds an ARN for the botVariant1 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.botVariant1.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexBotVariant1ArnProps">LexBotVariant1ArnProps</a>

---

##### `botVariant2` <a name="botVariant2" id="@cdk_utils/iam.lex.LexResources.botVariant2"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.botVariant2(props: LexBotVariant2ArnProps)
```

Builds an ARN for the botVariant2 resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.botVariant2.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexBotVariant2ArnProps">LexBotVariant2ArnProps</a>

---

##### `botVersion` <a name="botVersion" id="@cdk_utils/iam.lex.LexResources.botVersion"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.botVersion(props: LexBotVersionArnProps)
```

Builds an ARN for the bot version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.botVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexBotVersionArnProps">LexBotVersionArnProps</a>

---

##### `channel` <a name="channel" id="@cdk_utils/iam.lex.LexResources.channel"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.channel(props: LexChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexChannelArnProps">LexChannelArnProps</a>

---

##### `intentVersion` <a name="intentVersion" id="@cdk_utils/iam.lex.LexResources.intentVersion"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.intentVersion(props: LexIntentVersionArnProps)
```

Builds an ARN for the intent version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.intentVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexIntentVersionArnProps">LexIntentVersionArnProps</a>

---

##### `isValidBotAliasArn` <a name="isValidBotAliasArn" id="@cdk_utils/iam.lex.LexResources.isValidBotAliasArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.isValidBotAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the bot alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.isValidBotAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBotArn` <a name="isValidBotArn" id="@cdk_utils/iam.lex.LexResources.isValidBotArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.isValidBotArn(arn: string)
```

Validates whether a string is a valid ARN for the bot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.isValidBotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBotVersionArn` <a name="isValidBotVersionArn" id="@cdk_utils/iam.lex.LexResources.isValidBotVersionArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.isValidBotVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the bot version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.isValidBotVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.lex.LexResources.isValidChannelArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIntentVersionArn` <a name="isValidIntentVersionArn" id="@cdk_utils/iam.lex.LexResources.isValidIntentVersionArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.isValidIntentVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the intent version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.isValidIntentVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSlottypeVersionArn` <a name="isValidSlottypeVersionArn" id="@cdk_utils/iam.lex.LexResources.isValidSlottypeVersionArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.isValidSlottypeVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the slottype version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.isValidSlottypeVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTestSetArn` <a name="isValidTestSetArn" id="@cdk_utils/iam.lex.LexResources.isValidTestSetArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.isValidTestSetArn(arn: string)
```

Validates whether a string is a valid ARN for the test set resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.isValidTestSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBotAliasArn` <a name="parseBotAliasArn" id="@cdk_utils/iam.lex.LexResources.parseBotAliasArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.parseBotAliasArn(arn: string)
```

Parses a bot alias ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.parseBotAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBotArn` <a name="parseBotArn" id="@cdk_utils/iam.lex.LexResources.parseBotArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.parseBotArn(arn: string)
```

Parses a bot ARN into its components (uses first ARN variant format).

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.parseBotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBotVersionArn` <a name="parseBotVersionArn" id="@cdk_utils/iam.lex.LexResources.parseBotVersionArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.parseBotVersionArn(arn: string)
```

Parses a bot version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.parseBotVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.lex.LexResources.parseChannelArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIntentVersionArn` <a name="parseIntentVersionArn" id="@cdk_utils/iam.lex.LexResources.parseIntentVersionArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.parseIntentVersionArn(arn: string)
```

Parses a intent version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.parseIntentVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSlottypeVersionArn` <a name="parseSlottypeVersionArn" id="@cdk_utils/iam.lex.LexResources.parseSlottypeVersionArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.parseSlottypeVersionArn(arn: string)
```

Parses a slottype version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.parseSlottypeVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestSetArn` <a name="parseTestSetArn" id="@cdk_utils/iam.lex.LexResources.parseTestSetArn"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.parseTestSetArn(arn: string)
```

Parses a test set ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lex.LexResources.parseTestSetArn.parameter.arn"></a>

- *Type:* string

---

##### `slottypeVersion` <a name="slottypeVersion" id="@cdk_utils/iam.lex.LexResources.slottypeVersion"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.slottypeVersion(props: LexSlottypeVersionArnProps)
```

Builds an ARN for the slottype version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.slottypeVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexSlottypeVersionArnProps">LexSlottypeVersionArnProps</a>

---

##### `testSet` <a name="testSet" id="@cdk_utils/iam.lex.LexResources.testSet"></a>

```typescript
import { lex } from '@cdk_utils/iam'

lex.LexResources.testSet(props: LexTestSetArnProps)
```

Builds an ARN for the test set resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lex.LexResources.testSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lex.LexTestSetArnProps">LexTestSetArnProps</a>

---




