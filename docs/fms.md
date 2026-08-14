# `fms` Submodule <a name="`fms` Submodule" id="@cdk_utils/iam.fms"></a>


## Structs <a name="Structs" id="Structs"></a>

### FmsApplicationsListArnComponents <a name="FmsApplicationsListArnComponents" id="@cdk_utils/iam.fms.FmsApplicationsListArnComponents"></a>

Parsed components of a applications-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fms.FmsApplicationsListArnComponents.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

const fmsApplicationsListArnComponents: fms.FmsApplicationsListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsApplicationsListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fms.FmsApplicationsListArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.fms.FmsApplicationsListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fms.FmsApplicationsListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fms.FmsApplicationsListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fms.FmsApplicationsListArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fms.FmsApplicationsListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fms.FmsApplicationsListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FmsApplicationsListArnProps <a name="FmsApplicationsListArnProps" id="@cdk_utils/iam.fms.FmsApplicationsListArnProps"></a>

Properties for building a applications-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fms.FmsApplicationsListArnProps.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

const fmsApplicationsListArnProps: fms.FmsApplicationsListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsApplicationsListArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.fms.FmsApplicationsListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fms.FmsApplicationsListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fms.FmsApplicationsListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fms.FmsApplicationsListArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fms.FmsApplicationsListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fms.FmsApplicationsListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fms.FmsApplicationsListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FmsPolicyArnComponents <a name="FmsPolicyArnComponents" id="@cdk_utils/iam.fms.FmsPolicyArnComponents"></a>

Parsed components of a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fms.FmsPolicyArnComponents.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

const fmsPolicyArnComponents: fms.FmsPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fms.FmsPolicyArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.fms.FmsPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fms.FmsPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fms.FmsPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fms.FmsPolicyArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fms.FmsPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fms.FmsPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FmsPolicyArnProps <a name="FmsPolicyArnProps" id="@cdk_utils/iam.fms.FmsPolicyArnProps"></a>

Properties for building a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fms.FmsPolicyArnProps.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

const fmsPolicyArnProps: fms.FmsPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsPolicyArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.fms.FmsPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fms.FmsPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fms.FmsPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fms.FmsPolicyArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fms.FmsPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fms.FmsPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fms.FmsPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FmsProtocolsListArnComponents <a name="FmsProtocolsListArnComponents" id="@cdk_utils/iam.fms.FmsProtocolsListArnComponents"></a>

Parsed components of a protocols-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fms.FmsProtocolsListArnComponents.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

const fmsProtocolsListArnComponents: fms.FmsProtocolsListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsProtocolsListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fms.FmsProtocolsListArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.fms.FmsProtocolsListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fms.FmsProtocolsListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fms.FmsProtocolsListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fms.FmsProtocolsListArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fms.FmsProtocolsListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fms.FmsProtocolsListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FmsProtocolsListArnProps <a name="FmsProtocolsListArnProps" id="@cdk_utils/iam.fms.FmsProtocolsListArnProps"></a>

Properties for building a protocols-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fms.FmsProtocolsListArnProps.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

const fmsProtocolsListArnProps: fms.FmsProtocolsListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsProtocolsListArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.fms.FmsProtocolsListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fms.FmsProtocolsListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fms.FmsProtocolsListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fms.FmsProtocolsListArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fms.FmsProtocolsListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fms.FmsProtocolsListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fms.FmsProtocolsListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FmsResourceSetArnComponents <a name="FmsResourceSetArnComponents" id="@cdk_utils/iam.fms.FmsResourceSetArnComponents"></a>

Parsed components of a resource-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fms.FmsResourceSetArnComponents.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

const fmsResourceSetArnComponents: fms.FmsResourceSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsResourceSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fms.FmsResourceSetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.fms.FmsResourceSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fms.FmsResourceSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fms.FmsResourceSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fms.FmsResourceSetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fms.FmsResourceSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fms.FmsResourceSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FmsResourceSetArnProps <a name="FmsResourceSetArnProps" id="@cdk_utils/iam.fms.FmsResourceSetArnProps"></a>

Properties for building a resource-set ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fms.FmsResourceSetArnProps.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

const fmsResourceSetArnProps: fms.FmsResourceSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsResourceSetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.fms.FmsResourceSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fms.FmsResourceSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fms.FmsResourceSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fms.FmsResourceSetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fms.FmsResourceSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fms.FmsResourceSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fms.FmsResourceSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FmsActions <a name="FmsActions" id="@cdk_utils/iam.fms.FmsActions"></a>

IAM action constants for the fms service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fms.FmsActions.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

