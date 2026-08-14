# `transcribe` Submodule <a name="`transcribe` Submodule" id="@cdk_utils/iam.transcribe"></a>


## Structs <a name="Structs" id="Structs"></a>

### TranscribeCallanalyticscategoryArnComponents <a name="TranscribeCallanalyticscategoryArnComponents" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents"></a>

Parsed components of a callanalyticscategory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeCallanalyticscategoryArnComponents: transcribe.TranscribeCallanalyticscategoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.property.categoryName">categoryName</a></code> | <code>string</code> | The CategoryName component. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

The CategoryName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TranscribeCallanalyticscategoryArnProps <a name="TranscribeCallanalyticscategoryArnProps" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps"></a>

Properties for building a callanalyticscategory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeCallanalyticscategoryArnProps: transcribe.TranscribeCallanalyticscategoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.property.categoryName">categoryName</a></code> | <code>string</code> | The CategoryName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `categoryName`<sup>Required</sup> <a name="categoryName" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.property.categoryName"></a>

```typescript
public readonly categoryName: string;
```

- *Type:* string

The CategoryName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranscribeCallanalyticsjobArnComponents <a name="TranscribeCallanalyticsjobArnComponents" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents"></a>

Parsed components of a callanalyticsjob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeCallanalyticsjobArnComponents: transcribe.TranscribeCallanalyticsjobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.property.jobName">jobName</a></code> | <code>string</code> | The JobName component. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TranscribeCallanalyticsjobArnProps <a name="TranscribeCallanalyticsjobArnProps" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps"></a>

Properties for building a callanalyticsjob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeCallanalyticsjobArnProps: transcribe.TranscribeCallanalyticsjobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.property.jobName">jobName</a></code> | <code>string</code> | The JobName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranscribeLanguagemodelArnComponents <a name="TranscribeLanguagemodelArnComponents" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents"></a>

Parsed components of a languagemodel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeLanguagemodelArnComponents: transcribe.TranscribeLanguagemodelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TranscribeLanguagemodelArnProps <a name="TranscribeLanguagemodelArnProps" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps"></a>

Properties for building a languagemodel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeLanguagemodelArnProps: transcribe.TranscribeLanguagemodelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.property.modelName">modelName</a></code> | <code>string</code> | The ModelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `modelName`<sup>Required</sup> <a name="modelName" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.property.modelName"></a>

```typescript
public readonly modelName: string;
```

- *Type:* string

The ModelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranscribeMedicalscribejobArnComponents <a name="TranscribeMedicalscribejobArnComponents" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents"></a>

Parsed components of a medicalscribejob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeMedicalscribejobArnComponents: transcribe.TranscribeMedicalscribejobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.property.jobName">jobName</a></code> | <code>string</code> | The JobName component. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TranscribeMedicalscribejobArnProps <a name="TranscribeMedicalscribejobArnProps" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps"></a>

Properties for building a medicalscribejob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeMedicalscribejobArnProps: transcribe.TranscribeMedicalscribejobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.property.jobName">jobName</a></code> | <code>string</code> | The JobName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranscribeMedicaltranscriptionjobArnComponents <a name="TranscribeMedicaltranscriptionjobArnComponents" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents"></a>

Parsed components of a medicaltranscriptionjob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeMedicaltranscriptionjobArnComponents: transcribe.TranscribeMedicaltranscriptionjobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.property.jobName">jobName</a></code> | <code>string</code> | The JobName component. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TranscribeMedicaltranscriptionjobArnProps <a name="TranscribeMedicaltranscriptionjobArnProps" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps"></a>

Properties for building a medicaltranscriptionjob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeMedicaltranscriptionjobArnProps: transcribe.TranscribeMedicaltranscriptionjobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.property.jobName">jobName</a></code> | <code>string</code> | The JobName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranscribeMedicalvocabularyArnComponents <a name="TranscribeMedicalvocabularyArnComponents" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents"></a>

Parsed components of a medicalvocabulary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeMedicalvocabularyArnComponents: transcribe.TranscribeMedicalvocabularyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | The VocabularyName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnComponents.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

The VocabularyName component.

---

### TranscribeMedicalvocabularyArnProps <a name="TranscribeMedicalvocabularyArnProps" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps"></a>

Properties for building a medicalvocabulary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeMedicalvocabularyArnProps: transcribe.TranscribeMedicalvocabularyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | The VocabularyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

The VocabularyName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranscribeTranscriptionjobArnComponents <a name="TranscribeTranscriptionjobArnComponents" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents"></a>

Parsed components of a transcriptionjob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeTranscriptionjobArnComponents: transcribe.TranscribeTranscriptionjobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.property.jobName">jobName</a></code> | <code>string</code> | The JobName component. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TranscribeTranscriptionjobArnProps <a name="TranscribeTranscriptionjobArnProps" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps"></a>

Properties for building a transcriptionjob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeTranscriptionjobArnProps: transcribe.TranscribeTranscriptionjobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.property.jobName">jobName</a></code> | <code>string</code> | The JobName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The JobName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranscribeVocabularyArnComponents <a name="TranscribeVocabularyArnComponents" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents"></a>

Parsed components of a vocabulary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeVocabularyArnComponents: transcribe.TranscribeVocabularyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | The VocabularyName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnComponents.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

The VocabularyName component.

---

### TranscribeVocabularyArnProps <a name="TranscribeVocabularyArnProps" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps"></a>

Properties for building a vocabulary ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeVocabularyArnProps: transcribe.TranscribeVocabularyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.property.vocabularyName">vocabularyName</a></code> | <code>string</code> | The VocabularyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vocabularyName`<sup>Required</sup> <a name="vocabularyName" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.property.vocabularyName"></a>

```typescript
public readonly vocabularyName: string;
```

- *Type:* string

The VocabularyName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranscribeVocabularyfilterArnComponents <a name="TranscribeVocabularyfilterArnComponents" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents"></a>

Parsed components of a vocabularyfilter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeVocabularyfilterArnComponents: transcribe.TranscribeVocabularyfilterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | The VocabularyFilterName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnComponents.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

The VocabularyFilterName component.

---

### TranscribeVocabularyfilterArnProps <a name="TranscribeVocabularyfilterArnProps" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps"></a>

Properties for building a vocabularyfilter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

const transcribeVocabularyfilterArnProps: transcribe.TranscribeVocabularyfilterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.property.vocabularyFilterName">vocabularyFilterName</a></code> | <code>string</code> | The VocabularyFilterName component of the ARN. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vocabularyFilterName`<sup>Required</sup> <a name="vocabularyFilterName" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.property.vocabularyFilterName"></a>

```typescript
public readonly vocabularyFilterName: string;
```

- *Type:* string

The VocabularyFilterName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TranscribeActions <a name="TranscribeActions" id="@cdk_utils/iam.transcribe.TranscribeActions"></a>

IAM action constants for the transcribe service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transcribe.TranscribeActions.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

