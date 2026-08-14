# `identitystore` Submodule <a name="`identitystore` Submodule" id="@cdk_utils/iam.identitystore"></a>


## Structs <a name="Structs" id="Structs"></a>

### IdentitystoreAllGroupMembershipsArnComponents <a name="IdentitystoreAllGroupMembershipsArnComponents" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnComponents"></a>

Parsed components of a AllGroupMemberships ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnComponents.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreAllGroupMembershipsArnComponents: identitystore.IdentitystoreAllGroupMembershipsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IdentitystoreAllGroupMembershipsArnProps <a name="IdentitystoreAllGroupMembershipsArnProps" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps"></a>

Properties for building a AllGroupMemberships ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreAllGroupMembershipsArnProps: identitystore.IdentitystoreAllGroupMembershipsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IdentitystoreAllGroupsArnComponents <a name="IdentitystoreAllGroupsArnComponents" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnComponents"></a>

Parsed components of a AllGroups ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnComponents.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreAllGroupsArnComponents: identitystore.IdentitystoreAllGroupsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IdentitystoreAllGroupsArnProps <a name="IdentitystoreAllGroupsArnProps" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps"></a>

Properties for building a AllGroups ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreAllGroupsArnProps: identitystore.IdentitystoreAllGroupsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IdentitystoreAllUsersArnComponents <a name="IdentitystoreAllUsersArnComponents" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnComponents"></a>

Parsed components of a AllUsers ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnComponents.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreAllUsersArnComponents: identitystore.IdentitystoreAllUsersArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IdentitystoreAllUsersArnProps <a name="IdentitystoreAllUsersArnProps" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps"></a>

Properties for building a AllUsers ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreAllUsersArnProps: identitystore.IdentitystoreAllUsersArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IdentitystoreGroupArnComponents <a name="IdentitystoreGroupArnComponents" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents"></a>

Parsed components of a Group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreGroupArnComponents: identitystore.IdentitystoreGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IdentitystoreGroupArnProps <a name="IdentitystoreGroupArnProps" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps"></a>

Properties for building a Group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreGroupArnProps: identitystore.IdentitystoreGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IdentitystoreGroupMembershipArnComponents <a name="IdentitystoreGroupMembershipArnComponents" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents"></a>

Parsed components of a GroupMembership ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreGroupMembershipArnComponents: identitystore.IdentitystoreGroupMembershipArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IdentitystoreGroupMembershipArnProps <a name="IdentitystoreGroupMembershipArnProps" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps"></a>

Properties for building a GroupMembership ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreGroupMembershipArnProps: identitystore.IdentitystoreGroupMembershipArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IdentitystoreIdentitystoreArnComponents <a name="IdentitystoreIdentitystoreArnComponents" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnComponents"></a>

Parsed components of a Identitystore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnComponents.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreIdentitystoreArnComponents: identitystore.IdentitystoreIdentitystoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnComponents.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | The IdentityStoreId component. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnComponents.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

The IdentityStoreId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### IdentitystoreIdentitystoreArnProps <a name="IdentitystoreIdentitystoreArnProps" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps"></a>

Properties for building a Identitystore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreIdentitystoreArnProps: identitystore.IdentitystoreIdentitystoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps.property.identityStoreId">identityStoreId</a></code> | <code>string</code> | The IdentityStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `identityStoreId`<sup>Required</sup> <a name="identityStoreId" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps.property.identityStoreId"></a>

```typescript
public readonly identityStoreId: string;
```

- *Type:* string

The IdentityStoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### IdentitystoreUserArnComponents <a name="IdentitystoreUserArnComponents" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents"></a>

Parsed components of a User ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreUserArnComponents: identitystore.IdentitystoreUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.property.userId">userId</a></code> | <code>string</code> | The UserId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnComponents.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component.

---

### IdentitystoreUserArnProps <a name="IdentitystoreUserArnProps" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnProps"></a>

Properties for building a User ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

const identitystoreUserArnProps: identitystore.IdentitystoreUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.property.userId">userId</a></code> | <code>string</code> | The UserId component of the ARN. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

The UserId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.identitystore.IdentitystoreUserArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IdentitystoreActions <a name="IdentitystoreActions" id="@cdk_utils/iam.identitystore.IdentitystoreActions"></a>

IAM action constants for the identitystore service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.identitystore.IdentitystoreActions.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

