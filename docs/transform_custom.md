# `transform_custom` Submodule <a name="`transform_custom` Submodule" id="@cdk_utils/iam.transform_custom"></a>


## Structs <a name="Structs" id="Structs"></a>

### TransformCustomAnalysisArnComponents <a name="TransformCustomAnalysisArnComponents" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents"></a>

Parsed components of a analysis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomAnalysisArnComponents: transform_custom.TransformCustomAnalysisArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.property.analysisId">analysisId</a></code> | <code>string</code> | The AnalysisId component. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.property.analysisId"></a>

```typescript
public readonly analysisId: string;
```

- *Type:* string

The AnalysisId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransformCustomAnalysisArnProps <a name="TransformCustomAnalysisArnProps" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps"></a>

Properties for building a analysis ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomAnalysisArnProps: transform_custom.TransformCustomAnalysisArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.property.analysisId">analysisId</a></code> | <code>string</code> | The AnalysisId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `analysisId`<sup>Required</sup> <a name="analysisId" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.property.analysisId"></a>

```typescript
public readonly analysisId: string;
```

- *Type:* string

The AnalysisId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransformCustomCampaignArnComponents <a name="TransformCustomCampaignArnComponents" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents"></a>

Parsed components of a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomCampaignArnComponents: transform_custom.TransformCustomCampaignArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransformCustomCampaignArnProps <a name="TransformCustomCampaignArnProps" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps"></a>

Properties for building a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomCampaignArnProps: transform_custom.TransformCustomCampaignArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransformCustomFindingArnComponents <a name="TransformCustomFindingArnComponents" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents"></a>

Parsed components of a finding ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomFindingArnComponents: transform_custom.TransformCustomFindingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.property.findingId">findingId</a></code> | <code>string</code> | The FindingId component. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `findingId`<sup>Required</sup> <a name="findingId" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.property.findingId"></a>

```typescript
public readonly findingId: string;
```

- *Type:* string

The FindingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransformCustomFindingArnProps <a name="TransformCustomFindingArnProps" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps"></a>

Properties for building a finding ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomFindingArnProps: transform_custom.TransformCustomFindingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.property.findingId">findingId</a></code> | <code>string</code> | The FindingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `findingId`<sup>Required</sup> <a name="findingId" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.property.findingId"></a>

```typescript
public readonly findingId: string;
```

- *Type:* string

The FindingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransformCustomKnowledgeItemArnComponents <a name="TransformCustomKnowledgeItemArnComponents" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents"></a>

Parsed components of a knowledge-item ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomKnowledgeItemArnComponents: transform_custom.TransformCustomKnowledgeItemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.transformationPackageName">transformationPackageName</a></code> | <code>string</code> | The TransformationPackageName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `transformationPackageName`<sup>Required</sup> <a name="transformationPackageName" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnComponents.property.transformationPackageName"></a>

```typescript
public readonly transformationPackageName: string;
```

- *Type:* string

The TransformationPackageName component.

---

### TransformCustomKnowledgeItemArnProps <a name="TransformCustomKnowledgeItemArnProps" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps"></a>

Properties for building a knowledge-item ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomKnowledgeItemArnProps: transform_custom.TransformCustomKnowledgeItemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.transformationPackageName">transformationPackageName</a></code> | <code>string</code> | The TransformationPackageName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `transformationPackageName`<sup>Required</sup> <a name="transformationPackageName" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.transformationPackageName"></a>

```typescript
public readonly transformationPackageName: string;
```

- *Type:* string

The TransformationPackageName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransformCustomPackageArnComponents <a name="TransformCustomPackageArnComponents" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents"></a>

Parsed components of a package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomPackageArnComponents: transform_custom.TransformCustomPackageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransformCustomPackageArnProps <a name="TransformCustomPackageArnProps" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps"></a>

Properties for building a package ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomPackageArnProps: transform_custom.TransformCustomPackageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransformCustomRemediationArnComponents <a name="TransformCustomRemediationArnComponents" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents"></a>

Parsed components of a remediation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomRemediationArnComponents: transform_custom.TransformCustomRemediationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.property.remediationId">remediationId</a></code> | <code>string</code> | The RemediationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `remediationId`<sup>Required</sup> <a name="remediationId" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnComponents.property.remediationId"></a>

```typescript
public readonly remediationId: string;
```

- *Type:* string

The RemediationId component.

---

### TransformCustomRemediationArnProps <a name="TransformCustomRemediationArnProps" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps"></a>

Properties for building a remediation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomRemediationArnProps: transform_custom.TransformCustomRemediationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.property.remediationId">remediationId</a></code> | <code>string</code> | The RemediationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `remediationId`<sup>Required</sup> <a name="remediationId" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.property.remediationId"></a>

```typescript
public readonly remediationId: string;
```

- *Type:* string

The RemediationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransformCustomRepositoryArnComponents <a name="TransformCustomRepositoryArnComponents" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents"></a>

Parsed components of a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomRepositoryArnComponents: transform_custom.TransformCustomRepositoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.property.repositoryId">repositoryId</a></code> | <code>string</code> | The RepositoryId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnComponents.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

The RepositoryId component.

---

### TransformCustomRepositoryArnProps <a name="TransformCustomRepositoryArnProps" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps"></a>

Properties for building a repository ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomRepositoryArnProps: transform_custom.TransformCustomRepositoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.property.repositoryId">repositoryId</a></code> | <code>string</code> | The RepositoryId component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

The RepositoryId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TransformCustomSourceArnComponents <a name="TransformCustomSourceArnComponents" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents"></a>

Parsed components of a source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomSourceArnComponents: transform_custom.TransformCustomSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TransformCustomSourceArnProps <a name="TransformCustomSourceArnProps" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps"></a>

Properties for building a source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

const transformCustomSourceArnProps: transform_custom.TransformCustomSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TransformCustomActions <a name="TransformCustomActions" id="@cdk_utils/iam.transform_custom.TransformCustomActions"></a>