new transcribe.TranscribeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetCallAnalyticsCategory">actionGetCallAnalyticsCategory</a></code> | <code>string</code> | [Read] transcribe:GetCallAnalyticsCategory. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetCallAnalyticsJob">actionGetCallAnalyticsJob</a></code> | <code>string</code> | [Read] transcribe:GetCallAnalyticsJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetMedicalScribeJob">actionGetMedicalScribeJob</a></code> | <code>string</code> | [Read] transcribe:GetMedicalScribeJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetMedicalScribeStream">actionGetMedicalScribeStream</a></code> | <code>string</code> | [Read] transcribe:GetMedicalScribeStream. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetMedicalTranscriptionJob">actionGetMedicalTranscriptionJob</a></code> | <code>string</code> | [Read] transcribe:GetMedicalTranscriptionJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetMedicalVocabulary">actionGetMedicalVocabulary</a></code> | <code>string</code> | [Read] transcribe:GetMedicalVocabulary. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetTranscriptionJob">actionGetTranscriptionJob</a></code> | <code>string</code> | [Read] transcribe:GetTranscriptionJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetVocabulary">actionGetVocabulary</a></code> | <code>string</code> | [Read] transcribe:GetVocabulary. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetVocabularyFilter">actionGetVocabularyFilter</a></code> | <code>string</code> | [Read] transcribe:GetVocabularyFilter. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.CreateCallAnalyticsCategory">CreateCallAnalyticsCategory</a></code> | <code>string</code> | [Write] transcribe:CreateCallAnalyticsCategory. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.CreateLanguageModel">CreateLanguageModel</a></code> | <code>string</code> | [Write] transcribe:CreateLanguageModel. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.CreateMedicalVocabulary">CreateMedicalVocabulary</a></code> | <code>string</code> | [Write] transcribe:CreateMedicalVocabulary. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.CreateVocabulary">CreateVocabulary</a></code> | <code>string</code> | [Write] transcribe:CreateVocabulary. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.CreateVocabularyFilter">CreateVocabularyFilter</a></code> | <code>string</code> | [Write] transcribe:CreateVocabularyFilter. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteCallAnalyticsCategory">DeleteCallAnalyticsCategory</a></code> | <code>string</code> | [Write] transcribe:DeleteCallAnalyticsCategory. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteCallAnalyticsJob">DeleteCallAnalyticsJob</a></code> | <code>string</code> | [Write] transcribe:DeleteCallAnalyticsJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteLanguageModel">DeleteLanguageModel</a></code> | <code>string</code> | [Write] transcribe:DeleteLanguageModel. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteMedicalScribeJob">DeleteMedicalScribeJob</a></code> | <code>string</code> | [Write] transcribe:DeleteMedicalScribeJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteMedicalTranscriptionJob">DeleteMedicalTranscriptionJob</a></code> | <code>string</code> | [Write] transcribe:DeleteMedicalTranscriptionJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteMedicalVocabulary">DeleteMedicalVocabulary</a></code> | <code>string</code> | [Write] transcribe:DeleteMedicalVocabulary. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteTranscriptionJob">DeleteTranscriptionJob</a></code> | <code>string</code> | [Write] transcribe:DeleteTranscriptionJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteVocabulary">DeleteVocabulary</a></code> | <code>string</code> | [Write] transcribe:DeleteVocabulary. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteVocabularyFilter">DeleteVocabularyFilter</a></code> | <code>string</code> | [Write] transcribe:DeleteVocabularyFilter. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.DescribeLanguageModel">DescribeLanguageModel</a></code> | <code>string</code> | [Read] transcribe:DescribeLanguageModel. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListCallAnalyticsCategories">ListCallAnalyticsCategories</a></code> | <code>string</code> | [List] transcribe:ListCallAnalyticsCategories. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListCallAnalyticsJobs">ListCallAnalyticsJobs</a></code> | <code>string</code> | [List] transcribe:ListCallAnalyticsJobs. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListLanguageModels">ListLanguageModels</a></code> | <code>string</code> | [List] transcribe:ListLanguageModels. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListMedicalScribeJobs">ListMedicalScribeJobs</a></code> | <code>string</code> | [List] transcribe:ListMedicalScribeJobs. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListMedicalTranscriptionJobs">ListMedicalTranscriptionJobs</a></code> | <code>string</code> | [List] transcribe:ListMedicalTranscriptionJobs. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListMedicalVocabularies">ListMedicalVocabularies</a></code> | <code>string</code> | [List] transcribe:ListMedicalVocabularies. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] transcribe:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListTranscriptionJobs">ListTranscriptionJobs</a></code> | <code>string</code> | [List] transcribe:ListTranscriptionJobs. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListVocabularies">ListVocabularies</a></code> | <code>string</code> | [List] transcribe:ListVocabularies. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.ListVocabularyFilters">ListVocabularyFilters</a></code> | <code>string</code> | [List] transcribe:ListVocabularyFilters. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartCallAnalyticsJob">StartCallAnalyticsJob</a></code> | <code>string</code> | [Write] transcribe:StartCallAnalyticsJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartCallAnalyticsStreamTranscription">StartCallAnalyticsStreamTranscription</a></code> | <code>string</code> | [Write] transcribe:StartCallAnalyticsStreamTranscription. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartCallAnalyticsStreamTranscriptionWebSocket">StartCallAnalyticsStreamTranscriptionWebSocket</a></code> | <code>string</code> | [Write] transcribe:StartCallAnalyticsStreamTranscriptionWebSocket. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalScribeJob">StartMedicalScribeJob</a></code> | <code>string</code> | [Write] transcribe:StartMedicalScribeJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalScribeStream">StartMedicalScribeStream</a></code> | <code>string</code> | [Write] transcribe:StartMedicalScribeStream. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalStreamTranscription">StartMedicalStreamTranscription</a></code> | <code>string</code> | [Write] transcribe:StartMedicalStreamTranscription. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalStreamTranscriptionWebSocket">StartMedicalStreamTranscriptionWebSocket</a></code> | <code>string</code> | [Write] transcribe:StartMedicalStreamTranscriptionWebSocket. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalTranscriptionJob">StartMedicalTranscriptionJob</a></code> | <code>string</code> | [Write] transcribe:StartMedicalTranscriptionJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartStreamTranscription">StartStreamTranscription</a></code> | <code>string</code> | [Write] transcribe:StartStreamTranscription. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartStreamTranscriptionWebSocket">StartStreamTranscriptionWebSocket</a></code> | <code>string</code> | [Write] transcribe:StartStreamTranscriptionWebSocket. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.StartTranscriptionJob">StartTranscriptionJob</a></code> | <code>string</code> | [Write] transcribe:StartTranscriptionJob. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] transcribe:TagResource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] transcribe:UntagResource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.UpdateCallAnalyticsCategory">UpdateCallAnalyticsCategory</a></code> | <code>string</code> | [Write] transcribe:UpdateCallAnalyticsCategory. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.UpdateMedicalVocabulary">UpdateMedicalVocabulary</a></code> | <code>string</code> | [Write] transcribe:UpdateMedicalVocabulary. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.UpdateVocabulary">UpdateVocabulary</a></code> | <code>string</code> | [Write] transcribe:UpdateVocabulary. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeActions.property.UpdateVocabularyFilter">UpdateVocabularyFilter</a></code> | <code>string</code> | [Write] transcribe:UpdateVocabularyFilter. |

---

##### `actionGetCallAnalyticsCategory`<sup>Required</sup> <a name="actionGetCallAnalyticsCategory" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetCallAnalyticsCategory"></a>

```typescript
public readonly actionGetCallAnalyticsCategory: string;
```

- *Type:* string

[Read] transcribe:GetCallAnalyticsCategory.

---

##### `actionGetCallAnalyticsJob`<sup>Required</sup> <a name="actionGetCallAnalyticsJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetCallAnalyticsJob"></a>

```typescript
public readonly actionGetCallAnalyticsJob: string;
```

- *Type:* string

[Read] transcribe:GetCallAnalyticsJob.

---

##### `actionGetMedicalScribeJob`<sup>Required</sup> <a name="actionGetMedicalScribeJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetMedicalScribeJob"></a>

```typescript
public readonly actionGetMedicalScribeJob: string;
```

- *Type:* string

[Read] transcribe:GetMedicalScribeJob.

---

##### `actionGetMedicalScribeStream`<sup>Required</sup> <a name="actionGetMedicalScribeStream" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetMedicalScribeStream"></a>

```typescript
public readonly actionGetMedicalScribeStream: string;
```

- *Type:* string

[Read] transcribe:GetMedicalScribeStream.

---

##### `actionGetMedicalTranscriptionJob`<sup>Required</sup> <a name="actionGetMedicalTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetMedicalTranscriptionJob"></a>

```typescript
public readonly actionGetMedicalTranscriptionJob: string;
```

- *Type:* string

[Read] transcribe:GetMedicalTranscriptionJob.

---

##### `actionGetMedicalVocabulary`<sup>Required</sup> <a name="actionGetMedicalVocabulary" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetMedicalVocabulary"></a>

```typescript
public readonly actionGetMedicalVocabulary: string;
```

- *Type:* string

[Read] transcribe:GetMedicalVocabulary.

---

##### `actionGetTranscriptionJob`<sup>Required</sup> <a name="actionGetTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetTranscriptionJob"></a>