new identitystore.IdentitystoreActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.actionGetGroupId">actionGetGroupId</a></code> | <code>string</code> | [Read] identitystore:GetGroupId. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.actionGetGroupMembershipId">actionGetGroupMembershipId</a></code> | <code>string</code> | [Read] identitystore:GetGroupMembershipId. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.actionGetUserId">actionGetUserId</a></code> | <code>string</code> | [Read] identitystore:GetUserId. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.AddRegion">AddRegion</a></code> | <code>string</code> | [Write] identitystore:AddRegion. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] identitystore:CreateGroup. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.CreateGroupMembership">CreateGroupMembership</a></code> | <code>string</code> | [Write] identitystore:CreateGroupMembership. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.CreateIdentityStore">CreateIdentityStore</a></code> | <code>string</code> | [Write] identitystore:CreateIdentityStore. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.CreateUser">CreateUser</a></code> | <code>string</code> | [Write] identitystore:CreateUser. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] identitystore:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.DeleteGroupMembership">DeleteGroupMembership</a></code> | <code>string</code> | [Write] identitystore:DeleteGroupMembership. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.DeleteIdentityStore">DeleteIdentityStore</a></code> | <code>string</code> | [Write] identitystore:DeleteIdentityStore. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] identitystore:DeleteUser. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.DescribeGroup">DescribeGroup</a></code> | <code>string</code> | [Read] identitystore:DescribeGroup. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.DescribeGroupMembership">DescribeGroupMembership</a></code> | <code>string</code> | [Read] identitystore:DescribeGroupMembership. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.DescribeRegion">DescribeRegion</a></code> | <code>string</code> | [Read] identitystore:DescribeRegion. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.DescribeUser">DescribeUser</a></code> | <code>string</code> | [Read] identitystore:DescribeUser. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.IsMemberInGroups">IsMemberInGroups</a></code> | <code>string</code> | [Read] identitystore:IsMemberInGroups. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListGroupMemberships">ListGroupMemberships</a></code> | <code>string</code> | [List] identitystore:ListGroupMemberships. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListGroupMembershipsForMember">ListGroupMembershipsForMember</a></code> | <code>string</code> | [List] identitystore:ListGroupMembershipsForMember. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] identitystore:ListGroups. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListRegions">ListRegions</a></code> | <code>string</code> | [List] identitystore:ListRegions. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] identitystore:ListUsers. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.RemoveRegion">RemoveRegion</a></code> | <code>string</code> | [Write] identitystore:RemoveRegion. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.ReserveUser">ReserveUser</a></code> | <code>string</code> | [Write] identitystore:ReserveUser. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] identitystore:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.UpdateIdentityStore">UpdateIdentityStore</a></code> | <code>string</code> | [Write] identitystore:UpdateIdentityStore. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreActions.property.UpdateUser">UpdateUser</a></code> | <code>string</code> | [Write] identitystore:UpdateUser. |

---

##### `actionGetGroupId`<sup>Required</sup> <a name="actionGetGroupId" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.actionGetGroupId"></a>

```typescript
public readonly actionGetGroupId: string;
```

- *Type:* string

[Read] identitystore:GetGroupId.

---

##### `actionGetGroupMembershipId`<sup>Required</sup> <a name="actionGetGroupMembershipId" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.actionGetGroupMembershipId"></a>

```typescript
public readonly actionGetGroupMembershipId: string;
```

- *Type:* string

[Read] identitystore:GetGroupMembershipId.

---

##### `actionGetUserId`<sup>Required</sup> <a name="actionGetUserId" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.actionGetUserId"></a>

```typescript
public readonly actionGetUserId: string;
```

- *Type:* string

[Read] identitystore:GetUserId.

---

##### `AddRegion`<sup>Required</sup> <a name="AddRegion" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.AddRegion"></a>

```typescript
public readonly AddRegion: string;
```

- *Type:* string

[Write] identitystore:AddRegion.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] identitystore:CreateGroup.

---

##### `CreateGroupMembership`<sup>Required</sup> <a name="CreateGroupMembership" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.CreateGroupMembership"></a>

```typescript
public readonly CreateGroupMembership: string;
```

- *Type:* string

[Write] identitystore:CreateGroupMembership.

---

##### `CreateIdentityStore`<sup>Required</sup> <a name="CreateIdentityStore" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.CreateIdentityStore"></a>

```typescript
public readonly CreateIdentityStore: string;
```

- *Type:* string

[Write] identitystore:CreateIdentityStore.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.CreateUser"></a>

```typescript
public readonly CreateUser: string;
```

- *Type:* string

[Write] identitystore:CreateUser.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] identitystore:DeleteGroup.

---

##### `DeleteGroupMembership`<sup>Required</sup> <a name="DeleteGroupMembership" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.DeleteGroupMembership"></a>

```typescript
public readonly DeleteGroupMembership: string;
```

- *Type:* string

