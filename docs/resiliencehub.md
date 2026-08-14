# `resiliencehub` Submodule <a name="`resiliencehub` Submodule" id="@cdk_utils/iam.resiliencehub"></a>


## Structs <a name="Structs" id="Structs"></a>

### ResiliencehubAppAssessmentArnComponents <a name="ResiliencehubAppAssessmentArnComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents"></a>

Parsed components of a app-assessment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubAppAssessmentArnComponents: resiliencehub.ResiliencehubAppAssessmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.property.appAssessmentId">appAssessmentId</a></code> | <code>string</code> | The AppAssessmentId component. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appAssessmentId`<sup>Required</sup> <a name="appAssessmentId" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.property.appAssessmentId"></a>

```typescript
public readonly appAssessmentId: string;
```

- *Type:* string

The AppAssessmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ResiliencehubAppAssessmentArnProps <a name="ResiliencehubAppAssessmentArnProps" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps"></a>

Properties for building a app-assessment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubAppAssessmentArnProps: resiliencehub.ResiliencehubAppAssessmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.property.appAssessmentId">appAssessmentId</a></code> | <code>string</code> | The AppAssessmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appAssessmentId`<sup>Required</sup> <a name="appAssessmentId" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.property.appAssessmentId"></a>

```typescript
public readonly appAssessmentId: string;
```

- *Type:* string

The AppAssessmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResiliencehubApplicationArnComponents <a name="ResiliencehubApplicationArnComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubApplicationArnComponents: resiliencehub.ResiliencehubApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.property.appId">appId</a></code> | <code>string</code> | The AppId component. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ResiliencehubApplicationArnProps <a name="ResiliencehubApplicationArnProps" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubApplicationArnProps: resiliencehub.ResiliencehubApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.property.appId">appId</a></code> | <code>string</code> | The AppId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The AppId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResiliencehubPolicyArnComponents <a name="ResiliencehubPolicyArnComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents"></a>

Parsed components of a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubPolicyArnComponents: resiliencehub.ResiliencehubPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ResiliencehubPolicyArnProps <a name="ResiliencehubPolicyArnProps" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps"></a>

Properties for building a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubPolicyArnProps: resiliencehub.ResiliencehubPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResiliencehubRecommendationTemplateArnComponents <a name="ResiliencehubRecommendationTemplateArnComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents"></a>

Parsed components of a recommendation-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubRecommendationTemplateArnComponents: resiliencehub.ResiliencehubRecommendationTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.property.recommendationTemplateId">recommendationTemplateId</a></code> | <code>string</code> | The RecommendationTemplateId component. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `recommendationTemplateId`<sup>Required</sup> <a name="recommendationTemplateId" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.property.recommendationTemplateId"></a>

```typescript
public readonly recommendationTemplateId: string;
```

- *Type:* string

The RecommendationTemplateId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ResiliencehubRecommendationTemplateArnProps <a name="ResiliencehubRecommendationTemplateArnProps" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps"></a>

Properties for building a recommendation-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubRecommendationTemplateArnProps: resiliencehub.ResiliencehubRecommendationTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.property.recommendationTemplateId">recommendationTemplateId</a></code> | <code>string</code> | The RecommendationTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `recommendationTemplateId`<sup>Required</sup> <a name="recommendationTemplateId" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.property.recommendationTemplateId"></a>

```typescript
public readonly recommendationTemplateId: string;
```

- *Type:* string

The RecommendationTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResiliencehubResiliencyPolicyArnComponents <a name="ResiliencehubResiliencyPolicyArnComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents"></a>

Parsed components of a resiliency-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubResiliencyPolicyArnComponents: resiliencehub.ResiliencehubResiliencyPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.property.resiliencyPolicyId">resiliencyPolicyId</a></code> | <code>string</code> | The ResiliencyPolicyId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resiliencyPolicyId`<sup>Required</sup> <a name="resiliencyPolicyId" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnComponents.property.resiliencyPolicyId"></a>

```typescript
public readonly resiliencyPolicyId: string;
```

- *Type:* string

The ResiliencyPolicyId component.

---

### ResiliencehubResiliencyPolicyArnProps <a name="ResiliencehubResiliencyPolicyArnProps" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps"></a>

Properties for building a resiliency-policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubResiliencyPolicyArnProps: resiliencehub.ResiliencehubResiliencyPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.property.resiliencyPolicyId">resiliencyPolicyId</a></code> | <code>string</code> | The ResiliencyPolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resiliencyPolicyId`<sup>Required</sup> <a name="resiliencyPolicyId" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.property.resiliencyPolicyId"></a>

```typescript
public readonly resiliencyPolicyId: string;
```

- *Type:* string

The ResiliencyPolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResiliencehubServiceArnComponents <a name="ResiliencehubServiceArnComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubServiceArnComponents: resiliencehub.ResiliencehubServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### ResiliencehubServiceArnProps <a name="ResiliencehubServiceArnProps" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubServiceArnProps: resiliencehub.ResiliencehubServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResiliencehubSystemArnComponents <a name="ResiliencehubSystemArnComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents"></a>

Parsed components of a system ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubSystemArnComponents: resiliencehub.ResiliencehubSystemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.property.systemId">systemId</a></code> | <code>string</code> | The SystemId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `systemId`<sup>Required</sup> <a name="systemId" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnComponents.property.systemId"></a>

```typescript
public readonly systemId: string;
```

- *Type:* string

The SystemId component.

---

### ResiliencehubSystemArnProps <a name="ResiliencehubSystemArnProps" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps"></a>

Properties for building a system ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubSystemArnProps: resiliencehub.ResiliencehubSystemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.property.systemId">systemId</a></code> | <code>string</code> | The SystemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `systemId`<sup>Required</sup> <a name="systemId" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.property.systemId"></a>

```typescript
public readonly systemId: string;
```

- *Type:* string

The SystemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ResiliencehubTestTemplateArnComponents <a name="ResiliencehubTestTemplateArnComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents"></a>

Parsed components of a test-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubTestTemplateArnComponents: resiliencehub.ResiliencehubTestTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.property.testTemplateId">testTemplateId</a></code> | <code>string</code> | The TestTemplateId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `testTemplateId`<sup>Required</sup> <a name="testTemplateId" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnComponents.property.testTemplateId"></a>

```typescript
public readonly testTemplateId: string;
```

- *Type:* string

The TestTemplateId component.

---

### ResiliencehubTestTemplateArnProps <a name="ResiliencehubTestTemplateArnProps" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps"></a>

Properties for building a test-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

const resiliencehubTestTemplateArnProps: resiliencehub.ResiliencehubTestTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.property.testTemplateId">testTemplateId</a></code> | <code>string</code> | The TestTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `testTemplateId`<sup>Required</sup> <a name="testTemplateId" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.property.testTemplateId"></a>

```typescript
public readonly testTemplateId: string;
```

- *Type:* string

The TestTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ResiliencehubActions <a name="ResiliencehubActions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions"></a>

IAM action constants for the resiliencehub service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

