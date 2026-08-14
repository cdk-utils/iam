# `rolesanywhere` Submodule <a name="`rolesanywhere` Submodule" id="@cdk_utils/iam.rolesanywhere"></a>


## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereCrlArnComponents <a name="RolesanywhereCrlArnComponents" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents"></a>

Parsed components of a crl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

const rolesanywhereCrlArnComponents: rolesanywhere.RolesanywhereCrlArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.property.crlId">crlId</a></code> | <code>string</code> | The CrlId component. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `crlId`<sup>Required</sup> <a name="crlId" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.property.crlId"></a>

```typescript
public readonly crlId: string;
```

- *Type:* string

The CrlId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RolesanywhereCrlArnProps <a name="RolesanywhereCrlArnProps" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps"></a>

Properties for building a crl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

const rolesanywhereCrlArnProps: rolesanywhere.RolesanywhereCrlArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.property.crlId">crlId</a></code> | <code>string</code> | The CrlId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `crlId`<sup>Required</sup> <a name="crlId" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.property.crlId"></a>

```typescript
public readonly crlId: string;
```

- *Type:* string

The CrlId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RolesanywhereProfileArnComponents <a name="RolesanywhereProfileArnComponents" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents"></a>

Parsed components of a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

const rolesanywhereProfileArnComponents: rolesanywhere.RolesanywhereProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RolesanywhereProfileArnProps <a name="RolesanywhereProfileArnProps" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps"></a>

Properties for building a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

const rolesanywhereProfileArnProps: rolesanywhere.RolesanywhereProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.property.profileId">profileId</a></code> | <code>string</code> | The ProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RolesanywhereSubjectArnComponents <a name="RolesanywhereSubjectArnComponents" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents"></a>

Parsed components of a subject ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

const rolesanywhereSubjectArnComponents: rolesanywhere.RolesanywhereSubjectArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.property.subjectId">subjectId</a></code> | <code>string</code> | The SubjectId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `subjectId`<sup>Required</sup> <a name="subjectId" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnComponents.property.subjectId"></a>

```typescript
public readonly subjectId: string;
```

- *Type:* string

The SubjectId component.

---

### RolesanywhereSubjectArnProps <a name="RolesanywhereSubjectArnProps" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps"></a>

Properties for building a subject ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

const rolesanywhereSubjectArnProps: rolesanywhere.RolesanywhereSubjectArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.property.subjectId">subjectId</a></code> | <code>string</code> | The SubjectId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `subjectId`<sup>Required</sup> <a name="subjectId" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.property.subjectId"></a>

```typescript
public readonly subjectId: string;
```

- *Type:* string

The SubjectId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### RolesanywhereTrustAnchorArnComponents <a name="RolesanywhereTrustAnchorArnComponents" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents"></a>

Parsed components of a trust-anchor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

const rolesanywhereTrustAnchorArnComponents: rolesanywhere.RolesanywhereTrustAnchorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.property.trustAnchorId">trustAnchorId</a></code> | <code>string</code> | The TrustAnchorId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trustAnchorId`<sup>Required</sup> <a name="trustAnchorId" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnComponents.property.trustAnchorId"></a>

```typescript
public readonly trustAnchorId: string;
```

- *Type:* string

The TrustAnchorId component.

---

### RolesanywhereTrustAnchorArnProps <a name="RolesanywhereTrustAnchorArnProps" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps"></a>

Properties for building a trust-anchor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

const rolesanywhereTrustAnchorArnProps: rolesanywhere.RolesanywhereTrustAnchorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.property.trustAnchorId">trustAnchorId</a></code> | <code>string</code> | The TrustAnchorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `trustAnchorId`<sup>Required</sup> <a name="trustAnchorId" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.property.trustAnchorId"></a>

```typescript
public readonly trustAnchorId: string;
```

- *Type:* string

The TrustAnchorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RolesanywhereActions <a name="RolesanywhereActions" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions"></a>

