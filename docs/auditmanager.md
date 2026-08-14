# `auditmanager` Submodule <a name="`auditmanager` Submodule" id="@cdk_utils/iam.auditmanager"></a>


## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentArnComponents <a name="AuditmanagerAssessmentArnComponents" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents"></a>

Parsed components of a assessment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

const auditmanagerAssessmentArnComponents: auditmanager.AuditmanagerAssessmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.property.assessmentId">assessmentId</a></code> | <code>string</code> | The AssessmentId component. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

The AssessmentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AuditmanagerAssessmentArnProps <a name="AuditmanagerAssessmentArnProps" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps"></a>

Properties for building a assessment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

const auditmanagerAssessmentArnProps: auditmanager.AuditmanagerAssessmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.property.assessmentId">assessmentId</a></code> | <code>string</code> | The AssessmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

The AssessmentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AuditmanagerAssessmentControlSetArnComponents <a name="AuditmanagerAssessmentControlSetArnComponents" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents"></a>

Parsed components of a assessmentControlSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

const auditmanagerAssessmentControlSetArnComponents: auditmanager.AuditmanagerAssessmentControlSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.assessmentId">assessmentId</a></code> | <code>string</code> | The AssessmentId component. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.controlSetId">controlSetId</a></code> | <code>string</code> | The ControlSetId component. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

The AssessmentId component.

---

##### `controlSetId`<sup>Required</sup> <a name="controlSetId" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.controlSetId"></a>

```typescript
public readonly controlSetId: string;
```

- *Type:* string

The ControlSetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AuditmanagerAssessmentControlSetArnProps <a name="AuditmanagerAssessmentControlSetArnProps" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps"></a>

Properties for building a assessmentControlSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

