# `backup_gateway` Submodule <a name="`backup_gateway` Submodule" id="@cdk_utils/iam.backup_gateway"></a>


## Structs <a name="Structs" id="Structs"></a>

### BackupGatewayGatewayArnComponents <a name="BackupGatewayGatewayArnComponents" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents"></a>

Parsed components of a gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

const backupGatewayGatewayArnComponents: backup_gateway.BackupGatewayGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BackupGatewayGatewayArnProps <a name="BackupGatewayGatewayArnProps" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps"></a>

Properties for building a gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

const backupGatewayGatewayArnProps: backup_gateway.BackupGatewayGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupGatewayHypervisorArnComponents <a name="BackupGatewayHypervisorArnComponents" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents"></a>

Parsed components of a hypervisor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

const backupGatewayHypervisorArnComponents: backup_gateway.BackupGatewayHypervisorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.property.hypervisorId">hypervisorId</a></code> | <code>string</code> | The HypervisorId component. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `hypervisorId`<sup>Required</sup> <a name="hypervisorId" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.property.hypervisorId"></a>

```typescript
public readonly hypervisorId: string;
```

- *Type:* string

The HypervisorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### BackupGatewayHypervisorArnProps <a name="BackupGatewayHypervisorArnProps" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps"></a>

Properties for building a hypervisor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

const backupGatewayHypervisorArnProps: backup_gateway.BackupGatewayHypervisorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.property.hypervisorId">hypervisorId</a></code> | <code>string</code> | The HypervisorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `hypervisorId`<sup>Required</sup> <a name="hypervisorId" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.property.hypervisorId"></a>

```typescript
public readonly hypervisorId: string;
```

- *Type:* string

The HypervisorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### BackupGatewayVirtualmachineArnComponents <a name="BackupGatewayVirtualmachineArnComponents" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents"></a>

Parsed components of a virtualmachine ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

const backupGatewayVirtualmachineArnComponents: backup_gateway.BackupGatewayVirtualmachineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.property.virtualmachineId">virtualmachineId</a></code> | <code>string</code> | The VirtualmachineId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualmachineId`<sup>Required</sup> <a name="virtualmachineId" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnComponents.property.virtualmachineId"></a>

```typescript
public readonly virtualmachineId: string;
```

- *Type:* string

The VirtualmachineId component.

---

### BackupGatewayVirtualmachineArnProps <a name="BackupGatewayVirtualmachineArnProps" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps"></a>

Properties for building a virtualmachine ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

const backupGatewayVirtualmachineArnProps: backup_gateway.BackupGatewayVirtualmachineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.property.virtualmachineId">virtualmachineId</a></code> | <code>string</code> | The VirtualmachineId component of the ARN. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `virtualmachineId`<sup>Required</sup> <a name="virtualmachineId" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.property.virtualmachineId"></a>

```typescript
public readonly virtualmachineId: string;
```

- *Type:* string

The VirtualmachineId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### BackupGatewayActions <a name="BackupGatewayActions" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions"></a>

IAM action constants for the backup-gateway service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

