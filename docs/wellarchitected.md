# `wellarchitected` Submodule <a name="`wellarchitected` Submodule" id="@cdk_utils/iam.wellarchitected"></a>


## Structs <a name="Structs" id="Structs"></a>

### WellArchitectedAgentProfileArnComponents <a name="WellArchitectedAgentProfileArnComponents" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents"></a>

Parsed components of a agent-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedAgentProfileArnComponents: wellarchitected.WellArchitectedAgentProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.property.profileName">profileName</a></code> | <code>string</code> | The ProfileName component. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

The ProfileName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WellArchitectedAgentProfileArnProps <a name="WellArchitectedAgentProfileArnProps" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps"></a>

Properties for building a agent-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedAgentProfileArnProps: wellarchitected.WellArchitectedAgentProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.property.profileName">profileName</a></code> | <code>string</code> | The ProfileName component of the ARN. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

The ProfileName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WellArchitectedAgentRecommendationArnComponents <a name="WellArchitectedAgentRecommendationArnComponents" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents"></a>

Parsed components of a agent-recommendation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedAgentRecommendationArnComponents: wellarchitected.WellArchitectedAgentRecommendationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### WellArchitectedAgentRecommendationArnProps <a name="WellArchitectedAgentRecommendationArnProps" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps"></a>

Properties for building a agent-recommendation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedAgentRecommendationArnProps: wellarchitected.WellArchitectedAgentRecommendationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WellArchitectedLensArnComponents <a name="WellArchitectedLensArnComponents" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents"></a>

Parsed components of a lens ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedLensArnComponents: wellarchitected.WellArchitectedLensArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### WellArchitectedLensArnProps <a name="WellArchitectedLensArnProps" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps"></a>

Properties for building a lens ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedLensArnProps: wellarchitected.WellArchitectedLensArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WellArchitectedProfileArnComponents <a name="WellArchitectedProfileArnComponents" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents"></a>

Parsed components of a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedProfileArnComponents: wellarchitected.WellArchitectedProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### WellArchitectedProfileArnProps <a name="WellArchitectedProfileArnProps" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps"></a>

Properties for building a profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedProfileArnProps: wellarchitected.WellArchitectedProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WellArchitectedReviewTemplateArnComponents <a name="WellArchitectedReviewTemplateArnComponents" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents"></a>

Parsed components of a review-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedReviewTemplateArnComponents: wellarchitected.WellArchitectedReviewTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### WellArchitectedReviewTemplateArnProps <a name="WellArchitectedReviewTemplateArnProps" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps"></a>

Properties for building a review-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedReviewTemplateArnProps: wellarchitected.WellArchitectedReviewTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WellArchitectedWorkloadArnComponents <a name="WellArchitectedWorkloadArnComponents" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents"></a>

Parsed components of a workload ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedWorkloadArnComponents: wellarchitected.WellArchitectedWorkloadArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### WellArchitectedWorkloadArnProps <a name="WellArchitectedWorkloadArnProps" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps"></a>

Properties for building a workload ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

const wellArchitectedWorkloadArnProps: wellarchitected.WellArchitectedWorkloadArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WellArchitectedActions <a name="WellArchitectedActions" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions"></a>

IAM action constants for the wellarchitected service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

new wellarchitected.WellArchitectedActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentContext">actionGetAgentContext</a></code> | <code>string</code> | [Read] wellarchitected:GetAgentContext. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentGoal">actionGetAgentGoal</a></code> | <code>string</code> | [Read] wellarchitected:GetAgentGoal. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentProfile">actionGetAgentProfile</a></code> | <code>string</code> | [Read] wellarchitected:GetAgentProfile. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentRecommendation">actionGetAgentRecommendation</a></code> | <code>string</code> | [Read] wellarchitected:GetAgentRecommendation. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentRecommendationGeneration">actionGetAgentRecommendationGeneration</a></code> | <code>string</code> | [Read] wellarchitected:GetAgentRecommendationGeneration. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAnswer">actionGetAnswer</a></code> | <code>string</code> | [Read] wellarchitected:GetAnswer. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetConsolidatedReport">actionGetConsolidatedReport</a></code> | <code>string</code> | [Read] wellarchitected:GetConsolidatedReport. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetGlobalSettings">actionGetGlobalSettings</a></code> | <code>string</code> | [Read] wellarchitected:GetGlobalSettings. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetLens">actionGetLens</a></code> | <code>string</code> | [Read] wellarchitected:GetLens. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetLensReview">actionGetLensReview</a></code> | <code>string</code> | [Read] wellarchitected:GetLensReview. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetLensReviewReport">actionGetLensReviewReport</a></code> | <code>string</code> | [Read] wellarchitected:GetLensReviewReport. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetLensVersionDifference">actionGetLensVersionDifference</a></code> | <code>string</code> | [Read] wellarchitected:GetLensVersionDifference. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetMilestone">actionGetMilestone</a></code> | <code>string</code> | [Read] wellarchitected:GetMilestone. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetProfile">actionGetProfile</a></code> | <code>string</code> | [Read] wellarchitected:GetProfile. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetProfileTemplate">actionGetProfileTemplate</a></code> | <code>string</code> | [Read] wellarchitected:GetProfileTemplate. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetReviewTemplate">actionGetReviewTemplate</a></code> | <code>string</code> | [Read] wellarchitected:GetReviewTemplate. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetReviewTemplateAnswer">actionGetReviewTemplateAnswer</a></code> | <code>string</code> | [Read] wellarchitected:GetReviewTemplateAnswer. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetReviewTemplateLensReview">actionGetReviewTemplateLensReview</a></code> | <code>string</code> | [Read] wellarchitected:GetReviewTemplateLensReview. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetWorkload">actionGetWorkload</a></code> | <code>string</code> | [Read] wellarchitected:GetWorkload. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AssociateLenses">AssociateLenses</a></code> | <code>string</code> | [Write] wellarchitected:AssociateLenses. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AssociateProfiles">AssociateProfiles</a></code> | <code>string</code> | [Write] wellarchitected:AssociateProfiles. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ConfigureIntegration">ConfigureIntegration</a></code> | <code>string</code> | [Write] wellarchitected:ConfigureIntegration. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateAgentContext">CreateAgentContext</a></code> | <code>string</code> | [Write] wellarchitected:CreateAgentContext. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateAgentGoal">CreateAgentGoal</a></code> | <code>string</code> | [Write] wellarchitected:CreateAgentGoal. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateAgentProfile">CreateAgentProfile</a></code> | <code>string</code> | [Write] wellarchitected:CreateAgentProfile. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateLensShare">CreateLensShare</a></code> | <code>string</code> | [Write] wellarchitected:CreateLensShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateLensVersion">CreateLensVersion</a></code> | <code>string</code> | [Write] wellarchitected:CreateLensVersion. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateMilestone">CreateMilestone</a></code> | <code>string</code> | [Write] wellarchitected:CreateMilestone. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateProfile">CreateProfile</a></code> | <code>string</code> | [Write] wellarchitected:CreateProfile. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateProfileShare">CreateProfileShare</a></code> | <code>string</code> | [Write] wellarchitected:CreateProfileShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateReviewTemplate">CreateReviewTemplate</a></code> | <code>string</code> | [Write] wellarchitected:CreateReviewTemplate. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateTemplateShare">CreateTemplateShare</a></code> | <code>string</code> | [Write] wellarchitected:CreateTemplateShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateWorkload">CreateWorkload</a></code> | <code>string</code> | [Write] wellarchitected:CreateWorkload. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateWorkloadShare">CreateWorkloadShare</a></code> | <code>string</code> | [Write] wellarchitected:CreateWorkloadShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteAgentContext">DeleteAgentContext</a></code> | <code>string</code> | [Write] wellarchitected:DeleteAgentContext. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteAgentGoal">DeleteAgentGoal</a></code> | <code>string</code> | [Write] wellarchitected:DeleteAgentGoal. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteAgentProfile">DeleteAgentProfile</a></code> | <code>string</code> | [Write] wellarchitected:DeleteAgentProfile. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteLens">DeleteLens</a></code> | <code>string</code> | [Write] wellarchitected:DeleteLens. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteLensShare">DeleteLensShare</a></code> | <code>string</code> | [Write] wellarchitected:DeleteLensShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteProfile">DeleteProfile</a></code> | <code>string</code> | [Write] wellarchitected:DeleteProfile. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteProfileShare">DeleteProfileShare</a></code> | <code>string</code> | [Write] wellarchitected:DeleteProfileShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteReviewTemplate">DeleteReviewTemplate</a></code> | <code>string</code> | [Write] wellarchitected:DeleteReviewTemplate. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteTemplateShare">DeleteTemplateShare</a></code> | <code>string</code> | [Write] wellarchitected:DeleteTemplateShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteWorkload">DeleteWorkload</a></code> | <code>string</code> | [Write] wellarchitected:DeleteWorkload. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteWorkloadShare">DeleteWorkloadShare</a></code> | <code>string</code> | [Write] wellarchitected:DeleteWorkloadShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DisassociateLenses">DisassociateLenses</a></code> | <code>string</code> | [Write] wellarchitected:DisassociateLenses. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DisassociateProfiles">DisassociateProfiles</a></code> | <code>string</code> | [Write] wellarchitected:DisassociateProfiles. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ExportLens">ExportLens</a></code> | <code>string</code> | [Read] wellarchitected:ExportLens. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ImportLens">ImportLens</a></code> | <code>string</code> | [Write] wellarchitected:ImportLens. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentContexts">ListAgentContexts</a></code> | <code>string</code> | [Read] wellarchitected:ListAgentContexts. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentGoals">ListAgentGoals</a></code> | <code>string</code> | [Read] wellarchitected:ListAgentGoals. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentProfiles">ListAgentProfiles</a></code> | <code>string</code> | [Read] wellarchitected:ListAgentProfiles. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentRecommendationGenerations">ListAgentRecommendationGenerations</a></code> | <code>string</code> | [Read] wellarchitected:ListAgentRecommendationGenerations. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentRecommendationItems">ListAgentRecommendationItems</a></code> | <code>string</code> | [Read] wellarchitected:ListAgentRecommendationItems. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentRecommendations">ListAgentRecommendations</a></code> | <code>string</code> | [Read] wellarchitected:ListAgentRecommendations. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAnswers">ListAnswers</a></code> | <code>string</code> | [List] wellarchitected:ListAnswers. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListCheckDetails">ListCheckDetails</a></code> | <code>string</code> | [List] wellarchitected:ListCheckDetails. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListCheckSummaries">ListCheckSummaries</a></code> | <code>string</code> | [List] wellarchitected:ListCheckSummaries. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListLenses">ListLenses</a></code> | <code>string</code> | [List] wellarchitected:ListLenses. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListLensReviewImprovements">ListLensReviewImprovements</a></code> | <code>string</code> | [List] wellarchitected:ListLensReviewImprovements. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListLensReviews">ListLensReviews</a></code> | <code>string</code> | [List] wellarchitected:ListLensReviews. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListLensShares">ListLensShares</a></code> | <code>string</code> | [List] wellarchitected:ListLensShares. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListMilestones">ListMilestones</a></code> | <code>string</code> | [List] wellarchitected:ListMilestones. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListNotifications">ListNotifications</a></code> | <code>string</code> | [List] wellarchitected:ListNotifications. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListProfileNotifications">ListProfileNotifications</a></code> | <code>string</code> | [List] wellarchitected:ListProfileNotifications. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListProfiles">ListProfiles</a></code> | <code>string</code> | [List] wellarchitected:ListProfiles. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListProfileShares">ListProfileShares</a></code> | <code>string</code> | [List] wellarchitected:ListProfileShares. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListReviewTemplateAnswers">ListReviewTemplateAnswers</a></code> | <code>string</code> | [List] wellarchitected:ListReviewTemplateAnswers. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListReviewTemplates">ListReviewTemplates</a></code> | <code>string</code> | [List] wellarchitected:ListReviewTemplates. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListShareInvitations">ListShareInvitations</a></code> | <code>string</code> | [List] wellarchitected:ListShareInvitations. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] wellarchitected:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListTemplateShares">ListTemplateShares</a></code> | <code>string</code> | [List] wellarchitected:ListTemplateShares. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListWorkloads">ListWorkloads</a></code> | <code>string</code> | [List] wellarchitected:ListWorkloads. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListWorkloadShares">ListWorkloadShares</a></code> | <code>string</code> | [List] wellarchitected:ListWorkloadShares. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.PutAgentRecommendationFeedback">PutAgentRecommendationFeedback</a></code> | <code>string</code> | [Write] wellarchitected:PutAgentRecommendationFeedback. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.StartAgentRecommendationGeneration">StartAgentRecommendationGeneration</a></code> | <code>string</code> | [Write] wellarchitected:StartAgentRecommendationGeneration. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] wellarchitected:TagResource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] wellarchitected:UntagResource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAgentContext">UpdateAgentContext</a></code> | <code>string</code> | [Write] wellarchitected:UpdateAgentContext. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAgentGoal">UpdateAgentGoal</a></code> | <code>string</code> | [Write] wellarchitected:UpdateAgentGoal. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAgentProfile">UpdateAgentProfile</a></code> | <code>string</code> | [Write] wellarchitected:UpdateAgentProfile. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAgentRecommendationStatus">UpdateAgentRecommendationStatus</a></code> | <code>string</code> | [Write] wellarchitected:UpdateAgentRecommendationStatus. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAnswer">UpdateAnswer</a></code> | <code>string</code> | [Write] wellarchitected:UpdateAnswer. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateGlobalSettings">UpdateGlobalSettings</a></code> | <code>string</code> | [Write] wellarchitected:UpdateGlobalSettings. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateIntegration">UpdateIntegration</a></code> | <code>string</code> | [Write] wellarchitected:UpdateIntegration. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateLensReview">UpdateLensReview</a></code> | <code>string</code> | [Write] wellarchitected:UpdateLensReview. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateProfile">UpdateProfile</a></code> | <code>string</code> | [Write] wellarchitected:UpdateProfile. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateReviewTemplate">UpdateReviewTemplate</a></code> | <code>string</code> | [Write] wellarchitected:UpdateReviewTemplate. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateReviewTemplateAnswer">UpdateReviewTemplateAnswer</a></code> | <code>string</code> | [Write] wellarchitected:UpdateReviewTemplateAnswer. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateReviewTemplateLensReview">UpdateReviewTemplateLensReview</a></code> | <code>string</code> | [Write] wellarchitected:UpdateReviewTemplateLensReview. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateShareInvitation">UpdateShareInvitation</a></code> | <code>string</code> | [Write] wellarchitected:UpdateShareInvitation. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateWorkload">UpdateWorkload</a></code> | <code>string</code> | [Write] wellarchitected:UpdateWorkload. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateWorkloadShare">UpdateWorkloadShare</a></code> | <code>string</code> | [Write] wellarchitected:UpdateWorkloadShare. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpgradeLensReview">UpgradeLensReview</a></code> | <code>string</code> | [Write] wellarchitected:UpgradeLensReview. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpgradeProfileVersion">UpgradeProfileVersion</a></code> | <code>string</code> | [Write] wellarchitected:UpgradeProfileVersion. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpgradeReviewTemplateLensReview">UpgradeReviewTemplateLensReview</a></code> | <code>string</code> | [Write] wellarchitected:UpgradeReviewTemplateLensReview. |

