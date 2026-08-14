# `ram` Submodule <a name="`ram` Submodule" id="@cdk_utils/iam.ram"></a>


## Structs <a name="Structs" id="Structs"></a>

### RamCustomerManagedPermissionArnComponents <a name="RamCustomerManagedPermissionArnComponents" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents"></a>

Parsed components of a customer-managed-permission ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

const ramCustomerManagedPermissionArnComponents: ram.RamCustomerManagedPermissionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### RamCustomerManagedPermissionArnProps <a name="RamCustomerManagedPermissionArnProps" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps"></a>

Properties for building a customer-managed-permission ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

const ramCustomerManagedPermissionArnProps: ram.RamCustomerManagedPermissionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RamPermissionArnComponents <a name="RamPermissionArnComponents" id="@cdk_utils/iam.ram.RamPermissionArnComponents"></a>

Parsed components of a permission ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ram.RamPermissionArnComponents.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

const ramPermissionArnComponents: ram.RamPermissionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamPermissionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ram.RamPermissionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ram.RamPermissionArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ram.RamPermissionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ram.RamPermissionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.ram.RamPermissionArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### RamPermissionArnProps <a name="RamPermissionArnProps" id="@cdk_utils/iam.ram.RamPermissionArnProps"></a>

Properties for building a permission ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ram.RamPermissionArnProps.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

const ramPermissionArnProps: ram.RamPermissionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamPermissionArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.ram.RamPermissionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ram.RamPermissionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.ram.RamPermissionArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ram.RamPermissionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ram.RamPermissionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### RamResourceShareArnComponents <a name="RamResourceShareArnComponents" id="@cdk_utils/iam.ram.RamResourceShareArnComponents"></a>

Parsed components of a resource-share ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ram.RamResourceShareArnComponents.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

const ramResourceShareArnComponents: ram.RamResourceShareArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ram.RamResourceShareArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ram.RamResourceShareArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ram.RamResourceShareArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.ram.RamResourceShareArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### RamResourceShareArnProps <a name="RamResourceShareArnProps" id="@cdk_utils/iam.ram.RamResourceShareArnProps"></a>

Properties for building a resource-share ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ram.RamResourceShareArnProps.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

const ramResourceShareArnProps: ram.RamResourceShareArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.ram.RamResourceShareArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ram.RamResourceShareArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ram.RamResourceShareArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ram.RamResourceShareArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RamResourceShareInvitationArnComponents <a name="RamResourceShareInvitationArnComponents" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents"></a>

Parsed components of a resource-share-invitation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

const ramResourceShareInvitationArnComponents: ram.RamResourceShareInvitationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnComponents.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component.

---

### RamResourceShareInvitationArnProps <a name="RamResourceShareInvitationArnProps" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnProps"></a>

Properties for building a resource-share-invitation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

const ramResourceShareInvitationArnProps: ram.RamResourceShareInvitationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.property.resourcePath">resourcePath</a></code> | <code>string</code> | The ResourcePath component of the ARN. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

The ResourcePath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ram.RamResourceShareInvitationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RamActions <a name="RamActions" id="@cdk_utils/iam.ram.RamActions"></a>

IAM action constants for the ram service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ram.RamActions.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

new ram.RamActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.AcceptResourceShareInvitation">AcceptResourceShareInvitation</a></code> | <code>string</code> | [Write] ram:AcceptResourceShareInvitation. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.actionGetPermission">actionGetPermission</a></code> | <code>string</code> | [Read] ram:GetPermission. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.actionGetResourcePolicies">actionGetResourcePolicies</a></code> | <code>string</code> | [Read] ram:GetResourcePolicies. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.actionGetResourceShareAssociations">actionGetResourceShareAssociations</a></code> | <code>string</code> | [Read] ram:GetResourceShareAssociations. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.actionGetResourceShareInvitations">actionGetResourceShareInvitations</a></code> | <code>string</code> | [Read] ram:GetResourceShareInvitations. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.actionGetResourceShares">actionGetResourceShares</a></code> | <code>string</code> | [Read] ram:GetResourceShares. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.actionSetDefaultPermissionVersion">actionSetDefaultPermissionVersion</a></code> | <code>string</code> | [Write] ram:SetDefaultPermissionVersion. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.AssociateResourceShare">AssociateResourceShare</a></code> | <code>string</code> | [Write] ram:AssociateResourceShare. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.AssociateResourceSharePermission">AssociateResourceSharePermission</a></code> | <code>string</code> | [Write] ram:AssociateResourceSharePermission. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.CreatePermission">CreatePermission</a></code> | <code>string</code> | [Write] ram:CreatePermission. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.CreatePermissionVersion">CreatePermissionVersion</a></code> | <code>string</code> | [Write] ram:CreatePermissionVersion. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.CreateResourceShare">CreateResourceShare</a></code> | <code>string</code> | [Write] ram:CreateResourceShare. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.DeletePermission">DeletePermission</a></code> | <code>string</code> | [Write] ram:DeletePermission. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.DeletePermissionVersion">DeletePermissionVersion</a></code> | <code>string</code> | [Write] ram:DeletePermissionVersion. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.DeleteResourceShare">DeleteResourceShare</a></code> | <code>string</code> | [Write] ram:DeleteResourceShare. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.DisassociateResourceShare">DisassociateResourceShare</a></code> | <code>string</code> | [Write] ram:DisassociateResourceShare. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.DisassociateResourceSharePermission">DisassociateResourceSharePermission</a></code> | <code>string</code> | [Write] ram:DisassociateResourceSharePermission. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.EnableSharingWithAwsOrganization">EnableSharingWithAwsOrganization</a></code> | <code>string</code> | [PermissionManagement] ram:EnableSharingWithAwsOrganization. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListPendingInvitationResources">ListPendingInvitationResources</a></code> | <code>string</code> | [Read] ram:ListPendingInvitationResources. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListPermissionAssociations">ListPermissionAssociations</a></code> | <code>string</code> | [List] ram:ListPermissionAssociations. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListPermissions">ListPermissions</a></code> | <code>string</code> | [List] ram:ListPermissions. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListPermissionVersions">ListPermissionVersions</a></code> | <code>string</code> | [List] ram:ListPermissionVersions. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListPrincipals">ListPrincipals</a></code> | <code>string</code> | [List] ram:ListPrincipals. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListReplacePermissionAssociationsWork">ListReplacePermissionAssociationsWork</a></code> | <code>string</code> | [List] ram:ListReplacePermissionAssociationsWork. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListResources">ListResources</a></code> | <code>string</code> | [List] ram:ListResources. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListResourceSharePermissions">ListResourceSharePermissions</a></code> | <code>string</code> | [List] ram:ListResourceSharePermissions. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListResourceTypes">ListResourceTypes</a></code> | <code>string</code> | [List] ram:ListResourceTypes. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ListSourceAssociations">ListSourceAssociations</a></code> | <code>string</code> | [List] ram:ListSourceAssociations. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.PromotePermissionCreatedFromPolicy">PromotePermissionCreatedFromPolicy</a></code> | <code>string</code> | [Write] ram:PromotePermissionCreatedFromPolicy. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.PromoteResourceShareCreatedFromPolicy">PromoteResourceShareCreatedFromPolicy</a></code> | <code>string</code> | [Write] ram:PromoteResourceShareCreatedFromPolicy. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.RejectResourceShareInvitation">RejectResourceShareInvitation</a></code> | <code>string</code> | [Write] ram:RejectResourceShareInvitation. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.ReplacePermissionAssociations">ReplacePermissionAssociations</a></code> | <code>string</code> | [Write] ram:ReplacePermissionAssociations. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ram:TagResource. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ram:UntagResource. |
| <code><a href="#@cdk_utils/iam.ram.RamActions.property.UpdateResourceShare">UpdateResourceShare</a></code> | <code>string</code> | [Write] ram:UpdateResourceShare. |