IAM action constants for the transform-custom service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transform_custom.TransformCustomActions.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

new transform_custom.TransformCustomActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetAnalysis">actionGetAnalysis</a></code> | <code>string</code> | [Read] transform-custom:GetAnalysis. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetAnalysisArtifactDownloadUrl">actionGetAnalysisArtifactDownloadUrl</a></code> | <code>string</code> | [Read] transform-custom:GetAnalysisArtifactDownloadUrl. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetCampaign">actionGetCampaign</a></code> | <code>string</code> | [Read] transform-custom:GetCampaign. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetFinding">actionGetFinding</a></code> | <code>string</code> | [Read] transform-custom:GetFinding. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetFindingGroups">actionGetFindingGroups</a></code> | <code>string</code> | [Read] transform-custom:GetFindingGroups. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetKnowledgeItem">actionGetKnowledgeItem</a></code> | <code>string</code> | [Read] transform-custom:GetKnowledgeItem. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetRemediation">actionGetRemediation</a></code> | <code>string</code> | [Read] transform-custom:GetRemediation. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetRepository">actionGetRepository</a></code> | <code>string</code> | [Read] transform-custom:GetRepository. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetSource">actionGetSource</a></code> | <code>string</code> | [Read] transform-custom:GetSource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetTransformationPackageUrl">actionGetTransformationPackageUrl</a></code> | <code>string</code> | [Read] transform-custom:GetTransformationPackageUrl. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.BatchCreateFindings">BatchCreateFindings</a></code> | <code>string</code> | [Write] transform-custom:BatchCreateFindings. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.BatchUpdateFindings">BatchUpdateFindings</a></code> | <code>string</code> | [Write] transform-custom:BatchUpdateFindings. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.CompleteTransformationPackageUpload">CompleteTransformationPackageUpload</a></code> | <code>string</code> | [Write] transform-custom:CompleteTransformationPackageUpload. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ConverseStream">ConverseStream</a></code> | <code>string</code> | [Write] transform-custom:ConverseStream. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateAnalysis">CreateAnalysis</a></code> | <code>string</code> | [Write] transform-custom:CreateAnalysis. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateCampaign">CreateCampaign</a></code> | <code>string</code> | [Write] transform-custom:CreateCampaign. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateRemediation">CreateRemediation</a></code> | <code>string</code> | [Write] transform-custom:CreateRemediation. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateRepository">CreateRepository</a></code> | <code>string</code> | [Write] transform-custom:CreateRepository. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateSource">CreateSource</a></code> | <code>string</code> | [Write] transform-custom:CreateSource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateTransformationPackageUrl">CreateTransformationPackageUrl</a></code> | <code>string</code> | [Write] transform-custom:CreateTransformationPackageUrl. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteAnalysis">DeleteAnalysis</a></code> | <code>string</code> | [Write] transform-custom:DeleteAnalysis. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string</code> | [Write] transform-custom:DeleteCampaign. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteFinding">DeleteFinding</a></code> | <code>string</code> | [Write] transform-custom:DeleteFinding. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteKnowledgeItem">DeleteKnowledgeItem</a></code> | <code>string</code> | [Write] transform-custom:DeleteKnowledgeItem. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteRemediation">DeleteRemediation</a></code> | <code>string</code> | [Write] transform-custom:DeleteRemediation. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteRepository">DeleteRepository</a></code> | <code>string</code> | [Write] transform-custom:DeleteRepository. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteSource">DeleteSource</a></code> | <code>string</code> | [Write] transform-custom:DeleteSource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteTransformationPackage">DeleteTransformationPackage</a></code> | <code>string</code> | [Write] transform-custom:DeleteTransformationPackage. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ExecuteTransformation">ExecuteTransformation</a></code> | <code>string</code> | [Write] transform-custom:ExecuteTransformation. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListAnalyses">ListAnalyses</a></code> | <code>string</code> | [List] transform-custom:ListAnalyses. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListAnalysisArtifacts">ListAnalysisArtifacts</a></code> | <code>string</code> | [Read] transform-custom:ListAnalysisArtifacts. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListCampaignRepositories">ListCampaignRepositories</a></code> | <code>string</code> | [Read] transform-custom:ListCampaignRepositories. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListCampaigns">ListCampaigns</a></code> | <code>string</code> | [List] transform-custom:ListCampaigns. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [List] transform-custom:ListFindings. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListKnowledgeItems">ListKnowledgeItems</a></code> | <code>string</code> | [List] transform-custom:ListKnowledgeItems. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListRemediations">ListRemediations</a></code> | <code>string</code> | [List] transform-custom:ListRemediations. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListRepositories">ListRepositories</a></code> | <code>string</code> | [List] transform-custom:ListRepositories. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListSources">ListSources</a></code> | <code>string</code> | [List] transform-custom:ListSources. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] transform-custom:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListTransformationPackageMetadata">ListTransformationPackageMetadata</a></code> | <code>string</code> | [List] transform-custom:ListTransformationPackageMetadata. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListTransformationPackageShares">ListTransformationPackageShares</a></code> | <code>string</code> | [Read] transform-custom:ListTransformationPackageShares. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.SendTelemetryEvent">SendTelemetryEvent</a></code> | <code>string</code> | [Write] transform-custom:SendTelemetryEvent. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.ShareTransformationPackage">ShareTransformationPackage</a></code> | <code>string</code> | [Write] transform-custom:ShareTransformationPackage. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] transform-custom:TagResource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UnshareTransformationPackage">UnshareTransformationPackage</a></code> | <code>string</code> | [Write] transform-custom:UnshareTransformationPackage. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] transform-custom:UntagResource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateAnalysis">UpdateAnalysis</a></code> | <code>string</code> | [Write] transform-custom:UpdateAnalysis. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateCampaign">UpdateCampaign</a></code> | <code>string</code> | [Write] transform-custom:UpdateCampaign. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateCampaignRepositoryStatus">UpdateCampaignRepositoryStatus</a></code> | <code>string</code> | [Write] transform-custom:UpdateCampaignRepositoryStatus. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateKnowledgeItemConfiguration">UpdateKnowledgeItemConfiguration</a></code> | <code>string</code> | [Write] transform-custom:UpdateKnowledgeItemConfiguration. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateKnowledgeItemStatus">UpdateKnowledgeItemStatus</a></code> | <code>string</code> | [Write] transform-custom:UpdateKnowledgeItemStatus. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateRemediation">UpdateRemediation</a></code> | <code>string</code> | [Write] transform-custom:UpdateRemediation. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateRepository">UpdateRepository</a></code> | <code>string</code> | [Write] transform-custom:UpdateRepository. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateSource">UpdateSource</a></code> | <code>string</code> | [Write] transform-custom:UpdateSource. |