---

##### `actionGetAgentContext`<sup>Required</sup> <a name="actionGetAgentContext" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentContext"></a>

```typescript
public readonly actionGetAgentContext: string;
```

- *Type:* string

[Read] wellarchitected:GetAgentContext.

---

##### `actionGetAgentGoal`<sup>Required</sup> <a name="actionGetAgentGoal" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentGoal"></a>

```typescript
public readonly actionGetAgentGoal: string;
```

- *Type:* string

[Read] wellarchitected:GetAgentGoal.

---

##### `actionGetAgentProfile`<sup>Required</sup> <a name="actionGetAgentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentProfile"></a>

```typescript
public readonly actionGetAgentProfile: string;
```

- *Type:* string

[Read] wellarchitected:GetAgentProfile.

---

##### `actionGetAgentRecommendation`<sup>Required</sup> <a name="actionGetAgentRecommendation" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentRecommendation"></a>

```typescript
public readonly actionGetAgentRecommendation: string;
```

- *Type:* string

[Read] wellarchitected:GetAgentRecommendation.

---

##### `actionGetAgentRecommendationGeneration`<sup>Required</sup> <a name="actionGetAgentRecommendationGeneration" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAgentRecommendationGeneration"></a>

```typescript
public readonly actionGetAgentRecommendationGeneration: string;
```

- *Type:* string

[Read] wellarchitected:GetAgentRecommendationGeneration.

---

##### `actionGetAnswer`<sup>Required</sup> <a name="actionGetAnswer" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetAnswer"></a>

```typescript
public readonly actionGetAnswer: string;
```

- *Type:* string

[Read] wellarchitected:GetAnswer.

---

##### `actionGetConsolidatedReport`<sup>Required</sup> <a name="actionGetConsolidatedReport" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetConsolidatedReport"></a>

```typescript
public readonly actionGetConsolidatedReport: string;
```

- *Type:* string

[Read] wellarchitected:GetConsolidatedReport.

---

##### `actionGetGlobalSettings`<sup>Required</sup> <a name="actionGetGlobalSettings" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetGlobalSettings"></a>

```typescript
public readonly actionGetGlobalSettings: string;
```

- *Type:* string

[Read] wellarchitected:GetGlobalSettings.

---

##### `actionGetLens`<sup>Required</sup> <a name="actionGetLens" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetLens"></a>

```typescript
public readonly actionGetLens: string;
```

- *Type:* string

[Read] wellarchitected:GetLens.

---

##### `actionGetLensReview`<sup>Required</sup> <a name="actionGetLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetLensReview"></a>

```typescript
public readonly actionGetLensReview: string;
```

- *Type:* string

[Read] wellarchitected:GetLensReview.

---

##### `actionGetLensReviewReport`<sup>Required</sup> <a name="actionGetLensReviewReport" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetLensReviewReport"></a>

```typescript
public readonly actionGetLensReviewReport: string;
```

- *Type:* string

[Read] wellarchitected:GetLensReviewReport.

---

##### `actionGetLensVersionDifference`<sup>Required</sup> <a name="actionGetLensVersionDifference" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetLensVersionDifference"></a>

```typescript
public readonly actionGetLensVersionDifference: string;
```

- *Type:* string

[Read] wellarchitected:GetLensVersionDifference.

---

##### `actionGetMilestone`<sup>Required</sup> <a name="actionGetMilestone" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetMilestone"></a>

```typescript
public readonly actionGetMilestone: string;
```

- *Type:* string

[Read] wellarchitected:GetMilestone.

---

##### `actionGetProfile`<sup>Required</sup> <a name="actionGetProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetProfile"></a>

```typescript
public readonly actionGetProfile: string;
```

- *Type:* string

[Read] wellarchitected:GetProfile.

---

##### `actionGetProfileTemplate`<sup>Required</sup> <a name="actionGetProfileTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetProfileTemplate"></a>

```typescript
public readonly actionGetProfileTemplate: string;
```

- *Type:* string

[Read] wellarchitected:GetProfileTemplate.

---

##### `actionGetReviewTemplate`<sup>Required</sup> <a name="actionGetReviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetReviewTemplate"></a>

```typescript
public readonly actionGetReviewTemplate: string;
```

- *Type:* string

[Read] wellarchitected:GetReviewTemplate.

---

##### `actionGetReviewTemplateAnswer`<sup>Required</sup> <a name="actionGetReviewTemplateAnswer" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetReviewTemplateAnswer"></a>

```typescript
public readonly actionGetReviewTemplateAnswer: string;
```

- *Type:* string

[Read] wellarchitected:GetReviewTemplateAnswer.

---

##### `actionGetReviewTemplateLensReview`<sup>Required</sup> <a name="actionGetReviewTemplateLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetReviewTemplateLensReview"></a>

```typescript
public readonly actionGetReviewTemplateLensReview: string;
```

- *Type:* string

[Read] wellarchitected:GetReviewTemplateLensReview.

---

##### `actionGetWorkload`<sup>Required</sup> <a name="actionGetWorkload" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.actionGetWorkload"></a>

```typescript
public readonly actionGetWorkload: string;
```

- *Type:* string

[Read] wellarchitected:GetWorkload.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateLenses`<sup>Required</sup> <a name="AssociateLenses" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AssociateLenses"></a>

```typescript
public readonly AssociateLenses: string;
```

- *Type:* string

[Write] wellarchitected:AssociateLenses.

---

##### `AssociateProfiles`<sup>Required</sup> <a name="AssociateProfiles" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.AssociateProfiles"></a>

```typescript
public readonly AssociateProfiles: string;
```

- *Type:* string

[Write] wellarchitected:AssociateProfiles.

---

##### `ConfigureIntegration`<sup>Required</sup> <a name="ConfigureIntegration" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ConfigureIntegration"></a>

```typescript
public readonly ConfigureIntegration: string;
```

- *Type:* string

[Write] wellarchitected:ConfigureIntegration.

---

##### `CreateAgentContext`<sup>Required</sup> <a name="CreateAgentContext" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateAgentContext"></a>

```typescript
public readonly CreateAgentContext: string;
```

- *Type:* string

[Write] wellarchitected:CreateAgentContext.

---

##### `CreateAgentGoal`<sup>Required</sup> <a name="CreateAgentGoal" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateAgentGoal"></a>

```typescript
public readonly CreateAgentGoal: string;
```

- *Type:* string

[Write] wellarchitected:CreateAgentGoal.

---

##### `CreateAgentProfile`<sup>Required</sup> <a name="CreateAgentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateAgentProfile"></a>

```typescript
public readonly CreateAgentProfile: string;
```

- *Type:* string

[Write] wellarchitected:CreateAgentProfile.

---

##### `CreateLensShare`<sup>Required</sup> <a name="CreateLensShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateLensShare"></a>

```typescript
public readonly CreateLensShare: string;
```

- *Type:* string

[Write] wellarchitected:CreateLensShare.

---

##### `CreateLensVersion`<sup>Required</sup> <a name="CreateLensVersion" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateLensVersion"></a>

```typescript
public readonly CreateLensVersion: string;
```

- *Type:* string

[Write] wellarchitected:CreateLensVersion.

---

##### `CreateMilestone`<sup>Required</sup> <a name="CreateMilestone" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateMilestone"></a>

```typescript
public readonly CreateMilestone: string;
```

- *Type:* string

[Write] wellarchitected:CreateMilestone.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string;
```

- *Type:* string

[Write] wellarchitected:CreateProfile.

---

##### `CreateProfileShare`<sup>Required</sup> <a name="CreateProfileShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateProfileShare"></a>

```typescript
public readonly CreateProfileShare: string;
```

- *Type:* string

[Write] wellarchitected:CreateProfileShare.

---

##### `CreateReviewTemplate`<sup>Required</sup> <a name="CreateReviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateReviewTemplate"></a>

```typescript
public readonly CreateReviewTemplate: string;
```

- *Type:* string

[Write] wellarchitected:CreateReviewTemplate.

---

##### `CreateTemplateShare`<sup>Required</sup> <a name="CreateTemplateShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateTemplateShare"></a>

```typescript
public readonly CreateTemplateShare: string;
```

- *Type:* string

[Write] wellarchitected:CreateTemplateShare.

---

##### `CreateWorkload`<sup>Required</sup> <a name="CreateWorkload" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateWorkload"></a>

```typescript
public readonly CreateWorkload: string;
```

- *Type:* string

[Write] wellarchitected:CreateWorkload.

---

##### `CreateWorkloadShare`<sup>Required</sup> <a name="CreateWorkloadShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.CreateWorkloadShare"></a>

```typescript
public readonly CreateWorkloadShare: string;
```

- *Type:* string

[Write] wellarchitected:CreateWorkloadShare.

---

##### `DeleteAgentContext`<sup>Required</sup> <a name="DeleteAgentContext" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteAgentContext"></a>

```typescript
public readonly DeleteAgentContext: string;
```

- *Type:* string

[Write] wellarchitected:DeleteAgentContext.

---

##### `DeleteAgentGoal`<sup>Required</sup> <a name="DeleteAgentGoal" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteAgentGoal"></a>

```typescript
public readonly DeleteAgentGoal: string;
```

- *Type:* string

[Write] wellarchitected:DeleteAgentGoal.

---

##### `DeleteAgentProfile`<sup>Required</sup> <a name="DeleteAgentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteAgentProfile"></a>

```typescript
public readonly DeleteAgentProfile: string;
```

- *Type:* string

[Write] wellarchitected:DeleteAgentProfile.

---

##### `DeleteLens`<sup>Required</sup> <a name="DeleteLens" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteLens"></a>

```typescript
public readonly DeleteLens: string;
```

- *Type:* string

[Write] wellarchitected:DeleteLens.

---

##### `DeleteLensShare`<sup>Required</sup> <a name="DeleteLensShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteLensShare"></a>

```typescript
public readonly DeleteLensShare: string;
```

- *Type:* string

