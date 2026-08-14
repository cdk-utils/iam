# `globalaccelerator` Submodule <a name="`globalaccelerator` Submodule" id="@cdk_utils/iam.globalaccelerator"></a>


## Structs <a name="Structs" id="Structs"></a>

### GlobalAcceleratorAcceleratorArnComponents <a name="GlobalAcceleratorAcceleratorArnComponents" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnComponents"></a>

Parsed components of a accelerator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnComponents.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

const globalAcceleratorAcceleratorArnComponents: globalaccelerator.GlobalAcceleratorAcceleratorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### GlobalAcceleratorAcceleratorArnProps <a name="GlobalAcceleratorAcceleratorArnProps" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps"></a>

Properties for building a accelerator ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

const globalAcceleratorAcceleratorArnProps: globalaccelerator.GlobalAcceleratorAcceleratorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### GlobalAcceleratorAttachmentArnComponents <a name="GlobalAcceleratorAttachmentArnComponents" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnComponents"></a>

Parsed components of a attachment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnComponents.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

const globalAcceleratorAttachmentArnComponents: globalaccelerator.GlobalAcceleratorAttachmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### GlobalAcceleratorAttachmentArnProps <a name="GlobalAcceleratorAttachmentArnProps" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps"></a>

Properties for building a attachment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

const globalAcceleratorAttachmentArnProps: globalaccelerator.GlobalAcceleratorAttachmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### GlobalAcceleratorEndpointgroupArnComponents <a name="GlobalAcceleratorEndpointgroupArnComponents" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents"></a>

Parsed components of a endpointgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

const globalAcceleratorEndpointgroupArnComponents: globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.endpointGroupId">endpointGroupId</a></code> | <code>string</code> | The EndpointGroupId component. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `endpointGroupId`<sup>Required</sup> <a name="endpointGroupId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.endpointGroupId"></a>

```typescript
public readonly endpointGroupId: string;
```

- *Type:* string

The EndpointGroupId component.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### GlobalAcceleratorEndpointgroupArnProps <a name="GlobalAcceleratorEndpointgroupArnProps" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps"></a>

Properties for building a endpointgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

const globalAcceleratorEndpointgroupArnProps: globalaccelerator.GlobalAcceleratorEndpointgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.endpointGroupId">endpointGroupId</a></code> | <code>string</code> | The EndpointGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `endpointGroupId`<sup>Required</sup> <a name="endpointGroupId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.endpointGroupId"></a>

```typescript
public readonly endpointGroupId: string;
```

- *Type:* string

The EndpointGroupId component of the ARN.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### GlobalAcceleratorListenerArnComponents <a name="GlobalAcceleratorListenerArnComponents" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents"></a>

Parsed components of a listener ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

const globalAcceleratorListenerArnComponents: globalaccelerator.GlobalAcceleratorListenerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### GlobalAcceleratorListenerArnProps <a name="GlobalAcceleratorListenerArnProps" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps"></a>

Properties for building a listener ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

const globalAcceleratorListenerArnProps: globalaccelerator.GlobalAcceleratorListenerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalAcceleratorActions <a name="GlobalAcceleratorActions" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions"></a>

IAM action constants for the globalaccelerator service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