---

##### `actionGetAnalysis`<sup>Required</sup> <a name="actionGetAnalysis" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetAnalysis"></a>

```typescript
public readonly actionGetAnalysis: string;
```

- *Type:* string

[Read] transform-custom:GetAnalysis.

---

##### `actionGetAnalysisArtifactDownloadUrl`<sup>Required</sup> <a name="actionGetAnalysisArtifactDownloadUrl" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetAnalysisArtifactDownloadUrl"></a>

```typescript
public readonly actionGetAnalysisArtifactDownloadUrl: string;
```

- *Type:* string

[Read] transform-custom:GetAnalysisArtifactDownloadUrl.

---

##### `actionGetCampaign`<sup>Required</sup> <a name="actionGetCampaign" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetCampaign"></a>

```typescript
public readonly actionGetCampaign: string;
```

- *Type:* string

[Read] transform-custom:GetCampaign.

---

##### `actionGetFinding`<sup>Required</sup> <a name="actionGetFinding" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetFinding"></a>

```typescript
public readonly actionGetFinding: string;
```

- *Type:* string

[Read] transform-custom:GetFinding.

---

##### `actionGetFindingGroups`<sup>Required</sup> <a name="actionGetFindingGroups" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetFindingGroups"></a>

```typescript
public readonly actionGetFindingGroups: string;
```

- *Type:* string

[Read] transform-custom:GetFindingGroups.

---

##### `actionGetKnowledgeItem`<sup>Required</sup> <a name="actionGetKnowledgeItem" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetKnowledgeItem"></a>

```typescript
public readonly actionGetKnowledgeItem: string;
```

- *Type:* string

[Read] transform-custom:GetKnowledgeItem.

---

##### `actionGetRemediation`<sup>Required</sup> <a name="actionGetRemediation" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetRemediation"></a>

```typescript
public readonly actionGetRemediation: string;
```

- *Type:* string

[Read] transform-custom:GetRemediation.

---

##### `actionGetRepository`<sup>Required</sup> <a name="actionGetRepository" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetRepository"></a>

```typescript
public readonly actionGetRepository: string;
```

- *Type:* string

[Read] transform-custom:GetRepository.

---

##### `actionGetSource`<sup>Required</sup> <a name="actionGetSource" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetSource"></a>

```typescript
public readonly actionGetSource: string;
```

- *Type:* string

[Read] transform-custom:GetSource.

---

##### `actionGetTransformationPackageUrl`<sup>Required</sup> <a name="actionGetTransformationPackageUrl" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.actionGetTransformationPackageUrl"></a>

```typescript
public readonly actionGetTransformationPackageUrl: string;
```

- *Type:* string

[Read] transform-custom:GetTransformationPackageUrl.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCreateFindings`<sup>Required</sup> <a name="BatchCreateFindings" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.BatchCreateFindings"></a>

```typescript
public readonly BatchCreateFindings: string;
```

- *Type:* string

[Write] transform-custom:BatchCreateFindings.

---

##### `BatchUpdateFindings`<sup>Required</sup> <a name="BatchUpdateFindings" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.BatchUpdateFindings"></a>

```typescript
public readonly BatchUpdateFindings: string;
```

- *Type:* string

[Write] transform-custom:BatchUpdateFindings.

---

##### `CompleteTransformationPackageUpload`<sup>Required</sup> <a name="CompleteTransformationPackageUpload" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.CompleteTransformationPackageUpload"></a>

```typescript
public readonly CompleteTransformationPackageUpload: string;
```

- *Type:* string

[Write] transform-custom:CompleteTransformationPackageUpload.

---

##### `ConverseStream`<sup>Required</sup> <a name="ConverseStream" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ConverseStream"></a>

```typescript
public readonly ConverseStream: string;
```

- *Type:* string

[Write] transform-custom:ConverseStream.

---

##### `CreateAnalysis`<sup>Required</sup> <a name="CreateAnalysis" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateAnalysis"></a>

```typescript
public readonly CreateAnalysis: string;
```

- *Type:* string

[Write] transform-custom:CreateAnalysis.

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string;
```

- *Type:* string

[Write] transform-custom:CreateCampaign.

---

##### `CreateRemediation`<sup>Required</sup> <a name="CreateRemediation" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateRemediation"></a>

```typescript
public readonly CreateRemediation: string;
```

- *Type:* string

[Write] transform-custom:CreateRemediation.

---

##### `CreateRepository`<sup>Required</sup> <a name="CreateRepository" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateRepository"></a>

```typescript
public readonly CreateRepository: string;
```

- *Type:* string

[Write] transform-custom:CreateRepository.

---

##### `CreateSource`<sup>Required</sup> <a name="CreateSource" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateSource"></a>

```typescript
public readonly CreateSource: string;
```

- *Type:* string

[Write] transform-custom:CreateSource.

---

##### `CreateTransformationPackageUrl`<sup>Required</sup> <a name="CreateTransformationPackageUrl" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.CreateTransformationPackageUrl"></a>

