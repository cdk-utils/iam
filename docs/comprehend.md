# `comprehend` Submodule <a name="`comprehend` Submodule" id="@cdk_utils/iam.comprehend"></a>


## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassificationJobArnComponents <a name="ComprehendDocumentClassificationJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents"></a>

Parsed components of a document-classification-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendDocumentClassificationJobArnComponents: comprehend.ComprehendDocumentClassificationJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendDocumentClassificationJobArnProps <a name="ComprehendDocumentClassificationJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps"></a>

Properties for building a document-classification-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendDocumentClassificationJobArnProps: comprehend.ComprehendDocumentClassificationJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendDocumentClassifierArnComponents <a name="ComprehendDocumentClassifierArnComponents" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents"></a>

Parsed components of a document-classifier ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendDocumentClassifierArnComponents: comprehend.ComprehendDocumentClassifierArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.property.documentClassifierName">documentClassifierName</a></code> | <code>string</code> | The DocumentClassifierName component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `documentClassifierName`<sup>Required</sup> <a name="documentClassifierName" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.property.documentClassifierName"></a>

```typescript
public readonly documentClassifierName: string;
```

- *Type:* string

The DocumentClassifierName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendDocumentClassifierArnProps <a name="ComprehendDocumentClassifierArnProps" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps"></a>

Properties for building a document-classifier ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendDocumentClassifierArnProps: comprehend.ComprehendDocumentClassifierArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.property.documentClassifierName">documentClassifierName</a></code> | <code>string</code> | The DocumentClassifierName component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `documentClassifierName`<sup>Required</sup> <a name="documentClassifierName" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.property.documentClassifierName"></a>

```typescript
public readonly documentClassifierName: string;
```

- *Type:* string

The DocumentClassifierName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendDocumentClassifierEndpointArnComponents <a name="ComprehendDocumentClassifierEndpointArnComponents" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents"></a>

Parsed components of a document-classifier-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendDocumentClassifierEndpointArnComponents: comprehend.ComprehendDocumentClassifierEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.property.documentClassifierEndpointName">documentClassifierEndpointName</a></code> | <code>string</code> | The DocumentClassifierEndpointName component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `documentClassifierEndpointName`<sup>Required</sup> <a name="documentClassifierEndpointName" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.property.documentClassifierEndpointName"></a>

```typescript
public readonly documentClassifierEndpointName: string;
```

- *Type:* string

The DocumentClassifierEndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendDocumentClassifierEndpointArnProps <a name="ComprehendDocumentClassifierEndpointArnProps" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps"></a>

Properties for building a document-classifier-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendDocumentClassifierEndpointArnProps: comprehend.ComprehendDocumentClassifierEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.property.documentClassifierEndpointName">documentClassifierEndpointName</a></code> | <code>string</code> | The DocumentClassifierEndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `documentClassifierEndpointName`<sup>Required</sup> <a name="documentClassifierEndpointName" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.property.documentClassifierEndpointName"></a>

```typescript
public readonly documentClassifierEndpointName: string;
```

- *Type:* string

The DocumentClassifierEndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendDominantLanguageDetectionJobArnComponents <a name="ComprehendDominantLanguageDetectionJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents"></a>

Parsed components of a dominant-language-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendDominantLanguageDetectionJobArnComponents: comprehend.ComprehendDominantLanguageDetectionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendDominantLanguageDetectionJobArnProps <a name="ComprehendDominantLanguageDetectionJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps"></a>

Properties for building a dominant-language-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendDominantLanguageDetectionJobArnProps: comprehend.ComprehendDominantLanguageDetectionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendEntitiesDetectionJobArnComponents <a name="ComprehendEntitiesDetectionJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents"></a>

Parsed components of a entities-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendEntitiesDetectionJobArnComponents: comprehend.ComprehendEntitiesDetectionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendEntitiesDetectionJobArnProps <a name="ComprehendEntitiesDetectionJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps"></a>

Properties for building a entities-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendEntitiesDetectionJobArnProps: comprehend.ComprehendEntitiesDetectionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendEntityRecognizerArnComponents <a name="ComprehendEntityRecognizerArnComponents" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents"></a>

Parsed components of a entity-recognizer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendEntityRecognizerArnComponents: comprehend.ComprehendEntityRecognizerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.property.entityRecognizerName">entityRecognizerName</a></code> | <code>string</code> | The EntityRecognizerName component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `entityRecognizerName`<sup>Required</sup> <a name="entityRecognizerName" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.property.entityRecognizerName"></a>

```typescript
public readonly entityRecognizerName: string;
```

- *Type:* string

The EntityRecognizerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendEntityRecognizerArnProps <a name="ComprehendEntityRecognizerArnProps" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps"></a>

Properties for building a entity-recognizer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendEntityRecognizerArnProps: comprehend.ComprehendEntityRecognizerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.property.entityRecognizerName">entityRecognizerName</a></code> | <code>string</code> | The EntityRecognizerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `entityRecognizerName`<sup>Required</sup> <a name="entityRecognizerName" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.property.entityRecognizerName"></a>

```typescript
public readonly entityRecognizerName: string;
```

- *Type:* string

The EntityRecognizerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendEntityRecognizerEndpointArnComponents <a name="ComprehendEntityRecognizerEndpointArnComponents" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents"></a>

Parsed components of a entity-recognizer-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendEntityRecognizerEndpointArnComponents: comprehend.ComprehendEntityRecognizerEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.property.entityRecognizerEndpointName">entityRecognizerEndpointName</a></code> | <code>string</code> | The EntityRecognizerEndpointName component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `entityRecognizerEndpointName`<sup>Required</sup> <a name="entityRecognizerEndpointName" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.property.entityRecognizerEndpointName"></a>

```typescript
public readonly entityRecognizerEndpointName: string;
```

- *Type:* string

The EntityRecognizerEndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendEntityRecognizerEndpointArnProps <a name="ComprehendEntityRecognizerEndpointArnProps" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps"></a>

Properties for building a entity-recognizer-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendEntityRecognizerEndpointArnProps: comprehend.ComprehendEntityRecognizerEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.property.entityRecognizerEndpointName">entityRecognizerEndpointName</a></code> | <code>string</code> | The EntityRecognizerEndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `entityRecognizerEndpointName`<sup>Required</sup> <a name="entityRecognizerEndpointName" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.property.entityRecognizerEndpointName"></a>

```typescript
public readonly entityRecognizerEndpointName: string;
```

- *Type:* string

The EntityRecognizerEndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendEventsDetectionJobArnComponents <a name="ComprehendEventsDetectionJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents"></a>

Parsed components of a events-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendEventsDetectionJobArnComponents: comprehend.ComprehendEventsDetectionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendEventsDetectionJobArnProps <a name="ComprehendEventsDetectionJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps"></a>

Properties for building a events-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendEventsDetectionJobArnProps: comprehend.ComprehendEventsDetectionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendFlywheelArnComponents <a name="ComprehendFlywheelArnComponents" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents"></a>

Parsed components of a flywheel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendFlywheelArnComponents: comprehend.ComprehendFlywheelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.property.flywheelName">flywheelName</a></code> | <code>string</code> | The FlywheelName component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.property.flywheelName"></a>

```typescript
public readonly flywheelName: string;
```

- *Type:* string

The FlywheelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendFlywheelArnProps <a name="ComprehendFlywheelArnProps" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps"></a>

Properties for building a flywheel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendFlywheelArnProps: comprehend.ComprehendFlywheelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.property.flywheelName">flywheelName</a></code> | <code>string</code> | The FlywheelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.property.flywheelName"></a>

```typescript
public readonly flywheelName: string;
```

- *Type:* string

The FlywheelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendFlywheelDatasetArnComponents <a name="ComprehendFlywheelDatasetArnComponents" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents"></a>

Parsed components of a flywheel-dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendFlywheelDatasetArnComponents: comprehend.ComprehendFlywheelDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.flywheelName">flywheelName</a></code> | <code>string</code> | The FlywheelName component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component.

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.flywheelName"></a>

```typescript
public readonly flywheelName: string;
```

- *Type:* string

The FlywheelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendFlywheelDatasetArnProps <a name="ComprehendFlywheelDatasetArnProps" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps"></a>

Properties for building a flywheel-dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendFlywheelDatasetArnProps: comprehend.ComprehendFlywheelDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.datasetName">datasetName</a></code> | <code>string</code> | The DatasetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.flywheelName">flywheelName</a></code> | <code>string</code> | The FlywheelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

The DatasetName component of the ARN.

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.flywheelName"></a>

```typescript
public readonly flywheelName: string;
```

- *Type:* string

The FlywheelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendKeyPhrasesDetectionJobArnComponents <a name="ComprehendKeyPhrasesDetectionJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents"></a>

Parsed components of a key-phrases-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendKeyPhrasesDetectionJobArnComponents: comprehend.ComprehendKeyPhrasesDetectionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendKeyPhrasesDetectionJobArnProps <a name="ComprehendKeyPhrasesDetectionJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps"></a>

Properties for building a key-phrases-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendKeyPhrasesDetectionJobArnProps: comprehend.ComprehendKeyPhrasesDetectionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendPiiEntitiesDetectionJobArnComponents <a name="ComprehendPiiEntitiesDetectionJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents"></a>

Parsed components of a pii-entities-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendPiiEntitiesDetectionJobArnComponents: comprehend.ComprehendPiiEntitiesDetectionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendPiiEntitiesDetectionJobArnProps <a name="ComprehendPiiEntitiesDetectionJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps"></a>

Properties for building a pii-entities-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendPiiEntitiesDetectionJobArnProps: comprehend.ComprehendPiiEntitiesDetectionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendSentimentDetectionJobArnComponents <a name="ComprehendSentimentDetectionJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents"></a>

Parsed components of a sentiment-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendSentimentDetectionJobArnComponents: comprehend.ComprehendSentimentDetectionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendSentimentDetectionJobArnProps <a name="ComprehendSentimentDetectionJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps"></a>

Properties for building a sentiment-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendSentimentDetectionJobArnProps: comprehend.ComprehendSentimentDetectionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendTargetedSentimentDetectionJobArnComponents <a name="ComprehendTargetedSentimentDetectionJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents"></a>

Parsed components of a targeted-sentiment-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendTargetedSentimentDetectionJobArnComponents: comprehend.ComprehendTargetedSentimentDetectionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendTargetedSentimentDetectionJobArnProps <a name="ComprehendTargetedSentimentDetectionJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps"></a>

Properties for building a targeted-sentiment-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendTargetedSentimentDetectionJobArnProps: comprehend.ComprehendTargetedSentimentDetectionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ComprehendTopicsDetectionJobArnComponents <a name="ComprehendTopicsDetectionJobArnComponents" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents"></a>

Parsed components of a topics-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendTopicsDetectionJobArnComponents: comprehend.ComprehendTopicsDetectionJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ComprehendTopicsDetectionJobArnProps <a name="ComprehendTopicsDetectionJobArnProps" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps"></a>

Properties for building a topics-detection-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

const comprehendTopicsDetectionJobArnProps: comprehend.ComprehendTopicsDetectionJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendActions <a name="ComprehendActions" id="@cdk_utils/iam.comprehend.ComprehendActions"></a>

IAM action constants for the comprehend service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.comprehend.ComprehendActions.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

