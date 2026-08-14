# `eks_mcp` Submodule <a name="`eks_mcp` Submodule" id="@cdk_utils/iam.eks_mcp"></a>



## Classes <a name="Classes" id="Classes"></a>

### EKSMcpActions <a name="EKSMcpActions" id="@cdk_utils/iam.eks_mcp.EKSMcpActions"></a>

IAM action constants for the eks-mcp service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.Initializer"></a>

```typescript
import { eks_mcp } from '@cdk_utils/iam'

new eks_mcp.EKSMcpActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.CallPrivilegedTool">CallPrivilegedTool</a></code> | <code>string</code> | [Write] eks-mcp:CallPrivilegedTool. |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.CallReadOnlyTool">CallReadOnlyTool</a></code> | <code>string</code> | [Read] eks-mcp:CallReadOnlyTool. |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.InvokeMcp">InvokeMcp</a></code> | <code>string</code> | [Read] eks-mcp:InvokeMcp. |
| <code><a href="#@cdk_utils/iam.eks_mcp.EKSMcpActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CallPrivilegedTool`<sup>Required</sup> <a name="CallPrivilegedTool" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.CallPrivilegedTool"></a>

```typescript
public readonly CallPrivilegedTool: string;
```

- *Type:* string

[Write] eks-mcp:CallPrivilegedTool.

---

##### `CallReadOnlyTool`<sup>Required</sup> <a name="CallReadOnlyTool" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.CallReadOnlyTool"></a>

```typescript
public readonly CallReadOnlyTool: string;
```

- *Type:* string

[Read] eks-mcp:CallReadOnlyTool.

---

##### `InvokeMcp`<sup>Required</sup> <a name="InvokeMcp" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.InvokeMcp"></a>

```typescript
public readonly InvokeMcp: string;
```

- *Type:* string

[Read] eks-mcp:InvokeMcp.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.eks_mcp.EKSMcpActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---


