# `ec2_instance_connect` Submodule <a name="`ec2_instance_connect` Submodule" id="@cdk_utils/iam.ec2_instance_connect"></a>


## Structs <a name="Structs" id="Structs"></a>

### EC2InstanceConnectInstanceArnComponents <a name="EC2InstanceConnectInstanceArnComponents" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents"></a>

Parsed components of a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.Initializer"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

const eC2InstanceConnectInstanceArnComponents: ec2_instance_connect.EC2InstanceConnectInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EC2InstanceConnectInstanceArnProps <a name="EC2InstanceConnectInstanceArnProps" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps"></a>

Properties for building a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.Initializer"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

const eC2InstanceConnectInstanceArnProps: ec2_instance_connect.EC2InstanceConnectInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EC2InstanceConnectInstanceConnectEndpointArnComponents <a name="EC2InstanceConnectInstanceConnectEndpointArnComponents" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents"></a>

Parsed components of a instance-connect-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.Initializer"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

const eC2InstanceConnectInstanceConnectEndpointArnComponents: ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.property.instanceConnectEndpointId">instanceConnectEndpointId</a></code> | <code>string</code> | The InstanceConnectEndpointId component. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceConnectEndpointId`<sup>Required</sup> <a name="instanceConnectEndpointId" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.property.instanceConnectEndpointId"></a>

```typescript
public readonly instanceConnectEndpointId: string;
```

- *Type:* string

The InstanceConnectEndpointId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EC2InstanceConnectInstanceConnectEndpointArnProps <a name="EC2InstanceConnectInstanceConnectEndpointArnProps" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps"></a>

Properties for building a instance-connect-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.Initializer"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

const eC2InstanceConnectInstanceConnectEndpointArnProps: ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.property.instanceConnectEndpointId">instanceConnectEndpointId</a></code> | <code>string</code> | The InstanceConnectEndpointId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceConnectEndpointId`<sup>Required</sup> <a name="instanceConnectEndpointId" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.property.instanceConnectEndpointId"></a>

```typescript
public readonly instanceConnectEndpointId: string;
```

- *Type:* string

The InstanceConnectEndpointId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EC2InstanceConnectActions <a name="EC2InstanceConnectActions" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions"></a>

IAM action constants for the ec2-instance-connect service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.Initializer"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

new ec2_instance_connect.EC2InstanceConnectActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.OpenTunnel">OpenTunnel</a></code> | <code>string</code> | [Write] ec2-instance-connect:OpenTunnel. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.SendSerialConsoleSSHPublicKey">SendSerialConsoleSSHPublicKey</a></code> | <code>string</code> | [Write] ec2-instance-connect:SendSerialConsoleSSHPublicKey. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.SendSSHPublicKey">SendSSHPublicKey</a></code> | <code>string</code> | [Write] ec2-instance-connect:SendSSHPublicKey. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `OpenTunnel`<sup>Required</sup> <a name="OpenTunnel" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.OpenTunnel"></a>

```typescript
public readonly OpenTunnel: string;
```

- *Type:* string

[Write] ec2-instance-connect:OpenTunnel.

---

##### `SendSerialConsoleSSHPublicKey`<sup>Required</sup> <a name="SendSerialConsoleSSHPublicKey" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.SendSerialConsoleSSHPublicKey"></a>

```typescript
public readonly SendSerialConsoleSSHPublicKey: string;
```

- *Type:* string

[Write] ec2-instance-connect:SendSerialConsoleSSHPublicKey.

---

##### `SendSSHPublicKey`<sup>Required</sup> <a name="SendSSHPublicKey" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.SendSSHPublicKey"></a>

```typescript
public readonly SendSSHPublicKey: string;
```

- *Type:* string

[Write] ec2-instance-connect:SendSSHPublicKey.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### EC2InstanceConnectConditions <a name="EC2InstanceConnectConditions" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions"></a>

Condition key constants and builders for ec2-instance-connect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.Initializer"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

new ec2_instance_connect.EC2InstanceConnectConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.maxTunnelDuration">maxTunnelDuration</a></code> | Generates a condition block for `ec2-instance-connect:maxTunnelDuration`. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.privateIPAddress">privateIPAddress</a></code> | Generates a condition block for `ec2-instance-connect:privateIpAddress`. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.remotePort">remotePort</a></code> | Generates a condition block for `ec2-instance-connect:remotePort`. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |

---

##### `maxTunnelDuration` <a name="maxTunnelDuration" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.maxTunnelDuration"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectConditions.maxTunnelDuration(value: number)
```

Generates a condition block for `ec2-instance-connect:maxTunnelDuration`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.maxTunnelDuration.parameter.value"></a>

- *Type:* number

---

##### `privateIPAddress` <a name="privateIPAddress" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.privateIPAddress"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectConditions.privateIPAddress(value: string)
```

Generates a condition block for `ec2-instance-connect:privateIpAddress`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.privateIPAddress.parameter.value"></a>

- *Type:* string

---

