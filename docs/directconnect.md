# `directconnect` Submodule <a name="`directconnect` Submodule" id="@cdk_utils/iam.directconnect"></a>


## Structs <a name="Structs" id="Structs"></a>

### DirectConnectDxconArnComponents <a name="DirectConnectDxconArnComponents" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents"></a>

Parsed components of a dxcon ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

const directConnectDxconArnComponents: directconnect.DirectConnectDxconArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DirectConnectDxconArnProps <a name="DirectConnectDxconArnProps" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnProps"></a>

Properties for building a dxcon ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

const directConnectDxconArnProps: directconnect.DirectConnectDxconArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.directconnect.DirectConnectDxconArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DirectConnectDxGatewayArnComponents <a name="DirectConnectDxGatewayArnComponents" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnComponents"></a>

Parsed components of a dx-gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnComponents.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

const directConnectDxGatewayArnComponents: directconnect.DirectConnectDxGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnComponents.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | The DirectConnectGatewayId component. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnComponents.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

The DirectConnectGatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### DirectConnectDxGatewayArnProps <a name="DirectConnectDxGatewayArnProps" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps"></a>

Properties for building a dx-gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

const directConnectDxGatewayArnProps: directconnect.DirectConnectDxGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | The DirectConnectGatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

The DirectConnectGatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### DirectConnectDxlagArnComponents <a name="DirectConnectDxlagArnComponents" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents"></a>

Parsed components of a dxlag ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

const directConnectDxlagArnComponents: directconnect.DirectConnectDxlagArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.property.lagId">lagId</a></code> | <code>string</code> | The LagId component. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `lagId`<sup>Required</sup> <a name="lagId" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.property.lagId"></a>

```typescript
public readonly lagId: string;
```

- *Type:* string

The LagId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### DirectConnectDxlagArnProps <a name="DirectConnectDxlagArnProps" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps"></a>

Properties for building a dxlag ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

const directConnectDxlagArnProps: directconnect.DirectConnectDxlagArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.property.lagId">lagId</a></code> | <code>string</code> | The LagId component of the ARN. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `lagId`<sup>Required</sup> <a name="lagId" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.property.lagId"></a>

```typescript
public readonly lagId: string;
```

- *Type:* string

The LagId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### DirectConnectDxvifArnComponents <a name="DirectConnectDxvifArnComponents" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents"></a>

Parsed components of a dxvif ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

const directConnectDxvifArnComponents: directconnect.DirectConnectDxvifArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | The VirtualInterfaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnComponents.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

The VirtualInterfaceId component.

---

### DirectConnectDxvifArnProps <a name="DirectConnectDxvifArnProps" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps"></a>

Properties for building a dxvif ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

const directConnectDxvifArnProps: directconnect.DirectConnectDxvifArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | The VirtualInterfaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

The VirtualInterfaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DirectConnectActions <a name="DirectConnectActions" id="@cdk_utils/iam.directconnect.DirectConnectActions"></a>

IAM action constants for the directconnect service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.directconnect.DirectConnectActions.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

new directconnect.DirectConnectActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AcceptDirectConnectGatewayAssociationProposal">AcceptDirectConnectGatewayAssociationProposal</a></code> | <code>string</code> | [Write] directconnect:AcceptDirectConnectGatewayAssociationProposal. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocateConnectionOnInterconnect">AllocateConnectionOnInterconnect</a></code> | <code>string</code> | [Write] directconnect:AllocateConnectionOnInterconnect. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocateHostedConnection">AllocateHostedConnection</a></code> | <code>string</code> | [Write] directconnect:AllocateHostedConnection. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocatePrivateVirtualInterface">AllocatePrivateVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:AllocatePrivateVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocatePublicVirtualInterface">AllocatePublicVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:AllocatePublicVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocateTransitVirtualInterface">AllocateTransitVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:AllocateTransitVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AssociateConnectionWithLag">AssociateConnectionWithLag</a></code> | <code>string</code> | [Write] directconnect:AssociateConnectionWithLag. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AssociateHostedConnection">AssociateHostedConnection</a></code> | <code>string</code> | [Write] directconnect:AssociateHostedConnection. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AssociateMacSecKey">AssociateMacSecKey</a></code> | <code>string</code> | [Write] directconnect:AssociateMacSecKey. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.AssociateVirtualInterface">AssociateVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:AssociateVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmConnection">ConfirmConnection</a></code> | <code>string</code> | [Write] directconnect:ConfirmConnection. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmCustomerAgreement">ConfirmCustomerAgreement</a></code> | <code>string</code> | [Write] directconnect:ConfirmCustomerAgreement. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmPrivateVirtualInterface">ConfirmPrivateVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:ConfirmPrivateVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmPublicVirtualInterface">ConfirmPublicVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:ConfirmPublicVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmTransitVirtualInterface">ConfirmTransitVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:ConfirmTransitVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateBGPPeer">CreateBGPPeer</a></code> | <code>string</code> | [Write] directconnect:CreateBGPPeer. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] directconnect:CreateConnection. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateDirectConnectGateway">CreateDirectConnectGateway</a></code> | <code>string</code> | [Write] directconnect:CreateDirectConnectGateway. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateDirectConnectGatewayAssociation">CreateDirectConnectGatewayAssociation</a></code> | <code>string</code> | [Write] directconnect:CreateDirectConnectGatewayAssociation. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateDirectConnectGatewayAssociationProposal">CreateDirectConnectGatewayAssociationProposal</a></code> | <code>string</code> | [Write] directconnect:CreateDirectConnectGatewayAssociationProposal. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateInterconnect">CreateInterconnect</a></code> | <code>string</code> | [Write] directconnect:CreateInterconnect. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateLag">CreateLag</a></code> | <code>string</code> | [Write] directconnect:CreateLag. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreatePrivateVirtualInterface">CreatePrivateVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:CreatePrivateVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreatePublicVirtualInterface">CreatePublicVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:CreatePublicVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateTransitVirtualInterface">CreateTransitVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:CreateTransitVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteBGPPeer">DeleteBGPPeer</a></code> | <code>string</code> | [Write] directconnect:DeleteBGPPeer. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] directconnect:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteDirectConnectGateway">DeleteDirectConnectGateway</a></code> | <code>string</code> | [Write] directconnect:DeleteDirectConnectGateway. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteDirectConnectGatewayAssociation">DeleteDirectConnectGatewayAssociation</a></code> | <code>string</code> | [Write] directconnect:DeleteDirectConnectGatewayAssociation. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteDirectConnectGatewayAssociationProposal">DeleteDirectConnectGatewayAssociationProposal</a></code> | <code>string</code> | [Write] directconnect:DeleteDirectConnectGatewayAssociationProposal. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteInterconnect">DeleteInterconnect</a></code> | <code>string</code> | [Write] directconnect:DeleteInterconnect. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteLag">DeleteLag</a></code> | <code>string</code> | [Write] directconnect:DeleteLag. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteVirtualInterface">DeleteVirtualInterface</a></code> | <code>string</code> | [Write] directconnect:DeleteVirtualInterface. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeConnectionLoa">DescribeConnectionLoa</a></code> | <code>string</code> | [Read] directconnect:DescribeConnectionLoa. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeConnections">DescribeConnections</a></code> | <code>string</code> | [Read] directconnect:DescribeConnections. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeConnectionsOnInterconnect">DescribeConnectionsOnInterconnect</a></code> | <code>string</code> | [Read] directconnect:DescribeConnectionsOnInterconnect. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeCustomerMetadata">DescribeCustomerMetadata</a></code> | <code>string</code> | [Read] directconnect:DescribeCustomerMetadata. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeDirectConnectGatewayAssociationProposals">DescribeDirectConnectGatewayAssociationProposals</a></code> | <code>string</code> | [Read] directconnect:DescribeDirectConnectGatewayAssociationProposals. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeDirectConnectGatewayAssociations">DescribeDirectConnectGatewayAssociations</a></code> | <code>string</code> | [Read] directconnect:DescribeDirectConnectGatewayAssociations. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeDirectConnectGatewayAttachments">DescribeDirectConnectGatewayAttachments</a></code> | <code>string</code> | [Read] directconnect:DescribeDirectConnectGatewayAttachments. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeDirectConnectGateways">DescribeDirectConnectGateways</a></code> | <code>string</code> | [Read] directconnect:DescribeDirectConnectGateways. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeHostedConnections">DescribeHostedConnections</a></code> | <code>string</code> | [Read] directconnect:DescribeHostedConnections. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeInterconnectLoa">DescribeInterconnectLoa</a></code> | <code>string</code> | [Read] directconnect:DescribeInterconnectLoa. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeInterconnects">DescribeInterconnects</a></code> | <code>string</code> | [Read] directconnect:DescribeInterconnects. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeLags">DescribeLags</a></code> | <code>string</code> | [Read] directconnect:DescribeLags. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeLoa">DescribeLoa</a></code> | <code>string</code> | [Read] directconnect:DescribeLoa. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeLocations">DescribeLocations</a></code> | <code>string</code> | [Read] directconnect:DescribeLocations. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeRouterConfiguration">DescribeRouterConfiguration</a></code> | <code>string</code> | [Read] directconnect:DescribeRouterConfiguration. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeTags">DescribeTags</a></code> | <code>string</code> | [Read] directconnect:DescribeTags. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeVirtualGateways">DescribeVirtualGateways</a></code> | <code>string</code> | [Read] directconnect:DescribeVirtualGateways. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeVirtualInterfaces">DescribeVirtualInterfaces</a></code> | <code>string</code> | [Read] directconnect:DescribeVirtualInterfaces. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DisassociateConnectionFromLag">DisassociateConnectionFromLag</a></code> | <code>string</code> | [Write] directconnect:DisassociateConnectionFromLag. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.DisassociateMacSecKey">DisassociateMacSecKey</a></code> | <code>string</code> | [Write] directconnect:DisassociateMacSecKey. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.ListVirtualInterfaceRoutes">ListVirtualInterfaceRoutes</a></code> | <code>string</code> | [List] directconnect:ListVirtualInterfaceRoutes. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.ListVirtualInterfaceTestHistory">ListVirtualInterfaceTestHistory</a></code> | <code>string</code> | [List] directconnect:ListVirtualInterfaceTestHistory. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.StartBgpFailoverTest">StartBgpFailoverTest</a></code> | <code>string</code> | [Write] directconnect:StartBgpFailoverTest. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.StopBgpFailoverTest">StopBgpFailoverTest</a></code> | <code>string</code> | [Write] directconnect:StopBgpFailoverTest. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] directconnect:TagResource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] directconnect:UntagResource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateConnection">UpdateConnection</a></code> | <code>string</code> | [Write] directconnect:UpdateConnection. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateDirectConnectGateway">UpdateDirectConnectGateway</a></code> | <code>string</code> | [Write] directconnect:UpdateDirectConnectGateway. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateDirectConnectGatewayAssociation">UpdateDirectConnectGatewayAssociation</a></code> | <code>string</code> | [Write] directconnect:UpdateDirectConnectGatewayAssociation. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateLag">UpdateLag</a></code> | <code>string</code> | [Write] directconnect:UpdateLag. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateVirtualInterfaceAttributes">UpdateVirtualInterfaceAttributes</a></code> | <code>string</code> | [Write] directconnect:UpdateVirtualInterfaceAttributes. |

