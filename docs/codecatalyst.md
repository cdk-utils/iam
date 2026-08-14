# `codecatalyst` Submodule <a name="`codecatalyst` Submodule" id="@cdk_utils/iam.codecatalyst"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeCatalystConnectionsArnComponents <a name="CodeCatalystConnectionsArnComponents" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents"></a>

Parsed components of a connections ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

const codeCatalystConnectionsArnComponents: codecatalyst.CodeCatalystConnectionsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeCatalystConnectionsArnProps <a name="CodeCatalystConnectionsArnProps" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps"></a>

Properties for building a connections ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

const codeCatalystConnectionsArnProps: codecatalyst.CodeCatalystConnectionsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.property.connectionId">connectionId</a></code> | <code>string</code> | The ConnectionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

The ConnectionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeCatalystIdentityCenterApplicationsArnComponents <a name="CodeCatalystIdentityCenterApplicationsArnComponents" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents"></a>

Parsed components of a identity-center-applications ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

const codeCatalystIdentityCenterApplicationsArnComponents: codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.property.identityCenterApplicationId">identityCenterApplicationId</a></code> | <code>string</code> | The IdentityCenterApplicationId component. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identityCenterApplicationId`<sup>Required</sup> <a name="identityCenterApplicationId" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.property.identityCenterApplicationId"></a>

```typescript
public readonly identityCenterApplicationId: string;
```

- *Type:* string

The IdentityCenterApplicationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodeCatalystIdentityCenterApplicationsArnProps <a name="CodeCatalystIdentityCenterApplicationsArnProps" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps"></a>

Properties for building a identity-center-applications ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

const codeCatalystIdentityCenterApplicationsArnProps: codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.property.identityCenterApplicationId">identityCenterApplicationId</a></code> | <code>string</code> | The IdentityCenterApplicationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identityCenterApplicationId`<sup>Required</sup> <a name="identityCenterApplicationId" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.property.identityCenterApplicationId"></a>

```typescript
public readonly identityCenterApplicationId: string;
```

- *Type:* string

The IdentityCenterApplicationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeCatalystProjectArnComponents <a name="CodeCatalystProjectArnComponents" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents"></a>

Parsed components of a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

const codeCatalystProjectArnComponents: codecatalyst.CodeCatalystProjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.projectId">projectId</a></code> | <code>string</code> | The ProjectId component. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.spaceId">spaceId</a></code> | <code>string</code> | The SpaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ProjectId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnComponents.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The SpaceId component.

---

### CodeCatalystProjectArnProps <a name="CodeCatalystProjectArnProps" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps"></a>

Properties for building a project ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

const codeCatalystProjectArnProps: codecatalyst.CodeCatalystProjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.projectId">projectId</a></code> | <code>string</code> | The ProjectId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.spaceId">spaceId</a></code> | <code>string</code> | The SpaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ProjectId component of the ARN.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The SpaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CodeCatalystSpaceArnComponents <a name="CodeCatalystSpaceArnComponents" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents"></a>

Parsed components of a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

const codeCatalystSpaceArnComponents: codecatalyst.CodeCatalystSpaceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.property.spaceId">spaceId</a></code> | <code>string</code> | The SpaceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnComponents.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The SpaceId component.

---

### CodeCatalystSpaceArnProps <a name="CodeCatalystSpaceArnProps" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps"></a>

Properties for building a space ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

const codeCatalystSpaceArnProps: codecatalyst.CodeCatalystSpaceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.property.spaceId">spaceId</a></code> | <code>string</code> | The SpaceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

The SpaceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeCatalystActions <a name="CodeCatalystActions" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions"></a>

IAM action constants for the codecatalyst service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

