# `personalize` Submodule <a name="`personalize` Submodule" id="@cdk_utils/iam.personalize"></a>


## Structs <a name="Structs" id="Structs"></a>

### PersonalizeAlgorithmArnComponents <a name="PersonalizeAlgorithmArnComponents" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents"></a>

Parsed components of a algorithm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeAlgorithmArnComponents: personalize.PersonalizeAlgorithmArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeAlgorithmArnProps <a name="PersonalizeAlgorithmArnProps" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps"></a>

Properties for building a algorithm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeAlgorithmArnProps: personalize.PersonalizeAlgorithmArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeBatchInferenceJobArnComponents <a name="PersonalizeBatchInferenceJobArnComponents" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents"></a>

Parsed components of a batchInferenceJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeBatchInferenceJobArnComponents: personalize.PersonalizeBatchInferenceJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeBatchInferenceJobArnProps <a name="PersonalizeBatchInferenceJobArnProps" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps"></a>

Properties for building a batchInferenceJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeBatchInferenceJobArnProps: personalize.PersonalizeBatchInferenceJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeBatchSegmentJobArnComponents <a name="PersonalizeBatchSegmentJobArnComponents" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents"></a>

Parsed components of a batchSegmentJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeBatchSegmentJobArnComponents: personalize.PersonalizeBatchSegmentJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeBatchSegmentJobArnProps <a name="PersonalizeBatchSegmentJobArnProps" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps"></a>

Properties for building a batchSegmentJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeBatchSegmentJobArnProps: personalize.PersonalizeBatchSegmentJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeCampaignArnComponents <a name="PersonalizeCampaignArnComponents" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents"></a>

Parsed components of a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeCampaignArnComponents: personalize.PersonalizeCampaignArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeCampaignArnProps <a name="PersonalizeCampaignArnProps" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnProps"></a>

Properties for building a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeCampaignArnProps: personalize.PersonalizeCampaignArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeCampaignArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeDataDeletionJobArnComponents <a name="PersonalizeDataDeletionJobArnComponents" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents"></a>

Parsed components of a dataDeletionJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDataDeletionJobArnComponents: personalize.PersonalizeDataDeletionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeDataDeletionJobArnProps <a name="PersonalizeDataDeletionJobArnProps" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps"></a>

Properties for building a dataDeletionJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDataDeletionJobArnProps: personalize.PersonalizeDataDeletionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeDataInsightsJobArnComponents <a name="PersonalizeDataInsightsJobArnComponents" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents"></a>

Parsed components of a dataInsightsJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDataInsightsJobArnComponents: personalize.PersonalizeDataInsightsJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeDataInsightsJobArnProps <a name="PersonalizeDataInsightsJobArnProps" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps"></a>

Properties for building a dataInsightsJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDataInsightsJobArnProps: personalize.PersonalizeDataInsightsJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeDatasetArnComponents <a name="PersonalizeDatasetArnComponents" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDatasetArnComponents: personalize.PersonalizeDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeDatasetArnProps <a name="PersonalizeDatasetArnProps" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDatasetArnProps: personalize.PersonalizeDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeDatasetExportJobArnComponents <a name="PersonalizeDatasetExportJobArnComponents" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents"></a>

Parsed components of a datasetExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDatasetExportJobArnComponents: personalize.PersonalizeDatasetExportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeDatasetExportJobArnProps <a name="PersonalizeDatasetExportJobArnProps" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps"></a>

Properties for building a datasetExportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDatasetExportJobArnProps: personalize.PersonalizeDatasetExportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeDatasetGroupArnComponents <a name="PersonalizeDatasetGroupArnComponents" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents"></a>

Parsed components of a datasetGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDatasetGroupArnComponents: personalize.PersonalizeDatasetGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeDatasetGroupArnProps <a name="PersonalizeDatasetGroupArnProps" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps"></a>

Properties for building a datasetGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDatasetGroupArnProps: personalize.PersonalizeDatasetGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeDatasetImportJobArnComponents <a name="PersonalizeDatasetImportJobArnComponents" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents"></a>

Parsed components of a datasetImportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDatasetImportJobArnComponents: personalize.PersonalizeDatasetImportJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeDatasetImportJobArnProps <a name="PersonalizeDatasetImportJobArnProps" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps"></a>

Properties for building a datasetImportJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeDatasetImportJobArnProps: personalize.PersonalizeDatasetImportJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeEventTrackerArnComponents <a name="PersonalizeEventTrackerArnComponents" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents"></a>

Parsed components of a eventTracker ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeEventTrackerArnComponents: personalize.PersonalizeEventTrackerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeEventTrackerArnProps <a name="PersonalizeEventTrackerArnProps" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps"></a>

Properties for building a eventTracker ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeEventTrackerArnProps: personalize.PersonalizeEventTrackerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeFeatureTransformationArnComponents <a name="PersonalizeFeatureTransformationArnComponents" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents"></a>

Parsed components of a featureTransformation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeFeatureTransformationArnComponents: personalize.PersonalizeFeatureTransformationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeFeatureTransformationArnProps <a name="PersonalizeFeatureTransformationArnProps" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps"></a>

Properties for building a featureTransformation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeFeatureTransformationArnProps: personalize.PersonalizeFeatureTransformationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeFilterArnComponents <a name="PersonalizeFilterArnComponents" id="@cdk_utils/iam.personalize.PersonalizeFilterArnComponents"></a>

Parsed components of a filter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeFilterArnComponents: personalize.PersonalizeFilterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeFilterArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeFilterArnProps <a name="PersonalizeFilterArnProps" id="@cdk_utils/iam.personalize.PersonalizeFilterArnProps"></a>

Properties for building a filter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeFilterArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeFilterArnProps: personalize.PersonalizeFilterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeFilterArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeFilterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeFilterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeFilterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeMetricAttributionArnComponents <a name="PersonalizeMetricAttributionArnComponents" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents"></a>

Parsed components of a metricAttribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeMetricAttributionArnComponents: personalize.PersonalizeMetricAttributionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeMetricAttributionArnProps <a name="PersonalizeMetricAttributionArnProps" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps"></a>

Properties for building a metricAttribution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeMetricAttributionArnProps: personalize.PersonalizeMetricAttributionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeRecipeArnComponents <a name="PersonalizeRecipeArnComponents" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents"></a>

Parsed components of a recipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeRecipeArnComponents: personalize.PersonalizeRecipeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeRecipeArnProps <a name="PersonalizeRecipeArnProps" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnProps"></a>

Properties for building a recipe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeRecipeArnProps: personalize.PersonalizeRecipeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeRecipeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeRecommenderArnComponents <a name="PersonalizeRecommenderArnComponents" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents"></a>

Parsed components of a recommender ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeRecommenderArnComponents: personalize.PersonalizeRecommenderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeRecommenderArnProps <a name="PersonalizeRecommenderArnProps" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps"></a>

Properties for building a recommender ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeRecommenderArnProps: personalize.PersonalizeRecommenderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeSchemaArnComponents <a name="PersonalizeSchemaArnComponents" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents"></a>

Parsed components of a schema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeSchemaArnComponents: personalize.PersonalizeSchemaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeSchemaArnProps <a name="PersonalizeSchemaArnProps" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnProps"></a>

Properties for building a schema ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeSchemaArnProps: personalize.PersonalizeSchemaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeSchemaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PersonalizeSolutionArnComponents <a name="PersonalizeSolutionArnComponents" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents"></a>

Parsed components of a solution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeSolutionArnComponents: personalize.PersonalizeSolutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PersonalizeSolutionArnProps <a name="PersonalizeSolutionArnProps" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnProps"></a>

Properties for building a solution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

const personalizeSolutionArnProps: personalize.PersonalizeSolutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.personalize.PersonalizeSolutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeActions <a name="PersonalizeActions" id="@cdk_utils/iam.personalize.PersonalizeActions"></a>

IAM action constants for the personalize service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.personalize.PersonalizeActions.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