---

##### `AcceptResourceShareInvitation`<sup>Required</sup> <a name="AcceptResourceShareInvitation" id="@cdk_utils/iam.ram.RamActions.property.AcceptResourceShareInvitation"></a>

```typescript
public readonly AcceptResourceShareInvitation: string;
```

- *Type:* string

[Write] ram:AcceptResourceShareInvitation.

---

##### `actionGetPermission`<sup>Required</sup> <a name="actionGetPermission" id="@cdk_utils/iam.ram.RamActions.property.actionGetPermission"></a>

```typescript
public readonly actionGetPermission: string;
```

- *Type:* string

[Read] ram:GetPermission.

---

##### `actionGetResourcePolicies`<sup>Required</sup> <a name="actionGetResourcePolicies" id="@cdk_utils/iam.ram.RamActions.property.actionGetResourcePolicies"></a>

```typescript
public readonly actionGetResourcePolicies: string;
```

- *Type:* string

[Read] ram:GetResourcePolicies.

---

##### `actionGetResourceShareAssociations`<sup>Required</sup> <a name="actionGetResourceShareAssociations" id="@cdk_utils/iam.ram.RamActions.property.actionGetResourceShareAssociations"></a>

```typescript
public readonly actionGetResourceShareAssociations: string;
```

- *Type:* string

[Read] ram:GetResourceShareAssociations.

---

##### `actionGetResourceShareInvitations`<sup>Required</sup> <a name="actionGetResourceShareInvitations" id="@cdk_utils/iam.ram.RamActions.property.actionGetResourceShareInvitations"></a>

```typescript
public readonly actionGetResourceShareInvitations: string;
```

- *Type:* string

[Read] ram:GetResourceShareInvitations.

---

##### `actionGetResourceShares`<sup>Required</sup> <a name="actionGetResourceShares" id="@cdk_utils/iam.ram.RamActions.property.actionGetResourceShares"></a>

```typescript
public readonly actionGetResourceShares: string;
```

- *Type:* string

[Read] ram:GetResourceShares.

---

##### `actionSetDefaultPermissionVersion`<sup>Required</sup> <a name="actionSetDefaultPermissionVersion" id="@cdk_utils/iam.ram.RamActions.property.actionSetDefaultPermissionVersion"></a>

```typescript
public readonly actionSetDefaultPermissionVersion: string;
```

- *Type:* string

