# `managedblockchain` Submodule <a name="`managedblockchain` Submodule" id="@cdk_utils/iam.managedblockchain"></a>


## Structs <a name="Structs" id="Structs"></a>

### ManagedblockchainAccessorArnComponents <a name="ManagedblockchainAccessorArnComponents" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents"></a>

Parsed components of a accessor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainAccessorArnComponents: managedblockchain.ManagedblockchainAccessorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.property.accessorId">accessorId</a></code> | <code>string</code> | The AccessorId component. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessorId`<sup>Required</sup> <a name="accessorId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.property.accessorId"></a>

```typescript
public readonly accessorId: string;
```

- *Type:* string

The AccessorId component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ManagedblockchainAccessorArnProps <a name="ManagedblockchainAccessorArnProps" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps"></a>

Properties for building a accessor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainAccessorArnProps: managedblockchain.ManagedblockchainAccessorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.property.accessorId">accessorId</a></code> | <code>string</code> | The AccessorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessorId`<sup>Required</sup> <a name="accessorId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.property.accessorId"></a>

```typescript
public readonly accessorId: string;
```

- *Type:* string

The AccessorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ManagedblockchainInvitationArnComponents <a name="ManagedblockchainInvitationArnComponents" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents"></a>

Parsed components of a invitation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainInvitationArnComponents: managedblockchain.ManagedblockchainInvitationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.property.invitationId">invitationId</a></code> | <code>string</code> | The InvitationId component. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `invitationId`<sup>Required</sup> <a name="invitationId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.property.invitationId"></a>

```typescript
public readonly invitationId: string;
```

- *Type:* string

The InvitationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ManagedblockchainInvitationArnProps <a name="ManagedblockchainInvitationArnProps" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps"></a>

Properties for building a invitation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainInvitationArnProps: managedblockchain.ManagedblockchainInvitationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.property.invitationId">invitationId</a></code> | <code>string</code> | The InvitationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `invitationId`<sup>Required</sup> <a name="invitationId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.property.invitationId"></a>

```typescript
public readonly invitationId: string;
```

- *Type:* string

The InvitationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ManagedblockchainMemberArnComponents <a name="ManagedblockchainMemberArnComponents" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents"></a>

Parsed components of a member ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainMemberArnComponents: managedblockchain.ManagedblockchainMemberArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.property.memberId">memberId</a></code> | <code>string</code> | The MemberId component. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

The MemberId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ManagedblockchainMemberArnProps <a name="ManagedblockchainMemberArnProps" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps"></a>

Properties for building a member ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainMemberArnProps: managedblockchain.ManagedblockchainMemberArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.property.memberId">memberId</a></code> | <code>string</code> | The MemberId component of the ARN. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

The MemberId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ManagedblockchainNetworkArnComponents <a name="ManagedblockchainNetworkArnComponents" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents"></a>

Parsed components of a network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainNetworkArnComponents: managedblockchain.ManagedblockchainNetworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.property.networkId">networkId</a></code> | <code>string</code> | The NetworkId component. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

The NetworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ManagedblockchainNetworkArnProps <a name="ManagedblockchainNetworkArnProps" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps"></a>

Properties for building a network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainNetworkArnProps: managedblockchain.ManagedblockchainNetworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.property.networkId">networkId</a></code> | <code>string</code> | The NetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

The NetworkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ManagedblockchainNodeArnComponents <a name="ManagedblockchainNodeArnComponents" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents"></a>

Parsed components of a node ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainNodeArnComponents: managedblockchain.ManagedblockchainNodeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.property.nodeId">nodeId</a></code> | <code>string</code> | The NodeId component. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

The NodeId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ManagedblockchainNodeArnProps <a name="ManagedblockchainNodeArnProps" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps"></a>

Properties for building a node ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainNodeArnProps: managedblockchain.ManagedblockchainNodeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.property.nodeId">nodeId</a></code> | <code>string</code> | The NodeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

The NodeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ManagedblockchainProposalArnComponents <a name="ManagedblockchainProposalArnComponents" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents"></a>

Parsed components of a proposal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainProposalArnComponents: managedblockchain.ManagedblockchainProposalArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.property.proposalId">proposalId</a></code> | <code>string</code> | The ProposalId component. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

The ProposalId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ManagedblockchainProposalArnProps <a name="ManagedblockchainProposalArnProps" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps"></a>

Properties for building a proposal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

const managedblockchainProposalArnProps: managedblockchain.ManagedblockchainProposalArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.property.proposalId">proposalId</a></code> | <code>string</code> | The ProposalId component of the ARN. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `proposalId`<sup>Required</sup> <a name="proposalId" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.property.proposalId"></a>

```typescript
public readonly proposalId: string;
```

- *Type:* string

The ProposalId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedblockchainActions <a name="ManagedblockchainActions" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions"></a>

IAM action constants for the managedblockchain service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

new managedblockchain.ManagedblockchainActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetAccessor">actionGetAccessor</a></code> | <code>string</code> | [Read] managedblockchain:GetAccessor. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetMember">actionGetMember</a></code> | <code>string</code> | [Read] managedblockchain:GetMember. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetNetwork">actionGetNetwork</a></code> | <code>string</code> | [Read] managedblockchain:GetNetwork. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetNode">actionGetNode</a></code> | <code>string</code> | [Read] managedblockchain:GetNode. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetProposal">actionGetProposal</a></code> | <code>string</code> | [Read] managedblockchain:GetProposal. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateAccessor">CreateAccessor</a></code> | <code>string</code> | [Write] managedblockchain:CreateAccessor. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateMember">CreateMember</a></code> | <code>string</code> | [Write] managedblockchain:CreateMember. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateNetwork">CreateNetwork</a></code> | <code>string</code> | [Write] managedblockchain:CreateNetwork. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateNode">CreateNode</a></code> | <code>string</code> | [Write] managedblockchain:CreateNode. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateProposal">CreateProposal</a></code> | <code>string</code> | [Write] managedblockchain:CreateProposal. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.DeleteAccessor">DeleteAccessor</a></code> | <code>string</code> | [Write] managedblockchain:DeleteAccessor. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.DeleteMember">DeleteMember</a></code> | <code>string</code> | [Write] managedblockchain:DeleteMember. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.DeleteNode">DeleteNode</a></code> | <code>string</code> | [Write] managedblockchain:DeleteNode. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.GET">GET</a></code> | <code>string</code> | [PermissionManagement] managedblockchain:GET. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.Invoke">Invoke</a></code> | <code>string</code> | [PermissionManagement] managedblockchain:Invoke. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.InvokeRpcBitcoinMainnet">InvokeRpcBitcoinMainnet</a></code> | <code>string</code> | [Read] managedblockchain:InvokeRpcBitcoinMainnet. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.InvokeRpcBitcoinTestnet">InvokeRpcBitcoinTestnet</a></code> | <code>string</code> | [Read] managedblockchain:InvokeRpcBitcoinTestnet. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.InvokeRpcPolygonMainnet">InvokeRpcPolygonMainnet</a></code> | <code>string</code> | [Read] managedblockchain:InvokeRpcPolygonMainnet. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.InvokeRpcPolygonMumbaiTestnet">InvokeRpcPolygonMumbaiTestnet</a></code> | <code>string</code> | [Read] managedblockchain:InvokeRpcPolygonMumbaiTestnet. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListAccessors">ListAccessors</a></code> | <code>string</code> | [List] managedblockchain:ListAccessors. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListInvitations">ListInvitations</a></code> | <code>string</code> | [List] managedblockchain:ListInvitations. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListMembers">ListMembers</a></code> | <code>string</code> | [List] managedblockchain:ListMembers. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListNetworks">ListNetworks</a></code> | <code>string</code> | [List] managedblockchain:ListNetworks. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListNodes">ListNodes</a></code> | <code>string</code> | [List] managedblockchain:ListNodes. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListProposals">ListProposals</a></code> | <code>string</code> | [List] managedblockchain:ListProposals. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListProposalVotes">ListProposalVotes</a></code> | <code>string</code> | [Read] managedblockchain:ListProposalVotes. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] managedblockchain:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.POST">POST</a></code> | <code>string</code> | [PermissionManagement] managedblockchain:POST. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.RejectInvitation">RejectInvitation</a></code> | <code>string</code> | [Write] managedblockchain:RejectInvitation. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] managedblockchain:TagResource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] managedblockchain:UntagResource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.UpdateMember">UpdateMember</a></code> | <code>string</code> | [Write] managedblockchain:UpdateMember. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.UpdateNode">UpdateNode</a></code> | <code>string</code> | [Write] managedblockchain:UpdateNode. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.VoteOnProposal">VoteOnProposal</a></code> | <code>string</code> | [Write] managedblockchain:VoteOnProposal. |

