# `mediaconvert` Submodule <a name="`mediaconvert` Submodule" id="@cdk_utils/iam.mediaconvert"></a>


## Structs <a name="Structs" id="Structs"></a>

### MediaConvertCertificateAssociationArnComponents <a name="MediaConvertCertificateAssociationArnComponents" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents"></a>

Parsed components of a CertificateAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertCertificateAssociationArnComponents: mediaconvert.MediaConvertCertificateAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.property.certificateARN">certificateARN</a></code> | <code>string</code> | The CertificateArn component. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `certificateARN`<sup>Required</sup> <a name="certificateARN" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.property.certificateARN"></a>

```typescript
public readonly certificateARN: string;
```

- *Type:* string

The CertificateArn component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConvertCertificateAssociationArnProps <a name="MediaConvertCertificateAssociationArnProps" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps"></a>

Properties for building a CertificateAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertCertificateAssociationArnProps: mediaconvert.MediaConvertCertificateAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.property.certificateARN">certificateARN</a></code> | <code>string</code> | The CertificateArn component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `certificateARN`<sup>Required</sup> <a name="certificateARN" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.property.certificateARN"></a>

```typescript
public readonly certificateARN: string;
```

- *Type:* string

The CertificateArn component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConvertJobArnComponents <a name="MediaConvertJobArnComponents" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents"></a>

Parsed components of a Job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertJobArnComponents: mediaconvert.MediaConvertJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConvertJobArnProps <a name="MediaConvertJobArnProps" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps"></a>

Properties for building a Job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertJobArnProps: mediaconvert.MediaConvertJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConvertJobTemplateArnComponents <a name="MediaConvertJobTemplateArnComponents" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents"></a>

Parsed components of a JobTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertJobTemplateArnComponents: mediaconvert.MediaConvertJobTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.property.jobTemplateName">jobTemplateName</a></code> | <code>string</code> | The JobTemplateName component. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobTemplateName`<sup>Required</sup> <a name="jobTemplateName" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.property.jobTemplateName"></a>

```typescript
public readonly jobTemplateName: string;
```

- *Type:* string

The JobTemplateName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConvertJobTemplateArnProps <a name="MediaConvertJobTemplateArnProps" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps"></a>

Properties for building a JobTemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertJobTemplateArnProps: mediaconvert.MediaConvertJobTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.property.jobTemplateName">jobTemplateName</a></code> | <code>string</code> | The JobTemplateName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobTemplateName`<sup>Required</sup> <a name="jobTemplateName" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.property.jobTemplateName"></a>

```typescript
public readonly jobTemplateName: string;
```

- *Type:* string

The JobTemplateName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConvertPresetArnComponents <a name="MediaConvertPresetArnComponents" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents"></a>

Parsed components of a Preset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertPresetArnComponents: mediaconvert.MediaConvertPresetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.property.presetName">presetName</a></code> | <code>string</code> | The PresetName component. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `presetName`<sup>Required</sup> <a name="presetName" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.property.presetName"></a>

```typescript
public readonly presetName: string;
```

- *Type:* string

The PresetName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConvertPresetArnProps <a name="MediaConvertPresetArnProps" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps"></a>

Properties for building a Preset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertPresetArnProps: mediaconvert.MediaConvertPresetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.property.presetName">presetName</a></code> | <code>string</code> | The PresetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `presetName`<sup>Required</sup> <a name="presetName" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.property.presetName"></a>

```typescript
public readonly presetName: string;
```

- *Type:* string

The PresetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaConvertQueueArnComponents <a name="MediaConvertQueueArnComponents" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents"></a>

Parsed components of a Queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertQueueArnComponents: mediaconvert.MediaConvertQueueArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.property.queueName">queueName</a></code> | <code>string</code> | The QueueName component. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The QueueName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaConvertQueueArnProps <a name="MediaConvertQueueArnProps" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps"></a>

