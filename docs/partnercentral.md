# `partnercentral` Submodule <a name="`partnercentral` Submodule" id="@cdk_utils/iam.partnercentral"></a>


## Structs <a name="Structs" id="Structs"></a>

### PartnercentralBenefitAllocationArnComponents <a name="PartnercentralBenefitAllocationArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents"></a>

Parsed components of a BenefitAllocation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralBenefitAllocationArnComponents: partnercentral.PartnercentralBenefitAllocationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralBenefitAllocationArnProps <a name="PartnercentralBenefitAllocationArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps"></a>

Properties for building a BenefitAllocation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralBenefitAllocationArnProps: partnercentral.PartnercentralBenefitAllocationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralBenefitApplicationArnComponents <a name="PartnercentralBenefitApplicationArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents"></a>

Parsed components of a BenefitApplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralBenefitApplicationArnComponents: partnercentral.PartnercentralBenefitApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralBenefitApplicationArnProps <a name="PartnercentralBenefitApplicationArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps"></a>

Properties for building a BenefitApplication ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralBenefitApplicationArnProps: partnercentral.PartnercentralBenefitApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralBenefitArnComponents <a name="PartnercentralBenefitArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents"></a>

Parsed components of a Benefit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralBenefitArnComponents: partnercentral.PartnercentralBenefitArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralBenefitArnProps <a name="PartnercentralBenefitArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps"></a>

Properties for building a Benefit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralBenefitArnProps: partnercentral.PartnercentralBenefitArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralChannelHandshakeArnComponents <a name="PartnercentralChannelHandshakeArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents"></a>

Parsed components of a ChannelHandshake ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralChannelHandshakeArnComponents: partnercentral.PartnercentralChannelHandshakeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralChannelHandshakeArnProps <a name="PartnercentralChannelHandshakeArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps"></a>

Properties for building a ChannelHandshake ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralChannelHandshakeArnProps: partnercentral.PartnercentralChannelHandshakeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralConnectionArnComponents <a name="PartnercentralConnectionArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents"></a>

Parsed components of a Connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralConnectionArnComponents: partnercentral.PartnercentralConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralConnectionArnProps <a name="PartnercentralConnectionArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps"></a>

Properties for building a Connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralConnectionArnProps: partnercentral.PartnercentralConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralConnectionInvitationArnComponents <a name="PartnercentralConnectionInvitationArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents"></a>

Parsed components of a ConnectionInvitation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralConnectionInvitationArnComponents: partnercentral.PartnercentralConnectionInvitationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralConnectionInvitationArnProps <a name="PartnercentralConnectionInvitationArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps"></a>

Properties for building a ConnectionInvitation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralConnectionInvitationArnProps: partnercentral.PartnercentralConnectionInvitationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralConnectionPreferencesArnComponents <a name="PartnercentralConnectionPreferencesArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents"></a>

Parsed components of a ConnectionPreferences ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralConnectionPreferencesArnComponents: partnercentral.PartnercentralConnectionPreferencesArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralConnectionPreferencesArnProps <a name="PartnercentralConnectionPreferencesArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps"></a>

Properties for building a ConnectionPreferences ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralConnectionPreferencesArnProps: partnercentral.PartnercentralConnectionPreferencesArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralDashboardArnComponents <a name="PartnercentralDashboardArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents"></a>

Parsed components of a Dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralDashboardArnComponents: partnercentral.PartnercentralDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.dashboardId">dashboardId</a></code> | <code>string</code> | The DashboardId component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.tableId">tableId</a></code> | <code>string</code> | The TableId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The DashboardId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnComponents.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The TableId component.

---

### PartnercentralDashboardArnProps <a name="PartnercentralDashboardArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps"></a>

Properties for building a Dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralDashboardArnProps: partnercentral.PartnercentralDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.dashboardId">dashboardId</a></code> | <code>string</code> | The DashboardId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.tableId">tableId</a></code> | <code>string</code> | The TableId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.dashboardId"></a>

```typescript
public readonly dashboardId: string;
```

- *Type:* string

The DashboardId component of the ARN.

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

The TableId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### PartnercentralEngagementArnComponents <a name="PartnercentralEngagementArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents"></a>

Parsed components of a Engagement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralEngagementArnComponents: partnercentral.PartnercentralEngagementArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralEngagementArnProps <a name="PartnercentralEngagementArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps"></a>

Properties for building a Engagement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralEngagementArnProps: partnercentral.PartnercentralEngagementArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralEngagementByAcceptingInvitationTaskArnComponents <a name="PartnercentralEngagementByAcceptingInvitationTaskArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents"></a>

Parsed components of a engagement-by-accepting-invitation-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralEngagementByAcceptingInvitationTaskArnComponents: partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### PartnercentralEngagementByAcceptingInvitationTaskArnProps <a name="PartnercentralEngagementByAcceptingInvitationTaskArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps"></a>

Properties for building a engagement-by-accepting-invitation-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralEngagementByAcceptingInvitationTaskArnProps: partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralEngagementFromOpportunityTaskArnComponents <a name="PartnercentralEngagementFromOpportunityTaskArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents"></a>

Parsed components of a engagement-from-opportunity-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralEngagementFromOpportunityTaskArnComponents: partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### PartnercentralEngagementFromOpportunityTaskArnProps <a name="PartnercentralEngagementFromOpportunityTaskArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps"></a>

Properties for building a engagement-from-opportunity-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralEngagementFromOpportunityTaskArnProps: partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralEngagementInvitationArnComponents <a name="PartnercentralEngagementInvitationArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents"></a>

Parsed components of a engagement-invitation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralEngagementInvitationArnComponents: partnercentral.PartnercentralEngagementInvitationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralEngagementInvitationArnProps <a name="PartnercentralEngagementInvitationArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps"></a>

Properties for building a engagement-invitation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralEngagementInvitationArnProps: partnercentral.PartnercentralEngagementInvitationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralMarketplaceRevenueShareArnComponents <a name="PartnercentralMarketplaceRevenueShareArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents"></a>

Parsed components of a MarketplaceRevenueShare ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralMarketplaceRevenueShareArnComponents: partnercentral.PartnercentralMarketplaceRevenueShareArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.marketplaceProductId">marketplaceProductId</a></code> | <code>string</code> | The MarketplaceProductId component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `marketplaceProductId`<sup>Required</sup> <a name="marketplaceProductId" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.marketplaceProductId"></a>

```typescript
public readonly marketplaceProductId: string;
```

- *Type:* string

The MarketplaceProductId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralMarketplaceRevenueShareArnProps <a name="PartnercentralMarketplaceRevenueShareArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps"></a>

Properties for building a MarketplaceRevenueShare ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralMarketplaceRevenueShareArnProps: partnercentral.PartnercentralMarketplaceRevenueShareArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.marketplaceProductId">marketplaceProductId</a></code> | <code>string</code> | The MarketplaceProductId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `marketplaceProductId`<sup>Required</sup> <a name="marketplaceProductId" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.marketplaceProductId"></a>

```typescript
public readonly marketplaceProductId: string;
```

- *Type:* string

The MarketplaceProductId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralOpportunityArnComponents <a name="PartnercentralOpportunityArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents"></a>

Parsed components of a Opportunity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralOpportunityArnComponents: partnercentral.PartnercentralOpportunityArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralOpportunityArnProps <a name="PartnercentralOpportunityArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps"></a>

Properties for building a Opportunity ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralOpportunityArnProps: partnercentral.PartnercentralOpportunityArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralOpportunityFromEngagementTaskArnComponents <a name="PartnercentralOpportunityFromEngagementTaskArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents"></a>

Parsed components of a OpportunityFromEngagementTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralOpportunityFromEngagementTaskArnComponents: partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### PartnercentralOpportunityFromEngagementTaskArnProps <a name="PartnercentralOpportunityFromEngagementTaskArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps"></a>

Properties for building a OpportunityFromEngagementTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralOpportunityFromEngagementTaskArnProps: partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralPartnerArnComponents <a name="PartnercentralPartnerArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents"></a>

Parsed components of a Partner ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralPartnerArnComponents: partnercentral.PartnercentralPartnerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralPartnerArnProps <a name="PartnercentralPartnerArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps"></a>

Properties for building a Partner ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralPartnerArnProps: partnercentral.PartnercentralPartnerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralProgramManagementAccountArnComponents <a name="PartnercentralProgramManagementAccountArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents"></a>

Parsed components of a ProgramManagementAccount ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralProgramManagementAccountArnComponents: partnercentral.PartnercentralProgramManagementAccountArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralProgramManagementAccountArnProps <a name="PartnercentralProgramManagementAccountArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps"></a>

Properties for building a ProgramManagementAccount ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralProgramManagementAccountArnProps: partnercentral.PartnercentralProgramManagementAccountArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralProspectingFromEngagementTaskArnComponents <a name="PartnercentralProspectingFromEngagementTaskArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents"></a>

Parsed components of a ProspectingFromEngagementTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralProspectingFromEngagementTaskArnComponents: partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.taskIdentifier">taskIdentifier</a></code> | <code>string</code> | The TaskIdentifier component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskIdentifier`<sup>Required</sup> <a name="taskIdentifier" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnComponents.property.taskIdentifier"></a>

```typescript
public readonly taskIdentifier: string;
```

- *Type:* string

The TaskIdentifier component.

---

### PartnercentralProspectingFromEngagementTaskArnProps <a name="PartnercentralProspectingFromEngagementTaskArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps"></a>

Properties for building a ProspectingFromEngagementTask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralProspectingFromEngagementTaskArnProps: partnercentral.PartnercentralProspectingFromEngagementTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.taskIdentifier">taskIdentifier</a></code> | <code>string</code> | The TaskIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `taskIdentifier`<sup>Required</sup> <a name="taskIdentifier" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.taskIdentifier"></a>

```typescript
public readonly taskIdentifier: string;
```

- *Type:* string

The TaskIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralRelationshipArnComponents <a name="PartnercentralRelationshipArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents"></a>

Parsed components of a Relationship ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralRelationshipArnComponents: partnercentral.PartnercentralRelationshipArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.programManagementAccountId">programManagementAccountId</a></code> | <code>string</code> | The ProgramManagementAccountId component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.relationshipId">relationshipId</a></code> | <code>string</code> | The RelationshipId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `programManagementAccountId`<sup>Required</sup> <a name="programManagementAccountId" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.programManagementAccountId"></a>

```typescript
public readonly programManagementAccountId: string;
```

- *Type:* string

The ProgramManagementAccountId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `relationshipId`<sup>Required</sup> <a name="relationshipId" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnComponents.property.relationshipId"></a>

```typescript
public readonly relationshipId: string;
```

- *Type:* string

The RelationshipId component.

---

### PartnercentralRelationshipArnProps <a name="PartnercentralRelationshipArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps"></a>

Properties for building a Relationship ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralRelationshipArnProps: partnercentral.PartnercentralRelationshipArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.programManagementAccountId">programManagementAccountId</a></code> | <code>string</code> | The ProgramManagementAccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.relationshipId">relationshipId</a></code> | <code>string</code> | The RelationshipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `programManagementAccountId`<sup>Required</sup> <a name="programManagementAccountId" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.programManagementAccountId"></a>

```typescript
public readonly programManagementAccountId: string;
```

- *Type:* string

The ProgramManagementAccountId component of the ARN.

---

##### `relationshipId`<sup>Required</sup> <a name="relationshipId" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.relationshipId"></a>

```typescript
public readonly relationshipId: string;
```

- *Type:* string

The RelationshipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralResourceSnapshotArnComponents <a name="PartnercentralResourceSnapshotArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents"></a>

Parsed components of a ResourceSnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralResourceSnapshotArnComponents: partnercentral.PartnercentralResourceSnapshotArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.engagementIdentifier">engagementIdentifier</a></code> | <code>string</code> | The EngagementIdentifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | The ResourceIdentifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.resourceType">resourceType</a></code> | <code>string</code> | The ResourceType component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.snapshotRevision">snapshotRevision</a></code> | <code>string</code> | The SnapshotRevision component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.templateIdentifier">templateIdentifier</a></code> | <code>string</code> | The TemplateIdentifier component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `engagementIdentifier`<sup>Required</sup> <a name="engagementIdentifier" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.engagementIdentifier"></a>

```typescript
public readonly engagementIdentifier: string;
```

- *Type:* string

The EngagementIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

The ResourceIdentifier component.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The ResourceType component.

---

##### `snapshotRevision`<sup>Required</sup> <a name="snapshotRevision" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.snapshotRevision"></a>

```typescript
public readonly snapshotRevision: string;
```

- *Type:* string

The SnapshotRevision component.

---

##### `templateIdentifier`<sup>Required</sup> <a name="templateIdentifier" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnComponents.property.templateIdentifier"></a>

```typescript
public readonly templateIdentifier: string;
```

- *Type:* string

The TemplateIdentifier component.

---

### PartnercentralResourceSnapshotArnProps <a name="PartnercentralResourceSnapshotArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps"></a>

Properties for building a ResourceSnapshot ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralResourceSnapshotArnProps: partnercentral.PartnercentralResourceSnapshotArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.engagementIdentifier">engagementIdentifier</a></code> | <code>string</code> | The EngagementIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | The ResourceIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.resourceType">resourceType</a></code> | <code>string</code> | The ResourceType component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.snapshotRevision">snapshotRevision</a></code> | <code>string</code> | The SnapshotRevision component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.templateIdentifier">templateIdentifier</a></code> | <code>string</code> | The TemplateIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `engagementIdentifier`<sup>Required</sup> <a name="engagementIdentifier" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.engagementIdentifier"></a>

```typescript
public readonly engagementIdentifier: string;
```

- *Type:* string

The EngagementIdentifier component of the ARN.

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

The ResourceIdentifier component of the ARN.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The ResourceType component of the ARN.

---

##### `snapshotRevision`<sup>Required</sup> <a name="snapshotRevision" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.snapshotRevision"></a>

```typescript
public readonly snapshotRevision: string;
```

- *Type:* string

The SnapshotRevision component of the ARN.

---

##### `templateIdentifier`<sup>Required</sup> <a name="templateIdentifier" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.templateIdentifier"></a>

```typescript
public readonly templateIdentifier: string;
```

- *Type:* string

The TemplateIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralResourceSnapshotJobArnComponents <a name="PartnercentralResourceSnapshotJobArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents"></a>

Parsed components of a resource-snapshot-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralResourceSnapshotJobArnComponents: partnercentral.PartnercentralResourceSnapshotJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralResourceSnapshotJobArnProps <a name="PartnercentralResourceSnapshotJobArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps"></a>

Properties for building a resource-snapshot-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralResourceSnapshotJobArnProps: partnercentral.PartnercentralResourceSnapshotJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralRevenueAttributionArnComponents <a name="PartnercentralRevenueAttributionArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents"></a>

Parsed components of a RevenueAttribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralRevenueAttributionArnComponents: partnercentral.PartnercentralRevenueAttributionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.revenueAttributionId">revenueAttributionId</a></code> | <code>string</code> | The RevenueAttributionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `revenueAttributionId`<sup>Required</sup> <a name="revenueAttributionId" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnComponents.property.revenueAttributionId"></a>

```typescript
public readonly revenueAttributionId: string;
```

- *Type:* string

The RevenueAttributionId component.

---

### PartnercentralRevenueAttributionArnProps <a name="PartnercentralRevenueAttributionArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps"></a>

Properties for building a RevenueAttribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralRevenueAttributionArnProps: partnercentral.PartnercentralRevenueAttributionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.revenueAttributionId">revenueAttributionId</a></code> | <code>string</code> | The RevenueAttributionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `revenueAttributionId`<sup>Required</sup> <a name="revenueAttributionId" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.revenueAttributionId"></a>

```typescript
public readonly revenueAttributionId: string;
```

- *Type:* string

The RevenueAttributionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PartnercentralSolutionArnComponents <a name="PartnercentralSolutionArnComponents" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents"></a>

Parsed components of a Solution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralSolutionArnComponents: partnercentral.PartnercentralSolutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PartnercentralSolutionArnProps <a name="PartnercentralSolutionArnProps" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps"></a>

Properties for building a Solution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

const partnercentralSolutionArnProps: partnercentral.PartnercentralSolutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.catalog">catalog</a></code> | <code>string</code> | The Catalog component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

The Catalog component of the ARN.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PartnercentralActions <a name="PartnercentralActions" id="@cdk_utils/iam.partnercentral.PartnercentralActions"></a>

IAM action constants for the partnercentral service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.partnercentral.PartnercentralActions.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

