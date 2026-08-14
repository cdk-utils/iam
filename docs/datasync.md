# `datasync` Submodule <a name="`datasync` Submodule" id="@cdk_utils/iam.datasync"></a>


## Structs <a name="Structs" id="Structs"></a>

### DatasyncAgentArnComponents <a name="DatasyncAgentArnComponents" id="@cdk_utils/iam.datasync.DatasyncAgentArnComponents"></a>

Parsed components of a agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncAgentArnComponents.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncAgentArnComponents: datasync.DatasyncAgentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncAgentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DatasyncAgentArnProps <a name="DatasyncAgentArnProps" id="@cdk_utils/iam.datasync.DatasyncAgentArnProps"></a>

Properties for building a agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncAgentArnProps.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncAgentArnProps: datasync.DatasyncAgentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncAgentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatasyncDiscoveryjobArnComponents <a name="DatasyncDiscoveryjobArnComponents" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents"></a>

Parsed components of a discoveryjob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncDiscoveryjobArnComponents: datasync.DatasyncDiscoveryjobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | The DiscoveryJobId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.storageSystemId">storageSystemId</a></code> | <code>string</code> | The StorageSystemId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

The DiscoveryJobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `storageSystemId`<sup>Required</sup> <a name="storageSystemId" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnComponents.property.storageSystemId"></a>

```typescript
public readonly storageSystemId: string;
```

- *Type:* string

The StorageSystemId component.

---

### DatasyncDiscoveryjobArnProps <a name="DatasyncDiscoveryjobArnProps" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps"></a>

Properties for building a discoveryjob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncDiscoveryjobArnProps: datasync.DatasyncDiscoveryjobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | The DiscoveryJobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.storageSystemId">storageSystemId</a></code> | <code>string</code> | The StorageSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

The DiscoveryJobId component of the ARN.

---

##### `storageSystemId`<sup>Required</sup> <a name="storageSystemId" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.storageSystemId"></a>

```typescript
public readonly storageSystemId: string;
```

- *Type:* string

The StorageSystemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatasyncLocationArnComponents <a name="DatasyncLocationArnComponents" id="@cdk_utils/iam.datasync.DatasyncLocationArnComponents"></a>

Parsed components of a location ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncLocationArnComponents.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncLocationArnComponents: datasync.DatasyncLocationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.locationId">locationId</a></code> | <code>string</code> | The LocationId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

The LocationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncLocationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DatasyncLocationArnProps <a name="DatasyncLocationArnProps" id="@cdk_utils/iam.datasync.DatasyncLocationArnProps"></a>

Properties for building a location ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncLocationArnProps.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncLocationArnProps: datasync.DatasyncLocationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.locationId">locationId</a></code> | <code>string</code> | The LocationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

The LocationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncLocationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatasyncStoragesystemArnComponents <a name="DatasyncStoragesystemArnComponents" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents"></a>

Parsed components of a storagesystem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncStoragesystemArnComponents: datasync.DatasyncStoragesystemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.storageSystemId">storageSystemId</a></code> | <code>string</code> | The StorageSystemId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `storageSystemId`<sup>Required</sup> <a name="storageSystemId" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnComponents.property.storageSystemId"></a>

```typescript
public readonly storageSystemId: string;
```

- *Type:* string

The StorageSystemId component.

---

### DatasyncStoragesystemArnProps <a name="DatasyncStoragesystemArnProps" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps"></a>

Properties for building a storagesystem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncStoragesystemArnProps: datasync.DatasyncStoragesystemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.storageSystemId">storageSystemId</a></code> | <code>string</code> | The StorageSystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `storageSystemId`<sup>Required</sup> <a name="storageSystemId" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.storageSystemId"></a>

```typescript
public readonly storageSystemId: string;
```

- *Type:* string

The StorageSystemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatasyncTaskArnComponents <a name="DatasyncTaskArnComponents" id="@cdk_utils/iam.datasync.DatasyncTaskArnComponents"></a>

Parsed components of a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncTaskArnComponents.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncTaskArnComponents: datasync.DatasyncTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.datasync.DatasyncTaskArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### DatasyncTaskArnProps <a name="DatasyncTaskArnProps" id="@cdk_utils/iam.datasync.DatasyncTaskArnProps"></a>

Properties for building a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncTaskArnProps.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncTaskArnProps: datasync.DatasyncTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DatasyncTaskexecutionArnComponents <a name="DatasyncTaskexecutionArnComponents" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents"></a>

Parsed components of a taskexecution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncTaskexecutionArnComponents: datasync.DatasyncTaskexecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### DatasyncTaskexecutionArnProps <a name="DatasyncTaskexecutionArnProps" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps"></a>

Properties for building a taskexecution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

const datasyncTaskexecutionArnProps: datasync.DatasyncTaskexecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.executionId">executionId</a></code> | <code>string</code> | The ExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.executionId"></a>

```typescript
public readonly executionId: string;
```

- *Type:* string

The ExecutionId component of the ARN.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncActions <a name="DatasyncActions" id="@cdk_utils/iam.datasync.DatasyncActions"></a>

IAM action constants for the datasync service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datasync.DatasyncActions.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

