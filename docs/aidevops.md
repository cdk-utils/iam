# `aidevops` Submodule <a name="`aidevops` Submodule" id="@cdk_utils/iam.aidevops"></a>


## Structs <a name="Structs" id="Structs"></a>

### AidevopsAgentspaceArnComponents <a name="AidevopsAgentspaceArnComponents" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents"></a>

Parsed components of a agentspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsAgentspaceArnComponents: aidevops.AidevopsAgentspaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The AgentSpaceId component. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The AgentSpaceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AidevopsAgentspaceArnProps <a name="AidevopsAgentspaceArnProps" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps"></a>

Properties for building a agentspace ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsAgentspaceArnProps: aidevops.AidevopsAgentspaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The AgentSpaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The AgentSpaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AidevopsAssetArnComponents <a name="AidevopsAssetArnComponents" id="@cdk_utils/iam.aidevops.AidevopsAssetArnComponents"></a>

Parsed components of a asset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsAssetArnComponents: aidevops.AidevopsAssetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The AgentSpaceId component. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.assetId">assetId</a></code> | <code>string</code> | The AssetId component. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The AgentSpaceId component.

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The AssetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsAssetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AidevopsAssetArnProps <a name="AidevopsAssetArnProps" id="@cdk_utils/iam.aidevops.AidevopsAssetArnProps"></a>

Properties for building a asset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsAssetArnProps.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsAssetArnProps: aidevops.AidevopsAssetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The AgentSpaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.assetId">assetId</a></code> | <code>string</code> | The AssetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The AgentSpaceId component of the ARN.

---

##### `assetId`<sup>Required</sup> <a name="assetId" id="@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.assetId"></a>

```typescript
public readonly assetId: string;
```

- *Type:* string

The AssetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsAssetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AidevopsAssociationsArnComponents <a name="AidevopsAssociationsArnComponents" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents"></a>

Parsed components of a associations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsAssociationsArnComponents: aidevops.AidevopsAssociationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The AgentSpaceId component. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.associationId">associationId</a></code> | <code>string</code> | The AssociationId component. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The AgentSpaceId component.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

The AssociationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AidevopsAssociationsArnProps <a name="AidevopsAssociationsArnProps" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps"></a>

Properties for building a associations ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsAssociationsArnProps: aidevops.AidevopsAssociationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The AgentSpaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.associationId">associationId</a></code> | <code>string</code> | The AssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The AgentSpaceId component of the ARN.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

The AssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AidevopsPrivateConnectionArnComponents <a name="AidevopsPrivateConnectionArnComponents" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents"></a>

Parsed components of a private-connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsPrivateConnectionArnComponents: aidevops.AidevopsPrivateConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AidevopsPrivateConnectionArnProps <a name="AidevopsPrivateConnectionArnProps" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps"></a>

Properties for building a private-connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsPrivateConnectionArnProps: aidevops.AidevopsPrivateConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AidevopsServiceArnComponents <a name="AidevopsServiceArnComponents" id="@cdk_utils/iam.aidevops.AidevopsServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsServiceArnComponents: aidevops.AidevopsServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.aidevops.AidevopsServiceArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### AidevopsServiceArnProps <a name="AidevopsServiceArnProps" id="@cdk_utils/iam.aidevops.AidevopsServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsServiceArnProps.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsServiceArnProps: aidevops.AidevopsServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.aidevops.AidevopsServiceArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AidevopsTriggerArnComponents <a name="AidevopsTriggerArnComponents" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents"></a>

Parsed components of a trigger ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsTriggerArnComponents: aidevops.AidevopsTriggerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The AgentSpaceId component. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.triggerId">triggerId</a></code> | <code>string</code> | The TriggerId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The AgentSpaceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnComponents.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

The TriggerId component.

---

### AidevopsTriggerArnProps <a name="AidevopsTriggerArnProps" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnProps"></a>

Properties for building a trigger ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

const aidevopsTriggerArnProps: aidevops.AidevopsTriggerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | The AgentSpaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.triggerId">triggerId</a></code> | <code>string</code> | The TriggerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

The AgentSpaceId component of the ARN.

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

The TriggerId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.aidevops.AidevopsTriggerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AidevopsActions <a name="AidevopsActions" id="@cdk_utils/iam.aidevops.AidevopsActions"></a>

IAM action constants for the aidevops service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aidevops.AidevopsActions.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

