# `proton` Submodule <a name="`proton` Submodule" id="@cdk_utils/iam.proton"></a>


## Structs <a name="Structs" id="Structs"></a>

### ProtonComponentArnComponents <a name="ProtonComponentArnComponents" id="@cdk_utils/iam.proton.ProtonComponentArnComponents"></a>

Parsed components of a component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonComponentArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonComponentArnComponents: proton.ProtonComponentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonComponentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonComponentArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonComponentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonComponentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonComponentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.proton.ProtonComponentArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonComponentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonComponentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProtonComponentArnProps <a name="ProtonComponentArnProps" id="@cdk_utils/iam.proton.ProtonComponentArnProps"></a>

Properties for building a component ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonComponentArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonComponentArnProps: proton.ProtonComponentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonComponentArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonComponentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonComponentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonComponentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.proton.ProtonComponentArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonComponentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonComponentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonComponentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonDeploymentArnComponents <a name="ProtonDeploymentArnComponents" id="@cdk_utils/iam.proton.ProtonDeploymentArnComponents"></a>

Parsed components of a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonDeploymentArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonDeploymentArnComponents: proton.ProtonDeploymentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonDeploymentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonDeploymentArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonDeploymentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonDeploymentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonDeploymentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.proton.ProtonDeploymentArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonDeploymentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonDeploymentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProtonDeploymentArnProps <a name="ProtonDeploymentArnProps" id="@cdk_utils/iam.proton.ProtonDeploymentArnProps"></a>

Properties for building a deployment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonDeploymentArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonDeploymentArnProps: proton.ProtonDeploymentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonDeploymentArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonDeploymentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonDeploymentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonDeploymentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.proton.ProtonDeploymentArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonDeploymentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonDeploymentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonDeploymentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonEnvironmentAccountConnectionArnComponents <a name="ProtonEnvironmentAccountConnectionArnComponents" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents"></a>

Parsed components of a environment-account-connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentAccountConnectionArnComponents: proton.ProtonEnvironmentAccountConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProtonEnvironmentAccountConnectionArnProps <a name="ProtonEnvironmentAccountConnectionArnProps" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps"></a>

Properties for building a environment-account-connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentAccountConnectionArnProps: proton.ProtonEnvironmentAccountConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonEnvironmentArnComponents <a name="ProtonEnvironmentArnComponents" id="@cdk_utils/iam.proton.ProtonEnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentArnComponents: proton.ProtonEnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProtonEnvironmentArnProps <a name="ProtonEnvironmentArnProps" id="@cdk_utils/iam.proton.ProtonEnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentArnProps: proton.ProtonEnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonEnvironmentArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonEnvironmentTemplateArnComponents <a name="ProtonEnvironmentTemplateArnComponents" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents"></a>

Parsed components of a environment-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentTemplateArnComponents: proton.ProtonEnvironmentTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProtonEnvironmentTemplateArnProps <a name="ProtonEnvironmentTemplateArnProps" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps"></a>

Properties for building a environment-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentTemplateArnProps: proton.ProtonEnvironmentTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonEnvironmentTemplateMajorVersionArnComponents <a name="ProtonEnvironmentTemplateMajorVersionArnComponents" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents"></a>

Parsed components of a environment-template-major-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentTemplateMajorVersionArnComponents: proton.ProtonEnvironmentTemplateMajorVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.majorVersionId">majorVersionId</a></code> | <code>string</code> | The MajorVersionId component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `majorVersionId`<sup>Required</sup> <a name="majorVersionId" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.majorVersionId"></a>

```typescript
public readonly majorVersionId: string;
```

- *Type:* string

The MajorVersionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### ProtonEnvironmentTemplateMajorVersionArnProps <a name="ProtonEnvironmentTemplateMajorVersionArnProps" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps"></a>

Properties for building a environment-template-major-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentTemplateMajorVersionArnProps: proton.ProtonEnvironmentTemplateMajorVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.majorVersionId">majorVersionId</a></code> | <code>string</code> | The MajorVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `majorVersionId`<sup>Required</sup> <a name="majorVersionId" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.majorVersionId"></a>

```typescript
public readonly majorVersionId: string;
```

- *Type:* string

The MajorVersionId component of the ARN.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonEnvironmentTemplateMinorVersionArnComponents <a name="ProtonEnvironmentTemplateMinorVersionArnComponents" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents"></a>

Parsed components of a environment-template-minor-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentTemplateMinorVersionArnComponents: proton.ProtonEnvironmentTemplateMinorVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.majorVersionId">majorVersionId</a></code> | <code>string</code> | The MajorVersionId component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.minorVersionId">minorVersionId</a></code> | <code>string</code> | The MinorVersionId component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `majorVersionId`<sup>Required</sup> <a name="majorVersionId" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.majorVersionId"></a>

```typescript
public readonly majorVersionId: string;
```

- *Type:* string

The MajorVersionId component.

---

##### `minorVersionId`<sup>Required</sup> <a name="minorVersionId" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.minorVersionId"></a>

```typescript
public readonly minorVersionId: string;
```

- *Type:* string

The MinorVersionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### ProtonEnvironmentTemplateMinorVersionArnProps <a name="ProtonEnvironmentTemplateMinorVersionArnProps" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps"></a>

Properties for building a environment-template-minor-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentTemplateMinorVersionArnProps: proton.ProtonEnvironmentTemplateMinorVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.majorVersionId">majorVersionId</a></code> | <code>string</code> | The MajorVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.minorVersionId">minorVersionId</a></code> | <code>string</code> | The MinorVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `majorVersionId`<sup>Required</sup> <a name="majorVersionId" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.majorVersionId"></a>

```typescript
public readonly majorVersionId: string;
```

- *Type:* string

The MajorVersionId component of the ARN.

---

##### `minorVersionId`<sup>Required</sup> <a name="minorVersionId" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.minorVersionId"></a>

```typescript
public readonly minorVersionId: string;
```

- *Type:* string

The MinorVersionId component of the ARN.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonEnvironmentTemplateVersionArnComponents <a name="ProtonEnvironmentTemplateVersionArnComponents" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents"></a>

Parsed components of a environment-template-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentTemplateVersionArnComponents: proton.ProtonEnvironmentTemplateVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.majorVersion">majorVersion</a></code> | <code>string</code> | The MajorVersion component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.minorVersion">minorVersion</a></code> | <code>string</code> | The MinorVersion component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

The MajorVersion component.

---

##### `minorVersion`<sup>Required</sup> <a name="minorVersion" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.minorVersion"></a>

```typescript
public readonly minorVersion: string;
```

- *Type:* string

The MinorVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### ProtonEnvironmentTemplateVersionArnProps <a name="ProtonEnvironmentTemplateVersionArnProps" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps"></a>

Properties for building a environment-template-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonEnvironmentTemplateVersionArnProps: proton.ProtonEnvironmentTemplateVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.majorVersion">majorVersion</a></code> | <code>string</code> | The MajorVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.minorVersion">minorVersion</a></code> | <code>string</code> | The MinorVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

The MajorVersion component of the ARN.

---

##### `minorVersion`<sup>Required</sup> <a name="minorVersion" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.minorVersion"></a>

```typescript
public readonly minorVersion: string;
```

- *Type:* string

The MinorVersion component of the ARN.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonRepositoryArnComponents <a name="ProtonRepositoryArnComponents" id="@cdk_utils/iam.proton.ProtonRepositoryArnComponents"></a>

Parsed components of a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonRepositoryArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonRepositoryArnComponents: proton.ProtonRepositoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.provider">provider</a></code> | <code>string</code> | The Provider component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The Provider component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonRepositoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProtonRepositoryArnProps <a name="ProtonRepositoryArnProps" id="@cdk_utils/iam.proton.ProtonRepositoryArnProps"></a>

Properties for building a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonRepositoryArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonRepositoryArnProps: proton.ProtonRepositoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.provider">provider</a></code> | <code>string</code> | The Provider component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The Provider component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonRepositoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonServiceArnComponents <a name="ProtonServiceArnComponents" id="@cdk_utils/iam.proton.ProtonServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceArnComponents: proton.ProtonServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonServiceArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProtonServiceArnProps <a name="ProtonServiceArnProps" id="@cdk_utils/iam.proton.ProtonServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceArnProps: proton.ProtonServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonServiceArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonServiceInstanceArnComponents <a name="ProtonServiceInstanceArnComponents" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents"></a>

Parsed components of a service-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceInstanceArnComponents: proton.ProtonServiceInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

### ProtonServiceInstanceArnProps <a name="ProtonServiceInstanceArnProps" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnProps"></a>

Properties for building a service-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceInstanceArnProps: proton.ProtonServiceInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonServiceTemplateArnComponents <a name="ProtonServiceTemplateArnComponents" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents"></a>

Parsed components of a service-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceTemplateArnComponents: proton.ProtonServiceTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ProtonServiceTemplateArnProps <a name="ProtonServiceTemplateArnProps" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnProps"></a>

Properties for building a service-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceTemplateArnProps: proton.ProtonServiceTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonServiceTemplateMajorVersionArnComponents <a name="ProtonServiceTemplateMajorVersionArnComponents" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents"></a>

Parsed components of a service-template-major-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceTemplateMajorVersionArnComponents: proton.ProtonServiceTemplateMajorVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.majorVersionId">majorVersionId</a></code> | <code>string</code> | The MajorVersionId component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `majorVersionId`<sup>Required</sup> <a name="majorVersionId" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.majorVersionId"></a>

```typescript
public readonly majorVersionId: string;
```

- *Type:* string

The MajorVersionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### ProtonServiceTemplateMajorVersionArnProps <a name="ProtonServiceTemplateMajorVersionArnProps" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps"></a>

Properties for building a service-template-major-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceTemplateMajorVersionArnProps: proton.ProtonServiceTemplateMajorVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.majorVersionId">majorVersionId</a></code> | <code>string</code> | The MajorVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `majorVersionId`<sup>Required</sup> <a name="majorVersionId" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.majorVersionId"></a>

```typescript
public readonly majorVersionId: string;
```

- *Type:* string

The MajorVersionId component of the ARN.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonServiceTemplateMinorVersionArnComponents <a name="ProtonServiceTemplateMinorVersionArnComponents" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents"></a>

Parsed components of a service-template-minor-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceTemplateMinorVersionArnComponents: proton.ProtonServiceTemplateMinorVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.majorVersionId">majorVersionId</a></code> | <code>string</code> | The MajorVersionId component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.minorVersionId">minorVersionId</a></code> | <code>string</code> | The MinorVersionId component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `majorVersionId`<sup>Required</sup> <a name="majorVersionId" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.majorVersionId"></a>

```typescript
public readonly majorVersionId: string;
```

- *Type:* string

The MajorVersionId component.

---

##### `minorVersionId`<sup>Required</sup> <a name="minorVersionId" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.minorVersionId"></a>

```typescript
public readonly minorVersionId: string;
```

- *Type:* string

The MinorVersionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### ProtonServiceTemplateMinorVersionArnProps <a name="ProtonServiceTemplateMinorVersionArnProps" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps"></a>

Properties for building a service-template-minor-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceTemplateMinorVersionArnProps: proton.ProtonServiceTemplateMinorVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.majorVersionId">majorVersionId</a></code> | <code>string</code> | The MajorVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.minorVersionId">minorVersionId</a></code> | <code>string</code> | The MinorVersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `majorVersionId`<sup>Required</sup> <a name="majorVersionId" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.majorVersionId"></a>

```typescript
public readonly majorVersionId: string;
```

- *Type:* string

The MajorVersionId component of the ARN.

---

##### `minorVersionId`<sup>Required</sup> <a name="minorVersionId" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.minorVersionId"></a>

```typescript
public readonly minorVersionId: string;
```

- *Type:* string

The MinorVersionId component of the ARN.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ProtonServiceTemplateVersionArnComponents <a name="ProtonServiceTemplateVersionArnComponents" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents"></a>

Parsed components of a service-template-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceTemplateVersionArnComponents: proton.ProtonServiceTemplateVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.majorVersion">majorVersion</a></code> | <code>string</code> | The MajorVersion component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.minorVersion">minorVersion</a></code> | <code>string</code> | The MinorVersion component. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

The MajorVersion component.

---

##### `minorVersion`<sup>Required</sup> <a name="minorVersion" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.minorVersion"></a>

```typescript
public readonly minorVersion: string;
```

- *Type:* string

The MinorVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnComponents.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component.

---

### ProtonServiceTemplateVersionArnProps <a name="ProtonServiceTemplateVersionArnProps" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps"></a>

Properties for building a service-template-version ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

const protonServiceTemplateVersionArnProps: proton.ProtonServiceTemplateVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.majorVersion">majorVersion</a></code> | <code>string</code> | The MajorVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.minorVersion">minorVersion</a></code> | <code>string</code> | The MinorVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.templateName">templateName</a></code> | <code>string</code> | The TemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.majorVersion"></a>

```typescript
public readonly majorVersion: string;
```

- *Type:* string

The MajorVersion component of the ARN.

---

##### `minorVersion`<sup>Required</sup> <a name="minorVersion" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.minorVersion"></a>

```typescript
public readonly minorVersion: string;
```

- *Type:* string

The MinorVersion component of the ARN.

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

The TemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ProtonActions <a name="ProtonActions" id="@cdk_utils/iam.proton.ProtonActions"></a>

IAM action constants for the proton service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.proton.ProtonActions.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

