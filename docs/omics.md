# `omics` Submodule <a name="`omics` Submodule" id="@cdk_utils/iam.omics"></a>


## Structs <a name="Structs" id="Structs"></a>

### OmicsAnnotationStoreArnComponents <a name="OmicsAnnotationStoreArnComponents" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents"></a>

Parsed components of a AnnotationStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsAnnotationStoreArnComponents: omics.OmicsAnnotationStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.property.annotationStoreName">annotationStoreName</a></code> | <code>string</code> | The AnnotationStoreName component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `annotationStoreName`<sup>Required</sup> <a name="annotationStoreName" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.property.annotationStoreName"></a>

```typescript
public readonly annotationStoreName: string;
```

- *Type:* string

The AnnotationStoreName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsAnnotationStoreArnProps <a name="OmicsAnnotationStoreArnProps" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps"></a>

Properties for building a AnnotationStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsAnnotationStoreArnProps: omics.OmicsAnnotationStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.property.annotationStoreName">annotationStoreName</a></code> | <code>string</code> | The AnnotationStoreName component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `annotationStoreName`<sup>Required</sup> <a name="annotationStoreName" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.property.annotationStoreName"></a>

```typescript
public readonly annotationStoreName: string;
```

- *Type:* string

The AnnotationStoreName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsAnnotationStoreVersionArnComponents <a name="OmicsAnnotationStoreVersionArnComponents" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents"></a>

Parsed components of a AnnotationStoreVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsAnnotationStoreVersionArnComponents: omics.OmicsAnnotationStoreVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.annotationStoreName">annotationStoreName</a></code> | <code>string</code> | The AnnotationStoreName component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.annotationStoreVersionName">annotationStoreVersionName</a></code> | <code>string</code> | The AnnotationStoreVersionName component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `annotationStoreName`<sup>Required</sup> <a name="annotationStoreName" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.annotationStoreName"></a>

```typescript
public readonly annotationStoreName: string;
```

- *Type:* string

The AnnotationStoreName component.

---

##### `annotationStoreVersionName`<sup>Required</sup> <a name="annotationStoreVersionName" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.annotationStoreVersionName"></a>

```typescript
public readonly annotationStoreVersionName: string;
```

- *Type:* string

The AnnotationStoreVersionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsAnnotationStoreVersionArnProps <a name="OmicsAnnotationStoreVersionArnProps" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps"></a>

Properties for building a AnnotationStoreVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsAnnotationStoreVersionArnProps: omics.OmicsAnnotationStoreVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.annotationStoreName">annotationStoreName</a></code> | <code>string</code> | The AnnotationStoreName component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.annotationStoreVersionName">annotationStoreVersionName</a></code> | <code>string</code> | The AnnotationStoreVersionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `annotationStoreName`<sup>Required</sup> <a name="annotationStoreName" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.annotationStoreName"></a>

```typescript
public readonly annotationStoreName: string;
```

- *Type:* string

The AnnotationStoreName component of the ARN.

---

##### `annotationStoreVersionName`<sup>Required</sup> <a name="annotationStoreVersionName" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.annotationStoreVersionName"></a>

```typescript
public readonly annotationStoreVersionName: string;
```

- *Type:* string

The AnnotationStoreVersionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsConfigurationArnComponents <a name="OmicsConfigurationArnComponents" id="@cdk_utils/iam.omics.OmicsConfigurationArnComponents"></a>

Parsed components of a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsConfigurationArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsConfigurationArnComponents: omics.OmicsConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConfigurationArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.omics.OmicsConfigurationArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsConfigurationArnProps <a name="OmicsConfigurationArnProps" id="@cdk_utils/iam.omics.OmicsConfigurationArnProps"></a>

Properties for building a configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsConfigurationArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsConfigurationArnProps: omics.OmicsConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsConfigurationArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.omics.OmicsConfigurationArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsReadSetArnComponents <a name="OmicsReadSetArnComponents" id="@cdk_utils/iam.omics.OmicsReadSetArnComponents"></a>

Parsed components of a readSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsReadSetArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsReadSetArnComponents: omics.OmicsReadSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.readSetId">readSetId</a></code> | <code>string</code> | The ReadSetId component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.sequenceStoreId">sequenceStoreId</a></code> | <code>string</code> | The SequenceStoreId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `readSetId`<sup>Required</sup> <a name="readSetId" id="@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.readSetId"></a>

```typescript
public readonly readSetId: string;
```

- *Type:* string

The ReadSetId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sequenceStoreId`<sup>Required</sup> <a name="sequenceStoreId" id="@cdk_utils/iam.omics.OmicsReadSetArnComponents.property.sequenceStoreId"></a>

```typescript
public readonly sequenceStoreId: string;
```

- *Type:* string

The SequenceStoreId component.

---

### OmicsReadSetArnProps <a name="OmicsReadSetArnProps" id="@cdk_utils/iam.omics.OmicsReadSetArnProps"></a>

Properties for building a readSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsReadSetArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsReadSetArnProps: omics.OmicsReadSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnProps.property.readSetId">readSetId</a></code> | <code>string</code> | The ReadSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnProps.property.sequenceStoreId">sequenceStoreId</a></code> | <code>string</code> | The SequenceStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReadSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `readSetId`<sup>Required</sup> <a name="readSetId" id="@cdk_utils/iam.omics.OmicsReadSetArnProps.property.readSetId"></a>

```typescript
public readonly readSetId: string;
```

- *Type:* string

The ReadSetId component of the ARN.

---

##### `sequenceStoreId`<sup>Required</sup> <a name="sequenceStoreId" id="@cdk_utils/iam.omics.OmicsReadSetArnProps.property.sequenceStoreId"></a>

```typescript
public readonly sequenceStoreId: string;
```

- *Type:* string

The SequenceStoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsReadSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsReadSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsReadSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsReferenceArnComponents <a name="OmicsReferenceArnComponents" id="@cdk_utils/iam.omics.OmicsReferenceArnComponents"></a>

Parsed components of a reference ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsReferenceArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsReferenceArnComponents: omics.OmicsReferenceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.referenceId">referenceId</a></code> | <code>string</code> | The ReferenceId component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.referenceStoreId">referenceStoreId</a></code> | <code>string</code> | The ReferenceStoreId component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

The ReferenceId component.

---

##### `referenceStoreId`<sup>Required</sup> <a name="referenceStoreId" id="@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.referenceStoreId"></a>

```typescript
public readonly referenceStoreId: string;
```

- *Type:* string

The ReferenceStoreId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsReferenceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsReferenceArnProps <a name="OmicsReferenceArnProps" id="@cdk_utils/iam.omics.OmicsReferenceArnProps"></a>

Properties for building a reference ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsReferenceArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsReferenceArnProps: omics.OmicsReferenceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnProps.property.referenceId">referenceId</a></code> | <code>string</code> | The ReferenceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnProps.property.referenceStoreId">referenceStoreId</a></code> | <code>string</code> | The ReferenceStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdk_utils/iam.omics.OmicsReferenceArnProps.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

The ReferenceId component of the ARN.

---

##### `referenceStoreId`<sup>Required</sup> <a name="referenceStoreId" id="@cdk_utils/iam.omics.OmicsReferenceArnProps.property.referenceStoreId"></a>

```typescript
public readonly referenceStoreId: string;
```

- *Type:* string

The ReferenceStoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsReferenceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsReferenceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsReferenceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsReferenceStoreArnComponents <a name="OmicsReferenceStoreArnComponents" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents"></a>

Parsed components of a referenceStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsReferenceStoreArnComponents: omics.OmicsReferenceStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.property.referenceStoreId">referenceStoreId</a></code> | <code>string</code> | The ReferenceStoreId component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `referenceStoreId`<sup>Required</sup> <a name="referenceStoreId" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.property.referenceStoreId"></a>

```typescript
public readonly referenceStoreId: string;
```

- *Type:* string

The ReferenceStoreId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsReferenceStoreArnProps <a name="OmicsReferenceStoreArnProps" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnProps"></a>

Properties for building a referenceStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsReferenceStoreArnProps: omics.OmicsReferenceStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.property.referenceStoreId">referenceStoreId</a></code> | <code>string</code> | The ReferenceStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `referenceStoreId`<sup>Required</sup> <a name="referenceStoreId" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.property.referenceStoreId"></a>

```typescript
public readonly referenceStoreId: string;
```

- *Type:* string

The ReferenceStoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsReferenceStoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsRunArnComponents <a name="OmicsRunArnComponents" id="@cdk_utils/iam.omics.OmicsRunArnComponents"></a>

Parsed components of a run ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsRunArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsRunArnComponents: omics.OmicsRunArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsRunArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsRunArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsRunArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsRunArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsRunArnProps <a name="OmicsRunArnProps" id="@cdk_utils/iam.omics.OmicsRunArnProps"></a>

Properties for building a run ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsRunArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsRunArnProps: omics.OmicsRunArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsRunArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsRunArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsRunArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsRunArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsRunBatchArnComponents <a name="OmicsRunBatchArnComponents" id="@cdk_utils/iam.omics.OmicsRunBatchArnComponents"></a>

Parsed components of a runBatch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsRunBatchArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsRunBatchArnComponents: omics.OmicsRunBatchArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunBatchArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunBatchArnComponents.property.batchId">batchId</a></code> | <code>string</code> | The BatchId component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunBatchArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunBatchArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsRunBatchArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `batchId`<sup>Required</sup> <a name="batchId" id="@cdk_utils/iam.omics.OmicsRunBatchArnComponents.property.batchId"></a>

```typescript
public readonly batchId: string;
```

- *Type:* string

The BatchId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsRunBatchArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsRunBatchArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsRunBatchArnProps <a name="OmicsRunBatchArnProps" id="@cdk_utils/iam.omics.OmicsRunBatchArnProps"></a>

Properties for building a runBatch ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsRunBatchArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsRunBatchArnProps: omics.OmicsRunBatchArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunBatchArnProps.property.batchId">batchId</a></code> | <code>string</code> | The BatchId component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunBatchArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunBatchArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunBatchArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `batchId`<sup>Required</sup> <a name="batchId" id="@cdk_utils/iam.omics.OmicsRunBatchArnProps.property.batchId"></a>

```typescript
public readonly batchId: string;
```

- *Type:* string

The BatchId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsRunBatchArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsRunBatchArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsRunBatchArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsRunCacheArnComponents <a name="OmicsRunCacheArnComponents" id="@cdk_utils/iam.omics.OmicsRunCacheArnComponents"></a>

Parsed components of a runCache ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsRunCacheArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsRunCacheArnComponents: omics.OmicsRunCacheArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunCacheArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunCacheArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunCacheArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunCacheArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsRunCacheArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsRunCacheArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsRunCacheArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsRunCacheArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsRunCacheArnProps <a name="OmicsRunCacheArnProps" id="@cdk_utils/iam.omics.OmicsRunCacheArnProps"></a>

Properties for building a runCache ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsRunCacheArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsRunCacheArnProps: omics.OmicsRunCacheArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunCacheArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunCacheArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunCacheArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunCacheArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsRunCacheArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsRunCacheArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsRunCacheArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsRunCacheArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsRunGroupArnComponents <a name="OmicsRunGroupArnComponents" id="@cdk_utils/iam.omics.OmicsRunGroupArnComponents"></a>

Parsed components of a runGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsRunGroupArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsRunGroupArnComponents: omics.OmicsRunGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunGroupArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsRunGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsRunGroupArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsRunGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsRunGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsRunGroupArnProps <a name="OmicsRunGroupArnProps" id="@cdk_utils/iam.omics.OmicsRunGroupArnProps"></a>

Properties for building a runGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsRunGroupArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsRunGroupArnProps: omics.OmicsRunGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunGroupArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsRunGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsRunGroupArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsRunGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsRunGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsRunGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsSequenceStoreArnComponents <a name="OmicsSequenceStoreArnComponents" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents"></a>

Parsed components of a sequenceStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsSequenceStoreArnComponents: omics.OmicsSequenceStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.property.sequenceStoreId">sequenceStoreId</a></code> | <code>string</code> | The SequenceStoreId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sequenceStoreId`<sup>Required</sup> <a name="sequenceStoreId" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnComponents.property.sequenceStoreId"></a>

```typescript
public readonly sequenceStoreId: string;
```

- *Type:* string

The SequenceStoreId component.

---

### OmicsSequenceStoreArnProps <a name="OmicsSequenceStoreArnProps" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnProps"></a>

Properties for building a sequenceStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsSequenceStoreArnProps: omics.OmicsSequenceStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.property.sequenceStoreId">sequenceStoreId</a></code> | <code>string</code> | The SequenceStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sequenceStoreId`<sup>Required</sup> <a name="sequenceStoreId" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.property.sequenceStoreId"></a>

```typescript
public readonly sequenceStoreId: string;
```

- *Type:* string

The SequenceStoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsSequenceStoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsTaskResourceArnComponents <a name="OmicsTaskResourceArnComponents" id="@cdk_utils/iam.omics.OmicsTaskResourceArnComponents"></a>

Parsed components of a TaskResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsTaskResourceArnComponents: omics.OmicsTaskResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsTaskResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsTaskResourceArnProps <a name="OmicsTaskResourceArnProps" id="@cdk_utils/iam.omics.OmicsTaskResourceArnProps"></a>

Properties for building a TaskResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsTaskResourceArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsTaskResourceArnProps: omics.OmicsTaskResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsTaskResourceArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsTaskResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsTaskResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsTaskResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsVariantStoreArnComponents <a name="OmicsVariantStoreArnComponents" id="@cdk_utils/iam.omics.OmicsVariantStoreArnComponents"></a>

Parsed components of a VariantStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsVariantStoreArnComponents: omics.OmicsVariantStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.property.variantStoreName">variantStoreName</a></code> | <code>string</code> | The VariantStoreName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `variantStoreName`<sup>Required</sup> <a name="variantStoreName" id="@cdk_utils/iam.omics.OmicsVariantStoreArnComponents.property.variantStoreName"></a>

```typescript
public readonly variantStoreName: string;
```

- *Type:* string

The VariantStoreName component.

---

### OmicsVariantStoreArnProps <a name="OmicsVariantStoreArnProps" id="@cdk_utils/iam.omics.OmicsVariantStoreArnProps"></a>