new comprehend.ComprehendActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectDominantLanguage">BatchDetectDominantLanguage</a></code> | <code>string</code> | [Read] comprehend:BatchDetectDominantLanguage. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectEntities">BatchDetectEntities</a></code> | <code>string</code> | [Read] comprehend:BatchDetectEntities. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectKeyPhrases">BatchDetectKeyPhrases</a></code> | <code>string</code> | [Read] comprehend:BatchDetectKeyPhrases. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectSentiment">BatchDetectSentiment</a></code> | <code>string</code> | [Read] comprehend:BatchDetectSentiment. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectSyntax">BatchDetectSyntax</a></code> | <code>string</code> | [Read] comprehend:BatchDetectSyntax. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectTargetedSentiment">BatchDetectTargetedSentiment</a></code> | <code>string</code> | [Read] comprehend:BatchDetectTargetedSentiment. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ClassifyDocument">ClassifyDocument</a></code> | <code>string</code> | [Read] comprehend:ClassifyDocument. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ContainsPiiEntities">ContainsPiiEntities</a></code> | <code>string</code> | [Read] comprehend:ContainsPiiEntities. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.CreateDataset">CreateDataset</a></code> | <code>string</code> | [Write] comprehend:CreateDataset. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.CreateDocumentClassifier">CreateDocumentClassifier</a></code> | <code>string</code> | [Write] comprehend:CreateDocumentClassifier. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.CreateEndpoint">CreateEndpoint</a></code> | <code>string</code> | [Write] comprehend:CreateEndpoint. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.CreateEntityRecognizer">CreateEntityRecognizer</a></code> | <code>string</code> | [Write] comprehend:CreateEntityRecognizer. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.CreateFlywheel">CreateFlywheel</a></code> | <code>string</code> | [Write] comprehend:CreateFlywheel. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteDocumentClassifier">DeleteDocumentClassifier</a></code> | <code>string</code> | [Write] comprehend:DeleteDocumentClassifier. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string</code> | [Write] comprehend:DeleteEndpoint. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteEntityRecognizer">DeleteEntityRecognizer</a></code> | <code>string</code> | [Write] comprehend:DeleteEntityRecognizer. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteFlywheel">DeleteFlywheel</a></code> | <code>string</code> | [Write] comprehend:DeleteFlywheel. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] comprehend:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeDataset">DescribeDataset</a></code> | <code>string</code> | [Read] comprehend:DescribeDataset. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeDocumentClassificationJob">DescribeDocumentClassificationJob</a></code> | <code>string</code> | [Read] comprehend:DescribeDocumentClassificationJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeDocumentClassifier">DescribeDocumentClassifier</a></code> | <code>string</code> | [Read] comprehend:DescribeDocumentClassifier. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeDominantLanguageDetectionJob">DescribeDominantLanguageDetectionJob</a></code> | <code>string</code> | [Read] comprehend:DescribeDominantLanguageDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeEndpoint">DescribeEndpoint</a></code> | <code>string</code> | [Read] comprehend:DescribeEndpoint. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeEntitiesDetectionJob">DescribeEntitiesDetectionJob</a></code> | <code>string</code> | [Read] comprehend:DescribeEntitiesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeEntityRecognizer">DescribeEntityRecognizer</a></code> | <code>string</code> | [Read] comprehend:DescribeEntityRecognizer. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeEventsDetectionJob">DescribeEventsDetectionJob</a></code> | <code>string</code> | [Read] comprehend:DescribeEventsDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeFlywheel">DescribeFlywheel</a></code> | <code>string</code> | [Read] comprehend:DescribeFlywheel. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeFlywheelIteration">DescribeFlywheelIteration</a></code> | <code>string</code> | [Read] comprehend:DescribeFlywheelIteration. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeKeyPhrasesDetectionJob">DescribeKeyPhrasesDetectionJob</a></code> | <code>string</code> | [Read] comprehend:DescribeKeyPhrasesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribePiiEntitiesDetectionJob">DescribePiiEntitiesDetectionJob</a></code> | <code>string</code> | [Read] comprehend:DescribePiiEntitiesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string</code> | [Read] comprehend:DescribeResourcePolicy. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeSentimentDetectionJob">DescribeSentimentDetectionJob</a></code> | <code>string</code> | [Read] comprehend:DescribeSentimentDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeTargetedSentimentDetectionJob">DescribeTargetedSentimentDetectionJob</a></code> | <code>string</code> | [Read] comprehend:DescribeTargetedSentimentDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeTopicsDetectionJob">DescribeTopicsDetectionJob</a></code> | <code>string</code> | [Read] comprehend:DescribeTopicsDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DetectDominantLanguage">DetectDominantLanguage</a></code> | <code>string</code> | [Read] comprehend:DetectDominantLanguage. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DetectEntities">DetectEntities</a></code> | <code>string</code> | [Read] comprehend:DetectEntities. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DetectKeyPhrases">DetectKeyPhrases</a></code> | <code>string</code> | [Read] comprehend:DetectKeyPhrases. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DetectPiiEntities">DetectPiiEntities</a></code> | <code>string</code> | [Read] comprehend:DetectPiiEntities. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DetectSentiment">DetectSentiment</a></code> | <code>string</code> | [Read] comprehend:DetectSentiment. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DetectSyntax">DetectSyntax</a></code> | <code>string</code> | [Read] comprehend:DetectSyntax. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DetectTargetedSentiment">DetectTargetedSentiment</a></code> | <code>string</code> | [Read] comprehend:DetectTargetedSentiment. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.DetectToxicContent">DetectToxicContent</a></code> | <code>string</code> | [Read] comprehend:DetectToxicContent. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ImportModel">ImportModel</a></code> | <code>string</code> | [Write] comprehend:ImportModel. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListDatasets">ListDatasets</a></code> | <code>string</code> | [Read] comprehend:ListDatasets. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListDocumentClassificationJobs">ListDocumentClassificationJobs</a></code> | <code>string</code> | [Read] comprehend:ListDocumentClassificationJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListDocumentClassifiers">ListDocumentClassifiers</a></code> | <code>string</code> | [Read] comprehend:ListDocumentClassifiers. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListDocumentClassifierSummaries">ListDocumentClassifierSummaries</a></code> | <code>string</code> | [Read] comprehend:ListDocumentClassifierSummaries. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListDominantLanguageDetectionJobs">ListDominantLanguageDetectionJobs</a></code> | <code>string</code> | [Read] comprehend:ListDominantLanguageDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListEndpoints">ListEndpoints</a></code> | <code>string</code> | [Read] comprehend:ListEndpoints. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListEntitiesDetectionJobs">ListEntitiesDetectionJobs</a></code> | <code>string</code> | [Read] comprehend:ListEntitiesDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListEntityRecognizers">ListEntityRecognizers</a></code> | <code>string</code> | [Read] comprehend:ListEntityRecognizers. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListEntityRecognizerSummaries">ListEntityRecognizerSummaries</a></code> | <code>string</code> | [Read] comprehend:ListEntityRecognizerSummaries. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListEventsDetectionJobs">ListEventsDetectionJobs</a></code> | <code>string</code> | [Read] comprehend:ListEventsDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListFlywheelIterationHistory">ListFlywheelIterationHistory</a></code> | <code>string</code> | [Read] comprehend:ListFlywheelIterationHistory. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListFlywheels">ListFlywheels</a></code> | <code>string</code> | [Read] comprehend:ListFlywheels. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListKeyPhrasesDetectionJobs">ListKeyPhrasesDetectionJobs</a></code> | <code>string</code> | [Read] comprehend:ListKeyPhrasesDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListPiiEntitiesDetectionJobs">ListPiiEntitiesDetectionJobs</a></code> | <code>string</code> | [Read] comprehend:ListPiiEntitiesDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListSentimentDetectionJobs">ListSentimentDetectionJobs</a></code> | <code>string</code> | [Read] comprehend:ListSentimentDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] comprehend:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListTargetedSentimentDetectionJobs">ListTargetedSentimentDetectionJobs</a></code> | <code>string</code> | [Read] comprehend:ListTargetedSentimentDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.ListTopicsDetectionJobs">ListTopicsDetectionJobs</a></code> | <code>string</code> | [Read] comprehend:ListTopicsDetectionJobs. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] comprehend:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartDocumentClassificationJob">StartDocumentClassificationJob</a></code> | <code>string</code> | [Write] comprehend:StartDocumentClassificationJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartDominantLanguageDetectionJob">StartDominantLanguageDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StartDominantLanguageDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartEntitiesDetectionJob">StartEntitiesDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StartEntitiesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartEventsDetectionJob">StartEventsDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StartEventsDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartFlywheelIteration">StartFlywheelIteration</a></code> | <code>string</code> | [Write] comprehend:StartFlywheelIteration. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartKeyPhrasesDetectionJob">StartKeyPhrasesDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StartKeyPhrasesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartPiiEntitiesDetectionJob">StartPiiEntitiesDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StartPiiEntitiesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartSentimentDetectionJob">StartSentimentDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StartSentimentDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartTargetedSentimentDetectionJob">StartTargetedSentimentDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StartTargetedSentimentDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StartTopicsDetectionJob">StartTopicsDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StartTopicsDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopDominantLanguageDetectionJob">StopDominantLanguageDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StopDominantLanguageDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopEntitiesDetectionJob">StopEntitiesDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StopEntitiesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopEventsDetectionJob">StopEventsDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StopEventsDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopKeyPhrasesDetectionJob">StopKeyPhrasesDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StopKeyPhrasesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopPiiEntitiesDetectionJob">StopPiiEntitiesDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StopPiiEntitiesDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopSentimentDetectionJob">StopSentimentDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StopSentimentDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopTargetedSentimentDetectionJob">StopTargetedSentimentDetectionJob</a></code> | <code>string</code> | [Write] comprehend:StopTargetedSentimentDetectionJob. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopTrainingDocumentClassifier">StopTrainingDocumentClassifier</a></code> | <code>string</code> | [Write] comprehend:StopTrainingDocumentClassifier. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.StopTrainingEntityRecognizer">StopTrainingEntityRecognizer</a></code> | <code>string</code> | [Write] comprehend:StopTrainingEntityRecognizer. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] comprehend:TagResource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] comprehend:UntagResource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.UpdateEndpoint">UpdateEndpoint</a></code> | <code>string</code> | [Write] comprehend:UpdateEndpoint. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendActions.property.UpdateFlywheel">UpdateFlywheel</a></code> | <code>string</code> | [Write] comprehend:UpdateFlywheel. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.comprehend.ComprehendActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.comprehend.ComprehendActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.comprehend.ComprehendActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.comprehend.ComprehendActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.comprehend.ComprehendActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDetectDominantLanguage`<sup>Required</sup> <a name="BatchDetectDominantLanguage" id="@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectDominantLanguage"></a>

```typescript
public readonly BatchDetectDominantLanguage: string;
```

- *Type:* string

[Read] comprehend:BatchDetectDominantLanguage.

---

##### `BatchDetectEntities`<sup>Required</sup> <a name="BatchDetectEntities" id="@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectEntities"></a>

```typescript
public readonly BatchDetectEntities: string;
```

- *Type:* string

[Read] comprehend:BatchDetectEntities.

---

##### `BatchDetectKeyPhrases`<sup>Required</sup> <a name="BatchDetectKeyPhrases" id="@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectKeyPhrases"></a>

```typescript
public readonly BatchDetectKeyPhrases: string;
```

- *Type:* string

[Read] comprehend:BatchDetectKeyPhrases.

---

##### `BatchDetectSentiment`<sup>Required</sup> <a name="BatchDetectSentiment" id="@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectSentiment"></a>

```typescript
public readonly BatchDetectSentiment: string;
```

- *Type:* string

[Read] comprehend:BatchDetectSentiment.

---

##### `BatchDetectSyntax`<sup>Required</sup> <a name="BatchDetectSyntax" id="@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectSyntax"></a>

```typescript
public readonly BatchDetectSyntax: string;
```

- *Type:* string

[Read] comprehend:BatchDetectSyntax.

---

##### `BatchDetectTargetedSentiment`<sup>Required</sup> <a name="BatchDetectTargetedSentiment" id="@cdk_utils/iam.comprehend.ComprehendActions.property.BatchDetectTargetedSentiment"></a>

```typescript
public readonly BatchDetectTargetedSentiment: string;
```

- *Type:* string

[Read] comprehend:BatchDetectTargetedSentiment.

---

##### `ClassifyDocument`<sup>Required</sup> <a name="ClassifyDocument" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ClassifyDocument"></a>

```typescript
public readonly ClassifyDocument: string;
```

- *Type:* string

[Read] comprehend:ClassifyDocument.

---

##### `ContainsPiiEntities`<sup>Required</sup> <a name="ContainsPiiEntities" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ContainsPiiEntities"></a>

```typescript
public readonly ContainsPiiEntities: string;
```

- *Type:* string

[Read] comprehend:ContainsPiiEntities.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.comprehend.ComprehendActions.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string;
```

- *Type:* string

[Write] comprehend:CreateDataset.

---

##### `CreateDocumentClassifier`<sup>Required</sup> <a name="CreateDocumentClassifier" id="@cdk_utils/iam.comprehend.ComprehendActions.property.CreateDocumentClassifier"></a>

```typescript
public readonly CreateDocumentClassifier: string;
```

- *Type:* string

[Write] comprehend:CreateDocumentClassifier.

---

##### `CreateEndpoint`<sup>Required</sup> <a name="CreateEndpoint" id="@cdk_utils/iam.comprehend.ComprehendActions.property.CreateEndpoint"></a>

```typescript
public readonly CreateEndpoint: string;
```

- *Type:* string

[Write] comprehend:CreateEndpoint.

---

##### `CreateEntityRecognizer`<sup>Required</sup> <a name="CreateEntityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendActions.property.CreateEntityRecognizer"></a>

```typescript
public readonly CreateEntityRecognizer: string;
```

- *Type:* string