[Write] wellarchitected:DeleteLensShare.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string;
```

- *Type:* string

[Write] wellarchitected:DeleteProfile.

---

##### `DeleteProfileShare`<sup>Required</sup> <a name="DeleteProfileShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteProfileShare"></a>

```typescript
public readonly DeleteProfileShare: string;
```

- *Type:* string

[Write] wellarchitected:DeleteProfileShare.

---

##### `DeleteReviewTemplate`<sup>Required</sup> <a name="DeleteReviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteReviewTemplate"></a>

```typescript
public readonly DeleteReviewTemplate: string;
```

- *Type:* string

[Write] wellarchitected:DeleteReviewTemplate.

---

##### `DeleteTemplateShare`<sup>Required</sup> <a name="DeleteTemplateShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteTemplateShare"></a>

```typescript
public readonly DeleteTemplateShare: string;
```

- *Type:* string

[Write] wellarchitected:DeleteTemplateShare.

---

##### `DeleteWorkload`<sup>Required</sup> <a name="DeleteWorkload" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteWorkload"></a>

```typescript
public readonly DeleteWorkload: string;
```

- *Type:* string

[Write] wellarchitected:DeleteWorkload.

---

##### `DeleteWorkloadShare`<sup>Required</sup> <a name="DeleteWorkloadShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DeleteWorkloadShare"></a>

```typescript
public readonly DeleteWorkloadShare: string;
```

- *Type:* string

[Write] wellarchitected:DeleteWorkloadShare.

---

##### `DisassociateLenses`<sup>Required</sup> <a name="DisassociateLenses" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DisassociateLenses"></a>

```typescript
public readonly DisassociateLenses: string;
```

- *Type:* string

[Write] wellarchitected:DisassociateLenses.

---

##### `DisassociateProfiles`<sup>Required</sup> <a name="DisassociateProfiles" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.DisassociateProfiles"></a>

```typescript
public readonly DisassociateProfiles: string;
```

- *Type:* string

[Write] wellarchitected:DisassociateProfiles.

---

##### `ExportLens`<sup>Required</sup> <a name="ExportLens" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ExportLens"></a>

```typescript
public readonly ExportLens: string;
```

- *Type:* string

[Read] wellarchitected:ExportLens.

---

##### `ImportLens`<sup>Required</sup> <a name="ImportLens" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ImportLens"></a>

```typescript
public readonly ImportLens: string;
```

- *Type:* string

[Write] wellarchitected:ImportLens.

---

##### `ListAgentContexts`<sup>Required</sup> <a name="ListAgentContexts" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentContexts"></a>

```typescript
public readonly ListAgentContexts: string;
```

- *Type:* string

[Read] wellarchitected:ListAgentContexts.

---

##### `ListAgentGoals`<sup>Required</sup> <a name="ListAgentGoals" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentGoals"></a>

```typescript
public readonly ListAgentGoals: string;
```

- *Type:* string

[Read] wellarchitected:ListAgentGoals.

---

##### `ListAgentProfiles`<sup>Required</sup> <a name="ListAgentProfiles" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentProfiles"></a>

```typescript
public readonly ListAgentProfiles: string;
```

- *Type:* string

[Read] wellarchitected:ListAgentProfiles.

---

##### `ListAgentRecommendationGenerations`<sup>Required</sup> <a name="ListAgentRecommendationGenerations" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentRecommendationGenerations"></a>

```typescript
public readonly ListAgentRecommendationGenerations: string;
```

- *Type:* string

[Read] wellarchitected:ListAgentRecommendationGenerations.

---

##### `ListAgentRecommendationItems`<sup>Required</sup> <a name="ListAgentRecommendationItems" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentRecommendationItems"></a>

```typescript
public readonly ListAgentRecommendationItems: string;
```

- *Type:* string

[Read] wellarchitected:ListAgentRecommendationItems.

---

##### `ListAgentRecommendations`<sup>Required</sup> <a name="ListAgentRecommendations" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAgentRecommendations"></a>

```typescript
public readonly ListAgentRecommendations: string;
```

- *Type:* string

[Read] wellarchitected:ListAgentRecommendations.

---

##### `ListAnswers`<sup>Required</sup> <a name="ListAnswers" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListAnswers"></a>

```typescript
public readonly ListAnswers: string;
```

- *Type:* string

[List] wellarchitected:ListAnswers.

---

##### `ListCheckDetails`<sup>Required</sup> <a name="ListCheckDetails" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListCheckDetails"></a>

```typescript
public readonly ListCheckDetails: string;
```

- *Type:* string

[List] wellarchitected:ListCheckDetails.

---

##### `ListCheckSummaries`<sup>Required</sup> <a name="ListCheckSummaries" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListCheckSummaries"></a>

```typescript
public readonly ListCheckSummaries: string;
```

- *Type:* string

[List] wellarchitected:ListCheckSummaries.

---

##### `ListLenses`<sup>Required</sup> <a name="ListLenses" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListLenses"></a>

```typescript
public readonly ListLenses: string;
```

- *Type:* string

[List] wellarchitected:ListLenses.

---

##### `ListLensReviewImprovements`<sup>Required</sup> <a name="ListLensReviewImprovements" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListLensReviewImprovements"></a>

```typescript
public readonly ListLensReviewImprovements: string;
```

- *Type:* string

[List] wellarchitected:ListLensReviewImprovements.

---

##### `ListLensReviews`<sup>Required</sup> <a name="ListLensReviews" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListLensReviews"></a>

```typescript
public readonly ListLensReviews: string;
```

- *Type:* string

[List] wellarchitected:ListLensReviews.

---

##### `ListLensShares`<sup>Required</sup> <a name="ListLensShares" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListLensShares"></a>

```typescript
public readonly ListLensShares: string;
```

- *Type:* string

[List] wellarchitected:ListLensShares.

---

##### `ListMilestones`<sup>Required</sup> <a name="ListMilestones" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListMilestones"></a>

```typescript
public readonly ListMilestones: string;
```

- *Type:* string

[List] wellarchitected:ListMilestones.

---

##### `ListNotifications`<sup>Required</sup> <a name="ListNotifications" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListNotifications"></a>

```typescript
public readonly ListNotifications: string;
```

- *Type:* string

[List] wellarchitected:ListNotifications.

---

##### `ListProfileNotifications`<sup>Required</sup> <a name="ListProfileNotifications" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListProfileNotifications"></a>

```typescript
public readonly ListProfileNotifications: string;
```

- *Type:* string

[List] wellarchitected:ListProfileNotifications.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string;
```

- *Type:* string

[List] wellarchitected:ListProfiles.

---

##### `ListProfileShares`<sup>Required</sup> <a name="ListProfileShares" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListProfileShares"></a>

```typescript
public readonly ListProfileShares: string;
```

- *Type:* string

[List] wellarchitected:ListProfileShares.

---

##### `ListReviewTemplateAnswers`<sup>Required</sup> <a name="ListReviewTemplateAnswers" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListReviewTemplateAnswers"></a>

```typescript
public readonly ListReviewTemplateAnswers: string;
```

- *Type:* string

[List] wellarchitected:ListReviewTemplateAnswers.

---

##### `ListReviewTemplates`<sup>Required</sup> <a name="ListReviewTemplates" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListReviewTemplates"></a>

```typescript
public readonly ListReviewTemplates: string;
```

- *Type:* string

[List] wellarchitected:ListReviewTemplates.

---

##### `ListShareInvitations`<sup>Required</sup> <a name="ListShareInvitations" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListShareInvitations"></a>

```typescript
public readonly ListShareInvitations: string;
```

- *Type:* string

[List] wellarchitected:ListShareInvitations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] wellarchitected:ListTagsForResource.

---

##### `ListTemplateShares`<sup>Required</sup> <a name="ListTemplateShares" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListTemplateShares"></a>

```typescript
public readonly ListTemplateShares: string;
```

- *Type:* string

[List] wellarchitected:ListTemplateShares.

---

##### `ListWorkloads`<sup>Required</sup> <a name="ListWorkloads" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListWorkloads"></a>

```typescript
public readonly ListWorkloads: string;
```

- *Type:* string

[List] wellarchitected:ListWorkloads.

---

##### `ListWorkloadShares`<sup>Required</sup> <a name="ListWorkloadShares" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.ListWorkloadShares"></a>

```typescript
public readonly ListWorkloadShares: string;
```

- *Type:* string

[List] wellarchitected:ListWorkloadShares.

---

##### `PutAgentRecommendationFeedback`<sup>Required</sup> <a name="PutAgentRecommendationFeedback" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.PutAgentRecommendationFeedback"></a>

```typescript
public readonly PutAgentRecommendationFeedback: string;
```

- *Type:* string

[Write] wellarchitected:PutAgentRecommendationFeedback.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAgentRecommendationGeneration`<sup>Required</sup> <a name="StartAgentRecommendationGeneration" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.StartAgentRecommendationGeneration"></a>

```typescript
public readonly StartAgentRecommendationGeneration: string;
```

- *Type:* string

[Write] wellarchitected:StartAgentRecommendationGeneration.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] wellarchitected:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] wellarchitected:UntagResource.

---

##### `UpdateAgentContext`<sup>Required</sup> <a name="UpdateAgentContext" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAgentContext"></a>

```typescript
public readonly UpdateAgentContext: string;
```

- *Type:* string

[Write] wellarchitected:UpdateAgentContext.

---

##### `UpdateAgentGoal`<sup>Required</sup> <a name="UpdateAgentGoal" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAgentGoal"></a>

```typescript
public readonly UpdateAgentGoal: string;
```

- *Type:* string

[Write] wellarchitected:UpdateAgentGoal.

---

##### `UpdateAgentProfile`<sup>Required</sup> <a name="UpdateAgentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAgentProfile"></a>

```typescript
public readonly UpdateAgentProfile: string;
```

- *Type:* string

[Write] wellarchitected:UpdateAgentProfile.

---

##### `UpdateAgentRecommendationStatus`<sup>Required</sup> <a name="UpdateAgentRecommendationStatus" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAgentRecommendationStatus"></a>

```typescript
public readonly UpdateAgentRecommendationStatus: string;
```

- *Type:* string

[Write] wellarchitected:UpdateAgentRecommendationStatus.

---

##### `UpdateAnswer`<sup>Required</sup> <a name="UpdateAnswer" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateAnswer"></a>

```typescript
public readonly UpdateAnswer: string;
```

- *Type:* string

[Write] wellarchitected:UpdateAnswer.

---

##### `UpdateGlobalSettings`<sup>Required</sup> <a name="UpdateGlobalSettings" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateGlobalSettings"></a>

```typescript
public readonly UpdateGlobalSettings: string;
```

- *Type:* string

[Write] wellarchitected:UpdateGlobalSettings.

---

##### `UpdateIntegration`<sup>Required</sup> <a name="UpdateIntegration" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateIntegration"></a>

```typescript
public readonly UpdateIntegration: string;
```

- *Type:* string

[Write] wellarchitected:UpdateIntegration.

---

##### `UpdateLensReview`<sup>Required</sup> <a name="UpdateLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateLensReview"></a>

```typescript
public readonly UpdateLensReview: string;
```

- *Type:* string

[Write] wellarchitected:UpdateLensReview.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string;
```

- *Type:* string

[Write] wellarchitected:UpdateProfile.

---

##### `UpdateReviewTemplate`<sup>Required</sup> <a name="UpdateReviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateReviewTemplate"></a>

```typescript
public readonly UpdateReviewTemplate: string;
```

- *Type:* string

[Write] wellarchitected:UpdateReviewTemplate.

---

##### `UpdateReviewTemplateAnswer`<sup>Required</sup> <a name="UpdateReviewTemplateAnswer" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateReviewTemplateAnswer"></a>

```typescript
public readonly UpdateReviewTemplateAnswer: string;
```

- *Type:* string

[Write] wellarchitected:UpdateReviewTemplateAnswer.

---

##### `UpdateReviewTemplateLensReview`<sup>Required</sup> <a name="UpdateReviewTemplateLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateReviewTemplateLensReview"></a>

```typescript
public readonly UpdateReviewTemplateLensReview: string;
```

- *Type:* string

[Write] wellarchitected:UpdateReviewTemplateLensReview.

---

##### `UpdateShareInvitation`<sup>Required</sup> <a name="UpdateShareInvitation" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateShareInvitation"></a>

```typescript
public readonly UpdateShareInvitation: string;
```

- *Type:* string

[Write] wellarchitected:UpdateShareInvitation.

---

##### `UpdateWorkload`<sup>Required</sup> <a name="UpdateWorkload" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateWorkload"></a>

```typescript
public readonly UpdateWorkload: string;
```

- *Type:* string

[Write] wellarchitected:UpdateWorkload.

