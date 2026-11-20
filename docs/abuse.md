# `abuse` Submodule <a name="`abuse` Submodule" id="@cdk_utils/iam.abuse"></a>



## Classes <a name="Classes" id="Classes"></a>

### AbuseActions <a name="AbuseActions" id="@cdk_utils/iam.abuse.AbuseActions"></a>

IAM action constants for the abuse service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.abuse.AbuseActions.Initializer"></a>

```typescript
import { abuse } from '@cdk_utils/iam'

new abuse.AbuseActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.actionGetAbuseReportStatus">actionGetAbuseReportStatus</a></code> | <code>string</code> | [Read] abuse:GetAbuseReportStatus. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.CreateAbuseReport">CreateAbuseReport</a></code> | <code>string</code> | [Write] abuse:CreateAbuseReport. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.ListAbuseReportStatuses">ListAbuseReportStatuses</a></code> | <code>string</code> | [Read] abuse:ListAbuseReportStatuses. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetAbuseReportStatus`<sup>Required</sup> <a name="actionGetAbuseReportStatus" id="@cdk_utils/iam.abuse.AbuseActions.property.actionGetAbuseReportStatus"></a>

```typescript
public readonly actionGetAbuseReportStatus: string;
```

- *Type:* string

[Read] abuse:GetAbuseReportStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.abuse.AbuseActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.abuse.AbuseActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.abuse.AbuseActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.abuse.AbuseActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.abuse.AbuseActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAbuseReport`<sup>Required</sup> <a name="CreateAbuseReport" id="@cdk_utils/iam.abuse.AbuseActions.property.CreateAbuseReport"></a>

```typescript
public readonly CreateAbuseReport: string;
```

- *Type:* string

[Write] abuse:CreateAbuseReport.

---

##### `ListAbuseReportStatuses`<sup>Required</sup> <a name="ListAbuseReportStatuses" id="@cdk_utils/iam.abuse.AbuseActions.property.ListAbuseReportStatuses"></a>

```typescript
public readonly ListAbuseReportStatuses: string;
```

- *Type:* string

[Read] abuse:ListAbuseReportStatuses.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.abuse.AbuseActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### AbuseOperations <a name="AbuseOperations" id="@cdk_utils/iam.abuse.AbuseOperations"></a>

API operation to required IAM actions mapping for abuse.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.abuse.AbuseOperations.Initializer"></a>

```typescript
import { abuse } from '@cdk_utils/iam'

new abuse.AbuseOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.abuse.AbuseOperations.property.CreateAbuseReport">CreateAbuseReport</a></code> | <code>string[]</code> | IAM actions required for the CreateAbuseReport API call. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseOperations.property.ListAbuseReportStatuses">ListAbuseReportStatuses</a></code> | <code>string[]</code> | IAM actions required for the ListAbuseReportStatuses API call. |
| <code><a href="#@cdk_utils/iam.abuse.AbuseOperations.property.opGetAbuseReportStatus">opGetAbuseReportStatus</a></code> | <code>string[]</code> | IAM actions required for the GetAbuseReportStatus API call. |

---

##### `CreateAbuseReport`<sup>Required</sup> <a name="CreateAbuseReport" id="@cdk_utils/iam.abuse.AbuseOperations.property.CreateAbuseReport"></a>

```typescript
public readonly CreateAbuseReport: string[];
```

- *Type:* string[]

IAM actions required for the CreateAbuseReport API call.

---

##### `ListAbuseReportStatuses`<sup>Required</sup> <a name="ListAbuseReportStatuses" id="@cdk_utils/iam.abuse.AbuseOperations.property.ListAbuseReportStatuses"></a>

```typescript
public readonly ListAbuseReportStatuses: string[];
```

- *Type:* string[]

IAM actions required for the ListAbuseReportStatuses API call.

---

##### `opGetAbuseReportStatus`<sup>Required</sup> <a name="opGetAbuseReportStatus" id="@cdk_utils/iam.abuse.AbuseOperations.property.opGetAbuseReportStatus"></a>

```typescript
public readonly opGetAbuseReportStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetAbuseReportStatus API call.

---