new proton.ProtonActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.AcceptEnvironmentAccountConnection">AcceptEnvironmentAccountConnection</a></code> | <code>string</code> | [Write] proton:AcceptEnvironmentAccountConnection. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetAccountRoles">actionGetAccountRoles</a></code> | <code>string</code> | [Read] proton:GetAccountRoles. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] proton:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetComponent">actionGetComponent</a></code> | <code>string</code> | [Read] proton:GetComponent. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetDeployment">actionGetDeployment</a></code> | <code>string</code> | [Read] proton:GetDeployment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironment">actionGetEnvironment</a></code> | <code>string</code> | [Read] proton:GetEnvironment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentAccountConnection">actionGetEnvironmentAccountConnection</a></code> | <code>string</code> | [Read] proton:GetEnvironmentAccountConnection. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentTemplate">actionGetEnvironmentTemplate</a></code> | <code>string</code> | [Read] proton:GetEnvironmentTemplate. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentTemplateMajorVersion">actionGetEnvironmentTemplateMajorVersion</a></code> | <code>string</code> | [Read] proton:GetEnvironmentTemplateMajorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentTemplateMinorVersion">actionGetEnvironmentTemplateMinorVersion</a></code> | <code>string</code> | [Read] proton:GetEnvironmentTemplateMinorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentTemplateVersion">actionGetEnvironmentTemplateVersion</a></code> | <code>string</code> | [Read] proton:GetEnvironmentTemplateVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetRepository">actionGetRepository</a></code> | <code>string</code> | [Read] proton:GetRepository. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetRepositorySyncStatus">actionGetRepositorySyncStatus</a></code> | <code>string</code> | [Read] proton:GetRepositorySyncStatus. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetResourcesSummary">actionGetResourcesSummary</a></code> | <code>string</code> | [Read] proton:GetResourcesSummary. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetResourceTemplateVersionStatusCounts">actionGetResourceTemplateVersionStatusCounts</a></code> | <code>string</code> | [Read] proton:GetResourceTemplateVersionStatusCounts. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] proton:GetService. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceInstance">actionGetServiceInstance</a></code> | <code>string</code> | [Read] proton:GetServiceInstance. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceInstanceSyncStatus">actionGetServiceInstanceSyncStatus</a></code> | <code>string</code> | [Read] proton:GetServiceInstanceSyncStatus. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceSyncBlockerSummary">actionGetServiceSyncBlockerSummary</a></code> | <code>string</code> | [Read] proton:GetServiceSyncBlockerSummary. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceSyncConfig">actionGetServiceSyncConfig</a></code> | <code>string</code> | [Read] proton:GetServiceSyncConfig. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceTemplate">actionGetServiceTemplate</a></code> | <code>string</code> | [Read] proton:GetServiceTemplate. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceTemplateMajorVersion">actionGetServiceTemplateMajorVersion</a></code> | <code>string</code> | [Read] proton:GetServiceTemplateMajorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceTemplateMinorVersion">actionGetServiceTemplateMinorVersion</a></code> | <code>string</code> | [Read] proton:GetServiceTemplateMinorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceTemplateVersion">actionGetServiceTemplateVersion</a></code> | <code>string</code> | [Read] proton:GetServiceTemplateVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetTemplateSyncConfig">actionGetTemplateSyncConfig</a></code> | <code>string</code> | [Read] proton:GetTemplateSyncConfig. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.actionGetTemplateSyncStatus">actionGetTemplateSyncStatus</a></code> | <code>string</code> | [Read] proton:GetTemplateSyncStatus. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CancelComponentDeployment">CancelComponentDeployment</a></code> | <code>string</code> | [Write] proton:CancelComponentDeployment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CancelEnvironmentDeployment">CancelEnvironmentDeployment</a></code> | <code>string</code> | [Write] proton:CancelEnvironmentDeployment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CancelServiceInstanceDeployment">CancelServiceInstanceDeployment</a></code> | <code>string</code> | [Write] proton:CancelServiceInstanceDeployment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CancelServicePipelineDeployment">CancelServicePipelineDeployment</a></code> | <code>string</code> | [Write] proton:CancelServicePipelineDeployment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateComponent">CreateComponent</a></code> | <code>string</code> | [Write] proton:CreateComponent. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string</code> | [Write] proton:CreateEnvironment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentAccountConnection">CreateEnvironmentAccountConnection</a></code> | <code>string</code> | [Write] proton:CreateEnvironmentAccountConnection. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentTemplate">CreateEnvironmentTemplate</a></code> | <code>string</code> | [Write] proton:CreateEnvironmentTemplate. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentTemplateMajorVersion">CreateEnvironmentTemplateMajorVersion</a></code> | <code>string</code> | [Write] proton:CreateEnvironmentTemplateMajorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentTemplateMinorVersion">CreateEnvironmentTemplateMinorVersion</a></code> | <code>string</code> | [Write] proton:CreateEnvironmentTemplateMinorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentTemplateVersion">CreateEnvironmentTemplateVersion</a></code> | <code>string</code> | [Write] proton:CreateEnvironmentTemplateVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateRepository">CreateRepository</a></code> | <code>string</code> | [Write] proton:CreateRepository. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateService">CreateService</a></code> | <code>string</code> | [Write] proton:CreateService. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateServiceInstance">CreateServiceInstance</a></code> | <code>string</code> | [Write] proton:CreateServiceInstance. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateServiceSyncConfig">CreateServiceSyncConfig</a></code> | <code>string</code> | [Write] proton:CreateServiceSyncConfig. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateServiceTemplate">CreateServiceTemplate</a></code> | <code>string</code> | [Write] proton:CreateServiceTemplate. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateServiceTemplateMajorVersion">CreateServiceTemplateMajorVersion</a></code> | <code>string</code> | [Write] proton:CreateServiceTemplateMajorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateServiceTemplateMinorVersion">CreateServiceTemplateMinorVersion</a></code> | <code>string</code> | [Write] proton:CreateServiceTemplateMinorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateServiceTemplateVersion">CreateServiceTemplateVersion</a></code> | <code>string</code> | [Write] proton:CreateServiceTemplateVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.CreateTemplateSyncConfig">CreateTemplateSyncConfig</a></code> | <code>string</code> | [Write] proton:CreateTemplateSyncConfig. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteAccountRoles">DeleteAccountRoles</a></code> | <code>string</code> | [Write] proton:DeleteAccountRoles. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteComponent">DeleteComponent</a></code> | <code>string</code> | [Write] proton:DeleteComponent. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string</code> | [Write] proton:DeleteDeployment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] proton:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentAccountConnection">DeleteEnvironmentAccountConnection</a></code> | <code>string</code> | [Write] proton:DeleteEnvironmentAccountConnection. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentTemplate">DeleteEnvironmentTemplate</a></code> | <code>string</code> | [Write] proton:DeleteEnvironmentTemplate. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentTemplateMajorVersion">DeleteEnvironmentTemplateMajorVersion</a></code> | <code>string</code> | [Write] proton:DeleteEnvironmentTemplateMajorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentTemplateMinorVersion">DeleteEnvironmentTemplateMinorVersion</a></code> | <code>string</code> | [Write] proton:DeleteEnvironmentTemplateMinorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentTemplateVersion">DeleteEnvironmentTemplateVersion</a></code> | <code>string</code> | [Write] proton:DeleteEnvironmentTemplateVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteRepository">DeleteRepository</a></code> | <code>string</code> | [Write] proton:DeleteRepository. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteService">DeleteService</a></code> | <code>string</code> | [Write] proton:DeleteService. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceSyncConfig">DeleteServiceSyncConfig</a></code> | <code>string</code> | [Write] proton:DeleteServiceSyncConfig. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceTemplate">DeleteServiceTemplate</a></code> | <code>string</code> | [Write] proton:DeleteServiceTemplate. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceTemplateMajorVersion">DeleteServiceTemplateMajorVersion</a></code> | <code>string</code> | [Write] proton:DeleteServiceTemplateMajorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceTemplateMinorVersion">DeleteServiceTemplateMinorVersion</a></code> | <code>string</code> | [Write] proton:DeleteServiceTemplateMinorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceTemplateVersion">DeleteServiceTemplateVersion</a></code> | <code>string</code> | [Write] proton:DeleteServiceTemplateVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.DeleteTemplateSyncConfig">DeleteTemplateSyncConfig</a></code> | <code>string</code> | [Write] proton:DeleteTemplateSyncConfig. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListComponentOutputs">ListComponentOutputs</a></code> | <code>string</code> | [List] proton:ListComponentOutputs. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListComponentProvisionedResources">ListComponentProvisionedResources</a></code> | <code>string</code> | [List] proton:ListComponentProvisionedResources. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListComponents">ListComponents</a></code> | <code>string</code> | [List] proton:ListComponents. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListDeployments">ListDeployments</a></code> | <code>string</code> | [List] proton:ListDeployments. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentAccountConnections">ListEnvironmentAccountConnections</a></code> | <code>string</code> | [List] proton:ListEnvironmentAccountConnections. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentOutputs">ListEnvironmentOutputs</a></code> | <code>string</code> | [List] proton:ListEnvironmentOutputs. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentProvisionedResources">ListEnvironmentProvisionedResources</a></code> | <code>string</code> | [List] proton:ListEnvironmentProvisionedResources. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [List] proton:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentTemplateMajorVersions">ListEnvironmentTemplateMajorVersions</a></code> | <code>string</code> | [List] proton:ListEnvironmentTemplateMajorVersions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentTemplateMinorVersions">ListEnvironmentTemplateMinorVersions</a></code> | <code>string</code> | [List] proton:ListEnvironmentTemplateMinorVersions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentTemplates">ListEnvironmentTemplates</a></code> | <code>string</code> | [List] proton:ListEnvironmentTemplates. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentTemplateVersions">ListEnvironmentTemplateVersions</a></code> | <code>string</code> | [List] proton:ListEnvironmentTemplateVersions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListRepositories">ListRepositories</a></code> | <code>string</code> | [List] proton:ListRepositories. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListRepositorySyncDefinitions">ListRepositorySyncDefinitions</a></code> | <code>string</code> | [List] proton:ListRepositorySyncDefinitions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServiceInstanceOutputs">ListServiceInstanceOutputs</a></code> | <code>string</code> | [List] proton:ListServiceInstanceOutputs. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServiceInstanceProvisionedResources">ListServiceInstanceProvisionedResources</a></code> | <code>string</code> | [List] proton:ListServiceInstanceProvisionedResources. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServiceInstances">ListServiceInstances</a></code> | <code>string</code> | [List] proton:ListServiceInstances. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServicePipelineOutputs">ListServicePipelineOutputs</a></code> | <code>string</code> | [List] proton:ListServicePipelineOutputs. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServicePipelineProvisionedResources">ListServicePipelineProvisionedResources</a></code> | <code>string</code> | [List] proton:ListServicePipelineProvisionedResources. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServices">ListServices</a></code> | <code>string</code> | [List] proton:ListServices. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServiceTemplateMajorVersions">ListServiceTemplateMajorVersions</a></code> | <code>string</code> | [List] proton:ListServiceTemplateMajorVersions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServiceTemplateMinorVersions">ListServiceTemplateMinorVersions</a></code> | <code>string</code> | [List] proton:ListServiceTemplateMinorVersions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServiceTemplates">ListServiceTemplates</a></code> | <code>string</code> | [List] proton:ListServiceTemplates. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListServiceTemplateVersions">ListServiceTemplateVersions</a></code> | <code>string</code> | [List] proton:ListServiceTemplateVersions. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] proton:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.NotifyResourceDeploymentStatusChange">NotifyResourceDeploymentStatusChange</a></code> | <code>string</code> | [Write] proton:NotifyResourceDeploymentStatusChange. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.RejectEnvironmentAccountConnection">RejectEnvironmentAccountConnection</a></code> | <code>string</code> | [Write] proton:RejectEnvironmentAccountConnection. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] proton:TagResource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] proton:UntagResource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateAccountRoles">UpdateAccountRoles</a></code> | <code>string</code> | [Write] proton:UpdateAccountRoles. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string</code> | [Write] proton:UpdateAccountSettings. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateComponent">UpdateComponent</a></code> | <code>string</code> | [Write] proton:UpdateComponent. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] proton:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentAccountConnection">UpdateEnvironmentAccountConnection</a></code> | <code>string</code> | [Write] proton:UpdateEnvironmentAccountConnection. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentTemplate">UpdateEnvironmentTemplate</a></code> | <code>string</code> | [Write] proton:UpdateEnvironmentTemplate. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentTemplateMajorVersion">UpdateEnvironmentTemplateMajorVersion</a></code> | <code>string</code> | [Write] proton:UpdateEnvironmentTemplateMajorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentTemplateMinorVersion">UpdateEnvironmentTemplateMinorVersion</a></code> | <code>string</code> | [Write] proton:UpdateEnvironmentTemplateMinorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentTemplateVersion">UpdateEnvironmentTemplateVersion</a></code> | <code>string</code> | [Write] proton:UpdateEnvironmentTemplateVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateService">UpdateService</a></code> | <code>string</code> | [Write] proton:UpdateService. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceInstance">UpdateServiceInstance</a></code> | <code>string</code> | [Write] proton:UpdateServiceInstance. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateServicePipeline">UpdateServicePipeline</a></code> | <code>string</code> | [Write] proton:UpdateServicePipeline. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceSyncBlocker">UpdateServiceSyncBlocker</a></code> | <code>string</code> | [Write] proton:UpdateServiceSyncBlocker. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceSyncConfig">UpdateServiceSyncConfig</a></code> | <code>string</code> | [Write] proton:UpdateServiceSyncConfig. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceTemplate">UpdateServiceTemplate</a></code> | <code>string</code> | [Write] proton:UpdateServiceTemplate. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceTemplateMajorVersion">UpdateServiceTemplateMajorVersion</a></code> | <code>string</code> | [Write] proton:UpdateServiceTemplateMajorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceTemplateMinorVersion">UpdateServiceTemplateMinorVersion</a></code> | <code>string</code> | [Write] proton:UpdateServiceTemplateMinorVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceTemplateVersion">UpdateServiceTemplateVersion</a></code> | <code>string</code> | [Write] proton:UpdateServiceTemplateVersion. |
| <code><a href="#@cdk_utils/iam.proton.ProtonActions.property.UpdateTemplateSyncConfig">UpdateTemplateSyncConfig</a></code> | <code>string</code> | [Write] proton:UpdateTemplateSyncConfig. |