[Write] ram:SetDefaultPermissionVersion.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ram.RamActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ram.RamActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ram.RamActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ram.RamActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ram.RamActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateResourceShare`<sup>Required</sup> <a name="AssociateResourceShare" id="@cdk_utils/iam.ram.RamActions.property.AssociateResourceShare"></a>

```typescript
public readonly AssociateResourceShare: string;
```

- *Type:* string

[Write] ram:AssociateResourceShare.

---

##### `AssociateResourceSharePermission`<sup>Required</sup> <a name="AssociateResourceSharePermission" id="@cdk_utils/iam.ram.RamActions.property.AssociateResourceSharePermission"></a>

```typescript
public readonly AssociateResourceSharePermission: string;
```

- *Type:* string

[Write] ram:AssociateResourceSharePermission.

---

##### `CreatePermission`<sup>Required</sup> <a name="CreatePermission" id="@cdk_utils/iam.ram.RamActions.property.CreatePermission"></a>

```typescript
public readonly CreatePermission: string;
```

- *Type:* string

[Write] ram:CreatePermission.

---

##### `CreatePermissionVersion`<sup>Required</sup> <a name="CreatePermissionVersion" id="@cdk_utils/iam.ram.RamActions.property.CreatePermissionVersion"></a>

```typescript
public readonly CreatePermissionVersion: string;
```

- *Type:* string

[Write] ram:CreatePermissionVersion.

---

##### `CreateResourceShare`<sup>Required</sup> <a name="CreateResourceShare" id="@cdk_utils/iam.ram.RamActions.property.CreateResourceShare"></a>

```typescript
public readonly CreateResourceShare: string;
```

- *Type:* string

[Write] ram:CreateResourceShare.

---

##### `DeletePermission`<sup>Required</sup> <a name="DeletePermission" id="@cdk_utils/iam.ram.RamActions.property.DeletePermission"></a>

```typescript
public readonly DeletePermission: string;
```

- *Type:* string

[Write] ram:DeletePermission.

---

##### `DeletePermissionVersion`<sup>Required</sup> <a name="DeletePermissionVersion" id="@cdk_utils/iam.ram.RamActions.property.DeletePermissionVersion"></a>

```typescript
public readonly DeletePermissionVersion: string;
```

- *Type:* string

[Write] ram:DeletePermissionVersion.

---

##### `DeleteResourceShare`<sup>Required</sup> <a name="DeleteResourceShare" id="@cdk_utils/iam.ram.RamActions.property.DeleteResourceShare"></a>

```typescript
public readonly DeleteResourceShare: string;
```

- *Type:* string

[Write] ram:DeleteResourceShare.

---

##### `DisassociateResourceShare`<sup>Required</sup> <a name="DisassociateResourceShare" id="@cdk_utils/iam.ram.RamActions.property.DisassociateResourceShare"></a>

```typescript
public readonly DisassociateResourceShare: string;
```

- *Type:* string

[Write] ram:DisassociateResourceShare.

---

##### `DisassociateResourceSharePermission`<sup>Required</sup> <a name="DisassociateResourceSharePermission" id="@cdk_utils/iam.ram.RamActions.property.DisassociateResourceSharePermission"></a>

```typescript
public readonly DisassociateResourceSharePermission: string;
```

- *Type:* string

[Write] ram:DisassociateResourceSharePermission.

---

##### `EnableSharingWithAwsOrganization`<sup>Required</sup> <a name="EnableSharingWithAwsOrganization" id="@cdk_utils/iam.ram.RamActions.property.EnableSharingWithAwsOrganization"></a>

```typescript
public readonly EnableSharingWithAwsOrganization: string;
```

- *Type:* string

[PermissionManagement] ram:EnableSharingWithAwsOrganization.

---

##### `ListPendingInvitationResources`<sup>Required</sup> <a name="ListPendingInvitationResources" id="@cdk_utils/iam.ram.RamActions.property.ListPendingInvitationResources"></a>

```typescript
public readonly ListPendingInvitationResources: string;
```

- *Type:* string

[Read] ram:ListPendingInvitationResources.

---

##### `ListPermissionAssociations`<sup>Required</sup> <a name="ListPermissionAssociations" id="@cdk_utils/iam.ram.RamActions.property.ListPermissionAssociations"></a>

```typescript
public readonly ListPermissionAssociations: string;
```

- *Type:* string

[List] ram:ListPermissionAssociations.

---

##### `ListPermissions`<sup>Required</sup> <a name="ListPermissions" id="@cdk_utils/iam.ram.RamActions.property.ListPermissions"></a>

```typescript
public readonly ListPermissions: string;
```

- *Type:* string

[List] ram:ListPermissions.

---

##### `ListPermissionVersions`<sup>Required</sup> <a name="ListPermissionVersions" id="@cdk_utils/iam.ram.RamActions.property.ListPermissionVersions"></a>

```typescript
public readonly ListPermissionVersions: string;
```

- *Type:* string

[List] ram:ListPermissionVersions.

---

##### `ListPrincipals`<sup>Required</sup> <a name="ListPrincipals" id="@cdk_utils/iam.ram.RamActions.property.ListPrincipals"></a>

```typescript
public readonly ListPrincipals: string;
```

- *Type:* string

[List] ram:ListPrincipals.

---

##### `ListReplacePermissionAssociationsWork`<sup>Required</sup> <a name="ListReplacePermissionAssociationsWork" id="@cdk_utils/iam.ram.RamActions.property.ListReplacePermissionAssociationsWork"></a>

```typescript
public readonly ListReplacePermissionAssociationsWork: string;
```

- *Type:* string

[List] ram:ListReplacePermissionAssociationsWork.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.ram.RamActions.property.ListResources"></a>

```typescript
public readonly ListResources: string;
```

- *Type:* string

[List] ram:ListResources.

---

##### `ListResourceSharePermissions`<sup>Required</sup> <a name="ListResourceSharePermissions" id="@cdk_utils/iam.ram.RamActions.property.ListResourceSharePermissions"></a>

```typescript
public readonly ListResourceSharePermissions: string;
```

- *Type:* string

[List] ram:ListResourceSharePermissions.

---

##### `ListResourceTypes`<sup>Required</sup> <a name="ListResourceTypes" id="@cdk_utils/iam.ram.RamActions.property.ListResourceTypes"></a>

```typescript
public readonly ListResourceTypes: string;
```

- *Type:* string

[List] ram:ListResourceTypes.

---

##### `ListSourceAssociations`<sup>Required</sup> <a name="ListSourceAssociations" id="@cdk_utils/iam.ram.RamActions.property.ListSourceAssociations"></a>

```typescript
public readonly ListSourceAssociations: string;
```

- *Type:* string

[List] ram:ListSourceAssociations.

---

##### `PromotePermissionCreatedFromPolicy`<sup>Required</sup> <a name="PromotePermissionCreatedFromPolicy" id="@cdk_utils/iam.ram.RamActions.property.PromotePermissionCreatedFromPolicy"></a>

```typescript
public readonly PromotePermissionCreatedFromPolicy: string;
```

- *Type:* string

[Write] ram:PromotePermissionCreatedFromPolicy.

---

##### `PromoteResourceShareCreatedFromPolicy`<sup>Required</sup> <a name="PromoteResourceShareCreatedFromPolicy" id="@cdk_utils/iam.ram.RamActions.property.PromoteResourceShareCreatedFromPolicy"></a>

```typescript
public readonly PromoteResourceShareCreatedFromPolicy: string;
```

- *Type:* string

[Write] ram:PromoteResourceShareCreatedFromPolicy.

---

##### `RejectResourceShareInvitation`<sup>Required</sup> <a name="RejectResourceShareInvitation" id="@cdk_utils/iam.ram.RamActions.property.RejectResourceShareInvitation"></a>

```typescript
public readonly RejectResourceShareInvitation: string;
```

- *Type:* string

[Write] ram:RejectResourceShareInvitation.

---

##### `ReplacePermissionAssociations`<sup>Required</sup> <a name="ReplacePermissionAssociations" id="@cdk_utils/iam.ram.RamActions.property.ReplacePermissionAssociations"></a>

```typescript
public readonly ReplacePermissionAssociations: string;
```

- *Type:* string

[Write] ram:ReplacePermissionAssociations.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ram.RamActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ram.RamActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ram:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ram.RamActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ram:UntagResource.

---

##### `UpdateResourceShare`<sup>Required</sup> <a name="UpdateResourceShare" id="@cdk_utils/iam.ram.RamActions.property.UpdateResourceShare"></a>

```typescript
public readonly UpdateResourceShare: string;
```

- *Type:* string

[Write] ram:UpdateResourceShare.

---

### RamConditions <a name="RamConditions" id="@cdk_utils/iam.ram.RamConditions"></a>

Condition key constants and builders for ram.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ram.RamConditions.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

new ram.RamConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.allowsExternalPrincipals">allowsExternalPrincipals</a></code> | Generates a condition block for `ram:AllowsExternalPrincipals`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.permissionARN">permissionARN</a></code> | Generates a condition block for `ram:PermissionArn`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.permissionResourceType">permissionResourceType</a></code> | Generates a condition block for `ram:PermissionResourceType`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.principal">principal</a></code> | Generates a condition block for `ram:Principal`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.requestedAllowsExternalPrincipals">requestedAllowsExternalPrincipals</a></code> | Generates a condition block for `ram:RequestedAllowsExternalPrincipals`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.requestedResourceType">requestedResourceType</a></code> | Generates a condition block for `ram:RequestedResourceType`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.resourceARN">resourceARN</a></code> | Generates a condition block for `ram:ResourceArn`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.resourceShareName">resourceShareName</a></code> | Generates a condition block for `ram:ResourceShareName`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.retainSharingOnAccountLeaveOrganization">retainSharingOnAccountLeaveOrganization</a></code> | Generates a condition block for `ram:RetainSharingOnAccountLeaveOrganization`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.shareOwnerAccountId">shareOwnerAccountId</a></code> | Generates a condition block for `ram:ShareOwnerAccountId`. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `allowsExternalPrincipals` <a name="allowsExternalPrincipals" id="@cdk_utils/iam.ram.RamConditions.allowsExternalPrincipals"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.allowsExternalPrincipals(value: boolean)
```

Generates a condition block for `ram:AllowsExternalPrincipals`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.allowsExternalPrincipals.parameter.value"></a>

- *Type:* boolean

---

##### `permissionARN` <a name="permissionARN" id="@cdk_utils/iam.ram.RamConditions.permissionARN"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.permissionARN(value: string)
```

Generates a condition block for `ram:PermissionArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.permissionARN.parameter.value"></a>

- *Type:* string

---