new codecatalyst.CodeCatalystActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AcceptConnection">AcceptConnection</a></code> | <code>string</code> | [Write] codecatalyst:AcceptConnection. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.actionGetBillingAuthorization">actionGetBillingAuthorization</a></code> | <code>string</code> | [Read] codecatalyst:GetBillingAuthorization. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] codecatalyst:GetConnection. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.actionGetIdentityCenterApplication">actionGetIdentityCenterApplication</a></code> | <code>string</code> | [Read] codecatalyst:GetIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.actionGetPendingConnection">actionGetPendingConnection</a></code> | <code>string</code> | [Read] codecatalyst:GetPendingConnection. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AssociateIamRoleToConnection">AssociateIamRoleToConnection</a></code> | <code>string</code> | [Write] codecatalyst:AssociateIamRoleToConnection. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AssociateIdentityCenterApplicationToSpace">AssociateIdentityCenterApplicationToSpace</a></code> | <code>string</code> | [Write] codecatalyst:AssociateIdentityCenterApplicationToSpace. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AssociateIdentityToIdentityCenterApplication">AssociateIdentityToIdentityCenterApplication</a></code> | <code>string</code> | [Write] codecatalyst:AssociateIdentityToIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.BatchAssociateIdentitiesToIdentityCenterApplication">BatchAssociateIdentitiesToIdentityCenterApplication</a></code> | <code>string</code> | [Write] codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.BatchDisassociateIdentitiesFromIdentityCenterApplication">BatchDisassociateIdentitiesFromIdentityCenterApplication</a></code> | <code>string</code> | [Write] codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.CreateIdentityCenterApplication">CreateIdentityCenterApplication</a></code> | <code>string</code> | [Write] codecatalyst:CreateIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.CreateSpace">CreateSpace</a></code> | <code>string</code> | [Write] codecatalyst:CreateSpace. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.CreateSpaceAdminRoleAssignment">CreateSpaceAdminRoleAssignment</a></code> | <code>string</code> | [Write] codecatalyst:CreateSpaceAdminRoleAssignment. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] codecatalyst:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DeleteIdentityCenterApplication">DeleteIdentityCenterApplication</a></code> | <code>string</code> | [Write] codecatalyst:DeleteIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DisassociateIamRoleFromConnection">DisassociateIamRoleFromConnection</a></code> | <code>string</code> | [Write] codecatalyst:DisassociateIamRoleFromConnection. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DisassociateIdentityCenterApplicationFromSpace">DisassociateIdentityCenterApplicationFromSpace</a></code> | <code>string</code> | [Write] codecatalyst:DisassociateIdentityCenterApplicationFromSpace. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DisassociateIdentityFromIdentityCenterApplication">DisassociateIdentityFromIdentityCenterApplication</a></code> | <code>string</code> | [Write] codecatalyst:DisassociateIdentityFromIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] codecatalyst:ListConnections. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListIamRolesForConnection">ListIamRolesForConnection</a></code> | <code>string</code> | [List] codecatalyst:ListIamRolesForConnection. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListIdentityCenterApplications">ListIdentityCenterApplications</a></code> | <code>string</code> | [List] codecatalyst:ListIdentityCenterApplications. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListIdentityCenterApplicationsForSpace">ListIdentityCenterApplicationsForSpace</a></code> | <code>string</code> | [List] codecatalyst:ListIdentityCenterApplicationsForSpace. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListSpacesForIdentityCenterApplication">ListSpacesForIdentityCenterApplication</a></code> | <code>string</code> | [List] codecatalyst:ListSpacesForIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] codecatalyst:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.PutBillingAuthorization">PutBillingAuthorization</a></code> | <code>string</code> | [Write] codecatalyst:PutBillingAuthorization. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.RejectConnection">RejectConnection</a></code> | <code>string</code> | [Write] codecatalyst:RejectConnection. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.SynchronizeIdentityCenterApplication">SynchronizeIdentityCenterApplication</a></code> | <code>string</code> | [Write] codecatalyst:SynchronizeIdentityCenterApplication. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codecatalyst:TagResource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codecatalyst:UntagResource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.UpdateIdentityCenterApplication">UpdateIdentityCenterApplication</a></code> | <code>string</code> | [Write] codecatalyst:UpdateIdentityCenterApplication. |

---

##### `AcceptConnection`<sup>Required</sup> <a name="AcceptConnection" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AcceptConnection"></a>

```typescript
public readonly AcceptConnection: string;
```

- *Type:* string

[Write] codecatalyst:AcceptConnection.

---

##### `actionGetBillingAuthorization`<sup>Required</sup> <a name="actionGetBillingAuthorization" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.actionGetBillingAuthorization"></a>

```typescript
public readonly actionGetBillingAuthorization: string;
```

- *Type:* string

[Read] codecatalyst:GetBillingAuthorization.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] codecatalyst:GetConnection.

---

##### `actionGetIdentityCenterApplication`<sup>Required</sup> <a name="actionGetIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.actionGetIdentityCenterApplication"></a>

```typescript
public readonly actionGetIdentityCenterApplication: string;
```

- *Type:* string

[Read] codecatalyst:GetIdentityCenterApplication.

---

##### `actionGetPendingConnection`<sup>Required</sup> <a name="actionGetPendingConnection" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.actionGetPendingConnection"></a>

```typescript
public readonly actionGetPendingConnection: string;
```

- *Type:* string