IAM action constants for the rolesanywhere service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

new rolesanywhere.RolesanywhereActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.actionGetCrl">actionGetCrl</a></code> | <code>string</code> | [Read] rolesanywhere:GetCrl. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.actionGetProfile">actionGetProfile</a></code> | <code>string</code> | [Read] rolesanywhere:GetProfile. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.actionGetSubject">actionGetSubject</a></code> | <code>string</code> | [Read] rolesanywhere:GetSubject. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.actionGetTrustAnchor">actionGetTrustAnchor</a></code> | <code>string</code> | [Read] rolesanywhere:GetTrustAnchor. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] rolesanywhere:CreateProfile. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.CreateTrustAnchor">CreateTrustAnchor</a></code> | <code>string</code> | [Write] rolesanywhere:CreateTrustAnchor. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DeleteAttributeMapping">DeleteAttributeMapping</a></code> | <code>string</code> | [Write] rolesanywhere:DeleteAttributeMapping. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DeleteCrl">DeleteCrl</a></code> | <code>string</code> | [Write] rolesanywhere:DeleteCrl. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] rolesanywhere:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DeleteTrustAnchor">DeleteTrustAnchor</a></code> | <code>string</code> | [Write] rolesanywhere:DeleteTrustAnchor. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DisableCrl">DisableCrl</a></code> | <code>string</code> | [Write] rolesanywhere:DisableCrl. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DisableProfile">DisableProfile</a></code> | <code>string</code> | [Write] rolesanywhere:DisableProfile. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DisableTrustAnchor">DisableTrustAnchor</a></code> | <code>string</code> | [Write] rolesanywhere:DisableTrustAnchor. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.EnableCrl">EnableCrl</a></code> | <code>string</code> | [Write] rolesanywhere:EnableCrl. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.EnableProfile">EnableProfile</a></code> | <code>string</code> | [Write] rolesanywhere:EnableProfile. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.EnableTrustAnchor">EnableTrustAnchor</a></code> | <code>string</code> | [Write] rolesanywhere:EnableTrustAnchor. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ImportCrl">ImportCrl</a></code> | <code>string</code> | [Write] rolesanywhere:ImportCrl. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListCrls">ListCrls</a></code> | <code>string</code> | [List] rolesanywhere:ListCrls. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListProfiles">ListProfiles</a></code> | <code>string</code> | [List] rolesanywhere:ListProfiles. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListSubjects">ListSubjects</a></code> | <code>string</code> | [List] rolesanywhere:ListSubjects. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] rolesanywhere:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListTrustAnchors">ListTrustAnchors</a></code> | <code>string</code> | [List] rolesanywhere:ListTrustAnchors. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.PutAttributeMapping">PutAttributeMapping</a></code> | <code>string</code> | [Write] rolesanywhere:PutAttributeMapping. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.PutNotificationSettings">PutNotificationSettings</a></code> | <code>string</code> | [Write] rolesanywhere:PutNotificationSettings. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ResetNotificationSettings">ResetNotificationSettings</a></code> | <code>string</code> | [Write] rolesanywhere:ResetNotificationSettings. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] rolesanywhere:TagResource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] rolesanywhere:UntagResource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.UpdateCrl">UpdateCrl</a></code> | <code>string</code> | [Write] rolesanywhere:UpdateCrl. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.UpdateProfile">UpdateProfile</a></code> | <code>string</code> | [Write] rolesanywhere:UpdateProfile. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.UpdateTrustAnchor">UpdateTrustAnchor</a></code> | <code>string</code> | [Write] rolesanywhere:UpdateTrustAnchor. |

---

##### `actionGetCrl`<sup>Required</sup> <a name="actionGetCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.actionGetCrl"></a>

```typescript
public readonly actionGetCrl: string;
```

- *Type:* string

[Read] rolesanywhere:GetCrl.

---

##### `actionGetProfile`<sup>Required</sup> <a name="actionGetProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.actionGetProfile"></a>

