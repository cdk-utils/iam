# `finspace_api` Submodule <a name="`finspace_api` Submodule" id="@cdk_utils/iam.finspace_api"></a>


## Structs <a name="Structs" id="Structs"></a>

### FinspaceAPICredentialArnComponents <a name="FinspaceAPICredentialArnComponents" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents"></a>

Parsed components of a credential ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

const finspaceAPICredentialArnComponents: finspace_api.FinspaceAPICredentialArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FinspaceAPICredentialArnProps <a name="FinspaceAPICredentialArnProps" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps"></a>

Properties for building a credential ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

const finspaceAPICredentialArnProps: finspace_api.FinspaceAPICredentialArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceAPIActions <a name="FinspaceAPIActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions"></a>

IAM action constants for the finspace-api service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

new finspace_api.FinspaceAPIActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.actionGetProgrammaticAccessCredentials">actionGetProgrammaticAccessCredentials</a></code> | <code>string</code> | [Read] finspace-api:GetProgrammaticAccessCredentials. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetProgrammaticAccessCredentials`<sup>Required</sup> <a name="actionGetProgrammaticAccessCredentials" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.actionGetProgrammaticAccessCredentials"></a>

```typescript
public readonly actionGetProgrammaticAccessCredentials: string;
```

- *Type:* string

[Read] finspace-api:GetProgrammaticAccessCredentials.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.finspace_api.FinspaceAPIActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### FinspaceAPIResources <a name="FinspaceAPIResources" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources"></a>

ARN builders, validators, and parsers for finspace-api resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.Initializer"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

new finspace_api.FinspaceAPIResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIResources.credential">credential</a></code> | Builds an ARN for the credential resource. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIResources.isValidCredentialArn">isValidCredentialArn</a></code> | Validates whether a string is a valid ARN for the credential resource. |
| <code><a href="#@cdk_utils/iam.finspace_api.FinspaceAPIResources.parseCredentialArn">parseCredentialArn</a></code> | Parses a credential ARN into its components. |

---

##### `credential` <a name="credential" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.credential"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

finspace_api.FinspaceAPIResources.credential(props: FinspaceAPICredentialArnProps)
```

Builds an ARN for the credential resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.credential.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.finspace_api.FinspaceAPICredentialArnProps">FinspaceAPICredentialArnProps</a>

---

##### `isValidCredentialArn` <a name="isValidCredentialArn" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.isValidCredentialArn"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

finspace_api.FinspaceAPIResources.isValidCredentialArn(arn: string)
```

Validates whether a string is a valid ARN for the credential resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.isValidCredentialArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCredentialArn` <a name="parseCredentialArn" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.parseCredentialArn"></a>

```typescript
import { finspace_api } from '@cdk_utils/iam'

finspace_api.FinspaceAPIResources.parseCredentialArn(arn: string)
```

Parses a credential ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.finspace_api.FinspaceAPIResources.parseCredentialArn.parameter.arn"></a>

- *Type:* string

---