Properties for building a VariantStore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsVariantStoreArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsVariantStoreArnProps: omics.OmicsVariantStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnProps.property.variantStoreName">variantStoreName</a></code> | <code>string</code> | The VariantStoreName component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `variantStoreName`<sup>Required</sup> <a name="variantStoreName" id="@cdk_utils/iam.omics.OmicsVariantStoreArnProps.property.variantStoreName"></a>

```typescript
public readonly variantStoreName: string;
```

- *Type:* string

The VariantStoreName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsVariantStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsVariantStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsVariantStoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsWorkflowArnComponents <a name="OmicsWorkflowArnComponents" id="@cdk_utils/iam.omics.OmicsWorkflowArnComponents"></a>

Parsed components of a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsWorkflowArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsWorkflowArnComponents: omics.OmicsWorkflowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsWorkflowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsWorkflowArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsWorkflowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsWorkflowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OmicsWorkflowArnProps <a name="OmicsWorkflowArnProps" id="@cdk_utils/iam.omics.OmicsWorkflowArnProps"></a>

Properties for building a workflow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsWorkflowArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsWorkflowArnProps: omics.OmicsWorkflowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsWorkflowArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsWorkflowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsWorkflowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsWorkflowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OmicsWorkflowVersionArnComponents <a name="OmicsWorkflowVersionArnComponents" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents"></a>

Parsed components of a WorkflowVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsWorkflowVersionArnComponents: omics.OmicsWorkflowVersionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.versionName">versionName</a></code> | <code>string</code> | The VersionName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnComponents.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

The VersionName component.

---

### OmicsWorkflowVersionArnProps <a name="OmicsWorkflowVersionArnProps" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps"></a>

Properties for building a WorkflowVersion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

const omicsWorkflowVersionArnProps: omics.OmicsWorkflowVersionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.versionName">versionName</a></code> | <code>string</code> | The VersionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.versionName"></a>

```typescript
public readonly versionName: string;
```

- *Type:* string

The VersionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsActions <a name="OmicsActions" id="@cdk_utils/iam.omics.OmicsActions"></a>

IAM action constants for the omics service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.omics.OmicsActions.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

new omics.OmicsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.AbortMultipartReadSetUpload">AbortMultipartReadSetUpload</a></code> | <code>string</code> | [Write] omics:AbortMultipartReadSetUpload. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.AcceptShare">AcceptShare</a></code> | <code>string</code> | [Write] omics:AcceptShare. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetAnnotationImportJob">actionGetAnnotationImportJob</a></code> | <code>string</code> | [Read] omics:GetAnnotationImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetAnnotationStore">actionGetAnnotationStore</a></code> | <code>string</code> | [Read] omics:GetAnnotationStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetAnnotationStoreVersion">actionGetAnnotationStoreVersion</a></code> | <code>string</code> | [Read] omics:GetAnnotationStoreVersion. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetBatch">actionGetBatch</a></code> | <code>string</code> | [Read] omics:GetBatch. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetConfiguration">actionGetConfiguration</a></code> | <code>string</code> | [Read] omics:GetConfiguration. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSet">actionGetReadSet</a></code> | <code>string</code> | [Read] omics:GetReadSet. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSetActivationJob">actionGetReadSetActivationJob</a></code> | <code>string</code> | [Read] omics:GetReadSetActivationJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSetExportJob">actionGetReadSetExportJob</a></code> | <code>string</code> | [Read] omics:GetReadSetExportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSetImportJob">actionGetReadSetImportJob</a></code> | <code>string</code> | [Read] omics:GetReadSetImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSetMetadata">actionGetReadSetMetadata</a></code> | <code>string</code> | [Read] omics:GetReadSetMetadata. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReference">actionGetReference</a></code> | <code>string</code> | [Read] omics:GetReference. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReferenceImportJob">actionGetReferenceImportJob</a></code> | <code>string</code> | [Read] omics:GetReferenceImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReferenceMetadata">actionGetReferenceMetadata</a></code> | <code>string</code> | [Read] omics:GetReferenceMetadata. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetReferenceStore">actionGetReferenceStore</a></code> | <code>string</code> | [Read] omics:GetReferenceStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetRun">actionGetRun</a></code> | <code>string</code> | [Read] omics:GetRun. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetRunCache">actionGetRunCache</a></code> | <code>string</code> | [Read] omics:GetRunCache. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetRunGroup">actionGetRunGroup</a></code> | <code>string</code> | [Read] omics:GetRunGroup. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetRunTask">actionGetRunTask</a></code> | <code>string</code> | [Read] omics:GetRunTask. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetS3AccessPolicy">actionGetS3AccessPolicy</a></code> | <code>string</code> | [Read] omics:GetS3AccessPolicy. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetSequenceStore">actionGetSequenceStore</a></code> | <code>string</code> | [Read] omics:GetSequenceStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetShare">actionGetShare</a></code> | <code>string</code> | [Read] omics:GetShare. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetVariantImportJob">actionGetVariantImportJob</a></code> | <code>string</code> | [Read] omics:GetVariantImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetVariantStore">actionGetVariantStore</a></code> | <code>string</code> | [Read] omics:GetVariantStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetWorkflow">actionGetWorkflow</a></code> | <code>string</code> | [Read] omics:GetWorkflow. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.actionGetWorkflowVersion">actionGetWorkflowVersion</a></code> | <code>string</code> | [Read] omics:GetWorkflowVersion. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.BatchDeleteReadSet">BatchDeleteReadSet</a></code> | <code>string</code> | [Write] omics:BatchDeleteReadSet. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CancelAnnotationImportJob">CancelAnnotationImportJob</a></code> | <code>string</code> | [Write] omics:CancelAnnotationImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CancelRun">CancelRun</a></code> | <code>string</code> | [Write] omics:CancelRun. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CancelRunBatch">CancelRunBatch</a></code> | <code>string</code> | [Write] omics:CancelRunBatch. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CancelVariantImportJob">CancelVariantImportJob</a></code> | <code>string</code> | [Write] omics:CancelVariantImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CompleteMultipartReadSetUpload">CompleteMultipartReadSetUpload</a></code> | <code>string</code> | [Write] omics:CompleteMultipartReadSetUpload. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateAnnotationStore">CreateAnnotationStore</a></code> | <code>string</code> | [Write] omics:CreateAnnotationStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateAnnotationStoreVersion">CreateAnnotationStoreVersion</a></code> | <code>string</code> | [Write] omics:CreateAnnotationStoreVersion. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateConfiguration">CreateConfiguration</a></code> | <code>string</code> | [Write] omics:CreateConfiguration. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateMultipartReadSetUpload">CreateMultipartReadSetUpload</a></code> | <code>string</code> | [Write] omics:CreateMultipartReadSetUpload. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateReferenceStore">CreateReferenceStore</a></code> | <code>string</code> | [Write] omics:CreateReferenceStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateRunCache">CreateRunCache</a></code> | <code>string</code> | [Write] omics:CreateRunCache. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateRunGroup">CreateRunGroup</a></code> | <code>string</code> | [Write] omics:CreateRunGroup. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateSequenceStore">CreateSequenceStore</a></code> | <code>string</code> | [Write] omics:CreateSequenceStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateShare">CreateShare</a></code> | <code>string</code> | [Write] omics:CreateShare. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateVariantStore">CreateVariantStore</a></code> | <code>string</code> | [Write] omics:CreateVariantStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string</code> | [Write] omics:CreateWorkflow. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.CreateWorkflowVersion">CreateWorkflowVersion</a></code> | <code>string</code> | [Write] omics:CreateWorkflowVersion. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteAnnotationStore">DeleteAnnotationStore</a></code> | <code>string</code> | [Write] omics:DeleteAnnotationStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteAnnotationStoreVersions">DeleteAnnotationStoreVersions</a></code> | <code>string</code> | [Write] omics:DeleteAnnotationStoreVersions. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteBatch">DeleteBatch</a></code> | <code>string</code> | [Write] omics:DeleteBatch. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteConfiguration">DeleteConfiguration</a></code> | <code>string</code> | [Write] omics:DeleteConfiguration. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteReference">DeleteReference</a></code> | <code>string</code> | [Write] omics:DeleteReference. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteReferenceStore">DeleteReferenceStore</a></code> | <code>string</code> | [Write] omics:DeleteReferenceStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteRun">DeleteRun</a></code> | <code>string</code> | [Write] omics:DeleteRun. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteRunBatch">DeleteRunBatch</a></code> | <code>string</code> | [Write] omics:DeleteRunBatch. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteRunCache">DeleteRunCache</a></code> | <code>string</code> | [Write] omics:DeleteRunCache. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteRunGroup">DeleteRunGroup</a></code> | <code>string</code> | [Write] omics:DeleteRunGroup. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteS3AccessPolicy">DeleteS3AccessPolicy</a></code> | <code>string</code> | [Write] omics:DeleteS3AccessPolicy. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteSequenceStore">DeleteSequenceStore</a></code> | <code>string</code> | [Write] omics:DeleteSequenceStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteShare">DeleteShare</a></code> | <code>string</code> | [Write] omics:DeleteShare. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteVariantStore">DeleteVariantStore</a></code> | <code>string</code> | [Write] omics:DeleteVariantStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string</code> | [Write] omics:DeleteWorkflow. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.DeleteWorkflowVersion">DeleteWorkflowVersion</a></code> | <code>string</code> | [Write] omics:DeleteWorkflowVersion. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListAnnotationImportJobs">ListAnnotationImportJobs</a></code> | <code>string</code> | [List] omics:ListAnnotationImportJobs. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListAnnotationStores">ListAnnotationStores</a></code> | <code>string</code> | [List] omics:ListAnnotationStores. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListAnnotationStoreVersions">ListAnnotationStoreVersions</a></code> | <code>string</code> | [List] omics:ListAnnotationStoreVersions. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListBatch">ListBatch</a></code> | <code>string</code> | [List] omics:ListBatch. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListConfigurations">ListConfigurations</a></code> | <code>string</code> | [List] omics:ListConfigurations. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListMultipartReadSetUploads">ListMultipartReadSetUploads</a></code> | <code>string</code> | [List] omics:ListMultipartReadSetUploads. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListReadSetActivationJobs">ListReadSetActivationJobs</a></code> | <code>string</code> | [List] omics:ListReadSetActivationJobs. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListReadSetExportJobs">ListReadSetExportJobs</a></code> | <code>string</code> | [List] omics:ListReadSetExportJobs. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListReadSetImportJobs">ListReadSetImportJobs</a></code> | <code>string</code> | [List] omics:ListReadSetImportJobs. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListReadSets">ListReadSets</a></code> | <code>string</code> | [List] omics:ListReadSets. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListReadSetUploadParts">ListReadSetUploadParts</a></code> | <code>string</code> | [List] omics:ListReadSetUploadParts. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListReferenceImportJobs">ListReferenceImportJobs</a></code> | <code>string</code> | [List] omics:ListReferenceImportJobs. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListReferences">ListReferences</a></code> | <code>string</code> | [List] omics:ListReferences. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListReferenceStores">ListReferenceStores</a></code> | <code>string</code> | [List] omics:ListReferenceStores. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListRunCaches">ListRunCaches</a></code> | <code>string</code> | [List] omics:ListRunCaches. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListRunGroups">ListRunGroups</a></code> | <code>string</code> | [List] omics:ListRunGroups. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListRuns">ListRuns</a></code> | <code>string</code> | [List] omics:ListRuns. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListRunsInBatch">ListRunsInBatch</a></code> | <code>string</code> | [List] omics:ListRunsInBatch. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListRunTasks">ListRunTasks</a></code> | <code>string</code> | [List] omics:ListRunTasks. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListSequenceStores">ListSequenceStores</a></code> | <code>string</code> | [List] omics:ListSequenceStores. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListShares">ListShares</a></code> | <code>string</code> | [List] omics:ListShares. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] omics:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListVariantImportJobs">ListVariantImportJobs</a></code> | <code>string</code> | [List] omics:ListVariantImportJobs. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListVariantStores">ListVariantStores</a></code> | <code>string</code> | [List] omics:ListVariantStores. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListWorkflows">ListWorkflows</a></code> | <code>string</code> | [List] omics:ListWorkflows. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.ListWorkflowVersions">ListWorkflowVersions</a></code> | <code>string</code> | [List] omics:ListWorkflowVersions. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.PutS3AccessPolicy">PutS3AccessPolicy</a></code> | <code>string</code> | [Write] omics:PutS3AccessPolicy. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.StartAnnotationImportJob">StartAnnotationImportJob</a></code> | <code>string</code> | [Write] omics:StartAnnotationImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.StartReadSetActivationJob">StartReadSetActivationJob</a></code> | <code>string</code> | [Write] omics:StartReadSetActivationJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.StartReadSetExportJob">StartReadSetExportJob</a></code> | <code>string</code> | [Write] omics:StartReadSetExportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.StartReadSetImportJob">StartReadSetImportJob</a></code> | <code>string</code> | [Write] omics:StartReadSetImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.StartReferenceImportJob">StartReferenceImportJob</a></code> | <code>string</code> | [Write] omics:StartReferenceImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.StartRun">StartRun</a></code> | <code>string</code> | [Write] omics:StartRun. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.StartRunBatch">StartRunBatch</a></code> | <code>string</code> | [Write] omics:StartRunBatch. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.StartVariantImportJob">StartVariantImportJob</a></code> | <code>string</code> | [Write] omics:StartVariantImportJob. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] omics:TagResource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] omics:UntagResource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UpdateAnnotationStore">UpdateAnnotationStore</a></code> | <code>string</code> | [Write] omics:UpdateAnnotationStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UpdateAnnotationStoreVersion">UpdateAnnotationStoreVersion</a></code> | <code>string</code> | [Write] omics:UpdateAnnotationStoreVersion. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UpdateRunCache">UpdateRunCache</a></code> | <code>string</code> | [Write] omics:UpdateRunCache. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UpdateRunGroup">UpdateRunGroup</a></code> | <code>string</code> | [Write] omics:UpdateRunGroup. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UpdateSequenceStore">UpdateSequenceStore</a></code> | <code>string</code> | [Write] omics:UpdateSequenceStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UpdateVariantStore">UpdateVariantStore</a></code> | <code>string</code> | [Write] omics:UpdateVariantStore. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UpdateWorkflow">UpdateWorkflow</a></code> | <code>string</code> | [Write] omics:UpdateWorkflow. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UpdateWorkflowVersion">UpdateWorkflowVersion</a></code> | <code>string</code> | [Write] omics:UpdateWorkflowVersion. |
| <code><a href="#@cdk_utils/iam.omics.OmicsActions.property.UploadReadSetPart">UploadReadSetPart</a></code> | <code>string</code> | [Write] omics:UploadReadSetPart. |