```typescript
public readonly actionGetProfile: string;
```

- *Type:* string

[Read] rolesanywhere:GetProfile.

---

##### `actionGetSubject`<sup>Required</sup> <a name="actionGetSubject" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.actionGetSubject"></a>

```typescript
public readonly actionGetSubject: string;
```

- *Type:* string

[Read] rolesanywhere:GetSubject.

---

##### `actionGetTrustAnchor`<sup>Required</sup> <a name="actionGetTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.actionGetTrustAnchor"></a>

```typescript
public readonly actionGetTrustAnchor: string;
```

- *Type:* string

[Read] rolesanywhere:GetTrustAnchor.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] rolesanywhere:CreateProfile.

---

##### `CreateTrustAnchor`<sup>Required</sup> <a name="CreateTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.CreateTrustAnchor"></a>

```typescript
public readonly CreateTrustAnchor: string;
```

- *Type:* string

[Write] rolesanywhere:CreateTrustAnchor.

---

##### `DeleteAttributeMapping`<sup>Required</sup> <a name="DeleteAttributeMapping" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DeleteAttributeMapping"></a>

```typescript
public readonly DeleteAttributeMapping: string;
```

- *Type:* string

[Write] rolesanywhere:DeleteAttributeMapping.

---

##### `DeleteCrl`<sup>Required</sup> <a name="DeleteCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DeleteCrl"></a>

```typescript
public readonly DeleteCrl: string;
```

- *Type:* string

[Write] rolesanywhere:DeleteCrl.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] rolesanywhere:DeleteProfile.

---

##### `DeleteTrustAnchor`<sup>Required</sup> <a name="DeleteTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DeleteTrustAnchor"></a>

```typescript
public readonly DeleteTrustAnchor: string;
```

- *Type:* string

[Write] rolesanywhere:DeleteTrustAnchor.

---

##### `DisableCrl`<sup>Required</sup> <a name="DisableCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DisableCrl"></a>

```typescript
public readonly DisableCrl: string;
```

- *Type:* string

[Write] rolesanywhere:DisableCrl.

---

##### `DisableProfile`<sup>Required</sup> <a name="DisableProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DisableProfile"></a>

```typescript
public readonly DisableProfile: string;
```

- *Type:* string

[Write] rolesanywhere:DisableProfile.

---

##### `DisableTrustAnchor`<sup>Required</sup> <a name="DisableTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.DisableTrustAnchor"></a>

```typescript
public readonly DisableTrustAnchor: string;
```

- *Type:* string

[Write] rolesanywhere:DisableTrustAnchor.

---

##### `EnableCrl`<sup>Required</sup> <a name="EnableCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.EnableCrl"></a>

```typescript
public readonly EnableCrl: string;
```

- *Type:* string

[Write] rolesanywhere:EnableCrl.

---

##### `EnableProfile`<sup>Required</sup> <a name="EnableProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.EnableProfile"></a>

```typescript
public readonly EnableProfile: string;
```

- *Type:* string

[Write] rolesanywhere:EnableProfile.

---

##### `EnableTrustAnchor`<sup>Required</sup> <a name="EnableTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.EnableTrustAnchor"></a>

```typescript
public readonly EnableTrustAnchor: string;
```

- *Type:* string

[Write] rolesanywhere:EnableTrustAnchor.

---

##### `ImportCrl`<sup>Required</sup> <a name="ImportCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ImportCrl"></a>

```typescript
public readonly ImportCrl: string;
```

- *Type:* string

[Write] rolesanywhere:ImportCrl.

---

##### `ListCrls`<sup>Required</sup> <a name="ListCrls" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListCrls"></a>

```typescript
public readonly ListCrls: string;
```

- *Type:* string