##### `permissionResourceType` <a name="permissionResourceType" id="@cdk_utils/iam.ram.RamConditions.permissionResourceType"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.permissionResourceType(value: string)
```

Generates a condition block for `ram:PermissionResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.permissionResourceType.parameter.value"></a>

- *Type:* string

---

##### `principal` <a name="principal" id="@cdk_utils/iam.ram.RamConditions.principal"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.principal(value: string)
```

Generates a condition block for `ram:Principal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.principal.parameter.value"></a>

- *Type:* string

---

##### `requestedAllowsExternalPrincipals` <a name="requestedAllowsExternalPrincipals" id="@cdk_utils/iam.ram.RamConditions.requestedAllowsExternalPrincipals"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.requestedAllowsExternalPrincipals(value: boolean)
```

Generates a condition block for `ram:RequestedAllowsExternalPrincipals`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.requestedAllowsExternalPrincipals.parameter.value"></a>

- *Type:* boolean

---

##### `requestedResourceType` <a name="requestedResourceType" id="@cdk_utils/iam.ram.RamConditions.requestedResourceType"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.requestedResourceType(value: string)
```

Generates a condition block for `ram:RequestedResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.requestedResourceType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ram.RamConditions.requestTag"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceARN` <a name="resourceARN" id="@cdk_utils/iam.ram.RamConditions.resourceARN"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.resourceARN(value: string)
```

Generates a condition block for `ram:ResourceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.resourceARN.parameter.value"></a>

- *Type:* string

---

##### `resourceShareName` <a name="resourceShareName" id="@cdk_utils/iam.ram.RamConditions.resourceShareName"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.resourceShareName(value: string)
```

Generates a condition block for `ram:ResourceShareName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.resourceShareName.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ram.RamConditions.resourceTag"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `retainSharingOnAccountLeaveOrganization` <a name="retainSharingOnAccountLeaveOrganization" id="@cdk_utils/iam.ram.RamConditions.retainSharingOnAccountLeaveOrganization"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.retainSharingOnAccountLeaveOrganization(value: boolean)
```

Generates a condition block for `ram:RetainSharingOnAccountLeaveOrganization`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.retainSharingOnAccountLeaveOrganization.parameter.value"></a>

- *Type:* boolean

---

##### `shareOwnerAccountId` <a name="shareOwnerAccountId" id="@cdk_utils/iam.ram.RamConditions.shareOwnerAccountId"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.shareOwnerAccountId(value: string)
```

Generates a condition block for `ram:ShareOwnerAccountId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ram.RamConditions.shareOwnerAccountId.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ram.RamConditions.tagKeys"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ram.RamConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.AcceptResourceShareInvitationConditionKeys">AcceptResourceShareInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptResourceShareInvitation action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.actionGetPermissionConditionKeys">actionGetPermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPermission action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.actionGetResourceSharesConditionKeys">actionGetResourceSharesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourceShares action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.actionSetDefaultPermissionVersionConditionKeys">actionSetDefaultPermissionVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetDefaultPermissionVersion action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.ALLOWS_EXTERNAL_PRINCIPALS">ALLOWS_EXTERNAL_PRINCIPALS</a></code> | <code>string</code> | Condition key: ram:AllowsExternalPrincipals (Bool). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.AssociateResourceShareConditionKeys">AssociateResourceShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateResourceShare action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.CreatePermissionConditionKeys">CreatePermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePermission action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.CreatePermissionVersionConditionKeys">CreatePermissionVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePermissionVersion action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.CreateResourceShareConditionKeys">CreateResourceShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResourceShare action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.DeletePermissionConditionKeys">DeletePermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePermission action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.DeletePermissionVersionConditionKeys">DeletePermissionVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePermissionVersion action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.DeleteResourceShareConditionKeys">DeleteResourceShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourceShare action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.DisassociateResourceShareConditionKeys">DisassociateResourceShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateResourceShare action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.ListPendingInvitationResourcesConditionKeys">ListPendingInvitationResourcesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPendingInvitationResources action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.ListPermissionAssociationsConditionKeys">ListPermissionAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPermissionAssociations action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.ListResourceSharePermissionsConditionKeys">ListResourceSharePermissionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceSharePermissions action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.PERMISSION_ARN">PERMISSION_ARN</a></code> | <code>string</code> | Condition key: ram:PermissionArn (ARN). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.PERMISSION_RESOURCE_TYPE">PERMISSION_RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: ram:PermissionResourceType (String). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.PRINCIPAL">PRINCIPAL</a></code> | <code>string</code> | Condition key: ram:Principal (String). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.PromotePermissionCreatedFromPolicyConditionKeys">PromotePermissionCreatedFromPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PromotePermissionCreatedFromPolicy action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.RejectResourceShareInvitationConditionKeys">RejectResourceShareInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RejectResourceShareInvitation action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.ReplacePermissionAssociationsConditionKeys">ReplacePermissionAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReplacePermissionAssociations action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.REQUESTED_ALLOWS_EXTERNAL_PRINCIPALS">REQUESTED_ALLOWS_EXTERNAL_PRINCIPALS</a></code> | <code>string</code> | Condition key: ram:RequestedAllowsExternalPrincipals (Bool). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.REQUESTED_RESOURCE_TYPE">REQUESTED_RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: ram:RequestedResourceType (String). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.RESOURCE_ARN">RESOURCE_ARN</a></code> | <code>string</code> | Condition key: ram:ResourceArn (ARN). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.RESOURCE_SHARE_NAME">RESOURCE_SHARE_NAME</a></code> | <code>string</code> | Condition key: ram:ResourceShareName (String). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: ram:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.RETAIN_SHARING_ON_ACCOUNT_LEAVE_ORGANIZATION">RETAIN_SHARING_ON_ACCOUNT_LEAVE_ORGANIZATION</a></code> | <code>string</code> | Condition key: ram:RetainSharingOnAccountLeaveOrganization (Bool). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.SHARE_OWNER_ACCOUNT_ID">SHARE_OWNER_ACCOUNT_ID</a></code> | <code>string</code> | Condition key: ram:ShareOwnerAccountId (String). |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.ram.RamConditions.property.UpdateResourceShareConditionKeys">UpdateResourceShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateResourceShare action. |

---

##### `AcceptResourceShareInvitationConditionKeys`<sup>Required</sup> <a name="AcceptResourceShareInvitationConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.AcceptResourceShareInvitationConditionKeys"></a>

```typescript
public readonly AcceptResourceShareInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptResourceShareInvitation action.

---

##### `actionGetPermissionConditionKeys`<sup>Required</sup> <a name="actionGetPermissionConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.actionGetPermissionConditionKeys"></a>

```typescript
public readonly actionGetPermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPermission action.

---

##### `actionGetResourceSharesConditionKeys`<sup>Required</sup> <a name="actionGetResourceSharesConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.actionGetResourceSharesConditionKeys"></a>

```typescript
public readonly actionGetResourceSharesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourceShares action.

---