---

##### `AbortMultipartReadSetUpload`<sup>Required</sup> <a name="AbortMultipartReadSetUpload" id="@cdk_utils/iam.omics.OmicsActions.property.AbortMultipartReadSetUpload"></a>

```typescript
public readonly AbortMultipartReadSetUpload: string;
```

- *Type:* string

[Write] omics:AbortMultipartReadSetUpload.

---

##### `AcceptShare`<sup>Required</sup> <a name="AcceptShare" id="@cdk_utils/iam.omics.OmicsActions.property.AcceptShare"></a>

```typescript
public readonly AcceptShare: string;
```

- *Type:* string

[Write] omics:AcceptShare.

---

##### `actionGetAnnotationImportJob`<sup>Required</sup> <a name="actionGetAnnotationImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetAnnotationImportJob"></a>

```typescript
public readonly actionGetAnnotationImportJob: string;
```

- *Type:* string

[Read] omics:GetAnnotationImportJob.

---

##### `actionGetAnnotationStore`<sup>Required</sup> <a name="actionGetAnnotationStore" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetAnnotationStore"></a>

```typescript
public readonly actionGetAnnotationStore: string;
```

- *Type:* string

[Read] omics:GetAnnotationStore.

---

##### `actionGetAnnotationStoreVersion`<sup>Required</sup> <a name="actionGetAnnotationStoreVersion" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetAnnotationStoreVersion"></a>

```typescript
public readonly actionGetAnnotationStoreVersion: string;
```

- *Type:* string

[Read] omics:GetAnnotationStoreVersion.

---

##### `actionGetBatch`<sup>Required</sup> <a name="actionGetBatch" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetBatch"></a>

```typescript
public readonly actionGetBatch: string;
```

- *Type:* string

[Read] omics:GetBatch.

---

##### `actionGetConfiguration`<sup>Required</sup> <a name="actionGetConfiguration" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetConfiguration"></a>

```typescript
public readonly actionGetConfiguration: string;
```

- *Type:* string

[Read] omics:GetConfiguration.

---

##### `actionGetReadSet`<sup>Required</sup> <a name="actionGetReadSet" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSet"></a>

```typescript
public readonly actionGetReadSet: string;
```

- *Type:* string

[Read] omics:GetReadSet.

---

##### `actionGetReadSetActivationJob`<sup>Required</sup> <a name="actionGetReadSetActivationJob" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSetActivationJob"></a>

```typescript
public readonly actionGetReadSetActivationJob: string;
```

- *Type:* string

[Read] omics:GetReadSetActivationJob.

---

##### `actionGetReadSetExportJob`<sup>Required</sup> <a name="actionGetReadSetExportJob" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSetExportJob"></a>

```typescript
public readonly actionGetReadSetExportJob: string;
```

- *Type:* string

[Read] omics:GetReadSetExportJob.

---

##### `actionGetReadSetImportJob`<sup>Required</sup> <a name="actionGetReadSetImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSetImportJob"></a>

```typescript
public readonly actionGetReadSetImportJob: string;
```

- *Type:* string

[Read] omics:GetReadSetImportJob.

---

##### `actionGetReadSetMetadata`<sup>Required</sup> <a name="actionGetReadSetMetadata" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReadSetMetadata"></a>

```typescript
public readonly actionGetReadSetMetadata: string;
```

- *Type:* string

[Read] omics:GetReadSetMetadata.

---

##### `actionGetReference`<sup>Required</sup> <a name="actionGetReference" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReference"></a>

```typescript
public readonly actionGetReference: string;
```

- *Type:* string

[Read] omics:GetReference.

---

##### `actionGetReferenceImportJob`<sup>Required</sup> <a name="actionGetReferenceImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReferenceImportJob"></a>

```typescript
public readonly actionGetReferenceImportJob: string;
```

- *Type:* string

[Read] omics:GetReferenceImportJob.

---

##### `actionGetReferenceMetadata`<sup>Required</sup> <a name="actionGetReferenceMetadata" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReferenceMetadata"></a>

```typescript
public readonly actionGetReferenceMetadata: string;
```

- *Type:* string

[Read] omics:GetReferenceMetadata.

---

##### `actionGetReferenceStore`<sup>Required</sup> <a name="actionGetReferenceStore" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetReferenceStore"></a>

```typescript
public readonly actionGetReferenceStore: string;
```

- *Type:* string

[Read] omics:GetReferenceStore.

---

##### `actionGetRun`<sup>Required</sup> <a name="actionGetRun" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetRun"></a>

```typescript
public readonly actionGetRun: string;
```

- *Type:* string

[Read] omics:GetRun.

---

##### `actionGetRunCache`<sup>Required</sup> <a name="actionGetRunCache" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetRunCache"></a>

```typescript
public readonly actionGetRunCache: string;
```

- *Type:* string

[Read] omics:GetRunCache.

---

##### `actionGetRunGroup`<sup>Required</sup> <a name="actionGetRunGroup" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetRunGroup"></a>

```typescript
public readonly actionGetRunGroup: string;
```

- *Type:* string

[Read] omics:GetRunGroup.

---

##### `actionGetRunTask`<sup>Required</sup> <a name="actionGetRunTask" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetRunTask"></a>

```typescript
public readonly actionGetRunTask: string;
```

- *Type:* string

[Read] omics:GetRunTask.

---

##### `actionGetS3AccessPolicy`<sup>Required</sup> <a name="actionGetS3AccessPolicy" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetS3AccessPolicy"></a>

```typescript
public readonly actionGetS3AccessPolicy: string;
```

- *Type:* string

[Read] omics:GetS3AccessPolicy.

---

##### `actionGetSequenceStore`<sup>Required</sup> <a name="actionGetSequenceStore" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetSequenceStore"></a>

```typescript
public readonly actionGetSequenceStore: string;
```

- *Type:* string

[Read] omics:GetSequenceStore.

---

##### `actionGetShare`<sup>Required</sup> <a name="actionGetShare" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetShare"></a>

```typescript
public readonly actionGetShare: string;
```

- *Type:* string

[Read] omics:GetShare.

---

##### `actionGetVariantImportJob`<sup>Required</sup> <a name="actionGetVariantImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetVariantImportJob"></a>

```typescript
public readonly actionGetVariantImportJob: string;
```

- *Type:* string

[Read] omics:GetVariantImportJob.

---

##### `actionGetVariantStore`<sup>Required</sup> <a name="actionGetVariantStore" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetVariantStore"></a>

```typescript
public readonly actionGetVariantStore: string;
```

- *Type:* string

[Read] omics:GetVariantStore.

---

##### `actionGetWorkflow`<sup>Required</sup> <a name="actionGetWorkflow" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetWorkflow"></a>

```typescript
public readonly actionGetWorkflow: string;
```

- *Type:* string

[Read] omics:GetWorkflow.

---

##### `actionGetWorkflowVersion`<sup>Required</sup> <a name="actionGetWorkflowVersion" id="@cdk_utils/iam.omics.OmicsActions.property.actionGetWorkflowVersion"></a>

```typescript
public readonly actionGetWorkflowVersion: string;
```

- *Type:* string

[Read] omics:GetWorkflowVersion.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.omics.OmicsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.omics.OmicsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.omics.OmicsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.omics.OmicsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.omics.OmicsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteReadSet`<sup>Required</sup> <a name="BatchDeleteReadSet" id="@cdk_utils/iam.omics.OmicsActions.property.BatchDeleteReadSet"></a>

```typescript
public readonly BatchDeleteReadSet: string;
```

- *Type:* string

[Write] omics:BatchDeleteReadSet.

---

##### `CancelAnnotationImportJob`<sup>Required</sup> <a name="CancelAnnotationImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.CancelAnnotationImportJob"></a>

```typescript
public readonly CancelAnnotationImportJob: string;
```

- *Type:* string

[Write] omics:CancelAnnotationImportJob.

---

##### `CancelRun`<sup>Required</sup> <a name="CancelRun" id="@cdk_utils/iam.omics.OmicsActions.property.CancelRun"></a>

```typescript
public readonly CancelRun: string;
```

- *Type:* string

[Write] omics:CancelRun.

---

##### `CancelRunBatch`<sup>Required</sup> <a name="CancelRunBatch" id="@cdk_utils/iam.omics.OmicsActions.property.CancelRunBatch"></a>

```typescript
public readonly CancelRunBatch: string;
```

- *Type:* string

[Write] omics:CancelRunBatch.

---

##### `CancelVariantImportJob`<sup>Required</sup> <a name="CancelVariantImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.CancelVariantImportJob"></a>

```typescript
public readonly CancelVariantImportJob: string;
```

- *Type:* string

[Write] omics:CancelVariantImportJob.

---

##### `CompleteMultipartReadSetUpload`<sup>Required</sup> <a name="CompleteMultipartReadSetUpload" id="@cdk_utils/iam.omics.OmicsActions.property.CompleteMultipartReadSetUpload"></a>

```typescript
public readonly CompleteMultipartReadSetUpload: string;
```

- *Type:* string

[Write] omics:CompleteMultipartReadSetUpload.

---

##### `CreateAnnotationStore`<sup>Required</sup> <a name="CreateAnnotationStore" id="@cdk_utils/iam.omics.OmicsActions.property.CreateAnnotationStore"></a>

```typescript
public readonly CreateAnnotationStore: string;
```

- *Type:* string

[Write] omics:CreateAnnotationStore.

---

##### `CreateAnnotationStoreVersion`<sup>Required</sup> <a name="CreateAnnotationStoreVersion" id="@cdk_utils/iam.omics.OmicsActions.property.CreateAnnotationStoreVersion"></a>

```typescript
public readonly CreateAnnotationStoreVersion: string;
```

- *Type:* string

[Write] omics:CreateAnnotationStoreVersion.

---

##### `CreateConfiguration`<sup>Required</sup> <a name="CreateConfiguration" id="@cdk_utils/iam.omics.OmicsActions.property.CreateConfiguration"></a>

```typescript
public readonly CreateConfiguration: string;
```

- *Type:* string

[Write] omics:CreateConfiguration.

---

##### `CreateMultipartReadSetUpload`<sup>Required</sup> <a name="CreateMultipartReadSetUpload" id="@cdk_utils/iam.omics.OmicsActions.property.CreateMultipartReadSetUpload"></a>

```typescript
public readonly CreateMultipartReadSetUpload: string;
```

- *Type:* string

[Write] omics:CreateMultipartReadSetUpload.

---

##### `CreateReferenceStore`<sup>Required</sup> <a name="CreateReferenceStore" id="@cdk_utils/iam.omics.OmicsActions.property.CreateReferenceStore"></a>

```typescript
public readonly CreateReferenceStore: string;
```

- *Type:* string

[Write] omics:CreateReferenceStore.

---

##### `CreateRunCache`<sup>Required</sup> <a name="CreateRunCache" id="@cdk_utils/iam.omics.OmicsActions.property.CreateRunCache"></a>

```typescript
public readonly CreateRunCache: string;
```

- *Type:* string

[Write] omics:CreateRunCache.

---

##### `CreateRunGroup`<sup>Required</sup> <a name="CreateRunGroup" id="@cdk_utils/iam.omics.OmicsActions.property.CreateRunGroup"></a>

```typescript
public readonly CreateRunGroup: string;
```

- *Type:* string

[Write] omics:CreateRunGroup.

---

##### `CreateSequenceStore`<sup>Required</sup> <a name="CreateSequenceStore" id="@cdk_utils/iam.omics.OmicsActions.property.CreateSequenceStore"></a>

```typescript
public readonly CreateSequenceStore: string;
```

- *Type:* string

[Write] omics:CreateSequenceStore.

---

##### `CreateShare`<sup>Required</sup> <a name="CreateShare" id="@cdk_utils/iam.omics.OmicsActions.property.CreateShare"></a>

```typescript
public readonly CreateShare: string;
```

- *Type:* string

[Write] omics:CreateShare.

---

##### `CreateVariantStore`<sup>Required</sup> <a name="CreateVariantStore" id="@cdk_utils/iam.omics.OmicsActions.property.CreateVariantStore"></a>

```typescript
public readonly CreateVariantStore: string;
```

- *Type:* string

[Write] omics:CreateVariantStore.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.omics.OmicsActions.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string;
```

- *Type:* string

[Write] omics:CreateWorkflow.

---

##### `CreateWorkflowVersion`<sup>Required</sup> <a name="CreateWorkflowVersion" id="@cdk_utils/iam.omics.OmicsActions.property.CreateWorkflowVersion"></a>

```typescript
public readonly CreateWorkflowVersion: string;
```

- *Type:* string

[Write] omics:CreateWorkflowVersion.

---

##### `DeleteAnnotationStore`<sup>Required</sup> <a name="DeleteAnnotationStore" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteAnnotationStore"></a>

```typescript
public readonly DeleteAnnotationStore: string;
```

- *Type:* string

[Write] omics:DeleteAnnotationStore.

---

##### `DeleteAnnotationStoreVersions`<sup>Required</sup> <a name="DeleteAnnotationStoreVersions" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteAnnotationStoreVersions"></a>

```typescript
public readonly DeleteAnnotationStoreVersions: string;
```

- *Type:* string

[Write] omics:DeleteAnnotationStoreVersions.

---

##### `DeleteBatch`<sup>Required</sup> <a name="DeleteBatch" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteBatch"></a>

```typescript
public readonly DeleteBatch: string;
```

- *Type:* string

[Write] omics:DeleteBatch.

---

##### `DeleteConfiguration`<sup>Required</sup> <a name="DeleteConfiguration" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteConfiguration"></a>

```typescript
public readonly DeleteConfiguration: string;
```

- *Type:* string

[Write] omics:DeleteConfiguration.

---

##### `DeleteReference`<sup>Required</sup> <a name="DeleteReference" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteReference"></a>

```typescript
public readonly DeleteReference: string;
```

- *Type:* string

[Write] omics:DeleteReference.

---

##### `DeleteReferenceStore`<sup>Required</sup> <a name="DeleteReferenceStore" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteReferenceStore"></a>

```typescript
public readonly DeleteReferenceStore: string;
```

- *Type:* string

[Write] omics:DeleteReferenceStore.

---

##### `DeleteRun`<sup>Required</sup> <a name="DeleteRun" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteRun"></a>