[Write] identitystore:DeleteGroupMembership.

---

##### `DeleteIdentityStore`<sup>Required</sup> <a name="DeleteIdentityStore" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.DeleteIdentityStore"></a>

```typescript
public readonly DeleteIdentityStore: string;
```

- *Type:* string

[Write] identitystore:DeleteIdentityStore.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] identitystore:DeleteUser.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string;
```

- *Type:* string

[Read] identitystore:DescribeGroup.

---

##### `DescribeGroupMembership`<sup>Required</sup> <a name="DescribeGroupMembership" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.DescribeGroupMembership"></a>

```typescript
public readonly DescribeGroupMembership: string;
```

- *Type:* string

[Read] identitystore:DescribeGroupMembership.

---

##### `DescribeRegion`<sup>Required</sup> <a name="DescribeRegion" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.DescribeRegion"></a>

```typescript
public readonly DescribeRegion: string;
```

- *Type:* string

[Read] identitystore:DescribeRegion.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string;
```

- *Type:* string

[Read] identitystore:DescribeUser.

---

##### `IsMemberInGroups`<sup>Required</sup> <a name="IsMemberInGroups" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.IsMemberInGroups"></a>

```typescript
public readonly IsMemberInGroups: string;
```

- *Type:* string

[Read] identitystore:IsMemberInGroups.

---

##### `ListGroupMemberships`<sup>Required</sup> <a name="ListGroupMemberships" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListGroupMemberships"></a>

```typescript
public readonly ListGroupMemberships: string;
```

- *Type:* string

[List] identitystore:ListGroupMemberships.

---

##### `ListGroupMembershipsForMember`<sup>Required</sup> <a name="ListGroupMembershipsForMember" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListGroupMembershipsForMember"></a>

```typescript
public readonly ListGroupMembershipsForMember: string;
```

- *Type:* string

[List] identitystore:ListGroupMembershipsForMember.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] identitystore:ListGroups.

---

##### `ListRegions`<sup>Required</sup> <a name="ListRegions" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListRegions"></a>

```typescript
public readonly ListRegions: string;
```

- *Type:* string

[List] identitystore:ListRegions.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] identitystore:ListUsers.

---

##### `RemoveRegion`<sup>Required</sup> <a name="RemoveRegion" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.RemoveRegion"></a>

```typescript
public readonly RemoveRegion: string;
```

- *Type:* string

[Write] identitystore:RemoveRegion.

---

##### `ReserveUser`<sup>Required</sup> <a name="ReserveUser" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.ReserveUser"></a>

```typescript
public readonly ReserveUser: string;
```

- *Type:* string

[Write] identitystore:ReserveUser.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] identitystore:UpdateGroup.

---

##### `UpdateIdentityStore`<sup>Required</sup> <a name="UpdateIdentityStore" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.UpdateIdentityStore"></a>

```typescript
public readonly UpdateIdentityStore: string;
```

- *Type:* string

[Write] identitystore:UpdateIdentityStore.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.identitystore.IdentitystoreActions.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string;
```

- *Type:* string

[Write] identitystore:UpdateUser.

---

### IdentitystoreConditions <a name="IdentitystoreConditions" id="@cdk_utils/iam.identitystore.IdentitystoreConditions"></a>

Condition key constants and builders for identitystore.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

new identitystore.IdentitystoreConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.groupExternalIdIssuers">groupExternalIdIssuers</a></code> | Generates a condition block for `identitystore:GroupExternalIdIssuers`. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.identityStoreARN">identityStoreARN</a></code> | Generates a condition block for `identitystore:IdentityStoreArn`. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.primaryRegion">primaryRegion</a></code> | Generates a condition block for `identitystore:PrimaryRegion`. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.reservedUserId">reservedUserId</a></code> | Generates a condition block for `identitystore:ReservedUserId`. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.userExternalIdIssuers">userExternalIdIssuers</a></code> | Generates a condition block for `identitystore:UserExternalIdIssuers`. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.userId">userId</a></code> | Generates a condition block for `identitystore:UserId`. |

---

##### `groupExternalIdIssuers` <a name="groupExternalIdIssuers" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.groupExternalIdIssuers"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreConditions.groupExternalIdIssuers(values: string[])
```

Generates a condition block for `identitystore:GroupExternalIdIssuers`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.groupExternalIdIssuers.parameter.values"></a>

- *Type:* string[]

---

##### `identityStoreARN` <a name="identityStoreARN" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.identityStoreARN"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreConditions.identityStoreARN(value: string)
```

Generates a condition block for `identitystore:IdentityStoreArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.identityStoreARN.parameter.value"></a>