new datasync.DatasyncActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.AddStorageSystem">AddStorageSystem</a></code> | <code>string</code> | [Write] datasync:AddStorageSystem. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CancelTaskExecution">CancelTaskExecution</a></code> | <code>string</code> | [Write] datasync:CancelTaskExecution. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateAgent">CreateAgent</a></code> | <code>string</code> | [Write] datasync:CreateAgent. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationAzureBlob">CreateLocationAzureBlob</a></code> | <code>string</code> | [Write] datasync:CreateLocationAzureBlob. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationEfs">CreateLocationEfs</a></code> | <code>string</code> | [Write] datasync:CreateLocationEfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationFsxLustre">CreateLocationFsxLustre</a></code> | <code>string</code> | [Write] datasync:CreateLocationFsxLustre. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationFsxOntap">CreateLocationFsxOntap</a></code> | <code>string</code> | [Write] datasync:CreateLocationFsxOntap. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationFsxOpenZfs">CreateLocationFsxOpenZfs</a></code> | <code>string</code> | [Write] datasync:CreateLocationFsxOpenZfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationFsxWindows">CreateLocationFsxWindows</a></code> | <code>string</code> | [Write] datasync:CreateLocationFsxWindows. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationHdfs">CreateLocationHdfs</a></code> | <code>string</code> | [Write] datasync:CreateLocationHdfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationNfs">CreateLocationNfs</a></code> | <code>string</code> | [Write] datasync:CreateLocationNfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationObjectStorage">CreateLocationObjectStorage</a></code> | <code>string</code> | [Write] datasync:CreateLocationObjectStorage. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationS3">CreateLocationS3</a></code> | <code>string</code> | [Write] datasync:CreateLocationS3. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationSmb">CreateLocationSmb</a></code> | <code>string</code> | [Write] datasync:CreateLocationSmb. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.CreateTask">CreateTask</a></code> | <code>string</code> | [Write] datasync:CreateTask. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DeleteAgent">DeleteAgent</a></code> | <code>string</code> | [Write] datasync:DeleteAgent. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DeleteLocation">DeleteLocation</a></code> | <code>string</code> | [Write] datasync:DeleteLocation. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DeleteTask">DeleteTask</a></code> | <code>string</code> | [Write] datasync:DeleteTask. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeAgent">DescribeAgent</a></code> | <code>string</code> | [Read] datasync:DescribeAgent. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeDiscoveryJob">DescribeDiscoveryJob</a></code> | <code>string</code> | [Read] datasync:DescribeDiscoveryJob. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationAzureBlob">DescribeLocationAzureBlob</a></code> | <code>string</code> | [Read] datasync:DescribeLocationAzureBlob. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationEfs">DescribeLocationEfs</a></code> | <code>string</code> | [Read] datasync:DescribeLocationEfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationFsxLustre">DescribeLocationFsxLustre</a></code> | <code>string</code> | [Read] datasync:DescribeLocationFsxLustre. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationFsxOntap">DescribeLocationFsxOntap</a></code> | <code>string</code> | [Read] datasync:DescribeLocationFsxOntap. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationFsxOpenZfs">DescribeLocationFsxOpenZfs</a></code> | <code>string</code> | [Read] datasync:DescribeLocationFsxOpenZfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationFsxWindows">DescribeLocationFsxWindows</a></code> | <code>string</code> | [Read] datasync:DescribeLocationFsxWindows. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationHdfs">DescribeLocationHdfs</a></code> | <code>string</code> | [Read] datasync:DescribeLocationHdfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationNfs">DescribeLocationNfs</a></code> | <code>string</code> | [Read] datasync:DescribeLocationNfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationObjectStorage">DescribeLocationObjectStorage</a></code> | <code>string</code> | [Read] datasync:DescribeLocationObjectStorage. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationS3">DescribeLocationS3</a></code> | <code>string</code> | [Read] datasync:DescribeLocationS3. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationSmb">DescribeLocationSmb</a></code> | <code>string</code> | [Read] datasync:DescribeLocationSmb. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeStorageSystem">DescribeStorageSystem</a></code> | <code>string</code> | [Read] datasync:DescribeStorageSystem. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeStorageSystemResourceMetrics">DescribeStorageSystemResourceMetrics</a></code> | <code>string</code> | [List] datasync:DescribeStorageSystemResourceMetrics. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeStorageSystemResources">DescribeStorageSystemResources</a></code> | <code>string</code> | [List] datasync:DescribeStorageSystemResources. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeTask">DescribeTask</a></code> | <code>string</code> | [Read] datasync:DescribeTask. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.DescribeTaskExecution">DescribeTaskExecution</a></code> | <code>string</code> | [Read] datasync:DescribeTaskExecution. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.GenerateRecommendations">GenerateRecommendations</a></code> | <code>string</code> | [Write] datasync:GenerateRecommendations. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.ListAgents">ListAgents</a></code> | <code>string</code> | [List] datasync:ListAgents. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.ListDiscoveryJobs">ListDiscoveryJobs</a></code> | <code>string</code> | [List] datasync:ListDiscoveryJobs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.ListLocations">ListLocations</a></code> | <code>string</code> | [List] datasync:ListLocations. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.ListStorageSystems">ListStorageSystems</a></code> | <code>string</code> | [List] datasync:ListStorageSystems. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] datasync:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.ListTaskExecutions">ListTaskExecutions</a></code> | <code>string</code> | [List] datasync:ListTaskExecutions. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.ListTasks">ListTasks</a></code> | <code>string</code> | [List] datasync:ListTasks. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.RemoveStorageSystem">RemoveStorageSystem</a></code> | <code>string</code> | [Write] datasync:RemoveStorageSystem. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.StartDiscoveryJob">StartDiscoveryJob</a></code> | <code>string</code> | [Write] datasync:StartDiscoveryJob. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.StartTaskExecution">StartTaskExecution</a></code> | <code>string</code> | [Write] datasync:StartTaskExecution. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.StopDiscoveryJob">StopDiscoveryJob</a></code> | <code>string</code> | [Write] datasync:StopDiscoveryJob. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] datasync:TagResource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] datasync:UntagResource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateAgent">UpdateAgent</a></code> | <code>string</code> | [Write] datasync:UpdateAgent. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateDiscoveryJob">UpdateDiscoveryJob</a></code> | <code>string</code> | [Write] datasync:UpdateDiscoveryJob. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationAzureBlob">UpdateLocationAzureBlob</a></code> | <code>string</code> | [Write] datasync:UpdateLocationAzureBlob. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationEfs">UpdateLocationEfs</a></code> | <code>string</code> | [Write] datasync:UpdateLocationEfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationFsxLustre">UpdateLocationFsxLustre</a></code> | <code>string</code> | [Write] datasync:UpdateLocationFsxLustre. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationFsxOntap">UpdateLocationFsxOntap</a></code> | <code>string</code> | [Write] datasync:UpdateLocationFsxOntap. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationFsxOpenZfs">UpdateLocationFsxOpenZfs</a></code> | <code>string</code> | [Write] datasync:UpdateLocationFsxOpenZfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationFsxWindows">UpdateLocationFsxWindows</a></code> | <code>string</code> | [Write] datasync:UpdateLocationFsxWindows. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationHdfs">UpdateLocationHdfs</a></code> | <code>string</code> | [Write] datasync:UpdateLocationHdfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationNfs">UpdateLocationNfs</a></code> | <code>string</code> | [Write] datasync:UpdateLocationNfs. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationObjectStorage">UpdateLocationObjectStorage</a></code> | <code>string</code> | [Write] datasync:UpdateLocationObjectStorage. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationS3">UpdateLocationS3</a></code> | <code>string</code> | [Write] datasync:UpdateLocationS3. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationSmb">UpdateLocationSmb</a></code> | <code>string</code> | [Write] datasync:UpdateLocationSmb. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateStorageSystem">UpdateStorageSystem</a></code> | <code>string</code> | [Write] datasync:UpdateStorageSystem. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateTask">UpdateTask</a></code> | <code>string</code> | [Write] datasync:UpdateTask. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncActions.property.UpdateTaskExecution">UpdateTaskExecution</a></code> | <code>string</code> | [Write] datasync:UpdateTaskExecution. |

---

##### `AddStorageSystem`<sup>Required</sup> <a name="AddStorageSystem" id="@cdk_utils/iam.datasync.DatasyncActions.property.AddStorageSystem"></a>

```typescript
public readonly AddStorageSystem: string;
```

- *Type:* string

