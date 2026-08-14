# `eks` Submodule <a name="`eks` Submodule" id="@cdk_utils/iam.eks"></a>


## Structs <a name="Structs" id="Structs"></a>

### EKSAccessEntryArnComponents <a name="EKSAccessEntryArnComponents" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents"></a>

Parsed components of a access-entry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSAccessEntryArnComponents: eks.EKSAccessEntryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.iamIdentityAccountId">iamIdentityAccountId</a></code> | <code>string</code> | The IamIdentityAccountID component. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.iamIdentityName">iamIdentityName</a></code> | <code>string</code> | The IamIdentityName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.iamIdentityType">iamIdentityType</a></code> | <code>string</code> | The IamIdentityType component. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `iamIdentityAccountId`<sup>Required</sup> <a name="iamIdentityAccountId" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.iamIdentityAccountId"></a>

```typescript
public readonly iamIdentityAccountId: string;
```

- *Type:* string

The IamIdentityAccountID component.

---

##### `iamIdentityName`<sup>Required</sup> <a name="iamIdentityName" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.iamIdentityName"></a>

```typescript
public readonly iamIdentityName: string;
```

- *Type:* string

The IamIdentityName component.

---

##### `iamIdentityType`<sup>Required</sup> <a name="iamIdentityType" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.iamIdentityType"></a>

```typescript
public readonly iamIdentityType: string;
```

- *Type:* string

The IamIdentityType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSAccessEntryArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### EKSAccessEntryArnProps <a name="EKSAccessEntryArnProps" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps"></a>

Properties for building a access-entry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSAccessEntryArnProps: eks.EKSAccessEntryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.iamIdentityAccountId">iamIdentityAccountId</a></code> | <code>string</code> | The IamIdentityAccountID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.iamIdentityName">iamIdentityName</a></code> | <code>string</code> | The IamIdentityName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.iamIdentityType">iamIdentityType</a></code> | <code>string</code> | The IamIdentityType component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `iamIdentityAccountId`<sup>Required</sup> <a name="iamIdentityAccountId" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.iamIdentityAccountId"></a>

```typescript
public readonly iamIdentityAccountId: string;
```

- *Type:* string

The IamIdentityAccountID component of the ARN.

---

##### `iamIdentityName`<sup>Required</sup> <a name="iamIdentityName" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.iamIdentityName"></a>

```typescript
public readonly iamIdentityName: string;
```

- *Type:* string

The IamIdentityName component of the ARN.

---

##### `iamIdentityType`<sup>Required</sup> <a name="iamIdentityType" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.iamIdentityType"></a>

```typescript
public readonly iamIdentityType: string;
```

- *Type:* string

The IamIdentityType component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSAccessEntryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSAccessPolicyArnComponents <a name="EKSAccessPolicyArnComponents" id="@cdk_utils/iam.eks.EKSAccessPolicyArnComponents"></a>

Parsed components of a access-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSAccessPolicyArnComponents: eks.EKSAccessPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.property.accessPolicyName">accessPolicyName</a></code> | <code>string</code> | The AccessPolicyName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPolicyName`<sup>Required</sup> <a name="accessPolicyName" id="@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.property.accessPolicyName"></a>

```typescript
public readonly accessPolicyName: string;
```

- *Type:* string

The AccessPolicyName component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSAccessPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EKSAccessPolicyArnProps <a name="EKSAccessPolicyArnProps" id="@cdk_utils/iam.eks.EKSAccessPolicyArnProps"></a>

Properties for building a access-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSAccessPolicyArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSAccessPolicyArnProps: eks.EKSAccessPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnProps.property.accessPolicyName">accessPolicyName</a></code> | <code>string</code> | The AccessPolicyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessPolicyName`<sup>Required</sup> <a name="accessPolicyName" id="@cdk_utils/iam.eks.EKSAccessPolicyArnProps.property.accessPolicyName"></a>

```typescript
public readonly accessPolicyName: string;
```

- *Type:* string

The AccessPolicyName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSAccessPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSAccessPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSAccessPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSAddonArnComponents <a name="EKSAddonArnComponents" id="@cdk_utils/iam.eks.EKSAddonArnComponents"></a>

Parsed components of a addon ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSAddonArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSAddonArnComponents: eks.EKSAddonArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnComponents.property.addonName">addonName</a></code> | <code>string</code> | The AddonName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSAddonArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@cdk_utils/iam.eks.EKSAddonArnComponents.property.addonName"></a>

```typescript
public readonly addonName: string;
```

- *Type:* string

The AddonName component.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSAddonArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSAddonArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSAddonArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSAddonArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### EKSAddonArnProps <a name="EKSAddonArnProps" id="@cdk_utils/iam.eks.EKSAddonArnProps"></a>

Properties for building a addon ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSAddonArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSAddonArnProps: eks.EKSAddonArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnProps.property.addonName">addonName</a></code> | <code>string</code> | The AddonName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSAddonArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `addonName`<sup>Required</sup> <a name="addonName" id="@cdk_utils/iam.eks.EKSAddonArnProps.property.addonName"></a>

```typescript
public readonly addonName: string;
```

- *Type:* string

The AddonName component of the ARN.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSAddonArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSAddonArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSAddonArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSAddonArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSAddonArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSCapabilityArnComponents <a name="EKSCapabilityArnComponents" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents"></a>

Parsed components of a capability ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSCapabilityArnComponents: eks.EKSCapabilityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.capabilityName">capabilityName</a></code> | <code>string</code> | The CapabilityName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.capabilityType">capabilityType</a></code> | <code>string</code> | The CapabilityType component. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `capabilityName`<sup>Required</sup> <a name="capabilityName" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.capabilityName"></a>

```typescript
public readonly capabilityName: string;
```

- *Type:* string

The CapabilityName component.

---

##### `capabilityType`<sup>Required</sup> <a name="capabilityType" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.capabilityType"></a>

```typescript
public readonly capabilityType: string;
```

- *Type:* string

The CapabilityType component.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSCapabilityArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### EKSCapabilityArnProps <a name="EKSCapabilityArnProps" id="@cdk_utils/iam.eks.EKSCapabilityArnProps"></a>

Properties for building a capability ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSCapabilityArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSCapabilityArnProps: eks.EKSCapabilityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnProps.property.capabilityName">capabilityName</a></code> | <code>string</code> | The CapabilityName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnProps.property.capabilityType">capabilityType</a></code> | <code>string</code> | The CapabilityType component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSCapabilityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `capabilityName`<sup>Required</sup> <a name="capabilityName" id="@cdk_utils/iam.eks.EKSCapabilityArnProps.property.capabilityName"></a>

```typescript
public readonly capabilityName: string;
```

- *Type:* string

The CapabilityName component of the ARN.

---

##### `capabilityType`<sup>Required</sup> <a name="capabilityType" id="@cdk_utils/iam.eks.EKSCapabilityArnProps.property.capabilityType"></a>

```typescript
public readonly capabilityType: string;
```

- *Type:* string

The CapabilityType component of the ARN.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSCapabilityArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSCapabilityArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSCapabilityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSCapabilityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSCapabilityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSClusterArnComponents <a name="EKSClusterArnComponents" id="@cdk_utils/iam.eks.EKSClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSClusterArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSClusterArnComponents: eks.EKSClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSClusterArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSClusterArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EKSClusterArnProps <a name="EKSClusterArnProps" id="@cdk_utils/iam.eks.EKSClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSClusterArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSClusterArnProps: eks.EKSClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSClusterArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSClusterArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSDashboardArnComponents <a name="EKSDashboardArnComponents" id="@cdk_utils/iam.eks.EKSDashboardArnComponents"></a>

Parsed components of a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSDashboardArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSDashboardArnComponents: eks.EKSDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSDashboardArnComponents.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSDashboardArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.eks.EKSDashboardArnComponents.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSDashboardArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### EKSDashboardArnProps <a name="EKSDashboardArnProps" id="@cdk_utils/iam.eks.EKSDashboardArnProps"></a>

Properties for building a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSDashboardArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSDashboardArnProps: eks.EKSDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSDashboardArnProps.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSDashboardArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.eks.EKSDashboardArnProps.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSDashboardArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSEKSAnywhereSubscriptionArnComponents <a name="EKSEKSAnywhereSubscriptionArnComponents" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents"></a>

Parsed components of a eks-anywhere-subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSEKSAnywhereSubscriptionArnComponents: eks.EKSEKSAnywhereSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### EKSEKSAnywhereSubscriptionArnProps <a name="EKSEKSAnywhereSubscriptionArnProps" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps"></a>

Properties for building a eks-anywhere-subscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSEKSAnywhereSubscriptionArnProps: eks.EKSEKSAnywhereSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSFargateprofileArnComponents <a name="EKSFargateprofileArnComponents" id="@cdk_utils/iam.eks.EKSFargateprofileArnComponents"></a>

Parsed components of a fargateprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSFargateprofileArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSFargateprofileArnComponents: eks.EKSFargateprofileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.fargateProfileName">fargateProfileName</a></code> | <code>string</code> | The FargateProfileName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `fargateProfileName`<sup>Required</sup> <a name="fargateProfileName" id="@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.fargateProfileName"></a>

```typescript
public readonly fargateProfileName: string;
```

- *Type:* string

The FargateProfileName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSFargateprofileArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### EKSFargateprofileArnProps <a name="EKSFargateprofileArnProps" id="@cdk_utils/iam.eks.EKSFargateprofileArnProps"></a>

Properties for building a fargateprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSFargateprofileArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSFargateprofileArnProps: eks.EKSFargateprofileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.fargateProfileName">fargateProfileName</a></code> | <code>string</code> | The FargateProfileName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `fargateProfileName`<sup>Required</sup> <a name="fargateProfileName" id="@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.fargateProfileName"></a>

```typescript
public readonly fargateProfileName: string;
```

- *Type:* string

The FargateProfileName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSFargateprofileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSIdentityproviderconfigArnComponents <a name="EKSIdentityproviderconfigArnComponents" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents"></a>

Parsed components of a identityproviderconfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSIdentityproviderconfigArnComponents: eks.EKSIdentityproviderconfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.identityProviderConfigName">identityProviderConfigName</a></code> | <code>string</code> | The IdentityProviderConfigName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | The IdentityProviderType component. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `identityProviderConfigName`<sup>Required</sup> <a name="identityProviderConfigName" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.identityProviderConfigName"></a>

```typescript
public readonly identityProviderConfigName: string;
```

- *Type:* string

The IdentityProviderConfigName component.

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

The IdentityProviderType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### EKSIdentityproviderconfigArnProps <a name="EKSIdentityproviderconfigArnProps" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps"></a>

Properties for building a identityproviderconfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSIdentityproviderconfigArnProps: eks.EKSIdentityproviderconfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.identityProviderConfigName">identityProviderConfigName</a></code> | <code>string</code> | The IdentityProviderConfigName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.identityProviderType">identityProviderType</a></code> | <code>string</code> | The IdentityProviderType component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `identityProviderConfigName`<sup>Required</sup> <a name="identityProviderConfigName" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.identityProviderConfigName"></a>

```typescript
public readonly identityProviderConfigName: string;
```

- *Type:* string

The IdentityProviderConfigName component of the ARN.

---

##### `identityProviderType`<sup>Required</sup> <a name="identityProviderType" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.identityProviderType"></a>

```typescript
public readonly identityProviderType: string;
```

- *Type:* string

The IdentityProviderType component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSNodegroupArnComponents <a name="EKSNodegroupArnComponents" id="@cdk_utils/iam.eks.EKSNodegroupArnComponents"></a>

Parsed components of a nodegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSNodegroupArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSNodegroupArnComponents: eks.EKSNodegroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.nodegroupName">nodegroupName</a></code> | <code>string</code> | The NodegroupName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `nodegroupName`<sup>Required</sup> <a name="nodegroupName" id="@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.nodegroupName"></a>

```typescript
public readonly nodegroupName: string;
```

- *Type:* string

The NodegroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSNodegroupArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### EKSNodegroupArnProps <a name="EKSNodegroupArnProps" id="@cdk_utils/iam.eks.EKSNodegroupArnProps"></a>

Properties for building a nodegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSNodegroupArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSNodegroupArnProps: eks.EKSNodegroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnProps.property.nodegroupName">nodegroupName</a></code> | <code>string</code> | The NodegroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSNodegroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSNodegroupArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `nodegroupName`<sup>Required</sup> <a name="nodegroupName" id="@cdk_utils/iam.eks.EKSNodegroupArnProps.property.nodegroupName"></a>

```typescript
public readonly nodegroupName: string;
```

- *Type:* string

The NodegroupName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSNodegroupArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSNodegroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSNodegroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSNodegroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EKSPodidentityassociationArnComponents <a name="EKSPodidentityassociationArnComponents" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents"></a>

Parsed components of a podidentityassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSPodidentityassociationArnComponents: eks.EKSPodidentityassociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component. |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.uuid">uuid</a></code> | <code>string</code> | The UUID component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnComponents.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component.

---

### EKSPodidentityassociationArnProps <a name="EKSPodidentityassociationArnProps" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnProps"></a>

Properties for building a podidentityassociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

const eKSPodidentityassociationArnProps: eks.EKSPodidentityassociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.clusterName">clusterName</a></code> | <code>string</code> | The ClusterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.uuid">uuid</a></code> | <code>string</code> | The UUID component of the ARN. |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The ClusterName component of the ARN.

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

The UUID component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.eks.EKSPodidentityassociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EKSActions <a name="EKSActions" id="@cdk_utils/iam.eks.EKSActions"></a>

IAM action constants for the eks service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks.EKSActions.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