- *Type:* string

---

##### `primaryRegion` <a name="primaryRegion" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.primaryRegion"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreConditions.primaryRegion(value: string)
```

Generates a condition block for `identitystore:PrimaryRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.primaryRegion.parameter.value"></a>

- *Type:* string

---

##### `reservedUserId` <a name="reservedUserId" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.reservedUserId"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreConditions.reservedUserId(value: string)
```

Generates a condition block for `identitystore:ReservedUserId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.reservedUserId.parameter.value"></a>

- *Type:* string

---

##### `userExternalIdIssuers` <a name="userExternalIdIssuers" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.userExternalIdIssuers"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreConditions.userExternalIdIssuers(values: string[])
```

Generates a condition block for `identitystore:UserExternalIdIssuers`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.userExternalIdIssuers.parameter.values"></a>

- *Type:* string[]

---

##### `userId` <a name="userId" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.userId"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreConditions.userId(value: string)
```

Generates a condition block for `identitystore:UserId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.userId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.actionGetGroupIdConditionKeys">actionGetGroupIdConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGroupId action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.actionGetGroupMembershipIdConditionKeys">actionGetGroupMembershipIdConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGroupMembershipId action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.actionGetUserIdConditionKeys">actionGetUserIdConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetUserId action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.CreateGroupConditionKeys">CreateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGroup action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.CreateGroupMembershipConditionKeys">CreateGroupMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGroupMembership action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.CreateUserConditionKeys">CreateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUser action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DeleteGroupConditionKeys">DeleteGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteGroup action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DeleteGroupMembershipConditionKeys">DeleteGroupMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteGroupMembership action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DeleteUserConditionKeys">DeleteUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteUser action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DescribeGroupConditionKeys">DescribeGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeGroup action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DescribeGroupMembershipConditionKeys">DescribeGroupMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeGroupMembership action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DescribeRegionConditionKeys">DescribeRegionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeRegion action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DescribeUserConditionKeys">DescribeUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeUser action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.GROUP_EXTERNAL_ID_ISSUERS">GROUP_EXTERNAL_ID_ISSUERS</a></code> | <code>string</code> | Condition key: identitystore:GroupExternalIdIssuers (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.IDENTITY_STORE_ARN">IDENTITY_STORE_ARN</a></code> | <code>string</code> | Condition key: identitystore:IdentityStoreArn (ARN). |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.IsMemberInGroupsConditionKeys">IsMemberInGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the IsMemberInGroups action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListGroupMembershipsConditionKeys">ListGroupMembershipsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListGroupMemberships action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListGroupMembershipsForMemberConditionKeys">ListGroupMembershipsForMemberConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListGroupMembershipsForMember action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListGroupsConditionKeys">ListGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListGroups action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListRegionsConditionKeys">ListRegionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRegions action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListUsersConditionKeys">ListUsersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListUsers action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.PRIMARY_REGION">PRIMARY_REGION</a></code> | <code>string</code> | Condition key: identitystore:PrimaryRegion (String). |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.RESERVED_USER_ID">RESERVED_USER_ID</a></code> | <code>string</code> | Condition key: identitystore:ReservedUserId (String). |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ReserveUserConditionKeys">ReserveUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReserveUser action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.UpdateGroupConditionKeys">UpdateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateGroup action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.UpdateUserConditionKeys">UpdateUserConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUser action. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.USER_EXTERNAL_ID_ISSUERS">USER_EXTERNAL_ID_ISSUERS</a></code> | <code>string</code> | Condition key: identitystore:UserExternalIdIssuers (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreConditions.property.USER_ID">USER_ID</a></code> | <code>string</code> | Condition key: identitystore:UserId (String). |

---

##### `actionGetGroupIdConditionKeys`<sup>Required</sup> <a name="actionGetGroupIdConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.actionGetGroupIdConditionKeys"></a>

```typescript
public readonly actionGetGroupIdConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGroupId action.

---

##### `actionGetGroupMembershipIdConditionKeys`<sup>Required</sup> <a name="actionGetGroupMembershipIdConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.actionGetGroupMembershipIdConditionKeys"></a>

```typescript
public readonly actionGetGroupMembershipIdConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGroupMembershipId action.

---

##### `actionGetUserIdConditionKeys`<sup>Required</sup> <a name="actionGetUserIdConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.actionGetUserIdConditionKeys"></a>

```typescript
public readonly actionGetUserIdConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetUserId action.

---

##### `CreateGroupConditionKeys`<sup>Required</sup> <a name="CreateGroupConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.CreateGroupConditionKeys"></a>