---

##### `actionGetAccessor`<sup>Required</sup> <a name="actionGetAccessor" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetAccessor"></a>

```typescript
public readonly actionGetAccessor: string;
```

- *Type:* string

[Read] managedblockchain:GetAccessor.

---

##### `actionGetMember`<sup>Required</sup> <a name="actionGetMember" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetMember"></a>

```typescript
public readonly actionGetMember: string;
```

- *Type:* string

[Read] managedblockchain:GetMember.

---

##### `actionGetNetwork`<sup>Required</sup> <a name="actionGetNetwork" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetNetwork"></a>

```typescript
public readonly actionGetNetwork: string;
```

- *Type:* string

[Read] managedblockchain:GetNetwork.

---

##### `actionGetNode`<sup>Required</sup> <a name="actionGetNode" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetNode"></a>

```typescript
public readonly actionGetNode: string;
```

- *Type:* string

[Read] managedblockchain:GetNode.

---

##### `actionGetProposal`<sup>Required</sup> <a name="actionGetProposal" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.actionGetProposal"></a>

```typescript
public readonly actionGetProposal: string;
```

- *Type:* string

[Read] managedblockchain:GetProposal.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAccessor`<sup>Required</sup> <a name="CreateAccessor" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateAccessor"></a>

```typescript
public readonly CreateAccessor: string;
```

- *Type:* string

[Write] managedblockchain:CreateAccessor.

---

##### `CreateMember`<sup>Required</sup> <a name="CreateMember" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateMember"></a>

```typescript
public readonly CreateMember: string;
```

- *Type:* string

[Write] managedblockchain:CreateMember.

---

##### `CreateNetwork`<sup>Required</sup> <a name="CreateNetwork" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateNetwork"></a>

```typescript
public readonly CreateNetwork: string;
```

- *Type:* string

[Write] managedblockchain:CreateNetwork.

---

##### `CreateNode`<sup>Required</sup> <a name="CreateNode" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateNode"></a>

```typescript
public readonly CreateNode: string;
```

- *Type:* string

[Write] managedblockchain:CreateNode.

---

##### `CreateProposal`<sup>Required</sup> <a name="CreateProposal" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.CreateProposal"></a>

```typescript
public readonly CreateProposal: string;
```

- *Type:* string

[Write] managedblockchain:CreateProposal.

---

##### `DeleteAccessor`<sup>Required</sup> <a name="DeleteAccessor" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.DeleteAccessor"></a>

```typescript
public readonly DeleteAccessor: string;
```

- *Type:* string

[Write] managedblockchain:DeleteAccessor.

---

##### `DeleteMember`<sup>Required</sup> <a name="DeleteMember" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.DeleteMember"></a>

```typescript
public readonly DeleteMember: string;
```

- *Type:* string

[Write] managedblockchain:DeleteMember.

---

##### `DeleteNode`<sup>Required</sup> <a name="DeleteNode" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.DeleteNode"></a>

```typescript
public readonly DeleteNode: string;
```

- *Type:* string

[Write] managedblockchain:DeleteNode.

---

##### `GET`<sup>Required</sup> <a name="GET" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.GET"></a>

```typescript
public readonly GET: string;
```

- *Type:* string

[PermissionManagement] managedblockchain:GET.

---

##### `Invoke`<sup>Required</sup> <a name="Invoke" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.Invoke"></a>

```typescript
public readonly Invoke: string;
```

- *Type:* string

[PermissionManagement] managedblockchain:Invoke.

---

##### `InvokeRpcBitcoinMainnet`<sup>Required</sup> <a name="InvokeRpcBitcoinMainnet" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.InvokeRpcBitcoinMainnet"></a>

```typescript
public readonly InvokeRpcBitcoinMainnet: string;
```

- *Type:* string

[Read] managedblockchain:InvokeRpcBitcoinMainnet.

---

##### `InvokeRpcBitcoinTestnet`<sup>Required</sup> <a name="InvokeRpcBitcoinTestnet" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.InvokeRpcBitcoinTestnet"></a>

```typescript
public readonly InvokeRpcBitcoinTestnet: string;
```

- *Type:* string

[Read] managedblockchain:InvokeRpcBitcoinTestnet.

---

##### `InvokeRpcPolygonMainnet`<sup>Required</sup> <a name="InvokeRpcPolygonMainnet" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.InvokeRpcPolygonMainnet"></a>

```typescript
public readonly InvokeRpcPolygonMainnet: string;
```

- *Type:* string

[Read] managedblockchain:InvokeRpcPolygonMainnet.

---

##### `InvokeRpcPolygonMumbaiTestnet`<sup>Required</sup> <a name="InvokeRpcPolygonMumbaiTestnet" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.InvokeRpcPolygonMumbaiTestnet"></a>

```typescript
public readonly InvokeRpcPolygonMumbaiTestnet: string;
```

- *Type:* string

[Read] managedblockchain:InvokeRpcPolygonMumbaiTestnet.

---

##### `ListAccessors`<sup>Required</sup> <a name="ListAccessors" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListAccessors"></a>

```typescript
public readonly ListAccessors: string;
```

- *Type:* string

[List] managedblockchain:ListAccessors.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string;
```