new fms.FmsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetAdminAccount">actionGetAdminAccount</a></code> | <code>string</code> | [Read] fms:GetAdminAccount. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetAdminScope">actionGetAdminScope</a></code> | <code>string</code> | [Read] fms:GetAdminScope. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetAppsList">actionGetAppsList</a></code> | <code>string</code> | [Read] fms:GetAppsList. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetComplianceDetail">actionGetComplianceDetail</a></code> | <code>string</code> | [Read] fms:GetComplianceDetail. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetNotificationChannel">actionGetNotificationChannel</a></code> | <code>string</code> | [Read] fms:GetNotificationChannel. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] fms:GetPolicy. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetProtectionStatus">actionGetProtectionStatus</a></code> | <code>string</code> | [Read] fms:GetProtectionStatus. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetProtocolsList">actionGetProtocolsList</a></code> | <code>string</code> | [Read] fms:GetProtocolsList. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetResourceSet">actionGetResourceSet</a></code> | <code>string</code> | [Read] fms:GetResourceSet. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetThirdPartyFirewallAssociationStatus">actionGetThirdPartyFirewallAssociationStatus</a></code> | <code>string</code> | [Read] fms:GetThirdPartyFirewallAssociationStatus. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.actionGetViolationDetails">actionGetViolationDetails</a></code> | <code>string</code> | [Read] fms:GetViolationDetails. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.AssociateAdminAccount">AssociateAdminAccount</a></code> | <code>string</code> | [Write] fms:AssociateAdminAccount. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.AssociateThirdPartyFirewall">AssociateThirdPartyFirewall</a></code> | <code>string</code> | [Write] fms:AssociateThirdPartyFirewall. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.BatchAssociateResource">BatchAssociateResource</a></code> | <code>string</code> | [Write] fms:BatchAssociateResource. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.BatchDisassociateResource">BatchDisassociateResource</a></code> | <code>string</code> | [Write] fms:BatchDisassociateResource. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.DeleteAppsList">DeleteAppsList</a></code> | <code>string</code> | [Write] fms:DeleteAppsList. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.DeleteNotificationChannel">DeleteNotificationChannel</a></code> | <code>string</code> | [Write] fms:DeleteNotificationChannel. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [Write] fms:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.DeleteProtocolsList">DeleteProtocolsList</a></code> | <code>string</code> | [Write] fms:DeleteProtocolsList. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.DeleteResourceSet">DeleteResourceSet</a></code> | <code>string</code> | [Write] fms:DeleteResourceSet. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.DisassociateAdminAccount">DisassociateAdminAccount</a></code> | <code>string</code> | [Write] fms:DisassociateAdminAccount. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.DisassociateThirdPartyFirewall">DisassociateThirdPartyFirewall</a></code> | <code>string</code> | [Write] fms:DisassociateThirdPartyFirewall. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListAdminAccountsForOrganization">ListAdminAccountsForOrganization</a></code> | <code>string</code> | [List] fms:ListAdminAccountsForOrganization. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListAdminsManagingAccount">ListAdminsManagingAccount</a></code> | <code>string</code> | [List] fms:ListAdminsManagingAccount. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListAppsLists">ListAppsLists</a></code> | <code>string</code> | [List] fms:ListAppsLists. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListComplianceStatus">ListComplianceStatus</a></code> | <code>string</code> | [List] fms:ListComplianceStatus. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListDiscoveredResources">ListDiscoveredResources</a></code> | <code>string</code> | [List] fms:ListDiscoveredResources. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListMemberAccounts">ListMemberAccounts</a></code> | <code>string</code> | [List] fms:ListMemberAccounts. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [List] fms:ListPolicies. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListProtocolsLists">ListProtocolsLists</a></code> | <code>string</code> | [List] fms:ListProtocolsLists. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListResourceSetResources">ListResourceSetResources</a></code> | <code>string</code> | [List] fms:ListResourceSetResources. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListResourceSets">ListResourceSets</a></code> | <code>string</code> | [List] fms:ListResourceSets. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] fms:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.ListThirdPartyFirewallFirewallPolicies">ListThirdPartyFirewallFirewallPolicies</a></code> | <code>string</code> | [List] fms:ListThirdPartyFirewallFirewallPolicies. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.PutAdminAccount">PutAdminAccount</a></code> | <code>string</code> | [Write] fms:PutAdminAccount. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.PutAppsList">PutAppsList</a></code> | <code>string</code> | [Write] fms:PutAppsList. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.PutNotificationChannel">PutNotificationChannel</a></code> | <code>string</code> | [Write] fms:PutNotificationChannel. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.PutPolicy">PutPolicy</a></code> | <code>string</code> | [Write] fms:PutPolicy. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.PutProtocolsList">PutProtocolsList</a></code> | <code>string</code> | [Write] fms:PutProtocolsList. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.PutResourceSet">PutResourceSet</a></code> | <code>string</code> | [Write] fms:PutResourceSet. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] fms:TagResource. |
| <code><a href="#@cdk_utils/iam.fms.FmsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] fms:UntagResource. |

---

##### `actionGetAdminAccount`<sup>Required</sup> <a name="actionGetAdminAccount" id="@cdk_utils/iam.fms.FmsActions.property.actionGetAdminAccount"></a>

```typescript
public readonly actionGetAdminAccount: string;
```

- *Type:* string

[Read] fms:GetAdminAccount.

---

##### `actionGetAdminScope`<sup>Required</sup> <a name="actionGetAdminScope" id="@cdk_utils/iam.fms.FmsActions.property.actionGetAdminScope"></a>

```typescript
public readonly actionGetAdminScope: string;
```

- *Type:* string

[Read] fms:GetAdminScope.

---

##### `actionGetAppsList`<sup>Required</sup> <a name="actionGetAppsList" id="@cdk_utils/iam.fms.FmsActions.property.actionGetAppsList"></a>

```typescript
public readonly actionGetAppsList: string;
```

- *Type:* string

[Read] fms:GetAppsList.

---

##### `actionGetComplianceDetail`<sup>Required</sup> <a name="actionGetComplianceDetail" id="@cdk_utils/iam.fms.FmsActions.property.actionGetComplianceDetail"></a>

```typescript
public readonly actionGetComplianceDetail: string;
```

- *Type:* string

[Read] fms:GetComplianceDetail.

---

##### `actionGetNotificationChannel`<sup>Required</sup> <a name="actionGetNotificationChannel" id="@cdk_utils/iam.fms.FmsActions.property.actionGetNotificationChannel"></a>

```typescript
public readonly actionGetNotificationChannel: string;
```

- *Type:* string