```typescript
public readonly CreateTransformationPackageUrl: string;
```

- *Type:* string

[Write] transform-custom:CreateTransformationPackageUrl.

---

##### `DeleteAnalysis`<sup>Required</sup> <a name="DeleteAnalysis" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteAnalysis"></a>

```typescript
public readonly DeleteAnalysis: string;
```

- *Type:* string

[Write] transform-custom:DeleteAnalysis.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string;
```

- *Type:* string

[Write] transform-custom:DeleteCampaign.

---

##### `DeleteFinding`<sup>Required</sup> <a name="DeleteFinding" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteFinding"></a>

```typescript
public readonly DeleteFinding: string;
```

- *Type:* string

[Write] transform-custom:DeleteFinding.

---

##### `DeleteKnowledgeItem`<sup>Required</sup> <a name="DeleteKnowledgeItem" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteKnowledgeItem"></a>

```typescript
public readonly DeleteKnowledgeItem: string;
```

- *Type:* string

[Write] transform-custom:DeleteKnowledgeItem.

---

##### `DeleteRemediation`<sup>Required</sup> <a name="DeleteRemediation" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteRemediation"></a>

```typescript
public readonly DeleteRemediation: string;
```

- *Type:* string

[Write] transform-custom:DeleteRemediation.

---

##### `DeleteRepository`<sup>Required</sup> <a name="DeleteRepository" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteRepository"></a>

```typescript
public readonly DeleteRepository: string;
```

- *Type:* string

[Write] transform-custom:DeleteRepository.

---

##### `DeleteSource`<sup>Required</sup> <a name="DeleteSource" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteSource"></a>

```typescript
public readonly DeleteSource: string;
```

- *Type:* string

[Write] transform-custom:DeleteSource.

---

##### `DeleteTransformationPackage`<sup>Required</sup> <a name="DeleteTransformationPackage" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.DeleteTransformationPackage"></a>

```typescript
public readonly DeleteTransformationPackage: string;
```

- *Type:* string

[Write] transform-custom:DeleteTransformationPackage.

---

##### `ExecuteTransformation`<sup>Required</sup> <a name="ExecuteTransformation" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ExecuteTransformation"></a>

```typescript
public readonly ExecuteTransformation: string;
```

- *Type:* string

[Write] transform-custom:ExecuteTransformation.

---

##### `ListAnalyses`<sup>Required</sup> <a name="ListAnalyses" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListAnalyses"></a>

```typescript
public readonly ListAnalyses: string;
```

- *Type:* string

[List] transform-custom:ListAnalyses.

---

##### `ListAnalysisArtifacts`<sup>Required</sup> <a name="ListAnalysisArtifacts" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListAnalysisArtifacts"></a>

```typescript
public readonly ListAnalysisArtifacts: string;
```

- *Type:* string

[Read] transform-custom:ListAnalysisArtifacts.

---

##### `ListCampaignRepositories`<sup>Required</sup> <a name="ListCampaignRepositories" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListCampaignRepositories"></a>

```typescript
public readonly ListCampaignRepositories: string;
```

- *Type:* string

[Read] transform-custom:ListCampaignRepositories.

---

##### `ListCampaigns`<sup>Required</sup> <a name="ListCampaigns" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListCampaigns"></a>

```typescript
public readonly ListCampaigns: string;
```

- *Type:* string

[List] transform-custom:ListCampaigns.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[List] transform-custom:ListFindings.

---

##### `ListKnowledgeItems`<sup>Required</sup> <a name="ListKnowledgeItems" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListKnowledgeItems"></a>

```typescript
public readonly ListKnowledgeItems: string;
```

- *Type:* string

[List] transform-custom:ListKnowledgeItems.

---

##### `ListRemediations`<sup>Required</sup> <a name="ListRemediations" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListRemediations"></a>

```typescript
public readonly ListRemediations: string;
```

- *Type:* string

[List] transform-custom:ListRemediations.

---

##### `ListRepositories`<sup>Required</sup> <a name="ListRepositories" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListRepositories"></a>

```typescript
public readonly ListRepositories: string;
```

- *Type:* string

[List] transform-custom:ListRepositories.

---

##### `ListSources`<sup>Required</sup> <a name="ListSources" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListSources"></a>

```typescript
public readonly ListSources: string;
```

- *Type:* string

[List] transform-custom:ListSources.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] transform-custom:ListTagsForResource.

---

##### `ListTransformationPackageMetadata`<sup>Required</sup> <a name="ListTransformationPackageMetadata" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListTransformationPackageMetadata"></a>

```typescript
public readonly ListTransformationPackageMetadata: string;
```

- *Type:* string

[List] transform-custom:ListTransformationPackageMetadata.

---

##### `ListTransformationPackageShares`<sup>Required</sup> <a name="ListTransformationPackageShares" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ListTransformationPackageShares"></a>

```typescript
public readonly ListTransformationPackageShares: string;
```

- *Type:* string

[Read] transform-custom:ListTransformationPackageShares.

---

##### `SendTelemetryEvent`<sup>Required</sup> <a name="SendTelemetryEvent" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.SendTelemetryEvent"></a>

```typescript
public readonly SendTelemetryEvent: string;
```

- *Type:* string

[Write] transform-custom:SendTelemetryEvent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `ShareTransformationPackage`<sup>Required</sup> <a name="ShareTransformationPackage" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.ShareTransformationPackage"></a>

```typescript
public readonly ShareTransformationPackage: string;
```

- *Type:* string

[Write] transform-custom:ShareTransformationPackage.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] transform-custom:TagResource.

---

##### `UnshareTransformationPackage`<sup>Required</sup> <a name="UnshareTransformationPackage" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UnshareTransformationPackage"></a>

```typescript
public readonly UnshareTransformationPackage: string;
```

- *Type:* string

[Write] transform-custom:UnshareTransformationPackage.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] transform-custom:UntagResource.

---

##### `UpdateAnalysis`<sup>Required</sup> <a name="UpdateAnalysis" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateAnalysis"></a>

```typescript
public readonly UpdateAnalysis: string;
```

- *Type:* string

[Write] transform-custom:UpdateAnalysis.

---

##### `UpdateCampaign`<sup>Required</sup> <a name="UpdateCampaign" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateCampaign"></a>

```typescript
public readonly UpdateCampaign: string;
```

- *Type:* string

[Write] transform-custom:UpdateCampaign.

---

##### `UpdateCampaignRepositoryStatus`<sup>Required</sup> <a name="UpdateCampaignRepositoryStatus" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateCampaignRepositoryStatus"></a>

```typescript
public readonly UpdateCampaignRepositoryStatus: string;
```

- *Type:* string

[Write] transform-custom:UpdateCampaignRepositoryStatus.

---

##### `UpdateKnowledgeItemConfiguration`<sup>Required</sup> <a name="UpdateKnowledgeItemConfiguration" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateKnowledgeItemConfiguration"></a>

```typescript
public readonly UpdateKnowledgeItemConfiguration: string;
```

- *Type:* string

[Write] transform-custom:UpdateKnowledgeItemConfiguration.

---

##### `UpdateKnowledgeItemStatus`<sup>Required</sup> <a name="UpdateKnowledgeItemStatus" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateKnowledgeItemStatus"></a>

```typescript
public readonly UpdateKnowledgeItemStatus: string;
```

- *Type:* string

[Write] transform-custom:UpdateKnowledgeItemStatus.

---

##### `UpdateRemediation`<sup>Required</sup> <a name="UpdateRemediation" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateRemediation"></a>

```typescript
public readonly UpdateRemediation: string;
```

- *Type:* string

[Write] transform-custom:UpdateRemediation.

---

##### `UpdateRepository`<sup>Required</sup> <a name="UpdateRepository" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateRepository"></a>

```typescript
public readonly UpdateRepository: string;
```

- *Type:* string

[Write] transform-custom:UpdateRepository.

---

##### `UpdateSource`<sup>Required</sup> <a name="UpdateSource" id="@cdk_utils/iam.transform_custom.TransformCustomActions.property.UpdateSource"></a>

```typescript
public readonly UpdateSource: string;
```

- *Type:* string

[Write] transform-custom:UpdateSource.

---

### TransformCustomConditions <a name="TransformCustomConditions" id="@cdk_utils/iam.transform_custom.TransformCustomConditions"></a>

Condition key constants and builders for transform-custom.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

new transform_custom.TransformCustomConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.requestTag"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.resourceTag"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.tagKeys"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetAnalysisArtifactDownloadUrlConditionKeys">actionGetAnalysisArtifactDownloadUrlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAnalysisArtifactDownloadUrl action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetAnalysisConditionKeys">actionGetAnalysisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAnalysis action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetCampaignConditionKeys">actionGetCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCampaign action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetFindingConditionKeys">actionGetFindingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetFinding action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetKnowledgeItemConditionKeys">actionGetKnowledgeItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetKnowledgeItem action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetRemediationConditionKeys">actionGetRemediationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRemediation action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetRepositoryConditionKeys">actionGetRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRepository action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetSourceConditionKeys">actionGetSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSource action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetTransformationPackageUrlConditionKeys">actionGetTransformationPackageUrlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTransformationPackageUrl action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.BatchCreateFindingsConditionKeys">BatchCreateFindingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the BatchCreateFindings action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CompleteTransformationPackageUploadConditionKeys">CompleteTransformationPackageUploadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CompleteTransformationPackageUpload action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateAnalysisConditionKeys">CreateAnalysisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnalysis action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateCampaignConditionKeys">CreateCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCampaign action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateRemediationConditionKeys">CreateRemediationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRemediation action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateRepositoryConditionKeys">CreateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRepository action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateSourceConditionKeys">CreateSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSource action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateTransformationPackageUrlConditionKeys">CreateTransformationPackageUrlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTransformationPackageUrl action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteAnalysisConditionKeys">DeleteAnalysisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAnalysis action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteCampaignConditionKeys">DeleteCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCampaign action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteFindingConditionKeys">DeleteFindingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteFinding action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteKnowledgeItemConditionKeys">DeleteKnowledgeItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteKnowledgeItem action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteRemediationConditionKeys">DeleteRemediationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRemediation action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteRepositoryConditionKeys">DeleteRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRepository action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteSourceConditionKeys">DeleteSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSource action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteTransformationPackageConditionKeys">DeleteTransformationPackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTransformationPackage action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ExecuteTransformationConditionKeys">ExecuteTransformationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExecuteTransformation action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ListAnalysisArtifactsConditionKeys">ListAnalysisArtifactsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAnalysisArtifacts action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ListCampaignRepositoriesConditionKeys">ListCampaignRepositoriesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListCampaignRepositories action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ListTransformationPackageSharesConditionKeys">ListTransformationPackageSharesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTransformationPackageShares action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ShareTransformationPackageConditionKeys">ShareTransformationPackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ShareTransformationPackage action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UnshareTransformationPackageConditionKeys">UnshareTransformationPackageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UnshareTransformationPackage action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateAnalysisConditionKeys">UpdateAnalysisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAnalysis action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateCampaignConditionKeys">UpdateCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCampaign action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateCampaignRepositoryStatusConditionKeys">UpdateCampaignRepositoryStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCampaignRepositoryStatus action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateKnowledgeItemConfigurationConditionKeys">UpdateKnowledgeItemConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateKnowledgeItemConfiguration action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateKnowledgeItemStatusConditionKeys">UpdateKnowledgeItemStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateKnowledgeItemStatus action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateRemediationConditionKeys">UpdateRemediationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRemediation action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateRepositoryConditionKeys">UpdateRepositoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRepository action. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateSourceConditionKeys">UpdateSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSource action. |

---

##### `actionGetAnalysisArtifactDownloadUrlConditionKeys`<sup>Required</sup> <a name="actionGetAnalysisArtifactDownloadUrlConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetAnalysisArtifactDownloadUrlConditionKeys"></a>

```typescript
public readonly actionGetAnalysisArtifactDownloadUrlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAnalysisArtifactDownloadUrl action.

---

##### `actionGetAnalysisConditionKeys`<sup>Required</sup> <a name="actionGetAnalysisConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetAnalysisConditionKeys"></a>

```typescript
public readonly actionGetAnalysisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAnalysis action.

---

##### `actionGetCampaignConditionKeys`<sup>Required</sup> <a name="actionGetCampaignConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetCampaignConditionKeys"></a>

```typescript
public readonly actionGetCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCampaign action.

---

##### `actionGetFindingConditionKeys`<sup>Required</sup> <a name="actionGetFindingConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetFindingConditionKeys"></a>

```typescript
public readonly actionGetFindingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetFinding action.

---

##### `actionGetKnowledgeItemConditionKeys`<sup>Required</sup> <a name="actionGetKnowledgeItemConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetKnowledgeItemConditionKeys"></a>

```typescript
public readonly actionGetKnowledgeItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetKnowledgeItem action.

---

##### `actionGetRemediationConditionKeys`<sup>Required</sup> <a name="actionGetRemediationConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetRemediationConditionKeys"></a>

```typescript
public readonly actionGetRemediationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRemediation action.

---

##### `actionGetRepositoryConditionKeys`<sup>Required</sup> <a name="actionGetRepositoryConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetRepositoryConditionKeys"></a>

```typescript
public readonly actionGetRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRepository action.