new globalaccelerator.GlobalAcceleratorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AddCustomRoutingEndpoints">AddCustomRoutingEndpoints</a></code> | <code>string</code> | [Write] globalaccelerator:AddCustomRoutingEndpoints. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AddEndpoints">AddEndpoints</a></code> | <code>string</code> | [Write] globalaccelerator:AddEndpoints. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AdvertiseByoipCidr">AdvertiseByoipCidr</a></code> | <code>string</code> | [Write] globalaccelerator:AdvertiseByoipCidr. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllowCustomRoutingTraffic">AllowCustomRoutingTraffic</a></code> | <code>string</code> | [Write] globalaccelerator:AllowCustomRoutingTraffic. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateAccelerator">CreateAccelerator</a></code> | <code>string</code> | [Write] globalaccelerator:CreateAccelerator. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateCrossAccountAttachment">CreateCrossAccountAttachment</a></code> | <code>string</code> | [Write] globalaccelerator:CreateCrossAccountAttachment. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateCustomRoutingAccelerator">CreateCustomRoutingAccelerator</a></code> | <code>string</code> | [Write] globalaccelerator:CreateCustomRoutingAccelerator. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateCustomRoutingEndpointGroup">CreateCustomRoutingEndpointGroup</a></code> | <code>string</code> | [Write] globalaccelerator:CreateCustomRoutingEndpointGroup. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateCustomRoutingListener">CreateCustomRoutingListener</a></code> | <code>string</code> | [Write] globalaccelerator:CreateCustomRoutingListener. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateEndpointGroup">CreateEndpointGroup</a></code> | <code>string</code> | [Write] globalaccelerator:CreateEndpointGroup. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateListener">CreateListener</a></code> | <code>string</code> | [Write] globalaccelerator:CreateListener. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteAccelerator">DeleteAccelerator</a></code> | <code>string</code> | [Write] globalaccelerator:DeleteAccelerator. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteCrossAccountAttachment">DeleteCrossAccountAttachment</a></code> | <code>string</code> | [Write] globalaccelerator:DeleteCrossAccountAttachment. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteCustomRoutingAccelerator">DeleteCustomRoutingAccelerator</a></code> | <code>string</code> | [Write] globalaccelerator:DeleteCustomRoutingAccelerator. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteCustomRoutingEndpointGroup">DeleteCustomRoutingEndpointGroup</a></code> | <code>string</code> | [Write] globalaccelerator:DeleteCustomRoutingEndpointGroup. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteCustomRoutingListener">DeleteCustomRoutingListener</a></code> | <code>string</code> | [Write] globalaccelerator:DeleteCustomRoutingListener. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteEndpointGroup">DeleteEndpointGroup</a></code> | <code>string</code> | [Write] globalaccelerator:DeleteEndpointGroup. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteListener">DeleteListener</a></code> | <code>string</code> | [Write] globalaccelerator:DeleteListener. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DenyCustomRoutingTraffic">DenyCustomRoutingTraffic</a></code> | <code>string</code> | [Write] globalaccelerator:DenyCustomRoutingTraffic. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeprovisionByoipCidr">DeprovisionByoipCidr</a></code> | <code>string</code> | [Write] globalaccelerator:DeprovisionByoipCidr. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeAccelerator">DescribeAccelerator</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeAccelerator. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeAcceleratorAttributes">DescribeAcceleratorAttributes</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeAcceleratorAttributes. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCrossAccountAttachment">DescribeCrossAccountAttachment</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeCrossAccountAttachment. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCustomRoutingAccelerator">DescribeCustomRoutingAccelerator</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeCustomRoutingAccelerator. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCustomRoutingAcceleratorAttributes">DescribeCustomRoutingAcceleratorAttributes</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeCustomRoutingAcceleratorAttributes. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCustomRoutingEndpointGroup">DescribeCustomRoutingEndpointGroup</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeCustomRoutingEndpointGroup. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCustomRoutingListener">DescribeCustomRoutingListener</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeCustomRoutingListener. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeEndpointGroup">DescribeEndpointGroup</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeEndpointGroup. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeListener">DescribeListener</a></code> | <code>string</code> | [Read] globalaccelerator:DescribeListener. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListAccelerators">ListAccelerators</a></code> | <code>string</code> | [List] globalaccelerator:ListAccelerators. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListByoipCidrs">ListByoipCidrs</a></code> | <code>string</code> | [List] globalaccelerator:ListByoipCidrs. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCrossAccountAttachments">ListCrossAccountAttachments</a></code> | <code>string</code> | [List] globalaccelerator:ListCrossAccountAttachments. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCrossAccountResourceAccounts">ListCrossAccountResourceAccounts</a></code> | <code>string</code> | [List] globalaccelerator:ListCrossAccountResourceAccounts. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCrossAccountResources">ListCrossAccountResources</a></code> | <code>string</code> | [List] globalaccelerator:ListCrossAccountResources. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingAccelerators">ListCustomRoutingAccelerators</a></code> | <code>string</code> | [List] globalaccelerator:ListCustomRoutingAccelerators. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingEndpointGroups">ListCustomRoutingEndpointGroups</a></code> | <code>string</code> | [List] globalaccelerator:ListCustomRoutingEndpointGroups. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingListeners">ListCustomRoutingListeners</a></code> | <code>string</code> | [List] globalaccelerator:ListCustomRoutingListeners. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingPortMappings">ListCustomRoutingPortMappings</a></code> | <code>string</code> | [List] globalaccelerator:ListCustomRoutingPortMappings. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingPortMappingsByDestination">ListCustomRoutingPortMappingsByDestination</a></code> | <code>string</code> | [List] globalaccelerator:ListCustomRoutingPortMappingsByDestination. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListEndpointGroups">ListEndpointGroups</a></code> | <code>string</code> | [List] globalaccelerator:ListEndpointGroups. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListListeners">ListListeners</a></code> | <code>string</code> | [List] globalaccelerator:ListListeners. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] globalaccelerator:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ProvisionByoipCidr">ProvisionByoipCidr</a></code> | <code>string</code> | [Write] globalaccelerator:ProvisionByoipCidr. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.RemoveCustomRoutingEndpoints">RemoveCustomRoutingEndpoints</a></code> | <code>string</code> | [Write] globalaccelerator:RemoveCustomRoutingEndpoints. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.RemoveEndpoints">RemoveEndpoints</a></code> | <code>string</code> | [Write] globalaccelerator:RemoveEndpoints. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] globalaccelerator:TagResource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] globalaccelerator:UntagResource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateAccelerator">UpdateAccelerator</a></code> | <code>string</code> | [Write] globalaccelerator:UpdateAccelerator. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateAcceleratorAttributes">UpdateAcceleratorAttributes</a></code> | <code>string</code> | [Write] globalaccelerator:UpdateAcceleratorAttributes. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateCrossAccountAttachment">UpdateCrossAccountAttachment</a></code> | <code>string</code> | [Write] globalaccelerator:UpdateCrossAccountAttachment. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateCustomRoutingAccelerator">UpdateCustomRoutingAccelerator</a></code> | <code>string</code> | [Write] globalaccelerator:UpdateCustomRoutingAccelerator. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateCustomRoutingAcceleratorAttributes">UpdateCustomRoutingAcceleratorAttributes</a></code> | <code>string</code> | [Write] globalaccelerator:UpdateCustomRoutingAcceleratorAttributes. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateCustomRoutingListener">UpdateCustomRoutingListener</a></code> | <code>string</code> | [Write] globalaccelerator:UpdateCustomRoutingListener. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateEndpointGroup">UpdateEndpointGroup</a></code> | <code>string</code> | [Write] globalaccelerator:UpdateEndpointGroup. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateListener">UpdateListener</a></code> | <code>string</code> | [Write] globalaccelerator:UpdateListener. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.WithdrawByoipCidr">WithdrawByoipCidr</a></code> | <code>string</code> | [Write] globalaccelerator:WithdrawByoipCidr. |

---

##### `AddCustomRoutingEndpoints`<sup>Required</sup> <a name="AddCustomRoutingEndpoints" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AddCustomRoutingEndpoints"></a>

```typescript
public readonly AddCustomRoutingEndpoints: string;
```

- *Type:* string

[Write] globalaccelerator:AddCustomRoutingEndpoints.

---

##### `AddEndpoints`<sup>Required</sup> <a name="AddEndpoints" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AddEndpoints"></a>

```typescript
public readonly AddEndpoints: string;
```

- *Type:* string

[Write] globalaccelerator:AddEndpoints.

---

##### `AdvertiseByoipCidr`<sup>Required</sup> <a name="AdvertiseByoipCidr" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AdvertiseByoipCidr"></a>

```typescript
public readonly AdvertiseByoipCidr: string;
```

- *Type:* string

[Write] globalaccelerator:AdvertiseByoipCidr.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowCustomRoutingTraffic`<sup>Required</sup> <a name="AllowCustomRoutingTraffic" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllowCustomRoutingTraffic"></a>

```typescript
public readonly AllowCustomRoutingTraffic: string;
```

- *Type:* string

[Write] globalaccelerator:AllowCustomRoutingTraffic.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAccelerator`<sup>Required</sup> <a name="CreateAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateAccelerator"></a>

```typescript
public readonly CreateAccelerator: string;
```

- *Type:* string

[Write] globalaccelerator:CreateAccelerator.

---

##### `CreateCrossAccountAttachment`<sup>Required</sup> <a name="CreateCrossAccountAttachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateCrossAccountAttachment"></a>

```typescript
public readonly CreateCrossAccountAttachment: string;
```

- *Type:* string

[Write] globalaccelerator:CreateCrossAccountAttachment.

---

##### `CreateCustomRoutingAccelerator`<sup>Required</sup> <a name="CreateCustomRoutingAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateCustomRoutingAccelerator"></a>

```typescript
public readonly CreateCustomRoutingAccelerator: string;
```