---

##### `AcceptDirectConnectGatewayAssociationProposal`<sup>Required</sup> <a name="AcceptDirectConnectGatewayAssociationProposal" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AcceptDirectConnectGatewayAssociationProposal"></a>

```typescript
public readonly AcceptDirectConnectGatewayAssociationProposal: string;
```

- *Type:* string

[Write] directconnect:AcceptDirectConnectGatewayAssociationProposal.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllocateConnectionOnInterconnect`<sup>Required</sup> <a name="AllocateConnectionOnInterconnect" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocateConnectionOnInterconnect"></a>

```typescript
public readonly AllocateConnectionOnInterconnect: string;
```

- *Type:* string

[Write] directconnect:AllocateConnectionOnInterconnect.

---

##### `AllocateHostedConnection`<sup>Required</sup> <a name="AllocateHostedConnection" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocateHostedConnection"></a>

```typescript
public readonly AllocateHostedConnection: string;
```

- *Type:* string

[Write] directconnect:AllocateHostedConnection.

---

##### `AllocatePrivateVirtualInterface`<sup>Required</sup> <a name="AllocatePrivateVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocatePrivateVirtualInterface"></a>

```typescript
public readonly AllocatePrivateVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:AllocatePrivateVirtualInterface.

---

##### `AllocatePublicVirtualInterface`<sup>Required</sup> <a name="AllocatePublicVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocatePublicVirtualInterface"></a>

```typescript
public readonly AllocatePublicVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:AllocatePublicVirtualInterface.

---

##### `AllocateTransitVirtualInterface`<sup>Required</sup> <a name="AllocateTransitVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllocateTransitVirtualInterface"></a>

```typescript
public readonly AllocateTransitVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:AllocateTransitVirtualInterface.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateConnectionWithLag`<sup>Required</sup> <a name="AssociateConnectionWithLag" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AssociateConnectionWithLag"></a>

```typescript
public readonly AssociateConnectionWithLag: string;
```

- *Type:* string

[Write] directconnect:AssociateConnectionWithLag.

---

##### `AssociateHostedConnection`<sup>Required</sup> <a name="AssociateHostedConnection" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AssociateHostedConnection"></a>

```typescript
public readonly AssociateHostedConnection: string;
```

- *Type:* string

[Write] directconnect:AssociateHostedConnection.

---

##### `AssociateMacSecKey`<sup>Required</sup> <a name="AssociateMacSecKey" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AssociateMacSecKey"></a>

```typescript
public readonly AssociateMacSecKey: string;
```

- *Type:* string

[Write] directconnect:AssociateMacSecKey.

---

##### `AssociateVirtualInterface`<sup>Required</sup> <a name="AssociateVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.AssociateVirtualInterface"></a>

```typescript
public readonly AssociateVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:AssociateVirtualInterface.

---

##### `ConfirmConnection`<sup>Required</sup> <a name="ConfirmConnection" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmConnection"></a>

```typescript
public readonly ConfirmConnection: string;
```

- *Type:* string

[Write] directconnect:ConfirmConnection.

---

##### `ConfirmCustomerAgreement`<sup>Required</sup> <a name="ConfirmCustomerAgreement" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmCustomerAgreement"></a>

```typescript
public readonly ConfirmCustomerAgreement: string;
```

- *Type:* string

[Write] directconnect:ConfirmCustomerAgreement.

---

##### `ConfirmPrivateVirtualInterface`<sup>Required</sup> <a name="ConfirmPrivateVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmPrivateVirtualInterface"></a>

```typescript
public readonly ConfirmPrivateVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:ConfirmPrivateVirtualInterface.

---

##### `ConfirmPublicVirtualInterface`<sup>Required</sup> <a name="ConfirmPublicVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmPublicVirtualInterface"></a>

```typescript
public readonly ConfirmPublicVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:ConfirmPublicVirtualInterface.