Properties for building a Queue ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

const mediaConvertQueueArnProps: mediaconvert.MediaConvertQueueArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.property.queueName">queueName</a></code> | <code>string</code> | The QueueName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

The QueueName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MediaConvertActions <a name="MediaConvertActions" id="@cdk_utils/iam.mediaconvert.MediaConvertActions"></a>

IAM action constants for the mediaconvert service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

new mediaconvert.MediaConvertActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] mediaconvert:GetJob. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetJobTemplate">actionGetJobTemplate</a></code> | <code>string</code> | [Read] mediaconvert:GetJobTemplate. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] mediaconvert:GetPolicy. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetPreset">actionGetPreset</a></code> | <code>string</code> | [Read] mediaconvert:GetPreset. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetQueue">actionGetQueue</a></code> | <code>string</code> | [Read] mediaconvert:GetQueue. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AssociateCertificate">AssociateCertificate</a></code> | <code>string</code> | [Write] mediaconvert:AssociateCertificate. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CancelJob">CancelJob</a></code> | <code>string</code> | [Write] mediaconvert:CancelJob. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreateJob">CreateJob</a></code> | <code>string</code> | [Write] mediaconvert:CreateJob. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreateJobTemplate">CreateJobTemplate</a></code> | <code>string</code> | [Write] mediaconvert:CreateJobTemplate. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreatePreset">CreatePreset</a></code> | <code>string</code> | [Write] mediaconvert:CreatePreset. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreateQueue">CreateQueue</a></code> | <code>string</code> | [Write] mediaconvert:CreateQueue. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreateResourceShare">CreateResourceShare</a></code> | <code>string</code> | [Write] mediaconvert:CreateResourceShare. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DeleteJobTemplate">DeleteJobTemplate</a></code> | <code>string</code> | [Write] mediaconvert:DeleteJobTemplate. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [Write] mediaconvert:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DeletePreset">DeletePreset</a></code> | <code>string</code> | [Write] mediaconvert:DeletePreset. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DeleteQueue">DeleteQueue</a></code> | <code>string</code> | [Write] mediaconvert:DeleteQueue. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DescribeEndpoints">DescribeEndpoints</a></code> | <code>string</code> | [List] mediaconvert:DescribeEndpoints. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DisassociateCertificate">DisassociateCertificate</a></code> | <code>string</code> | [Write] mediaconvert:DisassociateCertificate. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] mediaconvert:ListJobs. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListJobTemplates">ListJobTemplates</a></code> | <code>string</code> | [List] mediaconvert:ListJobTemplates. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListPresets">ListPresets</a></code> | <code>string</code> | [List] mediaconvert:ListPresets. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListQueues">ListQueues</a></code> | <code>string</code> | [List] mediaconvert:ListQueues. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mediaconvert:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListVersions">ListVersions</a></code> | <code>string</code> | [List] mediaconvert:ListVersions. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.Probe">Probe</a></code> | <code>string</code> | [Read] mediaconvert:Probe. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.PutPolicy">PutPolicy</a></code> | <code>string</code> | [Write] mediaconvert:PutPolicy. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.SearchJobs">SearchJobs</a></code> | <code>string</code> | [List] mediaconvert:SearchJobs. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mediaconvert:TagResource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mediaconvert:UntagResource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.UpdateJobTemplate">UpdateJobTemplate</a></code> | <code>string</code> | [Write] mediaconvert:UpdateJobTemplate. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.UpdatePreset">UpdatePreset</a></code> | <code>string</code> | [Write] mediaconvert:UpdatePreset. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertActions.property.UpdateQueue">UpdateQueue</a></code> | <code>string</code> | [Write] mediaconvert:UpdateQueue. |

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] mediaconvert:GetJob.

---

##### `actionGetJobTemplate`<sup>Required</sup> <a name="actionGetJobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetJobTemplate"></a>