new personalize.PersonalizeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetActionRecommendations">actionGetActionRecommendations</a></code> | <code>string</code> | [Read] personalize:GetActionRecommendations. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetDataInsights">actionGetDataInsights</a></code> | <code>string</code> | [Read] personalize:GetDataInsights. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetPersonalizedRanking">actionGetPersonalizedRanking</a></code> | <code>string</code> | [Read] personalize:GetPersonalizedRanking. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetRecommendations">actionGetRecommendations</a></code> | <code>string</code> | [Read] personalize:GetRecommendations. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetSolutionMetrics">actionGetSolutionMetrics</a></code> | <code>string</code> | [Read] personalize:GetSolutionMetrics. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateBatchInferenceJob">CreateBatchInferenceJob</a></code> | <code>string</code> | [Write] personalize:CreateBatchInferenceJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateBatchSegmentJob">CreateBatchSegmentJob</a></code> | <code>string</code> | [Write] personalize:CreateBatchSegmentJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateCampaign">CreateCampaign</a></code> | <code>string</code> | [Write] personalize:CreateCampaign. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDataDeletionJob">CreateDataDeletionJob</a></code> | <code>string</code> | [Write] personalize:CreateDataDeletionJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDataInsightsJob">CreateDataInsightsJob</a></code> | <code>string</code> | [Write] personalize:CreateDataInsightsJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] personalize:CreateDataset. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDatasetExportJob">CreateDatasetExportJob</a></code> | <code>string</code> | [Write] personalize:CreateDatasetExportJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDatasetGroup">CreateDatasetGroup</a></code> | <code>string</code> | [Write] personalize:CreateDatasetGroup. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDatasetImportJob">CreateDatasetImportJob</a></code> | <code>string</code> | [Write] personalize:CreateDatasetImportJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateEventTracker">CreateEventTracker</a></code> | <code>string</code> | [Write] personalize:CreateEventTracker. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateFilter">CreateFilter</a></code> | <code>string</code> | [Write] personalize:CreateFilter. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateMetricAttribution">CreateMetricAttribution</a></code> | <code>string</code> | [Write] personalize:CreateMetricAttribution. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateRecommender">CreateRecommender</a></code> | <code>string</code> | [Write] personalize:CreateRecommender. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateSchema">CreateSchema</a></code> | <code>string</code> | [Write] personalize:CreateSchema. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateSolution">CreateSolution</a></code> | <code>string</code> | [Write] personalize:CreateSolution. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.CreateSolutionVersion">CreateSolutionVersion</a></code> | <code>string</code> | [Write] personalize:CreateSolutionVersion. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string</code> | [Write] personalize:DeleteCampaign. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteDataset">DeleteDataset</a></code> | <code>string</code> | [Write] personalize:DeleteDataset. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteDatasetGroup">DeleteDatasetGroup</a></code> | <code>string</code> | [Write] personalize:DeleteDatasetGroup. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteEventTracker">DeleteEventTracker</a></code> | <code>string</code> | [Write] personalize:DeleteEventTracker. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteFilter">DeleteFilter</a></code> | <code>string</code> | [Write] personalize:DeleteFilter. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteMetricAttribution">DeleteMetricAttribution</a></code> | <code>string</code> | [Write] personalize:DeleteMetricAttribution. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteRecommender">DeleteRecommender</a></code> | <code>string</code> | [Write] personalize:DeleteRecommender. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteSchema">DeleteSchema</a></code> | <code>string</code> | [Write] personalize:DeleteSchema. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteSolution">DeleteSolution</a></code> | <code>string</code> | [Write] personalize:DeleteSolution. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeAlgorithm">DescribeAlgorithm</a></code> | <code>string</code> | [Read] personalize:DescribeAlgorithm. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeBatchInferenceJob">DescribeBatchInferenceJob</a></code> | <code>string</code> | [Read] personalize:DescribeBatchInferenceJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeBatchSegmentJob">DescribeBatchSegmentJob</a></code> | <code>string</code> | [Read] personalize:DescribeBatchSegmentJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeCampaign">DescribeCampaign</a></code> | <code>string</code> | [Read] personalize:DescribeCampaign. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDataDeletionJob">DescribeDataDeletionJob</a></code> | <code>string</code> | [Read] personalize:DescribeDataDeletionJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDataInsightsJob">DescribeDataInsightsJob</a></code> | <code>string</code> | [Read] personalize:DescribeDataInsightsJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] personalize:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDatasetExportJob">DescribeDatasetExportJob</a></code> | <code>string</code> | [Read] personalize:DescribeDatasetExportJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDatasetGroup">DescribeDatasetGroup</a></code> | <code>string</code> | [Read] personalize:DescribeDatasetGroup. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDatasetImportJob">DescribeDatasetImportJob</a></code> | <code>string</code> | [Read] personalize:DescribeDatasetImportJob. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeEventTracker">DescribeEventTracker</a></code> | <code>string</code> | [Read] personalize:DescribeEventTracker. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeFeatureTransformation">DescribeFeatureTransformation</a></code> | <code>string</code> | [Read] personalize:DescribeFeatureTransformation. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeFilter">DescribeFilter</a></code> | <code>string</code> | [Read] personalize:DescribeFilter. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeMetricAttribution">DescribeMetricAttribution</a></code> | <code>string</code> | [Read] personalize:DescribeMetricAttribution. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeRecipe">DescribeRecipe</a></code> | <code>string</code> | [Read] personalize:DescribeRecipe. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeRecommender">DescribeRecommender</a></code> | <code>string</code> | [Read] personalize:DescribeRecommender. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeSchema">DescribeSchema</a></code> | <code>string</code> | [Read] personalize:DescribeSchema. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeSolution">DescribeSolution</a></code> | <code>string</code> | [Read] personalize:DescribeSolution. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeSolutionVersion">DescribeSolutionVersion</a></code> | <code>string</code> | [Read] personalize:DescribeSolutionVersion. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListBatchInferenceJobs">ListBatchInferenceJobs</a></code> | <code>string</code> | [List] personalize:ListBatchInferenceJobs. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListBatchSegmentJobs">ListBatchSegmentJobs</a></code> | <code>string</code> | [List] personalize:ListBatchSegmentJobs. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListCampaigns">ListCampaigns</a></code> | <code>string</code> | [List] personalize:ListCampaigns. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListDataDeletionJobs">ListDataDeletionJobs</a></code> | <code>string</code> | [List] personalize:ListDataDeletionJobs. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListDataInsightsJobs">ListDataInsightsJobs</a></code> | <code>string</code> | [List] personalize:ListDataInsightsJobs. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListDatasetExportJobs">ListDatasetExportJobs</a></code> | <code>string</code> | [List] personalize:ListDatasetExportJobs. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListDatasetGroups">ListDatasetGroups</a></code> | <code>string</code> | [List] personalize:ListDatasetGroups. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListDatasetImportJobs">ListDatasetImportJobs</a></code> | <code>string</code> | [List] personalize:ListDatasetImportJobs. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [List] personalize:ListDatasets. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListEventTrackers">ListEventTrackers</a></code> | <code>string</code> | [List] personalize:ListEventTrackers. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListFilters">ListFilters</a></code> | <code>string</code> | [List] personalize:ListFilters. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListMetricAttributionMetrics">ListMetricAttributionMetrics</a></code> | <code>string</code> | [List] personalize:ListMetricAttributionMetrics. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListMetricAttributions">ListMetricAttributions</a></code> | <code>string</code> | [List] personalize:ListMetricAttributions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListRecipes">ListRecipes</a></code> | <code>string</code> | [List] personalize:ListRecipes. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListRecommenders">ListRecommenders</a></code> | <code>string</code> | [List] personalize:ListRecommenders. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListSchemas">ListSchemas</a></code> | <code>string</code> | [List] personalize:ListSchemas. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListSolutions">ListSolutions</a></code> | <code>string</code> | [List] personalize:ListSolutions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListSolutionVersions">ListSolutionVersions</a></code> | <code>string</code> | [List] personalize:ListSolutionVersions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] personalize:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.PutActionInteractions">PutActionInteractions</a></code> | <code>string</code> | [Write] personalize:PutActionInteractions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.PutActions">PutActions</a></code> | <code>string</code> | [Write] personalize:PutActions. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.PutEvents">PutEvents</a></code> | <code>string</code> | [Write] personalize:PutEvents. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.PutItems">PutItems</a></code> | <code>string</code> | [Write] personalize:PutItems. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.PutUsers">PutUsers</a></code> | <code>string</code> | [Write] personalize:PutUsers. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.StartRecommender">StartRecommender</a></code> | <code>string</code> | [Write] personalize:StartRecommender. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.StopRecommender">StopRecommender</a></code> | <code>string</code> | [Write] personalize:StopRecommender. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.StopSolutionVersionCreation">StopSolutionVersionCreation</a></code> | <code>string</code> | [Write] personalize:StopSolutionVersionCreation. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] personalize:TagResource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] personalize:UntagResource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateCampaign">UpdateCampaign</a></code> | <code>string</code> | [Write] personalize:UpdateCampaign. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateDataset">UpdateDataset</a></code> | <code>string</code> | [Write] personalize:UpdateDataset. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateMetricAttribution">UpdateMetricAttribution</a></code> | <code>string</code> | [Write] personalize:UpdateMetricAttribution. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateRecommender">UpdateRecommender</a></code> | <code>string</code> | [Write] personalize:UpdateRecommender. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateSolution">UpdateSolution</a></code> | <code>string</code> | [Write] personalize:UpdateSolution. |

---

##### `actionGetActionRecommendations`<sup>Required</sup> <a name="actionGetActionRecommendations" id="@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetActionRecommendations"></a>

```typescript
public readonly actionGetActionRecommendations: string;
```

- *Type:* string

[Read] personalize:GetActionRecommendations.

---

##### `actionGetDataInsights`<sup>Required</sup> <a name="actionGetDataInsights" id="@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetDataInsights"></a>

```typescript
public readonly actionGetDataInsights: string;
```

- *Type:* string

[Read] personalize:GetDataInsights.

---

##### `actionGetPersonalizedRanking`<sup>Required</sup> <a name="actionGetPersonalizedRanking" id="@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetPersonalizedRanking"></a>

```typescript
public readonly actionGetPersonalizedRanking: string;
```

- *Type:* string

[Read] personalize:GetPersonalizedRanking.

---

##### `actionGetRecommendations`<sup>Required</sup> <a name="actionGetRecommendations" id="@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetRecommendations"></a>

```typescript
public readonly actionGetRecommendations: string;
```

- *Type:* string

[Read] personalize:GetRecommendations.

---

##### `actionGetSolutionMetrics`<sup>Required</sup> <a name="actionGetSolutionMetrics" id="@cdk_utils/iam.personalize.PersonalizeActions.property.actionGetSolutionMetrics"></a>

```typescript
public readonly actionGetSolutionMetrics: string;
```

- *Type:* string

[Read] personalize:GetSolutionMetrics.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateBatchInferenceJob`<sup>Required</sup> <a name="CreateBatchInferenceJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateBatchInferenceJob"></a>

```typescript
public readonly CreateBatchInferenceJob: string;
```

- *Type:* string

[Write] personalize:CreateBatchInferenceJob.

---

##### `CreateBatchSegmentJob`<sup>Required</sup> <a name="CreateBatchSegmentJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateBatchSegmentJob"></a>

```typescript
public readonly CreateBatchSegmentJob: string;
```

- *Type:* string

[Write] personalize:CreateBatchSegmentJob.

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string;
```

- *Type:* string

[Write] personalize:CreateCampaign.

---

##### `CreateDataDeletionJob`<sup>Required</sup> <a name="CreateDataDeletionJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDataDeletionJob"></a>

```typescript
public readonly CreateDataDeletionJob: string;
```

- *Type:* string

[Write] personalize:CreateDataDeletionJob.

---

##### `CreateDataInsightsJob`<sup>Required</sup> <a name="CreateDataInsightsJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDataInsightsJob"></a>

```typescript
public readonly CreateDataInsightsJob: string;
```

- *Type:* string

[Write] personalize:CreateDataInsightsJob.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] personalize:CreateDataset.

---

##### `CreateDatasetExportJob`<sup>Required</sup> <a name="CreateDatasetExportJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDatasetExportJob"></a>

```typescript
public readonly CreateDatasetExportJob: string;
```

- *Type:* string

[Write] personalize:CreateDatasetExportJob.