- *Type:* string

[Write] globalaccelerator:CreateCustomRoutingAccelerator.

---

##### `CreateCustomRoutingEndpointGroup`<sup>Required</sup> <a name="CreateCustomRoutingEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateCustomRoutingEndpointGroup"></a>

```typescript
public readonly CreateCustomRoutingEndpointGroup: string;
```

- *Type:* string

[Write] globalaccelerator:CreateCustomRoutingEndpointGroup.

---

##### `CreateCustomRoutingListener`<sup>Required</sup> <a name="CreateCustomRoutingListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateCustomRoutingListener"></a>

```typescript
public readonly CreateCustomRoutingListener: string;
```

- *Type:* string

[Write] globalaccelerator:CreateCustomRoutingListener.

---

##### `CreateEndpointGroup`<sup>Required</sup> <a name="CreateEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateEndpointGroup"></a>

```typescript
public readonly CreateEndpointGroup: string;
```

- *Type:* string

[Write] globalaccelerator:CreateEndpointGroup.

---

##### `CreateListener`<sup>Required</sup> <a name="CreateListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.CreateListener"></a>

```typescript
public readonly CreateListener: string;
```

- *Type:* string

[Write] globalaccelerator:CreateListener.

---

##### `DeleteAccelerator`<sup>Required</sup> <a name="DeleteAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteAccelerator"></a>

```typescript
public readonly DeleteAccelerator: string;
```

- *Type:* string

[Write] globalaccelerator:DeleteAccelerator.

---

##### `DeleteCrossAccountAttachment`<sup>Required</sup> <a name="DeleteCrossAccountAttachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteCrossAccountAttachment"></a>

```typescript
public readonly DeleteCrossAccountAttachment: string;
```

- *Type:* string

[Write] globalaccelerator:DeleteCrossAccountAttachment.

---

##### `DeleteCustomRoutingAccelerator`<sup>Required</sup> <a name="DeleteCustomRoutingAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteCustomRoutingAccelerator"></a>

```typescript
public readonly DeleteCustomRoutingAccelerator: string;
```

- *Type:* string

[Write] globalaccelerator:DeleteCustomRoutingAccelerator.

---

##### `DeleteCustomRoutingEndpointGroup`<sup>Required</sup> <a name="DeleteCustomRoutingEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteCustomRoutingEndpointGroup"></a>

```typescript
public readonly DeleteCustomRoutingEndpointGroup: string;
```

- *Type:* string

[Write] globalaccelerator:DeleteCustomRoutingEndpointGroup.

---

##### `DeleteCustomRoutingListener`<sup>Required</sup> <a name="DeleteCustomRoutingListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteCustomRoutingListener"></a>

```typescript
public readonly DeleteCustomRoutingListener: string;
```

- *Type:* string

[Write] globalaccelerator:DeleteCustomRoutingListener.

---

##### `DeleteEndpointGroup`<sup>Required</sup> <a name="DeleteEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteEndpointGroup"></a>

```typescript
public readonly DeleteEndpointGroup: string;
```

- *Type:* string

[Write] globalaccelerator:DeleteEndpointGroup.

---

##### `DeleteListener`<sup>Required</sup> <a name="DeleteListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeleteListener"></a>

```typescript
public readonly DeleteListener: string;
```

- *Type:* string

[Write] globalaccelerator:DeleteListener.

---

##### `DenyCustomRoutingTraffic`<sup>Required</sup> <a name="DenyCustomRoutingTraffic" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DenyCustomRoutingTraffic"></a>

```typescript
public readonly DenyCustomRoutingTraffic: string;
```

- *Type:* string

[Write] globalaccelerator:DenyCustomRoutingTraffic.

---

##### `DeprovisionByoipCidr`<sup>Required</sup> <a name="DeprovisionByoipCidr" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DeprovisionByoipCidr"></a>

```typescript
public readonly DeprovisionByoipCidr: string;
```

- *Type:* string

[Write] globalaccelerator:DeprovisionByoipCidr.

---

##### `DescribeAccelerator`<sup>Required</sup> <a name="DescribeAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeAccelerator"></a>

```typescript
public readonly DescribeAccelerator: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeAccelerator.

---

##### `DescribeAcceleratorAttributes`<sup>Required</sup> <a name="DescribeAcceleratorAttributes" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeAcceleratorAttributes"></a>

```typescript
public readonly DescribeAcceleratorAttributes: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeAcceleratorAttributes.

---

##### `DescribeCrossAccountAttachment`<sup>Required</sup> <a name="DescribeCrossAccountAttachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCrossAccountAttachment"></a>

```typescript
public readonly DescribeCrossAccountAttachment: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeCrossAccountAttachment.

---

##### `DescribeCustomRoutingAccelerator`<sup>Required</sup> <a name="DescribeCustomRoutingAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCustomRoutingAccelerator"></a>

```typescript
public readonly DescribeCustomRoutingAccelerator: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeCustomRoutingAccelerator.

---

##### `DescribeCustomRoutingAcceleratorAttributes`<sup>Required</sup> <a name="DescribeCustomRoutingAcceleratorAttributes" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCustomRoutingAcceleratorAttributes"></a>

```typescript
public readonly DescribeCustomRoutingAcceleratorAttributes: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeCustomRoutingAcceleratorAttributes.

---

##### `DescribeCustomRoutingEndpointGroup`<sup>Required</sup> <a name="DescribeCustomRoutingEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCustomRoutingEndpointGroup"></a>

```typescript
public readonly DescribeCustomRoutingEndpointGroup: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeCustomRoutingEndpointGroup.

---

##### `DescribeCustomRoutingListener`<sup>Required</sup> <a name="DescribeCustomRoutingListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeCustomRoutingListener"></a>

```typescript
public readonly DescribeCustomRoutingListener: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeCustomRoutingListener.

---

##### `DescribeEndpointGroup`<sup>Required</sup> <a name="DescribeEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeEndpointGroup"></a>

```typescript
public readonly DescribeEndpointGroup: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeEndpointGroup.

---

##### `DescribeListener`<sup>Required</sup> <a name="DescribeListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.DescribeListener"></a>

```typescript
public readonly DescribeListener: string;
```

- *Type:* string

[Read] globalaccelerator:DescribeListener.

---

##### `ListAccelerators`<sup>Required</sup> <a name="ListAccelerators" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListAccelerators"></a>

```typescript
public readonly ListAccelerators: string;
```

- *Type:* string

[List] globalaccelerator:ListAccelerators.

---

##### `ListByoipCidrs`<sup>Required</sup> <a name="ListByoipCidrs" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListByoipCidrs"></a>