```typescript
public readonly DeleteRun: string;
```

- *Type:* string

[Write] omics:DeleteRun.

---

##### `DeleteRunBatch`<sup>Required</sup> <a name="DeleteRunBatch" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteRunBatch"></a>

```typescript
public readonly DeleteRunBatch: string;
```

- *Type:* string

[Write] omics:DeleteRunBatch.

---

##### `DeleteRunCache`<sup>Required</sup> <a name="DeleteRunCache" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteRunCache"></a>

```typescript
public readonly DeleteRunCache: string;
```

- *Type:* string

[Write] omics:DeleteRunCache.

---

##### `DeleteRunGroup`<sup>Required</sup> <a name="DeleteRunGroup" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteRunGroup"></a>

```typescript
public readonly DeleteRunGroup: string;
```

- *Type:* string

[Write] omics:DeleteRunGroup.

---

##### `DeleteS3AccessPolicy`<sup>Required</sup> <a name="DeleteS3AccessPolicy" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteS3AccessPolicy"></a>

```typescript
public readonly DeleteS3AccessPolicy: string;
```

- *Type:* string

[Write] omics:DeleteS3AccessPolicy.

---

##### `DeleteSequenceStore`<sup>Required</sup> <a name="DeleteSequenceStore" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteSequenceStore"></a>

```typescript
public readonly DeleteSequenceStore: string;
```

- *Type:* string

[Write] omics:DeleteSequenceStore.

---

##### `DeleteShare`<sup>Required</sup> <a name="DeleteShare" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteShare"></a>

```typescript
public readonly DeleteShare: string;
```

- *Type:* string

[Write] omics:DeleteShare.

---

##### `DeleteVariantStore`<sup>Required</sup> <a name="DeleteVariantStore" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteVariantStore"></a>

```typescript
public readonly DeleteVariantStore: string;
```

- *Type:* string

[Write] omics:DeleteVariantStore.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string;
```

- *Type:* string

[Write] omics:DeleteWorkflow.

---

##### `DeleteWorkflowVersion`<sup>Required</sup> <a name="DeleteWorkflowVersion" id="@cdk_utils/iam.omics.OmicsActions.property.DeleteWorkflowVersion"></a>

```typescript
public readonly DeleteWorkflowVersion: string;
```

- *Type:* string

[Write] omics:DeleteWorkflowVersion.

---

##### `ListAnnotationImportJobs`<sup>Required</sup> <a name="ListAnnotationImportJobs" id="@cdk_utils/iam.omics.OmicsActions.property.ListAnnotationImportJobs"></a>

```typescript
public readonly ListAnnotationImportJobs: string;
```

- *Type:* string

[List] omics:ListAnnotationImportJobs.

---

##### `ListAnnotationStores`<sup>Required</sup> <a name="ListAnnotationStores" id="@cdk_utils/iam.omics.OmicsActions.property.ListAnnotationStores"></a>

```typescript
public readonly ListAnnotationStores: string;
```

- *Type:* string

[List] omics:ListAnnotationStores.

---

##### `ListAnnotationStoreVersions`<sup>Required</sup> <a name="ListAnnotationStoreVersions" id="@cdk_utils/iam.omics.OmicsActions.property.ListAnnotationStoreVersions"></a>

```typescript
public readonly ListAnnotationStoreVersions: string;
```

- *Type:* string

[List] omics:ListAnnotationStoreVersions.

---

##### `ListBatch`<sup>Required</sup> <a name="ListBatch" id="@cdk_utils/iam.omics.OmicsActions.property.ListBatch"></a>

```typescript
public readonly ListBatch: string;
```

- *Type:* string

[List] omics:ListBatch.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.omics.OmicsActions.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string;
```

- *Type:* string

[List] omics:ListConfigurations.

---

##### `ListMultipartReadSetUploads`<sup>Required</sup> <a name="ListMultipartReadSetUploads" id="@cdk_utils/iam.omics.OmicsActions.property.ListMultipartReadSetUploads"></a>

```typescript
public readonly ListMultipartReadSetUploads: string;
```

- *Type:* string

[List] omics:ListMultipartReadSetUploads.

---

##### `ListReadSetActivationJobs`<sup>Required</sup> <a name="ListReadSetActivationJobs" id="@cdk_utils/iam.omics.OmicsActions.property.ListReadSetActivationJobs"></a>

```typescript
public readonly ListReadSetActivationJobs: string;
```

- *Type:* string

[List] omics:ListReadSetActivationJobs.

---

##### `ListReadSetExportJobs`<sup>Required</sup> <a name="ListReadSetExportJobs" id="@cdk_utils/iam.omics.OmicsActions.property.ListReadSetExportJobs"></a>

```typescript
public readonly ListReadSetExportJobs: string;
```

- *Type:* string

[List] omics:ListReadSetExportJobs.

---

##### `ListReadSetImportJobs`<sup>Required</sup> <a name="ListReadSetImportJobs" id="@cdk_utils/iam.omics.OmicsActions.property.ListReadSetImportJobs"></a>

```typescript
public readonly ListReadSetImportJobs: string;
```

- *Type:* string

[List] omics:ListReadSetImportJobs.

---

##### `ListReadSets`<sup>Required</sup> <a name="ListReadSets" id="@cdk_utils/iam.omics.OmicsActions.property.ListReadSets"></a>

```typescript
public readonly ListReadSets: string;
```

- *Type:* string

[List] omics:ListReadSets.

---

##### `ListReadSetUploadParts`<sup>Required</sup> <a name="ListReadSetUploadParts" id="@cdk_utils/iam.omics.OmicsActions.property.ListReadSetUploadParts"></a>

```typescript
public readonly ListReadSetUploadParts: string;
```

- *Type:* string

[List] omics:ListReadSetUploadParts.

---

##### `ListReferenceImportJobs`<sup>Required</sup> <a name="ListReferenceImportJobs" id="@cdk_utils/iam.omics.OmicsActions.property.ListReferenceImportJobs"></a>

```typescript
public readonly ListReferenceImportJobs: string;
```

- *Type:* string

[List] omics:ListReferenceImportJobs.

---

##### `ListReferences`<sup>Required</sup> <a name="ListReferences" id="@cdk_utils/iam.omics.OmicsActions.property.ListReferences"></a>

```typescript
public readonly ListReferences: string;
```

- *Type:* string

[List] omics:ListReferences.

---

##### `ListReferenceStores`<sup>Required</sup> <a name="ListReferenceStores" id="@cdk_utils/iam.omics.OmicsActions.property.ListReferenceStores"></a>

```typescript
public readonly ListReferenceStores: string;
```

- *Type:* string

[List] omics:ListReferenceStores.

---

##### `ListRunCaches`<sup>Required</sup> <a name="ListRunCaches" id="@cdk_utils/iam.omics.OmicsActions.property.ListRunCaches"></a>

```typescript
public readonly ListRunCaches: string;
```

- *Type:* string

[List] omics:ListRunCaches.

---

##### `ListRunGroups`<sup>Required</sup> <a name="ListRunGroups" id="@cdk_utils/iam.omics.OmicsActions.property.ListRunGroups"></a>

```typescript
public readonly ListRunGroups: string;
```

- *Type:* string

[List] omics:ListRunGroups.

---

##### `ListRuns`<sup>Required</sup> <a name="ListRuns" id="@cdk_utils/iam.omics.OmicsActions.property.ListRuns"></a>

```typescript
public readonly ListRuns: string;
```

- *Type:* string

[List] omics:ListRuns.

---

##### `ListRunsInBatch`<sup>Required</sup> <a name="ListRunsInBatch" id="@cdk_utils/iam.omics.OmicsActions.property.ListRunsInBatch"></a>

```typescript
public readonly ListRunsInBatch: string;
```

- *Type:* string

[List] omics:ListRunsInBatch.

---

##### `ListRunTasks`<sup>Required</sup> <a name="ListRunTasks" id="@cdk_utils/iam.omics.OmicsActions.property.ListRunTasks"></a>

```typescript
public readonly ListRunTasks: string;
```

- *Type:* string

[List] omics:ListRunTasks.

---

##### `ListSequenceStores`<sup>Required</sup> <a name="ListSequenceStores" id="@cdk_utils/iam.omics.OmicsActions.property.ListSequenceStores"></a>

```typescript
public readonly ListSequenceStores: string;
```

- *Type:* string

[List] omics:ListSequenceStores.

---

##### `ListShares`<sup>Required</sup> <a name="ListShares" id="@cdk_utils/iam.omics.OmicsActions.property.ListShares"></a>

```typescript
public readonly ListShares: string;
```

- *Type:* string

[List] omics:ListShares.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.omics.OmicsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] omics:ListTagsForResource.

---

##### `ListVariantImportJobs`<sup>Required</sup> <a name="ListVariantImportJobs" id="@cdk_utils/iam.omics.OmicsActions.property.ListVariantImportJobs"></a>

```typescript
public readonly ListVariantImportJobs: string;
```

- *Type:* string

[List] omics:ListVariantImportJobs.

---

##### `ListVariantStores`<sup>Required</sup> <a name="ListVariantStores" id="@cdk_utils/iam.omics.OmicsActions.property.ListVariantStores"></a>

```typescript
public readonly ListVariantStores: string;
```

- *Type:* string

[List] omics:ListVariantStores.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.omics.OmicsActions.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string;
```

- *Type:* string

[List] omics:ListWorkflows.

---

##### `ListWorkflowVersions`<sup>Required</sup> <a name="ListWorkflowVersions" id="@cdk_utils/iam.omics.OmicsActions.property.ListWorkflowVersions"></a>

```typescript
public readonly ListWorkflowVersions: string;
```

- *Type:* string

[List] omics:ListWorkflowVersions.

---

##### `PutS3AccessPolicy`<sup>Required</sup> <a name="PutS3AccessPolicy" id="@cdk_utils/iam.omics.OmicsActions.property.PutS3AccessPolicy"></a>

```typescript
public readonly PutS3AccessPolicy: string;
```

- *Type:* string

[Write] omics:PutS3AccessPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.omics.OmicsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAnnotationImportJob`<sup>Required</sup> <a name="StartAnnotationImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.StartAnnotationImportJob"></a>

```typescript
public readonly StartAnnotationImportJob: string;
```

- *Type:* string

[Write] omics:StartAnnotationImportJob.

---

##### `StartReadSetActivationJob`<sup>Required</sup> <a name="StartReadSetActivationJob" id="@cdk_utils/iam.omics.OmicsActions.property.StartReadSetActivationJob"></a>

```typescript
public readonly StartReadSetActivationJob: string;
```

- *Type:* string

[Write] omics:StartReadSetActivationJob.

---

##### `StartReadSetExportJob`<sup>Required</sup> <a name="StartReadSetExportJob" id="@cdk_utils/iam.omics.OmicsActions.property.StartReadSetExportJob"></a>

```typescript
public readonly StartReadSetExportJob: string;
```

- *Type:* string

[Write] omics:StartReadSetExportJob.

---

##### `StartReadSetImportJob`<sup>Required</sup> <a name="StartReadSetImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.StartReadSetImportJob"></a>

```typescript
public readonly StartReadSetImportJob: string;
```

- *Type:* string

[Write] omics:StartReadSetImportJob.

---

##### `StartReferenceImportJob`<sup>Required</sup> <a name="StartReferenceImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.StartReferenceImportJob"></a>

```typescript
public readonly StartReferenceImportJob: string;
```

- *Type:* string

[Write] omics:StartReferenceImportJob.

---

##### `StartRun`<sup>Required</sup> <a name="StartRun" id="@cdk_utils/iam.omics.OmicsActions.property.StartRun"></a>

```typescript
public readonly StartRun: string;
```

- *Type:* string

[Write] omics:StartRun.

---

##### `StartRunBatch`<sup>Required</sup> <a name="StartRunBatch" id="@cdk_utils/iam.omics.OmicsActions.property.StartRunBatch"></a>

```typescript
public readonly StartRunBatch: string;
```

- *Type:* string

[Write] omics:StartRunBatch.

---

##### `StartVariantImportJob`<sup>Required</sup> <a name="StartVariantImportJob" id="@cdk_utils/iam.omics.OmicsActions.property.StartVariantImportJob"></a>

```typescript
public readonly StartVariantImportJob: string;
```

- *Type:* string

[Write] omics:StartVariantImportJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.omics.OmicsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] omics:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.omics.OmicsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] omics:UntagResource.

---

##### `UpdateAnnotationStore`<sup>Required</sup> <a name="UpdateAnnotationStore" id="@cdk_utils/iam.omics.OmicsActions.property.UpdateAnnotationStore"></a>

```typescript
public readonly UpdateAnnotationStore: string;
```

- *Type:* string

[Write] omics:UpdateAnnotationStore.

---

##### `UpdateAnnotationStoreVersion`<sup>Required</sup> <a name="UpdateAnnotationStoreVersion" id="@cdk_utils/iam.omics.OmicsActions.property.UpdateAnnotationStoreVersion"></a>

```typescript
public readonly UpdateAnnotationStoreVersion: string;
```

- *Type:* string

[Write] omics:UpdateAnnotationStoreVersion.

---

##### `UpdateRunCache`<sup>Required</sup> <a name="UpdateRunCache" id="@cdk_utils/iam.omics.OmicsActions.property.UpdateRunCache"></a>

```typescript
public readonly UpdateRunCache: string;
```

- *Type:* string

[Write] omics:UpdateRunCache.

---

##### `UpdateRunGroup`<sup>Required</sup> <a name="UpdateRunGroup" id="@cdk_utils/iam.omics.OmicsActions.property.UpdateRunGroup"></a>

```typescript
public readonly UpdateRunGroup: string;
```

- *Type:* string

[Write] omics:UpdateRunGroup.

---

##### `UpdateSequenceStore`<sup>Required</sup> <a name="UpdateSequenceStore" id="@cdk_utils/iam.omics.OmicsActions.property.UpdateSequenceStore"></a>

```typescript
public readonly UpdateSequenceStore: string;
```

- *Type:* string

[Write] omics:UpdateSequenceStore.

---

##### `UpdateVariantStore`<sup>Required</sup> <a name="UpdateVariantStore" id="@cdk_utils/iam.omics.OmicsActions.property.UpdateVariantStore"></a>

```typescript
public readonly UpdateVariantStore: string;
```

- *Type:* string

[Write] omics:UpdateVariantStore.

---

##### `UpdateWorkflow`<sup>Required</sup> <a name="UpdateWorkflow" id="@cdk_utils/iam.omics.OmicsActions.property.UpdateWorkflow"></a>