---

##### `CreateDatasetGroup`<sup>Required</sup> <a name="CreateDatasetGroup" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDatasetGroup"></a>

```typescript
public readonly CreateDatasetGroup: string;
```

- *Type:* string

[Write] personalize:CreateDatasetGroup.

---

##### `CreateDatasetImportJob`<sup>Required</sup> <a name="CreateDatasetImportJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateDatasetImportJob"></a>

```typescript
public readonly CreateDatasetImportJob: string;
```

- *Type:* string

[Write] personalize:CreateDatasetImportJob.

---

##### `CreateEventTracker`<sup>Required</sup> <a name="CreateEventTracker" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateEventTracker"></a>

```typescript
public readonly CreateEventTracker: string;
```

- *Type:* string

[Write] personalize:CreateEventTracker.

---

##### `CreateFilter`<sup>Required</sup> <a name="CreateFilter" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateFilter"></a>

```typescript
public readonly CreateFilter: string;
```

- *Type:* string

[Write] personalize:CreateFilter.

---

##### `CreateMetricAttribution`<sup>Required</sup> <a name="CreateMetricAttribution" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateMetricAttribution"></a>

```typescript
public readonly CreateMetricAttribution: string;
```

- *Type:* string

[Write] personalize:CreateMetricAttribution.

---

##### `CreateRecommender`<sup>Required</sup> <a name="CreateRecommender" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateRecommender"></a>

```typescript
public readonly CreateRecommender: string;
```

- *Type:* string

[Write] personalize:CreateRecommender.

---

##### `CreateSchema`<sup>Required</sup> <a name="CreateSchema" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateSchema"></a>

```typescript
public readonly CreateSchema: string;
```

- *Type:* string

[Write] personalize:CreateSchema.

---

##### `CreateSolution`<sup>Required</sup> <a name="CreateSolution" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateSolution"></a>

```typescript
public readonly CreateSolution: string;
```

- *Type:* string

[Write] personalize:CreateSolution.

---

##### `CreateSolutionVersion`<sup>Required</sup> <a name="CreateSolutionVersion" id="@cdk_utils/iam.personalize.PersonalizeActions.property.CreateSolutionVersion"></a>

```typescript
public readonly CreateSolutionVersion: string;
```

- *Type:* string

[Write] personalize:CreateSolutionVersion.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string;
```

- *Type:* string

[Write] personalize:DeleteCampaign.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string;
```

- *Type:* string

[Write] personalize:DeleteDataset.

---

##### `DeleteDatasetGroup`<sup>Required</sup> <a name="DeleteDatasetGroup" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteDatasetGroup"></a>

```typescript
public readonly DeleteDatasetGroup: string;
```

- *Type:* string

[Write] personalize:DeleteDatasetGroup.

---

##### `DeleteEventTracker`<sup>Required</sup> <a name="DeleteEventTracker" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteEventTracker"></a>

```typescript
public readonly DeleteEventTracker: string;
```

- *Type:* string

[Write] personalize:DeleteEventTracker.

---

##### `DeleteFilter`<sup>Required</sup> <a name="DeleteFilter" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteFilter"></a>

```typescript
public readonly DeleteFilter: string;
```

- *Type:* string

[Write] personalize:DeleteFilter.

---

##### `DeleteMetricAttribution`<sup>Required</sup> <a name="DeleteMetricAttribution" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteMetricAttribution"></a>

```typescript
public readonly DeleteMetricAttribution: string;
```

- *Type:* string

[Write] personalize:DeleteMetricAttribution.

---

##### `DeleteRecommender`<sup>Required</sup> <a name="DeleteRecommender" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteRecommender"></a>

```typescript
public readonly DeleteRecommender: string;
```

- *Type:* string

[Write] personalize:DeleteRecommender.

---

##### `DeleteSchema`<sup>Required</sup> <a name="DeleteSchema" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteSchema"></a>

```typescript
public readonly DeleteSchema: string;
```

- *Type:* string

[Write] personalize:DeleteSchema.

---

##### `DeleteSolution`<sup>Required</sup> <a name="DeleteSolution" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DeleteSolution"></a>

```typescript
public readonly DeleteSolution: string;
```

- *Type:* string

[Write] personalize:DeleteSolution.

---

##### `DescribeAlgorithm`<sup>Required</sup> <a name="DescribeAlgorithm" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeAlgorithm"></a>

```typescript
public readonly DescribeAlgorithm: string;
```

- *Type:* string

[Read] personalize:DescribeAlgorithm.

---

##### `DescribeBatchInferenceJob`<sup>Required</sup> <a name="DescribeBatchInferenceJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeBatchInferenceJob"></a>

```typescript
public readonly DescribeBatchInferenceJob: string;
```

- *Type:* string

[Read] personalize:DescribeBatchInferenceJob.

---

##### `DescribeBatchSegmentJob`<sup>Required</sup> <a name="DescribeBatchSegmentJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeBatchSegmentJob"></a>

```typescript
public readonly DescribeBatchSegmentJob: string;
```

- *Type:* string

[Read] personalize:DescribeBatchSegmentJob.

---

##### `DescribeCampaign`<sup>Required</sup> <a name="DescribeCampaign" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeCampaign"></a>

```typescript
public readonly DescribeCampaign: string;
```

- *Type:* string

[Read] personalize:DescribeCampaign.

---

##### `DescribeDataDeletionJob`<sup>Required</sup> <a name="DescribeDataDeletionJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDataDeletionJob"></a>

```typescript
public readonly DescribeDataDeletionJob: string;
```

- *Type:* string

[Read] personalize:DescribeDataDeletionJob.

---

##### `DescribeDataInsightsJob`<sup>Required</sup> <a name="DescribeDataInsightsJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDataInsightsJob"></a>

```typescript
public readonly DescribeDataInsightsJob: string;
```

- *Type:* string

[Read] personalize:DescribeDataInsightsJob.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] personalize:DescribeDataset.

---

##### `DescribeDatasetExportJob`<sup>Required</sup> <a name="DescribeDatasetExportJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDatasetExportJob"></a>

```typescript
public readonly DescribeDatasetExportJob: string;
```

- *Type:* string

[Read] personalize:DescribeDatasetExportJob.

---

##### `DescribeDatasetGroup`<sup>Required</sup> <a name="DescribeDatasetGroup" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDatasetGroup"></a>

```typescript
public readonly DescribeDatasetGroup: string;
```

- *Type:* string

[Read] personalize:DescribeDatasetGroup.

---

##### `DescribeDatasetImportJob`<sup>Required</sup> <a name="DescribeDatasetImportJob" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeDatasetImportJob"></a>

```typescript
public readonly DescribeDatasetImportJob: string;
```

- *Type:* string

[Read] personalize:DescribeDatasetImportJob.

---

##### `DescribeEventTracker`<sup>Required</sup> <a name="DescribeEventTracker" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeEventTracker"></a>

```typescript
public readonly DescribeEventTracker: string;
```

- *Type:* string

[Read] personalize:DescribeEventTracker.

---

##### `DescribeFeatureTransformation`<sup>Required</sup> <a name="DescribeFeatureTransformation" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeFeatureTransformation"></a>

```typescript
public readonly DescribeFeatureTransformation: string;
```

- *Type:* string

[Read] personalize:DescribeFeatureTransformation.

---

##### `DescribeFilter`<sup>Required</sup> <a name="DescribeFilter" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeFilter"></a>

```typescript
public readonly DescribeFilter: string;
```

- *Type:* string

[Read] personalize:DescribeFilter.

---

##### `DescribeMetricAttribution`<sup>Required</sup> <a name="DescribeMetricAttribution" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeMetricAttribution"></a>

```typescript
public readonly DescribeMetricAttribution: string;
```

- *Type:* string

[Read] personalize:DescribeMetricAttribution.

---

##### `DescribeRecipe`<sup>Required</sup> <a name="DescribeRecipe" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeRecipe"></a>

```typescript
public readonly DescribeRecipe: string;
```

- *Type:* string

[Read] personalize:DescribeRecipe.

---

##### `DescribeRecommender`<sup>Required</sup> <a name="DescribeRecommender" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeRecommender"></a>

```typescript
public readonly DescribeRecommender: string;
```

- *Type:* string

[Read] personalize:DescribeRecommender.

---

##### `DescribeSchema`<sup>Required</sup> <a name="DescribeSchema" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeSchema"></a>

```typescript
public readonly DescribeSchema: string;
```

- *Type:* string

[Read] personalize:DescribeSchema.

---

##### `DescribeSolution`<sup>Required</sup> <a name="DescribeSolution" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeSolution"></a>

```typescript
public readonly DescribeSolution: string;
```

- *Type:* string

[Read] personalize:DescribeSolution.

---

##### `DescribeSolutionVersion`<sup>Required</sup> <a name="DescribeSolutionVersion" id="@cdk_utils/iam.personalize.PersonalizeActions.property.DescribeSolutionVersion"></a>

```typescript
public readonly DescribeSolutionVersion: string;
```

- *Type:* string

[Read] personalize:DescribeSolutionVersion.

---

##### `ListBatchInferenceJobs`<sup>Required</sup> <a name="ListBatchInferenceJobs" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListBatchInferenceJobs"></a>

```typescript
public readonly ListBatchInferenceJobs: string;
```

- *Type:* string

[List] personalize:ListBatchInferenceJobs.

---

##### `ListBatchSegmentJobs`<sup>Required</sup> <a name="ListBatchSegmentJobs" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListBatchSegmentJobs"></a>

```typescript
public readonly ListBatchSegmentJobs: string;
```

- *Type:* string

[List] personalize:ListBatchSegmentJobs.

---

##### `ListCampaigns`<sup>Required</sup> <a name="ListCampaigns" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListCampaigns"></a>

```typescript
public readonly ListCampaigns: string;
```

- *Type:* string

[List] personalize:ListCampaigns.

---

##### `ListDataDeletionJobs`<sup>Required</sup> <a name="ListDataDeletionJobs" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListDataDeletionJobs"></a>

```typescript
public readonly ListDataDeletionJobs: string;
```

- *Type:* string

[List] personalize:ListDataDeletionJobs.

---

##### `ListDataInsightsJobs`<sup>Required</sup> <a name="ListDataInsightsJobs" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListDataInsightsJobs"></a>