const auditmanagerAssessmentControlSetArnProps: auditmanager.AuditmanagerAssessmentControlSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.assessmentId">assessmentId</a></code> | <code>string</code> | The AssessmentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.controlSetId">controlSetId</a></code> | <code>string</code> | The ControlSetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assessmentId`<sup>Required</sup> <a name="assessmentId" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.assessmentId"></a>

```typescript
public readonly assessmentId: string;
```

- *Type:* string

The AssessmentId component of the ARN.

---

##### `controlSetId`<sup>Required</sup> <a name="controlSetId" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.controlSetId"></a>

```typescript
public readonly controlSetId: string;
```

- *Type:* string

The ControlSetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AuditmanagerAssessmentFrameworkArnComponents <a name="AuditmanagerAssessmentFrameworkArnComponents" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents"></a>

Parsed components of a assessmentFramework ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

const auditmanagerAssessmentFrameworkArnComponents: auditmanager.AuditmanagerAssessmentFrameworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.property.assessmentFrameworkId">assessmentFrameworkId</a></code> | <code>string</code> | The AssessmentFrameworkId component. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `assessmentFrameworkId`<sup>Required</sup> <a name="assessmentFrameworkId" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.property.assessmentFrameworkId"></a>

```typescript
public readonly assessmentFrameworkId: string;
```

- *Type:* string

The AssessmentFrameworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AuditmanagerAssessmentFrameworkArnProps <a name="AuditmanagerAssessmentFrameworkArnProps" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps"></a>

Properties for building a assessmentFramework ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

const auditmanagerAssessmentFrameworkArnProps: auditmanager.AuditmanagerAssessmentFrameworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.property.assessmentFrameworkId">assessmentFrameworkId</a></code> | <code>string</code> | The AssessmentFrameworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `assessmentFrameworkId`<sup>Required</sup> <a name="assessmentFrameworkId" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.property.assessmentFrameworkId"></a>

```typescript
public readonly assessmentFrameworkId: string;
```

- *Type:* string

The AssessmentFrameworkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AuditmanagerControlArnComponents <a name="AuditmanagerControlArnComponents" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents"></a>

Parsed components of a control ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

const auditmanagerControlArnComponents: auditmanager.AuditmanagerControlArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.property.controlId">controlId</a></code> | <code>string</code> | The ControlId component. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.property.controlId"></a>

```typescript
public readonly controlId: string;
```

- *Type:* string

The ControlId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AuditmanagerControlArnProps <a name="AuditmanagerControlArnProps" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps"></a>

Properties for building a control ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

const auditmanagerControlArnProps: auditmanager.AuditmanagerControlArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.property.controlId">controlId</a></code> | <code>string</code> | The ControlId component of the ARN. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.property.controlId"></a>

```typescript
public readonly controlId: string;
```

- *Type:* string

The ControlId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerActions <a name="AuditmanagerActions" id="@cdk_utils/iam.auditmanager.AuditmanagerActions"></a>

IAM action constants for the auditmanager service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

new auditmanager.AuditmanagerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetAccountStatus">actionGetAccountStatus</a></code> | <code>string</code> | [Read] auditmanager:GetAccountStatus. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetAssessment">actionGetAssessment</a></code> | <code>string</code> | [Read] auditmanager:GetAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetAssessmentFramework">actionGetAssessmentFramework</a></code> | <code>string</code> | [Read] auditmanager:GetAssessmentFramework. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetAssessmentReportUrl">actionGetAssessmentReportUrl</a></code> | <code>string</code> | [Read] auditmanager:GetAssessmentReportUrl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetChangeLogs">actionGetChangeLogs</a></code> | <code>string</code> | [Read] auditmanager:GetChangeLogs. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetControl">actionGetControl</a></code> | <code>string</code> | [Read] auditmanager:GetControl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetDelegations">actionGetDelegations</a></code> | <code>string</code> | [List] auditmanager:GetDelegations. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidence">actionGetEvidence</a></code> | <code>string</code> | [Read] auditmanager:GetEvidence. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceByEvidenceFolder">actionGetEvidenceByEvidenceFolder</a></code> | <code>string</code> | [Read] auditmanager:GetEvidenceByEvidenceFolder. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceFileUploadUrl">actionGetEvidenceFileUploadUrl</a></code> | <code>string</code> | [Read] auditmanager:GetEvidenceFileUploadUrl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceFolder">actionGetEvidenceFolder</a></code> | <code>string</code> | [Read] auditmanager:GetEvidenceFolder. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceFoldersByAssessment">actionGetEvidenceFoldersByAssessment</a></code> | <code>string</code> | [Read] auditmanager:GetEvidenceFoldersByAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceFoldersByAssessmentControl">actionGetEvidenceFoldersByAssessmentControl</a></code> | <code>string</code> | [Read] auditmanager:GetEvidenceFoldersByAssessmentControl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetInsights">actionGetInsights</a></code> | <code>string</code> | [Read] auditmanager:GetInsights. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetInsightsByAssessment">actionGetInsightsByAssessment</a></code> | <code>string</code> | [Read] auditmanager:GetInsightsByAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetOrganizationAdminAccount">actionGetOrganizationAdminAccount</a></code> | <code>string</code> | [Read] auditmanager:GetOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetServicesInScope">actionGetServicesInScope</a></code> | <code>string</code> | [Read] auditmanager:GetServicesInScope. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetSettings">actionGetSettings</a></code> | <code>string</code> | [Read] auditmanager:GetSettings. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AssociateAssessmentReportEvidenceFolder">AssociateAssessmentReportEvidenceFolder</a></code> | <code>string</code> | [Write] auditmanager:AssociateAssessmentReportEvidenceFolder. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchAssociateAssessmentReportEvidence">BatchAssociateAssessmentReportEvidence</a></code> | <code>string</code> | [Write] auditmanager:BatchAssociateAssessmentReportEvidence. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchCreateDelegationByAssessment">BatchCreateDelegationByAssessment</a></code> | <code>string</code> | [Write] auditmanager:BatchCreateDelegationByAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchDeleteDelegationByAssessment">BatchDeleteDelegationByAssessment</a></code> | <code>string</code> | [Write] auditmanager:BatchDeleteDelegationByAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchDisassociateAssessmentReportEvidence">BatchDisassociateAssessmentReportEvidence</a></code> | <code>string</code> | [Write] auditmanager:BatchDisassociateAssessmentReportEvidence. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchImportEvidenceToAssessmentControl">BatchImportEvidenceToAssessmentControl</a></code> | <code>string</code> | [Write] auditmanager:BatchImportEvidenceToAssessmentControl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.CreateAssessment">CreateAssessment</a></code> | <code>string</code> | [Write] auditmanager:CreateAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.CreateAssessmentFramework">CreateAssessmentFramework</a></code> | <code>string</code> | [Write] auditmanager:CreateAssessmentFramework. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.CreateAssessmentReport">CreateAssessmentReport</a></code> | <code>string</code> | [Write] auditmanager:CreateAssessmentReport. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.CreateControl">CreateControl</a></code> | <code>string</code> | [Write] auditmanager:CreateControl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteAssessment">DeleteAssessment</a></code> | <code>string</code> | [Write] auditmanager:DeleteAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteAssessmentFramework">DeleteAssessmentFramework</a></code> | <code>string</code> | [Write] auditmanager:DeleteAssessmentFramework. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteAssessmentFrameworkShare">DeleteAssessmentFrameworkShare</a></code> | <code>string</code> | [Write] auditmanager:DeleteAssessmentFrameworkShare. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteAssessmentReport">DeleteAssessmentReport</a></code> | <code>string</code> | [Write] auditmanager:DeleteAssessmentReport. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteControl">DeleteControl</a></code> | <code>string</code> | [Write] auditmanager:DeleteControl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeregisterAccount">DeregisterAccount</a></code> | <code>string</code> | [Write] auditmanager:DeregisterAccount. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeregisterOrganizationAdminAccount">DeregisterOrganizationAdminAccount</a></code> | <code>string</code> | [Write] auditmanager:DeregisterOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DisassociateAssessmentReportEvidenceFolder">DisassociateAssessmentReportEvidenceFolder</a></code> | <code>string</code> | [Write] auditmanager:DisassociateAssessmentReportEvidenceFolder. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessmentControlInsightsByControlDomain">ListAssessmentControlInsightsByControlDomain</a></code> | <code>string</code> | [List] auditmanager:ListAssessmentControlInsightsByControlDomain. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessmentFrameworks">ListAssessmentFrameworks</a></code> | <code>string</code> | [List] auditmanager:ListAssessmentFrameworks. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessmentFrameworkShareRequests">ListAssessmentFrameworkShareRequests</a></code> | <code>string</code> | [List] auditmanager:ListAssessmentFrameworkShareRequests. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessmentReports">ListAssessmentReports</a></code> | <code>string</code> | [List] auditmanager:ListAssessmentReports. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessments">ListAssessments</a></code> | <code>string</code> | [List] auditmanager:ListAssessments. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListControlDomainInsights">ListControlDomainInsights</a></code> | <code>string</code> | [List] auditmanager:ListControlDomainInsights. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListControlDomainInsightsByAssessment">ListControlDomainInsightsByAssessment</a></code> | <code>string</code> | [List] auditmanager:ListControlDomainInsightsByAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListControlInsightsByControlDomain">ListControlInsightsByControlDomain</a></code> | <code>string</code> | [List] auditmanager:ListControlInsightsByControlDomain. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListControls">ListControls</a></code> | <code>string</code> | [List] auditmanager:ListControls. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListKeywordsForDataSource">ListKeywordsForDataSource</a></code> | <code>string</code> | [List] auditmanager:ListKeywordsForDataSource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListNotifications">ListNotifications</a></code> | <code>string</code> | [List] auditmanager:ListNotifications. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] auditmanager:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.RegisterAccount">RegisterAccount</a></code> | <code>string</code> | [Write] auditmanager:RegisterAccount. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.RegisterOrganizationAdminAccount">RegisterOrganizationAdminAccount</a></code> | <code>string</code> | [Write] auditmanager:RegisterOrganizationAdminAccount. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.StartAssessmentFrameworkShare">StartAssessmentFrameworkShare</a></code> | <code>string</code> | [Write] auditmanager:StartAssessmentFrameworkShare. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] auditmanager:TagResource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] auditmanager:UntagResource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessment">UpdateAssessment</a></code> | <code>string</code> | [Write] auditmanager:UpdateAssessment. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentControl">UpdateAssessmentControl</a></code> | <code>string</code> | [Write] auditmanager:UpdateAssessmentControl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentControlSetStatus">UpdateAssessmentControlSetStatus</a></code> | <code>string</code> | [Write] auditmanager:UpdateAssessmentControlSetStatus. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentFramework">UpdateAssessmentFramework</a></code> | <code>string</code> | [Write] auditmanager:UpdateAssessmentFramework. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentFrameworkShare">UpdateAssessmentFrameworkShare</a></code> | <code>string</code> | [Write] auditmanager:UpdateAssessmentFrameworkShare. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentStatus">UpdateAssessmentStatus</a></code> | <code>string</code> | [Write] auditmanager:UpdateAssessmentStatus. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateControl">UpdateControl</a></code> | <code>string</code> | [Write] auditmanager:UpdateControl. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateSettings">UpdateSettings</a></code> | <code>string</code> | [Write] auditmanager:UpdateSettings. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ValidateAssessmentReportIntegrity">ValidateAssessmentReportIntegrity</a></code> | <code>string</code> | [Read] auditmanager:ValidateAssessmentReportIntegrity. |

---

##### `actionGetAccountStatus`<sup>Required</sup> <a name="actionGetAccountStatus" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetAccountStatus"></a>

```typescript
public readonly actionGetAccountStatus: string;
```

- *Type:* string

[Read] auditmanager:GetAccountStatus.

---

##### `actionGetAssessment`<sup>Required</sup> <a name="actionGetAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetAssessment"></a>

```typescript
public readonly actionGetAssessment: string;
```

- *Type:* string

[Read] auditmanager:GetAssessment.

---

##### `actionGetAssessmentFramework`<sup>Required</sup> <a name="actionGetAssessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetAssessmentFramework"></a>

```typescript
public readonly actionGetAssessmentFramework: string;
```

- *Type:* string

[Read] auditmanager:GetAssessmentFramework.

---

##### `actionGetAssessmentReportUrl`<sup>Required</sup> <a name="actionGetAssessmentReportUrl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetAssessmentReportUrl"></a>

```typescript
public readonly actionGetAssessmentReportUrl: string;
```

- *Type:* string

[Read] auditmanager:GetAssessmentReportUrl.

---

##### `actionGetChangeLogs`<sup>Required</sup> <a name="actionGetChangeLogs" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetChangeLogs"></a>

```typescript
public readonly actionGetChangeLogs: string;
```

- *Type:* string

[Read] auditmanager:GetChangeLogs.

---

##### `actionGetControl`<sup>Required</sup> <a name="actionGetControl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetControl"></a>

```typescript
public readonly actionGetControl: string;
```

- *Type:* string

[Read] auditmanager:GetControl.

---

##### `actionGetDelegations`<sup>Required</sup> <a name="actionGetDelegations" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetDelegations"></a>

```typescript
public readonly actionGetDelegations: string;
```

- *Type:* string

[List] auditmanager:GetDelegations.

---

##### `actionGetEvidence`<sup>Required</sup> <a name="actionGetEvidence" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidence"></a>

```typescript
public readonly actionGetEvidence: string;
```

- *Type:* string

[Read] auditmanager:GetEvidence.

---

##### `actionGetEvidenceByEvidenceFolder`<sup>Required</sup> <a name="actionGetEvidenceByEvidenceFolder" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceByEvidenceFolder"></a>

```typescript
public readonly actionGetEvidenceByEvidenceFolder: string;
```

- *Type:* string

[Read] auditmanager:GetEvidenceByEvidenceFolder.

---

##### `actionGetEvidenceFileUploadUrl`<sup>Required</sup> <a name="actionGetEvidenceFileUploadUrl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceFileUploadUrl"></a>

```typescript
public readonly actionGetEvidenceFileUploadUrl: string;
```

- *Type:* string

[Read] auditmanager:GetEvidenceFileUploadUrl.

---

##### `actionGetEvidenceFolder`<sup>Required</sup> <a name="actionGetEvidenceFolder" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceFolder"></a>

```typescript
public readonly actionGetEvidenceFolder: string;
```

- *Type:* string

[Read] auditmanager:GetEvidenceFolder.

---

##### `actionGetEvidenceFoldersByAssessment`<sup>Required</sup> <a name="actionGetEvidenceFoldersByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceFoldersByAssessment"></a>

```typescript
public readonly actionGetEvidenceFoldersByAssessment: string;
```

- *Type:* string

[Read] auditmanager:GetEvidenceFoldersByAssessment.

---

##### `actionGetEvidenceFoldersByAssessmentControl`<sup>Required</sup> <a name="actionGetEvidenceFoldersByAssessmentControl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetEvidenceFoldersByAssessmentControl"></a>

```typescript
public readonly actionGetEvidenceFoldersByAssessmentControl: string;
```

- *Type:* string

[Read] auditmanager:GetEvidenceFoldersByAssessmentControl.

---

##### `actionGetInsights`<sup>Required</sup> <a name="actionGetInsights" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetInsights"></a>

```typescript
public readonly actionGetInsights: string;
```

- *Type:* string

[Read] auditmanager:GetInsights.

---

##### `actionGetInsightsByAssessment`<sup>Required</sup> <a name="actionGetInsightsByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetInsightsByAssessment"></a>

```typescript
public readonly actionGetInsightsByAssessment: string;
```

- *Type:* string

[Read] auditmanager:GetInsightsByAssessment.

---

##### `actionGetOrganizationAdminAccount`<sup>Required</sup> <a name="actionGetOrganizationAdminAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetOrganizationAdminAccount"></a>

```typescript
public readonly actionGetOrganizationAdminAccount: string;
```

- *Type:* string

[Read] auditmanager:GetOrganizationAdminAccount.

---

##### `actionGetServicesInScope`<sup>Required</sup> <a name="actionGetServicesInScope" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetServicesInScope"></a>

```typescript
public readonly actionGetServicesInScope: string;
```

- *Type:* string

[Read] auditmanager:GetServicesInScope.

---

##### `actionGetSettings`<sup>Required</sup> <a name="actionGetSettings" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.actionGetSettings"></a>

```typescript
public readonly actionGetSettings: string;
```

- *Type:* string

[Read] auditmanager:GetSettings.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAssessmentReportEvidenceFolder`<sup>Required</sup> <a name="AssociateAssessmentReportEvidenceFolder" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.AssociateAssessmentReportEvidenceFolder"></a>