[Write] datasync:AddStorageSystem.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.datasync.DatasyncActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.datasync.DatasyncActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.datasync.DatasyncActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.datasync.DatasyncActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.datasync.DatasyncActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelTaskExecution`<sup>Required</sup> <a name="CancelTaskExecution" id="@cdk_utils/iam.datasync.DatasyncActions.property.CancelTaskExecution"></a>

```typescript
public readonly CancelTaskExecution: string;
```

- *Type:* string

[Write] datasync:CancelTaskExecution.

---

##### `CreateAgent`<sup>Required</sup> <a name="CreateAgent" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateAgent"></a>

```typescript
public readonly CreateAgent: string;
```

- *Type:* string

[Write] datasync:CreateAgent.

---

##### `CreateLocationAzureBlob`<sup>Required</sup> <a name="CreateLocationAzureBlob" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationAzureBlob"></a>

```typescript
public readonly CreateLocationAzureBlob: string;
```

- *Type:* string

[Write] datasync:CreateLocationAzureBlob.

---

##### `CreateLocationEfs`<sup>Required</sup> <a name="CreateLocationEfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationEfs"></a>

```typescript
public readonly CreateLocationEfs: string;
```

- *Type:* string

[Write] datasync:CreateLocationEfs.

---

##### `CreateLocationFsxLustre`<sup>Required</sup> <a name="CreateLocationFsxLustre" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationFsxLustre"></a>

```typescript
public readonly CreateLocationFsxLustre: string;
```

- *Type:* string

[Write] datasync:CreateLocationFsxLustre.

---

##### `CreateLocationFsxOntap`<sup>Required</sup> <a name="CreateLocationFsxOntap" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationFsxOntap"></a>

```typescript
public readonly CreateLocationFsxOntap: string;
```

- *Type:* string

[Write] datasync:CreateLocationFsxOntap.

---

##### `CreateLocationFsxOpenZfs`<sup>Required</sup> <a name="CreateLocationFsxOpenZfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationFsxOpenZfs"></a>

```typescript
public readonly CreateLocationFsxOpenZfs: string;
```

- *Type:* string

[Write] datasync:CreateLocationFsxOpenZfs.

---

##### `CreateLocationFsxWindows`<sup>Required</sup> <a name="CreateLocationFsxWindows" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationFsxWindows"></a>

```typescript
public readonly CreateLocationFsxWindows: string;
```

- *Type:* string

[Write] datasync:CreateLocationFsxWindows.

---

##### `CreateLocationHdfs`<sup>Required</sup> <a name="CreateLocationHdfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationHdfs"></a>

```typescript
public readonly CreateLocationHdfs: string;
```

- *Type:* string

[Write] datasync:CreateLocationHdfs.

---

##### `CreateLocationNfs`<sup>Required</sup> <a name="CreateLocationNfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationNfs"></a>

```typescript
public readonly CreateLocationNfs: string;
```

- *Type:* string

[Write] datasync:CreateLocationNfs.

---

##### `CreateLocationObjectStorage`<sup>Required</sup> <a name="CreateLocationObjectStorage" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationObjectStorage"></a>

```typescript
public readonly CreateLocationObjectStorage: string;
```

- *Type:* string

[Write] datasync:CreateLocationObjectStorage.

---

##### `CreateLocationS3`<sup>Required</sup> <a name="CreateLocationS3" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationS3"></a>

```typescript
public readonly CreateLocationS3: string;
```

- *Type:* string

[Write] datasync:CreateLocationS3.

---

##### `CreateLocationSmb`<sup>Required</sup> <a name="CreateLocationSmb" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateLocationSmb"></a>

```typescript
public readonly CreateLocationSmb: string;
```

- *Type:* string

[Write] datasync:CreateLocationSmb.

---

##### `CreateTask`<sup>Required</sup> <a name="CreateTask" id="@cdk_utils/iam.datasync.DatasyncActions.property.CreateTask"></a>

```typescript
public readonly CreateTask: string;
```

- *Type:* string

[Write] datasync:CreateTask.

---

##### `DeleteAgent`<sup>Required</sup> <a name="DeleteAgent" id="@cdk_utils/iam.datasync.DatasyncActions.property.DeleteAgent"></a>

```typescript
public readonly DeleteAgent: string;
```

- *Type:* string

[Write] datasync:DeleteAgent.

---

##### `DeleteLocation`<sup>Required</sup> <a name="DeleteLocation" id="@cdk_utils/iam.datasync.DatasyncActions.property.DeleteLocation"></a>

```typescript
public readonly DeleteLocation: string;
```

- *Type:* string

[Write] datasync:DeleteLocation.

---

##### `DeleteTask`<sup>Required</sup> <a name="DeleteTask" id="@cdk_utils/iam.datasync.DatasyncActions.property.DeleteTask"></a>

```typescript
public readonly DeleteTask: string;
```

- *Type:* string

[Write] datasync:DeleteTask.

---

##### `DescribeAgent`<sup>Required</sup> <a name="DescribeAgent" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeAgent"></a>

```typescript
public readonly DescribeAgent: string;
```

- *Type:* string

[Read] datasync:DescribeAgent.

---

##### `DescribeDiscoveryJob`<sup>Required</sup> <a name="DescribeDiscoveryJob" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeDiscoveryJob"></a>

```typescript
public readonly DescribeDiscoveryJob: string;
```

- *Type:* string

[Read] datasync:DescribeDiscoveryJob.

---

##### `DescribeLocationAzureBlob`<sup>Required</sup> <a name="DescribeLocationAzureBlob" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationAzureBlob"></a>

```typescript
public readonly DescribeLocationAzureBlob: string;
```

- *Type:* string

[Read] datasync:DescribeLocationAzureBlob.

---

##### `DescribeLocationEfs`<sup>Required</sup> <a name="DescribeLocationEfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationEfs"></a>

```typescript
public readonly DescribeLocationEfs: string;
```

- *Type:* string

[Read] datasync:DescribeLocationEfs.

---

##### `DescribeLocationFsxLustre`<sup>Required</sup> <a name="DescribeLocationFsxLustre" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationFsxLustre"></a>

```typescript
public readonly DescribeLocationFsxLustre: string;
```

- *Type:* string

[Read] datasync:DescribeLocationFsxLustre.

---

##### `DescribeLocationFsxOntap`<sup>Required</sup> <a name="DescribeLocationFsxOntap" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationFsxOntap"></a>

```typescript
public readonly DescribeLocationFsxOntap: string;
```

- *Type:* string

[Read] datasync:DescribeLocationFsxOntap.

---

##### `DescribeLocationFsxOpenZfs`<sup>Required</sup> <a name="DescribeLocationFsxOpenZfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationFsxOpenZfs"></a>

```typescript
public readonly DescribeLocationFsxOpenZfs: string;
```

- *Type:* string

[Read] datasync:DescribeLocationFsxOpenZfs.

---

##### `DescribeLocationFsxWindows`<sup>Required</sup> <a name="DescribeLocationFsxWindows" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationFsxWindows"></a>

```typescript
public readonly DescribeLocationFsxWindows: string;
```

- *Type:* string

[Read] datasync:DescribeLocationFsxWindows.

---

##### `DescribeLocationHdfs`<sup>Required</sup> <a name="DescribeLocationHdfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationHdfs"></a>

```typescript
public readonly DescribeLocationHdfs: string;
```

- *Type:* string

[Read] datasync:DescribeLocationHdfs.

---

##### `DescribeLocationNfs`<sup>Required</sup> <a name="DescribeLocationNfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationNfs"></a>

```typescript
public readonly DescribeLocationNfs: string;
```

- *Type:* string

[Read] datasync:DescribeLocationNfs.

---

##### `DescribeLocationObjectStorage`<sup>Required</sup> <a name="DescribeLocationObjectStorage" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationObjectStorage"></a>

```typescript
public readonly DescribeLocationObjectStorage: string;
```

- *Type:* string

[Read] datasync:DescribeLocationObjectStorage.

---

##### `DescribeLocationS3`<sup>Required</sup> <a name="DescribeLocationS3" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationS3"></a>

```typescript
public readonly DescribeLocationS3: string;
```

- *Type:* string

[Read] datasync:DescribeLocationS3.

---

##### `DescribeLocationSmb`<sup>Required</sup> <a name="DescribeLocationSmb" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeLocationSmb"></a>

```typescript
public readonly DescribeLocationSmb: string;
```

- *Type:* string

[Read] datasync:DescribeLocationSmb.

---

##### `DescribeStorageSystem`<sup>Required</sup> <a name="DescribeStorageSystem" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeStorageSystem"></a>

```typescript
public readonly DescribeStorageSystem: string;
```

- *Type:* string

[Read] datasync:DescribeStorageSystem.

---

##### `DescribeStorageSystemResourceMetrics`<sup>Required</sup> <a name="DescribeStorageSystemResourceMetrics" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeStorageSystemResourceMetrics"></a>

```typescript
public readonly DescribeStorageSystemResourceMetrics: string;
```

- *Type:* string

[List] datasync:DescribeStorageSystemResourceMetrics.

---

##### `DescribeStorageSystemResources`<sup>Required</sup> <a name="DescribeStorageSystemResources" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeStorageSystemResources"></a>

```typescript
public readonly DescribeStorageSystemResources: string;
```

- *Type:* string

[List] datasync:DescribeStorageSystemResources.

---

##### `DescribeTask`<sup>Required</sup> <a name="DescribeTask" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeTask"></a>

```typescript
public readonly DescribeTask: string;
```

- *Type:* string

[Read] datasync:DescribeTask.

---

##### `DescribeTaskExecution`<sup>Required</sup> <a name="DescribeTaskExecution" id="@cdk_utils/iam.datasync.DatasyncActions.property.DescribeTaskExecution"></a>

```typescript
public readonly DescribeTaskExecution: string;
```

- *Type:* string

[Read] datasync:DescribeTaskExecution.

---

##### `GenerateRecommendations`<sup>Required</sup> <a name="GenerateRecommendations" id="@cdk_utils/iam.datasync.DatasyncActions.property.GenerateRecommendations"></a>

```typescript
public readonly GenerateRecommendations: string;
```

- *Type:* string

[Write] datasync:GenerateRecommendations.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.datasync.DatasyncActions.property.ListAgents"></a>

```typescript
public readonly ListAgents: string;
```

- *Type:* string

[List] datasync:ListAgents.

---

##### `ListDiscoveryJobs`<sup>Required</sup> <a name="ListDiscoveryJobs" id="@cdk_utils/iam.datasync.DatasyncActions.property.ListDiscoveryJobs"></a>

```typescript
public readonly ListDiscoveryJobs: string;
```

- *Type:* string

[List] datasync:ListDiscoveryJobs.

---

##### `ListLocations`<sup>Required</sup> <a name="ListLocations" id="@cdk_utils/iam.datasync.DatasyncActions.property.ListLocations"></a>

```typescript
public readonly ListLocations: string;
```

- *Type:* string

[List] datasync:ListLocations.

---

##### `ListStorageSystems`<sup>Required</sup> <a name="ListStorageSystems" id="@cdk_utils/iam.datasync.DatasyncActions.property.ListStorageSystems"></a>

```typescript
public readonly ListStorageSystems: string;
```

- *Type:* string

[List] datasync:ListStorageSystems.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.datasync.DatasyncActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] datasync:ListTagsForResource.

---

##### `ListTaskExecutions`<sup>Required</sup> <a name="ListTaskExecutions" id="@cdk_utils/iam.datasync.DatasyncActions.property.ListTaskExecutions"></a>

```typescript
public readonly ListTaskExecutions: string;
```

- *Type:* string

[List] datasync:ListTaskExecutions.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.datasync.DatasyncActions.property.ListTasks"></a>

```typescript
public readonly ListTasks: string;
```

- *Type:* string

[List] datasync:ListTasks.

---

##### `RemoveStorageSystem`<sup>Required</sup> <a name="RemoveStorageSystem" id="@cdk_utils/iam.datasync.DatasyncActions.property.RemoveStorageSystem"></a>

```typescript
public readonly RemoveStorageSystem: string;
```

- *Type:* string

[Write] datasync:RemoveStorageSystem.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.datasync.DatasyncActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDiscoveryJob`<sup>Required</sup> <a name="StartDiscoveryJob" id="@cdk_utils/iam.datasync.DatasyncActions.property.StartDiscoveryJob"></a>

