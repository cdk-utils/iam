# `thinclient` Submodule <a name="`thinclient` Submodule" id="@cdk_utils/iam.thinclient"></a>


## Structs <a name="Structs" id="Structs"></a>

### ThinclientDeviceArnComponents <a name="ThinclientDeviceArnComponents" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents"></a>

Parsed components of a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

const thinclientDeviceArnComponents: thinclient.ThinclientDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ThinclientDeviceArnProps <a name="ThinclientDeviceArnProps" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnProps"></a>

Properties for building a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

const thinclientDeviceArnProps: thinclient.ThinclientDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.thinclient.ThinclientDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ThinclientEnvironmentArnComponents <a name="ThinclientEnvironmentArnComponents" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

const thinclientEnvironmentArnComponents: thinclient.ThinclientEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ThinclientEnvironmentArnProps <a name="ThinclientEnvironmentArnProps" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

const thinclientEnvironmentArnProps: thinclient.ThinclientEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.property.environmentId">environmentId</a></code> | <code>string</code> | The EnvironmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The EnvironmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ThinclientSoftwaresetArnComponents <a name="ThinclientSoftwaresetArnComponents" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents"></a>

Parsed components of a softwareset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

const thinclientSoftwaresetArnComponents: thinclient.ThinclientSoftwaresetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.property.softwareSetId">softwareSetId</a></code> | <code>string</code> | The SoftwareSetId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `softwareSetId`<sup>Required</sup> <a name="softwareSetId" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnComponents.property.softwareSetId"></a>

```typescript
public readonly softwareSetId: string;
```

- *Type:* string

The SoftwareSetId component.

---

### ThinclientSoftwaresetArnProps <a name="ThinclientSoftwaresetArnProps" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps"></a>

Properties for building a softwareset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

const thinclientSoftwaresetArnProps: thinclient.ThinclientSoftwaresetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.property.softwareSetId">softwareSetId</a></code> | <code>string</code> | The SoftwareSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `softwareSetId`<sup>Required</sup> <a name="softwareSetId" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.property.softwareSetId"></a>

```typescript
public readonly softwareSetId: string;
```

- *Type:* string

The SoftwareSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ThinclientActions <a name="ThinclientActions" id="@cdk_utils/iam.thinclient.ThinclientActions"></a>

IAM action constants for the thinclient service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.thinclient.ThinclientActions.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

new thinclient.ThinclientActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.actionGetDevice">actionGetDevice</a></code> | <code>string</code> | [Read] thinclient:GetDevice. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.actionGetDeviceDetails">actionGetDeviceDetails</a></code> | <code>string</code> | [Read] thinclient:GetDeviceDetails. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] thinclient:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.actionGetSoftwareSet">actionGetSoftwareSet</a></code> | <code>string</code> | [Read] thinclient:GetSoftwareSet. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] thinclient:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.DeleteDevice">DeleteDevice</a></code> | <code>string</code> | [Write] thinclient:DeleteDevice. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] thinclient:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.DeregisterDevice">DeregisterDevice</a></code> | <code>string</code> | [Write] thinclient:DeregisterDevice. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.ListDevices">ListDevices</a></code> | <code>string</code> | [List] thinclient:ListDevices. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.ListDeviceSessions">ListDeviceSessions</a></code> | <code>string</code> | [List] thinclient:ListDeviceSessions. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] thinclient:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.ListSoftwareSets">ListSoftwareSets</a></code> | <code>string</code> | [List] thinclient:ListSoftwareSets. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] thinclient:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] thinclient:TagResource. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] thinclient:UntagResource. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.UpdateDevice">UpdateDevice</a></code> | <code>string</code> | [Write] thinclient:UpdateDevice. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] thinclient:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientActions.property.UpdateSoftwareSet">UpdateSoftwareSet</a></code> | <code>string</code> | [Write] thinclient:UpdateSoftwareSet. |

---

##### `actionGetDevice`<sup>Required</sup> <a name="actionGetDevice" id="@cdk_utils/iam.thinclient.ThinclientActions.property.actionGetDevice"></a>

```typescript
public readonly actionGetDevice: string;
```

- *Type:* string

[Read] thinclient:GetDevice.

---

##### `actionGetDeviceDetails`<sup>Required</sup> <a name="actionGetDeviceDetails" id="@cdk_utils/iam.thinclient.ThinclientActions.property.actionGetDeviceDetails"></a>

```typescript
public readonly actionGetDeviceDetails: string;
```

- *Type:* string

[Read] thinclient:GetDeviceDetails.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.thinclient.ThinclientActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] thinclient:GetEnvironment.