new partnercentral.PartnercentralActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AcceptChannelHandshake">AcceptChannelHandshake</a></code> | <code>string</code> | [Write] partnercentral:AcceptChannelHandshake. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AcceptConnectionInvitation">AcceptConnectionInvitation</a></code> | <code>string</code> | [Write] partnercentral:AcceptConnectionInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AcceptEngagementInvitation">AcceptEngagementInvitation</a></code> | <code>string</code> | [Write] partnercentral:AcceptEngagementInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetAllianceLeadContact">actionGetAllianceLeadContact</a></code> | <code>string</code> | [Read] partnercentral:GetAllianceLeadContact. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetAwsOpportunitySummary">actionGetAwsOpportunitySummary</a></code> | <code>string</code> | [Read] partnercentral:GetAwsOpportunitySummary. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetBenefit">actionGetBenefit</a></code> | <code>string</code> | [Read] partnercentral:GetBenefit. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetBenefitAllocation">actionGetBenefitAllocation</a></code> | <code>string</code> | [Read] partnercentral:GetBenefitAllocation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetBenefitApplication">actionGetBenefitApplication</a></code> | <code>string</code> | [Read] partnercentral:GetBenefitApplication. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetBusinessPlan">actionGetBusinessPlan</a></code> | <code>string</code> | [Read] partnercentral:GetBusinessPlan. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetCollaborationChannel">actionGetCollaborationChannel</a></code> | <code>string</code> | [Read] partnercentral:GetCollaborationChannel. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetConnection">actionGetConnection</a></code> | <code>string</code> | [Read] partnercentral:GetConnection. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetConnectionInvitation">actionGetConnectionInvitation</a></code> | <code>string</code> | [Read] partnercentral:GetConnectionInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetConnectionPreferences">actionGetConnectionPreferences</a></code> | <code>string</code> | [Read] partnercentral:GetConnectionPreferences. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetEngagement">actionGetEngagement</a></code> | <code>string</code> | [Read] partnercentral:GetEngagement. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetEngagementInvitation">actionGetEngagementInvitation</a></code> | <code>string</code> | [Read] partnercentral:GetEngagementInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetMarketplaceRevenueShare">actionGetMarketplaceRevenueShare</a></code> | <code>string</code> | [Read] partnercentral:GetMarketplaceRevenueShare. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetMarketplaceRevenueShareAllocation">actionGetMarketplaceRevenueShareAllocation</a></code> | <code>string</code> | [Read] partnercentral:GetMarketplaceRevenueShareAllocation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetOpportunity">actionGetOpportunity</a></code> | <code>string</code> | [Read] partnercentral:GetOpportunity. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetPartner">actionGetPartner</a></code> | <code>string</code> | [Read] partnercentral:GetPartner. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetPartnerDashboard">actionGetPartnerDashboard</a></code> | <code>string</code> | [Read] partnercentral:GetPartnerDashboard. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetPartnerProfile">actionGetPartnerProfile</a></code> | <code>string</code> | [Read] partnercentral:GetPartnerProfile. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetProfileUpdateTask">actionGetProfileUpdateTask</a></code> | <code>string</code> | [Read] partnercentral:GetProfileUpdateTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetProfileVisibility">actionGetProfileVisibility</a></code> | <code>string</code> | [Read] partnercentral:GetProfileVisibility. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetProgramManagementAccount">actionGetProgramManagementAccount</a></code> | <code>string</code> | [Read] partnercentral:GetProgramManagementAccount. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetProspectingFromEngagementTask">actionGetProspectingFromEngagementTask</a></code> | <code>string</code> | [Read] partnercentral:GetProspectingFromEngagementTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetQualificationsAssociationDetails">actionGetQualificationsAssociationDetails</a></code> | <code>string</code> | [Read] partnercentral:GetQualificationsAssociationDetails. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetQualificationsAssociationTask">actionGetQualificationsAssociationTask</a></code> | <code>string</code> | [Read] partnercentral:GetQualificationsAssociationTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetQualificationsDisassociationTask">actionGetQualificationsDisassociationTask</a></code> | <code>string</code> | [Read] partnercentral:GetQualificationsDisassociationTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetRelationship">actionGetRelationship</a></code> | <code>string</code> | [Read] partnercentral:GetRelationship. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetResourceSnapshot">actionGetResourceSnapshot</a></code> | <code>string</code> | [Read] partnercentral:GetResourceSnapshot. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetResourceSnapshotJob">actionGetResourceSnapshotJob</a></code> | <code>string</code> | [Read] partnercentral:GetResourceSnapshotJob. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetRevenueAttribution">actionGetRevenueAttribution</a></code> | <code>string</code> | [Read] partnercentral:GetRevenueAttribution. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetRevenueAttributionAllocation">actionGetRevenueAttributionAllocation</a></code> | <code>string</code> | [Read] partnercentral:GetRevenueAttributionAllocation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetRevenueAttributionAllocationsTask">actionGetRevenueAttributionAllocationsTask</a></code> | <code>string</code> | [Read] partnercentral:GetRevenueAttributionAllocationsTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetSellingSystemSettings">actionGetSellingSystemSettings</a></code> | <code>string</code> | [Read] partnercentral:GetSellingSystemSettings. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetVerification">actionGetVerification</a></code> | <code>string</code> | [Read] partnercentral:GetVerification. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AmendBenefitApplication">AmendBenefitApplication</a></code> | <code>string</code> | [Write] partnercentral:AmendBenefitApplication. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AssignOpportunity">AssignOpportunity</a></code> | <code>string</code> | [Write] partnercentral:AssignOpportunity. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AssociateAwsTrainingCertificationEmailDomain">AssociateAwsTrainingCertificationEmailDomain</a></code> | <code>string</code> | [Write] partnercentral:AssociateAwsTrainingCertificationEmailDomain. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AssociateBenefitApplicationResource">AssociateBenefitApplicationResource</a></code> | <code>string</code> | [Write] partnercentral:AssociateBenefitApplicationResource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.AssociateOpportunity">AssociateOpportunity</a></code> | <code>string</code> | [Write] partnercentral:AssociateOpportunity. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelBenefitApplication">CancelBenefitApplication</a></code> | <code>string</code> | [Write] partnercentral:CancelBenefitApplication. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelChannelHandshake">CancelChannelHandshake</a></code> | <code>string</code> | [Write] partnercentral:CancelChannelHandshake. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelConnection">CancelConnection</a></code> | <code>string</code> | [Write] partnercentral:CancelConnection. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelConnectionInvitation">CancelConnectionInvitation</a></code> | <code>string</code> | [Write] partnercentral:CancelConnectionInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelProfileUpdateTask">CancelProfileUpdateTask</a></code> | <code>string</code> | [Write] partnercentral:CancelProfileUpdateTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateBenefitApplication">CreateBenefitApplication</a></code> | <code>string</code> | [Write] partnercentral:CreateBenefitApplication. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateBusinessPlan">CreateBusinessPlan</a></code> | <code>string</code> | [Write] partnercentral:CreateBusinessPlan. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateChannelHandshake">CreateChannelHandshake</a></code> | <code>string</code> | [Write] partnercentral:CreateChannelHandshake. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateCollaborationChannelMembers">CreateCollaborationChannelMembers</a></code> | <code>string</code> | [Write] partnercentral:CreateCollaborationChannelMembers. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateCollaborationChannelRequest">CreateCollaborationChannelRequest</a></code> | <code>string</code> | [Write] partnercentral:CreateCollaborationChannelRequest. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateConnectionInvitation">CreateConnectionInvitation</a></code> | <code>string</code> | [Write] partnercentral:CreateConnectionInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateEngagement">CreateEngagement</a></code> | <code>string</code> | [Write] partnercentral:CreateEngagement. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateEngagementContext">CreateEngagementContext</a></code> | <code>string</code> | [Write] partnercentral:CreateEngagementContext. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateEngagementInvitation">CreateEngagementInvitation</a></code> | <code>string</code> | [Write] partnercentral:CreateEngagementInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateMarketplaceRevenueShare">CreateMarketplaceRevenueShare</a></code> | <code>string</code> | [Write] partnercentral:CreateMarketplaceRevenueShare. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateMarketplaceRevenueShareAllocation">CreateMarketplaceRevenueShareAllocation</a></code> | <code>string</code> | [Write] partnercentral:CreateMarketplaceRevenueShareAllocation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateOpportunity">CreateOpportunity</a></code> | <code>string</code> | [Write] partnercentral:CreateOpportunity. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreatePartner">CreatePartner</a></code> | <code>string</code> | [Write] partnercentral:CreatePartner. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateProgramManagementAccount">CreateProgramManagementAccount</a></code> | <code>string</code> | [Write] partnercentral:CreateProgramManagementAccount. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateRelationship">CreateRelationship</a></code> | <code>string</code> | [Write] partnercentral:CreateRelationship. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateResourceSnapshot">CreateResourceSnapshot</a></code> | <code>string</code> | [Write] partnercentral:CreateResourceSnapshot. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateResourceSnapshotJob">CreateResourceSnapshotJob</a></code> | <code>string</code> | [Write] partnercentral:CreateResourceSnapshotJob. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateRevenueAttribution">CreateRevenueAttribution</a></code> | <code>string</code> | [Write] partnercentral:CreateRevenueAttribution. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.DeleteProgramManagementAccount">DeleteProgramManagementAccount</a></code> | <code>string</code> | [Write] partnercentral:DeleteProgramManagementAccount. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.DeleteRelationship">DeleteRelationship</a></code> | <code>string</code> | [Write] partnercentral:DeleteRelationship. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.DeleteResourceSnapshotJob">DeleteResourceSnapshotJob</a></code> | <code>string</code> | [Write] partnercentral:DeleteResourceSnapshotJob. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.DisassociateAwsTrainingCertificationEmailDomain">DisassociateAwsTrainingCertificationEmailDomain</a></code> | <code>string</code> | [Write] partnercentral:DisassociateAwsTrainingCertificationEmailDomain. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.DisassociateBenefitApplicationResource">DisassociateBenefitApplicationResource</a></code> | <code>string</code> | [Write] partnercentral:DisassociateBenefitApplicationResource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.DisassociateOpportunity">DisassociateOpportunity</a></code> | <code>string</code> | [Write] partnercentral:DisassociateOpportunity. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.EnrollInPartnerPath">EnrollInPartnerPath</a></code> | <code>string</code> | [Write] partnercentral:EnrollInPartnerPath. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListBenefitAllocations">ListBenefitAllocations</a></code> | <code>string</code> | [List] partnercentral:ListBenefitAllocations. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListBenefitApplications">ListBenefitApplications</a></code> | <code>string</code> | [List] partnercentral:ListBenefitApplications. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListBenefits">ListBenefits</a></code> | <code>string</code> | [List] partnercentral:ListBenefits. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListBusinessPlans">ListBusinessPlans</a></code> | <code>string</code> | [List] partnercentral:ListBusinessPlans. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListChannelHandshakes">ListChannelHandshakes</a></code> | <code>string</code> | [List] partnercentral:ListChannelHandshakes. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListCollaborationChannels">ListCollaborationChannels</a></code> | <code>string</code> | [List] partnercentral:ListCollaborationChannels. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListConnectionInvitations">ListConnectionInvitations</a></code> | <code>string</code> | [List] partnercentral:ListConnectionInvitations. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListConnections">ListConnections</a></code> | <code>string</code> | [List] partnercentral:ListConnections. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementByAcceptingInvitationTasks">ListEngagementByAcceptingInvitationTasks</a></code> | <code>string</code> | [List] partnercentral:ListEngagementByAcceptingInvitationTasks. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementFromOpportunityTasks">ListEngagementFromOpportunityTasks</a></code> | <code>string</code> | [List] partnercentral:ListEngagementFromOpportunityTasks. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementInvitations">ListEngagementInvitations</a></code> | <code>string</code> | [List] partnercentral:ListEngagementInvitations. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementMembers">ListEngagementMembers</a></code> | <code>string</code> | [Read] partnercentral:ListEngagementMembers. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementResourceAssociations">ListEngagementResourceAssociations</a></code> | <code>string</code> | [Read] partnercentral:ListEngagementResourceAssociations. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagements">ListEngagements</a></code> | <code>string</code> | [List] partnercentral:ListEngagements. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListMarketplaceRevenueShareAllocations">ListMarketplaceRevenueShareAllocations</a></code> | <code>string</code> | [List] partnercentral:ListMarketplaceRevenueShareAllocations. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListMarketplaceRevenueShares">ListMarketplaceRevenueShares</a></code> | <code>string</code> | [List] partnercentral:ListMarketplaceRevenueShares. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListOpportunities">ListOpportunities</a></code> | <code>string</code> | [List] partnercentral:ListOpportunities. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListOpportunityFromEngagementTasks">ListOpportunityFromEngagementTasks</a></code> | <code>string</code> | [List] partnercentral:ListOpportunityFromEngagementTasks. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListPartnerPaths">ListPartnerPaths</a></code> | <code>string</code> | [List] partnercentral:ListPartnerPaths. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListPartners">ListPartners</a></code> | <code>string</code> | [List] partnercentral:ListPartners. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListProgramManagementAccounts">ListProgramManagementAccounts</a></code> | <code>string</code> | [List] partnercentral:ListProgramManagementAccounts. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListProspectingFromEngagementTasks">ListProspectingFromEngagementTasks</a></code> | <code>string</code> | [List] partnercentral:ListProspectingFromEngagementTasks. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListRelationships">ListRelationships</a></code> | <code>string</code> | [List] partnercentral:ListRelationships. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListResourceSnapshotJobs">ListResourceSnapshotJobs</a></code> | <code>string</code> | [List] partnercentral:ListResourceSnapshotJobs. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListResourceSnapshots">ListResourceSnapshots</a></code> | <code>string</code> | [List] partnercentral:ListResourceSnapshots. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListRevenueAttributionAllocations">ListRevenueAttributionAllocations</a></code> | <code>string</code> | [List] partnercentral:ListRevenueAttributionAllocations. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListRevenueAttributions">ListRevenueAttributions</a></code> | <code>string</code> | [List] partnercentral:ListRevenueAttributions. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListSolutions">ListSolutions</a></code> | <code>string</code> | [List] partnercentral:ListSolutions. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] partnercentral:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.PutAllianceLeadContact">PutAllianceLeadContact</a></code> | <code>string</code> | [Write] partnercentral:PutAllianceLeadContact. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.PutBusinessPlan">PutBusinessPlan</a></code> | <code>string</code> | [Write] partnercentral:PutBusinessPlan. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.PutProfileVisibility">PutProfileVisibility</a></code> | <code>string</code> | [Write] partnercentral:PutProfileVisibility. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.PutSellingSystemSettings">PutSellingSystemSettings</a></code> | <code>string</code> | [Write] partnercentral:PutSellingSystemSettings. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.RecallBenefitApplication">RecallBenefitApplication</a></code> | <code>string</code> | [Write] partnercentral:RecallBenefitApplication. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.RejectChannelHandshake">RejectChannelHandshake</a></code> | <code>string</code> | [Write] partnercentral:RejectChannelHandshake. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.RejectConnectionInvitation">RejectConnectionInvitation</a></code> | <code>string</code> | [Write] partnercentral:RejectConnectionInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.RejectEngagementInvitation">RejectEngagementInvitation</a></code> | <code>string</code> | [Write] partnercentral:RejectEngagementInvitation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.SearchPartnerProfiles">SearchPartnerProfiles</a></code> | <code>string</code> | [List] partnercentral:SearchPartnerProfiles. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.SendEmailVerificationCode">SendEmailVerificationCode</a></code> | <code>string</code> | [Write] partnercentral:SendEmailVerificationCode. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartEngagementByAcceptingInvitationTask">StartEngagementByAcceptingInvitationTask</a></code> | <code>string</code> | [Write] partnercentral:StartEngagementByAcceptingInvitationTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartEngagementFromOpportunityTask">StartEngagementFromOpportunityTask</a></code> | <code>string</code> | [Write] partnercentral:StartEngagementFromOpportunityTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartOpportunityFromEngagementTask">StartOpportunityFromEngagementTask</a></code> | <code>string</code> | [Write] partnercentral:StartOpportunityFromEngagementTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartProfileUpdateTask">StartProfileUpdateTask</a></code> | <code>string</code> | [Write] partnercentral:StartProfileUpdateTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartProspectingFromEngagementTask">StartProspectingFromEngagementTask</a></code> | <code>string</code> | [Write] partnercentral:StartProspectingFromEngagementTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartQualificationsAssociationTask">StartQualificationsAssociationTask</a></code> | <code>string</code> | [Write] partnercentral:StartQualificationsAssociationTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartQualificationsDisassociationTask">StartQualificationsDisassociationTask</a></code> | <code>string</code> | [Write] partnercentral:StartQualificationsDisassociationTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartResourceSnapshotJob">StartResourceSnapshotJob</a></code> | <code>string</code> | [Write] partnercentral:StartResourceSnapshotJob. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartRevenueAttributionAllocationsTask">StartRevenueAttributionAllocationsTask</a></code> | <code>string</code> | [Write] partnercentral:StartRevenueAttributionAllocationsTask. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartVerification">StartVerification</a></code> | <code>string</code> | [Write] partnercentral:StartVerification. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.StopResourceSnapshotJob">StopResourceSnapshotJob</a></code> | <code>string</code> | [Write] partnercentral:StopResourceSnapshotJob. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.SubmitBenefitApplication">SubmitBenefitApplication</a></code> | <code>string</code> | [Write] partnercentral:SubmitBenefitApplication. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.SubmitOpportunity">SubmitOpportunity</a></code> | <code>string</code> | [Write] partnercentral:SubmitOpportunity. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] partnercentral:TagResource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] partnercentral:UntagResource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateBenefitApplication">UpdateBenefitApplication</a></code> | <code>string</code> | [Write] partnercentral:UpdateBenefitApplication. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateConnectionPreferences">UpdateConnectionPreferences</a></code> | <code>string</code> | [Write] partnercentral:UpdateConnectionPreferences. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateEngagementContext">UpdateEngagementContext</a></code> | <code>string</code> | [Write] partnercentral:UpdateEngagementContext. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateMarketplaceRevenueShareAllocation">UpdateMarketplaceRevenueShareAllocation</a></code> | <code>string</code> | [Write] partnercentral:UpdateMarketplaceRevenueShareAllocation. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateOpportunity">UpdateOpportunity</a></code> | <code>string</code> | [Write] partnercentral:UpdateOpportunity. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateProgramManagementAccount">UpdateProgramManagementAccount</a></code> | <code>string</code> | [Write] partnercentral:UpdateProgramManagementAccount. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateRelationship">UpdateRelationship</a></code> | <code>string</code> | [Write] partnercentral:UpdateRelationship. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateRevenueAttribution">UpdateRevenueAttribution</a></code> | <code>string</code> | [Write] partnercentral:UpdateRevenueAttribution. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralActions.property.UseSession">UseSession</a></code> | <code>string</code> | [Write] partnercentral:UseSession. |

---

##### `AcceptChannelHandshake`<sup>Required</sup> <a name="AcceptChannelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AcceptChannelHandshake"></a>

```typescript
public readonly AcceptChannelHandshake: string;
```

- *Type:* string

[Write] partnercentral:AcceptChannelHandshake.

---

##### `AcceptConnectionInvitation`<sup>Required</sup> <a name="AcceptConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AcceptConnectionInvitation"></a>

```typescript
public readonly AcceptConnectionInvitation: string;
```

- *Type:* string

[Write] partnercentral:AcceptConnectionInvitation.

---

##### `AcceptEngagementInvitation`<sup>Required</sup> <a name="AcceptEngagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AcceptEngagementInvitation"></a>

```typescript
public readonly AcceptEngagementInvitation: string;
```

- *Type:* string

[Write] partnercentral:AcceptEngagementInvitation.

---

##### `actionGetAllianceLeadContact`<sup>Required</sup> <a name="actionGetAllianceLeadContact" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetAllianceLeadContact"></a>

```typescript
public readonly actionGetAllianceLeadContact: string;
```

- *Type:* string

[Read] partnercentral:GetAllianceLeadContact.

---

##### `actionGetAwsOpportunitySummary`<sup>Required</sup> <a name="actionGetAwsOpportunitySummary" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetAwsOpportunitySummary"></a>

```typescript
public readonly actionGetAwsOpportunitySummary: string;
```

- *Type:* string

[Read] partnercentral:GetAwsOpportunitySummary.

---

##### `actionGetBenefit`<sup>Required</sup> <a name="actionGetBenefit" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetBenefit"></a>

```typescript
public readonly actionGetBenefit: string;
```

- *Type:* string

[Read] partnercentral:GetBenefit.

---

##### `actionGetBenefitAllocation`<sup>Required</sup> <a name="actionGetBenefitAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetBenefitAllocation"></a>

```typescript
public readonly actionGetBenefitAllocation: string;
```

- *Type:* string

[Read] partnercentral:GetBenefitAllocation.

---

##### `actionGetBenefitApplication`<sup>Required</sup> <a name="actionGetBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetBenefitApplication"></a>

```typescript
public readonly actionGetBenefitApplication: string;
```

- *Type:* string

[Read] partnercentral:GetBenefitApplication.

---

##### `actionGetBusinessPlan`<sup>Required</sup> <a name="actionGetBusinessPlan" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetBusinessPlan"></a>

```typescript
public readonly actionGetBusinessPlan: string;
```

- *Type:* string

[Read] partnercentral:GetBusinessPlan.

---

##### `actionGetCollaborationChannel`<sup>Required</sup> <a name="actionGetCollaborationChannel" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetCollaborationChannel"></a>

```typescript
public readonly actionGetCollaborationChannel: string;
```

- *Type:* string

[Read] partnercentral:GetCollaborationChannel.

---

##### `actionGetConnection`<sup>Required</sup> <a name="actionGetConnection" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetConnection"></a>

```typescript
public readonly actionGetConnection: string;
```

- *Type:* string

[Read] partnercentral:GetConnection.

---

##### `actionGetConnectionInvitation`<sup>Required</sup> <a name="actionGetConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetConnectionInvitation"></a>

```typescript
public readonly actionGetConnectionInvitation: string;
```

- *Type:* string

[Read] partnercentral:GetConnectionInvitation.

---

##### `actionGetConnectionPreferences`<sup>Required</sup> <a name="actionGetConnectionPreferences" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetConnectionPreferences"></a>

```typescript
public readonly actionGetConnectionPreferences: string;
```

- *Type:* string

[Read] partnercentral:GetConnectionPreferences.

---

##### `actionGetEngagement`<sup>Required</sup> <a name="actionGetEngagement" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetEngagement"></a>

```typescript
public readonly actionGetEngagement: string;
```

- *Type:* string

[Read] partnercentral:GetEngagement.

---

##### `actionGetEngagementInvitation`<sup>Required</sup> <a name="actionGetEngagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetEngagementInvitation"></a>

```typescript
public readonly actionGetEngagementInvitation: string;
```

- *Type:* string

[Read] partnercentral:GetEngagementInvitation.

---

##### `actionGetMarketplaceRevenueShare`<sup>Required</sup> <a name="actionGetMarketplaceRevenueShare" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetMarketplaceRevenueShare"></a>

```typescript
public readonly actionGetMarketplaceRevenueShare: string;
```

- *Type:* string

[Read] partnercentral:GetMarketplaceRevenueShare.

---

##### `actionGetMarketplaceRevenueShareAllocation`<sup>Required</sup> <a name="actionGetMarketplaceRevenueShareAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetMarketplaceRevenueShareAllocation"></a>

```typescript
public readonly actionGetMarketplaceRevenueShareAllocation: string;
```

- *Type:* string

[Read] partnercentral:GetMarketplaceRevenueShareAllocation.

---

##### `actionGetOpportunity`<sup>Required</sup> <a name="actionGetOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetOpportunity"></a>

```typescript
public readonly actionGetOpportunity: string;
```

- *Type:* string

[Read] partnercentral:GetOpportunity.

---

##### `actionGetPartner`<sup>Required</sup> <a name="actionGetPartner" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetPartner"></a>

```typescript
public readonly actionGetPartner: string;
```

- *Type:* string

[Read] partnercentral:GetPartner.

---

##### `actionGetPartnerDashboard`<sup>Required</sup> <a name="actionGetPartnerDashboard" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetPartnerDashboard"></a>

```typescript
public readonly actionGetPartnerDashboard: string;
```

- *Type:* string

[Read] partnercentral:GetPartnerDashboard.

---

##### `actionGetPartnerProfile`<sup>Required</sup> <a name="actionGetPartnerProfile" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetPartnerProfile"></a>

```typescript
public readonly actionGetPartnerProfile: string;
```

- *Type:* string

[Read] partnercentral:GetPartnerProfile.

---

##### `actionGetProfileUpdateTask`<sup>Required</sup> <a name="actionGetProfileUpdateTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetProfileUpdateTask"></a>

```typescript
public readonly actionGetProfileUpdateTask: string;
```

- *Type:* string

[Read] partnercentral:GetProfileUpdateTask.

---

##### `actionGetProfileVisibility`<sup>Required</sup> <a name="actionGetProfileVisibility" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetProfileVisibility"></a>

```typescript
public readonly actionGetProfileVisibility: string;
```

- *Type:* string

[Read] partnercentral:GetProfileVisibility.

---

##### `actionGetProgramManagementAccount`<sup>Required</sup> <a name="actionGetProgramManagementAccount" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetProgramManagementAccount"></a>

```typescript
public readonly actionGetProgramManagementAccount: string;
```

- *Type:* string

[Read] partnercentral:GetProgramManagementAccount.

---

##### `actionGetProspectingFromEngagementTask`<sup>Required</sup> <a name="actionGetProspectingFromEngagementTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetProspectingFromEngagementTask"></a>

```typescript
public readonly actionGetProspectingFromEngagementTask: string;
```

- *Type:* string

[Read] partnercentral:GetProspectingFromEngagementTask.

---

##### `actionGetQualificationsAssociationDetails`<sup>Required</sup> <a name="actionGetQualificationsAssociationDetails" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetQualificationsAssociationDetails"></a>

```typescript
public readonly actionGetQualificationsAssociationDetails: string;
```

- *Type:* string

[Read] partnercentral:GetQualificationsAssociationDetails.

---

##### `actionGetQualificationsAssociationTask`<sup>Required</sup> <a name="actionGetQualificationsAssociationTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetQualificationsAssociationTask"></a>

```typescript
public readonly actionGetQualificationsAssociationTask: string;
```

- *Type:* string

[Read] partnercentral:GetQualificationsAssociationTask.

---

##### `actionGetQualificationsDisassociationTask`<sup>Required</sup> <a name="actionGetQualificationsDisassociationTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetQualificationsDisassociationTask"></a>

```typescript
public readonly actionGetQualificationsDisassociationTask: string;
```

- *Type:* string

[Read] partnercentral:GetQualificationsDisassociationTask.

---

##### `actionGetRelationship`<sup>Required</sup> <a name="actionGetRelationship" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetRelationship"></a>

```typescript
public readonly actionGetRelationship: string;
```

- *Type:* string

[Read] partnercentral:GetRelationship.

---

##### `actionGetResourceSnapshot`<sup>Required</sup> <a name="actionGetResourceSnapshot" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetResourceSnapshot"></a>

```typescript
public readonly actionGetResourceSnapshot: string;
```

- *Type:* string

[Read] partnercentral:GetResourceSnapshot.

---

##### `actionGetResourceSnapshotJob`<sup>Required</sup> <a name="actionGetResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetResourceSnapshotJob"></a>

```typescript
public readonly actionGetResourceSnapshotJob: string;
```

- *Type:* string

[Read] partnercentral:GetResourceSnapshotJob.

---

##### `actionGetRevenueAttribution`<sup>Required</sup> <a name="actionGetRevenueAttribution" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetRevenueAttribution"></a>

```typescript
public readonly actionGetRevenueAttribution: string;
```

- *Type:* string

[Read] partnercentral:GetRevenueAttribution.

---

##### `actionGetRevenueAttributionAllocation`<sup>Required</sup> <a name="actionGetRevenueAttributionAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetRevenueAttributionAllocation"></a>

```typescript
public readonly actionGetRevenueAttributionAllocation: string;
```

- *Type:* string

[Read] partnercentral:GetRevenueAttributionAllocation.

---

##### `actionGetRevenueAttributionAllocationsTask`<sup>Required</sup> <a name="actionGetRevenueAttributionAllocationsTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetRevenueAttributionAllocationsTask"></a>

```typescript
public readonly actionGetRevenueAttributionAllocationsTask: string;
```

- *Type:* string

[Read] partnercentral:GetRevenueAttributionAllocationsTask.

---

##### `actionGetSellingSystemSettings`<sup>Required</sup> <a name="actionGetSellingSystemSettings" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetSellingSystemSettings"></a>

```typescript
public readonly actionGetSellingSystemSettings: string;
```

- *Type:* string

[Read] partnercentral:GetSellingSystemSettings.

---

##### `actionGetVerification`<sup>Required</sup> <a name="actionGetVerification" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.actionGetVerification"></a>

```typescript
public readonly actionGetVerification: string;
```

- *Type:* string