```typescript
public readonly StartDiscoveryJob: string;
```

- *Type:* string

[Write] datasync:StartDiscoveryJob.

---

##### `StartTaskExecution`<sup>Required</sup> <a name="StartTaskExecution" id="@cdk_utils/iam.datasync.DatasyncActions.property.StartTaskExecution"></a>

```typescript
public readonly StartTaskExecution: string;
```

- *Type:* string

[Write] datasync:StartTaskExecution.

---

##### `StopDiscoveryJob`<sup>Required</sup> <a name="StopDiscoveryJob" id="@cdk_utils/iam.datasync.DatasyncActions.property.StopDiscoveryJob"></a>

```typescript
public readonly StopDiscoveryJob: string;
```

- *Type:* string

[Write] datasync:StopDiscoveryJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.datasync.DatasyncActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] datasync:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.datasync.DatasyncActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] datasync:UntagResource.

---

##### `UpdateAgent`<sup>Required</sup> <a name="UpdateAgent" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateAgent"></a>

```typescript
public readonly UpdateAgent: string;
```

- *Type:* string

[Write] datasync:UpdateAgent.

---

##### `UpdateDiscoveryJob`<sup>Required</sup> <a name="UpdateDiscoveryJob" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateDiscoveryJob"></a>

```typescript
public readonly UpdateDiscoveryJob: string;
```

- *Type:* string

[Write] datasync:UpdateDiscoveryJob.

---

##### `UpdateLocationAzureBlob`<sup>Required</sup> <a name="UpdateLocationAzureBlob" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationAzureBlob"></a>

```typescript
public readonly UpdateLocationAzureBlob: string;
```

- *Type:* string

[Write] datasync:UpdateLocationAzureBlob.

---

##### `UpdateLocationEfs`<sup>Required</sup> <a name="UpdateLocationEfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationEfs"></a>

```typescript
public readonly UpdateLocationEfs: string;
```

- *Type:* string

[Write] datasync:UpdateLocationEfs.

---

##### `UpdateLocationFsxLustre`<sup>Required</sup> <a name="UpdateLocationFsxLustre" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationFsxLustre"></a>

```typescript
public readonly UpdateLocationFsxLustre: string;
```

- *Type:* string

[Write] datasync:UpdateLocationFsxLustre.

---

##### `UpdateLocationFsxOntap`<sup>Required</sup> <a name="UpdateLocationFsxOntap" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationFsxOntap"></a>

```typescript
public readonly UpdateLocationFsxOntap: string;
```

- *Type:* string

[Write] datasync:UpdateLocationFsxOntap.

---

##### `UpdateLocationFsxOpenZfs`<sup>Required</sup> <a name="UpdateLocationFsxOpenZfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationFsxOpenZfs"></a>

```typescript
public readonly UpdateLocationFsxOpenZfs: string;
```

- *Type:* string

[Write] datasync:UpdateLocationFsxOpenZfs.

---

##### `UpdateLocationFsxWindows`<sup>Required</sup> <a name="UpdateLocationFsxWindows" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationFsxWindows"></a>

```typescript
public readonly UpdateLocationFsxWindows: string;
```

- *Type:* string

[Write] datasync:UpdateLocationFsxWindows.

---

##### `UpdateLocationHdfs`<sup>Required</sup> <a name="UpdateLocationHdfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationHdfs"></a>

```typescript
public readonly UpdateLocationHdfs: string;
```

- *Type:* string

[Write] datasync:UpdateLocationHdfs.

---

##### `UpdateLocationNfs`<sup>Required</sup> <a name="UpdateLocationNfs" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationNfs"></a>

```typescript
public readonly UpdateLocationNfs: string;
```

- *Type:* string

[Write] datasync:UpdateLocationNfs.

---

##### `UpdateLocationObjectStorage`<sup>Required</sup> <a name="UpdateLocationObjectStorage" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationObjectStorage"></a>

```typescript
public readonly UpdateLocationObjectStorage: string;
```

- *Type:* string

[Write] datasync:UpdateLocationObjectStorage.

---

##### `UpdateLocationS3`<sup>Required</sup> <a name="UpdateLocationS3" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationS3"></a>

```typescript
public readonly UpdateLocationS3: string;
```

- *Type:* string