##### `remotePort` <a name="remotePort" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.remotePort"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectConditions.remotePort(value: number)
```

Generates a condition block for `ec2-instance-connect:remotePort`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.remotePort.parameter.value"></a>

- *Type:* number

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.resourceTag"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.resourceTag.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.MAX_TUNNEL_DURATION">MAX_TUNNEL_DURATION</a></code> | <code>string</code> | Condition key: ec2-instance-connect:maxTunnelDuration (Numeric). |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.OSUSER">OSUSER</a></code> | <code>string</code> | Condition key: ec2:osuser (String). |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.PRIVATE_IP_ADDRESS">PRIVATE_IP_ADDRESS</a></code> | <code>string</code> | Condition key: ec2-instance-connect:privateIpAddress (IPAddress). |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.REMOTE_PORT">REMOTE_PORT</a></code> | <code>string</code> | Condition key: ec2-instance-connect:remotePort (Numeric). |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: ec2:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.SendSSHPublicKeyConditionKeys">SendSSHPublicKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendSSHPublicKey action. |

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `MAX_TUNNEL_DURATION`<sup>Required</sup> <a name="MAX_TUNNEL_DURATION" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.MAX_TUNNEL_DURATION"></a>

```typescript
public readonly MAX_TUNNEL_DURATION: string;
```

- *Type:* string

Condition key: ec2-instance-connect:maxTunnelDuration (Numeric).

---

##### `OSUSER`<sup>Required</sup> <a name="OSUSER" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.OSUSER"></a>

```typescript
public readonly OSUSER: string;
```

- *Type:* string

Condition key: ec2:osuser (String).

---

##### `PRIVATE_IP_ADDRESS`<sup>Required</sup> <a name="PRIVATE_IP_ADDRESS" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.PRIVATE_IP_ADDRESS"></a>

```typescript
public readonly PRIVATE_IP_ADDRESS: string;
```

- *Type:* string

Condition key: ec2-instance-connect:privateIpAddress (IPAddress).

---

##### `REMOTE_PORT`<sup>Required</sup> <a name="REMOTE_PORT" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.REMOTE_PORT"></a>

```typescript
public readonly REMOTE_PORT: string;
```

- *Type:* string

Condition key: ec2-instance-connect:remotePort (Numeric).

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: ec2:ResourceTag/${TagKey} (String).

---

##### `SendSSHPublicKeyConditionKeys`<sup>Required</sup> <a name="SendSSHPublicKeyConditionKeys" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectConditions.property.SendSSHPublicKeyConditionKeys"></a>

```typescript
public readonly SendSSHPublicKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendSSHPublicKey action.

---

### EC2InstanceConnectOperations <a name="EC2InstanceConnectOperations" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectOperations"></a>

API operation to required IAM actions mapping for ec2-instance-connect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectOperations.Initializer"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

new ec2_instance_connect.EC2InstanceConnectOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectOperations.property.SendSerialConsoleSSHPublicKey">SendSerialConsoleSSHPublicKey</a></code> | <code>string[]</code> | IAM actions required for the SendSerialConsoleSSHPublicKey API call. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectOperations.property.SendSSHPublicKey">SendSSHPublicKey</a></code> | <code>string[]</code> | IAM actions required for the SendSSHPublicKey API call. |

---

##### `SendSerialConsoleSSHPublicKey`<sup>Required</sup> <a name="SendSerialConsoleSSHPublicKey" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectOperations.property.SendSerialConsoleSSHPublicKey"></a>

```typescript
public readonly SendSerialConsoleSSHPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the SendSerialConsoleSSHPublicKey API call.

---

##### `SendSSHPublicKey`<sup>Required</sup> <a name="SendSSHPublicKey" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectOperations.property.SendSSHPublicKey"></a>

```typescript
public readonly SendSSHPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the SendSSHPublicKey API call.

---

### EC2InstanceConnectResources <a name="EC2InstanceConnectResources" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources"></a>

ARN builders, validators, and parsers for ec2-instance-connect resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.Initializer"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

new ec2_instance_connect.EC2InstanceConnectResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.instance">instance</a></code> | Builds an ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.instanceConnectEndpoint">instanceConnectEndpoint</a></code> | Builds an ARN for the instance-connect-endpoint resource. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.isValidInstanceArn">isValidInstanceArn</a></code> | Validates whether a string is a valid ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.isValidInstanceConnectEndpointArn">isValidInstanceConnectEndpointArn</a></code> | Validates whether a string is a valid ARN for the instance-connect-endpoint resource. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.parseInstanceArn">parseInstanceArn</a></code> | Parses a instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.parseInstanceConnectEndpointArn">parseInstanceConnectEndpointArn</a></code> | Parses a instance-connect-endpoint ARN into its components. |

---

##### `instance` <a name="instance" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.instance"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectResources.instance(props: EC2InstanceConnectInstanceArnProps)
```

Builds an ARN for the instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.instance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceArnProps">EC2InstanceConnectInstanceArnProps</a>

---

##### `instanceConnectEndpoint` <a name="instanceConnectEndpoint" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.instanceConnectEndpoint"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectResources.instanceConnectEndpoint(props: EC2InstanceConnectInstanceConnectEndpointArnProps)
```

Builds an ARN for the instance-connect-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.instanceConnectEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectInstanceConnectEndpointArnProps">EC2InstanceConnectInstanceConnectEndpointArnProps</a>

---

##### `isValidInstanceArn` <a name="isValidInstanceArn" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.isValidInstanceArn"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectResources.isValidInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.isValidInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceConnectEndpointArn` <a name="isValidInstanceConnectEndpointArn" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.isValidInstanceConnectEndpointArn"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectResources.isValidInstanceConnectEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the instance-connect-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.isValidInstanceConnectEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceArn` <a name="parseInstanceArn" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.parseInstanceArn"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectResources.parseInstanceArn(arn: string)
```

Parses a instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.parseInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceConnectEndpointArn` <a name="parseInstanceConnectEndpointArn" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.parseInstanceConnectEndpointArn"></a>

```typescript
import { ec2_instance_connect } from '@cdk_utils/iam'

ec2_instance_connect.EC2InstanceConnectResources.parseInstanceConnectEndpointArn(arn: string)
```

Parses a instance-connect-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ec2_instance_connect.EC2InstanceConnectResources.parseInstanceConnectEndpointArn.parameter.arn"></a>

- *Type:* string

---