```typescript
public readonly ListDataInsightsJobs: string;
```

- *Type:* string

[List] personalize:ListDataInsightsJobs.

---

##### `ListDatasetExportJobs`<sup>Required</sup> <a name="ListDatasetExportJobs" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListDatasetExportJobs"></a>

```typescript
public readonly ListDatasetExportJobs: string;
```

- *Type:* string

[List] personalize:ListDatasetExportJobs.

---

##### `ListDatasetGroups`<sup>Required</sup> <a name="ListDatasetGroups" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListDatasetGroups"></a>

```typescript
public readonly ListDatasetGroups: string;
```

- *Type:* string

[List] personalize:ListDatasetGroups.

---

##### `ListDatasetImportJobs`<sup>Required</sup> <a name="ListDatasetImportJobs" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListDatasetImportJobs"></a>

```typescript
public readonly ListDatasetImportJobs: string;
```

- *Type:* string

[List] personalize:ListDatasetImportJobs.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[List] personalize:ListDatasets.

---

##### `ListEventTrackers`<sup>Required</sup> <a name="ListEventTrackers" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListEventTrackers"></a>

```typescript
public readonly ListEventTrackers: string;
```

- *Type:* string

[List] personalize:ListEventTrackers.

---

##### `ListFilters`<sup>Required</sup> <a name="ListFilters" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListFilters"></a>

```typescript
public readonly ListFilters: string;
```

- *Type:* string

[List] personalize:ListFilters.

---

##### `ListMetricAttributionMetrics`<sup>Required</sup> <a name="ListMetricAttributionMetrics" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListMetricAttributionMetrics"></a>

```typescript
public readonly ListMetricAttributionMetrics: string;
```

- *Type:* string

[List] personalize:ListMetricAttributionMetrics.

---

##### `ListMetricAttributions`<sup>Required</sup> <a name="ListMetricAttributions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListMetricAttributions"></a>

```typescript
public readonly ListMetricAttributions: string;
```

- *Type:* string

[List] personalize:ListMetricAttributions.

---

##### `ListRecipes`<sup>Required</sup> <a name="ListRecipes" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListRecipes"></a>

```typescript
public readonly ListRecipes: string;
```

- *Type:* string

[List] personalize:ListRecipes.

---

##### `ListRecommenders`<sup>Required</sup> <a name="ListRecommenders" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListRecommenders"></a>

```typescript
public readonly ListRecommenders: string;
```

- *Type:* string

[List] personalize:ListRecommenders.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string;
```

- *Type:* string

[List] personalize:ListSchemas.

---

##### `ListSolutions`<sup>Required</sup> <a name="ListSolutions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListSolutions"></a>

```typescript
public readonly ListSolutions: string;
```

- *Type:* string

[List] personalize:ListSolutions.

---

##### `ListSolutionVersions`<sup>Required</sup> <a name="ListSolutionVersions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListSolutionVersions"></a>

```typescript
public readonly ListSolutionVersions: string;
```

- *Type:* string

[List] personalize:ListSolutionVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.personalize.PersonalizeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] personalize:ListTagsForResource.

---

##### `PutActionInteractions`<sup>Required</sup> <a name="PutActionInteractions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.PutActionInteractions"></a>

```typescript
public readonly PutActionInteractions: string;
```

- *Type:* string

[Write] personalize:PutActionInteractions.

---

##### `PutActions`<sup>Required</sup> <a name="PutActions" id="@cdk_utils/iam.personalize.PersonalizeActions.property.PutActions"></a>

```typescript
public readonly PutActions: string;
```

- *Type:* string

[Write] personalize:PutActions.

---

##### `PutEvents`<sup>Required</sup> <a name="PutEvents" id="@cdk_utils/iam.personalize.PersonalizeActions.property.PutEvents"></a>

```typescript
public readonly PutEvents: string;
```

- *Type:* string

[Write] personalize:PutEvents.

---

##### `PutItems`<sup>Required</sup> <a name="PutItems" id="@cdk_utils/iam.personalize.PersonalizeActions.property.PutItems"></a>

```typescript
public readonly PutItems: string;
```

- *Type:* string

[Write] personalize:PutItems.

---

##### `PutUsers`<sup>Required</sup> <a name="PutUsers" id="@cdk_utils/iam.personalize.PersonalizeActions.property.PutUsers"></a>

```typescript
public readonly PutUsers: string;
```

- *Type:* string

[Write] personalize:PutUsers.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.personalize.PersonalizeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartRecommender`<sup>Required</sup> <a name="StartRecommender" id="@cdk_utils/iam.personalize.PersonalizeActions.property.StartRecommender"></a>

```typescript
public readonly StartRecommender: string;
```

- *Type:* string

[Write] personalize:StartRecommender.

---

##### `StopRecommender`<sup>Required</sup> <a name="StopRecommender" id="@cdk_utils/iam.personalize.PersonalizeActions.property.StopRecommender"></a>

```typescript
public readonly StopRecommender: string;
```

- *Type:* string

[Write] personalize:StopRecommender.

---

##### `StopSolutionVersionCreation`<sup>Required</sup> <a name="StopSolutionVersionCreation" id="@cdk_utils/iam.personalize.PersonalizeActions.property.StopSolutionVersionCreation"></a>

```typescript
public readonly StopSolutionVersionCreation: string;
```

- *Type:* string

[Write] personalize:StopSolutionVersionCreation.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.personalize.PersonalizeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] personalize:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.personalize.PersonalizeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] personalize:UntagResource.

---

##### `UpdateCampaign`<sup>Required</sup> <a name="UpdateCampaign" id="@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateCampaign"></a>

```typescript
public readonly UpdateCampaign: string;
```

- *Type:* string

[Write] personalize:UpdateCampaign.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string;
```

- *Type:* string

[Write] personalize:UpdateDataset.

---

##### `UpdateMetricAttribution`<sup>Required</sup> <a name="UpdateMetricAttribution" id="@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateMetricAttribution"></a>

```typescript
public readonly UpdateMetricAttribution: string;
```

- *Type:* string

[Write] personalize:UpdateMetricAttribution.

---

##### `UpdateRecommender`<sup>Required</sup> <a name="UpdateRecommender" id="@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateRecommender"></a>

```typescript
public readonly UpdateRecommender: string;
```

- *Type:* string

[Write] personalize:UpdateRecommender.

---

##### `UpdateSolution`<sup>Required</sup> <a name="UpdateSolution" id="@cdk_utils/iam.personalize.PersonalizeActions.property.UpdateSolution"></a>

```typescript
public readonly UpdateSolution: string;
```

- *Type:* string

[Write] personalize:UpdateSolution.

---

### PersonalizeConditions <a name="PersonalizeConditions" id="@cdk_utils/iam.personalize.PersonalizeConditions"></a>

Condition key constants and builders for personalize.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.personalize.PersonalizeConditions.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

new personalize.PersonalizeConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.personalize.PersonalizeConditions.requestTag"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.personalize.PersonalizeConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.personalize.PersonalizeConditions.resourceTag"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.personalize.PersonalizeConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.tagKeys"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.personalize.PersonalizeConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateBatchInferenceJobConditionKeys">CreateBatchInferenceJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBatchInferenceJob action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateBatchSegmentJobConditionKeys">CreateBatchSegmentJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBatchSegmentJob action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateCampaignConditionKeys">CreateCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCampaign action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDataDeletionJobConditionKeys">CreateDataDeletionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataDeletionJob action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDatasetExportJobConditionKeys">CreateDatasetExportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatasetExportJob action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDatasetGroupConditionKeys">CreateDatasetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatasetGroup action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDatasetImportJobConditionKeys">CreateDatasetImportJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDatasetImportJob action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateEventTrackerConditionKeys">CreateEventTrackerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventTracker action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateFilterConditionKeys">CreateFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFilter action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateRecommenderConditionKeys">CreateRecommenderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecommender action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateSolutionConditionKeys">CreateSolutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSolution action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateSolutionVersionConditionKeys">CreateSolutionVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSolutionVersion action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBatchInferenceJobConditionKeys`<sup>Required</sup> <a name="CreateBatchInferenceJobConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateBatchInferenceJobConditionKeys"></a>

```typescript
public readonly CreateBatchInferenceJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBatchInferenceJob action.

---

##### `CreateBatchSegmentJobConditionKeys`<sup>Required</sup> <a name="CreateBatchSegmentJobConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateBatchSegmentJobConditionKeys"></a>

```typescript
public readonly CreateBatchSegmentJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBatchSegmentJob action.

---

##### `CreateCampaignConditionKeys`<sup>Required</sup> <a name="CreateCampaignConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateCampaignConditionKeys"></a>

```typescript
public readonly CreateCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCampaign action.

---

##### `CreateDataDeletionJobConditionKeys`<sup>Required</sup> <a name="CreateDataDeletionJobConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDataDeletionJobConditionKeys"></a>

```typescript
public readonly CreateDataDeletionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataDeletionJob action.

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateDatasetExportJobConditionKeys`<sup>Required</sup> <a name="CreateDatasetExportJobConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDatasetExportJobConditionKeys"></a>

```typescript
public readonly CreateDatasetExportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatasetExportJob action.

---

##### `CreateDatasetGroupConditionKeys`<sup>Required</sup> <a name="CreateDatasetGroupConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDatasetGroupConditionKeys"></a>

```typescript
public readonly CreateDatasetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatasetGroup action.

---

##### `CreateDatasetImportJobConditionKeys`<sup>Required</sup> <a name="CreateDatasetImportJobConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateDatasetImportJobConditionKeys"></a>

```typescript
public readonly CreateDatasetImportJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDatasetImportJob action.

---

##### `CreateEventTrackerConditionKeys`<sup>Required</sup> <a name="CreateEventTrackerConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateEventTrackerConditionKeys"></a>

```typescript
public readonly CreateEventTrackerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventTracker action.

---

##### `CreateFilterConditionKeys`<sup>Required</sup> <a name="CreateFilterConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateFilterConditionKeys"></a>

```typescript
public readonly CreateFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFilter action.

---

##### `CreateRecommenderConditionKeys`<sup>Required</sup> <a name="CreateRecommenderConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateRecommenderConditionKeys"></a>