[Write] datasync:UpdateLocationS3.

---

##### `UpdateLocationSmb`<sup>Required</sup> <a name="UpdateLocationSmb" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateLocationSmb"></a>

```typescript
public readonly UpdateLocationSmb: string;
```

- *Type:* string

[Write] datasync:UpdateLocationSmb.

---

##### `UpdateStorageSystem`<sup>Required</sup> <a name="UpdateStorageSystem" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateStorageSystem"></a>

```typescript
public readonly UpdateStorageSystem: string;
```

- *Type:* string

[Write] datasync:UpdateStorageSystem.

---

##### `UpdateTask`<sup>Required</sup> <a name="UpdateTask" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateTask"></a>

```typescript
public readonly UpdateTask: string;
```

- *Type:* string

[Write] datasync:UpdateTask.

---

##### `UpdateTaskExecution`<sup>Required</sup> <a name="UpdateTaskExecution" id="@cdk_utils/iam.datasync.DatasyncActions.property.UpdateTaskExecution"></a>

```typescript
public readonly UpdateTaskExecution: string;
```

- *Type:* string

[Write] datasync:UpdateTaskExecution.

---

### DatasyncConditions <a name="DatasyncConditions" id="@cdk_utils/iam.datasync.DatasyncConditions"></a>

Condition key constants and builders for datasync.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datasync.DatasyncConditions.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

new datasync.DatasyncConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.datasync.DatasyncConditions.requestTag"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datasync.DatasyncConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.datasync.DatasyncConditions.resourceTag"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.datasync.DatasyncConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.tagKeys"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.datasync.DatasyncConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.AddStorageSystemConditionKeys">AddStorageSystemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddStorageSystem action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CancelTaskExecutionConditionKeys">CancelTaskExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelTaskExecution action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateAgentConditionKeys">CreateAgentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgent action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationAzureBlobConditionKeys">CreateLocationAzureBlobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationAzureBlob action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationEfsConditionKeys">CreateLocationEfsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationEfs action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationFsxLustreConditionKeys">CreateLocationFsxLustreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationFsxLustre action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationFsxOntapConditionKeys">CreateLocationFsxOntapConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationFsxOntap action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationFsxOpenZfsConditionKeys">CreateLocationFsxOpenZfsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationFsxOpenZfs action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationFsxWindowsConditionKeys">CreateLocationFsxWindowsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationFsxWindows action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationHdfsConditionKeys">CreateLocationHdfsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationHdfs action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationNfsConditionKeys">CreateLocationNfsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationNfs action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationObjectStorageConditionKeys">CreateLocationObjectStorageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationObjectStorage action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationS3ConditionKeys">CreateLocationS3ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationS3 action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationSmbConditionKeys">CreateLocationSmbConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLocationSmb action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.CreateTaskConditionKeys">CreateTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTask action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.DescribeTaskExecutionConditionKeys">DescribeTaskExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeTaskExecution action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.ListTaskExecutionsConditionKeys">ListTaskExecutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTaskExecutions action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.StartTaskExecutionConditionKeys">StartTaskExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTaskExecution action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncConditions.property.UpdateTaskExecutionConditionKeys">UpdateTaskExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTaskExecution action. |

---

##### `AddStorageSystemConditionKeys`<sup>Required</sup> <a name="AddStorageSystemConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.AddStorageSystemConditionKeys"></a>

```typescript
public readonly AddStorageSystemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddStorageSystem action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.datasync.DatasyncConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.datasync.DatasyncConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.datasync.DatasyncConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CancelTaskExecutionConditionKeys`<sup>Required</sup> <a name="CancelTaskExecutionConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CancelTaskExecutionConditionKeys"></a>

```typescript
public readonly CancelTaskExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelTaskExecution action.

---

##### `CreateAgentConditionKeys`<sup>Required</sup> <a name="CreateAgentConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateAgentConditionKeys"></a>

```typescript
public readonly CreateAgentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgent action.

---

##### `CreateLocationAzureBlobConditionKeys`<sup>Required</sup> <a name="CreateLocationAzureBlobConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationAzureBlobConditionKeys"></a>

```typescript
public readonly CreateLocationAzureBlobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationAzureBlob action.

---

##### `CreateLocationEfsConditionKeys`<sup>Required</sup> <a name="CreateLocationEfsConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationEfsConditionKeys"></a>

```typescript
public readonly CreateLocationEfsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationEfs action.

---

##### `CreateLocationFsxLustreConditionKeys`<sup>Required</sup> <a name="CreateLocationFsxLustreConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationFsxLustreConditionKeys"></a>

```typescript
public readonly CreateLocationFsxLustreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationFsxLustre action.

---

##### `CreateLocationFsxOntapConditionKeys`<sup>Required</sup> <a name="CreateLocationFsxOntapConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationFsxOntapConditionKeys"></a>

```typescript
public readonly CreateLocationFsxOntapConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationFsxOntap action.

---

##### `CreateLocationFsxOpenZfsConditionKeys`<sup>Required</sup> <a name="CreateLocationFsxOpenZfsConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationFsxOpenZfsConditionKeys"></a>

```typescript
public readonly CreateLocationFsxOpenZfsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationFsxOpenZfs action.

---

##### `CreateLocationFsxWindowsConditionKeys`<sup>Required</sup> <a name="CreateLocationFsxWindowsConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationFsxWindowsConditionKeys"></a>

```typescript
public readonly CreateLocationFsxWindowsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationFsxWindows action.

---

##### `CreateLocationHdfsConditionKeys`<sup>Required</sup> <a name="CreateLocationHdfsConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationHdfsConditionKeys"></a>

```typescript
public readonly CreateLocationHdfsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationHdfs action.

---

##### `CreateLocationNfsConditionKeys`<sup>Required</sup> <a name="CreateLocationNfsConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationNfsConditionKeys"></a>

```typescript
public readonly CreateLocationNfsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationNfs action.

---

##### `CreateLocationObjectStorageConditionKeys`<sup>Required</sup> <a name="CreateLocationObjectStorageConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationObjectStorageConditionKeys"></a>

```typescript
public readonly CreateLocationObjectStorageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationObjectStorage action.

---

##### `CreateLocationS3ConditionKeys`<sup>Required</sup> <a name="CreateLocationS3ConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationS3ConditionKeys"></a>

```typescript
public readonly CreateLocationS3ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationS3 action.

---

##### `CreateLocationSmbConditionKeys`<sup>Required</sup> <a name="CreateLocationSmbConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateLocationSmbConditionKeys"></a>

```typescript
public readonly CreateLocationSmbConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLocationSmb action.

---

##### `CreateTaskConditionKeys`<sup>Required</sup> <a name="CreateTaskConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.CreateTaskConditionKeys"></a>

```typescript
public readonly CreateTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTask action.

---

##### `DescribeTaskExecutionConditionKeys`<sup>Required</sup> <a name="DescribeTaskExecutionConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.DescribeTaskExecutionConditionKeys"></a>

```typescript
public readonly DescribeTaskExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeTaskExecution action.

---

##### `ListTaskExecutionsConditionKeys`<sup>Required</sup> <a name="ListTaskExecutionsConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.ListTaskExecutionsConditionKeys"></a>

```typescript
public readonly ListTaskExecutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTaskExecutions action.

---

##### `StartTaskExecutionConditionKeys`<sup>Required</sup> <a name="StartTaskExecutionConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.StartTaskExecutionConditionKeys"></a>