new aidevops.AidevopsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAccessToken">actionGetAccessToken</a></code> | <code>string</code> | [Read] aidevops:GetAccessToken. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAccountUsage">actionGetAccountUsage</a></code> | <code>string</code> | [Read] aidevops:GetAccountUsage. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAgentSpace">actionGetAgentSpace</a></code> | <code>string</code> | [Read] aidevops:GetAgentSpace. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAsset">actionGetAsset</a></code> | <code>string</code> | [Read] aidevops:GetAsset. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAssetContent">actionGetAssetContent</a></code> | <code>string</code> | [Read] aidevops:GetAssetContent. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAssetFile">actionGetAssetFile</a></code> | <code>string</code> | [Read] aidevops:GetAssetFile. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAssociation">actionGetAssociation</a></code> | <code>string</code> | [Read] aidevops:GetAssociation. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetBacklogTask">actionGetBacklogTask</a></code> | <code>string</code> | [Read] aidevops:GetBacklogTask. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetKnowledgeItem">actionGetKnowledgeItem</a></code> | <code>string</code> | [Read] aidevops:GetKnowledgeItem. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetOperatorApp">actionGetOperatorApp</a></code> | <code>string</code> | [Read] aidevops:GetOperatorApp. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetRecommendation">actionGetRecommendation</a></code> | <code>string</code> | [Read] aidevops:GetRecommendation. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] aidevops:GetService. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetTrigger">actionGetTrigger</a></code> | <code>string</code> | [Read] aidevops:GetTrigger. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] aidevops:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.AssociateService">AssociateService</a></code> | <code>string</code> | [Write] aidevops:AssociateService. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateAccessToken">CreateAccessToken</a></code> | <code>string</code> | [Write] aidevops:CreateAccessToken. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateAgentSpace">CreateAgentSpace</a></code> | <code>string</code> | [Write] aidevops:CreateAgentSpace. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateAsset">CreateAsset</a></code> | <code>string</code> | [Write] aidevops:CreateAsset. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateAssetFile">CreateAssetFile</a></code> | <code>string</code> | [Write] aidevops:CreateAssetFile. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateBacklogTask">CreateBacklogTask</a></code> | <code>string</code> | [Write] aidevops:CreateBacklogTask. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateChat">CreateChat</a></code> | <code>string</code> | [Write] aidevops:CreateChat. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateKnowledgeItem">CreateKnowledgeItem</a></code> | <code>string</code> | [Write] aidevops:CreateKnowledgeItem. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateOneTimeLoginSession">CreateOneTimeLoginSession</a></code> | <code>string</code> | [Write] aidevops:CreateOneTimeLoginSession. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreatePrivateConnection">CreatePrivateConnection</a></code> | <code>string</code> | [Write] aidevops:CreatePrivateConnection. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.CreateTrigger">CreateTrigger</a></code> | <code>string</code> | [Write] aidevops:CreateTrigger. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteAgentSpace">DeleteAgentSpace</a></code> | <code>string</code> | [Write] aidevops:DeleteAgentSpace. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteAsset">DeleteAsset</a></code> | <code>string</code> | [Write] aidevops:DeleteAsset. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteAssetFile">DeleteAssetFile</a></code> | <code>string</code> | [Write] aidevops:DeleteAssetFile. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteKnowledgeItem">DeleteKnowledgeItem</a></code> | <code>string</code> | [Write] aidevops:DeleteKnowledgeItem. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DeletePrivateConnection">DeletePrivateConnection</a></code> | <code>string</code> | [Write] aidevops:DeletePrivateConnection. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteTrigger">DeleteTrigger</a></code> | <code>string</code> | [Write] aidevops:DeleteTrigger. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DeregisterService">DeregisterService</a></code> | <code>string</code> | [Write] aidevops:DeregisterService. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DescribePrivateConnection">DescribePrivateConnection</a></code> | <code>string</code> | [Read] aidevops:DescribePrivateConnection. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DescribeServices">DescribeServices</a></code> | <code>string</code> | [Read] aidevops:DescribeServices. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DescribeSupportLevel">DescribeSupportLevel</a></code> | <code>string</code> | [Write] aidevops:DescribeSupportLevel. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DisableOperatorApp">DisableOperatorApp</a></code> | <code>string</code> | [Write] aidevops:DisableOperatorApp. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DisassociateService">DisassociateService</a></code> | <code>string</code> | [Write] aidevops:DisassociateService. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.DiscoverTopology">DiscoverTopology</a></code> | <code>string</code> | [Write] aidevops:DiscoverTopology. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.EnableOperatorApp">EnableOperatorApp</a></code> | <code>string</code> | [Write] aidevops:EnableOperatorApp. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.EndChatForCase">EndChatForCase</a></code> | <code>string</code> | [Write] aidevops:EndChatForCase. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.InitiateChatForCase">InitiateChatForCase</a></code> | <code>string</code> | [Write] aidevops:InitiateChatForCase. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListAccessTokens">ListAccessTokens</a></code> | <code>string</code> | [List] aidevops:ListAccessTokens. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListAgentSpaces">ListAgentSpaces</a></code> | <code>string</code> | [List] aidevops:ListAgentSpaces. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssetFiles">ListAssetFiles</a></code> | <code>string</code> | [List] aidevops:ListAssetFiles. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssets">ListAssets</a></code> | <code>string</code> | [List] aidevops:ListAssets. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssetTypes">ListAssetTypes</a></code> | <code>string</code> | [List] aidevops:ListAssetTypes. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssetVersions">ListAssetVersions</a></code> | <code>string</code> | [List] aidevops:ListAssetVersions. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssociations">ListAssociations</a></code> | <code>string</code> | [List] aidevops:ListAssociations. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListBacklogTasks">ListBacklogTasks</a></code> | <code>string</code> | [List] aidevops:ListBacklogTasks. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListChats">ListChats</a></code> | <code>string</code> | [List] aidevops:ListChats. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListExecutions">ListExecutions</a></code> | <code>string</code> | [List] aidevops:ListExecutions. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListGoals">ListGoals</a></code> | <code>string</code> | [List] aidevops:ListGoals. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListJournalRecords">ListJournalRecords</a></code> | <code>string</code> | [List] aidevops:ListJournalRecords. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListKnowledgeItems">ListKnowledgeItems</a></code> | <code>string</code> | [List] aidevops:ListKnowledgeItems. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListKnowledgeItemVersions">ListKnowledgeItemVersions</a></code> | <code>string</code> | [List] aidevops:ListKnowledgeItemVersions. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListPendingMessages">ListPendingMessages</a></code> | <code>string</code> | [List] aidevops:ListPendingMessages. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListPrivateConnections">ListPrivateConnections</a></code> | <code>string</code> | [List] aidevops:ListPrivateConnections. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListRecommendations">ListRecommendations</a></code> | <code>string</code> | [List] aidevops:ListRecommendations. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListServices">ListServices</a></code> | <code>string</code> | [List] aidevops:ListServices. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] aidevops:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListTriggers">ListTriggers</a></code> | <code>string</code> | [List] aidevops:ListTriggers. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ListWebhooks">ListWebhooks</a></code> | <code>string</code> | [List] aidevops:ListWebhooks. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.RegisterService">RegisterService</a></code> | <code>string</code> | [Write] aidevops:RegisterService. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.RevokeAccessToken">RevokeAccessToken</a></code> | <code>string</code> | [Write] aidevops:RevokeAccessToken. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.RotateAccessToken">RotateAccessToken</a></code> | <code>string</code> | [Write] aidevops:RotateAccessToken. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.SearchServiceAccessibleResource">SearchServiceAccessibleResource</a></code> | <code>string</code> | [Read] aidevops:SearchServiceAccessibleResource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.SendMessage">SendMessage</a></code> | <code>string</code> | [Write] aidevops:SendMessage. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] aidevops:TagResource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] aidevops:UntagResource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateAgentSpace">UpdateAgentSpace</a></code> | <code>string</code> | [Write] aidevops:UpdateAgentSpace. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateApprovalAction">UpdateApprovalAction</a></code> | <code>string</code> | [Write] aidevops:UpdateApprovalAction. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateAsset">UpdateAsset</a></code> | <code>string</code> | [Write] aidevops:UpdateAsset. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateAssetFile">UpdateAssetFile</a></code> | <code>string</code> | [Write] aidevops:UpdateAssetFile. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateAssociation">UpdateAssociation</a></code> | <code>string</code> | [Write] aidevops:UpdateAssociation. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateBacklogTask">UpdateBacklogTask</a></code> | <code>string</code> | [Write] aidevops:UpdateBacklogTask. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateGoal">UpdateGoal</a></code> | <code>string</code> | [Write] aidevops:UpdateGoal. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateKnowledgeItem">UpdateKnowledgeItem</a></code> | <code>string</code> | [Write] aidevops:UpdateKnowledgeItem. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateOperatorAppIdpConfig">UpdateOperatorAppIdpConfig</a></code> | <code>string</code> | [Write] aidevops:UpdateOperatorAppIdpConfig. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdatePrivateConnectionCertificate">UpdatePrivateConnectionCertificate</a></code> | <code>string</code> | [Write] aidevops:UpdatePrivateConnectionCertificate. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateRecommendation">UpdateRecommendation</a></code> | <code>string</code> | [Write] aidevops:UpdateRecommendation. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateTrigger">UpdateTrigger</a></code> | <code>string</code> | [Write] aidevops:UpdateTrigger. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsActions.property.ValidateAwsAssociations">ValidateAwsAssociations</a></code> | <code>string</code> | [Write] aidevops:ValidateAwsAssociations. |

---

##### `actionGetAccessToken`<sup>Required</sup> <a name="actionGetAccessToken" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAccessToken"></a>

```typescript
public readonly actionGetAccessToken: string;
```

- *Type:* string

[Read] aidevops:GetAccessToken.

---

##### `actionGetAccountUsage`<sup>Required</sup> <a name="actionGetAccountUsage" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAccountUsage"></a>

```typescript
public readonly actionGetAccountUsage: string;
```

- *Type:* string

[Read] aidevops:GetAccountUsage.

---

##### `actionGetAgentSpace`<sup>Required</sup> <a name="actionGetAgentSpace" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAgentSpace"></a>

```typescript
public readonly actionGetAgentSpace: string;
```

- *Type:* string

[Read] aidevops:GetAgentSpace.

---

##### `actionGetAsset`<sup>Required</sup> <a name="actionGetAsset" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAsset"></a>

```typescript
public readonly actionGetAsset: string;
```

- *Type:* string

[Read] aidevops:GetAsset.

---

##### `actionGetAssetContent`<sup>Required</sup> <a name="actionGetAssetContent" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAssetContent"></a>

```typescript
public readonly actionGetAssetContent: string;
```

- *Type:* string

[Read] aidevops:GetAssetContent.

---

##### `actionGetAssetFile`<sup>Required</sup> <a name="actionGetAssetFile" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAssetFile"></a>

```typescript
public readonly actionGetAssetFile: string;
```

- *Type:* string

[Read] aidevops:GetAssetFile.

---

##### `actionGetAssociation`<sup>Required</sup> <a name="actionGetAssociation" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetAssociation"></a>