new resiliencehub.ResiliencehubActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AcceptResourceGroupingRecommendations">AcceptResourceGroupingRecommendations</a></code> | <code>string</code> | [Write] resiliencehub:AcceptResourceGroupingRecommendations. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetFailureModeFinding">actionGetFailureModeFinding</a></code> | <code>string</code> | [Read] resiliencehub:GetFailureModeFinding. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] resiliencehub:GetPolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] resiliencehub:GetService. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetSystem">actionGetSystem</a></code> | <code>string</code> | [Read] resiliencehub:GetSystem. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetTest">actionGetTest</a></code> | <code>string</code> | [Read] resiliencehub:GetTest. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetTestRun">actionGetTestRun</a></code> | <code>string</code> | [Read] resiliencehub:GetTestRun. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetTestTemplate">actionGetTestTemplate</a></code> | <code>string</code> | [Read] resiliencehub:GetTestTemplate. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetUserJourney">actionGetUserJourney</a></code> | <code>string</code> | [Read] resiliencehub:GetUserJourney. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AddDraftAppVersionResourceMappings">AddDraftAppVersionResourceMappings</a></code> | <code>string</code> | [Write] resiliencehub:AddDraftAppVersionResourceMappings. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.BatchUpdateRecommendationStatus">BatchUpdateRecommendationStatus</a></code> | <code>string</code> | [Write] resiliencehub:BatchUpdateRecommendationStatus. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateApp">CreateApp</a></code> | <code>string</code> | [Write] resiliencehub:CreateApp. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateAppVersionAppComponent">CreateAppVersionAppComponent</a></code> | <code>string</code> | [Write] resiliencehub:CreateAppVersionAppComponent. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateAppVersionResource">CreateAppVersionResource</a></code> | <code>string</code> | [Write] resiliencehub:CreateAppVersionResource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateAssertion">CreateAssertion</a></code> | <code>string</code> | [Write] resiliencehub:CreateAssertion. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateInputSource">CreateInputSource</a></code> | <code>string</code> | [Write] resiliencehub:CreateInputSource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreatePolicy">CreatePolicy</a></code> | <code>string</code> | [Write] resiliencehub:CreatePolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateRecommendationTemplate">CreateRecommendationTemplate</a></code> | <code>string</code> | [Write] resiliencehub:CreateRecommendationTemplate. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateReport">CreateReport</a></code> | <code>string</code> | [Write] resiliencehub:CreateReport. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateResiliencyPolicy">CreateResiliencyPolicy</a></code> | <code>string</code> | [Write] resiliencehub:CreateResiliencyPolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateService">CreateService</a></code> | <code>string</code> | [Write] resiliencehub:CreateService. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateServiceFunction">CreateServiceFunction</a></code> | <code>string</code> | [Write] resiliencehub:CreateServiceFunction. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateServiceFunctionResources">CreateServiceFunctionResources</a></code> | <code>string</code> | [Write] resiliencehub:CreateServiceFunctionResources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateSystem">CreateSystem</a></code> | <code>string</code> | [Write] resiliencehub:CreateSystem. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateTest">CreateTest</a></code> | <code>string</code> | [Write] resiliencehub:CreateTest. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateUserJourney">CreateUserJourney</a></code> | <code>string</code> | [Write] resiliencehub:CreateUserJourney. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteApp">DeleteApp</a></code> | <code>string</code> | [Write] resiliencehub:DeleteApp. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAppAssessment">DeleteAppAssessment</a></code> | <code>string</code> | [Write] resiliencehub:DeleteAppAssessment. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAppInputSource">DeleteAppInputSource</a></code> | <code>string</code> | [Write] resiliencehub:DeleteAppInputSource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAppVersionAppComponent">DeleteAppVersionAppComponent</a></code> | <code>string</code> | [Write] resiliencehub:DeleteAppVersionAppComponent. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAppVersionResource">DeleteAppVersionResource</a></code> | <code>string</code> | [Write] resiliencehub:DeleteAppVersionResource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAssertion">DeleteAssertion</a></code> | <code>string</code> | [Write] resiliencehub:DeleteAssertion. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteInputSource">DeleteInputSource</a></code> | <code>string</code> | [Write] resiliencehub:DeleteInputSource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [Write] resiliencehub:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteRecommendationTemplate">DeleteRecommendationTemplate</a></code> | <code>string</code> | [Write] resiliencehub:DeleteRecommendationTemplate. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteResiliencyPolicy">DeleteResiliencyPolicy</a></code> | <code>string</code> | [Write] resiliencehub:DeleteResiliencyPolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteService">DeleteService</a></code> | <code>string</code> | [Write] resiliencehub:DeleteService. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteServiceFunction">DeleteServiceFunction</a></code> | <code>string</code> | [Write] resiliencehub:DeleteServiceFunction. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteServiceFunctionResources">DeleteServiceFunctionResources</a></code> | <code>string</code> | [Write] resiliencehub:DeleteServiceFunctionResources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteSystem">DeleteSystem</a></code> | <code>string</code> | [Write] resiliencehub:DeleteSystem. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteTest">DeleteTest</a></code> | <code>string</code> | [Write] resiliencehub:DeleteTest. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteTestSources">DeleteTestSources</a></code> | <code>string</code> | [Write] resiliencehub:DeleteTestSources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteUserJourney">DeleteUserJourney</a></code> | <code>string</code> | [Write] resiliencehub:DeleteUserJourney. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeApp">DescribeApp</a></code> | <code>string</code> | [Read] resiliencehub:DescribeApp. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppAssessment">DescribeAppAssessment</a></code> | <code>string</code> | [Read] resiliencehub:DescribeAppAssessment. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersion">DescribeAppVersion</a></code> | <code>string</code> | [Read] resiliencehub:DescribeAppVersion. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersionAppComponent">DescribeAppVersionAppComponent</a></code> | <code>string</code> | [Read] resiliencehub:DescribeAppVersionAppComponent. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersionResource">DescribeAppVersionResource</a></code> | <code>string</code> | [Read] resiliencehub:DescribeAppVersionResource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersionResourcesResolutionStatus">DescribeAppVersionResourcesResolutionStatus</a></code> | <code>string</code> | [Read] resiliencehub:DescribeAppVersionResourcesResolutionStatus. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersionTemplate">DescribeAppVersionTemplate</a></code> | <code>string</code> | [Read] resiliencehub:DescribeAppVersionTemplate. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeDraftAppVersionResourcesImportStatus">DescribeDraftAppVersionResourcesImportStatus</a></code> | <code>string</code> | [Read] resiliencehub:DescribeDraftAppVersionResourcesImportStatus. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeMetricsExport">DescribeMetricsExport</a></code> | <code>string</code> | [Read] resiliencehub:DescribeMetricsExport. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeResiliencyPolicy">DescribeResiliencyPolicy</a></code> | <code>string</code> | [Read] resiliencehub:DescribeResiliencyPolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeResourceGroupingRecommendationTask">DescribeResourceGroupingRecommendationTask</a></code> | <code>string</code> | [Read] resiliencehub:DescribeResourceGroupingRecommendationTask. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ImportApp">ImportApp</a></code> | <code>string</code> | [Write] resiliencehub:ImportApp. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ImportPolicy">ImportPolicy</a></code> | <code>string</code> | [Write] resiliencehub:ImportPolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ImportResourcesToDraftAppVersion">ImportResourcesToDraftAppVersion</a></code> | <code>string</code> | [Write] resiliencehub:ImportResourcesToDraftAppVersion. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAlarmRecommendations">ListAlarmRecommendations</a></code> | <code>string</code> | [List] resiliencehub:ListAlarmRecommendations. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppAssessmentComplianceDrifts">ListAppAssessmentComplianceDrifts</a></code> | <code>string</code> | [List] resiliencehub:ListAppAssessmentComplianceDrifts. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppAssessmentResourceDrifts">ListAppAssessmentResourceDrifts</a></code> | <code>string</code> | [List] resiliencehub:ListAppAssessmentResourceDrifts. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppAssessments">ListAppAssessments</a></code> | <code>string</code> | [List] resiliencehub:ListAppAssessments. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppComponentCompliances">ListAppComponentCompliances</a></code> | <code>string</code> | [List] resiliencehub:ListAppComponentCompliances. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppComponentRecommendations">ListAppComponentRecommendations</a></code> | <code>string</code> | [List] resiliencehub:ListAppComponentRecommendations. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppInputSources">ListAppInputSources</a></code> | <code>string</code> | [List] resiliencehub:ListAppInputSources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListApps">ListApps</a></code> | <code>string</code> | [List] resiliencehub:ListApps. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppVersionAppComponents">ListAppVersionAppComponents</a></code> | <code>string</code> | [List] resiliencehub:ListAppVersionAppComponents. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppVersionResourceMappings">ListAppVersionResourceMappings</a></code> | <code>string</code> | [List] resiliencehub:ListAppVersionResourceMappings. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppVersionResources">ListAppVersionResources</a></code> | <code>string</code> | [List] resiliencehub:ListAppVersionResources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppVersions">ListAppVersions</a></code> | <code>string</code> | [List] resiliencehub:ListAppVersions. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAssertions">ListAssertions</a></code> | <code>string</code> | [Read] resiliencehub:ListAssertions. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListDependencies">ListDependencies</a></code> | <code>string</code> | [Read] resiliencehub:ListDependencies. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListFailureModeAssessments">ListFailureModeAssessments</a></code> | <code>string</code> | [Read] resiliencehub:ListFailureModeAssessments. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListFailureModeFindings">ListFailureModeFindings</a></code> | <code>string</code> | [Read] resiliencehub:ListFailureModeFindings. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListInputSources">ListInputSources</a></code> | <code>string</code> | [Read] resiliencehub:ListInputSources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListMetrics">ListMetrics</a></code> | <code>string</code> | [List] resiliencehub:ListMetrics. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [Read] resiliencehub:ListPolicies. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListRecommendationTemplates">ListRecommendationTemplates</a></code> | <code>string</code> | [List] resiliencehub:ListRecommendationTemplates. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListReports">ListReports</a></code> | <code>string</code> | [Read] resiliencehub:ListReports. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListResiliencyPolicies">ListResiliencyPolicies</a></code> | <code>string</code> | [List] resiliencehub:ListResiliencyPolicies. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListResolvedTestRunTargetResources">ListResolvedTestRunTargetResources</a></code> | <code>string</code> | [Read] resiliencehub:ListResolvedTestRunTargetResources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListResourceGroupingRecommendations">ListResourceGroupingRecommendations</a></code> | <code>string</code> | [List] resiliencehub:ListResourceGroupingRecommendations. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListResources">ListResources</a></code> | <code>string</code> | [Read] resiliencehub:ListResources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListServiceEvents">ListServiceEvents</a></code> | <code>string</code> | [Read] resiliencehub:ListServiceEvents. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListServiceFunctions">ListServiceFunctions</a></code> | <code>string</code> | [Read] resiliencehub:ListServiceFunctions. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListServices">ListServices</a></code> | <code>string</code> | [Read] resiliencehub:ListServices. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListServiceTopologyEdges">ListServiceTopologyEdges</a></code> | <code>string</code> | [Read] resiliencehub:ListServiceTopologyEdges. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListSopRecommendations">ListSopRecommendations</a></code> | <code>string</code> | [List] resiliencehub:ListSopRecommendations. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListSuggestedResiliencyPolicies">ListSuggestedResiliencyPolicies</a></code> | <code>string</code> | [List] resiliencehub:ListSuggestedResiliencyPolicies. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListSystemEvents">ListSystemEvents</a></code> | <code>string</code> | [Read] resiliencehub:ListSystemEvents. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListSystems">ListSystems</a></code> | <code>string</code> | [Read] resiliencehub:ListSystems. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] resiliencehub:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestRecommendations">ListTestRecommendations</a></code> | <code>string</code> | [List] resiliencehub:ListTestRecommendations. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestRunEvents">ListTestRunEvents</a></code> | <code>string</code> | [Read] resiliencehub:ListTestRunEvents. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestRuns">ListTestRuns</a></code> | <code>string</code> | [Read] resiliencehub:ListTestRuns. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestRunSources">ListTestRunSources</a></code> | <code>string</code> | [Read] resiliencehub:ListTestRunSources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTests">ListTests</a></code> | <code>string</code> | [Read] resiliencehub:ListTests. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestSources">ListTestSources</a></code> | <code>string</code> | [Read] resiliencehub:ListTestSources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestTemplates">ListTestTemplates</a></code> | <code>string</code> | [Read] resiliencehub:ListTestTemplates. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListUnsupportedAppVersionResources">ListUnsupportedAppVersionResources</a></code> | <code>string</code> | [List] resiliencehub:ListUnsupportedAppVersionResources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListUserJourneys">ListUserJourneys</a></code> | <code>string</code> | [Read] resiliencehub:ListUserJourneys. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.PublishAppVersion">PublishAppVersion</a></code> | <code>string</code> | [Write] resiliencehub:PublishAppVersion. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.PutDraftAppVersionTemplate">PutDraftAppVersionTemplate</a></code> | <code>string</code> | [Write] resiliencehub:PutDraftAppVersionTemplate. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.PutTestSources">PutTestSources</a></code> | <code>string</code> | [Write] resiliencehub:PutTestSources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.RejectResourceGroupingRecommendations">RejectResourceGroupingRecommendations</a></code> | <code>string</code> | [Write] resiliencehub:RejectResourceGroupingRecommendations. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.RemoveDraftAppVersionResourceMappings">RemoveDraftAppVersionResourceMappings</a></code> | <code>string</code> | [Write] resiliencehub:RemoveDraftAppVersionResourceMappings. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ResolveAppVersionResources">ResolveAppVersionResources</a></code> | <code>string</code> | [Write] resiliencehub:ResolveAppVersionResources. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartAppAssessment">StartAppAssessment</a></code> | <code>string</code> | [Write] resiliencehub:StartAppAssessment. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartFailureModeAssessment">StartFailureModeAssessment</a></code> | <code>string</code> | [Write] resiliencehub:StartFailureModeAssessment. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartMetricsExport">StartMetricsExport</a></code> | <code>string</code> | [Write] resiliencehub:StartMetricsExport. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartResourceGroupingRecommendationTask">StartResourceGroupingRecommendationTask</a></code> | <code>string</code> | [Write] resiliencehub:StartResourceGroupingRecommendationTask. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartTestRun">StartTestRun</a></code> | <code>string</code> | [Write] resiliencehub:StartTestRun. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StopTestRun">StopTestRun</a></code> | <code>string</code> | [Write] resiliencehub:StopTestRun. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] resiliencehub:TagResource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] resiliencehub:UntagResource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateApp">UpdateApp</a></code> | <code>string</code> | [Write] resiliencehub:UpdateApp. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateAppVersion">UpdateAppVersion</a></code> | <code>string</code> | [Write] resiliencehub:UpdateAppVersion. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateAppVersionAppComponent">UpdateAppVersionAppComponent</a></code> | <code>string</code> | [Write] resiliencehub:UpdateAppVersionAppComponent. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateAppVersionResource">UpdateAppVersionResource</a></code> | <code>string</code> | [Write] resiliencehub:UpdateAppVersionResource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateAssertion">UpdateAssertion</a></code> | <code>string</code> | [Write] resiliencehub:UpdateAssertion. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateDependency">UpdateDependency</a></code> | <code>string</code> | [Write] resiliencehub:UpdateDependency. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateFailureModeFinding">UpdateFailureModeFinding</a></code> | <code>string</code> | [Write] resiliencehub:UpdateFailureModeFinding. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string</code> | [Write] resiliencehub:UpdatePolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateResiliencyPolicy">UpdateResiliencyPolicy</a></code> | <code>string</code> | [Write] resiliencehub:UpdateResiliencyPolicy. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateService">UpdateService</a></code> | <code>string</code> | [Write] resiliencehub:UpdateService. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateServiceFunction">UpdateServiceFunction</a></code> | <code>string</code> | [Write] resiliencehub:UpdateServiceFunction. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateSystem">UpdateSystem</a></code> | <code>string</code> | [Write] resiliencehub:UpdateSystem. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateTest">UpdateTest</a></code> | <code>string</code> | [Write] resiliencehub:UpdateTest. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateUserJourney">UpdateUserJourney</a></code> | <code>string</code> | [Write] resiliencehub:UpdateUserJourney. |

---

##### `AcceptResourceGroupingRecommendations`<sup>Required</sup> <a name="AcceptResourceGroupingRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AcceptResourceGroupingRecommendations"></a>

```typescript
public readonly AcceptResourceGroupingRecommendations: string;
```

- *Type:* string

[Write] resiliencehub:AcceptResourceGroupingRecommendations.

---

##### `actionGetFailureModeFinding`<sup>Required</sup> <a name="actionGetFailureModeFinding" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetFailureModeFinding"></a>

```typescript
public readonly actionGetFailureModeFinding: string;
```

- *Type:* string

[Read] resiliencehub:GetFailureModeFinding.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] resiliencehub:GetPolicy.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] resiliencehub:GetService.

---

##### `actionGetSystem`<sup>Required</sup> <a name="actionGetSystem" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetSystem"></a>

```typescript
public readonly actionGetSystem: string;
```

- *Type:* string

[Read] resiliencehub:GetSystem.

---

##### `actionGetTest`<sup>Required</sup> <a name="actionGetTest" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetTest"></a>

```typescript
public readonly actionGetTest: string;
```

- *Type:* string

[Read] resiliencehub:GetTest.

---

##### `actionGetTestRun`<sup>Required</sup> <a name="actionGetTestRun" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetTestRun"></a>

```typescript
public readonly actionGetTestRun: string;
```

- *Type:* string

[Read] resiliencehub:GetTestRun.

---

##### `actionGetTestTemplate`<sup>Required</sup> <a name="actionGetTestTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetTestTemplate"></a>

```typescript
public readonly actionGetTestTemplate: string;
```

- *Type:* string

[Read] resiliencehub:GetTestTemplate.

---

##### `actionGetUserJourney`<sup>Required</sup> <a name="actionGetUserJourney" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.actionGetUserJourney"></a>

```typescript
public readonly actionGetUserJourney: string;
```

- *Type:* string

[Read] resiliencehub:GetUserJourney.

---

##### `AddDraftAppVersionResourceMappings`<sup>Required</sup> <a name="AddDraftAppVersionResourceMappings" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AddDraftAppVersionResourceMappings"></a>

```typescript
public readonly AddDraftAppVersionResourceMappings: string;
```

- *Type:* string

