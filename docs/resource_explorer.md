# `resource_explorer` Submodule <a name="`resource_explorer` Submodule" id="@cdk_utils/iam.resource_explorer"></a>



## Classes <a name="Classes" id="Classes"></a>

### ResourceExplorerActions <a name="ResourceExplorerActions" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions"></a>

IAM action constants for the resource-explorer service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.Initializer"></a>

```typescript
import { resource_explorer } from '@cdk_utils/iam'

new resource_explorer.ResourceExplorerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.ListResources">ListResources</a></code> | <code>string</code> | [List] resource-explorer:ListResources. |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.ListResourceTypes">ListResourceTypes</a></code> | <code>string</code> | [List] resource-explorer:ListResourceTypes. |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.ListTags">ListTags</a></code> | <code>string</code> | [Read] resource-explorer:ListTags. |
| <code><a href="#@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.ListResources"></a>

```typescript
public readonly ListResources: string;
```

- *Type:* string

[List] resource-explorer:ListResources.

---

##### `ListResourceTypes`<sup>Required</sup> <a name="ListResourceTypes" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.ListResourceTypes"></a>

```typescript
public readonly ListResourceTypes: string;
```

- *Type:* string

[List] resource-explorer:ListResourceTypes.

---

##### `ListTags`<sup>Required</sup> <a name="ListTags" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.ListTags"></a>

```typescript
public readonly ListTags: string;
```

- *Type:* string

[Read] resource-explorer:ListTags.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.resource_explorer.ResourceExplorerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---