---

##### `ConfirmTransitVirtualInterface`<sup>Required</sup> <a name="ConfirmTransitVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.ConfirmTransitVirtualInterface"></a>

```typescript
public readonly ConfirmTransitVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:ConfirmTransitVirtualInterface.

---

##### `CreateBGPPeer`<sup>Required</sup> <a name="CreateBGPPeer" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateBGPPeer"></a>

```typescript
public readonly CreateBGPPeer: string;
```

- *Type:* string

[Write] directconnect:CreateBGPPeer.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] directconnect:CreateConnection.

---

##### `CreateDirectConnectGateway`<sup>Required</sup> <a name="CreateDirectConnectGateway" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateDirectConnectGateway"></a>

```typescript
public readonly CreateDirectConnectGateway: string;
```

- *Type:* string

[Write] directconnect:CreateDirectConnectGateway.

---

##### `CreateDirectConnectGatewayAssociation`<sup>Required</sup> <a name="CreateDirectConnectGatewayAssociation" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateDirectConnectGatewayAssociation"></a>

```typescript
public readonly CreateDirectConnectGatewayAssociation: string;
```

- *Type:* string

[Write] directconnect:CreateDirectConnectGatewayAssociation.

---

##### `CreateDirectConnectGatewayAssociationProposal`<sup>Required</sup> <a name="CreateDirectConnectGatewayAssociationProposal" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateDirectConnectGatewayAssociationProposal"></a>

```typescript
public readonly CreateDirectConnectGatewayAssociationProposal: string;
```

- *Type:* string

[Write] directconnect:CreateDirectConnectGatewayAssociationProposal.

---

##### `CreateInterconnect`<sup>Required</sup> <a name="CreateInterconnect" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateInterconnect"></a>

```typescript
public readonly CreateInterconnect: string;
```

- *Type:* string

[Write] directconnect:CreateInterconnect.

---

##### `CreateLag`<sup>Required</sup> <a name="CreateLag" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateLag"></a>

```typescript
public readonly CreateLag: string;
```

- *Type:* string

[Write] directconnect:CreateLag.

---

##### `CreatePrivateVirtualInterface`<sup>Required</sup> <a name="CreatePrivateVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreatePrivateVirtualInterface"></a>

```typescript
public readonly CreatePrivateVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:CreatePrivateVirtualInterface.

---

##### `CreatePublicVirtualInterface`<sup>Required</sup> <a name="CreatePublicVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreatePublicVirtualInterface"></a>

```typescript
public readonly CreatePublicVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:CreatePublicVirtualInterface.

---

##### `CreateTransitVirtualInterface`<sup>Required</sup> <a name="CreateTransitVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.CreateTransitVirtualInterface"></a>

```typescript
public readonly CreateTransitVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:CreateTransitVirtualInterface.

---

##### `DeleteBGPPeer`<sup>Required</sup> <a name="DeleteBGPPeer" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteBGPPeer"></a>

```typescript
public readonly DeleteBGPPeer: string;
```

- *Type:* string

[Write] directconnect:DeleteBGPPeer.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] directconnect:DeleteConnection.

---

##### `DeleteDirectConnectGateway`<sup>Required</sup> <a name="DeleteDirectConnectGateway" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteDirectConnectGateway"></a>

```typescript
public readonly DeleteDirectConnectGateway: string;
```

- *Type:* string

[Write] directconnect:DeleteDirectConnectGateway.

---

##### `DeleteDirectConnectGatewayAssociation`<sup>Required</sup> <a name="DeleteDirectConnectGatewayAssociation" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteDirectConnectGatewayAssociation"></a>

```typescript
public readonly DeleteDirectConnectGatewayAssociation: string;
```

- *Type:* string

[Write] directconnect:DeleteDirectConnectGatewayAssociation.

---

##### `DeleteDirectConnectGatewayAssociationProposal`<sup>Required</sup> <a name="DeleteDirectConnectGatewayAssociationProposal" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteDirectConnectGatewayAssociationProposal"></a>

```typescript
public readonly DeleteDirectConnectGatewayAssociationProposal: string;
```

- *Type:* string

[Write] directconnect:DeleteDirectConnectGatewayAssociationProposal.

---

##### `DeleteInterconnect`<sup>Required</sup> <a name="DeleteInterconnect" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteInterconnect"></a>

```typescript
public readonly DeleteInterconnect: string;
```

- *Type:* string

[Write] directconnect:DeleteInterconnect.

---

##### `DeleteLag`<sup>Required</sup> <a name="DeleteLag" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteLag"></a>

```typescript
public readonly DeleteLag: string;
```

- *Type:* string

[Write] directconnect:DeleteLag.

---

##### `DeleteVirtualInterface`<sup>Required</sup> <a name="DeleteVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DeleteVirtualInterface"></a>

```typescript
public readonly DeleteVirtualInterface: string;
```

- *Type:* string

[Write] directconnect:DeleteVirtualInterface.

---

##### `DescribeConnectionLoa`<sup>Required</sup> <a name="DescribeConnectionLoa" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeConnectionLoa"></a>

```typescript
public readonly DescribeConnectionLoa: string;
```

- *Type:* string

[Read] directconnect:DescribeConnectionLoa.

---

##### `DescribeConnections`<sup>Required</sup> <a name="DescribeConnections" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeConnections"></a>

```typescript
public readonly DescribeConnections: string;
```

- *Type:* string

[Read] directconnect:DescribeConnections.

---

##### `DescribeConnectionsOnInterconnect`<sup>Required</sup> <a name="DescribeConnectionsOnInterconnect" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeConnectionsOnInterconnect"></a>

```typescript
public readonly DescribeConnectionsOnInterconnect: string;
```

- *Type:* string

[Read] directconnect:DescribeConnectionsOnInterconnect.

---

##### `DescribeCustomerMetadata`<sup>Required</sup> <a name="DescribeCustomerMetadata" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeCustomerMetadata"></a>

```typescript
public readonly DescribeCustomerMetadata: string;
```

- *Type:* string

[Read] directconnect:DescribeCustomerMetadata.

---

##### `DescribeDirectConnectGatewayAssociationProposals`<sup>Required</sup> <a name="DescribeDirectConnectGatewayAssociationProposals" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeDirectConnectGatewayAssociationProposals"></a>

```typescript
public readonly DescribeDirectConnectGatewayAssociationProposals: string;
```

- *Type:* string

[Read] directconnect:DescribeDirectConnectGatewayAssociationProposals.

---

##### `DescribeDirectConnectGatewayAssociations`<sup>Required</sup> <a name="DescribeDirectConnectGatewayAssociations" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeDirectConnectGatewayAssociations"></a>

```typescript
public readonly DescribeDirectConnectGatewayAssociations: string;
```

- *Type:* string

[Read] directconnect:DescribeDirectConnectGatewayAssociations.

---

##### `DescribeDirectConnectGatewayAttachments`<sup>Required</sup> <a name="DescribeDirectConnectGatewayAttachments" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeDirectConnectGatewayAttachments"></a>

```typescript
public readonly DescribeDirectConnectGatewayAttachments: string;
```

- *Type:* string

[Read] directconnect:DescribeDirectConnectGatewayAttachments.

---

##### `DescribeDirectConnectGateways`<sup>Required</sup> <a name="DescribeDirectConnectGateways" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeDirectConnectGateways"></a>

```typescript
public readonly DescribeDirectConnectGateways: string;
```

- *Type:* string

[Read] directconnect:DescribeDirectConnectGateways.

---

##### `DescribeHostedConnections`<sup>Required</sup> <a name="DescribeHostedConnections" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeHostedConnections"></a>