##### `actionSetDefaultPermissionVersionConditionKeys`<sup>Required</sup> <a name="actionSetDefaultPermissionVersionConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.actionSetDefaultPermissionVersionConditionKeys"></a>

```typescript
public readonly actionSetDefaultPermissionVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetDefaultPermissionVersion action.

---

##### `ALLOWS_EXTERNAL_PRINCIPALS`<sup>Required</sup> <a name="ALLOWS_EXTERNAL_PRINCIPALS" id="@cdk_utils/iam.ram.RamConditions.property.ALLOWS_EXTERNAL_PRINCIPALS"></a>

```typescript
public readonly ALLOWS_EXTERNAL_PRINCIPALS: string;
```

- *Type:* string

Condition key: ram:AllowsExternalPrincipals (Bool).

---

##### `AssociateResourceShareConditionKeys`<sup>Required</sup> <a name="AssociateResourceShareConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.AssociateResourceShareConditionKeys"></a>

```typescript
public readonly AssociateResourceShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateResourceShare action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ram.RamConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ram.RamConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ram.RamConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePermissionConditionKeys`<sup>Required</sup> <a name="CreatePermissionConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.CreatePermissionConditionKeys"></a>

```typescript
public readonly CreatePermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePermission action.

---

##### `CreatePermissionVersionConditionKeys`<sup>Required</sup> <a name="CreatePermissionVersionConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.CreatePermissionVersionConditionKeys"></a>

```typescript
public readonly CreatePermissionVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePermissionVersion action.

---

##### `CreateResourceShareConditionKeys`<sup>Required</sup> <a name="CreateResourceShareConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.CreateResourceShareConditionKeys"></a>

```typescript
public readonly CreateResourceShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResourceShare action.

---

##### `DeletePermissionConditionKeys`<sup>Required</sup> <a name="DeletePermissionConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.DeletePermissionConditionKeys"></a>

```typescript
public readonly DeletePermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePermission action.

---

##### `DeletePermissionVersionConditionKeys`<sup>Required</sup> <a name="DeletePermissionVersionConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.DeletePermissionVersionConditionKeys"></a>

```typescript
public readonly DeletePermissionVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePermissionVersion action.

---

##### `DeleteResourceShareConditionKeys`<sup>Required</sup> <a name="DeleteResourceShareConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.DeleteResourceShareConditionKeys"></a>

```typescript
public readonly DeleteResourceShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourceShare action.

---

##### `DisassociateResourceShareConditionKeys`<sup>Required</sup> <a name="DisassociateResourceShareConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.DisassociateResourceShareConditionKeys"></a>

```typescript
public readonly DisassociateResourceShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateResourceShare action.

---

##### `ListPendingInvitationResourcesConditionKeys`<sup>Required</sup> <a name="ListPendingInvitationResourcesConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.ListPendingInvitationResourcesConditionKeys"></a>

```typescript
public readonly ListPendingInvitationResourcesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPendingInvitationResources action.

---

##### `ListPermissionAssociationsConditionKeys`<sup>Required</sup> <a name="ListPermissionAssociationsConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.ListPermissionAssociationsConditionKeys"></a>

```typescript
public readonly ListPermissionAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPermissionAssociations action.

---

##### `ListResourceSharePermissionsConditionKeys`<sup>Required</sup> <a name="ListResourceSharePermissionsConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.ListResourceSharePermissionsConditionKeys"></a>

```typescript
public readonly ListResourceSharePermissionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceSharePermissions action.

---

##### `PERMISSION_ARN`<sup>Required</sup> <a name="PERMISSION_ARN" id="@cdk_utils/iam.ram.RamConditions.property.PERMISSION_ARN"></a>

```typescript
public readonly PERMISSION_ARN: string;
```

- *Type:* string

Condition key: ram:PermissionArn (ARN).

---

##### `PERMISSION_RESOURCE_TYPE`<sup>Required</sup> <a name="PERMISSION_RESOURCE_TYPE" id="@cdk_utils/iam.ram.RamConditions.property.PERMISSION_RESOURCE_TYPE"></a>

```typescript
public readonly PERMISSION_RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: ram:PermissionResourceType (String).

---

##### `PRINCIPAL`<sup>Required</sup> <a name="PRINCIPAL" id="@cdk_utils/iam.ram.RamConditions.property.PRINCIPAL"></a>

```typescript
public readonly PRINCIPAL: string;
```

- *Type:* string

Condition key: ram:Principal (String).

---

##### `PromotePermissionCreatedFromPolicyConditionKeys`<sup>Required</sup> <a name="PromotePermissionCreatedFromPolicyConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.PromotePermissionCreatedFromPolicyConditionKeys"></a>

```typescript
public readonly PromotePermissionCreatedFromPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PromotePermissionCreatedFromPolicy action.

---

##### `RejectResourceShareInvitationConditionKeys`<sup>Required</sup> <a name="RejectResourceShareInvitationConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.RejectResourceShareInvitationConditionKeys"></a>

```typescript
public readonly RejectResourceShareInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RejectResourceShareInvitation action.

---

##### `ReplacePermissionAssociationsConditionKeys`<sup>Required</sup> <a name="ReplacePermissionAssociationsConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.ReplacePermissionAssociationsConditionKeys"></a>

```typescript
public readonly ReplacePermissionAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReplacePermissionAssociations action.

---

##### `REQUESTED_ALLOWS_EXTERNAL_PRINCIPALS`<sup>Required</sup> <a name="REQUESTED_ALLOWS_EXTERNAL_PRINCIPALS" id="@cdk_utils/iam.ram.RamConditions.property.REQUESTED_ALLOWS_EXTERNAL_PRINCIPALS"></a>

```typescript
public readonly REQUESTED_ALLOWS_EXTERNAL_PRINCIPALS: string;
```

- *Type:* string

Condition key: ram:RequestedAllowsExternalPrincipals (Bool).

---

##### `REQUESTED_RESOURCE_TYPE`<sup>Required</sup> <a name="REQUESTED_RESOURCE_TYPE" id="@cdk_utils/iam.ram.RamConditions.property.REQUESTED_RESOURCE_TYPE"></a>

```typescript
public readonly REQUESTED_RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: ram:RequestedResourceType (String).

---

##### `RESOURCE_ARN`<sup>Required</sup> <a name="RESOURCE_ARN" id="@cdk_utils/iam.ram.RamConditions.property.RESOURCE_ARN"></a>

```typescript
public readonly RESOURCE_ARN: string;
```

- *Type:* string

Condition key: ram:ResourceArn (ARN).

---

##### `RESOURCE_SHARE_NAME`<sup>Required</sup> <a name="RESOURCE_SHARE_NAME" id="@cdk_utils/iam.ram.RamConditions.property.RESOURCE_SHARE_NAME"></a>

```typescript
public readonly RESOURCE_SHARE_NAME: string;
```

- *Type:* string

Condition key: ram:ResourceShareName (String).

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.ram.RamConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: ram:ResourceTag/${TagKey} (String).