---

##### `actionGetSoftwareSet`<sup>Required</sup> <a name="actionGetSoftwareSet" id="@cdk_utils/iam.thinclient.ThinclientActions.property.actionGetSoftwareSet"></a>

```typescript
public readonly actionGetSoftwareSet: string;
```

- *Type:* string

[Read] thinclient:GetSoftwareSet.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.thinclient.ThinclientActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.thinclient.ThinclientActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.thinclient.ThinclientActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.thinclient.ThinclientActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.thinclient.ThinclientActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.thinclient.ThinclientActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] thinclient:CreateEnvironment.

---

##### `DeleteDevice`<sup>Required</sup> <a name="DeleteDevice" id="@cdk_utils/iam.thinclient.ThinclientActions.property.DeleteDevice"></a>

```typescript
public readonly DeleteDevice: string;
```

- *Type:* string

[Write] thinclient:DeleteDevice.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.thinclient.ThinclientActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] thinclient:DeleteEnvironment.

---

##### `DeregisterDevice`<sup>Required</sup> <a name="DeregisterDevice" id="@cdk_utils/iam.thinclient.ThinclientActions.property.DeregisterDevice"></a>

```typescript
public readonly DeregisterDevice: string;
```

- *Type:* string

[Write] thinclient:DeregisterDevice.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.thinclient.ThinclientActions.property.ListDevices"></a>

```typescript
public readonly ListDevices: string;
```

- *Type:* string

[List] thinclient:ListDevices.

---

##### `ListDeviceSessions`<sup>Required</sup> <a name="ListDeviceSessions" id="@cdk_utils/iam.thinclient.ThinclientActions.property.ListDeviceSessions"></a>

```typescript
public readonly ListDeviceSessions: string;
```

- *Type:* string

[List] thinclient:ListDeviceSessions.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.thinclient.ThinclientActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] thinclient:ListEnvironments.

---

##### `ListSoftwareSets`<sup>Required</sup> <a name="ListSoftwareSets" id="@cdk_utils/iam.thinclient.ThinclientActions.property.ListSoftwareSets"></a>

```typescript
public readonly ListSoftwareSets: string;
```

- *Type:* string

[List] thinclient:ListSoftwareSets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.thinclient.ThinclientActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] thinclient:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.thinclient.ThinclientActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.thinclient.ThinclientActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] thinclient:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.thinclient.ThinclientActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] thinclient:UntagResource.

---

##### `UpdateDevice`<sup>Required</sup> <a name="UpdateDevice" id="@cdk_utils/iam.thinclient.ThinclientActions.property.UpdateDevice"></a>

```typescript
public readonly UpdateDevice: string;
```

- *Type:* string

[Write] thinclient:UpdateDevice.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.thinclient.ThinclientActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] thinclient:UpdateEnvironment.

---

##### `UpdateSoftwareSet`<sup>Required</sup> <a name="UpdateSoftwareSet" id="@cdk_utils/iam.thinclient.ThinclientActions.property.UpdateSoftwareSet"></a>

```typescript
public readonly UpdateSoftwareSet: string;
```

- *Type:* string

[Write] thinclient:UpdateSoftwareSet.

---

### ThinclientConditions <a name="ThinclientConditions" id="@cdk_utils/iam.thinclient.ThinclientConditions"></a>

Condition key constants and builders for thinclient.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.thinclient.ThinclientConditions.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

new thinclient.ThinclientConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.thinclient.ThinclientConditions.requestTag"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.thinclient.ThinclientConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.thinclient.ThinclientConditions.resourceTag"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.thinclient.ThinclientConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.tagKeys"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.thinclient.ThinclientConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.actionGetDeviceConditionKeys">actionGetDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDevice action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.actionGetDeviceDetailsConditionKeys">actionGetDeviceDetailsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeviceDetails action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.actionGetEnvironmentConditionKeys">actionGetEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEnvironment action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.actionGetSoftwareSetConditionKeys">actionGetSoftwareSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSoftwareSet action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.DeleteDeviceConditionKeys">DeleteDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDevice action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.DeleteEnvironmentConditionKeys">DeleteEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEnvironment action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.DeregisterDeviceConditionKeys">DeregisterDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterDevice action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.ListDeviceSessionsConditionKeys">ListDeviceSessionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDeviceSessions action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.UpdateDeviceConditionKeys">UpdateDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDevice action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.UpdateEnvironmentConditionKeys">UpdateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEnvironment action. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientConditions.property.UpdateSoftwareSetConditionKeys">UpdateSoftwareSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSoftwareSet action. |