```typescript
public readonly DescribeHostedConnections: string;
```

- *Type:* string

[Read] directconnect:DescribeHostedConnections.

---

##### `DescribeInterconnectLoa`<sup>Required</sup> <a name="DescribeInterconnectLoa" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeInterconnectLoa"></a>

```typescript
public readonly DescribeInterconnectLoa: string;
```

- *Type:* string

[Read] directconnect:DescribeInterconnectLoa.

---

##### `DescribeInterconnects`<sup>Required</sup> <a name="DescribeInterconnects" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeInterconnects"></a>

```typescript
public readonly DescribeInterconnects: string;
```

- *Type:* string

[Read] directconnect:DescribeInterconnects.

---

##### `DescribeLags`<sup>Required</sup> <a name="DescribeLags" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeLags"></a>

```typescript
public readonly DescribeLags: string;
```

- *Type:* string

[Read] directconnect:DescribeLags.

---

##### `DescribeLoa`<sup>Required</sup> <a name="DescribeLoa" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeLoa"></a>

```typescript
public readonly DescribeLoa: string;
```

- *Type:* string

[Read] directconnect:DescribeLoa.

---

##### `DescribeLocations`<sup>Required</sup> <a name="DescribeLocations" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeLocations"></a>

```typescript
public readonly DescribeLocations: string;
```

- *Type:* string

[Read] directconnect:DescribeLocations.

---

##### `DescribeRouterConfiguration`<sup>Required</sup> <a name="DescribeRouterConfiguration" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeRouterConfiguration"></a>

```typescript
public readonly DescribeRouterConfiguration: string;
```

- *Type:* string

[Read] directconnect:DescribeRouterConfiguration.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string;
```

- *Type:* string

[Read] directconnect:DescribeTags.

---

##### `DescribeVirtualGateways`<sup>Required</sup> <a name="DescribeVirtualGateways" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeVirtualGateways"></a>

```typescript
public readonly DescribeVirtualGateways: string;
```

- *Type:* string

[Read] directconnect:DescribeVirtualGateways.

---

##### `DescribeVirtualInterfaces`<sup>Required</sup> <a name="DescribeVirtualInterfaces" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DescribeVirtualInterfaces"></a>

```typescript
public readonly DescribeVirtualInterfaces: string;
```

- *Type:* string

[Read] directconnect:DescribeVirtualInterfaces.

---

##### `DisassociateConnectionFromLag`<sup>Required</sup> <a name="DisassociateConnectionFromLag" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DisassociateConnectionFromLag"></a>

```typescript
public readonly DisassociateConnectionFromLag: string;
```

- *Type:* string

[Write] directconnect:DisassociateConnectionFromLag.

---

##### `DisassociateMacSecKey`<sup>Required</sup> <a name="DisassociateMacSecKey" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.DisassociateMacSecKey"></a>

```typescript
public readonly DisassociateMacSecKey: string;
```

- *Type:* string

[Write] directconnect:DisassociateMacSecKey.

---

##### `ListVirtualInterfaceRoutes`<sup>Required</sup> <a name="ListVirtualInterfaceRoutes" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.ListVirtualInterfaceRoutes"></a>

```typescript
public readonly ListVirtualInterfaceRoutes: string;
```

- *Type:* string

[List] directconnect:ListVirtualInterfaceRoutes.

---

##### `ListVirtualInterfaceTestHistory`<sup>Required</sup> <a name="ListVirtualInterfaceTestHistory" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.ListVirtualInterfaceTestHistory"></a>

```typescript
public readonly ListVirtualInterfaceTestHistory: string;
```

- *Type:* string

[List] directconnect:ListVirtualInterfaceTestHistory.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartBgpFailoverTest`<sup>Required</sup> <a name="StartBgpFailoverTest" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.StartBgpFailoverTest"></a>

```typescript
public readonly StartBgpFailoverTest: string;
```

- *Type:* string

[Write] directconnect:StartBgpFailoverTest.

---

##### `StopBgpFailoverTest`<sup>Required</sup> <a name="StopBgpFailoverTest" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.StopBgpFailoverTest"></a>

```typescript
public readonly StopBgpFailoverTest: string;
```

- *Type:* string

[Write] directconnect:StopBgpFailoverTest.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] directconnect:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] directconnect:UntagResource.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string;
```

- *Type:* string

[Write] directconnect:UpdateConnection.

---

##### `UpdateDirectConnectGateway`<sup>Required</sup> <a name="UpdateDirectConnectGateway" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateDirectConnectGateway"></a>

```typescript
public readonly UpdateDirectConnectGateway: string;
```

- *Type:* string

[Write] directconnect:UpdateDirectConnectGateway.

---

##### `UpdateDirectConnectGatewayAssociation`<sup>Required</sup> <a name="UpdateDirectConnectGatewayAssociation" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateDirectConnectGatewayAssociation"></a>

```typescript
public readonly UpdateDirectConnectGatewayAssociation: string;
```

- *Type:* string

[Write] directconnect:UpdateDirectConnectGatewayAssociation.

---

##### `UpdateLag`<sup>Required</sup> <a name="UpdateLag" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateLag"></a>

```typescript
public readonly UpdateLag: string;
```

- *Type:* string

[Write] directconnect:UpdateLag.

---

##### `UpdateVirtualInterfaceAttributes`<sup>Required</sup> <a name="UpdateVirtualInterfaceAttributes" id="@cdk_utils/iam.directconnect.DirectConnectActions.property.UpdateVirtualInterfaceAttributes"></a>

```typescript
public readonly UpdateVirtualInterfaceAttributes: string;
```

- *Type:* string

[Write] directconnect:UpdateVirtualInterfaceAttributes.

---

### DirectConnectConditions <a name="DirectConnectConditions" id="@cdk_utils/iam.directconnect.DirectConnectConditions"></a>

Condition key constants and builders for directconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.directconnect.DirectConnectConditions.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

new directconnect.DirectConnectConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.directconnect.DirectConnectConditions.requestTag"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.directconnect.DirectConnectConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.directconnect.DirectConnectConditions.resourceTag"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.directconnect.DirectConnectConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.tagKeys"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.directconnect.DirectConnectConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.AllocateHostedConnectionConditionKeys">AllocateHostedConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AllocateHostedConnection action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.AllocatePrivateVirtualInterfaceConditionKeys">AllocatePrivateVirtualInterfaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AllocatePrivateVirtualInterface action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.AllocatePublicVirtualInterfaceConditionKeys">AllocatePublicVirtualInterfaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AllocatePublicVirtualInterface action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.AllocateTransitVirtualInterfaceConditionKeys">AllocateTransitVirtualInterfaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AllocateTransitVirtualInterface action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateConnectionConditionKeys">CreateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnection action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateDirectConnectGatewayConditionKeys">CreateDirectConnectGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDirectConnectGateway action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateInterconnectConditionKeys">CreateInterconnectConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInterconnect action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateLagConditionKeys">CreateLagConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLag action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreatePrivateVirtualInterfaceConditionKeys">CreatePrivateVirtualInterfaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePrivateVirtualInterface action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreatePublicVirtualInterfaceConditionKeys">CreatePublicVirtualInterfaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePublicVirtualInterface action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateTransitVirtualInterfaceConditionKeys">CreateTransitVirtualInterfaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTransitVirtualInterface action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AllocateHostedConnectionConditionKeys`<sup>Required</sup> <a name="AllocateHostedConnectionConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.AllocateHostedConnectionConditionKeys"></a>