```typescript
public readonly AssociateAssessmentReportEvidenceFolder: string;
```

- *Type:* string

[Write] auditmanager:AssociateAssessmentReportEvidenceFolder.

---

##### `BatchAssociateAssessmentReportEvidence`<sup>Required</sup> <a name="BatchAssociateAssessmentReportEvidence" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchAssociateAssessmentReportEvidence"></a>

```typescript
public readonly BatchAssociateAssessmentReportEvidence: string;
```

- *Type:* string

[Write] auditmanager:BatchAssociateAssessmentReportEvidence.

---

##### `BatchCreateDelegationByAssessment`<sup>Required</sup> <a name="BatchCreateDelegationByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchCreateDelegationByAssessment"></a>

```typescript
public readonly BatchCreateDelegationByAssessment: string;
```

- *Type:* string

[Write] auditmanager:BatchCreateDelegationByAssessment.

---

##### `BatchDeleteDelegationByAssessment`<sup>Required</sup> <a name="BatchDeleteDelegationByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchDeleteDelegationByAssessment"></a>

```typescript
public readonly BatchDeleteDelegationByAssessment: string;
```

- *Type:* string

[Write] auditmanager:BatchDeleteDelegationByAssessment.

---

##### `BatchDisassociateAssessmentReportEvidence`<sup>Required</sup> <a name="BatchDisassociateAssessmentReportEvidence" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchDisassociateAssessmentReportEvidence"></a>

```typescript
public readonly BatchDisassociateAssessmentReportEvidence: string;
```

- *Type:* string

[Write] auditmanager:BatchDisassociateAssessmentReportEvidence.

---

##### `BatchImportEvidenceToAssessmentControl`<sup>Required</sup> <a name="BatchImportEvidenceToAssessmentControl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.BatchImportEvidenceToAssessmentControl"></a>

```typescript
public readonly BatchImportEvidenceToAssessmentControl: string;
```

- *Type:* string

[Write] auditmanager:BatchImportEvidenceToAssessmentControl.

---

##### `CreateAssessment`<sup>Required</sup> <a name="CreateAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.CreateAssessment"></a>

```typescript
public readonly CreateAssessment: string;
```

- *Type:* string

[Write] auditmanager:CreateAssessment.

---

##### `CreateAssessmentFramework`<sup>Required</sup> <a name="CreateAssessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.CreateAssessmentFramework"></a>

```typescript
public readonly CreateAssessmentFramework: string;
```

- *Type:* string

[Write] auditmanager:CreateAssessmentFramework.

---

##### `CreateAssessmentReport`<sup>Required</sup> <a name="CreateAssessmentReport" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.CreateAssessmentReport"></a>

```typescript
public readonly CreateAssessmentReport: string;
```

- *Type:* string

[Write] auditmanager:CreateAssessmentReport.

---

##### `CreateControl`<sup>Required</sup> <a name="CreateControl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.CreateControl"></a>

```typescript
public readonly CreateControl: string;
```

- *Type:* string

[Write] auditmanager:CreateControl.

---

##### `DeleteAssessment`<sup>Required</sup> <a name="DeleteAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteAssessment"></a>

```typescript
public readonly DeleteAssessment: string;
```

- *Type:* string

[Write] auditmanager:DeleteAssessment.

---

##### `DeleteAssessmentFramework`<sup>Required</sup> <a name="DeleteAssessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteAssessmentFramework"></a>

```typescript
public readonly DeleteAssessmentFramework: string;
```

- *Type:* string

[Write] auditmanager:DeleteAssessmentFramework.

---

##### `DeleteAssessmentFrameworkShare`<sup>Required</sup> <a name="DeleteAssessmentFrameworkShare" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteAssessmentFrameworkShare"></a>

```typescript
public readonly DeleteAssessmentFrameworkShare: string;
```

- *Type:* string

[Write] auditmanager:DeleteAssessmentFrameworkShare.

---

##### `DeleteAssessmentReport`<sup>Required</sup> <a name="DeleteAssessmentReport" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteAssessmentReport"></a>