---

##### `RETAIN_SHARING_ON_ACCOUNT_LEAVE_ORGANIZATION`<sup>Required</sup> <a name="RETAIN_SHARING_ON_ACCOUNT_LEAVE_ORGANIZATION" id="@cdk_utils/iam.ram.RamConditions.property.RETAIN_SHARING_ON_ACCOUNT_LEAVE_ORGANIZATION"></a>

```typescript
public readonly RETAIN_SHARING_ON_ACCOUNT_LEAVE_ORGANIZATION: string;
```

- *Type:* string

Condition key: ram:RetainSharingOnAccountLeaveOrganization (Bool).

---

##### `SHARE_OWNER_ACCOUNT_ID`<sup>Required</sup> <a name="SHARE_OWNER_ACCOUNT_ID" id="@cdk_utils/iam.ram.RamConditions.property.SHARE_OWNER_ACCOUNT_ID"></a>

```typescript
public readonly SHARE_OWNER_ACCOUNT_ID: string;
```

- *Type:* string

Condition key: ram:ShareOwnerAccountId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateResourceShareConditionKeys`<sup>Required</sup> <a name="UpdateResourceShareConditionKeys" id="@cdk_utils/iam.ram.RamConditions.property.UpdateResourceShareConditionKeys"></a>

```typescript
public readonly UpdateResourceShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateResourceShare action.

---

### RamOperations <a name="RamOperations" id="@cdk_utils/iam.ram.RamOperations"></a>

API operation to required IAM actions mapping for ram.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ram.RamOperations.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

new ram.RamOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.AcceptResourceShareInvitation">AcceptResourceShareInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptResourceShareInvitation API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.AssociateResourceShare">AssociateResourceShare</a></code> | <code>string[]</code> | IAM actions required for the AssociateResourceShare API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.AssociateResourceSharePermission">AssociateResourceSharePermission</a></code> | <code>string[]</code> | IAM actions required for the AssociateResourceSharePermission API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.CreatePermission">CreatePermission</a></code> | <code>string[]</code> | IAM actions required for the CreatePermission API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.CreatePermissionVersion">CreatePermissionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreatePermissionVersion API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.CreateResourceShare">CreateResourceShare</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceShare API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.DeletePermission">DeletePermission</a></code> | <code>string[]</code> | IAM actions required for the DeletePermission API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.DeletePermissionVersion">DeletePermissionVersion</a></code> | <code>string[]</code> | IAM actions required for the DeletePermissionVersion API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.DeleteResourceShare">DeleteResourceShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceShare API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.DisassociateResourceShare">DisassociateResourceShare</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResourceShare API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.DisassociateResourceSharePermission">DisassociateResourceSharePermission</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResourceSharePermission API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.EnableSharingWithAwsOrganization">EnableSharingWithAwsOrganization</a></code> | <code>string[]</code> | IAM actions required for the EnableSharingWithAwsOrganization API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListPendingInvitationResources">ListPendingInvitationResources</a></code> | <code>string[]</code> | IAM actions required for the ListPendingInvitationResources API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListPermissionAssociations">ListPermissionAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListPermissionAssociations API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListPermissions">ListPermissions</a></code> | <code>string[]</code> | IAM actions required for the ListPermissions API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListPermissionVersions">ListPermissionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListPermissionVersions API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListPrincipals">ListPrincipals</a></code> | <code>string[]</code> | IAM actions required for the ListPrincipals API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListReplacePermissionAssociationsWork">ListReplacePermissionAssociationsWork</a></code> | <code>string[]</code> | IAM actions required for the ListReplacePermissionAssociationsWork API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListResources">ListResources</a></code> | <code>string[]</code> | IAM actions required for the ListResources API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListResourceSharePermissions">ListResourceSharePermissions</a></code> | <code>string[]</code> | IAM actions required for the ListResourceSharePermissions API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListResourceTypes">ListResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the ListResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ListSourceAssociations">ListSourceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListSourceAssociations API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.opGetPermission">opGetPermission</a></code> | <code>string[]</code> | IAM actions required for the GetPermission API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.opGetResourcePolicies">opGetResourcePolicies</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicies API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.opGetResourceShareAssociations">opGetResourceShareAssociations</a></code> | <code>string[]</code> | IAM actions required for the GetResourceShareAssociations API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.opGetResourceShareInvitations">opGetResourceShareInvitations</a></code> | <code>string[]</code> | IAM actions required for the GetResourceShareInvitations API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.opGetResourceShares">opGetResourceShares</a></code> | <code>string[]</code> | IAM actions required for the GetResourceShares API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.opSetDefaultPermissionVersion">opSetDefaultPermissionVersion</a></code> | <code>string[]</code> | IAM actions required for the SetDefaultPermissionVersion API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.PromotePermissionCreatedFromPolicy">PromotePermissionCreatedFromPolicy</a></code> | <code>string[]</code> | IAM actions required for the PromotePermissionCreatedFromPolicy API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.PromoteResourceShareCreatedFromPolicy">PromoteResourceShareCreatedFromPolicy</a></code> | <code>string[]</code> | IAM actions required for the PromoteResourceShareCreatedFromPolicy API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.RejectResourceShareInvitation">RejectResourceShareInvitation</a></code> | <code>string[]</code> | IAM actions required for the RejectResourceShareInvitation API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.ReplacePermissionAssociations">ReplacePermissionAssociations</a></code> | <code>string[]</code> | IAM actions required for the ReplacePermissionAssociations API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ram.RamOperations.property.UpdateResourceShare">UpdateResourceShare</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceShare API call. |

---

##### `AcceptResourceShareInvitation`<sup>Required</sup> <a name="AcceptResourceShareInvitation" id="@cdk_utils/iam.ram.RamOperations.property.AcceptResourceShareInvitation"></a>

```typescript
public readonly AcceptResourceShareInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptResourceShareInvitation API call.

---

##### `AssociateResourceShare`<sup>Required</sup> <a name="AssociateResourceShare" id="@cdk_utils/iam.ram.RamOperations.property.AssociateResourceShare"></a>

```typescript
public readonly AssociateResourceShare: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResourceShare API call.

---

##### `AssociateResourceSharePermission`<sup>Required</sup> <a name="AssociateResourceSharePermission" id="@cdk_utils/iam.ram.RamOperations.property.AssociateResourceSharePermission"></a>

```typescript
public readonly AssociateResourceSharePermission: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResourceSharePermission API call.

---

##### `CreatePermission`<sup>Required</sup> <a name="CreatePermission" id="@cdk_utils/iam.ram.RamOperations.property.CreatePermission"></a>

```typescript
public readonly CreatePermission: string[];
```

- *Type:* string[]

IAM actions required for the CreatePermission API call.

---

##### `CreatePermissionVersion`<sup>Required</sup> <a name="CreatePermissionVersion" id="@cdk_utils/iam.ram.RamOperations.property.CreatePermissionVersion"></a>

```typescript
public readonly CreatePermissionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreatePermissionVersion API call.