---

##### `UpdateWorkloadShare`<sup>Required</sup> <a name="UpdateWorkloadShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpdateWorkloadShare"></a>

```typescript
public readonly UpdateWorkloadShare: string;
```

- *Type:* string

[Write] wellarchitected:UpdateWorkloadShare.

---

##### `UpgradeLensReview`<sup>Required</sup> <a name="UpgradeLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpgradeLensReview"></a>

```typescript
public readonly UpgradeLensReview: string;
```

- *Type:* string

[Write] wellarchitected:UpgradeLensReview.

---

##### `UpgradeProfileVersion`<sup>Required</sup> <a name="UpgradeProfileVersion" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpgradeProfileVersion"></a>

```typescript
public readonly UpgradeProfileVersion: string;
```

- *Type:* string

[Write] wellarchitected:UpgradeProfileVersion.

---

##### `UpgradeReviewTemplateLensReview`<sup>Required</sup> <a name="UpgradeReviewTemplateLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedActions.property.UpgradeReviewTemplateLensReview"></a>

```typescript
public readonly UpgradeReviewTemplateLensReview: string;
```

- *Type:* string

[Write] wellarchitected:UpgradeReviewTemplateLensReview.

---

### WellArchitectedConditions <a name="WellArchitectedConditions" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions"></a>

Condition key constants and builders for wellarchitected.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

new wellarchitected.WellArchitectedConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.jiraProjectKey">jiraProjectKey</a></code> | Generates a condition block for `wellarchitected:JiraProjectKey`. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `jiraProjectKey` <a name="jiraProjectKey" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.jiraProjectKey"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedConditions.jiraProjectKey(value: string)
```

Generates a condition block for `wellarchitected:JiraProjectKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.jiraProjectKey.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.requestTag"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.resourceTag"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.tagKeys"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentContextConditionKeys">actionGetAgentContextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgentContext action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentGoalConditionKeys">actionGetAgentGoalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgentGoal action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentProfileConditionKeys">actionGetAgentProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgentProfile action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentRecommendationConditionKeys">actionGetAgentRecommendationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgentRecommendation action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentRecommendationGenerationConditionKeys">actionGetAgentRecommendationGenerationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAgentRecommendationGeneration action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAnswerConditionKeys">actionGetAnswerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAnswer action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetLensConditionKeys">actionGetLensConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLens action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetLensReviewConditionKeys">actionGetLensReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLensReview action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetLensReviewReportConditionKeys">actionGetLensReviewReportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLensReviewReport action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetLensVersionDifferenceConditionKeys">actionGetLensVersionDifferenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLensVersionDifference action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetMilestoneConditionKeys">actionGetMilestoneConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMilestone action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetProfileConditionKeys">actionGetProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetProfile action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetReviewTemplateAnswerConditionKeys">actionGetReviewTemplateAnswerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetReviewTemplateAnswer action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetReviewTemplateConditionKeys">actionGetReviewTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetReviewTemplate action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetReviewTemplateLensReviewConditionKeys">actionGetReviewTemplateLensReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetReviewTemplateLensReview action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetWorkloadConditionKeys">actionGetWorkloadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetWorkload action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AssociateLensesConditionKeys">AssociateLensesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateLenses action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AssociateProfilesConditionKeys">AssociateProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateProfiles action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateAgentContextConditionKeys">CreateAgentContextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentContext action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateAgentGoalConditionKeys">CreateAgentGoalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentGoal action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateAgentProfileConditionKeys">CreateAgentProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAgentProfile action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateLensShareConditionKeys">CreateLensShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLensShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateLensVersionConditionKeys">CreateLensVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLensVersion action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateMilestoneConditionKeys">CreateMilestoneConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMilestone action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateProfileConditionKeys">CreateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfile action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateProfileShareConditionKeys">CreateProfileShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProfileShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateReviewTemplateConditionKeys">CreateReviewTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateReviewTemplate action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateTemplateShareConditionKeys">CreateTemplateShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTemplateShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateWorkloadConditionKeys">CreateWorkloadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkload action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateWorkloadShareConditionKeys">CreateWorkloadShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkloadShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteAgentContextConditionKeys">DeleteAgentContextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAgentContext action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteAgentGoalConditionKeys">DeleteAgentGoalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAgentGoal action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteAgentProfileConditionKeys">DeleteAgentProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAgentProfile action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteLensConditionKeys">DeleteLensConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLens action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteLensShareConditionKeys">DeleteLensShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLensShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteProfileConditionKeys">DeleteProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteProfile action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteProfileShareConditionKeys">DeleteProfileShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteProfileShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteReviewTemplateConditionKeys">DeleteReviewTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteReviewTemplate action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteTemplateShareConditionKeys">DeleteTemplateShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTemplateShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteWorkloadConditionKeys">DeleteWorkloadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteWorkload action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteWorkloadShareConditionKeys">DeleteWorkloadShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteWorkloadShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DisassociateLensesConditionKeys">DisassociateLensesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateLenses action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DisassociateProfilesConditionKeys">DisassociateProfilesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateProfiles action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ExportLensConditionKeys">ExportLensConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ExportLens action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ImportLensConditionKeys">ImportLensConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportLens action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.JIRA_PROJECT_KEY">JIRA_PROJECT_KEY</a></code> | <code>string</code> | Condition key: wellarchitected:JiraProjectKey (String). |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentContextsConditionKeys">ListAgentContextsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgentContexts action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentGoalsConditionKeys">ListAgentGoalsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgentGoals action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentRecommendationGenerationsConditionKeys">ListAgentRecommendationGenerationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgentRecommendationGenerations action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentRecommendationItemsConditionKeys">ListAgentRecommendationItemsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgentRecommendationItems action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentRecommendationsConditionKeys">ListAgentRecommendationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAgentRecommendations action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAnswersConditionKeys">ListAnswersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAnswers action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListCheckDetailsConditionKeys">ListCheckDetailsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListCheckDetails action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListCheckSummariesConditionKeys">ListCheckSummariesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListCheckSummaries action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListLensReviewImprovementsConditionKeys">ListLensReviewImprovementsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListLensReviewImprovements action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListLensReviewsConditionKeys">ListLensReviewsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListLensReviews action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListLensSharesConditionKeys">ListLensSharesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListLensShares action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListMilestonesConditionKeys">ListMilestonesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListMilestones action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListProfileSharesConditionKeys">ListProfileSharesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListProfileShares action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListReviewTemplateAnswersConditionKeys">ListReviewTemplateAnswersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListReviewTemplateAnswers action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListTemplateSharesConditionKeys">ListTemplateSharesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTemplateShares action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListWorkloadSharesConditionKeys">ListWorkloadSharesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListWorkloadShares action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.PutAgentRecommendationFeedbackConditionKeys">PutAgentRecommendationFeedbackConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAgentRecommendationFeedback action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.StartAgentRecommendationGenerationConditionKeys">StartAgentRecommendationGenerationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAgentRecommendationGeneration action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAgentContextConditionKeys">UpdateAgentContextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAgentContext action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAgentGoalConditionKeys">UpdateAgentGoalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAgentGoal action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAgentProfileConditionKeys">UpdateAgentProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAgentProfile action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAgentRecommendationStatusConditionKeys">UpdateAgentRecommendationStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAgentRecommendationStatus action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAnswerConditionKeys">UpdateAnswerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAnswer action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateGlobalSettingsConditionKeys">UpdateGlobalSettingsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateGlobalSettings action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateIntegrationConditionKeys">UpdateIntegrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateIntegration action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateLensReviewConditionKeys">UpdateLensReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateLensReview action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateProfileConditionKeys">UpdateProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProfile action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateReviewTemplateAnswerConditionKeys">UpdateReviewTemplateAnswerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReviewTemplateAnswer action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateReviewTemplateConditionKeys">UpdateReviewTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReviewTemplate action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateReviewTemplateLensReviewConditionKeys">UpdateReviewTemplateLensReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateReviewTemplateLensReview action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateWorkloadConditionKeys">UpdateWorkloadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkload action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateWorkloadShareConditionKeys">UpdateWorkloadShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateWorkloadShare action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpgradeLensReviewConditionKeys">UpgradeLensReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpgradeLensReview action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpgradeProfileVersionConditionKeys">UpgradeProfileVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpgradeProfileVersion action. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpgradeReviewTemplateLensReviewConditionKeys">UpgradeReviewTemplateLensReviewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpgradeReviewTemplateLensReview action. |

---

##### `actionGetAgentContextConditionKeys`<sup>Required</sup> <a name="actionGetAgentContextConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentContextConditionKeys"></a>

```typescript
public readonly actionGetAgentContextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgentContext action.

---

##### `actionGetAgentGoalConditionKeys`<sup>Required</sup> <a name="actionGetAgentGoalConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentGoalConditionKeys"></a>

```typescript
public readonly actionGetAgentGoalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgentGoal action.

---

##### `actionGetAgentProfileConditionKeys`<sup>Required</sup> <a name="actionGetAgentProfileConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentProfileConditionKeys"></a>

```typescript
public readonly actionGetAgentProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgentProfile action.

---

##### `actionGetAgentRecommendationConditionKeys`<sup>Required</sup> <a name="actionGetAgentRecommendationConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentRecommendationConditionKeys"></a>

```typescript
public readonly actionGetAgentRecommendationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgentRecommendation action.

---

##### `actionGetAgentRecommendationGenerationConditionKeys`<sup>Required</sup> <a name="actionGetAgentRecommendationGenerationConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAgentRecommendationGenerationConditionKeys"></a>

```typescript
public readonly actionGetAgentRecommendationGenerationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAgentRecommendationGeneration action.

---

##### `actionGetAnswerConditionKeys`<sup>Required</sup> <a name="actionGetAnswerConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetAnswerConditionKeys"></a>

```typescript
public readonly actionGetAnswerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAnswer action.

---

##### `actionGetLensConditionKeys`<sup>Required</sup> <a name="actionGetLensConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetLensConditionKeys"></a>

```typescript
public readonly actionGetLensConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLens action.

---

##### `actionGetLensReviewConditionKeys`<sup>Required</sup> <a name="actionGetLensReviewConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetLensReviewConditionKeys"></a>

```typescript
public readonly actionGetLensReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLensReview action.

---

##### `actionGetLensReviewReportConditionKeys`<sup>Required</sup> <a name="actionGetLensReviewReportConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetLensReviewReportConditionKeys"></a>

```typescript
public readonly actionGetLensReviewReportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLensReviewReport action.

---

##### `actionGetLensVersionDifferenceConditionKeys`<sup>Required</sup> <a name="actionGetLensVersionDifferenceConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetLensVersionDifferenceConditionKeys"></a>

```typescript
public readonly actionGetLensVersionDifferenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLensVersionDifference action.

---

##### `actionGetMilestoneConditionKeys`<sup>Required</sup> <a name="actionGetMilestoneConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetMilestoneConditionKeys"></a>

```typescript
public readonly actionGetMilestoneConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMilestone action.

---

##### `actionGetProfileConditionKeys`<sup>Required</sup> <a name="actionGetProfileConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetProfileConditionKeys"></a>

```typescript
public readonly actionGetProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetProfile action.

---

##### `actionGetReviewTemplateAnswerConditionKeys`<sup>Required</sup> <a name="actionGetReviewTemplateAnswerConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetReviewTemplateAnswerConditionKeys"></a>

```typescript
public readonly actionGetReviewTemplateAnswerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetReviewTemplateAnswer action.

---

##### `actionGetReviewTemplateConditionKeys`<sup>Required</sup> <a name="actionGetReviewTemplateConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetReviewTemplateConditionKeys"></a>

```typescript
public readonly actionGetReviewTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetReviewTemplate action.

---

##### `actionGetReviewTemplateLensReviewConditionKeys`<sup>Required</sup> <a name="actionGetReviewTemplateLensReviewConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetReviewTemplateLensReviewConditionKeys"></a>

```typescript
public readonly actionGetReviewTemplateLensReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetReviewTemplateLensReview action.

---

##### `actionGetWorkloadConditionKeys`<sup>Required</sup> <a name="actionGetWorkloadConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.actionGetWorkloadConditionKeys"></a>

```typescript
public readonly actionGetWorkloadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetWorkload action.

---

##### `AssociateLensesConditionKeys`<sup>Required</sup> <a name="AssociateLensesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AssociateLensesConditionKeys"></a>