[List] rolesanywhere:ListCrls.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string;
```

- *Type:* string

[List] rolesanywhere:ListProfiles.

---

##### `ListSubjects`<sup>Required</sup> <a name="ListSubjects" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListSubjects"></a>

```typescript
public readonly ListSubjects: string;
```

- *Type:* string

[List] rolesanywhere:ListSubjects.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] rolesanywhere:ListTagsForResource.

---

##### `ListTrustAnchors`<sup>Required</sup> <a name="ListTrustAnchors" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ListTrustAnchors"></a>

```typescript
public readonly ListTrustAnchors: string;
```

- *Type:* string

[List] rolesanywhere:ListTrustAnchors.

---

##### `PutAttributeMapping`<sup>Required</sup> <a name="PutAttributeMapping" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.PutAttributeMapping"></a>

```typescript
public readonly PutAttributeMapping: string;
```

- *Type:* string

[Write] rolesanywhere:PutAttributeMapping.

---

##### `PutNotificationSettings`<sup>Required</sup> <a name="PutNotificationSettings" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.PutNotificationSettings"></a>

```typescript
public readonly PutNotificationSettings: string;
```

- *Type:* string

[Write] rolesanywhere:PutNotificationSettings.

---

##### `ResetNotificationSettings`<sup>Required</sup> <a name="ResetNotificationSettings" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.ResetNotificationSettings"></a>

```typescript
public readonly ResetNotificationSettings: string;
```

- *Type:* string

[Write] rolesanywhere:ResetNotificationSettings.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] rolesanywhere:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] rolesanywhere:UntagResource.

---

##### `UpdateCrl`<sup>Required</sup> <a name="UpdateCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.UpdateCrl"></a>

```typescript
public readonly UpdateCrl: string;
```

- *Type:* string

[Write] rolesanywhere:UpdateCrl.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string;
```

- *Type:* string

[Write] rolesanywhere:UpdateProfile.

---

##### `UpdateTrustAnchor`<sup>Required</sup> <a name="UpdateTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereActions.property.UpdateTrustAnchor"></a>

```typescript
public readonly UpdateTrustAnchor: string;
```

- *Type:* string

[Write] rolesanywhere:UpdateTrustAnchor.

---

### RolesanywhereConditions <a name="RolesanywhereConditions" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions"></a>

Condition key constants and builders for rolesanywhere.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

new rolesanywhere.RolesanywhereConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.requestTag"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.resourceTag"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.tagKeys"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.CreateProfileConditionKeys">CreateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfile action. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.CreateTrustAnchorConditionKeys">CreateTrustAnchorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrustAnchor action. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.ImportCrlConditionKeys">ImportCrlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportCrl action. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateProfileConditionKeys`<sup>Required</sup> <a name="CreateProfileConditionKeys" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.CreateProfileConditionKeys"></a>

```typescript
public readonly CreateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfile action.

---

##### `CreateTrustAnchorConditionKeys`<sup>Required</sup> <a name="CreateTrustAnchorConditionKeys" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.CreateTrustAnchorConditionKeys"></a>

```typescript
public readonly CreateTrustAnchorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrustAnchor action.

---

##### `ImportCrlConditionKeys`<sup>Required</sup> <a name="ImportCrlConditionKeys" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.ImportCrlConditionKeys"></a>

```typescript
public readonly ImportCrlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportCrl action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.rolesanywhere.RolesanywhereConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### RolesanywhereOperations <a name="RolesanywhereOperations" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations"></a>

API operation to required IAM actions mapping for rolesanywhere.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