```typescript
public readonly actionGetTranscriptionJob: string;
```

- *Type:* string

[Read] transcribe:GetTranscriptionJob.

---

##### `actionGetVocabulary`<sup>Required</sup> <a name="actionGetVocabulary" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetVocabulary"></a>

```typescript
public readonly actionGetVocabulary: string;
```

- *Type:* string

[Read] transcribe:GetVocabulary.

---

##### `actionGetVocabularyFilter`<sup>Required</sup> <a name="actionGetVocabularyFilter" id="@cdk_utils/iam.transcribe.TranscribeActions.property.actionGetVocabularyFilter"></a>

```typescript
public readonly actionGetVocabularyFilter: string;
```

- *Type:* string

[Read] transcribe:GetVocabularyFilter.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.transcribe.TranscribeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.transcribe.TranscribeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.transcribe.TranscribeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.transcribe.TranscribeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.transcribe.TranscribeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCallAnalyticsCategory`<sup>Required</sup> <a name="CreateCallAnalyticsCategory" id="@cdk_utils/iam.transcribe.TranscribeActions.property.CreateCallAnalyticsCategory"></a>

```typescript
public readonly CreateCallAnalyticsCategory: string;
```

- *Type:* string

[Write] transcribe:CreateCallAnalyticsCategory.

---

##### `CreateLanguageModel`<sup>Required</sup> <a name="CreateLanguageModel" id="@cdk_utils/iam.transcribe.TranscribeActions.property.CreateLanguageModel"></a>

```typescript
public readonly CreateLanguageModel: string;
```

- *Type:* string

[Write] transcribe:CreateLanguageModel.

---

##### `CreateMedicalVocabulary`<sup>Required</sup> <a name="CreateMedicalVocabulary" id="@cdk_utils/iam.transcribe.TranscribeActions.property.CreateMedicalVocabulary"></a>

```typescript
public readonly CreateMedicalVocabulary: string;
```

- *Type:* string

[Write] transcribe:CreateMedicalVocabulary.

---

##### `CreateVocabulary`<sup>Required</sup> <a name="CreateVocabulary" id="@cdk_utils/iam.transcribe.TranscribeActions.property.CreateVocabulary"></a>

```typescript
public readonly CreateVocabulary: string;
```

- *Type:* string

[Write] transcribe:CreateVocabulary.

---

##### `CreateVocabularyFilter`<sup>Required</sup> <a name="CreateVocabularyFilter" id="@cdk_utils/iam.transcribe.TranscribeActions.property.CreateVocabularyFilter"></a>

```typescript
public readonly CreateVocabularyFilter: string;
```

- *Type:* string

[Write] transcribe:CreateVocabularyFilter.

---

##### `DeleteCallAnalyticsCategory`<sup>Required</sup> <a name="DeleteCallAnalyticsCategory" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteCallAnalyticsCategory"></a>

```typescript
public readonly DeleteCallAnalyticsCategory: string;
```

- *Type:* string

[Write] transcribe:DeleteCallAnalyticsCategory.

---

##### `DeleteCallAnalyticsJob`<sup>Required</sup> <a name="DeleteCallAnalyticsJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteCallAnalyticsJob"></a>

```typescript
public readonly DeleteCallAnalyticsJob: string;
```

- *Type:* string

[Write] transcribe:DeleteCallAnalyticsJob.

---

##### `DeleteLanguageModel`<sup>Required</sup> <a name="DeleteLanguageModel" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteLanguageModel"></a>

```typescript
public readonly DeleteLanguageModel: string;
```

- *Type:* string

[Write] transcribe:DeleteLanguageModel.

---

##### `DeleteMedicalScribeJob`<sup>Required</sup> <a name="DeleteMedicalScribeJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteMedicalScribeJob"></a>

```typescript
public readonly DeleteMedicalScribeJob: string;
```

- *Type:* string

[Write] transcribe:DeleteMedicalScribeJob.

---

##### `DeleteMedicalTranscriptionJob`<sup>Required</sup> <a name="DeleteMedicalTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteMedicalTranscriptionJob"></a>

```typescript
public readonly DeleteMedicalTranscriptionJob: string;
```

- *Type:* string

[Write] transcribe:DeleteMedicalTranscriptionJob.

---

##### `DeleteMedicalVocabulary`<sup>Required</sup> <a name="DeleteMedicalVocabulary" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteMedicalVocabulary"></a>

```typescript
public readonly DeleteMedicalVocabulary: string;
```

- *Type:* string

[Write] transcribe:DeleteMedicalVocabulary.

---

##### `DeleteTranscriptionJob`<sup>Required</sup> <a name="DeleteTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteTranscriptionJob"></a>

```typescript
public readonly DeleteTranscriptionJob: string;
```

- *Type:* string

[Write] transcribe:DeleteTranscriptionJob.

---

##### `DeleteVocabulary`<sup>Required</sup> <a name="DeleteVocabulary" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteVocabulary"></a>

```typescript
public readonly DeleteVocabulary: string;
```

- *Type:* string

[Write] transcribe:DeleteVocabulary.

---

##### `DeleteVocabularyFilter`<sup>Required</sup> <a name="DeleteVocabularyFilter" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DeleteVocabularyFilter"></a>

```typescript
public readonly DeleteVocabularyFilter: string;
```

- *Type:* string

[Write] transcribe:DeleteVocabularyFilter.

---

##### `DescribeLanguageModel`<sup>Required</sup> <a name="DescribeLanguageModel" id="@cdk_utils/iam.transcribe.TranscribeActions.property.DescribeLanguageModel"></a>

```typescript
public readonly DescribeLanguageModel: string;
```

- *Type:* string

[Read] transcribe:DescribeLanguageModel.

---

##### `ListCallAnalyticsCategories`<sup>Required</sup> <a name="ListCallAnalyticsCategories" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListCallAnalyticsCategories"></a>

```typescript
public readonly ListCallAnalyticsCategories: string;
```

- *Type:* string

[List] transcribe:ListCallAnalyticsCategories.

---

##### `ListCallAnalyticsJobs`<sup>Required</sup> <a name="ListCallAnalyticsJobs" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListCallAnalyticsJobs"></a>

```typescript
public readonly ListCallAnalyticsJobs: string;
```

- *Type:* string

[List] transcribe:ListCallAnalyticsJobs.

---

##### `ListLanguageModels`<sup>Required</sup> <a name="ListLanguageModels" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListLanguageModels"></a>

```typescript
public readonly ListLanguageModels: string;
```

- *Type:* string

[List] transcribe:ListLanguageModels.

---

##### `ListMedicalScribeJobs`<sup>Required</sup> <a name="ListMedicalScribeJobs" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListMedicalScribeJobs"></a>

```typescript
public readonly ListMedicalScribeJobs: string;
```

- *Type:* string

[List] transcribe:ListMedicalScribeJobs.

---

##### `ListMedicalTranscriptionJobs`<sup>Required</sup> <a name="ListMedicalTranscriptionJobs" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListMedicalTranscriptionJobs"></a>

```typescript
public readonly ListMedicalTranscriptionJobs: string;
```

- *Type:* string

[List] transcribe:ListMedicalTranscriptionJobs.

---

##### `ListMedicalVocabularies`<sup>Required</sup> <a name="ListMedicalVocabularies" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListMedicalVocabularies"></a>

```typescript
public readonly ListMedicalVocabularies: string;
```

- *Type:* string

[List] transcribe:ListMedicalVocabularies.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] transcribe:ListTagsForResource.

---

##### `ListTranscriptionJobs`<sup>Required</sup> <a name="ListTranscriptionJobs" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListTranscriptionJobs"></a>

```typescript
public readonly ListTranscriptionJobs: string;
```

- *Type:* string

[List] transcribe:ListTranscriptionJobs.

---

##### `ListVocabularies`<sup>Required</sup> <a name="ListVocabularies" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListVocabularies"></a>

```typescript
public readonly ListVocabularies: string;
```

- *Type:* string

[List] transcribe:ListVocabularies.

---

##### `ListVocabularyFilters`<sup>Required</sup> <a name="ListVocabularyFilters" id="@cdk_utils/iam.transcribe.TranscribeActions.property.ListVocabularyFilters"></a>

```typescript
public readonly ListVocabularyFilters: string;
```

- *Type:* string

[List] transcribe:ListVocabularyFilters.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.transcribe.TranscribeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCallAnalyticsJob`<sup>Required</sup> <a name="StartCallAnalyticsJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartCallAnalyticsJob"></a>