---

##### `AcceptEnvironmentAccountConnection`<sup>Required</sup> <a name="AcceptEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonActions.property.AcceptEnvironmentAccountConnection"></a>

```typescript
public readonly AcceptEnvironmentAccountConnection: string;
```

- *Type:* string

[Write] proton:AcceptEnvironmentAccountConnection.

---

##### `actionGetAccountRoles`<sup>Required</sup> <a name="actionGetAccountRoles" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetAccountRoles"></a>

```typescript
public readonly actionGetAccountRoles: string;
```

- *Type:* string

[Read] proton:GetAccountRoles.

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] proton:GetAccountSettings.

---

##### `actionGetComponent`<sup>Required</sup> <a name="actionGetComponent" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetComponent"></a>

```typescript
public readonly actionGetComponent: string;
```

- *Type:* string

[Read] proton:GetComponent.

---

##### `actionGetDeployment`<sup>Required</sup> <a name="actionGetDeployment" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetDeployment"></a>

```typescript
public readonly actionGetDeployment: string;
```

- *Type:* string

[Read] proton:GetDeployment.

---

##### `actionGetEnvironment`<sup>Required</sup> <a name="actionGetEnvironment" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironment"></a>

```typescript
public readonly actionGetEnvironment: string;
```

- *Type:* string

[Read] proton:GetEnvironment.

---

##### `actionGetEnvironmentAccountConnection`<sup>Required</sup> <a name="actionGetEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentAccountConnection"></a>

```typescript
public readonly actionGetEnvironmentAccountConnection: string;
```

- *Type:* string

[Read] proton:GetEnvironmentAccountConnection.

---

##### `actionGetEnvironmentTemplate`<sup>Required</sup> <a name="actionGetEnvironmentTemplate" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentTemplate"></a>

```typescript
public readonly actionGetEnvironmentTemplate: string;
```

- *Type:* string

[Read] proton:GetEnvironmentTemplate.

---

##### `actionGetEnvironmentTemplateMajorVersion`<sup>Required</sup> <a name="actionGetEnvironmentTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentTemplateMajorVersion"></a>

```typescript
public readonly actionGetEnvironmentTemplateMajorVersion: string;
```

- *Type:* string

[Read] proton:GetEnvironmentTemplateMajorVersion.

---

##### `actionGetEnvironmentTemplateMinorVersion`<sup>Required</sup> <a name="actionGetEnvironmentTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentTemplateMinorVersion"></a>

```typescript
public readonly actionGetEnvironmentTemplateMinorVersion: string;
```

- *Type:* string

[Read] proton:GetEnvironmentTemplateMinorVersion.

---

##### `actionGetEnvironmentTemplateVersion`<sup>Required</sup> <a name="actionGetEnvironmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetEnvironmentTemplateVersion"></a>

```typescript
public readonly actionGetEnvironmentTemplateVersion: string;
```

- *Type:* string

[Read] proton:GetEnvironmentTemplateVersion.

---

##### `actionGetRepository`<sup>Required</sup> <a name="actionGetRepository" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetRepository"></a>

```typescript
public readonly actionGetRepository: string;
```

- *Type:* string

[Read] proton:GetRepository.

---

##### `actionGetRepositorySyncStatus`<sup>Required</sup> <a name="actionGetRepositorySyncStatus" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetRepositorySyncStatus"></a>

```typescript
public readonly actionGetRepositorySyncStatus: string;
```

- *Type:* string

[Read] proton:GetRepositorySyncStatus.

---

##### `actionGetResourcesSummary`<sup>Required</sup> <a name="actionGetResourcesSummary" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetResourcesSummary"></a>

```typescript
public readonly actionGetResourcesSummary: string;
```

- *Type:* string

[Read] proton:GetResourcesSummary.

---

##### `actionGetResourceTemplateVersionStatusCounts`<sup>Required</sup> <a name="actionGetResourceTemplateVersionStatusCounts" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetResourceTemplateVersionStatusCounts"></a>

```typescript
public readonly actionGetResourceTemplateVersionStatusCounts: string;
```

- *Type:* string

[Read] proton:GetResourceTemplateVersionStatusCounts.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] proton:GetService.

---

##### `actionGetServiceInstance`<sup>Required</sup> <a name="actionGetServiceInstance" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceInstance"></a>

```typescript
public readonly actionGetServiceInstance: string;
```

- *Type:* string

[Read] proton:GetServiceInstance.

---

##### `actionGetServiceInstanceSyncStatus`<sup>Required</sup> <a name="actionGetServiceInstanceSyncStatus" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceInstanceSyncStatus"></a>

```typescript
public readonly actionGetServiceInstanceSyncStatus: string;
```

- *Type:* string

[Read] proton:GetServiceInstanceSyncStatus.

---

##### `actionGetServiceSyncBlockerSummary`<sup>Required</sup> <a name="actionGetServiceSyncBlockerSummary" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceSyncBlockerSummary"></a>

```typescript
public readonly actionGetServiceSyncBlockerSummary: string;
```

- *Type:* string

[Read] proton:GetServiceSyncBlockerSummary.

---

##### `actionGetServiceSyncConfig`<sup>Required</sup> <a name="actionGetServiceSyncConfig" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceSyncConfig"></a>

```typescript
public readonly actionGetServiceSyncConfig: string;
```

- *Type:* string

[Read] proton:GetServiceSyncConfig.

---

##### `actionGetServiceTemplate`<sup>Required</sup> <a name="actionGetServiceTemplate" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceTemplate"></a>

```typescript
public readonly actionGetServiceTemplate: string;
```

- *Type:* string

[Read] proton:GetServiceTemplate.

---

##### `actionGetServiceTemplateMajorVersion`<sup>Required</sup> <a name="actionGetServiceTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceTemplateMajorVersion"></a>

```typescript
public readonly actionGetServiceTemplateMajorVersion: string;
```

- *Type:* string

[Read] proton:GetServiceTemplateMajorVersion.

---

##### `actionGetServiceTemplateMinorVersion`<sup>Required</sup> <a name="actionGetServiceTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceTemplateMinorVersion"></a>

```typescript
public readonly actionGetServiceTemplateMinorVersion: string;
```

- *Type:* string

[Read] proton:GetServiceTemplateMinorVersion.

---

##### `actionGetServiceTemplateVersion`<sup>Required</sup> <a name="actionGetServiceTemplateVersion" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetServiceTemplateVersion"></a>

```typescript
public readonly actionGetServiceTemplateVersion: string;
```

- *Type:* string

[Read] proton:GetServiceTemplateVersion.

---

##### `actionGetTemplateSyncConfig`<sup>Required</sup> <a name="actionGetTemplateSyncConfig" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetTemplateSyncConfig"></a>

```typescript
public readonly actionGetTemplateSyncConfig: string;
```

- *Type:* string

[Read] proton:GetTemplateSyncConfig.

---

##### `actionGetTemplateSyncStatus`<sup>Required</sup> <a name="actionGetTemplateSyncStatus" id="@cdk_utils/iam.proton.ProtonActions.property.actionGetTemplateSyncStatus"></a>

```typescript
public readonly actionGetTemplateSyncStatus: string;
```

- *Type:* string

[Read] proton:GetTemplateSyncStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.proton.ProtonActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.proton.ProtonActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.proton.ProtonActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.proton.ProtonActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.proton.ProtonActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelComponentDeployment`<sup>Required</sup> <a name="CancelComponentDeployment" id="@cdk_utils/iam.proton.ProtonActions.property.CancelComponentDeployment"></a>

```typescript
public readonly CancelComponentDeployment: string;
```

- *Type:* string

[Write] proton:CancelComponentDeployment.

---

##### `CancelEnvironmentDeployment`<sup>Required</sup> <a name="CancelEnvironmentDeployment" id="@cdk_utils/iam.proton.ProtonActions.property.CancelEnvironmentDeployment"></a>

```typescript
public readonly CancelEnvironmentDeployment: string;
```

- *Type:* string

[Write] proton:CancelEnvironmentDeployment.

---

##### `CancelServiceInstanceDeployment`<sup>Required</sup> <a name="CancelServiceInstanceDeployment" id="@cdk_utils/iam.proton.ProtonActions.property.CancelServiceInstanceDeployment"></a>

```typescript
public readonly CancelServiceInstanceDeployment: string;
```

- *Type:* string

[Write] proton:CancelServiceInstanceDeployment.

---

##### `CancelServicePipelineDeployment`<sup>Required</sup> <a name="CancelServicePipelineDeployment" id="@cdk_utils/iam.proton.ProtonActions.property.CancelServicePipelineDeployment"></a>

```typescript
public readonly CancelServicePipelineDeployment: string;
```

- *Type:* string

[Write] proton:CancelServicePipelineDeployment.

---

##### `CreateComponent`<sup>Required</sup> <a name="CreateComponent" id="@cdk_utils/iam.proton.ProtonActions.property.CreateComponent"></a>

```typescript
public readonly CreateComponent: string;
```

- *Type:* string

[Write] proton:CreateComponent.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string;
```

- *Type:* string

[Write] proton:CreateEnvironment.

---

##### `CreateEnvironmentAccountConnection`<sup>Required</sup> <a name="CreateEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentAccountConnection"></a>

```typescript
public readonly CreateEnvironmentAccountConnection: string;
```

- *Type:* string

[Write] proton:CreateEnvironmentAccountConnection.

---

##### `CreateEnvironmentTemplate`<sup>Required</sup> <a name="CreateEnvironmentTemplate" id="@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentTemplate"></a>

```typescript
public readonly CreateEnvironmentTemplate: string;
```

- *Type:* string

[Write] proton:CreateEnvironmentTemplate.

---

##### `CreateEnvironmentTemplateMajorVersion`<sup>Required</sup> <a name="CreateEnvironmentTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentTemplateMajorVersion"></a>

```typescript
public readonly CreateEnvironmentTemplateMajorVersion: string;
```

- *Type:* string

[Write] proton:CreateEnvironmentTemplateMajorVersion.

---

##### `CreateEnvironmentTemplateMinorVersion`<sup>Required</sup> <a name="CreateEnvironmentTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentTemplateMinorVersion"></a>

```typescript
public readonly CreateEnvironmentTemplateMinorVersion: string;
```

- *Type:* string

[Write] proton:CreateEnvironmentTemplateMinorVersion.

---

##### `CreateEnvironmentTemplateVersion`<sup>Required</sup> <a name="CreateEnvironmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonActions.property.CreateEnvironmentTemplateVersion"></a>

```typescript
public readonly CreateEnvironmentTemplateVersion: string;
```

- *Type:* string

[Write] proton:CreateEnvironmentTemplateVersion.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.proton.ProtonActions.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string;
```

- *Type:* string

[Write] proton:CreateRepository.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.proton.ProtonActions.property.CreateService"></a>

```typescript
public readonly CreateService: string;
```

- *Type:* string

[Write] proton:CreateService.

---

##### `CreateServiceInstance`<sup>Required</sup> <a name="CreateServiceInstance" id="@cdk_utils/iam.proton.ProtonActions.property.CreateServiceInstance"></a>

```typescript
public readonly CreateServiceInstance: string;
```

- *Type:* string

[Write] proton:CreateServiceInstance.

---

##### `CreateServiceSyncConfig`<sup>Required</sup> <a name="CreateServiceSyncConfig" id="@cdk_utils/iam.proton.ProtonActions.property.CreateServiceSyncConfig"></a>

```typescript
public readonly CreateServiceSyncConfig: string;
```

- *Type:* string

[Write] proton:CreateServiceSyncConfig.

---

##### `CreateServiceTemplate`<sup>Required</sup> <a name="CreateServiceTemplate" id="@cdk_utils/iam.proton.ProtonActions.property.CreateServiceTemplate"></a>

```typescript
public readonly CreateServiceTemplate: string;
```

- *Type:* string

[Write] proton:CreateServiceTemplate.

---

##### `CreateServiceTemplateMajorVersion`<sup>Required</sup> <a name="CreateServiceTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.CreateServiceTemplateMajorVersion"></a>

```typescript
public readonly CreateServiceTemplateMajorVersion: string;
```

- *Type:* string

[Write] proton:CreateServiceTemplateMajorVersion.

---

##### `CreateServiceTemplateMinorVersion`<sup>Required</sup> <a name="CreateServiceTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.CreateServiceTemplateMinorVersion"></a>

```typescript
public readonly CreateServiceTemplateMinorVersion: string;
```

- *Type:* string

[Write] proton:CreateServiceTemplateMinorVersion.

---

##### `CreateServiceTemplateVersion`<sup>Required</sup> <a name="CreateServiceTemplateVersion" id="@cdk_utils/iam.proton.ProtonActions.property.CreateServiceTemplateVersion"></a>

```typescript
public readonly CreateServiceTemplateVersion: string;
```

- *Type:* string

[Write] proton:CreateServiceTemplateVersion.

---

##### `CreateTemplateSyncConfig`<sup>Required</sup> <a name="CreateTemplateSyncConfig" id="@cdk_utils/iam.proton.ProtonActions.property.CreateTemplateSyncConfig"></a>

```typescript
public readonly CreateTemplateSyncConfig: string;
```

- *Type:* string

[Write] proton:CreateTemplateSyncConfig.

---

##### `DeleteAccountRoles`<sup>Required</sup> <a name="DeleteAccountRoles" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteAccountRoles"></a>

```typescript
public readonly DeleteAccountRoles: string;
```

- *Type:* string

[Write] proton:DeleteAccountRoles.

---

##### `DeleteComponent`<sup>Required</sup> <a name="DeleteComponent" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteComponent"></a>

```typescript
public readonly DeleteComponent: string;
```

- *Type:* string

[Write] proton:DeleteComponent.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string;
```