[Read] fms:GetNotificationChannel.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.fms.FmsActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] fms:GetPolicy.

---

##### `actionGetProtectionStatus`<sup>Required</sup> <a name="actionGetProtectionStatus" id="@cdk_utils/iam.fms.FmsActions.property.actionGetProtectionStatus"></a>

```typescript
public readonly actionGetProtectionStatus: string;
```

- *Type:* string

[Read] fms:GetProtectionStatus.

---

##### `actionGetProtocolsList`<sup>Required</sup> <a name="actionGetProtocolsList" id="@cdk_utils/iam.fms.FmsActions.property.actionGetProtocolsList"></a>

```typescript
public readonly actionGetProtocolsList: string;
```

- *Type:* string

[Read] fms:GetProtocolsList.

---

##### `actionGetResourceSet`<sup>Required</sup> <a name="actionGetResourceSet" id="@cdk_utils/iam.fms.FmsActions.property.actionGetResourceSet"></a>

```typescript
public readonly actionGetResourceSet: string;
```

- *Type:* string

[Read] fms:GetResourceSet.

---

##### `actionGetThirdPartyFirewallAssociationStatus`<sup>Required</sup> <a name="actionGetThirdPartyFirewallAssociationStatus" id="@cdk_utils/iam.fms.FmsActions.property.actionGetThirdPartyFirewallAssociationStatus"></a>

```typescript
public readonly actionGetThirdPartyFirewallAssociationStatus: string;
```

- *Type:* string

[Read] fms:GetThirdPartyFirewallAssociationStatus.

---

##### `actionGetViolationDetails`<sup>Required</sup> <a name="actionGetViolationDetails" id="@cdk_utils/iam.fms.FmsActions.property.actionGetViolationDetails"></a>

```typescript
public readonly actionGetViolationDetails: string;
```

- *Type:* string