new rolesanywhere.RolesanywhereOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.CreateProfile">CreateProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateProfile API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.CreateTrustAnchor">CreateTrustAnchor</a></code> | <code>string[]</code> | IAM actions required for the CreateTrustAnchor API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DeleteAttributeMapping">DeleteAttributeMapping</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttributeMapping API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DeleteCrl">DeleteCrl</a></code> | <code>string[]</code> | IAM actions required for the DeleteCrl API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DeleteProfile">DeleteProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfile API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DeleteTrustAnchor">DeleteTrustAnchor</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrustAnchor API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DisableCrl">DisableCrl</a></code> | <code>string[]</code> | IAM actions required for the DisableCrl API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DisableProfile">DisableProfile</a></code> | <code>string[]</code> | IAM actions required for the DisableProfile API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DisableTrustAnchor">DisableTrustAnchor</a></code> | <code>string[]</code> | IAM actions required for the DisableTrustAnchor API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.EnableCrl">EnableCrl</a></code> | <code>string[]</code> | IAM actions required for the EnableCrl API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.EnableProfile">EnableProfile</a></code> | <code>string[]</code> | IAM actions required for the EnableProfile API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.EnableTrustAnchor">EnableTrustAnchor</a></code> | <code>string[]</code> | IAM actions required for the EnableTrustAnchor API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ImportCrl">ImportCrl</a></code> | <code>string[]</code> | IAM actions required for the ImportCrl API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListCrls">ListCrls</a></code> | <code>string[]</code> | IAM actions required for the ListCrls API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListProfiles">ListProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListProfiles API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListSubjects">ListSubjects</a></code> | <code>string[]</code> | IAM actions required for the ListSubjects API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListTrustAnchors">ListTrustAnchors</a></code> | <code>string[]</code> | IAM actions required for the ListTrustAnchors API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.opGetCrl">opGetCrl</a></code> | <code>string[]</code> | IAM actions required for the GetCrl API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.opGetProfile">opGetProfile</a></code> | <code>string[]</code> | IAM actions required for the GetProfile API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.opGetSubject">opGetSubject</a></code> | <code>string[]</code> | IAM actions required for the GetSubject API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.opGetTrustAnchor">opGetTrustAnchor</a></code> | <code>string[]</code> | IAM actions required for the GetTrustAnchor API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.PutAttributeMapping">PutAttributeMapping</a></code> | <code>string[]</code> | IAM actions required for the PutAttributeMapping API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.PutNotificationSettings">PutNotificationSettings</a></code> | <code>string[]</code> | IAM actions required for the PutNotificationSettings API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ResetNotificationSettings">ResetNotificationSettings</a></code> | <code>string[]</code> | IAM actions required for the ResetNotificationSettings API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.UpdateCrl">UpdateCrl</a></code> | <code>string[]</code> | IAM actions required for the UpdateCrl API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.UpdateProfile">UpdateProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfile API call. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.UpdateTrustAnchor">UpdateTrustAnchor</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrustAnchor API call. |

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfile API call.

---

##### `CreateTrustAnchor`<sup>Required</sup> <a name="CreateTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.CreateTrustAnchor"></a>

```typescript
public readonly CreateTrustAnchor: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrustAnchor API call.

---

##### `DeleteAttributeMapping`<sup>Required</sup> <a name="DeleteAttributeMapping" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DeleteAttributeMapping"></a>

```typescript
public readonly DeleteAttributeMapping: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttributeMapping API call.

---

##### `DeleteCrl`<sup>Required</sup> <a name="DeleteCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DeleteCrl"></a>

```typescript
public readonly DeleteCrl: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCrl API call.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfile API call.

---

##### `DeleteTrustAnchor`<sup>Required</sup> <a name="DeleteTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DeleteTrustAnchor"></a>

```typescript
public readonly DeleteTrustAnchor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrustAnchor API call.

---

##### `DisableCrl`<sup>Required</sup> <a name="DisableCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DisableCrl"></a>

```typescript
public readonly DisableCrl: string[];
```

- *Type:* string[]

IAM actions required for the DisableCrl API call.

---

##### `DisableProfile`<sup>Required</sup> <a name="DisableProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DisableProfile"></a>

```typescript
public readonly DisableProfile: string[];
```

- *Type:* string[]

IAM actions required for the DisableProfile API call.

---

##### `DisableTrustAnchor`<sup>Required</sup> <a name="DisableTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.DisableTrustAnchor"></a>