```typescript
public readonly AllocateHostedConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AllocateHostedConnection action.

---

##### `AllocatePrivateVirtualInterfaceConditionKeys`<sup>Required</sup> <a name="AllocatePrivateVirtualInterfaceConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.AllocatePrivateVirtualInterfaceConditionKeys"></a>

```typescript
public readonly AllocatePrivateVirtualInterfaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AllocatePrivateVirtualInterface action.

---

##### `AllocatePublicVirtualInterfaceConditionKeys`<sup>Required</sup> <a name="AllocatePublicVirtualInterfaceConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.AllocatePublicVirtualInterfaceConditionKeys"></a>

```typescript
public readonly AllocatePublicVirtualInterfaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AllocatePublicVirtualInterface action.

---

##### `AllocateTransitVirtualInterfaceConditionKeys`<sup>Required</sup> <a name="AllocateTransitVirtualInterfaceConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.AllocateTransitVirtualInterfaceConditionKeys"></a>

```typescript
public readonly AllocateTransitVirtualInterfaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AllocateTransitVirtualInterface action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateConnectionConditionKeys`<sup>Required</sup> <a name="CreateConnectionConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateConnectionConditionKeys"></a>

```typescript
public readonly CreateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnection action.

---

##### `CreateDirectConnectGatewayConditionKeys`<sup>Required</sup> <a name="CreateDirectConnectGatewayConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateDirectConnectGatewayConditionKeys"></a>

```typescript
public readonly CreateDirectConnectGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDirectConnectGateway action.

---

##### `CreateInterconnectConditionKeys`<sup>Required</sup> <a name="CreateInterconnectConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateInterconnectConditionKeys"></a>

```typescript
public readonly CreateInterconnectConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInterconnect action.

---

##### `CreateLagConditionKeys`<sup>Required</sup> <a name="CreateLagConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateLagConditionKeys"></a>

```typescript
public readonly CreateLagConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLag action.

---

##### `CreatePrivateVirtualInterfaceConditionKeys`<sup>Required</sup> <a name="CreatePrivateVirtualInterfaceConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreatePrivateVirtualInterfaceConditionKeys"></a>

```typescript
public readonly CreatePrivateVirtualInterfaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePrivateVirtualInterface action.

---

##### `CreatePublicVirtualInterfaceConditionKeys`<sup>Required</sup> <a name="CreatePublicVirtualInterfaceConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreatePublicVirtualInterfaceConditionKeys"></a>

```typescript
public readonly CreatePublicVirtualInterfaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePublicVirtualInterface action.

---

##### `CreateTransitVirtualInterfaceConditionKeys`<sup>Required</sup> <a name="CreateTransitVirtualInterfaceConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.CreateTransitVirtualInterfaceConditionKeys"></a>

```typescript
public readonly CreateTransitVirtualInterfaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTransitVirtualInterface action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.directconnect.DirectConnectConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### DirectConnectOperations <a name="DirectConnectOperations" id="@cdk_utils/iam.directconnect.DirectConnectOperations"></a>

API operation to required IAM actions mapping for directconnect.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.directconnect.DirectConnectOperations.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

new directconnect.DirectConnectOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AcceptDirectConnectGatewayAssociationProposal">AcceptDirectConnectGatewayAssociationProposal</a></code> | <code>string[]</code> | IAM actions required for the AcceptDirectConnectGatewayAssociationProposal API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocateConnectionOnInterconnect">AllocateConnectionOnInterconnect</a></code> | <code>string[]</code> | IAM actions required for the AllocateConnectionOnInterconnect API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocateHostedConnection">AllocateHostedConnection</a></code> | <code>string[]</code> | IAM actions required for the AllocateHostedConnection API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocatePrivateVirtualInterface">AllocatePrivateVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the AllocatePrivateVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocatePublicVirtualInterface">AllocatePublicVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the AllocatePublicVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocateTransitVirtualInterface">AllocateTransitVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the AllocateTransitVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AssociateConnectionWithLag">AssociateConnectionWithLag</a></code> | <code>string[]</code> | IAM actions required for the AssociateConnectionWithLag API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AssociateHostedConnection">AssociateHostedConnection</a></code> | <code>string[]</code> | IAM actions required for the AssociateHostedConnection API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AssociateMacSecKey">AssociateMacSecKey</a></code> | <code>string[]</code> | IAM actions required for the AssociateMacSecKey API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.AssociateVirtualInterface">AssociateVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the AssociateVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmConnection">ConfirmConnection</a></code> | <code>string[]</code> | IAM actions required for the ConfirmConnection API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmCustomerAgreement">ConfirmCustomerAgreement</a></code> | <code>string[]</code> | IAM actions required for the ConfirmCustomerAgreement API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmPrivateVirtualInterface">ConfirmPrivateVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the ConfirmPrivateVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmPublicVirtualInterface">ConfirmPublicVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the ConfirmPublicVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmTransitVirtualInterface">ConfirmTransitVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the ConfirmTransitVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateBGPPeer">CreateBGPPeer</a></code> | <code>string[]</code> | IAM actions required for the CreateBGPPeer API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateDirectConnectGateway">CreateDirectConnectGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateDirectConnectGateway API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateDirectConnectGatewayAssociation">CreateDirectConnectGatewayAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateDirectConnectGatewayAssociation API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateDirectConnectGatewayAssociationProposal">CreateDirectConnectGatewayAssociationProposal</a></code> | <code>string[]</code> | IAM actions required for the CreateDirectConnectGatewayAssociationProposal API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateInterconnect">CreateInterconnect</a></code> | <code>string[]</code> | IAM actions required for the CreateInterconnect API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateLag">CreateLag</a></code> | <code>string[]</code> | IAM actions required for the CreateLag API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreatePrivateVirtualInterface">CreatePrivateVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the CreatePrivateVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreatePublicVirtualInterface">CreatePublicVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the CreatePublicVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateTransitVirtualInterface">CreateTransitVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the CreateTransitVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteBGPPeer">DeleteBGPPeer</a></code> | <code>string[]</code> | IAM actions required for the DeleteBGPPeer API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteDirectConnectGateway">DeleteDirectConnectGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteDirectConnectGateway API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteDirectConnectGatewayAssociation">DeleteDirectConnectGatewayAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteDirectConnectGatewayAssociation API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteDirectConnectGatewayAssociationProposal">DeleteDirectConnectGatewayAssociationProposal</a></code> | <code>string[]</code> | IAM actions required for the DeleteDirectConnectGatewayAssociationProposal API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteInterconnect">DeleteInterconnect</a></code> | <code>string[]</code> | IAM actions required for the DeleteInterconnect API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteLag">DeleteLag</a></code> | <code>string[]</code> | IAM actions required for the DeleteLag API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteVirtualInterface">DeleteVirtualInterface</a></code> | <code>string[]</code> | IAM actions required for the DeleteVirtualInterface API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeConnectionLoa">DescribeConnectionLoa</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectionLoa API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeConnections">DescribeConnections</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnections API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeConnectionsOnInterconnect">DescribeConnectionsOnInterconnect</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectionsOnInterconnect API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeCustomerMetadata">DescribeCustomerMetadata</a></code> | <code>string[]</code> | IAM actions required for the DescribeCustomerMetadata API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeDirectConnectGatewayAssociationProposals">DescribeDirectConnectGatewayAssociationProposals</a></code> | <code>string[]</code> | IAM actions required for the DescribeDirectConnectGatewayAssociationProposals API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeDirectConnectGatewayAssociations">DescribeDirectConnectGatewayAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeDirectConnectGatewayAssociations API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeDirectConnectGatewayAttachments">DescribeDirectConnectGatewayAttachments</a></code> | <code>string[]</code> | IAM actions required for the DescribeDirectConnectGatewayAttachments API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeDirectConnectGateways">DescribeDirectConnectGateways</a></code> | <code>string[]</code> | IAM actions required for the DescribeDirectConnectGateways API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeHostedConnections">DescribeHostedConnections</a></code> | <code>string[]</code> | IAM actions required for the DescribeHostedConnections API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeInterconnectLoa">DescribeInterconnectLoa</a></code> | <code>string[]</code> | IAM actions required for the DescribeInterconnectLoa API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeInterconnects">DescribeInterconnects</a></code> | <code>string[]</code> | IAM actions required for the DescribeInterconnects API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeLags">DescribeLags</a></code> | <code>string[]</code> | IAM actions required for the DescribeLags API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeLoa">DescribeLoa</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoa API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeLocations">DescribeLocations</a></code> | <code>string[]</code> | IAM actions required for the DescribeLocations API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeRouterConfiguration">DescribeRouterConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeRouterConfiguration API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeTags">DescribeTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeTags API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeVirtualGateways">DescribeVirtualGateways</a></code> | <code>string[]</code> | IAM actions required for the DescribeVirtualGateways API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeVirtualInterfaces">DescribeVirtualInterfaces</a></code> | <code>string[]</code> | IAM actions required for the DescribeVirtualInterfaces API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DisassociateConnectionFromLag">DisassociateConnectionFromLag</a></code> | <code>string[]</code> | IAM actions required for the DisassociateConnectionFromLag API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.DisassociateMacSecKey">DisassociateMacSecKey</a></code> | <code>string[]</code> | IAM actions required for the DisassociateMacSecKey API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.ListVirtualInterfaceRoutes">ListVirtualInterfaceRoutes</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualInterfaceRoutes API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.ListVirtualInterfaceTestHistory">ListVirtualInterfaceTestHistory</a></code> | <code>string[]</code> | IAM actions required for the ListVirtualInterfaceTestHistory API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.StartBgpFailoverTest">StartBgpFailoverTest</a></code> | <code>string[]</code> | IAM actions required for the StartBgpFailoverTest API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.StopBgpFailoverTest">StopBgpFailoverTest</a></code> | <code>string[]</code> | IAM actions required for the StopBgpFailoverTest API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateConnection">UpdateConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnection API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateDirectConnectGateway">UpdateDirectConnectGateway</a></code> | <code>string[]</code> | IAM actions required for the UpdateDirectConnectGateway API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateDirectConnectGatewayAssociation">UpdateDirectConnectGatewayAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateDirectConnectGatewayAssociation API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateLag">UpdateLag</a></code> | <code>string[]</code> | IAM actions required for the UpdateLag API call. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateVirtualInterfaceAttributes">UpdateVirtualInterfaceAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateVirtualInterfaceAttributes API call. |

---

##### `AcceptDirectConnectGatewayAssociationProposal`<sup>Required</sup> <a name="AcceptDirectConnectGatewayAssociationProposal" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AcceptDirectConnectGatewayAssociationProposal"></a>

```typescript
public readonly AcceptDirectConnectGatewayAssociationProposal: string[];
```

- *Type:* string[]

IAM actions required for the AcceptDirectConnectGatewayAssociationProposal API call.

---

##### `AllocateConnectionOnInterconnect`<sup>Required</sup> <a name="AllocateConnectionOnInterconnect" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocateConnectionOnInterconnect"></a>

```typescript
public readonly AllocateConnectionOnInterconnect: string[];
```

- *Type:* string[]

IAM actions required for the AllocateConnectionOnInterconnect API call.

---

##### `AllocateHostedConnection`<sup>Required</sup> <a name="AllocateHostedConnection" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocateHostedConnection"></a>

```typescript
public readonly AllocateHostedConnection: string[];
```

- *Type:* string[]

IAM actions required for the AllocateHostedConnection API call.

---

##### `AllocatePrivateVirtualInterface`<sup>Required</sup> <a name="AllocatePrivateVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocatePrivateVirtualInterface"></a>

```typescript
public readonly AllocatePrivateVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the AllocatePrivateVirtualInterface API call.

---

##### `AllocatePublicVirtualInterface`<sup>Required</sup> <a name="AllocatePublicVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocatePublicVirtualInterface"></a>

```typescript
public readonly AllocatePublicVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the AllocatePublicVirtualInterface API call.

---

##### `AllocateTransitVirtualInterface`<sup>Required</sup> <a name="AllocateTransitVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AllocateTransitVirtualInterface"></a>

```typescript
public readonly AllocateTransitVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the AllocateTransitVirtualInterface API call.

---

##### `AssociateConnectionWithLag`<sup>Required</sup> <a name="AssociateConnectionWithLag" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AssociateConnectionWithLag"></a>

```typescript
public readonly AssociateConnectionWithLag: string[];
```

- *Type:* string[]

IAM actions required for the AssociateConnectionWithLag API call.

---

##### `AssociateHostedConnection`<sup>Required</sup> <a name="AssociateHostedConnection" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AssociateHostedConnection"></a>

```typescript
public readonly AssociateHostedConnection: string[];
```

- *Type:* string[]

IAM actions required for the AssociateHostedConnection API call.

---

##### `AssociateMacSecKey`<sup>Required</sup> <a name="AssociateMacSecKey" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AssociateMacSecKey"></a>

```typescript
public readonly AssociateMacSecKey: string[];
```

- *Type:* string[]

IAM actions required for the AssociateMacSecKey API call.

---

##### `AssociateVirtualInterface`<sup>Required</sup> <a name="AssociateVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.AssociateVirtualInterface"></a>

```typescript
public readonly AssociateVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the AssociateVirtualInterface API call.

---

##### `ConfirmConnection`<sup>Required</sup> <a name="ConfirmConnection" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmConnection"></a>

```typescript
public readonly ConfirmConnection: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmConnection API call.

---

##### `ConfirmCustomerAgreement`<sup>Required</sup> <a name="ConfirmCustomerAgreement" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmCustomerAgreement"></a>

```typescript
public readonly ConfirmCustomerAgreement: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmCustomerAgreement API call.

---

##### `ConfirmPrivateVirtualInterface`<sup>Required</sup> <a name="ConfirmPrivateVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmPrivateVirtualInterface"></a>

```typescript
public readonly ConfirmPrivateVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmPrivateVirtualInterface API call.

---

##### `ConfirmPublicVirtualInterface`<sup>Required</sup> <a name="ConfirmPublicVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmPublicVirtualInterface"></a>

```typescript
public readonly ConfirmPublicVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmPublicVirtualInterface API call.

---

##### `ConfirmTransitVirtualInterface`<sup>Required</sup> <a name="ConfirmTransitVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.ConfirmTransitVirtualInterface"></a>

```typescript
public readonly ConfirmTransitVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmTransitVirtualInterface API call.

---

##### `CreateBGPPeer`<sup>Required</sup> <a name="CreateBGPPeer" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateBGPPeer"></a>

```typescript
public readonly CreateBGPPeer: string[];
```

- *Type:* string[]

IAM actions required for the CreateBGPPeer API call.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `CreateDirectConnectGateway`<sup>Required</sup> <a name="CreateDirectConnectGateway" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateDirectConnectGateway"></a>

```typescript
public readonly CreateDirectConnectGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateDirectConnectGateway API call.

---

##### `CreateDirectConnectGatewayAssociation`<sup>Required</sup> <a name="CreateDirectConnectGatewayAssociation" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateDirectConnectGatewayAssociation"></a>

```typescript
public readonly CreateDirectConnectGatewayAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateDirectConnectGatewayAssociation API call.

---

##### `CreateDirectConnectGatewayAssociationProposal`<sup>Required</sup> <a name="CreateDirectConnectGatewayAssociationProposal" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateDirectConnectGatewayAssociationProposal"></a>

```typescript
public readonly CreateDirectConnectGatewayAssociationProposal: string[];
```

- *Type:* string[]

IAM actions required for the CreateDirectConnectGatewayAssociationProposal API call.

---

##### `CreateInterconnect`<sup>Required</sup> <a name="CreateInterconnect" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateInterconnect"></a>

```typescript
public readonly CreateInterconnect: string[];
```

- *Type:* string[]

IAM actions required for the CreateInterconnect API call.

---

##### `CreateLag`<sup>Required</sup> <a name="CreateLag" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateLag"></a>

```typescript
public readonly CreateLag: string[];
```

- *Type:* string[]

IAM actions required for the CreateLag API call.

---

##### `CreatePrivateVirtualInterface`<sup>Required</sup> <a name="CreatePrivateVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreatePrivateVirtualInterface"></a>

```typescript
public readonly CreatePrivateVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrivateVirtualInterface API call.

---

##### `CreatePublicVirtualInterface`<sup>Required</sup> <a name="CreatePublicVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreatePublicVirtualInterface"></a>

```typescript
public readonly CreatePublicVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the CreatePublicVirtualInterface API call.

---

##### `CreateTransitVirtualInterface`<sup>Required</sup> <a name="CreateTransitVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.CreateTransitVirtualInterface"></a>

```typescript
public readonly CreateTransitVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the CreateTransitVirtualInterface API call.

---

##### `DeleteBGPPeer`<sup>Required</sup> <a name="DeleteBGPPeer" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteBGPPeer"></a>

```typescript
public readonly DeleteBGPPeer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBGPPeer API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteDirectConnectGateway`<sup>Required</sup> <a name="DeleteDirectConnectGateway" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteDirectConnectGateway"></a>

```typescript
public readonly DeleteDirectConnectGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDirectConnectGateway API call.

---

##### `DeleteDirectConnectGatewayAssociation`<sup>Required</sup> <a name="DeleteDirectConnectGatewayAssociation" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteDirectConnectGatewayAssociation"></a>

```typescript
public readonly DeleteDirectConnectGatewayAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDirectConnectGatewayAssociation API call.

---

##### `DeleteDirectConnectGatewayAssociationProposal`<sup>Required</sup> <a name="DeleteDirectConnectGatewayAssociationProposal" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteDirectConnectGatewayAssociationProposal"></a>

```typescript
public readonly DeleteDirectConnectGatewayAssociationProposal: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDirectConnectGatewayAssociationProposal API call.

---

##### `DeleteInterconnect`<sup>Required</sup> <a name="DeleteInterconnect" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteInterconnect"></a>

```typescript
public readonly DeleteInterconnect: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInterconnect API call.

---

##### `DeleteLag`<sup>Required</sup> <a name="DeleteLag" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteLag"></a>

```typescript
public readonly DeleteLag: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLag API call.

---

##### `DeleteVirtualInterface`<sup>Required</sup> <a name="DeleteVirtualInterface" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DeleteVirtualInterface"></a>

```typescript
public readonly DeleteVirtualInterface: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVirtualInterface API call.

---

##### `DescribeConnectionLoa`<sup>Required</sup> <a name="DescribeConnectionLoa" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeConnectionLoa"></a>

```typescript
public readonly DescribeConnectionLoa: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectionLoa API call.

---

##### `DescribeConnections`<sup>Required</sup> <a name="DescribeConnections" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeConnections"></a>

```typescript
public readonly DescribeConnections: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnections API call.

---

##### `DescribeConnectionsOnInterconnect`<sup>Required</sup> <a name="DescribeConnectionsOnInterconnect" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeConnectionsOnInterconnect"></a>

```typescript
public readonly DescribeConnectionsOnInterconnect: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectionsOnInterconnect API call.

---

##### `DescribeCustomerMetadata`<sup>Required</sup> <a name="DescribeCustomerMetadata" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeCustomerMetadata"></a>

```typescript
public readonly DescribeCustomerMetadata: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCustomerMetadata API call.

---

##### `DescribeDirectConnectGatewayAssociationProposals`<sup>Required</sup> <a name="DescribeDirectConnectGatewayAssociationProposals" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeDirectConnectGatewayAssociationProposals"></a>

```typescript
public readonly DescribeDirectConnectGatewayAssociationProposals: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDirectConnectGatewayAssociationProposals API call.

---

##### `DescribeDirectConnectGatewayAssociations`<sup>Required</sup> <a name="DescribeDirectConnectGatewayAssociations" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeDirectConnectGatewayAssociations"></a>

```typescript
public readonly DescribeDirectConnectGatewayAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDirectConnectGatewayAssociations API call.

---

##### `DescribeDirectConnectGatewayAttachments`<sup>Required</sup> <a name="DescribeDirectConnectGatewayAttachments" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeDirectConnectGatewayAttachments"></a>

```typescript
public readonly DescribeDirectConnectGatewayAttachments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDirectConnectGatewayAttachments API call.

---

##### `DescribeDirectConnectGateways`<sup>Required</sup> <a name="DescribeDirectConnectGateways" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeDirectConnectGateways"></a>

```typescript
public readonly DescribeDirectConnectGateways: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDirectConnectGateways API call.

---

##### `DescribeHostedConnections`<sup>Required</sup> <a name="DescribeHostedConnections" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeHostedConnections"></a>

```typescript
public readonly DescribeHostedConnections: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHostedConnections API call.

---

##### `DescribeInterconnectLoa`<sup>Required</sup> <a name="DescribeInterconnectLoa" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeInterconnectLoa"></a>

```typescript
public readonly DescribeInterconnectLoa: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInterconnectLoa API call.

---

##### `DescribeInterconnects`<sup>Required</sup> <a name="DescribeInterconnects" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeInterconnects"></a>

```typescript
public readonly DescribeInterconnects: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInterconnects API call.

---

##### `DescribeLags`<sup>Required</sup> <a name="DescribeLags" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeLags"></a>

```typescript
public readonly DescribeLags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLags API call.

---

##### `DescribeLoa`<sup>Required</sup> <a name="DescribeLoa" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeLoa"></a>

```typescript
public readonly DescribeLoa: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoa API call.

---

##### `DescribeLocations`<sup>Required</sup> <a name="DescribeLocations" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeLocations"></a>

```typescript
public readonly DescribeLocations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLocations API call.

---

##### `DescribeRouterConfiguration`<sup>Required</sup> <a name="DescribeRouterConfiguration" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeRouterConfiguration"></a>

```typescript
public readonly DescribeRouterConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRouterConfiguration API call.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTags API call.

---

##### `DescribeVirtualGateways`<sup>Required</sup> <a name="DescribeVirtualGateways" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeVirtualGateways"></a>

```typescript
public readonly DescribeVirtualGateways: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVirtualGateways API call.

---

##### `DescribeVirtualInterfaces`<sup>Required</sup> <a name="DescribeVirtualInterfaces" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DescribeVirtualInterfaces"></a>

```typescript
public readonly DescribeVirtualInterfaces: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVirtualInterfaces API call.

---

##### `DisassociateConnectionFromLag`<sup>Required</sup> <a name="DisassociateConnectionFromLag" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DisassociateConnectionFromLag"></a>

```typescript
public readonly DisassociateConnectionFromLag: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateConnectionFromLag API call.