---

##### `CreateResourceShare`<sup>Required</sup> <a name="CreateResourceShare" id="@cdk_utils/iam.ram.RamOperations.property.CreateResourceShare"></a>

```typescript
public readonly CreateResourceShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceShare API call.

---

##### `DeletePermission`<sup>Required</sup> <a name="DeletePermission" id="@cdk_utils/iam.ram.RamOperations.property.DeletePermission"></a>

```typescript
public readonly DeletePermission: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermission API call.

---

##### `DeletePermissionVersion`<sup>Required</sup> <a name="DeletePermissionVersion" id="@cdk_utils/iam.ram.RamOperations.property.DeletePermissionVersion"></a>

```typescript
public readonly DeletePermissionVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermissionVersion API call.

---

##### `DeleteResourceShare`<sup>Required</sup> <a name="DeleteResourceShare" id="@cdk_utils/iam.ram.RamOperations.property.DeleteResourceShare"></a>

```typescript
public readonly DeleteResourceShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceShare API call.

---

##### `DisassociateResourceShare`<sup>Required</sup> <a name="DisassociateResourceShare" id="@cdk_utils/iam.ram.RamOperations.property.DisassociateResourceShare"></a>

```typescript
public readonly DisassociateResourceShare: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResourceShare API call.

---

##### `DisassociateResourceSharePermission`<sup>Required</sup> <a name="DisassociateResourceSharePermission" id="@cdk_utils/iam.ram.RamOperations.property.DisassociateResourceSharePermission"></a>

```typescript
public readonly DisassociateResourceSharePermission: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResourceSharePermission API call.

---

##### `EnableSharingWithAwsOrganization`<sup>Required</sup> <a name="EnableSharingWithAwsOrganization" id="@cdk_utils/iam.ram.RamOperations.property.EnableSharingWithAwsOrganization"></a>

```typescript
public readonly EnableSharingWithAwsOrganization: string[];
```

- *Type:* string[]

IAM actions required for the EnableSharingWithAwsOrganization API call.

---

##### `ListPendingInvitationResources`<sup>Required</sup> <a name="ListPendingInvitationResources" id="@cdk_utils/iam.ram.RamOperations.property.ListPendingInvitationResources"></a>

```typescript
public readonly ListPendingInvitationResources: string[];
```

- *Type:* string[]

IAM actions required for the ListPendingInvitationResources API call.

---

##### `ListPermissionAssociations`<sup>Required</sup> <a name="ListPermissionAssociations" id="@cdk_utils/iam.ram.RamOperations.property.ListPermissionAssociations"></a>

```typescript
public readonly ListPermissionAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissionAssociations API call.

---

##### `ListPermissions`<sup>Required</sup> <a name="ListPermissions" id="@cdk_utils/iam.ram.RamOperations.property.ListPermissions"></a>

```typescript
public readonly ListPermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissions API call.

---

##### `ListPermissionVersions`<sup>Required</sup> <a name="ListPermissionVersions" id="@cdk_utils/iam.ram.RamOperations.property.ListPermissionVersions"></a>

```typescript
public readonly ListPermissionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListPermissionVersions API call.

---

##### `ListPrincipals`<sup>Required</sup> <a name="ListPrincipals" id="@cdk_utils/iam.ram.RamOperations.property.ListPrincipals"></a>

```typescript
public readonly ListPrincipals: string[];
```

- *Type:* string[]

IAM actions required for the ListPrincipals API call.

---

##### `ListReplacePermissionAssociationsWork`<sup>Required</sup> <a name="ListReplacePermissionAssociationsWork" id="@cdk_utils/iam.ram.RamOperations.property.ListReplacePermissionAssociationsWork"></a>

```typescript
public readonly ListReplacePermissionAssociationsWork: string[];
```

- *Type:* string[]

IAM actions required for the ListReplacePermissionAssociationsWork API call.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.ram.RamOperations.property.ListResources"></a>

```typescript
public readonly ListResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResources API call.

---

##### `ListResourceSharePermissions`<sup>Required</sup> <a name="ListResourceSharePermissions" id="@cdk_utils/iam.ram.RamOperations.property.ListResourceSharePermissions"></a>

```typescript
public readonly ListResourceSharePermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceSharePermissions API call.

---

##### `ListResourceTypes`<sup>Required</sup> <a name="ListResourceTypes" id="@cdk_utils/iam.ram.RamOperations.property.ListResourceTypes"></a>

```typescript
public readonly ListResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceTypes API call.

---

##### `ListSourceAssociations`<sup>Required</sup> <a name="ListSourceAssociations" id="@cdk_utils/iam.ram.RamOperations.property.ListSourceAssociations"></a>

```typescript
public readonly ListSourceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceAssociations API call.

---

##### `opGetPermission`<sup>Required</sup> <a name="opGetPermission" id="@cdk_utils/iam.ram.RamOperations.property.opGetPermission"></a>

```typescript
public readonly opGetPermission: string[];
```

- *Type:* string[]

IAM actions required for the GetPermission API call.

---

##### `opGetResourcePolicies`<sup>Required</sup> <a name="opGetResourcePolicies" id="@cdk_utils/iam.ram.RamOperations.property.opGetResourcePolicies"></a>

```typescript
public readonly opGetResourcePolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicies API call.

---

##### `opGetResourceShareAssociations`<sup>Required</sup> <a name="opGetResourceShareAssociations" id="@cdk_utils/iam.ram.RamOperations.property.opGetResourceShareAssociations"></a>

```typescript
public readonly opGetResourceShareAssociations: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceShareAssociations API call.

---

##### `opGetResourceShareInvitations`<sup>Required</sup> <a name="opGetResourceShareInvitations" id="@cdk_utils/iam.ram.RamOperations.property.opGetResourceShareInvitations"></a>

```typescript
public readonly opGetResourceShareInvitations: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceShareInvitations API call.

---

##### `opGetResourceShares`<sup>Required</sup> <a name="opGetResourceShares" id="@cdk_utils/iam.ram.RamOperations.property.opGetResourceShares"></a>

```typescript
public readonly opGetResourceShares: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceShares API call.

---

##### `opSetDefaultPermissionVersion`<sup>Required</sup> <a name="opSetDefaultPermissionVersion" id="@cdk_utils/iam.ram.RamOperations.property.opSetDefaultPermissionVersion"></a>

```typescript
public readonly opSetDefaultPermissionVersion: string[];
```

- *Type:* string[]

IAM actions required for the SetDefaultPermissionVersion API call.

---

##### `PromotePermissionCreatedFromPolicy`<sup>Required</sup> <a name="PromotePermissionCreatedFromPolicy" id="@cdk_utils/iam.ram.RamOperations.property.PromotePermissionCreatedFromPolicy"></a>

```typescript
public readonly PromotePermissionCreatedFromPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PromotePermissionCreatedFromPolicy API call.

---