```typescript
public readonly DisableTrustAnchor: string[];
```

- *Type:* string[]

IAM actions required for the DisableTrustAnchor API call.

---

##### `EnableCrl`<sup>Required</sup> <a name="EnableCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.EnableCrl"></a>

```typescript
public readonly EnableCrl: string[];
```

- *Type:* string[]

IAM actions required for the EnableCrl API call.

---

##### `EnableProfile`<sup>Required</sup> <a name="EnableProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.EnableProfile"></a>

```typescript
public readonly EnableProfile: string[];
```

- *Type:* string[]

IAM actions required for the EnableProfile API call.

---

##### `EnableTrustAnchor`<sup>Required</sup> <a name="EnableTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.EnableTrustAnchor"></a>

```typescript
public readonly EnableTrustAnchor: string[];
```

- *Type:* string[]

IAM actions required for the EnableTrustAnchor API call.

---

##### `ImportCrl`<sup>Required</sup> <a name="ImportCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ImportCrl"></a>

```typescript
public readonly ImportCrl: string[];
```

- *Type:* string[]

IAM actions required for the ImportCrl API call.

---

##### `ListCrls`<sup>Required</sup> <a name="ListCrls" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListCrls"></a>

```typescript
public readonly ListCrls: string[];
```

- *Type:* string[]

IAM actions required for the ListCrls API call.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListProfiles API call.

---

##### `ListSubjects`<sup>Required</sup> <a name="ListSubjects" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListSubjects"></a>

```typescript
public readonly ListSubjects: string[];
```

- *Type:* string[]

IAM actions required for the ListSubjects API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTrustAnchors`<sup>Required</sup> <a name="ListTrustAnchors" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ListTrustAnchors"></a>

```typescript
public readonly ListTrustAnchors: string[];
```

- *Type:* string[]

IAM actions required for the ListTrustAnchors API call.

---

##### `opGetCrl`<sup>Required</sup> <a name="opGetCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.opGetCrl"></a>

```typescript
public readonly opGetCrl: string[];
```

- *Type:* string[]

IAM actions required for the GetCrl API call.

---

##### `opGetProfile`<sup>Required</sup> <a name="opGetProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.opGetProfile"></a>

```typescript
public readonly opGetProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetProfile API call.

---

##### `opGetSubject`<sup>Required</sup> <a name="opGetSubject" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.opGetSubject"></a>

```typescript
public readonly opGetSubject: string[];
```

- *Type:* string[]

IAM actions required for the GetSubject API call.

---

##### `opGetTrustAnchor`<sup>Required</sup> <a name="opGetTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.opGetTrustAnchor"></a>

```typescript
public readonly opGetTrustAnchor: string[];
```

- *Type:* string[]

IAM actions required for the GetTrustAnchor API call.

---

##### `PutAttributeMapping`<sup>Required</sup> <a name="PutAttributeMapping" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.PutAttributeMapping"></a>

```typescript
public readonly PutAttributeMapping: string[];
```

- *Type:* string[]

IAM actions required for the PutAttributeMapping API call.

---

##### `PutNotificationSettings`<sup>Required</sup> <a name="PutNotificationSettings" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.PutNotificationSettings"></a>

```typescript
public readonly PutNotificationSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutNotificationSettings API call.

---

##### `ResetNotificationSettings`<sup>Required</sup> <a name="ResetNotificationSettings" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.ResetNotificationSettings"></a>

```typescript
public readonly ResetNotificationSettings: string[];
```

- *Type:* string[]

IAM actions required for the ResetNotificationSettings API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCrl`<sup>Required</sup> <a name="UpdateCrl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.UpdateCrl"></a>

```typescript
public readonly UpdateCrl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCrl API call.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfile API call.

---

##### `UpdateTrustAnchor`<sup>Required</sup> <a name="UpdateTrustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereOperations.property.UpdateTrustAnchor"></a>

```typescript
public readonly UpdateTrustAnchor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrustAnchor API call.