- *Type:* string

[Write] proton:DeleteDeployment.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] proton:DeleteEnvironment.

---

##### `DeleteEnvironmentAccountConnection`<sup>Required</sup> <a name="DeleteEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentAccountConnection"></a>

```typescript
public readonly DeleteEnvironmentAccountConnection: string;
```

- *Type:* string

[Write] proton:DeleteEnvironmentAccountConnection.

---

##### `DeleteEnvironmentTemplate`<sup>Required</sup> <a name="DeleteEnvironmentTemplate" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentTemplate"></a>

```typescript
public readonly DeleteEnvironmentTemplate: string;
```

- *Type:* string

[Write] proton:DeleteEnvironmentTemplate.

---

##### `DeleteEnvironmentTemplateMajorVersion`<sup>Required</sup> <a name="DeleteEnvironmentTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentTemplateMajorVersion"></a>

```typescript
public readonly DeleteEnvironmentTemplateMajorVersion: string;
```

- *Type:* string

[Write] proton:DeleteEnvironmentTemplateMajorVersion.

---

##### `DeleteEnvironmentTemplateMinorVersion`<sup>Required</sup> <a name="DeleteEnvironmentTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentTemplateMinorVersion"></a>

```typescript
public readonly DeleteEnvironmentTemplateMinorVersion: string;
```

- *Type:* string

[Write] proton:DeleteEnvironmentTemplateMinorVersion.

---

##### `DeleteEnvironmentTemplateVersion`<sup>Required</sup> <a name="DeleteEnvironmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteEnvironmentTemplateVersion"></a>

```typescript
public readonly DeleteEnvironmentTemplateVersion: string;
```

- *Type:* string

[Write] proton:DeleteEnvironmentTemplateVersion.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string;
```

- *Type:* string

[Write] proton:DeleteRepository.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteService"></a>

```typescript
public readonly DeleteService: string;
```

- *Type:* string

[Write] proton:DeleteService.

---

##### `DeleteServiceSyncConfig`<sup>Required</sup> <a name="DeleteServiceSyncConfig" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceSyncConfig"></a>

```typescript
public readonly DeleteServiceSyncConfig: string;
```

- *Type:* string

[Write] proton:DeleteServiceSyncConfig.

---

##### `DeleteServiceTemplate`<sup>Required</sup> <a name="DeleteServiceTemplate" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceTemplate"></a>

```typescript
public readonly DeleteServiceTemplate: string;
```

- *Type:* string

[Write] proton:DeleteServiceTemplate.

---

##### `DeleteServiceTemplateMajorVersion`<sup>Required</sup> <a name="DeleteServiceTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceTemplateMajorVersion"></a>

```typescript
public readonly DeleteServiceTemplateMajorVersion: string;
```

- *Type:* string

[Write] proton:DeleteServiceTemplateMajorVersion.

---

##### `DeleteServiceTemplateMinorVersion`<sup>Required</sup> <a name="DeleteServiceTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceTemplateMinorVersion"></a>

```typescript
public readonly DeleteServiceTemplateMinorVersion: string;
```

- *Type:* string

[Write] proton:DeleteServiceTemplateMinorVersion.

---

##### `DeleteServiceTemplateVersion`<sup>Required</sup> <a name="DeleteServiceTemplateVersion" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteServiceTemplateVersion"></a>

```typescript
public readonly DeleteServiceTemplateVersion: string;
```

- *Type:* string

[Write] proton:DeleteServiceTemplateVersion.

---

##### `DeleteTemplateSyncConfig`<sup>Required</sup> <a name="DeleteTemplateSyncConfig" id="@cdk_utils/iam.proton.ProtonActions.property.DeleteTemplateSyncConfig"></a>

```typescript
public readonly DeleteTemplateSyncConfig: string;
```

- *Type:* string

[Write] proton:DeleteTemplateSyncConfig.

---

##### `ListComponentOutputs`<sup>Required</sup> <a name="ListComponentOutputs" id="@cdk_utils/iam.proton.ProtonActions.property.ListComponentOutputs"></a>

```typescript
public readonly ListComponentOutputs: string;
```

- *Type:* string

[List] proton:ListComponentOutputs.

---

##### `ListComponentProvisionedResources`<sup>Required</sup> <a name="ListComponentProvisionedResources" id="@cdk_utils/iam.proton.ProtonActions.property.ListComponentProvisionedResources"></a>

```typescript
public readonly ListComponentProvisionedResources: string;
```

- *Type:* string

[List] proton:ListComponentProvisionedResources.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.proton.ProtonActions.property.ListComponents"></a>

```typescript
public readonly ListComponents: string;
```

- *Type:* string

[List] proton:ListComponents.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.proton.ProtonActions.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string;
```

- *Type:* string

[List] proton:ListDeployments.

---

##### `ListEnvironmentAccountConnections`<sup>Required</sup> <a name="ListEnvironmentAccountConnections" id="@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentAccountConnections"></a>

```typescript
public readonly ListEnvironmentAccountConnections: string;
```

- *Type:* string

[List] proton:ListEnvironmentAccountConnections.

---

##### `ListEnvironmentOutputs`<sup>Required</sup> <a name="ListEnvironmentOutputs" id="@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentOutputs"></a>

```typescript
public readonly ListEnvironmentOutputs: string;
```

- *Type:* string

[List] proton:ListEnvironmentOutputs.

---

##### `ListEnvironmentProvisionedResources`<sup>Required</sup> <a name="ListEnvironmentProvisionedResources" id="@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentProvisionedResources"></a>

```typescript
public readonly ListEnvironmentProvisionedResources: string;
```

- *Type:* string

[List] proton:ListEnvironmentProvisionedResources.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.proton.ProtonActions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[List] proton:ListEnvironments.

---

##### `ListEnvironmentTemplateMajorVersions`<sup>Required</sup> <a name="ListEnvironmentTemplateMajorVersions" id="@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentTemplateMajorVersions"></a>

```typescript
public readonly ListEnvironmentTemplateMajorVersions: string;
```

- *Type:* string

[List] proton:ListEnvironmentTemplateMajorVersions.

---

##### `ListEnvironmentTemplateMinorVersions`<sup>Required</sup> <a name="ListEnvironmentTemplateMinorVersions" id="@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentTemplateMinorVersions"></a>

```typescript
public readonly ListEnvironmentTemplateMinorVersions: string;
```

- *Type:* string

[List] proton:ListEnvironmentTemplateMinorVersions.

---

##### `ListEnvironmentTemplates`<sup>Required</sup> <a name="ListEnvironmentTemplates" id="@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentTemplates"></a>

```typescript
public readonly ListEnvironmentTemplates: string;
```

- *Type:* string

[List] proton:ListEnvironmentTemplates.

---

##### `ListEnvironmentTemplateVersions`<sup>Required</sup> <a name="ListEnvironmentTemplateVersions" id="@cdk_utils/iam.proton.ProtonActions.property.ListEnvironmentTemplateVersions"></a>

```typescript
public readonly ListEnvironmentTemplateVersions: string;
```

- *Type:* string

[List] proton:ListEnvironmentTemplateVersions.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.proton.ProtonActions.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string;
```

- *Type:* string

[List] proton:ListRepositories.

---

##### `ListRepositorySyncDefinitions`<sup>Required</sup> <a name="ListRepositorySyncDefinitions" id="@cdk_utils/iam.proton.ProtonActions.property.ListRepositorySyncDefinitions"></a>

```typescript
public readonly ListRepositorySyncDefinitions: string;
```

- *Type:* string

[List] proton:ListRepositorySyncDefinitions.

---

##### `ListServiceInstanceOutputs`<sup>Required</sup> <a name="ListServiceInstanceOutputs" id="@cdk_utils/iam.proton.ProtonActions.property.ListServiceInstanceOutputs"></a>

```typescript
public readonly ListServiceInstanceOutputs: string;
```

- *Type:* string

[List] proton:ListServiceInstanceOutputs.

---

##### `ListServiceInstanceProvisionedResources`<sup>Required</sup> <a name="ListServiceInstanceProvisionedResources" id="@cdk_utils/iam.proton.ProtonActions.property.ListServiceInstanceProvisionedResources"></a>

```typescript
public readonly ListServiceInstanceProvisionedResources: string;
```

- *Type:* string

[List] proton:ListServiceInstanceProvisionedResources.

---

##### `ListServiceInstances`<sup>Required</sup> <a name="ListServiceInstances" id="@cdk_utils/iam.proton.ProtonActions.property.ListServiceInstances"></a>

```typescript
public readonly ListServiceInstances: string;
```

- *Type:* string

[List] proton:ListServiceInstances.

---

##### `ListServicePipelineOutputs`<sup>Required</sup> <a name="ListServicePipelineOutputs" id="@cdk_utils/iam.proton.ProtonActions.property.ListServicePipelineOutputs"></a>

```typescript
public readonly ListServicePipelineOutputs: string;
```

- *Type:* string

[List] proton:ListServicePipelineOutputs.

---

##### `ListServicePipelineProvisionedResources`<sup>Required</sup> <a name="ListServicePipelineProvisionedResources" id="@cdk_utils/iam.proton.ProtonActions.property.ListServicePipelineProvisionedResources"></a>

```typescript
public readonly ListServicePipelineProvisionedResources: string;
```

- *Type:* string

[List] proton:ListServicePipelineProvisionedResources.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.proton.ProtonActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[List] proton:ListServices.

---

##### `ListServiceTemplateMajorVersions`<sup>Required</sup> <a name="ListServiceTemplateMajorVersions" id="@cdk_utils/iam.proton.ProtonActions.property.ListServiceTemplateMajorVersions"></a>

```typescript
public readonly ListServiceTemplateMajorVersions: string;
```

- *Type:* string

[List] proton:ListServiceTemplateMajorVersions.

---

##### `ListServiceTemplateMinorVersions`<sup>Required</sup> <a name="ListServiceTemplateMinorVersions" id="@cdk_utils/iam.proton.ProtonActions.property.ListServiceTemplateMinorVersions"></a>

```typescript
public readonly ListServiceTemplateMinorVersions: string;
```

- *Type:* string

[List] proton:ListServiceTemplateMinorVersions.

---

##### `ListServiceTemplates`<sup>Required</sup> <a name="ListServiceTemplates" id="@cdk_utils/iam.proton.ProtonActions.property.ListServiceTemplates"></a>

```typescript
public readonly ListServiceTemplates: string;
```

- *Type:* string

[List] proton:ListServiceTemplates.

---

##### `ListServiceTemplateVersions`<sup>Required</sup> <a name="ListServiceTemplateVersions" id="@cdk_utils/iam.proton.ProtonActions.property.ListServiceTemplateVersions"></a>

```typescript
public readonly ListServiceTemplateVersions: string;
```

- *Type:* string

[List] proton:ListServiceTemplateVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.proton.ProtonActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] proton:ListTagsForResource.

---

##### `NotifyResourceDeploymentStatusChange`<sup>Required</sup> <a name="NotifyResourceDeploymentStatusChange" id="@cdk_utils/iam.proton.ProtonActions.property.NotifyResourceDeploymentStatusChange"></a>

```typescript
public readonly NotifyResourceDeploymentStatusChange: string;
```

- *Type:* string

[Write] proton:NotifyResourceDeploymentStatusChange.

---

##### `RejectEnvironmentAccountConnection`<sup>Required</sup> <a name="RejectEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonActions.property.RejectEnvironmentAccountConnection"></a>

```typescript
public readonly RejectEnvironmentAccountConnection: string;
```

- *Type:* string

[Write] proton:RejectEnvironmentAccountConnection.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.proton.ProtonActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.proton.ProtonActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] proton:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.proton.ProtonActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] proton:UntagResource.

---

##### `UpdateAccountRoles`<sup>Required</sup> <a name="UpdateAccountRoles" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateAccountRoles"></a>

```typescript
public readonly UpdateAccountRoles: string;
```

- *Type:* string

[Write] proton:UpdateAccountRoles.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string;
```

- *Type:* string

[Write] proton:UpdateAccountSettings.

---

##### `UpdateComponent`<sup>Required</sup> <a name="UpdateComponent" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateComponent"></a>

```typescript
public readonly UpdateComponent: string;
```

- *Type:* string

[Write] proton:UpdateComponent.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] proton:UpdateEnvironment.

---

##### `UpdateEnvironmentAccountConnection`<sup>Required</sup> <a name="UpdateEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentAccountConnection"></a>

```typescript
public readonly UpdateEnvironmentAccountConnection: string;
```

- *Type:* string

[Write] proton:UpdateEnvironmentAccountConnection.

---

##### `UpdateEnvironmentTemplate`<sup>Required</sup> <a name="UpdateEnvironmentTemplate" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentTemplate"></a>

```typescript
public readonly UpdateEnvironmentTemplate: string;
```

- *Type:* string

[Write] proton:UpdateEnvironmentTemplate.

---

##### `UpdateEnvironmentTemplateMajorVersion`<sup>Required</sup> <a name="UpdateEnvironmentTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentTemplateMajorVersion"></a>

```typescript
public readonly UpdateEnvironmentTemplateMajorVersion: string;
```

- *Type:* string

[Write] proton:UpdateEnvironmentTemplateMajorVersion.

---

##### `UpdateEnvironmentTemplateMinorVersion`<sup>Required</sup> <a name="UpdateEnvironmentTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentTemplateMinorVersion"></a>

```typescript
public readonly UpdateEnvironmentTemplateMinorVersion: string;
```

- *Type:* string

[Write] proton:UpdateEnvironmentTemplateMinorVersion.

---