[Read] codecatalyst:GetPendingConnection.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateIamRoleToConnection`<sup>Required</sup> <a name="AssociateIamRoleToConnection" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AssociateIamRoleToConnection"></a>

```typescript
public readonly AssociateIamRoleToConnection: string;
```

- *Type:* string

[Write] codecatalyst:AssociateIamRoleToConnection.

---

##### `AssociateIdentityCenterApplicationToSpace`<sup>Required</sup> <a name="AssociateIdentityCenterApplicationToSpace" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AssociateIdentityCenterApplicationToSpace"></a>

```typescript
public readonly AssociateIdentityCenterApplicationToSpace: string;
```

- *Type:* string

[Write] codecatalyst:AssociateIdentityCenterApplicationToSpace.

---

##### `AssociateIdentityToIdentityCenterApplication`<sup>Required</sup> <a name="AssociateIdentityToIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.AssociateIdentityToIdentityCenterApplication"></a>

```typescript
public readonly AssociateIdentityToIdentityCenterApplication: string;
```

- *Type:* string

[Write] codecatalyst:AssociateIdentityToIdentityCenterApplication.

---

##### `BatchAssociateIdentitiesToIdentityCenterApplication`<sup>Required</sup> <a name="BatchAssociateIdentitiesToIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.BatchAssociateIdentitiesToIdentityCenterApplication"></a>

```typescript
public readonly BatchAssociateIdentitiesToIdentityCenterApplication: string;
```

- *Type:* string

[Write] codecatalyst:BatchAssociateIdentitiesToIdentityCenterApplication.

---

##### `BatchDisassociateIdentitiesFromIdentityCenterApplication`<sup>Required</sup> <a name="BatchDisassociateIdentitiesFromIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.BatchDisassociateIdentitiesFromIdentityCenterApplication"></a>

```typescript
public readonly BatchDisassociateIdentitiesFromIdentityCenterApplication: string;
```

- *Type:* string

[Write] codecatalyst:BatchDisassociateIdentitiesFromIdentityCenterApplication.

---

##### `CreateIdentityCenterApplication`<sup>Required</sup> <a name="CreateIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.CreateIdentityCenterApplication"></a>

```typescript
public readonly CreateIdentityCenterApplication: string;
```

- *Type:* string

[Write] codecatalyst:CreateIdentityCenterApplication.

---

##### `CreateSpace`<sup>Required</sup> <a name="CreateSpace" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.CreateSpace"></a>

```typescript
public readonly CreateSpace: string;
```

- *Type:* string

[Write] codecatalyst:CreateSpace.

---

##### `CreateSpaceAdminRoleAssignment`<sup>Required</sup> <a name="CreateSpaceAdminRoleAssignment" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.CreateSpaceAdminRoleAssignment"></a>

```typescript
public readonly CreateSpaceAdminRoleAssignment: string;
```

- *Type:* string

[Write] codecatalyst:CreateSpaceAdminRoleAssignment.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] codecatalyst:DeleteConnection.

---

##### `DeleteIdentityCenterApplication`<sup>Required</sup> <a name="DeleteIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DeleteIdentityCenterApplication"></a>

```typescript
public readonly DeleteIdentityCenterApplication: string;
```

- *Type:* string

[Write] codecatalyst:DeleteIdentityCenterApplication.

---

##### `DisassociateIamRoleFromConnection`<sup>Required</sup> <a name="DisassociateIamRoleFromConnection" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DisassociateIamRoleFromConnection"></a>

```typescript
public readonly DisassociateIamRoleFromConnection: string;
```

- *Type:* string

[Write] codecatalyst:DisassociateIamRoleFromConnection.

---

##### `DisassociateIdentityCenterApplicationFromSpace`<sup>Required</sup> <a name="DisassociateIdentityCenterApplicationFromSpace" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DisassociateIdentityCenterApplicationFromSpace"></a>

```typescript
public readonly DisassociateIdentityCenterApplicationFromSpace: string;
```

- *Type:* string

[Write] codecatalyst:DisassociateIdentityCenterApplicationFromSpace.

---

##### `DisassociateIdentityFromIdentityCenterApplication`<sup>Required</sup> <a name="DisassociateIdentityFromIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.DisassociateIdentityFromIdentityCenterApplication"></a>

```typescript
public readonly DisassociateIdentityFromIdentityCenterApplication: string;
```

- *Type:* string

[Write] codecatalyst:DisassociateIdentityFromIdentityCenterApplication.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] codecatalyst:ListConnections.

---

##### `ListIamRolesForConnection`<sup>Required</sup> <a name="ListIamRolesForConnection" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListIamRolesForConnection"></a>

```typescript
public readonly ListIamRolesForConnection: string;
```

- *Type:* string

[List] codecatalyst:ListIamRolesForConnection.

---

##### `ListIdentityCenterApplications`<sup>Required</sup> <a name="ListIdentityCenterApplications" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListIdentityCenterApplications"></a>

```typescript
public readonly ListIdentityCenterApplications: string;
```

- *Type:* string

[List] codecatalyst:ListIdentityCenterApplications.

---

##### `ListIdentityCenterApplicationsForSpace`<sup>Required</sup> <a name="ListIdentityCenterApplicationsForSpace" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListIdentityCenterApplicationsForSpace"></a>

```typescript
public readonly ListIdentityCenterApplicationsForSpace: string;
```

- *Type:* string

[List] codecatalyst:ListIdentityCenterApplicationsForSpace.

---

##### `ListSpacesForIdentityCenterApplication`<sup>Required</sup> <a name="ListSpacesForIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListSpacesForIdentityCenterApplication"></a>

```typescript
public readonly ListSpacesForIdentityCenterApplication: string;
```

- *Type:* string

[List] codecatalyst:ListSpacesForIdentityCenterApplication.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] codecatalyst:ListTagsForResource.

---

##### `PutBillingAuthorization`<sup>Required</sup> <a name="PutBillingAuthorization" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.PutBillingAuthorization"></a>

```typescript
public readonly PutBillingAuthorization: string;
```

- *Type:* string

[Write] codecatalyst:PutBillingAuthorization.

---

##### `RejectConnection`<sup>Required</sup> <a name="RejectConnection" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.RejectConnection"></a>

```typescript
public readonly RejectConnection: string;
```

- *Type:* string

[Write] codecatalyst:RejectConnection.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SynchronizeIdentityCenterApplication`<sup>Required</sup> <a name="SynchronizeIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.SynchronizeIdentityCenterApplication"></a>