```typescript
public readonly StartTaskExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTaskExecution action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateTaskExecutionConditionKeys`<sup>Required</sup> <a name="UpdateTaskExecutionConditionKeys" id="@cdk_utils/iam.datasync.DatasyncConditions.property.UpdateTaskExecutionConditionKeys"></a>

```typescript
public readonly UpdateTaskExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTaskExecution action.

---

### DatasyncOperations <a name="DatasyncOperations" id="@cdk_utils/iam.datasync.DatasyncOperations"></a>

API operation to required IAM actions mapping for datasync.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datasync.DatasyncOperations.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

new datasync.DatasyncOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CancelTaskExecution">CancelTaskExecution</a></code> | <code>string[]</code> | IAM actions required for the CancelTaskExecution API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateAgent">CreateAgent</a></code> | <code>string[]</code> | IAM actions required for the CreateAgent API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationAzureBlob">CreateLocationAzureBlob</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationAzureBlob API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationEfs">CreateLocationEfs</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationEfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationFsxLustre">CreateLocationFsxLustre</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationFsxLustre API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationFsxOntap">CreateLocationFsxOntap</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationFsxOntap API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationFsxOpenZfs">CreateLocationFsxOpenZfs</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationFsxOpenZfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationFsxWindows">CreateLocationFsxWindows</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationFsxWindows API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationHdfs">CreateLocationHdfs</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationHdfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationNfs">CreateLocationNfs</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationNfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationObjectStorage">CreateLocationObjectStorage</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationObjectStorage API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationS3">CreateLocationS3</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationS3 API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationSmb">CreateLocationSmb</a></code> | <code>string[]</code> | IAM actions required for the CreateLocationSmb API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.CreateTask">CreateTask</a></code> | <code>string[]</code> | IAM actions required for the CreateTask API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DeleteAgent">DeleteAgent</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgent API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DeleteLocation">DeleteLocation</a></code> | <code>string[]</code> | IAM actions required for the DeleteLocation API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DeleteTask">DeleteTask</a></code> | <code>string[]</code> | IAM actions required for the DeleteTask API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeAgent">DescribeAgent</a></code> | <code>string[]</code> | IAM actions required for the DescribeAgent API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationAzureBlob">DescribeLocationAzureBlob</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationAzureBlob API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationEfs">DescribeLocationEfs</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationEfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationFsxLustre">DescribeLocationFsxLustre</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationFsxLustre API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationFsxOntap">DescribeLocationFsxOntap</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationFsxOntap API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationFsxOpenZfs">DescribeLocationFsxOpenZfs</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationFsxOpenZfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationFsxWindows">DescribeLocationFsxWindows</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationFsxWindows API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationHdfs">DescribeLocationHdfs</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationHdfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationNfs">DescribeLocationNfs</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationNfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationObjectStorage">DescribeLocationObjectStorage</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationObjectStorage API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationS3">DescribeLocationS3</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationS3 API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationSmb">DescribeLocationSmb</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocationSmb API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeTask">DescribeTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeTask API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeTaskExecution">DescribeTaskExecution</a></code> | <code>string[]</code> | IAM actions required for the DescribeTaskExecution API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.ListAgents">ListAgents</a></code> | <code>string[]</code> | IAM actions required for the ListAgents API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.ListLocations">ListLocations</a></code> | <code>string[]</code> | IAM actions required for the ListLocations API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.ListTaskExecutions">ListTaskExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListTaskExecutions API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.ListTasks">ListTasks</a></code> | <code>string[]</code> | IAM actions required for the ListTasks API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.StartTaskExecution">StartTaskExecution</a></code> | <code>string[]</code> | IAM actions required for the StartTaskExecution API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateAgent">UpdateAgent</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgent API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationAzureBlob">UpdateLocationAzureBlob</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationAzureBlob API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationEfs">UpdateLocationEfs</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationEfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationFsxLustre">UpdateLocationFsxLustre</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationFsxLustre API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationFsxOntap">UpdateLocationFsxOntap</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationFsxOntap API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationFsxOpenZfs">UpdateLocationFsxOpenZfs</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationFsxOpenZfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationFsxWindows">UpdateLocationFsxWindows</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationFsxWindows API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationHdfs">UpdateLocationHdfs</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationHdfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationNfs">UpdateLocationNfs</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationNfs API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationObjectStorage">UpdateLocationObjectStorage</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationObjectStorage API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationS3">UpdateLocationS3</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationS3 API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationSmb">UpdateLocationSmb</a></code> | <code>string[]</code> | IAM actions required for the UpdateLocationSmb API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateTask">UpdateTask</a></code> | <code>string[]</code> | IAM actions required for the UpdateTask API call. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateTaskExecution">UpdateTaskExecution</a></code> | <code>string[]</code> | IAM actions required for the UpdateTaskExecution API call. |

---

##### `CancelTaskExecution`<sup>Required</sup> <a name="CancelTaskExecution" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CancelTaskExecution"></a>

```typescript
public readonly CancelTaskExecution: string[];
```

- *Type:* string[]

IAM actions required for the CancelTaskExecution API call.

---

##### `CreateAgent`<sup>Required</sup> <a name="CreateAgent" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateAgent"></a>

```typescript
public readonly CreateAgent: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgent API call.

---

##### `CreateLocationAzureBlob`<sup>Required</sup> <a name="CreateLocationAzureBlob" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationAzureBlob"></a>

```typescript
public readonly CreateLocationAzureBlob: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationAzureBlob API call.

---

##### `CreateLocationEfs`<sup>Required</sup> <a name="CreateLocationEfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationEfs"></a>

```typescript
public readonly CreateLocationEfs: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationEfs API call.

---

##### `CreateLocationFsxLustre`<sup>Required</sup> <a name="CreateLocationFsxLustre" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationFsxLustre"></a>

```typescript
public readonly CreateLocationFsxLustre: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationFsxLustre API call.

---

##### `CreateLocationFsxOntap`<sup>Required</sup> <a name="CreateLocationFsxOntap" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationFsxOntap"></a>

```typescript
public readonly CreateLocationFsxOntap: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationFsxOntap API call.

---

##### `CreateLocationFsxOpenZfs`<sup>Required</sup> <a name="CreateLocationFsxOpenZfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationFsxOpenZfs"></a>

```typescript
public readonly CreateLocationFsxOpenZfs: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationFsxOpenZfs API call.

---

##### `CreateLocationFsxWindows`<sup>Required</sup> <a name="CreateLocationFsxWindows" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationFsxWindows"></a>

```typescript
public readonly CreateLocationFsxWindows: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationFsxWindows API call.

---

##### `CreateLocationHdfs`<sup>Required</sup> <a name="CreateLocationHdfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationHdfs"></a>

```typescript
public readonly CreateLocationHdfs: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationHdfs API call.

---

##### `CreateLocationNfs`<sup>Required</sup> <a name="CreateLocationNfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationNfs"></a>

```typescript
public readonly CreateLocationNfs: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationNfs API call.

---

##### `CreateLocationObjectStorage`<sup>Required</sup> <a name="CreateLocationObjectStorage" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationObjectStorage"></a>

```typescript
public readonly CreateLocationObjectStorage: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationObjectStorage API call.

---

##### `CreateLocationS3`<sup>Required</sup> <a name="CreateLocationS3" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationS3"></a>

```typescript
public readonly CreateLocationS3: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationS3 API call.

---