```typescript
public readonly ListByoipCidrs: string;
```

- *Type:* string

[List] globalaccelerator:ListByoipCidrs.

---

##### `ListCrossAccountAttachments`<sup>Required</sup> <a name="ListCrossAccountAttachments" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCrossAccountAttachments"></a>

```typescript
public readonly ListCrossAccountAttachments: string;
```

- *Type:* string

[List] globalaccelerator:ListCrossAccountAttachments.

---

##### `ListCrossAccountResourceAccounts`<sup>Required</sup> <a name="ListCrossAccountResourceAccounts" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCrossAccountResourceAccounts"></a>

```typescript
public readonly ListCrossAccountResourceAccounts: string;
```

- *Type:* string

[List] globalaccelerator:ListCrossAccountResourceAccounts.

---

##### `ListCrossAccountResources`<sup>Required</sup> <a name="ListCrossAccountResources" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCrossAccountResources"></a>

```typescript
public readonly ListCrossAccountResources: string;
```

- *Type:* string

[List] globalaccelerator:ListCrossAccountResources.

---

##### `ListCustomRoutingAccelerators`<sup>Required</sup> <a name="ListCustomRoutingAccelerators" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingAccelerators"></a>

```typescript
public readonly ListCustomRoutingAccelerators: string;
```

- *Type:* string

[List] globalaccelerator:ListCustomRoutingAccelerators.

---

##### `ListCustomRoutingEndpointGroups`<sup>Required</sup> <a name="ListCustomRoutingEndpointGroups" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingEndpointGroups"></a>

```typescript
public readonly ListCustomRoutingEndpointGroups: string;
```

- *Type:* string

[List] globalaccelerator:ListCustomRoutingEndpointGroups.

---

##### `ListCustomRoutingListeners`<sup>Required</sup> <a name="ListCustomRoutingListeners" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingListeners"></a>

```typescript
public readonly ListCustomRoutingListeners: string;
```

- *Type:* string

[List] globalaccelerator:ListCustomRoutingListeners.

---

##### `ListCustomRoutingPortMappings`<sup>Required</sup> <a name="ListCustomRoutingPortMappings" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingPortMappings"></a>

```typescript
public readonly ListCustomRoutingPortMappings: string;
```

- *Type:* string

[List] globalaccelerator:ListCustomRoutingPortMappings.

---

##### `ListCustomRoutingPortMappingsByDestination`<sup>Required</sup> <a name="ListCustomRoutingPortMappingsByDestination" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListCustomRoutingPortMappingsByDestination"></a>

```typescript
public readonly ListCustomRoutingPortMappingsByDestination: string;
```

- *Type:* string

[List] globalaccelerator:ListCustomRoutingPortMappingsByDestination.

---

##### `ListEndpointGroups`<sup>Required</sup> <a name="ListEndpointGroups" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListEndpointGroups"></a>

```typescript
public readonly ListEndpointGroups: string;
```

- *Type:* string

[List] globalaccelerator:ListEndpointGroups.

---

##### `ListListeners`<sup>Required</sup> <a name="ListListeners" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListListeners"></a>

```typescript
public readonly ListListeners: string;
```

- *Type:* string

[List] globalaccelerator:ListListeners.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] globalaccelerator:ListTagsForResource.

---

##### `ProvisionByoipCidr`<sup>Required</sup> <a name="ProvisionByoipCidr" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.ProvisionByoipCidr"></a>

```typescript
public readonly ProvisionByoipCidr: string;
```

- *Type:* string

[Write] globalaccelerator:ProvisionByoipCidr.

---

##### `RemoveCustomRoutingEndpoints`<sup>Required</sup> <a name="RemoveCustomRoutingEndpoints" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.RemoveCustomRoutingEndpoints"></a>

```typescript
public readonly RemoveCustomRoutingEndpoints: string;
```

- *Type:* string

[Write] globalaccelerator:RemoveCustomRoutingEndpoints.

---

##### `RemoveEndpoints`<sup>Required</sup> <a name="RemoveEndpoints" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.RemoveEndpoints"></a>

```typescript
public readonly RemoveEndpoints: string;
```

- *Type:* string

[Write] globalaccelerator:RemoveEndpoints.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] globalaccelerator:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] globalaccelerator:UntagResource.

---

##### `UpdateAccelerator`<sup>Required</sup> <a name="UpdateAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateAccelerator"></a>

```typescript
public readonly UpdateAccelerator: string;
```

- *Type:* string

[Write] globalaccelerator:UpdateAccelerator.

---

##### `UpdateAcceleratorAttributes`<sup>Required</sup> <a name="UpdateAcceleratorAttributes" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateAcceleratorAttributes"></a>

```typescript
public readonly UpdateAcceleratorAttributes: string;
```

- *Type:* string

[Write] globalaccelerator:UpdateAcceleratorAttributes.

---

##### `UpdateCrossAccountAttachment`<sup>Required</sup> <a name="UpdateCrossAccountAttachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateCrossAccountAttachment"></a>

```typescript
public readonly UpdateCrossAccountAttachment: string;
```

- *Type:* string

[Write] globalaccelerator:UpdateCrossAccountAttachment.

---

##### `UpdateCustomRoutingAccelerator`<sup>Required</sup> <a name="UpdateCustomRoutingAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateCustomRoutingAccelerator"></a>

```typescript
public readonly UpdateCustomRoutingAccelerator: string;
```

- *Type:* string

[Write] globalaccelerator:UpdateCustomRoutingAccelerator.

---

##### `UpdateCustomRoutingAcceleratorAttributes`<sup>Required</sup> <a name="UpdateCustomRoutingAcceleratorAttributes" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateCustomRoutingAcceleratorAttributes"></a>

```typescript
public readonly UpdateCustomRoutingAcceleratorAttributes: string;
```

- *Type:* string

[Write] globalaccelerator:UpdateCustomRoutingAcceleratorAttributes.

---

##### `UpdateCustomRoutingListener`<sup>Required</sup> <a name="UpdateCustomRoutingListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateCustomRoutingListener"></a>

```typescript
public readonly UpdateCustomRoutingListener: string;
```

- *Type:* string

[Write] globalaccelerator:UpdateCustomRoutingListener.

---

##### `UpdateEndpointGroup`<sup>Required</sup> <a name="UpdateEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateEndpointGroup"></a>

```typescript
public readonly UpdateEndpointGroup: string;
```

- *Type:* string

[Write] globalaccelerator:UpdateEndpointGroup.

---