```typescript
public readonly actionGetAssociation: string;
```

- *Type:* string

[Read] aidevops:GetAssociation.

---

##### `actionGetBacklogTask`<sup>Required</sup> <a name="actionGetBacklogTask" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetBacklogTask"></a>

```typescript
public readonly actionGetBacklogTask: string;
```

- *Type:* string

[Read] aidevops:GetBacklogTask.

---

##### `actionGetKnowledgeItem`<sup>Required</sup> <a name="actionGetKnowledgeItem" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetKnowledgeItem"></a>

```typescript
public readonly actionGetKnowledgeItem: string;
```

- *Type:* string

[Read] aidevops:GetKnowledgeItem.

---

##### `actionGetOperatorApp`<sup>Required</sup> <a name="actionGetOperatorApp" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetOperatorApp"></a>

```typescript
public readonly actionGetOperatorApp: string;
```

- *Type:* string

[Read] aidevops:GetOperatorApp.

---

##### `actionGetRecommendation`<sup>Required</sup> <a name="actionGetRecommendation" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetRecommendation"></a>

```typescript
public readonly actionGetRecommendation: string;
```

- *Type:* string

[Read] aidevops:GetRecommendation.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] aidevops:GetService.

---

##### `actionGetTrigger`<sup>Required</sup> <a name="actionGetTrigger" id="@cdk_utils/iam.aidevops.AidevopsActions.property.actionGetTrigger"></a>

```typescript
public readonly actionGetTrigger: string;
```

- *Type:* string

[Read] aidevops:GetTrigger.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aidevops.AidevopsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.aidevops.AidevopsActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] aidevops:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aidevops.AidevopsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aidevops.AidevopsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aidevops.AidevopsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aidevops.AidevopsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateService`<sup>Required</sup> <a name="AssociateService" id="@cdk_utils/iam.aidevops.AidevopsActions.property.AssociateService"></a>

```typescript
public readonly AssociateService: string;
```

- *Type:* string

[Write] aidevops:AssociateService.

---

##### `CreateAccessToken`<sup>Required</sup> <a name="CreateAccessToken" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateAccessToken"></a>

```typescript
public readonly CreateAccessToken: string;
```

- *Type:* string

[Write] aidevops:CreateAccessToken.

---

##### `CreateAgentSpace`<sup>Required</sup> <a name="CreateAgentSpace" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateAgentSpace"></a>

```typescript
public readonly CreateAgentSpace: string;
```

- *Type:* string

[Write] aidevops:CreateAgentSpace.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string;
```

- *Type:* string

[Write] aidevops:CreateAsset.

---

##### `CreateAssetFile`<sup>Required</sup> <a name="CreateAssetFile" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateAssetFile"></a>

```typescript
public readonly CreateAssetFile: string;
```

- *Type:* string

[Write] aidevops:CreateAssetFile.

---

##### `CreateBacklogTask`<sup>Required</sup> <a name="CreateBacklogTask" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateBacklogTask"></a>

```typescript
public readonly CreateBacklogTask: string;
```

- *Type:* string

[Write] aidevops:CreateBacklogTask.

---

##### `CreateChat`<sup>Required</sup> <a name="CreateChat" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateChat"></a>

```typescript
public readonly CreateChat: string;
```

- *Type:* string

[Write] aidevops:CreateChat.

---

##### `CreateKnowledgeItem`<sup>Required</sup> <a name="CreateKnowledgeItem" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateKnowledgeItem"></a>

```typescript
public readonly CreateKnowledgeItem: string;
```

- *Type:* string

[Write] aidevops:CreateKnowledgeItem.

---

##### `CreateOneTimeLoginSession`<sup>Required</sup> <a name="CreateOneTimeLoginSession" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateOneTimeLoginSession"></a>

```typescript
public readonly CreateOneTimeLoginSession: string;
```

- *Type:* string

[Write] aidevops:CreateOneTimeLoginSession.

---

##### `CreatePrivateConnection`<sup>Required</sup> <a name="CreatePrivateConnection" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreatePrivateConnection"></a>

```typescript
public readonly CreatePrivateConnection: string;
```

- *Type:* string

[Write] aidevops:CreatePrivateConnection.

---

##### `CreateTrigger`<sup>Required</sup> <a name="CreateTrigger" id="@cdk_utils/iam.aidevops.AidevopsActions.property.CreateTrigger"></a>

```typescript
public readonly CreateTrigger: string;
```

- *Type:* string

[Write] aidevops:CreateTrigger.

---

##### `DeleteAgentSpace`<sup>Required</sup> <a name="DeleteAgentSpace" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteAgentSpace"></a>

```typescript
public readonly DeleteAgentSpace: string;
```

- *Type:* string

[Write] aidevops:DeleteAgentSpace.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string;
```

- *Type:* string

[Write] aidevops:DeleteAsset.

---

##### `DeleteAssetFile`<sup>Required</sup> <a name="DeleteAssetFile" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteAssetFile"></a>

```typescript
public readonly DeleteAssetFile: string;
```

- *Type:* string

[Write] aidevops:DeleteAssetFile.

---

##### `DeleteKnowledgeItem`<sup>Required</sup> <a name="DeleteKnowledgeItem" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteKnowledgeItem"></a>

```typescript
public readonly DeleteKnowledgeItem: string;
```

- *Type:* string

[Write] aidevops:DeleteKnowledgeItem.

---

##### `DeletePrivateConnection`<sup>Required</sup> <a name="DeletePrivateConnection" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DeletePrivateConnection"></a>

```typescript
public readonly DeletePrivateConnection: string;
```

- *Type:* string

[Write] aidevops:DeletePrivateConnection.

---

##### `DeleteTrigger`<sup>Required</sup> <a name="DeleteTrigger" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DeleteTrigger"></a>

```typescript
public readonly DeleteTrigger: string;
```

- *Type:* string

[Write] aidevops:DeleteTrigger.

---

##### `DeregisterService`<sup>Required</sup> <a name="DeregisterService" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DeregisterService"></a>

```typescript
public readonly DeregisterService: string;
```

- *Type:* string

[Write] aidevops:DeregisterService.

---

##### `DescribePrivateConnection`<sup>Required</sup> <a name="DescribePrivateConnection" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DescribePrivateConnection"></a>

```typescript
public readonly DescribePrivateConnection: string;
```

- *Type:* string

[Read] aidevops:DescribePrivateConnection.

---

##### `DescribeServices`<sup>Required</sup> <a name="DescribeServices" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DescribeServices"></a>

```typescript
public readonly DescribeServices: string;
```

- *Type:* string

[Read] aidevops:DescribeServices.

---

##### `DescribeSupportLevel`<sup>Required</sup> <a name="DescribeSupportLevel" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DescribeSupportLevel"></a>

```typescript
public readonly DescribeSupportLevel: string;
```

- *Type:* string

[Write] aidevops:DescribeSupportLevel.

---

##### `DisableOperatorApp`<sup>Required</sup> <a name="DisableOperatorApp" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DisableOperatorApp"></a>

```typescript
public readonly DisableOperatorApp: string;
```

- *Type:* string

[Write] aidevops:DisableOperatorApp.

---

##### `DisassociateService`<sup>Required</sup> <a name="DisassociateService" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DisassociateService"></a>

```typescript
public readonly DisassociateService: string;
```

- *Type:* string

[Write] aidevops:DisassociateService.

---

##### `DiscoverTopology`<sup>Required</sup> <a name="DiscoverTopology" id="@cdk_utils/iam.aidevops.AidevopsActions.property.DiscoverTopology"></a>

```typescript
public readonly DiscoverTopology: string;
```

- *Type:* string

[Write] aidevops:DiscoverTopology.

---

##### `EnableOperatorApp`<sup>Required</sup> <a name="EnableOperatorApp" id="@cdk_utils/iam.aidevops.AidevopsActions.property.EnableOperatorApp"></a>

```typescript
public readonly EnableOperatorApp: string;
```

- *Type:* string

[Write] aidevops:EnableOperatorApp.

---

##### `EndChatForCase`<sup>Required</sup> <a name="EndChatForCase" id="@cdk_utils/iam.aidevops.AidevopsActions.property.EndChatForCase"></a>

```typescript
public readonly EndChatForCase: string;
```

- *Type:* string

[Write] aidevops:EndChatForCase.

---

##### `InitiateChatForCase`<sup>Required</sup> <a name="InitiateChatForCase" id="@cdk_utils/iam.aidevops.AidevopsActions.property.InitiateChatForCase"></a>

```typescript
public readonly InitiateChatForCase: string;
```

- *Type:* string

[Write] aidevops:InitiateChatForCase.

---

##### `ListAccessTokens`<sup>Required</sup> <a name="ListAccessTokens" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListAccessTokens"></a>

```typescript
public readonly ListAccessTokens: string;
```

- *Type:* string

[List] aidevops:ListAccessTokens.

---

##### `ListAgentSpaces`<sup>Required</sup> <a name="ListAgentSpaces" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListAgentSpaces"></a>

```typescript
public readonly ListAgentSpaces: string;
```

- *Type:* string

[List] aidevops:ListAgentSpaces.

---

##### `ListAssetFiles`<sup>Required</sup> <a name="ListAssetFiles" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssetFiles"></a>

```typescript
public readonly ListAssetFiles: string;
```

- *Type:* string

[List] aidevops:ListAssetFiles.

---

##### `ListAssets`<sup>Required</sup> <a name="ListAssets" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssets"></a>

```typescript
public readonly ListAssets: string;
```

- *Type:* string

[List] aidevops:ListAssets.

---

##### `ListAssetTypes`<sup>Required</sup> <a name="ListAssetTypes" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssetTypes"></a>

```typescript
public readonly ListAssetTypes: string;
```

- *Type:* string

[List] aidevops:ListAssetTypes.

---

##### `ListAssetVersions`<sup>Required</sup> <a name="ListAssetVersions" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssetVersions"></a>

```typescript
public readonly ListAssetVersions: string;
```

- *Type:* string

[List] aidevops:ListAssetVersions.

---

##### `ListAssociations`<sup>Required</sup> <a name="ListAssociations" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListAssociations"></a>

```typescript
public readonly ListAssociations: string;
```

- *Type:* string

[List] aidevops:ListAssociations.

---

##### `ListBacklogTasks`<sup>Required</sup> <a name="ListBacklogTasks" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListBacklogTasks"></a>

```typescript
public readonly ListBacklogTasks: string;
```

- *Type:* string

[List] aidevops:ListBacklogTasks.

---

##### `ListChats`<sup>Required</sup> <a name="ListChats" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListChats"></a>

```typescript
public readonly ListChats: string;
```

- *Type:* string

[List] aidevops:ListChats.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string;
```