```typescript
public readonly UpdateWorkflow: string;
```

- *Type:* string

[Write] omics:UpdateWorkflow.

---

##### `UpdateWorkflowVersion`<sup>Required</sup> <a name="UpdateWorkflowVersion" id="@cdk_utils/iam.omics.OmicsActions.property.UpdateWorkflowVersion"></a>

```typescript
public readonly UpdateWorkflowVersion: string;
```

- *Type:* string

[Write] omics:UpdateWorkflowVersion.

---

##### `UploadReadSetPart`<sup>Required</sup> <a name="UploadReadSetPart" id="@cdk_utils/iam.omics.OmicsActions.property.UploadReadSetPart"></a>

```typescript
public readonly UploadReadSetPart: string;
```

- *Type:* string

[Write] omics:UploadReadSetPart.

---

### OmicsConditions <a name="OmicsConditions" id="@cdk_utils/iam.omics.OmicsConditions"></a>

Condition key constants and builders for omics.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.omics.OmicsConditions.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

new omics.OmicsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.omics.OmicsConditions.requestTag"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.omics.OmicsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.omics.OmicsConditions.resourceTag"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.omics.OmicsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.omics.OmicsConditions.tagKeys"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.omics.OmicsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateAnnotationStoreConditionKeys">CreateAnnotationStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnnotationStore action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateAnnotationStoreVersionConditionKeys">CreateAnnotationStoreVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnnotationStoreVersion action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateConfigurationConditionKeys">CreateConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfiguration action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateReferenceStoreConditionKeys">CreateReferenceStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReferenceStore action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateRunCacheConditionKeys">CreateRunCacheConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRunCache action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateRunGroupConditionKeys">CreateRunGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRunGroup action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateSequenceStoreConditionKeys">CreateSequenceStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSequenceStore action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateVariantStoreConditionKeys">CreateVariantStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVariantStore action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateWorkflowConditionKeys">CreateWorkflowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkflow action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.CreateWorkflowVersionConditionKeys">CreateWorkflowVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkflowVersion action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.StartRunBatchConditionKeys">StartRunBatchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartRunBatch action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.StartRunConditionKeys">StartRunConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartRun action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.omics.OmicsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.omics.OmicsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.omics.OmicsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.omics.OmicsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAnnotationStoreConditionKeys`<sup>Required</sup> <a name="CreateAnnotationStoreConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateAnnotationStoreConditionKeys"></a>

```typescript
public readonly CreateAnnotationStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnnotationStore action.

---

##### `CreateAnnotationStoreVersionConditionKeys`<sup>Required</sup> <a name="CreateAnnotationStoreVersionConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateAnnotationStoreVersionConditionKeys"></a>

```typescript
public readonly CreateAnnotationStoreVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnnotationStoreVersion action.

---

##### `CreateConfigurationConditionKeys`<sup>Required</sup> <a name="CreateConfigurationConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateConfigurationConditionKeys"></a>

```typescript
public readonly CreateConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfiguration action.

---

##### `CreateReferenceStoreConditionKeys`<sup>Required</sup> <a name="CreateReferenceStoreConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateReferenceStoreConditionKeys"></a>

```typescript
public readonly CreateReferenceStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReferenceStore action.

---

##### `CreateRunCacheConditionKeys`<sup>Required</sup> <a name="CreateRunCacheConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateRunCacheConditionKeys"></a>

```typescript
public readonly CreateRunCacheConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRunCache action.

---

##### `CreateRunGroupConditionKeys`<sup>Required</sup> <a name="CreateRunGroupConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateRunGroupConditionKeys"></a>

```typescript
public readonly CreateRunGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRunGroup action.

---

##### `CreateSequenceStoreConditionKeys`<sup>Required</sup> <a name="CreateSequenceStoreConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateSequenceStoreConditionKeys"></a>

```typescript
public readonly CreateSequenceStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSequenceStore action.

---

##### `CreateVariantStoreConditionKeys`<sup>Required</sup> <a name="CreateVariantStoreConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateVariantStoreConditionKeys"></a>

```typescript
public readonly CreateVariantStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVariantStore action.

---

##### `CreateWorkflowConditionKeys`<sup>Required</sup> <a name="CreateWorkflowConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateWorkflowConditionKeys"></a>

```typescript
public readonly CreateWorkflowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkflow action.

---

##### `CreateWorkflowVersionConditionKeys`<sup>Required</sup> <a name="CreateWorkflowVersionConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.CreateWorkflowVersionConditionKeys"></a>

```typescript
public readonly CreateWorkflowVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkflowVersion action.

---

##### `StartRunBatchConditionKeys`<sup>Required</sup> <a name="StartRunBatchConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.StartRunBatchConditionKeys"></a>

```typescript
public readonly StartRunBatchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartRunBatch action.

---

##### `StartRunConditionKeys`<sup>Required</sup> <a name="StartRunConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.StartRunConditionKeys"></a>

```typescript
public readonly StartRunConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartRun action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.omics.OmicsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### OmicsOperations <a name="OmicsOperations" id="@cdk_utils/iam.omics.OmicsOperations"></a>

API operation to required IAM actions mapping for omics.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.omics.OmicsOperations.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

new omics.OmicsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.AbortMultipartReadSetUpload">AbortMultipartReadSetUpload</a></code> | <code>string[]</code> | IAM actions required for the AbortMultipartReadSetUpload API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.AcceptShare">AcceptShare</a></code> | <code>string[]</code> | IAM actions required for the AcceptShare API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.BatchDeleteReadSet">BatchDeleteReadSet</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteReadSet API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CancelAnnotationImportJob">CancelAnnotationImportJob</a></code> | <code>string[]</code> | IAM actions required for the CancelAnnotationImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CancelRun">CancelRun</a></code> | <code>string[]</code> | IAM actions required for the CancelRun API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CancelRunBatch">CancelRunBatch</a></code> | <code>string[]</code> | IAM actions required for the CancelRunBatch API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CancelVariantImportJob">CancelVariantImportJob</a></code> | <code>string[]</code> | IAM actions required for the CancelVariantImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CompleteMultipartReadSetUpload">CompleteMultipartReadSetUpload</a></code> | <code>string[]</code> | IAM actions required for the CompleteMultipartReadSetUpload API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateAnnotationStore">CreateAnnotationStore</a></code> | <code>string[]</code> | IAM actions required for the CreateAnnotationStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateAnnotationStoreVersion">CreateAnnotationStoreVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateAnnotationStoreVersion API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateConfiguration">CreateConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateConfiguration API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateMultipartReadSetUpload">CreateMultipartReadSetUpload</a></code> | <code>string[]</code> | IAM actions required for the CreateMultipartReadSetUpload API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateReferenceStore">CreateReferenceStore</a></code> | <code>string[]</code> | IAM actions required for the CreateReferenceStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateRunCache">CreateRunCache</a></code> | <code>string[]</code> | IAM actions required for the CreateRunCache API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateRunGroup">CreateRunGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateRunGroup API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateSequenceStore">CreateSequenceStore</a></code> | <code>string[]</code> | IAM actions required for the CreateSequenceStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateShare">CreateShare</a></code> | <code>string[]</code> | IAM actions required for the CreateShare API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateVariantStore">CreateVariantStore</a></code> | <code>string[]</code> | IAM actions required for the CreateVariantStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateWorkflow">CreateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflow API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.CreateWorkflowVersion">CreateWorkflowVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkflowVersion API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteAnnotationStore">DeleteAnnotationStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnnotationStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteAnnotationStoreVersions">DeleteAnnotationStoreVersions</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnnotationStoreVersions API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteBatch">DeleteBatch</a></code> | <code>string[]</code> | IAM actions required for the DeleteBatch API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteConfiguration">DeleteConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfiguration API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteReference">DeleteReference</a></code> | <code>string[]</code> | IAM actions required for the DeleteReference API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteReferenceStore">DeleteReferenceStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteReferenceStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteRun">DeleteRun</a></code> | <code>string[]</code> | IAM actions required for the DeleteRun API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteRunBatch">DeleteRunBatch</a></code> | <code>string[]</code> | IAM actions required for the DeleteRunBatch API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteRunCache">DeleteRunCache</a></code> | <code>string[]</code> | IAM actions required for the DeleteRunCache API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteRunGroup">DeleteRunGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteRunGroup API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteS3AccessPolicy">DeleteS3AccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteS3AccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteSequenceStore">DeleteSequenceStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteSequenceStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteShare">DeleteShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteShare API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteVariantStore">DeleteVariantStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteVariantStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteWorkflow">DeleteWorkflow</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflow API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.DeleteWorkflowVersion">DeleteWorkflowVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkflowVersion API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListAnnotationImportJobs">ListAnnotationImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListAnnotationImportJobs API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListAnnotationStores">ListAnnotationStores</a></code> | <code>string[]</code> | IAM actions required for the ListAnnotationStores API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListAnnotationStoreVersions">ListAnnotationStoreVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAnnotationStoreVersions API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListBatch">ListBatch</a></code> | <code>string[]</code> | IAM actions required for the ListBatch API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListConfigurations">ListConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurations API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListMultipartReadSetUploads">ListMultipartReadSetUploads</a></code> | <code>string[]</code> | IAM actions required for the ListMultipartReadSetUploads API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListReadSetActivationJobs">ListReadSetActivationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListReadSetActivationJobs API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListReadSetExportJobs">ListReadSetExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListReadSetExportJobs API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListReadSetImportJobs">ListReadSetImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListReadSetImportJobs API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListReadSets">ListReadSets</a></code> | <code>string[]</code> | IAM actions required for the ListReadSets API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListReadSetUploadParts">ListReadSetUploadParts</a></code> | <code>string[]</code> | IAM actions required for the ListReadSetUploadParts API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListReferenceImportJobs">ListReferenceImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListReferenceImportJobs API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListReferences">ListReferences</a></code> | <code>string[]</code> | IAM actions required for the ListReferences API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListReferenceStores">ListReferenceStores</a></code> | <code>string[]</code> | IAM actions required for the ListReferenceStores API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListRunCaches">ListRunCaches</a></code> | <code>string[]</code> | IAM actions required for the ListRunCaches API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListRunGroups">ListRunGroups</a></code> | <code>string[]</code> | IAM actions required for the ListRunGroups API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListRuns">ListRuns</a></code> | <code>string[]</code> | IAM actions required for the ListRuns API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListRunsInBatch">ListRunsInBatch</a></code> | <code>string[]</code> | IAM actions required for the ListRunsInBatch API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListRunTasks">ListRunTasks</a></code> | <code>string[]</code> | IAM actions required for the ListRunTasks API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListSequenceStores">ListSequenceStores</a></code> | <code>string[]</code> | IAM actions required for the ListSequenceStores API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListShares">ListShares</a></code> | <code>string[]</code> | IAM actions required for the ListShares API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListVariantImportJobs">ListVariantImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListVariantImportJobs API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListVariantStores">ListVariantStores</a></code> | <code>string[]</code> | IAM actions required for the ListVariantStores API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListWorkflows">ListWorkflows</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflows API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.ListWorkflowVersions">ListWorkflowVersions</a></code> | <code>string[]</code> | IAM actions required for the ListWorkflowVersions API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetAnnotationImportJob">opGetAnnotationImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetAnnotationImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetAnnotationStore">opGetAnnotationStore</a></code> | <code>string[]</code> | IAM actions required for the GetAnnotationStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetAnnotationStoreVersion">opGetAnnotationStoreVersion</a></code> | <code>string[]</code> | IAM actions required for the GetAnnotationStoreVersion API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetBatch">opGetBatch</a></code> | <code>string[]</code> | IAM actions required for the GetBatch API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetConfiguration">opGetConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetConfiguration API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSet">opGetReadSet</a></code> | <code>string[]</code> | IAM actions required for the GetReadSet API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSetActivationJob">opGetReadSetActivationJob</a></code> | <code>string[]</code> | IAM actions required for the GetReadSetActivationJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSetExportJob">opGetReadSetExportJob</a></code> | <code>string[]</code> | IAM actions required for the GetReadSetExportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSetImportJob">opGetReadSetImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetReadSetImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSetMetadata">opGetReadSetMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetReadSetMetadata API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReference">opGetReference</a></code> | <code>string[]</code> | IAM actions required for the GetReference API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReferenceImportJob">opGetReferenceImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetReferenceImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReferenceMetadata">opGetReferenceMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetReferenceMetadata API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetReferenceStore">opGetReferenceStore</a></code> | <code>string[]</code> | IAM actions required for the GetReferenceStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetRun">opGetRun</a></code> | <code>string[]</code> | IAM actions required for the GetRun API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetRunCache">opGetRunCache</a></code> | <code>string[]</code> | IAM actions required for the GetRunCache API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetRunGroup">opGetRunGroup</a></code> | <code>string[]</code> | IAM actions required for the GetRunGroup API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetRunTask">opGetRunTask</a></code> | <code>string[]</code> | IAM actions required for the GetRunTask API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetS3AccessPolicy">opGetS3AccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetS3AccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetSequenceStore">opGetSequenceStore</a></code> | <code>string[]</code> | IAM actions required for the GetSequenceStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetShare">opGetShare</a></code> | <code>string[]</code> | IAM actions required for the GetShare API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetVariantImportJob">opGetVariantImportJob</a></code> | <code>string[]</code> | IAM actions required for the GetVariantImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetVariantStore">opGetVariantStore</a></code> | <code>string[]</code> | IAM actions required for the GetVariantStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetWorkflow">opGetWorkflow</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflow API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.opGetWorkflowVersion">opGetWorkflowVersion</a></code> | <code>string[]</code> | IAM actions required for the GetWorkflowVersion API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.PutS3AccessPolicy">PutS3AccessPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutS3AccessPolicy API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.StartAnnotationImportJob">StartAnnotationImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartAnnotationImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.StartReadSetActivationJob">StartReadSetActivationJob</a></code> | <code>string[]</code> | IAM actions required for the StartReadSetActivationJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.StartReadSetExportJob">StartReadSetExportJob</a></code> | <code>string[]</code> | IAM actions required for the StartReadSetExportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.StartReadSetImportJob">StartReadSetImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartReadSetImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.StartReferenceImportJob">StartReferenceImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartReferenceImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.StartRun">StartRun</a></code> | <code>string[]</code> | IAM actions required for the StartRun API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.StartRunBatch">StartRunBatch</a></code> | <code>string[]</code> | IAM actions required for the StartRunBatch API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.StartVariantImportJob">StartVariantImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartVariantImportJob API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UpdateAnnotationStore">UpdateAnnotationStore</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnnotationStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UpdateAnnotationStoreVersion">UpdateAnnotationStoreVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnnotationStoreVersion API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UpdateRunCache">UpdateRunCache</a></code> | <code>string[]</code> | IAM actions required for the UpdateRunCache API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UpdateRunGroup">UpdateRunGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateRunGroup API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UpdateSequenceStore">UpdateSequenceStore</a></code> | <code>string[]</code> | IAM actions required for the UpdateSequenceStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UpdateVariantStore">UpdateVariantStore</a></code> | <code>string[]</code> | IAM actions required for the UpdateVariantStore API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UpdateWorkflow">UpdateWorkflow</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkflow API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UpdateWorkflowVersion">UpdateWorkflowVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkflowVersion API call. |
| <code><a href="#@cdk_utils/iam.omics.OmicsOperations.property.UploadReadSetPart">UploadReadSetPart</a></code> | <code>string[]</code> | IAM actions required for the UploadReadSetPart API call. |