- *Type:* string

[List] managedblockchain:ListInvitations.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListMembers"></a>

```typescript
public readonly ListMembers: string;
```

- *Type:* string

[List] managedblockchain:ListMembers.

---

##### `ListNetworks`<sup>Required</sup> <a name="ListNetworks" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListNetworks"></a>

```typescript
public readonly ListNetworks: string;
```

- *Type:* string

[List] managedblockchain:ListNetworks.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListNodes"></a>

```typescript
public readonly ListNodes: string;
```

- *Type:* string

[List] managedblockchain:ListNodes.

---

##### `ListProposals`<sup>Required</sup> <a name="ListProposals" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListProposals"></a>

```typescript
public readonly ListProposals: string;
```

- *Type:* string

[List] managedblockchain:ListProposals.

---

##### `ListProposalVotes`<sup>Required</sup> <a name="ListProposalVotes" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListProposalVotes"></a>

```typescript
public readonly ListProposalVotes: string;
```

- *Type:* string

[Read] managedblockchain:ListProposalVotes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] managedblockchain:ListTagsForResource.

---

##### `POST`<sup>Required</sup> <a name="POST" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.POST"></a>

```typescript
public readonly POST: string;
```

- *Type:* string

[PermissionManagement] managedblockchain:POST.

---

##### `RejectInvitation`<sup>Required</sup> <a name="RejectInvitation" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.RejectInvitation"></a>

```typescript
public readonly RejectInvitation: string;
```

- *Type:* string