[Read] partnercentral:GetVerification.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AmendBenefitApplication`<sup>Required</sup> <a name="AmendBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AmendBenefitApplication"></a>

```typescript
public readonly AmendBenefitApplication: string;
```

- *Type:* string

[Write] partnercentral:AmendBenefitApplication.

---

##### `AssignOpportunity`<sup>Required</sup> <a name="AssignOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AssignOpportunity"></a>

```typescript
public readonly AssignOpportunity: string;
```

- *Type:* string

[Write] partnercentral:AssignOpportunity.

---

##### `AssociateAwsTrainingCertificationEmailDomain`<sup>Required</sup> <a name="AssociateAwsTrainingCertificationEmailDomain" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AssociateAwsTrainingCertificationEmailDomain"></a>

```typescript
public readonly AssociateAwsTrainingCertificationEmailDomain: string;
```

- *Type:* string

[Write] partnercentral:AssociateAwsTrainingCertificationEmailDomain.

---

##### `AssociateBenefitApplicationResource`<sup>Required</sup> <a name="AssociateBenefitApplicationResource" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AssociateBenefitApplicationResource"></a>

```typescript
public readonly AssociateBenefitApplicationResource: string;
```

- *Type:* string

[Write] partnercentral:AssociateBenefitApplicationResource.

---

##### `AssociateOpportunity`<sup>Required</sup> <a name="AssociateOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.AssociateOpportunity"></a>

```typescript
public readonly AssociateOpportunity: string;
```

- *Type:* string

[Write] partnercentral:AssociateOpportunity.

---

##### `CancelBenefitApplication`<sup>Required</sup> <a name="CancelBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelBenefitApplication"></a>

```typescript
public readonly CancelBenefitApplication: string;
```

- *Type:* string

[Write] partnercentral:CancelBenefitApplication.

---

##### `CancelChannelHandshake`<sup>Required</sup> <a name="CancelChannelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelChannelHandshake"></a>

```typescript
public readonly CancelChannelHandshake: string;
```

- *Type:* string

[Write] partnercentral:CancelChannelHandshake.

---

##### `CancelConnection`<sup>Required</sup> <a name="CancelConnection" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelConnection"></a>

```typescript
public readonly CancelConnection: string;
```

- *Type:* string

[Write] partnercentral:CancelConnection.

---

##### `CancelConnectionInvitation`<sup>Required</sup> <a name="CancelConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelConnectionInvitation"></a>

```typescript
public readonly CancelConnectionInvitation: string;
```

- *Type:* string

[Write] partnercentral:CancelConnectionInvitation.

---

##### `CancelProfileUpdateTask`<sup>Required</sup> <a name="CancelProfileUpdateTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CancelProfileUpdateTask"></a>

```typescript
public readonly CancelProfileUpdateTask: string;
```

- *Type:* string

[Write] partnercentral:CancelProfileUpdateTask.

---

##### `CreateBenefitApplication`<sup>Required</sup> <a name="CreateBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateBenefitApplication"></a>

```typescript
public readonly CreateBenefitApplication: string;
```

- *Type:* string

[Write] partnercentral:CreateBenefitApplication.

---

##### `CreateBusinessPlan`<sup>Required</sup> <a name="CreateBusinessPlan" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateBusinessPlan"></a>

```typescript
public readonly CreateBusinessPlan: string;
```

- *Type:* string

[Write] partnercentral:CreateBusinessPlan.

---

##### `CreateChannelHandshake`<sup>Required</sup> <a name="CreateChannelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateChannelHandshake"></a>

```typescript
public readonly CreateChannelHandshake: string;
```

- *Type:* string

[Write] partnercentral:CreateChannelHandshake.

---

##### `CreateCollaborationChannelMembers`<sup>Required</sup> <a name="CreateCollaborationChannelMembers" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateCollaborationChannelMembers"></a>

```typescript
public readonly CreateCollaborationChannelMembers: string;
```

- *Type:* string

[Write] partnercentral:CreateCollaborationChannelMembers.

---

##### `CreateCollaborationChannelRequest`<sup>Required</sup> <a name="CreateCollaborationChannelRequest" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateCollaborationChannelRequest"></a>

```typescript
public readonly CreateCollaborationChannelRequest: string;
```

- *Type:* string

[Write] partnercentral:CreateCollaborationChannelRequest.

---

##### `CreateConnectionInvitation`<sup>Required</sup> <a name="CreateConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateConnectionInvitation"></a>

```typescript
public readonly CreateConnectionInvitation: string;
```

- *Type:* string

[Write] partnercentral:CreateConnectionInvitation.

---

##### `CreateEngagement`<sup>Required</sup> <a name="CreateEngagement" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateEngagement"></a>

```typescript
public readonly CreateEngagement: string;
```

- *Type:* string

[Write] partnercentral:CreateEngagement.

---

##### `CreateEngagementContext`<sup>Required</sup> <a name="CreateEngagementContext" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateEngagementContext"></a>

```typescript
public readonly CreateEngagementContext: string;
```

- *Type:* string

[Write] partnercentral:CreateEngagementContext.

---

##### `CreateEngagementInvitation`<sup>Required</sup> <a name="CreateEngagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateEngagementInvitation"></a>

```typescript
public readonly CreateEngagementInvitation: string;
```

- *Type:* string

[Write] partnercentral:CreateEngagementInvitation.

---

##### `CreateMarketplaceRevenueShare`<sup>Required</sup> <a name="CreateMarketplaceRevenueShare" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateMarketplaceRevenueShare"></a>

```typescript
public readonly CreateMarketplaceRevenueShare: string;
```

- *Type:* string

[Write] partnercentral:CreateMarketplaceRevenueShare.

---

##### `CreateMarketplaceRevenueShareAllocation`<sup>Required</sup> <a name="CreateMarketplaceRevenueShareAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateMarketplaceRevenueShareAllocation"></a>

```typescript
public readonly CreateMarketplaceRevenueShareAllocation: string;
```

- *Type:* string

[Write] partnercentral:CreateMarketplaceRevenueShareAllocation.

---

##### `CreateOpportunity`<sup>Required</sup> <a name="CreateOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateOpportunity"></a>

```typescript
public readonly CreateOpportunity: string;
```

- *Type:* string

[Write] partnercentral:CreateOpportunity.

---

##### `CreatePartner`<sup>Required</sup> <a name="CreatePartner" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreatePartner"></a>

```typescript
public readonly CreatePartner: string;
```

- *Type:* string

[Write] partnercentral:CreatePartner.

---

##### `CreateProgramManagementAccount`<sup>Required</sup> <a name="CreateProgramManagementAccount" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateProgramManagementAccount"></a>

```typescript
public readonly CreateProgramManagementAccount: string;
```

- *Type:* string

[Write] partnercentral:CreateProgramManagementAccount.

---

##### `CreateRelationship`<sup>Required</sup> <a name="CreateRelationship" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateRelationship"></a>

```typescript
public readonly CreateRelationship: string;
```

- *Type:* string

[Write] partnercentral:CreateRelationship.

---

##### `CreateResourceSnapshot`<sup>Required</sup> <a name="CreateResourceSnapshot" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateResourceSnapshot"></a>

```typescript
public readonly CreateResourceSnapshot: string;
```

- *Type:* string

[Write] partnercentral:CreateResourceSnapshot.

---

##### `CreateResourceSnapshotJob`<sup>Required</sup> <a name="CreateResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateResourceSnapshotJob"></a>

```typescript
public readonly CreateResourceSnapshotJob: string;
```

- *Type:* string

[Write] partnercentral:CreateResourceSnapshotJob.

---

##### `CreateRevenueAttribution`<sup>Required</sup> <a name="CreateRevenueAttribution" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.CreateRevenueAttribution"></a>

```typescript
public readonly CreateRevenueAttribution: string;
```

- *Type:* string

[Write] partnercentral:CreateRevenueAttribution.

---

##### `DeleteProgramManagementAccount`<sup>Required</sup> <a name="DeleteProgramManagementAccount" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.DeleteProgramManagementAccount"></a>

```typescript
public readonly DeleteProgramManagementAccount: string;
```

- *Type:* string

[Write] partnercentral:DeleteProgramManagementAccount.

---

##### `DeleteRelationship`<sup>Required</sup> <a name="DeleteRelationship" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.DeleteRelationship"></a>

```typescript
public readonly DeleteRelationship: string;
```

- *Type:* string

[Write] partnercentral:DeleteRelationship.

---

##### `DeleteResourceSnapshotJob`<sup>Required</sup> <a name="DeleteResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.DeleteResourceSnapshotJob"></a>

```typescript
public readonly DeleteResourceSnapshotJob: string;
```

- *Type:* string

[Write] partnercentral:DeleteResourceSnapshotJob.

---

##### `DisassociateAwsTrainingCertificationEmailDomain`<sup>Required</sup> <a name="DisassociateAwsTrainingCertificationEmailDomain" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.DisassociateAwsTrainingCertificationEmailDomain"></a>

```typescript
public readonly DisassociateAwsTrainingCertificationEmailDomain: string;
```

- *Type:* string

[Write] partnercentral:DisassociateAwsTrainingCertificationEmailDomain.

---

##### `DisassociateBenefitApplicationResource`<sup>Required</sup> <a name="DisassociateBenefitApplicationResource" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.DisassociateBenefitApplicationResource"></a>

```typescript
public readonly DisassociateBenefitApplicationResource: string;
```

- *Type:* string

[Write] partnercentral:DisassociateBenefitApplicationResource.

---

##### `DisassociateOpportunity`<sup>Required</sup> <a name="DisassociateOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.DisassociateOpportunity"></a>

```typescript
public readonly DisassociateOpportunity: string;
```

- *Type:* string

[Write] partnercentral:DisassociateOpportunity.

---

##### `EnrollInPartnerPath`<sup>Required</sup> <a name="EnrollInPartnerPath" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.EnrollInPartnerPath"></a>

```typescript
public readonly EnrollInPartnerPath: string;
```

- *Type:* string

[Write] partnercentral:EnrollInPartnerPath.

---

##### `ListBenefitAllocations`<sup>Required</sup> <a name="ListBenefitAllocations" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListBenefitAllocations"></a>

```typescript
public readonly ListBenefitAllocations: string;
```

- *Type:* string

[List] partnercentral:ListBenefitAllocations.

---

##### `ListBenefitApplications`<sup>Required</sup> <a name="ListBenefitApplications" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListBenefitApplications"></a>

```typescript
public readonly ListBenefitApplications: string;
```

- *Type:* string

[List] partnercentral:ListBenefitApplications.

---

##### `ListBenefits`<sup>Required</sup> <a name="ListBenefits" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListBenefits"></a>

```typescript
public readonly ListBenefits: string;
```

- *Type:* string

[List] partnercentral:ListBenefits.

---

##### `ListBusinessPlans`<sup>Required</sup> <a name="ListBusinessPlans" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListBusinessPlans"></a>

```typescript
public readonly ListBusinessPlans: string;
```

- *Type:* string

[List] partnercentral:ListBusinessPlans.

---

##### `ListChannelHandshakes`<sup>Required</sup> <a name="ListChannelHandshakes" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListChannelHandshakes"></a>

```typescript
public readonly ListChannelHandshakes: string;
```

- *Type:* string

[List] partnercentral:ListChannelHandshakes.

---

##### `ListCollaborationChannels`<sup>Required</sup> <a name="ListCollaborationChannels" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListCollaborationChannels"></a>

```typescript
public readonly ListCollaborationChannels: string;
```

- *Type:* string

[List] partnercentral:ListCollaborationChannels.

---

##### `ListConnectionInvitations`<sup>Required</sup> <a name="ListConnectionInvitations" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListConnectionInvitations"></a>

```typescript
public readonly ListConnectionInvitations: string;
```

- *Type:* string

[List] partnercentral:ListConnectionInvitations.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListConnections"></a>

```typescript
public readonly ListConnections: string;
```

- *Type:* string

[List] partnercentral:ListConnections.

---

##### `ListEngagementByAcceptingInvitationTasks`<sup>Required</sup> <a name="ListEngagementByAcceptingInvitationTasks" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementByAcceptingInvitationTasks"></a>

```typescript
public readonly ListEngagementByAcceptingInvitationTasks: string;
```

- *Type:* string

[List] partnercentral:ListEngagementByAcceptingInvitationTasks.

---

##### `ListEngagementFromOpportunityTasks`<sup>Required</sup> <a name="ListEngagementFromOpportunityTasks" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementFromOpportunityTasks"></a>

```typescript
public readonly ListEngagementFromOpportunityTasks: string;
```

- *Type:* string

[List] partnercentral:ListEngagementFromOpportunityTasks.

---

##### `ListEngagementInvitations`<sup>Required</sup> <a name="ListEngagementInvitations" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementInvitations"></a>

```typescript
public readonly ListEngagementInvitations: string;
```

- *Type:* string

[List] partnercentral:ListEngagementInvitations.

---

##### `ListEngagementMembers`<sup>Required</sup> <a name="ListEngagementMembers" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementMembers"></a>

```typescript
public readonly ListEngagementMembers: string;
```

- *Type:* string

[Read] partnercentral:ListEngagementMembers.

---

##### `ListEngagementResourceAssociations`<sup>Required</sup> <a name="ListEngagementResourceAssociations" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagementResourceAssociations"></a>

```typescript
public readonly ListEngagementResourceAssociations: string;
```

- *Type:* string

[Read] partnercentral:ListEngagementResourceAssociations.

---

##### `ListEngagements`<sup>Required</sup> <a name="ListEngagements" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListEngagements"></a>

```typescript
public readonly ListEngagements: string;
```

- *Type:* string

[List] partnercentral:ListEngagements.

---

##### `ListMarketplaceRevenueShareAllocations`<sup>Required</sup> <a name="ListMarketplaceRevenueShareAllocations" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListMarketplaceRevenueShareAllocations"></a>

```typescript
public readonly ListMarketplaceRevenueShareAllocations: string;
```

- *Type:* string

[List] partnercentral:ListMarketplaceRevenueShareAllocations.

---

##### `ListMarketplaceRevenueShares`<sup>Required</sup> <a name="ListMarketplaceRevenueShares" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListMarketplaceRevenueShares"></a>

```typescript
public readonly ListMarketplaceRevenueShares: string;
```

- *Type:* string

[List] partnercentral:ListMarketplaceRevenueShares.

---

##### `ListOpportunities`<sup>Required</sup> <a name="ListOpportunities" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListOpportunities"></a>

```typescript
public readonly ListOpportunities: string;
```

- *Type:* string

[List] partnercentral:ListOpportunities.

---

##### `ListOpportunityFromEngagementTasks`<sup>Required</sup> <a name="ListOpportunityFromEngagementTasks" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListOpportunityFromEngagementTasks"></a>

```typescript
public readonly ListOpportunityFromEngagementTasks: string;
```

- *Type:* string

[List] partnercentral:ListOpportunityFromEngagementTasks.

---

##### `ListPartnerPaths`<sup>Required</sup> <a name="ListPartnerPaths" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListPartnerPaths"></a>

```typescript
public readonly ListPartnerPaths: string;
```

- *Type:* string

[List] partnercentral:ListPartnerPaths.

---

##### `ListPartners`<sup>Required</sup> <a name="ListPartners" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListPartners"></a>

```typescript
public readonly ListPartners: string;
```

- *Type:* string

[List] partnercentral:ListPartners.

---

##### `ListProgramManagementAccounts`<sup>Required</sup> <a name="ListProgramManagementAccounts" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListProgramManagementAccounts"></a>

```typescript
public readonly ListProgramManagementAccounts: string;
```

- *Type:* string

[List] partnercentral:ListProgramManagementAccounts.

---

##### `ListProspectingFromEngagementTasks`<sup>Required</sup> <a name="ListProspectingFromEngagementTasks" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListProspectingFromEngagementTasks"></a>

```typescript
public readonly ListProspectingFromEngagementTasks: string;
```

- *Type:* string

[List] partnercentral:ListProspectingFromEngagementTasks.

---

##### `ListRelationships`<sup>Required</sup> <a name="ListRelationships" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListRelationships"></a>

```typescript
public readonly ListRelationships: string;
```

- *Type:* string

[List] partnercentral:ListRelationships.

---

##### `ListResourceSnapshotJobs`<sup>Required</sup> <a name="ListResourceSnapshotJobs" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListResourceSnapshotJobs"></a>

```typescript
public readonly ListResourceSnapshotJobs: string;
```

- *Type:* string

[List] partnercentral:ListResourceSnapshotJobs.

---

##### `ListResourceSnapshots`<sup>Required</sup> <a name="ListResourceSnapshots" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListResourceSnapshots"></a>

```typescript
public readonly ListResourceSnapshots: string;
```

- *Type:* string

[List] partnercentral:ListResourceSnapshots.

---

##### `ListRevenueAttributionAllocations`<sup>Required</sup> <a name="ListRevenueAttributionAllocations" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListRevenueAttributionAllocations"></a>

```typescript
public readonly ListRevenueAttributionAllocations: string;
```

- *Type:* string

[List] partnercentral:ListRevenueAttributionAllocations.

---

##### `ListRevenueAttributions`<sup>Required</sup> <a name="ListRevenueAttributions" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListRevenueAttributions"></a>

```typescript
public readonly ListRevenueAttributions: string;
```

- *Type:* string

[List] partnercentral:ListRevenueAttributions.

---

##### `ListSolutions`<sup>Required</sup> <a name="ListSolutions" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListSolutions"></a>

```typescript
public readonly ListSolutions: string;
```

- *Type:* string

[List] partnercentral:ListSolutions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] partnercentral:ListTagsForResource.

---

##### `PutAllianceLeadContact`<sup>Required</sup> <a name="PutAllianceLeadContact" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.PutAllianceLeadContact"></a>

```typescript
public readonly PutAllianceLeadContact: string;
```

- *Type:* string

[Write] partnercentral:PutAllianceLeadContact.

---

##### `PutBusinessPlan`<sup>Required</sup> <a name="PutBusinessPlan" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.PutBusinessPlan"></a>

```typescript
public readonly PutBusinessPlan: string;
```

- *Type:* string

[Write] partnercentral:PutBusinessPlan.

---

##### `PutProfileVisibility`<sup>Required</sup> <a name="PutProfileVisibility" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.PutProfileVisibility"></a>

```typescript
public readonly PutProfileVisibility: string;
```

- *Type:* string

[Write] partnercentral:PutProfileVisibility.

---

##### `PutSellingSystemSettings`<sup>Required</sup> <a name="PutSellingSystemSettings" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.PutSellingSystemSettings"></a>

```typescript
public readonly PutSellingSystemSettings: string;
```

- *Type:* string

[Write] partnercentral:PutSellingSystemSettings.

---

##### `RecallBenefitApplication`<sup>Required</sup> <a name="RecallBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.RecallBenefitApplication"></a>

```typescript
public readonly RecallBenefitApplication: string;
```

- *Type:* string

[Write] partnercentral:RecallBenefitApplication.

---

##### `RejectChannelHandshake`<sup>Required</sup> <a name="RejectChannelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.RejectChannelHandshake"></a>

```typescript
public readonly RejectChannelHandshake: string;
```

- *Type:* string

[Write] partnercentral:RejectChannelHandshake.

---

##### `RejectConnectionInvitation`<sup>Required</sup> <a name="RejectConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.RejectConnectionInvitation"></a>

```typescript
public readonly RejectConnectionInvitation: string;
```

- *Type:* string

[Write] partnercentral:RejectConnectionInvitation.

---

##### `RejectEngagementInvitation`<sup>Required</sup> <a name="RejectEngagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.RejectEngagementInvitation"></a>

```typescript
public readonly RejectEngagementInvitation: string;
```

- *Type:* string

[Write] partnercentral:RejectEngagementInvitation.

---

##### `SearchPartnerProfiles`<sup>Required</sup> <a name="SearchPartnerProfiles" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.SearchPartnerProfiles"></a>

```typescript
public readonly SearchPartnerProfiles: string;
```

- *Type:* string

[List] partnercentral:SearchPartnerProfiles.

---

##### `SendEmailVerificationCode`<sup>Required</sup> <a name="SendEmailVerificationCode" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.SendEmailVerificationCode"></a>

```typescript
public readonly SendEmailVerificationCode: string;
```

- *Type:* string

[Write] partnercentral:SendEmailVerificationCode.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartEngagementByAcceptingInvitationTask`<sup>Required</sup> <a name="StartEngagementByAcceptingInvitationTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartEngagementByAcceptingInvitationTask"></a>

```typescript
public readonly StartEngagementByAcceptingInvitationTask: string;
```

- *Type:* string

[Write] partnercentral:StartEngagementByAcceptingInvitationTask.

---

##### `StartEngagementFromOpportunityTask`<sup>Required</sup> <a name="StartEngagementFromOpportunityTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartEngagementFromOpportunityTask"></a>

```typescript
public readonly StartEngagementFromOpportunityTask: string;
```

- *Type:* string

[Write] partnercentral:StartEngagementFromOpportunityTask.

---

##### `StartOpportunityFromEngagementTask`<sup>Required</sup> <a name="StartOpportunityFromEngagementTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartOpportunityFromEngagementTask"></a>

```typescript
public readonly StartOpportunityFromEngagementTask: string;
```

- *Type:* string

[Write] partnercentral:StartOpportunityFromEngagementTask.

---

##### `StartProfileUpdateTask`<sup>Required</sup> <a name="StartProfileUpdateTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartProfileUpdateTask"></a>

```typescript
public readonly StartProfileUpdateTask: string;
```

- *Type:* string

[Write] partnercentral:StartProfileUpdateTask.

---

##### `StartProspectingFromEngagementTask`<sup>Required</sup> <a name="StartProspectingFromEngagementTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartProspectingFromEngagementTask"></a>

```typescript
public readonly StartProspectingFromEngagementTask: string;
```

- *Type:* string

[Write] partnercentral:StartProspectingFromEngagementTask.

---

##### `StartQualificationsAssociationTask`<sup>Required</sup> <a name="StartQualificationsAssociationTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartQualificationsAssociationTask"></a>

```typescript
public readonly StartQualificationsAssociationTask: string;
```

- *Type:* string

[Write] partnercentral:StartQualificationsAssociationTask.

---

##### `StartQualificationsDisassociationTask`<sup>Required</sup> <a name="StartQualificationsDisassociationTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartQualificationsDisassociationTask"></a>

```typescript
public readonly StartQualificationsDisassociationTask: string;
```

- *Type:* string

[Write] partnercentral:StartQualificationsDisassociationTask.

---

##### `StartResourceSnapshotJob`<sup>Required</sup> <a name="StartResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartResourceSnapshotJob"></a>

```typescript
public readonly StartResourceSnapshotJob: string;
```

- *Type:* string

[Write] partnercentral:StartResourceSnapshotJob.

---

##### `StartRevenueAttributionAllocationsTask`<sup>Required</sup> <a name="StartRevenueAttributionAllocationsTask" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartRevenueAttributionAllocationsTask"></a>

```typescript
public readonly StartRevenueAttributionAllocationsTask: string;
```

- *Type:* string

[Write] partnercentral:StartRevenueAttributionAllocationsTask.

---

##### `StartVerification`<sup>Required</sup> <a name="StartVerification" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StartVerification"></a>

```typescript
public readonly StartVerification: string;
```

- *Type:* string

[Write] partnercentral:StartVerification.

---

##### `StopResourceSnapshotJob`<sup>Required</sup> <a name="StopResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.StopResourceSnapshotJob"></a>

```typescript
public readonly StopResourceSnapshotJob: string;
```

- *Type:* string

[Write] partnercentral:StopResourceSnapshotJob.

---

##### `SubmitBenefitApplication`<sup>Required</sup> <a name="SubmitBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.SubmitBenefitApplication"></a>

```typescript
public readonly SubmitBenefitApplication: string;
```

- *Type:* string

[Write] partnercentral:SubmitBenefitApplication.

---

##### `SubmitOpportunity`<sup>Required</sup> <a name="SubmitOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.SubmitOpportunity"></a>

```typescript
public readonly SubmitOpportunity: string;
```

- *Type:* string

[Write] partnercentral:SubmitOpportunity.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] partnercentral:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] partnercentral:UntagResource.

---

##### `UpdateBenefitApplication`<sup>Required</sup> <a name="UpdateBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateBenefitApplication"></a>

```typescript
public readonly UpdateBenefitApplication: string;
```

- *Type:* string

[Write] partnercentral:UpdateBenefitApplication.

---

##### `UpdateConnectionPreferences`<sup>Required</sup> <a name="UpdateConnectionPreferences" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateConnectionPreferences"></a>

```typescript
public readonly UpdateConnectionPreferences: string;
```

- *Type:* string

[Write] partnercentral:UpdateConnectionPreferences.

---

##### `UpdateEngagementContext`<sup>Required</sup> <a name="UpdateEngagementContext" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateEngagementContext"></a>

```typescript
public readonly UpdateEngagementContext: string;
```

- *Type:* string

[Write] partnercentral:UpdateEngagementContext.

---

##### `UpdateMarketplaceRevenueShareAllocation`<sup>Required</sup> <a name="UpdateMarketplaceRevenueShareAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateMarketplaceRevenueShareAllocation"></a>

```typescript
public readonly UpdateMarketplaceRevenueShareAllocation: string;
```

- *Type:* string

[Write] partnercentral:UpdateMarketplaceRevenueShareAllocation.

---

##### `UpdateOpportunity`<sup>Required</sup> <a name="UpdateOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateOpportunity"></a>

```typescript
public readonly UpdateOpportunity: string;
```

- *Type:* string

[Write] partnercentral:UpdateOpportunity.

---

##### `UpdateProgramManagementAccount`<sup>Required</sup> <a name="UpdateProgramManagementAccount" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateProgramManagementAccount"></a>

```typescript
public readonly UpdateProgramManagementAccount: string;
```

- *Type:* string

[Write] partnercentral:UpdateProgramManagementAccount.

---

##### `UpdateRelationship`<sup>Required</sup> <a name="UpdateRelationship" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateRelationship"></a>

```typescript
public readonly UpdateRelationship: string;
```

- *Type:* string

[Write] partnercentral:UpdateRelationship.

---

##### `UpdateRevenueAttribution`<sup>Required</sup> <a name="UpdateRevenueAttribution" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UpdateRevenueAttribution"></a>

```typescript
public readonly UpdateRevenueAttribution: string;
```