new eks.EKSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AccessKubernetesApi">AccessKubernetesApi</a></code> | <code>string</code> | [Read] eks:AccessKubernetesApi. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AssociateAccessPolicy">AssociateAccessPolicy</a></code> | <code>string</code> | [Write] eks:AssociateAccessPolicy. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AssociateEncryptionConfig">AssociateEncryptionConfig</a></code> | <code>string</code> | [Write] eks:AssociateEncryptionConfig. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.AssociateIdentityProviderConfig">AssociateIdentityProviderConfig</a></code> | <code>string</code> | [Write] eks:AssociateIdentityProviderConfig. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CancelUpdate">CancelUpdate</a></code> | <code>string</code> | [Write] eks:CancelUpdate. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CreateAccessEntry">CreateAccessEntry</a></code> | <code>string</code> | [Write] eks:CreateAccessEntry. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CreateAddon">CreateAddon</a></code> | <code>string</code> | [Write] eks:CreateAddon. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CreateCapability">CreateCapability</a></code> | <code>string</code> | [Write] eks:CreateCapability. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] eks:CreateCluster. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CreateEksAnywhereSubscription">CreateEksAnywhereSubscription</a></code> | <code>string</code> | [Write] eks:CreateEksAnywhereSubscription. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CreateFargateProfile">CreateFargateProfile</a></code> | <code>string</code> | [Write] eks:CreateFargateProfile. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CreateNodegroup">CreateNodegroup</a></code> | <code>string</code> | [Write] eks:CreateNodegroup. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.CreatePodIdentityAssociation">CreatePodIdentityAssociation</a></code> | <code>string</code> | [Write] eks:CreatePodIdentityAssociation. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeleteAccessEntry">DeleteAccessEntry</a></code> | <code>string</code> | [Write] eks:DeleteAccessEntry. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeleteAddon">DeleteAddon</a></code> | <code>string</code> | [Write] eks:DeleteAddon. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeleteCapability">DeleteCapability</a></code> | <code>string</code> | [Write] eks:DeleteCapability. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] eks:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeleteEksAnywhereSubscription">DeleteEksAnywhereSubscription</a></code> | <code>string</code> | [Write] eks:DeleteEksAnywhereSubscription. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeleteFargateProfile">DeleteFargateProfile</a></code> | <code>string</code> | [Write] eks:DeleteFargateProfile. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeleteNodegroup">DeleteNodegroup</a></code> | <code>string</code> | [Write] eks:DeleteNodegroup. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeletePodIdentityAssociation">DeletePodIdentityAssociation</a></code> | <code>string</code> | [Write] eks:DeletePodIdentityAssociation. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DeregisterCluster">DeregisterCluster</a></code> | <code>string</code> | [Write] eks:DeregisterCluster. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeAccessEntry">DescribeAccessEntry</a></code> | <code>string</code> | [Read] eks:DescribeAccessEntry. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeAddon">DescribeAddon</a></code> | <code>string</code> | [Read] eks:DescribeAddon. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeAddonConfiguration">DescribeAddonConfiguration</a></code> | <code>string</code> | [Read] eks:DescribeAddonConfiguration. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeAddonVersions">DescribeAddonVersions</a></code> | <code>string</code> | [Read] eks:DescribeAddonVersions. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeCapability">DescribeCapability</a></code> | <code>string</code> | [Read] eks:DescribeCapability. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeCluster">DescribeCluster</a></code> | <code>string</code> | [Read] eks:DescribeCluster. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeClusterVersions">DescribeClusterVersions</a></code> | <code>string</code> | [Read] eks:DescribeClusterVersions. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeEksAnywhereSubscription">DescribeEksAnywhereSubscription</a></code> | <code>string</code> | [Read] eks:DescribeEksAnywhereSubscription. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeFargateProfile">DescribeFargateProfile</a></code> | <code>string</code> | [Read] eks:DescribeFargateProfile. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeIdentityProviderConfig">DescribeIdentityProviderConfig</a></code> | <code>string</code> | [Read] eks:DescribeIdentityProviderConfig. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeInsight">DescribeInsight</a></code> | <code>string</code> | [Read] eks:DescribeInsight. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeInsightsRefresh">DescribeInsightsRefresh</a></code> | <code>string</code> | [Read] eks:DescribeInsightsRefresh. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeNodegroup">DescribeNodegroup</a></code> | <code>string</code> | [Read] eks:DescribeNodegroup. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribePodIdentityAssociation">DescribePodIdentityAssociation</a></code> | <code>string</code> | [Read] eks:DescribePodIdentityAssociation. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DescribeUpdate">DescribeUpdate</a></code> | <code>string</code> | [Read] eks:DescribeUpdate. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DisassociateAccessPolicy">DisassociateAccessPolicy</a></code> | <code>string</code> | [Write] eks:DisassociateAccessPolicy. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.DisassociateIdentityProviderConfig">DisassociateIdentityProviderConfig</a></code> | <code>string</code> | [Write] eks:DisassociateIdentityProviderConfig. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListAccessEntries">ListAccessEntries</a></code> | <code>string</code> | [List] eks:ListAccessEntries. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListAccessPolicies">ListAccessPolicies</a></code> | <code>string</code> | [List] eks:ListAccessPolicies. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListAddons">ListAddons</a></code> | <code>string</code> | [List] eks:ListAddons. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListAssociatedAccessPolicies">ListAssociatedAccessPolicies</a></code> | <code>string</code> | [List] eks:ListAssociatedAccessPolicies. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListCapabilities">ListCapabilities</a></code> | <code>string</code> | [List] eks:ListCapabilities. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] eks:ListClusters. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListDashboardData">ListDashboardData</a></code> | <code>string</code> | [Read] eks:ListDashboardData. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListDashboardResources">ListDashboardResources</a></code> | <code>string</code> | [Read] eks:ListDashboardResources. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListEksAnywhereSubscriptions">ListEksAnywhereSubscriptions</a></code> | <code>string</code> | [List] eks:ListEksAnywhereSubscriptions. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListFargateProfiles">ListFargateProfiles</a></code> | <code>string</code> | [List] eks:ListFargateProfiles. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListIdentityProviderConfigs">ListIdentityProviderConfigs</a></code> | <code>string</code> | [List] eks:ListIdentityProviderConfigs. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListInsights">ListInsights</a></code> | <code>string</code> | [List] eks:ListInsights. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListNodegroups">ListNodegroups</a></code> | <code>string</code> | [List] eks:ListNodegroups. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListPodIdentityAssociations">ListPodIdentityAssociations</a></code> | <code>string</code> | [List] eks:ListPodIdentityAssociations. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] eks:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.ListUpdates">ListUpdates</a></code> | <code>string</code> | [List] eks:ListUpdates. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.MutateViaKubernetesApi">MutateViaKubernetesApi</a></code> | <code>string</code> | [Write] eks:MutateViaKubernetesApi. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.RegisterCluster">RegisterCluster</a></code> | <code>string</code> | [Write] eks:RegisterCluster. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.StartInsightsRefresh">StartInsightsRefresh</a></code> | <code>string</code> | [Write] eks:StartInsightsRefresh. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] eks:TagResource. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] eks:UntagResource. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdateAccessEntry">UpdateAccessEntry</a></code> | <code>string</code> | [Write] eks:UpdateAccessEntry. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdateAddon">UpdateAddon</a></code> | <code>string</code> | [Write] eks:UpdateAddon. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdateCapability">UpdateCapability</a></code> | <code>string</code> | [Write] eks:UpdateCapability. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdateClusterConfig">UpdateClusterConfig</a></code> | <code>string</code> | [Write] eks:UpdateClusterConfig. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdateClusterVersion">UpdateClusterVersion</a></code> | <code>string</code> | [Write] eks:UpdateClusterVersion. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdateEksAnywhereSubscription">UpdateEksAnywhereSubscription</a></code> | <code>string</code> | [Write] eks:UpdateEksAnywhereSubscription. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdateNodegroupConfig">UpdateNodegroupConfig</a></code> | <code>string</code> | [Write] eks:UpdateNodegroupConfig. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdateNodegroupVersion">UpdateNodegroupVersion</a></code> | <code>string</code> | [Write] eks:UpdateNodegroupVersion. |
| <code><a href="#@cdk_utils/iam.eks.EKSActions.property.UpdatePodIdentityAssociation">UpdatePodIdentityAssociation</a></code> | <code>string</code> | [Write] eks:UpdatePodIdentityAssociation. |

---

##### `AccessKubernetesApi`<sup>Required</sup> <a name="AccessKubernetesApi" id="@cdk_utils/iam.eks.EKSActions.property.AccessKubernetesApi"></a>

```typescript
public readonly AccessKubernetesApi: string;
```

- *Type:* string

[Read] eks:AccessKubernetesApi.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.eks.EKSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.eks.EKSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.eks.EKSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.eks.EKSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.eks.EKSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAccessPolicy`<sup>Required</sup> <a name="AssociateAccessPolicy" id="@cdk_utils/iam.eks.EKSActions.property.AssociateAccessPolicy"></a>

```typescript
public readonly AssociateAccessPolicy: string;
```

- *Type:* string

[Write] eks:AssociateAccessPolicy.

---

##### `AssociateEncryptionConfig`<sup>Required</sup> <a name="AssociateEncryptionConfig" id="@cdk_utils/iam.eks.EKSActions.property.AssociateEncryptionConfig"></a>

```typescript
public readonly AssociateEncryptionConfig: string;
```

- *Type:* string

[Write] eks:AssociateEncryptionConfig.

---

##### `AssociateIdentityProviderConfig`<sup>Required</sup> <a name="AssociateIdentityProviderConfig" id="@cdk_utils/iam.eks.EKSActions.property.AssociateIdentityProviderConfig"></a>

```typescript
public readonly AssociateIdentityProviderConfig: string;
```

- *Type:* string

[Write] eks:AssociateIdentityProviderConfig.

---

##### `CancelUpdate`<sup>Required</sup> <a name="CancelUpdate" id="@cdk_utils/iam.eks.EKSActions.property.CancelUpdate"></a>

```typescript
public readonly CancelUpdate: string;
```

- *Type:* string

[Write] eks:CancelUpdate.

---

##### `CreateAccessEntry`<sup>Required</sup> <a name="CreateAccessEntry" id="@cdk_utils/iam.eks.EKSActions.property.CreateAccessEntry"></a>

```typescript
public readonly CreateAccessEntry: string;
```

- *Type:* string

[Write] eks:CreateAccessEntry.

---

##### `CreateAddon`<sup>Required</sup> <a name="CreateAddon" id="@cdk_utils/iam.eks.EKSActions.property.CreateAddon"></a>

```typescript
public readonly CreateAddon: string;
```

- *Type:* string

[Write] eks:CreateAddon.

---

##### `CreateCapability`<sup>Required</sup> <a name="CreateCapability" id="@cdk_utils/iam.eks.EKSActions.property.CreateCapability"></a>

```typescript
public readonly CreateCapability: string;
```

- *Type:* string

[Write] eks:CreateCapability.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.eks.EKSActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] eks:CreateCluster.

---

##### `CreateEksAnywhereSubscription`<sup>Required</sup> <a name="CreateEksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSActions.property.CreateEksAnywhereSubscription"></a>

```typescript
public readonly CreateEksAnywhereSubscription: string;
```

- *Type:* string

[Write] eks:CreateEksAnywhereSubscription.

---

##### `CreateFargateProfile`<sup>Required</sup> <a name="CreateFargateProfile" id="@cdk_utils/iam.eks.EKSActions.property.CreateFargateProfile"></a>

```typescript
public readonly CreateFargateProfile: string;
```

- *Type:* string

[Write] eks:CreateFargateProfile.

---

##### `CreateNodegroup`<sup>Required</sup> <a name="CreateNodegroup" id="@cdk_utils/iam.eks.EKSActions.property.CreateNodegroup"></a>

```typescript
public readonly CreateNodegroup: string;
```

- *Type:* string

[Write] eks:CreateNodegroup.

---

##### `CreatePodIdentityAssociation`<sup>Required</sup> <a name="CreatePodIdentityAssociation" id="@cdk_utils/iam.eks.EKSActions.property.CreatePodIdentityAssociation"></a>

```typescript
public readonly CreatePodIdentityAssociation: string;
```

- *Type:* string

[Write] eks:CreatePodIdentityAssociation.

---

##### `DeleteAccessEntry`<sup>Required</sup> <a name="DeleteAccessEntry" id="@cdk_utils/iam.eks.EKSActions.property.DeleteAccessEntry"></a>

```typescript
public readonly DeleteAccessEntry: string;
```

- *Type:* string

[Write] eks:DeleteAccessEntry.

---

##### `DeleteAddon`<sup>Required</sup> <a name="DeleteAddon" id="@cdk_utils/iam.eks.EKSActions.property.DeleteAddon"></a>

```typescript
public readonly DeleteAddon: string;
```

- *Type:* string

[Write] eks:DeleteAddon.

---

##### `DeleteCapability`<sup>Required</sup> <a name="DeleteCapability" id="@cdk_utils/iam.eks.EKSActions.property.DeleteCapability"></a>

```typescript
public readonly DeleteCapability: string;
```

- *Type:* string

[Write] eks:DeleteCapability.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.eks.EKSActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] eks:DeleteCluster.

---

##### `DeleteEksAnywhereSubscription`<sup>Required</sup> <a name="DeleteEksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSActions.property.DeleteEksAnywhereSubscription"></a>

```typescript
public readonly DeleteEksAnywhereSubscription: string;
```

- *Type:* string

[Write] eks:DeleteEksAnywhereSubscription.

---

##### `DeleteFargateProfile`<sup>Required</sup> <a name="DeleteFargateProfile" id="@cdk_utils/iam.eks.EKSActions.property.DeleteFargateProfile"></a>

```typescript
public readonly DeleteFargateProfile: string;
```

- *Type:* string

[Write] eks:DeleteFargateProfile.

---

##### `DeleteNodegroup`<sup>Required</sup> <a name="DeleteNodegroup" id="@cdk_utils/iam.eks.EKSActions.property.DeleteNodegroup"></a>

```typescript
public readonly DeleteNodegroup: string;
```

- *Type:* string

[Write] eks:DeleteNodegroup.

---

##### `DeletePodIdentityAssociation`<sup>Required</sup> <a name="DeletePodIdentityAssociation" id="@cdk_utils/iam.eks.EKSActions.property.DeletePodIdentityAssociation"></a>

```typescript
public readonly DeletePodIdentityAssociation: string;
```

- *Type:* string

[Write] eks:DeletePodIdentityAssociation.

---

##### `DeregisterCluster`<sup>Required</sup> <a name="DeregisterCluster" id="@cdk_utils/iam.eks.EKSActions.property.DeregisterCluster"></a>

```typescript
public readonly DeregisterCluster: string;
```

- *Type:* string

[Write] eks:DeregisterCluster.

---

##### `DescribeAccessEntry`<sup>Required</sup> <a name="DescribeAccessEntry" id="@cdk_utils/iam.eks.EKSActions.property.DescribeAccessEntry"></a>

```typescript
public readonly DescribeAccessEntry: string;
```

- *Type:* string

[Read] eks:DescribeAccessEntry.

---

##### `DescribeAddon`<sup>Required</sup> <a name="DescribeAddon" id="@cdk_utils/iam.eks.EKSActions.property.DescribeAddon"></a>

```typescript
public readonly DescribeAddon: string;
```

- *Type:* string

[Read] eks:DescribeAddon.

---

##### `DescribeAddonConfiguration`<sup>Required</sup> <a name="DescribeAddonConfiguration" id="@cdk_utils/iam.eks.EKSActions.property.DescribeAddonConfiguration"></a>

```typescript
public readonly DescribeAddonConfiguration: string;
```

- *Type:* string

[Read] eks:DescribeAddonConfiguration.

---

##### `DescribeAddonVersions`<sup>Required</sup> <a name="DescribeAddonVersions" id="@cdk_utils/iam.eks.EKSActions.property.DescribeAddonVersions"></a>

```typescript
public readonly DescribeAddonVersions: string;
```

- *Type:* string

[Read] eks:DescribeAddonVersions.

---

##### `DescribeCapability`<sup>Required</sup> <a name="DescribeCapability" id="@cdk_utils/iam.eks.EKSActions.property.DescribeCapability"></a>

```typescript
public readonly DescribeCapability: string;
```

- *Type:* string

[Read] eks:DescribeCapability.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.eks.EKSActions.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string;
```