new backup_gateway.BackupGatewayActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetBandwidthRateLimitSchedule">actionGetBandwidthRateLimitSchedule</a></code> | <code>string</code> | [Read] backup-gateway:GetBandwidthRateLimitSchedule. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetGateway">actionGetGateway</a></code> | <code>string</code> | [Read] backup-gateway:GetGateway. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetHypervisor">actionGetHypervisor</a></code> | <code>string</code> | [Read] backup-gateway:GetHypervisor. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetHypervisorPropertyMappings">actionGetHypervisorPropertyMappings</a></code> | <code>string</code> | [Read] backup-gateway:GetHypervisorPropertyMappings. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetVirtualMachine">actionGetVirtualMachine</a></code> | <code>string</code> | [Read] backup-gateway:GetVirtualMachine. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AssociateGatewayToServer">AssociateGatewayToServer</a></code> | <code>string</code> | [Write] backup-gateway:AssociateGatewayToServer. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.Backup">Backup</a></code> | <code>string</code> | [Write] backup-gateway:Backup. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.CreateGateway">CreateGateway</a></code> | <code>string</code> | [Write] backup-gateway:CreateGateway. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.DeleteGateway">DeleteGateway</a></code> | <code>string</code> | [Write] backup-gateway:DeleteGateway. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.DeleteHypervisor">DeleteHypervisor</a></code> | <code>string</code> | [Write] backup-gateway:DeleteHypervisor. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.DisassociateGatewayFromServer">DisassociateGatewayFromServer</a></code> | <code>string</code> | [Write] backup-gateway:DisassociateGatewayFromServer. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ImportHypervisorConfiguration">ImportHypervisorConfiguration</a></code> | <code>string</code> | [Write] backup-gateway:ImportHypervisorConfiguration. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ListGateways">ListGateways</a></code> | <code>string</code> | [Read] backup-gateway:ListGateways. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ListHypervisors">ListHypervisors</a></code> | <code>string</code> | [Read] backup-gateway:ListHypervisors. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] backup-gateway:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ListVirtualMachines">ListVirtualMachines</a></code> | <code>string</code> | [Read] backup-gateway:ListVirtualMachines. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.PutBandwidthRateLimitSchedule">PutBandwidthRateLimitSchedule</a></code> | <code>string</code> | [Write] backup-gateway:PutBandwidthRateLimitSchedule. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.PutHypervisorPropertyMappings">PutHypervisorPropertyMappings</a></code> | <code>string</code> | [Write] backup-gateway:PutHypervisorPropertyMappings. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.PutMaintenanceStartTime">PutMaintenanceStartTime</a></code> | <code>string</code> | [Write] backup-gateway:PutMaintenanceStartTime. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.Restore">Restore</a></code> | <code>string</code> | [Write] backup-gateway:Restore. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.StartVirtualMachinesMetadataSync">StartVirtualMachinesMetadataSync</a></code> | <code>string</code> | [Write] backup-gateway:StartVirtualMachinesMetadataSync. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] backup-gateway:TagResource. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.TestHypervisorConfiguration">TestHypervisorConfiguration</a></code> | <code>string</code> | [Write] backup-gateway:TestHypervisorConfiguration. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] backup-gateway:UntagResource. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.UpdateGatewayInformation">UpdateGatewayInformation</a></code> | <code>string</code> | [Write] backup-gateway:UpdateGatewayInformation. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.UpdateGatewaySoftwareNow">UpdateGatewaySoftwareNow</a></code> | <code>string</code> | [Write] backup-gateway:UpdateGatewaySoftwareNow. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.UpdateHypervisor">UpdateHypervisor</a></code> | <code>string</code> | [Write] backup-gateway:UpdateHypervisor. |

---

##### `actionGetBandwidthRateLimitSchedule`<sup>Required</sup> <a name="actionGetBandwidthRateLimitSchedule" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetBandwidthRateLimitSchedule"></a>

```typescript
public readonly actionGetBandwidthRateLimitSchedule: string;
```

- *Type:* string

[Read] backup-gateway:GetBandwidthRateLimitSchedule.

---

##### `actionGetGateway`<sup>Required</sup> <a name="actionGetGateway" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetGateway"></a>

```typescript
public readonly actionGetGateway: string;
```

- *Type:* string

[Read] backup-gateway:GetGateway.

---

##### `actionGetHypervisor`<sup>Required</sup> <a name="actionGetHypervisor" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetHypervisor"></a>

```typescript
public readonly actionGetHypervisor: string;
```

- *Type:* string

[Read] backup-gateway:GetHypervisor.

---

##### `actionGetHypervisorPropertyMappings`<sup>Required</sup> <a name="actionGetHypervisorPropertyMappings" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetHypervisorPropertyMappings"></a>

```typescript
public readonly actionGetHypervisorPropertyMappings: string;
```

- *Type:* string

[Read] backup-gateway:GetHypervisorPropertyMappings.

---

##### `actionGetVirtualMachine`<sup>Required</sup> <a name="actionGetVirtualMachine" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.actionGetVirtualMachine"></a>

```typescript
public readonly actionGetVirtualMachine: string;
```

- *Type:* string

[Read] backup-gateway:GetVirtualMachine.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateGatewayToServer`<sup>Required</sup> <a name="AssociateGatewayToServer" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.AssociateGatewayToServer"></a>

```typescript
public readonly AssociateGatewayToServer: string;
```

- *Type:* string

[Write] backup-gateway:AssociateGatewayToServer.

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.Backup"></a>

```typescript
public readonly Backup: string;
```

- *Type:* string

[Write] backup-gateway:Backup.

---

##### `CreateGateway`<sup>Required</sup> <a name="CreateGateway" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.CreateGateway"></a>

```typescript
public readonly CreateGateway: string;
```

- *Type:* string

[Write] backup-gateway:CreateGateway.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string;
```