---

### RolesanywhereResources <a name="RolesanywhereResources" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources"></a>

ARN builders, validators, and parsers for rolesanywhere resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.Initializer"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

new rolesanywhere.RolesanywhereResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.crl">crl</a></code> | Builds an ARN for the crl resource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidCrlArn">isValidCrlArn</a></code> | Validates whether a string is a valid ARN for the crl resource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidProfileArn">isValidProfileArn</a></code> | Validates whether a string is a valid ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidSubjectArn">isValidSubjectArn</a></code> | Validates whether a string is a valid ARN for the subject resource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidTrustAnchorArn">isValidTrustAnchorArn</a></code> | Validates whether a string is a valid ARN for the trust-anchor resource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseCrlArn">parseCrlArn</a></code> | Parses a crl ARN into its components. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseProfileArn">parseProfileArn</a></code> | Parses a profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseSubjectArn">parseSubjectArn</a></code> | Parses a subject ARN into its components. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseTrustAnchorArn">parseTrustAnchorArn</a></code> | Parses a trust-anchor ARN into its components. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.profile">profile</a></code> | Builds an ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.subject">subject</a></code> | Builds an ARN for the subject resource. |
| <code><a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereResources.trustAnchor">trustAnchor</a></code> | Builds an ARN for the trust-anchor resource. |

---

##### `crl` <a name="crl" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.crl"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.crl(props: RolesanywhereCrlArnProps)
```

Builds an ARN for the crl resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.crl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereCrlArnProps">RolesanywhereCrlArnProps</a>

---

##### `isValidCrlArn` <a name="isValidCrlArn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidCrlArn"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.isValidCrlArn(arn: string)
```

Validates whether a string is a valid ARN for the crl resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidCrlArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProfileArn` <a name="isValidProfileArn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidProfileArn"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.isValidProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSubjectArn` <a name="isValidSubjectArn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidSubjectArn"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.isValidSubjectArn(arn: string)
```

Validates whether a string is a valid ARN for the subject resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidSubjectArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrustAnchorArn` <a name="isValidTrustAnchorArn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidTrustAnchorArn"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.isValidTrustAnchorArn(arn: string)
```

Validates whether a string is a valid ARN for the trust-anchor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.isValidTrustAnchorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCrlArn` <a name="parseCrlArn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseCrlArn"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.parseCrlArn(arn: string)
```

Parses a crl ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseCrlArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileArn` <a name="parseProfileArn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseProfileArn"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.parseProfileArn(arn: string)
```

Parses a profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSubjectArn` <a name="parseSubjectArn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseSubjectArn"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.parseSubjectArn(arn: string)
```

Parses a subject ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseSubjectArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrustAnchorArn` <a name="parseTrustAnchorArn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseTrustAnchorArn"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.parseTrustAnchorArn(arn: string)
```

Parses a trust-anchor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.parseTrustAnchorArn.parameter.arn"></a>

- *Type:* string

---

##### `profile` <a name="profile" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.profile"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.profile(props: RolesanywhereProfileArnProps)
```

Builds an ARN for the profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.profile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereProfileArnProps">RolesanywhereProfileArnProps</a>

---

##### `subject` <a name="subject" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.subject"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.subject(props: RolesanywhereSubjectArnProps)
```

Builds an ARN for the subject resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.subject.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereSubjectArnProps">RolesanywhereSubjectArnProps</a>

---

##### `trustAnchor` <a name="trustAnchor" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.trustAnchor"></a>

```typescript
import { rolesanywhere } from '@cdk_utils/iam'

rolesanywhere.RolesanywhereResources.trustAnchor(props: RolesanywhereTrustAnchorArnProps)
```

Builds an ARN for the trust-anchor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rolesanywhere.RolesanywhereResources.trustAnchor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rolesanywhere.RolesanywhereTrustAnchorArnProps">RolesanywhereTrustAnchorArnProps</a>

---