---

##### `AbortMultipartReadSetUpload`<sup>Required</sup> <a name="AbortMultipartReadSetUpload" id="@cdk_utils/iam.omics.OmicsOperations.property.AbortMultipartReadSetUpload"></a>

```typescript
public readonly AbortMultipartReadSetUpload: string[];
```

- *Type:* string[]

IAM actions required for the AbortMultipartReadSetUpload API call.

---

##### `AcceptShare`<sup>Required</sup> <a name="AcceptShare" id="@cdk_utils/iam.omics.OmicsOperations.property.AcceptShare"></a>

```typescript
public readonly AcceptShare: string[];
```

- *Type:* string[]

IAM actions required for the AcceptShare API call.

---

##### `BatchDeleteReadSet`<sup>Required</sup> <a name="BatchDeleteReadSet" id="@cdk_utils/iam.omics.OmicsOperations.property.BatchDeleteReadSet"></a>

```typescript
public readonly BatchDeleteReadSet: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteReadSet API call.

---

##### `CancelAnnotationImportJob`<sup>Required</sup> <a name="CancelAnnotationImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.CancelAnnotationImportJob"></a>

```typescript
public readonly CancelAnnotationImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelAnnotationImportJob API call.

---

##### `CancelRun`<sup>Required</sup> <a name="CancelRun" id="@cdk_utils/iam.omics.OmicsOperations.property.CancelRun"></a>

```typescript
public readonly CancelRun: string[];
```

- *Type:* string[]

IAM actions required for the CancelRun API call.

---

##### `CancelRunBatch`<sup>Required</sup> <a name="CancelRunBatch" id="@cdk_utils/iam.omics.OmicsOperations.property.CancelRunBatch"></a>

```typescript
public readonly CancelRunBatch: string[];
```

- *Type:* string[]

IAM actions required for the CancelRunBatch API call.

---

##### `CancelVariantImportJob`<sup>Required</sup> <a name="CancelVariantImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.CancelVariantImportJob"></a>

```typescript
public readonly CancelVariantImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelVariantImportJob API call.

---

##### `CompleteMultipartReadSetUpload`<sup>Required</sup> <a name="CompleteMultipartReadSetUpload" id="@cdk_utils/iam.omics.OmicsOperations.property.CompleteMultipartReadSetUpload"></a>

```typescript
public readonly CompleteMultipartReadSetUpload: string[];
```

- *Type:* string[]

IAM actions required for the CompleteMultipartReadSetUpload API call.

---

##### `CreateAnnotationStore`<sup>Required</sup> <a name="CreateAnnotationStore" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateAnnotationStore"></a>

```typescript
public readonly CreateAnnotationStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnnotationStore API call.

---

##### `CreateAnnotationStoreVersion`<sup>Required</sup> <a name="CreateAnnotationStoreVersion" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateAnnotationStoreVersion"></a>

```typescript
public readonly CreateAnnotationStoreVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateAnnotationStoreVersion API call.

---

##### `CreateConfiguration`<sup>Required</sup> <a name="CreateConfiguration" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateConfiguration"></a>

```typescript
public readonly CreateConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfiguration API call.

---

##### `CreateMultipartReadSetUpload`<sup>Required</sup> <a name="CreateMultipartReadSetUpload" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateMultipartReadSetUpload"></a>

```typescript
public readonly CreateMultipartReadSetUpload: string[];
```

- *Type:* string[]

IAM actions required for the CreateMultipartReadSetUpload API call.

---

##### `CreateReferenceStore`<sup>Required</sup> <a name="CreateReferenceStore" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateReferenceStore"></a>

```typescript
public readonly CreateReferenceStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateReferenceStore API call.

---

##### `CreateRunCache`<sup>Required</sup> <a name="CreateRunCache" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateRunCache"></a>

```typescript
public readonly CreateRunCache: string[];
```

- *Type:* string[]

IAM actions required for the CreateRunCache API call.

---

##### `CreateRunGroup`<sup>Required</sup> <a name="CreateRunGroup" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateRunGroup"></a>

```typescript
public readonly CreateRunGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateRunGroup API call.

---

##### `CreateSequenceStore`<sup>Required</sup> <a name="CreateSequenceStore" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateSequenceStore"></a>

```typescript
public readonly CreateSequenceStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateSequenceStore API call.

---

##### `CreateShare`<sup>Required</sup> <a name="CreateShare" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateShare"></a>

```typescript
public readonly CreateShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateShare API call.

---

##### `CreateVariantStore`<sup>Required</sup> <a name="CreateVariantStore" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateVariantStore"></a>

```typescript
public readonly CreateVariantStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateVariantStore API call.

---

##### `CreateWorkflow`<sup>Required</sup> <a name="CreateWorkflow" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateWorkflow"></a>

```typescript
public readonly CreateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflow API call.

---

##### `CreateWorkflowVersion`<sup>Required</sup> <a name="CreateWorkflowVersion" id="@cdk_utils/iam.omics.OmicsOperations.property.CreateWorkflowVersion"></a>

```typescript
public readonly CreateWorkflowVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkflowVersion API call.

---

##### `DeleteAnnotationStore`<sup>Required</sup> <a name="DeleteAnnotationStore" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteAnnotationStore"></a>

```typescript
public readonly DeleteAnnotationStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnnotationStore API call.

---

##### `DeleteAnnotationStoreVersions`<sup>Required</sup> <a name="DeleteAnnotationStoreVersions" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteAnnotationStoreVersions"></a>

```typescript
public readonly DeleteAnnotationStoreVersions: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnnotationStoreVersions API call.

---

##### `DeleteBatch`<sup>Required</sup> <a name="DeleteBatch" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteBatch"></a>

```typescript
public readonly DeleteBatch: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBatch API call.

---

##### `DeleteConfiguration`<sup>Required</sup> <a name="DeleteConfiguration" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteConfiguration"></a>

```typescript
public readonly DeleteConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfiguration API call.

---

##### `DeleteReference`<sup>Required</sup> <a name="DeleteReference" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteReference"></a>

```typescript
public readonly DeleteReference: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReference API call.

---

##### `DeleteReferenceStore`<sup>Required</sup> <a name="DeleteReferenceStore" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteReferenceStore"></a>

```typescript
public readonly DeleteReferenceStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReferenceStore API call.

---

##### `DeleteRun`<sup>Required</sup> <a name="DeleteRun" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteRun"></a>

```typescript
public readonly DeleteRun: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRun API call.

---

##### `DeleteRunBatch`<sup>Required</sup> <a name="DeleteRunBatch" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteRunBatch"></a>

```typescript
public readonly DeleteRunBatch: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRunBatch API call.

---

##### `DeleteRunCache`<sup>Required</sup> <a name="DeleteRunCache" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteRunCache"></a>

```typescript
public readonly DeleteRunCache: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRunCache API call.

---

##### `DeleteRunGroup`<sup>Required</sup> <a name="DeleteRunGroup" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteRunGroup"></a>

```typescript
public readonly DeleteRunGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRunGroup API call.

---

##### `DeleteS3AccessPolicy`<sup>Required</sup> <a name="DeleteS3AccessPolicy" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteS3AccessPolicy"></a>

```typescript
public readonly DeleteS3AccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteS3AccessPolicy API call.

---

##### `DeleteSequenceStore`<sup>Required</sup> <a name="DeleteSequenceStore" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteSequenceStore"></a>

```typescript
public readonly DeleteSequenceStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSequenceStore API call.

---

##### `DeleteShare`<sup>Required</sup> <a name="DeleteShare" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteShare"></a>

```typescript
public readonly DeleteShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteShare API call.

---

##### `DeleteVariantStore`<sup>Required</sup> <a name="DeleteVariantStore" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteVariantStore"></a>

```typescript
public readonly DeleteVariantStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVariantStore API call.

---

##### `DeleteWorkflow`<sup>Required</sup> <a name="DeleteWorkflow" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteWorkflow"></a>

```typescript
public readonly DeleteWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflow API call.

---

##### `DeleteWorkflowVersion`<sup>Required</sup> <a name="DeleteWorkflowVersion" id="@cdk_utils/iam.omics.OmicsOperations.property.DeleteWorkflowVersion"></a>

```typescript
public readonly DeleteWorkflowVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkflowVersion API call.

---

##### `ListAnnotationImportJobs`<sup>Required</sup> <a name="ListAnnotationImportJobs" id="@cdk_utils/iam.omics.OmicsOperations.property.ListAnnotationImportJobs"></a>

```typescript
public readonly ListAnnotationImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListAnnotationImportJobs API call.

---

##### `ListAnnotationStores`<sup>Required</sup> <a name="ListAnnotationStores" id="@cdk_utils/iam.omics.OmicsOperations.property.ListAnnotationStores"></a>

```typescript
public readonly ListAnnotationStores: string[];
```

- *Type:* string[]

IAM actions required for the ListAnnotationStores API call.

---

##### `ListAnnotationStoreVersions`<sup>Required</sup> <a name="ListAnnotationStoreVersions" id="@cdk_utils/iam.omics.OmicsOperations.property.ListAnnotationStoreVersions"></a>

```typescript
public readonly ListAnnotationStoreVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAnnotationStoreVersions API call.

---

##### `ListBatch`<sup>Required</sup> <a name="ListBatch" id="@cdk_utils/iam.omics.OmicsOperations.property.ListBatch"></a>

```typescript
public readonly ListBatch: string[];
```

- *Type:* string[]

IAM actions required for the ListBatch API call.

---

##### `ListConfigurations`<sup>Required</sup> <a name="ListConfigurations" id="@cdk_utils/iam.omics.OmicsOperations.property.ListConfigurations"></a>

```typescript
public readonly ListConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurations API call.

---

##### `ListMultipartReadSetUploads`<sup>Required</sup> <a name="ListMultipartReadSetUploads" id="@cdk_utils/iam.omics.OmicsOperations.property.ListMultipartReadSetUploads"></a>

```typescript
public readonly ListMultipartReadSetUploads: string[];
```

- *Type:* string[]

IAM actions required for the ListMultipartReadSetUploads API call.

---

##### `ListReadSetActivationJobs`<sup>Required</sup> <a name="ListReadSetActivationJobs" id="@cdk_utils/iam.omics.OmicsOperations.property.ListReadSetActivationJobs"></a>

```typescript
public readonly ListReadSetActivationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListReadSetActivationJobs API call.

---

##### `ListReadSetExportJobs`<sup>Required</sup> <a name="ListReadSetExportJobs" id="@cdk_utils/iam.omics.OmicsOperations.property.ListReadSetExportJobs"></a>

```typescript
public readonly ListReadSetExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListReadSetExportJobs API call.

---

##### `ListReadSetImportJobs`<sup>Required</sup> <a name="ListReadSetImportJobs" id="@cdk_utils/iam.omics.OmicsOperations.property.ListReadSetImportJobs"></a>

```typescript
public readonly ListReadSetImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListReadSetImportJobs API call.

---

##### `ListReadSets`<sup>Required</sup> <a name="ListReadSets" id="@cdk_utils/iam.omics.OmicsOperations.property.ListReadSets"></a>

```typescript
public readonly ListReadSets: string[];
```

- *Type:* string[]

IAM actions required for the ListReadSets API call.

---

##### `ListReadSetUploadParts`<sup>Required</sup> <a name="ListReadSetUploadParts" id="@cdk_utils/iam.omics.OmicsOperations.property.ListReadSetUploadParts"></a>

```typescript
public readonly ListReadSetUploadParts: string[];
```

- *Type:* string[]

IAM actions required for the ListReadSetUploadParts API call.

---

##### `ListReferenceImportJobs`<sup>Required</sup> <a name="ListReferenceImportJobs" id="@cdk_utils/iam.omics.OmicsOperations.property.ListReferenceImportJobs"></a>

```typescript
public readonly ListReferenceImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListReferenceImportJobs API call.

---

##### `ListReferences`<sup>Required</sup> <a name="ListReferences" id="@cdk_utils/iam.omics.OmicsOperations.property.ListReferences"></a>

```typescript
public readonly ListReferences: string[];
```

- *Type:* string[]

IAM actions required for the ListReferences API call.

---

##### `ListReferenceStores`<sup>Required</sup> <a name="ListReferenceStores" id="@cdk_utils/iam.omics.OmicsOperations.property.ListReferenceStores"></a>

```typescript
public readonly ListReferenceStores: string[];
```

- *Type:* string[]

IAM actions required for the ListReferenceStores API call.

---

##### `ListRunCaches`<sup>Required</sup> <a name="ListRunCaches" id="@cdk_utils/iam.omics.OmicsOperations.property.ListRunCaches"></a>

```typescript
public readonly ListRunCaches: string[];
```

- *Type:* string[]

IAM actions required for the ListRunCaches API call.

---

##### `ListRunGroups`<sup>Required</sup> <a name="ListRunGroups" id="@cdk_utils/iam.omics.OmicsOperations.property.ListRunGroups"></a>

```typescript
public readonly ListRunGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListRunGroups API call.

---

##### `ListRuns`<sup>Required</sup> <a name="ListRuns" id="@cdk_utils/iam.omics.OmicsOperations.property.ListRuns"></a>

```typescript
public readonly ListRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListRuns API call.

---