##### `UpdateListener`<sup>Required</sup> <a name="UpdateListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.UpdateListener"></a>

```typescript
public readonly UpdateListener: string;
```

- *Type:* string

[Write] globalaccelerator:UpdateListener.

---

##### `WithdrawByoipCidr`<sup>Required</sup> <a name="WithdrawByoipCidr" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorActions.property.WithdrawByoipCidr"></a>

```typescript
public readonly WithdrawByoipCidr: string;
```

- *Type:* string

[Write] globalaccelerator:WithdrawByoipCidr.

---

### GlobalAcceleratorConditions <a name="GlobalAcceleratorConditions" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions"></a>

Condition key constants and builders for globalaccelerator.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

new globalaccelerator.GlobalAcceleratorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.requestTag"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.resourceTag"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.tagKeys"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.CreateAcceleratorConditionKeys">CreateAcceleratorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccelerator action. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.CreateCrossAccountAttachmentConditionKeys">CreateCrossAccountAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCrossAccountAttachment action. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.CreateCustomRoutingAcceleratorConditionKeys">CreateCustomRoutingAcceleratorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomRoutingAccelerator action. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAcceleratorConditionKeys`<sup>Required</sup> <a name="CreateAcceleratorConditionKeys" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.CreateAcceleratorConditionKeys"></a>

```typescript
public readonly CreateAcceleratorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccelerator action.

---

##### `CreateCrossAccountAttachmentConditionKeys`<sup>Required</sup> <a name="CreateCrossAccountAttachmentConditionKeys" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.CreateCrossAccountAttachmentConditionKeys"></a>

```typescript
public readonly CreateCrossAccountAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCrossAccountAttachment action.

---

##### `CreateCustomRoutingAcceleratorConditionKeys`<sup>Required</sup> <a name="CreateCustomRoutingAcceleratorConditionKeys" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.CreateCustomRoutingAcceleratorConditionKeys"></a>

```typescript
public readonly CreateCustomRoutingAcceleratorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomRoutingAccelerator action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### GlobalAcceleratorOperations <a name="GlobalAcceleratorOperations" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations"></a>

API operation to required IAM actions mapping for globalaccelerator.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

new globalaccelerator.GlobalAcceleratorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.AddCustomRoutingEndpoints">AddCustomRoutingEndpoints</a></code> | <code>string[]</code> | IAM actions required for the AddCustomRoutingEndpoints API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.AddEndpoints">AddEndpoints</a></code> | <code>string[]</code> | IAM actions required for the AddEndpoints API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.AdvertiseByoipCidr">AdvertiseByoipCidr</a></code> | <code>string[]</code> | IAM actions required for the AdvertiseByoipCidr API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.AllowCustomRoutingTraffic">AllowCustomRoutingTraffic</a></code> | <code>string[]</code> | IAM actions required for the AllowCustomRoutingTraffic API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateAccelerator">CreateAccelerator</a></code> | <code>string[]</code> | IAM actions required for the CreateAccelerator API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateCrossAccountAttachment">CreateCrossAccountAttachment</a></code> | <code>string[]</code> | IAM actions required for the CreateCrossAccountAttachment API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateCustomRoutingAccelerator">CreateCustomRoutingAccelerator</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomRoutingAccelerator API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateCustomRoutingEndpointGroup">CreateCustomRoutingEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomRoutingEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateCustomRoutingListener">CreateCustomRoutingListener</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomRoutingListener API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateEndpointGroup">CreateEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateListener">CreateListener</a></code> | <code>string[]</code> | IAM actions required for the CreateListener API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteAccelerator">DeleteAccelerator</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccelerator API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteCrossAccountAttachment">DeleteCrossAccountAttachment</a></code> | <code>string[]</code> | IAM actions required for the DeleteCrossAccountAttachment API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteCustomRoutingAccelerator">DeleteCustomRoutingAccelerator</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomRoutingAccelerator API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteCustomRoutingEndpointGroup">DeleteCustomRoutingEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomRoutingEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteCustomRoutingListener">DeleteCustomRoutingListener</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomRoutingListener API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteEndpointGroup">DeleteEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteListener">DeleteListener</a></code> | <code>string[]</code> | IAM actions required for the DeleteListener API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DenyCustomRoutingTraffic">DenyCustomRoutingTraffic</a></code> | <code>string[]</code> | IAM actions required for the DenyCustomRoutingTraffic API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeprovisionByoipCidr">DeprovisionByoipCidr</a></code> | <code>string[]</code> | IAM actions required for the DeprovisionByoipCidr API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeAccelerator">DescribeAccelerator</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccelerator API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeAcceleratorAttributes">DescribeAcceleratorAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAcceleratorAttributes API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCrossAccountAttachment">DescribeCrossAccountAttachment</a></code> | <code>string[]</code> | IAM actions required for the DescribeCrossAccountAttachment API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCustomRoutingAccelerator">DescribeCustomRoutingAccelerator</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomRoutingAccelerator API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCustomRoutingAcceleratorAttributes">DescribeCustomRoutingAcceleratorAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomRoutingAcceleratorAttributes API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCustomRoutingEndpointGroup">DescribeCustomRoutingEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomRoutingEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCustomRoutingListener">DescribeCustomRoutingListener</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomRoutingListener API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeEndpointGroup">DescribeEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeListener">DescribeListener</a></code> | <code>string[]</code> | IAM actions required for the DescribeListener API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListAccelerators">ListAccelerators</a></code> | <code>string[]</code> | IAM actions required for the ListAccelerators API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListByoipCidrs">ListByoipCidrs</a></code> | <code>string[]</code> | IAM actions required for the ListByoipCidrs API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCrossAccountAttachments">ListCrossAccountAttachments</a></code> | <code>string[]</code> | IAM actions required for the ListCrossAccountAttachments API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCrossAccountResourceAccounts">ListCrossAccountResourceAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListCrossAccountResourceAccounts API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCrossAccountResources">ListCrossAccountResources</a></code> | <code>string[]</code> | IAM actions required for the ListCrossAccountResources API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingAccelerators">ListCustomRoutingAccelerators</a></code> | <code>string[]</code> | IAM actions required for the ListCustomRoutingAccelerators API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingEndpointGroups">ListCustomRoutingEndpointGroups</a></code> | <code>string[]</code> | IAM actions required for the ListCustomRoutingEndpointGroups API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingListeners">ListCustomRoutingListeners</a></code> | <code>string[]</code> | IAM actions required for the ListCustomRoutingListeners API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingPortMappings">ListCustomRoutingPortMappings</a></code> | <code>string[]</code> | IAM actions required for the ListCustomRoutingPortMappings API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingPortMappingsByDestination">ListCustomRoutingPortMappingsByDestination</a></code> | <code>string[]</code> | IAM actions required for the ListCustomRoutingPortMappingsByDestination API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListEndpointGroups">ListEndpointGroups</a></code> | <code>string[]</code> | IAM actions required for the ListEndpointGroups API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListListeners">ListListeners</a></code> | <code>string[]</code> | IAM actions required for the ListListeners API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ProvisionByoipCidr">ProvisionByoipCidr</a></code> | <code>string[]</code> | IAM actions required for the ProvisionByoipCidr API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.RemoveCustomRoutingEndpoints">RemoveCustomRoutingEndpoints</a></code> | <code>string[]</code> | IAM actions required for the RemoveCustomRoutingEndpoints API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.RemoveEndpoints">RemoveEndpoints</a></code> | <code>string[]</code> | IAM actions required for the RemoveEndpoints API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateAccelerator">UpdateAccelerator</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccelerator API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateAcceleratorAttributes">UpdateAcceleratorAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateAcceleratorAttributes API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateCrossAccountAttachment">UpdateCrossAccountAttachment</a></code> | <code>string[]</code> | IAM actions required for the UpdateCrossAccountAttachment API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateCustomRoutingAccelerator">UpdateCustomRoutingAccelerator</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomRoutingAccelerator API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateCustomRoutingAcceleratorAttributes">UpdateCustomRoutingAcceleratorAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomRoutingAcceleratorAttributes API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateCustomRoutingListener">UpdateCustomRoutingListener</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomRoutingListener API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateEndpointGroup">UpdateEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateListener">UpdateListener</a></code> | <code>string[]</code> | IAM actions required for the UpdateListener API call. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.WithdrawByoipCidr">WithdrawByoipCidr</a></code> | <code>string[]</code> | IAM actions required for the WithdrawByoipCidr API call. |