[Write] resiliencehub:AddDraftAppVersionResourceMappings.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchUpdateRecommendationStatus`<sup>Required</sup> <a name="BatchUpdateRecommendationStatus" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.BatchUpdateRecommendationStatus"></a>

```typescript
public readonly BatchUpdateRecommendationStatus: string;
```

- *Type:* string

[Write] resiliencehub:BatchUpdateRecommendationStatus.

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateApp"></a>

```typescript
public readonly CreateApp: string;
```

- *Type:* string

[Write] resiliencehub:CreateApp.

---

##### `CreateAppVersionAppComponent`<sup>Required</sup> <a name="CreateAppVersionAppComponent" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateAppVersionAppComponent"></a>

```typescript
public readonly CreateAppVersionAppComponent: string;
```

- *Type:* string

[Write] resiliencehub:CreateAppVersionAppComponent.

---

##### `CreateAppVersionResource`<sup>Required</sup> <a name="CreateAppVersionResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateAppVersionResource"></a>

```typescript
public readonly CreateAppVersionResource: string;
```

- *Type:* string

[Write] resiliencehub:CreateAppVersionResource.

---

##### `CreateAssertion`<sup>Required</sup> <a name="CreateAssertion" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateAssertion"></a>

```typescript
public readonly CreateAssertion: string;
```

- *Type:* string

[Write] resiliencehub:CreateAssertion.

---

##### `CreateInputSource`<sup>Required</sup> <a name="CreateInputSource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateInputSource"></a>

```typescript
public readonly CreateInputSource: string;
```

- *Type:* string

[Write] resiliencehub:CreateInputSource.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string;
```

- *Type:* string

[Write] resiliencehub:CreatePolicy.

---

##### `CreateRecommendationTemplate`<sup>Required</sup> <a name="CreateRecommendationTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateRecommendationTemplate"></a>

```typescript
public readonly CreateRecommendationTemplate: string;
```

- *Type:* string

[Write] resiliencehub:CreateRecommendationTemplate.

---

##### `CreateReport`<sup>Required</sup> <a name="CreateReport" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateReport"></a>

```typescript
public readonly CreateReport: string;
```

- *Type:* string

[Write] resiliencehub:CreateReport.

---

##### `CreateResiliencyPolicy`<sup>Required</sup> <a name="CreateResiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateResiliencyPolicy"></a>

```typescript
public readonly CreateResiliencyPolicy: string;
```

- *Type:* string

[Write] resiliencehub:CreateResiliencyPolicy.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateService"></a>

```typescript
public readonly CreateService: string;
```

- *Type:* string

[Write] resiliencehub:CreateService.

---

##### `CreateServiceFunction`<sup>Required</sup> <a name="CreateServiceFunction" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateServiceFunction"></a>

```typescript
public readonly CreateServiceFunction: string;
```

- *Type:* string

[Write] resiliencehub:CreateServiceFunction.

---

##### `CreateServiceFunctionResources`<sup>Required</sup> <a name="CreateServiceFunctionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateServiceFunctionResources"></a>

```typescript
public readonly CreateServiceFunctionResources: string;
```

- *Type:* string

[Write] resiliencehub:CreateServiceFunctionResources.

---

##### `CreateSystem`<sup>Required</sup> <a name="CreateSystem" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateSystem"></a>

```typescript
public readonly CreateSystem: string;
```

- *Type:* string

[Write] resiliencehub:CreateSystem.

---

##### `CreateTest`<sup>Required</sup> <a name="CreateTest" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateTest"></a>

```typescript
public readonly CreateTest: string;
```

- *Type:* string

[Write] resiliencehub:CreateTest.

---

##### `CreateUserJourney`<sup>Required</sup> <a name="CreateUserJourney" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.CreateUserJourney"></a>

```typescript
public readonly CreateUserJourney: string;
```

- *Type:* string