```typescript
public readonly StartCallAnalyticsJob: string;
```

- *Type:* string

[Write] transcribe:StartCallAnalyticsJob.

---

##### `StartCallAnalyticsStreamTranscription`<sup>Required</sup> <a name="StartCallAnalyticsStreamTranscription" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartCallAnalyticsStreamTranscription"></a>

```typescript
public readonly StartCallAnalyticsStreamTranscription: string;
```

- *Type:* string

[Write] transcribe:StartCallAnalyticsStreamTranscription.

---

##### `StartCallAnalyticsStreamTranscriptionWebSocket`<sup>Required</sup> <a name="StartCallAnalyticsStreamTranscriptionWebSocket" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartCallAnalyticsStreamTranscriptionWebSocket"></a>

```typescript
public readonly StartCallAnalyticsStreamTranscriptionWebSocket: string;
```

- *Type:* string

[Write] transcribe:StartCallAnalyticsStreamTranscriptionWebSocket.

---

##### `StartMedicalScribeJob`<sup>Required</sup> <a name="StartMedicalScribeJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalScribeJob"></a>

```typescript
public readonly StartMedicalScribeJob: string;
```

- *Type:* string

[Write] transcribe:StartMedicalScribeJob.

---

##### `StartMedicalScribeStream`<sup>Required</sup> <a name="StartMedicalScribeStream" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalScribeStream"></a>

```typescript
public readonly StartMedicalScribeStream: string;
```

- *Type:* string

[Write] transcribe:StartMedicalScribeStream.

---

##### `StartMedicalStreamTranscription`<sup>Required</sup> <a name="StartMedicalStreamTranscription" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalStreamTranscription"></a>

```typescript
public readonly StartMedicalStreamTranscription: string;
```

- *Type:* string

[Write] transcribe:StartMedicalStreamTranscription.

---

##### `StartMedicalStreamTranscriptionWebSocket`<sup>Required</sup> <a name="StartMedicalStreamTranscriptionWebSocket" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalStreamTranscriptionWebSocket"></a>

```typescript
public readonly StartMedicalStreamTranscriptionWebSocket: string;
```

- *Type:* string

[Write] transcribe:StartMedicalStreamTranscriptionWebSocket.

---

##### `StartMedicalTranscriptionJob`<sup>Required</sup> <a name="StartMedicalTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartMedicalTranscriptionJob"></a>

```typescript
public readonly StartMedicalTranscriptionJob: string;
```

- *Type:* string

[Write] transcribe:StartMedicalTranscriptionJob.

---

##### `StartStreamTranscription`<sup>Required</sup> <a name="StartStreamTranscription" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartStreamTranscription"></a>

```typescript
public readonly StartStreamTranscription: string;
```

- *Type:* string

[Write] transcribe:StartStreamTranscription.

---

##### `StartStreamTranscriptionWebSocket`<sup>Required</sup> <a name="StartStreamTranscriptionWebSocket" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartStreamTranscriptionWebSocket"></a>

```typescript
public readonly StartStreamTranscriptionWebSocket: string;
```

- *Type:* string

[Write] transcribe:StartStreamTranscriptionWebSocket.

---

##### `StartTranscriptionJob`<sup>Required</sup> <a name="StartTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeActions.property.StartTranscriptionJob"></a>

```typescript
public readonly StartTranscriptionJob: string;
```

- *Type:* string

[Write] transcribe:StartTranscriptionJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.transcribe.TranscribeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] transcribe:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.transcribe.TranscribeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] transcribe:UntagResource.

---

##### `UpdateCallAnalyticsCategory`<sup>Required</sup> <a name="UpdateCallAnalyticsCategory" id="@cdk_utils/iam.transcribe.TranscribeActions.property.UpdateCallAnalyticsCategory"></a>

```typescript
public readonly UpdateCallAnalyticsCategory: string;
```

- *Type:* string

[Write] transcribe:UpdateCallAnalyticsCategory.

---

##### `UpdateMedicalVocabulary`<sup>Required</sup> <a name="UpdateMedicalVocabulary" id="@cdk_utils/iam.transcribe.TranscribeActions.property.UpdateMedicalVocabulary"></a>

```typescript
public readonly UpdateMedicalVocabulary: string;
```

- *Type:* string

[Write] transcribe:UpdateMedicalVocabulary.

---

##### `UpdateVocabulary`<sup>Required</sup> <a name="UpdateVocabulary" id="@cdk_utils/iam.transcribe.TranscribeActions.property.UpdateVocabulary"></a>

```typescript
public readonly UpdateVocabulary: string;
```

- *Type:* string

[Write] transcribe:UpdateVocabulary.

---

##### `UpdateVocabularyFilter`<sup>Required</sup> <a name="UpdateVocabularyFilter" id="@cdk_utils/iam.transcribe.TranscribeActions.property.UpdateVocabularyFilter"></a>

```typescript
public readonly UpdateVocabularyFilter: string;
```

- *Type:* string

[Write] transcribe:UpdateVocabularyFilter.

---

### TranscribeConditions <a name="TranscribeConditions" id="@cdk_utils/iam.transcribe.TranscribeConditions"></a>

Condition key constants and builders for transcribe.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transcribe.TranscribeConditions.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

new transcribe.TranscribeConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.outputBucketName">outputBucketName</a></code> | Generates a condition block for `transcribe:OutputBucketName`. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.outputEncryptionKMSKeyId">outputEncryptionKMSKeyId</a></code> | Generates a condition block for `transcribe:OutputEncryptionKMSKeyId`. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.outputKey">outputKey</a></code> | Generates a condition block for `transcribe:OutputKey`. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.outputLocation">outputLocation</a></code> | Generates a condition block for `transcribe:OutputLocation`. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `outputBucketName` <a name="outputBucketName" id="@cdk_utils/iam.transcribe.TranscribeConditions.outputBucketName"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeConditions.outputBucketName(value: string)
```

Generates a condition block for `transcribe:OutputBucketName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transcribe.TranscribeConditions.outputBucketName.parameter.value"></a>

- *Type:* string

---

##### `outputEncryptionKMSKeyId` <a name="outputEncryptionKMSKeyId" id="@cdk_utils/iam.transcribe.TranscribeConditions.outputEncryptionKMSKeyId"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeConditions.outputEncryptionKMSKeyId(value: string)
```

Generates a condition block for `transcribe:OutputEncryptionKMSKeyId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transcribe.TranscribeConditions.outputEncryptionKMSKeyId.parameter.value"></a>

- *Type:* string

---

##### `outputKey` <a name="outputKey" id="@cdk_utils/iam.transcribe.TranscribeConditions.outputKey"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeConditions.outputKey(value: string)
```

Generates a condition block for `transcribe:OutputKey`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transcribe.TranscribeConditions.outputKey.parameter.value"></a>

- *Type:* string

---

##### `outputLocation` <a name="outputLocation" id="@cdk_utils/iam.transcribe.TranscribeConditions.outputLocation"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeConditions.outputLocation(value: string)
```