[Write] comprehend:CreateEntityRecognizer.

---

##### `CreateFlywheel`<sup>Required</sup> <a name="CreateFlywheel" id="@cdk_utils/iam.comprehend.ComprehendActions.property.CreateFlywheel"></a>

```typescript
public readonly CreateFlywheel: string;
```

- *Type:* string

[Write] comprehend:CreateFlywheel.

---

##### `DeleteDocumentClassifier`<sup>Required</sup> <a name="DeleteDocumentClassifier" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteDocumentClassifier"></a>

```typescript
public readonly DeleteDocumentClassifier: string;
```

- *Type:* string

[Write] comprehend:DeleteDocumentClassifier.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string;
```

- *Type:* string

[Write] comprehend:DeleteEndpoint.

---

##### `DeleteEntityRecognizer`<sup>Required</sup> <a name="DeleteEntityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteEntityRecognizer"></a>

```typescript
public readonly DeleteEntityRecognizer: string;
```

- *Type:* string

[Write] comprehend:DeleteEntityRecognizer.

---

##### `DeleteFlywheel`<sup>Required</sup> <a name="DeleteFlywheel" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteFlywheel"></a>

```typescript
public readonly DeleteFlywheel: string;
```

- *Type:* string

[Write] comprehend:DeleteFlywheel.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] comprehend:DeleteResourcePolicy.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string;
```

- *Type:* string

[Read] comprehend:DescribeDataset.

---

##### `DescribeDocumentClassificationJob`<sup>Required</sup> <a name="DescribeDocumentClassificationJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeDocumentClassificationJob"></a>

```typescript
public readonly DescribeDocumentClassificationJob: string;
```

- *Type:* string

[Read] comprehend:DescribeDocumentClassificationJob.

---

##### `DescribeDocumentClassifier`<sup>Required</sup> <a name="DescribeDocumentClassifier" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeDocumentClassifier"></a>

```typescript
public readonly DescribeDocumentClassifier: string;
```

- *Type:* string

[Read] comprehend:DescribeDocumentClassifier.

---

##### `DescribeDominantLanguageDetectionJob`<sup>Required</sup> <a name="DescribeDominantLanguageDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeDominantLanguageDetectionJob"></a>

```typescript
public readonly DescribeDominantLanguageDetectionJob: string;
```

- *Type:* string

[Read] comprehend:DescribeDominantLanguageDetectionJob.

---

##### `DescribeEndpoint`<sup>Required</sup> <a name="DescribeEndpoint" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeEndpoint"></a>

```typescript
public readonly DescribeEndpoint: string;
```

- *Type:* string

[Read] comprehend:DescribeEndpoint.

---

##### `DescribeEntitiesDetectionJob`<sup>Required</sup> <a name="DescribeEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeEntitiesDetectionJob"></a>

```typescript
public readonly DescribeEntitiesDetectionJob: string;
```

- *Type:* string

[Read] comprehend:DescribeEntitiesDetectionJob.

---

##### `DescribeEntityRecognizer`<sup>Required</sup> <a name="DescribeEntityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeEntityRecognizer"></a>

```typescript
public readonly DescribeEntityRecognizer: string;
```

- *Type:* string

[Read] comprehend:DescribeEntityRecognizer.

---

##### `DescribeEventsDetectionJob`<sup>Required</sup> <a name="DescribeEventsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeEventsDetectionJob"></a>

```typescript
public readonly DescribeEventsDetectionJob: string;
```

- *Type:* string

[Read] comprehend:DescribeEventsDetectionJob.

---

##### `DescribeFlywheel`<sup>Required</sup> <a name="DescribeFlywheel" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeFlywheel"></a>

```typescript
public readonly DescribeFlywheel: string;
```

- *Type:* string

[Read] comprehend:DescribeFlywheel.

---

##### `DescribeFlywheelIteration`<sup>Required</sup> <a name="DescribeFlywheelIteration" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeFlywheelIteration"></a>

```typescript
public readonly DescribeFlywheelIteration: string;
```

- *Type:* string

[Read] comprehend:DescribeFlywheelIteration.

---

##### `DescribeKeyPhrasesDetectionJob`<sup>Required</sup> <a name="DescribeKeyPhrasesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeKeyPhrasesDetectionJob"></a>

```typescript
public readonly DescribeKeyPhrasesDetectionJob: string;
```

- *Type:* string

[Read] comprehend:DescribeKeyPhrasesDetectionJob.

---

##### `DescribePiiEntitiesDetectionJob`<sup>Required</sup> <a name="DescribePiiEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribePiiEntitiesDetectionJob"></a>

```typescript
public readonly DescribePiiEntitiesDetectionJob: string;
```

- *Type:* string

[Read] comprehend:DescribePiiEntitiesDetectionJob.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string;
```

- *Type:* string

[Read] comprehend:DescribeResourcePolicy.

---

##### `DescribeSentimentDetectionJob`<sup>Required</sup> <a name="DescribeSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeSentimentDetectionJob"></a>

```typescript
public readonly DescribeSentimentDetectionJob: string;
```

- *Type:* string

[Read] comprehend:DescribeSentimentDetectionJob.

---

##### `DescribeTargetedSentimentDetectionJob`<sup>Required</sup> <a name="DescribeTargetedSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeTargetedSentimentDetectionJob"></a>

```typescript
public readonly DescribeTargetedSentimentDetectionJob: string;
```

- *Type:* string

[Read] comprehend:DescribeTargetedSentimentDetectionJob.

---

##### `DescribeTopicsDetectionJob`<sup>Required</sup> <a name="DescribeTopicsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DescribeTopicsDetectionJob"></a>

```typescript
public readonly DescribeTopicsDetectionJob: string;
```

- *Type:* string

[Read] comprehend:DescribeTopicsDetectionJob.

---

##### `DetectDominantLanguage`<sup>Required</sup> <a name="DetectDominantLanguage" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DetectDominantLanguage"></a>

```typescript
public readonly DetectDominantLanguage: string;
```

- *Type:* string

[Read] comprehend:DetectDominantLanguage.

---

##### `DetectEntities`<sup>Required</sup> <a name="DetectEntities" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DetectEntities"></a>

```typescript
public readonly DetectEntities: string;
```

- *Type:* string

[Read] comprehend:DetectEntities.

---

##### `DetectKeyPhrases`<sup>Required</sup> <a name="DetectKeyPhrases" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DetectKeyPhrases"></a>

```typescript
public readonly DetectKeyPhrases: string;
```

- *Type:* string

[Read] comprehend:DetectKeyPhrases.

---

##### `DetectPiiEntities`<sup>Required</sup> <a name="DetectPiiEntities" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DetectPiiEntities"></a>

```typescript
public readonly DetectPiiEntities: string;
```

- *Type:* string

[Read] comprehend:DetectPiiEntities.

---

##### `DetectSentiment`<sup>Required</sup> <a name="DetectSentiment" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DetectSentiment"></a>

```typescript
public readonly DetectSentiment: string;
```

- *Type:* string

[Read] comprehend:DetectSentiment.

---

##### `DetectSyntax`<sup>Required</sup> <a name="DetectSyntax" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DetectSyntax"></a>

```typescript
public readonly DetectSyntax: string;
```

- *Type:* string

[Read] comprehend:DetectSyntax.

---

##### `DetectTargetedSentiment`<sup>Required</sup> <a name="DetectTargetedSentiment" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DetectTargetedSentiment"></a>

```typescript
public readonly DetectTargetedSentiment: string;
```

- *Type:* string

[Read] comprehend:DetectTargetedSentiment.

---

##### `DetectToxicContent`<sup>Required</sup> <a name="DetectToxicContent" id="@cdk_utils/iam.comprehend.ComprehendActions.property.DetectToxicContent"></a>

```typescript
public readonly DetectToxicContent: string;
```

- *Type:* string

[Read] comprehend:DetectToxicContent.

---

##### `ImportModel`<sup>Required</sup> <a name="ImportModel" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ImportModel"></a>

```typescript
public readonly ImportModel: string;
```

- *Type:* string

[Write] comprehend:ImportModel.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string;
```

- *Type:* string

[Read] comprehend:ListDatasets.

---

##### `ListDocumentClassificationJobs`<sup>Required</sup> <a name="ListDocumentClassificationJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListDocumentClassificationJobs"></a>

```typescript
public readonly ListDocumentClassificationJobs: string;
```

- *Type:* string

[Read] comprehend:ListDocumentClassificationJobs.

---

##### `ListDocumentClassifiers`<sup>Required</sup> <a name="ListDocumentClassifiers" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListDocumentClassifiers"></a>

```typescript
public readonly ListDocumentClassifiers: string;
```

- *Type:* string

[Read] comprehend:ListDocumentClassifiers.

---

##### `ListDocumentClassifierSummaries`<sup>Required</sup> <a name="ListDocumentClassifierSummaries" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListDocumentClassifierSummaries"></a>

```typescript
public readonly ListDocumentClassifierSummaries: string;
```

- *Type:* string

[Read] comprehend:ListDocumentClassifierSummaries.

---

##### `ListDominantLanguageDetectionJobs`<sup>Required</sup> <a name="ListDominantLanguageDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListDominantLanguageDetectionJobs"></a>

```typescript
public readonly ListDominantLanguageDetectionJobs: string;
```

- *Type:* string

[Read] comprehend:ListDominantLanguageDetectionJobs.

---

##### `ListEndpoints`<sup>Required</sup> <a name="ListEndpoints" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListEndpoints"></a>

```typescript
public readonly ListEndpoints: string;
```

- *Type:* string

[Read] comprehend:ListEndpoints.

---

##### `ListEntitiesDetectionJobs`<sup>Required</sup> <a name="ListEntitiesDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListEntitiesDetectionJobs"></a>

```typescript
public readonly ListEntitiesDetectionJobs: string;
```

- *Type:* string

[Read] comprehend:ListEntitiesDetectionJobs.

---

##### `ListEntityRecognizers`<sup>Required</sup> <a name="ListEntityRecognizers" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListEntityRecognizers"></a>

```typescript
public readonly ListEntityRecognizers: string;
```

- *Type:* string

[Read] comprehend:ListEntityRecognizers.

---

##### `ListEntityRecognizerSummaries`<sup>Required</sup> <a name="ListEntityRecognizerSummaries" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListEntityRecognizerSummaries"></a>

```typescript
public readonly ListEntityRecognizerSummaries: string;
```

- *Type:* string

[Read] comprehend:ListEntityRecognizerSummaries.

---

##### `ListEventsDetectionJobs`<sup>Required</sup> <a name="ListEventsDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListEventsDetectionJobs"></a>

```typescript
public readonly ListEventsDetectionJobs: string;
```

- *Type:* string

[Read] comprehend:ListEventsDetectionJobs.

---

##### `ListFlywheelIterationHistory`<sup>Required</sup> <a name="ListFlywheelIterationHistory" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListFlywheelIterationHistory"></a>

```typescript
public readonly ListFlywheelIterationHistory: string;
```

- *Type:* string

[Read] comprehend:ListFlywheelIterationHistory.

---

##### `ListFlywheels`<sup>Required</sup> <a name="ListFlywheels" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListFlywheels"></a>

```typescript
public readonly ListFlywheels: string;
```

- *Type:* string

[Read] comprehend:ListFlywheels.

---

##### `ListKeyPhrasesDetectionJobs`<sup>Required</sup> <a name="ListKeyPhrasesDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListKeyPhrasesDetectionJobs"></a>

```typescript
public readonly ListKeyPhrasesDetectionJobs: string;
```

- *Type:* string

[Read] comprehend:ListKeyPhrasesDetectionJobs.

---

##### `ListPiiEntitiesDetectionJobs`<sup>Required</sup> <a name="ListPiiEntitiesDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListPiiEntitiesDetectionJobs"></a>

```typescript
public readonly ListPiiEntitiesDetectionJobs: string;
```

- *Type:* string

[Read] comprehend:ListPiiEntitiesDetectionJobs.

---

##### `ListSentimentDetectionJobs`<sup>Required</sup> <a name="ListSentimentDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListSentimentDetectionJobs"></a>

```typescript
public readonly ListSentimentDetectionJobs: string;
```

- *Type:* string

[Read] comprehend:ListSentimentDetectionJobs.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] comprehend:ListTagsForResource.

---

##### `ListTargetedSentimentDetectionJobs`<sup>Required</sup> <a name="ListTargetedSentimentDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListTargetedSentimentDetectionJobs"></a>

```typescript
public readonly ListTargetedSentimentDetectionJobs: string;
```

- *Type:* string

[Read] comprehend:ListTargetedSentimentDetectionJobs.

---