- *Type:* string

[Write] backup-gateway:DeleteGateway.

---

##### `DeleteHypervisor`<sup>Required</sup> <a name="DeleteHypervisor" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.DeleteHypervisor"></a>

```typescript
public readonly DeleteHypervisor: string;
```

- *Type:* string

[Write] backup-gateway:DeleteHypervisor.

---

##### `DisassociateGatewayFromServer`<sup>Required</sup> <a name="DisassociateGatewayFromServer" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.DisassociateGatewayFromServer"></a>

```typescript
public readonly DisassociateGatewayFromServer: string;
```

- *Type:* string

[Write] backup-gateway:DisassociateGatewayFromServer.

---

##### `ImportHypervisorConfiguration`<sup>Required</sup> <a name="ImportHypervisorConfiguration" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ImportHypervisorConfiguration"></a>

```typescript
public readonly ImportHypervisorConfiguration: string;
```

- *Type:* string

[Write] backup-gateway:ImportHypervisorConfiguration.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ListGateways"></a>

```typescript
public readonly ListGateways: string;
```

- *Type:* string

[Read] backup-gateway:ListGateways.

---

##### `ListHypervisors`<sup>Required</sup> <a name="ListHypervisors" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ListHypervisors"></a>

```typescript
public readonly ListHypervisors: string;
```

- *Type:* string

[Read] backup-gateway:ListHypervisors.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] backup-gateway:ListTagsForResource.

---

##### `ListVirtualMachines`<sup>Required</sup> <a name="ListVirtualMachines" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.ListVirtualMachines"></a>

```typescript
public readonly ListVirtualMachines: string;
```

- *Type:* string

[Read] backup-gateway:ListVirtualMachines.

---

##### `PutBandwidthRateLimitSchedule`<sup>Required</sup> <a name="PutBandwidthRateLimitSchedule" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.PutBandwidthRateLimitSchedule"></a>

```typescript
public readonly PutBandwidthRateLimitSchedule: string;
```

- *Type:* string

[Write] backup-gateway:PutBandwidthRateLimitSchedule.

---

##### `PutHypervisorPropertyMappings`<sup>Required</sup> <a name="PutHypervisorPropertyMappings" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.PutHypervisorPropertyMappings"></a>

```typescript
public readonly PutHypervisorPropertyMappings: string;
```

- *Type:* string

[Write] backup-gateway:PutHypervisorPropertyMappings.

---

##### `PutMaintenanceStartTime`<sup>Required</sup> <a name="PutMaintenanceStartTime" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.PutMaintenanceStartTime"></a>

```typescript
public readonly PutMaintenanceStartTime: string;
```

- *Type:* string

[Write] backup-gateway:PutMaintenanceStartTime.

---

##### `Restore`<sup>Required</sup> <a name="Restore" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.Restore"></a>

```typescript
public readonly Restore: string;
```

- *Type:* string

[Write] backup-gateway:Restore.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartVirtualMachinesMetadataSync`<sup>Required</sup> <a name="StartVirtualMachinesMetadataSync" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.StartVirtualMachinesMetadataSync"></a>

```typescript
public readonly StartVirtualMachinesMetadataSync: string;
```

- *Type:* string

[Write] backup-gateway:StartVirtualMachinesMetadataSync.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] backup-gateway:TagResource.

---

##### `TestHypervisorConfiguration`<sup>Required</sup> <a name="TestHypervisorConfiguration" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.TestHypervisorConfiguration"></a>

```typescript
public readonly TestHypervisorConfiguration: string;
```

- *Type:* string

[Write] backup-gateway:TestHypervisorConfiguration.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] backup-gateway:UntagResource.

---

##### `UpdateGatewayInformation`<sup>Required</sup> <a name="UpdateGatewayInformation" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.UpdateGatewayInformation"></a>

```typescript
public readonly UpdateGatewayInformation: string;
```

- *Type:* string

[Write] backup-gateway:UpdateGatewayInformation.

---

##### `UpdateGatewaySoftwareNow`<sup>Required</sup> <a name="UpdateGatewaySoftwareNow" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.UpdateGatewaySoftwareNow"></a>

```typescript
public readonly UpdateGatewaySoftwareNow: string;
```

- *Type:* string

[Write] backup-gateway:UpdateGatewaySoftwareNow.

---

##### `UpdateHypervisor`<sup>Required</sup> <a name="UpdateHypervisor" id="@cdk_utils/iam.backup_gateway.BackupGatewayActions.property.UpdateHypervisor"></a>

```typescript
public readonly UpdateHypervisor: string;
```

- *Type:* string

[Write] backup-gateway:UpdateHypervisor.

---

### BackupGatewayConditions <a name="BackupGatewayConditions" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions"></a>

Condition key constants and builders for backup-gateway.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

new backup_gateway.BackupGatewayConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.requestTag"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.resourceTag"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.tagKeys"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.CreateGatewayConditionKeys">CreateGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGateway action. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.ImportHypervisorConfigurationConditionKeys">ImportHypervisorConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportHypervisorConfiguration action. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateGatewayConditionKeys`<sup>Required</sup> <a name="CreateGatewayConditionKeys" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.CreateGatewayConditionKeys"></a>