```typescript
public readonly AssociateLensesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateLenses action.

---

##### `AssociateProfilesConditionKeys`<sup>Required</sup> <a name="AssociateProfilesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AssociateProfilesConditionKeys"></a>

```typescript
public readonly AssociateProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateProfiles action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAgentContextConditionKeys`<sup>Required</sup> <a name="CreateAgentContextConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateAgentContextConditionKeys"></a>

```typescript
public readonly CreateAgentContextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentContext action.

---

##### `CreateAgentGoalConditionKeys`<sup>Required</sup> <a name="CreateAgentGoalConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateAgentGoalConditionKeys"></a>

```typescript
public readonly CreateAgentGoalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentGoal action.

---

##### `CreateAgentProfileConditionKeys`<sup>Required</sup> <a name="CreateAgentProfileConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateAgentProfileConditionKeys"></a>

```typescript
public readonly CreateAgentProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAgentProfile action.

---

##### `CreateLensShareConditionKeys`<sup>Required</sup> <a name="CreateLensShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateLensShareConditionKeys"></a>

```typescript
public readonly CreateLensShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLensShare action.

---

##### `CreateLensVersionConditionKeys`<sup>Required</sup> <a name="CreateLensVersionConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateLensVersionConditionKeys"></a>

```typescript
public readonly CreateLensVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLensVersion action.

---

##### `CreateMilestoneConditionKeys`<sup>Required</sup> <a name="CreateMilestoneConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateMilestoneConditionKeys"></a>

```typescript
public readonly CreateMilestoneConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMilestone action.

---

##### `CreateProfileConditionKeys`<sup>Required</sup> <a name="CreateProfileConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateProfileConditionKeys"></a>

```typescript
public readonly CreateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfile action.

---

##### `CreateProfileShareConditionKeys`<sup>Required</sup> <a name="CreateProfileShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateProfileShareConditionKeys"></a>

```typescript
public readonly CreateProfileShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProfileShare action.

---

##### `CreateReviewTemplateConditionKeys`<sup>Required</sup> <a name="CreateReviewTemplateConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateReviewTemplateConditionKeys"></a>

```typescript
public readonly CreateReviewTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateReviewTemplate action.

---

##### `CreateTemplateShareConditionKeys`<sup>Required</sup> <a name="CreateTemplateShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateTemplateShareConditionKeys"></a>

```typescript
public readonly CreateTemplateShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTemplateShare action.

---

##### `CreateWorkloadConditionKeys`<sup>Required</sup> <a name="CreateWorkloadConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateWorkloadConditionKeys"></a>

```typescript
public readonly CreateWorkloadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkload action.

---

##### `CreateWorkloadShareConditionKeys`<sup>Required</sup> <a name="CreateWorkloadShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.CreateWorkloadShareConditionKeys"></a>

```typescript
public readonly CreateWorkloadShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkloadShare action.

---

##### `DeleteAgentContextConditionKeys`<sup>Required</sup> <a name="DeleteAgentContextConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteAgentContextConditionKeys"></a>

```typescript
public readonly DeleteAgentContextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAgentContext action.

---

##### `DeleteAgentGoalConditionKeys`<sup>Required</sup> <a name="DeleteAgentGoalConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteAgentGoalConditionKeys"></a>

```typescript
public readonly DeleteAgentGoalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAgentGoal action.

---

##### `DeleteAgentProfileConditionKeys`<sup>Required</sup> <a name="DeleteAgentProfileConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteAgentProfileConditionKeys"></a>

```typescript
public readonly DeleteAgentProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAgentProfile action.

---

##### `DeleteLensConditionKeys`<sup>Required</sup> <a name="DeleteLensConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteLensConditionKeys"></a>

```typescript
public readonly DeleteLensConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLens action.

---

##### `DeleteLensShareConditionKeys`<sup>Required</sup> <a name="DeleteLensShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteLensShareConditionKeys"></a>

```typescript
public readonly DeleteLensShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLensShare action.

---

##### `DeleteProfileConditionKeys`<sup>Required</sup> <a name="DeleteProfileConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteProfileConditionKeys"></a>

```typescript
public readonly DeleteProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteProfile action.

---

##### `DeleteProfileShareConditionKeys`<sup>Required</sup> <a name="DeleteProfileShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteProfileShareConditionKeys"></a>

```typescript
public readonly DeleteProfileShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteProfileShare action.

---

##### `DeleteReviewTemplateConditionKeys`<sup>Required</sup> <a name="DeleteReviewTemplateConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteReviewTemplateConditionKeys"></a>

```typescript
public readonly DeleteReviewTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteReviewTemplate action.

---

##### `DeleteTemplateShareConditionKeys`<sup>Required</sup> <a name="DeleteTemplateShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteTemplateShareConditionKeys"></a>

```typescript
public readonly DeleteTemplateShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTemplateShare action.

---

##### `DeleteWorkloadConditionKeys`<sup>Required</sup> <a name="DeleteWorkloadConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteWorkloadConditionKeys"></a>

```typescript
public readonly DeleteWorkloadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteWorkload action.

---

##### `DeleteWorkloadShareConditionKeys`<sup>Required</sup> <a name="DeleteWorkloadShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DeleteWorkloadShareConditionKeys"></a>

```typescript
public readonly DeleteWorkloadShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteWorkloadShare action.

---

##### `DisassociateLensesConditionKeys`<sup>Required</sup> <a name="DisassociateLensesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DisassociateLensesConditionKeys"></a>

```typescript
public readonly DisassociateLensesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateLenses action.

---

##### `DisassociateProfilesConditionKeys`<sup>Required</sup> <a name="DisassociateProfilesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.DisassociateProfilesConditionKeys"></a>

```typescript
public readonly DisassociateProfilesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateProfiles action.

---

##### `ExportLensConditionKeys`<sup>Required</sup> <a name="ExportLensConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ExportLensConditionKeys"></a>

```typescript
public readonly ExportLensConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ExportLens action.

---

##### `ImportLensConditionKeys`<sup>Required</sup> <a name="ImportLensConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ImportLensConditionKeys"></a>

```typescript
public readonly ImportLensConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportLens action.

---

##### `JIRA_PROJECT_KEY`<sup>Required</sup> <a name="JIRA_PROJECT_KEY" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.JIRA_PROJECT_KEY"></a>

```typescript
public readonly JIRA_PROJECT_KEY: string;
```

- *Type:* string

Condition key: wellarchitected:JiraProjectKey (String).

---

##### `ListAgentContextsConditionKeys`<sup>Required</sup> <a name="ListAgentContextsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentContextsConditionKeys"></a>

```typescript
public readonly ListAgentContextsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgentContexts action.

---

##### `ListAgentGoalsConditionKeys`<sup>Required</sup> <a name="ListAgentGoalsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentGoalsConditionKeys"></a>

```typescript
public readonly ListAgentGoalsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgentGoals action.

---

##### `ListAgentRecommendationGenerationsConditionKeys`<sup>Required</sup> <a name="ListAgentRecommendationGenerationsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentRecommendationGenerationsConditionKeys"></a>

```typescript
public readonly ListAgentRecommendationGenerationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgentRecommendationGenerations action.

---

##### `ListAgentRecommendationItemsConditionKeys`<sup>Required</sup> <a name="ListAgentRecommendationItemsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentRecommendationItemsConditionKeys"></a>

```typescript
public readonly ListAgentRecommendationItemsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgentRecommendationItems action.

---

##### `ListAgentRecommendationsConditionKeys`<sup>Required</sup> <a name="ListAgentRecommendationsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAgentRecommendationsConditionKeys"></a>

```typescript
public readonly ListAgentRecommendationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAgentRecommendations action.

---

##### `ListAnswersConditionKeys`<sup>Required</sup> <a name="ListAnswersConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListAnswersConditionKeys"></a>

```typescript
public readonly ListAnswersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAnswers action.

---

##### `ListCheckDetailsConditionKeys`<sup>Required</sup> <a name="ListCheckDetailsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListCheckDetailsConditionKeys"></a>

```typescript
public readonly ListCheckDetailsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListCheckDetails action.

---

##### `ListCheckSummariesConditionKeys`<sup>Required</sup> <a name="ListCheckSummariesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListCheckSummariesConditionKeys"></a>

```typescript
public readonly ListCheckSummariesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListCheckSummaries action.

---

##### `ListLensReviewImprovementsConditionKeys`<sup>Required</sup> <a name="ListLensReviewImprovementsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListLensReviewImprovementsConditionKeys"></a>

```typescript
public readonly ListLensReviewImprovementsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListLensReviewImprovements action.

---

##### `ListLensReviewsConditionKeys`<sup>Required</sup> <a name="ListLensReviewsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListLensReviewsConditionKeys"></a>

```typescript
public readonly ListLensReviewsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListLensReviews action.

---

##### `ListLensSharesConditionKeys`<sup>Required</sup> <a name="ListLensSharesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListLensSharesConditionKeys"></a>

```typescript
public readonly ListLensSharesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListLensShares action.

---

##### `ListMilestonesConditionKeys`<sup>Required</sup> <a name="ListMilestonesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListMilestonesConditionKeys"></a>

```typescript
public readonly ListMilestonesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListMilestones action.

---

##### `ListProfileSharesConditionKeys`<sup>Required</sup> <a name="ListProfileSharesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListProfileSharesConditionKeys"></a>

```typescript
public readonly ListProfileSharesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListProfileShares action.

---

##### `ListReviewTemplateAnswersConditionKeys`<sup>Required</sup> <a name="ListReviewTemplateAnswersConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListReviewTemplateAnswersConditionKeys"></a>

```typescript
public readonly ListReviewTemplateAnswersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListReviewTemplateAnswers action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListTemplateSharesConditionKeys`<sup>Required</sup> <a name="ListTemplateSharesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListTemplateSharesConditionKeys"></a>

```typescript
public readonly ListTemplateSharesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTemplateShares action.

---

##### `ListWorkloadSharesConditionKeys`<sup>Required</sup> <a name="ListWorkloadSharesConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.ListWorkloadSharesConditionKeys"></a>

```typescript
public readonly ListWorkloadSharesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListWorkloadShares action.

---

##### `PutAgentRecommendationFeedbackConditionKeys`<sup>Required</sup> <a name="PutAgentRecommendationFeedbackConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.PutAgentRecommendationFeedbackConditionKeys"></a>

```typescript
public readonly PutAgentRecommendationFeedbackConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAgentRecommendationFeedback action.

---

##### `StartAgentRecommendationGenerationConditionKeys`<sup>Required</sup> <a name="StartAgentRecommendationGenerationConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.StartAgentRecommendationGenerationConditionKeys"></a>

```typescript
public readonly StartAgentRecommendationGenerationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAgentRecommendationGeneration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAgentContextConditionKeys`<sup>Required</sup> <a name="UpdateAgentContextConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAgentContextConditionKeys"></a>

```typescript
public readonly UpdateAgentContextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAgentContext action.

---

##### `UpdateAgentGoalConditionKeys`<sup>Required</sup> <a name="UpdateAgentGoalConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAgentGoalConditionKeys"></a>

```typescript
public readonly UpdateAgentGoalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAgentGoal action.

---

##### `UpdateAgentProfileConditionKeys`<sup>Required</sup> <a name="UpdateAgentProfileConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAgentProfileConditionKeys"></a>

```typescript
public readonly UpdateAgentProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAgentProfile action.

---

##### `UpdateAgentRecommendationStatusConditionKeys`<sup>Required</sup> <a name="UpdateAgentRecommendationStatusConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAgentRecommendationStatusConditionKeys"></a>

```typescript
public readonly UpdateAgentRecommendationStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAgentRecommendationStatus action.

---

##### `UpdateAnswerConditionKeys`<sup>Required</sup> <a name="UpdateAnswerConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateAnswerConditionKeys"></a>

```typescript
public readonly UpdateAnswerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAnswer action.

---

##### `UpdateGlobalSettingsConditionKeys`<sup>Required</sup> <a name="UpdateGlobalSettingsConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateGlobalSettingsConditionKeys"></a>

```typescript
public readonly UpdateGlobalSettingsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateGlobalSettings action.

---

##### `UpdateIntegrationConditionKeys`<sup>Required</sup> <a name="UpdateIntegrationConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateIntegrationConditionKeys"></a>

```typescript
public readonly UpdateIntegrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateIntegration action.

---

##### `UpdateLensReviewConditionKeys`<sup>Required</sup> <a name="UpdateLensReviewConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateLensReviewConditionKeys"></a>

```typescript
public readonly UpdateLensReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateLensReview action.

---

##### `UpdateProfileConditionKeys`<sup>Required</sup> <a name="UpdateProfileConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateProfileConditionKeys"></a>

