# `iot_device_tester` Submodule <a name="`iot_device_tester` Submodule" id="@cdk_utils/iam.iot_device_tester"></a>



## Classes <a name="Classes" id="Classes"></a>

### IotDeviceTesterActions <a name="IotDeviceTesterActions" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions"></a>

IAM action constants for the iot-device-tester service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.Initializer"></a>

```typescript
import { iot_device_tester } from '@cdk_utils/iam'

new iot_device_tester.IotDeviceTesterActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.CheckVersion">CheckVersion</a></code> | <code>string</code> | [Read] iot-device-tester:CheckVersion. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.DownloadTestSuite">DownloadTestSuite</a></code> | <code>string</code> | [Read] iot-device-tester:DownloadTestSuite. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.LatestIdt">LatestIdt</a></code> | <code>string</code> | [Read] iot-device-tester:LatestIdt. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.SendMetrics">SendMetrics</a></code> | <code>string</code> | [Write] iot-device-tester:SendMetrics. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.SupportedVersion">SupportedVersion</a></code> | <code>string</code> | [Read] iot-device-tester:SupportedVersion. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CheckVersion`<sup>Required</sup> <a name="CheckVersion" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.CheckVersion"></a>

```typescript
public readonly CheckVersion: string;
```

- *Type:* string

[Read] iot-device-tester:CheckVersion.

---

##### `DownloadTestSuite`<sup>Required</sup> <a name="DownloadTestSuite" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.DownloadTestSuite"></a>

```typescript
public readonly DownloadTestSuite: string;
```

- *Type:* string

[Read] iot-device-tester:DownloadTestSuite.

---

##### `LatestIdt`<sup>Required</sup> <a name="LatestIdt" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.LatestIdt"></a>

```typescript
public readonly LatestIdt: string;
```

- *Type:* string

[Read] iot-device-tester:LatestIdt.

---

##### `SendMetrics`<sup>Required</sup> <a name="SendMetrics" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.SendMetrics"></a>

```typescript
public readonly SendMetrics: string;
```

- *Type:* string

[Write] iot-device-tester:SendMetrics.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SupportedVersion`<sup>Required</sup> <a name="SupportedVersion" id="@cdk_utils/iam.iot_device_tester.IotDeviceTesterActions.property.SupportedVersion"></a>

```typescript
public readonly SupportedVersion: string;
```

- *Type:* string

[Read] iot-device-tester:SupportedVersion.

---