- *Type:* string

[Read] eks:DescribeCluster.

---

##### `DescribeClusterVersions`<sup>Required</sup> <a name="DescribeClusterVersions" id="@cdk_utils/iam.eks.EKSActions.property.DescribeClusterVersions"></a>

```typescript
public readonly DescribeClusterVersions: string;
```

- *Type:* string

[Read] eks:DescribeClusterVersions.

---

##### `DescribeEksAnywhereSubscription`<sup>Required</sup> <a name="DescribeEksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSActions.property.DescribeEksAnywhereSubscription"></a>

```typescript
public readonly DescribeEksAnywhereSubscription: string;
```

- *Type:* string

[Read] eks:DescribeEksAnywhereSubscription.

---

##### `DescribeFargateProfile`<sup>Required</sup> <a name="DescribeFargateProfile" id="@cdk_utils/iam.eks.EKSActions.property.DescribeFargateProfile"></a>

```typescript
public readonly DescribeFargateProfile: string;
```

- *Type:* string

[Read] eks:DescribeFargateProfile.

---

##### `DescribeIdentityProviderConfig`<sup>Required</sup> <a name="DescribeIdentityProviderConfig" id="@cdk_utils/iam.eks.EKSActions.property.DescribeIdentityProviderConfig"></a>

```typescript
public readonly DescribeIdentityProviderConfig: string;
```

- *Type:* string

[Read] eks:DescribeIdentityProviderConfig.

---

##### `DescribeInsight`<sup>Required</sup> <a name="DescribeInsight" id="@cdk_utils/iam.eks.EKSActions.property.DescribeInsight"></a>

```typescript
public readonly DescribeInsight: string;
```

- *Type:* string

[Read] eks:DescribeInsight.

---

##### `DescribeInsightsRefresh`<sup>Required</sup> <a name="DescribeInsightsRefresh" id="@cdk_utils/iam.eks.EKSActions.property.DescribeInsightsRefresh"></a>

```typescript
public readonly DescribeInsightsRefresh: string;
```

- *Type:* string

[Read] eks:DescribeInsightsRefresh.

---

##### `DescribeNodegroup`<sup>Required</sup> <a name="DescribeNodegroup" id="@cdk_utils/iam.eks.EKSActions.property.DescribeNodegroup"></a>

```typescript
public readonly DescribeNodegroup: string;
```

- *Type:* string

[Read] eks:DescribeNodegroup.

---

##### `DescribePodIdentityAssociation`<sup>Required</sup> <a name="DescribePodIdentityAssociation" id="@cdk_utils/iam.eks.EKSActions.property.DescribePodIdentityAssociation"></a>

```typescript
public readonly DescribePodIdentityAssociation: string;
```

- *Type:* string

[Read] eks:DescribePodIdentityAssociation.

---

##### `DescribeUpdate`<sup>Required</sup> <a name="DescribeUpdate" id="@cdk_utils/iam.eks.EKSActions.property.DescribeUpdate"></a>

```typescript
public readonly DescribeUpdate: string;
```

- *Type:* string

[Read] eks:DescribeUpdate.

---

##### `DisassociateAccessPolicy`<sup>Required</sup> <a name="DisassociateAccessPolicy" id="@cdk_utils/iam.eks.EKSActions.property.DisassociateAccessPolicy"></a>

```typescript
public readonly DisassociateAccessPolicy: string;
```

- *Type:* string

[Write] eks:DisassociateAccessPolicy.

---

##### `DisassociateIdentityProviderConfig`<sup>Required</sup> <a name="DisassociateIdentityProviderConfig" id="@cdk_utils/iam.eks.EKSActions.property.DisassociateIdentityProviderConfig"></a>

```typescript
public readonly DisassociateIdentityProviderConfig: string;
```

- *Type:* string

[Write] eks:DisassociateIdentityProviderConfig.

---

##### `ListAccessEntries`<sup>Required</sup> <a name="ListAccessEntries" id="@cdk_utils/iam.eks.EKSActions.property.ListAccessEntries"></a>

```typescript
public readonly ListAccessEntries: string;
```

- *Type:* string

[List] eks:ListAccessEntries.

---

##### `ListAccessPolicies`<sup>Required</sup> <a name="ListAccessPolicies" id="@cdk_utils/iam.eks.EKSActions.property.ListAccessPolicies"></a>

```typescript
public readonly ListAccessPolicies: string;
```

- *Type:* string

[List] eks:ListAccessPolicies.

---

##### `ListAddons`<sup>Required</sup> <a name="ListAddons" id="@cdk_utils/iam.eks.EKSActions.property.ListAddons"></a>

```typescript
public readonly ListAddons: string;
```

- *Type:* string

[List] eks:ListAddons.

---

##### `ListAssociatedAccessPolicies`<sup>Required</sup> <a name="ListAssociatedAccessPolicies" id="@cdk_utils/iam.eks.EKSActions.property.ListAssociatedAccessPolicies"></a>

```typescript
public readonly ListAssociatedAccessPolicies: string;
```

- *Type:* string

[List] eks:ListAssociatedAccessPolicies.

---

##### `ListCapabilities`<sup>Required</sup> <a name="ListCapabilities" id="@cdk_utils/iam.eks.EKSActions.property.ListCapabilities"></a>

```typescript
public readonly ListCapabilities: string;
```

- *Type:* string

[List] eks:ListCapabilities.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.eks.EKSActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] eks:ListClusters.

---

##### `ListDashboardData`<sup>Required</sup> <a name="ListDashboardData" id="@cdk_utils/iam.eks.EKSActions.property.ListDashboardData"></a>

```typescript
public readonly ListDashboardData: string;
```

- *Type:* string

[Read] eks:ListDashboardData.

---

##### `ListDashboardResources`<sup>Required</sup> <a name="ListDashboardResources" id="@cdk_utils/iam.eks.EKSActions.property.ListDashboardResources"></a>

```typescript
public readonly ListDashboardResources: string;
```

- *Type:* string

[Read] eks:ListDashboardResources.

---

##### `ListEksAnywhereSubscriptions`<sup>Required</sup> <a name="ListEksAnywhereSubscriptions" id="@cdk_utils/iam.eks.EKSActions.property.ListEksAnywhereSubscriptions"></a>

```typescript
public readonly ListEksAnywhereSubscriptions: string;
```

- *Type:* string

[List] eks:ListEksAnywhereSubscriptions.

---

##### `ListFargateProfiles`<sup>Required</sup> <a name="ListFargateProfiles" id="@cdk_utils/iam.eks.EKSActions.property.ListFargateProfiles"></a>

```typescript
public readonly ListFargateProfiles: string;
```

- *Type:* string

[List] eks:ListFargateProfiles.

---

##### `ListIdentityProviderConfigs`<sup>Required</sup> <a name="ListIdentityProviderConfigs" id="@cdk_utils/iam.eks.EKSActions.property.ListIdentityProviderConfigs"></a>

```typescript
public readonly ListIdentityProviderConfigs: string;
```

- *Type:* string

[List] eks:ListIdentityProviderConfigs.

---

##### `ListInsights`<sup>Required</sup> <a name="ListInsights" id="@cdk_utils/iam.eks.EKSActions.property.ListInsights"></a>

```typescript
public readonly ListInsights: string;
```

- *Type:* string

[List] eks:ListInsights.

---

##### `ListNodegroups`<sup>Required</sup> <a name="ListNodegroups" id="@cdk_utils/iam.eks.EKSActions.property.ListNodegroups"></a>

```typescript
public readonly ListNodegroups: string;
```

- *Type:* string

[List] eks:ListNodegroups.

---

##### `ListPodIdentityAssociations`<sup>Required</sup> <a name="ListPodIdentityAssociations" id="@cdk_utils/iam.eks.EKSActions.property.ListPodIdentityAssociations"></a>

```typescript
public readonly ListPodIdentityAssociations: string;
```

- *Type:* string

[List] eks:ListPodIdentityAssociations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.eks.EKSActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] eks:ListTagsForResource.

---

##### `ListUpdates`<sup>Required</sup> <a name="ListUpdates" id="@cdk_utils/iam.eks.EKSActions.property.ListUpdates"></a>

```typescript
public readonly ListUpdates: string;
```

- *Type:* string

[List] eks:ListUpdates.

---

##### `MutateViaKubernetesApi`<sup>Required</sup> <a name="MutateViaKubernetesApi" id="@cdk_utils/iam.eks.EKSActions.property.MutateViaKubernetesApi"></a>

```typescript
public readonly MutateViaKubernetesApi: string;
```

- *Type:* string

[Write] eks:MutateViaKubernetesApi.

---

##### `RegisterCluster`<sup>Required</sup> <a name="RegisterCluster" id="@cdk_utils/iam.eks.EKSActions.property.RegisterCluster"></a>

```typescript
public readonly RegisterCluster: string;
```

- *Type:* string