```typescript
public readonly UpdateProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProfile action.

---

##### `UpdateReviewTemplateAnswerConditionKeys`<sup>Required</sup> <a name="UpdateReviewTemplateAnswerConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateReviewTemplateAnswerConditionKeys"></a>

```typescript
public readonly UpdateReviewTemplateAnswerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReviewTemplateAnswer action.

---

##### `UpdateReviewTemplateConditionKeys`<sup>Required</sup> <a name="UpdateReviewTemplateConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateReviewTemplateConditionKeys"></a>

```typescript
public readonly UpdateReviewTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReviewTemplate action.

---

##### `UpdateReviewTemplateLensReviewConditionKeys`<sup>Required</sup> <a name="UpdateReviewTemplateLensReviewConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateReviewTemplateLensReviewConditionKeys"></a>

```typescript
public readonly UpdateReviewTemplateLensReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateReviewTemplateLensReview action.

---

##### `UpdateWorkloadConditionKeys`<sup>Required</sup> <a name="UpdateWorkloadConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateWorkloadConditionKeys"></a>

```typescript
public readonly UpdateWorkloadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkload action.

---

##### `UpdateWorkloadShareConditionKeys`<sup>Required</sup> <a name="UpdateWorkloadShareConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpdateWorkloadShareConditionKeys"></a>

```typescript
public readonly UpdateWorkloadShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateWorkloadShare action.

---

##### `UpgradeLensReviewConditionKeys`<sup>Required</sup> <a name="UpgradeLensReviewConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpgradeLensReviewConditionKeys"></a>

```typescript
public readonly UpgradeLensReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpgradeLensReview action.

---

##### `UpgradeProfileVersionConditionKeys`<sup>Required</sup> <a name="UpgradeProfileVersionConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpgradeProfileVersionConditionKeys"></a>

```typescript
public readonly UpgradeProfileVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpgradeProfileVersion action.

---

##### `UpgradeReviewTemplateLensReviewConditionKeys`<sup>Required</sup> <a name="UpgradeReviewTemplateLensReviewConditionKeys" id="@cdk_utils/iam.wellarchitected.WellArchitectedConditions.property.UpgradeReviewTemplateLensReviewConditionKeys"></a>

```typescript
public readonly UpgradeReviewTemplateLensReviewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpgradeReviewTemplateLensReview action.

---

### WellArchitectedOperations <a name="WellArchitectedOperations" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations"></a>

API operation to required IAM actions mapping for wellarchitected.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

new wellarchitected.WellArchitectedOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.AssociateLenses">AssociateLenses</a></code> | <code>string[]</code> | IAM actions required for the AssociateLenses API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.AssociateProfiles">AssociateProfiles</a></code> | <code>string[]</code> | IAM actions required for the AssociateProfiles API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateAgentContext">CreateAgentContext</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentContext API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateAgentGoal">CreateAgentGoal</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentGoal API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateAgentProfile">CreateAgentProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateAgentProfile API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateLensShare">CreateLensShare</a></code> | <code>string[]</code> | IAM actions required for the CreateLensShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateLensVersion">CreateLensVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateLensVersion API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateMilestone">CreateMilestone</a></code> | <code>string[]</code> | IAM actions required for the CreateMilestone API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateProfile">CreateProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateProfile API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateProfileShare">CreateProfileShare</a></code> | <code>string[]</code> | IAM actions required for the CreateProfileShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateReviewTemplate">CreateReviewTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateReviewTemplate API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateTemplateShare">CreateTemplateShare</a></code> | <code>string[]</code> | IAM actions required for the CreateTemplateShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateWorkload">CreateWorkload</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkload API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateWorkloadShare">CreateWorkloadShare</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkloadShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteAgentContext">DeleteAgentContext</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentContext API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteAgentGoal">DeleteAgentGoal</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentGoal API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteAgentProfile">DeleteAgentProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteAgentProfile API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteLens">DeleteLens</a></code> | <code>string[]</code> | IAM actions required for the DeleteLens API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteLensShare">DeleteLensShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteLensShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteProfile">DeleteProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfile API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteProfileShare">DeleteProfileShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteProfileShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteReviewTemplate">DeleteReviewTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteReviewTemplate API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteTemplateShare">DeleteTemplateShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteTemplateShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteWorkload">DeleteWorkload</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkload API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteWorkloadShare">DeleteWorkloadShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkloadShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DisassociateLenses">DisassociateLenses</a></code> | <code>string[]</code> | IAM actions required for the DisassociateLenses API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DisassociateProfiles">DisassociateProfiles</a></code> | <code>string[]</code> | IAM actions required for the DisassociateProfiles API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ExportLens">ExportLens</a></code> | <code>string[]</code> | IAM actions required for the ExportLens API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ImportLens">ImportLens</a></code> | <code>string[]</code> | IAM actions required for the ImportLens API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentContexts">ListAgentContexts</a></code> | <code>string[]</code> | IAM actions required for the ListAgentContexts API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentGoals">ListAgentGoals</a></code> | <code>string[]</code> | IAM actions required for the ListAgentGoals API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentProfiles">ListAgentProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListAgentProfiles API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentRecommendationGenerations">ListAgentRecommendationGenerations</a></code> | <code>string[]</code> | IAM actions required for the ListAgentRecommendationGenerations API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentRecommendationItems">ListAgentRecommendationItems</a></code> | <code>string[]</code> | IAM actions required for the ListAgentRecommendationItems API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentRecommendations">ListAgentRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListAgentRecommendations API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAnswers">ListAnswers</a></code> | <code>string[]</code> | IAM actions required for the ListAnswers API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListCheckDetails">ListCheckDetails</a></code> | <code>string[]</code> | IAM actions required for the ListCheckDetails API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListCheckSummaries">ListCheckSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListCheckSummaries API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListLenses">ListLenses</a></code> | <code>string[]</code> | IAM actions required for the ListLenses API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListLensReviewImprovements">ListLensReviewImprovements</a></code> | <code>string[]</code> | IAM actions required for the ListLensReviewImprovements API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListLensReviews">ListLensReviews</a></code> | <code>string[]</code> | IAM actions required for the ListLensReviews API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListLensShares">ListLensShares</a></code> | <code>string[]</code> | IAM actions required for the ListLensShares API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListMilestones">ListMilestones</a></code> | <code>string[]</code> | IAM actions required for the ListMilestones API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListNotifications">ListNotifications</a></code> | <code>string[]</code> | IAM actions required for the ListNotifications API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListProfileNotifications">ListProfileNotifications</a></code> | <code>string[]</code> | IAM actions required for the ListProfileNotifications API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListProfiles">ListProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListProfiles API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListProfileShares">ListProfileShares</a></code> | <code>string[]</code> | IAM actions required for the ListProfileShares API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListReviewTemplateAnswers">ListReviewTemplateAnswers</a></code> | <code>string[]</code> | IAM actions required for the ListReviewTemplateAnswers API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListReviewTemplates">ListReviewTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListReviewTemplates API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListShareInvitations">ListShareInvitations</a></code> | <code>string[]</code> | IAM actions required for the ListShareInvitations API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListTemplateShares">ListTemplateShares</a></code> | <code>string[]</code> | IAM actions required for the ListTemplateShares API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListWorkloads">ListWorkloads</a></code> | <code>string[]</code> | IAM actions required for the ListWorkloads API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListWorkloadShares">ListWorkloadShares</a></code> | <code>string[]</code> | IAM actions required for the ListWorkloadShares API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentContext">opGetAgentContext</a></code> | <code>string[]</code> | IAM actions required for the GetAgentContext API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentGoal">opGetAgentGoal</a></code> | <code>string[]</code> | IAM actions required for the GetAgentGoal API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentProfile">opGetAgentProfile</a></code> | <code>string[]</code> | IAM actions required for the GetAgentProfile API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentRecommendation">opGetAgentRecommendation</a></code> | <code>string[]</code> | IAM actions required for the GetAgentRecommendation API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentRecommendationGeneration">opGetAgentRecommendationGeneration</a></code> | <code>string[]</code> | IAM actions required for the GetAgentRecommendationGeneration API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAnswer">opGetAnswer</a></code> | <code>string[]</code> | IAM actions required for the GetAnswer API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetConsolidatedReport">opGetConsolidatedReport</a></code> | <code>string[]</code> | IAM actions required for the GetConsolidatedReport API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetGlobalSettings">opGetGlobalSettings</a></code> | <code>string[]</code> | IAM actions required for the GetGlobalSettings API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetLens">opGetLens</a></code> | <code>string[]</code> | IAM actions required for the GetLens API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetLensReview">opGetLensReview</a></code> | <code>string[]</code> | IAM actions required for the GetLensReview API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetLensReviewReport">opGetLensReviewReport</a></code> | <code>string[]</code> | IAM actions required for the GetLensReviewReport API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetLensVersionDifference">opGetLensVersionDifference</a></code> | <code>string[]</code> | IAM actions required for the GetLensVersionDifference API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetMilestone">opGetMilestone</a></code> | <code>string[]</code> | IAM actions required for the GetMilestone API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetProfile">opGetProfile</a></code> | <code>string[]</code> | IAM actions required for the GetProfile API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetProfileTemplate">opGetProfileTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetProfileTemplate API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetReviewTemplate">opGetReviewTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetReviewTemplate API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetReviewTemplateAnswer">opGetReviewTemplateAnswer</a></code> | <code>string[]</code> | IAM actions required for the GetReviewTemplateAnswer API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetReviewTemplateLensReview">opGetReviewTemplateLensReview</a></code> | <code>string[]</code> | IAM actions required for the GetReviewTemplateLensReview API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetWorkload">opGetWorkload</a></code> | <code>string[]</code> | IAM actions required for the GetWorkload API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.PutAgentRecommendationFeedback">PutAgentRecommendationFeedback</a></code> | <code>string[]</code> | IAM actions required for the PutAgentRecommendationFeedback API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.StartAgentRecommendationGeneration">StartAgentRecommendationGeneration</a></code> | <code>string[]</code> | IAM actions required for the StartAgentRecommendationGeneration API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAgentContext">UpdateAgentContext</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentContext API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAgentGoal">UpdateAgentGoal</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentGoal API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAgentProfile">UpdateAgentProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentProfile API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAgentRecommendationStatus">UpdateAgentRecommendationStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentRecommendationStatus API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAnswer">UpdateAnswer</a></code> | <code>string[]</code> | IAM actions required for the UpdateAnswer API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateGlobalSettings">UpdateGlobalSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlobalSettings API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateIntegration">UpdateIntegration</a></code> | <code>string[]</code> | IAM actions required for the UpdateIntegration API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateLensReview">UpdateLensReview</a></code> | <code>string[]</code> | IAM actions required for the UpdateLensReview API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateProfile">UpdateProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateProfile API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateReviewTemplate">UpdateReviewTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateReviewTemplate API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateReviewTemplateAnswer">UpdateReviewTemplateAnswer</a></code> | <code>string[]</code> | IAM actions required for the UpdateReviewTemplateAnswer API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateReviewTemplateLensReview">UpdateReviewTemplateLensReview</a></code> | <code>string[]</code> | IAM actions required for the UpdateReviewTemplateLensReview API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateShareInvitation">UpdateShareInvitation</a></code> | <code>string[]</code> | IAM actions required for the UpdateShareInvitation API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateWorkload">UpdateWorkload</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkload API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateWorkloadShare">UpdateWorkloadShare</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkloadShare API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpgradeLensReview">UpgradeLensReview</a></code> | <code>string[]</code> | IAM actions required for the UpgradeLensReview API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpgradeProfileVersion">UpgradeProfileVersion</a></code> | <code>string[]</code> | IAM actions required for the UpgradeProfileVersion API call. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpgradeReviewTemplateLensReview">UpgradeReviewTemplateLensReview</a></code> | <code>string[]</code> | IAM actions required for the UpgradeReviewTemplateLensReview API call. |

---

##### `AssociateLenses`<sup>Required</sup> <a name="AssociateLenses" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.AssociateLenses"></a>

```typescript
public readonly AssociateLenses: string[];
```

- *Type:* string[]

IAM actions required for the AssociateLenses API call.

---

##### `AssociateProfiles`<sup>Required</sup> <a name="AssociateProfiles" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.AssociateProfiles"></a>

```typescript
public readonly AssociateProfiles: string[];
```

- *Type:* string[]

IAM actions required for the AssociateProfiles API call.

---

##### `CreateAgentContext`<sup>Required</sup> <a name="CreateAgentContext" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateAgentContext"></a>

```typescript
public readonly CreateAgentContext: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentContext API call.