---

##### `AddCustomRoutingEndpoints`<sup>Required</sup> <a name="AddCustomRoutingEndpoints" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.AddCustomRoutingEndpoints"></a>

```typescript
public readonly AddCustomRoutingEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the AddCustomRoutingEndpoints API call.

---

##### `AddEndpoints`<sup>Required</sup> <a name="AddEndpoints" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.AddEndpoints"></a>

```typescript
public readonly AddEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the AddEndpoints API call.

---

##### `AdvertiseByoipCidr`<sup>Required</sup> <a name="AdvertiseByoipCidr" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.AdvertiseByoipCidr"></a>

```typescript
public readonly AdvertiseByoipCidr: string[];
```

- *Type:* string[]

IAM actions required for the AdvertiseByoipCidr API call.

---

##### `AllowCustomRoutingTraffic`<sup>Required</sup> <a name="AllowCustomRoutingTraffic" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.AllowCustomRoutingTraffic"></a>

```typescript
public readonly AllowCustomRoutingTraffic: string[];
```

- *Type:* string[]

IAM actions required for the AllowCustomRoutingTraffic API call.

---

##### `CreateAccelerator`<sup>Required</sup> <a name="CreateAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateAccelerator"></a>

```typescript
public readonly CreateAccelerator: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccelerator API call.

---

##### `CreateCrossAccountAttachment`<sup>Required</sup> <a name="CreateCrossAccountAttachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateCrossAccountAttachment"></a>

```typescript
public readonly CreateCrossAccountAttachment: string[];
```

- *Type:* string[]

IAM actions required for the CreateCrossAccountAttachment API call.

---

##### `CreateCustomRoutingAccelerator`<sup>Required</sup> <a name="CreateCustomRoutingAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateCustomRoutingAccelerator"></a>

```typescript
public readonly CreateCustomRoutingAccelerator: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomRoutingAccelerator API call.

---

##### `CreateCustomRoutingEndpointGroup`<sup>Required</sup> <a name="CreateCustomRoutingEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateCustomRoutingEndpointGroup"></a>

```typescript
public readonly CreateCustomRoutingEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomRoutingEndpointGroup API call.

---

##### `CreateCustomRoutingListener`<sup>Required</sup> <a name="CreateCustomRoutingListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateCustomRoutingListener"></a>

```typescript
public readonly CreateCustomRoutingListener: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomRoutingListener API call.

---

##### `CreateEndpointGroup`<sup>Required</sup> <a name="CreateEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateEndpointGroup"></a>

```typescript
public readonly CreateEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateEndpointGroup API call.

---

##### `CreateListener`<sup>Required</sup> <a name="CreateListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.CreateListener"></a>

```typescript
public readonly CreateListener: string[];
```

- *Type:* string[]

IAM actions required for the CreateListener API call.

---

##### `DeleteAccelerator`<sup>Required</sup> <a name="DeleteAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteAccelerator"></a>

```typescript
public readonly DeleteAccelerator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccelerator API call.

---

##### `DeleteCrossAccountAttachment`<sup>Required</sup> <a name="DeleteCrossAccountAttachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteCrossAccountAttachment"></a>

```typescript
public readonly DeleteCrossAccountAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCrossAccountAttachment API call.

---

##### `DeleteCustomRoutingAccelerator`<sup>Required</sup> <a name="DeleteCustomRoutingAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteCustomRoutingAccelerator"></a>

```typescript
public readonly DeleteCustomRoutingAccelerator: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomRoutingAccelerator API call.

---

##### `DeleteCustomRoutingEndpointGroup`<sup>Required</sup> <a name="DeleteCustomRoutingEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteCustomRoutingEndpointGroup"></a>

```typescript
public readonly DeleteCustomRoutingEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomRoutingEndpointGroup API call.

---

##### `DeleteCustomRoutingListener`<sup>Required</sup> <a name="DeleteCustomRoutingListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteCustomRoutingListener"></a>

```typescript
public readonly DeleteCustomRoutingListener: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomRoutingListener API call.

---

##### `DeleteEndpointGroup`<sup>Required</sup> <a name="DeleteEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteEndpointGroup"></a>