[Write] eks:RegisterCluster.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.eks.EKSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartInsightsRefresh`<sup>Required</sup> <a name="StartInsightsRefresh" id="@cdk_utils/iam.eks.EKSActions.property.StartInsightsRefresh"></a>

```typescript
public readonly StartInsightsRefresh: string;
```

- *Type:* string

[Write] eks:StartInsightsRefresh.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.eks.EKSActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] eks:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.eks.EKSActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] eks:UntagResource.

---

##### `UpdateAccessEntry`<sup>Required</sup> <a name="UpdateAccessEntry" id="@cdk_utils/iam.eks.EKSActions.property.UpdateAccessEntry"></a>

```typescript
public readonly UpdateAccessEntry: string;
```

- *Type:* string

[Write] eks:UpdateAccessEntry.

---

##### `UpdateAddon`<sup>Required</sup> <a name="UpdateAddon" id="@cdk_utils/iam.eks.EKSActions.property.UpdateAddon"></a>

```typescript
public readonly UpdateAddon: string;
```

- *Type:* string

[Write] eks:UpdateAddon.

---

##### `UpdateCapability`<sup>Required</sup> <a name="UpdateCapability" id="@cdk_utils/iam.eks.EKSActions.property.UpdateCapability"></a>

```typescript
public readonly UpdateCapability: string;
```

- *Type:* string

[Write] eks:UpdateCapability.

---

##### `UpdateClusterConfig`<sup>Required</sup> <a name="UpdateClusterConfig" id="@cdk_utils/iam.eks.EKSActions.property.UpdateClusterConfig"></a>

```typescript
public readonly UpdateClusterConfig: string;
```

- *Type:* string

[Write] eks:UpdateClusterConfig.

---

##### `UpdateClusterVersion`<sup>Required</sup> <a name="UpdateClusterVersion" id="@cdk_utils/iam.eks.EKSActions.property.UpdateClusterVersion"></a>

```typescript
public readonly UpdateClusterVersion: string;
```

- *Type:* string

[Write] eks:UpdateClusterVersion.

---

##### `UpdateEksAnywhereSubscription`<sup>Required</sup> <a name="UpdateEksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSActions.property.UpdateEksAnywhereSubscription"></a>

```typescript
public readonly UpdateEksAnywhereSubscription: string;
```

- *Type:* string

[Write] eks:UpdateEksAnywhereSubscription.

---

##### `UpdateNodegroupConfig`<sup>Required</sup> <a name="UpdateNodegroupConfig" id="@cdk_utils/iam.eks.EKSActions.property.UpdateNodegroupConfig"></a>

```typescript
public readonly UpdateNodegroupConfig: string;
```

- *Type:* string

[Write] eks:UpdateNodegroupConfig.

---

##### `UpdateNodegroupVersion`<sup>Required</sup> <a name="UpdateNodegroupVersion" id="@cdk_utils/iam.eks.EKSActions.property.UpdateNodegroupVersion"></a>

```typescript
public readonly UpdateNodegroupVersion: string;
```

- *Type:* string

[Write] eks:UpdateNodegroupVersion.

---

##### `UpdatePodIdentityAssociation`<sup>Required</sup> <a name="UpdatePodIdentityAssociation" id="@cdk_utils/iam.eks.EKSActions.property.UpdatePodIdentityAssociation"></a>

```typescript
public readonly UpdatePodIdentityAssociation: string;
```

- *Type:* string

[Write] eks:UpdatePodIdentityAssociation.

---

### EKSConditions <a name="EKSConditions" id="@cdk_utils/iam.eks.EKSConditions"></a>

Condition key constants and builders for eks.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks.EKSConditions.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

new eks.EKSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.accessEntryType">accessEntryType</a></code> | Generates a condition block for `eks:accessEntryType`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.accessScope">accessScope</a></code> | Generates a condition block for `eks:accessScope`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.authenticationMode">authenticationMode</a></code> | Generates a condition block for `eks:authenticationMode`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.blockStorageEnabled">blockStorageEnabled</a></code> | Generates a condition block for `eks:blockStorageEnabled`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.bootstrapClusterCreatorAdminPermissions">bootstrapClusterCreatorAdminPermissions</a></code> | Generates a condition block for `eks:bootstrapClusterCreatorAdminPermissions`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.bootstrapSelfManagedAddons">bootstrapSelfManagedAddons</a></code> | Generates a condition block for `eks:bootstrapSelfManagedAddons`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.clientId">clientId</a></code> | Generates a condition block for `eks:clientId`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.clusterName">clusterName</a></code> | Generates a condition block for `eks:clusterName`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.computeConfigEnabled">computeConfigEnabled</a></code> | Generates a condition block for `eks:computeConfigEnabled`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.controlPlaneEgressMode">controlPlaneEgressMode</a></code> | Generates a condition block for `eks:controlPlaneEgressMode`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.controlPlaneScalingTier">controlPlaneScalingTier</a></code> | Generates a condition block for `eks:controlPlaneScalingTier`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.deletionProtection">deletionProtection</a></code> | Generates a condition block for `eks:deletionProtection`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.elasticLoadBalancingEnabled">elasticLoadBalancingEnabled</a></code> | Generates a condition block for `eks:elasticLoadBalancingEnabled`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.encryptionConfigProviderKeyArns">encryptionConfigProviderKeyArns</a></code> | Generates a condition block for `eks:encryptionConfigProviderKeyArns`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.endpointPrivateAccess">endpointPrivateAccess</a></code> | Generates a condition block for `eks:endpointPrivateAccess`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.endpointPublicAccess">endpointPublicAccess</a></code> | Generates a condition block for `eks:endpointPublicAccess`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.issuerURL">issuerURL</a></code> | Generates a condition block for `eks:issuerUrl`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.kubeAPIServerConfig">kubeAPIServerConfig</a></code> | Generates a condition block for `eks:kubeApiServerConfig`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.kubeControllerManagerConfig">kubeControllerManagerConfig</a></code> | Generates a condition block for `eks:kubeControllerManagerConfig`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.kubernetesGroups">kubernetesGroups</a></code> | Generates a condition block for `eks:kubernetesGroups`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.kubernetesVersion">kubernetesVersion</a></code> | Generates a condition block for `eks:kubernetesVersion`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.kubeSchedulerConfig">kubeSchedulerConfig</a></code> | Generates a condition block for `eks:kubeSchedulerConfig`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.loggingType">loggingType</a></code> | Generates a condition block for `eks:loggingType/${type}`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.namespaces">namespaces</a></code> | Generates a condition block for `eks:namespaces`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.policyARN">policyARN</a></code> | Generates a condition block for `eks:policyArn`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.principalARN">principalARN</a></code> | Generates a condition block for `eks:principalArn`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.supportType">supportType</a></code> | Generates a condition block for `eks:supportType`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.username">username</a></code> | Generates a condition block for `eks:username`. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.zonalShiftEnabled">zonalShiftEnabled</a></code> | Generates a condition block for `eks:zonalShiftEnabled`. |

---

##### `accessEntryType` <a name="accessEntryType" id="@cdk_utils/iam.eks.EKSConditions.accessEntryType"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.accessEntryType(value: string)
```

Generates a condition block for `eks:accessEntryType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.accessEntryType.parameter.value"></a>

- *Type:* string

---

##### `accessScope` <a name="accessScope" id="@cdk_utils/iam.eks.EKSConditions.accessScope"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.accessScope(value: string)
```

Generates a condition block for `eks:accessScope`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.accessScope.parameter.value"></a>

- *Type:* string

---

##### `authenticationMode` <a name="authenticationMode" id="@cdk_utils/iam.eks.EKSConditions.authenticationMode"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.authenticationMode(value: string)
```

Generates a condition block for `eks:authenticationMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.authenticationMode.parameter.value"></a>

- *Type:* string

---

##### `blockStorageEnabled` <a name="blockStorageEnabled" id="@cdk_utils/iam.eks.EKSConditions.blockStorageEnabled"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.blockStorageEnabled(value: boolean)
```

Generates a condition block for `eks:blockStorageEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.blockStorageEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `bootstrapClusterCreatorAdminPermissions` <a name="bootstrapClusterCreatorAdminPermissions" id="@cdk_utils/iam.eks.EKSConditions.bootstrapClusterCreatorAdminPermissions"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.bootstrapClusterCreatorAdminPermissions(value: boolean)
```

Generates a condition block for `eks:bootstrapClusterCreatorAdminPermissions`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.bootstrapClusterCreatorAdminPermissions.parameter.value"></a>

- *Type:* boolean

---

##### `bootstrapSelfManagedAddons` <a name="bootstrapSelfManagedAddons" id="@cdk_utils/iam.eks.EKSConditions.bootstrapSelfManagedAddons"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.bootstrapSelfManagedAddons(value: boolean)
```

Generates a condition block for `eks:bootstrapSelfManagedAddons`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.bootstrapSelfManagedAddons.parameter.value"></a>

- *Type:* boolean

---

##### `clientId` <a name="clientId" id="@cdk_utils/iam.eks.EKSConditions.clientId"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.clientId(value: string)
```

Generates a condition block for `eks:clientId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.clientId.parameter.value"></a>

- *Type:* string

---

##### `clusterName` <a name="clusterName" id="@cdk_utils/iam.eks.EKSConditions.clusterName"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.clusterName(value: string)
```

Generates a condition block for `eks:clusterName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.clusterName.parameter.value"></a>

- *Type:* string

---

##### `computeConfigEnabled` <a name="computeConfigEnabled" id="@cdk_utils/iam.eks.EKSConditions.computeConfigEnabled"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.computeConfigEnabled(value: boolean)
```

Generates a condition block for `eks:computeConfigEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.computeConfigEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `controlPlaneEgressMode` <a name="controlPlaneEgressMode" id="@cdk_utils/iam.eks.EKSConditions.controlPlaneEgressMode"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.controlPlaneEgressMode(value: string)
```

Generates a condition block for `eks:controlPlaneEgressMode`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.controlPlaneEgressMode.parameter.value"></a>

- *Type:* string

---

##### `controlPlaneScalingTier` <a name="controlPlaneScalingTier" id="@cdk_utils/iam.eks.EKSConditions.controlPlaneScalingTier"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.controlPlaneScalingTier(value: string)
```

Generates a condition block for `eks:controlPlaneScalingTier`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.controlPlaneScalingTier.parameter.value"></a>

- *Type:* string

---

##### `deletionProtection` <a name="deletionProtection" id="@cdk_utils/iam.eks.EKSConditions.deletionProtection"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.deletionProtection(value: boolean)
```

Generates a condition block for `eks:deletionProtection`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.deletionProtection.parameter.value"></a>

- *Type:* boolean

---

##### `elasticLoadBalancingEnabled` <a name="elasticLoadBalancingEnabled" id="@cdk_utils/iam.eks.EKSConditions.elasticLoadBalancingEnabled"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.elasticLoadBalancingEnabled(value: boolean)
```

Generates a condition block for `eks:elasticLoadBalancingEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.elasticLoadBalancingEnabled.parameter.value"></a>

- *Type:* boolean

---

##### `encryptionConfigProviderKeyArns` <a name="encryptionConfigProviderKeyArns" id="@cdk_utils/iam.eks.EKSConditions.encryptionConfigProviderKeyArns"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.encryptionConfigProviderKeyArns(values: string[])
```

Generates a condition block for `eks:encryptionConfigProviderKeyArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.eks.EKSConditions.encryptionConfigProviderKeyArns.parameter.values"></a>

- *Type:* string[]

---

##### `endpointPrivateAccess` <a name="endpointPrivateAccess" id="@cdk_utils/iam.eks.EKSConditions.endpointPrivateAccess"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.endpointPrivateAccess(value: boolean)
```

Generates a condition block for `eks:endpointPrivateAccess`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.endpointPrivateAccess.parameter.value"></a>

- *Type:* boolean

---

##### `endpointPublicAccess` <a name="endpointPublicAccess" id="@cdk_utils/iam.eks.EKSConditions.endpointPublicAccess"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.endpointPublicAccess(value: boolean)
```

Generates a condition block for `eks:endpointPublicAccess`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.endpointPublicAccess.parameter.value"></a>

- *Type:* boolean

---

##### `issuerURL` <a name="issuerURL" id="@cdk_utils/iam.eks.EKSConditions.issuerURL"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.issuerURL(value: string)
```

Generates a condition block for `eks:issuerUrl`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.issuerURL.parameter.value"></a>

- *Type:* string

---

##### `kubeAPIServerConfig` <a name="kubeAPIServerConfig" id="@cdk_utils/iam.eks.EKSConditions.kubeAPIServerConfig"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.kubeAPIServerConfig(value: boolean)
```

Generates a condition block for `eks:kubeApiServerConfig`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.kubeAPIServerConfig.parameter.value"></a>

- *Type:* boolean

---

##### `kubeControllerManagerConfig` <a name="kubeControllerManagerConfig" id="@cdk_utils/iam.eks.EKSConditions.kubeControllerManagerConfig"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.kubeControllerManagerConfig(value: boolean)
```

Generates a condition block for `eks:kubeControllerManagerConfig`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.kubeControllerManagerConfig.parameter.value"></a>

- *Type:* boolean

---

##### `kubernetesGroups` <a name="kubernetesGroups" id="@cdk_utils/iam.eks.EKSConditions.kubernetesGroups"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.kubernetesGroups(values: string[])
```

Generates a condition block for `eks:kubernetesGroups`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.eks.EKSConditions.kubernetesGroups.parameter.values"></a>

- *Type:* string[]

---

##### `kubernetesVersion` <a name="kubernetesVersion" id="@cdk_utils/iam.eks.EKSConditions.kubernetesVersion"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.kubernetesVersion(value: string)
```

Generates a condition block for `eks:kubernetesVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.kubernetesVersion.parameter.value"></a>

- *Type:* string

---

##### `kubeSchedulerConfig` <a name="kubeSchedulerConfig" id="@cdk_utils/iam.eks.EKSConditions.kubeSchedulerConfig"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.kubeSchedulerConfig(value: boolean)
```

Generates a condition block for `eks:kubeSchedulerConfig`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.kubeSchedulerConfig.parameter.value"></a>

- *Type:* boolean

---

##### `loggingType` <a name="loggingType" id="@cdk_utils/iam.eks.EKSConditions.loggingType"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.loggingType(value: boolean)
```

Generates a condition block for `eks:loggingType/${type}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.loggingType.parameter.value"></a>

- *Type:* boolean

---

##### `namespaces` <a name="namespaces" id="@cdk_utils/iam.eks.EKSConditions.namespaces"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.namespaces(values: string[])
```

Generates a condition block for `eks:namespaces`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.eks.EKSConditions.namespaces.parameter.values"></a>

- *Type:* string[]

---

##### `policyARN` <a name="policyARN" id="@cdk_utils/iam.eks.EKSConditions.policyARN"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.policyARN(value: string)
```

Generates a condition block for `eks:policyArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.policyARN.parameter.value"></a>

- *Type:* string

---

##### `principalARN` <a name="principalARN" id="@cdk_utils/iam.eks.EKSConditions.principalARN"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.principalARN(value: string)
```

Generates a condition block for `eks:principalArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.principalARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.eks.EKSConditions.requestTag"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.eks.EKSConditions.resourceTag"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `supportType` <a name="supportType" id="@cdk_utils/iam.eks.EKSConditions.supportType"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.supportType(value: string)
```

Generates a condition block for `eks:supportType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.supportType.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.eks.EKSConditions.tagKeys"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.eks.EKSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `username` <a name="username" id="@cdk_utils/iam.eks.EKSConditions.username"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.username(value: string)
```

Generates a condition block for `eks:username`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.username.parameter.value"></a>

- *Type:* string

---