##### `ListTopicsDetectionJobs`<sup>Required</sup> <a name="ListTopicsDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendActions.property.ListTopicsDetectionJobs"></a>

```typescript
public readonly ListTopicsDetectionJobs: string;
```

- *Type:* string

[Read] comprehend:ListTopicsDetectionJobs.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.comprehend.ComprehendActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] comprehend:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.comprehend.ComprehendActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDocumentClassificationJob`<sup>Required</sup> <a name="StartDocumentClassificationJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartDocumentClassificationJob"></a>

```typescript
public readonly StartDocumentClassificationJob: string;
```

- *Type:* string

[Write] comprehend:StartDocumentClassificationJob.

---

##### `StartDominantLanguageDetectionJob`<sup>Required</sup> <a name="StartDominantLanguageDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartDominantLanguageDetectionJob"></a>

```typescript
public readonly StartDominantLanguageDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StartDominantLanguageDetectionJob.

---

##### `StartEntitiesDetectionJob`<sup>Required</sup> <a name="StartEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartEntitiesDetectionJob"></a>

```typescript
public readonly StartEntitiesDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StartEntitiesDetectionJob.

---

##### `StartEventsDetectionJob`<sup>Required</sup> <a name="StartEventsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartEventsDetectionJob"></a>

```typescript
public readonly StartEventsDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StartEventsDetectionJob.

---

##### `StartFlywheelIteration`<sup>Required</sup> <a name="StartFlywheelIteration" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartFlywheelIteration"></a>

```typescript
public readonly StartFlywheelIteration: string;
```

- *Type:* string

[Write] comprehend:StartFlywheelIteration.

---

##### `StartKeyPhrasesDetectionJob`<sup>Required</sup> <a name="StartKeyPhrasesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartKeyPhrasesDetectionJob"></a>

```typescript
public readonly StartKeyPhrasesDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StartKeyPhrasesDetectionJob.

---

##### `StartPiiEntitiesDetectionJob`<sup>Required</sup> <a name="StartPiiEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartPiiEntitiesDetectionJob"></a>

```typescript
public readonly StartPiiEntitiesDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StartPiiEntitiesDetectionJob.

---

##### `StartSentimentDetectionJob`<sup>Required</sup> <a name="StartSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartSentimentDetectionJob"></a>

```typescript
public readonly StartSentimentDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StartSentimentDetectionJob.

---

##### `StartTargetedSentimentDetectionJob`<sup>Required</sup> <a name="StartTargetedSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartTargetedSentimentDetectionJob"></a>

```typescript
public readonly StartTargetedSentimentDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StartTargetedSentimentDetectionJob.

---

##### `StartTopicsDetectionJob`<sup>Required</sup> <a name="StartTopicsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StartTopicsDetectionJob"></a>

```typescript
public readonly StartTopicsDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StartTopicsDetectionJob.

---

##### `StopDominantLanguageDetectionJob`<sup>Required</sup> <a name="StopDominantLanguageDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopDominantLanguageDetectionJob"></a>

```typescript
public readonly StopDominantLanguageDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StopDominantLanguageDetectionJob.

---

##### `StopEntitiesDetectionJob`<sup>Required</sup> <a name="StopEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopEntitiesDetectionJob"></a>

```typescript
public readonly StopEntitiesDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StopEntitiesDetectionJob.

---

##### `StopEventsDetectionJob`<sup>Required</sup> <a name="StopEventsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopEventsDetectionJob"></a>

```typescript
public readonly StopEventsDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StopEventsDetectionJob.

---

##### `StopKeyPhrasesDetectionJob`<sup>Required</sup> <a name="StopKeyPhrasesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopKeyPhrasesDetectionJob"></a>

```typescript
public readonly StopKeyPhrasesDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StopKeyPhrasesDetectionJob.

---

##### `StopPiiEntitiesDetectionJob`<sup>Required</sup> <a name="StopPiiEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopPiiEntitiesDetectionJob"></a>

```typescript
public readonly StopPiiEntitiesDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StopPiiEntitiesDetectionJob.

---

##### `StopSentimentDetectionJob`<sup>Required</sup> <a name="StopSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopSentimentDetectionJob"></a>

```typescript
public readonly StopSentimentDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StopSentimentDetectionJob.

---

##### `StopTargetedSentimentDetectionJob`<sup>Required</sup> <a name="StopTargetedSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopTargetedSentimentDetectionJob"></a>

```typescript
public readonly StopTargetedSentimentDetectionJob: string;
```

- *Type:* string

[Write] comprehend:StopTargetedSentimentDetectionJob.

---

##### `StopTrainingDocumentClassifier`<sup>Required</sup> <a name="StopTrainingDocumentClassifier" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopTrainingDocumentClassifier"></a>

```typescript
public readonly StopTrainingDocumentClassifier: string;
```

- *Type:* string

[Write] comprehend:StopTrainingDocumentClassifier.

---

##### `StopTrainingEntityRecognizer`<sup>Required</sup> <a name="StopTrainingEntityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendActions.property.StopTrainingEntityRecognizer"></a>

```typescript
public readonly StopTrainingEntityRecognizer: string;
```

- *Type:* string

[Write] comprehend:StopTrainingEntityRecognizer.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.comprehend.ComprehendActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] comprehend:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.comprehend.ComprehendActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] comprehend:UntagResource.

---

##### `UpdateEndpoint`<sup>Required</sup> <a name="UpdateEndpoint" id="@cdk_utils/iam.comprehend.ComprehendActions.property.UpdateEndpoint"></a>

```typescript
public readonly UpdateEndpoint: string;
```

- *Type:* string

[Write] comprehend:UpdateEndpoint.

---

##### `UpdateFlywheel`<sup>Required</sup> <a name="UpdateFlywheel" id="@cdk_utils/iam.comprehend.ComprehendActions.property.UpdateFlywheel"></a>

```typescript
public readonly UpdateFlywheel: string;
```

- *Type:* string

[Write] comprehend:UpdateFlywheel.

---

### ComprehendConditions <a name="ComprehendConditions" id="@cdk_utils/iam.comprehend.ComprehendConditions"></a>

Condition key constants and builders for comprehend.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.comprehend.ComprehendConditions.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

new comprehend.ComprehendConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.dataLakeKMSKey">dataLakeKMSKey</a></code> | Generates a condition block for `comprehend:DataLakeKmsKey`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.flywheelIterationId">flywheelIterationId</a></code> | Generates a condition block for `comprehend:FlywheelIterationId`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.modelKMSKey">modelKMSKey</a></code> | Generates a condition block for `comprehend:ModelKmsKey`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.outputKMSKey">outputKMSKey</a></code> | Generates a condition block for `comprehend:OutputKmsKey`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.volumeKMSKey">volumeKMSKey</a></code> | Generates a condition block for `comprehend:VolumeKmsKey`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | Generates a condition block for `comprehend:VpcSecurityGroupIds`. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.vpcSubnets">vpcSubnets</a></code> | Generates a condition block for `comprehend:VpcSubnets`. |

---

##### `dataLakeKMSKey` <a name="dataLakeKMSKey" id="@cdk_utils/iam.comprehend.ComprehendConditions.dataLakeKMSKey"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.dataLakeKMSKey(value: string)
```

Generates a condition block for `comprehend:DataLakeKmsKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.comprehend.ComprehendConditions.dataLakeKMSKey.parameter.value"></a>

- *Type:* string

---

##### `flywheelIterationId` <a name="flywheelIterationId" id="@cdk_utils/iam.comprehend.ComprehendConditions.flywheelIterationId"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.flywheelIterationId(value: string)
```

Generates a condition block for `comprehend:FlywheelIterationId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.comprehend.ComprehendConditions.flywheelIterationId.parameter.value"></a>

- *Type:* string

---

##### `modelKMSKey` <a name="modelKMSKey" id="@cdk_utils/iam.comprehend.ComprehendConditions.modelKMSKey"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.modelKMSKey(value: string)
```

Generates a condition block for `comprehend:ModelKmsKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.comprehend.ComprehendConditions.modelKMSKey.parameter.value"></a>

- *Type:* string

---

##### `outputKMSKey` <a name="outputKMSKey" id="@cdk_utils/iam.comprehend.ComprehendConditions.outputKMSKey"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.outputKMSKey(value: string)
```

Generates a condition block for `comprehend:OutputKmsKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.comprehend.ComprehendConditions.outputKMSKey.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.comprehend.ComprehendConditions.requestTag"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.comprehend.ComprehendConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.comprehend.ComprehendConditions.resourceTag"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.comprehend.ComprehendConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.tagKeys"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.comprehend.ComprehendConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `volumeKMSKey` <a name="volumeKMSKey" id="@cdk_utils/iam.comprehend.ComprehendConditions.volumeKMSKey"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.volumeKMSKey(value: string)
```

Generates a condition block for `comprehend:VolumeKmsKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.comprehend.ComprehendConditions.volumeKMSKey.parameter.value"></a>

- *Type:* string

---

##### `vpcSecurityGroupIds` <a name="vpcSecurityGroupIds" id="@cdk_utils/iam.comprehend.ComprehendConditions.vpcSecurityGroupIds"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.vpcSecurityGroupIds(values: string[])
```

Generates a condition block for `comprehend:VpcSecurityGroupIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.comprehend.ComprehendConditions.vpcSecurityGroupIds.parameter.values"></a>

- *Type:* string[]

---

##### `vpcSubnets` <a name="vpcSubnets" id="@cdk_utils/iam.comprehend.ComprehendConditions.vpcSubnets"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendConditions.vpcSubnets(values: string[])
```

Generates a condition block for `comprehend:VpcSubnets`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.comprehend.ComprehendConditions.vpcSubnets.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.CreateDatasetConditionKeys">CreateDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataset action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.CreateDocumentClassifierConditionKeys">CreateDocumentClassifierConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDocumentClassifier action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.CreateEntityRecognizerConditionKeys">CreateEntityRecognizerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEntityRecognizer action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.DATA_LAKE_KMS_KEY">DATA_LAKE_KMS_KEY</a></code> | <code>string</code> | Condition key: comprehend:DataLakeKmsKey (ARN). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.DescribeFlywheelIterationConditionKeys">DescribeFlywheelIterationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeFlywheelIteration action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.FLYWHEEL_ITERATION_ID">FLYWHEEL_ITERATION_ID</a></code> | <code>string</code> | Condition key: comprehend:FlywheelIterationId (String). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.ImportModelConditionKeys">ImportModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportModel action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.MODEL_KMS_KEY">MODEL_KMS_KEY</a></code> | <code>string</code> | Condition key: comprehend:ModelKmsKey (ARN). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.OUTPUT_KMS_KEY">OUTPUT_KMS_KEY</a></code> | <code>string</code> | Condition key: comprehend:OutputKmsKey (ARN). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.StartDominantLanguageDetectionJobConditionKeys">StartDominantLanguageDetectionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartDominantLanguageDetectionJob action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.StartEventsDetectionJobConditionKeys">StartEventsDetectionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartEventsDetectionJob action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.StartKeyPhrasesDetectionJobConditionKeys">StartKeyPhrasesDetectionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartKeyPhrasesDetectionJob action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.StartPiiEntitiesDetectionJobConditionKeys">StartPiiEntitiesDetectionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartPiiEntitiesDetectionJob action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.StartSentimentDetectionJobConditionKeys">StartSentimentDetectionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSentimentDetectionJob action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.StartTargetedSentimentDetectionJobConditionKeys">StartTargetedSentimentDetectionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTargetedSentimentDetectionJob action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.StartTopicsDetectionJobConditionKeys">StartTopicsDetectionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTopicsDetectionJob action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.VOLUME_KMS_KEY">VOLUME_KMS_KEY</a></code> | <code>string</code> | Condition key: comprehend:VolumeKmsKey (ARN). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.VPC_SECURITY_GROUP_IDS">VPC_SECURITY_GROUP_IDS</a></code> | <code>string</code> | Condition key: comprehend:VpcSecurityGroupIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendConditions.property.VPC_SUBNETS">VPC_SUBNETS</a></code> | <code>string</code> | Condition key: comprehend:VpcSubnets (ArrayOfString). |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDatasetConditionKeys`<sup>Required</sup> <a name="CreateDatasetConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.CreateDatasetConditionKeys"></a>

```typescript
public readonly CreateDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataset action.

---

##### `CreateDocumentClassifierConditionKeys`<sup>Required</sup> <a name="CreateDocumentClassifierConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.CreateDocumentClassifierConditionKeys"></a>

```typescript
public readonly CreateDocumentClassifierConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDocumentClassifier action.

---

##### `CreateEntityRecognizerConditionKeys`<sup>Required</sup> <a name="CreateEntityRecognizerConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.CreateEntityRecognizerConditionKeys"></a>