```typescript
public readonly DeleteAssessmentReport: string;
```

- *Type:* string

[Write] auditmanager:DeleteAssessmentReport.

---

##### `DeleteControl`<sup>Required</sup> <a name="DeleteControl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeleteControl"></a>

```typescript
public readonly DeleteControl: string;
```

- *Type:* string

[Write] auditmanager:DeleteControl.

---

##### `DeregisterAccount`<sup>Required</sup> <a name="DeregisterAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeregisterAccount"></a>

```typescript
public readonly DeregisterAccount: string;
```

- *Type:* string

[Write] auditmanager:DeregisterAccount.

---

##### `DeregisterOrganizationAdminAccount`<sup>Required</sup> <a name="DeregisterOrganizationAdminAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DeregisterOrganizationAdminAccount"></a>

```typescript
public readonly DeregisterOrganizationAdminAccount: string;
```

- *Type:* string

[Write] auditmanager:DeregisterOrganizationAdminAccount.

---

##### `DisassociateAssessmentReportEvidenceFolder`<sup>Required</sup> <a name="DisassociateAssessmentReportEvidenceFolder" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.DisassociateAssessmentReportEvidenceFolder"></a>

```typescript
public readonly DisassociateAssessmentReportEvidenceFolder: string;
```

- *Type:* string

[Write] auditmanager:DisassociateAssessmentReportEvidenceFolder.

---

##### `ListAssessmentControlInsightsByControlDomain`<sup>Required</sup> <a name="ListAssessmentControlInsightsByControlDomain" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessmentControlInsightsByControlDomain"></a>

```typescript
public readonly ListAssessmentControlInsightsByControlDomain: string;
```

- *Type:* string

[List] auditmanager:ListAssessmentControlInsightsByControlDomain.

---

##### `ListAssessmentFrameworks`<sup>Required</sup> <a name="ListAssessmentFrameworks" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessmentFrameworks"></a>

```typescript
public readonly ListAssessmentFrameworks: string;
```

- *Type:* string

[List] auditmanager:ListAssessmentFrameworks.

---

##### `ListAssessmentFrameworkShareRequests`<sup>Required</sup> <a name="ListAssessmentFrameworkShareRequests" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessmentFrameworkShareRequests"></a>

```typescript
public readonly ListAssessmentFrameworkShareRequests: string;
```

- *Type:* string

[List] auditmanager:ListAssessmentFrameworkShareRequests.

---

##### `ListAssessmentReports`<sup>Required</sup> <a name="ListAssessmentReports" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessmentReports"></a>

```typescript
public readonly ListAssessmentReports: string;
```

- *Type:* string

[List] auditmanager:ListAssessmentReports.

---

##### `ListAssessments`<sup>Required</sup> <a name="ListAssessments" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListAssessments"></a>

```typescript
public readonly ListAssessments: string;
```

- *Type:* string

[List] auditmanager:ListAssessments.

---

##### `ListControlDomainInsights`<sup>Required</sup> <a name="ListControlDomainInsights" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListControlDomainInsights"></a>

```typescript
public readonly ListControlDomainInsights: string;
```

- *Type:* string

[List] auditmanager:ListControlDomainInsights.

---

##### `ListControlDomainInsightsByAssessment`<sup>Required</sup> <a name="ListControlDomainInsightsByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListControlDomainInsightsByAssessment"></a>

```typescript
public readonly ListControlDomainInsightsByAssessment: string;
```

- *Type:* string

[List] auditmanager:ListControlDomainInsightsByAssessment.

---

##### `ListControlInsightsByControlDomain`<sup>Required</sup> <a name="ListControlInsightsByControlDomain" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListControlInsightsByControlDomain"></a>

```typescript
public readonly ListControlInsightsByControlDomain: string;
```

- *Type:* string

[List] auditmanager:ListControlInsightsByControlDomain.

---

##### `ListControls`<sup>Required</sup> <a name="ListControls" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListControls"></a>

```typescript
public readonly ListControls: string;
```

- *Type:* string

[List] auditmanager:ListControls.

---

##### `ListKeywordsForDataSource`<sup>Required</sup> <a name="ListKeywordsForDataSource" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListKeywordsForDataSource"></a>

```typescript
public readonly ListKeywordsForDataSource: string;
```

- *Type:* string

[List] auditmanager:ListKeywordsForDataSource.

---

##### `ListNotifications`<sup>Required</sup> <a name="ListNotifications" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListNotifications"></a>

```typescript
public readonly ListNotifications: string;
```

- *Type:* string

[List] auditmanager:ListNotifications.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] auditmanager:ListTagsForResource.

---

##### `RegisterAccount`<sup>Required</sup> <a name="RegisterAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.RegisterAccount"></a>

```typescript
public readonly RegisterAccount: string;
```

- *Type:* string

[Write] auditmanager:RegisterAccount.

---

##### `RegisterOrganizationAdminAccount`<sup>Required</sup> <a name="RegisterOrganizationAdminAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.RegisterOrganizationAdminAccount"></a>

```typescript
public readonly RegisterOrganizationAdminAccount: string;
```

- *Type:* string

[Write] auditmanager:RegisterOrganizationAdminAccount.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAssessmentFrameworkShare`<sup>Required</sup> <a name="StartAssessmentFrameworkShare" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.StartAssessmentFrameworkShare"></a>

```typescript
public readonly StartAssessmentFrameworkShare: string;
```

- *Type:* string

[Write] auditmanager:StartAssessmentFrameworkShare.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] auditmanager:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] auditmanager:UntagResource.

---

##### `UpdateAssessment`<sup>Required</sup> <a name="UpdateAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessment"></a>

```typescript
public readonly UpdateAssessment: string;
```

- *Type:* string

[Write] auditmanager:UpdateAssessment.

---

##### `UpdateAssessmentControl`<sup>Required</sup> <a name="UpdateAssessmentControl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentControl"></a>

```typescript
public readonly UpdateAssessmentControl: string;
```

- *Type:* string

[Write] auditmanager:UpdateAssessmentControl.

---

##### `UpdateAssessmentControlSetStatus`<sup>Required</sup> <a name="UpdateAssessmentControlSetStatus" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentControlSetStatus"></a>

```typescript
public readonly UpdateAssessmentControlSetStatus: string;
```

- *Type:* string

[Write] auditmanager:UpdateAssessmentControlSetStatus.

---

##### `UpdateAssessmentFramework`<sup>Required</sup> <a name="UpdateAssessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentFramework"></a>

```typescript
public readonly UpdateAssessmentFramework: string;
```

- *Type:* string

[Write] auditmanager:UpdateAssessmentFramework.

---

##### `UpdateAssessmentFrameworkShare`<sup>Required</sup> <a name="UpdateAssessmentFrameworkShare" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentFrameworkShare"></a>

```typescript
public readonly UpdateAssessmentFrameworkShare: string;
```

- *Type:* string

[Write] auditmanager:UpdateAssessmentFrameworkShare.

---

##### `UpdateAssessmentStatus`<sup>Required</sup> <a name="UpdateAssessmentStatus" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateAssessmentStatus"></a>

```typescript
public readonly UpdateAssessmentStatus: string;
```

- *Type:* string

[Write] auditmanager:UpdateAssessmentStatus.

---

##### `UpdateControl`<sup>Required</sup> <a name="UpdateControl" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateControl"></a>

```typescript
public readonly UpdateControl: string;
```

- *Type:* string

[Write] auditmanager:UpdateControl.

---

##### `UpdateSettings`<sup>Required</sup> <a name="UpdateSettings" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.UpdateSettings"></a>

```typescript
public readonly UpdateSettings: string;
```

- *Type:* string

[Write] auditmanager:UpdateSettings.

---

##### `ValidateAssessmentReportIntegrity`<sup>Required</sup> <a name="ValidateAssessmentReportIntegrity" id="@cdk_utils/iam.auditmanager.AuditmanagerActions.property.ValidateAssessmentReportIntegrity"></a>

```typescript
public readonly ValidateAssessmentReportIntegrity: string;
```

- *Type:* string

[Read] auditmanager:ValidateAssessmentReportIntegrity.

---

### AuditmanagerConditions <a name="AuditmanagerConditions" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions"></a>

Condition key constants and builders for auditmanager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

new auditmanager.AuditmanagerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.requestTag"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.resourceTag"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.tagKeys"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.CreateAssessmentConditionKeys">CreateAssessmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAssessment action. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.CreateAssessmentFrameworkConditionKeys">CreateAssessmentFrameworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAssessmentFramework action. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.CreateControlConditionKeys">CreateControlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateControl action. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.DeleteAssessmentConditionKeys">DeleteAssessmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAssessment action. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.DeleteAssessmentFrameworkConditionKeys">DeleteAssessmentFrameworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAssessmentFramework action. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.DeleteControlConditionKeys">DeleteControlConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteControl action. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAssessmentConditionKeys`<sup>Required</sup> <a name="CreateAssessmentConditionKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.CreateAssessmentConditionKeys"></a>