##### `PromoteResourceShareCreatedFromPolicy`<sup>Required</sup> <a name="PromoteResourceShareCreatedFromPolicy" id="@cdk_utils/iam.ram.RamOperations.property.PromoteResourceShareCreatedFromPolicy"></a>

```typescript
public readonly PromoteResourceShareCreatedFromPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PromoteResourceShareCreatedFromPolicy API call.

---

##### `RejectResourceShareInvitation`<sup>Required</sup> <a name="RejectResourceShareInvitation" id="@cdk_utils/iam.ram.RamOperations.property.RejectResourceShareInvitation"></a>

```typescript
public readonly RejectResourceShareInvitation: string[];
```

- *Type:* string[]

IAM actions required for the RejectResourceShareInvitation API call.

---

##### `ReplacePermissionAssociations`<sup>Required</sup> <a name="ReplacePermissionAssociations" id="@cdk_utils/iam.ram.RamOperations.property.ReplacePermissionAssociations"></a>

```typescript
public readonly ReplacePermissionAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ReplacePermissionAssociations API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ram.RamOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ram.RamOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateResourceShare`<sup>Required</sup> <a name="UpdateResourceShare" id="@cdk_utils/iam.ram.RamOperations.property.UpdateResourceShare"></a>

```typescript
public readonly UpdateResourceShare: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceShare API call.

---

### RamResources <a name="RamResources" id="@cdk_utils/iam.ram.RamResources"></a>

ARN builders, validators, and parsers for ram resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ram.RamResources.Initializer"></a>

```typescript
import { ram } from '@cdk_utils/iam'

new ram.RamResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ram.RamResources.customerManagedPermission">customerManagedPermission</a></code> | Builds an ARN for the customer-managed-permission resource. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.isValidCustomerManagedPermissionArn">isValidCustomerManagedPermissionArn</a></code> | Validates whether a string is a valid ARN for the customer-managed-permission resource. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.isValidPermissionArn">isValidPermissionArn</a></code> | Validates whether a string is a valid ARN for the permission resource. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.isValidResourceShareArn">isValidResourceShareArn</a></code> | Validates whether a string is a valid ARN for the resource-share resource. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.isValidResourceShareInvitationArn">isValidResourceShareInvitationArn</a></code> | Validates whether a string is a valid ARN for the resource-share-invitation resource. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.parseCustomerManagedPermissionArn">parseCustomerManagedPermissionArn</a></code> | Parses a customer-managed-permission ARN into its components. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.parsePermissionArn">parsePermissionArn</a></code> | Parses a permission ARN into its components. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.parseResourceShareArn">parseResourceShareArn</a></code> | Parses a resource-share ARN into its components. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.parseResourceShareInvitationArn">parseResourceShareInvitationArn</a></code> | Parses a resource-share-invitation ARN into its components. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.permission">permission</a></code> | Builds an ARN for the permission resource. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.resourceShare">resourceShare</a></code> | Builds an ARN for the resource-share resource. |
| <code><a href="#@cdk_utils/iam.ram.RamResources.resourceShareInvitation">resourceShareInvitation</a></code> | Builds an ARN for the resource-share-invitation resource. |

---

##### `customerManagedPermission` <a name="customerManagedPermission" id="@cdk_utils/iam.ram.RamResources.customerManagedPermission"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.customerManagedPermission(props: RamCustomerManagedPermissionArnProps)
```

Builds an ARN for the customer-managed-permission resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ram.RamResources.customerManagedPermission.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ram.RamCustomerManagedPermissionArnProps">RamCustomerManagedPermissionArnProps</a>

---

##### `isValidCustomerManagedPermissionArn` <a name="isValidCustomerManagedPermissionArn" id="@cdk_utils/iam.ram.RamResources.isValidCustomerManagedPermissionArn"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.isValidCustomerManagedPermissionArn(arn: string)
```

Validates whether a string is a valid ARN for the customer-managed-permission resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ram.RamResources.isValidCustomerManagedPermissionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPermissionArn` <a name="isValidPermissionArn" id="@cdk_utils/iam.ram.RamResources.isValidPermissionArn"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.isValidPermissionArn(arn: string)
```

Validates whether a string is a valid ARN for the permission resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ram.RamResources.isValidPermissionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceShareArn` <a name="isValidResourceShareArn" id="@cdk_utils/iam.ram.RamResources.isValidResourceShareArn"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.isValidResourceShareArn(arn: string)
```

Validates whether a string is a valid ARN for the resource-share resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ram.RamResources.isValidResourceShareArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceShareInvitationArn` <a name="isValidResourceShareInvitationArn" id="@cdk_utils/iam.ram.RamResources.isValidResourceShareInvitationArn"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.isValidResourceShareInvitationArn(arn: string)
```

Validates whether a string is a valid ARN for the resource-share-invitation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ram.RamResources.isValidResourceShareInvitationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomerManagedPermissionArn` <a name="parseCustomerManagedPermissionArn" id="@cdk_utils/iam.ram.RamResources.parseCustomerManagedPermissionArn"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.parseCustomerManagedPermissionArn(arn: string)
```

Parses a customer-managed-permission ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ram.RamResources.parseCustomerManagedPermissionArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePermissionArn` <a name="parsePermissionArn" id="@cdk_utils/iam.ram.RamResources.parsePermissionArn"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.parsePermissionArn(arn: string)
```

Parses a permission ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ram.RamResources.parsePermissionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceShareArn` <a name="parseResourceShareArn" id="@cdk_utils/iam.ram.RamResources.parseResourceShareArn"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.parseResourceShareArn(arn: string)
```

Parses a resource-share ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ram.RamResources.parseResourceShareArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceShareInvitationArn` <a name="parseResourceShareInvitationArn" id="@cdk_utils/iam.ram.RamResources.parseResourceShareInvitationArn"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.parseResourceShareInvitationArn(arn: string)
```

Parses a resource-share-invitation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ram.RamResources.parseResourceShareInvitationArn.parameter.arn"></a>

- *Type:* string

---

##### `permission` <a name="permission" id="@cdk_utils/iam.ram.RamResources.permission"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.permission(props: RamPermissionArnProps)
```

Builds an ARN for the permission resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ram.RamResources.permission.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ram.RamPermissionArnProps">RamPermissionArnProps</a>

---

##### `resourceShare` <a name="resourceShare" id="@cdk_utils/iam.ram.RamResources.resourceShare"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.resourceShare(props: RamResourceShareArnProps)
```

Builds an ARN for the resource-share resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ram.RamResources.resourceShare.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ram.RamResourceShareArnProps">RamResourceShareArnProps</a>

---

##### `resourceShareInvitation` <a name="resourceShareInvitation" id="@cdk_utils/iam.ram.RamResources.resourceShareInvitation"></a>

```typescript
import { ram } from '@cdk_utils/iam'

ram.RamResources.resourceShareInvitation(props: RamResourceShareInvitationArnProps)
```

Builds an ARN for the resource-share-invitation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ram.RamResources.resourceShareInvitation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ram.RamResourceShareInvitationArnProps">RamResourceShareInvitationArnProps</a>

---