```typescript
public readonly CreateEntityRecognizerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEntityRecognizer action.

---

##### `DATA_LAKE_KMS_KEY`<sup>Required</sup> <a name="DATA_LAKE_KMS_KEY" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.DATA_LAKE_KMS_KEY"></a>

```typescript
public readonly DATA_LAKE_KMS_KEY: string;
```

- *Type:* string

Condition key: comprehend:DataLakeKmsKey (ARN).

---

##### `DescribeFlywheelIterationConditionKeys`<sup>Required</sup> <a name="DescribeFlywheelIterationConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.DescribeFlywheelIterationConditionKeys"></a>

```typescript
public readonly DescribeFlywheelIterationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeFlywheelIteration action.

---

##### `FLYWHEEL_ITERATION_ID`<sup>Required</sup> <a name="FLYWHEEL_ITERATION_ID" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.FLYWHEEL_ITERATION_ID"></a>

```typescript
public readonly FLYWHEEL_ITERATION_ID: string;
```

- *Type:* string

Condition key: comprehend:FlywheelIterationId (String).

---

##### `ImportModelConditionKeys`<sup>Required</sup> <a name="ImportModelConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.ImportModelConditionKeys"></a>

```typescript
public readonly ImportModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportModel action.

---

##### `MODEL_KMS_KEY`<sup>Required</sup> <a name="MODEL_KMS_KEY" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.MODEL_KMS_KEY"></a>

```typescript
public readonly MODEL_KMS_KEY: string;
```

- *Type:* string

Condition key: comprehend:ModelKmsKey (ARN).

---

##### `OUTPUT_KMS_KEY`<sup>Required</sup> <a name="OUTPUT_KMS_KEY" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.OUTPUT_KMS_KEY"></a>

```typescript
public readonly OUTPUT_KMS_KEY: string;
```

- *Type:* string

Condition key: comprehend:OutputKmsKey (ARN).

---

##### `StartDominantLanguageDetectionJobConditionKeys`<sup>Required</sup> <a name="StartDominantLanguageDetectionJobConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.StartDominantLanguageDetectionJobConditionKeys"></a>

```typescript
public readonly StartDominantLanguageDetectionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartDominantLanguageDetectionJob action.

---

##### `StartEventsDetectionJobConditionKeys`<sup>Required</sup> <a name="StartEventsDetectionJobConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.StartEventsDetectionJobConditionKeys"></a>

```typescript
public readonly StartEventsDetectionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartEventsDetectionJob action.

---

##### `StartKeyPhrasesDetectionJobConditionKeys`<sup>Required</sup> <a name="StartKeyPhrasesDetectionJobConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.StartKeyPhrasesDetectionJobConditionKeys"></a>

```typescript
public readonly StartKeyPhrasesDetectionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartKeyPhrasesDetectionJob action.

---

##### `StartPiiEntitiesDetectionJobConditionKeys`<sup>Required</sup> <a name="StartPiiEntitiesDetectionJobConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.StartPiiEntitiesDetectionJobConditionKeys"></a>

```typescript
public readonly StartPiiEntitiesDetectionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartPiiEntitiesDetectionJob action.

---

##### `StartSentimentDetectionJobConditionKeys`<sup>Required</sup> <a name="StartSentimentDetectionJobConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.StartSentimentDetectionJobConditionKeys"></a>

```typescript
public readonly StartSentimentDetectionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSentimentDetectionJob action.

---

##### `StartTargetedSentimentDetectionJobConditionKeys`<sup>Required</sup> <a name="StartTargetedSentimentDetectionJobConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.StartTargetedSentimentDetectionJobConditionKeys"></a>

```typescript
public readonly StartTargetedSentimentDetectionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTargetedSentimentDetectionJob action.

---

##### `StartTopicsDetectionJobConditionKeys`<sup>Required</sup> <a name="StartTopicsDetectionJobConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.StartTopicsDetectionJobConditionKeys"></a>

```typescript
public readonly StartTopicsDetectionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTopicsDetectionJob action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `VOLUME_KMS_KEY`<sup>Required</sup> <a name="VOLUME_KMS_KEY" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.VOLUME_KMS_KEY"></a>

```typescript
public readonly VOLUME_KMS_KEY: string;
```

- *Type:* string

Condition key: comprehend:VolumeKmsKey (ARN).

---

##### `VPC_SECURITY_GROUP_IDS`<sup>Required</sup> <a name="VPC_SECURITY_GROUP_IDS" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.VPC_SECURITY_GROUP_IDS"></a>

```typescript
public readonly VPC_SECURITY_GROUP_IDS: string;
```

- *Type:* string

Condition key: comprehend:VpcSecurityGroupIds (ArrayOfString).

---

##### `VPC_SUBNETS`<sup>Required</sup> <a name="VPC_SUBNETS" id="@cdk_utils/iam.comprehend.ComprehendConditions.property.VPC_SUBNETS"></a>

```typescript
public readonly VPC_SUBNETS: string;
```

- *Type:* string

Condition key: comprehend:VpcSubnets (ArrayOfString).

---

### ComprehendOperations <a name="ComprehendOperations" id="@cdk_utils/iam.comprehend.ComprehendOperations"></a>

API operation to required IAM actions mapping for comprehend.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.comprehend.ComprehendOperations.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

new comprehend.ComprehendOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectDominantLanguage">BatchDetectDominantLanguage</a></code> | <code>string[]</code> | IAM actions required for the BatchDetectDominantLanguage API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectEntities">BatchDetectEntities</a></code> | <code>string[]</code> | IAM actions required for the BatchDetectEntities API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectKeyPhrases">BatchDetectKeyPhrases</a></code> | <code>string[]</code> | IAM actions required for the BatchDetectKeyPhrases API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectSentiment">BatchDetectSentiment</a></code> | <code>string[]</code> | IAM actions required for the BatchDetectSentiment API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectSyntax">BatchDetectSyntax</a></code> | <code>string[]</code> | IAM actions required for the BatchDetectSyntax API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectTargetedSentiment">BatchDetectTargetedSentiment</a></code> | <code>string[]</code> | IAM actions required for the BatchDetectTargetedSentiment API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ClassifyDocument">ClassifyDocument</a></code> | <code>string[]</code> | IAM actions required for the ClassifyDocument API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ContainsPiiEntities">ContainsPiiEntities</a></code> | <code>string[]</code> | IAM actions required for the ContainsPiiEntities API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateDataset">CreateDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateDataset API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateDocumentClassifier">CreateDocumentClassifier</a></code> | <code>string[]</code> | IAM actions required for the CreateDocumentClassifier API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateEndpoint">CreateEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateEndpoint API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateEntityRecognizer">CreateEntityRecognizer</a></code> | <code>string[]</code> | IAM actions required for the CreateEntityRecognizer API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateFlywheel">CreateFlywheel</a></code> | <code>string[]</code> | IAM actions required for the CreateFlywheel API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteDocumentClassifier">DeleteDocumentClassifier</a></code> | <code>string[]</code> | IAM actions required for the DeleteDocumentClassifier API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpoint API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteEntityRecognizer">DeleteEntityRecognizer</a></code> | <code>string[]</code> | IAM actions required for the DeleteEntityRecognizer API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteFlywheel">DeleteFlywheel</a></code> | <code>string[]</code> | IAM actions required for the DeleteFlywheel API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeDataset">DescribeDataset</a></code> | <code>string[]</code> | IAM actions required for the DescribeDataset API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeDocumentClassificationJob">DescribeDocumentClassificationJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDocumentClassificationJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeDocumentClassifier">DescribeDocumentClassifier</a></code> | <code>string[]</code> | IAM actions required for the DescribeDocumentClassifier API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeDominantLanguageDetectionJob">DescribeDominantLanguageDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeDominantLanguageDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeEndpoint">DescribeEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpoint API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeEntitiesDetectionJob">DescribeEntitiesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntitiesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeEntityRecognizer">DescribeEntityRecognizer</a></code> | <code>string[]</code> | IAM actions required for the DescribeEntityRecognizer API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeEventsDetectionJob">DescribeEventsDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventsDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeFlywheel">DescribeFlywheel</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlywheel API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeFlywheelIteration">DescribeFlywheelIteration</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlywheelIteration API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeKeyPhrasesDetectionJob">DescribeKeyPhrasesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeKeyPhrasesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribePiiEntitiesDetectionJob">DescribePiiEntitiesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribePiiEntitiesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeSentimentDetectionJob">DescribeSentimentDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeSentimentDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeTargetedSentimentDetectionJob">DescribeTargetedSentimentDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeTargetedSentimentDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeTopicsDetectionJob">DescribeTopicsDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeTopicsDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectDominantLanguage">DetectDominantLanguage</a></code> | <code>string[]</code> | IAM actions required for the DetectDominantLanguage API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectEntities">DetectEntities</a></code> | <code>string[]</code> | IAM actions required for the DetectEntities API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectKeyPhrases">DetectKeyPhrases</a></code> | <code>string[]</code> | IAM actions required for the DetectKeyPhrases API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectPiiEntities">DetectPiiEntities</a></code> | <code>string[]</code> | IAM actions required for the DetectPiiEntities API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectSentiment">DetectSentiment</a></code> | <code>string[]</code> | IAM actions required for the DetectSentiment API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectSyntax">DetectSyntax</a></code> | <code>string[]</code> | IAM actions required for the DetectSyntax API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectTargetedSentiment">DetectTargetedSentiment</a></code> | <code>string[]</code> | IAM actions required for the DetectTargetedSentiment API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectToxicContent">DetectToxicContent</a></code> | <code>string[]</code> | IAM actions required for the DetectToxicContent API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ImportModel">ImportModel</a></code> | <code>string[]</code> | IAM actions required for the ImportModel API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDatasets">ListDatasets</a></code> | <code>string[]</code> | IAM actions required for the ListDatasets API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDocumentClassificationJobs">ListDocumentClassificationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDocumentClassificationJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDocumentClassifiers">ListDocumentClassifiers</a></code> | <code>string[]</code> | IAM actions required for the ListDocumentClassifiers API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDocumentClassifierSummaries">ListDocumentClassifierSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListDocumentClassifierSummaries API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDominantLanguageDetectionJobs">ListDominantLanguageDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListDominantLanguageDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEndpoints">ListEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListEndpoints API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEntitiesDetectionJobs">ListEntitiesDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListEntitiesDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEntityRecognizers">ListEntityRecognizers</a></code> | <code>string[]</code> | IAM actions required for the ListEntityRecognizers API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEntityRecognizerSummaries">ListEntityRecognizerSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListEntityRecognizerSummaries API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEventsDetectionJobs">ListEventsDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListEventsDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListFlywheelIterationHistory">ListFlywheelIterationHistory</a></code> | <code>string[]</code> | IAM actions required for the ListFlywheelIterationHistory API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListFlywheels">ListFlywheels</a></code> | <code>string[]</code> | IAM actions required for the ListFlywheels API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListKeyPhrasesDetectionJobs">ListKeyPhrasesDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListKeyPhrasesDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListPiiEntitiesDetectionJobs">ListPiiEntitiesDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListPiiEntitiesDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListSentimentDetectionJobs">ListSentimentDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListSentimentDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListTargetedSentimentDetectionJobs">ListTargetedSentimentDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListTargetedSentimentDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.ListTopicsDetectionJobs">ListTopicsDetectionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListTopicsDetectionJobs API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartDocumentClassificationJob">StartDocumentClassificationJob</a></code> | <code>string[]</code> | IAM actions required for the StartDocumentClassificationJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartDominantLanguageDetectionJob">StartDominantLanguageDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartDominantLanguageDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartEntitiesDetectionJob">StartEntitiesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartEntitiesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartEventsDetectionJob">StartEventsDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartEventsDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartFlywheelIteration">StartFlywheelIteration</a></code> | <code>string[]</code> | IAM actions required for the StartFlywheelIteration API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartKeyPhrasesDetectionJob">StartKeyPhrasesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartKeyPhrasesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartPiiEntitiesDetectionJob">StartPiiEntitiesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartPiiEntitiesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartSentimentDetectionJob">StartSentimentDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartSentimentDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartTargetedSentimentDetectionJob">StartTargetedSentimentDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartTargetedSentimentDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StartTopicsDetectionJob">StartTopicsDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StartTopicsDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopDominantLanguageDetectionJob">StopDominantLanguageDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StopDominantLanguageDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopEntitiesDetectionJob">StopEntitiesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StopEntitiesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopEventsDetectionJob">StopEventsDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StopEventsDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopKeyPhrasesDetectionJob">StopKeyPhrasesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StopKeyPhrasesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopPiiEntitiesDetectionJob">StopPiiEntitiesDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StopPiiEntitiesDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopSentimentDetectionJob">StopSentimentDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StopSentimentDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopTargetedSentimentDetectionJob">StopTargetedSentimentDetectionJob</a></code> | <code>string[]</code> | IAM actions required for the StopTargetedSentimentDetectionJob API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopTrainingDocumentClassifier">StopTrainingDocumentClassifier</a></code> | <code>string[]</code> | IAM actions required for the StopTrainingDocumentClassifier API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.StopTrainingEntityRecognizer">StopTrainingEntityRecognizer</a></code> | <code>string[]</code> | IAM actions required for the StopTrainingEntityRecognizer API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.UpdateEndpoint">UpdateEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateEndpoint API call. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendOperations.property.UpdateFlywheel">UpdateFlywheel</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlywheel API call. |