[Read] fms:GetViolationDetails.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.fms.FmsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.fms.FmsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.fms.FmsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.fms.FmsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.fms.FmsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAdminAccount`<sup>Required</sup> <a name="AssociateAdminAccount" id="@cdk_utils/iam.fms.FmsActions.property.AssociateAdminAccount"></a>

```typescript
public readonly AssociateAdminAccount: string;
```

- *Type:* string

[Write] fms:AssociateAdminAccount.

---

##### `AssociateThirdPartyFirewall`<sup>Required</sup> <a name="AssociateThirdPartyFirewall" id="@cdk_utils/iam.fms.FmsActions.property.AssociateThirdPartyFirewall"></a>

```typescript
public readonly AssociateThirdPartyFirewall: string;
```

- *Type:* string

[Write] fms:AssociateThirdPartyFirewall.

---

##### `BatchAssociateResource`<sup>Required</sup> <a name="BatchAssociateResource" id="@cdk_utils/iam.fms.FmsActions.property.BatchAssociateResource"></a>

```typescript
public readonly BatchAssociateResource: string;
```

- *Type:* string

[Write] fms:BatchAssociateResource.

---

##### `BatchDisassociateResource`<sup>Required</sup> <a name="BatchDisassociateResource" id="@cdk_utils/iam.fms.FmsActions.property.BatchDisassociateResource"></a>

```typescript
public readonly BatchDisassociateResource: string;
```

- *Type:* string

[Write] fms:BatchDisassociateResource.

---

##### `DeleteAppsList`<sup>Required</sup> <a name="DeleteAppsList" id="@cdk_utils/iam.fms.FmsActions.property.DeleteAppsList"></a>

```typescript
public readonly DeleteAppsList: string;
```

- *Type:* string

[Write] fms:DeleteAppsList.

---

##### `DeleteNotificationChannel`<sup>Required</sup> <a name="DeleteNotificationChannel" id="@cdk_utils/iam.fms.FmsActions.property.DeleteNotificationChannel"></a>

```typescript
public readonly DeleteNotificationChannel: string;
```

- *Type:* string

[Write] fms:DeleteNotificationChannel.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.fms.FmsActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[Write] fms:DeletePolicy.

---

##### `DeleteProtocolsList`<sup>Required</sup> <a name="DeleteProtocolsList" id="@cdk_utils/iam.fms.FmsActions.property.DeleteProtocolsList"></a>

```typescript
public readonly DeleteProtocolsList: string;
```

- *Type:* string

[Write] fms:DeleteProtocolsList.

---

##### `DeleteResourceSet`<sup>Required</sup> <a name="DeleteResourceSet" id="@cdk_utils/iam.fms.FmsActions.property.DeleteResourceSet"></a>

```typescript
public readonly DeleteResourceSet: string;
```

- *Type:* string

[Write] fms:DeleteResourceSet.

---

##### `DisassociateAdminAccount`<sup>Required</sup> <a name="DisassociateAdminAccount" id="@cdk_utils/iam.fms.FmsActions.property.DisassociateAdminAccount"></a>

```typescript
public readonly DisassociateAdminAccount: string;
```

- *Type:* string

[Write] fms:DisassociateAdminAccount.

---

##### `DisassociateThirdPartyFirewall`<sup>Required</sup> <a name="DisassociateThirdPartyFirewall" id="@cdk_utils/iam.fms.FmsActions.property.DisassociateThirdPartyFirewall"></a>

```typescript
public readonly DisassociateThirdPartyFirewall: string;
```

- *Type:* string

[Write] fms:DisassociateThirdPartyFirewall.

---

##### `ListAdminAccountsForOrganization`<sup>Required</sup> <a name="ListAdminAccountsForOrganization" id="@cdk_utils/iam.fms.FmsActions.property.ListAdminAccountsForOrganization"></a>

```typescript
public readonly ListAdminAccountsForOrganization: string;
```

- *Type:* string

[List] fms:ListAdminAccountsForOrganization.

---

##### `ListAdminsManagingAccount`<sup>Required</sup> <a name="ListAdminsManagingAccount" id="@cdk_utils/iam.fms.FmsActions.property.ListAdminsManagingAccount"></a>

```typescript
public readonly ListAdminsManagingAccount: string;
```

- *Type:* string

[List] fms:ListAdminsManagingAccount.

---

##### `ListAppsLists`<sup>Required</sup> <a name="ListAppsLists" id="@cdk_utils/iam.fms.FmsActions.property.ListAppsLists"></a>

```typescript
public readonly ListAppsLists: string;
```

- *Type:* string

[List] fms:ListAppsLists.

---

##### `ListComplianceStatus`<sup>Required</sup> <a name="ListComplianceStatus" id="@cdk_utils/iam.fms.FmsActions.property.ListComplianceStatus"></a>

```typescript
public readonly ListComplianceStatus: string;
```

- *Type:* string

[List] fms:ListComplianceStatus.

---

##### `ListDiscoveredResources`<sup>Required</sup> <a name="ListDiscoveredResources" id="@cdk_utils/iam.fms.FmsActions.property.ListDiscoveredResources"></a>

```typescript
public readonly ListDiscoveredResources: string;
```

- *Type:* string

[List] fms:ListDiscoveredResources.

---

##### `ListMemberAccounts`<sup>Required</sup> <a name="ListMemberAccounts" id="@cdk_utils/iam.fms.FmsActions.property.ListMemberAccounts"></a>

```typescript
public readonly ListMemberAccounts: string;
```

- *Type:* string

[List] fms:ListMemberAccounts.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.fms.FmsActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[List] fms:ListPolicies.

---

##### `ListProtocolsLists`<sup>Required</sup> <a name="ListProtocolsLists" id="@cdk_utils/iam.fms.FmsActions.property.ListProtocolsLists"></a>

```typescript
public readonly ListProtocolsLists: string;
```

- *Type:* string

[List] fms:ListProtocolsLists.

---

##### `ListResourceSetResources`<sup>Required</sup> <a name="ListResourceSetResources" id="@cdk_utils/iam.fms.FmsActions.property.ListResourceSetResources"></a>

```typescript
public readonly ListResourceSetResources: string;
```

- *Type:* string

[List] fms:ListResourceSetResources.

---

##### `ListResourceSets`<sup>Required</sup> <a name="ListResourceSets" id="@cdk_utils/iam.fms.FmsActions.property.ListResourceSets"></a>

```typescript
public readonly ListResourceSets: string;
```

- *Type:* string

[List] fms:ListResourceSets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.fms.FmsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] fms:ListTagsForResource.

---

##### `ListThirdPartyFirewallFirewallPolicies`<sup>Required</sup> <a name="ListThirdPartyFirewallFirewallPolicies" id="@cdk_utils/iam.fms.FmsActions.property.ListThirdPartyFirewallFirewallPolicies"></a>

```typescript
public readonly ListThirdPartyFirewallFirewallPolicies: string;
```

- *Type:* string

[List] fms:ListThirdPartyFirewallFirewallPolicies.

---

##### `PutAdminAccount`<sup>Required</sup> <a name="PutAdminAccount" id="@cdk_utils/iam.fms.FmsActions.property.PutAdminAccount"></a>

```typescript
public readonly PutAdminAccount: string;
```

- *Type:* string

[Write] fms:PutAdminAccount.

---

##### `PutAppsList`<sup>Required</sup> <a name="PutAppsList" id="@cdk_utils/iam.fms.FmsActions.property.PutAppsList"></a>

```typescript
public readonly PutAppsList: string;
```

- *Type:* string

[Write] fms:PutAppsList.

---

##### `PutNotificationChannel`<sup>Required</sup> <a name="PutNotificationChannel" id="@cdk_utils/iam.fms.FmsActions.property.PutNotificationChannel"></a>

```typescript
public readonly PutNotificationChannel: string;
```

- *Type:* string

[Write] fms:PutNotificationChannel.

---

##### `PutPolicy`<sup>Required</sup> <a name="PutPolicy" id="@cdk_utils/iam.fms.FmsActions.property.PutPolicy"></a>

```typescript
public readonly PutPolicy: string;
```

- *Type:* string

[Write] fms:PutPolicy.

---

##### `PutProtocolsList`<sup>Required</sup> <a name="PutProtocolsList" id="@cdk_utils/iam.fms.FmsActions.property.PutProtocolsList"></a>

```typescript
public readonly PutProtocolsList: string;
```

- *Type:* string

[Write] fms:PutProtocolsList.

---

##### `PutResourceSet`<sup>Required</sup> <a name="PutResourceSet" id="@cdk_utils/iam.fms.FmsActions.property.PutResourceSet"></a>

```typescript
public readonly PutResourceSet: string;
```

- *Type:* string

[Write] fms:PutResourceSet.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.fms.FmsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.fms.FmsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] fms:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.fms.FmsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] fms:UntagResource.

---

### FmsConditions <a name="FmsConditions" id="@cdk_utils/iam.fms.FmsConditions"></a>

Condition key constants and builders for fms.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fms.FmsConditions.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

new fms.FmsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.fms.FmsConditions.requestTag"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fms.FmsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.fms.FmsConditions.resourceTag"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fms.FmsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.fms.FmsConditions.tagKeys"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.fms.FmsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.DeletePolicyConditionKeys">DeletePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePolicy action. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.DeleteResourceSetConditionKeys">DeleteResourceSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourceSet action. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.PutAppsListConditionKeys">PutAppsListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAppsList action. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.PutPolicyConditionKeys">PutPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutPolicy action. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.PutProtocolsListConditionKeys">PutProtocolsListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutProtocolsList action. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.PutResourceSetConditionKeys">PutResourceSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutResourceSet action. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.fms.FmsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.fms.FmsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.fms.FmsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.fms.FmsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `DeletePolicyConditionKeys`<sup>Required</sup> <a name="DeletePolicyConditionKeys" id="@cdk_utils/iam.fms.FmsConditions.property.DeletePolicyConditionKeys"></a>

```typescript
public readonly DeletePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePolicy action.