[Write] resiliencehub:CreateUserJourney.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string;
```

- *Type:* string

[Write] resiliencehub:DeleteApp.

---

##### `DeleteAppAssessment`<sup>Required</sup> <a name="DeleteAppAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAppAssessment"></a>

```typescript
public readonly DeleteAppAssessment: string;
```

- *Type:* string

[Write] resiliencehub:DeleteAppAssessment.

---

##### `DeleteAppInputSource`<sup>Required</sup> <a name="DeleteAppInputSource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAppInputSource"></a>

```typescript
public readonly DeleteAppInputSource: string;
```

- *Type:* string

[Write] resiliencehub:DeleteAppInputSource.

---

##### `DeleteAppVersionAppComponent`<sup>Required</sup> <a name="DeleteAppVersionAppComponent" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAppVersionAppComponent"></a>

```typescript
public readonly DeleteAppVersionAppComponent: string;
```

- *Type:* string

[Write] resiliencehub:DeleteAppVersionAppComponent.

---

##### `DeleteAppVersionResource`<sup>Required</sup> <a name="DeleteAppVersionResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAppVersionResource"></a>

```typescript
public readonly DeleteAppVersionResource: string;
```

- *Type:* string

[Write] resiliencehub:DeleteAppVersionResource.

---

##### `DeleteAssertion`<sup>Required</sup> <a name="DeleteAssertion" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteAssertion"></a>

```typescript
public readonly DeleteAssertion: string;
```

- *Type:* string

[Write] resiliencehub:DeleteAssertion.

---

##### `DeleteInputSource`<sup>Required</sup> <a name="DeleteInputSource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteInputSource"></a>

```typescript
public readonly DeleteInputSource: string;
```

- *Type:* string

[Write] resiliencehub:DeleteInputSource.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[Write] resiliencehub:DeletePolicy.

---

##### `DeleteRecommendationTemplate`<sup>Required</sup> <a name="DeleteRecommendationTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteRecommendationTemplate"></a>

```typescript
public readonly DeleteRecommendationTemplate: string;
```

- *Type:* string

[Write] resiliencehub:DeleteRecommendationTemplate.

---

##### `DeleteResiliencyPolicy`<sup>Required</sup> <a name="DeleteResiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteResiliencyPolicy"></a>

```typescript
public readonly DeleteResiliencyPolicy: string;
```

- *Type:* string

[Write] resiliencehub:DeleteResiliencyPolicy.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteService"></a>

```typescript
public readonly DeleteService: string;
```

- *Type:* string

[Write] resiliencehub:DeleteService.

---

##### `DeleteServiceFunction`<sup>Required</sup> <a name="DeleteServiceFunction" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteServiceFunction"></a>

```typescript
public readonly DeleteServiceFunction: string;
```

- *Type:* string

[Write] resiliencehub:DeleteServiceFunction.

---

##### `DeleteServiceFunctionResources`<sup>Required</sup> <a name="DeleteServiceFunctionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteServiceFunctionResources"></a>

```typescript
public readonly DeleteServiceFunctionResources: string;
```

- *Type:* string

[Write] resiliencehub:DeleteServiceFunctionResources.

---

##### `DeleteSystem`<sup>Required</sup> <a name="DeleteSystem" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteSystem"></a>

```typescript
public readonly DeleteSystem: string;
```

- *Type:* string

[Write] resiliencehub:DeleteSystem.

---

##### `DeleteTest`<sup>Required</sup> <a name="DeleteTest" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteTest"></a>

```typescript
public readonly DeleteTest: string;
```

- *Type:* string

[Write] resiliencehub:DeleteTest.

---

##### `DeleteTestSources`<sup>Required</sup> <a name="DeleteTestSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteTestSources"></a>

```typescript
public readonly DeleteTestSources: string;
```

- *Type:* string

[Write] resiliencehub:DeleteTestSources.

---

##### `DeleteUserJourney`<sup>Required</sup> <a name="DeleteUserJourney" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DeleteUserJourney"></a>

```typescript
public readonly DeleteUserJourney: string;
```

- *Type:* string

[Write] resiliencehub:DeleteUserJourney.

---

##### `DescribeApp`<sup>Required</sup> <a name="DescribeApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeApp"></a>

```typescript
public readonly DescribeApp: string;
```

- *Type:* string

[Read] resiliencehub:DescribeApp.

---

##### `DescribeAppAssessment`<sup>Required</sup> <a name="DescribeAppAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppAssessment"></a>

```typescript
public readonly DescribeAppAssessment: string;
```

- *Type:* string

[Read] resiliencehub:DescribeAppAssessment.

---

##### `DescribeAppVersion`<sup>Required</sup> <a name="DescribeAppVersion" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersion"></a>

```typescript
public readonly DescribeAppVersion: string;
```

- *Type:* string

[Read] resiliencehub:DescribeAppVersion.

---

##### `DescribeAppVersionAppComponent`<sup>Required</sup> <a name="DescribeAppVersionAppComponent" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersionAppComponent"></a>

```typescript
public readonly DescribeAppVersionAppComponent: string;
```

- *Type:* string

[Read] resiliencehub:DescribeAppVersionAppComponent.

---

##### `DescribeAppVersionResource`<sup>Required</sup> <a name="DescribeAppVersionResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersionResource"></a>

```typescript
public readonly DescribeAppVersionResource: string;
```

- *Type:* string

[Read] resiliencehub:DescribeAppVersionResource.

---

##### `DescribeAppVersionResourcesResolutionStatus`<sup>Required</sup> <a name="DescribeAppVersionResourcesResolutionStatus" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersionResourcesResolutionStatus"></a>

```typescript
public readonly DescribeAppVersionResourcesResolutionStatus: string;
```

- *Type:* string

[Read] resiliencehub:DescribeAppVersionResourcesResolutionStatus.

---

##### `DescribeAppVersionTemplate`<sup>Required</sup> <a name="DescribeAppVersionTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeAppVersionTemplate"></a>

```typescript
public readonly DescribeAppVersionTemplate: string;
```

- *Type:* string

[Read] resiliencehub:DescribeAppVersionTemplate.

---

##### `DescribeDraftAppVersionResourcesImportStatus`<sup>Required</sup> <a name="DescribeDraftAppVersionResourcesImportStatus" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeDraftAppVersionResourcesImportStatus"></a>

```typescript
public readonly DescribeDraftAppVersionResourcesImportStatus: string;
```

- *Type:* string

[Read] resiliencehub:DescribeDraftAppVersionResourcesImportStatus.

---

##### `DescribeMetricsExport`<sup>Required</sup> <a name="DescribeMetricsExport" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeMetricsExport"></a>

```typescript
public readonly DescribeMetricsExport: string;
```

- *Type:* string

[Read] resiliencehub:DescribeMetricsExport.

---

##### `DescribeResiliencyPolicy`<sup>Required</sup> <a name="DescribeResiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeResiliencyPolicy"></a>

```typescript
public readonly DescribeResiliencyPolicy: string;
```

- *Type:* string

[Read] resiliencehub:DescribeResiliencyPolicy.

---

##### `DescribeResourceGroupingRecommendationTask`<sup>Required</sup> <a name="DescribeResourceGroupingRecommendationTask" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.DescribeResourceGroupingRecommendationTask"></a>

```typescript
public readonly DescribeResourceGroupingRecommendationTask: string;
```

- *Type:* string

[Read] resiliencehub:DescribeResourceGroupingRecommendationTask.

---

##### `ImportApp`<sup>Required</sup> <a name="ImportApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ImportApp"></a>

```typescript
public readonly ImportApp: string;
```

- *Type:* string

[Write] resiliencehub:ImportApp.

---

##### `ImportPolicy`<sup>Required</sup> <a name="ImportPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ImportPolicy"></a>

```typescript
public readonly ImportPolicy: string;
```

- *Type:* string

[Write] resiliencehub:ImportPolicy.

---

##### `ImportResourcesToDraftAppVersion`<sup>Required</sup> <a name="ImportResourcesToDraftAppVersion" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ImportResourcesToDraftAppVersion"></a>

```typescript
public readonly ImportResourcesToDraftAppVersion: string;
```

- *Type:* string

[Write] resiliencehub:ImportResourcesToDraftAppVersion.

---

##### `ListAlarmRecommendations`<sup>Required</sup> <a name="ListAlarmRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAlarmRecommendations"></a>

```typescript
public readonly ListAlarmRecommendations: string;
```

- *Type:* string

[List] resiliencehub:ListAlarmRecommendations.

---

##### `ListAppAssessmentComplianceDrifts`<sup>Required</sup> <a name="ListAppAssessmentComplianceDrifts" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppAssessmentComplianceDrifts"></a>

```typescript
public readonly ListAppAssessmentComplianceDrifts: string;
```

- *Type:* string

[List] resiliencehub:ListAppAssessmentComplianceDrifts.

---

##### `ListAppAssessmentResourceDrifts`<sup>Required</sup> <a name="ListAppAssessmentResourceDrifts" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppAssessmentResourceDrifts"></a>

```typescript
public readonly ListAppAssessmentResourceDrifts: string;
```

- *Type:* string

[List] resiliencehub:ListAppAssessmentResourceDrifts.

---

##### `ListAppAssessments`<sup>Required</sup> <a name="ListAppAssessments" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppAssessments"></a>

```typescript
public readonly ListAppAssessments: string;
```

- *Type:* string

[List] resiliencehub:ListAppAssessments.

---

##### `ListAppComponentCompliances`<sup>Required</sup> <a name="ListAppComponentCompliances" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppComponentCompliances"></a>

```typescript
public readonly ListAppComponentCompliances: string;
```

- *Type:* string

[List] resiliencehub:ListAppComponentCompliances.

---

##### `ListAppComponentRecommendations`<sup>Required</sup> <a name="ListAppComponentRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppComponentRecommendations"></a>

```typescript
public readonly ListAppComponentRecommendations: string;
```

- *Type:* string

[List] resiliencehub:ListAppComponentRecommendations.

---

##### `ListAppInputSources`<sup>Required</sup> <a name="ListAppInputSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppInputSources"></a>

```typescript
public readonly ListAppInputSources: string;
```

- *Type:* string

[List] resiliencehub:ListAppInputSources.

---

##### `ListApps`<sup>Required</sup> <a name="ListApps" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListApps"></a>

```typescript
public readonly ListApps: string;
```

- *Type:* string

[List] resiliencehub:ListApps.

---

##### `ListAppVersionAppComponents`<sup>Required</sup> <a name="ListAppVersionAppComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppVersionAppComponents"></a>

```typescript
public readonly ListAppVersionAppComponents: string;
```

- *Type:* string

[List] resiliencehub:ListAppVersionAppComponents.

---

##### `ListAppVersionResourceMappings`<sup>Required</sup> <a name="ListAppVersionResourceMappings" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppVersionResourceMappings"></a>

```typescript
public readonly ListAppVersionResourceMappings: string;
```

- *Type:* string

[List] resiliencehub:ListAppVersionResourceMappings.

---

##### `ListAppVersionResources`<sup>Required</sup> <a name="ListAppVersionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppVersionResources"></a>

```typescript
public readonly ListAppVersionResources: string;
```

- *Type:* string

[List] resiliencehub:ListAppVersionResources.

---

##### `ListAppVersions`<sup>Required</sup> <a name="ListAppVersions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAppVersions"></a>

```typescript
public readonly ListAppVersions: string;
```

- *Type:* string

[List] resiliencehub:ListAppVersions.

---

##### `ListAssertions`<sup>Required</sup> <a name="ListAssertions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListAssertions"></a>

```typescript
public readonly ListAssertions: string;
```

- *Type:* string

[Read] resiliencehub:ListAssertions.

---

##### `ListDependencies`<sup>Required</sup> <a name="ListDependencies" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListDependencies"></a>

```typescript
public readonly ListDependencies: string;
```

- *Type:* string

[Read] resiliencehub:ListDependencies.

---

##### `ListFailureModeAssessments`<sup>Required</sup> <a name="ListFailureModeAssessments" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListFailureModeAssessments"></a>

```typescript
public readonly ListFailureModeAssessments: string;
```

- *Type:* string

[Read] resiliencehub:ListFailureModeAssessments.

---

##### `ListFailureModeFindings`<sup>Required</sup> <a name="ListFailureModeFindings" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListFailureModeFindings"></a>

```typescript
public readonly ListFailureModeFindings: string;
```

- *Type:* string

[Read] resiliencehub:ListFailureModeFindings.

---

##### `ListInputSources`<sup>Required</sup> <a name="ListInputSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListInputSources"></a>

```typescript
public readonly ListInputSources: string;
```

- *Type:* string

[Read] resiliencehub:ListInputSources.

---

##### `ListMetrics`<sup>Required</sup> <a name="ListMetrics" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListMetrics"></a>

```typescript
public readonly ListMetrics: string;
```

- *Type:* string

[List] resiliencehub:ListMetrics.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[Read] resiliencehub:ListPolicies.

---

##### `ListRecommendationTemplates`<sup>Required</sup> <a name="ListRecommendationTemplates" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListRecommendationTemplates"></a>

```typescript
public readonly ListRecommendationTemplates: string;
```

- *Type:* string

[List] resiliencehub:ListRecommendationTemplates.

---

##### `ListReports`<sup>Required</sup> <a name="ListReports" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListReports"></a>

```typescript
public readonly ListReports: string;
```

- *Type:* string

[Read] resiliencehub:ListReports.

---

##### `ListResiliencyPolicies`<sup>Required</sup> <a name="ListResiliencyPolicies" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListResiliencyPolicies"></a>

```typescript
public readonly ListResiliencyPolicies: string;
```

- *Type:* string

[List] resiliencehub:ListResiliencyPolicies.

---

##### `ListResolvedTestRunTargetResources`<sup>Required</sup> <a name="ListResolvedTestRunTargetResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListResolvedTestRunTargetResources"></a>

```typescript
public readonly ListResolvedTestRunTargetResources: string;
```

- *Type:* string

[Read] resiliencehub:ListResolvedTestRunTargetResources.

---

##### `ListResourceGroupingRecommendations`<sup>Required</sup> <a name="ListResourceGroupingRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListResourceGroupingRecommendations"></a>

```typescript
public readonly ListResourceGroupingRecommendations: string;
```

- *Type:* string

[List] resiliencehub:ListResourceGroupingRecommendations.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListResources"></a>

```typescript
public readonly ListResources: string;
```

- *Type:* string

[Read] resiliencehub:ListResources.

---

##### `ListServiceEvents`<sup>Required</sup> <a name="ListServiceEvents" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListServiceEvents"></a>

```typescript
public readonly ListServiceEvents: string;
```

- *Type:* string

[Read] resiliencehub:ListServiceEvents.

---

##### `ListServiceFunctions`<sup>Required</sup> <a name="ListServiceFunctions" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListServiceFunctions"></a>

```typescript
public readonly ListServiceFunctions: string;
```

- *Type:* string

[Read] resiliencehub:ListServiceFunctions.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[Read] resiliencehub:ListServices.

---

##### `ListServiceTopologyEdges`<sup>Required</sup> <a name="ListServiceTopologyEdges" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListServiceTopologyEdges"></a>

```typescript
public readonly ListServiceTopologyEdges: string;
```

- *Type:* string

[Read] resiliencehub:ListServiceTopologyEdges.

---

##### `ListSopRecommendations`<sup>Required</sup> <a name="ListSopRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListSopRecommendations"></a>

```typescript
public readonly ListSopRecommendations: string;
```

- *Type:* string

[List] resiliencehub:ListSopRecommendations.

---

##### `ListSuggestedResiliencyPolicies`<sup>Required</sup> <a name="ListSuggestedResiliencyPolicies" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListSuggestedResiliencyPolicies"></a>

```typescript
public readonly ListSuggestedResiliencyPolicies: string;
```

- *Type:* string

[List] resiliencehub:ListSuggestedResiliencyPolicies.

---

##### `ListSystemEvents`<sup>Required</sup> <a name="ListSystemEvents" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListSystemEvents"></a>

```typescript
public readonly ListSystemEvents: string;
```

- *Type:* string

[Read] resiliencehub:ListSystemEvents.

---

##### `ListSystems`<sup>Required</sup> <a name="ListSystems" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListSystems"></a>

```typescript
public readonly ListSystems: string;
```

- *Type:* string

[Read] resiliencehub:ListSystems.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] resiliencehub:ListTagsForResource.

---

##### `ListTestRecommendations`<sup>Required</sup> <a name="ListTestRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestRecommendations"></a>

```typescript
public readonly ListTestRecommendations: string;
```

- *Type:* string

[List] resiliencehub:ListTestRecommendations.

---

##### `ListTestRunEvents`<sup>Required</sup> <a name="ListTestRunEvents" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestRunEvents"></a>

```typescript
public readonly ListTestRunEvents: string;
```

- *Type:* string

[Read] resiliencehub:ListTestRunEvents.

---

##### `ListTestRuns`<sup>Required</sup> <a name="ListTestRuns" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestRuns"></a>

```typescript
public readonly ListTestRuns: string;
```

- *Type:* string

[Read] resiliencehub:ListTestRuns.

---

##### `ListTestRunSources`<sup>Required</sup> <a name="ListTestRunSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestRunSources"></a>

```typescript
public readonly ListTestRunSources: string;
```

- *Type:* string

[Read] resiliencehub:ListTestRunSources.

---

##### `ListTests`<sup>Required</sup> <a name="ListTests" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTests"></a>

```typescript
public readonly ListTests: string;
```

- *Type:* string

[Read] resiliencehub:ListTests.

---

##### `ListTestSources`<sup>Required</sup> <a name="ListTestSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestSources"></a>

```typescript
public readonly ListTestSources: string;
```

- *Type:* string

[Read] resiliencehub:ListTestSources.

---

##### `ListTestTemplates`<sup>Required</sup> <a name="ListTestTemplates" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListTestTemplates"></a>

```typescript
public readonly ListTestTemplates: string;
```

- *Type:* string

[Read] resiliencehub:ListTestTemplates.

---

##### `ListUnsupportedAppVersionResources`<sup>Required</sup> <a name="ListUnsupportedAppVersionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListUnsupportedAppVersionResources"></a>

```typescript
public readonly ListUnsupportedAppVersionResources: string;
```

- *Type:* string

[List] resiliencehub:ListUnsupportedAppVersionResources.

---

##### `ListUserJourneys`<sup>Required</sup> <a name="ListUserJourneys" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ListUserJourneys"></a>

```typescript
public readonly ListUserJourneys: string;
```

- *Type:* string

[Read] resiliencehub:ListUserJourneys.

---

##### `PublishAppVersion`<sup>Required</sup> <a name="PublishAppVersion" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.PublishAppVersion"></a>

```typescript
public readonly PublishAppVersion: string;
```

- *Type:* string

[Write] resiliencehub:PublishAppVersion.

---

##### `PutDraftAppVersionTemplate`<sup>Required</sup> <a name="PutDraftAppVersionTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.PutDraftAppVersionTemplate"></a>

```typescript
public readonly PutDraftAppVersionTemplate: string;
```

- *Type:* string

[Write] resiliencehub:PutDraftAppVersionTemplate.

---

##### `PutTestSources`<sup>Required</sup> <a name="PutTestSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.PutTestSources"></a>

```typescript
public readonly PutTestSources: string;
```

- *Type:* string

[Write] resiliencehub:PutTestSources.

---

##### `RejectResourceGroupingRecommendations`<sup>Required</sup> <a name="RejectResourceGroupingRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.RejectResourceGroupingRecommendations"></a>

```typescript
public readonly RejectResourceGroupingRecommendations: string;
```

- *Type:* string

[Write] resiliencehub:RejectResourceGroupingRecommendations.

---

##### `RemoveDraftAppVersionResourceMappings`<sup>Required</sup> <a name="RemoveDraftAppVersionResourceMappings" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.RemoveDraftAppVersionResourceMappings"></a>

```typescript
public readonly RemoveDraftAppVersionResourceMappings: string;
```

- *Type:* string

[Write] resiliencehub:RemoveDraftAppVersionResourceMappings.

---

##### `ResolveAppVersionResources`<sup>Required</sup> <a name="ResolveAppVersionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.ResolveAppVersionResources"></a>

```typescript
public readonly ResolveAppVersionResources: string;
```

- *Type:* string

[Write] resiliencehub:ResolveAppVersionResources.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAppAssessment`<sup>Required</sup> <a name="StartAppAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartAppAssessment"></a>

```typescript
public readonly StartAppAssessment: string;
```

- *Type:* string

[Write] resiliencehub:StartAppAssessment.

---

##### `StartFailureModeAssessment`<sup>Required</sup> <a name="StartFailureModeAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartFailureModeAssessment"></a>

```typescript
public readonly StartFailureModeAssessment: string;
```

- *Type:* string

[Write] resiliencehub:StartFailureModeAssessment.

---

##### `StartMetricsExport`<sup>Required</sup> <a name="StartMetricsExport" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartMetricsExport"></a>

```typescript
public readonly StartMetricsExport: string;
```

- *Type:* string

[Write] resiliencehub:StartMetricsExport.

---

##### `StartResourceGroupingRecommendationTask`<sup>Required</sup> <a name="StartResourceGroupingRecommendationTask" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartResourceGroupingRecommendationTask"></a>

```typescript
public readonly StartResourceGroupingRecommendationTask: string;
```

- *Type:* string

[Write] resiliencehub:StartResourceGroupingRecommendationTask.

---

##### `StartTestRun`<sup>Required</sup> <a name="StartTestRun" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StartTestRun"></a>

```typescript
public readonly StartTestRun: string;
```

- *Type:* string

[Write] resiliencehub:StartTestRun.

---

##### `StopTestRun`<sup>Required</sup> <a name="StopTestRun" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.StopTestRun"></a>

```typescript
public readonly StopTestRun: string;
```

- *Type:* string

[Write] resiliencehub:StopTestRun.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] resiliencehub:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] resiliencehub:UntagResource.

---

##### `UpdateApp`<sup>Required</sup> <a name="UpdateApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateApp"></a>

```typescript
public readonly UpdateApp: string;
```