---

##### `actionGetSourceConditionKeys`<sup>Required</sup> <a name="actionGetSourceConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetSourceConditionKeys"></a>

```typescript
public readonly actionGetSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSource action.

---

##### `actionGetTransformationPackageUrlConditionKeys`<sup>Required</sup> <a name="actionGetTransformationPackageUrlConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.actionGetTransformationPackageUrlConditionKeys"></a>

```typescript
public readonly actionGetTransformationPackageUrlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTransformationPackageUrl action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BatchCreateFindingsConditionKeys`<sup>Required</sup> <a name="BatchCreateFindingsConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.BatchCreateFindingsConditionKeys"></a>

```typescript
public readonly BatchCreateFindingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the BatchCreateFindings action.

---

##### `CompleteTransformationPackageUploadConditionKeys`<sup>Required</sup> <a name="CompleteTransformationPackageUploadConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CompleteTransformationPackageUploadConditionKeys"></a>

```typescript
public readonly CompleteTransformationPackageUploadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CompleteTransformationPackageUpload action.

---

##### `CreateAnalysisConditionKeys`<sup>Required</sup> <a name="CreateAnalysisConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateAnalysisConditionKeys"></a>

```typescript
public readonly CreateAnalysisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnalysis action.

---

##### `CreateCampaignConditionKeys`<sup>Required</sup> <a name="CreateCampaignConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateCampaignConditionKeys"></a>

```typescript
public readonly CreateCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCampaign action.

---

##### `CreateRemediationConditionKeys`<sup>Required</sup> <a name="CreateRemediationConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateRemediationConditionKeys"></a>

```typescript
public readonly CreateRemediationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRemediation action.

---

##### `CreateRepositoryConditionKeys`<sup>Required</sup> <a name="CreateRepositoryConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateRepositoryConditionKeys"></a>

```typescript
public readonly CreateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRepository action.

---

##### `CreateSourceConditionKeys`<sup>Required</sup> <a name="CreateSourceConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateSourceConditionKeys"></a>

```typescript
public readonly CreateSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSource action.

---

##### `CreateTransformationPackageUrlConditionKeys`<sup>Required</sup> <a name="CreateTransformationPackageUrlConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.CreateTransformationPackageUrlConditionKeys"></a>

```typescript
public readonly CreateTransformationPackageUrlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTransformationPackageUrl action.

---

##### `DeleteAnalysisConditionKeys`<sup>Required</sup> <a name="DeleteAnalysisConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteAnalysisConditionKeys"></a>

```typescript
public readonly DeleteAnalysisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAnalysis action.

---

##### `DeleteCampaignConditionKeys`<sup>Required</sup> <a name="DeleteCampaignConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteCampaignConditionKeys"></a>

```typescript
public readonly DeleteCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCampaign action.

---

##### `DeleteFindingConditionKeys`<sup>Required</sup> <a name="DeleteFindingConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteFindingConditionKeys"></a>

```typescript
public readonly DeleteFindingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteFinding action.

---

##### `DeleteKnowledgeItemConditionKeys`<sup>Required</sup> <a name="DeleteKnowledgeItemConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteKnowledgeItemConditionKeys"></a>

```typescript
public readonly DeleteKnowledgeItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteKnowledgeItem action.

---

##### `DeleteRemediationConditionKeys`<sup>Required</sup> <a name="DeleteRemediationConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteRemediationConditionKeys"></a>

```typescript
public readonly DeleteRemediationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRemediation action.

---

##### `DeleteRepositoryConditionKeys`<sup>Required</sup> <a name="DeleteRepositoryConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteRepositoryConditionKeys"></a>

```typescript
public readonly DeleteRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRepository action.

---

##### `DeleteSourceConditionKeys`<sup>Required</sup> <a name="DeleteSourceConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteSourceConditionKeys"></a>

```typescript
public readonly DeleteSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSource action.

---

##### `DeleteTransformationPackageConditionKeys`<sup>Required</sup> <a name="DeleteTransformationPackageConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.DeleteTransformationPackageConditionKeys"></a>

