# `consoleapp` Submodule <a name="`consoleapp` Submodule" id="@cdk_utils/iam.consoleapp"></a>


## Structs <a name="Structs" id="Structs"></a>

### ConsoleappDeviceIdentityArnComponents <a name="ConsoleappDeviceIdentityArnComponents" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents"></a>

Parsed components of a DeviceIdentity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.Initializer"></a>

```typescript
import { consoleapp } from '@cdk_utils/iam'

const consoleappDeviceIdentityArnComponents: consoleapp.ConsoleappDeviceIdentityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.property.identityId">identityId</a></code> | <code>string</code> | The IdentityId component. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component.

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

The IdentityId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### ConsoleappDeviceIdentityArnProps <a name="ConsoleappDeviceIdentityArnProps" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps"></a>

Properties for building a DeviceIdentity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.Initializer"></a>

```typescript
import { consoleapp } from '@cdk_utils/iam'

const consoleappDeviceIdentityArnProps: consoleapp.ConsoleappDeviceIdentityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.property.identityId">identityId</a></code> | <code>string</code> | The IdentityId component of the ARN. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component of the ARN.

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.property.identityId"></a>

```typescript
public readonly identityId: string;
```

- *Type:* string

The IdentityId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### ConsoleappActions <a name="ConsoleappActions" id="@cdk_utils/iam.consoleapp.ConsoleappActions"></a>

IAM action constants for the consoleapp service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.consoleapp.ConsoleappActions.Initializer"></a>

```typescript
import { consoleapp } from '@cdk_utils/iam'

new consoleapp.ConsoleappActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappActions.property.actionGetDeviceIdentity">actionGetDeviceIdentity</a></code> | <code>string</code> | [Read] consoleapp:GetDeviceIdentity. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappActions.property.ListDeviceIdentities">ListDeviceIdentities</a></code> | <code>string</code> | [List] consoleapp:ListDeviceIdentities. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetDeviceIdentity`<sup>Required</sup> <a name="actionGetDeviceIdentity" id="@cdk_utils/iam.consoleapp.ConsoleappActions.property.actionGetDeviceIdentity"></a>

```typescript
public readonly actionGetDeviceIdentity: string;
```

- *Type:* string

[Read] consoleapp:GetDeviceIdentity.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.consoleapp.ConsoleappActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListDeviceIdentities`<sup>Required</sup> <a name="ListDeviceIdentities" id="@cdk_utils/iam.consoleapp.ConsoleappActions.property.ListDeviceIdentities"></a>

```typescript
public readonly ListDeviceIdentities: string;
```

- *Type:* string

[List] consoleapp:ListDeviceIdentities.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.consoleapp.ConsoleappActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### ConsoleappResources <a name="ConsoleappResources" id="@cdk_utils/iam.consoleapp.ConsoleappResources"></a>

ARN builders, validators, and parsers for consoleapp resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.consoleapp.ConsoleappResources.Initializer"></a>

```typescript
import { consoleapp } from '@cdk_utils/iam'

new consoleapp.ConsoleappResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappResources.deviceIdentity">deviceIdentity</a></code> | Builds an ARN for the DeviceIdentity resource. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappResources.isValidDeviceIdentityArn">isValidDeviceIdentityArn</a></code> | Validates whether a string is a valid ARN for the DeviceIdentity resource. |
| <code><a href="#@cdk_utils/iam.consoleapp.ConsoleappResources.parseDeviceIdentityArn">parseDeviceIdentityArn</a></code> | Parses a DeviceIdentity ARN into its components. |

---

##### `deviceIdentity` <a name="deviceIdentity" id="@cdk_utils/iam.consoleapp.ConsoleappResources.deviceIdentity"></a>

```typescript
import { consoleapp } from '@cdk_utils/iam'

consoleapp.ConsoleappResources.deviceIdentity(props: ConsoleappDeviceIdentityArnProps)
```

Builds an ARN for the DeviceIdentity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.consoleapp.ConsoleappResources.deviceIdentity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.consoleapp.ConsoleappDeviceIdentityArnProps">ConsoleappDeviceIdentityArnProps</a>

---

##### `isValidDeviceIdentityArn` <a name="isValidDeviceIdentityArn" id="@cdk_utils/iam.consoleapp.ConsoleappResources.isValidDeviceIdentityArn"></a>

```typescript
import { consoleapp } from '@cdk_utils/iam'

consoleapp.ConsoleappResources.isValidDeviceIdentityArn(arn: string)
```

Validates whether a string is a valid ARN for the DeviceIdentity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.consoleapp.ConsoleappResources.isValidDeviceIdentityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceIdentityArn` <a name="parseDeviceIdentityArn" id="@cdk_utils/iam.consoleapp.ConsoleappResources.parseDeviceIdentityArn"></a>

```typescript
import { consoleapp } from '@cdk_utils/iam'

consoleapp.ConsoleappResources.parseDeviceIdentityArn(arn: string)
```

Parses a DeviceIdentity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.consoleapp.ConsoleappResources.parseDeviceIdentityArn.parameter.arn"></a>

- *Type:* string

---