```typescript
public readonly DeleteEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpointGroup API call.

---

##### `DeleteListener`<sup>Required</sup> <a name="DeleteListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeleteListener"></a>

```typescript
public readonly DeleteListener: string[];
```

- *Type:* string[]

IAM actions required for the DeleteListener API call.

---

##### `DenyCustomRoutingTraffic`<sup>Required</sup> <a name="DenyCustomRoutingTraffic" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DenyCustomRoutingTraffic"></a>

```typescript
public readonly DenyCustomRoutingTraffic: string[];
```

- *Type:* string[]

IAM actions required for the DenyCustomRoutingTraffic API call.

---

##### `DeprovisionByoipCidr`<sup>Required</sup> <a name="DeprovisionByoipCidr" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DeprovisionByoipCidr"></a>

```typescript
public readonly DeprovisionByoipCidr: string[];
```

- *Type:* string[]

IAM actions required for the DeprovisionByoipCidr API call.

---

##### `DescribeAccelerator`<sup>Required</sup> <a name="DescribeAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeAccelerator"></a>

```typescript
public readonly DescribeAccelerator: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccelerator API call.

---

##### `DescribeAcceleratorAttributes`<sup>Required</sup> <a name="DescribeAcceleratorAttributes" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeAcceleratorAttributes"></a>

```typescript
public readonly DescribeAcceleratorAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAcceleratorAttributes API call.

---

##### `DescribeCrossAccountAttachment`<sup>Required</sup> <a name="DescribeCrossAccountAttachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCrossAccountAttachment"></a>

```typescript
public readonly DescribeCrossAccountAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCrossAccountAttachment API call.

---

##### `DescribeCustomRoutingAccelerator`<sup>Required</sup> <a name="DescribeCustomRoutingAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCustomRoutingAccelerator"></a>

```typescript
public readonly DescribeCustomRoutingAccelerator: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomRoutingAccelerator API call.

---

##### `DescribeCustomRoutingAcceleratorAttributes`<sup>Required</sup> <a name="DescribeCustomRoutingAcceleratorAttributes" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCustomRoutingAcceleratorAttributes"></a>

```typescript
public readonly DescribeCustomRoutingAcceleratorAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomRoutingAcceleratorAttributes API call.

---

##### `DescribeCustomRoutingEndpointGroup`<sup>Required</sup> <a name="DescribeCustomRoutingEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCustomRoutingEndpointGroup"></a>

```typescript
public readonly DescribeCustomRoutingEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomRoutingEndpointGroup API call.

---

##### `DescribeCustomRoutingListener`<sup>Required</sup> <a name="DescribeCustomRoutingListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeCustomRoutingListener"></a>

```typescript
public readonly DescribeCustomRoutingListener: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomRoutingListener API call.

---

##### `DescribeEndpointGroup`<sup>Required</sup> <a name="DescribeEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeEndpointGroup"></a>

```typescript
public readonly DescribeEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpointGroup API call.

---

##### `DescribeListener`<sup>Required</sup> <a name="DescribeListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.DescribeListener"></a>

```typescript
public readonly DescribeListener: string[];
```

- *Type:* string[]

IAM actions required for the DescribeListener API call.

---

##### `ListAccelerators`<sup>Required</sup> <a name="ListAccelerators" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListAccelerators"></a>

```typescript
public readonly ListAccelerators: string[];
```

- *Type:* string[]

IAM actions required for the ListAccelerators API call.

---

##### `ListByoipCidrs`<sup>Required</sup> <a name="ListByoipCidrs" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListByoipCidrs"></a>

```typescript
public readonly ListByoipCidrs: string[];
```

- *Type:* string[]

IAM actions required for the ListByoipCidrs API call.

---

##### `ListCrossAccountAttachments`<sup>Required</sup> <a name="ListCrossAccountAttachments" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCrossAccountAttachments"></a>

```typescript
public readonly ListCrossAccountAttachments: string[];
```

- *Type:* string[]

IAM actions required for the ListCrossAccountAttachments API call.

---

##### `ListCrossAccountResourceAccounts`<sup>Required</sup> <a name="ListCrossAccountResourceAccounts" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCrossAccountResourceAccounts"></a>

```typescript
public readonly ListCrossAccountResourceAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListCrossAccountResourceAccounts API call.

---

##### `ListCrossAccountResources`<sup>Required</sup> <a name="ListCrossAccountResources" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCrossAccountResources"></a>

```typescript
public readonly ListCrossAccountResources: string[];
```

- *Type:* string[]

IAM actions required for the ListCrossAccountResources API call.

---

##### `ListCustomRoutingAccelerators`<sup>Required</sup> <a name="ListCustomRoutingAccelerators" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingAccelerators"></a>

```typescript
public readonly ListCustomRoutingAccelerators: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomRoutingAccelerators API call.

---

##### `ListCustomRoutingEndpointGroups`<sup>Required</sup> <a name="ListCustomRoutingEndpointGroups" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingEndpointGroups"></a>

```typescript
public readonly ListCustomRoutingEndpointGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomRoutingEndpointGroups API call.

---

##### `ListCustomRoutingListeners`<sup>Required</sup> <a name="ListCustomRoutingListeners" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingListeners"></a>

```typescript
public readonly ListCustomRoutingListeners: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomRoutingListeners API call.

---

##### `ListCustomRoutingPortMappings`<sup>Required</sup> <a name="ListCustomRoutingPortMappings" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingPortMappings"></a>

```typescript
public readonly ListCustomRoutingPortMappings: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomRoutingPortMappings API call.

---

##### `ListCustomRoutingPortMappingsByDestination`<sup>Required</sup> <a name="ListCustomRoutingPortMappingsByDestination" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListCustomRoutingPortMappingsByDestination"></a>

```typescript
public readonly ListCustomRoutingPortMappingsByDestination: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomRoutingPortMappingsByDestination API call.

---

##### `ListEndpointGroups`<sup>Required</sup> <a name="ListEndpointGroups" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListEndpointGroups"></a>

```typescript
public readonly ListEndpointGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListEndpointGroups API call.

---

##### `ListListeners`<sup>Required</sup> <a name="ListListeners" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListListeners"></a>

```typescript
public readonly ListListeners: string[];
```

- *Type:* string[]

IAM actions required for the ListListeners API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ProvisionByoipCidr`<sup>Required</sup> <a name="ProvisionByoipCidr" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.ProvisionByoipCidr"></a>

```typescript
public readonly ProvisionByoipCidr: string[];
```

- *Type:* string[]

IAM actions required for the ProvisionByoipCidr API call.

---

##### `RemoveCustomRoutingEndpoints`<sup>Required</sup> <a name="RemoveCustomRoutingEndpoints" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.RemoveCustomRoutingEndpoints"></a>

```typescript
public readonly RemoveCustomRoutingEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the RemoveCustomRoutingEndpoints API call.

---

##### `RemoveEndpoints`<sup>Required</sup> <a name="RemoveEndpoints" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.RemoveEndpoints"></a>

```typescript
public readonly RemoveEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the RemoveEndpoints API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccelerator`<sup>Required</sup> <a name="UpdateAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateAccelerator"></a>