---

##### `BatchDetectDominantLanguage`<sup>Required</sup> <a name="BatchDetectDominantLanguage" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectDominantLanguage"></a>

```typescript
public readonly BatchDetectDominantLanguage: string[];
```

- *Type:* string[]

IAM actions required for the BatchDetectDominantLanguage API call.

---

##### `BatchDetectEntities`<sup>Required</sup> <a name="BatchDetectEntities" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectEntities"></a>

```typescript
public readonly BatchDetectEntities: string[];
```

- *Type:* string[]

IAM actions required for the BatchDetectEntities API call.

---

##### `BatchDetectKeyPhrases`<sup>Required</sup> <a name="BatchDetectKeyPhrases" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectKeyPhrases"></a>

```typescript
public readonly BatchDetectKeyPhrases: string[];
```

- *Type:* string[]

IAM actions required for the BatchDetectKeyPhrases API call.

---

##### `BatchDetectSentiment`<sup>Required</sup> <a name="BatchDetectSentiment" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectSentiment"></a>

```typescript
public readonly BatchDetectSentiment: string[];
```

- *Type:* string[]

IAM actions required for the BatchDetectSentiment API call.

---

##### `BatchDetectSyntax`<sup>Required</sup> <a name="BatchDetectSyntax" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectSyntax"></a>

```typescript
public readonly BatchDetectSyntax: string[];
```

- *Type:* string[]

IAM actions required for the BatchDetectSyntax API call.

---

##### `BatchDetectTargetedSentiment`<sup>Required</sup> <a name="BatchDetectTargetedSentiment" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.BatchDetectTargetedSentiment"></a>

```typescript
public readonly BatchDetectTargetedSentiment: string[];
```

- *Type:* string[]

IAM actions required for the BatchDetectTargetedSentiment API call.

---

##### `ClassifyDocument`<sup>Required</sup> <a name="ClassifyDocument" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ClassifyDocument"></a>

```typescript
public readonly ClassifyDocument: string[];
```

- *Type:* string[]

IAM actions required for the ClassifyDocument API call.

---

##### `ContainsPiiEntities`<sup>Required</sup> <a name="ContainsPiiEntities" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ContainsPiiEntities"></a>

```typescript
public readonly ContainsPiiEntities: string[];
```

- *Type:* string[]

IAM actions required for the ContainsPiiEntities API call.

---

##### `CreateDataset`<sup>Required</sup> <a name="CreateDataset" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateDataset"></a>

```typescript
public readonly CreateDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataset API call.

---

##### `CreateDocumentClassifier`<sup>Required</sup> <a name="CreateDocumentClassifier" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateDocumentClassifier"></a>

```typescript
public readonly CreateDocumentClassifier: string[];
```

- *Type:* string[]

IAM actions required for the CreateDocumentClassifier API call.

---

##### `CreateEndpoint`<sup>Required</sup> <a name="CreateEndpoint" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateEndpoint"></a>

```typescript
public readonly CreateEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateEndpoint API call.

---

##### `CreateEntityRecognizer`<sup>Required</sup> <a name="CreateEntityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateEntityRecognizer"></a>

```typescript
public readonly CreateEntityRecognizer: string[];
```

- *Type:* string[]

IAM actions required for the CreateEntityRecognizer API call.

---

##### `CreateFlywheel`<sup>Required</sup> <a name="CreateFlywheel" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.CreateFlywheel"></a>

```typescript
public readonly CreateFlywheel: string[];
```

- *Type:* string[]

IAM actions required for the CreateFlywheel API call.

---

##### `DeleteDocumentClassifier`<sup>Required</sup> <a name="DeleteDocumentClassifier" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteDocumentClassifier"></a>

```typescript
public readonly DeleteDocumentClassifier: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDocumentClassifier API call.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpoint API call.

---

##### `DeleteEntityRecognizer`<sup>Required</sup> <a name="DeleteEntityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteEntityRecognizer"></a>

```typescript
public readonly DeleteEntityRecognizer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEntityRecognizer API call.

---

##### `DeleteFlywheel`<sup>Required</sup> <a name="DeleteFlywheel" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteFlywheel"></a>

```typescript
public readonly DeleteFlywheel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFlywheel API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DescribeDataset`<sup>Required</sup> <a name="DescribeDataset" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeDataset"></a>

```typescript
public readonly DescribeDataset: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDataset API call.

---

##### `DescribeDocumentClassificationJob`<sup>Required</sup> <a name="DescribeDocumentClassificationJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeDocumentClassificationJob"></a>

```typescript
public readonly DescribeDocumentClassificationJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDocumentClassificationJob API call.

---

##### `DescribeDocumentClassifier`<sup>Required</sup> <a name="DescribeDocumentClassifier" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeDocumentClassifier"></a>

```typescript
public readonly DescribeDocumentClassifier: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDocumentClassifier API call.

---

##### `DescribeDominantLanguageDetectionJob`<sup>Required</sup> <a name="DescribeDominantLanguageDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeDominantLanguageDetectionJob"></a>

```typescript
public readonly DescribeDominantLanguageDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDominantLanguageDetectionJob API call.

---

##### `DescribeEndpoint`<sup>Required</sup> <a name="DescribeEndpoint" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeEndpoint"></a>

```typescript
public readonly DescribeEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpoint API call.

---

##### `DescribeEntitiesDetectionJob`<sup>Required</sup> <a name="DescribeEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeEntitiesDetectionJob"></a>

```typescript
public readonly DescribeEntitiesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntitiesDetectionJob API call.

---

##### `DescribeEntityRecognizer`<sup>Required</sup> <a name="DescribeEntityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeEntityRecognizer"></a>

```typescript
public readonly DescribeEntityRecognizer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEntityRecognizer API call.

---

##### `DescribeEventsDetectionJob`<sup>Required</sup> <a name="DescribeEventsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeEventsDetectionJob"></a>

```typescript
public readonly DescribeEventsDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventsDetectionJob API call.

---

##### `DescribeFlywheel`<sup>Required</sup> <a name="DescribeFlywheel" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeFlywheel"></a>

```typescript
public readonly DescribeFlywheel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlywheel API call.

---

##### `DescribeFlywheelIteration`<sup>Required</sup> <a name="DescribeFlywheelIteration" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeFlywheelIteration"></a>

```typescript
public readonly DescribeFlywheelIteration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlywheelIteration API call.

---

##### `DescribeKeyPhrasesDetectionJob`<sup>Required</sup> <a name="DescribeKeyPhrasesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeKeyPhrasesDetectionJob"></a>

```typescript
public readonly DescribeKeyPhrasesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeKeyPhrasesDetectionJob API call.

---

##### `DescribePiiEntitiesDetectionJob`<sup>Required</sup> <a name="DescribePiiEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribePiiEntitiesDetectionJob"></a>

```typescript
public readonly DescribePiiEntitiesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribePiiEntitiesDetectionJob API call.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourcePolicy API call.

---

##### `DescribeSentimentDetectionJob`<sup>Required</sup> <a name="DescribeSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeSentimentDetectionJob"></a>

```typescript
public readonly DescribeSentimentDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSentimentDetectionJob API call.

---

##### `DescribeTargetedSentimentDetectionJob`<sup>Required</sup> <a name="DescribeTargetedSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeTargetedSentimentDetectionJob"></a>

```typescript
public readonly DescribeTargetedSentimentDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTargetedSentimentDetectionJob API call.

---

##### `DescribeTopicsDetectionJob`<sup>Required</sup> <a name="DescribeTopicsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DescribeTopicsDetectionJob"></a>

```typescript
public readonly DescribeTopicsDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTopicsDetectionJob API call.

---

##### `DetectDominantLanguage`<sup>Required</sup> <a name="DetectDominantLanguage" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectDominantLanguage"></a>

```typescript
public readonly DetectDominantLanguage: string[];
```

- *Type:* string[]

IAM actions required for the DetectDominantLanguage API call.

---

##### `DetectEntities`<sup>Required</sup> <a name="DetectEntities" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectEntities"></a>

```typescript
public readonly DetectEntities: string[];
```

- *Type:* string[]

IAM actions required for the DetectEntities API call.

---

##### `DetectKeyPhrases`<sup>Required</sup> <a name="DetectKeyPhrases" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectKeyPhrases"></a>

```typescript
public readonly DetectKeyPhrases: string[];
```

- *Type:* string[]

IAM actions required for the DetectKeyPhrases API call.

---

##### `DetectPiiEntities`<sup>Required</sup> <a name="DetectPiiEntities" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectPiiEntities"></a>

```typescript
public readonly DetectPiiEntities: string[];
```

- *Type:* string[]

IAM actions required for the DetectPiiEntities API call.

---

##### `DetectSentiment`<sup>Required</sup> <a name="DetectSentiment" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectSentiment"></a>

```typescript
public readonly DetectSentiment: string[];
```

- *Type:* string[]

IAM actions required for the DetectSentiment API call.

---

##### `DetectSyntax`<sup>Required</sup> <a name="DetectSyntax" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectSyntax"></a>

```typescript
public readonly DetectSyntax: string[];
```

- *Type:* string[]

IAM actions required for the DetectSyntax API call.

---

##### `DetectTargetedSentiment`<sup>Required</sup> <a name="DetectTargetedSentiment" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectTargetedSentiment"></a>

```typescript
public readonly DetectTargetedSentiment: string[];
```

- *Type:* string[]

IAM actions required for the DetectTargetedSentiment API call.

---

##### `DetectToxicContent`<sup>Required</sup> <a name="DetectToxicContent" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.DetectToxicContent"></a>

```typescript
public readonly DetectToxicContent: string[];
```

- *Type:* string[]

IAM actions required for the DetectToxicContent API call.

---

##### `ImportModel`<sup>Required</sup> <a name="ImportModel" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ImportModel"></a>

```typescript
public readonly ImportModel: string[];
```

- *Type:* string[]

IAM actions required for the ImportModel API call.

---

##### `ListDatasets`<sup>Required</sup> <a name="ListDatasets" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDatasets"></a>

```typescript
public readonly ListDatasets: string[];
```

- *Type:* string[]

IAM actions required for the ListDatasets API call.

---

##### `ListDocumentClassificationJobs`<sup>Required</sup> <a name="ListDocumentClassificationJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDocumentClassificationJobs"></a>

```typescript
public readonly ListDocumentClassificationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDocumentClassificationJobs API call.

---

##### `ListDocumentClassifiers`<sup>Required</sup> <a name="ListDocumentClassifiers" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDocumentClassifiers"></a>

```typescript
public readonly ListDocumentClassifiers: string[];
```

- *Type:* string[]

IAM actions required for the ListDocumentClassifiers API call.

---

##### `ListDocumentClassifierSummaries`<sup>Required</sup> <a name="ListDocumentClassifierSummaries" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDocumentClassifierSummaries"></a>

```typescript
public readonly ListDocumentClassifierSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListDocumentClassifierSummaries API call.

---

##### `ListDominantLanguageDetectionJobs`<sup>Required</sup> <a name="ListDominantLanguageDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListDominantLanguageDetectionJobs"></a>

```typescript
public readonly ListDominantLanguageDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListDominantLanguageDetectionJobs API call.

---

##### `ListEndpoints`<sup>Required</sup> <a name="ListEndpoints" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEndpoints"></a>

```typescript
public readonly ListEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListEndpoints API call.

---

##### `ListEntitiesDetectionJobs`<sup>Required</sup> <a name="ListEntitiesDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEntitiesDetectionJobs"></a>

```typescript
public readonly ListEntitiesDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListEntitiesDetectionJobs API call.

---

##### `ListEntityRecognizers`<sup>Required</sup> <a name="ListEntityRecognizers" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEntityRecognizers"></a>

```typescript
public readonly ListEntityRecognizers: string[];
```

- *Type:* string[]

IAM actions required for the ListEntityRecognizers API call.