[Write] managedblockchain:RejectInvitation.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] managedblockchain:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] managedblockchain:UntagResource.

---

##### `UpdateMember`<sup>Required</sup> <a name="UpdateMember" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.UpdateMember"></a>

```typescript
public readonly UpdateMember: string;
```

- *Type:* string

[Write] managedblockchain:UpdateMember.

---

##### `UpdateNode`<sup>Required</sup> <a name="UpdateNode" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.UpdateNode"></a>

```typescript
public readonly UpdateNode: string;
```

- *Type:* string

[Write] managedblockchain:UpdateNode.

---

##### `VoteOnProposal`<sup>Required</sup> <a name="VoteOnProposal" id="@cdk_utils/iam.managedblockchain.ManagedblockchainActions.property.VoteOnProposal"></a>

```typescript
public readonly VoteOnProposal: string;
```

- *Type:* string

[Write] managedblockchain:VoteOnProposal.

---

### ManagedblockchainConditions <a name="ManagedblockchainConditions" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions"></a>

Condition key constants and builders for managedblockchain.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

new managedblockchain.ManagedblockchainConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.requestTag"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.resourceTag"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.tagKeys"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateAccessorConditionKeys">CreateAccessorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessor action. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateMemberConditionKeys">CreateMemberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMember action. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateNetworkConditionKeys">CreateNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetwork action. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateNodeConditionKeys">CreateNodeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNode action. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateProposalConditionKeys">CreateProposalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProposal action. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAccessorConditionKeys`<sup>Required</sup> <a name="CreateAccessorConditionKeys" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateAccessorConditionKeys"></a>

```typescript
public readonly CreateAccessorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessor action.

---

##### `CreateMemberConditionKeys`<sup>Required</sup> <a name="CreateMemberConditionKeys" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateMemberConditionKeys"></a>

```typescript
public readonly CreateMemberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMember action.

---

##### `CreateNetworkConditionKeys`<sup>Required</sup> <a name="CreateNetworkConditionKeys" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateNetworkConditionKeys"></a>

```typescript
public readonly CreateNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetwork action.

---

##### `CreateNodeConditionKeys`<sup>Required</sup> <a name="CreateNodeConditionKeys" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateNodeConditionKeys"></a>

```typescript
public readonly CreateNodeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNode action.

---

##### `CreateProposalConditionKeys`<sup>Required</sup> <a name="CreateProposalConditionKeys" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.CreateProposalConditionKeys"></a>

```typescript
public readonly CreateProposalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProposal action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.managedblockchain.ManagedblockchainConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ManagedblockchainOperations <a name="ManagedblockchainOperations" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations"></a>

API operation to required IAM actions mapping for managedblockchain.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