```typescript
public readonly CreateAssessmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAssessment action.

---

##### `CreateAssessmentFrameworkConditionKeys`<sup>Required</sup> <a name="CreateAssessmentFrameworkConditionKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.CreateAssessmentFrameworkConditionKeys"></a>

```typescript
public readonly CreateAssessmentFrameworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAssessmentFramework action.

---

##### `CreateControlConditionKeys`<sup>Required</sup> <a name="CreateControlConditionKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.CreateControlConditionKeys"></a>

```typescript
public readonly CreateControlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateControl action.

---

##### `DeleteAssessmentConditionKeys`<sup>Required</sup> <a name="DeleteAssessmentConditionKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.DeleteAssessmentConditionKeys"></a>

```typescript
public readonly DeleteAssessmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAssessment action.

---

##### `DeleteAssessmentFrameworkConditionKeys`<sup>Required</sup> <a name="DeleteAssessmentFrameworkConditionKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.DeleteAssessmentFrameworkConditionKeys"></a>

```typescript
public readonly DeleteAssessmentFrameworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAssessmentFramework action.

---

##### `DeleteControlConditionKeys`<sup>Required</sup> <a name="DeleteControlConditionKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.DeleteControlConditionKeys"></a>

```typescript
public readonly DeleteControlConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteControl action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.auditmanager.AuditmanagerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AuditmanagerOperations <a name="AuditmanagerOperations" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations"></a>

API operation to required IAM actions mapping for auditmanager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

new auditmanager.AuditmanagerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.AssociateAssessmentReportEvidenceFolder">AssociateAssessmentReportEvidenceFolder</a></code> | <code>string[]</code> | IAM actions required for the AssociateAssessmentReportEvidenceFolder API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchAssociateAssessmentReportEvidence">BatchAssociateAssessmentReportEvidence</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateAssessmentReportEvidence API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchCreateDelegationByAssessment">BatchCreateDelegationByAssessment</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateDelegationByAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchDeleteDelegationByAssessment">BatchDeleteDelegationByAssessment</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteDelegationByAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchDisassociateAssessmentReportEvidence">BatchDisassociateAssessmentReportEvidence</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateAssessmentReportEvidence API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchImportEvidenceToAssessmentControl">BatchImportEvidenceToAssessmentControl</a></code> | <code>string[]</code> | IAM actions required for the BatchImportEvidenceToAssessmentControl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.CreateAssessment">CreateAssessment</a></code> | <code>string[]</code> | IAM actions required for the CreateAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.CreateAssessmentFramework">CreateAssessmentFramework</a></code> | <code>string[]</code> | IAM actions required for the CreateAssessmentFramework API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.CreateAssessmentReport">CreateAssessmentReport</a></code> | <code>string[]</code> | IAM actions required for the CreateAssessmentReport API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.CreateControl">CreateControl</a></code> | <code>string[]</code> | IAM actions required for the CreateControl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteAssessment">DeleteAssessment</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteAssessmentFramework">DeleteAssessmentFramework</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssessmentFramework API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteAssessmentFrameworkShare">DeleteAssessmentFrameworkShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssessmentFrameworkShare API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteAssessmentReport">DeleteAssessmentReport</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssessmentReport API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteControl">DeleteControl</a></code> | <code>string[]</code> | IAM actions required for the DeleteControl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeregisterAccount">DeregisterAccount</a></code> | <code>string[]</code> | IAM actions required for the DeregisterAccount API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeregisterOrganizationAdminAccount">DeregisterOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the DeregisterOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DisassociateAssessmentReportEvidenceFolder">DisassociateAssessmentReportEvidenceFolder</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAssessmentReportEvidenceFolder API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessmentControlInsightsByControlDomain">ListAssessmentControlInsightsByControlDomain</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentControlInsightsByControlDomain API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessmentFrameworks">ListAssessmentFrameworks</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentFrameworks API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessmentFrameworkShareRequests">ListAssessmentFrameworkShareRequests</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentFrameworkShareRequests API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessmentReports">ListAssessmentReports</a></code> | <code>string[]</code> | IAM actions required for the ListAssessmentReports API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessments">ListAssessments</a></code> | <code>string[]</code> | IAM actions required for the ListAssessments API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListControlDomainInsights">ListControlDomainInsights</a></code> | <code>string[]</code> | IAM actions required for the ListControlDomainInsights API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListControlDomainInsightsByAssessment">ListControlDomainInsightsByAssessment</a></code> | <code>string[]</code> | IAM actions required for the ListControlDomainInsightsByAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListControlInsightsByControlDomain">ListControlInsightsByControlDomain</a></code> | <code>string[]</code> | IAM actions required for the ListControlInsightsByControlDomain API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListControls">ListControls</a></code> | <code>string[]</code> | IAM actions required for the ListControls API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListKeywordsForDataSource">ListKeywordsForDataSource</a></code> | <code>string[]</code> | IAM actions required for the ListKeywordsForDataSource API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListNotifications">ListNotifications</a></code> | <code>string[]</code> | IAM actions required for the ListNotifications API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetAccountStatus">opGetAccountStatus</a></code> | <code>string[]</code> | IAM actions required for the GetAccountStatus API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetAssessment">opGetAssessment</a></code> | <code>string[]</code> | IAM actions required for the GetAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetAssessmentFramework">opGetAssessmentFramework</a></code> | <code>string[]</code> | IAM actions required for the GetAssessmentFramework API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetAssessmentReportUrl">opGetAssessmentReportUrl</a></code> | <code>string[]</code> | IAM actions required for the GetAssessmentReportUrl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetChangeLogs">opGetChangeLogs</a></code> | <code>string[]</code> | IAM actions required for the GetChangeLogs API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetControl">opGetControl</a></code> | <code>string[]</code> | IAM actions required for the GetControl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetDelegations">opGetDelegations</a></code> | <code>string[]</code> | IAM actions required for the GetDelegations API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidence">opGetEvidence</a></code> | <code>string[]</code> | IAM actions required for the GetEvidence API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceByEvidenceFolder">opGetEvidenceByEvidenceFolder</a></code> | <code>string[]</code> | IAM actions required for the GetEvidenceByEvidenceFolder API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceFileUploadUrl">opGetEvidenceFileUploadUrl</a></code> | <code>string[]</code> | IAM actions required for the GetEvidenceFileUploadUrl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceFolder">opGetEvidenceFolder</a></code> | <code>string[]</code> | IAM actions required for the GetEvidenceFolder API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceFoldersByAssessment">opGetEvidenceFoldersByAssessment</a></code> | <code>string[]</code> | IAM actions required for the GetEvidenceFoldersByAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceFoldersByAssessmentControl">opGetEvidenceFoldersByAssessmentControl</a></code> | <code>string[]</code> | IAM actions required for the GetEvidenceFoldersByAssessmentControl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetInsights">opGetInsights</a></code> | <code>string[]</code> | IAM actions required for the GetInsights API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetInsightsByAssessment">opGetInsightsByAssessment</a></code> | <code>string[]</code> | IAM actions required for the GetInsightsByAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetOrganizationAdminAccount">opGetOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the GetOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetServicesInScope">opGetServicesInScope</a></code> | <code>string[]</code> | IAM actions required for the GetServicesInScope API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetSettings">opGetSettings</a></code> | <code>string[]</code> | IAM actions required for the GetSettings API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.RegisterAccount">RegisterAccount</a></code> | <code>string[]</code> | IAM actions required for the RegisterAccount API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.RegisterOrganizationAdminAccount">RegisterOrganizationAdminAccount</a></code> | <code>string[]</code> | IAM actions required for the RegisterOrganizationAdminAccount API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.StartAssessmentFrameworkShare">StartAssessmentFrameworkShare</a></code> | <code>string[]</code> | IAM actions required for the StartAssessmentFrameworkShare API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessment">UpdateAssessment</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssessment API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentControl">UpdateAssessmentControl</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssessmentControl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentControlSetStatus">UpdateAssessmentControlSetStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssessmentControlSetStatus API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentFramework">UpdateAssessmentFramework</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssessmentFramework API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentFrameworkShare">UpdateAssessmentFrameworkShare</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssessmentFrameworkShare API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentStatus">UpdateAssessmentStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssessmentStatus API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateControl">UpdateControl</a></code> | <code>string[]</code> | IAM actions required for the UpdateControl API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateSettings">UpdateSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateSettings API call. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ValidateAssessmentReportIntegrity">ValidateAssessmentReportIntegrity</a></code> | <code>string[]</code> | IAM actions required for the ValidateAssessmentReportIntegrity API call. |