---

##### `DisassociateMacSecKey`<sup>Required</sup> <a name="DisassociateMacSecKey" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.DisassociateMacSecKey"></a>

```typescript
public readonly DisassociateMacSecKey: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateMacSecKey API call.

---

##### `ListVirtualInterfaceRoutes`<sup>Required</sup> <a name="ListVirtualInterfaceRoutes" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.ListVirtualInterfaceRoutes"></a>

```typescript
public readonly ListVirtualInterfaceRoutes: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualInterfaceRoutes API call.

---

##### `ListVirtualInterfaceTestHistory`<sup>Required</sup> <a name="ListVirtualInterfaceTestHistory" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.ListVirtualInterfaceTestHistory"></a>

```typescript
public readonly ListVirtualInterfaceTestHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListVirtualInterfaceTestHistory API call.

---

##### `StartBgpFailoverTest`<sup>Required</sup> <a name="StartBgpFailoverTest" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.StartBgpFailoverTest"></a>

```typescript
public readonly StartBgpFailoverTest: string[];
```

- *Type:* string[]

IAM actions required for the StartBgpFailoverTest API call.

---

##### `StopBgpFailoverTest`<sup>Required</sup> <a name="StopBgpFailoverTest" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.StopBgpFailoverTest"></a>

```typescript
public readonly StopBgpFailoverTest: string[];
```

- *Type:* string[]

IAM actions required for the StopBgpFailoverTest API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnection API call.

---

##### `UpdateDirectConnectGateway`<sup>Required</sup> <a name="UpdateDirectConnectGateway" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateDirectConnectGateway"></a>

```typescript
public readonly UpdateDirectConnectGateway: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDirectConnectGateway API call.

---

##### `UpdateDirectConnectGatewayAssociation`<sup>Required</sup> <a name="UpdateDirectConnectGatewayAssociation" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateDirectConnectGatewayAssociation"></a>

```typescript
public readonly UpdateDirectConnectGatewayAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDirectConnectGatewayAssociation API call.

---

##### `UpdateLag`<sup>Required</sup> <a name="UpdateLag" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateLag"></a>

```typescript
public readonly UpdateLag: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLag API call.

---

##### `UpdateVirtualInterfaceAttributes`<sup>Required</sup> <a name="UpdateVirtualInterfaceAttributes" id="@cdk_utils/iam.directconnect.DirectConnectOperations.property.UpdateVirtualInterfaceAttributes"></a>

```typescript
public readonly UpdateVirtualInterfaceAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVirtualInterfaceAttributes API call.

---

### DirectConnectResources <a name="DirectConnectResources" id="@cdk_utils/iam.directconnect.DirectConnectResources"></a>

ARN builders, validators, and parsers for directconnect resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.directconnect.DirectConnectResources.Initializer"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

new directconnect.DirectConnectResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.dxcon">dxcon</a></code> | Builds an ARN for the dxcon resource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.dxGateway">dxGateway</a></code> | Builds an ARN for the dx-gateway resource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.dxlag">dxlag</a></code> | Builds an ARN for the dxlag resource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.dxvif">dxvif</a></code> | Builds an ARN for the dxvif resource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxconArn">isValidDxconArn</a></code> | Validates whether a string is a valid ARN for the dxcon resource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxGatewayArn">isValidDxGatewayArn</a></code> | Validates whether a string is a valid ARN for the dx-gateway resource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxlagArn">isValidDxlagArn</a></code> | Validates whether a string is a valid ARN for the dxlag resource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxvifArn">isValidDxvifArn</a></code> | Validates whether a string is a valid ARN for the dxvif resource. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.parseDxconArn">parseDxconArn</a></code> | Parses a dxcon ARN into its components. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.parseDxGatewayArn">parseDxGatewayArn</a></code> | Parses a dx-gateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.parseDxlagArn">parseDxlagArn</a></code> | Parses a dxlag ARN into its components. |
| <code><a href="#@cdk_utils/iam.directconnect.DirectConnectResources.parseDxvifArn">parseDxvifArn</a></code> | Parses a dxvif ARN into its components. |

---

##### `dxcon` <a name="dxcon" id="@cdk_utils/iam.directconnect.DirectConnectResources.dxcon"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.dxcon(props: DirectConnectDxconArnProps)
```

Builds an ARN for the dxcon resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.directconnect.DirectConnectResources.dxcon.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.directconnect.DirectConnectDxconArnProps">DirectConnectDxconArnProps</a>

---

##### `dxGateway` <a name="dxGateway" id="@cdk_utils/iam.directconnect.DirectConnectResources.dxGateway"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.dxGateway(props: DirectConnectDxGatewayArnProps)
```

Builds an ARN for the dx-gateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.directconnect.DirectConnectResources.dxGateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.directconnect.DirectConnectDxGatewayArnProps">DirectConnectDxGatewayArnProps</a>

---

##### `dxlag` <a name="dxlag" id="@cdk_utils/iam.directconnect.DirectConnectResources.dxlag"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.dxlag(props: DirectConnectDxlagArnProps)
```

Builds an ARN for the dxlag resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.directconnect.DirectConnectResources.dxlag.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.directconnect.DirectConnectDxlagArnProps">DirectConnectDxlagArnProps</a>

---

##### `dxvif` <a name="dxvif" id="@cdk_utils/iam.directconnect.DirectConnectResources.dxvif"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.dxvif(props: DirectConnectDxvifArnProps)
```

Builds an ARN for the dxvif resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.directconnect.DirectConnectResources.dxvif.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.directconnect.DirectConnectDxvifArnProps">DirectConnectDxvifArnProps</a>

---

##### `isValidDxconArn` <a name="isValidDxconArn" id="@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxconArn"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.isValidDxconArn(arn: string)
```

Validates whether a string is a valid ARN for the dxcon resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxconArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDxGatewayArn` <a name="isValidDxGatewayArn" id="@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxGatewayArn"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.isValidDxGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the dx-gateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDxlagArn` <a name="isValidDxlagArn" id="@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxlagArn"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.isValidDxlagArn(arn: string)
```

Validates whether a string is a valid ARN for the dxlag resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxlagArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDxvifArn` <a name="isValidDxvifArn" id="@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxvifArn"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.isValidDxvifArn(arn: string)
```

Validates whether a string is a valid ARN for the dxvif resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.directconnect.DirectConnectResources.isValidDxvifArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDxconArn` <a name="parseDxconArn" id="@cdk_utils/iam.directconnect.DirectConnectResources.parseDxconArn"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.parseDxconArn(arn: string)
```

Parses a dxcon ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.directconnect.DirectConnectResources.parseDxconArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDxGatewayArn` <a name="parseDxGatewayArn" id="@cdk_utils/iam.directconnect.DirectConnectResources.parseDxGatewayArn"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.parseDxGatewayArn(arn: string)
```

Parses a dx-gateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.directconnect.DirectConnectResources.parseDxGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDxlagArn` <a name="parseDxlagArn" id="@cdk_utils/iam.directconnect.DirectConnectResources.parseDxlagArn"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.parseDxlagArn(arn: string)
```

Parses a dxlag ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.directconnect.DirectConnectResources.parseDxlagArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDxvifArn` <a name="parseDxvifArn" id="@cdk_utils/iam.directconnect.DirectConnectResources.parseDxvifArn"></a>

```typescript
import { directconnect } from '@cdk_utils/iam'

directconnect.DirectConnectResources.parseDxvifArn(arn: string)
```

Parses a dxvif ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.directconnect.DirectConnectResources.parseDxvifArn.parameter.arn"></a>

- *Type:* string

---