```typescript
public readonly CreateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGroup action.

---

##### `CreateGroupMembershipConditionKeys`<sup>Required</sup> <a name="CreateGroupMembershipConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.CreateGroupMembershipConditionKeys"></a>

```typescript
public readonly CreateGroupMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGroupMembership action.

---

##### `CreateUserConditionKeys`<sup>Required</sup> <a name="CreateUserConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.CreateUserConditionKeys"></a>

```typescript
public readonly CreateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUser action.

---

##### `DeleteGroupConditionKeys`<sup>Required</sup> <a name="DeleteGroupConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DeleteGroupConditionKeys"></a>

```typescript
public readonly DeleteGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteGroup action.

---

##### `DeleteGroupMembershipConditionKeys`<sup>Required</sup> <a name="DeleteGroupMembershipConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DeleteGroupMembershipConditionKeys"></a>

```typescript
public readonly DeleteGroupMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteGroupMembership action.

---

##### `DeleteUserConditionKeys`<sup>Required</sup> <a name="DeleteUserConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DeleteUserConditionKeys"></a>

```typescript
public readonly DeleteUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteUser action.

---

##### `DescribeGroupConditionKeys`<sup>Required</sup> <a name="DescribeGroupConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DescribeGroupConditionKeys"></a>

```typescript
public readonly DescribeGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeGroup action.

---

##### `DescribeGroupMembershipConditionKeys`<sup>Required</sup> <a name="DescribeGroupMembershipConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DescribeGroupMembershipConditionKeys"></a>

```typescript
public readonly DescribeGroupMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeGroupMembership action.

---

##### `DescribeRegionConditionKeys`<sup>Required</sup> <a name="DescribeRegionConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DescribeRegionConditionKeys"></a>

```typescript
public readonly DescribeRegionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeRegion action.

---

##### `DescribeUserConditionKeys`<sup>Required</sup> <a name="DescribeUserConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.DescribeUserConditionKeys"></a>

```typescript
public readonly DescribeUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeUser action.

---

##### `GROUP_EXTERNAL_ID_ISSUERS`<sup>Required</sup> <a name="GROUP_EXTERNAL_ID_ISSUERS" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.GROUP_EXTERNAL_ID_ISSUERS"></a>

```typescript
public readonly GROUP_EXTERNAL_ID_ISSUERS: string;
```

- *Type:* string

Condition key: identitystore:GroupExternalIdIssuers (ArrayOfARN).

---

##### `IDENTITY_STORE_ARN`<sup>Required</sup> <a name="IDENTITY_STORE_ARN" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.IDENTITY_STORE_ARN"></a>

```typescript
public readonly IDENTITY_STORE_ARN: string;
```

- *Type:* string

Condition key: identitystore:IdentityStoreArn (ARN).

---

##### `IsMemberInGroupsConditionKeys`<sup>Required</sup> <a name="IsMemberInGroupsConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.IsMemberInGroupsConditionKeys"></a>

```typescript
public readonly IsMemberInGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the IsMemberInGroups action.

---

##### `ListGroupMembershipsConditionKeys`<sup>Required</sup> <a name="ListGroupMembershipsConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListGroupMembershipsConditionKeys"></a>

```typescript
public readonly ListGroupMembershipsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListGroupMemberships action.

---

##### `ListGroupMembershipsForMemberConditionKeys`<sup>Required</sup> <a name="ListGroupMembershipsForMemberConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListGroupMembershipsForMemberConditionKeys"></a>

```typescript
public readonly ListGroupMembershipsForMemberConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListGroupMembershipsForMember action.

---

##### `ListGroupsConditionKeys`<sup>Required</sup> <a name="ListGroupsConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListGroupsConditionKeys"></a>

```typescript
public readonly ListGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListGroups action.

---

##### `ListRegionsConditionKeys`<sup>Required</sup> <a name="ListRegionsConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListRegionsConditionKeys"></a>

```typescript
public readonly ListRegionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRegions action.

---

##### `ListUsersConditionKeys`<sup>Required</sup> <a name="ListUsersConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ListUsersConditionKeys"></a>

```typescript
public readonly ListUsersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListUsers action.

---

##### `PRIMARY_REGION`<sup>Required</sup> <a name="PRIMARY_REGION" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.PRIMARY_REGION"></a>

```typescript
public readonly PRIMARY_REGION: string;
```

- *Type:* string

Condition key: identitystore:PrimaryRegion (String).

---

##### `RESERVED_USER_ID`<sup>Required</sup> <a name="RESERVED_USER_ID" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.RESERVED_USER_ID"></a>

```typescript
public readonly RESERVED_USER_ID: string;
```