Generates a condition block for `transcribe:OutputLocation`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transcribe.TranscribeConditions.outputLocation.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.transcribe.TranscribeConditions.requestTag"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transcribe.TranscribeConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.transcribe.TranscribeConditions.resourceTag"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.transcribe.TranscribeConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.tagKeys"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.transcribe.TranscribeConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateCallAnalyticsCategoryConditionKeys">CreateCallAnalyticsCategoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCallAnalyticsCategory action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateLanguageModelConditionKeys">CreateLanguageModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLanguageModel action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateMedicalVocabularyConditionKeys">CreateMedicalVocabularyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMedicalVocabulary action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateVocabularyConditionKeys">CreateVocabularyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVocabulary action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateVocabularyFilterConditionKeys">CreateVocabularyFilterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVocabularyFilter action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.OUTPUT_BUCKET_NAME">OUTPUT_BUCKET_NAME</a></code> | <code>string</code> | Condition key: transcribe:OutputBucketName (String). |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.OUTPUT_ENCRYPTION_KMS_KEY_ID">OUTPUT_ENCRYPTION_KMS_KEY_ID</a></code> | <code>string</code> | Condition key: transcribe:OutputEncryptionKMSKeyId (String). |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.OUTPUT_KEY">OUTPUT_KEY</a></code> | <code>string</code> | Condition key: transcribe:OutputKey (String). |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.OUTPUT_LOCATION">OUTPUT_LOCATION</a></code> | <code>string</code> | Condition key: transcribe:OutputLocation (String). |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.StartCallAnalyticsJobConditionKeys">StartCallAnalyticsJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartCallAnalyticsJob action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.StartMedicalScribeJobConditionKeys">StartMedicalScribeJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartMedicalScribeJob action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.StartMedicalTranscriptionJobConditionKeys">StartMedicalTranscriptionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartMedicalTranscriptionJob action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.StartTranscriptionJobConditionKeys">StartTranscriptionJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartTranscriptionJob action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCallAnalyticsCategoryConditionKeys`<sup>Required</sup> <a name="CreateCallAnalyticsCategoryConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateCallAnalyticsCategoryConditionKeys"></a>

```typescript
public readonly CreateCallAnalyticsCategoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCallAnalyticsCategory action.

---

##### `CreateLanguageModelConditionKeys`<sup>Required</sup> <a name="CreateLanguageModelConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateLanguageModelConditionKeys"></a>

```typescript
public readonly CreateLanguageModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLanguageModel action.

---

##### `CreateMedicalVocabularyConditionKeys`<sup>Required</sup> <a name="CreateMedicalVocabularyConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateMedicalVocabularyConditionKeys"></a>

```typescript
public readonly CreateMedicalVocabularyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMedicalVocabulary action.

---

##### `CreateVocabularyConditionKeys`<sup>Required</sup> <a name="CreateVocabularyConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateVocabularyConditionKeys"></a>

```typescript
public readonly CreateVocabularyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVocabulary action.

---

##### `CreateVocabularyFilterConditionKeys`<sup>Required</sup> <a name="CreateVocabularyFilterConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.CreateVocabularyFilterConditionKeys"></a>

```typescript
public readonly CreateVocabularyFilterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVocabularyFilter action.

---

##### `OUTPUT_BUCKET_NAME`<sup>Required</sup> <a name="OUTPUT_BUCKET_NAME" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.OUTPUT_BUCKET_NAME"></a>

```typescript
public readonly OUTPUT_BUCKET_NAME: string;
```

- *Type:* string

Condition key: transcribe:OutputBucketName (String).

---

##### `OUTPUT_ENCRYPTION_KMS_KEY_ID`<sup>Required</sup> <a name="OUTPUT_ENCRYPTION_KMS_KEY_ID" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.OUTPUT_ENCRYPTION_KMS_KEY_ID"></a>

```typescript
public readonly OUTPUT_ENCRYPTION_KMS_KEY_ID: string;
```

- *Type:* string

Condition key: transcribe:OutputEncryptionKMSKeyId (String).

---

##### `OUTPUT_KEY`<sup>Required</sup> <a name="OUTPUT_KEY" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.OUTPUT_KEY"></a>

```typescript
public readonly OUTPUT_KEY: string;
```

- *Type:* string

Condition key: transcribe:OutputKey (String).

---

##### `OUTPUT_LOCATION`<sup>Required</sup> <a name="OUTPUT_LOCATION" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.OUTPUT_LOCATION"></a>

```typescript
public readonly OUTPUT_LOCATION: string;
```

- *Type:* string

Condition key: transcribe:OutputLocation (String).

---

##### `StartCallAnalyticsJobConditionKeys`<sup>Required</sup> <a name="StartCallAnalyticsJobConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.StartCallAnalyticsJobConditionKeys"></a>

```typescript
public readonly StartCallAnalyticsJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartCallAnalyticsJob action.

---

##### `StartMedicalScribeJobConditionKeys`<sup>Required</sup> <a name="StartMedicalScribeJobConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.StartMedicalScribeJobConditionKeys"></a>

```typescript
public readonly StartMedicalScribeJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartMedicalScribeJob action.

---

##### `StartMedicalTranscriptionJobConditionKeys`<sup>Required</sup> <a name="StartMedicalTranscriptionJobConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.StartMedicalTranscriptionJobConditionKeys"></a>

```typescript
public readonly StartMedicalTranscriptionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartMedicalTranscriptionJob action.

---

##### `StartTranscriptionJobConditionKeys`<sup>Required</sup> <a name="StartTranscriptionJobConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.StartTranscriptionJobConditionKeys"></a>

```typescript
public readonly StartTranscriptionJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartTranscriptionJob action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.transcribe.TranscribeConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### TranscribeOperations <a name="TranscribeOperations" id="@cdk_utils/iam.transcribe.TranscribeOperations"></a>

API operation to required IAM actions mapping for transcribe.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transcribe.TranscribeOperations.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

new transcribe.TranscribeOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateCallAnalyticsCategory">CreateCallAnalyticsCategory</a></code> | <code>string[]</code> | IAM actions required for the CreateCallAnalyticsCategory API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateLanguageModel">CreateLanguageModel</a></code> | <code>string[]</code> | IAM actions required for the CreateLanguageModel API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateMedicalVocabulary">CreateMedicalVocabulary</a></code> | <code>string[]</code> | IAM actions required for the CreateMedicalVocabulary API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateVocabulary">CreateVocabulary</a></code> | <code>string[]</code> | IAM actions required for the CreateVocabulary API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateVocabularyFilter">CreateVocabularyFilter</a></code> | <code>string[]</code> | IAM actions required for the CreateVocabularyFilter API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteCallAnalyticsCategory">DeleteCallAnalyticsCategory</a></code> | <code>string[]</code> | IAM actions required for the DeleteCallAnalyticsCategory API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteCallAnalyticsJob">DeleteCallAnalyticsJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteCallAnalyticsJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteLanguageModel">DeleteLanguageModel</a></code> | <code>string[]</code> | IAM actions required for the DeleteLanguageModel API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteMedicalScribeJob">DeleteMedicalScribeJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteMedicalScribeJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteMedicalTranscriptionJob">DeleteMedicalTranscriptionJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteMedicalTranscriptionJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteMedicalVocabulary">DeleteMedicalVocabulary</a></code> | <code>string[]</code> | IAM actions required for the DeleteMedicalVocabulary API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteTranscriptionJob">DeleteTranscriptionJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteTranscriptionJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteVocabulary">DeleteVocabulary</a></code> | <code>string[]</code> | IAM actions required for the DeleteVocabulary API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteVocabularyFilter">DeleteVocabularyFilter</a></code> | <code>string[]</code> | IAM actions required for the DeleteVocabularyFilter API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.DescribeLanguageModel">DescribeLanguageModel</a></code> | <code>string[]</code> | IAM actions required for the DescribeLanguageModel API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListCallAnalyticsCategories">ListCallAnalyticsCategories</a></code> | <code>string[]</code> | IAM actions required for the ListCallAnalyticsCategories API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListCallAnalyticsJobs">ListCallAnalyticsJobs</a></code> | <code>string[]</code> | IAM actions required for the ListCallAnalyticsJobs API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListLanguageModels">ListLanguageModels</a></code> | <code>string[]</code> | IAM actions required for the ListLanguageModels API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListMedicalScribeJobs">ListMedicalScribeJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMedicalScribeJobs API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListMedicalTranscriptionJobs">ListMedicalTranscriptionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListMedicalTranscriptionJobs API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListMedicalVocabularies">ListMedicalVocabularies</a></code> | <code>string[]</code> | IAM actions required for the ListMedicalVocabularies API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListTranscriptionJobs">ListTranscriptionJobs</a></code> | <code>string[]</code> | IAM actions required for the ListTranscriptionJobs API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListVocabularies">ListVocabularies</a></code> | <code>string[]</code> | IAM actions required for the ListVocabularies API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.ListVocabularyFilters">ListVocabularyFilters</a></code> | <code>string[]</code> | IAM actions required for the ListVocabularyFilters API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetCallAnalyticsCategory">opGetCallAnalyticsCategory</a></code> | <code>string[]</code> | IAM actions required for the GetCallAnalyticsCategory API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetCallAnalyticsJob">opGetCallAnalyticsJob</a></code> | <code>string[]</code> | IAM actions required for the GetCallAnalyticsJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetMedicalScribeJob">opGetMedicalScribeJob</a></code> | <code>string[]</code> | IAM actions required for the GetMedicalScribeJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetMedicalTranscriptionJob">opGetMedicalTranscriptionJob</a></code> | <code>string[]</code> | IAM actions required for the GetMedicalTranscriptionJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetMedicalVocabulary">opGetMedicalVocabulary</a></code> | <code>string[]</code> | IAM actions required for the GetMedicalVocabulary API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetTranscriptionJob">opGetTranscriptionJob</a></code> | <code>string[]</code> | IAM actions required for the GetTranscriptionJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetVocabulary">opGetVocabulary</a></code> | <code>string[]</code> | IAM actions required for the GetVocabulary API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetVocabularyFilter">opGetVocabularyFilter</a></code> | <code>string[]</code> | IAM actions required for the GetVocabularyFilter API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.StartCallAnalyticsJob">StartCallAnalyticsJob</a></code> | <code>string[]</code> | IAM actions required for the StartCallAnalyticsJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.StartMedicalScribeJob">StartMedicalScribeJob</a></code> | <code>string[]</code> | IAM actions required for the StartMedicalScribeJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.StartMedicalTranscriptionJob">StartMedicalTranscriptionJob</a></code> | <code>string[]</code> | IAM actions required for the StartMedicalTranscriptionJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.StartTranscriptionJob">StartTranscriptionJob</a></code> | <code>string[]</code> | IAM actions required for the StartTranscriptionJob API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.UpdateCallAnalyticsCategory">UpdateCallAnalyticsCategory</a></code> | <code>string[]</code> | IAM actions required for the UpdateCallAnalyticsCategory API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.UpdateMedicalVocabulary">UpdateMedicalVocabulary</a></code> | <code>string[]</code> | IAM actions required for the UpdateMedicalVocabulary API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.UpdateVocabulary">UpdateVocabulary</a></code> | <code>string[]</code> | IAM actions required for the UpdateVocabulary API call. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeOperations.property.UpdateVocabularyFilter">UpdateVocabularyFilter</a></code> | <code>string[]</code> | IAM actions required for the UpdateVocabularyFilter API call. |

