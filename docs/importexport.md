# `importexport` Submodule <a name="`importexport` Submodule" id="@cdk_utils/iam.importexport"></a>



## Classes <a name="Classes" id="Classes"></a>

### ImportexportActions <a name="ImportexportActions" id="@cdk_utils/iam.importexport.ImportexportActions"></a>

IAM action constants for the importexport service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.importexport.ImportexportActions.Initializer"></a>

```typescript
import { importexport } from '@cdk_utils/iam'

new importexport.ImportexportActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.actionGetShippingLabel">actionGetShippingLabel</a></code> | <code>string</code> | [Read] importexport:GetShippingLabel. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.actionGetStatus">actionGetStatus</a></code> | <code>string</code> | [Read] importexport:GetStatus. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] importexport:CancelJob. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] importexport:CreateJob. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] importexport:ListJobs. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportActions.property.UpdateJob">UpdateJob</a></code> | <code>string</code> | [Write] importexport:UpdateJob. |

---

##### `actionGetShippingLabel`<sup>Required</sup> <a name="actionGetShippingLabel" id="@cdk_utils/iam.importexport.ImportexportActions.property.actionGetShippingLabel"></a>

```typescript
public readonly actionGetShippingLabel: string;
```

- *Type:* string

[Read] importexport:GetShippingLabel.

---

##### `actionGetStatus`<sup>Required</sup> <a name="actionGetStatus" id="@cdk_utils/iam.importexport.ImportexportActions.property.actionGetStatus"></a>

```typescript
public readonly actionGetStatus: string;
```

- *Type:* string

[Read] importexport:GetStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.importexport.ImportexportActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.importexport.ImportexportActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.importexport.ImportexportActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.importexport.ImportexportActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.importexport.ImportexportActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.importexport.ImportexportActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] importexport:CancelJob.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.importexport.ImportexportActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] importexport:CreateJob.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.importexport.ImportexportActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] importexport:ListJobs.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.importexport.ImportexportActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.importexport.ImportexportActions.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string;
```

- *Type:* string

[Write] importexport:UpdateJob.

---

### ImportexportOperations <a name="ImportexportOperations" id="@cdk_utils/iam.importexport.ImportexportOperations"></a>

API operation to required IAM actions mapping for importexport.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.importexport.ImportexportOperations.Initializer"></a>

```typescript
import { importexport } from '@cdk_utils/iam'

new importexport.ImportexportOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportOperations.property.CancelJob">CancelJob</a></code> | <code>string[]</code> | IAM actions required for the CancelJob API call. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportOperations.property.CreateJob">CreateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateJob API call. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportOperations.property.opGetShippingLabel">opGetShippingLabel</a></code> | <code>string[]</code> | IAM actions required for the GetShippingLabel API call. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportOperations.property.opGetStatus">opGetStatus</a></code> | <code>string[]</code> | IAM actions required for the GetStatus API call. |
| <code><a href="#@cdk_utils/iam.importexport.ImportexportOperations.property.UpdateJob">UpdateJob</a></code> | <code>string[]</code> | IAM actions required for the UpdateJob API call. |

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.importexport.ImportexportOperations.property.CancelJob"></a>

```typescript
public readonly CancelJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelJob API call.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.importexport.ImportexportOperations.property.CreateJob"></a>

```typescript
public readonly CreateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateJob API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.importexport.ImportexportOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `opGetShippingLabel`<sup>Required</sup> <a name="opGetShippingLabel" id="@cdk_utils/iam.importexport.ImportexportOperations.property.opGetShippingLabel"></a>

```typescript
public readonly opGetShippingLabel: string[];
```

- *Type:* string[]

IAM actions required for the GetShippingLabel API call.

---

##### `opGetStatus`<sup>Required</sup> <a name="opGetStatus" id="@cdk_utils/iam.importexport.ImportexportOperations.property.opGetStatus"></a>

```typescript
public readonly opGetStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetStatus API call.

---

##### `UpdateJob`<sup>Required</sup> <a name="UpdateJob" id="@cdk_utils/iam.importexport.ImportexportOperations.property.UpdateJob"></a>

```typescript
public readonly UpdateJob: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJob API call.

---