```typescript
public readonly actionGetJobTemplate: string;
```

- *Type:* string

[Read] mediaconvert:GetJobTemplate.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] mediaconvert:GetPolicy.

---

##### `actionGetPreset`<sup>Required</sup> <a name="actionGetPreset" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetPreset"></a>

```typescript
public readonly actionGetPreset: string;
```

- *Type:* string

[Read] mediaconvert:GetPreset.

---

##### `actionGetQueue`<sup>Required</sup> <a name="actionGetQueue" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.actionGetQueue"></a>

```typescript
public readonly actionGetQueue: string;
```

- *Type:* string

[Read] mediaconvert:GetQueue.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateCertificate`<sup>Required</sup> <a name="AssociateCertificate" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.AssociateCertificate"></a>

```typescript
public readonly AssociateCertificate: string;
```

- *Type:* string

[Write] mediaconvert:AssociateCertificate.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CancelJob"></a>

```typescript
public readonly CancelJob: string;
```

- *Type:* string

[Write] mediaconvert:CancelJob.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreateJob"></a>

```typescript
public readonly CreateJob: string;
```

- *Type:* string

[Write] mediaconvert:CreateJob.

---

##### `CreateJobTemplate`<sup>Required</sup> <a name="CreateJobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreateJobTemplate"></a>

```typescript
public readonly CreateJobTemplate: string;
```

- *Type:* string

[Write] mediaconvert:CreateJobTemplate.

---

##### `CreatePreset`<sup>Required</sup> <a name="CreatePreset" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreatePreset"></a>

```typescript
public readonly CreatePreset: string;
```

- *Type:* string

[Write] mediaconvert:CreatePreset.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string;
```

- *Type:* string

[Write] mediaconvert:CreateQueue.

---

##### `CreateResourceShare`<sup>Required</sup> <a name="CreateResourceShare" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.CreateResourceShare"></a>

```typescript
public readonly CreateResourceShare: string;
```

- *Type:* string

[Write] mediaconvert:CreateResourceShare.

---

##### `DeleteJobTemplate`<sup>Required</sup> <a name="DeleteJobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DeleteJobTemplate"></a>

```typescript
public readonly DeleteJobTemplate: string;
```

- *Type:* string

[Write] mediaconvert:DeleteJobTemplate.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[Write] mediaconvert:DeletePolicy.

---

##### `DeletePreset`<sup>Required</sup> <a name="DeletePreset" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DeletePreset"></a>

```typescript
public readonly DeletePreset: string;
```

- *Type:* string