```typescript
public readonly CreateGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGateway action.

---

##### `ImportHypervisorConfigurationConditionKeys`<sup>Required</sup> <a name="ImportHypervisorConfigurationConditionKeys" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.ImportHypervisorConfigurationConditionKeys"></a>

```typescript
public readonly ImportHypervisorConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportHypervisorConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.backup_gateway.BackupGatewayConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BackupGatewayOperations <a name="BackupGatewayOperations" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations"></a>

API operation to required IAM actions mapping for backup-gateway.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

new backup_gateway.BackupGatewayOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.AssociateGatewayToServer">AssociateGatewayToServer</a></code> | <code>string[]</code> | IAM actions required for the AssociateGatewayToServer API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.CreateGateway">CreateGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateGateway API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.DeleteGateway">DeleteGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteGateway API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.DeleteHypervisor">DeleteHypervisor</a></code> | <code>string[]</code> | IAM actions required for the DeleteHypervisor API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.DisassociateGatewayFromServer">DisassociateGatewayFromServer</a></code> | <code>string[]</code> | IAM actions required for the DisassociateGatewayFromServer API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ImportHypervisorConfiguration">ImportHypervisorConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ImportHypervisorConfiguration API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ListGateways">ListGateways</a></code> | <code>string[]</code> | IAM actions required for the ListGateways API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ListHypervisors">ListHypervisors</a></code> | <code>string[]</code> | IAM actions required for the ListHypervisors API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ListVirtualMachines">ListVirtualMachines</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualMachines API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetBandwidthRateLimitSchedule">opGetBandwidthRateLimitSchedule</a></code> | <code>string[]</code> | IAM actions required for the GetBandwidthRateLimitSchedule API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetGateway">opGetGateway</a></code> | <code>string[]</code> | IAM actions required for the GetGateway API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetHypervisor">opGetHypervisor</a></code> | <code>string[]</code> | IAM actions required for the GetHypervisor API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetHypervisorPropertyMappings">opGetHypervisorPropertyMappings</a></code> | <code>string[]</code> | IAM actions required for the GetHypervisorPropertyMappings API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetVirtualMachine">opGetVirtualMachine</a></code> | <code>string[]</code> | IAM actions required for the GetVirtualMachine API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.PutBandwidthRateLimitSchedule">PutBandwidthRateLimitSchedule</a></code> | <code>string[]</code> | IAM actions required for the PutBandwidthRateLimitSchedule API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.PutHypervisorPropertyMappings">PutHypervisorPropertyMappings</a></code> | <code>string[]</code> | IAM actions required for the PutHypervisorPropertyMappings API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.PutMaintenanceStartTime">PutMaintenanceStartTime</a></code> | <code>string[]</code> | IAM actions required for the PutMaintenanceStartTime API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.StartVirtualMachinesMetadataSync">StartVirtualMachinesMetadataSync</a></code> | <code>string[]</code> | IAM actions required for the StartVirtualMachinesMetadataSync API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.TestHypervisorConfiguration">TestHypervisorConfiguration</a></code> | <code>string[]</code> | IAM actions required for the TestHypervisorConfiguration API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.UpdateGatewayInformation">UpdateGatewayInformation</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayInformation API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.UpdateGatewaySoftwareNow">UpdateGatewaySoftwareNow</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewaySoftwareNow API call. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.UpdateHypervisor">UpdateHypervisor</a></code> | <code>string[]</code> | IAM actions required for the UpdateHypervisor API call. |

---

##### `AssociateGatewayToServer`<sup>Required</sup> <a name="AssociateGatewayToServer" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.AssociateGatewayToServer"></a>

```typescript
public readonly AssociateGatewayToServer: string[];
```