- *Type:* string

[Write] resiliencehub:UpdateApp.

---

##### `UpdateAppVersion`<sup>Required</sup> <a name="UpdateAppVersion" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateAppVersion"></a>

```typescript
public readonly UpdateAppVersion: string;
```

- *Type:* string

[Write] resiliencehub:UpdateAppVersion.

---

##### `UpdateAppVersionAppComponent`<sup>Required</sup> <a name="UpdateAppVersionAppComponent" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateAppVersionAppComponent"></a>

```typescript
public readonly UpdateAppVersionAppComponent: string;
```

- *Type:* string

[Write] resiliencehub:UpdateAppVersionAppComponent.

---

##### `UpdateAppVersionResource`<sup>Required</sup> <a name="UpdateAppVersionResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateAppVersionResource"></a>

```typescript
public readonly UpdateAppVersionResource: string;
```

- *Type:* string

[Write] resiliencehub:UpdateAppVersionResource.

---

##### `UpdateAssertion`<sup>Required</sup> <a name="UpdateAssertion" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateAssertion"></a>

```typescript
public readonly UpdateAssertion: string;
```

- *Type:* string

[Write] resiliencehub:UpdateAssertion.

---

##### `UpdateDependency`<sup>Required</sup> <a name="UpdateDependency" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateDependency"></a>

```typescript
public readonly UpdateDependency: string;
```

- *Type:* string

[Write] resiliencehub:UpdateDependency.

---

##### `UpdateFailureModeFinding`<sup>Required</sup> <a name="UpdateFailureModeFinding" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateFailureModeFinding"></a>

```typescript
public readonly UpdateFailureModeFinding: string;
```

- *Type:* string

[Write] resiliencehub:UpdateFailureModeFinding.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string;
```

- *Type:* string

[Write] resiliencehub:UpdatePolicy.

---

##### `UpdateResiliencyPolicy`<sup>Required</sup> <a name="UpdateResiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateResiliencyPolicy"></a>

```typescript
public readonly UpdateResiliencyPolicy: string;
```

- *Type:* string

[Write] resiliencehub:UpdateResiliencyPolicy.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateService"></a>

```typescript
public readonly UpdateService: string;
```

- *Type:* string

[Write] resiliencehub:UpdateService.

---

##### `UpdateServiceFunction`<sup>Required</sup> <a name="UpdateServiceFunction" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateServiceFunction"></a>

```typescript
public readonly UpdateServiceFunction: string;
```

- *Type:* string

[Write] resiliencehub:UpdateServiceFunction.

---

##### `UpdateSystem`<sup>Required</sup> <a name="UpdateSystem" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateSystem"></a>

```typescript
public readonly UpdateSystem: string;
```

- *Type:* string

[Write] resiliencehub:UpdateSystem.

---

##### `UpdateTest`<sup>Required</sup> <a name="UpdateTest" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateTest"></a>

```typescript
public readonly UpdateTest: string;
```

- *Type:* string

[Write] resiliencehub:UpdateTest.

---

##### `UpdateUserJourney`<sup>Required</sup> <a name="UpdateUserJourney" id="@cdk_utils/iam.resiliencehub.ResiliencehubActions.property.UpdateUserJourney"></a>

```typescript
public readonly UpdateUserJourney: string;
```

- *Type:* string

[Write] resiliencehub:UpdateUserJourney.

---

### ResiliencehubConditions <a name="ResiliencehubConditions" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions"></a>

Condition key constants and builders for resiliencehub.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

new resiliencehub.ResiliencehubConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.requestTag"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.resourceTag"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.tagKeys"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.CreateAppConditionKeys">CreateAppConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApp action. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.CreateRecommendationTemplateConditionKeys">CreateRecommendationTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecommendationTemplate action. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.CreateResiliencyPolicyConditionKeys">CreateResiliencyPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResiliencyPolicy action. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.StartAppAssessmentConditionKeys">StartAppAssessmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAppAssessment action. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAppConditionKeys`<sup>Required</sup> <a name="CreateAppConditionKeys" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.CreateAppConditionKeys"></a>

```typescript
public readonly CreateAppConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApp action.

---

##### `CreateRecommendationTemplateConditionKeys`<sup>Required</sup> <a name="CreateRecommendationTemplateConditionKeys" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.CreateRecommendationTemplateConditionKeys"></a>

```typescript
public readonly CreateRecommendationTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecommendationTemplate action.

---

##### `CreateResiliencyPolicyConditionKeys`<sup>Required</sup> <a name="CreateResiliencyPolicyConditionKeys" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.CreateResiliencyPolicyConditionKeys"></a>

```typescript
public readonly CreateResiliencyPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResiliencyPolicy action.

---

##### `StartAppAssessmentConditionKeys`<sup>Required</sup> <a name="StartAppAssessmentConditionKeys" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.StartAppAssessmentConditionKeys"></a>

```typescript
public readonly StartAppAssessmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAppAssessment action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.resiliencehub.ResiliencehubConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ResiliencehubOperations <a name="ResiliencehubOperations" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations"></a>

API operation to required IAM actions mapping for resiliencehub.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

new resiliencehub.ResiliencehubOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.AcceptResourceGroupingRecommendations">AcceptResourceGroupingRecommendations</a></code> | <code>string[]</code> | IAM actions required for the AcceptResourceGroupingRecommendations API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.AddDraftAppVersionResourceMappings">AddDraftAppVersionResourceMappings</a></code> | <code>string[]</code> | IAM actions required for the AddDraftAppVersionResourceMappings API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.BatchUpdateRecommendationStatus">BatchUpdateRecommendationStatus</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateRecommendationStatus API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateApp">CreateApp</a></code> | <code>string[]</code> | IAM actions required for the CreateApp API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateAppVersionAppComponent">CreateAppVersionAppComponent</a></code> | <code>string[]</code> | IAM actions required for the CreateAppVersionAppComponent API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateAppVersionResource">CreateAppVersionResource</a></code> | <code>string[]</code> | IAM actions required for the CreateAppVersionResource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateAssertion">CreateAssertion</a></code> | <code>string[]</code> | IAM actions required for the CreateAssertion API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateInputSource">CreateInputSource</a></code> | <code>string[]</code> | IAM actions required for the CreateInputSource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreatePolicy">CreatePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateRecommendationTemplate">CreateRecommendationTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateRecommendationTemplate API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateReport">CreateReport</a></code> | <code>string[]</code> | IAM actions required for the CreateReport API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateResiliencyPolicy">CreateResiliencyPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateResiliencyPolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateService">CreateService</a></code> | <code>string[]</code> | IAM actions required for the CreateService API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateServiceFunction">CreateServiceFunction</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceFunction API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateServiceFunctionResources">CreateServiceFunctionResources</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceFunctionResources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateSystem">CreateSystem</a></code> | <code>string[]</code> | IAM actions required for the CreateSystem API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateTest">CreateTest</a></code> | <code>string[]</code> | IAM actions required for the CreateTest API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateUserJourney">CreateUserJourney</a></code> | <code>string[]</code> | IAM actions required for the CreateUserJourney API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteApp">DeleteApp</a></code> | <code>string[]</code> | IAM actions required for the DeleteApp API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAppAssessment">DeleteAppAssessment</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppAssessment API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAppInputSource">DeleteAppInputSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppInputSource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAppVersionAppComponent">DeleteAppVersionAppComponent</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppVersionAppComponent API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAppVersionResource">DeleteAppVersionResource</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppVersionResource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAssertion">DeleteAssertion</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssertion API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteInputSource">DeleteInputSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteInputSource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteRecommendationTemplate">DeleteRecommendationTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecommendationTemplate API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteResiliencyPolicy">DeleteResiliencyPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResiliencyPolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteService">DeleteService</a></code> | <code>string[]</code> | IAM actions required for the DeleteService API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteServiceFunction">DeleteServiceFunction</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceFunction API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteServiceFunctionResources">DeleteServiceFunctionResources</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceFunctionResources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteSystem">DeleteSystem</a></code> | <code>string[]</code> | IAM actions required for the DeleteSystem API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteTest">DeleteTest</a></code> | <code>string[]</code> | IAM actions required for the DeleteTest API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteTestSources">DeleteTestSources</a></code> | <code>string[]</code> | IAM actions required for the DeleteTestSources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteUserJourney">DeleteUserJourney</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserJourney API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeApp">DescribeApp</a></code> | <code>string[]</code> | IAM actions required for the DescribeApp API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppAssessment">DescribeAppAssessment</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppAssessment API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersion">DescribeAppVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppVersion API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersionAppComponent">DescribeAppVersionAppComponent</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppVersionAppComponent API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersionResource">DescribeAppVersionResource</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppVersionResource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersionResourcesResolutionStatus">DescribeAppVersionResourcesResolutionStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppVersionResourcesResolutionStatus API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersionTemplate">DescribeAppVersionTemplate</a></code> | <code>string[]</code> | IAM actions required for the DescribeAppVersionTemplate API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeDraftAppVersionResourcesImportStatus">DescribeDraftAppVersionResourcesImportStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeDraftAppVersionResourcesImportStatus API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeMetricsExport">DescribeMetricsExport</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetricsExport API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeResiliencyPolicy">DescribeResiliencyPolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeResiliencyPolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeResourceGroupingRecommendationTask">DescribeResourceGroupingRecommendationTask</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourceGroupingRecommendationTask API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ImportApp">ImportApp</a></code> | <code>string[]</code> | IAM actions required for the ImportApp API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ImportPolicy">ImportPolicy</a></code> | <code>string[]</code> | IAM actions required for the ImportPolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ImportResourcesToDraftAppVersion">ImportResourcesToDraftAppVersion</a></code> | <code>string[]</code> | IAM actions required for the ImportResourcesToDraftAppVersion API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAlarmRecommendations">ListAlarmRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListAlarmRecommendations API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppAssessmentComplianceDrifts">ListAppAssessmentComplianceDrifts</a></code> | <code>string[]</code> | IAM actions required for the ListAppAssessmentComplianceDrifts API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppAssessmentResourceDrifts">ListAppAssessmentResourceDrifts</a></code> | <code>string[]</code> | IAM actions required for the ListAppAssessmentResourceDrifts API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppAssessments">ListAppAssessments</a></code> | <code>string[]</code> | IAM actions required for the ListAppAssessments API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppComponentCompliances">ListAppComponentCompliances</a></code> | <code>string[]</code> | IAM actions required for the ListAppComponentCompliances API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppComponentRecommendations">ListAppComponentRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListAppComponentRecommendations API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppInputSources">ListAppInputSources</a></code> | <code>string[]</code> | IAM actions required for the ListAppInputSources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListApps">ListApps</a></code> | <code>string[]</code> | IAM actions required for the ListApps API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppVersionAppComponents">ListAppVersionAppComponents</a></code> | <code>string[]</code> | IAM actions required for the ListAppVersionAppComponents API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppVersionResourceMappings">ListAppVersionResourceMappings</a></code> | <code>string[]</code> | IAM actions required for the ListAppVersionResourceMappings API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppVersionResources">ListAppVersionResources</a></code> | <code>string[]</code> | IAM actions required for the ListAppVersionResources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppVersions">ListAppVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAppVersions API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAssertions">ListAssertions</a></code> | <code>string[]</code> | IAM actions required for the ListAssertions API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListDependencies">ListDependencies</a></code> | <code>string[]</code> | IAM actions required for the ListDependencies API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListFailureModeAssessments">ListFailureModeAssessments</a></code> | <code>string[]</code> | IAM actions required for the ListFailureModeAssessments API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListFailureModeFindings">ListFailureModeFindings</a></code> | <code>string[]</code> | IAM actions required for the ListFailureModeFindings API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListInputSources">ListInputSources</a></code> | <code>string[]</code> | IAM actions required for the ListInputSources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListMetrics">ListMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListMetrics API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListRecommendationTemplates">ListRecommendationTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendationTemplates API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListReports">ListReports</a></code> | <code>string[]</code> | IAM actions required for the ListReports API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListResiliencyPolicies">ListResiliencyPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListResiliencyPolicies API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListResolvedTestRunTargetResources">ListResolvedTestRunTargetResources</a></code> | <code>string[]</code> | IAM actions required for the ListResolvedTestRunTargetResources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListResourceGroupingRecommendations">ListResourceGroupingRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListResourceGroupingRecommendations API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListResources">ListResources</a></code> | <code>string[]</code> | IAM actions required for the ListResources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListServiceEvents">ListServiceEvents</a></code> | <code>string[]</code> | IAM actions required for the ListServiceEvents API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListServiceFunctions">ListServiceFunctions</a></code> | <code>string[]</code> | IAM actions required for the ListServiceFunctions API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListServiceTopologyEdges">ListServiceTopologyEdges</a></code> | <code>string[]</code> | IAM actions required for the ListServiceTopologyEdges API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListSopRecommendations">ListSopRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListSopRecommendations API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListSuggestedResiliencyPolicies">ListSuggestedResiliencyPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListSuggestedResiliencyPolicies API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListSystemEvents">ListSystemEvents</a></code> | <code>string[]</code> | IAM actions required for the ListSystemEvents API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListSystems">ListSystems</a></code> | <code>string[]</code> | IAM actions required for the ListSystems API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestRecommendations">ListTestRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListTestRecommendations API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestRunEvents">ListTestRunEvents</a></code> | <code>string[]</code> | IAM actions required for the ListTestRunEvents API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestRuns">ListTestRuns</a></code> | <code>string[]</code> | IAM actions required for the ListTestRuns API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestRunSources">ListTestRunSources</a></code> | <code>string[]</code> | IAM actions required for the ListTestRunSources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTests">ListTests</a></code> | <code>string[]</code> | IAM actions required for the ListTests API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestSources">ListTestSources</a></code> | <code>string[]</code> | IAM actions required for the ListTestSources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestTemplates">ListTestTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListTestTemplates API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListUnsupportedAppVersionResources">ListUnsupportedAppVersionResources</a></code> | <code>string[]</code> | IAM actions required for the ListUnsupportedAppVersionResources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListUserJourneys">ListUserJourneys</a></code> | <code>string[]</code> | IAM actions required for the ListUserJourneys API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetFailureModeFinding">opGetFailureModeFinding</a></code> | <code>string[]</code> | IAM actions required for the GetFailureModeFinding API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetService">opGetService</a></code> | <code>string[]</code> | IAM actions required for the GetService API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetSystem">opGetSystem</a></code> | <code>string[]</code> | IAM actions required for the GetSystem API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetTest">opGetTest</a></code> | <code>string[]</code> | IAM actions required for the GetTest API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetTestRun">opGetTestRun</a></code> | <code>string[]</code> | IAM actions required for the GetTestRun API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetTestTemplate">opGetTestTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetTestTemplate API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetUserJourney">opGetUserJourney</a></code> | <code>string[]</code> | IAM actions required for the GetUserJourney API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.PublishAppVersion">PublishAppVersion</a></code> | <code>string[]</code> | IAM actions required for the PublishAppVersion API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.PutDraftAppVersionTemplate">PutDraftAppVersionTemplate</a></code> | <code>string[]</code> | IAM actions required for the PutDraftAppVersionTemplate API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.PutTestSources">PutTestSources</a></code> | <code>string[]</code> | IAM actions required for the PutTestSources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.RejectResourceGroupingRecommendations">RejectResourceGroupingRecommendations</a></code> | <code>string[]</code> | IAM actions required for the RejectResourceGroupingRecommendations API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.RemoveDraftAppVersionResourceMappings">RemoveDraftAppVersionResourceMappings</a></code> | <code>string[]</code> | IAM actions required for the RemoveDraftAppVersionResourceMappings API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ResolveAppVersionResources">ResolveAppVersionResources</a></code> | <code>string[]</code> | IAM actions required for the ResolveAppVersionResources API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartAppAssessment">StartAppAssessment</a></code> | <code>string[]</code> | IAM actions required for the StartAppAssessment API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartFailureModeAssessment">StartFailureModeAssessment</a></code> | <code>string[]</code> | IAM actions required for the StartFailureModeAssessment API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartMetricsExport">StartMetricsExport</a></code> | <code>string[]</code> | IAM actions required for the StartMetricsExport API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartResourceGroupingRecommendationTask">StartResourceGroupingRecommendationTask</a></code> | <code>string[]</code> | IAM actions required for the StartResourceGroupingRecommendationTask API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartTestRun">StartTestRun</a></code> | <code>string[]</code> | IAM actions required for the StartTestRun API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StopTestRun">StopTestRun</a></code> | <code>string[]</code> | IAM actions required for the StopTestRun API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateApp">UpdateApp</a></code> | <code>string[]</code> | IAM actions required for the UpdateApp API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateAppVersion">UpdateAppVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppVersion API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateAppVersionAppComponent">UpdateAppVersionAppComponent</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppVersionAppComponent API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateAppVersionResource">UpdateAppVersionResource</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppVersionResource API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateAssertion">UpdateAssertion</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssertion API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateDependency">UpdateDependency</a></code> | <code>string[]</code> | IAM actions required for the UpdateDependency API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateFailureModeFinding">UpdateFailureModeFinding</a></code> | <code>string[]</code> | IAM actions required for the UpdateFailureModeFinding API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdatePolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateResiliencyPolicy">UpdateResiliencyPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateResiliencyPolicy API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateService">UpdateService</a></code> | <code>string[]</code> | IAM actions required for the UpdateService API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateServiceFunction">UpdateServiceFunction</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceFunction API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateSystem">UpdateSystem</a></code> | <code>string[]</code> | IAM actions required for the UpdateSystem API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateTest">UpdateTest</a></code> | <code>string[]</code> | IAM actions required for the UpdateTest API call. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateUserJourney">UpdateUserJourney</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserJourney API call. |