[Write] mediaconvert:DeletePreset.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string;
```

- *Type:* string

[Write] mediaconvert:DeleteQueue.

---

##### `DescribeEndpoints`<sup>Required</sup> <a name="DescribeEndpoints" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DescribeEndpoints"></a>

```typescript
public readonly DescribeEndpoints: string;
```

- *Type:* string

[List] mediaconvert:DescribeEndpoints.

---

##### `DisassociateCertificate`<sup>Required</sup> <a name="DisassociateCertificate" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.DisassociateCertificate"></a>

```typescript
public readonly DisassociateCertificate: string;
```

- *Type:* string

[Write] mediaconvert:DisassociateCertificate.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] mediaconvert:ListJobs.

---

##### `ListJobTemplates`<sup>Required</sup> <a name="ListJobTemplates" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListJobTemplates"></a>

```typescript
public readonly ListJobTemplates: string;
```

- *Type:* string

[List] mediaconvert:ListJobTemplates.

---

##### `ListPresets`<sup>Required</sup> <a name="ListPresets" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListPresets"></a>

```typescript
public readonly ListPresets: string;
```

- *Type:* string

[List] mediaconvert:ListPresets.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListQueues"></a>

```typescript
public readonly ListQueues: string;
```

- *Type:* string

[List] mediaconvert:ListQueues.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mediaconvert:ListTagsForResource.

---

##### `ListVersions`<sup>Required</sup> <a name="ListVersions" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.ListVersions"></a>

```typescript
public readonly ListVersions: string;
```

- *Type:* string

[List] mediaconvert:ListVersions.

---

##### `Probe`<sup>Required</sup> <a name="Probe" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.Probe"></a>

```typescript
public readonly Probe: string;
```

- *Type:* string

[Read] mediaconvert:Probe.

---

##### `PutPolicy`<sup>Required</sup> <a name="PutPolicy" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.PutPolicy"></a>

```typescript
public readonly PutPolicy: string;
```

- *Type:* string

[Write] mediaconvert:PutPolicy.

---

##### `SearchJobs`<sup>Required</sup> <a name="SearchJobs" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.SearchJobs"></a>

```typescript
public readonly SearchJobs: string;
```

- *Type:* string

[List] mediaconvert:SearchJobs.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mediaconvert:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mediaconvert:UntagResource.

---

##### `UpdateJobTemplate`<sup>Required</sup> <a name="UpdateJobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.UpdateJobTemplate"></a>

```typescript
public readonly UpdateJobTemplate: string;
```

- *Type:* string

[Write] mediaconvert:UpdateJobTemplate.

---

##### `UpdatePreset`<sup>Required</sup> <a name="UpdatePreset" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.UpdatePreset"></a>

```typescript
public readonly UpdatePreset: string;
```

- *Type:* string

[Write] mediaconvert:UpdatePreset.

---

##### `UpdateQueue`<sup>Required</sup> <a name="UpdateQueue" id="@cdk_utils/iam.mediaconvert.MediaConvertActions.property.UpdateQueue"></a>

```typescript
public readonly UpdateQueue: string;
```

- *Type:* string

[Write] mediaconvert:UpdateQueue.

---

### MediaConvertConditions <a name="MediaConvertConditions" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions"></a>

Condition key constants and builders for mediaconvert.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

new mediaconvert.MediaConvertConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.httpInputsAllowed">httpInputsAllowed</a></code> | Generates a condition block for `mediaconvert:HttpInputsAllowed`. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.httpsInputsAllowed">httpsInputsAllowed</a></code> | Generates a condition block for `mediaconvert:HttpsInputsAllowed`. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.s3InputsAllowed">s3InputsAllowed</a></code> | Generates a condition block for `mediaconvert:S3InputsAllowed`. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `httpInputsAllowed` <a name="httpInputsAllowed" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.httpInputsAllowed"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertConditions.httpInputsAllowed(value: boolean)
```

Generates a condition block for `mediaconvert:HttpInputsAllowed`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.httpInputsAllowed.parameter.value"></a>

- *Type:* boolean

---

##### `httpsInputsAllowed` <a name="httpsInputsAllowed" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.httpsInputsAllowed"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertConditions.httpsInputsAllowed(value: boolean)
```

Generates a condition block for `mediaconvert:HttpsInputsAllowed`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.httpsInputsAllowed.parameter.value"></a>

- *Type:* boolean

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.requestTag"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.resourceTag"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `s3InputsAllowed` <a name="s3InputsAllowed" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.s3InputsAllowed"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertConditions.s3InputsAllowed(value: boolean)
```

Generates a condition block for `mediaconvert:S3InputsAllowed`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.s3InputsAllowed.parameter.value"></a>

- *Type:* boolean

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.tagKeys"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.CreateJobConditionKeys">CreateJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJob action. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.CreateJobTemplateConditionKeys">CreateJobTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateJobTemplate action. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.CreatePresetConditionKeys">CreatePresetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePreset action. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.CreateQueueConditionKeys">CreateQueueConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateQueue action. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.HTTP_INPUTS_ALLOWED">HTTP_INPUTS_ALLOWED</a></code> | <code>string</code> | Condition key: mediaconvert:HttpInputsAllowed (Bool). |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.HTTPS_INPUTS_ALLOWED">HTTPS_INPUTS_ALLOWED</a></code> | <code>string</code> | Condition key: mediaconvert:HttpsInputsAllowed (Bool). |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.S3_INPUTS_ALLOWED">S3_INPUTS_ALLOWED</a></code> | <code>string</code> | Condition key: mediaconvert:S3InputsAllowed (Bool). |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateJobConditionKeys`<sup>Required</sup> <a name="CreateJobConditionKeys" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.CreateJobConditionKeys"></a>

```typescript
public readonly CreateJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJob action.