---

##### `CreateAgentGoal`<sup>Required</sup> <a name="CreateAgentGoal" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateAgentGoal"></a>

```typescript
public readonly CreateAgentGoal: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentGoal API call.

---

##### `CreateAgentProfile`<sup>Required</sup> <a name="CreateAgentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateAgentProfile"></a>

```typescript
public readonly CreateAgentProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateAgentProfile API call.

---

##### `CreateLensShare`<sup>Required</sup> <a name="CreateLensShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateLensShare"></a>

```typescript
public readonly CreateLensShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateLensShare API call.

---

##### `CreateLensVersion`<sup>Required</sup> <a name="CreateLensVersion" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateLensVersion"></a>

```typescript
public readonly CreateLensVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateLensVersion API call.

---

##### `CreateMilestone`<sup>Required</sup> <a name="CreateMilestone" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateMilestone"></a>

```typescript
public readonly CreateMilestone: string[];
```

- *Type:* string[]

IAM actions required for the CreateMilestone API call.

---

##### `CreateProfile`<sup>Required</sup> <a name="CreateProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateProfile"></a>

```typescript
public readonly CreateProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfile API call.

---

##### `CreateProfileShare`<sup>Required</sup> <a name="CreateProfileShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateProfileShare"></a>

```typescript
public readonly CreateProfileShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateProfileShare API call.

---

##### `CreateReviewTemplate`<sup>Required</sup> <a name="CreateReviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateReviewTemplate"></a>

```typescript
public readonly CreateReviewTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateReviewTemplate API call.

---

##### `CreateTemplateShare`<sup>Required</sup> <a name="CreateTemplateShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateTemplateShare"></a>

```typescript
public readonly CreateTemplateShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateTemplateShare API call.

---

##### `CreateWorkload`<sup>Required</sup> <a name="CreateWorkload" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateWorkload"></a>

```typescript
public readonly CreateWorkload: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkload API call.

---

##### `CreateWorkloadShare`<sup>Required</sup> <a name="CreateWorkloadShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.CreateWorkloadShare"></a>

```typescript
public readonly CreateWorkloadShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkloadShare API call.

---

##### `DeleteAgentContext`<sup>Required</sup> <a name="DeleteAgentContext" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteAgentContext"></a>

```typescript
public readonly DeleteAgentContext: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentContext API call.

---

##### `DeleteAgentGoal`<sup>Required</sup> <a name="DeleteAgentGoal" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteAgentGoal"></a>

```typescript
public readonly DeleteAgentGoal: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentGoal API call.

---

##### `DeleteAgentProfile`<sup>Required</sup> <a name="DeleteAgentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteAgentProfile"></a>

```typescript
public readonly DeleteAgentProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAgentProfile API call.

---

##### `DeleteLens`<sup>Required</sup> <a name="DeleteLens" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteLens"></a>

```typescript
public readonly DeleteLens: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLens API call.

---

##### `DeleteLensShare`<sup>Required</sup> <a name="DeleteLensShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteLensShare"></a>

```typescript
public readonly DeleteLensShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLensShare API call.

---

##### `DeleteProfile`<sup>Required</sup> <a name="DeleteProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteProfile"></a>

```typescript
public readonly DeleteProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfile API call.

---

##### `DeleteProfileShare`<sup>Required</sup> <a name="DeleteProfileShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteProfileShare"></a>

```typescript
public readonly DeleteProfileShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProfileShare API call.

---

##### `DeleteReviewTemplate`<sup>Required</sup> <a name="DeleteReviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteReviewTemplate"></a>

```typescript
public readonly DeleteReviewTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReviewTemplate API call.

---

##### `DeleteTemplateShare`<sup>Required</sup> <a name="DeleteTemplateShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteTemplateShare"></a>

```typescript
public readonly DeleteTemplateShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTemplateShare API call.

---

##### `DeleteWorkload`<sup>Required</sup> <a name="DeleteWorkload" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteWorkload"></a>

```typescript
public readonly DeleteWorkload: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkload API call.

---

##### `DeleteWorkloadShare`<sup>Required</sup> <a name="DeleteWorkloadShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DeleteWorkloadShare"></a>

```typescript
public readonly DeleteWorkloadShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkloadShare API call.

---

##### `DisassociateLenses`<sup>Required</sup> <a name="DisassociateLenses" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DisassociateLenses"></a>

```typescript
public readonly DisassociateLenses: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateLenses API call.

---

##### `DisassociateProfiles`<sup>Required</sup> <a name="DisassociateProfiles" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.DisassociateProfiles"></a>

```typescript
public readonly DisassociateProfiles: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateProfiles API call.

---

##### `ExportLens`<sup>Required</sup> <a name="ExportLens" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ExportLens"></a>

```typescript
public readonly ExportLens: string[];
```

- *Type:* string[]

IAM actions required for the ExportLens API call.

---

##### `ImportLens`<sup>Required</sup> <a name="ImportLens" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ImportLens"></a>

```typescript
public readonly ImportLens: string[];
```

- *Type:* string[]

IAM actions required for the ImportLens API call.

---

##### `ListAgentContexts`<sup>Required</sup> <a name="ListAgentContexts" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentContexts"></a>

```typescript
public readonly ListAgentContexts: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentContexts API call.

---

##### `ListAgentGoals`<sup>Required</sup> <a name="ListAgentGoals" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentGoals"></a>

```typescript
public readonly ListAgentGoals: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentGoals API call.

---

##### `ListAgentProfiles`<sup>Required</sup> <a name="ListAgentProfiles" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentProfiles"></a>

```typescript
public readonly ListAgentProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentProfiles API call.

---

##### `ListAgentRecommendationGenerations`<sup>Required</sup> <a name="ListAgentRecommendationGenerations" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentRecommendationGenerations"></a>

```typescript
public readonly ListAgentRecommendationGenerations: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentRecommendationGenerations API call.

---

##### `ListAgentRecommendationItems`<sup>Required</sup> <a name="ListAgentRecommendationItems" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentRecommendationItems"></a>

```typescript
public readonly ListAgentRecommendationItems: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentRecommendationItems API call.

---

##### `ListAgentRecommendations`<sup>Required</sup> <a name="ListAgentRecommendations" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAgentRecommendations"></a>

```typescript
public readonly ListAgentRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListAgentRecommendations API call.

---

##### `ListAnswers`<sup>Required</sup> <a name="ListAnswers" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListAnswers"></a>

```typescript
public readonly ListAnswers: string[];
```

- *Type:* string[]

IAM actions required for the ListAnswers API call.

---

##### `ListCheckDetails`<sup>Required</sup> <a name="ListCheckDetails" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListCheckDetails"></a>

```typescript
public readonly ListCheckDetails: string[];
```

- *Type:* string[]

IAM actions required for the ListCheckDetails API call.

---

##### `ListCheckSummaries`<sup>Required</sup> <a name="ListCheckSummaries" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListCheckSummaries"></a>

```typescript
public readonly ListCheckSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListCheckSummaries API call.

---

##### `ListLenses`<sup>Required</sup> <a name="ListLenses" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListLenses"></a>

```typescript
public readonly ListLenses: string[];
```

- *Type:* string[]

IAM actions required for the ListLenses API call.

---

##### `ListLensReviewImprovements`<sup>Required</sup> <a name="ListLensReviewImprovements" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListLensReviewImprovements"></a>

```typescript
public readonly ListLensReviewImprovements: string[];
```

- *Type:* string[]

IAM actions required for the ListLensReviewImprovements API call.

---

##### `ListLensReviews`<sup>Required</sup> <a name="ListLensReviews" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListLensReviews"></a>

```typescript
public readonly ListLensReviews: string[];
```

- *Type:* string[]

IAM actions required for the ListLensReviews API call.

---

##### `ListLensShares`<sup>Required</sup> <a name="ListLensShares" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListLensShares"></a>

```typescript
public readonly ListLensShares: string[];
```

- *Type:* string[]

IAM actions required for the ListLensShares API call.

---

##### `ListMilestones`<sup>Required</sup> <a name="ListMilestones" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListMilestones"></a>

```typescript
public readonly ListMilestones: string[];
```

- *Type:* string[]

IAM actions required for the ListMilestones API call.

---

##### `ListNotifications`<sup>Required</sup> <a name="ListNotifications" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListNotifications"></a>

```typescript
public readonly ListNotifications: string[];
```

- *Type:* string[]

IAM actions required for the ListNotifications API call.

---

##### `ListProfileNotifications`<sup>Required</sup> <a name="ListProfileNotifications" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListProfileNotifications"></a>

```typescript
public readonly ListProfileNotifications: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileNotifications API call.

---

##### `ListProfiles`<sup>Required</sup> <a name="ListProfiles" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListProfiles"></a>

```typescript
public readonly ListProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListProfiles API call.

---

##### `ListProfileShares`<sup>Required</sup> <a name="ListProfileShares" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListProfileShares"></a>

```typescript
public readonly ListProfileShares: string[];
```

- *Type:* string[]

IAM actions required for the ListProfileShares API call.

---

##### `ListReviewTemplateAnswers`<sup>Required</sup> <a name="ListReviewTemplateAnswers" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListReviewTemplateAnswers"></a>

```typescript
public readonly ListReviewTemplateAnswers: string[];
```

- *Type:* string[]

IAM actions required for the ListReviewTemplateAnswers API call.

---

##### `ListReviewTemplates`<sup>Required</sup> <a name="ListReviewTemplates" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListReviewTemplates"></a>

```typescript
public readonly ListReviewTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListReviewTemplates API call.

---

##### `ListShareInvitations`<sup>Required</sup> <a name="ListShareInvitations" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListShareInvitations"></a>

```typescript
public readonly ListShareInvitations: string[];
```

- *Type:* string[]

IAM actions required for the ListShareInvitations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTemplateShares`<sup>Required</sup> <a name="ListTemplateShares" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListTemplateShares"></a>

```typescript
public readonly ListTemplateShares: string[];
```

- *Type:* string[]

IAM actions required for the ListTemplateShares API call.

---

##### `ListWorkloads`<sup>Required</sup> <a name="ListWorkloads" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListWorkloads"></a>

```typescript
public readonly ListWorkloads: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkloads API call.

---

##### `ListWorkloadShares`<sup>Required</sup> <a name="ListWorkloadShares" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.ListWorkloadShares"></a>

```typescript
public readonly ListWorkloadShares: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkloadShares API call.

---

##### `opGetAgentContext`<sup>Required</sup> <a name="opGetAgentContext" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentContext"></a>

```typescript
public readonly opGetAgentContext: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentContext API call.

---

##### `opGetAgentGoal`<sup>Required</sup> <a name="opGetAgentGoal" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentGoal"></a>

```typescript
public readonly opGetAgentGoal: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentGoal API call.

---

##### `opGetAgentProfile`<sup>Required</sup> <a name="opGetAgentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentProfile"></a>

```typescript
public readonly opGetAgentProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentProfile API call.

---

##### `opGetAgentRecommendation`<sup>Required</sup> <a name="opGetAgentRecommendation" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentRecommendation"></a>

```typescript
public readonly opGetAgentRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentRecommendation API call.

---

##### `opGetAgentRecommendationGeneration`<sup>Required</sup> <a name="opGetAgentRecommendationGeneration" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAgentRecommendationGeneration"></a>

```typescript
public readonly opGetAgentRecommendationGeneration: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentRecommendationGeneration API call.

---

##### `opGetAnswer`<sup>Required</sup> <a name="opGetAnswer" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetAnswer"></a>

```typescript
public readonly opGetAnswer: string[];
```

- *Type:* string[]

IAM actions required for the GetAnswer API call.

---

##### `opGetConsolidatedReport`<sup>Required</sup> <a name="opGetConsolidatedReport" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetConsolidatedReport"></a>

```typescript
public readonly opGetConsolidatedReport: string[];
```

- *Type:* string[]

IAM actions required for the GetConsolidatedReport API call.

---

##### `opGetGlobalSettings`<sup>Required</sup> <a name="opGetGlobalSettings" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetGlobalSettings"></a>

```typescript
public readonly opGetGlobalSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetGlobalSettings API call.

---

##### `opGetLens`<sup>Required</sup> <a name="opGetLens" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetLens"></a>

```typescript
public readonly opGetLens: string[];
```

- *Type:* string[]

IAM actions required for the GetLens API call.

---

##### `opGetLensReview`<sup>Required</sup> <a name="opGetLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetLensReview"></a>

```typescript
public readonly opGetLensReview: string[];
```

- *Type:* string[]

IAM actions required for the GetLensReview API call.

---