- *Type:* string

Condition key: identitystore:ReservedUserId (String).

---

##### `ReserveUserConditionKeys`<sup>Required</sup> <a name="ReserveUserConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.ReserveUserConditionKeys"></a>

```typescript
public readonly ReserveUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReserveUser action.

---

##### `UpdateGroupConditionKeys`<sup>Required</sup> <a name="UpdateGroupConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.UpdateGroupConditionKeys"></a>

```typescript
public readonly UpdateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateGroup action.

---

##### `UpdateUserConditionKeys`<sup>Required</sup> <a name="UpdateUserConditionKeys" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.UpdateUserConditionKeys"></a>

```typescript
public readonly UpdateUserConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUser action.

---

##### `USER_EXTERNAL_ID_ISSUERS`<sup>Required</sup> <a name="USER_EXTERNAL_ID_ISSUERS" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.USER_EXTERNAL_ID_ISSUERS"></a>

```typescript
public readonly USER_EXTERNAL_ID_ISSUERS: string;
```

- *Type:* string

Condition key: identitystore:UserExternalIdIssuers (ArrayOfARN).

---

##### `USER_ID`<sup>Required</sup> <a name="USER_ID" id="@cdk_utils/iam.identitystore.IdentitystoreConditions.property.USER_ID"></a>

```typescript
public readonly USER_ID: string;
```

- *Type:* string

Condition key: identitystore:UserId (String).

---

### IdentitystoreOperations <a name="IdentitystoreOperations" id="@cdk_utils/iam.identitystore.IdentitystoreOperations"></a>

API operation to required IAM actions mapping for identitystore.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

new identitystore.IdentitystoreOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.CreateGroupMembership">CreateGroupMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateGroupMembership API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.CreateUser">CreateUser</a></code> | <code>string[]</code> | IAM actions required for the CreateUser API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DeleteGroupMembership">DeleteGroupMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroupMembership API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DescribeGroup">DescribeGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeGroup API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DescribeGroupMembership">DescribeGroupMembership</a></code> | <code>string[]</code> | IAM actions required for the DescribeGroupMembership API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DescribeUser">DescribeUser</a></code> | <code>string[]</code> | IAM actions required for the DescribeUser API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.IsMemberInGroups">IsMemberInGroups</a></code> | <code>string[]</code> | IAM actions required for the IsMemberInGroups API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.ListGroupMemberships">ListGroupMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListGroupMemberships API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.ListGroupMembershipsForMember">ListGroupMembershipsForMember</a></code> | <code>string[]</code> | IAM actions required for the ListGroupMembershipsForMember API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.opGetGroupId">opGetGroupId</a></code> | <code>string[]</code> | IAM actions required for the GetGroupId API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.opGetGroupMembershipId">opGetGroupMembershipId</a></code> | <code>string[]</code> | IAM actions required for the GetGroupMembershipId API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.opGetUserId">opGetUserId</a></code> | <code>string[]</code> | IAM actions required for the GetUserId API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreOperations.property.UpdateUser">UpdateUser</a></code> | <code>string[]</code> | IAM actions required for the UpdateUser API call. |

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `CreateGroupMembership`<sup>Required</sup> <a name="CreateGroupMembership" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.CreateGroupMembership"></a>

```typescript
public readonly CreateGroupMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroupMembership API call.

---

##### `CreateUser`<sup>Required</sup> <a name="CreateUser" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.CreateUser"></a>

```typescript
public readonly CreateUser: string[];
```

- *Type:* string[]

IAM actions required for the CreateUser API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteGroupMembership`<sup>Required</sup> <a name="DeleteGroupMembership" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DeleteGroupMembership"></a>

```typescript
public readonly DeleteGroupMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroupMembership API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DescribeGroup`<sup>Required</sup> <a name="DescribeGroup" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DescribeGroup"></a>

```typescript
public readonly DescribeGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGroup API call.

---

##### `DescribeGroupMembership`<sup>Required</sup> <a name="DescribeGroupMembership" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DescribeGroupMembership"></a>

```typescript
public readonly DescribeGroupMembership: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGroupMembership API call.

---

##### `DescribeUser`<sup>Required</sup> <a name="DescribeUser" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.DescribeUser"></a>

```typescript
public readonly DescribeUser: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUser API call.

---

##### `IsMemberInGroups`<sup>Required</sup> <a name="IsMemberInGroups" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.IsMemberInGroups"></a>

```typescript
public readonly IsMemberInGroups: string[];
```

- *Type:* string[]

IAM actions required for the IsMemberInGroups API call.

---

##### `ListGroupMemberships`<sup>Required</sup> <a name="ListGroupMemberships" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.ListGroupMemberships"></a>