##### `ListRunsInBatch`<sup>Required</sup> <a name="ListRunsInBatch" id="@cdk_utils/iam.omics.OmicsOperations.property.ListRunsInBatch"></a>

```typescript
public readonly ListRunsInBatch: string[];
```

- *Type:* string[]

IAM actions required for the ListRunsInBatch API call.

---

##### `ListRunTasks`<sup>Required</sup> <a name="ListRunTasks" id="@cdk_utils/iam.omics.OmicsOperations.property.ListRunTasks"></a>

```typescript
public readonly ListRunTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListRunTasks API call.

---

##### `ListSequenceStores`<sup>Required</sup> <a name="ListSequenceStores" id="@cdk_utils/iam.omics.OmicsOperations.property.ListSequenceStores"></a>

```typescript
public readonly ListSequenceStores: string[];
```

- *Type:* string[]

IAM actions required for the ListSequenceStores API call.

---

##### `ListShares`<sup>Required</sup> <a name="ListShares" id="@cdk_utils/iam.omics.OmicsOperations.property.ListShares"></a>

```typescript
public readonly ListShares: string[];
```

- *Type:* string[]

IAM actions required for the ListShares API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.omics.OmicsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVariantImportJobs`<sup>Required</sup> <a name="ListVariantImportJobs" id="@cdk_utils/iam.omics.OmicsOperations.property.ListVariantImportJobs"></a>

```typescript
public readonly ListVariantImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListVariantImportJobs API call.

---

##### `ListVariantStores`<sup>Required</sup> <a name="ListVariantStores" id="@cdk_utils/iam.omics.OmicsOperations.property.ListVariantStores"></a>

```typescript
public readonly ListVariantStores: string[];
```

- *Type:* string[]

IAM actions required for the ListVariantStores API call.

---

##### `ListWorkflows`<sup>Required</sup> <a name="ListWorkflows" id="@cdk_utils/iam.omics.OmicsOperations.property.ListWorkflows"></a>

```typescript
public readonly ListWorkflows: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflows API call.

---

##### `ListWorkflowVersions`<sup>Required</sup> <a name="ListWorkflowVersions" id="@cdk_utils/iam.omics.OmicsOperations.property.ListWorkflowVersions"></a>

```typescript
public readonly ListWorkflowVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkflowVersions API call.

---

##### `opGetAnnotationImportJob`<sup>Required</sup> <a name="opGetAnnotationImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetAnnotationImportJob"></a>

```typescript
public readonly opGetAnnotationImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetAnnotationImportJob API call.

---

##### `opGetAnnotationStore`<sup>Required</sup> <a name="opGetAnnotationStore" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetAnnotationStore"></a>

```typescript
public readonly opGetAnnotationStore: string[];
```

- *Type:* string[]

IAM actions required for the GetAnnotationStore API call.

---

##### `opGetAnnotationStoreVersion`<sup>Required</sup> <a name="opGetAnnotationStoreVersion" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetAnnotationStoreVersion"></a>

```typescript
public readonly opGetAnnotationStoreVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetAnnotationStoreVersion API call.

---

##### `opGetBatch`<sup>Required</sup> <a name="opGetBatch" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetBatch"></a>

```typescript
public readonly opGetBatch: string[];
```

- *Type:* string[]

IAM actions required for the GetBatch API call.

---

##### `opGetConfiguration`<sup>Required</sup> <a name="opGetConfiguration" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetConfiguration"></a>

```typescript
public readonly opGetConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetConfiguration API call.

---

##### `opGetReadSet`<sup>Required</sup> <a name="opGetReadSet" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSet"></a>

```typescript
public readonly opGetReadSet: string[];
```

- *Type:* string[]

IAM actions required for the GetReadSet API call.

---

##### `opGetReadSetActivationJob`<sup>Required</sup> <a name="opGetReadSetActivationJob" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSetActivationJob"></a>

```typescript
public readonly opGetReadSetActivationJob: string[];
```

- *Type:* string[]

IAM actions required for the GetReadSetActivationJob API call.

---

##### `opGetReadSetExportJob`<sup>Required</sup> <a name="opGetReadSetExportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSetExportJob"></a>

```typescript
public readonly opGetReadSetExportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetReadSetExportJob API call.

---

##### `opGetReadSetImportJob`<sup>Required</sup> <a name="opGetReadSetImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSetImportJob"></a>

```typescript
public readonly opGetReadSetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetReadSetImportJob API call.

---

##### `opGetReadSetMetadata`<sup>Required</sup> <a name="opGetReadSetMetadata" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReadSetMetadata"></a>

```typescript
public readonly opGetReadSetMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetReadSetMetadata API call.

---

##### `opGetReference`<sup>Required</sup> <a name="opGetReference" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReference"></a>

```typescript
public readonly opGetReference: string[];
```

- *Type:* string[]

IAM actions required for the GetReference API call.

---

##### `opGetReferenceImportJob`<sup>Required</sup> <a name="opGetReferenceImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReferenceImportJob"></a>

```typescript
public readonly opGetReferenceImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetReferenceImportJob API call.

---

##### `opGetReferenceMetadata`<sup>Required</sup> <a name="opGetReferenceMetadata" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReferenceMetadata"></a>

```typescript
public readonly opGetReferenceMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetReferenceMetadata API call.

---

##### `opGetReferenceStore`<sup>Required</sup> <a name="opGetReferenceStore" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetReferenceStore"></a>

```typescript
public readonly opGetReferenceStore: string[];
```

- *Type:* string[]

IAM actions required for the GetReferenceStore API call.

---

##### `opGetRun`<sup>Required</sup> <a name="opGetRun" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetRun"></a>

```typescript
public readonly opGetRun: string[];
```

- *Type:* string[]

IAM actions required for the GetRun API call.

---

##### `opGetRunCache`<sup>Required</sup> <a name="opGetRunCache" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetRunCache"></a>

```typescript
public readonly opGetRunCache: string[];
```

- *Type:* string[]

IAM actions required for the GetRunCache API call.

---

##### `opGetRunGroup`<sup>Required</sup> <a name="opGetRunGroup" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetRunGroup"></a>

```typescript
public readonly opGetRunGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetRunGroup API call.

---

##### `opGetRunTask`<sup>Required</sup> <a name="opGetRunTask" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetRunTask"></a>

```typescript
public readonly opGetRunTask: string[];
```

- *Type:* string[]

IAM actions required for the GetRunTask API call.

---

##### `opGetS3AccessPolicy`<sup>Required</sup> <a name="opGetS3AccessPolicy" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetS3AccessPolicy"></a>

```typescript
public readonly opGetS3AccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetS3AccessPolicy API call.

---

##### `opGetSequenceStore`<sup>Required</sup> <a name="opGetSequenceStore" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetSequenceStore"></a>

```typescript
public readonly opGetSequenceStore: string[];
```

- *Type:* string[]

IAM actions required for the GetSequenceStore API call.

---

##### `opGetShare`<sup>Required</sup> <a name="opGetShare" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetShare"></a>

```typescript
public readonly opGetShare: string[];
```

- *Type:* string[]

IAM actions required for the GetShare API call.

---

##### `opGetVariantImportJob`<sup>Required</sup> <a name="opGetVariantImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetVariantImportJob"></a>

```typescript
public readonly opGetVariantImportJob: string[];
```

- *Type:* string[]

IAM actions required for the GetVariantImportJob API call.

---

##### `opGetVariantStore`<sup>Required</sup> <a name="opGetVariantStore" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetVariantStore"></a>

```typescript
public readonly opGetVariantStore: string[];
```

- *Type:* string[]

IAM actions required for the GetVariantStore API call.

---

##### `opGetWorkflow`<sup>Required</sup> <a name="opGetWorkflow" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetWorkflow"></a>

```typescript
public readonly opGetWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflow API call.

---

##### `opGetWorkflowVersion`<sup>Required</sup> <a name="opGetWorkflowVersion" id="@cdk_utils/iam.omics.OmicsOperations.property.opGetWorkflowVersion"></a>

```typescript
public readonly opGetWorkflowVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkflowVersion API call.

---

##### `PutS3AccessPolicy`<sup>Required</sup> <a name="PutS3AccessPolicy" id="@cdk_utils/iam.omics.OmicsOperations.property.PutS3AccessPolicy"></a>

```typescript
public readonly PutS3AccessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutS3AccessPolicy API call.

---

##### `StartAnnotationImportJob`<sup>Required</sup> <a name="StartAnnotationImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.StartAnnotationImportJob"></a>

```typescript
public readonly StartAnnotationImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartAnnotationImportJob API call.

---

##### `StartReadSetActivationJob`<sup>Required</sup> <a name="StartReadSetActivationJob" id="@cdk_utils/iam.omics.OmicsOperations.property.StartReadSetActivationJob"></a>

```typescript
public readonly StartReadSetActivationJob: string[];
```

- *Type:* string[]

IAM actions required for the StartReadSetActivationJob API call.

---

##### `StartReadSetExportJob`<sup>Required</sup> <a name="StartReadSetExportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.StartReadSetExportJob"></a>

```typescript
public readonly StartReadSetExportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartReadSetExportJob API call.

---

##### `StartReadSetImportJob`<sup>Required</sup> <a name="StartReadSetImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.StartReadSetImportJob"></a>

```typescript
public readonly StartReadSetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartReadSetImportJob API call.

---

##### `StartReferenceImportJob`<sup>Required</sup> <a name="StartReferenceImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.StartReferenceImportJob"></a>

```typescript
public readonly StartReferenceImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartReferenceImportJob API call.

---

##### `StartRun`<sup>Required</sup> <a name="StartRun" id="@cdk_utils/iam.omics.OmicsOperations.property.StartRun"></a>

```typescript
public readonly StartRun: string[];
```

- *Type:* string[]

IAM actions required for the StartRun API call.

---

##### `StartRunBatch`<sup>Required</sup> <a name="StartRunBatch" id="@cdk_utils/iam.omics.OmicsOperations.property.StartRunBatch"></a>

```typescript
public readonly StartRunBatch: string[];
```

- *Type:* string[]

IAM actions required for the StartRunBatch API call.

---

##### `StartVariantImportJob`<sup>Required</sup> <a name="StartVariantImportJob" id="@cdk_utils/iam.omics.OmicsOperations.property.StartVariantImportJob"></a>

```typescript
public readonly StartVariantImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartVariantImportJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.omics.OmicsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.omics.OmicsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAnnotationStore`<sup>Required</sup> <a name="UpdateAnnotationStore" id="@cdk_utils/iam.omics.OmicsOperations.property.UpdateAnnotationStore"></a>

```typescript
public readonly UpdateAnnotationStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnnotationStore API call.

---

##### `UpdateAnnotationStoreVersion`<sup>Required</sup> <a name="UpdateAnnotationStoreVersion" id="@cdk_utils/iam.omics.OmicsOperations.property.UpdateAnnotationStoreVersion"></a>

```typescript
public readonly UpdateAnnotationStoreVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnnotationStoreVersion API call.

---

##### `UpdateRunCache`<sup>Required</sup> <a name="UpdateRunCache" id="@cdk_utils/iam.omics.OmicsOperations.property.UpdateRunCache"></a>

```typescript
public readonly UpdateRunCache: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRunCache API call.

---

##### `UpdateRunGroup`<sup>Required</sup> <a name="UpdateRunGroup" id="@cdk_utils/iam.omics.OmicsOperations.property.UpdateRunGroup"></a>

```typescript
public readonly UpdateRunGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRunGroup API call.

---

##### `UpdateSequenceStore`<sup>Required</sup> <a name="UpdateSequenceStore" id="@cdk_utils/iam.omics.OmicsOperations.property.UpdateSequenceStore"></a>

```typescript
public readonly UpdateSequenceStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSequenceStore API call.

---

##### `UpdateVariantStore`<sup>Required</sup> <a name="UpdateVariantStore" id="@cdk_utils/iam.omics.OmicsOperations.property.UpdateVariantStore"></a>

```typescript
public readonly UpdateVariantStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVariantStore API call.

---

##### `UpdateWorkflow`<sup>Required</sup> <a name="UpdateWorkflow" id="@cdk_utils/iam.omics.OmicsOperations.property.UpdateWorkflow"></a>

```typescript
public readonly UpdateWorkflow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkflow API call.

---

##### `UpdateWorkflowVersion`<sup>Required</sup> <a name="UpdateWorkflowVersion" id="@cdk_utils/iam.omics.OmicsOperations.property.UpdateWorkflowVersion"></a>

```typescript
public readonly UpdateWorkflowVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkflowVersion API call.

---

##### `UploadReadSetPart`<sup>Required</sup> <a name="UploadReadSetPart" id="@cdk_utils/iam.omics.OmicsOperations.property.UploadReadSetPart"></a>

```typescript
public readonly UploadReadSetPart: string[];
```

- *Type:* string[]

IAM actions required for the UploadReadSetPart API call.

---

### OmicsResources <a name="OmicsResources" id="@cdk_utils/iam.omics.OmicsResources"></a>

ARN builders, validators, and parsers for omics resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.omics.OmicsResources.Initializer"></a>