```typescript
public readonly SynchronizeIdentityCenterApplication: string;
```

- *Type:* string

[Write] codecatalyst:SynchronizeIdentityCenterApplication.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codecatalyst:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codecatalyst:UntagResource.

---

##### `UpdateIdentityCenterApplication`<sup>Required</sup> <a name="UpdateIdentityCenterApplication" id="@cdk_utils/iam.codecatalyst.CodeCatalystActions.property.UpdateIdentityCenterApplication"></a>

```typescript
public readonly UpdateIdentityCenterApplication: string;
```

- *Type:* string

[Write] codecatalyst:UpdateIdentityCenterApplication.

---

### CodeCatalystConditions <a name="CodeCatalystConditions" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions"></a>

Condition key constants and builders for codecatalyst.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

new codecatalyst.CodeCatalystConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.requestTag"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.resourceTag"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.tagKeys"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AcceptConnectionConditionKeys">AcceptConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptConnection action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.actionGetBillingAuthorizationConditionKeys">actionGetBillingAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBillingAuthorization action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.actionGetConnectionConditionKeys">actionGetConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnection action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.actionGetIdentityCenterApplicationConditionKeys">actionGetIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AssociateIamRoleToConnectionConditionKeys">AssociateIamRoleToConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateIamRoleToConnection action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AssociateIdentityCenterApplicationToSpaceConditionKeys">AssociateIdentityCenterApplicationToSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateIdentityCenterApplicationToSpace action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AssociateIdentityToIdentityCenterApplicationConditionKeys">AssociateIdentityToIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateIdentityToIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.BatchAssociateIdentitiesToIdentityCenterApplicationConditionKeys">BatchAssociateIdentitiesToIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchAssociateIdentitiesToIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.BatchDisassociateIdentitiesFromIdentityCenterApplicationConditionKeys">BatchDisassociateIdentitiesFromIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchDisassociateIdentitiesFromIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.CreateIdentityCenterApplicationConditionKeys">CreateIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.CreateSpaceAdminRoleAssignmentConditionKeys">CreateSpaceAdminRoleAssignmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSpaceAdminRoleAssignment action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.CreateSpaceConditionKeys">CreateSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSpace action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DeleteConnectionConditionKeys">DeleteConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteConnection action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DeleteIdentityCenterApplicationConditionKeys">DeleteIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DisassociateIamRoleFromConnectionConditionKeys">DisassociateIamRoleFromConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateIamRoleFromConnection action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DisassociateIdentityCenterApplicationFromSpaceConditionKeys">DisassociateIdentityCenterApplicationFromSpaceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateIdentityCenterApplicationFromSpace action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DisassociateIdentityFromIdentityCenterApplicationConditionKeys">DisassociateIdentityFromIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateIdentityFromIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.ListIamRolesForConnectionConditionKeys">ListIamRolesForConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListIamRolesForConnection action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.ListSpacesForIdentityCenterApplicationConditionKeys">ListSpacesForIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSpacesForIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.PutBillingAuthorizationConditionKeys">PutBillingAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutBillingAuthorization action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.SynchronizeIdentityCenterApplicationConditionKeys">SynchronizeIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SynchronizeIdentityCenterApplication action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.UpdateIdentityCenterApplicationConditionKeys">UpdateIdentityCenterApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateIdentityCenterApplication action. |

---

##### `AcceptConnectionConditionKeys`<sup>Required</sup> <a name="AcceptConnectionConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AcceptConnectionConditionKeys"></a>

```typescript
public readonly AcceptConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptConnection action.

---

##### `actionGetBillingAuthorizationConditionKeys`<sup>Required</sup> <a name="actionGetBillingAuthorizationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.actionGetBillingAuthorizationConditionKeys"></a>

```typescript
public readonly actionGetBillingAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBillingAuthorization action.

---

##### `actionGetConnectionConditionKeys`<sup>Required</sup> <a name="actionGetConnectionConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.actionGetConnectionConditionKeys"></a>

```typescript
public readonly actionGetConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnection action.

---

##### `actionGetIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="actionGetIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.actionGetIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly actionGetIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetIdentityCenterApplication action.

---

##### `AssociateIamRoleToConnectionConditionKeys`<sup>Required</sup> <a name="AssociateIamRoleToConnectionConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AssociateIamRoleToConnectionConditionKeys"></a>

```typescript
public readonly AssociateIamRoleToConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateIamRoleToConnection action.

---

##### `AssociateIdentityCenterApplicationToSpaceConditionKeys`<sup>Required</sup> <a name="AssociateIdentityCenterApplicationToSpaceConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AssociateIdentityCenterApplicationToSpaceConditionKeys"></a>

```typescript
public readonly AssociateIdentityCenterApplicationToSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateIdentityCenterApplicationToSpace action.

---

##### `AssociateIdentityToIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="AssociateIdentityToIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AssociateIdentityToIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly AssociateIdentityToIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateIdentityToIdentityCenterApplication action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchAssociateIdentitiesToIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="BatchAssociateIdentitiesToIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.BatchAssociateIdentitiesToIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly BatchAssociateIdentitiesToIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchAssociateIdentitiesToIdentityCenterApplication action.