---

##### `DeleteResourceSetConditionKeys`<sup>Required</sup> <a name="DeleteResourceSetConditionKeys" id="@cdk_utils/iam.fms.FmsConditions.property.DeleteResourceSetConditionKeys"></a>

```typescript
public readonly DeleteResourceSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourceSet action.

---

##### `PutAppsListConditionKeys`<sup>Required</sup> <a name="PutAppsListConditionKeys" id="@cdk_utils/iam.fms.FmsConditions.property.PutAppsListConditionKeys"></a>

```typescript
public readonly PutAppsListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAppsList action.

---

##### `PutPolicyConditionKeys`<sup>Required</sup> <a name="PutPolicyConditionKeys" id="@cdk_utils/iam.fms.FmsConditions.property.PutPolicyConditionKeys"></a>

```typescript
public readonly PutPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutPolicy action.

---

##### `PutProtocolsListConditionKeys`<sup>Required</sup> <a name="PutProtocolsListConditionKeys" id="@cdk_utils/iam.fms.FmsConditions.property.PutProtocolsListConditionKeys"></a>

```typescript
public readonly PutProtocolsListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutProtocolsList action.

---

##### `PutResourceSetConditionKeys`<sup>Required</sup> <a name="PutResourceSetConditionKeys" id="@cdk_utils/iam.fms.FmsConditions.property.PutResourceSetConditionKeys"></a>

```typescript
public readonly PutResourceSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutResourceSet action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.fms.FmsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.fms.FmsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### FmsOperations <a name="FmsOperations" id="@cdk_utils/iam.fms.FmsOperations"></a>

API operation to required IAM actions mapping for fms.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fms.FmsOperations.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

new fms.FmsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.AssociateAdminAccount">AssociateAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the AssociateAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.AssociateThirdPartyFirewall">AssociateThirdPartyFirewall</a></code> | <code>string[]</code> | IAM actions required for the AssociateThirdPartyFirewall API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.BatchAssociateResource">BatchAssociateResource</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateResource API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.BatchDisassociateResource">BatchDisassociateResource</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateResource API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.DeleteAppsList">DeleteAppsList</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppsList API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.DeleteNotificationChannel">DeleteNotificationChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotificationChannel API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.DeleteProtocolsList">DeleteProtocolsList</a></code> | <code>string[]</code> | IAM actions required for the DeleteProtocolsList API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.DeleteResourceSet">DeleteResourceSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceSet API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.DisassociateAdminAccount">DisassociateAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.DisassociateThirdPartyFirewall">DisassociateThirdPartyFirewall</a></code> | <code>string[]</code> | IAM actions required for the DisassociateThirdPartyFirewall API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListAdminAccountsForOrganization">ListAdminAccountsForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListAdminAccountsForOrganization API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListAdminsManagingAccount">ListAdminsManagingAccount</a></code> | <code>string[]</code> | IAM actions required for the ListAdminsManagingAccount API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListAppsLists">ListAppsLists</a></code> | <code>string[]</code> | IAM actions required for the ListAppsLists API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListComplianceStatus">ListComplianceStatus</a></code> | <code>string[]</code> | IAM actions required for the ListComplianceStatus API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListDiscoveredResources">ListDiscoveredResources</a></code> | <code>string[]</code> | IAM actions required for the ListDiscoveredResources API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListMemberAccounts">ListMemberAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListMemberAccounts API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListProtocolsLists">ListProtocolsLists</a></code> | <code>string[]</code> | IAM actions required for the ListProtocolsLists API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListResourceSetResources">ListResourceSetResources</a></code> | <code>string[]</code> | IAM actions required for the ListResourceSetResources API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListResourceSets">ListResourceSets</a></code> | <code>string[]</code> | IAM actions required for the ListResourceSets API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.ListThirdPartyFirewallFirewallPolicies">ListThirdPartyFirewallFirewallPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListThirdPartyFirewallFirewallPolicies API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetAdminAccount">opGetAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the GetAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetAdminScope">opGetAdminScope</a></code> | <code>string[]</code> | IAM actions required for the GetAdminScope API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetAppsList">opGetAppsList</a></code> | <code>string[]</code> | IAM actions required for the GetAppsList API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetComplianceDetail">opGetComplianceDetail</a></code> | <code>string[]</code> | IAM actions required for the GetComplianceDetail API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetNotificationChannel">opGetNotificationChannel</a></code> | <code>string[]</code> | IAM actions required for the GetNotificationChannel API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetProtectionStatus">opGetProtectionStatus</a></code> | <code>string[]</code> | IAM actions required for the GetProtectionStatus API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetProtocolsList">opGetProtocolsList</a></code> | <code>string[]</code> | IAM actions required for the GetProtocolsList API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetResourceSet">opGetResourceSet</a></code> | <code>string[]</code> | IAM actions required for the GetResourceSet API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetThirdPartyFirewallAssociationStatus">opGetThirdPartyFirewallAssociationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetThirdPartyFirewallAssociationStatus API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.opGetViolationDetails">opGetViolationDetails</a></code> | <code>string[]</code> | IAM actions required for the GetViolationDetails API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.PutAdminAccount">PutAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the PutAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.PutAppsList">PutAppsList</a></code> | <code>string[]</code> | IAM actions required for the PutAppsList API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.PutNotificationChannel">PutNotificationChannel</a></code> | <code>string[]</code> | IAM actions required for the PutNotificationChannel API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.PutPolicy">PutPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutPolicy API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.PutProtocolsList">PutProtocolsList</a></code> | <code>string[]</code> | IAM actions required for the PutProtocolsList API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.PutResourceSet">PutResourceSet</a></code> | <code>string[]</code> | IAM actions required for the PutResourceSet API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.fms.FmsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `AssociateAdminAccount`<sup>Required</sup> <a name="AssociateAdminAccount" id="@cdk_utils/iam.fms.FmsOperations.property.AssociateAdminAccount"></a>

```typescript
public readonly AssociateAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAdminAccount API call.

