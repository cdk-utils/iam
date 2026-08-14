# `network_security_director` Submodule <a name="`network_security_director` Submodule" id="@cdk_utils/iam.network_security_director"></a>



## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityDirectorActions <a name="NetworkSecurityDirectorActions" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions"></a>

IAM action constants for the network-security-director service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.Initializer"></a>

```typescript
import { network_security_director } from '@cdk_utils/iam'

new network_security_director.NetworkSecurityDirectorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.actionGetFinding">actionGetFinding</a></code> | <code>string</code> | [Read] network-security-director:GetFinding. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.actionGetResource">actionGetResource</a></code> | <code>string</code> | [Read] network-security-director:GetResource. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListAccountSummaries">ListAccountSummaries</a></code> | <code>string</code> | [List] network-security-director:ListAccountSummaries. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [List] network-security-director:ListFindings. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListInsights">ListInsights</a></code> | <code>string</code> | [List] network-security-director:ListInsights. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListRemediations">ListRemediations</a></code> | <code>string</code> | [List] network-security-director:ListRemediations. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListResources">ListResources</a></code> | <code>string</code> | [List] network-security-director:ListResources. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.UpdateFinding">UpdateFinding</a></code> | <code>string</code> | [Write] network-security-director:UpdateFinding. |

---

##### `actionGetFinding`<sup>Required</sup> <a name="actionGetFinding" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.actionGetFinding"></a>

```typescript
public readonly actionGetFinding: string;
```

- *Type:* string

[Read] network-security-director:GetFinding.

---

##### `actionGetResource`<sup>Required</sup> <a name="actionGetResource" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.actionGetResource"></a>

```typescript
public readonly actionGetResource: string;
```

- *Type:* string

[Read] network-security-director:GetResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListAccountSummaries`<sup>Required</sup> <a name="ListAccountSummaries" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListAccountSummaries"></a>

```typescript
public readonly ListAccountSummaries: string;
```

- *Type:* string

[List] network-security-director:ListAccountSummaries.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[List] network-security-director:ListFindings.

---

##### `ListInsights`<sup>Required</sup> <a name="ListInsights" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListInsights"></a>

```typescript
public readonly ListInsights: string;
```

- *Type:* string

[List] network-security-director:ListInsights.

---

##### `ListRemediations`<sup>Required</sup> <a name="ListRemediations" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListRemediations"></a>

```typescript
public readonly ListRemediations: string;
```

- *Type:* string

[List] network-security-director:ListRemediations.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.ListResources"></a>

```typescript
public readonly ListResources: string;
```

- *Type:* string

[List] network-security-director:ListResources.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateFinding`<sup>Required</sup> <a name="UpdateFinding" id="@cdk_utils/iam.network_security_director.NetworkSecurityDirectorActions.property.UpdateFinding"></a>

```typescript
public readonly UpdateFinding: string;
```

- *Type:* string

[Write] network-security-director:UpdateFinding.

---