new managedblockchain.ManagedblockchainOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateAccessor">CreateAccessor</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessor API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateMember">CreateMember</a></code> | <code>string[]</code> | IAM actions required for the CreateMember API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateNetwork">CreateNetwork</a></code> | <code>string[]</code> | IAM actions required for the CreateNetwork API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateNode">CreateNode</a></code> | <code>string[]</code> | IAM actions required for the CreateNode API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateProposal">CreateProposal</a></code> | <code>string[]</code> | IAM actions required for the CreateProposal API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.DeleteAccessor">DeleteAccessor</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessor API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.DeleteMember">DeleteMember</a></code> | <code>string[]</code> | IAM actions required for the DeleteMember API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.DeleteNode">DeleteNode</a></code> | <code>string[]</code> | IAM actions required for the DeleteNode API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListAccessors">ListAccessors</a></code> | <code>string[]</code> | IAM actions required for the ListAccessors API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListInvitations">ListInvitations</a></code> | <code>string[]</code> | IAM actions required for the ListInvitations API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListMembers">ListMembers</a></code> | <code>string[]</code> | IAM actions required for the ListMembers API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListNetworks">ListNetworks</a></code> | <code>string[]</code> | IAM actions required for the ListNetworks API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListNodes">ListNodes</a></code> | <code>string[]</code> | IAM actions required for the ListNodes API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListProposals">ListProposals</a></code> | <code>string[]</code> | IAM actions required for the ListProposals API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListProposalVotes">ListProposalVotes</a></code> | <code>string[]</code> | IAM actions required for the ListProposalVotes API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetAccessor">opGetAccessor</a></code> | <code>string[]</code> | IAM actions required for the GetAccessor API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetMember">opGetMember</a></code> | <code>string[]</code> | IAM actions required for the GetMember API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetNetwork">opGetNetwork</a></code> | <code>string[]</code> | IAM actions required for the GetNetwork API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetNode">opGetNode</a></code> | <code>string[]</code> | IAM actions required for the GetNode API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetProposal">opGetProposal</a></code> | <code>string[]</code> | IAM actions required for the GetProposal API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.RejectInvitation">RejectInvitation</a></code> | <code>string[]</code> | IAM actions required for the RejectInvitation API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.UpdateMember">UpdateMember</a></code> | <code>string[]</code> | IAM actions required for the UpdateMember API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.UpdateNode">UpdateNode</a></code> | <code>string[]</code> | IAM actions required for the UpdateNode API call. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.VoteOnProposal">VoteOnProposal</a></code> | <code>string[]</code> | IAM actions required for the VoteOnProposal API call. |

---

##### `CreateAccessor`<sup>Required</sup> <a name="CreateAccessor" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateAccessor"></a>

```typescript
public readonly CreateAccessor: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessor API call.

---

##### `CreateMember`<sup>Required</sup> <a name="CreateMember" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateMember"></a>

```typescript
public readonly CreateMember: string[];
```

- *Type:* string[]

IAM actions required for the CreateMember API call.

---

##### `CreateNetwork`<sup>Required</sup> <a name="CreateNetwork" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateNetwork"></a>

```typescript
public readonly CreateNetwork: string[];
```

- *Type:* string[]

IAM actions required for the CreateNetwork API call.

---

##### `CreateNode`<sup>Required</sup> <a name="CreateNode" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateNode"></a>

```typescript
public readonly CreateNode: string[];
```

- *Type:* string[]

IAM actions required for the CreateNode API call.

---

##### `CreateProposal`<sup>Required</sup> <a name="CreateProposal" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.CreateProposal"></a>

```typescript
public readonly CreateProposal: string[];
```

- *Type:* string[]

IAM actions required for the CreateProposal API call.

---

##### `DeleteAccessor`<sup>Required</sup> <a name="DeleteAccessor" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.DeleteAccessor"></a>

```typescript
public readonly DeleteAccessor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessor API call.

---

##### `DeleteMember`<sup>Required</sup> <a name="DeleteMember" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.DeleteMember"></a>

```typescript
public readonly DeleteMember: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMember API call.

---

##### `DeleteNode`<sup>Required</sup> <a name="DeleteNode" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.DeleteNode"></a>

```typescript
public readonly DeleteNode: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNode API call.

---

##### `ListAccessors`<sup>Required</sup> <a name="ListAccessors" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListAccessors"></a>

```typescript
public readonly ListAccessors: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessors API call.

---

##### `ListInvitations`<sup>Required</sup> <a name="ListInvitations" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListInvitations"></a>

```typescript
public readonly ListInvitations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvitations API call.

---

##### `ListMembers`<sup>Required</sup> <a name="ListMembers" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListMembers"></a>

```typescript
public readonly ListMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListMembers API call.

---

##### `ListNetworks`<sup>Required</sup> <a name="ListNetworks" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListNetworks"></a>

```typescript
public readonly ListNetworks: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworks API call.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListNodes"></a>