```typescript
public readonly UpdateAccelerator: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccelerator API call.

---

##### `UpdateAcceleratorAttributes`<sup>Required</sup> <a name="UpdateAcceleratorAttributes" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateAcceleratorAttributes"></a>

```typescript
public readonly UpdateAcceleratorAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAcceleratorAttributes API call.

---

##### `UpdateCrossAccountAttachment`<sup>Required</sup> <a name="UpdateCrossAccountAttachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateCrossAccountAttachment"></a>

```typescript
public readonly UpdateCrossAccountAttachment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCrossAccountAttachment API call.

---

##### `UpdateCustomRoutingAccelerator`<sup>Required</sup> <a name="UpdateCustomRoutingAccelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateCustomRoutingAccelerator"></a>

```typescript
public readonly UpdateCustomRoutingAccelerator: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomRoutingAccelerator API call.

---

##### `UpdateCustomRoutingAcceleratorAttributes`<sup>Required</sup> <a name="UpdateCustomRoutingAcceleratorAttributes" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateCustomRoutingAcceleratorAttributes"></a>

```typescript
public readonly UpdateCustomRoutingAcceleratorAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomRoutingAcceleratorAttributes API call.

---

##### `UpdateCustomRoutingListener`<sup>Required</sup> <a name="UpdateCustomRoutingListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateCustomRoutingListener"></a>

```typescript
public readonly UpdateCustomRoutingListener: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomRoutingListener API call.

---

##### `UpdateEndpointGroup`<sup>Required</sup> <a name="UpdateEndpointGroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateEndpointGroup"></a>

```typescript
public readonly UpdateEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEndpointGroup API call.

---

##### `UpdateListener`<sup>Required</sup> <a name="UpdateListener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.UpdateListener"></a>

```typescript
public readonly UpdateListener: string[];
```

- *Type:* string[]

IAM actions required for the UpdateListener API call.

---

##### `WithdrawByoipCidr`<sup>Required</sup> <a name="WithdrawByoipCidr" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorOperations.property.WithdrawByoipCidr"></a>

```typescript
public readonly WithdrawByoipCidr: string[];
```

- *Type:* string[]

IAM actions required for the WithdrawByoipCidr API call.

---

### GlobalAcceleratorResources <a name="GlobalAcceleratorResources" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources"></a>

ARN builders, validators, and parsers for globalaccelerator resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.Initializer"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

new globalaccelerator.GlobalAcceleratorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.accelerator">accelerator</a></code> | Builds an ARN for the accelerator resource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.attachment">attachment</a></code> | Builds an ARN for the attachment resource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.endpointgroup">endpointgroup</a></code> | Builds an ARN for the endpointgroup resource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidAcceleratorArn">isValidAcceleratorArn</a></code> | Validates whether a string is a valid ARN for the accelerator resource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidAttachmentArn">isValidAttachmentArn</a></code> | Validates whether a string is a valid ARN for the attachment resource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidEndpointgroupArn">isValidEndpointgroupArn</a></code> | Validates whether a string is a valid ARN for the endpointgroup resource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidListenerArn">isValidListenerArn</a></code> | Validates whether a string is a valid ARN for the listener resource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.listener">listener</a></code> | Builds an ARN for the listener resource. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseAcceleratorArn">parseAcceleratorArn</a></code> | Parses a accelerator ARN into its components. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseAttachmentArn">parseAttachmentArn</a></code> | Parses a attachment ARN into its components. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseEndpointgroupArn">parseEndpointgroupArn</a></code> | Parses a endpointgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseListenerArn">parseListenerArn</a></code> | Parses a listener ARN into its components. |

---

##### `accelerator` <a name="accelerator" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.accelerator"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.accelerator(props: GlobalAcceleratorAcceleratorArnProps)
```

Builds an ARN for the accelerator resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.accelerator.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAcceleratorArnProps">GlobalAcceleratorAcceleratorArnProps</a>

---

##### `attachment` <a name="attachment" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.attachment"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.attachment(props: GlobalAcceleratorAttachmentArnProps)
```

Builds an ARN for the attachment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.attachment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorAttachmentArnProps">GlobalAcceleratorAttachmentArnProps</a>

---

##### `endpointgroup` <a name="endpointgroup" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.endpointgroup"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.endpointgroup(props: GlobalAcceleratorEndpointgroupArnProps)
```

Builds an ARN for the endpointgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.endpointgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorEndpointgroupArnProps">GlobalAcceleratorEndpointgroupArnProps</a>

---

##### `isValidAcceleratorArn` <a name="isValidAcceleratorArn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidAcceleratorArn"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.isValidAcceleratorArn(arn: string)
```

Validates whether a string is a valid ARN for the accelerator resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidAcceleratorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAttachmentArn` <a name="isValidAttachmentArn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidAttachmentArn"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.isValidAttachmentArn(arn: string)
```

Validates whether a string is a valid ARN for the attachment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidAttachmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEndpointgroupArn` <a name="isValidEndpointgroupArn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidEndpointgroupArn"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.isValidEndpointgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the endpointgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidEndpointgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListenerArn` <a name="isValidListenerArn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidListenerArn"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.isValidListenerArn(arn: string)
```

Validates whether a string is a valid ARN for the listener resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.isValidListenerArn.parameter.arn"></a>

- *Type:* string

---

##### `listener` <a name="listener" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.listener"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.listener(props: GlobalAcceleratorListenerArnProps)
```

Builds an ARN for the listener resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.listener.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.globalaccelerator.GlobalAcceleratorListenerArnProps">GlobalAcceleratorListenerArnProps</a>

---

##### `parseAcceleratorArn` <a name="parseAcceleratorArn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseAcceleratorArn"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.parseAcceleratorArn(arn: string)
```

Parses a accelerator ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseAcceleratorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAttachmentArn` <a name="parseAttachmentArn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseAttachmentArn"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.parseAttachmentArn(arn: string)
```

Parses a attachment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseAttachmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEndpointgroupArn` <a name="parseEndpointgroupArn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseEndpointgroupArn"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.parseEndpointgroupArn(arn: string)
```

Parses a endpointgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseEndpointgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListenerArn` <a name="parseListenerArn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseListenerArn"></a>

```typescript
import { globalaccelerator } from '@cdk_utils/iam'

globalaccelerator.GlobalAcceleratorResources.parseListenerArn(arn: string)
```

Parses a listener ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.globalaccelerator.GlobalAcceleratorResources.parseListenerArn.parameter.arn"></a>

- *Type:* string

---