---

##### `ListEntityRecognizerSummaries`<sup>Required</sup> <a name="ListEntityRecognizerSummaries" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEntityRecognizerSummaries"></a>

```typescript
public readonly ListEntityRecognizerSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListEntityRecognizerSummaries API call.

---

##### `ListEventsDetectionJobs`<sup>Required</sup> <a name="ListEventsDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListEventsDetectionJobs"></a>

```typescript
public readonly ListEventsDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListEventsDetectionJobs API call.

---

##### `ListFlywheelIterationHistory`<sup>Required</sup> <a name="ListFlywheelIterationHistory" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListFlywheelIterationHistory"></a>

```typescript
public readonly ListFlywheelIterationHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListFlywheelIterationHistory API call.

---

##### `ListFlywheels`<sup>Required</sup> <a name="ListFlywheels" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListFlywheels"></a>

```typescript
public readonly ListFlywheels: string[];
```

- *Type:* string[]

IAM actions required for the ListFlywheels API call.

---

##### `ListKeyPhrasesDetectionJobs`<sup>Required</sup> <a name="ListKeyPhrasesDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListKeyPhrasesDetectionJobs"></a>

```typescript
public readonly ListKeyPhrasesDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListKeyPhrasesDetectionJobs API call.

---

##### `ListPiiEntitiesDetectionJobs`<sup>Required</sup> <a name="ListPiiEntitiesDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListPiiEntitiesDetectionJobs"></a>

```typescript
public readonly ListPiiEntitiesDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListPiiEntitiesDetectionJobs API call.

---

##### `ListSentimentDetectionJobs`<sup>Required</sup> <a name="ListSentimentDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListSentimentDetectionJobs"></a>

```typescript
public readonly ListSentimentDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListSentimentDetectionJobs API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTargetedSentimentDetectionJobs`<sup>Required</sup> <a name="ListTargetedSentimentDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListTargetedSentimentDetectionJobs"></a>

```typescript
public readonly ListTargetedSentimentDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetedSentimentDetectionJobs API call.

---

##### `ListTopicsDetectionJobs`<sup>Required</sup> <a name="ListTopicsDetectionJobs" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.ListTopicsDetectionJobs"></a>

```typescript
public readonly ListTopicsDetectionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListTopicsDetectionJobs API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `StartDocumentClassificationJob`<sup>Required</sup> <a name="StartDocumentClassificationJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartDocumentClassificationJob"></a>

```typescript
public readonly StartDocumentClassificationJob: string[];
```

- *Type:* string[]

IAM actions required for the StartDocumentClassificationJob API call.

---

##### `StartDominantLanguageDetectionJob`<sup>Required</sup> <a name="StartDominantLanguageDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartDominantLanguageDetectionJob"></a>

```typescript
public readonly StartDominantLanguageDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartDominantLanguageDetectionJob API call.

---

##### `StartEntitiesDetectionJob`<sup>Required</sup> <a name="StartEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartEntitiesDetectionJob"></a>

```typescript
public readonly StartEntitiesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartEntitiesDetectionJob API call.

---

##### `StartEventsDetectionJob`<sup>Required</sup> <a name="StartEventsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartEventsDetectionJob"></a>

```typescript
public readonly StartEventsDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartEventsDetectionJob API call.

---

##### `StartFlywheelIteration`<sup>Required</sup> <a name="StartFlywheelIteration" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartFlywheelIteration"></a>

```typescript
public readonly StartFlywheelIteration: string[];
```

- *Type:* string[]

IAM actions required for the StartFlywheelIteration API call.

---

##### `StartKeyPhrasesDetectionJob`<sup>Required</sup> <a name="StartKeyPhrasesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartKeyPhrasesDetectionJob"></a>

```typescript
public readonly StartKeyPhrasesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartKeyPhrasesDetectionJob API call.

---

##### `StartPiiEntitiesDetectionJob`<sup>Required</sup> <a name="StartPiiEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartPiiEntitiesDetectionJob"></a>

```typescript
public readonly StartPiiEntitiesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartPiiEntitiesDetectionJob API call.

---

##### `StartSentimentDetectionJob`<sup>Required</sup> <a name="StartSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartSentimentDetectionJob"></a>

```typescript
public readonly StartSentimentDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartSentimentDetectionJob API call.

---

##### `StartTargetedSentimentDetectionJob`<sup>Required</sup> <a name="StartTargetedSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartTargetedSentimentDetectionJob"></a>

```typescript
public readonly StartTargetedSentimentDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartTargetedSentimentDetectionJob API call.

---

##### `StartTopicsDetectionJob`<sup>Required</sup> <a name="StartTopicsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StartTopicsDetectionJob"></a>

```typescript
public readonly StartTopicsDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartTopicsDetectionJob API call.

---

##### `StopDominantLanguageDetectionJob`<sup>Required</sup> <a name="StopDominantLanguageDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopDominantLanguageDetectionJob"></a>

```typescript
public readonly StopDominantLanguageDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopDominantLanguageDetectionJob API call.

---

##### `StopEntitiesDetectionJob`<sup>Required</sup> <a name="StopEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopEntitiesDetectionJob"></a>

```typescript
public readonly StopEntitiesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopEntitiesDetectionJob API call.

---

##### `StopEventsDetectionJob`<sup>Required</sup> <a name="StopEventsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopEventsDetectionJob"></a>

```typescript
public readonly StopEventsDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopEventsDetectionJob API call.

---

##### `StopKeyPhrasesDetectionJob`<sup>Required</sup> <a name="StopKeyPhrasesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopKeyPhrasesDetectionJob"></a>

```typescript
public readonly StopKeyPhrasesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopKeyPhrasesDetectionJob API call.

---

##### `StopPiiEntitiesDetectionJob`<sup>Required</sup> <a name="StopPiiEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopPiiEntitiesDetectionJob"></a>

```typescript
public readonly StopPiiEntitiesDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopPiiEntitiesDetectionJob API call.

---

##### `StopSentimentDetectionJob`<sup>Required</sup> <a name="StopSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopSentimentDetectionJob"></a>

```typescript
public readonly StopSentimentDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopSentimentDetectionJob API call.

---

##### `StopTargetedSentimentDetectionJob`<sup>Required</sup> <a name="StopTargetedSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopTargetedSentimentDetectionJob"></a>

```typescript
public readonly StopTargetedSentimentDetectionJob: string[];
```

- *Type:* string[]

IAM actions required for the StopTargetedSentimentDetectionJob API call.

---

##### `StopTrainingDocumentClassifier`<sup>Required</sup> <a name="StopTrainingDocumentClassifier" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopTrainingDocumentClassifier"></a>

```typescript
public readonly StopTrainingDocumentClassifier: string[];
```

- *Type:* string[]

IAM actions required for the StopTrainingDocumentClassifier API call.

---

##### `StopTrainingEntityRecognizer`<sup>Required</sup> <a name="StopTrainingEntityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.StopTrainingEntityRecognizer"></a>

```typescript
public readonly StopTrainingEntityRecognizer: string[];
```

- *Type:* string[]

IAM actions required for the StopTrainingEntityRecognizer API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateEndpoint`<sup>Required</sup> <a name="UpdateEndpoint" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.UpdateEndpoint"></a>

```typescript
public readonly UpdateEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEndpoint API call.

---

##### `UpdateFlywheel`<sup>Required</sup> <a name="UpdateFlywheel" id="@cdk_utils/iam.comprehend.ComprehendOperations.property.UpdateFlywheel"></a>

```typescript
public readonly UpdateFlywheel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlywheel API call.

---

### ComprehendResources <a name="ComprehendResources" id="@cdk_utils/iam.comprehend.ComprehendResources"></a>

ARN builders, validators, and parsers for comprehend resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.comprehend.ComprehendResources.Initializer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

new comprehend.ComprehendResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.documentClassificationJob">documentClassificationJob</a></code> | Builds an ARN for the document-classification-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.documentClassifier">documentClassifier</a></code> | Builds an ARN for the document-classifier resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.documentClassifierEndpoint">documentClassifierEndpoint</a></code> | Builds an ARN for the document-classifier-endpoint resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.dominantLanguageDetectionJob">dominantLanguageDetectionJob</a></code> | Builds an ARN for the dominant-language-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.entitiesDetectionJob">entitiesDetectionJob</a></code> | Builds an ARN for the entities-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.entityRecognizer">entityRecognizer</a></code> | Builds an ARN for the entity-recognizer resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.entityRecognizerEndpoint">entityRecognizerEndpoint</a></code> | Builds an ARN for the entity-recognizer-endpoint resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.eventsDetectionJob">eventsDetectionJob</a></code> | Builds an ARN for the events-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.flywheel">flywheel</a></code> | Builds an ARN for the flywheel resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.flywheelDataset">flywheelDataset</a></code> | Builds an ARN for the flywheel-dataset resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassificationJobArn">isValidDocumentClassificationJobArn</a></code> | Validates whether a string is a valid ARN for the document-classification-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassifierArn">isValidDocumentClassifierArn</a></code> | Validates whether a string is a valid ARN for the document-classifier resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassifierEndpointArn">isValidDocumentClassifierEndpointArn</a></code> | Validates whether a string is a valid ARN for the document-classifier-endpoint resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidDominantLanguageDetectionJobArn">isValidDominantLanguageDetectionJobArn</a></code> | Validates whether a string is a valid ARN for the dominant-language-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidEntitiesDetectionJobArn">isValidEntitiesDetectionJobArn</a></code> | Validates whether a string is a valid ARN for the entities-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidEntityRecognizerArn">isValidEntityRecognizerArn</a></code> | Validates whether a string is a valid ARN for the entity-recognizer resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidEntityRecognizerEndpointArn">isValidEntityRecognizerEndpointArn</a></code> | Validates whether a string is a valid ARN for the entity-recognizer-endpoint resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidEventsDetectionJobArn">isValidEventsDetectionJobArn</a></code> | Validates whether a string is a valid ARN for the events-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidFlywheelArn">isValidFlywheelArn</a></code> | Validates whether a string is a valid ARN for the flywheel resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidFlywheelDatasetArn">isValidFlywheelDatasetArn</a></code> | Validates whether a string is a valid ARN for the flywheel-dataset resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidKeyPhrasesDetectionJobArn">isValidKeyPhrasesDetectionJobArn</a></code> | Validates whether a string is a valid ARN for the key-phrases-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidPiiEntitiesDetectionJobArn">isValidPiiEntitiesDetectionJobArn</a></code> | Validates whether a string is a valid ARN for the pii-entities-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidSentimentDetectionJobArn">isValidSentimentDetectionJobArn</a></code> | Validates whether a string is a valid ARN for the sentiment-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidTargetedSentimentDetectionJobArn">isValidTargetedSentimentDetectionJobArn</a></code> | Validates whether a string is a valid ARN for the targeted-sentiment-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.isValidTopicsDetectionJobArn">isValidTopicsDetectionJobArn</a></code> | Validates whether a string is a valid ARN for the topics-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.keyPhrasesDetectionJob">keyPhrasesDetectionJob</a></code> | Builds an ARN for the key-phrases-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassificationJobArn">parseDocumentClassificationJobArn</a></code> | Parses a document-classification-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassifierArn">parseDocumentClassifierArn</a></code> | Parses a document-classifier ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassifierEndpointArn">parseDocumentClassifierEndpointArn</a></code> | Parses a document-classifier-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseDominantLanguageDetectionJobArn">parseDominantLanguageDetectionJobArn</a></code> | Parses a dominant-language-detection-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseEntitiesDetectionJobArn">parseEntitiesDetectionJobArn</a></code> | Parses a entities-detection-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseEntityRecognizerArn">parseEntityRecognizerArn</a></code> | Parses a entity-recognizer ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseEntityRecognizerEndpointArn">parseEntityRecognizerEndpointArn</a></code> | Parses a entity-recognizer-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseEventsDetectionJobArn">parseEventsDetectionJobArn</a></code> | Parses a events-detection-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseFlywheelArn">parseFlywheelArn</a></code> | Parses a flywheel ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseFlywheelDatasetArn">parseFlywheelDatasetArn</a></code> | Parses a flywheel-dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseKeyPhrasesDetectionJobArn">parseKeyPhrasesDetectionJobArn</a></code> | Parses a key-phrases-detection-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parsePiiEntitiesDetectionJobArn">parsePiiEntitiesDetectionJobArn</a></code> | Parses a pii-entities-detection-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseSentimentDetectionJobArn">parseSentimentDetectionJobArn</a></code> | Parses a sentiment-detection-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseTargetedSentimentDetectionJobArn">parseTargetedSentimentDetectionJobArn</a></code> | Parses a targeted-sentiment-detection-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.parseTopicsDetectionJobArn">parseTopicsDetectionJobArn</a></code> | Parses a topics-detection-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.piiEntitiesDetectionJob">piiEntitiesDetectionJob</a></code> | Builds an ARN for the pii-entities-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.sentimentDetectionJob">sentimentDetectionJob</a></code> | Builds an ARN for the sentiment-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.targetedSentimentDetectionJob">targetedSentimentDetectionJob</a></code> | Builds an ARN for the targeted-sentiment-detection-job resource. |
| <code><a href="#@cdk_utils/iam.comprehend.ComprehendResources.topicsDetectionJob">topicsDetectionJob</a></code> | Builds an ARN for the topics-detection-job resource. |