---

##### `AcceptResourceGroupingRecommendations`<sup>Required</sup> <a name="AcceptResourceGroupingRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.AcceptResourceGroupingRecommendations"></a>

```typescript
public readonly AcceptResourceGroupingRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the AcceptResourceGroupingRecommendations API call.

---

##### `AddDraftAppVersionResourceMappings`<sup>Required</sup> <a name="AddDraftAppVersionResourceMappings" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.AddDraftAppVersionResourceMappings"></a>

```typescript
public readonly AddDraftAppVersionResourceMappings: string[];
```

- *Type:* string[]

IAM actions required for the AddDraftAppVersionResourceMappings API call.

---

##### `BatchUpdateRecommendationStatus`<sup>Required</sup> <a name="BatchUpdateRecommendationStatus" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.BatchUpdateRecommendationStatus"></a>

```typescript
public readonly BatchUpdateRecommendationStatus: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateRecommendationStatus API call.

---

##### `CreateApp`<sup>Required</sup> <a name="CreateApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateApp"></a>

```typescript
public readonly CreateApp: string[];
```

- *Type:* string[]

IAM actions required for the CreateApp API call.

---

##### `CreateAppVersionAppComponent`<sup>Required</sup> <a name="CreateAppVersionAppComponent" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateAppVersionAppComponent"></a>

```typescript
public readonly CreateAppVersionAppComponent: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppVersionAppComponent API call.

---

##### `CreateAppVersionResource`<sup>Required</sup> <a name="CreateAppVersionResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateAppVersionResource"></a>

```typescript
public readonly CreateAppVersionResource: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppVersionResource API call.

---

##### `CreateAssertion`<sup>Required</sup> <a name="CreateAssertion" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateAssertion"></a>

```typescript
public readonly CreateAssertion: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssertion API call.

---

##### `CreateInputSource`<sup>Required</sup> <a name="CreateInputSource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateInputSource"></a>

```typescript
public readonly CreateInputSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateInputSource API call.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicy API call.

---

##### `CreateRecommendationTemplate`<sup>Required</sup> <a name="CreateRecommendationTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateRecommendationTemplate"></a>

```typescript
public readonly CreateRecommendationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecommendationTemplate API call.

---

##### `CreateReport`<sup>Required</sup> <a name="CreateReport" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateReport"></a>

```typescript
public readonly CreateReport: string[];
```

- *Type:* string[]

IAM actions required for the CreateReport API call.

---

##### `CreateResiliencyPolicy`<sup>Required</sup> <a name="CreateResiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateResiliencyPolicy"></a>

```typescript
public readonly CreateResiliencyPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateResiliencyPolicy API call.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateService"></a>

```typescript
public readonly CreateService: string[];
```

- *Type:* string[]

IAM actions required for the CreateService API call.

---

##### `CreateServiceFunction`<sup>Required</sup> <a name="CreateServiceFunction" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateServiceFunction"></a>

```typescript
public readonly CreateServiceFunction: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceFunction API call.

---

##### `CreateServiceFunctionResources`<sup>Required</sup> <a name="CreateServiceFunctionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateServiceFunctionResources"></a>

```typescript
public readonly CreateServiceFunctionResources: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceFunctionResources API call.

---

##### `CreateSystem`<sup>Required</sup> <a name="CreateSystem" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateSystem"></a>

```typescript
public readonly CreateSystem: string[];
```

- *Type:* string[]

IAM actions required for the CreateSystem API call.

---

##### `CreateTest`<sup>Required</sup> <a name="CreateTest" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateTest"></a>

```typescript
public readonly CreateTest: string[];
```

- *Type:* string[]

IAM actions required for the CreateTest API call.

---

##### `CreateUserJourney`<sup>Required</sup> <a name="CreateUserJourney" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.CreateUserJourney"></a>

```typescript
public readonly CreateUserJourney: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserJourney API call.

---

##### `DeleteApp`<sup>Required</sup> <a name="DeleteApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteApp"></a>

```typescript
public readonly DeleteApp: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApp API call.

---

##### `DeleteAppAssessment`<sup>Required</sup> <a name="DeleteAppAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAppAssessment"></a>

```typescript
public readonly DeleteAppAssessment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppAssessment API call.

---

##### `DeleteAppInputSource`<sup>Required</sup> <a name="DeleteAppInputSource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAppInputSource"></a>

```typescript
public readonly DeleteAppInputSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppInputSource API call.

---

##### `DeleteAppVersionAppComponent`<sup>Required</sup> <a name="DeleteAppVersionAppComponent" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAppVersionAppComponent"></a>

```typescript
public readonly DeleteAppVersionAppComponent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppVersionAppComponent API call.

---

##### `DeleteAppVersionResource`<sup>Required</sup> <a name="DeleteAppVersionResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAppVersionResource"></a>

```typescript
public readonly DeleteAppVersionResource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppVersionResource API call.

---

##### `DeleteAssertion`<sup>Required</sup> <a name="DeleteAssertion" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteAssertion"></a>

```typescript
public readonly DeleteAssertion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssertion API call.

---

##### `DeleteInputSource`<sup>Required</sup> <a name="DeleteInputSource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteInputSource"></a>

```typescript
public readonly DeleteInputSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInputSource API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeleteRecommendationTemplate`<sup>Required</sup> <a name="DeleteRecommendationTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteRecommendationTemplate"></a>

```typescript
public readonly DeleteRecommendationTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecommendationTemplate API call.

---

##### `DeleteResiliencyPolicy`<sup>Required</sup> <a name="DeleteResiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteResiliencyPolicy"></a>

```typescript
public readonly DeleteResiliencyPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResiliencyPolicy API call.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteService"></a>

```typescript
public readonly DeleteService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteService API call.

---

##### `DeleteServiceFunction`<sup>Required</sup> <a name="DeleteServiceFunction" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteServiceFunction"></a>

```typescript
public readonly DeleteServiceFunction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceFunction API call.

---

##### `DeleteServiceFunctionResources`<sup>Required</sup> <a name="DeleteServiceFunctionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteServiceFunctionResources"></a>

```typescript
public readonly DeleteServiceFunctionResources: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceFunctionResources API call.

---

##### `DeleteSystem`<sup>Required</sup> <a name="DeleteSystem" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteSystem"></a>

```typescript
public readonly DeleteSystem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSystem API call.

---

##### `DeleteTest`<sup>Required</sup> <a name="DeleteTest" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteTest"></a>

```typescript
public readonly DeleteTest: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTest API call.

---

##### `DeleteTestSources`<sup>Required</sup> <a name="DeleteTestSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteTestSources"></a>

```typescript
public readonly DeleteTestSources: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTestSources API call.

---

##### `DeleteUserJourney`<sup>Required</sup> <a name="DeleteUserJourney" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DeleteUserJourney"></a>

```typescript
public readonly DeleteUserJourney: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserJourney API call.

---

##### `DescribeApp`<sup>Required</sup> <a name="DescribeApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeApp"></a>

```typescript
public readonly DescribeApp: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApp API call.

---

##### `DescribeAppAssessment`<sup>Required</sup> <a name="DescribeAppAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppAssessment"></a>

```typescript
public readonly DescribeAppAssessment: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppAssessment API call.

---

##### `DescribeAppVersion`<sup>Required</sup> <a name="DescribeAppVersion" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersion"></a>

```typescript
public readonly DescribeAppVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppVersion API call.

---

##### `DescribeAppVersionAppComponent`<sup>Required</sup> <a name="DescribeAppVersionAppComponent" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersionAppComponent"></a>

```typescript
public readonly DescribeAppVersionAppComponent: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppVersionAppComponent API call.

---

##### `DescribeAppVersionResource`<sup>Required</sup> <a name="DescribeAppVersionResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersionResource"></a>

