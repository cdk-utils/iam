# `inspector_scan` Submodule <a name="`inspector_scan` Submodule" id="@cdk_utils/iam.inspector_scan"></a>



## Classes <a name="Classes" id="Classes"></a>

### InspectorScanActions <a name="InspectorScanActions" id="@cdk_utils/iam.inspector_scan.InspectorScanActions"></a>

IAM action constants for the inspector-scan service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector_scan.InspectorScanActions.Initializer"></a>

```typescript
import { inspector_scan } from '@cdk_utils/iam'

new inspector_scan.InspectorScanActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.inspector_scan.InspectorScanActions.property.ScanSbom">ScanSbom</a></code> | <code>string</code> | [Read] inspector-scan:ScanSbom. |
| <code><a href="#@cdk_utils/iam.inspector_scan.InspectorScanActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.inspector_scan.InspectorScanActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ScanSbom`<sup>Required</sup> <a name="ScanSbom" id="@cdk_utils/iam.inspector_scan.InspectorScanActions.property.ScanSbom"></a>

```typescript
public readonly ScanSbom: string;
```

- *Type:* string

[Read] inspector-scan:ScanSbom.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.inspector_scan.InspectorScanActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### InspectorScanOperations <a name="InspectorScanOperations" id="@cdk_utils/iam.inspector_scan.InspectorScanOperations"></a>

API operation to required IAM actions mapping for inspector-scan.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector_scan.InspectorScanOperations.Initializer"></a>

```typescript
import { inspector_scan } from '@cdk_utils/iam'

new inspector_scan.InspectorScanOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector_scan.InspectorScanOperations.property.ScanSbom">ScanSbom</a></code> | <code>string[]</code> | IAM actions required for the ScanSbom API call. |

---

##### `ScanSbom`<sup>Required</sup> <a name="ScanSbom" id="@cdk_utils/iam.inspector_scan.InspectorScanOperations.property.ScanSbom"></a>

```typescript
public readonly ScanSbom: string[];
```

- *Type:* string[]

IAM actions required for the ScanSbom API call.

---