- *Type:* string

[List] aidevops:ListExecutions.

---

##### `ListGoals`<sup>Required</sup> <a name="ListGoals" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListGoals"></a>

```typescript
public readonly ListGoals: string;
```

- *Type:* string

[List] aidevops:ListGoals.

---

##### `ListJournalRecords`<sup>Required</sup> <a name="ListJournalRecords" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListJournalRecords"></a>

```typescript
public readonly ListJournalRecords: string;
```

- *Type:* string

[List] aidevops:ListJournalRecords.

---

##### `ListKnowledgeItems`<sup>Required</sup> <a name="ListKnowledgeItems" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListKnowledgeItems"></a>

```typescript
public readonly ListKnowledgeItems: string;
```

- *Type:* string

[List] aidevops:ListKnowledgeItems.

---

##### `ListKnowledgeItemVersions`<sup>Required</sup> <a name="ListKnowledgeItemVersions" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListKnowledgeItemVersions"></a>

```typescript
public readonly ListKnowledgeItemVersions: string;
```

- *Type:* string

[List] aidevops:ListKnowledgeItemVersions.

---

##### `ListPendingMessages`<sup>Required</sup> <a name="ListPendingMessages" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListPendingMessages"></a>

```typescript
public readonly ListPendingMessages: string;
```

- *Type:* string

[List] aidevops:ListPendingMessages.

---

##### `ListPrivateConnections`<sup>Required</sup> <a name="ListPrivateConnections" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListPrivateConnections"></a>

```typescript
public readonly ListPrivateConnections: string;
```

- *Type:* string