```typescript
public readonly ListGroupMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupMemberships API call.

---

##### `ListGroupMembershipsForMember`<sup>Required</sup> <a name="ListGroupMembershipsForMember" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.ListGroupMembershipsForMember"></a>

```typescript
public readonly ListGroupMembershipsForMember: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupMembershipsForMember API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `opGetGroupId`<sup>Required</sup> <a name="opGetGroupId" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.opGetGroupId"></a>

```typescript
public readonly opGetGroupId: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupId API call.

---

##### `opGetGroupMembershipId`<sup>Required</sup> <a name="opGetGroupMembershipId" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.opGetGroupMembershipId"></a>

```typescript
public readonly opGetGroupMembershipId: string[];
```

- *Type:* string[]

IAM actions required for the GetGroupMembershipId API call.

---

##### `opGetUserId`<sup>Required</sup> <a name="opGetUserId" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.opGetUserId"></a>

```typescript
public readonly opGetUserId: string[];
```

- *Type:* string[]

IAM actions required for the GetUserId API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateUser`<sup>Required</sup> <a name="UpdateUser" id="@cdk_utils/iam.identitystore.IdentitystoreOperations.property.UpdateUser"></a>

```typescript
public readonly UpdateUser: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUser API call.

---

### IdentitystoreResources <a name="IdentitystoreResources" id="@cdk_utils/iam.identitystore.IdentitystoreResources"></a>

ARN builders, validators, and parsers for identitystore resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.identitystore.IdentitystoreResources.Initializer"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

new identitystore.IdentitystoreResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.allGroupMemberships">allGroupMemberships</a></code> | Builds an ARN for the AllGroupMemberships resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.allGroups">allGroups</a></code> | Builds an ARN for the AllGroups resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.allUsers">allUsers</a></code> | Builds an ARN for the AllUsers resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.group">group</a></code> | Builds an ARN for the Group resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.groupMembership">groupMembership</a></code> | Builds an ARN for the GroupMembership resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.identitystore">identitystore</a></code> | Builds an ARN for the Identitystore resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllGroupMembershipsArn">isValidAllGroupMembershipsArn</a></code> | Validates whether a string is a valid ARN for the AllGroupMemberships resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllGroupsArn">isValidAllGroupsArn</a></code> | Validates whether a string is a valid ARN for the AllGroups resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllUsersArn">isValidAllUsersArn</a></code> | Validates whether a string is a valid ARN for the AllUsers resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the Group resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.isValidGroupMembershipArn">isValidGroupMembershipArn</a></code> | Validates whether a string is a valid ARN for the GroupMembership resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.isValidIdentitystoreArn">isValidIdentitystoreArn</a></code> | Validates whether a string is a valid ARN for the Identitystore resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.isValidUserArn">isValidUserArn</a></code> | Validates whether a string is a valid ARN for the User resource. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllGroupMembershipsArn">parseAllGroupMembershipsArn</a></code> | Parses a AllGroupMemberships ARN into its components. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllGroupsArn">parseAllGroupsArn</a></code> | Parses a AllGroups ARN into its components. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllUsersArn">parseAllUsersArn</a></code> | Parses a AllUsers ARN into its components. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.parseGroupArn">parseGroupArn</a></code> | Parses a Group ARN into its components. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.parseGroupMembershipArn">parseGroupMembershipArn</a></code> | Parses a GroupMembership ARN into its components. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.parseIdentitystoreArn">parseIdentitystoreArn</a></code> | Parses a Identitystore ARN into its components. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.parseUserArn">parseUserArn</a></code> | Parses a User ARN into its components. |
| <code><a href="#@cdk_utils/iam.identitystore.IdentitystoreResources.user">user</a></code> | Builds an ARN for the User resource. |

---

##### `allGroupMemberships` <a name="allGroupMemberships" id="@cdk_utils/iam.identitystore.IdentitystoreResources.allGroupMemberships"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.allGroupMemberships(props: IdentitystoreAllGroupMembershipsArnProps)
```

Builds an ARN for the AllGroupMemberships resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identitystore.IdentitystoreResources.allGroupMemberships.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupMembershipsArnProps">IdentitystoreAllGroupMembershipsArnProps</a>

---

##### `allGroups` <a name="allGroups" id="@cdk_utils/iam.identitystore.IdentitystoreResources.allGroups"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.allGroups(props: IdentitystoreAllGroupsArnProps)
```

Builds an ARN for the AllGroups resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identitystore.IdentitystoreResources.allGroups.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identitystore.IdentitystoreAllGroupsArnProps">IdentitystoreAllGroupsArnProps</a>

---

##### `allUsers` <a name="allUsers" id="@cdk_utils/iam.identitystore.IdentitystoreResources.allUsers"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.allUsers(props: IdentitystoreAllUsersArnProps)
```

