# `freetier` Submodule <a name="`freetier` Submodule" id="@cdk_utils/iam.freetier"></a>



## Classes <a name="Classes" id="Classes"></a>

### FreetierActions <a name="FreetierActions" id="@cdk_utils/iam.freetier.FreetierActions"></a>

IAM action constants for the freetier service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.freetier.FreetierActions.Initializer"></a>

```typescript
import { freetier } from '@cdk_utils/iam'

new freetier.FreetierActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.actionGetAccountActivity">actionGetAccountActivity</a></code> | <code>string</code> | [Read] freetier:GetAccountActivity. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.actionGetAccountPlanState">actionGetAccountPlanState</a></code> | <code>string</code> | [Read] freetier:GetAccountPlanState. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.actionGetFreeTierAlertPreference">actionGetFreeTierAlertPreference</a></code> | <code>string</code> | [Read] freetier:GetFreeTierAlertPreference. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.actionGetFreeTierUsage">actionGetFreeTierUsage</a></code> | <code>string</code> | [Read] freetier:GetFreeTierUsage. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.ListAccountActivities">ListAccountActivities</a></code> | <code>string</code> | [List] freetier:ListAccountActivities. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.PutFreeTierAlertPreference">PutFreeTierAlertPreference</a></code> | <code>string</code> | [Write] freetier:PutFreeTierAlertPreference. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierActions.property.UpgradeAccountPlan">UpgradeAccountPlan</a></code> | <code>string</code> | [Write] freetier:UpgradeAccountPlan. |

---

##### `actionGetAccountActivity`<sup>Required</sup> <a name="actionGetAccountActivity" id="@cdk_utils/iam.freetier.FreetierActions.property.actionGetAccountActivity"></a>

```typescript
public readonly actionGetAccountActivity: string;
```

- *Type:* string

[Read] freetier:GetAccountActivity.

---

##### `actionGetAccountPlanState`<sup>Required</sup> <a name="actionGetAccountPlanState" id="@cdk_utils/iam.freetier.FreetierActions.property.actionGetAccountPlanState"></a>

```typescript
public readonly actionGetAccountPlanState: string;
```

- *Type:* string

[Read] freetier:GetAccountPlanState.

---

##### `actionGetFreeTierAlertPreference`<sup>Required</sup> <a name="actionGetFreeTierAlertPreference" id="@cdk_utils/iam.freetier.FreetierActions.property.actionGetFreeTierAlertPreference"></a>

```typescript
public readonly actionGetFreeTierAlertPreference: string;
```

- *Type:* string

[Read] freetier:GetFreeTierAlertPreference.

---

##### `actionGetFreeTierUsage`<sup>Required</sup> <a name="actionGetFreeTierUsage" id="@cdk_utils/iam.freetier.FreetierActions.property.actionGetFreeTierUsage"></a>

```typescript
public readonly actionGetFreeTierUsage: string;
```

- *Type:* string

[Read] freetier:GetFreeTierUsage.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.freetier.FreetierActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.freetier.FreetierActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.freetier.FreetierActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.freetier.FreetierActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.freetier.FreetierActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListAccountActivities`<sup>Required</sup> <a name="ListAccountActivities" id="@cdk_utils/iam.freetier.FreetierActions.property.ListAccountActivities"></a>

```typescript
public readonly ListAccountActivities: string;
```

- *Type:* string

[List] freetier:ListAccountActivities.

---

##### `PutFreeTierAlertPreference`<sup>Required</sup> <a name="PutFreeTierAlertPreference" id="@cdk_utils/iam.freetier.FreetierActions.property.PutFreeTierAlertPreference"></a>

```typescript
public readonly PutFreeTierAlertPreference: string;
```

- *Type:* string

[Write] freetier:PutFreeTierAlertPreference.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.freetier.FreetierActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpgradeAccountPlan`<sup>Required</sup> <a name="UpgradeAccountPlan" id="@cdk_utils/iam.freetier.FreetierActions.property.UpgradeAccountPlan"></a>

```typescript
public readonly UpgradeAccountPlan: string;
```

- *Type:* string

[Write] freetier:UpgradeAccountPlan.

---

### FreetierOperations <a name="FreetierOperations" id="@cdk_utils/iam.freetier.FreetierOperations"></a>

API operation to required IAM actions mapping for freetier.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.freetier.FreetierOperations.Initializer"></a>

```typescript
import { freetier } from '@cdk_utils/iam'

new freetier.FreetierOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.freetier.FreetierOperations.property.ListAccountActivities">ListAccountActivities</a></code> | <code>string[]</code> | IAM actions required for the ListAccountActivities API call. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierOperations.property.opGetAccountActivity">opGetAccountActivity</a></code> | <code>string[]</code> | IAM actions required for the GetAccountActivity API call. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierOperations.property.opGetAccountPlanState">opGetAccountPlanState</a></code> | <code>string[]</code> | IAM actions required for the GetAccountPlanState API call. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierOperations.property.opGetFreeTierUsage">opGetFreeTierUsage</a></code> | <code>string[]</code> | IAM actions required for the GetFreeTierUsage API call. |
| <code><a href="#@cdk_utils/iam.freetier.FreetierOperations.property.UpgradeAccountPlan">UpgradeAccountPlan</a></code> | <code>string[]</code> | IAM actions required for the UpgradeAccountPlan API call. |

---

##### `ListAccountActivities`<sup>Required</sup> <a name="ListAccountActivities" id="@cdk_utils/iam.freetier.FreetierOperations.property.ListAccountActivities"></a>

```typescript
public readonly ListAccountActivities: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountActivities API call.

---

##### `opGetAccountActivity`<sup>Required</sup> <a name="opGetAccountActivity" id="@cdk_utils/iam.freetier.FreetierOperations.property.opGetAccountActivity"></a>

```typescript
public readonly opGetAccountActivity: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountActivity API call.

---

##### `opGetAccountPlanState`<sup>Required</sup> <a name="opGetAccountPlanState" id="@cdk_utils/iam.freetier.FreetierOperations.property.opGetAccountPlanState"></a>

```typescript
public readonly opGetAccountPlanState: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountPlanState API call.

---

##### `opGetFreeTierUsage`<sup>Required</sup> <a name="opGetFreeTierUsage" id="@cdk_utils/iam.freetier.FreetierOperations.property.opGetFreeTierUsage"></a>

```typescript
public readonly opGetFreeTierUsage: string[];
```

- *Type:* string[]

IAM actions required for the GetFreeTierUsage API call.

---

##### `UpgradeAccountPlan`<sup>Required</sup> <a name="UpgradeAccountPlan" id="@cdk_utils/iam.freetier.FreetierOperations.property.UpgradeAccountPlan"></a>

```typescript
public readonly UpgradeAccountPlan: string[];
```

- *Type:* string[]

IAM actions required for the UpgradeAccountPlan API call.

---