```typescript
public readonly DeleteTransformationPackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTransformationPackage action.

---

##### `ExecuteTransformationConditionKeys`<sup>Required</sup> <a name="ExecuteTransformationConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ExecuteTransformationConditionKeys"></a>

```typescript
public readonly ExecuteTransformationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExecuteTransformation action.

---

##### `ListAnalysisArtifactsConditionKeys`<sup>Required</sup> <a name="ListAnalysisArtifactsConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ListAnalysisArtifactsConditionKeys"></a>

```typescript
public readonly ListAnalysisArtifactsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAnalysisArtifacts action.

---

##### `ListCampaignRepositoriesConditionKeys`<sup>Required</sup> <a name="ListCampaignRepositoriesConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ListCampaignRepositoriesConditionKeys"></a>

```typescript
public readonly ListCampaignRepositoriesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListCampaignRepositories action.

---

##### `ListTransformationPackageSharesConditionKeys`<sup>Required</sup> <a name="ListTransformationPackageSharesConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ListTransformationPackageSharesConditionKeys"></a>

```typescript
public readonly ListTransformationPackageSharesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTransformationPackageShares action.

---

##### `ShareTransformationPackageConditionKeys`<sup>Required</sup> <a name="ShareTransformationPackageConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.ShareTransformationPackageConditionKeys"></a>

```typescript
public readonly ShareTransformationPackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ShareTransformationPackage action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UnshareTransformationPackageConditionKeys`<sup>Required</sup> <a name="UnshareTransformationPackageConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UnshareTransformationPackageConditionKeys"></a>

```typescript
public readonly UnshareTransformationPackageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UnshareTransformationPackage action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAnalysisConditionKeys`<sup>Required</sup> <a name="UpdateAnalysisConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateAnalysisConditionKeys"></a>

```typescript
public readonly UpdateAnalysisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAnalysis action.

---

##### `UpdateCampaignConditionKeys`<sup>Required</sup> <a name="UpdateCampaignConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateCampaignConditionKeys"></a>

```typescript
public readonly UpdateCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCampaign action.

---

##### `UpdateCampaignRepositoryStatusConditionKeys`<sup>Required</sup> <a name="UpdateCampaignRepositoryStatusConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateCampaignRepositoryStatusConditionKeys"></a>

```typescript
public readonly UpdateCampaignRepositoryStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCampaignRepositoryStatus action.

---

##### `UpdateKnowledgeItemConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateKnowledgeItemConfigurationConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateKnowledgeItemConfigurationConditionKeys"></a>

```typescript
public readonly UpdateKnowledgeItemConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateKnowledgeItemConfiguration action.

---

##### `UpdateKnowledgeItemStatusConditionKeys`<sup>Required</sup> <a name="UpdateKnowledgeItemStatusConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateKnowledgeItemStatusConditionKeys"></a>

```typescript
public readonly UpdateKnowledgeItemStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateKnowledgeItemStatus action.

---

##### `UpdateRemediationConditionKeys`<sup>Required</sup> <a name="UpdateRemediationConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateRemediationConditionKeys"></a>

```typescript
public readonly UpdateRemediationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRemediation action.

---

##### `UpdateRepositoryConditionKeys`<sup>Required</sup> <a name="UpdateRepositoryConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateRepositoryConditionKeys"></a>

```typescript
public readonly UpdateRepositoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRepository action.

---

##### `UpdateSourceConditionKeys`<sup>Required</sup> <a name="UpdateSourceConditionKeys" id="@cdk_utils/iam.transform_custom.TransformCustomConditions.property.UpdateSourceConditionKeys"></a>

```typescript
public readonly UpdateSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSource action.

---

### TransformCustomResources <a name="TransformCustomResources" id="@cdk_utils/iam.transform_custom.TransformCustomResources"></a>

ARN builders, validators, and parsers for transform-custom resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transform_custom.TransformCustomResources.Initializer"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

new transform_custom.TransformCustomResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.analysis">analysis</a></code> | Builds an ARN for the analysis resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.campaign">campaign</a></code> | Builds an ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.finding">finding</a></code> | Builds an ARN for the finding resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.isValidAnalysisArn">isValidAnalysisArn</a></code> | Validates whether a string is a valid ARN for the analysis resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.isValidCampaignArn">isValidCampaignArn</a></code> | Validates whether a string is a valid ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.isValidFindingArn">isValidFindingArn</a></code> | Validates whether a string is a valid ARN for the finding resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.isValidKnowledgeItemArn">isValidKnowledgeItemArn</a></code> | Validates whether a string is a valid ARN for the knowledge-item resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.isValidPackageArn">isValidPackageArn</a></code> | Validates whether a string is a valid ARN for the package resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.isValidRemediationArn">isValidRemediationArn</a></code> | Validates whether a string is a valid ARN for the remediation resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.isValidRepositoryArn">isValidRepositoryArn</a></code> | Validates whether a string is a valid ARN for the repository resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.isValidSourceArn">isValidSourceArn</a></code> | Validates whether a string is a valid ARN for the source resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.knowledgeItem">knowledgeItem</a></code> | Builds an ARN for the knowledge-item resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.package">package</a></code> | Builds an ARN for the package resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.parseAnalysisArn">parseAnalysisArn</a></code> | Parses a analysis ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.parseCampaignArn">parseCampaignArn</a></code> | Parses a campaign ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.parseFindingArn">parseFindingArn</a></code> | Parses a finding ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.parseKnowledgeItemArn">parseKnowledgeItemArn</a></code> | Parses a knowledge-item ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.parsePackageArn">parsePackageArn</a></code> | Parses a package ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.parseRemediationArn">parseRemediationArn</a></code> | Parses a remediation ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.parseRepositoryArn">parseRepositoryArn</a></code> | Parses a repository ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.parseSourceArn">parseSourceArn</a></code> | Parses a source ARN into its components. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.remediation">remediation</a></code> | Builds an ARN for the remediation resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.repository">repository</a></code> | Builds an ARN for the repository resource. |
| <code><a href="#@cdk_utils/iam.transform_custom.TransformCustomResources.source">source</a></code> | Builds an ARN for the source resource. |

---

##### `analysis` <a name="analysis" id="@cdk_utils/iam.transform_custom.TransformCustomResources.analysis"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.analysis(props: TransformCustomAnalysisArnProps)
```