---

##### `CreateCallAnalyticsCategory`<sup>Required</sup> <a name="CreateCallAnalyticsCategory" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateCallAnalyticsCategory"></a>

```typescript
public readonly CreateCallAnalyticsCategory: string[];
```

- *Type:* string[]

IAM actions required for the CreateCallAnalyticsCategory API call.

---

##### `CreateLanguageModel`<sup>Required</sup> <a name="CreateLanguageModel" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateLanguageModel"></a>

```typescript
public readonly CreateLanguageModel: string[];
```

- *Type:* string[]

IAM actions required for the CreateLanguageModel API call.

---

##### `CreateMedicalVocabulary`<sup>Required</sup> <a name="CreateMedicalVocabulary" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateMedicalVocabulary"></a>

```typescript
public readonly CreateMedicalVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the CreateMedicalVocabulary API call.

---

##### `CreateVocabulary`<sup>Required</sup> <a name="CreateVocabulary" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateVocabulary"></a>

```typescript
public readonly CreateVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the CreateVocabulary API call.

---

##### `CreateVocabularyFilter`<sup>Required</sup> <a name="CreateVocabularyFilter" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.CreateVocabularyFilter"></a>

```typescript
public readonly CreateVocabularyFilter: string[];
```

- *Type:* string[]

IAM actions required for the CreateVocabularyFilter API call.

---

##### `DeleteCallAnalyticsCategory`<sup>Required</sup> <a name="DeleteCallAnalyticsCategory" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteCallAnalyticsCategory"></a>

```typescript
public readonly DeleteCallAnalyticsCategory: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCallAnalyticsCategory API call.

---

##### `DeleteCallAnalyticsJob`<sup>Required</sup> <a name="DeleteCallAnalyticsJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteCallAnalyticsJob"></a>

```typescript
public readonly DeleteCallAnalyticsJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCallAnalyticsJob API call.

---

##### `DeleteLanguageModel`<sup>Required</sup> <a name="DeleteLanguageModel" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteLanguageModel"></a>

```typescript
public readonly DeleteLanguageModel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLanguageModel API call.

---

##### `DeleteMedicalScribeJob`<sup>Required</sup> <a name="DeleteMedicalScribeJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteMedicalScribeJob"></a>

```typescript
public readonly DeleteMedicalScribeJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMedicalScribeJob API call.

---

##### `DeleteMedicalTranscriptionJob`<sup>Required</sup> <a name="DeleteMedicalTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteMedicalTranscriptionJob"></a>

```typescript
public readonly DeleteMedicalTranscriptionJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMedicalTranscriptionJob API call.

---

##### `DeleteMedicalVocabulary`<sup>Required</sup> <a name="DeleteMedicalVocabulary" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteMedicalVocabulary"></a>

```typescript
public readonly DeleteMedicalVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMedicalVocabulary API call.

---

##### `DeleteTranscriptionJob`<sup>Required</sup> <a name="DeleteTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteTranscriptionJob"></a>

```typescript
public readonly DeleteTranscriptionJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTranscriptionJob API call.

---

##### `DeleteVocabulary`<sup>Required</sup> <a name="DeleteVocabulary" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteVocabulary"></a>

```typescript
public readonly DeleteVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVocabulary API call.

---

##### `DeleteVocabularyFilter`<sup>Required</sup> <a name="DeleteVocabularyFilter" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DeleteVocabularyFilter"></a>

```typescript
public readonly DeleteVocabularyFilter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVocabularyFilter API call.

---

##### `DescribeLanguageModel`<sup>Required</sup> <a name="DescribeLanguageModel" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.DescribeLanguageModel"></a>

```typescript
public readonly DescribeLanguageModel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLanguageModel API call.

---

##### `ListCallAnalyticsCategories`<sup>Required</sup> <a name="ListCallAnalyticsCategories" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListCallAnalyticsCategories"></a>

```typescript
public readonly ListCallAnalyticsCategories: string[];
```

- *Type:* string[]

IAM actions required for the ListCallAnalyticsCategories API call.

---

##### `ListCallAnalyticsJobs`<sup>Required</sup> <a name="ListCallAnalyticsJobs" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListCallAnalyticsJobs"></a>

```typescript
public readonly ListCallAnalyticsJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListCallAnalyticsJobs API call.

---

##### `ListLanguageModels`<sup>Required</sup> <a name="ListLanguageModels" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListLanguageModels"></a>

```typescript
public readonly ListLanguageModels: string[];
```

- *Type:* string[]

IAM actions required for the ListLanguageModels API call.

---

##### `ListMedicalScribeJobs`<sup>Required</sup> <a name="ListMedicalScribeJobs" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListMedicalScribeJobs"></a>

```typescript
public readonly ListMedicalScribeJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMedicalScribeJobs API call.

---

##### `ListMedicalTranscriptionJobs`<sup>Required</sup> <a name="ListMedicalTranscriptionJobs" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListMedicalTranscriptionJobs"></a>

```typescript
public readonly ListMedicalTranscriptionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListMedicalTranscriptionJobs API call.

---

##### `ListMedicalVocabularies`<sup>Required</sup> <a name="ListMedicalVocabularies" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListMedicalVocabularies"></a>

```typescript
public readonly ListMedicalVocabularies: string[];
```

- *Type:* string[]

IAM actions required for the ListMedicalVocabularies API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTranscriptionJobs`<sup>Required</sup> <a name="ListTranscriptionJobs" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListTranscriptionJobs"></a>