---

##### `CreateJobTemplateConditionKeys`<sup>Required</sup> <a name="CreateJobTemplateConditionKeys" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.CreateJobTemplateConditionKeys"></a>

```typescript
public readonly CreateJobTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateJobTemplate action.

---

##### `CreatePresetConditionKeys`<sup>Required</sup> <a name="CreatePresetConditionKeys" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.CreatePresetConditionKeys"></a>

```typescript
public readonly CreatePresetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePreset action.

---

##### `CreateQueueConditionKeys`<sup>Required</sup> <a name="CreateQueueConditionKeys" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.CreateQueueConditionKeys"></a>

```typescript
public readonly CreateQueueConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateQueue action.

---

##### `HTTP_INPUTS_ALLOWED`<sup>Required</sup> <a name="HTTP_INPUTS_ALLOWED" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.HTTP_INPUTS_ALLOWED"></a>

```typescript
public readonly HTTP_INPUTS_ALLOWED: string;
```

- *Type:* string

Condition key: mediaconvert:HttpInputsAllowed (Bool).

---

##### `HTTPS_INPUTS_ALLOWED`<sup>Required</sup> <a name="HTTPS_INPUTS_ALLOWED" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.HTTPS_INPUTS_ALLOWED"></a>

```typescript
public readonly HTTPS_INPUTS_ALLOWED: string;
```

- *Type:* string

Condition key: mediaconvert:HttpsInputsAllowed (Bool).

---

##### `S3_INPUTS_ALLOWED`<sup>Required</sup> <a name="S3_INPUTS_ALLOWED" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.S3_INPUTS_ALLOWED"></a>

```typescript
public readonly S3_INPUTS_ALLOWED: string;
```

- *Type:* string

Condition key: mediaconvert:S3InputsAllowed (Bool).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mediaconvert.MediaConvertConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MediaConvertOperations <a name="MediaConvertOperations" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations"></a>

API operation to required IAM actions mapping for mediaconvert.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

new mediaconvert.MediaConvertOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.AssociateCertificate">AssociateCertificate</a></code> | <code>string[]</code> | IAM actions required for the AssociateCertificate API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CancelJob">CancelJob</a></code> | <code>string[]</code> | IAM actions required for the CancelJob API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreateJob">CreateJob</a></code> | <code>string[]</code> | IAM actions required for the CreateJob API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreateJobTemplate">CreateJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreatePreset">CreatePreset</a></code> | <code>string[]</code> | IAM actions required for the CreatePreset API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreateQueue">CreateQueue</a></code> | <code>string[]</code> | IAM actions required for the CreateQueue API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreateResourceShare">CreateResourceShare</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceShare API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DeleteJobTemplate">DeleteJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DeletePreset">DeletePreset</a></code> | <code>string[]</code> | IAM actions required for the DeletePreset API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DeleteQueue">DeleteQueue</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueue API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DescribeEndpoints">DescribeEndpoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeEndpoints API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DisassociateCertificate">DisassociateCertificate</a></code> | <code>string[]</code> | IAM actions required for the DisassociateCertificate API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListJobTemplates">ListJobTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListJobTemplates API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListPresets">ListPresets</a></code> | <code>string[]</code> | IAM actions required for the ListPresets API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListQueues">ListQueues</a></code> | <code>string[]</code> | IAM actions required for the ListQueues API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListVersions">ListVersions</a></code> | <code>string[]</code> | IAM actions required for the ListVersions API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetJobsQueryResults">opGetJobsQueryResults</a></code> | <code>string[]</code> | IAM actions required for the GetJobsQueryResults API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetJobTemplate">opGetJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetPreset">opGetPreset</a></code> | <code>string[]</code> | IAM actions required for the GetPreset API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetQueue">opGetQueue</a></code> | <code>string[]</code> | IAM actions required for the GetQueue API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.Probe">Probe</a></code> | <code>string[]</code> | IAM actions required for the Probe API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.PutPolicy">PutPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.SearchJobs">SearchJobs</a></code> | <code>string[]</code> | IAM actions required for the SearchJobs API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.StartJobsQuery">StartJobsQuery</a></code> | <code>string[]</code> | IAM actions required for the StartJobsQuery API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.UpdateJobTemplate">UpdateJobTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateJobTemplate API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.UpdatePreset">UpdatePreset</a></code> | <code>string[]</code> | IAM actions required for the UpdatePreset API call. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.UpdateQueue">UpdateQueue</a></code> | <code>string[]</code> | IAM actions required for the UpdateQueue API call. |

---

##### `AssociateCertificate`<sup>Required</sup> <a name="AssociateCertificate" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.AssociateCertificate"></a>

```typescript
public readonly AssociateCertificate: string[];
```

- *Type:* string[]

IAM actions required for the AssociateCertificate API call.

---

##### `CancelJob`<sup>Required</sup> <a name="CancelJob" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CancelJob"></a>

```typescript
public readonly CancelJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelJob API call.