##### `CreateLocationSmb`<sup>Required</sup> <a name="CreateLocationSmb" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateLocationSmb"></a>

```typescript
public readonly CreateLocationSmb: string[];
```

- *Type:* string[]

IAM actions required for the CreateLocationSmb API call.

---

##### `CreateTask`<sup>Required</sup> <a name="CreateTask" id="@cdk_utils/iam.datasync.DatasyncOperations.property.CreateTask"></a>

```typescript
public readonly CreateTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateTask API call.

---

##### `DeleteAgent`<sup>Required</sup> <a name="DeleteAgent" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DeleteAgent"></a>

```typescript
public readonly DeleteAgent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgent API call.

---

##### `DeleteLocation`<sup>Required</sup> <a name="DeleteLocation" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DeleteLocation"></a>

```typescript
public readonly DeleteLocation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLocation API call.

---

##### `DeleteTask`<sup>Required</sup> <a name="DeleteTask" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DeleteTask"></a>

```typescript
public readonly DeleteTask: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTask API call.

---

##### `DescribeAgent`<sup>Required</sup> <a name="DescribeAgent" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeAgent"></a>

```typescript
public readonly DescribeAgent: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAgent API call.

---

##### `DescribeLocationAzureBlob`<sup>Required</sup> <a name="DescribeLocationAzureBlob" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationAzureBlob"></a>

```typescript
public readonly DescribeLocationAzureBlob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationAzureBlob API call.

---

##### `DescribeLocationEfs`<sup>Required</sup> <a name="DescribeLocationEfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationEfs"></a>

```typescript
public readonly DescribeLocationEfs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationEfs API call.

---

##### `DescribeLocationFsxLustre`<sup>Required</sup> <a name="DescribeLocationFsxLustre" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationFsxLustre"></a>

```typescript
public readonly DescribeLocationFsxLustre: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationFsxLustre API call.

---

##### `DescribeLocationFsxOntap`<sup>Required</sup> <a name="DescribeLocationFsxOntap" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationFsxOntap"></a>

```typescript
public readonly DescribeLocationFsxOntap: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationFsxOntap API call.

---

##### `DescribeLocationFsxOpenZfs`<sup>Required</sup> <a name="DescribeLocationFsxOpenZfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationFsxOpenZfs"></a>

```typescript
public readonly DescribeLocationFsxOpenZfs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationFsxOpenZfs API call.

---

##### `DescribeLocationFsxWindows`<sup>Required</sup> <a name="DescribeLocationFsxWindows" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationFsxWindows"></a>

```typescript
public readonly DescribeLocationFsxWindows: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationFsxWindows API call.

---

##### `DescribeLocationHdfs`<sup>Required</sup> <a name="DescribeLocationHdfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationHdfs"></a>

```typescript
public readonly DescribeLocationHdfs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationHdfs API call.

---

##### `DescribeLocationNfs`<sup>Required</sup> <a name="DescribeLocationNfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationNfs"></a>

```typescript
public readonly DescribeLocationNfs: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationNfs API call.

---

##### `DescribeLocationObjectStorage`<sup>Required</sup> <a name="DescribeLocationObjectStorage" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationObjectStorage"></a>

```typescript
public readonly DescribeLocationObjectStorage: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationObjectStorage API call.

---

##### `DescribeLocationS3`<sup>Required</sup> <a name="DescribeLocationS3" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationS3"></a>

```typescript
public readonly DescribeLocationS3: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationS3 API call.

---

##### `DescribeLocationSmb`<sup>Required</sup> <a name="DescribeLocationSmb" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeLocationSmb"></a>

```typescript
public readonly DescribeLocationSmb: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocationSmb API call.

---

##### `DescribeTask`<sup>Required</sup> <a name="DescribeTask" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeTask"></a>

```typescript
public readonly DescribeTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTask API call.

---

##### `DescribeTaskExecution`<sup>Required</sup> <a name="DescribeTaskExecution" id="@cdk_utils/iam.datasync.DatasyncOperations.property.DescribeTaskExecution"></a>

```typescript
public readonly DescribeTaskExecution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTaskExecution API call.

---

##### `ListAgents`<sup>Required</sup> <a name="ListAgents" id="@cdk_utils/iam.datasync.DatasyncOperations.property.ListAgents"></a>

```typescript
public readonly ListAgents: string[];
```

- *Type:* string[]

IAM actions required for the ListAgents API call.

---

##### `ListLocations`<sup>Required</sup> <a name="ListLocations" id="@cdk_utils/iam.datasync.DatasyncOperations.property.ListLocations"></a>

```typescript
public readonly ListLocations: string[];
```

- *Type:* string[]

IAM actions required for the ListLocations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.datasync.DatasyncOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTaskExecutions`<sup>Required</sup> <a name="ListTaskExecutions" id="@cdk_utils/iam.datasync.DatasyncOperations.property.ListTaskExecutions"></a>

```typescript
public readonly ListTaskExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListTaskExecutions API call.

---

##### `ListTasks`<sup>Required</sup> <a name="ListTasks" id="@cdk_utils/iam.datasync.DatasyncOperations.property.ListTasks"></a>

```typescript
public readonly ListTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListTasks API call.

---

##### `StartTaskExecution`<sup>Required</sup> <a name="StartTaskExecution" id="@cdk_utils/iam.datasync.DatasyncOperations.property.StartTaskExecution"></a>

```typescript
public readonly StartTaskExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartTaskExecution API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.datasync.DatasyncOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAgent`<sup>Required</sup> <a name="UpdateAgent" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateAgent"></a>

```typescript
public readonly UpdateAgent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgent API call.

---

##### `UpdateLocationAzureBlob`<sup>Required</sup> <a name="UpdateLocationAzureBlob" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationAzureBlob"></a>

```typescript
public readonly UpdateLocationAzureBlob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationAzureBlob API call.

---

##### `UpdateLocationEfs`<sup>Required</sup> <a name="UpdateLocationEfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationEfs"></a>

```typescript
public readonly UpdateLocationEfs: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationEfs API call.

---

##### `UpdateLocationFsxLustre`<sup>Required</sup> <a name="UpdateLocationFsxLustre" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationFsxLustre"></a>

```typescript
public readonly UpdateLocationFsxLustre: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationFsxLustre API call.

---

##### `UpdateLocationFsxOntap`<sup>Required</sup> <a name="UpdateLocationFsxOntap" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationFsxOntap"></a>

```typescript
public readonly UpdateLocationFsxOntap: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationFsxOntap API call.

---

##### `UpdateLocationFsxOpenZfs`<sup>Required</sup> <a name="UpdateLocationFsxOpenZfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationFsxOpenZfs"></a>

```typescript
public readonly UpdateLocationFsxOpenZfs: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationFsxOpenZfs API call.

---

##### `UpdateLocationFsxWindows`<sup>Required</sup> <a name="UpdateLocationFsxWindows" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationFsxWindows"></a>

```typescript
public readonly UpdateLocationFsxWindows: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationFsxWindows API call.

---

##### `UpdateLocationHdfs`<sup>Required</sup> <a name="UpdateLocationHdfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationHdfs"></a>

```typescript
public readonly UpdateLocationHdfs: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationHdfs API call.

---

##### `UpdateLocationNfs`<sup>Required</sup> <a name="UpdateLocationNfs" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationNfs"></a>

```typescript
public readonly UpdateLocationNfs: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationNfs API call.

---

##### `UpdateLocationObjectStorage`<sup>Required</sup> <a name="UpdateLocationObjectStorage" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationObjectStorage"></a>