##### `zonalShiftEnabled` <a name="zonalShiftEnabled" id="@cdk_utils/iam.eks.EKSConditions.zonalShiftEnabled"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSConditions.zonalShiftEnabled(value: boolean)
```

Generates a condition block for `eks:zonalShiftEnabled`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.eks.EKSConditions.zonalShiftEnabled.parameter.value"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.ACCESS_ENTRY_TYPE">ACCESS_ENTRY_TYPE</a></code> | <code>string</code> | Condition key: eks:accessEntryType (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.ACCESS_SCOPE">ACCESS_SCOPE</a></code> | <code>string</code> | Condition key: eks:accessScope (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.AssociateAccessPolicyConditionKeys">AssociateAccessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateAccessPolicy action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.AssociateEncryptionConfigConditionKeys">AssociateEncryptionConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateEncryptionConfig action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.AssociateIdentityProviderConfigConditionKeys">AssociateIdentityProviderConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateIdentityProviderConfig action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.AUTHENTICATION_MODE">AUTHENTICATION_MODE</a></code> | <code>string</code> | Condition key: eks:authenticationMode (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.BLOCK_STORAGE_ENABLED">BLOCK_STORAGE_ENABLED</a></code> | <code>string</code> | Condition key: eks:blockStorageEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.BOOTSTRAP_CLUSTER_CREATOR_ADMIN_PERMISSIONS">BOOTSTRAP_CLUSTER_CREATOR_ADMIN_PERMISSIONS</a></code> | <code>string</code> | Condition key: eks:bootstrapClusterCreatorAdminPermissions (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.BOOTSTRAP_SELF_MANAGED_ADDONS">BOOTSTRAP_SELF_MANAGED_ADDONS</a></code> | <code>string</code> | Condition key: eks:bootstrapSelfManagedAddons (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CLIENT_ID">CLIENT_ID</a></code> | <code>string</code> | Condition key: eks:clientId (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CLUSTER_NAME">CLUSTER_NAME</a></code> | <code>string</code> | Condition key: eks:clusterName (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.COMPUTE_CONFIG_ENABLED">COMPUTE_CONFIG_ENABLED</a></code> | <code>string</code> | Condition key: eks:computeConfigEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CONTROL_PLANE_EGRESS_MODE">CONTROL_PLANE_EGRESS_MODE</a></code> | <code>string</code> | Condition key: eks:controlPlaneEgressMode (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CONTROL_PLANE_SCALING_TIER">CONTROL_PLANE_SCALING_TIER</a></code> | <code>string</code> | Condition key: eks:controlPlaneScalingTier (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CreateAccessEntryConditionKeys">CreateAccessEntryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessEntry action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CreateAddonConditionKeys">CreateAddonConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAddon action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CreateCapabilityConditionKeys">CreateCapabilityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCapability action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CreateEksAnywhereSubscriptionConditionKeys">CreateEksAnywhereSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEksAnywhereSubscription action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CreateFargateProfileConditionKeys">CreateFargateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFargateProfile action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CreateNodegroupConditionKeys">CreateNodegroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNodegroup action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.CreatePodIdentityAssociationConditionKeys">CreatePodIdentityAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePodIdentityAssociation action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.DELETION_PROTECTION">DELETION_PROTECTION</a></code> | <code>string</code> | Condition key: eks:deletionProtection (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.DisassociateAccessPolicyConditionKeys">DisassociateAccessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateAccessPolicy action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.ELASTIC_LOAD_BALANCING_ENABLED">ELASTIC_LOAD_BALANCING_ENABLED</a></code> | <code>string</code> | Condition key: eks:elasticLoadBalancingEnabled (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.ENCRYPTION_CONFIG_PROVIDER_KEY_ARNS">ENCRYPTION_CONFIG_PROVIDER_KEY_ARNS</a></code> | <code>string</code> | Condition key: eks:encryptionConfigProviderKeyArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.ENDPOINT_PRIVATE_ACCESS">ENDPOINT_PRIVATE_ACCESS</a></code> | <code>string</code> | Condition key: eks:endpointPrivateAccess (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.ENDPOINT_PUBLIC_ACCESS">ENDPOINT_PUBLIC_ACCESS</a></code> | <code>string</code> | Condition key: eks:endpointPublicAccess (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.ISSUER_URL">ISSUER_URL</a></code> | <code>string</code> | Condition key: eks:issuerUrl (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.KUBE_API_SERVER_CONFIG">KUBE_API_SERVER_CONFIG</a></code> | <code>string</code> | Condition key: eks:kubeApiServerConfig (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.KUBE_CONTROLLER_MANAGER_CONFIG">KUBE_CONTROLLER_MANAGER_CONFIG</a></code> | <code>string</code> | Condition key: eks:kubeControllerManagerConfig (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.KUBE_SCHEDULER_CONFIG">KUBE_SCHEDULER_CONFIG</a></code> | <code>string</code> | Condition key: eks:kubeSchedulerConfig (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.KUBERNETES_GROUPS">KUBERNETES_GROUPS</a></code> | <code>string</code> | Condition key: eks:kubernetesGroups (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.KUBERNETES_VERSION">KUBERNETES_VERSION</a></code> | <code>string</code> | Condition key: eks:kubernetesVersion (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.LOGGING_TYPE">LOGGING_TYPE</a></code> | <code>string</code> | Condition key: eks:loggingType/${type} (Bool). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.NAMESPACES">NAMESPACES</a></code> | <code>string</code> | Condition key: eks:namespaces (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.POLICY_ARN">POLICY_ARN</a></code> | <code>string</code> | Condition key: eks:policyArn (ARN). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.PRINCIPAL_ARN">PRINCIPAL_ARN</a></code> | <code>string</code> | Condition key: eks:principalArn (ARN). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.RegisterClusterConditionKeys">RegisterClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterCluster action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.SUPPORT_TYPE">SUPPORT_TYPE</a></code> | <code>string</code> | Condition key: eks:supportType (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.UpdateClusterConfigConditionKeys">UpdateClusterConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateClusterConfig action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.UpdateClusterVersionConditionKeys">UpdateClusterVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateClusterVersion action. |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.USERNAME">USERNAME</a></code> | <code>string</code> | Condition key: eks:username (String). |
| <code><a href="#@cdk_utils/iam.eks.EKSConditions.property.ZONAL_SHIFT_ENABLED">ZONAL_SHIFT_ENABLED</a></code> | <code>string</code> | Condition key: eks:zonalShiftEnabled (Bool). |

---

##### `ACCESS_ENTRY_TYPE`<sup>Required</sup> <a name="ACCESS_ENTRY_TYPE" id="@cdk_utils/iam.eks.EKSConditions.property.ACCESS_ENTRY_TYPE"></a>

```typescript
public readonly ACCESS_ENTRY_TYPE: string;
```

- *Type:* string

Condition key: eks:accessEntryType (String).

---

##### `ACCESS_SCOPE`<sup>Required</sup> <a name="ACCESS_SCOPE" id="@cdk_utils/iam.eks.EKSConditions.property.ACCESS_SCOPE"></a>

```typescript
public readonly ACCESS_SCOPE: string;
```

- *Type:* string

Condition key: eks:accessScope (String).

---

##### `AssociateAccessPolicyConditionKeys`<sup>Required</sup> <a name="AssociateAccessPolicyConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.AssociateAccessPolicyConditionKeys"></a>

```typescript
public readonly AssociateAccessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateAccessPolicy action.

---

##### `AssociateEncryptionConfigConditionKeys`<sup>Required</sup> <a name="AssociateEncryptionConfigConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.AssociateEncryptionConfigConditionKeys"></a>

```typescript
public readonly AssociateEncryptionConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateEncryptionConfig action.

---

##### `AssociateIdentityProviderConfigConditionKeys`<sup>Required</sup> <a name="AssociateIdentityProviderConfigConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.AssociateIdentityProviderConfigConditionKeys"></a>

```typescript
public readonly AssociateIdentityProviderConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateIdentityProviderConfig action.

---

##### `AUTHENTICATION_MODE`<sup>Required</sup> <a name="AUTHENTICATION_MODE" id="@cdk_utils/iam.eks.EKSConditions.property.AUTHENTICATION_MODE"></a>

```typescript
public readonly AUTHENTICATION_MODE: string;
```

- *Type:* string