- *Type:* string

[Write] partnercentral:UpdateRevenueAttribution.

---

##### `UseSession`<sup>Required</sup> <a name="UseSession" id="@cdk_utils/iam.partnercentral.PartnercentralActions.property.UseSession"></a>

```typescript
public readonly UseSession: string;
```

- *Type:* string

[Write] partnercentral:UseSession.

---

### PartnercentralConditions <a name="PartnercentralConditions" id="@cdk_utils/iam.partnercentral.PartnercentralConditions"></a>

Condition key constants and builders for partnercentral.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

new partnercentral.PartnercentralConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.catalog">catalog</a></code> | Generates a condition block for `partnercentral:Catalog`. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.channelHandshakeType">channelHandshakeType</a></code> | Generates a condition block for `partnercentral:ChannelHandshakeType`. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.fulfillmentTypes">fulfillmentTypes</a></code> | Generates a condition block for `partnercentral:FulfillmentTypes`. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.programs">programs</a></code> | Generates a condition block for `partnercentral:Programs`. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.relatedEntityType">relatedEntityType</a></code> | Generates a condition block for `partnercentral:RelatedEntityType`. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.verificationType">verificationType</a></code> | Generates a condition block for `partnercentral:VerificationType`. |

---

##### `catalog` <a name="catalog" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.catalog"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.catalog(value: string)
```

Generates a condition block for `partnercentral:Catalog`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.catalog.parameter.value"></a>

- *Type:* string

---

##### `channelHandshakeType` <a name="channelHandshakeType" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.channelHandshakeType"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.channelHandshakeType(value: string)
```

Generates a condition block for `partnercentral:ChannelHandshakeType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.channelHandshakeType.parameter.value"></a>

- *Type:* string

---

##### `fulfillmentTypes` <a name="fulfillmentTypes" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.fulfillmentTypes"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.fulfillmentTypes(values: string[])
```

Generates a condition block for `partnercentral:FulfillmentTypes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.fulfillmentTypes.parameter.values"></a>

- *Type:* string[]

---

##### `programs` <a name="programs" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.programs"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.programs(values: string[])
```

Generates a condition block for `partnercentral:Programs`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.programs.parameter.values"></a>

- *Type:* string[]

---

##### `relatedEntityType` <a name="relatedEntityType" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.relatedEntityType"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.relatedEntityType(value: string)
```

Generates a condition block for `partnercentral:RelatedEntityType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.relatedEntityType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.requestTag"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.resourceTag"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.tagKeys"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `verificationType` <a name="verificationType" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.verificationType"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralConditions.verificationType(value: string)
```

Generates a condition block for `partnercentral:VerificationType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.verificationType.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AcceptChannelHandshakeConditionKeys">AcceptChannelHandshakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptChannelHandshake action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AcceptConnectionInvitationConditionKeys">AcceptConnectionInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptConnectionInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AcceptEngagementInvitationConditionKeys">AcceptEngagementInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptEngagementInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetAllianceLeadContactConditionKeys">actionGetAllianceLeadContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAllianceLeadContact action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetAwsOpportunitySummaryConditionKeys">actionGetAwsOpportunitySummaryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAwsOpportunitySummary action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetBenefitAllocationConditionKeys">actionGetBenefitAllocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBenefitAllocation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetBenefitApplicationConditionKeys">actionGetBenefitApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBenefitApplication action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetBenefitConditionKeys">actionGetBenefitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBenefit action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetConnectionConditionKeys">actionGetConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnection action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetConnectionInvitationConditionKeys">actionGetConnectionInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnectionInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetConnectionPreferencesConditionKeys">actionGetConnectionPreferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnectionPreferences action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetEngagementConditionKeys">actionGetEngagementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEngagement action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetEngagementInvitationConditionKeys">actionGetEngagementInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetEngagementInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetMarketplaceRevenueShareAllocationConditionKeys">actionGetMarketplaceRevenueShareAllocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMarketplaceRevenueShareAllocation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetMarketplaceRevenueShareConditionKeys">actionGetMarketplaceRevenueShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMarketplaceRevenueShare action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetOpportunityConditionKeys">actionGetOpportunityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetOpportunity action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetPartnerConditionKeys">actionGetPartnerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPartner action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetPartnerDashboardConditionKeys">actionGetPartnerDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPartnerDashboard action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetProfileUpdateTaskConditionKeys">actionGetProfileUpdateTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetProfileUpdateTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetProfileVisibilityConditionKeys">actionGetProfileVisibilityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetProfileVisibility action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetProgramManagementAccountConditionKeys">actionGetProgramManagementAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetProgramManagementAccount action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetProspectingFromEngagementTaskConditionKeys">actionGetProspectingFromEngagementTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetProspectingFromEngagementTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetQualificationsAssociationDetailsConditionKeys">actionGetQualificationsAssociationDetailsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetQualificationsAssociationDetails action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetQualificationsAssociationTaskConditionKeys">actionGetQualificationsAssociationTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetQualificationsAssociationTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetQualificationsDisassociationTaskConditionKeys">actionGetQualificationsDisassociationTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetQualificationsDisassociationTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetRelationshipConditionKeys">actionGetRelationshipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRelationship action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetResourceSnapshotConditionKeys">actionGetResourceSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourceSnapshot action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetResourceSnapshotJobConditionKeys">actionGetResourceSnapshotJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourceSnapshotJob action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetRevenueAttributionAllocationConditionKeys">actionGetRevenueAttributionAllocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRevenueAttributionAllocation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetRevenueAttributionAllocationsTaskConditionKeys">actionGetRevenueAttributionAllocationsTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRevenueAttributionAllocationsTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetRevenueAttributionConditionKeys">actionGetRevenueAttributionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRevenueAttribution action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetSellingSystemSettingsConditionKeys">actionGetSellingSystemSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSellingSystemSettings action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetVerificationConditionKeys">actionGetVerificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetVerification action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AmendBenefitApplicationConditionKeys">AmendBenefitApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AmendBenefitApplication action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AssignOpportunityConditionKeys">AssignOpportunityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssignOpportunity action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AssociateAwsTrainingCertificationEmailDomainConditionKeys">AssociateAwsTrainingCertificationEmailDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateAwsTrainingCertificationEmailDomain action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AssociateBenefitApplicationResourceConditionKeys">AssociateBenefitApplicationResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateBenefitApplicationResource action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AssociateOpportunityConditionKeys">AssociateOpportunityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateOpportunity action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelBenefitApplicationConditionKeys">CancelBenefitApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelBenefitApplication action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelChannelHandshakeConditionKeys">CancelChannelHandshakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelChannelHandshake action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelConnectionConditionKeys">CancelConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelConnection action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelConnectionInvitationConditionKeys">CancelConnectionInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelConnectionInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelProfileUpdateTaskConditionKeys">CancelProfileUpdateTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelProfileUpdateTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CATALOG">CATALOG</a></code> | <code>string</code> | Condition key: partnercentral:Catalog (String). |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CHANNEL_HANDSHAKE_TYPE">CHANNEL_HANDSHAKE_TYPE</a></code> | <code>string</code> | Condition key: partnercentral:ChannelHandshakeType (String). |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateBenefitApplicationConditionKeys">CreateBenefitApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBenefitApplication action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateChannelHandshakeConditionKeys">CreateChannelHandshakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannelHandshake action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateConnectionInvitationConditionKeys">CreateConnectionInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectionInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateEngagementConditionKeys">CreateEngagementConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEngagement action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateEngagementContextConditionKeys">CreateEngagementContextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEngagementContext action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateEngagementInvitationConditionKeys">CreateEngagementInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEngagementInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateMarketplaceRevenueShareAllocationConditionKeys">CreateMarketplaceRevenueShareAllocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMarketplaceRevenueShareAllocation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateMarketplaceRevenueShareConditionKeys">CreateMarketplaceRevenueShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMarketplaceRevenueShare action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateOpportunityConditionKeys">CreateOpportunityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOpportunity action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreatePartnerConditionKeys">CreatePartnerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePartner action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateProgramManagementAccountConditionKeys">CreateProgramManagementAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProgramManagementAccount action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateRelationshipConditionKeys">CreateRelationshipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRelationship action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateResourceSnapshotConditionKeys">CreateResourceSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResourceSnapshot action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateResourceSnapshotJobConditionKeys">CreateResourceSnapshotJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResourceSnapshotJob action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateRevenueAttributionConditionKeys">CreateRevenueAttributionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRevenueAttribution action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DeleteProgramManagementAccountConditionKeys">DeleteProgramManagementAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteProgramManagementAccount action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DeleteRelationshipConditionKeys">DeleteRelationshipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRelationship action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DeleteResourceSnapshotJobConditionKeys">DeleteResourceSnapshotJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourceSnapshotJob action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DisassociateAwsTrainingCertificationEmailDomainConditionKeys">DisassociateAwsTrainingCertificationEmailDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateAwsTrainingCertificationEmailDomain action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DisassociateBenefitApplicationResourceConditionKeys">DisassociateBenefitApplicationResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateBenefitApplicationResource action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DisassociateOpportunityConditionKeys">DisassociateOpportunityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateOpportunity action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.FULFILLMENT_TYPES">FULFILLMENT_TYPES</a></code> | <code>string</code> | Condition key: partnercentral:FulfillmentTypes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListBenefitAllocationsConditionKeys">ListBenefitAllocationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBenefitAllocations action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListBenefitApplicationsConditionKeys">ListBenefitApplicationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBenefitApplications action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListBenefitsConditionKeys">ListBenefitsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListBenefits action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListChannelHandshakesConditionKeys">ListChannelHandshakesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListChannelHandshakes action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListConnectionInvitationsConditionKeys">ListConnectionInvitationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListConnectionInvitations action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListConnectionsConditionKeys">ListConnectionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListConnections action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementByAcceptingInvitationTasksConditionKeys">ListEngagementByAcceptingInvitationTasksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEngagementByAcceptingInvitationTasks action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementFromOpportunityTasksConditionKeys">ListEngagementFromOpportunityTasksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEngagementFromOpportunityTasks action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementInvitationsConditionKeys">ListEngagementInvitationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEngagementInvitations action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementMembersConditionKeys">ListEngagementMembersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEngagementMembers action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementResourceAssociationsConditionKeys">ListEngagementResourceAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEngagementResourceAssociations action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementsConditionKeys">ListEngagementsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEngagements action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListMarketplaceRevenueShareAllocationsConditionKeys">ListMarketplaceRevenueShareAllocationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMarketplaceRevenueShareAllocations action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListMarketplaceRevenueSharesConditionKeys">ListMarketplaceRevenueSharesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMarketplaceRevenueShares action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListOpportunitiesConditionKeys">ListOpportunitiesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListOpportunities action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListOpportunityFromEngagementTasksConditionKeys">ListOpportunityFromEngagementTasksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListOpportunityFromEngagementTasks action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListPartnersConditionKeys">ListPartnersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPartners action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListProgramManagementAccountsConditionKeys">ListProgramManagementAccountsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListProgramManagementAccounts action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListProspectingFromEngagementTasksConditionKeys">ListProspectingFromEngagementTasksConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListProspectingFromEngagementTasks action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListRelationshipsConditionKeys">ListRelationshipsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRelationships action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListResourceSnapshotJobsConditionKeys">ListResourceSnapshotJobsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceSnapshotJobs action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListResourceSnapshotsConditionKeys">ListResourceSnapshotsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceSnapshots action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListRevenueAttributionAllocationsConditionKeys">ListRevenueAttributionAllocationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRevenueAttributionAllocations action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListRevenueAttributionsConditionKeys">ListRevenueAttributionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRevenueAttributions action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListSolutionsConditionKeys">ListSolutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSolutions action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.PROGRAMS">PROGRAMS</a></code> | <code>string</code> | Condition key: partnercentral:Programs (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.PutAllianceLeadContactConditionKeys">PutAllianceLeadContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAllianceLeadContact action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.PutProfileVisibilityConditionKeys">PutProfileVisibilityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutProfileVisibility action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.PutSellingSystemSettingsConditionKeys">PutSellingSystemSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutSellingSystemSettings action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RecallBenefitApplicationConditionKeys">RecallBenefitApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RecallBenefitApplication action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RejectChannelHandshakeConditionKeys">RejectChannelHandshakeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RejectChannelHandshake action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RejectConnectionInvitationConditionKeys">RejectConnectionInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RejectConnectionInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RejectEngagementInvitationConditionKeys">RejectEngagementInvitationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RejectEngagementInvitation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RELATED_ENTITY_TYPE">RELATED_ENTITY_TYPE</a></code> | <code>string</code> | Condition key: partnercentral:RelatedEntityType (String). |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.SendEmailVerificationCodeConditionKeys">SendEmailVerificationCodeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendEmailVerificationCode action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartEngagementByAcceptingInvitationTaskConditionKeys">StartEngagementByAcceptingInvitationTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartEngagementByAcceptingInvitationTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartEngagementFromOpportunityTaskConditionKeys">StartEngagementFromOpportunityTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartEngagementFromOpportunityTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartOpportunityFromEngagementTaskConditionKeys">StartOpportunityFromEngagementTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartOpportunityFromEngagementTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartProfileUpdateTaskConditionKeys">StartProfileUpdateTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartProfileUpdateTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartProspectingFromEngagementTaskConditionKeys">StartProspectingFromEngagementTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartProspectingFromEngagementTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartQualificationsAssociationTaskConditionKeys">StartQualificationsAssociationTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartQualificationsAssociationTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartQualificationsDisassociationTaskConditionKeys">StartQualificationsDisassociationTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartQualificationsDisassociationTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartResourceSnapshotJobConditionKeys">StartResourceSnapshotJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartResourceSnapshotJob action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartRevenueAttributionAllocationsTaskConditionKeys">StartRevenueAttributionAllocationsTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartRevenueAttributionAllocationsTask action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartVerificationConditionKeys">StartVerificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartVerification action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StopResourceSnapshotJobConditionKeys">StopResourceSnapshotJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopResourceSnapshotJob action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.SubmitBenefitApplicationConditionKeys">SubmitBenefitApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SubmitBenefitApplication action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.SubmitOpportunityConditionKeys">SubmitOpportunityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SubmitOpportunity action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateBenefitApplicationConditionKeys">UpdateBenefitApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateBenefitApplication action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateConnectionPreferencesConditionKeys">UpdateConnectionPreferencesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateConnectionPreferences action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateEngagementContextConditionKeys">UpdateEngagementContextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEngagementContext action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateMarketplaceRevenueShareAllocationConditionKeys">UpdateMarketplaceRevenueShareAllocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateMarketplaceRevenueShareAllocation action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateOpportunityConditionKeys">UpdateOpportunityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateOpportunity action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateProgramManagementAccountConditionKeys">UpdateProgramManagementAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProgramManagementAccount action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateRelationshipConditionKeys">UpdateRelationshipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRelationship action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateRevenueAttributionConditionKeys">UpdateRevenueAttributionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRevenueAttribution action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UseSessionConditionKeys">UseSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UseSession action. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralConditions.property.VERIFICATION_TYPE">VERIFICATION_TYPE</a></code> | <code>string</code> | Condition key: partnercentral:VerificationType (String). |

---

##### `AcceptChannelHandshakeConditionKeys`<sup>Required</sup> <a name="AcceptChannelHandshakeConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AcceptChannelHandshakeConditionKeys"></a>

```typescript
public readonly AcceptChannelHandshakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptChannelHandshake action.

---

##### `AcceptConnectionInvitationConditionKeys`<sup>Required</sup> <a name="AcceptConnectionInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AcceptConnectionInvitationConditionKeys"></a>

```typescript
public readonly AcceptConnectionInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptConnectionInvitation action.

---

##### `AcceptEngagementInvitationConditionKeys`<sup>Required</sup> <a name="AcceptEngagementInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AcceptEngagementInvitationConditionKeys"></a>

```typescript
public readonly AcceptEngagementInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptEngagementInvitation action.

---

##### `actionGetAllianceLeadContactConditionKeys`<sup>Required</sup> <a name="actionGetAllianceLeadContactConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetAllianceLeadContactConditionKeys"></a>

```typescript
public readonly actionGetAllianceLeadContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAllianceLeadContact action.

---

##### `actionGetAwsOpportunitySummaryConditionKeys`<sup>Required</sup> <a name="actionGetAwsOpportunitySummaryConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetAwsOpportunitySummaryConditionKeys"></a>

```typescript
public readonly actionGetAwsOpportunitySummaryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAwsOpportunitySummary action.

---

##### `actionGetBenefitAllocationConditionKeys`<sup>Required</sup> <a name="actionGetBenefitAllocationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetBenefitAllocationConditionKeys"></a>

```typescript
public readonly actionGetBenefitAllocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBenefitAllocation action.

---

##### `actionGetBenefitApplicationConditionKeys`<sup>Required</sup> <a name="actionGetBenefitApplicationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetBenefitApplicationConditionKeys"></a>

```typescript
public readonly actionGetBenefitApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBenefitApplication action.

---

##### `actionGetBenefitConditionKeys`<sup>Required</sup> <a name="actionGetBenefitConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetBenefitConditionKeys"></a>

```typescript
public readonly actionGetBenefitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBenefit action.

---

##### `actionGetConnectionConditionKeys`<sup>Required</sup> <a name="actionGetConnectionConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetConnectionConditionKeys"></a>

```typescript
public readonly actionGetConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnection action.

---

##### `actionGetConnectionInvitationConditionKeys`<sup>Required</sup> <a name="actionGetConnectionInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetConnectionInvitationConditionKeys"></a>

```typescript
public readonly actionGetConnectionInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnectionInvitation action.

---

##### `actionGetConnectionPreferencesConditionKeys`<sup>Required</sup> <a name="actionGetConnectionPreferencesConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetConnectionPreferencesConditionKeys"></a>

```typescript
public readonly actionGetConnectionPreferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnectionPreferences action.

---

##### `actionGetEngagementConditionKeys`<sup>Required</sup> <a name="actionGetEngagementConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetEngagementConditionKeys"></a>

```typescript
public readonly actionGetEngagementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEngagement action.

---

##### `actionGetEngagementInvitationConditionKeys`<sup>Required</sup> <a name="actionGetEngagementInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetEngagementInvitationConditionKeys"></a>

```typescript
public readonly actionGetEngagementInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetEngagementInvitation action.

---

##### `actionGetMarketplaceRevenueShareAllocationConditionKeys`<sup>Required</sup> <a name="actionGetMarketplaceRevenueShareAllocationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetMarketplaceRevenueShareAllocationConditionKeys"></a>

```typescript
public readonly actionGetMarketplaceRevenueShareAllocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMarketplaceRevenueShareAllocation action.

---

##### `actionGetMarketplaceRevenueShareConditionKeys`<sup>Required</sup> <a name="actionGetMarketplaceRevenueShareConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetMarketplaceRevenueShareConditionKeys"></a>

```typescript
public readonly actionGetMarketplaceRevenueShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMarketplaceRevenueShare action.

---

##### `actionGetOpportunityConditionKeys`<sup>Required</sup> <a name="actionGetOpportunityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetOpportunityConditionKeys"></a>

```typescript
public readonly actionGetOpportunityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetOpportunity action.

---

##### `actionGetPartnerConditionKeys`<sup>Required</sup> <a name="actionGetPartnerConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetPartnerConditionKeys"></a>

```typescript
public readonly actionGetPartnerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPartner action.

---

##### `actionGetPartnerDashboardConditionKeys`<sup>Required</sup> <a name="actionGetPartnerDashboardConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetPartnerDashboardConditionKeys"></a>

```typescript
public readonly actionGetPartnerDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPartnerDashboard action.

---

##### `actionGetProfileUpdateTaskConditionKeys`<sup>Required</sup> <a name="actionGetProfileUpdateTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetProfileUpdateTaskConditionKeys"></a>

```typescript
public readonly actionGetProfileUpdateTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetProfileUpdateTask action.

---

##### `actionGetProfileVisibilityConditionKeys`<sup>Required</sup> <a name="actionGetProfileVisibilityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetProfileVisibilityConditionKeys"></a>

```typescript
public readonly actionGetProfileVisibilityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetProfileVisibility action.

---

##### `actionGetProgramManagementAccountConditionKeys`<sup>Required</sup> <a name="actionGetProgramManagementAccountConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetProgramManagementAccountConditionKeys"></a>

```typescript
public readonly actionGetProgramManagementAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetProgramManagementAccount action.

---

##### `actionGetProspectingFromEngagementTaskConditionKeys`<sup>Required</sup> <a name="actionGetProspectingFromEngagementTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetProspectingFromEngagementTaskConditionKeys"></a>

```typescript
public readonly actionGetProspectingFromEngagementTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetProspectingFromEngagementTask action.

---

##### `actionGetQualificationsAssociationDetailsConditionKeys`<sup>Required</sup> <a name="actionGetQualificationsAssociationDetailsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetQualificationsAssociationDetailsConditionKeys"></a>

```typescript
public readonly actionGetQualificationsAssociationDetailsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetQualificationsAssociationDetails action.

---

##### `actionGetQualificationsAssociationTaskConditionKeys`<sup>Required</sup> <a name="actionGetQualificationsAssociationTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetQualificationsAssociationTaskConditionKeys"></a>

```typescript
public readonly actionGetQualificationsAssociationTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetQualificationsAssociationTask action.

---

##### `actionGetQualificationsDisassociationTaskConditionKeys`<sup>Required</sup> <a name="actionGetQualificationsDisassociationTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetQualificationsDisassociationTaskConditionKeys"></a>

```typescript
public readonly actionGetQualificationsDisassociationTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetQualificationsDisassociationTask action.

---

##### `actionGetRelationshipConditionKeys`<sup>Required</sup> <a name="actionGetRelationshipConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetRelationshipConditionKeys"></a>

```typescript
public readonly actionGetRelationshipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRelationship action.

---

##### `actionGetResourceSnapshotConditionKeys`<sup>Required</sup> <a name="actionGetResourceSnapshotConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetResourceSnapshotConditionKeys"></a>

```typescript
public readonly actionGetResourceSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourceSnapshot action.

---

##### `actionGetResourceSnapshotJobConditionKeys`<sup>Required</sup> <a name="actionGetResourceSnapshotJobConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetResourceSnapshotJobConditionKeys"></a>

```typescript
public readonly actionGetResourceSnapshotJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourceSnapshotJob action.

---

##### `actionGetRevenueAttributionAllocationConditionKeys`<sup>Required</sup> <a name="actionGetRevenueAttributionAllocationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetRevenueAttributionAllocationConditionKeys"></a>

```typescript
public readonly actionGetRevenueAttributionAllocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRevenueAttributionAllocation action.

---

##### `actionGetRevenueAttributionAllocationsTaskConditionKeys`<sup>Required</sup> <a name="actionGetRevenueAttributionAllocationsTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetRevenueAttributionAllocationsTaskConditionKeys"></a>

```typescript
public readonly actionGetRevenueAttributionAllocationsTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRevenueAttributionAllocationsTask action.

---

##### `actionGetRevenueAttributionConditionKeys`<sup>Required</sup> <a name="actionGetRevenueAttributionConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetRevenueAttributionConditionKeys"></a>

```typescript
public readonly actionGetRevenueAttributionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRevenueAttribution action.

---

##### `actionGetSellingSystemSettingsConditionKeys`<sup>Required</sup> <a name="actionGetSellingSystemSettingsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetSellingSystemSettingsConditionKeys"></a>

```typescript
public readonly actionGetSellingSystemSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSellingSystemSettings action.

---

##### `actionGetVerificationConditionKeys`<sup>Required</sup> <a name="actionGetVerificationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.actionGetVerificationConditionKeys"></a>

```typescript
public readonly actionGetVerificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetVerification action.

---

##### `AmendBenefitApplicationConditionKeys`<sup>Required</sup> <a name="AmendBenefitApplicationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AmendBenefitApplicationConditionKeys"></a>

```typescript
public readonly AmendBenefitApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AmendBenefitApplication action.