[List] aidevops:ListPrivateConnections.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string;
```

- *Type:* string

[List] aidevops:ListRecommendations.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[List] aidevops:ListServices.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] aidevops:ListTagsForResource.

---

##### `ListTriggers`<sup>Required</sup> <a name="ListTriggers" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListTriggers"></a>

```typescript
public readonly ListTriggers: string;
```

- *Type:* string

[List] aidevops:ListTriggers.

---

##### `ListWebhooks`<sup>Required</sup> <a name="ListWebhooks" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ListWebhooks"></a>

```typescript
public readonly ListWebhooks: string;
```

- *Type:* string

[List] aidevops:ListWebhooks.

---

##### `RegisterService`<sup>Required</sup> <a name="RegisterService" id="@cdk_utils/iam.aidevops.AidevopsActions.property.RegisterService"></a>

```typescript
public readonly RegisterService: string;
```

- *Type:* string

[Write] aidevops:RegisterService.

---

##### `RevokeAccessToken`<sup>Required</sup> <a name="RevokeAccessToken" id="@cdk_utils/iam.aidevops.AidevopsActions.property.RevokeAccessToken"></a>

```typescript
public readonly RevokeAccessToken: string;
```

- *Type:* string

[Write] aidevops:RevokeAccessToken.

---

##### `RotateAccessToken`<sup>Required</sup> <a name="RotateAccessToken" id="@cdk_utils/iam.aidevops.AidevopsActions.property.RotateAccessToken"></a>

```typescript
public readonly RotateAccessToken: string;
```

- *Type:* string

[Write] aidevops:RotateAccessToken.

---

##### `SearchServiceAccessibleResource`<sup>Required</sup> <a name="SearchServiceAccessibleResource" id="@cdk_utils/iam.aidevops.AidevopsActions.property.SearchServiceAccessibleResource"></a>

```typescript
public readonly SearchServiceAccessibleResource: string;
```

- *Type:* string

[Read] aidevops:SearchServiceAccessibleResource.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.aidevops.AidevopsActions.property.SendMessage"></a>

```typescript
public readonly SendMessage: string;
```

- *Type:* string

[Write] aidevops:SendMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aidevops.AidevopsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aidevops.AidevopsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] aidevops:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] aidevops:UntagResource.

---

##### `UpdateAgentSpace`<sup>Required</sup> <a name="UpdateAgentSpace" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateAgentSpace"></a>

```typescript
public readonly UpdateAgentSpace: string;
```

- *Type:* string

[Write] aidevops:UpdateAgentSpace.

---

##### `UpdateApprovalAction`<sup>Required</sup> <a name="UpdateApprovalAction" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateApprovalAction"></a>

```typescript
public readonly UpdateApprovalAction: string;
```

- *Type:* string

[Write] aidevops:UpdateApprovalAction.

---

##### `UpdateAsset`<sup>Required</sup> <a name="UpdateAsset" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateAsset"></a>

```typescript
public readonly UpdateAsset: string;
```

- *Type:* string

[Write] aidevops:UpdateAsset.

---

##### `UpdateAssetFile`<sup>Required</sup> <a name="UpdateAssetFile" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateAssetFile"></a>

```typescript
public readonly UpdateAssetFile: string;
```

- *Type:* string

[Write] aidevops:UpdateAssetFile.

---

##### `UpdateAssociation`<sup>Required</sup> <a name="UpdateAssociation" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateAssociation"></a>

```typescript
public readonly UpdateAssociation: string;
```

- *Type:* string

[Write] aidevops:UpdateAssociation.

---

##### `UpdateBacklogTask`<sup>Required</sup> <a name="UpdateBacklogTask" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateBacklogTask"></a>

```typescript
public readonly UpdateBacklogTask: string;
```

- *Type:* string

[Write] aidevops:UpdateBacklogTask.

---

##### `UpdateGoal`<sup>Required</sup> <a name="UpdateGoal" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateGoal"></a>

```typescript
public readonly UpdateGoal: string;
```

- *Type:* string

[Write] aidevops:UpdateGoal.

---

##### `UpdateKnowledgeItem`<sup>Required</sup> <a name="UpdateKnowledgeItem" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateKnowledgeItem"></a>

```typescript
public readonly UpdateKnowledgeItem: string;
```

- *Type:* string

[Write] aidevops:UpdateKnowledgeItem.

---

##### `UpdateOperatorAppIdpConfig`<sup>Required</sup> <a name="UpdateOperatorAppIdpConfig" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateOperatorAppIdpConfig"></a>

```typescript
public readonly UpdateOperatorAppIdpConfig: string;
```

- *Type:* string

[Write] aidevops:UpdateOperatorAppIdpConfig.

---

##### `UpdatePrivateConnectionCertificate`<sup>Required</sup> <a name="UpdatePrivateConnectionCertificate" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdatePrivateConnectionCertificate"></a>

```typescript
public readonly UpdatePrivateConnectionCertificate: string;
```

- *Type:* string

[Write] aidevops:UpdatePrivateConnectionCertificate.

---

##### `UpdateRecommendation`<sup>Required</sup> <a name="UpdateRecommendation" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateRecommendation"></a>

```typescript
public readonly UpdateRecommendation: string;
```

- *Type:* string

[Write] aidevops:UpdateRecommendation.

---

##### `UpdateTrigger`<sup>Required</sup> <a name="UpdateTrigger" id="@cdk_utils/iam.aidevops.AidevopsActions.property.UpdateTrigger"></a>

```typescript
public readonly UpdateTrigger: string;
```

- *Type:* string

[Write] aidevops:UpdateTrigger.

---

##### `ValidateAwsAssociations`<sup>Required</sup> <a name="ValidateAwsAssociations" id="@cdk_utils/iam.aidevops.AidevopsActions.property.ValidateAwsAssociations"></a>

```typescript
public readonly ValidateAwsAssociations: string;
```

- *Type:* string

[Write] aidevops:ValidateAwsAssociations.

---

### AidevopsConditions <a name="AidevopsConditions" id="@cdk_utils/iam.aidevops.AidevopsConditions"></a>

Condition key constants and builders for aidevops.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aidevops.AidevopsConditions.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

new aidevops.AidevopsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.aidevops.AidevopsConditions.requestTag"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aidevops.AidevopsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.aidevops.AidevopsConditions.resourceTag"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.aidevops.AidevopsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.tagKeys"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.aidevops.AidevopsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.actionGetAgentSpaceConditionKeys">actionGetAgentSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgentSpace action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.actionGetServiceConditionKeys">actionGetServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetService action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.CreateAgentSpaceConditionKeys">CreateAgentSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentSpace action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.CreatePrivateConnectionConditionKeys">CreatePrivateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePrivateConnection action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.DeleteAgentSpaceConditionKeys">DeleteAgentSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAgentSpace action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.DeletePrivateConnectionConditionKeys">DeletePrivateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePrivateConnection action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.DeregisterServiceConditionKeys">DeregisterServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterService action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.DescribePrivateConnectionConditionKeys">DescribePrivateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribePrivateConnection action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.RegisterServiceConditionKeys">RegisterServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterService action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.UpdateAgentSpaceConditionKeys">UpdateAgentSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAgentSpace action. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsConditions.property.UpdatePrivateConnectionCertificateConditionKeys">UpdatePrivateConnectionCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePrivateConnectionCertificate action. |

---

##### `actionGetAgentSpaceConditionKeys`<sup>Required</sup> <a name="actionGetAgentSpaceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.actionGetAgentSpaceConditionKeys"></a>

```typescript
public readonly actionGetAgentSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgentSpace action.

---

##### `actionGetServiceConditionKeys`<sup>Required</sup> <a name="actionGetServiceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.actionGetServiceConditionKeys"></a>

```typescript
public readonly actionGetServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetService action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAgentSpaceConditionKeys`<sup>Required</sup> <a name="CreateAgentSpaceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.CreateAgentSpaceConditionKeys"></a>

```typescript
public readonly CreateAgentSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentSpace action.

---

##### `CreatePrivateConnectionConditionKeys`<sup>Required</sup> <a name="CreatePrivateConnectionConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.CreatePrivateConnectionConditionKeys"></a>

```typescript
public readonly CreatePrivateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePrivateConnection action.

---

##### `DeleteAgentSpaceConditionKeys`<sup>Required</sup> <a name="DeleteAgentSpaceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.DeleteAgentSpaceConditionKeys"></a>

```typescript
public readonly DeleteAgentSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAgentSpace action.

---

##### `DeletePrivateConnectionConditionKeys`<sup>Required</sup> <a name="DeletePrivateConnectionConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.DeletePrivateConnectionConditionKeys"></a>

```typescript
public readonly DeletePrivateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePrivateConnection action.

---

##### `DeregisterServiceConditionKeys`<sup>Required</sup> <a name="DeregisterServiceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.DeregisterServiceConditionKeys"></a>

```typescript
public readonly DeregisterServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterService action.

---

##### `DescribePrivateConnectionConditionKeys`<sup>Required</sup> <a name="DescribePrivateConnectionConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.DescribePrivateConnectionConditionKeys"></a>

```typescript
public readonly DescribePrivateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribePrivateConnection action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `RegisterServiceConditionKeys`<sup>Required</sup> <a name="RegisterServiceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.RegisterServiceConditionKeys"></a>

```typescript
public readonly RegisterServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterService action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAgentSpaceConditionKeys`<sup>Required</sup> <a name="UpdateAgentSpaceConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.UpdateAgentSpaceConditionKeys"></a>

```typescript
public readonly UpdateAgentSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAgentSpace action.

---

##### `UpdatePrivateConnectionCertificateConditionKeys`<sup>Required</sup> <a name="UpdatePrivateConnectionCertificateConditionKeys" id="@cdk_utils/iam.aidevops.AidevopsConditions.property.UpdatePrivateConnectionCertificateConditionKeys"></a>

```typescript
public readonly UpdatePrivateConnectionCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePrivateConnectionCertificate action.

---

### AidevopsOperations <a name="AidevopsOperations" id="@cdk_utils/iam.aidevops.AidevopsOperations"></a>

API operation to required IAM actions mapping for aidevops.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aidevops.AidevopsOperations.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