---

##### `AssociateThirdPartyFirewall`<sup>Required</sup> <a name="AssociateThirdPartyFirewall" id="@cdk_utils/iam.fms.FmsOperations.property.AssociateThirdPartyFirewall"></a>

```typescript
public readonly AssociateThirdPartyFirewall: string[];
```

- *Type:* string[]

IAM actions required for the AssociateThirdPartyFirewall API call.

---

##### `BatchAssociateResource`<sup>Required</sup> <a name="BatchAssociateResource" id="@cdk_utils/iam.fms.FmsOperations.property.BatchAssociateResource"></a>

```typescript
public readonly BatchAssociateResource: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateResource API call.

---

##### `BatchDisassociateResource`<sup>Required</sup> <a name="BatchDisassociateResource" id="@cdk_utils/iam.fms.FmsOperations.property.BatchDisassociateResource"></a>

```typescript
public readonly BatchDisassociateResource: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateResource API call.

---

##### `DeleteAppsList`<sup>Required</sup> <a name="DeleteAppsList" id="@cdk_utils/iam.fms.FmsOperations.property.DeleteAppsList"></a>

```typescript
public readonly DeleteAppsList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppsList API call.

---

##### `DeleteNotificationChannel`<sup>Required</sup> <a name="DeleteNotificationChannel" id="@cdk_utils/iam.fms.FmsOperations.property.DeleteNotificationChannel"></a>

```typescript
public readonly DeleteNotificationChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotificationChannel API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.fms.FmsOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeleteProtocolsList`<sup>Required</sup> <a name="DeleteProtocolsList" id="@cdk_utils/iam.fms.FmsOperations.property.DeleteProtocolsList"></a>

```typescript
public readonly DeleteProtocolsList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProtocolsList API call.

---

##### `DeleteResourceSet`<sup>Required</sup> <a name="DeleteResourceSet" id="@cdk_utils/iam.fms.FmsOperations.property.DeleteResourceSet"></a>

```typescript
public readonly DeleteResourceSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceSet API call.

---

##### `DisassociateAdminAccount`<sup>Required</sup> <a name="DisassociateAdminAccount" id="@cdk_utils/iam.fms.FmsOperations.property.DisassociateAdminAccount"></a>

```typescript
public readonly DisassociateAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAdminAccount API call.

---

##### `DisassociateThirdPartyFirewall`<sup>Required</sup> <a name="DisassociateThirdPartyFirewall" id="@cdk_utils/iam.fms.FmsOperations.property.DisassociateThirdPartyFirewall"></a>

```typescript
public readonly DisassociateThirdPartyFirewall: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateThirdPartyFirewall API call.

---

##### `ListAdminAccountsForOrganization`<sup>Required</sup> <a name="ListAdminAccountsForOrganization" id="@cdk_utils/iam.fms.FmsOperations.property.ListAdminAccountsForOrganization"></a>

```typescript
public readonly ListAdminAccountsForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListAdminAccountsForOrganization API call.

---

##### `ListAdminsManagingAccount`<sup>Required</sup> <a name="ListAdminsManagingAccount" id="@cdk_utils/iam.fms.FmsOperations.property.ListAdminsManagingAccount"></a>

```typescript
public readonly ListAdminsManagingAccount: string[];
```

- *Type:* string[]

IAM actions required for the ListAdminsManagingAccount API call.

---

##### `ListAppsLists`<sup>Required</sup> <a name="ListAppsLists" id="@cdk_utils/iam.fms.FmsOperations.property.ListAppsLists"></a>

```typescript
public readonly ListAppsLists: string[];
```

- *Type:* string[]

IAM actions required for the ListAppsLists API call.

---

##### `ListComplianceStatus`<sup>Required</sup> <a name="ListComplianceStatus" id="@cdk_utils/iam.fms.FmsOperations.property.ListComplianceStatus"></a>

```typescript
public readonly ListComplianceStatus: string[];
```

- *Type:* string[]

IAM actions required for the ListComplianceStatus API call.

---

##### `ListDiscoveredResources`<sup>Required</sup> <a name="ListDiscoveredResources" id="@cdk_utils/iam.fms.FmsOperations.property.ListDiscoveredResources"></a>

```typescript
public readonly ListDiscoveredResources: string[];
```

- *Type:* string[]

IAM actions required for the ListDiscoveredResources API call.

---

##### `ListMemberAccounts`<sup>Required</sup> <a name="ListMemberAccounts" id="@cdk_utils/iam.fms.FmsOperations.property.ListMemberAccounts"></a>