```typescript
public readonly ListTranscriptionJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListTranscriptionJobs API call.

---

##### `ListVocabularies`<sup>Required</sup> <a name="ListVocabularies" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListVocabularies"></a>

```typescript
public readonly ListVocabularies: string[];
```

- *Type:* string[]

IAM actions required for the ListVocabularies API call.

---

##### `ListVocabularyFilters`<sup>Required</sup> <a name="ListVocabularyFilters" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.ListVocabularyFilters"></a>

```typescript
public readonly ListVocabularyFilters: string[];
```

- *Type:* string[]

IAM actions required for the ListVocabularyFilters API call.

---

##### `opGetCallAnalyticsCategory`<sup>Required</sup> <a name="opGetCallAnalyticsCategory" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetCallAnalyticsCategory"></a>

```typescript
public readonly opGetCallAnalyticsCategory: string[];
```

- *Type:* string[]

IAM actions required for the GetCallAnalyticsCategory API call.

---

##### `opGetCallAnalyticsJob`<sup>Required</sup> <a name="opGetCallAnalyticsJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetCallAnalyticsJob"></a>

```typescript
public readonly opGetCallAnalyticsJob: string[];
```

- *Type:* string[]

IAM actions required for the GetCallAnalyticsJob API call.

---

##### `opGetMedicalScribeJob`<sup>Required</sup> <a name="opGetMedicalScribeJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetMedicalScribeJob"></a>

```typescript
public readonly opGetMedicalScribeJob: string[];
```

- *Type:* string[]

IAM actions required for the GetMedicalScribeJob API call.

---

##### `opGetMedicalTranscriptionJob`<sup>Required</sup> <a name="opGetMedicalTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetMedicalTranscriptionJob"></a>

```typescript
public readonly opGetMedicalTranscriptionJob: string[];
```

- *Type:* string[]

IAM actions required for the GetMedicalTranscriptionJob API call.

---

##### `opGetMedicalVocabulary`<sup>Required</sup> <a name="opGetMedicalVocabulary" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetMedicalVocabulary"></a>

```typescript
public readonly opGetMedicalVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the GetMedicalVocabulary API call.

---

##### `opGetTranscriptionJob`<sup>Required</sup> <a name="opGetTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetTranscriptionJob"></a>

```typescript
public readonly opGetTranscriptionJob: string[];
```

- *Type:* string[]

IAM actions required for the GetTranscriptionJob API call.

---

##### `opGetVocabulary`<sup>Required</sup> <a name="opGetVocabulary" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetVocabulary"></a>

```typescript
public readonly opGetVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the GetVocabulary API call.

---

##### `opGetVocabularyFilter`<sup>Required</sup> <a name="opGetVocabularyFilter" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.opGetVocabularyFilter"></a>

```typescript
public readonly opGetVocabularyFilter: string[];
```

- *Type:* string[]

IAM actions required for the GetVocabularyFilter API call.

---

##### `StartCallAnalyticsJob`<sup>Required</sup> <a name="StartCallAnalyticsJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.StartCallAnalyticsJob"></a>

```typescript
public readonly StartCallAnalyticsJob: string[];
```

- *Type:* string[]

IAM actions required for the StartCallAnalyticsJob API call.

---

##### `StartMedicalScribeJob`<sup>Required</sup> <a name="StartMedicalScribeJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.StartMedicalScribeJob"></a>

```typescript
public readonly StartMedicalScribeJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMedicalScribeJob API call.

---

##### `StartMedicalTranscriptionJob`<sup>Required</sup> <a name="StartMedicalTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.StartMedicalTranscriptionJob"></a>

```typescript
public readonly StartMedicalTranscriptionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartMedicalTranscriptionJob API call.

---

##### `StartTranscriptionJob`<sup>Required</sup> <a name="StartTranscriptionJob" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.StartTranscriptionJob"></a>

```typescript
public readonly StartTranscriptionJob: string[];
```

- *Type:* string[]

IAM actions required for the StartTranscriptionJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCallAnalyticsCategory`<sup>Required</sup> <a name="UpdateCallAnalyticsCategory" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.UpdateCallAnalyticsCategory"></a>

```typescript
public readonly UpdateCallAnalyticsCategory: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCallAnalyticsCategory API call.

---

##### `UpdateMedicalVocabulary`<sup>Required</sup> <a name="UpdateMedicalVocabulary" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.UpdateMedicalVocabulary"></a>

```typescript
public readonly UpdateMedicalVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMedicalVocabulary API call.

---

##### `UpdateVocabulary`<sup>Required</sup> <a name="UpdateVocabulary" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.UpdateVocabulary"></a>

```typescript
public readonly UpdateVocabulary: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVocabulary API call.

---

##### `UpdateVocabularyFilter`<sup>Required</sup> <a name="UpdateVocabularyFilter" id="@cdk_utils/iam.transcribe.TranscribeOperations.property.UpdateVocabularyFilter"></a>

```typescript
public readonly UpdateVocabularyFilter: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVocabularyFilter API call.

---

### TranscribeResources <a name="TranscribeResources" id="@cdk_utils/iam.transcribe.TranscribeResources"></a>

ARN builders, validators, and parsers for transcribe resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.transcribe.TranscribeResources.Initializer"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

new transcribe.TranscribeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.callanalyticscategory">callanalyticscategory</a></code> | Builds an ARN for the callanalyticscategory resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.callanalyticsjob">callanalyticsjob</a></code> | Builds an ARN for the callanalyticsjob resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidCallanalyticscategoryArn">isValidCallanalyticscategoryArn</a></code> | Validates whether a string is a valid ARN for the callanalyticscategory resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidCallanalyticsjobArn">isValidCallanalyticsjobArn</a></code> | Validates whether a string is a valid ARN for the callanalyticsjob resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidLanguagemodelArn">isValidLanguagemodelArn</a></code> | Validates whether a string is a valid ARN for the languagemodel resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicalscribejobArn">isValidMedicalscribejobArn</a></code> | Validates whether a string is a valid ARN for the medicalscribejob resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicaltranscriptionjobArn">isValidMedicaltranscriptionjobArn</a></code> | Validates whether a string is a valid ARN for the medicaltranscriptionjob resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicalvocabularyArn">isValidMedicalvocabularyArn</a></code> | Validates whether a string is a valid ARN for the medicalvocabulary resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidTranscriptionjobArn">isValidTranscriptionjobArn</a></code> | Validates whether a string is a valid ARN for the transcriptionjob resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidVocabularyArn">isValidVocabularyArn</a></code> | Validates whether a string is a valid ARN for the vocabulary resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.isValidVocabularyfilterArn">isValidVocabularyfilterArn</a></code> | Validates whether a string is a valid ARN for the vocabularyfilter resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.languagemodel">languagemodel</a></code> | Builds an ARN for the languagemodel resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.medicalscribejob">medicalscribejob</a></code> | Builds an ARN for the medicalscribejob resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.medicaltranscriptionjob">medicaltranscriptionjob</a></code> | Builds an ARN for the medicaltranscriptionjob resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.medicalvocabulary">medicalvocabulary</a></code> | Builds an ARN for the medicalvocabulary resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseCallanalyticscategoryArn">parseCallanalyticscategoryArn</a></code> | Parses a callanalyticscategory ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseCallanalyticsjobArn">parseCallanalyticsjobArn</a></code> | Parses a callanalyticsjob ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseLanguagemodelArn">parseLanguagemodelArn</a></code> | Parses a languagemodel ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseMedicalscribejobArn">parseMedicalscribejobArn</a></code> | Parses a medicalscribejob ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseMedicaltranscriptionjobArn">parseMedicaltranscriptionjobArn</a></code> | Parses a medicaltranscriptionjob ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseMedicalvocabularyArn">parseMedicalvocabularyArn</a></code> | Parses a medicalvocabulary ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseTranscriptionjobArn">parseTranscriptionjobArn</a></code> | Parses a transcriptionjob ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseVocabularyArn">parseVocabularyArn</a></code> | Parses a vocabulary ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.parseVocabularyfilterArn">parseVocabularyfilterArn</a></code> | Parses a vocabularyfilter ARN into its components. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.transcriptionjob">transcriptionjob</a></code> | Builds an ARN for the transcriptionjob resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.vocabulary">vocabulary</a></code> | Builds an ARN for the vocabulary resource. |
| <code><a href="#@cdk_utils/iam.transcribe.TranscribeResources.vocabularyfilter">vocabularyfilter</a></code> | Builds an ARN for the vocabularyfilter resource. |