```typescript
public readonly CreateRecommenderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecommender action.

---

##### `CreateSolutionConditionKeys`<sup>Required</sup> <a name="CreateSolutionConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateSolutionConditionKeys"></a>

```typescript
public readonly CreateSolutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSolution action.

---

##### `CreateSolutionVersionConditionKeys`<sup>Required</sup> <a name="CreateSolutionVersionConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.CreateSolutionVersionConditionKeys"></a>

```typescript
public readonly CreateSolutionVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSolutionVersion action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.personalize.PersonalizeConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### PersonalizeOperations <a name="PersonalizeOperations" id="@cdk_utils/iam.personalize.PersonalizeOperations"></a>

API operation to required IAM actions mapping for personalize.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.personalize.PersonalizeOperations.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

new personalize.PersonalizeOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateBatchInferenceJob">CreateBatchInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the CreateBatchInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateBatchSegmentJob">CreateBatchSegmentJob</a></code> | <code>string[]</code> | IAM actions required for the CreateBatchSegmentJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateCampaign">CreateCampaign</a></code> | <code>string[]</code> | IAM actions required for the CreateCampaign API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDataDeletionJob">CreateDataDeletionJob</a></code> | <code>string[]</code> | IAM actions required for the CreateDataDeletionJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDatasetExportJob">CreateDatasetExportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateDatasetExportJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDatasetGroup">CreateDatasetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDatasetGroup API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDatasetImportJob">CreateDatasetImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateDatasetImportJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateEventTracker">CreateEventTracker</a></code> | <code>string[]</code> | IAM actions required for the CreateEventTracker API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateFilter">CreateFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateFilter API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateMetricAttribution">CreateMetricAttribution</a></code> | <code>string[]</code> | IAM actions required for the CreateMetricAttribution API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateRecommender">CreateRecommender</a></code> | <code>string[]</code> | IAM actions required for the CreateRecommender API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateSchema">CreateSchema</a></code> | <code>string[]</code> | IAM actions required for the CreateSchema API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateSolution">CreateSolution</a></code> | <code>string[]</code> | IAM actions required for the CreateSolution API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateSolutionVersion">CreateSolutionVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateSolutionVersion API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string[]</code> | IAM actions required for the DeleteCampaign API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteDataset">DeleteDataset</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataset API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteDatasetGroup">DeleteDatasetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDatasetGroup API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteEventTracker">DeleteEventTracker</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventTracker API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteFilter">DeleteFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteFilter API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteMetricAttribution">DeleteMetricAttribution</a></code> | <code>string[]</code> | IAM actions required for the DeleteMetricAttribution API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteRecommender">DeleteRecommender</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecommender API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteSchema">DeleteSchema</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchema API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteSolution">DeleteSolution</a></code> | <code>string[]</code> | IAM actions required for the DeleteSolution API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeAlgorithm">DescribeAlgorithm</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlgorithm API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeBatchInferenceJob">DescribeBatchInferenceJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeBatchInferenceJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeBatchSegmentJob">DescribeBatchSegmentJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeBatchSegmentJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeCampaign">DescribeCampaign</a></code> | <code>string[]</code> | IAM actions required for the DescribeCampaign API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDataDeletionJob">DescribeDataDeletionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataDeletionJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDataset">DescribeDataset</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataset API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDatasetExportJob">DescribeDatasetExportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDatasetExportJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDatasetGroup">DescribeDatasetGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeDatasetGroup API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDatasetImportJob">DescribeDatasetImportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDatasetImportJob API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeEventTracker">DescribeEventTracker</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventTracker API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeFeatureTransformation">DescribeFeatureTransformation</a></code> | <code>string[]</code> | IAM actions required for the DescribeFeatureTransformation API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeFilter">DescribeFilter</a></code> | <code>string[]</code> | IAM actions required for the DescribeFilter API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeMetricAttribution">DescribeMetricAttribution</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetricAttribution API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeRecipe">DescribeRecipe</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecipe API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeRecommender">DescribeRecommender</a></code> | <code>string[]</code> | IAM actions required for the DescribeRecommender API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeSchema">DescribeSchema</a></code> | <code>string[]</code> | IAM actions required for the DescribeSchema API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeSolution">DescribeSolution</a></code> | <code>string[]</code> | IAM actions required for the DescribeSolution API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeSolutionVersion">DescribeSolutionVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribeSolutionVersion API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListBatchInferenceJobs">ListBatchInferenceJobs</a></code> | <code>string[]</code> | IAM actions required for the ListBatchInferenceJobs API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListBatchSegmentJobs">ListBatchSegmentJobs</a></code> | <code>string[]</code> | IAM actions required for the ListBatchSegmentJobs API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListCampaigns">ListCampaigns</a></code> | <code>string[]</code> | IAM actions required for the ListCampaigns API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDataDeletionJobs">ListDataDeletionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDataDeletionJobs API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDatasetExportJobs">ListDatasetExportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetExportJobs API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDatasetGroups">ListDatasetGroups</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetGroups API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDatasetImportJobs">ListDatasetImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDatasetImportJobs API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListEventTrackers">ListEventTrackers</a></code> | <code>string[]</code> | IAM actions required for the ListEventTrackers API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListFilters">ListFilters</a></code> | <code>string[]</code> | IAM actions required for the ListFilters API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListMetricAttributionMetrics">ListMetricAttributionMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListMetricAttributionMetrics API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListMetricAttributions">ListMetricAttributions</a></code> | <code>string[]</code> | IAM actions required for the ListMetricAttributions API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListRecipes">ListRecipes</a></code> | <code>string[]</code> | IAM actions required for the ListRecipes API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListRecommenders">ListRecommenders</a></code> | <code>string[]</code> | IAM actions required for the ListRecommenders API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListSchemas">ListSchemas</a></code> | <code>string[]</code> | IAM actions required for the ListSchemas API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListSolutions">ListSolutions</a></code> | <code>string[]</code> | IAM actions required for the ListSolutions API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListSolutionVersions">ListSolutionVersions</a></code> | <code>string[]</code> | IAM actions required for the ListSolutionVersions API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.opGetActionRecommendations">opGetActionRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetActionRecommendations API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.opGetPersonalizedRanking">opGetPersonalizedRanking</a></code> | <code>string[]</code> | IAM actions required for the GetPersonalizedRanking API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.opGetRecommendations">opGetRecommendations</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendations API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.opGetSolutionMetrics">opGetSolutionMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetSolutionMetrics API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.PutActionInteractions">PutActionInteractions</a></code> | <code>string[]</code> | IAM actions required for the PutActionInteractions API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.PutActions">PutActions</a></code> | <code>string[]</code> | IAM actions required for the PutActions API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.PutEvents">PutEvents</a></code> | <code>string[]</code> | IAM actions required for the PutEvents API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.PutItems">PutItems</a></code> | <code>string[]</code> | IAM actions required for the PutItems API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.PutUsers">PutUsers</a></code> | <code>string[]</code> | IAM actions required for the PutUsers API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.StartRecommender">StartRecommender</a></code> | <code>string[]</code> | IAM actions required for the StartRecommender API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.StopRecommender">StopRecommender</a></code> | <code>string[]</code> | IAM actions required for the StopRecommender API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.StopSolutionVersionCreation">StopSolutionVersionCreation</a></code> | <code>string[]</code> | IAM actions required for the StopSolutionVersionCreation API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateCampaign">UpdateCampaign</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaign API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateDataset">UpdateDataset</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataset API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateMetricAttribution">UpdateMetricAttribution</a></code> | <code>string[]</code> | IAM actions required for the UpdateMetricAttribution API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateRecommender">UpdateRecommender</a></code> | <code>string[]</code> | IAM actions required for the UpdateRecommender API call. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateSolution">UpdateSolution</a></code> | <code>string[]</code> | IAM actions required for the UpdateSolution API call. |

---

##### `CreateBatchInferenceJob`<sup>Required</sup> <a name="CreateBatchInferenceJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateBatchInferenceJob"></a>

```typescript
public readonly CreateBatchInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateBatchInferenceJob API call.

---

##### `CreateBatchSegmentJob`<sup>Required</sup> <a name="CreateBatchSegmentJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateBatchSegmentJob"></a>

```typescript
public readonly CreateBatchSegmentJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateBatchSegmentJob API call.

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string[];
```

- *Type:* string[]

IAM actions required for the CreateCampaign API call.

---

##### `CreateDataDeletionJob`<sup>Required</sup> <a name="CreateDataDeletionJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDataDeletionJob"></a>

```typescript
public readonly CreateDataDeletionJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataDeletionJob API call.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateDatasetExportJob`<sup>Required</sup> <a name="CreateDatasetExportJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDatasetExportJob"></a>

```typescript
public readonly CreateDatasetExportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatasetExportJob API call.

---

##### `CreateDatasetGroup`<sup>Required</sup> <a name="CreateDatasetGroup" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDatasetGroup"></a>

```typescript
public readonly CreateDatasetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatasetGroup API call.

---

##### `CreateDatasetImportJob`<sup>Required</sup> <a name="CreateDatasetImportJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateDatasetImportJob"></a>

```typescript
public readonly CreateDatasetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateDatasetImportJob API call.

---

##### `CreateEventTracker`<sup>Required</sup> <a name="CreateEventTracker" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateEventTracker"></a>

```typescript
public readonly CreateEventTracker: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventTracker API call.

---

##### `CreateFilter`<sup>Required</sup> <a name="CreateFilter" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateFilter"></a>

```typescript
public readonly CreateFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateFilter API call.

---

##### `CreateMetricAttribution`<sup>Required</sup> <a name="CreateMetricAttribution" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateMetricAttribution"></a>

```typescript
public readonly CreateMetricAttribution: string[];
```

- *Type:* string[]

IAM actions required for the CreateMetricAttribution API call.

---

##### `CreateRecommender`<sup>Required</sup> <a name="CreateRecommender" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateRecommender"></a>

```typescript
public readonly CreateRecommender: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecommender API call.

---

##### `CreateSchema`<sup>Required</sup> <a name="CreateSchema" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateSchema"></a>