```typescript
public readonly ListNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListNodes API call.

---

##### `ListProposals`<sup>Required</sup> <a name="ListProposals" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListProposals"></a>

```typescript
public readonly ListProposals: string[];
```

- *Type:* string[]

IAM actions required for the ListProposals API call.

---

##### `ListProposalVotes`<sup>Required</sup> <a name="ListProposalVotes" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListProposalVotes"></a>

```typescript
public readonly ListProposalVotes: string[];
```

- *Type:* string[]

IAM actions required for the ListProposalVotes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccessor`<sup>Required</sup> <a name="opGetAccessor" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetAccessor"></a>

```typescript
public readonly opGetAccessor: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessor API call.

---

##### `opGetMember`<sup>Required</sup> <a name="opGetMember" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetMember"></a>

```typescript
public readonly opGetMember: string[];
```

- *Type:* string[]

IAM actions required for the GetMember API call.

---

##### `opGetNetwork`<sup>Required</sup> <a name="opGetNetwork" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetNetwork"></a>

```typescript
public readonly opGetNetwork: string[];
```

- *Type:* string[]

IAM actions required for the GetNetwork API call.

---

##### `opGetNode`<sup>Required</sup> <a name="opGetNode" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetNode"></a>

```typescript
public readonly opGetNode: string[];
```

- *Type:* string[]

IAM actions required for the GetNode API call.

---

##### `opGetProposal`<sup>Required</sup> <a name="opGetProposal" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.opGetProposal"></a>

```typescript
public readonly opGetProposal: string[];
```

- *Type:* string[]

IAM actions required for the GetProposal API call.

---

##### `RejectInvitation`<sup>Required</sup> <a name="RejectInvitation" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.RejectInvitation"></a>

```typescript
public readonly RejectInvitation: string[];
```

- *Type:* string[]

IAM actions required for the RejectInvitation API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateMember`<sup>Required</sup> <a name="UpdateMember" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.UpdateMember"></a>

```typescript
public readonly UpdateMember: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMember API call.

---

##### `UpdateNode`<sup>Required</sup> <a name="UpdateNode" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.UpdateNode"></a>

```typescript
public readonly UpdateNode: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNode API call.

---

##### `VoteOnProposal`<sup>Required</sup> <a name="VoteOnProposal" id="@cdk_utils/iam.managedblockchain.ManagedblockchainOperations.property.VoteOnProposal"></a>

```typescript
public readonly VoteOnProposal: string[];
```

- *Type:* string[]

IAM actions required for the VoteOnProposal API call.

---

### ManagedblockchainResources <a name="ManagedblockchainResources" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources"></a>

ARN builders, validators, and parsers for managedblockchain resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.Initializer"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

new managedblockchain.ManagedblockchainResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.accessor">accessor</a></code> | Builds an ARN for the accessor resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.invitation">invitation</a></code> | Builds an ARN for the invitation resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidAccessorArn">isValidAccessorArn</a></code> | Validates whether a string is a valid ARN for the accessor resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidInvitationArn">isValidInvitationArn</a></code> | Validates whether a string is a valid ARN for the invitation resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidMemberArn">isValidMemberArn</a></code> | Validates whether a string is a valid ARN for the member resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidNetworkArn">isValidNetworkArn</a></code> | Validates whether a string is a valid ARN for the network resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidNodeArn">isValidNodeArn</a></code> | Validates whether a string is a valid ARN for the node resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidProposalArn">isValidProposalArn</a></code> | Validates whether a string is a valid ARN for the proposal resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.member">member</a></code> | Builds an ARN for the member resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.network">network</a></code> | Builds an ARN for the network resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.node">node</a></code> | Builds an ARN for the node resource. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseAccessorArn">parseAccessorArn</a></code> | Parses a accessor ARN into its components. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseInvitationArn">parseInvitationArn</a></code> | Parses a invitation ARN into its components. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseMemberArn">parseMemberArn</a></code> | Parses a member ARN into its components. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseNetworkArn">parseNetworkArn</a></code> | Parses a network ARN into its components. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseNodeArn">parseNodeArn</a></code> | Parses a node ARN into its components. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseProposalArn">parseProposalArn</a></code> | Parses a proposal ARN into its components. |
| <code><a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainResources.proposal">proposal</a></code> | Builds an ARN for the proposal resource. |