Builds an ARN for the analysis resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform_custom.TransformCustomResources.analysis.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform_custom.TransformCustomAnalysisArnProps">TransformCustomAnalysisArnProps</a>

---

##### `campaign` <a name="campaign" id="@cdk_utils/iam.transform_custom.TransformCustomResources.campaign"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.campaign(props: TransformCustomCampaignArnProps)
```

Builds an ARN for the campaign resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform_custom.TransformCustomResources.campaign.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform_custom.TransformCustomCampaignArnProps">TransformCustomCampaignArnProps</a>

---

##### `finding` <a name="finding" id="@cdk_utils/iam.transform_custom.TransformCustomResources.finding"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.finding(props: TransformCustomFindingArnProps)
```

Builds an ARN for the finding resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform_custom.TransformCustomResources.finding.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform_custom.TransformCustomFindingArnProps">TransformCustomFindingArnProps</a>

---

##### `isValidAnalysisArn` <a name="isValidAnalysisArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidAnalysisArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.isValidAnalysisArn(arn: string)
```

Validates whether a string is a valid ARN for the analysis resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidAnalysisArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCampaignArn` <a name="isValidCampaignArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidCampaignArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.isValidCampaignArn(arn: string)
```

Validates whether a string is a valid ARN for the campaign resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFindingArn` <a name="isValidFindingArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidFindingArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.isValidFindingArn(arn: string)
```

Validates whether a string is a valid ARN for the finding resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidFindingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKnowledgeItemArn` <a name="isValidKnowledgeItemArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidKnowledgeItemArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.isValidKnowledgeItemArn(arn: string)
```

Validates whether a string is a valid ARN for the knowledge-item resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidKnowledgeItemArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPackageArn` <a name="isValidPackageArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidPackageArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.isValidPackageArn(arn: string)
```

Validates whether a string is a valid ARN for the package resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidPackageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRemediationArn` <a name="isValidRemediationArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidRemediationArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.isValidRemediationArn(arn: string)
```

Validates whether a string is a valid ARN for the remediation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidRemediationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRepositoryArn` <a name="isValidRepositoryArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidRepositoryArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.isValidRepositoryArn(arn: string)
```

Validates whether a string is a valid ARN for the repository resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSourceArn` <a name="isValidSourceArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidSourceArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.isValidSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.isValidSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `knowledgeItem` <a name="knowledgeItem" id="@cdk_utils/iam.transform_custom.TransformCustomResources.knowledgeItem"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.knowledgeItem(props: TransformCustomKnowledgeItemArnProps)
```

Builds an ARN for the knowledge-item resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform_custom.TransformCustomResources.knowledgeItem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform_custom.TransformCustomKnowledgeItemArnProps">TransformCustomKnowledgeItemArnProps</a>

---

##### `package` <a name="package" id="@cdk_utils/iam.transform_custom.TransformCustomResources.package"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.package(props: TransformCustomPackageArnProps)
```

Builds an ARN for the package resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform_custom.TransformCustomResources.package.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform_custom.TransformCustomPackageArnProps">TransformCustomPackageArnProps</a>

---

##### `parseAnalysisArn` <a name="parseAnalysisArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseAnalysisArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.parseAnalysisArn(arn: string)
```

Parses a analysis ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseAnalysisArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCampaignArn` <a name="parseCampaignArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseCampaignArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.parseCampaignArn(arn: string)
```

Parses a campaign ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFindingArn` <a name="parseFindingArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseFindingArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.parseFindingArn(arn: string)
```

Parses a finding ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseFindingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKnowledgeItemArn` <a name="parseKnowledgeItemArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseKnowledgeItemArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.parseKnowledgeItemArn(arn: string)
```

Parses a knowledge-item ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseKnowledgeItemArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePackageArn` <a name="parsePackageArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parsePackageArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.parsePackageArn(arn: string)
```

Parses a package ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parsePackageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRemediationArn` <a name="parseRemediationArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseRemediationArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.parseRemediationArn(arn: string)
```

Parses a remediation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseRemediationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRepositoryArn` <a name="parseRepositoryArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseRepositoryArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.parseRepositoryArn(arn: string)
```

Parses a repository ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseRepositoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSourceArn` <a name="parseSourceArn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseSourceArn"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.parseSourceArn(arn: string)
```

Parses a source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transform_custom.TransformCustomResources.parseSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `remediation` <a name="remediation" id="@cdk_utils/iam.transform_custom.TransformCustomResources.remediation"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.remediation(props: TransformCustomRemediationArnProps)
```

Builds an ARN for the remediation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform_custom.TransformCustomResources.remediation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform_custom.TransformCustomRemediationArnProps">TransformCustomRemediationArnProps</a>

---

##### `repository` <a name="repository" id="@cdk_utils/iam.transform_custom.TransformCustomResources.repository"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.repository(props: TransformCustomRepositoryArnProps)
```

Builds an ARN for the repository resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform_custom.TransformCustomResources.repository.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform_custom.TransformCustomRepositoryArnProps">TransformCustomRepositoryArnProps</a>

---

##### `source` <a name="source" id="@cdk_utils/iam.transform_custom.TransformCustomResources.source"></a>

```typescript
import { transform_custom } from '@cdk_utils/iam'

transform_custom.TransformCustomResources.source(props: TransformCustomSourceArnProps)
```

Builds an ARN for the source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transform_custom.TransformCustomResources.source.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transform_custom.TransformCustomSourceArnProps">TransformCustomSourceArnProps</a>

---