---

##### `CreateJob`<sup>Required</sup> <a name="CreateJob" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreateJob"></a>

```typescript
public readonly CreateJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateJob API call.

---

##### `CreateJobTemplate`<sup>Required</sup> <a name="CreateJobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreateJobTemplate"></a>

```typescript
public readonly CreateJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateJobTemplate API call.

---

##### `CreatePreset`<sup>Required</sup> <a name="CreatePreset" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreatePreset"></a>

```typescript
public readonly CreatePreset: string[];
```

- *Type:* string[]

IAM actions required for the CreatePreset API call.

---

##### `CreateQueue`<sup>Required</sup> <a name="CreateQueue" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreateQueue"></a>

```typescript
public readonly CreateQueue: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueue API call.

---

##### `CreateResourceShare`<sup>Required</sup> <a name="CreateResourceShare" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.CreateResourceShare"></a>

```typescript
public readonly CreateResourceShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceShare API call.

---

##### `DeleteJobTemplate`<sup>Required</sup> <a name="DeleteJobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DeleteJobTemplate"></a>

```typescript
public readonly DeleteJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteJobTemplate API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeletePreset`<sup>Required</sup> <a name="DeletePreset" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DeletePreset"></a>

```typescript
public readonly DeletePreset: string[];
```

- *Type:* string[]

IAM actions required for the DeletePreset API call.

---

##### `DeleteQueue`<sup>Required</sup> <a name="DeleteQueue" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DeleteQueue"></a>

```typescript
public readonly DeleteQueue: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueue API call.

---

##### `DescribeEndpoints`<sup>Required</sup> <a name="DescribeEndpoints" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DescribeEndpoints"></a>

```typescript
public readonly DescribeEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEndpoints API call.

---

##### `DisassociateCertificate`<sup>Required</sup> <a name="DisassociateCertificate" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.DisassociateCertificate"></a>

```typescript
public readonly DisassociateCertificate: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateCertificate API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListJobTemplates`<sup>Required</sup> <a name="ListJobTemplates" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListJobTemplates"></a>