new aidevops.AidevopsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.AssociateService">AssociateService</a></code> | <code>string[]</code> | IAM actions required for the AssociateService API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateAgentSpace">CreateAgentSpace</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentSpace API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateAsset">CreateAsset</a></code> | <code>string[]</code> | IAM actions required for the CreateAsset API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateAssetFile">CreateAssetFile</a></code> | <code>string[]</code> | IAM actions required for the CreateAssetFile API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateBacklogTask">CreateBacklogTask</a></code> | <code>string[]</code> | IAM actions required for the CreateBacklogTask API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateChat">CreateChat</a></code> | <code>string[]</code> | IAM actions required for the CreateChat API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.CreatePrivateConnection">CreatePrivateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreatePrivateConnection API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateTrigger">CreateTrigger</a></code> | <code>string[]</code> | IAM actions required for the CreateTrigger API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DeleteAgentSpace">DeleteAgentSpace</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentSpace API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DeleteAsset">DeleteAsset</a></code> | <code>string[]</code> | IAM actions required for the DeleteAsset API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DeleteAssetFile">DeleteAssetFile</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssetFile API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DeletePrivateConnection">DeletePrivateConnection</a></code> | <code>string[]</code> | IAM actions required for the DeletePrivateConnection API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DeleteTrigger">DeleteTrigger</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrigger API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DeregisterService">DeregisterService</a></code> | <code>string[]</code> | IAM actions required for the DeregisterService API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DescribePrivateConnection">DescribePrivateConnection</a></code> | <code>string[]</code> | IAM actions required for the DescribePrivateConnection API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DisableOperatorApp">DisableOperatorApp</a></code> | <code>string[]</code> | IAM actions required for the DisableOperatorApp API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.DisassociateService">DisassociateService</a></code> | <code>string[]</code> | IAM actions required for the DisassociateService API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.EnableOperatorApp">EnableOperatorApp</a></code> | <code>string[]</code> | IAM actions required for the EnableOperatorApp API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAgentSpaces">ListAgentSpaces</a></code> | <code>string[]</code> | IAM actions required for the ListAgentSpaces API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssetFiles">ListAssetFiles</a></code> | <code>string[]</code> | IAM actions required for the ListAssetFiles API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssets">ListAssets</a></code> | <code>string[]</code> | IAM actions required for the ListAssets API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssetTypes">ListAssetTypes</a></code> | <code>string[]</code> | IAM actions required for the ListAssetTypes API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssetVersions">ListAssetVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAssetVersions API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssociations">ListAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListAssociations API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListBacklogTasks">ListBacklogTasks</a></code> | <code>string[]</code> | IAM actions required for the ListBacklogTasks API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListChats">ListChats</a></code> | <code>string[]</code> | IAM actions required for the ListChats API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListExecutions">ListExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListExecutions API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListGoals">ListGoals</a></code> | <code>string[]</code> | IAM actions required for the ListGoals API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListJournalRecords">ListJournalRecords</a></code> | <code>string[]</code> | IAM actions required for the ListJournalRecords API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListPendingMessages">ListPendingMessages</a></code> | <code>string[]</code> | IAM actions required for the ListPendingMessages API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListPrivateConnections">ListPrivateConnections</a></code> | <code>string[]</code> | IAM actions required for the ListPrivateConnections API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListRecommendations">ListRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendations API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListTriggers">ListTriggers</a></code> | <code>string[]</code> | IAM actions required for the ListTriggers API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ListWebhooks">ListWebhooks</a></code> | <code>string[]</code> | IAM actions required for the ListWebhooks API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAccountUsage">opGetAccountUsage</a></code> | <code>string[]</code> | IAM actions required for the GetAccountUsage API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAgentSpace">opGetAgentSpace</a></code> | <code>string[]</code> | IAM actions required for the GetAgentSpace API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAsset">opGetAsset</a></code> | <code>string[]</code> | IAM actions required for the GetAsset API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAssetContent">opGetAssetContent</a></code> | <code>string[]</code> | IAM actions required for the GetAssetContent API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAssetFile">opGetAssetFile</a></code> | <code>string[]</code> | IAM actions required for the GetAssetFile API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAssociation">opGetAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetAssociation API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetBacklogTask">opGetBacklogTask</a></code> | <code>string[]</code> | IAM actions required for the GetBacklogTask API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetOperatorApp">opGetOperatorApp</a></code> | <code>string[]</code> | IAM actions required for the GetOperatorApp API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetRecommendation">opGetRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendation API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetService">opGetService</a></code> | <code>string[]</code> | IAM actions required for the GetService API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetTrigger">opGetTrigger</a></code> | <code>string[]</code> | IAM actions required for the GetTrigger API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.RegisterService">RegisterService</a></code> | <code>string[]</code> | IAM actions required for the RegisterService API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.SendMessage">SendMessage</a></code> | <code>string[]</code> | IAM actions required for the SendMessage API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateAgentSpace">UpdateAgentSpace</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentSpace API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateApprovalAction">UpdateApprovalAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateApprovalAction API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateAsset">UpdateAsset</a></code> | <code>string[]</code> | IAM actions required for the UpdateAsset API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateAssetFile">UpdateAssetFile</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssetFile API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateAssociation">UpdateAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssociation API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateBacklogTask">UpdateBacklogTask</a></code> | <code>string[]</code> | IAM actions required for the UpdateBacklogTask API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateGoal">UpdateGoal</a></code> | <code>string[]</code> | IAM actions required for the UpdateGoal API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateOperatorAppIdpConfig">UpdateOperatorAppIdpConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateOperatorAppIdpConfig API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdatePrivateConnectionCertificate">UpdatePrivateConnectionCertificate</a></code> | <code>string[]</code> | IAM actions required for the UpdatePrivateConnectionCertificate API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateRecommendation">UpdateRecommendation</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecommendation API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateTrigger">UpdateTrigger</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrigger API call. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsOperations.property.ValidateAwsAssociations">ValidateAwsAssociations</a></code> | <code>string[]</code> | IAM actions required for the ValidateAwsAssociations API call. |

---

##### `AssociateService`<sup>Required</sup> <a name="AssociateService" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.AssociateService"></a>

```typescript
public readonly AssociateService: string[];
```

- *Type:* string[]

IAM actions required for the AssociateService API call.

---

##### `CreateAgentSpace`<sup>Required</sup> <a name="CreateAgentSpace" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateAgentSpace"></a>

```typescript
public readonly CreateAgentSpace: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentSpace API call.

---

##### `CreateAsset`<sup>Required</sup> <a name="CreateAsset" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateAsset"></a>

```typescript
public readonly CreateAsset: string[];
```

- *Type:* string[]

IAM actions required for the CreateAsset API call.

---

##### `CreateAssetFile`<sup>Required</sup> <a name="CreateAssetFile" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateAssetFile"></a>

```typescript
public readonly CreateAssetFile: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssetFile API call.

---

##### `CreateBacklogTask`<sup>Required</sup> <a name="CreateBacklogTask" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateBacklogTask"></a>

```typescript
public readonly CreateBacklogTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateBacklogTask API call.

---

##### `CreateChat`<sup>Required</sup> <a name="CreateChat" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateChat"></a>

```typescript
public readonly CreateChat: string[];
```

- *Type:* string[]

IAM actions required for the CreateChat API call.

---

##### `CreatePrivateConnection`<sup>Required</sup> <a name="CreatePrivateConnection" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.CreatePrivateConnection"></a>

```typescript
public readonly CreatePrivateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrivateConnection API call.

---

##### `CreateTrigger`<sup>Required</sup> <a name="CreateTrigger" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.CreateTrigger"></a>

```typescript
public readonly CreateTrigger: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrigger API call.

---

##### `DeleteAgentSpace`<sup>Required</sup> <a name="DeleteAgentSpace" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DeleteAgentSpace"></a>

```typescript
public readonly DeleteAgentSpace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentSpace API call.

---

##### `DeleteAsset`<sup>Required</sup> <a name="DeleteAsset" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DeleteAsset"></a>

```typescript
public readonly DeleteAsset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAsset API call.

---

##### `DeleteAssetFile`<sup>Required</sup> <a name="DeleteAssetFile" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DeleteAssetFile"></a>

```typescript
public readonly DeleteAssetFile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssetFile API call.

---

##### `DeletePrivateConnection`<sup>Required</sup> <a name="DeletePrivateConnection" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DeletePrivateConnection"></a>

```typescript
public readonly DeletePrivateConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeletePrivateConnection API call.

---

##### `DeleteTrigger`<sup>Required</sup> <a name="DeleteTrigger" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DeleteTrigger"></a>

```typescript
public readonly DeleteTrigger: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrigger API call.