Builds an ARN for the AllUsers resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identitystore.IdentitystoreResources.allUsers.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identitystore.IdentitystoreAllUsersArnProps">IdentitystoreAllUsersArnProps</a>

---

##### `group` <a name="group" id="@cdk_utils/iam.identitystore.IdentitystoreResources.group"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.group(props: IdentitystoreGroupArnProps)
```

Builds an ARN for the Group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identitystore.IdentitystoreResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupArnProps">IdentitystoreGroupArnProps</a>

---

##### `groupMembership` <a name="groupMembership" id="@cdk_utils/iam.identitystore.IdentitystoreResources.groupMembership"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.groupMembership(props: IdentitystoreGroupMembershipArnProps)
```

Builds an ARN for the GroupMembership resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identitystore.IdentitystoreResources.groupMembership.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identitystore.IdentitystoreGroupMembershipArnProps">IdentitystoreGroupMembershipArnProps</a>

---

##### `identitystore` <a name="identitystore" id="@cdk_utils/iam.identitystore.IdentitystoreResources.identitystore"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.identitystore(props: IdentitystoreIdentitystoreArnProps)
```

Builds an ARN for the Identitystore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identitystore.IdentitystoreResources.identitystore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identitystore.IdentitystoreIdentitystoreArnProps">IdentitystoreIdentitystoreArnProps</a>

---

##### `isValidAllGroupMembershipsArn` <a name="isValidAllGroupMembershipsArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllGroupMembershipsArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.isValidAllGroupMembershipsArn(arn: string)
```

Validates whether a string is a valid ARN for the AllGroupMemberships resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllGroupMembershipsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAllGroupsArn` <a name="isValidAllGroupsArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllGroupsArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.isValidAllGroupsArn(arn: string)
```

Validates whether a string is a valid ARN for the AllGroups resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllGroupsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAllUsersArn` <a name="isValidAllUsersArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllUsersArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.isValidAllUsersArn(arn: string)
```

Validates whether a string is a valid ARN for the AllUsers resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidAllUsersArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidGroupArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the Group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroupMembershipArn` <a name="isValidGroupMembershipArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidGroupMembershipArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.isValidGroupMembershipArn(arn: string)
```

Validates whether a string is a valid ARN for the GroupMembership resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidGroupMembershipArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdentitystoreArn` <a name="isValidIdentitystoreArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidIdentitystoreArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.isValidIdentitystoreArn(arn: string)
```

Validates whether a string is a valid ARN for the Identitystore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidIdentitystoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidUserArn` <a name="isValidUserArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidUserArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.isValidUserArn(arn: string)
```

Validates whether a string is a valid ARN for the User resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.isValidUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAllGroupMembershipsArn` <a name="parseAllGroupMembershipsArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllGroupMembershipsArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.parseAllGroupMembershipsArn(arn: string)
```

Parses a AllGroupMemberships ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllGroupMembershipsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAllGroupsArn` <a name="parseAllGroupsArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllGroupsArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.parseAllGroupsArn(arn: string)
```

Parses a AllGroups ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllGroupsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAllUsersArn` <a name="parseAllUsersArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllUsersArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.parseAllUsersArn(arn: string)
```

Parses a AllUsers ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseAllUsersArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseGroupArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.parseGroupArn(arn: string)
```

Parses a Group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupMembershipArn` <a name="parseGroupMembershipArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseGroupMembershipArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.parseGroupMembershipArn(arn: string)
```

Parses a GroupMembership ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseGroupMembershipArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentitystoreArn` <a name="parseIdentitystoreArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseIdentitystoreArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.parseIdentitystoreArn(arn: string)
```

Parses a Identitystore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseIdentitystoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserArn` <a name="parseUserArn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseUserArn"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.parseUserArn(arn: string)
```

Parses a User ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.identitystore.IdentitystoreResources.parseUserArn.parameter.arn"></a>

- *Type:* string

---

##### `user` <a name="user" id="@cdk_utils/iam.identitystore.IdentitystoreResources.user"></a>

```typescript
import { identitystore } from '@cdk_utils/iam'

identitystore.IdentitystoreResources.user(props: IdentitystoreUserArnProps)
```

Builds an ARN for the User resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.identitystore.IdentitystoreResources.user.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.identitystore.IdentitystoreUserArnProps">IdentitystoreUserArnProps</a>

---