---

##### `accessor` <a name="accessor" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.accessor"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.accessor(props: ManagedblockchainAccessorArnProps)
```

Builds an ARN for the accessor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.accessor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainAccessorArnProps">ManagedblockchainAccessorArnProps</a>

---

##### `invitation` <a name="invitation" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.invitation"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.invitation(props: ManagedblockchainInvitationArnProps)
```

Builds an ARN for the invitation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.invitation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainInvitationArnProps">ManagedblockchainInvitationArnProps</a>

---

##### `isValidAccessorArn` <a name="isValidAccessorArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidAccessorArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.isValidAccessorArn(arn: string)
```

Validates whether a string is a valid ARN for the accessor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidAccessorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInvitationArn` <a name="isValidInvitationArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidInvitationArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.isValidInvitationArn(arn: string)
```

Validates whether a string is a valid ARN for the invitation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidInvitationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMemberArn` <a name="isValidMemberArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidMemberArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.isValidMemberArn(arn: string)
```

Validates whether a string is a valid ARN for the member resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidMemberArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkArn` <a name="isValidNetworkArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidNetworkArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.isValidNetworkArn(arn: string)
```

Validates whether a string is a valid ARN for the network resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNodeArn` <a name="isValidNodeArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidNodeArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.isValidNodeArn(arn: string)
```

Validates whether a string is a valid ARN for the node resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProposalArn` <a name="isValidProposalArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidProposalArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.isValidProposalArn(arn: string)
```

Validates whether a string is a valid ARN for the proposal resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.isValidProposalArn.parameter.arn"></a>

- *Type:* string

---

##### `member` <a name="member" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.member"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.member(props: ManagedblockchainMemberArnProps)
```

Builds an ARN for the member resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.member.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainMemberArnProps">ManagedblockchainMemberArnProps</a>

---

##### `network` <a name="network" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.network"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.network(props: ManagedblockchainNetworkArnProps)
```

Builds an ARN for the network resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.network.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNetworkArnProps">ManagedblockchainNetworkArnProps</a>

---

##### `node` <a name="node" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.node"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.node(props: ManagedblockchainNodeArnProps)
```

Builds an ARN for the node resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.node.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainNodeArnProps">ManagedblockchainNodeArnProps</a>

---

##### `parseAccessorArn` <a name="parseAccessorArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseAccessorArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.parseAccessorArn(arn: string)
```

Parses a accessor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseAccessorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInvitationArn` <a name="parseInvitationArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseInvitationArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.parseInvitationArn(arn: string)
```

Parses a invitation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseInvitationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMemberArn` <a name="parseMemberArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseMemberArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.parseMemberArn(arn: string)
```

Parses a member ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseMemberArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkArn` <a name="parseNetworkArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseNetworkArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.parseNetworkArn(arn: string)
```

Parses a network ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNodeArn` <a name="parseNodeArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseNodeArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.parseNodeArn(arn: string)
```

Parses a node ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProposalArn` <a name="parseProposalArn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseProposalArn"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.parseProposalArn(arn: string)
```

Parses a proposal ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.parseProposalArn.parameter.arn"></a>

- *Type:* string

---

##### `proposal` <a name="proposal" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.proposal"></a>

```typescript
import { managedblockchain } from '@cdk_utils/iam'

managedblockchain.ManagedblockchainResources.proposal(props: ManagedblockchainProposalArnProps)
```

Builds an ARN for the proposal resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.managedblockchain.ManagedblockchainResources.proposal.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.managedblockchain.ManagedblockchainProposalArnProps">ManagedblockchainProposalArnProps</a>

---