---

##### `BatchDisassociateIdentitiesFromIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="BatchDisassociateIdentitiesFromIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.BatchDisassociateIdentitiesFromIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly BatchDisassociateIdentitiesFromIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchDisassociateIdentitiesFromIdentityCenterApplication action.

---

##### `CreateIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="CreateIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.CreateIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly CreateIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIdentityCenterApplication action.

---

##### `CreateSpaceAdminRoleAssignmentConditionKeys`<sup>Required</sup> <a name="CreateSpaceAdminRoleAssignmentConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.CreateSpaceAdminRoleAssignmentConditionKeys"></a>

```typescript
public readonly CreateSpaceAdminRoleAssignmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSpaceAdminRoleAssignment action.

---

##### `CreateSpaceConditionKeys`<sup>Required</sup> <a name="CreateSpaceConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.CreateSpaceConditionKeys"></a>

```typescript
public readonly CreateSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSpace action.

---

##### `DeleteConnectionConditionKeys`<sup>Required</sup> <a name="DeleteConnectionConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DeleteConnectionConditionKeys"></a>

```typescript
public readonly DeleteConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteConnection action.

---

##### `DeleteIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="DeleteIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DeleteIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly DeleteIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIdentityCenterApplication action.

---

##### `DisassociateIamRoleFromConnectionConditionKeys`<sup>Required</sup> <a name="DisassociateIamRoleFromConnectionConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DisassociateIamRoleFromConnectionConditionKeys"></a>

```typescript
public readonly DisassociateIamRoleFromConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateIamRoleFromConnection action.

---

##### `DisassociateIdentityCenterApplicationFromSpaceConditionKeys`<sup>Required</sup> <a name="DisassociateIdentityCenterApplicationFromSpaceConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DisassociateIdentityCenterApplicationFromSpaceConditionKeys"></a>

```typescript
public readonly DisassociateIdentityCenterApplicationFromSpaceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateIdentityCenterApplicationFromSpace action.

---

##### `DisassociateIdentityFromIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="DisassociateIdentityFromIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.DisassociateIdentityFromIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly DisassociateIdentityFromIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateIdentityFromIdentityCenterApplication action.

---

##### `ListIamRolesForConnectionConditionKeys`<sup>Required</sup> <a name="ListIamRolesForConnectionConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.ListIamRolesForConnectionConditionKeys"></a>

```typescript
public readonly ListIamRolesForConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListIamRolesForConnection action.

---

##### `ListSpacesForIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="ListSpacesForIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.ListSpacesForIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly ListSpacesForIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSpacesForIdentityCenterApplication action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PutBillingAuthorizationConditionKeys`<sup>Required</sup> <a name="PutBillingAuthorizationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.PutBillingAuthorizationConditionKeys"></a>

```typescript
public readonly PutBillingAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutBillingAuthorization action.

---

##### `SynchronizeIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="SynchronizeIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.SynchronizeIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly SynchronizeIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SynchronizeIdentityCenterApplication action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateIdentityCenterApplicationConditionKeys`<sup>Required</sup> <a name="UpdateIdentityCenterApplicationConditionKeys" id="@cdk_utils/iam.codecatalyst.CodeCatalystConditions.property.UpdateIdentityCenterApplicationConditionKeys"></a>