- *Type:* string[]

IAM actions required for the AssociateGatewayToServer API call.

---

##### `CreateGateway`<sup>Required</sup> <a name="CreateGateway" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.CreateGateway"></a>

```typescript
public readonly CreateGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateGateway API call.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGateway API call.

---

##### `DeleteHypervisor`<sup>Required</sup> <a name="DeleteHypervisor" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.DeleteHypervisor"></a>

```typescript
public readonly DeleteHypervisor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHypervisor API call.

---

##### `DisassociateGatewayFromServer`<sup>Required</sup> <a name="DisassociateGatewayFromServer" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.DisassociateGatewayFromServer"></a>

```typescript
public readonly DisassociateGatewayFromServer: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateGatewayFromServer API call.

---

##### `ImportHypervisorConfiguration`<sup>Required</sup> <a name="ImportHypervisorConfiguration" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ImportHypervisorConfiguration"></a>

```typescript
public readonly ImportHypervisorConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ImportHypervisorConfiguration API call.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ListGateways"></a>

```typescript
public readonly ListGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListGateways API call.

---

##### `ListHypervisors`<sup>Required</sup> <a name="ListHypervisors" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ListHypervisors"></a>

```typescript
public readonly ListHypervisors: string[];
```

- *Type:* string[]

IAM actions required for the ListHypervisors API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVirtualMachines`<sup>Required</sup> <a name="ListVirtualMachines" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.ListVirtualMachines"></a>

```typescript
public readonly ListVirtualMachines: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualMachines API call.

---

##### `opGetBandwidthRateLimitSchedule`<sup>Required</sup> <a name="opGetBandwidthRateLimitSchedule" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetBandwidthRateLimitSchedule"></a>

```typescript
public readonly opGetBandwidthRateLimitSchedule: string[];
```

- *Type:* string[]

IAM actions required for the GetBandwidthRateLimitSchedule API call.

---

##### `opGetGateway`<sup>Required</sup> <a name="opGetGateway" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetGateway"></a>

```typescript
public readonly opGetGateway: string[];
```

- *Type:* string[]

IAM actions required for the GetGateway API call.

---

##### `opGetHypervisor`<sup>Required</sup> <a name="opGetHypervisor" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetHypervisor"></a>

```typescript
public readonly opGetHypervisor: string[];
```

- *Type:* string[]

IAM actions required for the GetHypervisor API call.

---

##### `opGetHypervisorPropertyMappings`<sup>Required</sup> <a name="opGetHypervisorPropertyMappings" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetHypervisorPropertyMappings"></a>

```typescript
public readonly opGetHypervisorPropertyMappings: string[];
```

- *Type:* string[]

IAM actions required for the GetHypervisorPropertyMappings API call.

---

##### `opGetVirtualMachine`<sup>Required</sup> <a name="opGetVirtualMachine" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.opGetVirtualMachine"></a>

```typescript
public readonly opGetVirtualMachine: string[];
```

- *Type:* string[]

IAM actions required for the GetVirtualMachine API call.

---

##### `PutBandwidthRateLimitSchedule`<sup>Required</sup> <a name="PutBandwidthRateLimitSchedule" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.PutBandwidthRateLimitSchedule"></a>

```typescript
public readonly PutBandwidthRateLimitSchedule: string[];
```

- *Type:* string[]

IAM actions required for the PutBandwidthRateLimitSchedule API call.

---

##### `PutHypervisorPropertyMappings`<sup>Required</sup> <a name="PutHypervisorPropertyMappings" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.PutHypervisorPropertyMappings"></a>

```typescript
public readonly PutHypervisorPropertyMappings: string[];
```

- *Type:* string[]

IAM actions required for the PutHypervisorPropertyMappings API call.

---

##### `PutMaintenanceStartTime`<sup>Required</sup> <a name="PutMaintenanceStartTime" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.PutMaintenanceStartTime"></a>

```typescript
public readonly PutMaintenanceStartTime: string[];
```

- *Type:* string[]

IAM actions required for the PutMaintenanceStartTime API call.

---

##### `StartVirtualMachinesMetadataSync`<sup>Required</sup> <a name="StartVirtualMachinesMetadataSync" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.StartVirtualMachinesMetadataSync"></a>

```typescript
public readonly StartVirtualMachinesMetadataSync: string[];
```

- *Type:* string[]

IAM actions required for the StartVirtualMachinesMetadataSync API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TestHypervisorConfiguration`<sup>Required</sup> <a name="TestHypervisorConfiguration" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.TestHypervisorConfiguration"></a>