```typescript
public readonly ListJobTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListJobTemplates API call.

---

##### `ListPresets`<sup>Required</sup> <a name="ListPresets" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListPresets"></a>

```typescript
public readonly ListPresets: string[];
```

- *Type:* string[]

IAM actions required for the ListPresets API call.

---

##### `ListQueues`<sup>Required</sup> <a name="ListQueues" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListQueues"></a>

```typescript
public readonly ListQueues: string[];
```

- *Type:* string[]

IAM actions required for the ListQueues API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVersions`<sup>Required</sup> <a name="ListVersions" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.ListVersions"></a>

```typescript
public readonly ListVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListVersions API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetJobsQueryResults`<sup>Required</sup> <a name="opGetJobsQueryResults" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetJobsQueryResults"></a>

```typescript
public readonly opGetJobsQueryResults: string[];
```

- *Type:* string[]

IAM actions required for the GetJobsQueryResults API call.

---

##### `opGetJobTemplate`<sup>Required</sup> <a name="opGetJobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetJobTemplate"></a>

```typescript
public readonly opGetJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetJobTemplate API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetPreset`<sup>Required</sup> <a name="opGetPreset" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetPreset"></a>

```typescript
public readonly opGetPreset: string[];
```

- *Type:* string[]

IAM actions required for the GetPreset API call.

---

##### `opGetQueue`<sup>Required</sup> <a name="opGetQueue" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.opGetQueue"></a>

```typescript
public readonly opGetQueue: string[];
```

- *Type:* string[]

IAM actions required for the GetQueue API call.

---

##### `Probe`<sup>Required</sup> <a name="Probe" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.Probe"></a>

```typescript
public readonly Probe: string[];
```

- *Type:* string[]

IAM actions required for the Probe API call.

---

##### `PutPolicy`<sup>Required</sup> <a name="PutPolicy" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.PutPolicy"></a>

```typescript
public readonly PutPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutPolicy API call.

---

##### `SearchJobs`<sup>Required</sup> <a name="SearchJobs" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.SearchJobs"></a>

```typescript
public readonly SearchJobs: string[];
```

- *Type:* string[]

IAM actions required for the SearchJobs API call.

---

##### `StartJobsQuery`<sup>Required</sup> <a name="StartJobsQuery" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.StartJobsQuery"></a>

```typescript
public readonly StartJobsQuery: string[];
```

- *Type:* string[]

IAM actions required for the StartJobsQuery API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateJobTemplate`<sup>Required</sup> <a name="UpdateJobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.UpdateJobTemplate"></a>

```typescript
public readonly UpdateJobTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateJobTemplate API call.

---

##### `UpdatePreset`<sup>Required</sup> <a name="UpdatePreset" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.UpdatePreset"></a>

```typescript
public readonly UpdatePreset: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePreset API call.

---

##### `UpdateQueue`<sup>Required</sup> <a name="UpdateQueue" id="@cdk_utils/iam.mediaconvert.MediaConvertOperations.property.UpdateQueue"></a>

```typescript
public readonly UpdateQueue: string[];
```

- *Type:* string[]

IAM actions required for the UpdateQueue API call.

---

### MediaConvertResources <a name="MediaConvertResources" id="@cdk_utils/iam.mediaconvert.MediaConvertResources"></a>

ARN builders, validators, and parsers for mediaconvert resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.Initializer"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

new mediaconvert.MediaConvertResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.certificateAssociation">certificateAssociation</a></code> | Builds an ARN for the CertificateAssociation resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidCertificateAssociationArn">isValidCertificateAssociationArn</a></code> | Validates whether a string is a valid ARN for the CertificateAssociation resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidJobArn">isValidJobArn</a></code> | Validates whether a string is a valid ARN for the Job resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidJobTemplateArn">isValidJobTemplateArn</a></code> | Validates whether a string is a valid ARN for the JobTemplate resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidPresetArn">isValidPresetArn</a></code> | Validates whether a string is a valid ARN for the Preset resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidQueueArn">isValidQueueArn</a></code> | Validates whether a string is a valid ARN for the Queue resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.job">job</a></code> | Builds an ARN for the Job resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.jobTemplate">jobTemplate</a></code> | Builds an ARN for the JobTemplate resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.parseCertificateAssociationArn">parseCertificateAssociationArn</a></code> | Parses a CertificateAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.parseJobArn">parseJobArn</a></code> | Parses a Job ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.parseJobTemplateArn">parseJobTemplateArn</a></code> | Parses a JobTemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.parsePresetArn">parsePresetArn</a></code> | Parses a Preset ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.parseQueueArn">parseQueueArn</a></code> | Parses a Queue ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.preset">preset</a></code> | Builds an ARN for the Preset resource. |
| <code><a href="#@cdk_utils/iam.mediaconvert.MediaConvertResources.queue">queue</a></code> | Builds an ARN for the Queue resource. |