---

##### `AssignOpportunityConditionKeys`<sup>Required</sup> <a name="AssignOpportunityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AssignOpportunityConditionKeys"></a>

```typescript
public readonly AssignOpportunityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssignOpportunity action.

---

##### `AssociateAwsTrainingCertificationEmailDomainConditionKeys`<sup>Required</sup> <a name="AssociateAwsTrainingCertificationEmailDomainConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AssociateAwsTrainingCertificationEmailDomainConditionKeys"></a>

```typescript
public readonly AssociateAwsTrainingCertificationEmailDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateAwsTrainingCertificationEmailDomain action.

---

##### `AssociateBenefitApplicationResourceConditionKeys`<sup>Required</sup> <a name="AssociateBenefitApplicationResourceConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AssociateBenefitApplicationResourceConditionKeys"></a>

```typescript
public readonly AssociateBenefitApplicationResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateBenefitApplicationResource action.

---

##### `AssociateOpportunityConditionKeys`<sup>Required</sup> <a name="AssociateOpportunityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AssociateOpportunityConditionKeys"></a>

```typescript
public readonly AssociateOpportunityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateOpportunity action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CancelBenefitApplicationConditionKeys`<sup>Required</sup> <a name="CancelBenefitApplicationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelBenefitApplicationConditionKeys"></a>

```typescript
public readonly CancelBenefitApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelBenefitApplication action.

---

##### `CancelChannelHandshakeConditionKeys`<sup>Required</sup> <a name="CancelChannelHandshakeConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelChannelHandshakeConditionKeys"></a>

```typescript
public readonly CancelChannelHandshakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelChannelHandshake action.

---

##### `CancelConnectionConditionKeys`<sup>Required</sup> <a name="CancelConnectionConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelConnectionConditionKeys"></a>

```typescript
public readonly CancelConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelConnection action.

---

##### `CancelConnectionInvitationConditionKeys`<sup>Required</sup> <a name="CancelConnectionInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelConnectionInvitationConditionKeys"></a>

```typescript
public readonly CancelConnectionInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelConnectionInvitation action.

---

##### `CancelProfileUpdateTaskConditionKeys`<sup>Required</sup> <a name="CancelProfileUpdateTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CancelProfileUpdateTaskConditionKeys"></a>

```typescript
public readonly CancelProfileUpdateTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelProfileUpdateTask action.

---

##### `CATALOG`<sup>Required</sup> <a name="CATALOG" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CATALOG"></a>

```typescript
public readonly CATALOG: string;
```

- *Type:* string

Condition key: partnercentral:Catalog (String).

---

##### `CHANNEL_HANDSHAKE_TYPE`<sup>Required</sup> <a name="CHANNEL_HANDSHAKE_TYPE" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CHANNEL_HANDSHAKE_TYPE"></a>

```typescript
public readonly CHANNEL_HANDSHAKE_TYPE: string;
```

- *Type:* string

Condition key: partnercentral:ChannelHandshakeType (String).

---

##### `CreateBenefitApplicationConditionKeys`<sup>Required</sup> <a name="CreateBenefitApplicationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateBenefitApplicationConditionKeys"></a>

```typescript
public readonly CreateBenefitApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBenefitApplication action.

---

##### `CreateChannelHandshakeConditionKeys`<sup>Required</sup> <a name="CreateChannelHandshakeConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateChannelHandshakeConditionKeys"></a>

```typescript
public readonly CreateChannelHandshakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannelHandshake action.

---

##### `CreateConnectionInvitationConditionKeys`<sup>Required</sup> <a name="CreateConnectionInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateConnectionInvitationConditionKeys"></a>

```typescript
public readonly CreateConnectionInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectionInvitation action.

---

##### `CreateEngagementConditionKeys`<sup>Required</sup> <a name="CreateEngagementConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateEngagementConditionKeys"></a>

```typescript
public readonly CreateEngagementConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEngagement action.

---

##### `CreateEngagementContextConditionKeys`<sup>Required</sup> <a name="CreateEngagementContextConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateEngagementContextConditionKeys"></a>

```typescript
public readonly CreateEngagementContextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEngagementContext action.

---

##### `CreateEngagementInvitationConditionKeys`<sup>Required</sup> <a name="CreateEngagementInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateEngagementInvitationConditionKeys"></a>

```typescript
public readonly CreateEngagementInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEngagementInvitation action.

---

##### `CreateMarketplaceRevenueShareAllocationConditionKeys`<sup>Required</sup> <a name="CreateMarketplaceRevenueShareAllocationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateMarketplaceRevenueShareAllocationConditionKeys"></a>

```typescript
public readonly CreateMarketplaceRevenueShareAllocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMarketplaceRevenueShareAllocation action.

---

##### `CreateMarketplaceRevenueShareConditionKeys`<sup>Required</sup> <a name="CreateMarketplaceRevenueShareConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateMarketplaceRevenueShareConditionKeys"></a>

```typescript
public readonly CreateMarketplaceRevenueShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMarketplaceRevenueShare action.

---

##### `CreateOpportunityConditionKeys`<sup>Required</sup> <a name="CreateOpportunityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateOpportunityConditionKeys"></a>

```typescript
public readonly CreateOpportunityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOpportunity action.

---

##### `CreatePartnerConditionKeys`<sup>Required</sup> <a name="CreatePartnerConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreatePartnerConditionKeys"></a>

```typescript
public readonly CreatePartnerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePartner action.

---

##### `CreateProgramManagementAccountConditionKeys`<sup>Required</sup> <a name="CreateProgramManagementAccountConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateProgramManagementAccountConditionKeys"></a>

```typescript
public readonly CreateProgramManagementAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProgramManagementAccount action.

---

##### `CreateRelationshipConditionKeys`<sup>Required</sup> <a name="CreateRelationshipConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateRelationshipConditionKeys"></a>

```typescript
public readonly CreateRelationshipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRelationship action.

---

##### `CreateResourceSnapshotConditionKeys`<sup>Required</sup> <a name="CreateResourceSnapshotConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateResourceSnapshotConditionKeys"></a>

```typescript
public readonly CreateResourceSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResourceSnapshot action.

---

##### `CreateResourceSnapshotJobConditionKeys`<sup>Required</sup> <a name="CreateResourceSnapshotJobConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateResourceSnapshotJobConditionKeys"></a>

```typescript
public readonly CreateResourceSnapshotJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResourceSnapshotJob action.

---

##### `CreateRevenueAttributionConditionKeys`<sup>Required</sup> <a name="CreateRevenueAttributionConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.CreateRevenueAttributionConditionKeys"></a>

```typescript
public readonly CreateRevenueAttributionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRevenueAttribution action.

---

##### `DeleteProgramManagementAccountConditionKeys`<sup>Required</sup> <a name="DeleteProgramManagementAccountConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DeleteProgramManagementAccountConditionKeys"></a>

```typescript
public readonly DeleteProgramManagementAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteProgramManagementAccount action.

---

##### `DeleteRelationshipConditionKeys`<sup>Required</sup> <a name="DeleteRelationshipConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DeleteRelationshipConditionKeys"></a>

```typescript
public readonly DeleteRelationshipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRelationship action.

---

##### `DeleteResourceSnapshotJobConditionKeys`<sup>Required</sup> <a name="DeleteResourceSnapshotJobConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DeleteResourceSnapshotJobConditionKeys"></a>

```typescript
public readonly DeleteResourceSnapshotJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourceSnapshotJob action.

---

##### `DisassociateAwsTrainingCertificationEmailDomainConditionKeys`<sup>Required</sup> <a name="DisassociateAwsTrainingCertificationEmailDomainConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DisassociateAwsTrainingCertificationEmailDomainConditionKeys"></a>

```typescript
public readonly DisassociateAwsTrainingCertificationEmailDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateAwsTrainingCertificationEmailDomain action.

---

##### `DisassociateBenefitApplicationResourceConditionKeys`<sup>Required</sup> <a name="DisassociateBenefitApplicationResourceConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DisassociateBenefitApplicationResourceConditionKeys"></a>

```typescript
public readonly DisassociateBenefitApplicationResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateBenefitApplicationResource action.

---

##### `DisassociateOpportunityConditionKeys`<sup>Required</sup> <a name="DisassociateOpportunityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.DisassociateOpportunityConditionKeys"></a>

```typescript
public readonly DisassociateOpportunityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateOpportunity action.

---

##### `FULFILLMENT_TYPES`<sup>Required</sup> <a name="FULFILLMENT_TYPES" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.FULFILLMENT_TYPES"></a>

```typescript
public readonly FULFILLMENT_TYPES: string;
```

- *Type:* string

Condition key: partnercentral:FulfillmentTypes (ArrayOfString).

---

##### `ListBenefitAllocationsConditionKeys`<sup>Required</sup> <a name="ListBenefitAllocationsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListBenefitAllocationsConditionKeys"></a>

```typescript
public readonly ListBenefitAllocationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBenefitAllocations action.

---

##### `ListBenefitApplicationsConditionKeys`<sup>Required</sup> <a name="ListBenefitApplicationsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListBenefitApplicationsConditionKeys"></a>

```typescript
public readonly ListBenefitApplicationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBenefitApplications action.

---

##### `ListBenefitsConditionKeys`<sup>Required</sup> <a name="ListBenefitsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListBenefitsConditionKeys"></a>

```typescript
public readonly ListBenefitsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListBenefits action.

---

##### `ListChannelHandshakesConditionKeys`<sup>Required</sup> <a name="ListChannelHandshakesConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListChannelHandshakesConditionKeys"></a>

```typescript
public readonly ListChannelHandshakesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListChannelHandshakes action.

---

##### `ListConnectionInvitationsConditionKeys`<sup>Required</sup> <a name="ListConnectionInvitationsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListConnectionInvitationsConditionKeys"></a>

```typescript
public readonly ListConnectionInvitationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListConnectionInvitations action.

---

##### `ListConnectionsConditionKeys`<sup>Required</sup> <a name="ListConnectionsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListConnectionsConditionKeys"></a>

```typescript
public readonly ListConnectionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListConnections action.

---

##### `ListEngagementByAcceptingInvitationTasksConditionKeys`<sup>Required</sup> <a name="ListEngagementByAcceptingInvitationTasksConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementByAcceptingInvitationTasksConditionKeys"></a>

```typescript
public readonly ListEngagementByAcceptingInvitationTasksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEngagementByAcceptingInvitationTasks action.

---

##### `ListEngagementFromOpportunityTasksConditionKeys`<sup>Required</sup> <a name="ListEngagementFromOpportunityTasksConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementFromOpportunityTasksConditionKeys"></a>

```typescript
public readonly ListEngagementFromOpportunityTasksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEngagementFromOpportunityTasks action.

---

##### `ListEngagementInvitationsConditionKeys`<sup>Required</sup> <a name="ListEngagementInvitationsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementInvitationsConditionKeys"></a>

```typescript
public readonly ListEngagementInvitationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEngagementInvitations action.

---

##### `ListEngagementMembersConditionKeys`<sup>Required</sup> <a name="ListEngagementMembersConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementMembersConditionKeys"></a>

```typescript
public readonly ListEngagementMembersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEngagementMembers action.

---

##### `ListEngagementResourceAssociationsConditionKeys`<sup>Required</sup> <a name="ListEngagementResourceAssociationsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementResourceAssociationsConditionKeys"></a>

```typescript
public readonly ListEngagementResourceAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEngagementResourceAssociations action.

---

##### `ListEngagementsConditionKeys`<sup>Required</sup> <a name="ListEngagementsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListEngagementsConditionKeys"></a>

```typescript
public readonly ListEngagementsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEngagements action.

---

##### `ListMarketplaceRevenueShareAllocationsConditionKeys`<sup>Required</sup> <a name="ListMarketplaceRevenueShareAllocationsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListMarketplaceRevenueShareAllocationsConditionKeys"></a>

```typescript
public readonly ListMarketplaceRevenueShareAllocationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMarketplaceRevenueShareAllocations action.

---

##### `ListMarketplaceRevenueSharesConditionKeys`<sup>Required</sup> <a name="ListMarketplaceRevenueSharesConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListMarketplaceRevenueSharesConditionKeys"></a>

```typescript
public readonly ListMarketplaceRevenueSharesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMarketplaceRevenueShares action.

---

##### `ListOpportunitiesConditionKeys`<sup>Required</sup> <a name="ListOpportunitiesConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListOpportunitiesConditionKeys"></a>

```typescript
public readonly ListOpportunitiesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListOpportunities action.

---

##### `ListOpportunityFromEngagementTasksConditionKeys`<sup>Required</sup> <a name="ListOpportunityFromEngagementTasksConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListOpportunityFromEngagementTasksConditionKeys"></a>

```typescript
public readonly ListOpportunityFromEngagementTasksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListOpportunityFromEngagementTasks action.

---

##### `ListPartnersConditionKeys`<sup>Required</sup> <a name="ListPartnersConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListPartnersConditionKeys"></a>

```typescript
public readonly ListPartnersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPartners action.

---

##### `ListProgramManagementAccountsConditionKeys`<sup>Required</sup> <a name="ListProgramManagementAccountsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListProgramManagementAccountsConditionKeys"></a>

```typescript
public readonly ListProgramManagementAccountsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListProgramManagementAccounts action.

---

##### `ListProspectingFromEngagementTasksConditionKeys`<sup>Required</sup> <a name="ListProspectingFromEngagementTasksConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListProspectingFromEngagementTasksConditionKeys"></a>

```typescript
public readonly ListProspectingFromEngagementTasksConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListProspectingFromEngagementTasks action.

---

##### `ListRelationshipsConditionKeys`<sup>Required</sup> <a name="ListRelationshipsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListRelationshipsConditionKeys"></a>

```typescript
public readonly ListRelationshipsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRelationships action.

---

##### `ListResourceSnapshotJobsConditionKeys`<sup>Required</sup> <a name="ListResourceSnapshotJobsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListResourceSnapshotJobsConditionKeys"></a>

```typescript
public readonly ListResourceSnapshotJobsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceSnapshotJobs action.

---

##### `ListResourceSnapshotsConditionKeys`<sup>Required</sup> <a name="ListResourceSnapshotsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListResourceSnapshotsConditionKeys"></a>

```typescript
public readonly ListResourceSnapshotsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceSnapshots action.

---

##### `ListRevenueAttributionAllocationsConditionKeys`<sup>Required</sup> <a name="ListRevenueAttributionAllocationsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListRevenueAttributionAllocationsConditionKeys"></a>

```typescript
public readonly ListRevenueAttributionAllocationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRevenueAttributionAllocations action.

---

##### `ListRevenueAttributionsConditionKeys`<sup>Required</sup> <a name="ListRevenueAttributionsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListRevenueAttributionsConditionKeys"></a>

```typescript
public readonly ListRevenueAttributionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRevenueAttributions action.

---

##### `ListSolutionsConditionKeys`<sup>Required</sup> <a name="ListSolutionsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListSolutionsConditionKeys"></a>

```typescript
public readonly ListSolutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSolutions action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PROGRAMS`<sup>Required</sup> <a name="PROGRAMS" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.PROGRAMS"></a>

```typescript
public readonly PROGRAMS: string;
```

- *Type:* string

Condition key: partnercentral:Programs (ArrayOfString).

---

##### `PutAllianceLeadContactConditionKeys`<sup>Required</sup> <a name="PutAllianceLeadContactConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.PutAllianceLeadContactConditionKeys"></a>

```typescript
public readonly PutAllianceLeadContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAllianceLeadContact action.

---

##### `PutProfileVisibilityConditionKeys`<sup>Required</sup> <a name="PutProfileVisibilityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.PutProfileVisibilityConditionKeys"></a>

```typescript
public readonly PutProfileVisibilityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutProfileVisibility action.

---

##### `PutSellingSystemSettingsConditionKeys`<sup>Required</sup> <a name="PutSellingSystemSettingsConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.PutSellingSystemSettingsConditionKeys"></a>

```typescript
public readonly PutSellingSystemSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutSellingSystemSettings action.

---

##### `RecallBenefitApplicationConditionKeys`<sup>Required</sup> <a name="RecallBenefitApplicationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RecallBenefitApplicationConditionKeys"></a>

```typescript
public readonly RecallBenefitApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RecallBenefitApplication action.

---

##### `RejectChannelHandshakeConditionKeys`<sup>Required</sup> <a name="RejectChannelHandshakeConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RejectChannelHandshakeConditionKeys"></a>

```typescript
public readonly RejectChannelHandshakeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RejectChannelHandshake action.

---

##### `RejectConnectionInvitationConditionKeys`<sup>Required</sup> <a name="RejectConnectionInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RejectConnectionInvitationConditionKeys"></a>

```typescript
public readonly RejectConnectionInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RejectConnectionInvitation action.

---

##### `RejectEngagementInvitationConditionKeys`<sup>Required</sup> <a name="RejectEngagementInvitationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RejectEngagementInvitationConditionKeys"></a>

```typescript
public readonly RejectEngagementInvitationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RejectEngagementInvitation action.

---

##### `RELATED_ENTITY_TYPE`<sup>Required</sup> <a name="RELATED_ENTITY_TYPE" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.RELATED_ENTITY_TYPE"></a>

```typescript
public readonly RELATED_ENTITY_TYPE: string;
```

- *Type:* string

Condition key: partnercentral:RelatedEntityType (String).

---

##### `SendEmailVerificationCodeConditionKeys`<sup>Required</sup> <a name="SendEmailVerificationCodeConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.SendEmailVerificationCodeConditionKeys"></a>

```typescript
public readonly SendEmailVerificationCodeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendEmailVerificationCode action.

---

##### `StartEngagementByAcceptingInvitationTaskConditionKeys`<sup>Required</sup> <a name="StartEngagementByAcceptingInvitationTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartEngagementByAcceptingInvitationTaskConditionKeys"></a>

```typescript
public readonly StartEngagementByAcceptingInvitationTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartEngagementByAcceptingInvitationTask action.

---

##### `StartEngagementFromOpportunityTaskConditionKeys`<sup>Required</sup> <a name="StartEngagementFromOpportunityTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartEngagementFromOpportunityTaskConditionKeys"></a>

```typescript
public readonly StartEngagementFromOpportunityTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartEngagementFromOpportunityTask action.

---

##### `StartOpportunityFromEngagementTaskConditionKeys`<sup>Required</sup> <a name="StartOpportunityFromEngagementTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartOpportunityFromEngagementTaskConditionKeys"></a>

```typescript
public readonly StartOpportunityFromEngagementTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartOpportunityFromEngagementTask action.

---

##### `StartProfileUpdateTaskConditionKeys`<sup>Required</sup> <a name="StartProfileUpdateTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartProfileUpdateTaskConditionKeys"></a>

```typescript
public readonly StartProfileUpdateTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartProfileUpdateTask action.

---

##### `StartProspectingFromEngagementTaskConditionKeys`<sup>Required</sup> <a name="StartProspectingFromEngagementTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartProspectingFromEngagementTaskConditionKeys"></a>

```typescript
public readonly StartProspectingFromEngagementTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartProspectingFromEngagementTask action.

---

##### `StartQualificationsAssociationTaskConditionKeys`<sup>Required</sup> <a name="StartQualificationsAssociationTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartQualificationsAssociationTaskConditionKeys"></a>

```typescript
public readonly StartQualificationsAssociationTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartQualificationsAssociationTask action.

---

##### `StartQualificationsDisassociationTaskConditionKeys`<sup>Required</sup> <a name="StartQualificationsDisassociationTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartQualificationsDisassociationTaskConditionKeys"></a>

```typescript
public readonly StartQualificationsDisassociationTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartQualificationsDisassociationTask action.

---

##### `StartResourceSnapshotJobConditionKeys`<sup>Required</sup> <a name="StartResourceSnapshotJobConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartResourceSnapshotJobConditionKeys"></a>

```typescript
public readonly StartResourceSnapshotJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartResourceSnapshotJob action.

---

##### `StartRevenueAttributionAllocationsTaskConditionKeys`<sup>Required</sup> <a name="StartRevenueAttributionAllocationsTaskConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartRevenueAttributionAllocationsTaskConditionKeys"></a>

```typescript
public readonly StartRevenueAttributionAllocationsTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartRevenueAttributionAllocationsTask action.

---

##### `StartVerificationConditionKeys`<sup>Required</sup> <a name="StartVerificationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StartVerificationConditionKeys"></a>

```typescript
public readonly StartVerificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartVerification action.

---

##### `StopResourceSnapshotJobConditionKeys`<sup>Required</sup> <a name="StopResourceSnapshotJobConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.StopResourceSnapshotJobConditionKeys"></a>

```typescript
public readonly StopResourceSnapshotJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopResourceSnapshotJob action.

---

##### `SubmitBenefitApplicationConditionKeys`<sup>Required</sup> <a name="SubmitBenefitApplicationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.SubmitBenefitApplicationConditionKeys"></a>

```typescript
public readonly SubmitBenefitApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SubmitBenefitApplication action.

---

##### `SubmitOpportunityConditionKeys`<sup>Required</sup> <a name="SubmitOpportunityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.SubmitOpportunityConditionKeys"></a>

```typescript
public readonly SubmitOpportunityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SubmitOpportunity action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateBenefitApplicationConditionKeys`<sup>Required</sup> <a name="UpdateBenefitApplicationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateBenefitApplicationConditionKeys"></a>

```typescript
public readonly UpdateBenefitApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateBenefitApplication action.

---

##### `UpdateConnectionPreferencesConditionKeys`<sup>Required</sup> <a name="UpdateConnectionPreferencesConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateConnectionPreferencesConditionKeys"></a>

```typescript
public readonly UpdateConnectionPreferencesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateConnectionPreferences action.

---

##### `UpdateEngagementContextConditionKeys`<sup>Required</sup> <a name="UpdateEngagementContextConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateEngagementContextConditionKeys"></a>

```typescript
public readonly UpdateEngagementContextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEngagementContext action.

---

##### `UpdateMarketplaceRevenueShareAllocationConditionKeys`<sup>Required</sup> <a name="UpdateMarketplaceRevenueShareAllocationConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateMarketplaceRevenueShareAllocationConditionKeys"></a>

```typescript
public readonly UpdateMarketplaceRevenueShareAllocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateMarketplaceRevenueShareAllocation action.

---

##### `UpdateOpportunityConditionKeys`<sup>Required</sup> <a name="UpdateOpportunityConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateOpportunityConditionKeys"></a>

```typescript
public readonly UpdateOpportunityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateOpportunity action.

---

##### `UpdateProgramManagementAccountConditionKeys`<sup>Required</sup> <a name="UpdateProgramManagementAccountConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateProgramManagementAccountConditionKeys"></a>

```typescript
public readonly UpdateProgramManagementAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProgramManagementAccount action.

---

##### `UpdateRelationshipConditionKeys`<sup>Required</sup> <a name="UpdateRelationshipConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateRelationshipConditionKeys"></a>

```typescript
public readonly UpdateRelationshipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRelationship action.

---

##### `UpdateRevenueAttributionConditionKeys`<sup>Required</sup> <a name="UpdateRevenueAttributionConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UpdateRevenueAttributionConditionKeys"></a>

```typescript
public readonly UpdateRevenueAttributionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRevenueAttribution action.

---

##### `UseSessionConditionKeys`<sup>Required</sup> <a name="UseSessionConditionKeys" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.UseSessionConditionKeys"></a>

```typescript
public readonly UseSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UseSession action.

---

##### `VERIFICATION_TYPE`<sup>Required</sup> <a name="VERIFICATION_TYPE" id="@cdk_utils/iam.partnercentral.PartnercentralConditions.property.VERIFICATION_TYPE"></a>

```typescript
public readonly VERIFICATION_TYPE: string;
```

- *Type:* string

Condition key: partnercentral:VerificationType (String).

---

### PartnercentralOperations <a name="PartnercentralOperations" id="@cdk_utils/iam.partnercentral.PartnercentralOperations"></a>

API operation to required IAM actions mapping for partnercentral.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