```typescript
public readonly TestHypervisorConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the TestHypervisorConfiguration API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateGatewayInformation`<sup>Required</sup> <a name="UpdateGatewayInformation" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.UpdateGatewayInformation"></a>

```typescript
public readonly UpdateGatewayInformation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayInformation API call.

---

##### `UpdateGatewaySoftwareNow`<sup>Required</sup> <a name="UpdateGatewaySoftwareNow" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.UpdateGatewaySoftwareNow"></a>

```typescript
public readonly UpdateGatewaySoftwareNow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewaySoftwareNow API call.

---

##### `UpdateHypervisor`<sup>Required</sup> <a name="UpdateHypervisor" id="@cdk_utils/iam.backup_gateway.BackupGatewayOperations.property.UpdateHypervisor"></a>

```typescript
public readonly UpdateHypervisor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHypervisor API call.

---

### BackupGatewayResources <a name="BackupGatewayResources" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources"></a>

ARN builders, validators, and parsers for backup-gateway resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.Initializer"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

new backup_gateway.BackupGatewayResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.gateway">gateway</a></code> | Builds an ARN for the gateway resource. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.hypervisor">hypervisor</a></code> | Builds an ARN for the hypervisor resource. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidGatewayArn">isValidGatewayArn</a></code> | Validates whether a string is a valid ARN for the gateway resource. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidHypervisorArn">isValidHypervisorArn</a></code> | Validates whether a string is a valid ARN for the hypervisor resource. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidVirtualmachineArn">isValidVirtualmachineArn</a></code> | Validates whether a string is a valid ARN for the virtualmachine resource. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseGatewayArn">parseGatewayArn</a></code> | Parses a gateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseHypervisorArn">parseHypervisorArn</a></code> | Parses a hypervisor ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseVirtualmachineArn">parseVirtualmachineArn</a></code> | Parses a virtualmachine ARN into its components. |
| <code><a href="#@cdk_utils/iam.backup_gateway.BackupGatewayResources.virtualmachine">virtualmachine</a></code> | Builds an ARN for the virtualmachine resource. |

---

##### `gateway` <a name="gateway" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.gateway"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.gateway(props: BackupGatewayGatewayArnProps)
```

Builds an ARN for the gateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.gateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup_gateway.BackupGatewayGatewayArnProps">BackupGatewayGatewayArnProps</a>

---

##### `hypervisor` <a name="hypervisor" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.hypervisor"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.hypervisor(props: BackupGatewayHypervisorArnProps)
```

Builds an ARN for the hypervisor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.hypervisor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup_gateway.BackupGatewayHypervisorArnProps">BackupGatewayHypervisorArnProps</a>

---

##### `isValidGatewayArn` <a name="isValidGatewayArn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidGatewayArn"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.isValidGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the gateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHypervisorArn` <a name="isValidHypervisorArn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidHypervisorArn"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.isValidHypervisorArn(arn: string)
```

Validates whether a string is a valid ARN for the hypervisor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidHypervisorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVirtualmachineArn` <a name="isValidVirtualmachineArn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidVirtualmachineArn"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.isValidVirtualmachineArn(arn: string)
```

Validates whether a string is a valid ARN for the virtualmachine resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.isValidVirtualmachineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGatewayArn` <a name="parseGatewayArn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseGatewayArn"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.parseGatewayArn(arn: string)
```

Parses a gateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHypervisorArn` <a name="parseHypervisorArn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseHypervisorArn"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.parseHypervisorArn(arn: string)
```

Parses a hypervisor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseHypervisorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVirtualmachineArn` <a name="parseVirtualmachineArn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseVirtualmachineArn"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.parseVirtualmachineArn(arn: string)
```

Parses a virtualmachine ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.parseVirtualmachineArn.parameter.arn"></a>

- *Type:* string

---

##### `virtualmachine` <a name="virtualmachine" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.virtualmachine"></a>

```typescript
import { backup_gateway } from '@cdk_utils/iam'

backup_gateway.BackupGatewayResources.virtualmachine(props: BackupGatewayVirtualmachineArnProps)
```

Builds an ARN for the virtualmachine resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.backup_gateway.BackupGatewayResources.virtualmachine.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.backup_gateway.BackupGatewayVirtualmachineArnProps">BackupGatewayVirtualmachineArnProps</a>

---




