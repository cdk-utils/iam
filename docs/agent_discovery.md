# `agent_discovery` Submodule <a name="`agent_discovery` Submodule" id="@cdk_utils/iam.agent_discovery"></a>



## Classes <a name="Classes" id="Classes"></a>

### AgentDiscoveryActions <a name="AgentDiscoveryActions" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions"></a>

IAM action constants for the agent-discovery service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.Initializer"></a>

```typescript
import { agent_discovery } from '@cdk_utils/iam'

new agent_discovery.AgentDiscoveryActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.SearchPublicRecords">SearchPublicRecords</a></code> | <code>string</code> | [Read] agent-discovery:SearchPublicRecords. |
| <code><a href="#@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `SearchPublicRecords`<sup>Required</sup> <a name="SearchPublicRecords" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.SearchPublicRecords"></a>

```typescript
public readonly SearchPublicRecords: string;
```

- *Type:* string

[Read] agent-discovery:SearchPublicRecords.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### AgentDiscoveryOperations <a name="AgentDiscoveryOperations" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryOperations"></a>

API operation to required IAM actions mapping for agent-discovery.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryOperations.Initializer"></a>

```typescript
import { agent_discovery } from '@cdk_utils/iam'

new agent_discovery.AgentDiscoveryOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.agent_discovery.AgentDiscoveryOperations.property.SearchPublicRecords">SearchPublicRecords</a></code> | <code>string[]</code> | IAM actions required for the SearchPublicRecords API call. |

---

##### `SearchPublicRecords`<sup>Required</sup> <a name="SearchPublicRecords" id="@cdk_utils/iam.agent_discovery.AgentDiscoveryOperations.property.SearchPublicRecords"></a>

```typescript
public readonly SearchPublicRecords: string[];
```

- *Type:* string[]

IAM actions required for the SearchPublicRecords API call.

---