```typescript
public readonly CreateSchema: string[];
```

- *Type:* string[]

IAM actions required for the CreateSchema API call.

---

##### `CreateSolution`<sup>Required</sup> <a name="CreateSolution" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateSolution"></a>

```typescript
public readonly CreateSolution: string[];
```

- *Type:* string[]

IAM actions required for the CreateSolution API call.

---

##### `CreateSolutionVersion`<sup>Required</sup> <a name="CreateSolutionVersion" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.CreateSolutionVersion"></a>

```typescript
public readonly CreateSolutionVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateSolutionVersion API call.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCampaign API call.

---

##### `DeleteDataset`<sup>Required</sup> <a name="DeleteDataset" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteDataset"></a>

```typescript
public readonly DeleteDataset: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataset API call.

---

##### `DeleteDatasetGroup`<sup>Required</sup> <a name="DeleteDatasetGroup" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteDatasetGroup"></a>

```typescript
public readonly DeleteDatasetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDatasetGroup API call.

---

##### `DeleteEventTracker`<sup>Required</sup> <a name="DeleteEventTracker" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteEventTracker"></a>

```typescript
public readonly DeleteEventTracker: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventTracker API call.

---

##### `DeleteFilter`<sup>Required</sup> <a name="DeleteFilter" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteFilter"></a>

```typescript
public readonly DeleteFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFilter API call.

---

##### `DeleteMetricAttribution`<sup>Required</sup> <a name="DeleteMetricAttribution" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteMetricAttribution"></a>

```typescript
public readonly DeleteMetricAttribution: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMetricAttribution API call.

---

##### `DeleteRecommender`<sup>Required</sup> <a name="DeleteRecommender" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteRecommender"></a>

```typescript
public readonly DeleteRecommender: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecommender API call.

---

##### `DeleteSchema`<sup>Required</sup> <a name="DeleteSchema" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteSchema"></a>

```typescript
public readonly DeleteSchema: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchema API call.

---

##### `DeleteSolution`<sup>Required</sup> <a name="DeleteSolution" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DeleteSolution"></a>

```typescript
public readonly DeleteSolution: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSolution API call.

---

##### `DescribeAlgorithm`<sup>Required</sup> <a name="DescribeAlgorithm" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeAlgorithm"></a>

```typescript
public readonly DescribeAlgorithm: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlgorithm API call.

---

##### `DescribeBatchInferenceJob`<sup>Required</sup> <a name="DescribeBatchInferenceJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeBatchInferenceJob"></a>

```typescript
public readonly DescribeBatchInferenceJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBatchInferenceJob API call.

---

##### `DescribeBatchSegmentJob`<sup>Required</sup> <a name="DescribeBatchSegmentJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeBatchSegmentJob"></a>

```typescript
public readonly DescribeBatchSegmentJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBatchSegmentJob API call.

---

##### `DescribeCampaign`<sup>Required</sup> <a name="DescribeCampaign" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeCampaign"></a>

```typescript
public readonly DescribeCampaign: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCampaign API call.

---

##### `DescribeDataDeletionJob`<sup>Required</sup> <a name="DescribeDataDeletionJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDataDeletionJob"></a>

```typescript
public readonly DescribeDataDeletionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataDeletionJob API call.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataset API call.

---

##### `DescribeDatasetExportJob`<sup>Required</sup> <a name="DescribeDatasetExportJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDatasetExportJob"></a>

```typescript
public readonly DescribeDatasetExportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDatasetExportJob API call.

---

##### `DescribeDatasetGroup`<sup>Required</sup> <a name="DescribeDatasetGroup" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDatasetGroup"></a>

```typescript
public readonly DescribeDatasetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDatasetGroup API call.

---

##### `DescribeDatasetImportJob`<sup>Required</sup> <a name="DescribeDatasetImportJob" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeDatasetImportJob"></a>

```typescript
public readonly DescribeDatasetImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDatasetImportJob API call.

---

##### `DescribeEventTracker`<sup>Required</sup> <a name="DescribeEventTracker" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeEventTracker"></a>

```typescript
public readonly DescribeEventTracker: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventTracker API call.

---

##### `DescribeFeatureTransformation`<sup>Required</sup> <a name="DescribeFeatureTransformation" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeFeatureTransformation"></a>

```typescript
public readonly DescribeFeatureTransformation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFeatureTransformation API call.

---

##### `DescribeFilter`<sup>Required</sup> <a name="DescribeFilter" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeFilter"></a>

```typescript
public readonly DescribeFilter: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFilter API call.

---

##### `DescribeMetricAttribution`<sup>Required</sup> <a name="DescribeMetricAttribution" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeMetricAttribution"></a>

```typescript
public readonly DescribeMetricAttribution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetricAttribution API call.

---

##### `DescribeRecipe`<sup>Required</sup> <a name="DescribeRecipe" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeRecipe"></a>

```typescript
public readonly DescribeRecipe: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecipe API call.

---

##### `DescribeRecommender`<sup>Required</sup> <a name="DescribeRecommender" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeRecommender"></a>

```typescript
public readonly DescribeRecommender: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRecommender API call.

---

##### `DescribeSchema`<sup>Required</sup> <a name="DescribeSchema" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeSchema"></a>

```typescript
public readonly DescribeSchema: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSchema API call.

---

##### `DescribeSolution`<sup>Required</sup> <a name="DescribeSolution" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeSolution"></a>

```typescript
public readonly DescribeSolution: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSolution API call.

---

##### `DescribeSolutionVersion`<sup>Required</sup> <a name="DescribeSolutionVersion" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.DescribeSolutionVersion"></a>

```typescript
public readonly DescribeSolutionVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSolutionVersion API call.

---

##### `ListBatchInferenceJobs`<sup>Required</sup> <a name="ListBatchInferenceJobs" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListBatchInferenceJobs"></a>

```typescript
public readonly ListBatchInferenceJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListBatchInferenceJobs API call.

---

##### `ListBatchSegmentJobs`<sup>Required</sup> <a name="ListBatchSegmentJobs" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListBatchSegmentJobs"></a>

```typescript
public readonly ListBatchSegmentJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListBatchSegmentJobs API call.

---

##### `ListCampaigns`<sup>Required</sup> <a name="ListCampaigns" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListCampaigns"></a>

```typescript
public readonly ListCampaigns: string[];
```

- *Type:* string[]

IAM actions required for the ListCampaigns API call.

---

##### `ListDataDeletionJobs`<sup>Required</sup> <a name="ListDataDeletionJobs" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDataDeletionJobs"></a>

```typescript
public readonly ListDataDeletionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDataDeletionJobs API call.

---

##### `ListDatasetExportJobs`<sup>Required</sup> <a name="ListDatasetExportJobs" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDatasetExportJobs"></a>

```typescript
public readonly ListDatasetExportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetExportJobs API call.

---

##### `ListDatasetGroups`<sup>Required</sup> <a name="ListDatasetGroups" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDatasetGroups"></a>

```typescript
public readonly ListDatasetGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetGroups API call.

---

##### `ListDatasetImportJobs`<sup>Required</sup> <a name="ListDatasetImportJobs" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDatasetImportJobs"></a>

```typescript
public readonly ListDatasetImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasetImportJobs API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListEventTrackers`<sup>Required</sup> <a name="ListEventTrackers" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListEventTrackers"></a>

```typescript
public readonly ListEventTrackers: string[];
```

- *Type:* string[]

IAM actions required for the ListEventTrackers API call.

---

##### `ListFilters`<sup>Required</sup> <a name="ListFilters" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListFilters"></a>

```typescript
public readonly ListFilters: string[];
```

- *Type:* string[]

IAM actions required for the ListFilters API call.

---

##### `ListMetricAttributionMetrics`<sup>Required</sup> <a name="ListMetricAttributionMetrics" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListMetricAttributionMetrics"></a>

```typescript
public readonly ListMetricAttributionMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListMetricAttributionMetrics API call.

---

##### `ListMetricAttributions`<sup>Required</sup> <a name="ListMetricAttributions" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListMetricAttributions"></a>

```typescript
public readonly ListMetricAttributions: string[];
```

- *Type:* string[]

IAM actions required for the ListMetricAttributions API call.

---

##### `ListRecipes`<sup>Required</sup> <a name="ListRecipes" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListRecipes"></a>

```typescript
public readonly ListRecipes: string[];
```

- *Type:* string[]

IAM actions required for the ListRecipes API call.

---

##### `ListRecommenders`<sup>Required</sup> <a name="ListRecommenders" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListRecommenders"></a>

```typescript
public readonly ListRecommenders: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommenders API call.

---

##### `ListSchemas`<sup>Required</sup> <a name="ListSchemas" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListSchemas"></a>

```typescript
public readonly ListSchemas: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemas API call.

---

##### `ListSolutions`<sup>Required</sup> <a name="ListSolutions" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListSolutions"></a>

```typescript
public readonly ListSolutions: string[];
```

- *Type:* string[]

IAM actions required for the ListSolutions API call.

---

##### `ListSolutionVersions`<sup>Required</sup> <a name="ListSolutionVersions" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListSolutionVersions"></a>

```typescript
public readonly ListSolutionVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListSolutionVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetActionRecommendations`<sup>Required</sup> <a name="opGetActionRecommendations" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.opGetActionRecommendations"></a>

```typescript
public readonly opGetActionRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetActionRecommendations API call.

---

##### `opGetPersonalizedRanking`<sup>Required</sup> <a name="opGetPersonalizedRanking" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.opGetPersonalizedRanking"></a>

```typescript
public readonly opGetPersonalizedRanking: string[];
```

- *Type:* string[]

IAM actions required for the GetPersonalizedRanking API call.

---

##### `opGetRecommendations`<sup>Required</sup> <a name="opGetRecommendations" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.opGetRecommendations"></a>

```typescript
public readonly opGetRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendations API call.

---

##### `opGetSolutionMetrics`<sup>Required</sup> <a name="opGetSolutionMetrics" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.opGetSolutionMetrics"></a>