new partnercentral.PartnercentralOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AcceptChannelHandshake">AcceptChannelHandshake</a></code> | <code>string[]</code> | IAM actions required for the AcceptChannelHandshake API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AcceptConnectionInvitation">AcceptConnectionInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptConnectionInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AcceptEngagementInvitation">AcceptEngagementInvitation</a></code> | <code>string[]</code> | IAM actions required for the AcceptEngagementInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AmendBenefitApplication">AmendBenefitApplication</a></code> | <code>string[]</code> | IAM actions required for the AmendBenefitApplication API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AssignOpportunity">AssignOpportunity</a></code> | <code>string[]</code> | IAM actions required for the AssignOpportunity API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AssociateAwsTrainingCertificationEmailDomain">AssociateAwsTrainingCertificationEmailDomain</a></code> | <code>string[]</code> | IAM actions required for the AssociateAwsTrainingCertificationEmailDomain API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AssociateBenefitApplicationResource">AssociateBenefitApplicationResource</a></code> | <code>string[]</code> | IAM actions required for the AssociateBenefitApplicationResource API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AssociateOpportunity">AssociateOpportunity</a></code> | <code>string[]</code> | IAM actions required for the AssociateOpportunity API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelBenefitApplication">CancelBenefitApplication</a></code> | <code>string[]</code> | IAM actions required for the CancelBenefitApplication API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelChannelHandshake">CancelChannelHandshake</a></code> | <code>string[]</code> | IAM actions required for the CancelChannelHandshake API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelConnection">CancelConnection</a></code> | <code>string[]</code> | IAM actions required for the CancelConnection API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelConnectionInvitation">CancelConnectionInvitation</a></code> | <code>string[]</code> | IAM actions required for the CancelConnectionInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelProfileUpdateTask">CancelProfileUpdateTask</a></code> | <code>string[]</code> | IAM actions required for the CancelProfileUpdateTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateBenefitApplication">CreateBenefitApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateBenefitApplication API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateChannelHandshake">CreateChannelHandshake</a></code> | <code>string[]</code> | IAM actions required for the CreateChannelHandshake API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateConnectionInvitation">CreateConnectionInvitation</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectionInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateEngagement">CreateEngagement</a></code> | <code>string[]</code> | IAM actions required for the CreateEngagement API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateEngagementContext">CreateEngagementContext</a></code> | <code>string[]</code> | IAM actions required for the CreateEngagementContext API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateEngagementInvitation">CreateEngagementInvitation</a></code> | <code>string[]</code> | IAM actions required for the CreateEngagementInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateMarketplaceRevenueShare">CreateMarketplaceRevenueShare</a></code> | <code>string[]</code> | IAM actions required for the CreateMarketplaceRevenueShare API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateMarketplaceRevenueShareAllocation">CreateMarketplaceRevenueShareAllocation</a></code> | <code>string[]</code> | IAM actions required for the CreateMarketplaceRevenueShareAllocation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateOpportunity">CreateOpportunity</a></code> | <code>string[]</code> | IAM actions required for the CreateOpportunity API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreatePartner">CreatePartner</a></code> | <code>string[]</code> | IAM actions required for the CreatePartner API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateProgramManagementAccount">CreateProgramManagementAccount</a></code> | <code>string[]</code> | IAM actions required for the CreateProgramManagementAccount API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateRelationship">CreateRelationship</a></code> | <code>string[]</code> | IAM actions required for the CreateRelationship API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateResourceSnapshot">CreateResourceSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceSnapshot API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateResourceSnapshotJob">CreateResourceSnapshotJob</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceSnapshotJob API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateRevenueAttribution">CreateRevenueAttribution</a></code> | <code>string[]</code> | IAM actions required for the CreateRevenueAttribution API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DeleteProgramManagementAccount">DeleteProgramManagementAccount</a></code> | <code>string[]</code> | IAM actions required for the DeleteProgramManagementAccount API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DeleteRelationship">DeleteRelationship</a></code> | <code>string[]</code> | IAM actions required for the DeleteRelationship API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DeleteResourceSnapshotJob">DeleteResourceSnapshotJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceSnapshotJob API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DisassociateAwsTrainingCertificationEmailDomain">DisassociateAwsTrainingCertificationEmailDomain</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAwsTrainingCertificationEmailDomain API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DisassociateBenefitApplicationResource">DisassociateBenefitApplicationResource</a></code> | <code>string[]</code> | IAM actions required for the DisassociateBenefitApplicationResource API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DisassociateOpportunity">DisassociateOpportunity</a></code> | <code>string[]</code> | IAM actions required for the DisassociateOpportunity API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListBenefitAllocations">ListBenefitAllocations</a></code> | <code>string[]</code> | IAM actions required for the ListBenefitAllocations API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListBenefitApplications">ListBenefitApplications</a></code> | <code>string[]</code> | IAM actions required for the ListBenefitApplications API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListBenefits">ListBenefits</a></code> | <code>string[]</code> | IAM actions required for the ListBenefits API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListChannelHandshakes">ListChannelHandshakes</a></code> | <code>string[]</code> | IAM actions required for the ListChannelHandshakes API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListConnectionInvitations">ListConnectionInvitations</a></code> | <code>string[]</code> | IAM actions required for the ListConnectionInvitations API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListConnections">ListConnections</a></code> | <code>string[]</code> | IAM actions required for the ListConnections API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementByAcceptingInvitationTasks">ListEngagementByAcceptingInvitationTasks</a></code> | <code>string[]</code> | IAM actions required for the ListEngagementByAcceptingInvitationTasks API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementFromOpportunityTasks">ListEngagementFromOpportunityTasks</a></code> | <code>string[]</code> | IAM actions required for the ListEngagementFromOpportunityTasks API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementInvitations">ListEngagementInvitations</a></code> | <code>string[]</code> | IAM actions required for the ListEngagementInvitations API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementMembers">ListEngagementMembers</a></code> | <code>string[]</code> | IAM actions required for the ListEngagementMembers API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementResourceAssociations">ListEngagementResourceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListEngagementResourceAssociations API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagements">ListEngagements</a></code> | <code>string[]</code> | IAM actions required for the ListEngagements API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListMarketplaceRevenueShareAllocations">ListMarketplaceRevenueShareAllocations</a></code> | <code>string[]</code> | IAM actions required for the ListMarketplaceRevenueShareAllocations API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListMarketplaceRevenueShares">ListMarketplaceRevenueShares</a></code> | <code>string[]</code> | IAM actions required for the ListMarketplaceRevenueShares API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListOpportunities">ListOpportunities</a></code> | <code>string[]</code> | IAM actions required for the ListOpportunities API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListOpportunityFromEngagementTasks">ListOpportunityFromEngagementTasks</a></code> | <code>string[]</code> | IAM actions required for the ListOpportunityFromEngagementTasks API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListPartners">ListPartners</a></code> | <code>string[]</code> | IAM actions required for the ListPartners API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListProgramManagementAccounts">ListProgramManagementAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListProgramManagementAccounts API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListProspectingFromEngagementTasks">ListProspectingFromEngagementTasks</a></code> | <code>string[]</code> | IAM actions required for the ListProspectingFromEngagementTasks API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListRelationships">ListRelationships</a></code> | <code>string[]</code> | IAM actions required for the ListRelationships API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListResourceSnapshotJobs">ListResourceSnapshotJobs</a></code> | <code>string[]</code> | IAM actions required for the ListResourceSnapshotJobs API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListResourceSnapshots">ListResourceSnapshots</a></code> | <code>string[]</code> | IAM actions required for the ListResourceSnapshots API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListRevenueAttributionAllocations">ListRevenueAttributionAllocations</a></code> | <code>string[]</code> | IAM actions required for the ListRevenueAttributionAllocations API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListRevenueAttributions">ListRevenueAttributions</a></code> | <code>string[]</code> | IAM actions required for the ListRevenueAttributions API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListSolutions">ListSolutions</a></code> | <code>string[]</code> | IAM actions required for the ListSolutions API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetAllianceLeadContact">opGetAllianceLeadContact</a></code> | <code>string[]</code> | IAM actions required for the GetAllianceLeadContact API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetAwsOpportunitySummary">opGetAwsOpportunitySummary</a></code> | <code>string[]</code> | IAM actions required for the GetAwsOpportunitySummary API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetBenefit">opGetBenefit</a></code> | <code>string[]</code> | IAM actions required for the GetBenefit API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetBenefitAllocation">opGetBenefitAllocation</a></code> | <code>string[]</code> | IAM actions required for the GetBenefitAllocation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetBenefitApplication">opGetBenefitApplication</a></code> | <code>string[]</code> | IAM actions required for the GetBenefitApplication API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetConnection">opGetConnection</a></code> | <code>string[]</code> | IAM actions required for the GetConnection API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetConnectionInvitation">opGetConnectionInvitation</a></code> | <code>string[]</code> | IAM actions required for the GetConnectionInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetConnectionPreferences">opGetConnectionPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetConnectionPreferences API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetEngagement">opGetEngagement</a></code> | <code>string[]</code> | IAM actions required for the GetEngagement API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetEngagementInvitation">opGetEngagementInvitation</a></code> | <code>string[]</code> | IAM actions required for the GetEngagementInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetMarketplaceRevenueShare">opGetMarketplaceRevenueShare</a></code> | <code>string[]</code> | IAM actions required for the GetMarketplaceRevenueShare API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetMarketplaceRevenueShareAllocation">opGetMarketplaceRevenueShareAllocation</a></code> | <code>string[]</code> | IAM actions required for the GetMarketplaceRevenueShareAllocation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetOpportunity">opGetOpportunity</a></code> | <code>string[]</code> | IAM actions required for the GetOpportunity API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetPartner">opGetPartner</a></code> | <code>string[]</code> | IAM actions required for the GetPartner API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetProfileUpdateTask">opGetProfileUpdateTask</a></code> | <code>string[]</code> | IAM actions required for the GetProfileUpdateTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetProfileVisibility">opGetProfileVisibility</a></code> | <code>string[]</code> | IAM actions required for the GetProfileVisibility API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetProspectingFromEngagementTask">opGetProspectingFromEngagementTask</a></code> | <code>string[]</code> | IAM actions required for the GetProspectingFromEngagementTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetQualificationsAssociationDetails">opGetQualificationsAssociationDetails</a></code> | <code>string[]</code> | IAM actions required for the GetQualificationsAssociationDetails API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetQualificationsAssociationTask">opGetQualificationsAssociationTask</a></code> | <code>string[]</code> | IAM actions required for the GetQualificationsAssociationTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetQualificationsDisassociationTask">opGetQualificationsDisassociationTask</a></code> | <code>string[]</code> | IAM actions required for the GetQualificationsDisassociationTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetRelationship">opGetRelationship</a></code> | <code>string[]</code> | IAM actions required for the GetRelationship API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetResourceSnapshot">opGetResourceSnapshot</a></code> | <code>string[]</code> | IAM actions required for the GetResourceSnapshot API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetResourceSnapshotJob">opGetResourceSnapshotJob</a></code> | <code>string[]</code> | IAM actions required for the GetResourceSnapshotJob API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetRevenueAttribution">opGetRevenueAttribution</a></code> | <code>string[]</code> | IAM actions required for the GetRevenueAttribution API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetRevenueAttributionAllocation">opGetRevenueAttributionAllocation</a></code> | <code>string[]</code> | IAM actions required for the GetRevenueAttributionAllocation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetRevenueAttributionAllocationsTask">opGetRevenueAttributionAllocationsTask</a></code> | <code>string[]</code> | IAM actions required for the GetRevenueAttributionAllocationsTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetSellingSystemSettings">opGetSellingSystemSettings</a></code> | <code>string[]</code> | IAM actions required for the GetSellingSystemSettings API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetVerification">opGetVerification</a></code> | <code>string[]</code> | IAM actions required for the GetVerification API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.PutAllianceLeadContact">PutAllianceLeadContact</a></code> | <code>string[]</code> | IAM actions required for the PutAllianceLeadContact API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.PutProfileVisibility">PutProfileVisibility</a></code> | <code>string[]</code> | IAM actions required for the PutProfileVisibility API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.PutSellingSystemSettings">PutSellingSystemSettings</a></code> | <code>string[]</code> | IAM actions required for the PutSellingSystemSettings API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.RecallBenefitApplication">RecallBenefitApplication</a></code> | <code>string[]</code> | IAM actions required for the RecallBenefitApplication API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.RejectChannelHandshake">RejectChannelHandshake</a></code> | <code>string[]</code> | IAM actions required for the RejectChannelHandshake API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.RejectConnectionInvitation">RejectConnectionInvitation</a></code> | <code>string[]</code> | IAM actions required for the RejectConnectionInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.RejectEngagementInvitation">RejectEngagementInvitation</a></code> | <code>string[]</code> | IAM actions required for the RejectEngagementInvitation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.SendEmailVerificationCode">SendEmailVerificationCode</a></code> | <code>string[]</code> | IAM actions required for the SendEmailVerificationCode API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartEngagementByAcceptingInvitationTask">StartEngagementByAcceptingInvitationTask</a></code> | <code>string[]</code> | IAM actions required for the StartEngagementByAcceptingInvitationTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartEngagementFromOpportunityTask">StartEngagementFromOpportunityTask</a></code> | <code>string[]</code> | IAM actions required for the StartEngagementFromOpportunityTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartOpportunityFromEngagementTask">StartOpportunityFromEngagementTask</a></code> | <code>string[]</code> | IAM actions required for the StartOpportunityFromEngagementTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartProfileUpdateTask">StartProfileUpdateTask</a></code> | <code>string[]</code> | IAM actions required for the StartProfileUpdateTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartProspectingFromEngagementTask">StartProspectingFromEngagementTask</a></code> | <code>string[]</code> | IAM actions required for the StartProspectingFromEngagementTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartQualificationsAssociationTask">StartQualificationsAssociationTask</a></code> | <code>string[]</code> | IAM actions required for the StartQualificationsAssociationTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartQualificationsDisassociationTask">StartQualificationsDisassociationTask</a></code> | <code>string[]</code> | IAM actions required for the StartQualificationsDisassociationTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartResourceSnapshotJob">StartResourceSnapshotJob</a></code> | <code>string[]</code> | IAM actions required for the StartResourceSnapshotJob API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartRevenueAttributionAllocationsTask">StartRevenueAttributionAllocationsTask</a></code> | <code>string[]</code> | IAM actions required for the StartRevenueAttributionAllocationsTask API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartVerification">StartVerification</a></code> | <code>string[]</code> | IAM actions required for the StartVerification API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StopResourceSnapshotJob">StopResourceSnapshotJob</a></code> | <code>string[]</code> | IAM actions required for the StopResourceSnapshotJob API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.SubmitBenefitApplication">SubmitBenefitApplication</a></code> | <code>string[]</code> | IAM actions required for the SubmitBenefitApplication API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.SubmitOpportunity">SubmitOpportunity</a></code> | <code>string[]</code> | IAM actions required for the SubmitOpportunity API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateBenefitApplication">UpdateBenefitApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateBenefitApplication API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateConnectionPreferences">UpdateConnectionPreferences</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectionPreferences API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateEngagementContext">UpdateEngagementContext</a></code> | <code>string[]</code> | IAM actions required for the UpdateEngagementContext API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateMarketplaceRevenueShareAllocation">UpdateMarketplaceRevenueShareAllocation</a></code> | <code>string[]</code> | IAM actions required for the UpdateMarketplaceRevenueShareAllocation API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateOpportunity">UpdateOpportunity</a></code> | <code>string[]</code> | IAM actions required for the UpdateOpportunity API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateProgramManagementAccount">UpdateProgramManagementAccount</a></code> | <code>string[]</code> | IAM actions required for the UpdateProgramManagementAccount API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateRelationship">UpdateRelationship</a></code> | <code>string[]</code> | IAM actions required for the UpdateRelationship API call. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateRevenueAttribution">UpdateRevenueAttribution</a></code> | <code>string[]</code> | IAM actions required for the UpdateRevenueAttribution API call. |

---

##### `AcceptChannelHandshake`<sup>Required</sup> <a name="AcceptChannelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AcceptChannelHandshake"></a>

```typescript
public readonly AcceptChannelHandshake: string[];
```

- *Type:* string[]

IAM actions required for the AcceptChannelHandshake API call.

---

##### `AcceptConnectionInvitation`<sup>Required</sup> <a name="AcceptConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AcceptConnectionInvitation"></a>

```typescript
public readonly AcceptConnectionInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptConnectionInvitation API call.

---

##### `AcceptEngagementInvitation`<sup>Required</sup> <a name="AcceptEngagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AcceptEngagementInvitation"></a>

```typescript
public readonly AcceptEngagementInvitation: string[];
```

- *Type:* string[]

IAM actions required for the AcceptEngagementInvitation API call.

---

##### `AmendBenefitApplication`<sup>Required</sup> <a name="AmendBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AmendBenefitApplication"></a>

```typescript
public readonly AmendBenefitApplication: string[];
```

- *Type:* string[]

IAM actions required for the AmendBenefitApplication API call.

---

##### `AssignOpportunity`<sup>Required</sup> <a name="AssignOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AssignOpportunity"></a>

```typescript
public readonly AssignOpportunity: string[];
```

- *Type:* string[]

IAM actions required for the AssignOpportunity API call.

---

##### `AssociateAwsTrainingCertificationEmailDomain`<sup>Required</sup> <a name="AssociateAwsTrainingCertificationEmailDomain" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AssociateAwsTrainingCertificationEmailDomain"></a>

```typescript
public readonly AssociateAwsTrainingCertificationEmailDomain: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAwsTrainingCertificationEmailDomain API call.

---

##### `AssociateBenefitApplicationResource`<sup>Required</sup> <a name="AssociateBenefitApplicationResource" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AssociateBenefitApplicationResource"></a>

```typescript
public readonly AssociateBenefitApplicationResource: string[];
```

- *Type:* string[]

IAM actions required for the AssociateBenefitApplicationResource API call.

---

##### `AssociateOpportunity`<sup>Required</sup> <a name="AssociateOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.AssociateOpportunity"></a>

```typescript
public readonly AssociateOpportunity: string[];
```

- *Type:* string[]

IAM actions required for the AssociateOpportunity API call.

---

##### `CancelBenefitApplication`<sup>Required</sup> <a name="CancelBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelBenefitApplication"></a>

```typescript
public readonly CancelBenefitApplication: string[];
```

- *Type:* string[]

IAM actions required for the CancelBenefitApplication API call.

---

##### `CancelChannelHandshake`<sup>Required</sup> <a name="CancelChannelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelChannelHandshake"></a>

```typescript
public readonly CancelChannelHandshake: string[];
```

- *Type:* string[]

IAM actions required for the CancelChannelHandshake API call.

---

##### `CancelConnection`<sup>Required</sup> <a name="CancelConnection" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelConnection"></a>

```typescript
public readonly CancelConnection: string[];
```

- *Type:* string[]

IAM actions required for the CancelConnection API call.

---

##### `CancelConnectionInvitation`<sup>Required</sup> <a name="CancelConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelConnectionInvitation"></a>

```typescript
public readonly CancelConnectionInvitation: string[];
```

- *Type:* string[]

IAM actions required for the CancelConnectionInvitation API call.

---

##### `CancelProfileUpdateTask`<sup>Required</sup> <a name="CancelProfileUpdateTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CancelProfileUpdateTask"></a>

```typescript
public readonly CancelProfileUpdateTask: string[];
```

- *Type:* string[]

IAM actions required for the CancelProfileUpdateTask API call.

---

##### `CreateBenefitApplication`<sup>Required</sup> <a name="CreateBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateBenefitApplication"></a>

```typescript
public readonly CreateBenefitApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateBenefitApplication API call.

---

##### `CreateChannelHandshake`<sup>Required</sup> <a name="CreateChannelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateChannelHandshake"></a>

```typescript
public readonly CreateChannelHandshake: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannelHandshake API call.

---

##### `CreateConnectionInvitation`<sup>Required</sup> <a name="CreateConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateConnectionInvitation"></a>

```typescript
public readonly CreateConnectionInvitation: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectionInvitation API call.

---

##### `CreateEngagement`<sup>Required</sup> <a name="CreateEngagement" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateEngagement"></a>

```typescript
public readonly CreateEngagement: string[];
```

- *Type:* string[]

IAM actions required for the CreateEngagement API call.

---

##### `CreateEngagementContext`<sup>Required</sup> <a name="CreateEngagementContext" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateEngagementContext"></a>

```typescript
public readonly CreateEngagementContext: string[];
```

- *Type:* string[]

IAM actions required for the CreateEngagementContext API call.

---

##### `CreateEngagementInvitation`<sup>Required</sup> <a name="CreateEngagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateEngagementInvitation"></a>

```typescript
public readonly CreateEngagementInvitation: string[];
```

- *Type:* string[]

IAM actions required for the CreateEngagementInvitation API call.

---

##### `CreateMarketplaceRevenueShare`<sup>Required</sup> <a name="CreateMarketplaceRevenueShare" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateMarketplaceRevenueShare"></a>

```typescript
public readonly CreateMarketplaceRevenueShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateMarketplaceRevenueShare API call.

---

##### `CreateMarketplaceRevenueShareAllocation`<sup>Required</sup> <a name="CreateMarketplaceRevenueShareAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateMarketplaceRevenueShareAllocation"></a>

```typescript
public readonly CreateMarketplaceRevenueShareAllocation: string[];
```

- *Type:* string[]

IAM actions required for the CreateMarketplaceRevenueShareAllocation API call.

---

##### `CreateOpportunity`<sup>Required</sup> <a name="CreateOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateOpportunity"></a>

```typescript
public readonly CreateOpportunity: string[];
```

- *Type:* string[]

IAM actions required for the CreateOpportunity API call.

---

##### `CreatePartner`<sup>Required</sup> <a name="CreatePartner" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreatePartner"></a>

```typescript
public readonly CreatePartner: string[];
```

- *Type:* string[]

IAM actions required for the CreatePartner API call.

---

##### `CreateProgramManagementAccount`<sup>Required</sup> <a name="CreateProgramManagementAccount" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateProgramManagementAccount"></a>

```typescript
public readonly CreateProgramManagementAccount: string[];
```

- *Type:* string[]

IAM actions required for the CreateProgramManagementAccount API call.

---

##### `CreateRelationship`<sup>Required</sup> <a name="CreateRelationship" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateRelationship"></a>

```typescript
public readonly CreateRelationship: string[];
```

- *Type:* string[]

IAM actions required for the CreateRelationship API call.

---

##### `CreateResourceSnapshot`<sup>Required</sup> <a name="CreateResourceSnapshot" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateResourceSnapshot"></a>

```typescript
public readonly CreateResourceSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceSnapshot API call.

---

##### `CreateResourceSnapshotJob`<sup>Required</sup> <a name="CreateResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateResourceSnapshotJob"></a>

```typescript
public readonly CreateResourceSnapshotJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceSnapshotJob API call.

---

##### `CreateRevenueAttribution`<sup>Required</sup> <a name="CreateRevenueAttribution" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.CreateRevenueAttribution"></a>

```typescript
public readonly CreateRevenueAttribution: string[];
```

- *Type:* string[]

IAM actions required for the CreateRevenueAttribution API call.

---

##### `DeleteProgramManagementAccount`<sup>Required</sup> <a name="DeleteProgramManagementAccount" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DeleteProgramManagementAccount"></a>

```typescript
public readonly DeleteProgramManagementAccount: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProgramManagementAccount API call.

---

##### `DeleteRelationship`<sup>Required</sup> <a name="DeleteRelationship" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DeleteRelationship"></a>

```typescript
public readonly DeleteRelationship: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRelationship API call.

---

##### `DeleteResourceSnapshotJob`<sup>Required</sup> <a name="DeleteResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DeleteResourceSnapshotJob"></a>

```typescript
public readonly DeleteResourceSnapshotJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceSnapshotJob API call.

---

##### `DisassociateAwsTrainingCertificationEmailDomain`<sup>Required</sup> <a name="DisassociateAwsTrainingCertificationEmailDomain" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DisassociateAwsTrainingCertificationEmailDomain"></a>

```typescript
public readonly DisassociateAwsTrainingCertificationEmailDomain: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAwsTrainingCertificationEmailDomain API call.

---

##### `DisassociateBenefitApplicationResource`<sup>Required</sup> <a name="DisassociateBenefitApplicationResource" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DisassociateBenefitApplicationResource"></a>

```typescript
public readonly DisassociateBenefitApplicationResource: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateBenefitApplicationResource API call.

---

##### `DisassociateOpportunity`<sup>Required</sup> <a name="DisassociateOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.DisassociateOpportunity"></a>

```typescript
public readonly DisassociateOpportunity: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateOpportunity API call.

---

##### `ListBenefitAllocations`<sup>Required</sup> <a name="ListBenefitAllocations" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListBenefitAllocations"></a>

```typescript
public readonly ListBenefitAllocations: string[];
```

- *Type:* string[]

IAM actions required for the ListBenefitAllocations API call.

---

##### `ListBenefitApplications`<sup>Required</sup> <a name="ListBenefitApplications" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListBenefitApplications"></a>

```typescript
public readonly ListBenefitApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListBenefitApplications API call.

---

##### `ListBenefits`<sup>Required</sup> <a name="ListBenefits" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListBenefits"></a>

```typescript
public readonly ListBenefits: string[];
```

- *Type:* string[]

IAM actions required for the ListBenefits API call.

---

##### `ListChannelHandshakes`<sup>Required</sup> <a name="ListChannelHandshakes" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListChannelHandshakes"></a>

```typescript
public readonly ListChannelHandshakes: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelHandshakes API call.

---

##### `ListConnectionInvitations`<sup>Required</sup> <a name="ListConnectionInvitations" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListConnectionInvitations"></a>

```typescript
public readonly ListConnectionInvitations: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectionInvitations API call.

---

##### `ListConnections`<sup>Required</sup> <a name="ListConnections" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListConnections"></a>

```typescript
public readonly ListConnections: string[];
```

- *Type:* string[]

IAM actions required for the ListConnections API call.

---

##### `ListEngagementByAcceptingInvitationTasks`<sup>Required</sup> <a name="ListEngagementByAcceptingInvitationTasks" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementByAcceptingInvitationTasks"></a>

```typescript
public readonly ListEngagementByAcceptingInvitationTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListEngagementByAcceptingInvitationTasks API call.

---

##### `ListEngagementFromOpportunityTasks`<sup>Required</sup> <a name="ListEngagementFromOpportunityTasks" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementFromOpportunityTasks"></a>

```typescript
public readonly ListEngagementFromOpportunityTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListEngagementFromOpportunityTasks API call.

---

##### `ListEngagementInvitations`<sup>Required</sup> <a name="ListEngagementInvitations" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementInvitations"></a>

```typescript
public readonly ListEngagementInvitations: string[];
```

- *Type:* string[]

IAM actions required for the ListEngagementInvitations API call.

---

##### `ListEngagementMembers`<sup>Required</sup> <a name="ListEngagementMembers" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementMembers"></a>

```typescript
public readonly ListEngagementMembers: string[];
```

- *Type:* string[]

IAM actions required for the ListEngagementMembers API call.

---

##### `ListEngagementResourceAssociations`<sup>Required</sup> <a name="ListEngagementResourceAssociations" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagementResourceAssociations"></a>

```typescript
public readonly ListEngagementResourceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListEngagementResourceAssociations API call.

---

##### `ListEngagements`<sup>Required</sup> <a name="ListEngagements" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListEngagements"></a>

```typescript
public readonly ListEngagements: string[];
```

- *Type:* string[]

IAM actions required for the ListEngagements API call.

---

##### `ListMarketplaceRevenueShareAllocations`<sup>Required</sup> <a name="ListMarketplaceRevenueShareAllocations" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListMarketplaceRevenueShareAllocations"></a>

```typescript
public readonly ListMarketplaceRevenueShareAllocations: string[];
```

- *Type:* string[]

IAM actions required for the ListMarketplaceRevenueShareAllocations API call.

---

##### `ListMarketplaceRevenueShares`<sup>Required</sup> <a name="ListMarketplaceRevenueShares" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListMarketplaceRevenueShares"></a>

```typescript
public readonly ListMarketplaceRevenueShares: string[];
```

- *Type:* string[]

IAM actions required for the ListMarketplaceRevenueShares API call.

---

##### `ListOpportunities`<sup>Required</sup> <a name="ListOpportunities" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListOpportunities"></a>

```typescript
public readonly ListOpportunities: string[];
```

- *Type:* string[]

IAM actions required for the ListOpportunities API call.

---

##### `ListOpportunityFromEngagementTasks`<sup>Required</sup> <a name="ListOpportunityFromEngagementTasks" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListOpportunityFromEngagementTasks"></a>

```typescript
public readonly ListOpportunityFromEngagementTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListOpportunityFromEngagementTasks API call.

---

##### `ListPartners`<sup>Required</sup> <a name="ListPartners" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListPartners"></a>

```typescript
public readonly ListPartners: string[];
```

- *Type:* string[]

IAM actions required for the ListPartners API call.

---

##### `ListProgramManagementAccounts`<sup>Required</sup> <a name="ListProgramManagementAccounts" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListProgramManagementAccounts"></a>

```typescript
public readonly ListProgramManagementAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListProgramManagementAccounts API call.

---

##### `ListProspectingFromEngagementTasks`<sup>Required</sup> <a name="ListProspectingFromEngagementTasks" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListProspectingFromEngagementTasks"></a>

```typescript
public readonly ListProspectingFromEngagementTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListProspectingFromEngagementTasks API call.

---

##### `ListRelationships`<sup>Required</sup> <a name="ListRelationships" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListRelationships"></a>

```typescript
public readonly ListRelationships: string[];
```

- *Type:* string[]

IAM actions required for the ListRelationships API call.

---

##### `ListResourceSnapshotJobs`<sup>Required</sup> <a name="ListResourceSnapshotJobs" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListResourceSnapshotJobs"></a>

```typescript
public readonly ListResourceSnapshotJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceSnapshotJobs API call.

---

##### `ListResourceSnapshots`<sup>Required</sup> <a name="ListResourceSnapshots" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListResourceSnapshots"></a>

```typescript
public readonly ListResourceSnapshots: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceSnapshots API call.

---

##### `ListRevenueAttributionAllocations`<sup>Required</sup> <a name="ListRevenueAttributionAllocations" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListRevenueAttributionAllocations"></a>

```typescript
public readonly ListRevenueAttributionAllocations: string[];
```

- *Type:* string[]

IAM actions required for the ListRevenueAttributionAllocations API call.

---

##### `ListRevenueAttributions`<sup>Required</sup> <a name="ListRevenueAttributions" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListRevenueAttributions"></a>

```typescript
public readonly ListRevenueAttributions: string[];
```

- *Type:* string[]

IAM actions required for the ListRevenueAttributions API call.

---

##### `ListSolutions`<sup>Required</sup> <a name="ListSolutions" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListSolutions"></a>

```typescript
public readonly ListSolutions: string[];
```

- *Type:* string[]

IAM actions required for the ListSolutions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAllianceLeadContact`<sup>Required</sup> <a name="opGetAllianceLeadContact" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetAllianceLeadContact"></a>

```typescript
public readonly opGetAllianceLeadContact: string[];
```

- *Type:* string[]

IAM actions required for the GetAllianceLeadContact API call.

---

##### `opGetAwsOpportunitySummary`<sup>Required</sup> <a name="opGetAwsOpportunitySummary" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetAwsOpportunitySummary"></a>

```typescript
public readonly opGetAwsOpportunitySummary: string[];
```

- *Type:* string[]

IAM actions required for the GetAwsOpportunitySummary API call.

---

##### `opGetBenefit`<sup>Required</sup> <a name="opGetBenefit" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetBenefit"></a>

```typescript
public readonly opGetBenefit: string[];
```

- *Type:* string[]

IAM actions required for the GetBenefit API call.

---

##### `opGetBenefitAllocation`<sup>Required</sup> <a name="opGetBenefitAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetBenefitAllocation"></a>

```typescript
public readonly opGetBenefitAllocation: string[];
```

- *Type:* string[]

IAM actions required for the GetBenefitAllocation API call.

---

##### `opGetBenefitApplication`<sup>Required</sup> <a name="opGetBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetBenefitApplication"></a>

```typescript
public readonly opGetBenefitApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetBenefitApplication API call.

---

##### `opGetConnection`<sup>Required</sup> <a name="opGetConnection" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetConnection"></a>

```typescript
public readonly opGetConnection: string[];
```

- *Type:* string[]

IAM actions required for the GetConnection API call.

---

##### `opGetConnectionInvitation`<sup>Required</sup> <a name="opGetConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetConnectionInvitation"></a>

```typescript
public readonly opGetConnectionInvitation: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectionInvitation API call.

---

##### `opGetConnectionPreferences`<sup>Required</sup> <a name="opGetConnectionPreferences" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetConnectionPreferences"></a>

```typescript
public readonly opGetConnectionPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectionPreferences API call.

---

##### `opGetEngagement`<sup>Required</sup> <a name="opGetEngagement" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetEngagement"></a>

```typescript
public readonly opGetEngagement: string[];
```

- *Type:* string[]

IAM actions required for the GetEngagement API call.

---

##### `opGetEngagementInvitation`<sup>Required</sup> <a name="opGetEngagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetEngagementInvitation"></a>

```typescript
public readonly opGetEngagementInvitation: string[];
```

- *Type:* string[]

IAM actions required for the GetEngagementInvitation API call.

---

##### `opGetMarketplaceRevenueShare`<sup>Required</sup> <a name="opGetMarketplaceRevenueShare" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetMarketplaceRevenueShare"></a>

```typescript
public readonly opGetMarketplaceRevenueShare: string[];
```

- *Type:* string[]

IAM actions required for the GetMarketplaceRevenueShare API call.

---

##### `opGetMarketplaceRevenueShareAllocation`<sup>Required</sup> <a name="opGetMarketplaceRevenueShareAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetMarketplaceRevenueShareAllocation"></a>

```typescript
public readonly opGetMarketplaceRevenueShareAllocation: string[];
```

- *Type:* string[]

IAM actions required for the GetMarketplaceRevenueShareAllocation API call.

---

##### `opGetOpportunity`<sup>Required</sup> <a name="opGetOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetOpportunity"></a>

```typescript
public readonly opGetOpportunity: string[];
```

- *Type:* string[]

IAM actions required for the GetOpportunity API call.

---

##### `opGetPartner`<sup>Required</sup> <a name="opGetPartner" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetPartner"></a>

```typescript
public readonly opGetPartner: string[];
```

- *Type:* string[]

IAM actions required for the GetPartner API call.

---

##### `opGetProfileUpdateTask`<sup>Required</sup> <a name="opGetProfileUpdateTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetProfileUpdateTask"></a>

```typescript
public readonly opGetProfileUpdateTask: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileUpdateTask API call.

---

##### `opGetProfileVisibility`<sup>Required</sup> <a name="opGetProfileVisibility" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetProfileVisibility"></a>

```typescript
public readonly opGetProfileVisibility: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileVisibility API call.

---

##### `opGetProspectingFromEngagementTask`<sup>Required</sup> <a name="opGetProspectingFromEngagementTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetProspectingFromEngagementTask"></a>

```typescript
public readonly opGetProspectingFromEngagementTask: string[];
```

- *Type:* string[]

IAM actions required for the GetProspectingFromEngagementTask API call.

---

##### `opGetQualificationsAssociationDetails`<sup>Required</sup> <a name="opGetQualificationsAssociationDetails" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetQualificationsAssociationDetails"></a>

```typescript
public readonly opGetQualificationsAssociationDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetQualificationsAssociationDetails API call.

---

##### `opGetQualificationsAssociationTask`<sup>Required</sup> <a name="opGetQualificationsAssociationTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetQualificationsAssociationTask"></a>

```typescript
public readonly opGetQualificationsAssociationTask: string[];
```

- *Type:* string[]

IAM actions required for the GetQualificationsAssociationTask API call.

---

##### `opGetQualificationsDisassociationTask`<sup>Required</sup> <a name="opGetQualificationsDisassociationTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetQualificationsDisassociationTask"></a>

```typescript
public readonly opGetQualificationsDisassociationTask: string[];
```

- *Type:* string[]

IAM actions required for the GetQualificationsDisassociationTask API call.

---

##### `opGetRelationship`<sup>Required</sup> <a name="opGetRelationship" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetRelationship"></a>

```typescript
public readonly opGetRelationship: string[];
```

- *Type:* string[]

IAM actions required for the GetRelationship API call.

---

##### `opGetResourceSnapshot`<sup>Required</sup> <a name="opGetResourceSnapshot" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetResourceSnapshot"></a>

```typescript
public readonly opGetResourceSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceSnapshot API call.

---

##### `opGetResourceSnapshotJob`<sup>Required</sup> <a name="opGetResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetResourceSnapshotJob"></a>

```typescript
public readonly opGetResourceSnapshotJob: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceSnapshotJob API call.

---

##### `opGetRevenueAttribution`<sup>Required</sup> <a name="opGetRevenueAttribution" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetRevenueAttribution"></a>

```typescript
public readonly opGetRevenueAttribution: string[];
```

- *Type:* string[]

IAM actions required for the GetRevenueAttribution API call.

---

##### `opGetRevenueAttributionAllocation`<sup>Required</sup> <a name="opGetRevenueAttributionAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetRevenueAttributionAllocation"></a>

```typescript
public readonly opGetRevenueAttributionAllocation: string[];
```

- *Type:* string[]

IAM actions required for the GetRevenueAttributionAllocation API call.

---

##### `opGetRevenueAttributionAllocationsTask`<sup>Required</sup> <a name="opGetRevenueAttributionAllocationsTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetRevenueAttributionAllocationsTask"></a>

```typescript
public readonly opGetRevenueAttributionAllocationsTask: string[];
```

- *Type:* string[]

IAM actions required for the GetRevenueAttributionAllocationsTask API call.

---

##### `opGetSellingSystemSettings`<sup>Required</sup> <a name="opGetSellingSystemSettings" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetSellingSystemSettings"></a>

```typescript
public readonly opGetSellingSystemSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetSellingSystemSettings API call.

---

##### `opGetVerification`<sup>Required</sup> <a name="opGetVerification" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.opGetVerification"></a>

```typescript
public readonly opGetVerification: string[];
```

- *Type:* string[]

IAM actions required for the GetVerification API call.

---

##### `PutAllianceLeadContact`<sup>Required</sup> <a name="PutAllianceLeadContact" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.PutAllianceLeadContact"></a>

```typescript
public readonly PutAllianceLeadContact: string[];
```

- *Type:* string[]

IAM actions required for the PutAllianceLeadContact API call.

---

##### `PutProfileVisibility`<sup>Required</sup> <a name="PutProfileVisibility" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.PutProfileVisibility"></a>

```typescript
public readonly PutProfileVisibility: string[];
```

- *Type:* string[]

IAM actions required for the PutProfileVisibility API call.

---

##### `PutSellingSystemSettings`<sup>Required</sup> <a name="PutSellingSystemSettings" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.PutSellingSystemSettings"></a>

```typescript
public readonly PutSellingSystemSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutSellingSystemSettings API call.

---

##### `RecallBenefitApplication`<sup>Required</sup> <a name="RecallBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.RecallBenefitApplication"></a>

```typescript
public readonly RecallBenefitApplication: string[];
```

- *Type:* string[]

IAM actions required for the RecallBenefitApplication API call.

---

##### `RejectChannelHandshake`<sup>Required</sup> <a name="RejectChannelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.RejectChannelHandshake"></a>

```typescript
public readonly RejectChannelHandshake: string[];
```

- *Type:* string[]

IAM actions required for the RejectChannelHandshake API call.

---

##### `RejectConnectionInvitation`<sup>Required</sup> <a name="RejectConnectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.RejectConnectionInvitation"></a>

```typescript
public readonly RejectConnectionInvitation: string[];
```

- *Type:* string[]

IAM actions required for the RejectConnectionInvitation API call.

---

##### `RejectEngagementInvitation`<sup>Required</sup> <a name="RejectEngagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.RejectEngagementInvitation"></a>

```typescript
public readonly RejectEngagementInvitation: string[];
```

- *Type:* string[]

IAM actions required for the RejectEngagementInvitation API call.

---

##### `SendEmailVerificationCode`<sup>Required</sup> <a name="SendEmailVerificationCode" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.SendEmailVerificationCode"></a>

```typescript
public readonly SendEmailVerificationCode: string[];
```

- *Type:* string[]

IAM actions required for the SendEmailVerificationCode API call.

---

##### `StartEngagementByAcceptingInvitationTask`<sup>Required</sup> <a name="StartEngagementByAcceptingInvitationTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartEngagementByAcceptingInvitationTask"></a>

```typescript
public readonly StartEngagementByAcceptingInvitationTask: string[];
```

- *Type:* string[]

IAM actions required for the StartEngagementByAcceptingInvitationTask API call.

---

##### `StartEngagementFromOpportunityTask`<sup>Required</sup> <a name="StartEngagementFromOpportunityTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartEngagementFromOpportunityTask"></a>

```typescript
public readonly StartEngagementFromOpportunityTask: string[];
```

- *Type:* string[]

IAM actions required for the StartEngagementFromOpportunityTask API call.

---

##### `StartOpportunityFromEngagementTask`<sup>Required</sup> <a name="StartOpportunityFromEngagementTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartOpportunityFromEngagementTask"></a>

```typescript
public readonly StartOpportunityFromEngagementTask: string[];
```

- *Type:* string[]

IAM actions required for the StartOpportunityFromEngagementTask API call.

---

##### `StartProfileUpdateTask`<sup>Required</sup> <a name="StartProfileUpdateTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartProfileUpdateTask"></a>

```typescript
public readonly StartProfileUpdateTask: string[];
```

- *Type:* string[]

IAM actions required for the StartProfileUpdateTask API call.

---

##### `StartProspectingFromEngagementTask`<sup>Required</sup> <a name="StartProspectingFromEngagementTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartProspectingFromEngagementTask"></a>

```typescript
public readonly StartProspectingFromEngagementTask: string[];
```

- *Type:* string[]

IAM actions required for the StartProspectingFromEngagementTask API call.

---

##### `StartQualificationsAssociationTask`<sup>Required</sup> <a name="StartQualificationsAssociationTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartQualificationsAssociationTask"></a>

```typescript
public readonly StartQualificationsAssociationTask: string[];
```

- *Type:* string[]

IAM actions required for the StartQualificationsAssociationTask API call.

---

##### `StartQualificationsDisassociationTask`<sup>Required</sup> <a name="StartQualificationsDisassociationTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartQualificationsDisassociationTask"></a>

```typescript
public readonly StartQualificationsDisassociationTask: string[];
```

- *Type:* string[]

IAM actions required for the StartQualificationsDisassociationTask API call.

---

##### `StartResourceSnapshotJob`<sup>Required</sup> <a name="StartResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartResourceSnapshotJob"></a>

```typescript
public readonly StartResourceSnapshotJob: string[];
```

- *Type:* string[]

IAM actions required for the StartResourceSnapshotJob API call.

---

##### `StartRevenueAttributionAllocationsTask`<sup>Required</sup> <a name="StartRevenueAttributionAllocationsTask" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartRevenueAttributionAllocationsTask"></a>

```typescript
public readonly StartRevenueAttributionAllocationsTask: string[];
```

- *Type:* string[]

IAM actions required for the StartRevenueAttributionAllocationsTask API call.

---

##### `StartVerification`<sup>Required</sup> <a name="StartVerification" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StartVerification"></a>

```typescript
public readonly StartVerification: string[];
```

- *Type:* string[]

IAM actions required for the StartVerification API call.

---

##### `StopResourceSnapshotJob`<sup>Required</sup> <a name="StopResourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.StopResourceSnapshotJob"></a>

```typescript
public readonly StopResourceSnapshotJob: string[];
```

- *Type:* string[]

IAM actions required for the StopResourceSnapshotJob API call.

---

##### `SubmitBenefitApplication`<sup>Required</sup> <a name="SubmitBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.SubmitBenefitApplication"></a>

```typescript
public readonly SubmitBenefitApplication: string[];
```

- *Type:* string[]

IAM actions required for the SubmitBenefitApplication API call.

---

##### `SubmitOpportunity`<sup>Required</sup> <a name="SubmitOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.SubmitOpportunity"></a>

```typescript
public readonly SubmitOpportunity: string[];
```

- *Type:* string[]

IAM actions required for the SubmitOpportunity API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBenefitApplication`<sup>Required</sup> <a name="UpdateBenefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateBenefitApplication"></a>

```typescript
public readonly UpdateBenefitApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBenefitApplication API call.

---

##### `UpdateConnectionPreferences`<sup>Required</sup> <a name="UpdateConnectionPreferences" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateConnectionPreferences"></a>

```typescript
public readonly UpdateConnectionPreferences: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectionPreferences API call.

---

##### `UpdateEngagementContext`<sup>Required</sup> <a name="UpdateEngagementContext" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateEngagementContext"></a>

```typescript
public readonly UpdateEngagementContext: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEngagementContext API call.

---

##### `UpdateMarketplaceRevenueShareAllocation`<sup>Required</sup> <a name="UpdateMarketplaceRevenueShareAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateMarketplaceRevenueShareAllocation"></a>

```typescript
public readonly UpdateMarketplaceRevenueShareAllocation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMarketplaceRevenueShareAllocation API call.

---

##### `UpdateOpportunity`<sup>Required</sup> <a name="UpdateOpportunity" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateOpportunity"></a>

```typescript
public readonly UpdateOpportunity: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOpportunity API call.

---

##### `UpdateProgramManagementAccount`<sup>Required</sup> <a name="UpdateProgramManagementAccount" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateProgramManagementAccount"></a>

```typescript
public readonly UpdateProgramManagementAccount: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProgramManagementAccount API call.

---

##### `UpdateRelationship`<sup>Required</sup> <a name="UpdateRelationship" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateRelationship"></a>

```typescript
public readonly UpdateRelationship: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRelationship API call.

---

##### `UpdateRevenueAttribution`<sup>Required</sup> <a name="UpdateRevenueAttribution" id="@cdk_utils/iam.partnercentral.PartnercentralOperations.property.UpdateRevenueAttribution"></a>