---

##### `actionGetDeviceConditionKeys`<sup>Required</sup> <a name="actionGetDeviceConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.actionGetDeviceConditionKeys"></a>

```typescript
public readonly actionGetDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDevice action.

---

##### `actionGetDeviceDetailsConditionKeys`<sup>Required</sup> <a name="actionGetDeviceDetailsConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.actionGetDeviceDetailsConditionKeys"></a>

```typescript
public readonly actionGetDeviceDetailsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeviceDetails action.

---

##### `actionGetEnvironmentConditionKeys`<sup>Required</sup> <a name="actionGetEnvironmentConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.actionGetEnvironmentConditionKeys"></a>

```typescript
public readonly actionGetEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEnvironment action.

---

##### `actionGetSoftwareSetConditionKeys`<sup>Required</sup> <a name="actionGetSoftwareSetConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.actionGetSoftwareSetConditionKeys"></a>

```typescript
public readonly actionGetSoftwareSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSoftwareSet action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `DeleteDeviceConditionKeys`<sup>Required</sup> <a name="DeleteDeviceConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.DeleteDeviceConditionKeys"></a>

```typescript
public readonly DeleteDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDevice action.

---

##### `DeleteEnvironmentConditionKeys`<sup>Required</sup> <a name="DeleteEnvironmentConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.DeleteEnvironmentConditionKeys"></a>

```typescript
public readonly DeleteEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEnvironment action.

---

##### `DeregisterDeviceConditionKeys`<sup>Required</sup> <a name="DeregisterDeviceConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.DeregisterDeviceConditionKeys"></a>

```typescript
public readonly DeregisterDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterDevice action.

---

##### `ListDeviceSessionsConditionKeys`<sup>Required</sup> <a name="ListDeviceSessionsConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.ListDeviceSessionsConditionKeys"></a>

```typescript
public readonly ListDeviceSessionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDeviceSessions action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateDeviceConditionKeys`<sup>Required</sup> <a name="UpdateDeviceConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.UpdateDeviceConditionKeys"></a>

```typescript
public readonly UpdateDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDevice action.

---

##### `UpdateEnvironmentConditionKeys`<sup>Required</sup> <a name="UpdateEnvironmentConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.UpdateEnvironmentConditionKeys"></a>

```typescript
public readonly UpdateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEnvironment action.

---

##### `UpdateSoftwareSetConditionKeys`<sup>Required</sup> <a name="UpdateSoftwareSetConditionKeys" id="@cdk_utils/iam.thinclient.ThinclientConditions.property.UpdateSoftwareSetConditionKeys"></a>

```typescript
public readonly UpdateSoftwareSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSoftwareSet action.

---

### ThinclientOperations <a name="ThinclientOperations" id="@cdk_utils/iam.thinclient.ThinclientOperations"></a>

API operation to required IAM actions mapping for thinclient.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.thinclient.ThinclientOperations.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

new thinclient.ThinclientOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.DeleteDevice">DeleteDevice</a></code> | <code>string[]</code> | IAM actions required for the DeleteDevice API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.DeregisterDevice">DeregisterDevice</a></code> | <code>string[]</code> | IAM actions required for the DeregisterDevice API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.ListDevices">ListDevices</a></code> | <code>string[]</code> | IAM actions required for the ListDevices API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.ListSoftwareSets">ListSoftwareSets</a></code> | <code>string[]</code> | IAM actions required for the ListSoftwareSets API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.opGetDevice">opGetDevice</a></code> | <code>string[]</code> | IAM actions required for the GetDevice API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.opGetSoftwareSet">opGetSoftwareSet</a></code> | <code>string[]</code> | IAM actions required for the GetSoftwareSet API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.UpdateDevice">UpdateDevice</a></code> | <code>string[]</code> | IAM actions required for the UpdateDevice API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientOperations.property.UpdateSoftwareSet">UpdateSoftwareSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateSoftwareSet API call. |

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `DeleteDevice`<sup>Required</sup> <a name="DeleteDevice" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.DeleteDevice"></a>

```typescript
public readonly DeleteDevice: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDevice API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeregisterDevice`<sup>Required</sup> <a name="DeregisterDevice" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.DeregisterDevice"></a>

```typescript
public readonly DeregisterDevice: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterDevice API call.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.ListDevices"></a>

```typescript
public readonly ListDevices: string[];
```

- *Type:* string[]

IAM actions required for the ListDevices API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListSoftwareSets`<sup>Required</sup> <a name="ListSoftwareSets" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.ListSoftwareSets"></a>