```typescript
public readonly opGetSolutionMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetSolutionMetrics API call.

---

##### `PutActionInteractions`<sup>Required</sup> <a name="PutActionInteractions" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.PutActionInteractions"></a>

```typescript
public readonly PutActionInteractions: string[];
```

- *Type:* string[]

IAM actions required for the PutActionInteractions API call.

---

##### `PutActions`<sup>Required</sup> <a name="PutActions" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.PutActions"></a>

```typescript
public readonly PutActions: string[];
```

- *Type:* string[]

IAM actions required for the PutActions API call.

---

##### `PutEvents`<sup>Required</sup> <a name="PutEvents" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.PutEvents"></a>

```typescript
public readonly PutEvents: string[];
```

- *Type:* string[]

IAM actions required for the PutEvents API call.

---

##### `PutItems`<sup>Required</sup> <a name="PutItems" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.PutItems"></a>

```typescript
public readonly PutItems: string[];
```

- *Type:* string[]

IAM actions required for the PutItems API call.

---

##### `PutUsers`<sup>Required</sup> <a name="PutUsers" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.PutUsers"></a>

```typescript
public readonly PutUsers: string[];
```

- *Type:* string[]

IAM actions required for the PutUsers API call.

---

##### `StartRecommender`<sup>Required</sup> <a name="StartRecommender" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.StartRecommender"></a>

```typescript
public readonly StartRecommender: string[];
```

- *Type:* string[]

IAM actions required for the StartRecommender API call.

---

##### `StopRecommender`<sup>Required</sup> <a name="StopRecommender" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.StopRecommender"></a>

```typescript
public readonly StopRecommender: string[];
```

- *Type:* string[]

IAM actions required for the StopRecommender API call.

---

##### `StopSolutionVersionCreation`<sup>Required</sup> <a name="StopSolutionVersionCreation" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.StopSolutionVersionCreation"></a>

```typescript
public readonly StopSolutionVersionCreation: string[];
```

- *Type:* string[]

IAM actions required for the StopSolutionVersionCreation API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCampaign`<sup>Required</sup> <a name="UpdateCampaign" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateCampaign"></a>

```typescript
public readonly UpdateCampaign: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaign API call.

---

##### `UpdateDataset`<sup>Required</sup> <a name="UpdateDataset" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateDataset"></a>

```typescript
public readonly UpdateDataset: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataset API call.

---

##### `UpdateMetricAttribution`<sup>Required</sup> <a name="UpdateMetricAttribution" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateMetricAttribution"></a>

```typescript
public readonly UpdateMetricAttribution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMetricAttribution API call.

---

##### `UpdateRecommender`<sup>Required</sup> <a name="UpdateRecommender" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateRecommender"></a>

```typescript
public readonly UpdateRecommender: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRecommender API call.

---

##### `UpdateSolution`<sup>Required</sup> <a name="UpdateSolution" id="@cdk_utils/iam.personalize.PersonalizeOperations.property.UpdateSolution"></a>

```typescript
public readonly UpdateSolution: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSolution API call.

---

### PersonalizeResources <a name="PersonalizeResources" id="@cdk_utils/iam.personalize.PersonalizeResources"></a>

ARN builders, validators, and parsers for personalize resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.personalize.PersonalizeResources.Initializer"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

new personalize.PersonalizeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.algorithm">algorithm</a></code> | Builds an ARN for the algorithm resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.batchInferenceJob">batchInferenceJob</a></code> | Builds an ARN for the batchInferenceJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.batchSegmentJob">batchSegmentJob</a></code> | Builds an ARN for the batchSegmentJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.campaign">campaign</a></code> | Builds an ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.dataDeletionJob">dataDeletionJob</a></code> | Builds an ARN for the dataDeletionJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.dataInsightsJob">dataInsightsJob</a></code> | Builds an ARN for the dataInsightsJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.datasetExportJob">datasetExportJob</a></code> | Builds an ARN for the datasetExportJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.datasetGroup">datasetGroup</a></code> | Builds an ARN for the datasetGroup resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.datasetImportJob">datasetImportJob</a></code> | Builds an ARN for the datasetImportJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.eventTracker">eventTracker</a></code> | Builds an ARN for the eventTracker resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.featureTransformation">featureTransformation</a></code> | Builds an ARN for the featureTransformation resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.filter">filter</a></code> | Builds an ARN for the filter resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidAlgorithmArn">isValidAlgorithmArn</a></code> | Validates whether a string is a valid ARN for the algorithm resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidBatchInferenceJobArn">isValidBatchInferenceJobArn</a></code> | Validates whether a string is a valid ARN for the batchInferenceJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidBatchSegmentJobArn">isValidBatchSegmentJobArn</a></code> | Validates whether a string is a valid ARN for the batchSegmentJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidCampaignArn">isValidCampaignArn</a></code> | Validates whether a string is a valid ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidDataDeletionJobArn">isValidDataDeletionJobArn</a></code> | Validates whether a string is a valid ARN for the dataDeletionJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidDataInsightsJobArn">isValidDataInsightsJobArn</a></code> | Validates whether a string is a valid ARN for the dataInsightsJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetExportJobArn">isValidDatasetExportJobArn</a></code> | Validates whether a string is a valid ARN for the datasetExportJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetGroupArn">isValidDatasetGroupArn</a></code> | Validates whether a string is a valid ARN for the datasetGroup resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetImportJobArn">isValidDatasetImportJobArn</a></code> | Validates whether a string is a valid ARN for the datasetImportJob resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidEventTrackerArn">isValidEventTrackerArn</a></code> | Validates whether a string is a valid ARN for the eventTracker resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidFeatureTransformationArn">isValidFeatureTransformationArn</a></code> | Validates whether a string is a valid ARN for the featureTransformation resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidFilterArn">isValidFilterArn</a></code> | Validates whether a string is a valid ARN for the filter resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidMetricAttributionArn">isValidMetricAttributionArn</a></code> | Validates whether a string is a valid ARN for the metricAttribution resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidRecipeArn">isValidRecipeArn</a></code> | Validates whether a string is a valid ARN for the recipe resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidRecommenderArn">isValidRecommenderArn</a></code> | Validates whether a string is a valid ARN for the recommender resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidSchemaArn">isValidSchemaArn</a></code> | Validates whether a string is a valid ARN for the schema resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.isValidSolutionArn">isValidSolutionArn</a></code> | Validates whether a string is a valid ARN for the solution resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.metricAttribution">metricAttribution</a></code> | Builds an ARN for the metricAttribution resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseAlgorithmArn">parseAlgorithmArn</a></code> | Parses a algorithm ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseBatchInferenceJobArn">parseBatchInferenceJobArn</a></code> | Parses a batchInferenceJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseBatchSegmentJobArn">parseBatchSegmentJobArn</a></code> | Parses a batchSegmentJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseCampaignArn">parseCampaignArn</a></code> | Parses a campaign ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseDataDeletionJobArn">parseDataDeletionJobArn</a></code> | Parses a dataDeletionJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseDataInsightsJobArn">parseDataInsightsJobArn</a></code> | Parses a dataInsightsJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetExportJobArn">parseDatasetExportJobArn</a></code> | Parses a datasetExportJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetGroupArn">parseDatasetGroupArn</a></code> | Parses a datasetGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetImportJobArn">parseDatasetImportJobArn</a></code> | Parses a datasetImportJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseEventTrackerArn">parseEventTrackerArn</a></code> | Parses a eventTracker ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseFeatureTransformationArn">parseFeatureTransformationArn</a></code> | Parses a featureTransformation ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseFilterArn">parseFilterArn</a></code> | Parses a filter ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseMetricAttributionArn">parseMetricAttributionArn</a></code> | Parses a metricAttribution ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseRecipeArn">parseRecipeArn</a></code> | Parses a recipe ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseRecommenderArn">parseRecommenderArn</a></code> | Parses a recommender ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseSchemaArn">parseSchemaArn</a></code> | Parses a schema ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.parseSolutionArn">parseSolutionArn</a></code> | Parses a solution ARN into its components. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.recipe">recipe</a></code> | Builds an ARN for the recipe resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.recommender">recommender</a></code> | Builds an ARN for the recommender resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.schema">schema</a></code> | Builds an ARN for the schema resource. |
| <code><a href="#@cdk_utils/iam.personalize.PersonalizeResources.solution">solution</a></code> | Builds an ARN for the solution resource. |

---

##### `algorithm` <a name="algorithm" id="@cdk_utils/iam.personalize.PersonalizeResources.algorithm"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.algorithm(props: PersonalizeAlgorithmArnProps)
```

Builds an ARN for the algorithm resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.algorithm.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeAlgorithmArnProps">PersonalizeAlgorithmArnProps</a>

---

##### `batchInferenceJob` <a name="batchInferenceJob" id="@cdk_utils/iam.personalize.PersonalizeResources.batchInferenceJob"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.batchInferenceJob(props: PersonalizeBatchInferenceJobArnProps)
```

Builds an ARN for the batchInferenceJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.batchInferenceJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeBatchInferenceJobArnProps">PersonalizeBatchInferenceJobArnProps</a>

---

##### `batchSegmentJob` <a name="batchSegmentJob" id="@cdk_utils/iam.personalize.PersonalizeResources.batchSegmentJob"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.batchSegmentJob(props: PersonalizeBatchSegmentJobArnProps)
```

Builds an ARN for the batchSegmentJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.batchSegmentJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeBatchSegmentJobArnProps">PersonalizeBatchSegmentJobArnProps</a>

---

##### `campaign` <a name="campaign" id="@cdk_utils/iam.personalize.PersonalizeResources.campaign"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.campaign(props: PersonalizeCampaignArnProps)
```

Builds an ARN for the campaign resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.campaign.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeCampaignArnProps">PersonalizeCampaignArnProps</a>

---

##### `dataDeletionJob` <a name="dataDeletionJob" id="@cdk_utils/iam.personalize.PersonalizeResources.dataDeletionJob"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.dataDeletionJob(props: PersonalizeDataDeletionJobArnProps)
```

Builds an ARN for the dataDeletionJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.dataDeletionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeDataDeletionJobArnProps">PersonalizeDataDeletionJobArnProps</a>

---