---

##### `DeregisterService`<sup>Required</sup> <a name="DeregisterService" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DeregisterService"></a>

```typescript
public readonly DeregisterService: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterService API call.

---

##### `DescribePrivateConnection`<sup>Required</sup> <a name="DescribePrivateConnection" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DescribePrivateConnection"></a>

```typescript
public readonly DescribePrivateConnection: string[];
```

- *Type:* string[]

IAM actions required for the DescribePrivateConnection API call.

---

##### `DisableOperatorApp`<sup>Required</sup> <a name="DisableOperatorApp" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DisableOperatorApp"></a>

```typescript
public readonly DisableOperatorApp: string[];
```

- *Type:* string[]

IAM actions required for the DisableOperatorApp API call.

---

##### `DisassociateService`<sup>Required</sup> <a name="DisassociateService" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.DisassociateService"></a>

```typescript
public readonly DisassociateService: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateService API call.

---

##### `EnableOperatorApp`<sup>Required</sup> <a name="EnableOperatorApp" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.EnableOperatorApp"></a>

```typescript
public readonly EnableOperatorApp: string[];
```

- *Type:* string[]

IAM actions required for the EnableOperatorApp API call.

---

##### `ListAgentSpaces`<sup>Required</sup> <a name="ListAgentSpaces" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAgentSpaces"></a>

```typescript
public readonly ListAgentSpaces: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentSpaces API call.

---

##### `ListAssetFiles`<sup>Required</sup> <a name="ListAssetFiles" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssetFiles"></a>

```typescript
public readonly ListAssetFiles: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetFiles API call.

---

##### `ListAssets`<sup>Required</sup> <a name="ListAssets" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssets"></a>

```typescript
public readonly ListAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListAssets API call.

---

##### `ListAssetTypes`<sup>Required</sup> <a name="ListAssetTypes" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssetTypes"></a>

```typescript
public readonly ListAssetTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetTypes API call.

---

##### `ListAssetVersions`<sup>Required</sup> <a name="ListAssetVersions" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssetVersions"></a>

```typescript
public readonly ListAssetVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAssetVersions API call.

---

##### `ListAssociations`<sup>Required</sup> <a name="ListAssociations" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListAssociations"></a>

```typescript
public readonly ListAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociations API call.

---

##### `ListBacklogTasks`<sup>Required</sup> <a name="ListBacklogTasks" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListBacklogTasks"></a>

```typescript
public readonly ListBacklogTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListBacklogTasks API call.

---

##### `ListChats`<sup>Required</sup> <a name="ListChats" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListChats"></a>

```typescript
public readonly ListChats: string[];
```

- *Type:* string[]

IAM actions required for the ListChats API call.

---

##### `ListExecutions`<sup>Required</sup> <a name="ListExecutions" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListExecutions"></a>

```typescript
public readonly ListExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListExecutions API call.

---

##### `ListGoals`<sup>Required</sup> <a name="ListGoals" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListGoals"></a>

```typescript
public readonly ListGoals: string[];
```

- *Type:* string[]

IAM actions required for the ListGoals API call.

---

##### `ListJournalRecords`<sup>Required</sup> <a name="ListJournalRecords" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListJournalRecords"></a>

```typescript
public readonly ListJournalRecords: string[];
```

- *Type:* string[]

IAM actions required for the ListJournalRecords API call.

---

##### `ListPendingMessages`<sup>Required</sup> <a name="ListPendingMessages" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListPendingMessages"></a>

```typescript
public readonly ListPendingMessages: string[];
```

- *Type:* string[]

IAM actions required for the ListPendingMessages API call.

---

##### `ListPrivateConnections`<sup>Required</sup> <a name="ListPrivateConnections" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListPrivateConnections"></a>

```typescript
public readonly ListPrivateConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListPrivateConnections API call.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendations API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTriggers`<sup>Required</sup> <a name="ListTriggers" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListTriggers"></a>

```typescript
public readonly ListTriggers: string[];
```

- *Type:* string[]

IAM actions required for the ListTriggers API call.

---

##### `ListWebhooks`<sup>Required</sup> <a name="ListWebhooks" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ListWebhooks"></a>

```typescript
public readonly ListWebhooks: string[];
```

- *Type:* string[]

IAM actions required for the ListWebhooks API call.

---

##### `opGetAccountUsage`<sup>Required</sup> <a name="opGetAccountUsage" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAccountUsage"></a>

```typescript
public readonly opGetAccountUsage: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountUsage API call.

---

##### `opGetAgentSpace`<sup>Required</sup> <a name="opGetAgentSpace" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAgentSpace"></a>

```typescript
public readonly opGetAgentSpace: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentSpace API call.

---

##### `opGetAsset`<sup>Required</sup> <a name="opGetAsset" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAsset"></a>

```typescript
public readonly opGetAsset: string[];
```

- *Type:* string[]

IAM actions required for the GetAsset API call.

---

##### `opGetAssetContent`<sup>Required</sup> <a name="opGetAssetContent" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAssetContent"></a>

```typescript
public readonly opGetAssetContent: string[];
```

- *Type:* string[]

IAM actions required for the GetAssetContent API call.

---

##### `opGetAssetFile`<sup>Required</sup> <a name="opGetAssetFile" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAssetFile"></a>

```typescript
public readonly opGetAssetFile: string[];
```

- *Type:* string[]

IAM actions required for the GetAssetFile API call.

---

##### `opGetAssociation`<sup>Required</sup> <a name="opGetAssociation" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetAssociation"></a>

```typescript
public readonly opGetAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetAssociation API call.

---

##### `opGetBacklogTask`<sup>Required</sup> <a name="opGetBacklogTask" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetBacklogTask"></a>

```typescript
public readonly opGetBacklogTask: string[];
```

- *Type:* string[]

IAM actions required for the GetBacklogTask API call.

---

##### `opGetOperatorApp`<sup>Required</sup> <a name="opGetOperatorApp" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetOperatorApp"></a>

```typescript
public readonly opGetOperatorApp: string[];
```

- *Type:* string[]

IAM actions required for the GetOperatorApp API call.

---

##### `opGetRecommendation`<sup>Required</sup> <a name="opGetRecommendation" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetRecommendation"></a>

```typescript
public readonly opGetRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendation API call.

---

##### `opGetService`<sup>Required</sup> <a name="opGetService" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetService"></a>

```typescript
public readonly opGetService: string[];
```

- *Type:* string[]

IAM actions required for the GetService API call.

---

##### `opGetTrigger`<sup>Required</sup> <a name="opGetTrigger" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.opGetTrigger"></a>

```typescript
public readonly opGetTrigger: string[];
```

- *Type:* string[]

IAM actions required for the GetTrigger API call.

---

##### `RegisterService`<sup>Required</sup> <a name="RegisterService" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.RegisterService"></a>

```typescript
public readonly RegisterService: string[];
```

- *Type:* string[]

IAM actions required for the RegisterService API call.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.SendMessage"></a>

```typescript
public readonly SendMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendMessage API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAgentSpace`<sup>Required</sup> <a name="UpdateAgentSpace" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateAgentSpace"></a>

```typescript
public readonly UpdateAgentSpace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentSpace API call.

---

##### `UpdateApprovalAction`<sup>Required</sup> <a name="UpdateApprovalAction" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateApprovalAction"></a>

```typescript
public readonly UpdateApprovalAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApprovalAction API call.

---

##### `UpdateAsset`<sup>Required</sup> <a name="UpdateAsset" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateAsset"></a>

```typescript
public readonly UpdateAsset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAsset API call.

---

##### `UpdateAssetFile`<sup>Required</sup> <a name="UpdateAssetFile" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateAssetFile"></a>

```typescript
public readonly UpdateAssetFile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssetFile API call.