##### `UpdateEnvironmentTemplateVersion`<sup>Required</sup> <a name="UpdateEnvironmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateEnvironmentTemplateVersion"></a>

```typescript
public readonly UpdateEnvironmentTemplateVersion: string;
```

- *Type:* string

[Write] proton:UpdateEnvironmentTemplateVersion.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateService"></a>

```typescript
public readonly UpdateService: string;
```

- *Type:* string

[Write] proton:UpdateService.

---

##### `UpdateServiceInstance`<sup>Required</sup> <a name="UpdateServiceInstance" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceInstance"></a>

```typescript
public readonly UpdateServiceInstance: string;
```

- *Type:* string

[Write] proton:UpdateServiceInstance.

---

##### `UpdateServicePipeline`<sup>Required</sup> <a name="UpdateServicePipeline" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateServicePipeline"></a>

```typescript
public readonly UpdateServicePipeline: string;
```

- *Type:* string

[Write] proton:UpdateServicePipeline.

---

##### `UpdateServiceSyncBlocker`<sup>Required</sup> <a name="UpdateServiceSyncBlocker" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceSyncBlocker"></a>

```typescript
public readonly UpdateServiceSyncBlocker: string;
```

- *Type:* string

[Write] proton:UpdateServiceSyncBlocker.

---

##### `UpdateServiceSyncConfig`<sup>Required</sup> <a name="UpdateServiceSyncConfig" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceSyncConfig"></a>

```typescript
public readonly UpdateServiceSyncConfig: string;
```

- *Type:* string

[Write] proton:UpdateServiceSyncConfig.

---

##### `UpdateServiceTemplate`<sup>Required</sup> <a name="UpdateServiceTemplate" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceTemplate"></a>

```typescript
public readonly UpdateServiceTemplate: string;
```

- *Type:* string

[Write] proton:UpdateServiceTemplate.

---

##### `UpdateServiceTemplateMajorVersion`<sup>Required</sup> <a name="UpdateServiceTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceTemplateMajorVersion"></a>

```typescript
public readonly UpdateServiceTemplateMajorVersion: string;
```

- *Type:* string

[Write] proton:UpdateServiceTemplateMajorVersion.

---

##### `UpdateServiceTemplateMinorVersion`<sup>Required</sup> <a name="UpdateServiceTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceTemplateMinorVersion"></a>

```typescript
public readonly UpdateServiceTemplateMinorVersion: string;
```

- *Type:* string

[Write] proton:UpdateServiceTemplateMinorVersion.

---

##### `UpdateServiceTemplateVersion`<sup>Required</sup> <a name="UpdateServiceTemplateVersion" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateServiceTemplateVersion"></a>

```typescript
public readonly UpdateServiceTemplateVersion: string;
```

- *Type:* string

[Write] proton:UpdateServiceTemplateVersion.

---

##### `UpdateTemplateSyncConfig`<sup>Required</sup> <a name="UpdateTemplateSyncConfig" id="@cdk_utils/iam.proton.ProtonActions.property.UpdateTemplateSyncConfig"></a>

```typescript
public readonly UpdateTemplateSyncConfig: string;
```

- *Type:* string

[Write] proton:UpdateTemplateSyncConfig.

---

### ProtonConditions <a name="ProtonConditions" id="@cdk_utils/iam.proton.ProtonConditions"></a>

Condition key constants and builders for proton.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.proton.ProtonConditions.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

new proton.ProtonConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.environmentTemplate">environmentTemplate</a></code> | Generates a condition block for `proton:EnvironmentTemplate`. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.serviceTemplate">serviceTemplate</a></code> | Generates a condition block for `proton:ServiceTemplate`. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `environmentTemplate` <a name="environmentTemplate" id="@cdk_utils/iam.proton.ProtonConditions.environmentTemplate"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonConditions.environmentTemplate(value: string)
```

Generates a condition block for `proton:EnvironmentTemplate`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.proton.ProtonConditions.environmentTemplate.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.proton.ProtonConditions.requestTag"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.proton.ProtonConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.proton.ProtonConditions.resourceTag"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.proton.ProtonConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `serviceTemplate` <a name="serviceTemplate" id="@cdk_utils/iam.proton.ProtonConditions.serviceTemplate"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonConditions.serviceTemplate(value: string)
```

Generates a condition block for `proton:ServiceTemplate`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.proton.ProtonConditions.serviceTemplate.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.proton.ProtonConditions.tagKeys"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.proton.ProtonConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CancelEnvironmentDeploymentConditionKeys">CancelEnvironmentDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelEnvironmentDeployment action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CancelServiceInstanceDeploymentConditionKeys">CancelServiceInstanceDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelServiceInstanceDeployment action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CancelServicePipelineDeploymentConditionKeys">CancelServicePipelineDeploymentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelServicePipelineDeployment action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateComponentConditionKeys">CreateComponentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateComponent action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentAccountConnectionConditionKeys">CreateEnvironmentAccountConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironmentAccountConnection action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentConditionKeys">CreateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironment action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentTemplateConditionKeys">CreateEnvironmentTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironmentTemplate action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentTemplateMajorVersionConditionKeys">CreateEnvironmentTemplateMajorVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironmentTemplateMajorVersion action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentTemplateMinorVersionConditionKeys">CreateEnvironmentTemplateMinorVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironmentTemplateMinorVersion action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentTemplateVersionConditionKeys">CreateEnvironmentTemplateVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironmentTemplateVersion action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateRepositoryConditionKeys">CreateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRepository action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceConditionKeys">CreateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateService action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceInstanceConditionKeys">CreateServiceInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceInstance action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceTemplateConditionKeys">CreateServiceTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceTemplate action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceTemplateMajorVersionConditionKeys">CreateServiceTemplateMajorVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceTemplateMajorVersion action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceTemplateMinorVersionConditionKeys">CreateServiceTemplateMinorVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceTemplateMinorVersion action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceTemplateVersionConditionKeys">CreateServiceTemplateVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceTemplateVersion action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.DeleteEnvironmentConditionKeys">DeleteEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEnvironment action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.DeleteServiceConditionKeys">DeleteServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteService action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.ENVIRONMENT_TEMPLATE">ENVIRONMENT_TEMPLATE</a></code> | <code>string</code> | Condition key: proton:EnvironmentTemplate (String). |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.SERVICE_TEMPLATE">SERVICE_TEMPLATE</a></code> | <code>string</code> | Condition key: proton:ServiceTemplate (String). |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.UpdateEnvironmentConditionKeys">UpdateEnvironmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEnvironment action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.UpdateServiceConditionKeys">UpdateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateService action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.UpdateServiceInstanceConditionKeys">UpdateServiceInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServiceInstance action. |
| <code><a href="#@cdk_utils/iam.proton.ProtonConditions.property.UpdateServicePipelineConditionKeys">UpdateServicePipelineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServicePipeline action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.proton.ProtonConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.proton.ProtonConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.proton.ProtonConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CancelEnvironmentDeploymentConditionKeys`<sup>Required</sup> <a name="CancelEnvironmentDeploymentConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CancelEnvironmentDeploymentConditionKeys"></a>

```typescript
public readonly CancelEnvironmentDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelEnvironmentDeployment action.

---

##### `CancelServiceInstanceDeploymentConditionKeys`<sup>Required</sup> <a name="CancelServiceInstanceDeploymentConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CancelServiceInstanceDeploymentConditionKeys"></a>

```typescript
public readonly CancelServiceInstanceDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelServiceInstanceDeployment action.

---

##### `CancelServicePipelineDeploymentConditionKeys`<sup>Required</sup> <a name="CancelServicePipelineDeploymentConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CancelServicePipelineDeploymentConditionKeys"></a>

```typescript
public readonly CancelServicePipelineDeploymentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelServicePipelineDeployment action.

---

##### `CreateComponentConditionKeys`<sup>Required</sup> <a name="CreateComponentConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateComponentConditionKeys"></a>

```typescript
public readonly CreateComponentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateComponent action.

---

##### `CreateEnvironmentAccountConnectionConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentAccountConnectionConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentAccountConnectionConditionKeys"></a>

```typescript
public readonly CreateEnvironmentAccountConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironmentAccountConnection action.

---

##### `CreateEnvironmentConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentConditionKeys"></a>

```typescript
public readonly CreateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironment action.

---

##### `CreateEnvironmentTemplateConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentTemplateConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentTemplateConditionKeys"></a>

```typescript
public readonly CreateEnvironmentTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironmentTemplate action.

---

##### `CreateEnvironmentTemplateMajorVersionConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentTemplateMajorVersionConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentTemplateMajorVersionConditionKeys"></a>

```typescript
public readonly CreateEnvironmentTemplateMajorVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironmentTemplateMajorVersion action.

---

##### `CreateEnvironmentTemplateMinorVersionConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentTemplateMinorVersionConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentTemplateMinorVersionConditionKeys"></a>

```typescript
public readonly CreateEnvironmentTemplateMinorVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironmentTemplateMinorVersion action.

---

##### `CreateEnvironmentTemplateVersionConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentTemplateVersionConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateEnvironmentTemplateVersionConditionKeys"></a>

```typescript
public readonly CreateEnvironmentTemplateVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironmentTemplateVersion action.

---

##### `CreateRepositoryConditionKeys`<sup>Required</sup> <a name="CreateRepositoryConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateRepositoryConditionKeys"></a>

```typescript
public readonly CreateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRepository action.

---

##### `CreateServiceConditionKeys`<sup>Required</sup> <a name="CreateServiceConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceConditionKeys"></a>

```typescript
public readonly CreateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateService action.

---

##### `CreateServiceInstanceConditionKeys`<sup>Required</sup> <a name="CreateServiceInstanceConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceInstanceConditionKeys"></a>

```typescript
public readonly CreateServiceInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceInstance action.

---

##### `CreateServiceTemplateConditionKeys`<sup>Required</sup> <a name="CreateServiceTemplateConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceTemplateConditionKeys"></a>

```typescript
public readonly CreateServiceTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceTemplate action.

---

##### `CreateServiceTemplateMajorVersionConditionKeys`<sup>Required</sup> <a name="CreateServiceTemplateMajorVersionConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceTemplateMajorVersionConditionKeys"></a>

```typescript
public readonly CreateServiceTemplateMajorVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceTemplateMajorVersion action.

---

##### `CreateServiceTemplateMinorVersionConditionKeys`<sup>Required</sup> <a name="CreateServiceTemplateMinorVersionConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceTemplateMinorVersionConditionKeys"></a>

```typescript
public readonly CreateServiceTemplateMinorVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceTemplateMinorVersion action.

---

##### `CreateServiceTemplateVersionConditionKeys`<sup>Required</sup> <a name="CreateServiceTemplateVersionConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.CreateServiceTemplateVersionConditionKeys"></a>

```typescript
public readonly CreateServiceTemplateVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceTemplateVersion action.

---

##### `DeleteEnvironmentConditionKeys`<sup>Required</sup> <a name="DeleteEnvironmentConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.DeleteEnvironmentConditionKeys"></a>

```typescript
public readonly DeleteEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEnvironment action.

---

##### `DeleteServiceConditionKeys`<sup>Required</sup> <a name="DeleteServiceConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.DeleteServiceConditionKeys"></a>

```typescript
public readonly DeleteServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteService action.

---

##### `ENVIRONMENT_TEMPLATE`<sup>Required</sup> <a name="ENVIRONMENT_TEMPLATE" id="@cdk_utils/iam.proton.ProtonConditions.property.ENVIRONMENT_TEMPLATE"></a>

```typescript
public readonly ENVIRONMENT_TEMPLATE: string;
```

- *Type:* string

Condition key: proton:EnvironmentTemplate (String).

---

##### `SERVICE_TEMPLATE`<sup>Required</sup> <a name="SERVICE_TEMPLATE" id="@cdk_utils/iam.proton.ProtonConditions.property.SERVICE_TEMPLATE"></a>

```typescript
public readonly SERVICE_TEMPLATE: string;
```

- *Type:* string