```typescript
public readonly UpdateLocationObjectStorage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationObjectStorage API call.

---

##### `UpdateLocationS3`<sup>Required</sup> <a name="UpdateLocationS3" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationS3"></a>

```typescript
public readonly UpdateLocationS3: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationS3 API call.

---

##### `UpdateLocationSmb`<sup>Required</sup> <a name="UpdateLocationSmb" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateLocationSmb"></a>

```typescript
public readonly UpdateLocationSmb: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLocationSmb API call.

---

##### `UpdateTask`<sup>Required</sup> <a name="UpdateTask" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateTask"></a>

```typescript
public readonly UpdateTask: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTask API call.

---

##### `UpdateTaskExecution`<sup>Required</sup> <a name="UpdateTaskExecution" id="@cdk_utils/iam.datasync.DatasyncOperations.property.UpdateTaskExecution"></a>

```typescript
public readonly UpdateTaskExecution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTaskExecution API call.

---

### DatasyncResources <a name="DatasyncResources" id="@cdk_utils/iam.datasync.DatasyncResources"></a>

ARN builders, validators, and parsers for datasync resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.datasync.DatasyncResources.Initializer"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

new datasync.DatasyncResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.agent">agent</a></code> | Builds an ARN for the agent resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.discoveryjob">discoveryjob</a></code> | Builds an ARN for the discoveryjob resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.isValidAgentArn">isValidAgentArn</a></code> | Validates whether a string is a valid ARN for the agent resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.isValidDiscoveryjobArn">isValidDiscoveryjobArn</a></code> | Validates whether a string is a valid ARN for the discoveryjob resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.isValidLocationArn">isValidLocationArn</a></code> | Validates whether a string is a valid ARN for the location resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.isValidStoragesystemArn">isValidStoragesystemArn</a></code> | Validates whether a string is a valid ARN for the storagesystem resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.isValidTaskArn">isValidTaskArn</a></code> | Validates whether a string is a valid ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.isValidTaskexecutionArn">isValidTaskexecutionArn</a></code> | Validates whether a string is a valid ARN for the taskexecution resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.location">location</a></code> | Builds an ARN for the location resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.parseAgentArn">parseAgentArn</a></code> | Parses a agent ARN into its components. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.parseDiscoveryjobArn">parseDiscoveryjobArn</a></code> | Parses a discoveryjob ARN into its components. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.parseLocationArn">parseLocationArn</a></code> | Parses a location ARN into its components. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.parseStoragesystemArn">parseStoragesystemArn</a></code> | Parses a storagesystem ARN into its components. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.parseTaskArn">parseTaskArn</a></code> | Parses a task ARN into its components. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.parseTaskexecutionArn">parseTaskexecutionArn</a></code> | Parses a taskexecution ARN into its components. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.storagesystem">storagesystem</a></code> | Builds an ARN for the storagesystem resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.task">task</a></code> | Builds an ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.datasync.DatasyncResources.taskexecution">taskexecution</a></code> | Builds an ARN for the taskexecution resource. |

---

##### `agent` <a name="agent" id="@cdk_utils/iam.datasync.DatasyncResources.agent"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.agent(props: DatasyncAgentArnProps)
```

Builds an ARN for the agent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.datasync.DatasyncResources.agent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.datasync.DatasyncAgentArnProps">DatasyncAgentArnProps</a>

---

##### `discoveryjob` <a name="discoveryjob" id="@cdk_utils/iam.datasync.DatasyncResources.discoveryjob"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.discoveryjob(props: DatasyncDiscoveryjobArnProps)
```

Builds an ARN for the discoveryjob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.datasync.DatasyncResources.discoveryjob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.datasync.DatasyncDiscoveryjobArnProps">DatasyncDiscoveryjobArnProps</a>

---

##### `isValidAgentArn` <a name="isValidAgentArn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidAgentArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.isValidAgentArn(arn: string)
```

Validates whether a string is a valid ARN for the agent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDiscoveryjobArn` <a name="isValidDiscoveryjobArn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidDiscoveryjobArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.isValidDiscoveryjobArn(arn: string)
```

Validates whether a string is a valid ARN for the discoveryjob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidDiscoveryjobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLocationArn` <a name="isValidLocationArn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidLocationArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.isValidLocationArn(arn: string)
```

Validates whether a string is a valid ARN for the location resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidLocationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStoragesystemArn` <a name="isValidStoragesystemArn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidStoragesystemArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.isValidStoragesystemArn(arn: string)
```

Validates whether a string is a valid ARN for the storagesystem resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidStoragesystemArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskArn` <a name="isValidTaskArn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidTaskArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.isValidTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskexecutionArn` <a name="isValidTaskexecutionArn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidTaskexecutionArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.isValidTaskexecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the taskexecution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.isValidTaskexecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `location` <a name="location" id="@cdk_utils/iam.datasync.DatasyncResources.location"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.location(props: DatasyncLocationArnProps)
```

Builds an ARN for the location resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.datasync.DatasyncResources.location.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.datasync.DatasyncLocationArnProps">DatasyncLocationArnProps</a>

---

##### `parseAgentArn` <a name="parseAgentArn" id="@cdk_utils/iam.datasync.DatasyncResources.parseAgentArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.parseAgentArn(arn: string)
```

Parses a agent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.parseAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDiscoveryjobArn` <a name="parseDiscoveryjobArn" id="@cdk_utils/iam.datasync.DatasyncResources.parseDiscoveryjobArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.parseDiscoveryjobArn(arn: string)
```

Parses a discoveryjob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.parseDiscoveryjobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLocationArn` <a name="parseLocationArn" id="@cdk_utils/iam.datasync.DatasyncResources.parseLocationArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.parseLocationArn(arn: string)
```

Parses a location ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.parseLocationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStoragesystemArn` <a name="parseStoragesystemArn" id="@cdk_utils/iam.datasync.DatasyncResources.parseStoragesystemArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.parseStoragesystemArn(arn: string)
```

Parses a storagesystem ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.parseStoragesystemArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskArn` <a name="parseTaskArn" id="@cdk_utils/iam.datasync.DatasyncResources.parseTaskArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.parseTaskArn(arn: string)
```

Parses a task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.parseTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskexecutionArn` <a name="parseTaskexecutionArn" id="@cdk_utils/iam.datasync.DatasyncResources.parseTaskexecutionArn"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.parseTaskexecutionArn(arn: string)
```

Parses a taskexecution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.datasync.DatasyncResources.parseTaskexecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `storagesystem` <a name="storagesystem" id="@cdk_utils/iam.datasync.DatasyncResources.storagesystem"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.storagesystem(props: DatasyncStoragesystemArnProps)
```

Builds an ARN for the storagesystem resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.datasync.DatasyncResources.storagesystem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.datasync.DatasyncStoragesystemArnProps">DatasyncStoragesystemArnProps</a>

---

##### `task` <a name="task" id="@cdk_utils/iam.datasync.DatasyncResources.task"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.task(props: DatasyncTaskArnProps)
```

Builds an ARN for the task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.datasync.DatasyncResources.task.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.datasync.DatasyncTaskArnProps">DatasyncTaskArnProps</a>

---

##### `taskexecution` <a name="taskexecution" id="@cdk_utils/iam.datasync.DatasyncResources.taskexecution"></a>

```typescript
import { datasync } from '@cdk_utils/iam'

datasync.DatasyncResources.taskexecution(props: DatasyncTaskexecutionArnProps)
```

Builds an ARN for the taskexecution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.datasync.DatasyncResources.taskexecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.datasync.DatasyncTaskexecutionArnProps">DatasyncTaskexecutionArnProps</a>

---