```typescript
public readonly DescribeAppVersionResource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppVersionResource API call.

---

##### `DescribeAppVersionResourcesResolutionStatus`<sup>Required</sup> <a name="DescribeAppVersionResourcesResolutionStatus" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersionResourcesResolutionStatus"></a>

```typescript
public readonly DescribeAppVersionResourcesResolutionStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppVersionResourcesResolutionStatus API call.

---

##### `DescribeAppVersionTemplate`<sup>Required</sup> <a name="DescribeAppVersionTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeAppVersionTemplate"></a>

```typescript
public readonly DescribeAppVersionTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAppVersionTemplate API call.

---

##### `DescribeDraftAppVersionResourcesImportStatus`<sup>Required</sup> <a name="DescribeDraftAppVersionResourcesImportStatus" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeDraftAppVersionResourcesImportStatus"></a>

```typescript
public readonly DescribeDraftAppVersionResourcesImportStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDraftAppVersionResourcesImportStatus API call.

---

##### `DescribeMetricsExport`<sup>Required</sup> <a name="DescribeMetricsExport" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeMetricsExport"></a>

```typescript
public readonly DescribeMetricsExport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetricsExport API call.

---

##### `DescribeResiliencyPolicy`<sup>Required</sup> <a name="DescribeResiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeResiliencyPolicy"></a>

```typescript
public readonly DescribeResiliencyPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResiliencyPolicy API call.

---

##### `DescribeResourceGroupingRecommendationTask`<sup>Required</sup> <a name="DescribeResourceGroupingRecommendationTask" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.DescribeResourceGroupingRecommendationTask"></a>

```typescript
public readonly DescribeResourceGroupingRecommendationTask: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourceGroupingRecommendationTask API call.

---

##### `ImportApp`<sup>Required</sup> <a name="ImportApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ImportApp"></a>

```typescript
public readonly ImportApp: string[];
```

- *Type:* string[]

IAM actions required for the ImportApp API call.

---

##### `ImportPolicy`<sup>Required</sup> <a name="ImportPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ImportPolicy"></a>

```typescript
public readonly ImportPolicy: string[];
```

- *Type:* string[]

IAM actions required for the ImportPolicy API call.

---

##### `ImportResourcesToDraftAppVersion`<sup>Required</sup> <a name="ImportResourcesToDraftAppVersion" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ImportResourcesToDraftAppVersion"></a>

```typescript
public readonly ImportResourcesToDraftAppVersion: string[];
```

- *Type:* string[]

IAM actions required for the ImportResourcesToDraftAppVersion API call.

---

##### `ListAlarmRecommendations`<sup>Required</sup> <a name="ListAlarmRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAlarmRecommendations"></a>

```typescript
public readonly ListAlarmRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListAlarmRecommendations API call.

---

##### `ListAppAssessmentComplianceDrifts`<sup>Required</sup> <a name="ListAppAssessmentComplianceDrifts" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppAssessmentComplianceDrifts"></a>

```typescript
public readonly ListAppAssessmentComplianceDrifts: string[];
```

- *Type:* string[]

IAM actions required for the ListAppAssessmentComplianceDrifts API call.

---

##### `ListAppAssessmentResourceDrifts`<sup>Required</sup> <a name="ListAppAssessmentResourceDrifts" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppAssessmentResourceDrifts"></a>

```typescript
public readonly ListAppAssessmentResourceDrifts: string[];
```

- *Type:* string[]

IAM actions required for the ListAppAssessmentResourceDrifts API call.

---

##### `ListAppAssessments`<sup>Required</sup> <a name="ListAppAssessments" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppAssessments"></a>

```typescript
public readonly ListAppAssessments: string[];
```

- *Type:* string[]

IAM actions required for the ListAppAssessments API call.

---

##### `ListAppComponentCompliances`<sup>Required</sup> <a name="ListAppComponentCompliances" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppComponentCompliances"></a>

```typescript
public readonly ListAppComponentCompliances: string[];
```

- *Type:* string[]

IAM actions required for the ListAppComponentCompliances API call.

---

##### `ListAppComponentRecommendations`<sup>Required</sup> <a name="ListAppComponentRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppComponentRecommendations"></a>

```typescript
public readonly ListAppComponentRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListAppComponentRecommendations API call.

---

##### `ListAppInputSources`<sup>Required</sup> <a name="ListAppInputSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppInputSources"></a>

```typescript
public readonly ListAppInputSources: string[];
```

- *Type:* string[]

IAM actions required for the ListAppInputSources API call.

---

##### `ListApps`<sup>Required</sup> <a name="ListApps" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListApps"></a>

```typescript
public readonly ListApps: string[];
```

- *Type:* string[]

IAM actions required for the ListApps API call.

---

##### `ListAppVersionAppComponents`<sup>Required</sup> <a name="ListAppVersionAppComponents" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppVersionAppComponents"></a>

```typescript
public readonly ListAppVersionAppComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListAppVersionAppComponents API call.

---

##### `ListAppVersionResourceMappings`<sup>Required</sup> <a name="ListAppVersionResourceMappings" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppVersionResourceMappings"></a>

```typescript
public readonly ListAppVersionResourceMappings: string[];
```

- *Type:* string[]

IAM actions required for the ListAppVersionResourceMappings API call.

---

##### `ListAppVersionResources`<sup>Required</sup> <a name="ListAppVersionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppVersionResources"></a>

```typescript
public readonly ListAppVersionResources: string[];
```

- *Type:* string[]

IAM actions required for the ListAppVersionResources API call.

---

##### `ListAppVersions`<sup>Required</sup> <a name="ListAppVersions" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAppVersions"></a>

```typescript
public readonly ListAppVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAppVersions API call.

---

##### `ListAssertions`<sup>Required</sup> <a name="ListAssertions" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListAssertions"></a>

```typescript
public readonly ListAssertions: string[];
```

- *Type:* string[]

IAM actions required for the ListAssertions API call.

---

##### `ListDependencies`<sup>Required</sup> <a name="ListDependencies" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListDependencies"></a>

```typescript
public readonly ListDependencies: string[];
```

- *Type:* string[]

IAM actions required for the ListDependencies API call.

---

##### `ListFailureModeAssessments`<sup>Required</sup> <a name="ListFailureModeAssessments" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListFailureModeAssessments"></a>

```typescript
public readonly ListFailureModeAssessments: string[];
```

- *Type:* string[]

IAM actions required for the ListFailureModeAssessments API call.

---

##### `ListFailureModeFindings`<sup>Required</sup> <a name="ListFailureModeFindings" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListFailureModeFindings"></a>

```typescript
public readonly ListFailureModeFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListFailureModeFindings API call.

---

##### `ListInputSources`<sup>Required</sup> <a name="ListInputSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListInputSources"></a>

```typescript
public readonly ListInputSources: string[];
```

- *Type:* string[]

IAM actions required for the ListInputSources API call.

---

##### `ListMetrics`<sup>Required</sup> <a name="ListMetrics" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListMetrics"></a>

```typescript
public readonly ListMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListMetrics API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListRecommendationTemplates`<sup>Required</sup> <a name="ListRecommendationTemplates" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListRecommendationTemplates"></a>

```typescript
public readonly ListRecommendationTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendationTemplates API call.

---

##### `ListReports`<sup>Required</sup> <a name="ListReports" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListReports"></a>

```typescript
public readonly ListReports: string[];
```

- *Type:* string[]

IAM actions required for the ListReports API call.

---

##### `ListResiliencyPolicies`<sup>Required</sup> <a name="ListResiliencyPolicies" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListResiliencyPolicies"></a>

```typescript
public readonly ListResiliencyPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListResiliencyPolicies API call.

---

##### `ListResolvedTestRunTargetResources`<sup>Required</sup> <a name="ListResolvedTestRunTargetResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListResolvedTestRunTargetResources"></a>

```typescript
public readonly ListResolvedTestRunTargetResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResolvedTestRunTargetResources API call.

---

##### `ListResourceGroupingRecommendations`<sup>Required</sup> <a name="ListResourceGroupingRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListResourceGroupingRecommendations"></a>

```typescript
public readonly ListResourceGroupingRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceGroupingRecommendations API call.

---

##### `ListResources`<sup>Required</sup> <a name="ListResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListResources"></a>

```typescript
public readonly ListResources: string[];
```

- *Type:* string[]

IAM actions required for the ListResources API call.

---

##### `ListServiceEvents`<sup>Required</sup> <a name="ListServiceEvents" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListServiceEvents"></a>

```typescript
public readonly ListServiceEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceEvents API call.

---

##### `ListServiceFunctions`<sup>Required</sup> <a name="ListServiceFunctions" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListServiceFunctions"></a>

```typescript
public readonly ListServiceFunctions: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceFunctions API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListServiceTopologyEdges`<sup>Required</sup> <a name="ListServiceTopologyEdges" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListServiceTopologyEdges"></a>

```typescript
public readonly ListServiceTopologyEdges: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceTopologyEdges API call.

---

##### `ListSopRecommendations`<sup>Required</sup> <a name="ListSopRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListSopRecommendations"></a>

```typescript
public readonly ListSopRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListSopRecommendations API call.

---

##### `ListSuggestedResiliencyPolicies`<sup>Required</sup> <a name="ListSuggestedResiliencyPolicies" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListSuggestedResiliencyPolicies"></a>

```typescript
public readonly ListSuggestedResiliencyPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListSuggestedResiliencyPolicies API call.

---

##### `ListSystemEvents`<sup>Required</sup> <a name="ListSystemEvents" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListSystemEvents"></a>

```typescript
public readonly ListSystemEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListSystemEvents API call.

---

##### `ListSystems`<sup>Required</sup> <a name="ListSystems" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListSystems"></a>

```typescript
public readonly ListSystems: string[];
```

- *Type:* string[]

IAM actions required for the ListSystems API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTestRecommendations`<sup>Required</sup> <a name="ListTestRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestRecommendations"></a>

```typescript
public readonly ListTestRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListTestRecommendations API call.

---

##### `ListTestRunEvents`<sup>Required</sup> <a name="ListTestRunEvents" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestRunEvents"></a>

```typescript
public readonly ListTestRunEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListTestRunEvents API call.

---

##### `ListTestRuns`<sup>Required</sup> <a name="ListTestRuns" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestRuns"></a>

```typescript
public readonly ListTestRuns: string[];
```

- *Type:* string[]

IAM actions required for the ListTestRuns API call.

---

##### `ListTestRunSources`<sup>Required</sup> <a name="ListTestRunSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestRunSources"></a>

```typescript
public readonly ListTestRunSources: string[];
```

- *Type:* string[]

IAM actions required for the ListTestRunSources API call.

---

##### `ListTests`<sup>Required</sup> <a name="ListTests" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTests"></a>

```typescript
public readonly ListTests: string[];
```

- *Type:* string[]

IAM actions required for the ListTests API call.

---

##### `ListTestSources`<sup>Required</sup> <a name="ListTestSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestSources"></a>

```typescript
public readonly ListTestSources: string[];
```

- *Type:* string[]

IAM actions required for the ListTestSources API call.

---

##### `ListTestTemplates`<sup>Required</sup> <a name="ListTestTemplates" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListTestTemplates"></a>

```typescript
public readonly ListTestTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListTestTemplates API call.

---

##### `ListUnsupportedAppVersionResources`<sup>Required</sup> <a name="ListUnsupportedAppVersionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListUnsupportedAppVersionResources"></a>

```typescript
public readonly ListUnsupportedAppVersionResources: string[];
```

- *Type:* string[]

IAM actions required for the ListUnsupportedAppVersionResources API call.

---

##### `ListUserJourneys`<sup>Required</sup> <a name="ListUserJourneys" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ListUserJourneys"></a>

```typescript
public readonly ListUserJourneys: string[];
```

- *Type:* string[]

IAM actions required for the ListUserJourneys API call.

---

##### `opGetFailureModeFinding`<sup>Required</sup> <a name="opGetFailureModeFinding" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetFailureModeFinding"></a>

```typescript
public readonly opGetFailureModeFinding: string[];
```

- *Type:* string[]

IAM actions required for the GetFailureModeFinding API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetService`<sup>Required</sup> <a name="opGetService" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetService"></a>

```typescript
public readonly opGetService: string[];
```

- *Type:* string[]

IAM actions required for the GetService API call.

---

##### `opGetSystem`<sup>Required</sup> <a name="opGetSystem" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetSystem"></a>

```typescript
public readonly opGetSystem: string[];
```

- *Type:* string[]

IAM actions required for the GetSystem API call.

---

##### `opGetTest`<sup>Required</sup> <a name="opGetTest" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetTest"></a>

```typescript
public readonly opGetTest: string[];
```

- *Type:* string[]

IAM actions required for the GetTest API call.

---

##### `opGetTestRun`<sup>Required</sup> <a name="opGetTestRun" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetTestRun"></a>

```typescript
public readonly opGetTestRun: string[];
```