```typescript
public readonly UpdateRevenueAttribution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRevenueAttribution API call.

---

### PartnercentralResources <a name="PartnercentralResources" id="@cdk_utils/iam.partnercentral.PartnercentralResources"></a>

ARN builders, validators, and parsers for partnercentral resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.partnercentral.PartnercentralResources.Initializer"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

new partnercentral.PartnercentralResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.benefit">benefit</a></code> | Builds an ARN for the Benefit resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.benefitAllocation">benefitAllocation</a></code> | Builds an ARN for the BenefitAllocation resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.benefitApplication">benefitApplication</a></code> | Builds an ARN for the BenefitApplication resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.channelHandshake">channelHandshake</a></code> | Builds an ARN for the ChannelHandshake resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.connection">connection</a></code> | Builds an ARN for the Connection resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.connectionInvitation">connectionInvitation</a></code> | Builds an ARN for the ConnectionInvitation resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.connectionPreferences">connectionPreferences</a></code> | Builds an ARN for the ConnectionPreferences resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.dashboard">dashboard</a></code> | Builds an ARN for the Dashboard resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.engagement">engagement</a></code> | Builds an ARN for the Engagement resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.engagementByAcceptingInvitationTask">engagementByAcceptingInvitationTask</a></code> | Builds an ARN for the engagement-by-accepting-invitation-task resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.engagementFromOpportunityTask">engagementFromOpportunityTask</a></code> | Builds an ARN for the engagement-from-opportunity-task resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.engagementInvitation">engagementInvitation</a></code> | Builds an ARN for the engagement-invitation resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitAllocationArn">isValidBenefitAllocationArn</a></code> | Validates whether a string is a valid ARN for the BenefitAllocation resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitApplicationArn">isValidBenefitApplicationArn</a></code> | Validates whether a string is a valid ARN for the BenefitApplication resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitArn">isValidBenefitArn</a></code> | Validates whether a string is a valid ARN for the Benefit resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidChannelHandshakeArn">isValidChannelHandshakeArn</a></code> | Validates whether a string is a valid ARN for the ChannelHandshake resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the Connection resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionInvitationArn">isValidConnectionInvitationArn</a></code> | Validates whether a string is a valid ARN for the ConnectionInvitation resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionPreferencesArn">isValidConnectionPreferencesArn</a></code> | Validates whether a string is a valid ARN for the ConnectionPreferences resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the Dashboard resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementArn">isValidEngagementArn</a></code> | Validates whether a string is a valid ARN for the Engagement resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementByAcceptingInvitationTaskArn">isValidEngagementByAcceptingInvitationTaskArn</a></code> | Validates whether a string is a valid ARN for the engagement-by-accepting-invitation-task resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementFromOpportunityTaskArn">isValidEngagementFromOpportunityTaskArn</a></code> | Validates whether a string is a valid ARN for the engagement-from-opportunity-task resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementInvitationArn">isValidEngagementInvitationArn</a></code> | Validates whether a string is a valid ARN for the engagement-invitation resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidMarketplaceRevenueShareArn">isValidMarketplaceRevenueShareArn</a></code> | Validates whether a string is a valid ARN for the MarketplaceRevenueShare resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidOpportunityArn">isValidOpportunityArn</a></code> | Validates whether a string is a valid ARN for the Opportunity resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidOpportunityFromEngagementTaskArn">isValidOpportunityFromEngagementTaskArn</a></code> | Validates whether a string is a valid ARN for the OpportunityFromEngagementTask resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidPartnerArn">isValidPartnerArn</a></code> | Validates whether a string is a valid ARN for the Partner resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidProgramManagementAccountArn">isValidProgramManagementAccountArn</a></code> | Validates whether a string is a valid ARN for the ProgramManagementAccount resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidProspectingFromEngagementTaskArn">isValidProspectingFromEngagementTaskArn</a></code> | Validates whether a string is a valid ARN for the ProspectingFromEngagementTask resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidRelationshipArn">isValidRelationshipArn</a></code> | Validates whether a string is a valid ARN for the Relationship resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidResourceSnapshotArn">isValidResourceSnapshotArn</a></code> | Validates whether a string is a valid ARN for the ResourceSnapshot resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidResourceSnapshotJobArn">isValidResourceSnapshotJobArn</a></code> | Validates whether a string is a valid ARN for the resource-snapshot-job resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidRevenueAttributionArn">isValidRevenueAttributionArn</a></code> | Validates whether a string is a valid ARN for the RevenueAttribution resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.isValidSolutionArn">isValidSolutionArn</a></code> | Validates whether a string is a valid ARN for the Solution resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.marketplaceRevenueShare">marketplaceRevenueShare</a></code> | Builds an ARN for the MarketplaceRevenueShare resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.opportunity">opportunity</a></code> | Builds an ARN for the Opportunity resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.opportunityFromEngagementTask">opportunityFromEngagementTask</a></code> | Builds an ARN for the OpportunityFromEngagementTask resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitAllocationArn">parseBenefitAllocationArn</a></code> | Parses a BenefitAllocation ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitApplicationArn">parseBenefitApplicationArn</a></code> | Parses a BenefitApplication ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitArn">parseBenefitArn</a></code> | Parses a Benefit ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseChannelHandshakeArn">parseChannelHandshakeArn</a></code> | Parses a ChannelHandshake ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a Connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionInvitationArn">parseConnectionInvitationArn</a></code> | Parses a ConnectionInvitation ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionPreferencesArn">parseConnectionPreferencesArn</a></code> | Parses a ConnectionPreferences ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a Dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementArn">parseEngagementArn</a></code> | Parses a Engagement ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementByAcceptingInvitationTaskArn">parseEngagementByAcceptingInvitationTaskArn</a></code> | Parses a engagement-by-accepting-invitation-task ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementFromOpportunityTaskArn">parseEngagementFromOpportunityTaskArn</a></code> | Parses a engagement-from-opportunity-task ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementInvitationArn">parseEngagementInvitationArn</a></code> | Parses a engagement-invitation ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseMarketplaceRevenueShareArn">parseMarketplaceRevenueShareArn</a></code> | Parses a MarketplaceRevenueShare ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseOpportunityArn">parseOpportunityArn</a></code> | Parses a Opportunity ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseOpportunityFromEngagementTaskArn">parseOpportunityFromEngagementTaskArn</a></code> | Parses a OpportunityFromEngagementTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parsePartnerArn">parsePartnerArn</a></code> | Parses a Partner ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseProgramManagementAccountArn">parseProgramManagementAccountArn</a></code> | Parses a ProgramManagementAccount ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseProspectingFromEngagementTaskArn">parseProspectingFromEngagementTaskArn</a></code> | Parses a ProspectingFromEngagementTask ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseRelationshipArn">parseRelationshipArn</a></code> | Parses a Relationship ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseResourceSnapshotArn">parseResourceSnapshotArn</a></code> | Parses a ResourceSnapshot ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseResourceSnapshotJobArn">parseResourceSnapshotJobArn</a></code> | Parses a resource-snapshot-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseRevenueAttributionArn">parseRevenueAttributionArn</a></code> | Parses a RevenueAttribution ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.parseSolutionArn">parseSolutionArn</a></code> | Parses a Solution ARN into its components. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.partner">partner</a></code> | Builds an ARN for the Partner resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.programManagementAccount">programManagementAccount</a></code> | Builds an ARN for the ProgramManagementAccount resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.prospectingFromEngagementTask">prospectingFromEngagementTask</a></code> | Builds an ARN for the ProspectingFromEngagementTask resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.relationship">relationship</a></code> | Builds an ARN for the Relationship resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.resourceSnapshot">resourceSnapshot</a></code> | Builds an ARN for the ResourceSnapshot resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.resourceSnapshotJob">resourceSnapshotJob</a></code> | Builds an ARN for the resource-snapshot-job resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.revenueAttribution">revenueAttribution</a></code> | Builds an ARN for the RevenueAttribution resource. |
| <code><a href="#@cdk_utils/iam.partnercentral.PartnercentralResources.solution">solution</a></code> | Builds an ARN for the Solution resource. |

---

##### `benefit` <a name="benefit" id="@cdk_utils/iam.partnercentral.PartnercentralResources.benefit"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.benefit(props: PartnercentralBenefitArnProps)
```

Builds an ARN for the Benefit resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.benefit.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitArnProps">PartnercentralBenefitArnProps</a>

---

##### `benefitAllocation` <a name="benefitAllocation" id="@cdk_utils/iam.partnercentral.PartnercentralResources.benefitAllocation"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.benefitAllocation(props: PartnercentralBenefitAllocationArnProps)
```

Builds an ARN for the BenefitAllocation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.benefitAllocation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitAllocationArnProps">PartnercentralBenefitAllocationArnProps</a>

---

##### `benefitApplication` <a name="benefitApplication" id="@cdk_utils/iam.partnercentral.PartnercentralResources.benefitApplication"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.benefitApplication(props: PartnercentralBenefitApplicationArnProps)
```

Builds an ARN for the BenefitApplication resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.benefitApplication.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralBenefitApplicationArnProps">PartnercentralBenefitApplicationArnProps</a>

---

##### `channelHandshake` <a name="channelHandshake" id="@cdk_utils/iam.partnercentral.PartnercentralResources.channelHandshake"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.channelHandshake(props: PartnercentralChannelHandshakeArnProps)
```

Builds an ARN for the ChannelHandshake resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.channelHandshake.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralChannelHandshakeArnProps">PartnercentralChannelHandshakeArnProps</a>

---

##### `connection` <a name="connection" id="@cdk_utils/iam.partnercentral.PartnercentralResources.connection"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.connection(props: PartnercentralConnectionArnProps)
```

Builds an ARN for the Connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionArnProps">PartnercentralConnectionArnProps</a>

---

##### `connectionInvitation` <a name="connectionInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralResources.connectionInvitation"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.connectionInvitation(props: PartnercentralConnectionInvitationArnProps)
```

Builds an ARN for the ConnectionInvitation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.connectionInvitation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionInvitationArnProps">PartnercentralConnectionInvitationArnProps</a>

---

##### `connectionPreferences` <a name="connectionPreferences" id="@cdk_utils/iam.partnercentral.PartnercentralResources.connectionPreferences"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.connectionPreferences(props: PartnercentralConnectionPreferencesArnProps)
```

Builds an ARN for the ConnectionPreferences resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.connectionPreferences.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralConnectionPreferencesArnProps">PartnercentralConnectionPreferencesArnProps</a>

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.partnercentral.PartnercentralResources.dashboard"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.dashboard(props: PartnercentralDashboardArnProps)
```

Builds an ARN for the Dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralDashboardArnProps">PartnercentralDashboardArnProps</a>

---

##### `engagement` <a name="engagement" id="@cdk_utils/iam.partnercentral.PartnercentralResources.engagement"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.engagement(props: PartnercentralEngagementArnProps)
```

Builds an ARN for the Engagement resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.engagement.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementArnProps">PartnercentralEngagementArnProps</a>

---

##### `engagementByAcceptingInvitationTask` <a name="engagementByAcceptingInvitationTask" id="@cdk_utils/iam.partnercentral.PartnercentralResources.engagementByAcceptingInvitationTask"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.engagementByAcceptingInvitationTask(props: PartnercentralEngagementByAcceptingInvitationTaskArnProps)
```

Builds an ARN for the engagement-by-accepting-invitation-task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.engagementByAcceptingInvitationTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementByAcceptingInvitationTaskArnProps">PartnercentralEngagementByAcceptingInvitationTaskArnProps</a>

---

##### `engagementFromOpportunityTask` <a name="engagementFromOpportunityTask" id="@cdk_utils/iam.partnercentral.PartnercentralResources.engagementFromOpportunityTask"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.engagementFromOpportunityTask(props: PartnercentralEngagementFromOpportunityTaskArnProps)
```

Builds an ARN for the engagement-from-opportunity-task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.engagementFromOpportunityTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementFromOpportunityTaskArnProps">PartnercentralEngagementFromOpportunityTaskArnProps</a>

---

##### `engagementInvitation` <a name="engagementInvitation" id="@cdk_utils/iam.partnercentral.PartnercentralResources.engagementInvitation"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.engagementInvitation(props: PartnercentralEngagementInvitationArnProps)
```

Builds an ARN for the engagement-invitation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.engagementInvitation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralEngagementInvitationArnProps">PartnercentralEngagementInvitationArnProps</a>

---

##### `isValidBenefitAllocationArn` <a name="isValidBenefitAllocationArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitAllocationArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidBenefitAllocationArn(arn: string)
```

Validates whether a string is a valid ARN for the BenefitAllocation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitAllocationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBenefitApplicationArn` <a name="isValidBenefitApplicationArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitApplicationArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidBenefitApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the BenefitApplication resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBenefitArn` <a name="isValidBenefitArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidBenefitArn(arn: string)
```

Validates whether a string is a valid ARN for the Benefit resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidBenefitArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelHandshakeArn` <a name="isValidChannelHandshakeArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidChannelHandshakeArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidChannelHandshakeArn(arn: string)
```

Validates whether a string is a valid ARN for the ChannelHandshake resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidChannelHandshakeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the Connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionInvitationArn` <a name="isValidConnectionInvitationArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionInvitationArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidConnectionInvitationArn(arn: string)
```

Validates whether a string is a valid ARN for the ConnectionInvitation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionInvitationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionPreferencesArn` <a name="isValidConnectionPreferencesArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionPreferencesArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidConnectionPreferencesArn(arn: string)
```

Validates whether a string is a valid ARN for the ConnectionPreferences resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidConnectionPreferencesArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidDashboardArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the Dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEngagementArn` <a name="isValidEngagementArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidEngagementArn(arn: string)
```

Validates whether a string is a valid ARN for the Engagement resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEngagementByAcceptingInvitationTaskArn` <a name="isValidEngagementByAcceptingInvitationTaskArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementByAcceptingInvitationTaskArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidEngagementByAcceptingInvitationTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the engagement-by-accepting-invitation-task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementByAcceptingInvitationTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEngagementFromOpportunityTaskArn` <a name="isValidEngagementFromOpportunityTaskArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementFromOpportunityTaskArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidEngagementFromOpportunityTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the engagement-from-opportunity-task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementFromOpportunityTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEngagementInvitationArn` <a name="isValidEngagementInvitationArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementInvitationArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidEngagementInvitationArn(arn: string)
```

Validates whether a string is a valid ARN for the engagement-invitation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidEngagementInvitationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMarketplaceRevenueShareArn` <a name="isValidMarketplaceRevenueShareArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidMarketplaceRevenueShareArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidMarketplaceRevenueShareArn(arn: string)
```

Validates whether a string is a valid ARN for the MarketplaceRevenueShare resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidMarketplaceRevenueShareArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOpportunityArn` <a name="isValidOpportunityArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidOpportunityArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidOpportunityArn(arn: string)
```

Validates whether a string is a valid ARN for the Opportunity resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidOpportunityArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOpportunityFromEngagementTaskArn` <a name="isValidOpportunityFromEngagementTaskArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidOpportunityFromEngagementTaskArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidOpportunityFromEngagementTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the OpportunityFromEngagementTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidOpportunityFromEngagementTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPartnerArn` <a name="isValidPartnerArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidPartnerArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidPartnerArn(arn: string)
```

Validates whether a string is a valid ARN for the Partner resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidPartnerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProgramManagementAccountArn` <a name="isValidProgramManagementAccountArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidProgramManagementAccountArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidProgramManagementAccountArn(arn: string)
```

Validates whether a string is a valid ARN for the ProgramManagementAccount resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidProgramManagementAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProspectingFromEngagementTaskArn` <a name="isValidProspectingFromEngagementTaskArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidProspectingFromEngagementTaskArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidProspectingFromEngagementTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the ProspectingFromEngagementTask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidProspectingFromEngagementTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRelationshipArn` <a name="isValidRelationshipArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidRelationshipArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidRelationshipArn(arn: string)
```

Validates whether a string is a valid ARN for the Relationship resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidRelationshipArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceSnapshotArn` <a name="isValidResourceSnapshotArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidResourceSnapshotArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidResourceSnapshotArn(arn: string)
```

Validates whether a string is a valid ARN for the ResourceSnapshot resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidResourceSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceSnapshotJobArn` <a name="isValidResourceSnapshotJobArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidResourceSnapshotJobArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidResourceSnapshotJobArn(arn: string)
```

Validates whether a string is a valid ARN for the resource-snapshot-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidResourceSnapshotJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRevenueAttributionArn` <a name="isValidRevenueAttributionArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidRevenueAttributionArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidRevenueAttributionArn(arn: string)
```

Validates whether a string is a valid ARN for the RevenueAttribution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidRevenueAttributionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSolutionArn` <a name="isValidSolutionArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidSolutionArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.isValidSolutionArn(arn: string)
```

Validates whether a string is a valid ARN for the Solution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.isValidSolutionArn.parameter.arn"></a>

- *Type:* string

---

##### `marketplaceRevenueShare` <a name="marketplaceRevenueShare" id="@cdk_utils/iam.partnercentral.PartnercentralResources.marketplaceRevenueShare"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.marketplaceRevenueShare(props: PartnercentralMarketplaceRevenueShareArnProps)
```

Builds an ARN for the MarketplaceRevenueShare resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.marketplaceRevenueShare.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralMarketplaceRevenueShareArnProps">PartnercentralMarketplaceRevenueShareArnProps</a>

---

##### `opportunity` <a name="opportunity" id="@cdk_utils/iam.partnercentral.PartnercentralResources.opportunity"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.opportunity(props: PartnercentralOpportunityArnProps)
```

Builds an ARN for the Opportunity resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.opportunity.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityArnProps">PartnercentralOpportunityArnProps</a>

---

##### `opportunityFromEngagementTask` <a name="opportunityFromEngagementTask" id="@cdk_utils/iam.partnercentral.PartnercentralResources.opportunityFromEngagementTask"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.opportunityFromEngagementTask(props: PartnercentralOpportunityFromEngagementTaskArnProps)
```

Builds an ARN for the OpportunityFromEngagementTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.opportunityFromEngagementTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralOpportunityFromEngagementTaskArnProps">PartnercentralOpportunityFromEngagementTaskArnProps</a>

---

##### `parseBenefitAllocationArn` <a name="parseBenefitAllocationArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitAllocationArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseBenefitAllocationArn(arn: string)
```

Parses a BenefitAllocation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitAllocationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBenefitApplicationArn` <a name="parseBenefitApplicationArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitApplicationArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseBenefitApplicationArn(arn: string)
```

Parses a BenefitApplication ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBenefitArn` <a name="parseBenefitArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseBenefitArn(arn: string)
```

Parses a Benefit ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseBenefitArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelHandshakeArn` <a name="parseChannelHandshakeArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseChannelHandshakeArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseChannelHandshakeArn(arn: string)
```

Parses a ChannelHandshake ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseChannelHandshakeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseConnectionArn(arn: string)
```

Parses a Connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionInvitationArn` <a name="parseConnectionInvitationArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionInvitationArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseConnectionInvitationArn(arn: string)
```

Parses a ConnectionInvitation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionInvitationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionPreferencesArn` <a name="parseConnectionPreferencesArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionPreferencesArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseConnectionPreferencesArn(arn: string)
```

Parses a ConnectionPreferences ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseConnectionPreferencesArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseDashboardArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseDashboardArn(arn: string)
```

Parses a Dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEngagementArn` <a name="parseEngagementArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseEngagementArn(arn: string)
```

Parses a Engagement ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEngagementByAcceptingInvitationTaskArn` <a name="parseEngagementByAcceptingInvitationTaskArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementByAcceptingInvitationTaskArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseEngagementByAcceptingInvitationTaskArn(arn: string)
```

Parses a engagement-by-accepting-invitation-task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementByAcceptingInvitationTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEngagementFromOpportunityTaskArn` <a name="parseEngagementFromOpportunityTaskArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementFromOpportunityTaskArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseEngagementFromOpportunityTaskArn(arn: string)
```

Parses a engagement-from-opportunity-task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementFromOpportunityTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEngagementInvitationArn` <a name="parseEngagementInvitationArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementInvitationArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseEngagementInvitationArn(arn: string)
```

Parses a engagement-invitation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseEngagementInvitationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMarketplaceRevenueShareArn` <a name="parseMarketplaceRevenueShareArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseMarketplaceRevenueShareArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseMarketplaceRevenueShareArn(arn: string)
```

Parses a MarketplaceRevenueShare ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseMarketplaceRevenueShareArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOpportunityArn` <a name="parseOpportunityArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseOpportunityArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseOpportunityArn(arn: string)
```

Parses a Opportunity ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseOpportunityArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOpportunityFromEngagementTaskArn` <a name="parseOpportunityFromEngagementTaskArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseOpportunityFromEngagementTaskArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseOpportunityFromEngagementTaskArn(arn: string)
```

Parses a OpportunityFromEngagementTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseOpportunityFromEngagementTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePartnerArn` <a name="parsePartnerArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parsePartnerArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parsePartnerArn(arn: string)
```

Parses a Partner ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parsePartnerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProgramManagementAccountArn` <a name="parseProgramManagementAccountArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseProgramManagementAccountArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseProgramManagementAccountArn(arn: string)
```

Parses a ProgramManagementAccount ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseProgramManagementAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProspectingFromEngagementTaskArn` <a name="parseProspectingFromEngagementTaskArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseProspectingFromEngagementTaskArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseProspectingFromEngagementTaskArn(arn: string)
```

Parses a ProspectingFromEngagementTask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseProspectingFromEngagementTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRelationshipArn` <a name="parseRelationshipArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseRelationshipArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseRelationshipArn(arn: string)
```

Parses a Relationship ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseRelationshipArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceSnapshotArn` <a name="parseResourceSnapshotArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseResourceSnapshotArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseResourceSnapshotArn(arn: string)
```

Parses a ResourceSnapshot ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseResourceSnapshotArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceSnapshotJobArn` <a name="parseResourceSnapshotJobArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseResourceSnapshotJobArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseResourceSnapshotJobArn(arn: string)
```

Parses a resource-snapshot-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseResourceSnapshotJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRevenueAttributionArn` <a name="parseRevenueAttributionArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseRevenueAttributionArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseRevenueAttributionArn(arn: string)
```

Parses a RevenueAttribution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseRevenueAttributionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSolutionArn` <a name="parseSolutionArn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseSolutionArn"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.parseSolutionArn(arn: string)
```

Parses a Solution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.partnercentral.PartnercentralResources.parseSolutionArn.parameter.arn"></a>

- *Type:* string

---

##### `partner` <a name="partner" id="@cdk_utils/iam.partnercentral.PartnercentralResources.partner"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.partner(props: PartnercentralPartnerArnProps)
```

Builds an ARN for the Partner resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.partner.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralPartnerArnProps">PartnercentralPartnerArnProps</a>

---

##### `programManagementAccount` <a name="programManagementAccount" id="@cdk_utils/iam.partnercentral.PartnercentralResources.programManagementAccount"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.programManagementAccount(props: PartnercentralProgramManagementAccountArnProps)
```

Builds an ARN for the ProgramManagementAccount resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.programManagementAccount.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralProgramManagementAccountArnProps">PartnercentralProgramManagementAccountArnProps</a>

---

##### `prospectingFromEngagementTask` <a name="prospectingFromEngagementTask" id="@cdk_utils/iam.partnercentral.PartnercentralResources.prospectingFromEngagementTask"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.prospectingFromEngagementTask(props: PartnercentralProspectingFromEngagementTaskArnProps)
```

Builds an ARN for the ProspectingFromEngagementTask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.prospectingFromEngagementTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralProspectingFromEngagementTaskArnProps">PartnercentralProspectingFromEngagementTaskArnProps</a>

---

##### `relationship` <a name="relationship" id="@cdk_utils/iam.partnercentral.PartnercentralResources.relationship"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.relationship(props: PartnercentralRelationshipArnProps)
```

Builds an ARN for the Relationship resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.relationship.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralRelationshipArnProps">PartnercentralRelationshipArnProps</a>

---

##### `resourceSnapshot` <a name="resourceSnapshot" id="@cdk_utils/iam.partnercentral.PartnercentralResources.resourceSnapshot"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.resourceSnapshot(props: PartnercentralResourceSnapshotArnProps)
```

Builds an ARN for the ResourceSnapshot resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.resourceSnapshot.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotArnProps">PartnercentralResourceSnapshotArnProps</a>

---

##### `resourceSnapshotJob` <a name="resourceSnapshotJob" id="@cdk_utils/iam.partnercentral.PartnercentralResources.resourceSnapshotJob"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.resourceSnapshotJob(props: PartnercentralResourceSnapshotJobArnProps)
```

Builds an ARN for the resource-snapshot-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.resourceSnapshotJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralResourceSnapshotJobArnProps">PartnercentralResourceSnapshotJobArnProps</a>

---

##### `revenueAttribution` <a name="revenueAttribution" id="@cdk_utils/iam.partnercentral.PartnercentralResources.revenueAttribution"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.revenueAttribution(props: PartnercentralRevenueAttributionArnProps)
```

Builds an ARN for the RevenueAttribution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.revenueAttribution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralRevenueAttributionArnProps">PartnercentralRevenueAttributionArnProps</a>

---

##### `solution` <a name="solution" id="@cdk_utils/iam.partnercentral.PartnercentralResources.solution"></a>

```typescript
import { partnercentral } from '@cdk_utils/iam'

partnercentral.PartnercentralResources.solution(props: PartnercentralSolutionArnProps)
```

Builds an ARN for the Solution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.partnercentral.PartnercentralResources.solution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.partnercentral.PartnercentralSolutionArnProps">PartnercentralSolutionArnProps</a>

---