```typescript
public readonly UpdateIdentityCenterApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateIdentityCenterApplication action.

---

### CodeCatalystOperations <a name="CodeCatalystOperations" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations"></a>

API operation to required IAM actions mapping for codecatalyst.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

new codecatalyst.CodeCatalystOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateAccessToken">CreateAccessToken</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessToken API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateDevEnvironment">CreateDevEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateDevEnvironment API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateProject">CreateProject</a></code> | <code>string[]</code> | IAM actions required for the CreateProject API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateSourceRepository">CreateSourceRepository</a></code> | <code>string[]</code> | IAM actions required for the CreateSourceRepository API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateSourceRepositoryBranch">CreateSourceRepositoryBranch</a></code> | <code>string[]</code> | IAM actions required for the CreateSourceRepositoryBranch API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteAccessToken">DeleteAccessToken</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessToken API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteDevEnvironment">DeleteDevEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteDevEnvironment API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteProject">DeleteProject</a></code> | <code>string[]</code> | IAM actions required for the DeleteProject API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteSourceRepository">DeleteSourceRepository</a></code> | <code>string[]</code> | IAM actions required for the DeleteSourceRepository API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteSpace">DeleteSpace</a></code> | <code>string[]</code> | IAM actions required for the DeleteSpace API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListAccessTokens">ListAccessTokens</a></code> | <code>string[]</code> | IAM actions required for the ListAccessTokens API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListDevEnvironments">ListDevEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListDevEnvironments API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListDevEnvironmentSessions">ListDevEnvironmentSessions</a></code> | <code>string[]</code> | IAM actions required for the ListDevEnvironmentSessions API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListEventLogs">ListEventLogs</a></code> | <code>string[]</code> | IAM actions required for the ListEventLogs API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListProjects">ListProjects</a></code> | <code>string[]</code> | IAM actions required for the ListProjects API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListSourceRepositories">ListSourceRepositories</a></code> | <code>string[]</code> | IAM actions required for the ListSourceRepositories API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListSourceRepositoryBranches">ListSourceRepositoryBranches</a></code> | <code>string[]</code> | IAM actions required for the ListSourceRepositoryBranches API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListSpaces">ListSpaces</a></code> | <code>string[]</code> | IAM actions required for the ListSpaces API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListWorkflowRuns">ListWorkflowRuns</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowRuns API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListWorkflows">ListWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflows API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetDevEnvironment">opGetDevEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetDevEnvironment API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetProject">opGetProject</a></code> | <code>string[]</code> | IAM actions required for the GetProject API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetSourceRepository">opGetSourceRepository</a></code> | <code>string[]</code> | IAM actions required for the GetSourceRepository API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetSourceRepositoryCloneUrls">opGetSourceRepositoryCloneUrls</a></code> | <code>string[]</code> | IAM actions required for the GetSourceRepositoryCloneUrls API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetSpace">opGetSpace</a></code> | <code>string[]</code> | IAM actions required for the GetSpace API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetSubscription">opGetSubscription</a></code> | <code>string[]</code> | IAM actions required for the GetSubscription API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetUserDetails">opGetUserDetails</a></code> | <code>string[]</code> | IAM actions required for the GetUserDetails API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetWorkflow">opGetWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflow API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetWorkflowRun">opGetWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StartDevEnvironment">StartDevEnvironment</a></code> | <code>string[]</code> | IAM actions required for the StartDevEnvironment API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StartDevEnvironmentSession">StartDevEnvironmentSession</a></code> | <code>string[]</code> | IAM actions required for the StartDevEnvironmentSession API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StartWorkflowRun">StartWorkflowRun</a></code> | <code>string[]</code> | IAM actions required for the StartWorkflowRun API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StopDevEnvironment">StopDevEnvironment</a></code> | <code>string[]</code> | IAM actions required for the StopDevEnvironment API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StopDevEnvironmentSession">StopDevEnvironmentSession</a></code> | <code>string[]</code> | IAM actions required for the StopDevEnvironmentSession API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.UpdateDevEnvironment">UpdateDevEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateDevEnvironment API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.UpdateProject">UpdateProject</a></code> | <code>string[]</code> | IAM actions required for the UpdateProject API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.UpdateSpace">UpdateSpace</a></code> | <code>string[]</code> | IAM actions required for the UpdateSpace API call. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.VerifySession">VerifySession</a></code> | <code>string[]</code> | IAM actions required for the VerifySession API call. |

---

##### `CreateAccessToken`<sup>Required</sup> <a name="CreateAccessToken" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateAccessToken"></a>

```typescript
public readonly CreateAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessToken API call.

---

##### `CreateDevEnvironment`<sup>Required</sup> <a name="CreateDevEnvironment" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateDevEnvironment"></a>

```typescript
public readonly CreateDevEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateDevEnvironment API call.

---

##### `CreateProject`<sup>Required</sup> <a name="CreateProject" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateProject"></a>

```typescript
public readonly CreateProject: string[];
```

- *Type:* string[]

IAM actions required for the CreateProject API call.

---

##### `CreateSourceRepository`<sup>Required</sup> <a name="CreateSourceRepository" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateSourceRepository"></a>

```typescript
public readonly CreateSourceRepository: string[];
```

- *Type:* string[]

IAM actions required for the CreateSourceRepository API call.

---

##### `CreateSourceRepositoryBranch`<sup>Required</sup> <a name="CreateSourceRepositoryBranch" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.CreateSourceRepositoryBranch"></a>

```typescript
public readonly CreateSourceRepositoryBranch: string[];
```

- *Type:* string[]

IAM actions required for the CreateSourceRepositoryBranch API call.

---

##### `DeleteAccessToken`<sup>Required</sup> <a name="DeleteAccessToken" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteAccessToken"></a>

```typescript
public readonly DeleteAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessToken API call.

---

##### `DeleteDevEnvironment`<sup>Required</sup> <a name="DeleteDevEnvironment" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteDevEnvironment"></a>

```typescript
public readonly DeleteDevEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDevEnvironment API call.

---

##### `DeleteProject`<sup>Required</sup> <a name="DeleteProject" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteProject"></a>

```typescript
public readonly DeleteProject: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProject API call.

---

##### `DeleteSourceRepository`<sup>Required</sup> <a name="DeleteSourceRepository" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteSourceRepository"></a>

```typescript
public readonly DeleteSourceRepository: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSourceRepository API call.

---

##### `DeleteSpace`<sup>Required</sup> <a name="DeleteSpace" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.DeleteSpace"></a>

```typescript
public readonly DeleteSpace: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSpace API call.

---

##### `ListAccessTokens`<sup>Required</sup> <a name="ListAccessTokens" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListAccessTokens"></a>

```typescript
public readonly ListAccessTokens: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessTokens API call.

---

##### `ListDevEnvironments`<sup>Required</sup> <a name="ListDevEnvironments" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListDevEnvironments"></a>

```typescript
public readonly ListDevEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListDevEnvironments API call.