- *Type:* string[]

IAM actions required for the GetTestRun API call.

---

##### `opGetTestTemplate`<sup>Required</sup> <a name="opGetTestTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetTestTemplate"></a>

```typescript
public readonly opGetTestTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetTestTemplate API call.

---

##### `opGetUserJourney`<sup>Required</sup> <a name="opGetUserJourney" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.opGetUserJourney"></a>

```typescript
public readonly opGetUserJourney: string[];
```

- *Type:* string[]

IAM actions required for the GetUserJourney API call.

---

##### `PublishAppVersion`<sup>Required</sup> <a name="PublishAppVersion" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.PublishAppVersion"></a>

```typescript
public readonly PublishAppVersion: string[];
```

- *Type:* string[]

IAM actions required for the PublishAppVersion API call.

---

##### `PutDraftAppVersionTemplate`<sup>Required</sup> <a name="PutDraftAppVersionTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.PutDraftAppVersionTemplate"></a>

```typescript
public readonly PutDraftAppVersionTemplate: string[];
```

- *Type:* string[]

IAM actions required for the PutDraftAppVersionTemplate API call.

---

##### `PutTestSources`<sup>Required</sup> <a name="PutTestSources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.PutTestSources"></a>

```typescript
public readonly PutTestSources: string[];
```

- *Type:* string[]

IAM actions required for the PutTestSources API call.

---

##### `RejectResourceGroupingRecommendations`<sup>Required</sup> <a name="RejectResourceGroupingRecommendations" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.RejectResourceGroupingRecommendations"></a>

```typescript
public readonly RejectResourceGroupingRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the RejectResourceGroupingRecommendations API call.

---

##### `RemoveDraftAppVersionResourceMappings`<sup>Required</sup> <a name="RemoveDraftAppVersionResourceMappings" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.RemoveDraftAppVersionResourceMappings"></a>

```typescript
public readonly RemoveDraftAppVersionResourceMappings: string[];
```

- *Type:* string[]

IAM actions required for the RemoveDraftAppVersionResourceMappings API call.

---

##### `ResolveAppVersionResources`<sup>Required</sup> <a name="ResolveAppVersionResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.ResolveAppVersionResources"></a>

```typescript
public readonly ResolveAppVersionResources: string[];
```

- *Type:* string[]

IAM actions required for the ResolveAppVersionResources API call.

---

##### `StartAppAssessment`<sup>Required</sup> <a name="StartAppAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartAppAssessment"></a>

```typescript
public readonly StartAppAssessment: string[];
```

- *Type:* string[]

IAM actions required for the StartAppAssessment API call.

---

##### `StartFailureModeAssessment`<sup>Required</sup> <a name="StartFailureModeAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartFailureModeAssessment"></a>

```typescript
public readonly StartFailureModeAssessment: string[];
```

- *Type:* string[]

IAM actions required for the StartFailureModeAssessment API call.

---

##### `StartMetricsExport`<sup>Required</sup> <a name="StartMetricsExport" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartMetricsExport"></a>

```typescript
public readonly StartMetricsExport: string[];
```

- *Type:* string[]

IAM actions required for the StartMetricsExport API call.

---

##### `StartResourceGroupingRecommendationTask`<sup>Required</sup> <a name="StartResourceGroupingRecommendationTask" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartResourceGroupingRecommendationTask"></a>

```typescript
public readonly StartResourceGroupingRecommendationTask: string[];
```

- *Type:* string[]

IAM actions required for the StartResourceGroupingRecommendationTask API call.

---

##### `StartTestRun`<sup>Required</sup> <a name="StartTestRun" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StartTestRun"></a>

```typescript
public readonly StartTestRun: string[];
```

- *Type:* string[]

IAM actions required for the StartTestRun API call.

---

##### `StopTestRun`<sup>Required</sup> <a name="StopTestRun" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.StopTestRun"></a>

```typescript
public readonly StopTestRun: string[];
```

- *Type:* string[]

IAM actions required for the StopTestRun API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApp`<sup>Required</sup> <a name="UpdateApp" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateApp"></a>

```typescript
public readonly UpdateApp: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApp API call.

---

##### `UpdateAppVersion`<sup>Required</sup> <a name="UpdateAppVersion" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateAppVersion"></a>

```typescript
public readonly UpdateAppVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppVersion API call.

---

##### `UpdateAppVersionAppComponent`<sup>Required</sup> <a name="UpdateAppVersionAppComponent" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateAppVersionAppComponent"></a>

```typescript
public readonly UpdateAppVersionAppComponent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppVersionAppComponent API call.

---

##### `UpdateAppVersionResource`<sup>Required</sup> <a name="UpdateAppVersionResource" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateAppVersionResource"></a>

```typescript
public readonly UpdateAppVersionResource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppVersionResource API call.

---

##### `UpdateAssertion`<sup>Required</sup> <a name="UpdateAssertion" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateAssertion"></a>

```typescript
public readonly UpdateAssertion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssertion API call.

---

##### `UpdateDependency`<sup>Required</sup> <a name="UpdateDependency" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateDependency"></a>

```typescript
public readonly UpdateDependency: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDependency API call.

---

##### `UpdateFailureModeFinding`<sup>Required</sup> <a name="UpdateFailureModeFinding" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateFailureModeFinding"></a>

```typescript
public readonly UpdateFailureModeFinding: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFailureModeFinding API call.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePolicy API call.

---

##### `UpdateResiliencyPolicy`<sup>Required</sup> <a name="UpdateResiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateResiliencyPolicy"></a>

```typescript
public readonly UpdateResiliencyPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResiliencyPolicy API call.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateService"></a>

```typescript
public readonly UpdateService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateService API call.

---

##### `UpdateServiceFunction`<sup>Required</sup> <a name="UpdateServiceFunction" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateServiceFunction"></a>

```typescript
public readonly UpdateServiceFunction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceFunction API call.

---

##### `UpdateSystem`<sup>Required</sup> <a name="UpdateSystem" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateSystem"></a>

```typescript
public readonly UpdateSystem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSystem API call.

---

##### `UpdateTest`<sup>Required</sup> <a name="UpdateTest" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateTest"></a>

```typescript
public readonly UpdateTest: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTest API call.

---

##### `UpdateUserJourney`<sup>Required</sup> <a name="UpdateUserJourney" id="@cdk_utils/iam.resiliencehub.ResiliencehubOperations.property.UpdateUserJourney"></a>

```typescript
public readonly UpdateUserJourney: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserJourney API call.

---

### ResiliencehubResources <a name="ResiliencehubResources" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources"></a>

ARN builders, validators, and parsers for resiliencehub resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.Initializer"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

new resiliencehub.ResiliencehubResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.appAssessment">appAssessment</a></code> | Builds an ARN for the app-assessment resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidAppAssessmentArn">isValidAppAssessmentArn</a></code> | Validates whether a string is a valid ARN for the app-assessment resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidPolicyArn">isValidPolicyArn</a></code> | Validates whether a string is a valid ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidRecommendationTemplateArn">isValidRecommendationTemplateArn</a></code> | Validates whether a string is a valid ARN for the recommendation-template resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidResiliencyPolicyArn">isValidResiliencyPolicyArn</a></code> | Validates whether a string is a valid ARN for the resiliency-policy resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidSystemArn">isValidSystemArn</a></code> | Validates whether a string is a valid ARN for the system resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidTestTemplateArn">isValidTestTemplateArn</a></code> | Validates whether a string is a valid ARN for the test-template resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseAppAssessmentArn">parseAppAssessmentArn</a></code> | Parses a app-assessment ARN into its components. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.parsePolicyArn">parsePolicyArn</a></code> | Parses a policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseRecommendationTemplateArn">parseRecommendationTemplateArn</a></code> | Parses a recommendation-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseResiliencyPolicyArn">parseResiliencyPolicyArn</a></code> | Parses a resiliency-policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseSystemArn">parseSystemArn</a></code> | Parses a system ARN into its components. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseTestTemplateArn">parseTestTemplateArn</a></code> | Parses a test-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.policy">policy</a></code> | Builds an ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.recommendationTemplate">recommendationTemplate</a></code> | Builds an ARN for the recommendation-template resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.resiliencyPolicy">resiliencyPolicy</a></code> | Builds an ARN for the resiliency-policy resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.service">service</a></code> | Builds an ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.system">system</a></code> | Builds an ARN for the system resource. |
| <code><a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResources.testTemplate">testTemplate</a></code> | Builds an ARN for the test-template resource. |

---

##### `appAssessment` <a name="appAssessment" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.appAssessment"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.appAssessment(props: ResiliencehubAppAssessmentArnProps)
```

Builds an ARN for the app-assessment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.appAssessment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resiliencehub.ResiliencehubAppAssessmentArnProps">ResiliencehubAppAssessmentArnProps</a>

---

##### `application` <a name="application" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.application"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.application(props: ResiliencehubApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resiliencehub.ResiliencehubApplicationArnProps">ResiliencehubApplicationArnProps</a>

---

##### `isValidAppAssessmentArn` <a name="isValidAppAssessmentArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidAppAssessmentArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.isValidAppAssessmentArn(arn: string)
```

Validates whether a string is a valid ARN for the app-assessment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidAppAssessmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidApplicationArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyArn` <a name="isValidPolicyArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidPolicyArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.isValidPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecommendationTemplateArn` <a name="isValidRecommendationTemplateArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidRecommendationTemplateArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.isValidRecommendationTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the recommendation-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidRecommendationTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResiliencyPolicyArn` <a name="isValidResiliencyPolicyArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidResiliencyPolicyArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.isValidResiliencyPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the resiliency-policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidResiliencyPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidServiceArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSystemArn` <a name="isValidSystemArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidSystemArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.isValidSystemArn(arn: string)
```

Validates whether a string is a valid ARN for the system resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidSystemArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTestTemplateArn` <a name="isValidTestTemplateArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidTestTemplateArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.isValidTestTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the test-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.isValidTestTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppAssessmentArn` <a name="parseAppAssessmentArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseAppAssessmentArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.parseAppAssessmentArn(arn: string)
```

Parses a app-assessment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseAppAssessmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseApplicationArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyArn` <a name="parsePolicyArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parsePolicyArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.parsePolicyArn(arn: string)
```

Parses a policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parsePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecommendationTemplateArn` <a name="parseRecommendationTemplateArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseRecommendationTemplateArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.parseRecommendationTemplateArn(arn: string)
```

Parses a recommendation-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseRecommendationTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResiliencyPolicyArn` <a name="parseResiliencyPolicyArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseResiliencyPolicyArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.parseResiliencyPolicyArn(arn: string)
```

Parses a resiliency-policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseResiliencyPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseServiceArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSystemArn` <a name="parseSystemArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseSystemArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.parseSystemArn(arn: string)
```

Parses a system ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseSystemArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTestTemplateArn` <a name="parseTestTemplateArn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseTestTemplateArn"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.parseTestTemplateArn(arn: string)
```

Parses a test-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.parseTestTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `policy` <a name="policy" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.policy"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.policy(props: ResiliencehubPolicyArnProps)
```

Builds an ARN for the policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.policy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resiliencehub.ResiliencehubPolicyArnProps">ResiliencehubPolicyArnProps</a>

---

##### `recommendationTemplate` <a name="recommendationTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.recommendationTemplate"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.recommendationTemplate(props: ResiliencehubRecommendationTemplateArnProps)
```

Builds an ARN for the recommendation-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.recommendationTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resiliencehub.ResiliencehubRecommendationTemplateArnProps">ResiliencehubRecommendationTemplateArnProps</a>

---

##### `resiliencyPolicy` <a name="resiliencyPolicy" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.resiliencyPolicy"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.resiliencyPolicy(props: ResiliencehubResiliencyPolicyArnProps)
```

Builds an ARN for the resiliency-policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.resiliencyPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resiliencehub.ResiliencehubResiliencyPolicyArnProps">ResiliencehubResiliencyPolicyArnProps</a>

---

##### `service` <a name="service" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.service"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.service(props: ResiliencehubServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resiliencehub.ResiliencehubServiceArnProps">ResiliencehubServiceArnProps</a>

---

##### `system` <a name="system" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.system"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.system(props: ResiliencehubSystemArnProps)
```

Builds an ARN for the system resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.system.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resiliencehub.ResiliencehubSystemArnProps">ResiliencehubSystemArnProps</a>

---

##### `testTemplate` <a name="testTemplate" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.testTemplate"></a>

```typescript
import { resiliencehub } from '@cdk_utils/iam'

resiliencehub.ResiliencehubResources.testTemplate(props: ResiliencehubTestTemplateArnProps)
```

Builds an ARN for the test-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.resiliencehub.ResiliencehubResources.testTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.resiliencehub.ResiliencehubTestTemplateArnProps">ResiliencehubTestTemplateArnProps</a>

---