Condition key: proton:ServiceTemplate (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateEnvironmentConditionKeys`<sup>Required</sup> <a name="UpdateEnvironmentConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.UpdateEnvironmentConditionKeys"></a>

```typescript
public readonly UpdateEnvironmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEnvironment action.

---

##### `UpdateServiceConditionKeys`<sup>Required</sup> <a name="UpdateServiceConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.UpdateServiceConditionKeys"></a>

```typescript
public readonly UpdateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateService action.

---

##### `UpdateServiceInstanceConditionKeys`<sup>Required</sup> <a name="UpdateServiceInstanceConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.UpdateServiceInstanceConditionKeys"></a>

```typescript
public readonly UpdateServiceInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServiceInstance action.

---

##### `UpdateServicePipelineConditionKeys`<sup>Required</sup> <a name="UpdateServicePipelineConditionKeys" id="@cdk_utils/iam.proton.ProtonConditions.property.UpdateServicePipelineConditionKeys"></a>

```typescript
public readonly UpdateServicePipelineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServicePipeline action.

---

### ProtonOperations <a name="ProtonOperations" id="@cdk_utils/iam.proton.ProtonOperations"></a>

API operation to required IAM actions mapping for proton.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.proton.ProtonOperations.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

new proton.ProtonOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.AcceptEnvironmentAccountConnection">AcceptEnvironmentAccountConnection</a></code> | <code>string[]</code> | IAM actions required for the AcceptEnvironmentAccountConnection API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CancelComponentDeployment">CancelComponentDeployment</a></code> | <code>string[]</code> | IAM actions required for the CancelComponentDeployment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CancelEnvironmentDeployment">CancelEnvironmentDeployment</a></code> | <code>string[]</code> | IAM actions required for the CancelEnvironmentDeployment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CancelServiceInstanceDeployment">CancelServiceInstanceDeployment</a></code> | <code>string[]</code> | IAM actions required for the CancelServiceInstanceDeployment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CancelServicePipelineDeployment">CancelServicePipelineDeployment</a></code> | <code>string[]</code> | IAM actions required for the CancelServicePipelineDeployment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateComponent">CreateComponent</a></code> | <code>string[]</code> | IAM actions required for the CreateComponent API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateEnvironment">CreateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateEnvironmentAccountConnection">CreateEnvironmentAccountConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentAccountConnection API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateEnvironmentTemplate">CreateEnvironmentTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentTemplate API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateEnvironmentTemplateVersion">CreateEnvironmentTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateRepository">CreateRepository</a></code> | <code>string[]</code> | IAM actions required for the CreateRepository API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateService">CreateService</a></code> | <code>string[]</code> | IAM actions required for the CreateService API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateServiceInstance">CreateServiceInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceInstance API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateServiceSyncConfig">CreateServiceSyncConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceSyncConfig API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateServiceTemplate">CreateServiceTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceTemplate API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateServiceTemplateVersion">CreateServiceTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.CreateTemplateSyncConfig">CreateTemplateSyncConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplateSyncConfig API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteComponent">DeleteComponent</a></code> | <code>string[]</code> | IAM actions required for the DeleteComponent API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteDeployment">DeleteDeployment</a></code> | <code>string[]</code> | IAM actions required for the DeleteDeployment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteEnvironmentAccountConnection">DeleteEnvironmentAccountConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentAccountConnection API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteEnvironmentTemplate">DeleteEnvironmentTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentTemplate API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteEnvironmentTemplateVersion">DeleteEnvironmentTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteRepository">DeleteRepository</a></code> | <code>string[]</code> | IAM actions required for the DeleteRepository API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteService">DeleteService</a></code> | <code>string[]</code> | IAM actions required for the DeleteService API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteServiceSyncConfig">DeleteServiceSyncConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceSyncConfig API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteServiceTemplate">DeleteServiceTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceTemplate API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteServiceTemplateVersion">DeleteServiceTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.DeleteTemplateSyncConfig">DeleteTemplateSyncConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplateSyncConfig API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListComponentOutputs">ListComponentOutputs</a></code> | <code>string[]</code> | IAM actions required for the ListComponentOutputs API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListComponentProvisionedResources">ListComponentProvisionedResources</a></code> | <code>string[]</code> | IAM actions required for the ListComponentProvisionedResources API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListComponents">ListComponents</a></code> | <code>string[]</code> | IAM actions required for the ListComponents API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListDeployments">ListDeployments</a></code> | <code>string[]</code> | IAM actions required for the ListDeployments API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentAccountConnections">ListEnvironmentAccountConnections</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentAccountConnections API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentOutputs">ListEnvironmentOutputs</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentOutputs API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentProvisionedResources">ListEnvironmentProvisionedResources</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentProvisionedResources API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentTemplates">ListEnvironmentTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentTemplates API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentTemplateVersions">ListEnvironmentTemplateVersions</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironmentTemplateVersions API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListRepositories">ListRepositories</a></code> | <code>string[]</code> | IAM actions required for the ListRepositories API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListRepositorySyncDefinitions">ListRepositorySyncDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListRepositorySyncDefinitions API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListServiceInstanceOutputs">ListServiceInstanceOutputs</a></code> | <code>string[]</code> | IAM actions required for the ListServiceInstanceOutputs API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListServiceInstanceProvisionedResources">ListServiceInstanceProvisionedResources</a></code> | <code>string[]</code> | IAM actions required for the ListServiceInstanceProvisionedResources API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListServiceInstances">ListServiceInstances</a></code> | <code>string[]</code> | IAM actions required for the ListServiceInstances API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListServicePipelineOutputs">ListServicePipelineOutputs</a></code> | <code>string[]</code> | IAM actions required for the ListServicePipelineOutputs API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListServicePipelineProvisionedResources">ListServicePipelineProvisionedResources</a></code> | <code>string[]</code> | IAM actions required for the ListServicePipelineProvisionedResources API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListServiceTemplates">ListServiceTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListServiceTemplates API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListServiceTemplateVersions">ListServiceTemplateVersions</a></code> | <code>string[]</code> | IAM actions required for the ListServiceTemplateVersions API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.NotifyResourceDeploymentStatusChange">NotifyResourceDeploymentStatusChange</a></code> | <code>string[]</code> | IAM actions required for the NotifyResourceDeploymentStatusChange API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetComponent">opGetComponent</a></code> | <code>string[]</code> | IAM actions required for the GetComponent API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetDeployment">opGetDeployment</a></code> | <code>string[]</code> | IAM actions required for the GetDeployment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetEnvironment">opGetEnvironment</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetEnvironmentAccountConnection">opGetEnvironmentAccountConnection</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironmentAccountConnection API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetEnvironmentTemplate">opGetEnvironmentTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironmentTemplate API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetEnvironmentTemplateVersion">opGetEnvironmentTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the GetEnvironmentTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetRepository">opGetRepository</a></code> | <code>string[]</code> | IAM actions required for the GetRepository API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetRepositorySyncStatus">opGetRepositorySyncStatus</a></code> | <code>string[]</code> | IAM actions required for the GetRepositorySyncStatus API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetResourcesSummary">opGetResourcesSummary</a></code> | <code>string[]</code> | IAM actions required for the GetResourcesSummary API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetService">opGetService</a></code> | <code>string[]</code> | IAM actions required for the GetService API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceInstance">opGetServiceInstance</a></code> | <code>string[]</code> | IAM actions required for the GetServiceInstance API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceInstanceSyncStatus">opGetServiceInstanceSyncStatus</a></code> | <code>string[]</code> | IAM actions required for the GetServiceInstanceSyncStatus API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceSyncBlockerSummary">opGetServiceSyncBlockerSummary</a></code> | <code>string[]</code> | IAM actions required for the GetServiceSyncBlockerSummary API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceSyncConfig">opGetServiceSyncConfig</a></code> | <code>string[]</code> | IAM actions required for the GetServiceSyncConfig API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceTemplate">opGetServiceTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetServiceTemplate API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceTemplateVersion">opGetServiceTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the GetServiceTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetTemplateSyncConfig">opGetTemplateSyncConfig</a></code> | <code>string[]</code> | IAM actions required for the GetTemplateSyncConfig API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.opGetTemplateSyncStatus">opGetTemplateSyncStatus</a></code> | <code>string[]</code> | IAM actions required for the GetTemplateSyncStatus API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.RejectEnvironmentAccountConnection">RejectEnvironmentAccountConnection</a></code> | <code>string[]</code> | IAM actions required for the RejectEnvironmentAccountConnection API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateAccountSettings">UpdateAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateComponent">UpdateComponent</a></code> | <code>string[]</code> | IAM actions required for the UpdateComponent API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateEnvironmentAccountConnection">UpdateEnvironmentAccountConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironmentAccountConnection API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateEnvironmentTemplate">UpdateEnvironmentTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironmentTemplate API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateEnvironmentTemplateVersion">UpdateEnvironmentTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironmentTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateService">UpdateService</a></code> | <code>string[]</code> | IAM actions required for the UpdateService API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceInstance">UpdateServiceInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceInstance API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateServicePipeline">UpdateServicePipeline</a></code> | <code>string[]</code> | IAM actions required for the UpdateServicePipeline API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceSyncBlocker">UpdateServiceSyncBlocker</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceSyncBlocker API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceSyncConfig">UpdateServiceSyncConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceSyncConfig API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceTemplate">UpdateServiceTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceTemplate API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceTemplateVersion">UpdateServiceTemplateVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceTemplateVersion API call. |
| <code><a href="#@cdk_utils/iam.proton.ProtonOperations.property.UpdateTemplateSyncConfig">UpdateTemplateSyncConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateTemplateSyncConfig API call. |

---

##### `AcceptEnvironmentAccountConnection`<sup>Required</sup> <a name="AcceptEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonOperations.property.AcceptEnvironmentAccountConnection"></a>

```typescript
public readonly AcceptEnvironmentAccountConnection: string[];
```

- *Type:* string[]

IAM actions required for the AcceptEnvironmentAccountConnection API call.

---

##### `CancelComponentDeployment`<sup>Required</sup> <a name="CancelComponentDeployment" id="@cdk_utils/iam.proton.ProtonOperations.property.CancelComponentDeployment"></a>

```typescript
public readonly CancelComponentDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CancelComponentDeployment API call.

---

##### `CancelEnvironmentDeployment`<sup>Required</sup> <a name="CancelEnvironmentDeployment" id="@cdk_utils/iam.proton.ProtonOperations.property.CancelEnvironmentDeployment"></a>

```typescript
public readonly CancelEnvironmentDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CancelEnvironmentDeployment API call.

---

##### `CancelServiceInstanceDeployment`<sup>Required</sup> <a name="CancelServiceInstanceDeployment" id="@cdk_utils/iam.proton.ProtonOperations.property.CancelServiceInstanceDeployment"></a>

```typescript
public readonly CancelServiceInstanceDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CancelServiceInstanceDeployment API call.

---

##### `CancelServicePipelineDeployment`<sup>Required</sup> <a name="CancelServicePipelineDeployment" id="@cdk_utils/iam.proton.ProtonOperations.property.CancelServicePipelineDeployment"></a>

```typescript
public readonly CancelServicePipelineDeployment: string[];
```

- *Type:* string[]

IAM actions required for the CancelServicePipelineDeployment API call.

---

##### `CreateComponent`<sup>Required</sup> <a name="CreateComponent" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateComponent"></a>

```typescript
public readonly CreateComponent: string[];
```

- *Type:* string[]

IAM actions required for the CreateComponent API call.

---

##### `CreateEnvironment`<sup>Required</sup> <a name="CreateEnvironment" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateEnvironment"></a>

```typescript
public readonly CreateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironment API call.

---

##### `CreateEnvironmentAccountConnection`<sup>Required</sup> <a name="CreateEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateEnvironmentAccountConnection"></a>

```typescript
public readonly CreateEnvironmentAccountConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentAccountConnection API call.

---

##### `CreateEnvironmentTemplate`<sup>Required</sup> <a name="CreateEnvironmentTemplate" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateEnvironmentTemplate"></a>

```typescript
public readonly CreateEnvironmentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentTemplate API call.

---

##### `CreateEnvironmentTemplateVersion`<sup>Required</sup> <a name="CreateEnvironmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateEnvironmentTemplateVersion"></a>

```typescript
public readonly CreateEnvironmentTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentTemplateVersion API call.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string[];
```

- *Type:* string[]

IAM actions required for the CreateRepository API call.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateService"></a>

```typescript
public readonly CreateService: string[];
```

- *Type:* string[]

IAM actions required for the CreateService API call.

---

##### `CreateServiceInstance`<sup>Required</sup> <a name="CreateServiceInstance" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateServiceInstance"></a>

```typescript
public readonly CreateServiceInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceInstance API call.

---

##### `CreateServiceSyncConfig`<sup>Required</sup> <a name="CreateServiceSyncConfig" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateServiceSyncConfig"></a>

```typescript
public readonly CreateServiceSyncConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceSyncConfig API call.

---

##### `CreateServiceTemplate`<sup>Required</sup> <a name="CreateServiceTemplate" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateServiceTemplate"></a>

```typescript
public readonly CreateServiceTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceTemplate API call.

---

##### `CreateServiceTemplateVersion`<sup>Required</sup> <a name="CreateServiceTemplateVersion" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateServiceTemplateVersion"></a>

```typescript
public readonly CreateServiceTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceTemplateVersion API call.

---

##### `CreateTemplateSyncConfig`<sup>Required</sup> <a name="CreateTemplateSyncConfig" id="@cdk_utils/iam.proton.ProtonOperations.property.CreateTemplateSyncConfig"></a>

```typescript
public readonly CreateTemplateSyncConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplateSyncConfig API call.

---

##### `DeleteComponent`<sup>Required</sup> <a name="DeleteComponent" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteComponent"></a>

```typescript
public readonly DeleteComponent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComponent API call.

---

##### `DeleteDeployment`<sup>Required</sup> <a name="DeleteDeployment" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteDeployment"></a>

```typescript
public readonly DeleteDeployment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDeployment API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeleteEnvironmentAccountConnection`<sup>Required</sup> <a name="DeleteEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteEnvironmentAccountConnection"></a>

```typescript
public readonly DeleteEnvironmentAccountConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentAccountConnection API call.

---

##### `DeleteEnvironmentTemplate`<sup>Required</sup> <a name="DeleteEnvironmentTemplate" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteEnvironmentTemplate"></a>

```typescript
public readonly DeleteEnvironmentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentTemplate API call.

---

##### `DeleteEnvironmentTemplateVersion`<sup>Required</sup> <a name="DeleteEnvironmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteEnvironmentTemplateVersion"></a>

```typescript
public readonly DeleteEnvironmentTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentTemplateVersion API call.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRepository API call.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteService"></a>

```typescript
public readonly DeleteService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteService API call.

---

##### `DeleteServiceSyncConfig`<sup>Required</sup> <a name="DeleteServiceSyncConfig" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteServiceSyncConfig"></a>

```typescript
public readonly DeleteServiceSyncConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceSyncConfig API call.

---

##### `DeleteServiceTemplate`<sup>Required</sup> <a name="DeleteServiceTemplate" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteServiceTemplate"></a>

```typescript
public readonly DeleteServiceTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceTemplate API call.

---

##### `DeleteServiceTemplateVersion`<sup>Required</sup> <a name="DeleteServiceTemplateVersion" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteServiceTemplateVersion"></a>

```typescript
public readonly DeleteServiceTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceTemplateVersion API call.

---

##### `DeleteTemplateSyncConfig`<sup>Required</sup> <a name="DeleteTemplateSyncConfig" id="@cdk_utils/iam.proton.ProtonOperations.property.DeleteTemplateSyncConfig"></a>

```typescript
public readonly DeleteTemplateSyncConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplateSyncConfig API call.

---

##### `ListComponentOutputs`<sup>Required</sup> <a name="ListComponentOutputs" id="@cdk_utils/iam.proton.ProtonOperations.property.ListComponentOutputs"></a>

```typescript
public readonly ListComponentOutputs: string[];
```

- *Type:* string[]

IAM actions required for the ListComponentOutputs API call.

---

##### `ListComponentProvisionedResources`<sup>Required</sup> <a name="ListComponentProvisionedResources" id="@cdk_utils/iam.proton.ProtonOperations.property.ListComponentProvisionedResources"></a>

```typescript
public readonly ListComponentProvisionedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListComponentProvisionedResources API call.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.proton.ProtonOperations.property.ListComponents"></a>

```typescript
public readonly ListComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListComponents API call.

---

##### `ListDeployments`<sup>Required</sup> <a name="ListDeployments" id="@cdk_utils/iam.proton.ProtonOperations.property.ListDeployments"></a>

```typescript
public readonly ListDeployments: string[];
```

- *Type:* string[]

IAM actions required for the ListDeployments API call.

---

##### `ListEnvironmentAccountConnections`<sup>Required</sup> <a name="ListEnvironmentAccountConnections" id="@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentAccountConnections"></a>

```typescript
public readonly ListEnvironmentAccountConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentAccountConnections API call.

---

##### `ListEnvironmentOutputs`<sup>Required</sup> <a name="ListEnvironmentOutputs" id="@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentOutputs"></a>

```typescript
public readonly ListEnvironmentOutputs: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentOutputs API call.

---

##### `ListEnvironmentProvisionedResources`<sup>Required</sup> <a name="ListEnvironmentProvisionedResources" id="@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentProvisionedResources"></a>

```typescript
public readonly ListEnvironmentProvisionedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentProvisionedResources API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListEnvironmentTemplates`<sup>Required</sup> <a name="ListEnvironmentTemplates" id="@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentTemplates"></a>

```typescript
public readonly ListEnvironmentTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentTemplates API call.

---

##### `ListEnvironmentTemplateVersions`<sup>Required</sup> <a name="ListEnvironmentTemplateVersions" id="@cdk_utils/iam.proton.ProtonOperations.property.ListEnvironmentTemplateVersions"></a>

```typescript
public readonly ListEnvironmentTemplateVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironmentTemplateVersions API call.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.proton.ProtonOperations.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositories API call.

---

##### `ListRepositorySyncDefinitions`<sup>Required</sup> <a name="ListRepositorySyncDefinitions" id="@cdk_utils/iam.proton.ProtonOperations.property.ListRepositorySyncDefinitions"></a>

```typescript
public readonly ListRepositorySyncDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListRepositorySyncDefinitions API call.

---

##### `ListServiceInstanceOutputs`<sup>Required</sup> <a name="ListServiceInstanceOutputs" id="@cdk_utils/iam.proton.ProtonOperations.property.ListServiceInstanceOutputs"></a>

```typescript
public readonly ListServiceInstanceOutputs: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceInstanceOutputs API call.

---

##### `ListServiceInstanceProvisionedResources`<sup>Required</sup> <a name="ListServiceInstanceProvisionedResources" id="@cdk_utils/iam.proton.ProtonOperations.property.ListServiceInstanceProvisionedResources"></a>

```typescript
public readonly ListServiceInstanceProvisionedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceInstanceProvisionedResources API call.

---

##### `ListServiceInstances`<sup>Required</sup> <a name="ListServiceInstances" id="@cdk_utils/iam.proton.ProtonOperations.property.ListServiceInstances"></a>

```typescript
public readonly ListServiceInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceInstances API call.

---

##### `ListServicePipelineOutputs`<sup>Required</sup> <a name="ListServicePipelineOutputs" id="@cdk_utils/iam.proton.ProtonOperations.property.ListServicePipelineOutputs"></a>

```typescript
public readonly ListServicePipelineOutputs: string[];
```

- *Type:* string[]

IAM actions required for the ListServicePipelineOutputs API call.

---

##### `ListServicePipelineProvisionedResources`<sup>Required</sup> <a name="ListServicePipelineProvisionedResources" id="@cdk_utils/iam.proton.ProtonOperations.property.ListServicePipelineProvisionedResources"></a>

```typescript
public readonly ListServicePipelineProvisionedResources: string[];
```

- *Type:* string[]

IAM actions required for the ListServicePipelineProvisionedResources API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.proton.ProtonOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListServiceTemplates`<sup>Required</sup> <a name="ListServiceTemplates" id="@cdk_utils/iam.proton.ProtonOperations.property.ListServiceTemplates"></a>

```typescript
public readonly ListServiceTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceTemplates API call.

---

##### `ListServiceTemplateVersions`<sup>Required</sup> <a name="ListServiceTemplateVersions" id="@cdk_utils/iam.proton.ProtonOperations.property.ListServiceTemplateVersions"></a>

```typescript
public readonly ListServiceTemplateVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceTemplateVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.proton.ProtonOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `NotifyResourceDeploymentStatusChange`<sup>Required</sup> <a name="NotifyResourceDeploymentStatusChange" id="@cdk_utils/iam.proton.ProtonOperations.property.NotifyResourceDeploymentStatusChange"></a>

```typescript
public readonly NotifyResourceDeploymentStatusChange: string[];
```

- *Type:* string[]

IAM actions required for the NotifyResourceDeploymentStatusChange API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetComponent`<sup>Required</sup> <a name="opGetComponent" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetComponent"></a>

```typescript
public readonly opGetComponent: string[];
```

- *Type:* string[]

IAM actions required for the GetComponent API call.

---

##### `opGetDeployment`<sup>Required</sup> <a name="opGetDeployment" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetDeployment"></a>

```typescript
public readonly opGetDeployment: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployment API call.

---

##### `opGetEnvironment`<sup>Required</sup> <a name="opGetEnvironment" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetEnvironment"></a>

```typescript
public readonly opGetEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironment API call.

---

##### `opGetEnvironmentAccountConnection`<sup>Required</sup> <a name="opGetEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetEnvironmentAccountConnection"></a>

```typescript
public readonly opGetEnvironmentAccountConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironmentAccountConnection API call.

---

##### `opGetEnvironmentTemplate`<sup>Required</sup> <a name="opGetEnvironmentTemplate" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetEnvironmentTemplate"></a>

```typescript
public readonly opGetEnvironmentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironmentTemplate API call.

---

##### `opGetEnvironmentTemplateVersion`<sup>Required</sup> <a name="opGetEnvironmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetEnvironmentTemplateVersion"></a>

```typescript
public readonly opGetEnvironmentTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetEnvironmentTemplateVersion API call.

---

##### `opGetRepository`<sup>Required</sup> <a name="opGetRepository" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetRepository"></a>

```typescript
public readonly opGetRepository: string[];
```

- *Type:* string[]

IAM actions required for the GetRepository API call.

---

##### `opGetRepositorySyncStatus`<sup>Required</sup> <a name="opGetRepositorySyncStatus" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetRepositorySyncStatus"></a>

```typescript
public readonly opGetRepositorySyncStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetRepositorySyncStatus API call.

---

##### `opGetResourcesSummary`<sup>Required</sup> <a name="opGetResourcesSummary" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetResourcesSummary"></a>

```typescript
public readonly opGetResourcesSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcesSummary API call.

---

##### `opGetService`<sup>Required</sup> <a name="opGetService" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetService"></a>

```typescript
public readonly opGetService: string[];
```

- *Type:* string[]

IAM actions required for the GetService API call.

---

##### `opGetServiceInstance`<sup>Required</sup> <a name="opGetServiceInstance" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceInstance"></a>

```typescript
public readonly opGetServiceInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceInstance API call.

---

##### `opGetServiceInstanceSyncStatus`<sup>Required</sup> <a name="opGetServiceInstanceSyncStatus" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceInstanceSyncStatus"></a>

```typescript
public readonly opGetServiceInstanceSyncStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceInstanceSyncStatus API call.

---

##### `opGetServiceSyncBlockerSummary`<sup>Required</sup> <a name="opGetServiceSyncBlockerSummary" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceSyncBlockerSummary"></a>

```typescript
public readonly opGetServiceSyncBlockerSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceSyncBlockerSummary API call.

---

##### `opGetServiceSyncConfig`<sup>Required</sup> <a name="opGetServiceSyncConfig" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceSyncConfig"></a>

```typescript
public readonly opGetServiceSyncConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceSyncConfig API call.

---

##### `opGetServiceTemplate`<sup>Required</sup> <a name="opGetServiceTemplate" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceTemplate"></a>

```typescript
public readonly opGetServiceTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceTemplate API call.

---

##### `opGetServiceTemplateVersion`<sup>Required</sup> <a name="opGetServiceTemplateVersion" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetServiceTemplateVersion"></a>

```typescript
public readonly opGetServiceTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceTemplateVersion API call.

---

##### `opGetTemplateSyncConfig`<sup>Required</sup> <a name="opGetTemplateSyncConfig" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetTemplateSyncConfig"></a>

```typescript
public readonly opGetTemplateSyncConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplateSyncConfig API call.

---

##### `opGetTemplateSyncStatus`<sup>Required</sup> <a name="opGetTemplateSyncStatus" id="@cdk_utils/iam.proton.ProtonOperations.property.opGetTemplateSyncStatus"></a>

```typescript
public readonly opGetTemplateSyncStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetTemplateSyncStatus API call.

---

##### `RejectEnvironmentAccountConnection`<sup>Required</sup> <a name="RejectEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonOperations.property.RejectEnvironmentAccountConnection"></a>

```typescript
public readonly RejectEnvironmentAccountConnection: string[];
```

- *Type:* string[]

IAM actions required for the RejectEnvironmentAccountConnection API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.proton.ProtonOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.proton.ProtonOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountSettings`<sup>Required</sup> <a name="UpdateAccountSettings" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateAccountSettings"></a>

```typescript
public readonly UpdateAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountSettings API call.

---

##### `UpdateComponent`<sup>Required</sup> <a name="UpdateComponent" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateComponent"></a>

```typescript
public readonly UpdateComponent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateComponent API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

##### `UpdateEnvironmentAccountConnection`<sup>Required</sup> <a name="UpdateEnvironmentAccountConnection" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateEnvironmentAccountConnection"></a>

```typescript
public readonly UpdateEnvironmentAccountConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironmentAccountConnection API call.

---

##### `UpdateEnvironmentTemplate`<sup>Required</sup> <a name="UpdateEnvironmentTemplate" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateEnvironmentTemplate"></a>

```typescript
public readonly UpdateEnvironmentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironmentTemplate API call.

---

##### `UpdateEnvironmentTemplateVersion`<sup>Required</sup> <a name="UpdateEnvironmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateEnvironmentTemplateVersion"></a>

```typescript
public readonly UpdateEnvironmentTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironmentTemplateVersion API call.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateService"></a>

```typescript
public readonly UpdateService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateService API call.

---

##### `UpdateServiceInstance`<sup>Required</sup> <a name="UpdateServiceInstance" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceInstance"></a>

```typescript
public readonly UpdateServiceInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceInstance API call.

---

##### `UpdateServicePipeline`<sup>Required</sup> <a name="UpdateServicePipeline" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateServicePipeline"></a>

```typescript
public readonly UpdateServicePipeline: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServicePipeline API call.

---

##### `UpdateServiceSyncBlocker`<sup>Required</sup> <a name="UpdateServiceSyncBlocker" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceSyncBlocker"></a>

```typescript
public readonly UpdateServiceSyncBlocker: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceSyncBlocker API call.

---

##### `UpdateServiceSyncConfig`<sup>Required</sup> <a name="UpdateServiceSyncConfig" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceSyncConfig"></a>

```typescript
public readonly UpdateServiceSyncConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceSyncConfig API call.

---

##### `UpdateServiceTemplate`<sup>Required</sup> <a name="UpdateServiceTemplate" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceTemplate"></a>

```typescript
public readonly UpdateServiceTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceTemplate API call.

---

##### `UpdateServiceTemplateVersion`<sup>Required</sup> <a name="UpdateServiceTemplateVersion" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateServiceTemplateVersion"></a>

```typescript
public readonly UpdateServiceTemplateVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceTemplateVersion API call.

---

##### `UpdateTemplateSyncConfig`<sup>Required</sup> <a name="UpdateTemplateSyncConfig" id="@cdk_utils/iam.proton.ProtonOperations.property.UpdateTemplateSyncConfig"></a>

```typescript
public readonly UpdateTemplateSyncConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTemplateSyncConfig API call.

---

### ProtonResources <a name="ProtonResources" id="@cdk_utils/iam.proton.ProtonResources"></a>

ARN builders, validators, and parsers for proton resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.proton.ProtonResources.Initializer"></a>

```typescript
import { proton } from '@cdk_utils/iam'

new proton.ProtonResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.component">component</a></code> | Builds an ARN for the component resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.deployment">deployment</a></code> | Builds an ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.environmentAccountConnection">environmentAccountConnection</a></code> | Builds an ARN for the environment-account-connection resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.environmentTemplate">environmentTemplate</a></code> | Builds an ARN for the environment-template resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.environmentTemplateMajorVersion">environmentTemplateMajorVersion</a></code> | Builds an ARN for the environment-template-major-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.environmentTemplateMinorVersion">environmentTemplateMinorVersion</a></code> | Builds an ARN for the environment-template-minor-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.environmentTemplateVersion">environmentTemplateVersion</a></code> | Builds an ARN for the environment-template-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidComponentArn">isValidComponentArn</a></code> | Validates whether a string is a valid ARN for the component resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidDeploymentArn">isValidDeploymentArn</a></code> | Validates whether a string is a valid ARN for the deployment resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentAccountConnectionArn">isValidEnvironmentAccountConnectionArn</a></code> | Validates whether a string is a valid ARN for the environment-account-connection resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateArn">isValidEnvironmentTemplateArn</a></code> | Validates whether a string is a valid ARN for the environment-template resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateMajorVersionArn">isValidEnvironmentTemplateMajorVersionArn</a></code> | Validates whether a string is a valid ARN for the environment-template-major-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateMinorVersionArn">isValidEnvironmentTemplateMinorVersionArn</a></code> | Validates whether a string is a valid ARN for the environment-template-minor-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateVersionArn">isValidEnvironmentTemplateVersionArn</a></code> | Validates whether a string is a valid ARN for the environment-template-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidRepositoryArn">isValidRepositoryArn</a></code> | Validates whether a string is a valid ARN for the repository resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidServiceInstanceArn">isValidServiceInstanceArn</a></code> | Validates whether a string is a valid ARN for the service-instance resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateArn">isValidServiceTemplateArn</a></code> | Validates whether a string is a valid ARN for the service-template resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateMajorVersionArn">isValidServiceTemplateMajorVersionArn</a></code> | Validates whether a string is a valid ARN for the service-template-major-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateMinorVersionArn">isValidServiceTemplateMinorVersionArn</a></code> | Validates whether a string is a valid ARN for the service-template-minor-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateVersionArn">isValidServiceTemplateVersionArn</a></code> | Validates whether a string is a valid ARN for the service-template-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseComponentArn">parseComponentArn</a></code> | Parses a component ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseDeploymentArn">parseDeploymentArn</a></code> | Parses a deployment ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseEnvironmentAccountConnectionArn">parseEnvironmentAccountConnectionArn</a></code> | Parses a environment-account-connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateArn">parseEnvironmentTemplateArn</a></code> | Parses a environment-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateMajorVersionArn">parseEnvironmentTemplateMajorVersionArn</a></code> | Parses a environment-template-major-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateMinorVersionArn">parseEnvironmentTemplateMinorVersionArn</a></code> | Parses a environment-template-minor-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateVersionArn">parseEnvironmentTemplateVersionArn</a></code> | Parses a environment-template-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseRepositoryArn">parseRepositoryArn</a></code> | Parses a repository ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseServiceInstanceArn">parseServiceInstanceArn</a></code> | Parses a service-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateArn">parseServiceTemplateArn</a></code> | Parses a service-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateMajorVersionArn">parseServiceTemplateMajorVersionArn</a></code> | Parses a service-template-major-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateMinorVersionArn">parseServiceTemplateMinorVersionArn</a></code> | Parses a service-template-minor-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateVersionArn">parseServiceTemplateVersionArn</a></code> | Parses a service-template-version ARN into its components. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.repository">repository</a></code> | Builds an ARN for the repository resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.service">service</a></code> | Builds an ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.serviceInstance">serviceInstance</a></code> | Builds an ARN for the service-instance resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.serviceTemplate">serviceTemplate</a></code> | Builds an ARN for the service-template resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.serviceTemplateMajorVersion">serviceTemplateMajorVersion</a></code> | Builds an ARN for the service-template-major-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.serviceTemplateMinorVersion">serviceTemplateMinorVersion</a></code> | Builds an ARN for the service-template-minor-version resource. |
| <code><a href="#@cdk_utils/iam.proton.ProtonResources.serviceTemplateVersion">serviceTemplateVersion</a></code> | Builds an ARN for the service-template-version resource. |

---

##### `component` <a name="component" id="@cdk_utils/iam.proton.ProtonResources.component"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.component(props: ProtonComponentArnProps)
```

Builds an ARN for the component resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.component.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonComponentArnProps">ProtonComponentArnProps</a>

---

##### `deployment` <a name="deployment" id="@cdk_utils/iam.proton.ProtonResources.deployment"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.deployment(props: ProtonDeploymentArnProps)
```

Builds an ARN for the deployment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.deployment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonDeploymentArnProps">ProtonDeploymentArnProps</a>

---

##### `environment` <a name="environment" id="@cdk_utils/iam.proton.ProtonResources.environment"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.environment(props: ProtonEnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonEnvironmentArnProps">ProtonEnvironmentArnProps</a>

---

##### `environmentAccountConnection` <a name="environmentAccountConnection" id="@cdk_utils/iam.proton.ProtonResources.environmentAccountConnection"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.environmentAccountConnection(props: ProtonEnvironmentAccountConnectionArnProps)
```

Builds an ARN for the environment-account-connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.environmentAccountConnection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonEnvironmentAccountConnectionArnProps">ProtonEnvironmentAccountConnectionArnProps</a>

---

##### `environmentTemplate` <a name="environmentTemplate" id="@cdk_utils/iam.proton.ProtonResources.environmentTemplate"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.environmentTemplate(props: ProtonEnvironmentTemplateArnProps)
```

Builds an ARN for the environment-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.environmentTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateArnProps">ProtonEnvironmentTemplateArnProps</a>

---

##### `environmentTemplateMajorVersion` <a name="environmentTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonResources.environmentTemplateMajorVersion"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.environmentTemplateMajorVersion(props: ProtonEnvironmentTemplateMajorVersionArnProps)
```

Builds an ARN for the environment-template-major-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.environmentTemplateMajorVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMajorVersionArnProps">ProtonEnvironmentTemplateMajorVersionArnProps</a>

---

##### `environmentTemplateMinorVersion` <a name="environmentTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonResources.environmentTemplateMinorVersion"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.environmentTemplateMinorVersion(props: ProtonEnvironmentTemplateMinorVersionArnProps)
```

Builds an ARN for the environment-template-minor-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.environmentTemplateMinorVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateMinorVersionArnProps">ProtonEnvironmentTemplateMinorVersionArnProps</a>

---

##### `environmentTemplateVersion` <a name="environmentTemplateVersion" id="@cdk_utils/iam.proton.ProtonResources.environmentTemplateVersion"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.environmentTemplateVersion(props: ProtonEnvironmentTemplateVersionArnProps)
```

Builds an ARN for the environment-template-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.environmentTemplateVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonEnvironmentTemplateVersionArnProps">ProtonEnvironmentTemplateVersionArnProps</a>

---

##### `isValidComponentArn` <a name="isValidComponentArn" id="@cdk_utils/iam.proton.ProtonResources.isValidComponentArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidComponentArn(arn: string)
```

Validates whether a string is a valid ARN for the component resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeploymentArn` <a name="isValidDeploymentArn" id="@cdk_utils/iam.proton.ProtonResources.isValidDeploymentArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidDeploymentArn(arn: string)
```

Validates whether a string is a valid ARN for the deployment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentAccountConnectionArn` <a name="isValidEnvironmentAccountConnectionArn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentAccountConnectionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidEnvironmentAccountConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the environment-account-connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentAccountConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentTemplateArn` <a name="isValidEnvironmentTemplateArn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidEnvironmentTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the environment-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentTemplateMajorVersionArn` <a name="isValidEnvironmentTemplateMajorVersionArn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateMajorVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidEnvironmentTemplateMajorVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the environment-template-major-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateMajorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentTemplateMinorVersionArn` <a name="isValidEnvironmentTemplateMinorVersionArn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateMinorVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidEnvironmentTemplateMinorVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the environment-template-minor-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateMinorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEnvironmentTemplateVersionArn` <a name="isValidEnvironmentTemplateVersionArn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidEnvironmentTemplateVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the environment-template-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidEnvironmentTemplateVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRepositoryArn` <a name="isValidRepositoryArn" id="@cdk_utils/iam.proton.ProtonResources.isValidRepositoryArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidRepositoryArn(arn: string)
```

Validates whether a string is a valid ARN for the repository resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceInstanceArn` <a name="isValidServiceInstanceArn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceInstanceArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidServiceInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the service-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceTemplateArn` <a name="isValidServiceTemplateArn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidServiceTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the service-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceTemplateMajorVersionArn` <a name="isValidServiceTemplateMajorVersionArn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateMajorVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidServiceTemplateMajorVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the service-template-major-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateMajorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceTemplateMinorVersionArn` <a name="isValidServiceTemplateMinorVersionArn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateMinorVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidServiceTemplateMinorVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the service-template-minor-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateMinorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceTemplateVersionArn` <a name="isValidServiceTemplateVersionArn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.isValidServiceTemplateVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the service-template-version resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.isValidServiceTemplateVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseComponentArn` <a name="parseComponentArn" id="@cdk_utils/iam.proton.ProtonResources.parseComponentArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseComponentArn(arn: string)
```

Parses a component ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseComponentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeploymentArn` <a name="parseDeploymentArn" id="@cdk_utils/iam.proton.ProtonResources.parseDeploymentArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseDeploymentArn(arn: string)
```

Parses a deployment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseDeploymentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentAccountConnectionArn` <a name="parseEnvironmentAccountConnectionArn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentAccountConnectionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseEnvironmentAccountConnectionArn(arn: string)
```

Parses a environment-account-connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentAccountConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentTemplateArn` <a name="parseEnvironmentTemplateArn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseEnvironmentTemplateArn(arn: string)
```

Parses a environment-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentTemplateMajorVersionArn` <a name="parseEnvironmentTemplateMajorVersionArn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateMajorVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseEnvironmentTemplateMajorVersionArn(arn: string)
```

Parses a environment-template-major-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateMajorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentTemplateMinorVersionArn` <a name="parseEnvironmentTemplateMinorVersionArn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateMinorVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseEnvironmentTemplateMinorVersionArn(arn: string)
```

Parses a environment-template-minor-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateMinorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentTemplateVersionArn` <a name="parseEnvironmentTemplateVersionArn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseEnvironmentTemplateVersionArn(arn: string)
```

Parses a environment-template-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseEnvironmentTemplateVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRepositoryArn` <a name="parseRepositoryArn" id="@cdk_utils/iam.proton.ProtonResources.parseRepositoryArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseRepositoryArn(arn: string)
```

Parses a repository ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceInstanceArn` <a name="parseServiceInstanceArn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceInstanceArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseServiceInstanceArn(arn: string)
```

Parses a service-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceTemplateArn` <a name="parseServiceTemplateArn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseServiceTemplateArn(arn: string)
```

Parses a service-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceTemplateMajorVersionArn` <a name="parseServiceTemplateMajorVersionArn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateMajorVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseServiceTemplateMajorVersionArn(arn: string)
```

Parses a service-template-major-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateMajorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceTemplateMinorVersionArn` <a name="parseServiceTemplateMinorVersionArn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateMinorVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseServiceTemplateMinorVersionArn(arn: string)
```

Parses a service-template-minor-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateMinorVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceTemplateVersionArn` <a name="parseServiceTemplateVersionArn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateVersionArn"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.parseServiceTemplateVersionArn(arn: string)
```

Parses a service-template-version ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.proton.ProtonResources.parseServiceTemplateVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `repository` <a name="repository" id="@cdk_utils/iam.proton.ProtonResources.repository"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.repository(props: ProtonRepositoryArnProps)
```

Builds an ARN for the repository resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.repository.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonRepositoryArnProps">ProtonRepositoryArnProps</a>

---

##### `service` <a name="service" id="@cdk_utils/iam.proton.ProtonResources.service"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.service(props: ProtonServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonServiceArnProps">ProtonServiceArnProps</a>

---

##### `serviceInstance` <a name="serviceInstance" id="@cdk_utils/iam.proton.ProtonResources.serviceInstance"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.serviceInstance(props: ProtonServiceInstanceArnProps)
```

Builds an ARN for the service-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.serviceInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonServiceInstanceArnProps">ProtonServiceInstanceArnProps</a>

---

##### `serviceTemplate` <a name="serviceTemplate" id="@cdk_utils/iam.proton.ProtonResources.serviceTemplate"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.serviceTemplate(props: ProtonServiceTemplateArnProps)
```

Builds an ARN for the service-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.serviceTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonServiceTemplateArnProps">ProtonServiceTemplateArnProps</a>

---

##### `serviceTemplateMajorVersion` <a name="serviceTemplateMajorVersion" id="@cdk_utils/iam.proton.ProtonResources.serviceTemplateMajorVersion"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.serviceTemplateMajorVersion(props: ProtonServiceTemplateMajorVersionArnProps)
```

Builds an ARN for the service-template-major-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.serviceTemplateMajorVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMajorVersionArnProps">ProtonServiceTemplateMajorVersionArnProps</a>

---

##### `serviceTemplateMinorVersion` <a name="serviceTemplateMinorVersion" id="@cdk_utils/iam.proton.ProtonResources.serviceTemplateMinorVersion"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.serviceTemplateMinorVersion(props: ProtonServiceTemplateMinorVersionArnProps)
```

Builds an ARN for the service-template-minor-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.serviceTemplateMinorVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonServiceTemplateMinorVersionArnProps">ProtonServiceTemplateMinorVersionArnProps</a>

---

##### `serviceTemplateVersion` <a name="serviceTemplateVersion" id="@cdk_utils/iam.proton.ProtonResources.serviceTemplateVersion"></a>

```typescript
import { proton } from '@cdk_utils/iam'

proton.ProtonResources.serviceTemplateVersion(props: ProtonServiceTemplateVersionArnProps)
```

Builds an ARN for the service-template-version resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.proton.ProtonResources.serviceTemplateVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.proton.ProtonServiceTemplateVersionArnProps">ProtonServiceTemplateVersionArnProps</a>

---