---

##### `ListDevEnvironmentSessions`<sup>Required</sup> <a name="ListDevEnvironmentSessions" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListDevEnvironmentSessions"></a>

```typescript
public readonly ListDevEnvironmentSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListDevEnvironmentSessions API call.

---

##### `ListEventLogs`<sup>Required</sup> <a name="ListEventLogs" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListEventLogs"></a>

```typescript
public readonly ListEventLogs: string[];
```

- *Type:* string[]

IAM actions required for the ListEventLogs API call.

---

##### `ListProjects`<sup>Required</sup> <a name="ListProjects" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListProjects"></a>

```typescript
public readonly ListProjects: string[];
```

- *Type:* string[]

IAM actions required for the ListProjects API call.

---

##### `ListSourceRepositories`<sup>Required</sup> <a name="ListSourceRepositories" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListSourceRepositories"></a>

```typescript
public readonly ListSourceRepositories: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceRepositories API call.

---

##### `ListSourceRepositoryBranches`<sup>Required</sup> <a name="ListSourceRepositoryBranches" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListSourceRepositoryBranches"></a>

```typescript
public readonly ListSourceRepositoryBranches: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceRepositoryBranches API call.

---

##### `ListSpaces`<sup>Required</sup> <a name="ListSpaces" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListSpaces"></a>

```typescript
public readonly ListSpaces: string[];
```

- *Type:* string[]

IAM actions required for the ListSpaces API call.

---

##### `ListWorkflowRuns`<sup>Required</sup> <a name="ListWorkflowRuns" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListWorkflowRuns"></a>

```typescript
public readonly ListWorkflowRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowRuns API call.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflows API call.

---

##### `opGetDevEnvironment`<sup>Required</sup> <a name="opGetDevEnvironment" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetDevEnvironment"></a>

```typescript
public readonly opGetDevEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetDevEnvironment API call.

---

##### `opGetProject`<sup>Required</sup> <a name="opGetProject" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetProject"></a>

```typescript
public readonly opGetProject: string[];
```

- *Type:* string[]

IAM actions required for the GetProject API call.

---

##### `opGetSourceRepository`<sup>Required</sup> <a name="opGetSourceRepository" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetSourceRepository"></a>

```typescript
public readonly opGetSourceRepository: string[];
```

- *Type:* string[]

IAM actions required for the GetSourceRepository API call.

---

##### `opGetSourceRepositoryCloneUrls`<sup>Required</sup> <a name="opGetSourceRepositoryCloneUrls" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetSourceRepositoryCloneUrls"></a>

```typescript
public readonly opGetSourceRepositoryCloneUrls: string[];
```

- *Type:* string[]

IAM actions required for the GetSourceRepositoryCloneUrls API call.

---

##### `opGetSpace`<sup>Required</sup> <a name="opGetSpace" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetSpace"></a>

```typescript
public readonly opGetSpace: string[];
```

- *Type:* string[]

IAM actions required for the GetSpace API call.

---

##### `opGetSubscription`<sup>Required</sup> <a name="opGetSubscription" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetSubscription"></a>

```typescript
public readonly opGetSubscription: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscription API call.

---

##### `opGetUserDetails`<sup>Required</sup> <a name="opGetUserDetails" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetUserDetails"></a>

```typescript
public readonly opGetUserDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetUserDetails API call.

---

##### `opGetWorkflow`<sup>Required</sup> <a name="opGetWorkflow" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetWorkflow"></a>

```typescript
public readonly opGetWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflow API call.

---

##### `opGetWorkflowRun`<sup>Required</sup> <a name="opGetWorkflowRun" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.opGetWorkflowRun"></a>

```typescript
public readonly opGetWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowRun API call.

---

##### `StartDevEnvironment`<sup>Required</sup> <a name="StartDevEnvironment" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StartDevEnvironment"></a>

```typescript
public readonly StartDevEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the StartDevEnvironment API call.

---

##### `StartDevEnvironmentSession`<sup>Required</sup> <a name="StartDevEnvironmentSession" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StartDevEnvironmentSession"></a>

```typescript
public readonly StartDevEnvironmentSession: string[];
```

- *Type:* string[]

IAM actions required for the StartDevEnvironmentSession API call.

---

##### `StartWorkflowRun`<sup>Required</sup> <a name="StartWorkflowRun" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StartWorkflowRun"></a>

```typescript
public readonly StartWorkflowRun: string[];
```

- *Type:* string[]

IAM actions required for the StartWorkflowRun API call.

---

##### `StopDevEnvironment`<sup>Required</sup> <a name="StopDevEnvironment" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StopDevEnvironment"></a>

```typescript
public readonly StopDevEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the StopDevEnvironment API call.

---

##### `StopDevEnvironmentSession`<sup>Required</sup> <a name="StopDevEnvironmentSession" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.StopDevEnvironmentSession"></a>

```typescript
public readonly StopDevEnvironmentSession: string[];
```

- *Type:* string[]

IAM actions required for the StopDevEnvironmentSession API call.

---

##### `UpdateDevEnvironment`<sup>Required</sup> <a name="UpdateDevEnvironment" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.UpdateDevEnvironment"></a>

```typescript
public readonly UpdateDevEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDevEnvironment API call.

