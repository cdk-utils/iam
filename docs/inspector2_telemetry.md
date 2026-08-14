# `inspector2_telemetry` Submodule <a name="`inspector2_telemetry` Submodule" id="@cdk_utils/iam.inspector2_telemetry"></a>



## Classes <a name="Classes" id="Classes"></a>

### Inspector2TelemetryActions <a name="Inspector2TelemetryActions" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions"></a>

IAM action constants for the inspector2-telemetry service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.Initializer"></a>

```typescript
import { inspector2_telemetry } from '@cdk_utils/iam'

new inspector2_telemetry.Inspector2TelemetryActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.NotifyHeartbeat">NotifyHeartbeat</a></code> | <code>string</code> | [Write] inspector2-telemetry:NotifyHeartbeat. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.SendTelemetry">SendTelemetry</a></code> | <code>string</code> | [Write] inspector2-telemetry:SendTelemetry. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.SendTelemetryEvent">SendTelemetryEvent</a></code> | <code>string</code> | [Write] inspector2-telemetry:SendTelemetryEvent. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.StartSession">StartSession</a></code> | <code>string</code> | [Write] inspector2-telemetry:StartSession. |
| <code><a href="#@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.StopSession">StopSession</a></code> | <code>string</code> | [Write] inspector2-telemetry:StopSession. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `NotifyHeartbeat`<sup>Required</sup> <a name="NotifyHeartbeat" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.NotifyHeartbeat"></a>

```typescript
public readonly NotifyHeartbeat: string;
```

- *Type:* string

[Write] inspector2-telemetry:NotifyHeartbeat.

---

##### `SendTelemetry`<sup>Required</sup> <a name="SendTelemetry" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.SendTelemetry"></a>

```typescript
public readonly SendTelemetry: string;
```

- *Type:* string

[Write] inspector2-telemetry:SendTelemetry.

---

##### `SendTelemetryEvent`<sup>Required</sup> <a name="SendTelemetryEvent" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.SendTelemetryEvent"></a>

```typescript
public readonly SendTelemetryEvent: string;
```

- *Type:* string

[Write] inspector2-telemetry:SendTelemetryEvent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.StartSession"></a>

```typescript
public readonly StartSession: string;
```

- *Type:* string

[Write] inspector2-telemetry:StartSession.

---

##### `StopSession`<sup>Required</sup> <a name="StopSession" id="@cdk_utils/iam.inspector2_telemetry.Inspector2TelemetryActions.property.StopSession"></a>

```typescript
public readonly StopSession: string;
```

- *Type:* string

[Write] inspector2-telemetry:StopSession.

---