```typescript
public readonly ListMemberAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListMemberAccounts API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.fms.FmsOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListProtocolsLists`<sup>Required</sup> <a name="ListProtocolsLists" id="@cdk_utils/iam.fms.FmsOperations.property.ListProtocolsLists"></a>

```typescript
public readonly ListProtocolsLists: string[];
```

- *Type:* string[]

IAM actions required for the ListProtocolsLists API call.

---

##### `ListResourceSetResources`<sup>Required</sup> <a name="ListResourceSetResources" id="@cdk_utils/iam.fms.FmsOperations.property.ListResourceSetResources"></a>

```typescript
public readonly ListResourceSetResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceSetResources API call.

---

##### `ListResourceSets`<sup>Required</sup> <a name="ListResourceSets" id="@cdk_utils/iam.fms.FmsOperations.property.ListResourceSets"></a>

```typescript
public readonly ListResourceSets: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceSets API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.fms.FmsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListThirdPartyFirewallFirewallPolicies`<sup>Required</sup> <a name="ListThirdPartyFirewallFirewallPolicies" id="@cdk_utils/iam.fms.FmsOperations.property.ListThirdPartyFirewallFirewallPolicies"></a>

```typescript
public readonly ListThirdPartyFirewallFirewallPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListThirdPartyFirewallFirewallPolicies API call.

---

##### `opGetAdminAccount`<sup>Required</sup> <a name="opGetAdminAccount" id="@cdk_utils/iam.fms.FmsOperations.property.opGetAdminAccount"></a>

```typescript
public readonly opGetAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetAdminAccount API call.

---

##### `opGetAdminScope`<sup>Required</sup> <a name="opGetAdminScope" id="@cdk_utils/iam.fms.FmsOperations.property.opGetAdminScope"></a>

```typescript
public readonly opGetAdminScope: string[];
```

- *Type:* string[]

IAM actions required for the GetAdminScope API call.

---

##### `opGetAppsList`<sup>Required</sup> <a name="opGetAppsList" id="@cdk_utils/iam.fms.FmsOperations.property.opGetAppsList"></a>

```typescript
public readonly opGetAppsList: string[];
```

- *Type:* string[]

IAM actions required for the GetAppsList API call.

---

##### `opGetComplianceDetail`<sup>Required</sup> <a name="opGetComplianceDetail" id="@cdk_utils/iam.fms.FmsOperations.property.opGetComplianceDetail"></a>

```typescript
public readonly opGetComplianceDetail: string[];
```

- *Type:* string[]

IAM actions required for the GetComplianceDetail API call.

---

##### `opGetNotificationChannel`<sup>Required</sup> <a name="opGetNotificationChannel" id="@cdk_utils/iam.fms.FmsOperations.property.opGetNotificationChannel"></a>

```typescript
public readonly opGetNotificationChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetNotificationChannel API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.fms.FmsOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetProtectionStatus`<sup>Required</sup> <a name="opGetProtectionStatus" id="@cdk_utils/iam.fms.FmsOperations.property.opGetProtectionStatus"></a>

```typescript
public readonly opGetProtectionStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetProtectionStatus API call.

---

##### `opGetProtocolsList`<sup>Required</sup> <a name="opGetProtocolsList" id="@cdk_utils/iam.fms.FmsOperations.property.opGetProtocolsList"></a>

```typescript
public readonly opGetProtocolsList: string[];
```

- *Type:* string[]

IAM actions required for the GetProtocolsList API call.

---

##### `opGetResourceSet`<sup>Required</sup> <a name="opGetResourceSet" id="@cdk_utils/iam.fms.FmsOperations.property.opGetResourceSet"></a>

```typescript
public readonly opGetResourceSet: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceSet API call.

---

##### `opGetThirdPartyFirewallAssociationStatus`<sup>Required</sup> <a name="opGetThirdPartyFirewallAssociationStatus" id="@cdk_utils/iam.fms.FmsOperations.property.opGetThirdPartyFirewallAssociationStatus"></a>

```typescript
public readonly opGetThirdPartyFirewallAssociationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetThirdPartyFirewallAssociationStatus API call.

---

##### `opGetViolationDetails`<sup>Required</sup> <a name="opGetViolationDetails" id="@cdk_utils/iam.fms.FmsOperations.property.opGetViolationDetails"></a>

```typescript
public readonly opGetViolationDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetViolationDetails API call.

---

##### `PutAdminAccount`<sup>Required</sup> <a name="PutAdminAccount" id="@cdk_utils/iam.fms.FmsOperations.property.PutAdminAccount"></a>

```typescript
public readonly PutAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the PutAdminAccount API call.

---

##### `PutAppsList`<sup>Required</sup> <a name="PutAppsList" id="@cdk_utils/iam.fms.FmsOperations.property.PutAppsList"></a>

```typescript
public readonly PutAppsList: string[];
```

- *Type:* string[]

IAM actions required for the PutAppsList API call.

---

##### `PutNotificationChannel`<sup>Required</sup> <a name="PutNotificationChannel" id="@cdk_utils/iam.fms.FmsOperations.property.PutNotificationChannel"></a>

```typescript
public readonly PutNotificationChannel: string[];
```

- *Type:* string[]

IAM actions required for the PutNotificationChannel API call.

---

##### `PutPolicy`<sup>Required</sup> <a name="PutPolicy" id="@cdk_utils/iam.fms.FmsOperations.property.PutPolicy"></a>