---

##### `AssociateAssessmentReportEvidenceFolder`<sup>Required</sup> <a name="AssociateAssessmentReportEvidenceFolder" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.AssociateAssessmentReportEvidenceFolder"></a>

```typescript
public readonly AssociateAssessmentReportEvidenceFolder: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAssessmentReportEvidenceFolder API call.

---

##### `BatchAssociateAssessmentReportEvidence`<sup>Required</sup> <a name="BatchAssociateAssessmentReportEvidence" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchAssociateAssessmentReportEvidence"></a>

```typescript
public readonly BatchAssociateAssessmentReportEvidence: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateAssessmentReportEvidence API call.

---

##### `BatchCreateDelegationByAssessment`<sup>Required</sup> <a name="BatchCreateDelegationByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchCreateDelegationByAssessment"></a>

```typescript
public readonly BatchCreateDelegationByAssessment: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateDelegationByAssessment API call.

---

##### `BatchDeleteDelegationByAssessment`<sup>Required</sup> <a name="BatchDeleteDelegationByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchDeleteDelegationByAssessment"></a>

```typescript
public readonly BatchDeleteDelegationByAssessment: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteDelegationByAssessment API call.

---

##### `BatchDisassociateAssessmentReportEvidence`<sup>Required</sup> <a name="BatchDisassociateAssessmentReportEvidence" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchDisassociateAssessmentReportEvidence"></a>

```typescript
public readonly BatchDisassociateAssessmentReportEvidence: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateAssessmentReportEvidence API call.

---

##### `BatchImportEvidenceToAssessmentControl`<sup>Required</sup> <a name="BatchImportEvidenceToAssessmentControl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.BatchImportEvidenceToAssessmentControl"></a>

```typescript
public readonly BatchImportEvidenceToAssessmentControl: string[];
```

- *Type:* string[]

IAM actions required for the BatchImportEvidenceToAssessmentControl API call.

---

##### `CreateAssessment`<sup>Required</sup> <a name="CreateAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.CreateAssessment"></a>

```typescript
public readonly CreateAssessment: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssessment API call.

---

##### `CreateAssessmentFramework`<sup>Required</sup> <a name="CreateAssessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.CreateAssessmentFramework"></a>

```typescript
public readonly CreateAssessmentFramework: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssessmentFramework API call.

---

##### `CreateAssessmentReport`<sup>Required</sup> <a name="CreateAssessmentReport" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.CreateAssessmentReport"></a>

```typescript
public readonly CreateAssessmentReport: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssessmentReport API call.

---

##### `CreateControl`<sup>Required</sup> <a name="CreateControl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.CreateControl"></a>

```typescript
public readonly CreateControl: string[];
```

- *Type:* string[]

IAM actions required for the CreateControl API call.

---

##### `DeleteAssessment`<sup>Required</sup> <a name="DeleteAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteAssessment"></a>

```typescript
public readonly DeleteAssessment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssessment API call.

---

##### `DeleteAssessmentFramework`<sup>Required</sup> <a name="DeleteAssessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteAssessmentFramework"></a>

```typescript
public readonly DeleteAssessmentFramework: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssessmentFramework API call.

---

##### `DeleteAssessmentFrameworkShare`<sup>Required</sup> <a name="DeleteAssessmentFrameworkShare" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteAssessmentFrameworkShare"></a>

```typescript
public readonly DeleteAssessmentFrameworkShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssessmentFrameworkShare API call.

---

##### `DeleteAssessmentReport`<sup>Required</sup> <a name="DeleteAssessmentReport" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteAssessmentReport"></a>

```typescript
public readonly DeleteAssessmentReport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssessmentReport API call.

---

##### `DeleteControl`<sup>Required</sup> <a name="DeleteControl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeleteControl"></a>

```typescript
public readonly DeleteControl: string[];
```

- *Type:* string[]

IAM actions required for the DeleteControl API call.

---

##### `DeregisterAccount`<sup>Required</sup> <a name="DeregisterAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeregisterAccount"></a>

```typescript
public readonly DeregisterAccount: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterAccount API call.

---

##### `DeregisterOrganizationAdminAccount`<sup>Required</sup> <a name="DeregisterOrganizationAdminAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DeregisterOrganizationAdminAccount"></a>

```typescript
public readonly DeregisterOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterOrganizationAdminAccount API call.

---

##### `DisassociateAssessmentReportEvidenceFolder`<sup>Required</sup> <a name="DisassociateAssessmentReportEvidenceFolder" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.DisassociateAssessmentReportEvidenceFolder"></a>

```typescript
public readonly DisassociateAssessmentReportEvidenceFolder: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAssessmentReportEvidenceFolder API call.

---

##### `ListAssessmentControlInsightsByControlDomain`<sup>Required</sup> <a name="ListAssessmentControlInsightsByControlDomain" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessmentControlInsightsByControlDomain"></a>

```typescript
public readonly ListAssessmentControlInsightsByControlDomain: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentControlInsightsByControlDomain API call.

---

##### `ListAssessmentFrameworks`<sup>Required</sup> <a name="ListAssessmentFrameworks" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessmentFrameworks"></a>

```typescript
public readonly ListAssessmentFrameworks: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentFrameworks API call.

---

##### `ListAssessmentFrameworkShareRequests`<sup>Required</sup> <a name="ListAssessmentFrameworkShareRequests" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessmentFrameworkShareRequests"></a>

```typescript
public readonly ListAssessmentFrameworkShareRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentFrameworkShareRequests API call.

---

##### `ListAssessmentReports`<sup>Required</sup> <a name="ListAssessmentReports" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessmentReports"></a>

```typescript
public readonly ListAssessmentReports: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessmentReports API call.

---

##### `ListAssessments`<sup>Required</sup> <a name="ListAssessments" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListAssessments"></a>

```typescript
public readonly ListAssessments: string[];
```

- *Type:* string[]

IAM actions required for the ListAssessments API call.

---

##### `ListControlDomainInsights`<sup>Required</sup> <a name="ListControlDomainInsights" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListControlDomainInsights"></a>

```typescript
public readonly ListControlDomainInsights: string[];
```

- *Type:* string[]

IAM actions required for the ListControlDomainInsights API call.

---

##### `ListControlDomainInsightsByAssessment`<sup>Required</sup> <a name="ListControlDomainInsightsByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListControlDomainInsightsByAssessment"></a>

```typescript
public readonly ListControlDomainInsightsByAssessment: string[];
```

- *Type:* string[]

IAM actions required for the ListControlDomainInsightsByAssessment API call.

---

##### `ListControlInsightsByControlDomain`<sup>Required</sup> <a name="ListControlInsightsByControlDomain" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListControlInsightsByControlDomain"></a>

```typescript
public readonly ListControlInsightsByControlDomain: string[];
```

- *Type:* string[]

IAM actions required for the ListControlInsightsByControlDomain API call.

---

##### `ListControls`<sup>Required</sup> <a name="ListControls" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListControls"></a>

```typescript
public readonly ListControls: string[];
```

- *Type:* string[]

IAM actions required for the ListControls API call.

---

##### `ListKeywordsForDataSource`<sup>Required</sup> <a name="ListKeywordsForDataSource" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListKeywordsForDataSource"></a>

```typescript
public readonly ListKeywordsForDataSource: string[];
```

- *Type:* string[]

IAM actions required for the ListKeywordsForDataSource API call.

---

##### `ListNotifications`<sup>Required</sup> <a name="ListNotifications" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListNotifications"></a>

```typescript
public readonly ListNotifications: string[];
```

- *Type:* string[]

IAM actions required for the ListNotifications API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountStatus`<sup>Required</sup> <a name="opGetAccountStatus" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetAccountStatus"></a>

```typescript
public readonly opGetAccountStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountStatus API call.

---

##### `opGetAssessment`<sup>Required</sup> <a name="opGetAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetAssessment"></a>

```typescript
public readonly opGetAssessment: string[];
```

- *Type:* string[]

IAM actions required for the GetAssessment API call.

---

##### `opGetAssessmentFramework`<sup>Required</sup> <a name="opGetAssessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetAssessmentFramework"></a>

```typescript
public readonly opGetAssessmentFramework: string[];
```

- *Type:* string[]

IAM actions required for the GetAssessmentFramework API call.

---

##### `opGetAssessmentReportUrl`<sup>Required</sup> <a name="opGetAssessmentReportUrl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetAssessmentReportUrl"></a>

```typescript
public readonly opGetAssessmentReportUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetAssessmentReportUrl API call.

---

##### `opGetChangeLogs`<sup>Required</sup> <a name="opGetChangeLogs" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetChangeLogs"></a>

```typescript
public readonly opGetChangeLogs: string[];
```

- *Type:* string[]

IAM actions required for the GetChangeLogs API call.

---

##### `opGetControl`<sup>Required</sup> <a name="opGetControl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetControl"></a>

```typescript
public readonly opGetControl: string[];
```

- *Type:* string[]

IAM actions required for the GetControl API call.

---

##### `opGetDelegations`<sup>Required</sup> <a name="opGetDelegations" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetDelegations"></a>

```typescript
public readonly opGetDelegations: string[];
```

- *Type:* string[]

IAM actions required for the GetDelegations API call.

---

##### `opGetEvidence`<sup>Required</sup> <a name="opGetEvidence" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidence"></a>

```typescript
public readonly opGetEvidence: string[];
```

- *Type:* string[]

IAM actions required for the GetEvidence API call.

---

##### `opGetEvidenceByEvidenceFolder`<sup>Required</sup> <a name="opGetEvidenceByEvidenceFolder" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceByEvidenceFolder"></a>

```typescript
public readonly opGetEvidenceByEvidenceFolder: string[];
```

- *Type:* string[]

IAM actions required for the GetEvidenceByEvidenceFolder API call.

---

##### `opGetEvidenceFileUploadUrl`<sup>Required</sup> <a name="opGetEvidenceFileUploadUrl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceFileUploadUrl"></a>

```typescript
public readonly opGetEvidenceFileUploadUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetEvidenceFileUploadUrl API call.

---

##### `opGetEvidenceFolder`<sup>Required</sup> <a name="opGetEvidenceFolder" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceFolder"></a>

```typescript
public readonly opGetEvidenceFolder: string[];
```

- *Type:* string[]

IAM actions required for the GetEvidenceFolder API call.

---

##### `opGetEvidenceFoldersByAssessment`<sup>Required</sup> <a name="opGetEvidenceFoldersByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceFoldersByAssessment"></a>

```typescript
public readonly opGetEvidenceFoldersByAssessment: string[];
```

- *Type:* string[]

IAM actions required for the GetEvidenceFoldersByAssessment API call.

---

##### `opGetEvidenceFoldersByAssessmentControl`<sup>Required</sup> <a name="opGetEvidenceFoldersByAssessmentControl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetEvidenceFoldersByAssessmentControl"></a>

```typescript
public readonly opGetEvidenceFoldersByAssessmentControl: string[];
```

- *Type:* string[]

IAM actions required for the GetEvidenceFoldersByAssessmentControl API call.

---

##### `opGetInsights`<sup>Required</sup> <a name="opGetInsights" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetInsights"></a>

```typescript
public readonly opGetInsights: string[];
```

- *Type:* string[]

IAM actions required for the GetInsights API call.

---

##### `opGetInsightsByAssessment`<sup>Required</sup> <a name="opGetInsightsByAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetInsightsByAssessment"></a>

```typescript
public readonly opGetInsightsByAssessment: string[];
```

- *Type:* string[]

IAM actions required for the GetInsightsByAssessment API call.

---

##### `opGetOrganizationAdminAccount`<sup>Required</sup> <a name="opGetOrganizationAdminAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetOrganizationAdminAccount"></a>

```typescript
public readonly opGetOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetOrganizationAdminAccount API call.

---

##### `opGetServicesInScope`<sup>Required</sup> <a name="opGetServicesInScope" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetServicesInScope"></a>

```typescript
public readonly opGetServicesInScope: string[];
```

- *Type:* string[]

IAM actions required for the GetServicesInScope API call.

---

##### `opGetSettings`<sup>Required</sup> <a name="opGetSettings" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.opGetSettings"></a>