---

##### `documentClassificationJob` <a name="documentClassificationJob" id="@cdk_utils/iam.comprehend.ComprehendResources.documentClassificationJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.documentClassificationJob(props: ComprehendDocumentClassificationJobArnProps)
```

Builds an ARN for the document-classification-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.documentClassificationJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassificationJobArnProps">ComprehendDocumentClassificationJobArnProps</a>

---

##### `documentClassifier` <a name="documentClassifier" id="@cdk_utils/iam.comprehend.ComprehendResources.documentClassifier"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.documentClassifier(props: ComprehendDocumentClassifierArnProps)
```

Builds an ARN for the document-classifier resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.documentClassifier.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierArnProps">ComprehendDocumentClassifierArnProps</a>

---

##### `documentClassifierEndpoint` <a name="documentClassifierEndpoint" id="@cdk_utils/iam.comprehend.ComprehendResources.documentClassifierEndpoint"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.documentClassifierEndpoint(props: ComprehendDocumentClassifierEndpointArnProps)
```

Builds an ARN for the document-classifier-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.documentClassifierEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendDocumentClassifierEndpointArnProps">ComprehendDocumentClassifierEndpointArnProps</a>

---

##### `dominantLanguageDetectionJob` <a name="dominantLanguageDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendResources.dominantLanguageDetectionJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.dominantLanguageDetectionJob(props: ComprehendDominantLanguageDetectionJobArnProps)
```

Builds an ARN for the dominant-language-detection-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.dominantLanguageDetectionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendDominantLanguageDetectionJobArnProps">ComprehendDominantLanguageDetectionJobArnProps</a>

---

##### `entitiesDetectionJob` <a name="entitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendResources.entitiesDetectionJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.entitiesDetectionJob(props: ComprehendEntitiesDetectionJobArnProps)
```

Builds an ARN for the entities-detection-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.entitiesDetectionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendEntitiesDetectionJobArnProps">ComprehendEntitiesDetectionJobArnProps</a>

---

##### `entityRecognizer` <a name="entityRecognizer" id="@cdk_utils/iam.comprehend.ComprehendResources.entityRecognizer"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.entityRecognizer(props: ComprehendEntityRecognizerArnProps)
```

Builds an ARN for the entity-recognizer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.entityRecognizer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerArnProps">ComprehendEntityRecognizerArnProps</a>

---

##### `entityRecognizerEndpoint` <a name="entityRecognizerEndpoint" id="@cdk_utils/iam.comprehend.ComprehendResources.entityRecognizerEndpoint"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.entityRecognizerEndpoint(props: ComprehendEntityRecognizerEndpointArnProps)
```

Builds an ARN for the entity-recognizer-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.entityRecognizerEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendEntityRecognizerEndpointArnProps">ComprehendEntityRecognizerEndpointArnProps</a>

---

##### `eventsDetectionJob` <a name="eventsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendResources.eventsDetectionJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.eventsDetectionJob(props: ComprehendEventsDetectionJobArnProps)
```

Builds an ARN for the events-detection-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.eventsDetectionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendEventsDetectionJobArnProps">ComprehendEventsDetectionJobArnProps</a>

---

##### `flywheel` <a name="flywheel" id="@cdk_utils/iam.comprehend.ComprehendResources.flywheel"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.flywheel(props: ComprehendFlywheelArnProps)
```

Builds an ARN for the flywheel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.flywheel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelArnProps">ComprehendFlywheelArnProps</a>

---

##### `flywheelDataset` <a name="flywheelDataset" id="@cdk_utils/iam.comprehend.ComprehendResources.flywheelDataset"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.flywheelDataset(props: ComprehendFlywheelDatasetArnProps)
```

Builds an ARN for the flywheel-dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.flywheelDataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendFlywheelDatasetArnProps">ComprehendFlywheelDatasetArnProps</a>

---

##### `isValidDocumentClassificationJobArn` <a name="isValidDocumentClassificationJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassificationJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidDocumentClassificationJobArn(arn: string)
```

Validates whether a string is a valid ARN for the document-classification-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassificationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDocumentClassifierArn` <a name="isValidDocumentClassifierArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassifierArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidDocumentClassifierArn(arn: string)
```

Validates whether a string is a valid ARN for the document-classifier resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassifierArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDocumentClassifierEndpointArn` <a name="isValidDocumentClassifierEndpointArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassifierEndpointArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidDocumentClassifierEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the document-classifier-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidDocumentClassifierEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDominantLanguageDetectionJobArn` <a name="isValidDominantLanguageDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidDominantLanguageDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidDominantLanguageDetectionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the dominant-language-detection-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidDominantLanguageDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntitiesDetectionJobArn` <a name="isValidEntitiesDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidEntitiesDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidEntitiesDetectionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the entities-detection-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidEntitiesDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntityRecognizerArn` <a name="isValidEntityRecognizerArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidEntityRecognizerArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidEntityRecognizerArn(arn: string)
```

Validates whether a string is a valid ARN for the entity-recognizer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidEntityRecognizerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEntityRecognizerEndpointArn` <a name="isValidEntityRecognizerEndpointArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidEntityRecognizerEndpointArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidEntityRecognizerEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the entity-recognizer-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidEntityRecognizerEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventsDetectionJobArn` <a name="isValidEventsDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidEventsDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidEventsDetectionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the events-detection-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidEventsDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFlywheelArn` <a name="isValidFlywheelArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidFlywheelArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidFlywheelArn(arn: string)
```

Validates whether a string is a valid ARN for the flywheel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidFlywheelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFlywheelDatasetArn` <a name="isValidFlywheelDatasetArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidFlywheelDatasetArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidFlywheelDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the flywheel-dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidFlywheelDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidKeyPhrasesDetectionJobArn` <a name="isValidKeyPhrasesDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidKeyPhrasesDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidKeyPhrasesDetectionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the key-phrases-detection-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidKeyPhrasesDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPiiEntitiesDetectionJobArn` <a name="isValidPiiEntitiesDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidPiiEntitiesDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidPiiEntitiesDetectionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the pii-entities-detection-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidPiiEntitiesDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSentimentDetectionJobArn` <a name="isValidSentimentDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidSentimentDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidSentimentDetectionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the sentiment-detection-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidSentimentDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTargetedSentimentDetectionJobArn` <a name="isValidTargetedSentimentDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidTargetedSentimentDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidTargetedSentimentDetectionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the targeted-sentiment-detection-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidTargetedSentimentDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTopicsDetectionJobArn` <a name="isValidTopicsDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidTopicsDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.isValidTopicsDetectionJobArn(arn: string)
```

Validates whether a string is a valid ARN for the topics-detection-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.isValidTopicsDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `keyPhrasesDetectionJob` <a name="keyPhrasesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendResources.keyPhrasesDetectionJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.keyPhrasesDetectionJob(props: ComprehendKeyPhrasesDetectionJobArnProps)
```

Builds an ARN for the key-phrases-detection-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.keyPhrasesDetectionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendKeyPhrasesDetectionJobArnProps">ComprehendKeyPhrasesDetectionJobArnProps</a>

---

##### `parseDocumentClassificationJobArn` <a name="parseDocumentClassificationJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassificationJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseDocumentClassificationJobArn(arn: string)
```

Parses a document-classification-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassificationJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDocumentClassifierArn` <a name="parseDocumentClassifierArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassifierArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseDocumentClassifierArn(arn: string)
```

Parses a document-classifier ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassifierArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDocumentClassifierEndpointArn` <a name="parseDocumentClassifierEndpointArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassifierEndpointArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseDocumentClassifierEndpointArn(arn: string)
```

Parses a document-classifier-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseDocumentClassifierEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDominantLanguageDetectionJobArn` <a name="parseDominantLanguageDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseDominantLanguageDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseDominantLanguageDetectionJobArn(arn: string)
```

Parses a dominant-language-detection-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseDominantLanguageDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntitiesDetectionJobArn` <a name="parseEntitiesDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseEntitiesDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseEntitiesDetectionJobArn(arn: string)
```

Parses a entities-detection-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseEntitiesDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntityRecognizerArn` <a name="parseEntityRecognizerArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseEntityRecognizerArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseEntityRecognizerArn(arn: string)
```

Parses a entity-recognizer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseEntityRecognizerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEntityRecognizerEndpointArn` <a name="parseEntityRecognizerEndpointArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseEntityRecognizerEndpointArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseEntityRecognizerEndpointArn(arn: string)
```

Parses a entity-recognizer-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseEntityRecognizerEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventsDetectionJobArn` <a name="parseEventsDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseEventsDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseEventsDetectionJobArn(arn: string)
```

Parses a events-detection-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseEventsDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFlywheelArn` <a name="parseFlywheelArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseFlywheelArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseFlywheelArn(arn: string)
```

Parses a flywheel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseFlywheelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFlywheelDatasetArn` <a name="parseFlywheelDatasetArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseFlywheelDatasetArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseFlywheelDatasetArn(arn: string)
```

Parses a flywheel-dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseFlywheelDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseKeyPhrasesDetectionJobArn` <a name="parseKeyPhrasesDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseKeyPhrasesDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseKeyPhrasesDetectionJobArn(arn: string)
```

Parses a key-phrases-detection-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseKeyPhrasesDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePiiEntitiesDetectionJobArn` <a name="parsePiiEntitiesDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parsePiiEntitiesDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parsePiiEntitiesDetectionJobArn(arn: string)
```

Parses a pii-entities-detection-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parsePiiEntitiesDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSentimentDetectionJobArn` <a name="parseSentimentDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseSentimentDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseSentimentDetectionJobArn(arn: string)
```

Parses a sentiment-detection-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseSentimentDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTargetedSentimentDetectionJobArn` <a name="parseTargetedSentimentDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseTargetedSentimentDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseTargetedSentimentDetectionJobArn(arn: string)
```

Parses a targeted-sentiment-detection-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseTargetedSentimentDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTopicsDetectionJobArn` <a name="parseTopicsDetectionJobArn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseTopicsDetectionJobArn"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.parseTopicsDetectionJobArn(arn: string)
```

Parses a topics-detection-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.comprehend.ComprehendResources.parseTopicsDetectionJobArn.parameter.arn"></a>

- *Type:* string

---

##### `piiEntitiesDetectionJob` <a name="piiEntitiesDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendResources.piiEntitiesDetectionJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.piiEntitiesDetectionJob(props: ComprehendPiiEntitiesDetectionJobArnProps)
```

Builds an ARN for the pii-entities-detection-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.piiEntitiesDetectionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendPiiEntitiesDetectionJobArnProps">ComprehendPiiEntitiesDetectionJobArnProps</a>

---

##### `sentimentDetectionJob` <a name="sentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendResources.sentimentDetectionJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.sentimentDetectionJob(props: ComprehendSentimentDetectionJobArnProps)
```

Builds an ARN for the sentiment-detection-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.sentimentDetectionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendSentimentDetectionJobArnProps">ComprehendSentimentDetectionJobArnProps</a>

---

##### `targetedSentimentDetectionJob` <a name="targetedSentimentDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendResources.targetedSentimentDetectionJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.targetedSentimentDetectionJob(props: ComprehendTargetedSentimentDetectionJobArnProps)
```

Builds an ARN for the targeted-sentiment-detection-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.targetedSentimentDetectionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendTargetedSentimentDetectionJobArnProps">ComprehendTargetedSentimentDetectionJobArnProps</a>

---

##### `topicsDetectionJob` <a name="topicsDetectionJob" id="@cdk_utils/iam.comprehend.ComprehendResources.topicsDetectionJob"></a>

```typescript
import { comprehend } from '@cdk_utils/iam'

comprehend.ComprehendResources.topicsDetectionJob(props: ComprehendTopicsDetectionJobArnProps)
```

Builds an ARN for the topics-detection-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.comprehend.ComprehendResources.topicsDetectionJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.comprehend.ComprehendTopicsDetectionJobArnProps">ComprehendTopicsDetectionJobArnProps</a>

---