```typescript
import { omics } from '@cdk_utils/iam'

new omics.OmicsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.annotationStore">annotationStore</a></code> | Builds an ARN for the AnnotationStore resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.annotationStoreVersion">annotationStoreVersion</a></code> | Builds an ARN for the AnnotationStoreVersion resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.configuration">configuration</a></code> | Builds an ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidAnnotationStoreArn">isValidAnnotationStoreArn</a></code> | Validates whether a string is a valid ARN for the AnnotationStore resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidAnnotationStoreVersionArn">isValidAnnotationStoreVersionArn</a></code> | Validates whether a string is a valid ARN for the AnnotationStoreVersion resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidConfigurationArn">isValidConfigurationArn</a></code> | Validates whether a string is a valid ARN for the configuration resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidReadSetArn">isValidReadSetArn</a></code> | Validates whether a string is a valid ARN for the readSet resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidReferenceArn">isValidReferenceArn</a></code> | Validates whether a string is a valid ARN for the reference resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidReferenceStoreArn">isValidReferenceStoreArn</a></code> | Validates whether a string is a valid ARN for the referenceStore resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidRunArn">isValidRunArn</a></code> | Validates whether a string is a valid ARN for the run resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidRunBatchArn">isValidRunBatchArn</a></code> | Validates whether a string is a valid ARN for the runBatch resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidRunCacheArn">isValidRunCacheArn</a></code> | Validates whether a string is a valid ARN for the runCache resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidRunGroupArn">isValidRunGroupArn</a></code> | Validates whether a string is a valid ARN for the runGroup resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidSequenceStoreArn">isValidSequenceStoreArn</a></code> | Validates whether a string is a valid ARN for the sequenceStore resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidTaskResourceArn">isValidTaskResourceArn</a></code> | Validates whether a string is a valid ARN for the TaskResource resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidVariantStoreArn">isValidVariantStoreArn</a></code> | Validates whether a string is a valid ARN for the VariantStore resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidWorkflowArn">isValidWorkflowArn</a></code> | Validates whether a string is a valid ARN for the workflow resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.isValidWorkflowVersionArn">isValidWorkflowVersionArn</a></code> | Validates whether a string is a valid ARN for the WorkflowVersion resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseAnnotationStoreArn">parseAnnotationStoreArn</a></code> | Parses a AnnotationStore ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseAnnotationStoreVersionArn">parseAnnotationStoreVersionArn</a></code> | Parses a AnnotationStoreVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseConfigurationArn">parseConfigurationArn</a></code> | Parses a configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseReadSetArn">parseReadSetArn</a></code> | Parses a readSet ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseReferenceArn">parseReferenceArn</a></code> | Parses a reference ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseReferenceStoreArn">parseReferenceStoreArn</a></code> | Parses a referenceStore ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseRunArn">parseRunArn</a></code> | Parses a run ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseRunBatchArn">parseRunBatchArn</a></code> | Parses a runBatch ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseRunCacheArn">parseRunCacheArn</a></code> | Parses a runCache ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseRunGroupArn">parseRunGroupArn</a></code> | Parses a runGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseSequenceStoreArn">parseSequenceStoreArn</a></code> | Parses a sequenceStore ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseTaskResourceArn">parseTaskResourceArn</a></code> | Parses a TaskResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseVariantStoreArn">parseVariantStoreArn</a></code> | Parses a VariantStore ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseWorkflowArn">parseWorkflowArn</a></code> | Parses a workflow ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.parseWorkflowVersionArn">parseWorkflowVersionArn</a></code> | Parses a WorkflowVersion ARN into its components. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.readSet">readSet</a></code> | Builds an ARN for the readSet resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.reference">reference</a></code> | Builds an ARN for the reference resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.referenceStore">referenceStore</a></code> | Builds an ARN for the referenceStore resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.run">run</a></code> | Builds an ARN for the run resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.runBatch">runBatch</a></code> | Builds an ARN for the runBatch resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.runCache">runCache</a></code> | Builds an ARN for the runCache resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.runGroup">runGroup</a></code> | Builds an ARN for the runGroup resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.sequenceStore">sequenceStore</a></code> | Builds an ARN for the sequenceStore resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.taskResource">taskResource</a></code> | Builds an ARN for the TaskResource resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.variantStore">variantStore</a></code> | Builds an ARN for the VariantStore resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.workflow">workflow</a></code> | Builds an ARN for the workflow resource. |
| <code><a href="#@cdk_utils/iam.omics.OmicsResources.workflowVersion">workflowVersion</a></code> | Builds an ARN for the WorkflowVersion resource. |

---

##### `annotationStore` <a name="annotationStore" id="@cdk_utils/iam.omics.OmicsResources.annotationStore"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.annotationStore(props: OmicsAnnotationStoreArnProps)
```

Builds an ARN for the AnnotationStore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.annotationStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreArnProps">OmicsAnnotationStoreArnProps</a>

---

##### `annotationStoreVersion` <a name="annotationStoreVersion" id="@cdk_utils/iam.omics.OmicsResources.annotationStoreVersion"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.annotationStoreVersion(props: OmicsAnnotationStoreVersionArnProps)
```

Builds an ARN for the AnnotationStoreVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.annotationStoreVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsAnnotationStoreVersionArnProps">OmicsAnnotationStoreVersionArnProps</a>

---

##### `configuration` <a name="configuration" id="@cdk_utils/iam.omics.OmicsResources.configuration"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.configuration(props: OmicsConfigurationArnProps)
```

Builds an ARN for the configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.configuration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsConfigurationArnProps">OmicsConfigurationArnProps</a>

---

##### `isValidAnnotationStoreArn` <a name="isValidAnnotationStoreArn" id="@cdk_utils/iam.omics.OmicsResources.isValidAnnotationStoreArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidAnnotationStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the AnnotationStore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidAnnotationStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAnnotationStoreVersionArn` <a name="isValidAnnotationStoreVersionArn" id="@cdk_utils/iam.omics.OmicsResources.isValidAnnotationStoreVersionArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidAnnotationStoreVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the AnnotationStoreVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidAnnotationStoreVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigurationArn` <a name="isValidConfigurationArn" id="@cdk_utils/iam.omics.OmicsResources.isValidConfigurationArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReadSetArn` <a name="isValidReadSetArn" id="@cdk_utils/iam.omics.OmicsResources.isValidReadSetArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidReadSetArn(arn: string)
```

Validates whether a string is a valid ARN for the readSet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidReadSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReferenceArn` <a name="isValidReferenceArn" id="@cdk_utils/iam.omics.OmicsResources.isValidReferenceArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidReferenceArn(arn: string)
```

Validates whether a string is a valid ARN for the reference resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidReferenceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReferenceStoreArn` <a name="isValidReferenceStoreArn" id="@cdk_utils/iam.omics.OmicsResources.isValidReferenceStoreArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidReferenceStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the referenceStore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidReferenceStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRunArn` <a name="isValidRunArn" id="@cdk_utils/iam.omics.OmicsResources.isValidRunArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidRunArn(arn: string)
```

Validates whether a string is a valid ARN for the run resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidRunArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRunBatchArn` <a name="isValidRunBatchArn" id="@cdk_utils/iam.omics.OmicsResources.isValidRunBatchArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidRunBatchArn(arn: string)
```

Validates whether a string is a valid ARN for the runBatch resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidRunBatchArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRunCacheArn` <a name="isValidRunCacheArn" id="@cdk_utils/iam.omics.OmicsResources.isValidRunCacheArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidRunCacheArn(arn: string)
```

Validates whether a string is a valid ARN for the runCache resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidRunCacheArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRunGroupArn` <a name="isValidRunGroupArn" id="@cdk_utils/iam.omics.OmicsResources.isValidRunGroupArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidRunGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the runGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidRunGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSequenceStoreArn` <a name="isValidSequenceStoreArn" id="@cdk_utils/iam.omics.OmicsResources.isValidSequenceStoreArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidSequenceStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the sequenceStore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidSequenceStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskResourceArn` <a name="isValidTaskResourceArn" id="@cdk_utils/iam.omics.OmicsResources.isValidTaskResourceArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidTaskResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the TaskResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidTaskResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVariantStoreArn` <a name="isValidVariantStoreArn" id="@cdk_utils/iam.omics.OmicsResources.isValidVariantStoreArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidVariantStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the VariantStore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidVariantStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowArn` <a name="isValidWorkflowArn" id="@cdk_utils/iam.omics.OmicsResources.isValidWorkflowArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidWorkflowArn(arn: string)
```

Validates whether a string is a valid ARN for the workflow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkflowVersionArn` <a name="isValidWorkflowVersionArn" id="@cdk_utils/iam.omics.OmicsResources.isValidWorkflowVersionArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.isValidWorkflowVersionArn(arn: string)
```

Validates whether a string is a valid ARN for the WorkflowVersion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.isValidWorkflowVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAnnotationStoreArn` <a name="parseAnnotationStoreArn" id="@cdk_utils/iam.omics.OmicsResources.parseAnnotationStoreArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseAnnotationStoreArn(arn: string)
```

Parses a AnnotationStore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseAnnotationStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAnnotationStoreVersionArn` <a name="parseAnnotationStoreVersionArn" id="@cdk_utils/iam.omics.OmicsResources.parseAnnotationStoreVersionArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseAnnotationStoreVersionArn(arn: string)
```

Parses a AnnotationStoreVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseAnnotationStoreVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigurationArn` <a name="parseConfigurationArn" id="@cdk_utils/iam.omics.OmicsResources.parseConfigurationArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseConfigurationArn(arn: string)
```

Parses a configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReadSetArn` <a name="parseReadSetArn" id="@cdk_utils/iam.omics.OmicsResources.parseReadSetArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseReadSetArn(arn: string)
```

Parses a readSet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseReadSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReferenceArn` <a name="parseReferenceArn" id="@cdk_utils/iam.omics.OmicsResources.parseReferenceArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseReferenceArn(arn: string)
```

Parses a reference ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseReferenceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReferenceStoreArn` <a name="parseReferenceStoreArn" id="@cdk_utils/iam.omics.OmicsResources.parseReferenceStoreArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseReferenceStoreArn(arn: string)
```

Parses a referenceStore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseReferenceStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRunArn` <a name="parseRunArn" id="@cdk_utils/iam.omics.OmicsResources.parseRunArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseRunArn(arn: string)
```

Parses a run ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseRunArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRunBatchArn` <a name="parseRunBatchArn" id="@cdk_utils/iam.omics.OmicsResources.parseRunBatchArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseRunBatchArn(arn: string)
```

Parses a runBatch ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseRunBatchArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRunCacheArn` <a name="parseRunCacheArn" id="@cdk_utils/iam.omics.OmicsResources.parseRunCacheArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseRunCacheArn(arn: string)
```

Parses a runCache ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseRunCacheArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRunGroupArn` <a name="parseRunGroupArn" id="@cdk_utils/iam.omics.OmicsResources.parseRunGroupArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseRunGroupArn(arn: string)
```

Parses a runGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseRunGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSequenceStoreArn` <a name="parseSequenceStoreArn" id="@cdk_utils/iam.omics.OmicsResources.parseSequenceStoreArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseSequenceStoreArn(arn: string)
```

Parses a sequenceStore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseSequenceStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskResourceArn` <a name="parseTaskResourceArn" id="@cdk_utils/iam.omics.OmicsResources.parseTaskResourceArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseTaskResourceArn(arn: string)
```

Parses a TaskResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseTaskResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVariantStoreArn` <a name="parseVariantStoreArn" id="@cdk_utils/iam.omics.OmicsResources.parseVariantStoreArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseVariantStoreArn(arn: string)
```

Parses a VariantStore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseVariantStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowArn` <a name="parseWorkflowArn" id="@cdk_utils/iam.omics.OmicsResources.parseWorkflowArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseWorkflowArn(arn: string)
```

Parses a workflow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseWorkflowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkflowVersionArn` <a name="parseWorkflowVersionArn" id="@cdk_utils/iam.omics.OmicsResources.parseWorkflowVersionArn"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.parseWorkflowVersionArn(arn: string)
```

Parses a WorkflowVersion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.omics.OmicsResources.parseWorkflowVersionArn.parameter.arn"></a>

- *Type:* string

---

##### `readSet` <a name="readSet" id="@cdk_utils/iam.omics.OmicsResources.readSet"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.readSet(props: OmicsReadSetArnProps)
```

Builds an ARN for the readSet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.readSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsReadSetArnProps">OmicsReadSetArnProps</a>

---

##### `reference` <a name="reference" id="@cdk_utils/iam.omics.OmicsResources.reference"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.reference(props: OmicsReferenceArnProps)
```

Builds an ARN for the reference resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.reference.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsReferenceArnProps">OmicsReferenceArnProps</a>

---

##### `referenceStore` <a name="referenceStore" id="@cdk_utils/iam.omics.OmicsResources.referenceStore"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.referenceStore(props: OmicsReferenceStoreArnProps)
```

Builds an ARN for the referenceStore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.referenceStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsReferenceStoreArnProps">OmicsReferenceStoreArnProps</a>

---

##### `run` <a name="run" id="@cdk_utils/iam.omics.OmicsResources.run"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.run(props: OmicsRunArnProps)
```

Builds an ARN for the run resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.run.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsRunArnProps">OmicsRunArnProps</a>

---

##### `runBatch` <a name="runBatch" id="@cdk_utils/iam.omics.OmicsResources.runBatch"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.runBatch(props: OmicsRunBatchArnProps)
```

Builds an ARN for the runBatch resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.runBatch.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsRunBatchArnProps">OmicsRunBatchArnProps</a>

---

##### `runCache` <a name="runCache" id="@cdk_utils/iam.omics.OmicsResources.runCache"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.runCache(props: OmicsRunCacheArnProps)
```

Builds an ARN for the runCache resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.runCache.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsRunCacheArnProps">OmicsRunCacheArnProps</a>

---

##### `runGroup` <a name="runGroup" id="@cdk_utils/iam.omics.OmicsResources.runGroup"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.runGroup(props: OmicsRunGroupArnProps)
```

Builds an ARN for the runGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.runGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsRunGroupArnProps">OmicsRunGroupArnProps</a>

---

##### `sequenceStore` <a name="sequenceStore" id="@cdk_utils/iam.omics.OmicsResources.sequenceStore"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.sequenceStore(props: OmicsSequenceStoreArnProps)
```

Builds an ARN for the sequenceStore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.sequenceStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsSequenceStoreArnProps">OmicsSequenceStoreArnProps</a>

---

##### `taskResource` <a name="taskResource" id="@cdk_utils/iam.omics.OmicsResources.taskResource"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.taskResource(props: OmicsTaskResourceArnProps)
```

Builds an ARN for the TaskResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.taskResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsTaskResourceArnProps">OmicsTaskResourceArnProps</a>

---

##### `variantStore` <a name="variantStore" id="@cdk_utils/iam.omics.OmicsResources.variantStore"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.variantStore(props: OmicsVariantStoreArnProps)
```

Builds an ARN for the VariantStore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.variantStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsVariantStoreArnProps">OmicsVariantStoreArnProps</a>

---

##### `workflow` <a name="workflow" id="@cdk_utils/iam.omics.OmicsResources.workflow"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.workflow(props: OmicsWorkflowArnProps)
```

Builds an ARN for the workflow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.workflow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsWorkflowArnProps">OmicsWorkflowArnProps</a>

---

##### `workflowVersion` <a name="workflowVersion" id="@cdk_utils/iam.omics.OmicsResources.workflowVersion"></a>

```typescript
import { omics } from '@cdk_utils/iam'

omics.OmicsResources.workflowVersion(props: OmicsWorkflowVersionArnProps)
```

Builds an ARN for the WorkflowVersion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.omics.OmicsResources.workflowVersion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.omics.OmicsWorkflowVersionArnProps">OmicsWorkflowVersionArnProps</a>

---