```typescript
public readonly opGetSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetSettings API call.

---

##### `RegisterAccount`<sup>Required</sup> <a name="RegisterAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.RegisterAccount"></a>

```typescript
public readonly RegisterAccount: string[];
```

- *Type:* string[]

IAM actions required for the RegisterAccount API call.

---

##### `RegisterOrganizationAdminAccount`<sup>Required</sup> <a name="RegisterOrganizationAdminAccount" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.RegisterOrganizationAdminAccount"></a>

```typescript
public readonly RegisterOrganizationAdminAccount: string[];
```

- *Type:* string[]

IAM actions required for the RegisterOrganizationAdminAccount API call.

---

##### `StartAssessmentFrameworkShare`<sup>Required</sup> <a name="StartAssessmentFrameworkShare" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.StartAssessmentFrameworkShare"></a>

```typescript
public readonly StartAssessmentFrameworkShare: string[];
```

- *Type:* string[]

IAM actions required for the StartAssessmentFrameworkShare API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAssessment`<sup>Required</sup> <a name="UpdateAssessment" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessment"></a>

```typescript
public readonly UpdateAssessment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssessment API call.

---

##### `UpdateAssessmentControl`<sup>Required</sup> <a name="UpdateAssessmentControl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentControl"></a>

```typescript
public readonly UpdateAssessmentControl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssessmentControl API call.

---

##### `UpdateAssessmentControlSetStatus`<sup>Required</sup> <a name="UpdateAssessmentControlSetStatus" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentControlSetStatus"></a>

```typescript
public readonly UpdateAssessmentControlSetStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssessmentControlSetStatus API call.

---

##### `UpdateAssessmentFramework`<sup>Required</sup> <a name="UpdateAssessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentFramework"></a>

```typescript
public readonly UpdateAssessmentFramework: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssessmentFramework API call.

---

##### `UpdateAssessmentFrameworkShare`<sup>Required</sup> <a name="UpdateAssessmentFrameworkShare" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentFrameworkShare"></a>

```typescript
public readonly UpdateAssessmentFrameworkShare: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssessmentFrameworkShare API call.

---

##### `UpdateAssessmentStatus`<sup>Required</sup> <a name="UpdateAssessmentStatus" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateAssessmentStatus"></a>

```typescript
public readonly UpdateAssessmentStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssessmentStatus API call.

---

##### `UpdateControl`<sup>Required</sup> <a name="UpdateControl" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateControl"></a>

```typescript
public readonly UpdateControl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateControl API call.

---

##### `UpdateSettings`<sup>Required</sup> <a name="UpdateSettings" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.UpdateSettings"></a>

```typescript
public readonly UpdateSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSettings API call.

---

##### `ValidateAssessmentReportIntegrity`<sup>Required</sup> <a name="ValidateAssessmentReportIntegrity" id="@cdk_utils/iam.auditmanager.AuditmanagerOperations.property.ValidateAssessmentReportIntegrity"></a>

```typescript
public readonly ValidateAssessmentReportIntegrity: string[];
```

- *Type:* string[]

IAM actions required for the ValidateAssessmentReportIntegrity API call.

---

### AuditmanagerResources <a name="AuditmanagerResources" id="@cdk_utils/iam.auditmanager.AuditmanagerResources"></a>

ARN builders, validators, and parsers for auditmanager resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.Initializer"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

new auditmanager.AuditmanagerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.assessment">assessment</a></code> | Builds an ARN for the assessment resource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.assessmentControlSet">assessmentControlSet</a></code> | Builds an ARN for the assessmentControlSet resource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.assessmentFramework">assessmentFramework</a></code> | Builds an ARN for the assessmentFramework resource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.control">control</a></code> | Builds an ARN for the control resource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentArn">isValidAssessmentArn</a></code> | Validates whether a string is a valid ARN for the assessment resource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentControlSetArn">isValidAssessmentControlSetArn</a></code> | Validates whether a string is a valid ARN for the assessmentControlSet resource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentFrameworkArn">isValidAssessmentFrameworkArn</a></code> | Validates whether a string is a valid ARN for the assessmentFramework resource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidControlArn">isValidControlArn</a></code> | Validates whether a string is a valid ARN for the control resource. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentArn">parseAssessmentArn</a></code> | Parses a assessment ARN into its components. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentControlSetArn">parseAssessmentControlSetArn</a></code> | Parses a assessmentControlSet ARN into its components. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentFrameworkArn">parseAssessmentFrameworkArn</a></code> | Parses a assessmentFramework ARN into its components. |
| <code><a href="#@cdk_utils/iam.auditmanager.AuditmanagerResources.parseControlArn">parseControlArn</a></code> | Parses a control ARN into its components. |

---

##### `assessment` <a name="assessment" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.assessment"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.assessment(props: AuditmanagerAssessmentArnProps)
```

Builds an ARN for the assessment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.assessment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentArnProps">AuditmanagerAssessmentArnProps</a>

---

##### `assessmentControlSet` <a name="assessmentControlSet" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.assessmentControlSet"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.assessmentControlSet(props: AuditmanagerAssessmentControlSetArnProps)
```

Builds an ARN for the assessmentControlSet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.assessmentControlSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentControlSetArnProps">AuditmanagerAssessmentControlSetArnProps</a>

---

##### `assessmentFramework` <a name="assessmentFramework" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.assessmentFramework"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.assessmentFramework(props: AuditmanagerAssessmentFrameworkArnProps)
```

Builds an ARN for the assessmentFramework resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.assessmentFramework.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.auditmanager.AuditmanagerAssessmentFrameworkArnProps">AuditmanagerAssessmentFrameworkArnProps</a>

---

##### `control` <a name="control" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.control"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.control(props: AuditmanagerControlArnProps)
```

Builds an ARN for the control resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.control.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.auditmanager.AuditmanagerControlArnProps">AuditmanagerControlArnProps</a>

---

##### `isValidAssessmentArn` <a name="isValidAssessmentArn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentArn"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.isValidAssessmentArn(arn: string)
```

Validates whether a string is a valid ARN for the assessment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssessmentControlSetArn` <a name="isValidAssessmentControlSetArn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentControlSetArn"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.isValidAssessmentControlSetArn(arn: string)
```

Validates whether a string is a valid ARN for the assessmentControlSet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentControlSetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAssessmentFrameworkArn` <a name="isValidAssessmentFrameworkArn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentFrameworkArn"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.isValidAssessmentFrameworkArn(arn: string)
```

Validates whether a string is a valid ARN for the assessmentFramework resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidAssessmentFrameworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidControlArn` <a name="isValidControlArn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidControlArn"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.isValidControlArn(arn: string)
```

Validates whether a string is a valid ARN for the control resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.isValidControlArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssessmentArn` <a name="parseAssessmentArn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentArn"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.parseAssessmentArn(arn: string)
```

Parses a assessment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssessmentControlSetArn` <a name="parseAssessmentControlSetArn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentControlSetArn"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.parseAssessmentControlSetArn(arn: string)
```

Parses a assessmentControlSet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentControlSetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAssessmentFrameworkArn` <a name="parseAssessmentFrameworkArn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentFrameworkArn"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.parseAssessmentFrameworkArn(arn: string)
```

Parses a assessmentFramework ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.parseAssessmentFrameworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseControlArn` <a name="parseControlArn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.parseControlArn"></a>

```typescript
import { auditmanager } from '@cdk_utils/iam'

auditmanager.AuditmanagerResources.parseControlArn(arn: string)
```

Parses a control ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.auditmanager.AuditmanagerResources.parseControlArn.parameter.arn"></a>

- *Type:* string

---