---

##### `UpdateAssociation`<sup>Required</sup> <a name="UpdateAssociation" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateAssociation"></a>

```typescript
public readonly UpdateAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssociation API call.

---

##### `UpdateBacklogTask`<sup>Required</sup> <a name="UpdateBacklogTask" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateBacklogTask"></a>

```typescript
public readonly UpdateBacklogTask: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBacklogTask API call.

---

##### `UpdateGoal`<sup>Required</sup> <a name="UpdateGoal" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateGoal"></a>

```typescript
public readonly UpdateGoal: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGoal API call.

---

##### `UpdateOperatorAppIdpConfig`<sup>Required</sup> <a name="UpdateOperatorAppIdpConfig" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateOperatorAppIdpConfig"></a>

```typescript
public readonly UpdateOperatorAppIdpConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOperatorAppIdpConfig API call.

---

##### `UpdatePrivateConnectionCertificate`<sup>Required</sup> <a name="UpdatePrivateConnectionCertificate" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdatePrivateConnectionCertificate"></a>

```typescript
public readonly UpdatePrivateConnectionCertificate: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePrivateConnectionCertificate API call.

---

##### `UpdateRecommendation`<sup>Required</sup> <a name="UpdateRecommendation" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateRecommendation"></a>

```typescript
public readonly UpdateRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecommendation API call.

---

##### `UpdateTrigger`<sup>Required</sup> <a name="UpdateTrigger" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.UpdateTrigger"></a>

```typescript
public readonly UpdateTrigger: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrigger API call.

---

##### `ValidateAwsAssociations`<sup>Required</sup> <a name="ValidateAwsAssociations" id="@cdk_utils/iam.aidevops.AidevopsOperations.property.ValidateAwsAssociations"></a>

```typescript
public readonly ValidateAwsAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ValidateAwsAssociations API call.

---

### AidevopsResources <a name="AidevopsResources" id="@cdk_utils/iam.aidevops.AidevopsResources"></a>

ARN builders, validators, and parsers for aidevops resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aidevops.AidevopsResources.Initializer"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

new aidevops.AidevopsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.agentspace">agentspace</a></code> | Builds an ARN for the agentspace resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.asset">asset</a></code> | Builds an ARN for the asset resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.associations">associations</a></code> | Builds an ARN for the associations resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.isValidAgentspaceArn">isValidAgentspaceArn</a></code> | Validates whether a string is a valid ARN for the agentspace resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.isValidAssetArn">isValidAssetArn</a></code> | Validates whether a string is a valid ARN for the asset resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.isValidAssociationsArn">isValidAssociationsArn</a></code> | Validates whether a string is a valid ARN for the associations resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.isValidPrivateConnectionArn">isValidPrivateConnectionArn</a></code> | Validates whether a string is a valid ARN for the private-connection resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.isValidTriggerArn">isValidTriggerArn</a></code> | Validates whether a string is a valid ARN for the trigger resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.parseAgentspaceArn">parseAgentspaceArn</a></code> | Parses a agentspace ARN into its components. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.parseAssetArn">parseAssetArn</a></code> | Parses a asset ARN into its components. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.parseAssociationsArn">parseAssociationsArn</a></code> | Parses a associations ARN into its components. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.parsePrivateConnectionArn">parsePrivateConnectionArn</a></code> | Parses a private-connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.parseTriggerArn">parseTriggerArn</a></code> | Parses a trigger ARN into its components. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.privateConnection">privateConnection</a></code> | Builds an ARN for the private-connection resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.service">service</a></code> | Builds an ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.aidevops.AidevopsResources.trigger">trigger</a></code> | Builds an ARN for the trigger resource. |

---

##### `agentspace` <a name="agentspace" id="@cdk_utils/iam.aidevops.AidevopsResources.agentspace"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.agentspace(props: AidevopsAgentspaceArnProps)
```

Builds an ARN for the agentspace resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aidevops.AidevopsResources.agentspace.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aidevops.AidevopsAgentspaceArnProps">AidevopsAgentspaceArnProps</a>

---

##### `asset` <a name="asset" id="@cdk_utils/iam.aidevops.AidevopsResources.asset"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.asset(props: AidevopsAssetArnProps)
```

Builds an ARN for the asset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aidevops.AidevopsResources.asset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aidevops.AidevopsAssetArnProps">AidevopsAssetArnProps</a>

---

##### `associations` <a name="associations" id="@cdk_utils/iam.aidevops.AidevopsResources.associations"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.associations(props: AidevopsAssociationsArnProps)
```

Builds an ARN for the associations resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aidevops.AidevopsResources.associations.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aidevops.AidevopsAssociationsArnProps">AidevopsAssociationsArnProps</a>

---

##### `isValidAgentspaceArn` <a name="isValidAgentspaceArn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidAgentspaceArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.isValidAgentspaceArn(arn: string)
```

Validates whether a string is a valid ARN for the agentspace resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidAgentspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssetArn` <a name="isValidAssetArn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidAssetArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.isValidAssetArn(arn: string)
```

Validates whether a string is a valid ARN for the asset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidAssetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssociationsArn` <a name="isValidAssociationsArn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidAssociationsArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.isValidAssociationsArn(arn: string)
```

Validates whether a string is a valid ARN for the associations resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidAssociationsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPrivateConnectionArn` <a name="isValidPrivateConnectionArn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidPrivateConnectionArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.isValidPrivateConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the private-connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidPrivateConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidServiceArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTriggerArn` <a name="isValidTriggerArn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidTriggerArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.isValidTriggerArn(arn: string)
```

Validates whether a string is a valid ARN for the trigger resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.isValidTriggerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgentspaceArn` <a name="parseAgentspaceArn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseAgentspaceArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.parseAgentspaceArn(arn: string)
```

Parses a agentspace ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseAgentspaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssetArn` <a name="parseAssetArn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseAssetArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.parseAssetArn(arn: string)
```

Parses a asset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseAssetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssociationsArn` <a name="parseAssociationsArn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseAssociationsArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.parseAssociationsArn(arn: string)
```

Parses a associations ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseAssociationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePrivateConnectionArn` <a name="parsePrivateConnectionArn" id="@cdk_utils/iam.aidevops.AidevopsResources.parsePrivateConnectionArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.parsePrivateConnectionArn(arn: string)
```

Parses a private-connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.parsePrivateConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseServiceArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTriggerArn` <a name="parseTriggerArn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseTriggerArn"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.parseTriggerArn(arn: string)
```

Parses a trigger ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.aidevops.AidevopsResources.parseTriggerArn.parameter.arn"></a>

- *Type:* string

---

##### `privateConnection` <a name="privateConnection" id="@cdk_utils/iam.aidevops.AidevopsResources.privateConnection"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.privateConnection(props: AidevopsPrivateConnectionArnProps)
```

Builds an ARN for the private-connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aidevops.AidevopsResources.privateConnection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aidevops.AidevopsPrivateConnectionArnProps">AidevopsPrivateConnectionArnProps</a>

---

##### `service` <a name="service" id="@cdk_utils/iam.aidevops.AidevopsResources.service"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.service(props: AidevopsServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aidevops.AidevopsResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aidevops.AidevopsServiceArnProps">AidevopsServiceArnProps</a>

---

##### `trigger` <a name="trigger" id="@cdk_utils/iam.aidevops.AidevopsResources.trigger"></a>

```typescript
import { aidevops } from '@cdk_utils/iam'

aidevops.AidevopsResources.trigger(props: AidevopsTriggerArnProps)
```

Builds an ARN for the trigger resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.aidevops.AidevopsResources.trigger.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.aidevops.AidevopsTriggerArnProps">AidevopsTriggerArnProps</a>

---




