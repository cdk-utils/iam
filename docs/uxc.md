# `uxc` Submodule <a name="`uxc` Submodule" id="@cdk_utils/iam.uxc"></a>



## Classes <a name="Classes" id="Classes"></a>

### UxcActions <a name="UxcActions" id="@cdk_utils/iam.uxc.UxcActions"></a>

IAM action constants for the uxc service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.uxc.UxcActions.Initializer"></a>

```typescript
import { uxc } from '@cdk_utils/iam'

new uxc.UxcActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.actionGetAccountColor">actionGetAccountColor</a></code> | <code>string</code> | [Read] uxc:GetAccountColor. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.actionGetAccountCustomizations">actionGetAccountCustomizations</a></code> | <code>string</code> | [Read] uxc:GetAccountCustomizations. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.DeleteAccountColor">DeleteAccountColor</a></code> | <code>string</code> | [Write] uxc:DeleteAccountColor. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.ListServices">ListServices</a></code> | <code>string</code> | [Read] uxc:ListServices. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.PutAccountColor">PutAccountColor</a></code> | <code>string</code> | [Write] uxc:PutAccountColor. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.uxc.UxcActions.property.UpdateAccountCustomizations">UpdateAccountCustomizations</a></code> | <code>string</code> | [Write] uxc:UpdateAccountCustomizations. |

---

##### `actionGetAccountColor`<sup>Required</sup> <a name="actionGetAccountColor" id="@cdk_utils/iam.uxc.UxcActions.property.actionGetAccountColor"></a>

```typescript
public readonly actionGetAccountColor: string;
```

- *Type:* string

[Read] uxc:GetAccountColor.

---

##### `actionGetAccountCustomizations`<sup>Required</sup> <a name="actionGetAccountCustomizations" id="@cdk_utils/iam.uxc.UxcActions.property.actionGetAccountCustomizations"></a>

```typescript
public readonly actionGetAccountCustomizations: string;
```

- *Type:* string

[Read] uxc:GetAccountCustomizations.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.uxc.UxcActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.uxc.UxcActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.uxc.UxcActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.uxc.UxcActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.uxc.UxcActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteAccountColor`<sup>Required</sup> <a name="DeleteAccountColor" id="@cdk_utils/iam.uxc.UxcActions.property.DeleteAccountColor"></a>

```typescript
public readonly DeleteAccountColor: string;
```

- *Type:* string

[Write] uxc:DeleteAccountColor.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.uxc.UxcActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[Read] uxc:ListServices.

---

##### `PutAccountColor`<sup>Required</sup> <a name="PutAccountColor" id="@cdk_utils/iam.uxc.UxcActions.property.PutAccountColor"></a>

```typescript
public readonly PutAccountColor: string;
```

- *Type:* string

[Write] uxc:PutAccountColor.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.uxc.UxcActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateAccountCustomizations`<sup>Required</sup> <a name="UpdateAccountCustomizations" id="@cdk_utils/iam.uxc.UxcActions.property.UpdateAccountCustomizations"></a>

```typescript
public readonly UpdateAccountCustomizations: string;
```

- *Type:* string

[Write] uxc:UpdateAccountCustomizations.

---

### UxcOperations <a name="UxcOperations" id="@cdk_utils/iam.uxc.UxcOperations"></a>

API operation to required IAM actions mapping for uxc.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.uxc.UxcOperations.Initializer"></a>

```typescript
import { uxc } from '@cdk_utils/iam'

new uxc.UxcOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.uxc.UxcOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.uxc.UxcOperations.property.opGetAccountCustomizations">opGetAccountCustomizations</a></code> | <code>string[]</code> | IAM actions required for the GetAccountCustomizations API call. |
| <code><a href="#@cdk_utils/iam.uxc.UxcOperations.property.UpdateAccountCustomizations">UpdateAccountCustomizations</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountCustomizations API call. |

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.uxc.UxcOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `opGetAccountCustomizations`<sup>Required</sup> <a name="opGetAccountCustomizations" id="@cdk_utils/iam.uxc.UxcOperations.property.opGetAccountCustomizations"></a>

```typescript
public readonly opGetAccountCustomizations: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountCustomizations API call.

---

##### `UpdateAccountCustomizations`<sup>Required</sup> <a name="UpdateAccountCustomizations" id="@cdk_utils/iam.uxc.UxcOperations.property.UpdateAccountCustomizations"></a>

```typescript
public readonly UpdateAccountCustomizations: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountCustomizations API call.

---