```typescript
public readonly ListSoftwareSets: string[];
```

- *Type:* string[]

IAM actions required for the ListSoftwareSets API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDevice`<sup>Required</sup> <a name="opGetDevice" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.opGetDevice"></a>

```typescript
public readonly opGetDevice: string[];
```

- *Type:* string[]

IAM actions required for the GetDevice API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `opGetSoftwareSet`<sup>Required</sup> <a name="opGetSoftwareSet" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.opGetSoftwareSet"></a>

```typescript
public readonly opGetSoftwareSet: string[];
```

- *Type:* string[]

IAM actions required for the GetSoftwareSet API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDevice`<sup>Required</sup> <a name="UpdateDevice" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.UpdateDevice"></a>

```typescript
public readonly UpdateDevice: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDevice API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

##### `UpdateSoftwareSet`<sup>Required</sup> <a name="UpdateSoftwareSet" id="@cdk_utils/iam.thinclient.ThinclientOperations.property.UpdateSoftwareSet"></a>

```typescript
public readonly UpdateSoftwareSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSoftwareSet API call.

---

### ThinclientResources <a name="ThinclientResources" id="@cdk_utils/iam.thinclient.ThinclientResources"></a>

ARN builders, validators, and parsers for thinclient resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.thinclient.ThinclientResources.Initializer"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

new thinclient.ThinclientResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.device">device</a></code> | Builds an ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.isValidDeviceArn">isValidDeviceArn</a></code> | Validates whether a string is a valid ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.isValidSoftwaresetArn">isValidSoftwaresetArn</a></code> | Validates whether a string is a valid ARN for the softwareset resource. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.parseDeviceArn">parseDeviceArn</a></code> | Parses a device ARN into its components. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.parseSoftwaresetArn">parseSoftwaresetArn</a></code> | Parses a softwareset ARN into its components. |
| <code><a href="#@cdk_utils/iam.thinclient.ThinclientResources.softwareset">softwareset</a></code> | Builds an ARN for the softwareset resource. |

---

##### `device` <a name="device" id="@cdk_utils/iam.thinclient.ThinclientResources.device"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.device(props: ThinclientDeviceArnProps)
```

Builds an ARN for the device resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.thinclient.ThinclientResources.device.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.thinclient.ThinclientDeviceArnProps">ThinclientDeviceArnProps</a>

---

##### `environment` <a name="environment" id="@cdk_utils/iam.thinclient.ThinclientResources.environment"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.environment(props: ThinclientEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.thinclient.ThinclientResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.thinclient.ThinclientEnvironmentArnProps">ThinclientEnvironmentArnProps</a>

---

##### `isValidDeviceArn` <a name="isValidDeviceArn" id="@cdk_utils/iam.thinclient.ThinclientResources.isValidDeviceArn"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.isValidDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the device resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.thinclient.ThinclientResources.isValidDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.thinclient.ThinclientResources.isValidEnvironmentArn"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.thinclient.ThinclientResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSoftwaresetArn` <a name="isValidSoftwaresetArn" id="@cdk_utils/iam.thinclient.ThinclientResources.isValidSoftwaresetArn"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.isValidSoftwaresetArn(arn: string)
```

Validates whether a string is a valid ARN for the softwareset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.thinclient.ThinclientResources.isValidSoftwaresetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceArn` <a name="parseDeviceArn" id="@cdk_utils/iam.thinclient.ThinclientResources.parseDeviceArn"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.parseDeviceArn(arn: string)
```

Parses a device ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.thinclient.ThinclientResources.parseDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.thinclient.ThinclientResources.parseEnvironmentArn"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.thinclient.ThinclientResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSoftwaresetArn` <a name="parseSoftwaresetArn" id="@cdk_utils/iam.thinclient.ThinclientResources.parseSoftwaresetArn"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.parseSoftwaresetArn(arn: string)
```

Parses a softwareset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.thinclient.ThinclientResources.parseSoftwaresetArn.parameter.arn"></a>

- *Type:* string

---

##### `softwareset` <a name="softwareset" id="@cdk_utils/iam.thinclient.ThinclientResources.softwareset"></a>

```typescript
import { thinclient } from '@cdk_utils/iam'

thinclient.ThinclientResources.softwareset(props: ThinclientSoftwaresetArnProps)
```

Builds an ARN for the softwareset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.thinclient.ThinclientResources.softwareset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.thinclient.ThinclientSoftwaresetArnProps">ThinclientSoftwaresetArnProps</a>

---