---

##### `certificateAssociation` <a name="certificateAssociation" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.certificateAssociation"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.certificateAssociation(props: MediaConvertCertificateAssociationArnProps)
```

Builds an ARN for the CertificateAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.certificateAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconvert.MediaConvertCertificateAssociationArnProps">MediaConvertCertificateAssociationArnProps</a>

---

##### `isValidCertificateAssociationArn` <a name="isValidCertificateAssociationArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidCertificateAssociationArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.isValidCertificateAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the CertificateAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidCertificateAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobArn` <a name="isValidJobArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidJobArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.isValidJobArn(arn: string)
```

Validates whether a string is a valid ARN for the Job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidJobTemplateArn` <a name="isValidJobTemplateArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidJobTemplateArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.isValidJobTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the JobTemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidJobTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPresetArn` <a name="isValidPresetArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidPresetArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.isValidPresetArn(arn: string)
```

Validates whether a string is a valid ARN for the Preset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidPresetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQueueArn` <a name="isValidQueueArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidQueueArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.isValidQueueArn(arn: string)
```

Validates whether a string is a valid ARN for the Queue resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.isValidQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `job` <a name="job" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.job"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.job(props: MediaConvertJobArnProps)
```

Builds an ARN for the Job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.job.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobArnProps">MediaConvertJobArnProps</a>

---

##### `jobTemplate` <a name="jobTemplate" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.jobTemplate"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.jobTemplate(props: MediaConvertJobTemplateArnProps)
```

Builds an ARN for the JobTemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.jobTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconvert.MediaConvertJobTemplateArnProps">MediaConvertJobTemplateArnProps</a>

---

##### `parseCertificateAssociationArn` <a name="parseCertificateAssociationArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parseCertificateAssociationArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.parseCertificateAssociationArn(arn: string)
```

Parses a CertificateAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parseCertificateAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobArn` <a name="parseJobArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parseJobArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.parseJobArn(arn: string)
```

Parses a Job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parseJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseJobTemplateArn` <a name="parseJobTemplateArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parseJobTemplateArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.parseJobTemplateArn(arn: string)
```

Parses a JobTemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parseJobTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePresetArn` <a name="parsePresetArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parsePresetArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.parsePresetArn(arn: string)
```

Parses a Preset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parsePresetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQueueArn` <a name="parseQueueArn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parseQueueArn"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.parseQueueArn(arn: string)
```

Parses a Queue ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.parseQueueArn.parameter.arn"></a>

- *Type:* string

---

##### `preset` <a name="preset" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.preset"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.preset(props: MediaConvertPresetArnProps)
```

Builds an ARN for the Preset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.preset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconvert.MediaConvertPresetArnProps">MediaConvertPresetArnProps</a>

---

##### `queue` <a name="queue" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.queue"></a>

```typescript
import { mediaconvert } from '@cdk_utils/iam'

mediaconvert.MediaConvertResources.queue(props: MediaConvertQueueArnProps)
```

Builds an ARN for the Queue resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediaconvert.MediaConvertResources.queue.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediaconvert.MediaConvertQueueArnProps">MediaConvertQueueArnProps</a>

---




