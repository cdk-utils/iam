# `aws_portal` Submodule <a name="`aws_portal` Submodule" id="@cdk_utils/iam.aws_portal"></a>



## Classes <a name="Classes" id="Classes"></a>

### AWSPortalActions <a name="AWSPortalActions" id="@cdk_utils/iam.aws_portal.AWSPortalActions"></a>

IAM action constants for the aws-portal service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.aws_portal.AWSPortalActions.Initializer"></a>

```typescript
import { aws_portal } from '@cdk_utils/iam'

new aws_portal.AWSPortalActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.actionGetConsoleActionSetEnforced">actionGetConsoleActionSetEnforced</a></code> | <code>string</code> | [Read] aws-portal:GetConsoleActionSetEnforced. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.ModifyAccount">ModifyAccount</a></code> | <code>string</code> | [Write] aws-portal:ModifyAccount. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.ModifyBilling">ModifyBilling</a></code> | <code>string</code> | [Write] aws-portal:ModifyBilling. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.ModifyPaymentMethods">ModifyPaymentMethods</a></code> | <code>string</code> | [Write] aws-portal:ModifyPaymentMethods. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.UpdateConsoleActionSetEnforced">UpdateConsoleActionSetEnforced</a></code> | <code>string</code> | [Write] aws-portal:UpdateConsoleActionSetEnforced. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.ViewAccount">ViewAccount</a></code> | <code>string</code> | [Read] aws-portal:ViewAccount. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.ViewBilling">ViewBilling</a></code> | <code>string</code> | [Read] aws-portal:ViewBilling. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.ViewPaymentMethods">ViewPaymentMethods</a></code> | <code>string</code> | [Read] aws-portal:ViewPaymentMethods. |
| <code><a href="#@cdk_utils/iam.aws_portal.AWSPortalActions.property.ViewUsage">ViewUsage</a></code> | <code>string</code> | [Read] aws-portal:ViewUsage. |

---

##### `actionGetConsoleActionSetEnforced`<sup>Required</sup> <a name="actionGetConsoleActionSetEnforced" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.actionGetConsoleActionSetEnforced"></a>

```typescript
public readonly actionGetConsoleActionSetEnforced: string;
```

- *Type:* string

[Read] aws-portal:GetConsoleActionSetEnforced.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ModifyAccount`<sup>Required</sup> <a name="ModifyAccount" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.ModifyAccount"></a>

```typescript
public readonly ModifyAccount: string;
```

- *Type:* string

[Write] aws-portal:ModifyAccount.

---

##### `ModifyBilling`<sup>Required</sup> <a name="ModifyBilling" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.ModifyBilling"></a>

```typescript
public readonly ModifyBilling: string;
```

- *Type:* string

[Write] aws-portal:ModifyBilling.

---

##### `ModifyPaymentMethods`<sup>Required</sup> <a name="ModifyPaymentMethods" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.ModifyPaymentMethods"></a>

```typescript
public readonly ModifyPaymentMethods: string;
```

- *Type:* string

[Write] aws-portal:ModifyPaymentMethods.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateConsoleActionSetEnforced`<sup>Required</sup> <a name="UpdateConsoleActionSetEnforced" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.UpdateConsoleActionSetEnforced"></a>

```typescript
public readonly UpdateConsoleActionSetEnforced: string;
```

- *Type:* string

[Write] aws-portal:UpdateConsoleActionSetEnforced.

---

##### `ViewAccount`<sup>Required</sup> <a name="ViewAccount" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.ViewAccount"></a>

```typescript
public readonly ViewAccount: string;
```

- *Type:* string

[Read] aws-portal:ViewAccount.

---

##### `ViewBilling`<sup>Required</sup> <a name="ViewBilling" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.ViewBilling"></a>

```typescript
public readonly ViewBilling: string;
```

- *Type:* string

[Read] aws-portal:ViewBilling.

---

##### `ViewPaymentMethods`<sup>Required</sup> <a name="ViewPaymentMethods" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.ViewPaymentMethods"></a>

```typescript
public readonly ViewPaymentMethods: string;
```

- *Type:* string

[Read] aws-portal:ViewPaymentMethods.

---

##### `ViewUsage`<sup>Required</sup> <a name="ViewUsage" id="@cdk_utils/iam.aws_portal.AWSPortalActions.property.ViewUsage"></a>

```typescript
public readonly ViewUsage: string;
```

- *Type:* string

[Read] aws-portal:ViewUsage.

---