```typescript
public readonly PutPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutPolicy API call.

---

##### `PutProtocolsList`<sup>Required</sup> <a name="PutProtocolsList" id="@cdk_utils/iam.fms.FmsOperations.property.PutProtocolsList"></a>

```typescript
public readonly PutProtocolsList: string[];
```

- *Type:* string[]

IAM actions required for the PutProtocolsList API call.

---

##### `PutResourceSet`<sup>Required</sup> <a name="PutResourceSet" id="@cdk_utils/iam.fms.FmsOperations.property.PutResourceSet"></a>

```typescript
public readonly PutResourceSet: string[];
```

- *Type:* string[]

IAM actions required for the PutResourceSet API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.fms.FmsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.fms.FmsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### FmsResources <a name="FmsResources" id="@cdk_utils/iam.fms.FmsResources"></a>

ARN builders, validators, and parsers for fms resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fms.FmsResources.Initializer"></a>

```typescript
import { fms } from '@cdk_utils/iam'

new fms.FmsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.applicationsList">applicationsList</a></code> | Builds an ARN for the applications-list resource. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.isValidApplicationsListArn">isValidApplicationsListArn</a></code> | Validates whether a string is a valid ARN for the applications-list resource. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.isValidPolicyArn">isValidPolicyArn</a></code> | Validates whether a string is a valid ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.isValidProtocolsListArn">isValidProtocolsListArn</a></code> | Validates whether a string is a valid ARN for the protocols-list resource. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.isValidResourceSetArn">isValidResourceSetArn</a></code> | Validates whether a string is a valid ARN for the resource-set resource. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.parseApplicationsListArn">parseApplicationsListArn</a></code> | Parses a applications-list ARN into its components. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.parsePolicyArn">parsePolicyArn</a></code> | Parses a policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.parseProtocolsListArn">parseProtocolsListArn</a></code> | Parses a protocols-list ARN into its components. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.parseResourceSetArn">parseResourceSetArn</a></code> | Parses a resource-set ARN into its components. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.policy">policy</a></code> | Builds an ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.protocolsList">protocolsList</a></code> | Builds an ARN for the protocols-list resource. |
| <code><a href="#@cdk_utils/iam.fms.FmsResources.resourceSet">resourceSet</a></code> | Builds an ARN for the resource-set resource. |

---

##### `applicationsList` <a name="applicationsList" id="@cdk_utils/iam.fms.FmsResources.applicationsList"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.applicationsList(props: FmsApplicationsListArnProps)
```

Builds an ARN for the applications-list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fms.FmsResources.applicationsList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fms.FmsApplicationsListArnProps">FmsApplicationsListArnProps</a>

---

##### `isValidApplicationsListArn` <a name="isValidApplicationsListArn" id="@cdk_utils/iam.fms.FmsResources.isValidApplicationsListArn"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.isValidApplicationsListArn(arn: string)
```

Validates whether a string is a valid ARN for the applications-list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fms.FmsResources.isValidApplicationsListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyArn` <a name="isValidPolicyArn" id="@cdk_utils/iam.fms.FmsResources.isValidPolicyArn"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.isValidPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fms.FmsResources.isValidPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProtocolsListArn` <a name="isValidProtocolsListArn" id="@cdk_utils/iam.fms.FmsResources.isValidProtocolsListArn"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.isValidProtocolsListArn(arn: string)
```

Validates whether a string is a valid ARN for the protocols-list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fms.FmsResources.isValidProtocolsListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceSetArn` <a name="isValidResourceSetArn" id="@cdk_utils/iam.fms.FmsResources.isValidResourceSetArn"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.isValidResourceSetArn(arn: string)
```

Validates whether a string is a valid ARN for the resource-set resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fms.FmsResources.isValidResourceSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationsListArn` <a name="parseApplicationsListArn" id="@cdk_utils/iam.fms.FmsResources.parseApplicationsListArn"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.parseApplicationsListArn(arn: string)
```

Parses a applications-list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fms.FmsResources.parseApplicationsListArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyArn` <a name="parsePolicyArn" id="@cdk_utils/iam.fms.FmsResources.parsePolicyArn"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.parsePolicyArn(arn: string)
```

Parses a policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fms.FmsResources.parsePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProtocolsListArn` <a name="parseProtocolsListArn" id="@cdk_utils/iam.fms.FmsResources.parseProtocolsListArn"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.parseProtocolsListArn(arn: string)
```

Parses a protocols-list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fms.FmsResources.parseProtocolsListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceSetArn` <a name="parseResourceSetArn" id="@cdk_utils/iam.fms.FmsResources.parseResourceSetArn"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.parseResourceSetArn(arn: string)
```

Parses a resource-set ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fms.FmsResources.parseResourceSetArn.parameter.arn"></a>

- *Type:* string

---

##### `policy` <a name="policy" id="@cdk_utils/iam.fms.FmsResources.policy"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.policy(props: FmsPolicyArnProps)
```

Builds an ARN for the policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fms.FmsResources.policy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fms.FmsPolicyArnProps">FmsPolicyArnProps</a>

---

##### `protocolsList` <a name="protocolsList" id="@cdk_utils/iam.fms.FmsResources.protocolsList"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.protocolsList(props: FmsProtocolsListArnProps)
```

Builds an ARN for the protocols-list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fms.FmsResources.protocolsList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fms.FmsProtocolsListArnProps">FmsProtocolsListArnProps</a>

---

##### `resourceSet` <a name="resourceSet" id="@cdk_utils/iam.fms.FmsResources.resourceSet"></a>

```typescript
import { fms } from '@cdk_utils/iam'

fms.FmsResources.resourceSet(props: FmsResourceSetArnProps)
```

Builds an ARN for the resource-set resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fms.FmsResources.resourceSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fms.FmsResourceSetArnProps">FmsResourceSetArnProps</a>

---