Condition key: eks:authenticationMode (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.eks.EKSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.eks.EKSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.eks.EKSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BLOCK_STORAGE_ENABLED`<sup>Required</sup> <a name="BLOCK_STORAGE_ENABLED" id="@cdk_utils/iam.eks.EKSConditions.property.BLOCK_STORAGE_ENABLED"></a>

```typescript
public readonly BLOCK_STORAGE_ENABLED: string;
```

- *Type:* string

Condition key: eks:blockStorageEnabled (Bool).

---

##### `BOOTSTRAP_CLUSTER_CREATOR_ADMIN_PERMISSIONS`<sup>Required</sup> <a name="BOOTSTRAP_CLUSTER_CREATOR_ADMIN_PERMISSIONS" id="@cdk_utils/iam.eks.EKSConditions.property.BOOTSTRAP_CLUSTER_CREATOR_ADMIN_PERMISSIONS"></a>

```typescript
public readonly BOOTSTRAP_CLUSTER_CREATOR_ADMIN_PERMISSIONS: string;
```

- *Type:* string

Condition key: eks:bootstrapClusterCreatorAdminPermissions (Bool).

---

##### `BOOTSTRAP_SELF_MANAGED_ADDONS`<sup>Required</sup> <a name="BOOTSTRAP_SELF_MANAGED_ADDONS" id="@cdk_utils/iam.eks.EKSConditions.property.BOOTSTRAP_SELF_MANAGED_ADDONS"></a>

```typescript
public readonly BOOTSTRAP_SELF_MANAGED_ADDONS: string;
```

- *Type:* string

Condition key: eks:bootstrapSelfManagedAddons (Bool).

---

##### `CLIENT_ID`<sup>Required</sup> <a name="CLIENT_ID" id="@cdk_utils/iam.eks.EKSConditions.property.CLIENT_ID"></a>

```typescript
public readonly CLIENT_ID: string;
```

- *Type:* string

Condition key: eks:clientId (String).

---

##### `CLUSTER_NAME`<sup>Required</sup> <a name="CLUSTER_NAME" id="@cdk_utils/iam.eks.EKSConditions.property.CLUSTER_NAME"></a>

```typescript
public readonly CLUSTER_NAME: string;
```

- *Type:* string

Condition key: eks:clusterName (String).

---

##### `COMPUTE_CONFIG_ENABLED`<sup>Required</sup> <a name="COMPUTE_CONFIG_ENABLED" id="@cdk_utils/iam.eks.EKSConditions.property.COMPUTE_CONFIG_ENABLED"></a>

```typescript
public readonly COMPUTE_CONFIG_ENABLED: string;
```

- *Type:* string

Condition key: eks:computeConfigEnabled (Bool).

---

##### `CONTROL_PLANE_EGRESS_MODE`<sup>Required</sup> <a name="CONTROL_PLANE_EGRESS_MODE" id="@cdk_utils/iam.eks.EKSConditions.property.CONTROL_PLANE_EGRESS_MODE"></a>

```typescript
public readonly CONTROL_PLANE_EGRESS_MODE: string;
```

- *Type:* string

Condition key: eks:controlPlaneEgressMode (String).

---

##### `CONTROL_PLANE_SCALING_TIER`<sup>Required</sup> <a name="CONTROL_PLANE_SCALING_TIER" id="@cdk_utils/iam.eks.EKSConditions.property.CONTROL_PLANE_SCALING_TIER"></a>

```typescript
public readonly CONTROL_PLANE_SCALING_TIER: string;
```

- *Type:* string

Condition key: eks:controlPlaneScalingTier (String).

---

##### `CreateAccessEntryConditionKeys`<sup>Required</sup> <a name="CreateAccessEntryConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.CreateAccessEntryConditionKeys"></a>

```typescript
public readonly CreateAccessEntryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessEntry action.

---

##### `CreateAddonConditionKeys`<sup>Required</sup> <a name="CreateAddonConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.CreateAddonConditionKeys"></a>

```typescript
public readonly CreateAddonConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAddon action.

---

##### `CreateCapabilityConditionKeys`<sup>Required</sup> <a name="CreateCapabilityConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.CreateCapabilityConditionKeys"></a>

```typescript
public readonly CreateCapabilityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCapability action.

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateEksAnywhereSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateEksAnywhereSubscriptionConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.CreateEksAnywhereSubscriptionConditionKeys"></a>

```typescript
public readonly CreateEksAnywhereSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEksAnywhereSubscription action.

---

##### `CreateFargateProfileConditionKeys`<sup>Required</sup> <a name="CreateFargateProfileConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.CreateFargateProfileConditionKeys"></a>

```typescript
public readonly CreateFargateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFargateProfile action.

---

##### `CreateNodegroupConditionKeys`<sup>Required</sup> <a name="CreateNodegroupConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.CreateNodegroupConditionKeys"></a>

```typescript
public readonly CreateNodegroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNodegroup action.

---

##### `CreatePodIdentityAssociationConditionKeys`<sup>Required</sup> <a name="CreatePodIdentityAssociationConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.CreatePodIdentityAssociationConditionKeys"></a>

```typescript
public readonly CreatePodIdentityAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePodIdentityAssociation action.

---

##### `DELETION_PROTECTION`<sup>Required</sup> <a name="DELETION_PROTECTION" id="@cdk_utils/iam.eks.EKSConditions.property.DELETION_PROTECTION"></a>

```typescript
public readonly DELETION_PROTECTION: string;
```

- *Type:* string

Condition key: eks:deletionProtection (Bool).

---

##### `DisassociateAccessPolicyConditionKeys`<sup>Required</sup> <a name="DisassociateAccessPolicyConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.DisassociateAccessPolicyConditionKeys"></a>

```typescript
public readonly DisassociateAccessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateAccessPolicy action.

---

##### `ELASTIC_LOAD_BALANCING_ENABLED`<sup>Required</sup> <a name="ELASTIC_LOAD_BALANCING_ENABLED" id="@cdk_utils/iam.eks.EKSConditions.property.ELASTIC_LOAD_BALANCING_ENABLED"></a>

```typescript
public readonly ELASTIC_LOAD_BALANCING_ENABLED: string;
```

- *Type:* string

Condition key: eks:elasticLoadBalancingEnabled (Bool).

---

##### `ENCRYPTION_CONFIG_PROVIDER_KEY_ARNS`<sup>Required</sup> <a name="ENCRYPTION_CONFIG_PROVIDER_KEY_ARNS" id="@cdk_utils/iam.eks.EKSConditions.property.ENCRYPTION_CONFIG_PROVIDER_KEY_ARNS"></a>

```typescript
public readonly ENCRYPTION_CONFIG_PROVIDER_KEY_ARNS: string;
```

- *Type:* string

Condition key: eks:encryptionConfigProviderKeyArns (ArrayOfARN).

---

##### `ENDPOINT_PRIVATE_ACCESS`<sup>Required</sup> <a name="ENDPOINT_PRIVATE_ACCESS" id="@cdk_utils/iam.eks.EKSConditions.property.ENDPOINT_PRIVATE_ACCESS"></a>

```typescript
public readonly ENDPOINT_PRIVATE_ACCESS: string;
```

- *Type:* string

Condition key: eks:endpointPrivateAccess (Bool).

---

##### `ENDPOINT_PUBLIC_ACCESS`<sup>Required</sup> <a name="ENDPOINT_PUBLIC_ACCESS" id="@cdk_utils/iam.eks.EKSConditions.property.ENDPOINT_PUBLIC_ACCESS"></a>

```typescript
public readonly ENDPOINT_PUBLIC_ACCESS: string;
```

- *Type:* string

Condition key: eks:endpointPublicAccess (Bool).

---

##### `ISSUER_URL`<sup>Required</sup> <a name="ISSUER_URL" id="@cdk_utils/iam.eks.EKSConditions.property.ISSUER_URL"></a>

```typescript
public readonly ISSUER_URL: string;
```

- *Type:* string

Condition key: eks:issuerUrl (String).

---

##### `KUBE_API_SERVER_CONFIG`<sup>Required</sup> <a name="KUBE_API_SERVER_CONFIG" id="@cdk_utils/iam.eks.EKSConditions.property.KUBE_API_SERVER_CONFIG"></a>

```typescript
public readonly KUBE_API_SERVER_CONFIG: string;
```

- *Type:* string

Condition key: eks:kubeApiServerConfig (Bool).

---

##### `KUBE_CONTROLLER_MANAGER_CONFIG`<sup>Required</sup> <a name="KUBE_CONTROLLER_MANAGER_CONFIG" id="@cdk_utils/iam.eks.EKSConditions.property.KUBE_CONTROLLER_MANAGER_CONFIG"></a>

```typescript
public readonly KUBE_CONTROLLER_MANAGER_CONFIG: string;
```

- *Type:* string

Condition key: eks:kubeControllerManagerConfig (Bool).

---

##### `KUBE_SCHEDULER_CONFIG`<sup>Required</sup> <a name="KUBE_SCHEDULER_CONFIG" id="@cdk_utils/iam.eks.EKSConditions.property.KUBE_SCHEDULER_CONFIG"></a>

```typescript
public readonly KUBE_SCHEDULER_CONFIG: string;
```

- *Type:* string

Condition key: eks:kubeSchedulerConfig (Bool).

---

##### `KUBERNETES_GROUPS`<sup>Required</sup> <a name="KUBERNETES_GROUPS" id="@cdk_utils/iam.eks.EKSConditions.property.KUBERNETES_GROUPS"></a>

```typescript
public readonly KUBERNETES_GROUPS: string;
```

- *Type:* string

Condition key: eks:kubernetesGroups (ArrayOfString).

---

##### `KUBERNETES_VERSION`<sup>Required</sup> <a name="KUBERNETES_VERSION" id="@cdk_utils/iam.eks.EKSConditions.property.KUBERNETES_VERSION"></a>

```typescript
public readonly KUBERNETES_VERSION: string;
```

- *Type:* string

Condition key: eks:kubernetesVersion (String).

---

##### `LOGGING_TYPE`<sup>Required</sup> <a name="LOGGING_TYPE" id="@cdk_utils/iam.eks.EKSConditions.property.LOGGING_TYPE"></a>

```typescript
public readonly LOGGING_TYPE: string;
```

- *Type:* string

Condition key: eks:loggingType/${type} (Bool).

---

##### `NAMESPACES`<sup>Required</sup> <a name="NAMESPACES" id="@cdk_utils/iam.eks.EKSConditions.property.NAMESPACES"></a>

```typescript
public readonly NAMESPACES: string;
```

- *Type:* string

Condition key: eks:namespaces (ArrayOfString).

---

##### `POLICY_ARN`<sup>Required</sup> <a name="POLICY_ARN" id="@cdk_utils/iam.eks.EKSConditions.property.POLICY_ARN"></a>

```typescript
public readonly POLICY_ARN: string;
```

- *Type:* string

Condition key: eks:policyArn (ARN).

---

##### `PRINCIPAL_ARN`<sup>Required</sup> <a name="PRINCIPAL_ARN" id="@cdk_utils/iam.eks.EKSConditions.property.PRINCIPAL_ARN"></a>

```typescript
public readonly PRINCIPAL_ARN: string;
```

- *Type:* string

Condition key: eks:principalArn (ARN).

---

##### `RegisterClusterConditionKeys`<sup>Required</sup> <a name="RegisterClusterConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.RegisterClusterConditionKeys"></a>

```typescript
public readonly RegisterClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterCluster action.

---

##### `SUPPORT_TYPE`<sup>Required</sup> <a name="SUPPORT_TYPE" id="@cdk_utils/iam.eks.EKSConditions.property.SUPPORT_TYPE"></a>

```typescript
public readonly SUPPORT_TYPE: string;
```

- *Type:* string

Condition key: eks:supportType (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateClusterConfigConditionKeys`<sup>Required</sup> <a name="UpdateClusterConfigConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.UpdateClusterConfigConditionKeys"></a>

```typescript
public readonly UpdateClusterConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateClusterConfig action.

---

##### `UpdateClusterVersionConditionKeys`<sup>Required</sup> <a name="UpdateClusterVersionConditionKeys" id="@cdk_utils/iam.eks.EKSConditions.property.UpdateClusterVersionConditionKeys"></a>

```typescript
public readonly UpdateClusterVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateClusterVersion action.

---

##### `USERNAME`<sup>Required</sup> <a name="USERNAME" id="@cdk_utils/iam.eks.EKSConditions.property.USERNAME"></a>

```typescript
public readonly USERNAME: string;
```

- *Type:* string

Condition key: eks:username (String).

---

##### `ZONAL_SHIFT_ENABLED`<sup>Required</sup> <a name="ZONAL_SHIFT_ENABLED" id="@cdk_utils/iam.eks.EKSConditions.property.ZONAL_SHIFT_ENABLED"></a>

```typescript
public readonly ZONAL_SHIFT_ENABLED: string;
```

- *Type:* string

Condition key: eks:zonalShiftEnabled (Bool).

---

### EKSOperations <a name="EKSOperations" id="@cdk_utils/iam.eks.EKSOperations"></a>

API operation to required IAM actions mapping for eks.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks.EKSOperations.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

new eks.EKSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.AssociateAccessPolicy">AssociateAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the AssociateAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.AssociateEncryptionConfig">AssociateEncryptionConfig</a></code> | <code>string[]</code> | IAM actions required for the AssociateEncryptionConfig API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.AssociateIdentityProviderConfig">AssociateIdentityProviderConfig</a></code> | <code>string[]</code> | IAM actions required for the AssociateIdentityProviderConfig API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CancelUpdate">CancelUpdate</a></code> | <code>string[]</code> | IAM actions required for the CancelUpdate API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CreateAccessEntry">CreateAccessEntry</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessEntry API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CreateAddon">CreateAddon</a></code> | <code>string[]</code> | IAM actions required for the CreateAddon API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CreateCapability">CreateCapability</a></code> | <code>string[]</code> | IAM actions required for the CreateCapability API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CreateEksAnywhereSubscription">CreateEksAnywhereSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateEksAnywhereSubscription API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CreateFargateProfile">CreateFargateProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateFargateProfile API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CreateNodegroup">CreateNodegroup</a></code> | <code>string[]</code> | IAM actions required for the CreateNodegroup API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.CreatePodIdentityAssociation">CreatePodIdentityAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreatePodIdentityAssociation API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeleteAccessEntry">DeleteAccessEntry</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessEntry API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeleteAddon">DeleteAddon</a></code> | <code>string[]</code> | IAM actions required for the DeleteAddon API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeleteCapability">DeleteCapability</a></code> | <code>string[]</code> | IAM actions required for the DeleteCapability API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeleteEksAnywhereSubscription">DeleteEksAnywhereSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteEksAnywhereSubscription API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeleteFargateProfile">DeleteFargateProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteFargateProfile API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeleteNodegroup">DeleteNodegroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteNodegroup API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeletePodIdentityAssociation">DeletePodIdentityAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeletePodIdentityAssociation API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DeregisterCluster">DeregisterCluster</a></code> | <code>string[]</code> | IAM actions required for the DeregisterCluster API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeAccessEntry">DescribeAccessEntry</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccessEntry API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeAddon">DescribeAddon</a></code> | <code>string[]</code> | IAM actions required for the DescribeAddon API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeAddonConfiguration">DescribeAddonConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeAddonConfiguration API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeAddonVersions">DescribeAddonVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeAddonVersions API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeCapability">DescribeCapability</a></code> | <code>string[]</code> | IAM actions required for the DescribeCapability API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeCluster">DescribeCluster</a></code> | <code>string[]</code> | IAM actions required for the DescribeCluster API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeClusterVersions">DescribeClusterVersions</a></code> | <code>string[]</code> | IAM actions required for the DescribeClusterVersions API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeEksAnywhereSubscription">DescribeEksAnywhereSubscription</a></code> | <code>string[]</code> | IAM actions required for the DescribeEksAnywhereSubscription API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeFargateProfile">DescribeFargateProfile</a></code> | <code>string[]</code> | IAM actions required for the DescribeFargateProfile API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeIdentityProviderConfig">DescribeIdentityProviderConfig</a></code> | <code>string[]</code> | IAM actions required for the DescribeIdentityProviderConfig API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeInsight">DescribeInsight</a></code> | <code>string[]</code> | IAM actions required for the DescribeInsight API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeInsightsRefresh">DescribeInsightsRefresh</a></code> | <code>string[]</code> | IAM actions required for the DescribeInsightsRefresh API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeNodegroup">DescribeNodegroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeNodegroup API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribePodIdentityAssociation">DescribePodIdentityAssociation</a></code> | <code>string[]</code> | IAM actions required for the DescribePodIdentityAssociation API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DescribeUpdate">DescribeUpdate</a></code> | <code>string[]</code> | IAM actions required for the DescribeUpdate API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DisassociateAccessPolicy">DisassociateAccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.DisassociateIdentityProviderConfig">DisassociateIdentityProviderConfig</a></code> | <code>string[]</code> | IAM actions required for the DisassociateIdentityProviderConfig API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListAccessEntries">ListAccessEntries</a></code> | <code>string[]</code> | IAM actions required for the ListAccessEntries API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListAccessPolicies">ListAccessPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAccessPolicies API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListAddons">ListAddons</a></code> | <code>string[]</code> | IAM actions required for the ListAddons API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListAssociatedAccessPolicies">ListAssociatedAccessPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedAccessPolicies API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListCapabilities">ListCapabilities</a></code> | <code>string[]</code> | IAM actions required for the ListCapabilities API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListEksAnywhereSubscriptions">ListEksAnywhereSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListEksAnywhereSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListFargateProfiles">ListFargateProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListFargateProfiles API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListIdentityProviderConfigs">ListIdentityProviderConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityProviderConfigs API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListInsights">ListInsights</a></code> | <code>string[]</code> | IAM actions required for the ListInsights API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListNodegroups">ListNodegroups</a></code> | <code>string[]</code> | IAM actions required for the ListNodegroups API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListPodIdentityAssociations">ListPodIdentityAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListPodIdentityAssociations API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.ListUpdates">ListUpdates</a></code> | <code>string[]</code> | IAM actions required for the ListUpdates API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.RegisterCluster">RegisterCluster</a></code> | <code>string[]</code> | IAM actions required for the RegisterCluster API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.StartInsightsRefresh">StartInsightsRefresh</a></code> | <code>string[]</code> | IAM actions required for the StartInsightsRefresh API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdateAccessEntry">UpdateAccessEntry</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccessEntry API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdateAddon">UpdateAddon</a></code> | <code>string[]</code> | IAM actions required for the UpdateAddon API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdateCapability">UpdateCapability</a></code> | <code>string[]</code> | IAM actions required for the UpdateCapability API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdateClusterConfig">UpdateClusterConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateClusterConfig API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdateClusterVersion">UpdateClusterVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateClusterVersion API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdateEksAnywhereSubscription">UpdateEksAnywhereSubscription</a></code> | <code>string[]</code> | IAM actions required for the UpdateEksAnywhereSubscription API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdateNodegroupConfig">UpdateNodegroupConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateNodegroupConfig API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdateNodegroupVersion">UpdateNodegroupVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateNodegroupVersion API call. |
| <code><a href="#@cdk_utils/iam.eks.EKSOperations.property.UpdatePodIdentityAssociation">UpdatePodIdentityAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdatePodIdentityAssociation API call. |

---

##### `AssociateAccessPolicy`<sup>Required</sup> <a name="AssociateAccessPolicy" id="@cdk_utils/iam.eks.EKSOperations.property.AssociateAccessPolicy"></a>

```typescript
public readonly AssociateAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAccessPolicy API call.

---

##### `AssociateEncryptionConfig`<sup>Required</sup> <a name="AssociateEncryptionConfig" id="@cdk_utils/iam.eks.EKSOperations.property.AssociateEncryptionConfig"></a>

```typescript
public readonly AssociateEncryptionConfig: string[];
```

- *Type:* string[]

IAM actions required for the AssociateEncryptionConfig API call.

---

##### `AssociateIdentityProviderConfig`<sup>Required</sup> <a name="AssociateIdentityProviderConfig" id="@cdk_utils/iam.eks.EKSOperations.property.AssociateIdentityProviderConfig"></a>

```typescript
public readonly AssociateIdentityProviderConfig: string[];
```

- *Type:* string[]

IAM actions required for the AssociateIdentityProviderConfig API call.

---

##### `CancelUpdate`<sup>Required</sup> <a name="CancelUpdate" id="@cdk_utils/iam.eks.EKSOperations.property.CancelUpdate"></a>

```typescript
public readonly CancelUpdate: string[];
```

- *Type:* string[]

IAM actions required for the CancelUpdate API call.

---

##### `CreateAccessEntry`<sup>Required</sup> <a name="CreateAccessEntry" id="@cdk_utils/iam.eks.EKSOperations.property.CreateAccessEntry"></a>

```typescript
public readonly CreateAccessEntry: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessEntry API call.

---

##### `CreateAddon`<sup>Required</sup> <a name="CreateAddon" id="@cdk_utils/iam.eks.EKSOperations.property.CreateAddon"></a>

```typescript
public readonly CreateAddon: string[];
```

- *Type:* string[]

IAM actions required for the CreateAddon API call.

---

##### `CreateCapability`<sup>Required</sup> <a name="CreateCapability" id="@cdk_utils/iam.eks.EKSOperations.property.CreateCapability"></a>

```typescript
public readonly CreateCapability: string[];
```

- *Type:* string[]

IAM actions required for the CreateCapability API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.eks.EKSOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateEksAnywhereSubscription`<sup>Required</sup> <a name="CreateEksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSOperations.property.CreateEksAnywhereSubscription"></a>

```typescript
public readonly CreateEksAnywhereSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateEksAnywhereSubscription API call.

---

##### `CreateFargateProfile`<sup>Required</sup> <a name="CreateFargateProfile" id="@cdk_utils/iam.eks.EKSOperations.property.CreateFargateProfile"></a>

```typescript
public readonly CreateFargateProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateFargateProfile API call.

---

##### `CreateNodegroup`<sup>Required</sup> <a name="CreateNodegroup" id="@cdk_utils/iam.eks.EKSOperations.property.CreateNodegroup"></a>

```typescript
public readonly CreateNodegroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateNodegroup API call.

---

##### `CreatePodIdentityAssociation`<sup>Required</sup> <a name="CreatePodIdentityAssociation" id="@cdk_utils/iam.eks.EKSOperations.property.CreatePodIdentityAssociation"></a>

```typescript
public readonly CreatePodIdentityAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreatePodIdentityAssociation API call.

---

##### `DeleteAccessEntry`<sup>Required</sup> <a name="DeleteAccessEntry" id="@cdk_utils/iam.eks.EKSOperations.property.DeleteAccessEntry"></a>

```typescript
public readonly DeleteAccessEntry: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessEntry API call.

---

##### `DeleteAddon`<sup>Required</sup> <a name="DeleteAddon" id="@cdk_utils/iam.eks.EKSOperations.property.DeleteAddon"></a>

```typescript
public readonly DeleteAddon: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAddon API call.

---

##### `DeleteCapability`<sup>Required</sup> <a name="DeleteCapability" id="@cdk_utils/iam.eks.EKSOperations.property.DeleteCapability"></a>

```typescript
public readonly DeleteCapability: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCapability API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.eks.EKSOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteEksAnywhereSubscription`<sup>Required</sup> <a name="DeleteEksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSOperations.property.DeleteEksAnywhereSubscription"></a>

```typescript
public readonly DeleteEksAnywhereSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEksAnywhereSubscription API call.

---

##### `DeleteFargateProfile`<sup>Required</sup> <a name="DeleteFargateProfile" id="@cdk_utils/iam.eks.EKSOperations.property.DeleteFargateProfile"></a>

```typescript
public readonly DeleteFargateProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFargateProfile API call.

---

##### `DeleteNodegroup`<sup>Required</sup> <a name="DeleteNodegroup" id="@cdk_utils/iam.eks.EKSOperations.property.DeleteNodegroup"></a>

```typescript
public readonly DeleteNodegroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNodegroup API call.

---

##### `DeletePodIdentityAssociation`<sup>Required</sup> <a name="DeletePodIdentityAssociation" id="@cdk_utils/iam.eks.EKSOperations.property.DeletePodIdentityAssociation"></a>

```typescript
public readonly DeletePodIdentityAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeletePodIdentityAssociation API call.

---

##### `DeregisterCluster`<sup>Required</sup> <a name="DeregisterCluster" id="@cdk_utils/iam.eks.EKSOperations.property.DeregisterCluster"></a>

```typescript
public readonly DeregisterCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterCluster API call.

---

##### `DescribeAccessEntry`<sup>Required</sup> <a name="DescribeAccessEntry" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeAccessEntry"></a>

```typescript
public readonly DescribeAccessEntry: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccessEntry API call.

---

##### `DescribeAddon`<sup>Required</sup> <a name="DescribeAddon" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeAddon"></a>

```typescript
public readonly DescribeAddon: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAddon API call.

---

##### `DescribeAddonConfiguration`<sup>Required</sup> <a name="DescribeAddonConfiguration" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeAddonConfiguration"></a>

```typescript
public readonly DescribeAddonConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAddonConfiguration API call.

---

##### `DescribeAddonVersions`<sup>Required</sup> <a name="DescribeAddonVersions" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeAddonVersions"></a>

```typescript
public readonly DescribeAddonVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAddonVersions API call.

---

##### `DescribeCapability`<sup>Required</sup> <a name="DescribeCapability" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeCapability"></a>

```typescript
public readonly DescribeCapability: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCapability API call.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCluster API call.

---

##### `DescribeClusterVersions`<sup>Required</sup> <a name="DescribeClusterVersions" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeClusterVersions"></a>

```typescript
public readonly DescribeClusterVersions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeClusterVersions API call.

---

##### `DescribeEksAnywhereSubscription`<sup>Required</sup> <a name="DescribeEksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeEksAnywhereSubscription"></a>

```typescript
public readonly DescribeEksAnywhereSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEksAnywhereSubscription API call.

---

##### `DescribeFargateProfile`<sup>Required</sup> <a name="DescribeFargateProfile" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeFargateProfile"></a>

```typescript
public readonly DescribeFargateProfile: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFargateProfile API call.

---

##### `DescribeIdentityProviderConfig`<sup>Required</sup> <a name="DescribeIdentityProviderConfig" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeIdentityProviderConfig"></a>

```typescript
public readonly DescribeIdentityProviderConfig: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIdentityProviderConfig API call.

---

##### `DescribeInsight`<sup>Required</sup> <a name="DescribeInsight" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeInsight"></a>

```typescript
public readonly DescribeInsight: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInsight API call.

---

##### `DescribeInsightsRefresh`<sup>Required</sup> <a name="DescribeInsightsRefresh" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeInsightsRefresh"></a>

```typescript
public readonly DescribeInsightsRefresh: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInsightsRefresh API call.

---

##### `DescribeNodegroup`<sup>Required</sup> <a name="DescribeNodegroup" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeNodegroup"></a>

```typescript
public readonly DescribeNodegroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNodegroup API call.

---

##### `DescribePodIdentityAssociation`<sup>Required</sup> <a name="DescribePodIdentityAssociation" id="@cdk_utils/iam.eks.EKSOperations.property.DescribePodIdentityAssociation"></a>

```typescript
public readonly DescribePodIdentityAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DescribePodIdentityAssociation API call.

---

##### `DescribeUpdate`<sup>Required</sup> <a name="DescribeUpdate" id="@cdk_utils/iam.eks.EKSOperations.property.DescribeUpdate"></a>

```typescript
public readonly DescribeUpdate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUpdate API call.

---

##### `DisassociateAccessPolicy`<sup>Required</sup> <a name="DisassociateAccessPolicy" id="@cdk_utils/iam.eks.EKSOperations.property.DisassociateAccessPolicy"></a>

```typescript
public readonly DisassociateAccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAccessPolicy API call.

---

##### `DisassociateIdentityProviderConfig`<sup>Required</sup> <a name="DisassociateIdentityProviderConfig" id="@cdk_utils/iam.eks.EKSOperations.property.DisassociateIdentityProviderConfig"></a>

```typescript
public readonly DisassociateIdentityProviderConfig: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateIdentityProviderConfig API call.

---

##### `ListAccessEntries`<sup>Required</sup> <a name="ListAccessEntries" id="@cdk_utils/iam.eks.EKSOperations.property.ListAccessEntries"></a>

```typescript
public readonly ListAccessEntries: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessEntries API call.

---

##### `ListAccessPolicies`<sup>Required</sup> <a name="ListAccessPolicies" id="@cdk_utils/iam.eks.EKSOperations.property.ListAccessPolicies"></a>

```typescript
public readonly ListAccessPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessPolicies API call.

---

##### `ListAddons`<sup>Required</sup> <a name="ListAddons" id="@cdk_utils/iam.eks.EKSOperations.property.ListAddons"></a>

```typescript
public readonly ListAddons: string[];
```

- *Type:* string[]

IAM actions required for the ListAddons API call.

---

##### `ListAssociatedAccessPolicies`<sup>Required</sup> <a name="ListAssociatedAccessPolicies" id="@cdk_utils/iam.eks.EKSOperations.property.ListAssociatedAccessPolicies"></a>

```typescript
public readonly ListAssociatedAccessPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedAccessPolicies API call.

---

##### `ListCapabilities`<sup>Required</sup> <a name="ListCapabilities" id="@cdk_utils/iam.eks.EKSOperations.property.ListCapabilities"></a>

```typescript
public readonly ListCapabilities: string[];
```

- *Type:* string[]

IAM actions required for the ListCapabilities API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.eks.EKSOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListEksAnywhereSubscriptions`<sup>Required</sup> <a name="ListEksAnywhereSubscriptions" id="@cdk_utils/iam.eks.EKSOperations.property.ListEksAnywhereSubscriptions"></a>

```typescript
public readonly ListEksAnywhereSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListEksAnywhereSubscriptions API call.

---

##### `ListFargateProfiles`<sup>Required</sup> <a name="ListFargateProfiles" id="@cdk_utils/iam.eks.EKSOperations.property.ListFargateProfiles"></a>

```typescript
public readonly ListFargateProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListFargateProfiles API call.

---

##### `ListIdentityProviderConfigs`<sup>Required</sup> <a name="ListIdentityProviderConfigs" id="@cdk_utils/iam.eks.EKSOperations.property.ListIdentityProviderConfigs"></a>

```typescript
public readonly ListIdentityProviderConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityProviderConfigs API call.

---

##### `ListInsights`<sup>Required</sup> <a name="ListInsights" id="@cdk_utils/iam.eks.EKSOperations.property.ListInsights"></a>

```typescript
public readonly ListInsights: string[];
```

- *Type:* string[]

IAM actions required for the ListInsights API call.

---

##### `ListNodegroups`<sup>Required</sup> <a name="ListNodegroups" id="@cdk_utils/iam.eks.EKSOperations.property.ListNodegroups"></a>

```typescript
public readonly ListNodegroups: string[];
```

- *Type:* string[]

IAM actions required for the ListNodegroups API call.

---

##### `ListPodIdentityAssociations`<sup>Required</sup> <a name="ListPodIdentityAssociations" id="@cdk_utils/iam.eks.EKSOperations.property.ListPodIdentityAssociations"></a>

```typescript
public readonly ListPodIdentityAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListPodIdentityAssociations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.eks.EKSOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListUpdates`<sup>Required</sup> <a name="ListUpdates" id="@cdk_utils/iam.eks.EKSOperations.property.ListUpdates"></a>

```typescript
public readonly ListUpdates: string[];
```

- *Type:* string[]

IAM actions required for the ListUpdates API call.

---

##### `RegisterCluster`<sup>Required</sup> <a name="RegisterCluster" id="@cdk_utils/iam.eks.EKSOperations.property.RegisterCluster"></a>

```typescript
public readonly RegisterCluster: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCluster API call.

---

##### `StartInsightsRefresh`<sup>Required</sup> <a name="StartInsightsRefresh" id="@cdk_utils/iam.eks.EKSOperations.property.StartInsightsRefresh"></a>

```typescript
public readonly StartInsightsRefresh: string[];
```

- *Type:* string[]

IAM actions required for the StartInsightsRefresh API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.eks.EKSOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.eks.EKSOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccessEntry`<sup>Required</sup> <a name="UpdateAccessEntry" id="@cdk_utils/iam.eks.EKSOperations.property.UpdateAccessEntry"></a>

```typescript
public readonly UpdateAccessEntry: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccessEntry API call.

---

##### `UpdateAddon`<sup>Required</sup> <a name="UpdateAddon" id="@cdk_utils/iam.eks.EKSOperations.property.UpdateAddon"></a>

```typescript
public readonly UpdateAddon: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAddon API call.

---

##### `UpdateCapability`<sup>Required</sup> <a name="UpdateCapability" id="@cdk_utils/iam.eks.EKSOperations.property.UpdateCapability"></a>

```typescript
public readonly UpdateCapability: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCapability API call.

---

##### `UpdateClusterConfig`<sup>Required</sup> <a name="UpdateClusterConfig" id="@cdk_utils/iam.eks.EKSOperations.property.UpdateClusterConfig"></a>

```typescript
public readonly UpdateClusterConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClusterConfig API call.

---

##### `UpdateClusterVersion`<sup>Required</sup> <a name="UpdateClusterVersion" id="@cdk_utils/iam.eks.EKSOperations.property.UpdateClusterVersion"></a>

```typescript
public readonly UpdateClusterVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateClusterVersion API call.

---

##### `UpdateEksAnywhereSubscription`<sup>Required</sup> <a name="UpdateEksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSOperations.property.UpdateEksAnywhereSubscription"></a>

```typescript
public readonly UpdateEksAnywhereSubscription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEksAnywhereSubscription API call.

---

##### `UpdateNodegroupConfig`<sup>Required</sup> <a name="UpdateNodegroupConfig" id="@cdk_utils/iam.eks.EKSOperations.property.UpdateNodegroupConfig"></a>

```typescript
public readonly UpdateNodegroupConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNodegroupConfig API call.

---

##### `UpdateNodegroupVersion`<sup>Required</sup> <a name="UpdateNodegroupVersion" id="@cdk_utils/iam.eks.EKSOperations.property.UpdateNodegroupVersion"></a>

```typescript
public readonly UpdateNodegroupVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNodegroupVersion API call.

---

##### `UpdatePodIdentityAssociation`<sup>Required</sup> <a name="UpdatePodIdentityAssociation" id="@cdk_utils/iam.eks.EKSOperations.property.UpdatePodIdentityAssociation"></a>

```typescript
public readonly UpdatePodIdentityAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePodIdentityAssociation API call.

---

### EKSResources <a name="EKSResources" id="@cdk_utils/iam.eks.EKSResources"></a>

ARN builders, validators, and parsers for eks resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.eks.EKSResources.Initializer"></a>

```typescript
import { eks } from '@cdk_utils/iam'

new eks.EKSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.accessEntry">accessEntry</a></code> | Builds an ARN for the access-entry resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.accessPolicy">accessPolicy</a></code> | Builds an ARN for the access-policy resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.addon">addon</a></code> | Builds an ARN for the addon resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.capability">capability</a></code> | Builds an ARN for the capability resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.dashboard">dashboard</a></code> | Builds an ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.eksAnywhereSubscription">eksAnywhereSubscription</a></code> | Builds an ARN for the eks-anywhere-subscription resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.fargateprofile">fargateprofile</a></code> | Builds an ARN for the fargateprofile resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.identityproviderconfig">identityproviderconfig</a></code> | Builds an ARN for the identityproviderconfig resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidAccessEntryArn">isValidAccessEntryArn</a></code> | Validates whether a string is a valid ARN for the access-entry resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidAccessPolicyArn">isValidAccessPolicyArn</a></code> | Validates whether a string is a valid ARN for the access-policy resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidAddonArn">isValidAddonArn</a></code> | Validates whether a string is a valid ARN for the addon resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidCapabilityArn">isValidCapabilityArn</a></code> | Validates whether a string is a valid ARN for the capability resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidEKSAnywhereSubscriptionArn">isValidEKSAnywhereSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the eks-anywhere-subscription resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidFargateprofileArn">isValidFargateprofileArn</a></code> | Validates whether a string is a valid ARN for the fargateprofile resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidIdentityproviderconfigArn">isValidIdentityproviderconfigArn</a></code> | Validates whether a string is a valid ARN for the identityproviderconfig resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidNodegroupArn">isValidNodegroupArn</a></code> | Validates whether a string is a valid ARN for the nodegroup resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.isValidPodidentityassociationArn">isValidPodidentityassociationArn</a></code> | Validates whether a string is a valid ARN for the podidentityassociation resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.nodegroup">nodegroup</a></code> | Builds an ARN for the nodegroup resource. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseAccessEntryArn">parseAccessEntryArn</a></code> | Parses a access-entry ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseAccessPolicyArn">parseAccessPolicyArn</a></code> | Parses a access-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseAddonArn">parseAddonArn</a></code> | Parses a addon ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseCapabilityArn">parseCapabilityArn</a></code> | Parses a capability ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseEKSAnywhereSubscriptionArn">parseEKSAnywhereSubscriptionArn</a></code> | Parses a eks-anywhere-subscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseFargateprofileArn">parseFargateprofileArn</a></code> | Parses a fargateprofile ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseIdentityproviderconfigArn">parseIdentityproviderconfigArn</a></code> | Parses a identityproviderconfig ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parseNodegroupArn">parseNodegroupArn</a></code> | Parses a nodegroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.parsePodidentityassociationArn">parsePodidentityassociationArn</a></code> | Parses a podidentityassociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.eks.EKSResources.podidentityassociation">podidentityassociation</a></code> | Builds an ARN for the podidentityassociation resource. |

---

##### `accessEntry` <a name="accessEntry" id="@cdk_utils/iam.eks.EKSResources.accessEntry"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.accessEntry(props: EKSAccessEntryArnProps)
```

Builds an ARN for the access-entry resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.accessEntry.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSAccessEntryArnProps">EKSAccessEntryArnProps</a>

---

##### `accessPolicy` <a name="accessPolicy" id="@cdk_utils/iam.eks.EKSResources.accessPolicy"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.accessPolicy(props: EKSAccessPolicyArnProps)
```

Builds an ARN for the access-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.accessPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSAccessPolicyArnProps">EKSAccessPolicyArnProps</a>

---

##### `addon` <a name="addon" id="@cdk_utils/iam.eks.EKSResources.addon"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.addon(props: EKSAddonArnProps)
```

Builds an ARN for the addon resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.addon.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSAddonArnProps">EKSAddonArnProps</a>

---

##### `capability` <a name="capability" id="@cdk_utils/iam.eks.EKSResources.capability"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.capability(props: EKSCapabilityArnProps)
```

Builds an ARN for the capability resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.capability.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSCapabilityArnProps">EKSCapabilityArnProps</a>

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.eks.EKSResources.cluster"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.cluster(props: EKSClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSClusterArnProps">EKSClusterArnProps</a>

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.eks.EKSResources.dashboard"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.dashboard(props: EKSDashboardArnProps)
```

Builds an ARN for the dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSDashboardArnProps">EKSDashboardArnProps</a>

---

##### `eksAnywhereSubscription` <a name="eksAnywhereSubscription" id="@cdk_utils/iam.eks.EKSResources.eksAnywhereSubscription"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.eksAnywhereSubscription(props: EKSEKSAnywhereSubscriptionArnProps)
```

Builds an ARN for the eks-anywhere-subscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.eksAnywhereSubscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSEKSAnywhereSubscriptionArnProps">EKSEKSAnywhereSubscriptionArnProps</a>

---

##### `fargateprofile` <a name="fargateprofile" id="@cdk_utils/iam.eks.EKSResources.fargateprofile"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.fargateprofile(props: EKSFargateprofileArnProps)
```

Builds an ARN for the fargateprofile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.fargateprofile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSFargateprofileArnProps">EKSFargateprofileArnProps</a>

---

##### `identityproviderconfig` <a name="identityproviderconfig" id="@cdk_utils/iam.eks.EKSResources.identityproviderconfig"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.identityproviderconfig(props: EKSIdentityproviderconfigArnProps)
```

Builds an ARN for the identityproviderconfig resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.identityproviderconfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSIdentityproviderconfigArnProps">EKSIdentityproviderconfigArnProps</a>

---

##### `isValidAccessEntryArn` <a name="isValidAccessEntryArn" id="@cdk_utils/iam.eks.EKSResources.isValidAccessEntryArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidAccessEntryArn(arn: string)
```

Validates whether a string is a valid ARN for the access-entry resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidAccessEntryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAccessPolicyArn` <a name="isValidAccessPolicyArn" id="@cdk_utils/iam.eks.EKSResources.isValidAccessPolicyArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidAccessPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the access-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidAccessPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAddonArn` <a name="isValidAddonArn" id="@cdk_utils/iam.eks.EKSResources.isValidAddonArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidAddonArn(arn: string)
```

Validates whether a string is a valid ARN for the addon resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidAddonArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCapabilityArn` <a name="isValidCapabilityArn" id="@cdk_utils/iam.eks.EKSResources.isValidCapabilityArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidCapabilityArn(arn: string)
```

Validates whether a string is a valid ARN for the capability resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidCapabilityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.eks.EKSResources.isValidClusterArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.eks.EKSResources.isValidDashboardArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEKSAnywhereSubscriptionArn` <a name="isValidEKSAnywhereSubscriptionArn" id="@cdk_utils/iam.eks.EKSResources.isValidEKSAnywhereSubscriptionArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidEKSAnywhereSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the eks-anywhere-subscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidEKSAnywhereSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFargateprofileArn` <a name="isValidFargateprofileArn" id="@cdk_utils/iam.eks.EKSResources.isValidFargateprofileArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidFargateprofileArn(arn: string)
```

Validates whether a string is a valid ARN for the fargateprofile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidFargateprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdentityproviderconfigArn` <a name="isValidIdentityproviderconfigArn" id="@cdk_utils/iam.eks.EKSResources.isValidIdentityproviderconfigArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidIdentityproviderconfigArn(arn: string)
```

Validates whether a string is a valid ARN for the identityproviderconfig resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidIdentityproviderconfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNodegroupArn` <a name="isValidNodegroupArn" id="@cdk_utils/iam.eks.EKSResources.isValidNodegroupArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidNodegroupArn(arn: string)
```

Validates whether a string is a valid ARN for the nodegroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidNodegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPodidentityassociationArn` <a name="isValidPodidentityassociationArn" id="@cdk_utils/iam.eks.EKSResources.isValidPodidentityassociationArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.isValidPodidentityassociationArn(arn: string)
```

Validates whether a string is a valid ARN for the podidentityassociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.isValidPodidentityassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `nodegroup` <a name="nodegroup" id="@cdk_utils/iam.eks.EKSResources.nodegroup"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.nodegroup(props: EKSNodegroupArnProps)
```

Builds an ARN for the nodegroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.nodegroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSNodegroupArnProps">EKSNodegroupArnProps</a>

---

##### `parseAccessEntryArn` <a name="parseAccessEntryArn" id="@cdk_utils/iam.eks.EKSResources.parseAccessEntryArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseAccessEntryArn(arn: string)
```

Parses a access-entry ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseAccessEntryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccessPolicyArn` <a name="parseAccessPolicyArn" id="@cdk_utils/iam.eks.EKSResources.parseAccessPolicyArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseAccessPolicyArn(arn: string)
```

Parses a access-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseAccessPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAddonArn` <a name="parseAddonArn" id="@cdk_utils/iam.eks.EKSResources.parseAddonArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseAddonArn(arn: string)
```

Parses a addon ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseAddonArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCapabilityArn` <a name="parseCapabilityArn" id="@cdk_utils/iam.eks.EKSResources.parseCapabilityArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseCapabilityArn(arn: string)
```

Parses a capability ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseCapabilityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.eks.EKSResources.parseClusterArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.eks.EKSResources.parseDashboardArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseDashboardArn(arn: string)
```

Parses a dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEKSAnywhereSubscriptionArn` <a name="parseEKSAnywhereSubscriptionArn" id="@cdk_utils/iam.eks.EKSResources.parseEKSAnywhereSubscriptionArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseEKSAnywhereSubscriptionArn(arn: string)
```

Parses a eks-anywhere-subscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseEKSAnywhereSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFargateprofileArn` <a name="parseFargateprofileArn" id="@cdk_utils/iam.eks.EKSResources.parseFargateprofileArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseFargateprofileArn(arn: string)
```

Parses a fargateprofile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseFargateprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentityproviderconfigArn` <a name="parseIdentityproviderconfigArn" id="@cdk_utils/iam.eks.EKSResources.parseIdentityproviderconfigArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseIdentityproviderconfigArn(arn: string)
```

Parses a identityproviderconfig ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseIdentityproviderconfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNodegroupArn` <a name="parseNodegroupArn" id="@cdk_utils/iam.eks.EKSResources.parseNodegroupArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parseNodegroupArn(arn: string)
```

Parses a nodegroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parseNodegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePodidentityassociationArn` <a name="parsePodidentityassociationArn" id="@cdk_utils/iam.eks.EKSResources.parsePodidentityassociationArn"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.parsePodidentityassociationArn(arn: string)
```

Parses a podidentityassociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.eks.EKSResources.parsePodidentityassociationArn.parameter.arn"></a>

- *Type:* string

---

##### `podidentityassociation` <a name="podidentityassociation" id="@cdk_utils/iam.eks.EKSResources.podidentityassociation"></a>

```typescript
import { eks } from '@cdk_utils/iam'

eks.EKSResources.podidentityassociation(props: EKSPodidentityassociationArnProps)
```

Builds an ARN for the podidentityassociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.eks.EKSResources.podidentityassociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.eks.EKSPodidentityassociationArnProps">EKSPodidentityassociationArnProps</a>

---