##### `dataInsightsJob` <a name="dataInsightsJob" id="@cdk_utils/iam.personalize.PersonalizeResources.dataInsightsJob"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.dataInsightsJob(props: PersonalizeDataInsightsJobArnProps)
```

Builds an ARN for the dataInsightsJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.dataInsightsJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeDataInsightsJobArnProps">PersonalizeDataInsightsJobArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.personalize.PersonalizeResources.dataset"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.dataset(props: PersonalizeDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeDatasetArnProps">PersonalizeDatasetArnProps</a>

---

##### `datasetExportJob` <a name="datasetExportJob" id="@cdk_utils/iam.personalize.PersonalizeResources.datasetExportJob"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.datasetExportJob(props: PersonalizeDatasetExportJobArnProps)
```

Builds an ARN for the datasetExportJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.datasetExportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeDatasetExportJobArnProps">PersonalizeDatasetExportJobArnProps</a>

---

##### `datasetGroup` <a name="datasetGroup" id="@cdk_utils/iam.personalize.PersonalizeResources.datasetGroup"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.datasetGroup(props: PersonalizeDatasetGroupArnProps)
```

Builds an ARN for the datasetGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.datasetGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeDatasetGroupArnProps">PersonalizeDatasetGroupArnProps</a>

---

##### `datasetImportJob` <a name="datasetImportJob" id="@cdk_utils/iam.personalize.PersonalizeResources.datasetImportJob"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.datasetImportJob(props: PersonalizeDatasetImportJobArnProps)
```

Builds an ARN for the datasetImportJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.datasetImportJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeDatasetImportJobArnProps">PersonalizeDatasetImportJobArnProps</a>

---

##### `eventTracker` <a name="eventTracker" id="@cdk_utils/iam.personalize.PersonalizeResources.eventTracker"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.eventTracker(props: PersonalizeEventTrackerArnProps)
```

Builds an ARN for the eventTracker resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.eventTracker.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeEventTrackerArnProps">PersonalizeEventTrackerArnProps</a>

---

##### `featureTransformation` <a name="featureTransformation" id="@cdk_utils/iam.personalize.PersonalizeResources.featureTransformation"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.featureTransformation(props: PersonalizeFeatureTransformationArnProps)
```

Builds an ARN for the featureTransformation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.featureTransformation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeFeatureTransformationArnProps">PersonalizeFeatureTransformationArnProps</a>

---

##### `filter` <a name="filter" id="@cdk_utils/iam.personalize.PersonalizeResources.filter"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.filter(props: PersonalizeFilterArnProps)
```

Builds an ARN for the filter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.filter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeFilterArnProps">PersonalizeFilterArnProps</a>

---

##### `isValidAlgorithmArn` <a name="isValidAlgorithmArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidAlgorithmArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidAlgorithmArn(arn: string)
```

Validates whether a string is a valid ARN for the algorithm resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidAlgorithmArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBatchInferenceJobArn` <a name="isValidBatchInferenceJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidBatchInferenceJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidBatchInferenceJobArn(arn: string)
```

Validates whether a string is a valid ARN for the batchInferenceJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidBatchInferenceJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBatchSegmentJobArn` <a name="isValidBatchSegmentJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidBatchSegmentJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidBatchSegmentJobArn(arn: string)
```

Validates whether a string is a valid ARN for the batchSegmentJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidBatchSegmentJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCampaignArn` <a name="isValidCampaignArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidCampaignArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidCampaignArn(arn: string)
```

Validates whether a string is a valid ARN for the campaign resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataDeletionJobArn` <a name="isValidDataDeletionJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDataDeletionJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidDataDeletionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the dataDeletionJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDataDeletionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataInsightsJobArn` <a name="isValidDataInsightsJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDataInsightsJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidDataInsightsJobArn(arn: string)
```

Validates whether a string is a valid ARN for the dataInsightsJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDataInsightsJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetExportJobArn` <a name="isValidDatasetExportJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetExportJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidDatasetExportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the datasetExportJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetGroupArn` <a name="isValidDatasetGroupArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetGroupArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidDatasetGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the datasetGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetImportJobArn` <a name="isValidDatasetImportJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetImportJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidDatasetImportJobArn(arn: string)
```

Validates whether a string is a valid ARN for the datasetImportJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidDatasetImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventTrackerArn` <a name="isValidEventTrackerArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidEventTrackerArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidEventTrackerArn(arn: string)
```

Validates whether a string is a valid ARN for the eventTracker resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidEventTrackerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFeatureTransformationArn` <a name="isValidFeatureTransformationArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidFeatureTransformationArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidFeatureTransformationArn(arn: string)
```

Validates whether a string is a valid ARN for the featureTransformation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidFeatureTransformationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFilterArn` <a name="isValidFilterArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidFilterArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidFilterArn(arn: string)
```

Validates whether a string is a valid ARN for the filter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidFilterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMetricAttributionArn` <a name="isValidMetricAttributionArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidMetricAttributionArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidMetricAttributionArn(arn: string)
```

Validates whether a string is a valid ARN for the metricAttribution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidMetricAttributionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecipeArn` <a name="isValidRecipeArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidRecipeArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidRecipeArn(arn: string)
```

Validates whether a string is a valid ARN for the recipe resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidRecipeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecommenderArn` <a name="isValidRecommenderArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidRecommenderArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidRecommenderArn(arn: string)
```

Validates whether a string is a valid ARN for the recommender resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidRecommenderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSchemaArn` <a name="isValidSchemaArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidSchemaArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidSchemaArn(arn: string)
```

Validates whether a string is a valid ARN for the schema resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSolutionArn` <a name="isValidSolutionArn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidSolutionArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.isValidSolutionArn(arn: string)
```

Validates whether a string is a valid ARN for the solution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.isValidSolutionArn.parameter.arn"></a>

- *Type:* string

---

##### `metricAttribution` <a name="metricAttribution" id="@cdk_utils/iam.personalize.PersonalizeResources.metricAttribution"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.metricAttribution(props: PersonalizeMetricAttributionArnProps)
```

Builds an ARN for the metricAttribution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.metricAttribution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeMetricAttributionArnProps">PersonalizeMetricAttributionArnProps</a>

---

##### `parseAlgorithmArn` <a name="parseAlgorithmArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseAlgorithmArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseAlgorithmArn(arn: string)
```

Parses a algorithm ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseAlgorithmArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBatchInferenceJobArn` <a name="parseBatchInferenceJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseBatchInferenceJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseBatchInferenceJobArn(arn: string)
```

Parses a batchInferenceJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseBatchInferenceJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBatchSegmentJobArn` <a name="parseBatchSegmentJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseBatchSegmentJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseBatchSegmentJobArn(arn: string)
```

Parses a batchSegmentJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseBatchSegmentJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCampaignArn` <a name="parseCampaignArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseCampaignArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseCampaignArn(arn: string)
```

Parses a campaign ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataDeletionJobArn` <a name="parseDataDeletionJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDataDeletionJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseDataDeletionJobArn(arn: string)
```

Parses a dataDeletionJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDataDeletionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataInsightsJobArn` <a name="parseDataInsightsJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDataInsightsJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseDataInsightsJobArn(arn: string)
```

Parses a dataInsightsJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDataInsightsJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetExportJobArn` <a name="parseDatasetExportJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetExportJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseDatasetExportJobArn(arn: string)
```

Parses a datasetExportJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetExportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetGroupArn` <a name="parseDatasetGroupArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetGroupArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseDatasetGroupArn(arn: string)
```

Parses a datasetGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetImportJobArn` <a name="parseDatasetImportJobArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetImportJobArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseDatasetImportJobArn(arn: string)
```

Parses a datasetImportJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseDatasetImportJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventTrackerArn` <a name="parseEventTrackerArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseEventTrackerArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseEventTrackerArn(arn: string)
```

Parses a eventTracker ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseEventTrackerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFeatureTransformationArn` <a name="parseFeatureTransformationArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseFeatureTransformationArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseFeatureTransformationArn(arn: string)
```

Parses a featureTransformation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseFeatureTransformationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFilterArn` <a name="parseFilterArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseFilterArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseFilterArn(arn: string)
```

Parses a filter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseFilterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMetricAttributionArn` <a name="parseMetricAttributionArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseMetricAttributionArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseMetricAttributionArn(arn: string)
```

Parses a metricAttribution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseMetricAttributionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecipeArn` <a name="parseRecipeArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseRecipeArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseRecipeArn(arn: string)
```

Parses a recipe ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseRecipeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecommenderArn` <a name="parseRecommenderArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseRecommenderArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseRecommenderArn(arn: string)
```

Parses a recommender ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseRecommenderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSchemaArn` <a name="parseSchemaArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseSchemaArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseSchemaArn(arn: string)
```

Parses a schema ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseSchemaArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSolutionArn` <a name="parseSolutionArn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseSolutionArn"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.parseSolutionArn(arn: string)
```

Parses a solution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.personalize.PersonalizeResources.parseSolutionArn.parameter.arn"></a>

- *Type:* string

---

##### `recipe` <a name="recipe" id="@cdk_utils/iam.personalize.PersonalizeResources.recipe"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.recipe(props: PersonalizeRecipeArnProps)
```

Builds an ARN for the recipe resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.recipe.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeRecipeArnProps">PersonalizeRecipeArnProps</a>

---

##### `recommender` <a name="recommender" id="@cdk_utils/iam.personalize.PersonalizeResources.recommender"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.recommender(props: PersonalizeRecommenderArnProps)
```

Builds an ARN for the recommender resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.recommender.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeRecommenderArnProps">PersonalizeRecommenderArnProps</a>

---

##### `schema` <a name="schema" id="@cdk_utils/iam.personalize.PersonalizeResources.schema"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.schema(props: PersonalizeSchemaArnProps)
```

Builds an ARN for the schema resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.schema.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeSchemaArnProps">PersonalizeSchemaArnProps</a>

---

##### `solution` <a name="solution" id="@cdk_utils/iam.personalize.PersonalizeResources.solution"></a>

```typescript
import { personalize } from '@cdk_utils/iam'

personalize.PersonalizeResources.solution(props: PersonalizeSolutionArnProps)
```

Builds an ARN for the solution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.personalize.PersonalizeResources.solution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.personalize.PersonalizeSolutionArnProps">PersonalizeSolutionArnProps</a>

---