---

##### `callanalyticscategory` <a name="callanalyticscategory" id="@cdk_utils/iam.transcribe.TranscribeResources.callanalyticscategory"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.callanalyticscategory(props: TranscribeCallanalyticscategoryArnProps)
```

Builds an ARN for the callanalyticscategory resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.callanalyticscategory.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticscategoryArnProps">TranscribeCallanalyticscategoryArnProps</a>

---

##### `callanalyticsjob` <a name="callanalyticsjob" id="@cdk_utils/iam.transcribe.TranscribeResources.callanalyticsjob"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.callanalyticsjob(props: TranscribeCallanalyticsjobArnProps)
```

Builds an ARN for the callanalyticsjob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.callanalyticsjob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeCallanalyticsjobArnProps">TranscribeCallanalyticsjobArnProps</a>

---

##### `isValidCallanalyticscategoryArn` <a name="isValidCallanalyticscategoryArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidCallanalyticscategoryArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidCallanalyticscategoryArn(arn: string)
```

Validates whether a string is a valid ARN for the callanalyticscategory resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidCallanalyticscategoryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCallanalyticsjobArn` <a name="isValidCallanalyticsjobArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidCallanalyticsjobArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidCallanalyticsjobArn(arn: string)
```

Validates whether a string is a valid ARN for the callanalyticsjob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidCallanalyticsjobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLanguagemodelArn` <a name="isValidLanguagemodelArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidLanguagemodelArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidLanguagemodelArn(arn: string)
```

Validates whether a string is a valid ARN for the languagemodel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidLanguagemodelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMedicalscribejobArn` <a name="isValidMedicalscribejobArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicalscribejobArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidMedicalscribejobArn(arn: string)
```

Validates whether a string is a valid ARN for the medicalscribejob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicalscribejobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMedicaltranscriptionjobArn` <a name="isValidMedicaltranscriptionjobArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicaltranscriptionjobArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidMedicaltranscriptionjobArn(arn: string)
```

Validates whether a string is a valid ARN for the medicaltranscriptionjob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicaltranscriptionjobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMedicalvocabularyArn` <a name="isValidMedicalvocabularyArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicalvocabularyArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidMedicalvocabularyArn(arn: string)
```

Validates whether a string is a valid ARN for the medicalvocabulary resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidMedicalvocabularyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTranscriptionjobArn` <a name="isValidTranscriptionjobArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidTranscriptionjobArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidTranscriptionjobArn(arn: string)
```

Validates whether a string is a valid ARN for the transcriptionjob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidTranscriptionjobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVocabularyArn` <a name="isValidVocabularyArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidVocabularyArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidVocabularyArn(arn: string)
```

Validates whether a string is a valid ARN for the vocabulary resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidVocabularyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVocabularyfilterArn` <a name="isValidVocabularyfilterArn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidVocabularyfilterArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.isValidVocabularyfilterArn(arn: string)
```

Validates whether a string is a valid ARN for the vocabularyfilter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.isValidVocabularyfilterArn.parameter.arn"></a>

- *Type:* string

---

##### `languagemodel` <a name="languagemodel" id="@cdk_utils/iam.transcribe.TranscribeResources.languagemodel"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.languagemodel(props: TranscribeLanguagemodelArnProps)
```

Builds an ARN for the languagemodel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.languagemodel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeLanguagemodelArnProps">TranscribeLanguagemodelArnProps</a>

---

##### `medicalscribejob` <a name="medicalscribejob" id="@cdk_utils/iam.transcribe.TranscribeResources.medicalscribejob"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.medicalscribejob(props: TranscribeMedicalscribejobArnProps)
```

Builds an ARN for the medicalscribejob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.medicalscribejob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeMedicalscribejobArnProps">TranscribeMedicalscribejobArnProps</a>

---

##### `medicaltranscriptionjob` <a name="medicaltranscriptionjob" id="@cdk_utils/iam.transcribe.TranscribeResources.medicaltranscriptionjob"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.medicaltranscriptionjob(props: TranscribeMedicaltranscriptionjobArnProps)
```

Builds an ARN for the medicaltranscriptionjob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.medicaltranscriptionjob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeMedicaltranscriptionjobArnProps">TranscribeMedicaltranscriptionjobArnProps</a>

---

##### `medicalvocabulary` <a name="medicalvocabulary" id="@cdk_utils/iam.transcribe.TranscribeResources.medicalvocabulary"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.medicalvocabulary(props: TranscribeMedicalvocabularyArnProps)
```

Builds an ARN for the medicalvocabulary resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.medicalvocabulary.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeMedicalvocabularyArnProps">TranscribeMedicalvocabularyArnProps</a>

---

##### `parseCallanalyticscategoryArn` <a name="parseCallanalyticscategoryArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseCallanalyticscategoryArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseCallanalyticscategoryArn(arn: string)
```

Parses a callanalyticscategory ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseCallanalyticscategoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCallanalyticsjobArn` <a name="parseCallanalyticsjobArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseCallanalyticsjobArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseCallanalyticsjobArn(arn: string)
```

Parses a callanalyticsjob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseCallanalyticsjobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLanguagemodelArn` <a name="parseLanguagemodelArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseLanguagemodelArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseLanguagemodelArn(arn: string)
```

Parses a languagemodel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseLanguagemodelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMedicalscribejobArn` <a name="parseMedicalscribejobArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseMedicalscribejobArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseMedicalscribejobArn(arn: string)
```

Parses a medicalscribejob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseMedicalscribejobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMedicaltranscriptionjobArn` <a name="parseMedicaltranscriptionjobArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseMedicaltranscriptionjobArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseMedicaltranscriptionjobArn(arn: string)
```

Parses a medicaltranscriptionjob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseMedicaltranscriptionjobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMedicalvocabularyArn` <a name="parseMedicalvocabularyArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseMedicalvocabularyArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseMedicalvocabularyArn(arn: string)
```

Parses a medicalvocabulary ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseMedicalvocabularyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTranscriptionjobArn` <a name="parseTranscriptionjobArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseTranscriptionjobArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseTranscriptionjobArn(arn: string)
```

Parses a transcriptionjob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseTranscriptionjobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVocabularyArn` <a name="parseVocabularyArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseVocabularyArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseVocabularyArn(arn: string)
```

Parses a vocabulary ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseVocabularyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVocabularyfilterArn` <a name="parseVocabularyfilterArn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseVocabularyfilterArn"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.parseVocabularyfilterArn(arn: string)
```

Parses a vocabularyfilter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.transcribe.TranscribeResources.parseVocabularyfilterArn.parameter.arn"></a>

- *Type:* string

---

##### `transcriptionjob` <a name="transcriptionjob" id="@cdk_utils/iam.transcribe.TranscribeResources.transcriptionjob"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.transcriptionjob(props: TranscribeTranscriptionjobArnProps)
```

Builds an ARN for the transcriptionjob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.transcriptionjob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeTranscriptionjobArnProps">TranscribeTranscriptionjobArnProps</a>

---

##### `vocabulary` <a name="vocabulary" id="@cdk_utils/iam.transcribe.TranscribeResources.vocabulary"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.vocabulary(props: TranscribeVocabularyArnProps)
```

Builds an ARN for the vocabulary resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.vocabulary.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyArnProps">TranscribeVocabularyArnProps</a>

---

##### `vocabularyfilter` <a name="vocabularyfilter" id="@cdk_utils/iam.transcribe.TranscribeResources.vocabularyfilter"></a>

```typescript
import { transcribe } from '@cdk_utils/iam'

transcribe.TranscribeResources.vocabularyfilter(props: TranscribeVocabularyfilterArnProps)
```

Builds an ARN for the vocabularyfilter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.transcribe.TranscribeResources.vocabularyfilter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.transcribe.TranscribeVocabularyfilterArnProps">TranscribeVocabularyfilterArnProps</a>

---