---

##### `UpdateProject`<sup>Required</sup> <a name="UpdateProject" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.UpdateProject"></a>

```typescript
public readonly UpdateProject: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProject API call.

---

##### `UpdateSpace`<sup>Required</sup> <a name="UpdateSpace" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.UpdateSpace"></a>

```typescript
public readonly UpdateSpace: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSpace API call.

---

##### `VerifySession`<sup>Required</sup> <a name="VerifySession" id="@cdk_utils/iam.codecatalyst.CodeCatalystOperations.property.VerifySession"></a>

```typescript
public readonly VerifySession: string[];
```

- *Type:* string[]

IAM actions required for the VerifySession API call.

---

### CodeCatalystResources <a name="CodeCatalystResources" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources"></a>

ARN builders, validators, and parsers for codecatalyst resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.Initializer"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

new codecatalyst.CodeCatalystResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.connections">connections</a></code> | Builds an ARN for the connections resource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.identityCenterApplications">identityCenterApplications</a></code> | Builds an ARN for the identity-center-applications resource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidConnectionsArn">isValidConnectionsArn</a></code> | Validates whether a string is a valid ARN for the connections resource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidIdentityCenterApplicationsArn">isValidIdentityCenterApplicationsArn</a></code> | Validates whether a string is a valid ARN for the identity-center-applications resource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidProjectArn">isValidProjectArn</a></code> | Validates whether a string is a valid ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidSpaceArn">isValidSpaceArn</a></code> | Validates whether a string is a valid ARN for the space resource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseConnectionsArn">parseConnectionsArn</a></code> | Parses a connections ARN into its components. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseIdentityCenterApplicationsArn">parseIdentityCenterApplicationsArn</a></code> | Parses a identity-center-applications ARN into its components. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseProjectArn">parseProjectArn</a></code> | Parses a project ARN into its components. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseSpaceArn">parseSpaceArn</a></code> | Parses a space ARN into its components. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.project">project</a></code> | Builds an ARN for the project resource. |
| <code><a href="#@cdk_utils/iam.codecatalyst.CodeCatalystResources.space">space</a></code> | Builds an ARN for the space resource. |

---

##### `connections` <a name="connections" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.connections"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.connections(props: CodeCatalystConnectionsArnProps)
```

Builds an ARN for the connections resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.connections.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codecatalyst.CodeCatalystConnectionsArnProps">CodeCatalystConnectionsArnProps</a>

---

##### `identityCenterApplications` <a name="identityCenterApplications" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.identityCenterApplications"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.identityCenterApplications(props: CodeCatalystIdentityCenterApplicationsArnProps)
```

Builds an ARN for the identity-center-applications resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.identityCenterApplications.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codecatalyst.CodeCatalystIdentityCenterApplicationsArnProps">CodeCatalystIdentityCenterApplicationsArnProps</a>

---

##### `isValidConnectionsArn` <a name="isValidConnectionsArn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidConnectionsArn"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.isValidConnectionsArn(arn: string)
```

Validates whether a string is a valid ARN for the connections resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidConnectionsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIdentityCenterApplicationsArn` <a name="isValidIdentityCenterApplicationsArn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidIdentityCenterApplicationsArn"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.isValidIdentityCenterApplicationsArn(arn: string)
```

Validates whether a string is a valid ARN for the identity-center-applications resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidIdentityCenterApplicationsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProjectArn` <a name="isValidProjectArn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidProjectArn"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.isValidProjectArn(arn: string)
```

Validates whether a string is a valid ARN for the project resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSpaceArn` <a name="isValidSpaceArn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidSpaceArn"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.isValidSpaceArn(arn: string)
```

Validates whether a string is a valid ARN for the space resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.isValidSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionsArn` <a name="parseConnectionsArn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseConnectionsArn"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.parseConnectionsArn(arn: string)
```

Parses a connections ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseConnectionsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentityCenterApplicationsArn` <a name="parseIdentityCenterApplicationsArn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseIdentityCenterApplicationsArn"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.parseIdentityCenterApplicationsArn(arn: string)
```

Parses a identity-center-applications ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseIdentityCenterApplicationsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProjectArn` <a name="parseProjectArn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseProjectArn"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.parseProjectArn(arn: string)
```

Parses a project ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseProjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSpaceArn` <a name="parseSpaceArn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseSpaceArn"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.parseSpaceArn(arn: string)
```

Parses a space ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.parseSpaceArn.parameter.arn"></a>

- *Type:* string

---

##### `project` <a name="project" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.project"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.project(props: CodeCatalystProjectArnProps)
```

Builds an ARN for the project resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.project.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codecatalyst.CodeCatalystProjectArnProps">CodeCatalystProjectArnProps</a>

---

##### `space` <a name="space" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.space"></a>

```typescript
import { codecatalyst } from '@cdk_utils/iam'

codecatalyst.CodeCatalystResources.space(props: CodeCatalystSpaceArnProps)
```

Builds an ARN for the space resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codecatalyst.CodeCatalystResources.space.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codecatalyst.CodeCatalystSpaceArnProps">CodeCatalystSpaceArnProps</a>

---