##### `opGetLensReviewReport`<sup>Required</sup> <a name="opGetLensReviewReport" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetLensReviewReport"></a>

```typescript
public readonly opGetLensReviewReport: string[];
```

- *Type:* string[]

IAM actions required for the GetLensReviewReport API call.

---

##### `opGetLensVersionDifference`<sup>Required</sup> <a name="opGetLensVersionDifference" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetLensVersionDifference"></a>

```typescript
public readonly opGetLensVersionDifference: string[];
```

- *Type:* string[]

IAM actions required for the GetLensVersionDifference API call.

---

##### `opGetMilestone`<sup>Required</sup> <a name="opGetMilestone" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetMilestone"></a>

```typescript
public readonly opGetMilestone: string[];
```

- *Type:* string[]

IAM actions required for the GetMilestone API call.

---

##### `opGetProfile`<sup>Required</sup> <a name="opGetProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetProfile"></a>

```typescript
public readonly opGetProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetProfile API call.

---

##### `opGetProfileTemplate`<sup>Required</sup> <a name="opGetProfileTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetProfileTemplate"></a>

```typescript
public readonly opGetProfileTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetProfileTemplate API call.

---

##### `opGetReviewTemplate`<sup>Required</sup> <a name="opGetReviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetReviewTemplate"></a>

```typescript
public readonly opGetReviewTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetReviewTemplate API call.

---

##### `opGetReviewTemplateAnswer`<sup>Required</sup> <a name="opGetReviewTemplateAnswer" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetReviewTemplateAnswer"></a>

```typescript
public readonly opGetReviewTemplateAnswer: string[];
```

- *Type:* string[]

IAM actions required for the GetReviewTemplateAnswer API call.

---

##### `opGetReviewTemplateLensReview`<sup>Required</sup> <a name="opGetReviewTemplateLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetReviewTemplateLensReview"></a>

```typescript
public readonly opGetReviewTemplateLensReview: string[];
```

- *Type:* string[]

IAM actions required for the GetReviewTemplateLensReview API call.

---

##### `opGetWorkload`<sup>Required</sup> <a name="opGetWorkload" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.opGetWorkload"></a>

```typescript
public readonly opGetWorkload: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkload API call.

---

##### `PutAgentRecommendationFeedback`<sup>Required</sup> <a name="PutAgentRecommendationFeedback" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.PutAgentRecommendationFeedback"></a>

```typescript
public readonly PutAgentRecommendationFeedback: string[];
```

- *Type:* string[]

IAM actions required for the PutAgentRecommendationFeedback API call.

---

##### `StartAgentRecommendationGeneration`<sup>Required</sup> <a name="StartAgentRecommendationGeneration" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.StartAgentRecommendationGeneration"></a>

```typescript
public readonly StartAgentRecommendationGeneration: string[];
```

- *Type:* string[]

IAM actions required for the StartAgentRecommendationGeneration API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAgentContext`<sup>Required</sup> <a name="UpdateAgentContext" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAgentContext"></a>

```typescript
public readonly UpdateAgentContext: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentContext API call.

---

##### `UpdateAgentGoal`<sup>Required</sup> <a name="UpdateAgentGoal" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAgentGoal"></a>

```typescript
public readonly UpdateAgentGoal: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentGoal API call.

---

##### `UpdateAgentProfile`<sup>Required</sup> <a name="UpdateAgentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAgentProfile"></a>

```typescript
public readonly UpdateAgentProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentProfile API call.

---

##### `UpdateAgentRecommendationStatus`<sup>Required</sup> <a name="UpdateAgentRecommendationStatus" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAgentRecommendationStatus"></a>

```typescript
public readonly UpdateAgentRecommendationStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentRecommendationStatus API call.

---

##### `UpdateAnswer`<sup>Required</sup> <a name="UpdateAnswer" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateAnswer"></a>

```typescript
public readonly UpdateAnswer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAnswer API call.

---

##### `UpdateGlobalSettings`<sup>Required</sup> <a name="UpdateGlobalSettings" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateGlobalSettings"></a>

```typescript
public readonly UpdateGlobalSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlobalSettings API call.

---

##### `UpdateIntegration`<sup>Required</sup> <a name="UpdateIntegration" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateIntegration"></a>

```typescript
public readonly UpdateIntegration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIntegration API call.

---

##### `UpdateLensReview`<sup>Required</sup> <a name="UpdateLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateLensReview"></a>

```typescript
public readonly UpdateLensReview: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLensReview API call.

---

##### `UpdateProfile`<sup>Required</sup> <a name="UpdateProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateProfile"></a>

```typescript
public readonly UpdateProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProfile API call.

---

##### `UpdateReviewTemplate`<sup>Required</sup> <a name="UpdateReviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateReviewTemplate"></a>

```typescript
public readonly UpdateReviewTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReviewTemplate API call.

---

##### `UpdateReviewTemplateAnswer`<sup>Required</sup> <a name="UpdateReviewTemplateAnswer" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateReviewTemplateAnswer"></a>

```typescript
public readonly UpdateReviewTemplateAnswer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReviewTemplateAnswer API call.

---

##### `UpdateReviewTemplateLensReview`<sup>Required</sup> <a name="UpdateReviewTemplateLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateReviewTemplateLensReview"></a>

```typescript
public readonly UpdateReviewTemplateLensReview: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReviewTemplateLensReview API call.

---

##### `UpdateShareInvitation`<sup>Required</sup> <a name="UpdateShareInvitation" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateShareInvitation"></a>

```typescript
public readonly UpdateShareInvitation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateShareInvitation API call.

---

##### `UpdateWorkload`<sup>Required</sup> <a name="UpdateWorkload" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateWorkload"></a>

```typescript
public readonly UpdateWorkload: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkload API call.

---

##### `UpdateWorkloadShare`<sup>Required</sup> <a name="UpdateWorkloadShare" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpdateWorkloadShare"></a>

```typescript
public readonly UpdateWorkloadShare: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkloadShare API call.

---

##### `UpgradeLensReview`<sup>Required</sup> <a name="UpgradeLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpgradeLensReview"></a>

```typescript
public readonly UpgradeLensReview: string[];
```

- *Type:* string[]

IAM actions required for the UpgradeLensReview API call.

---

##### `UpgradeProfileVersion`<sup>Required</sup> <a name="UpgradeProfileVersion" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpgradeProfileVersion"></a>

```typescript
public readonly UpgradeProfileVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpgradeProfileVersion API call.

---

##### `UpgradeReviewTemplateLensReview`<sup>Required</sup> <a name="UpgradeReviewTemplateLensReview" id="@cdk_utils/iam.wellarchitected.WellArchitectedOperations.property.UpgradeReviewTemplateLensReview"></a>

```typescript
public readonly UpgradeReviewTemplateLensReview: string[];
```

- *Type:* string[]

IAM actions required for the UpgradeReviewTemplateLensReview API call.

---

### WellArchitectedResources <a name="WellArchitectedResources" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources"></a>

ARN builders, validators, and parsers for wellarchitected resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.Initializer"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

new wellarchitected.WellArchitectedResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.agentProfile">agentProfile</a></code> | Builds an ARN for the agent-profile resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.agentRecommendation">agentRecommendation</a></code> | Builds an ARN for the agent-recommendation resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidAgentProfileArn">isValidAgentProfileArn</a></code> | Validates whether a string is a valid ARN for the agent-profile resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidAgentRecommendationArn">isValidAgentRecommendationArn</a></code> | Validates whether a string is a valid ARN for the agent-recommendation resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidLensArn">isValidLensArn</a></code> | Validates whether a string is a valid ARN for the lens resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidProfileArn">isValidProfileArn</a></code> | Validates whether a string is a valid ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidReviewTemplateArn">isValidReviewTemplateArn</a></code> | Validates whether a string is a valid ARN for the review-template resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidWorkloadArn">isValidWorkloadArn</a></code> | Validates whether a string is a valid ARN for the workload resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.lens">lens</a></code> | Builds an ARN for the lens resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseAgentProfileArn">parseAgentProfileArn</a></code> | Parses a agent-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseAgentRecommendationArn">parseAgentRecommendationArn</a></code> | Parses a agent-recommendation ARN into its components. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseLensArn">parseLensArn</a></code> | Parses a lens ARN into its components. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseProfileArn">parseProfileArn</a></code> | Parses a profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseReviewTemplateArn">parseReviewTemplateArn</a></code> | Parses a review-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseWorkloadArn">parseWorkloadArn</a></code> | Parses a workload ARN into its components. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.profile">profile</a></code> | Builds an ARN for the profile resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.reviewTemplate">reviewTemplate</a></code> | Builds an ARN for the review-template resource. |
| <code><a href="#@cdk_utils/iam.wellarchitected.WellArchitectedResources.workload">workload</a></code> | Builds an ARN for the workload resource. |

---

##### `agentProfile` <a name="agentProfile" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.agentProfile"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.agentProfile(props: WellArchitectedAgentProfileArnProps)
```

Builds an ARN for the agent-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.agentProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentProfileArnProps">WellArchitectedAgentProfileArnProps</a>

---

##### `agentRecommendation` <a name="agentRecommendation" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.agentRecommendation"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.agentRecommendation(props: WellArchitectedAgentRecommendationArnProps)
```

Builds an ARN for the agent-recommendation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.agentRecommendation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wellarchitected.WellArchitectedAgentRecommendationArnProps">WellArchitectedAgentRecommendationArnProps</a>

---

##### `isValidAgentProfileArn` <a name="isValidAgentProfileArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidAgentProfileArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.isValidAgentProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the agent-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidAgentProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAgentRecommendationArn` <a name="isValidAgentRecommendationArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidAgentRecommendationArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.isValidAgentRecommendationArn(arn: string)
```

Validates whether a string is a valid ARN for the agent-recommendation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidAgentRecommendationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLensArn` <a name="isValidLensArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidLensArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.isValidLensArn(arn: string)
```

Validates whether a string is a valid ARN for the lens resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidLensArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProfileArn` <a name="isValidProfileArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidProfileArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.isValidProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReviewTemplateArn` <a name="isValidReviewTemplateArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidReviewTemplateArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.isValidReviewTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the review-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidReviewTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkloadArn` <a name="isValidWorkloadArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidWorkloadArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.isValidWorkloadArn(arn: string)
```

Validates whether a string is a valid ARN for the workload resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.isValidWorkloadArn.parameter.arn"></a>

- *Type:* string

---

##### `lens` <a name="lens" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.lens"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.lens(props: WellArchitectedLensArnProps)
```

Builds an ARN for the lens resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.lens.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wellarchitected.WellArchitectedLensArnProps">WellArchitectedLensArnProps</a>

---

##### `parseAgentProfileArn` <a name="parseAgentProfileArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseAgentProfileArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.parseAgentProfileArn(arn: string)
```

Parses a agent-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseAgentProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgentRecommendationArn` <a name="parseAgentRecommendationArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseAgentRecommendationArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.parseAgentRecommendationArn(arn: string)
```

Parses a agent-recommendation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseAgentRecommendationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLensArn` <a name="parseLensArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseLensArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.parseLensArn(arn: string)
```

Parses a lens ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseLensArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProfileArn` <a name="parseProfileArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseProfileArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.parseProfileArn(arn: string)
```

Parses a profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReviewTemplateArn` <a name="parseReviewTemplateArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseReviewTemplateArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.parseReviewTemplateArn(arn: string)
```

Parses a review-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseReviewTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkloadArn` <a name="parseWorkloadArn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseWorkloadArn"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.parseWorkloadArn(arn: string)
```

Parses a workload ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.parseWorkloadArn.parameter.arn"></a>

- *Type:* string

---

##### `profile` <a name="profile" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.profile"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.profile(props: WellArchitectedProfileArnProps)
```

Builds an ARN for the profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.profile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wellarchitected.WellArchitectedProfileArnProps">WellArchitectedProfileArnProps</a>

---

##### `reviewTemplate` <a name="reviewTemplate" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.reviewTemplate"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.reviewTemplate(props: WellArchitectedReviewTemplateArnProps)
```

Builds an ARN for the review-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.reviewTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wellarchitected.WellArchitectedReviewTemplateArnProps">WellArchitectedReviewTemplateArnProps</a>

---

##### `workload` <a name="workload" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.workload"></a>

```typescript
import { wellarchitected } from '@cdk_utils/iam'

wellarchitected.WellArchitectedResources.workload(props: WellArchitectedWorkloadArnProps)
```

Builds an ARN for the workload resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.wellarchitected.WellArchitectedResources.workload.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.wellarchitected.WellArchitectedWorkloadArnProps">WellArchitectedWorkloadArnProps</a>

---




