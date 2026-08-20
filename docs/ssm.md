# `ssm` Submodule <a name="`ssm` Submodule" id="@cdk_utils/iam.ssm"></a>


## Structs <a name="Structs" id="Structs"></a>

### SSMAssociationArnComponents <a name="SSMAssociationArnComponents" id="@cdk_utils/iam.ssm.SSMAssociationArnComponents"></a>

Parsed components of a association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMAssociationArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMAssociationArnComponents: ssm.SSMAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAssociationArnComponents.property.associationId">associationId</a></code> | <code>string</code> | The AssociationId component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdk_utils/iam.ssm.SSMAssociationArnComponents.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

The AssociationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMAssociationArnProps <a name="SSMAssociationArnProps" id="@cdk_utils/iam.ssm.SSMAssociationArnProps"></a>

Properties for building a association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMAssociationArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMAssociationArnProps: ssm.SSMAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMAssociationArnProps.property.associationId">associationId</a></code> | <code>string</code> | The AssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdk_utils/iam.ssm.SSMAssociationArnProps.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

The AssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMAutomationDefinitionArnComponents <a name="SSMAutomationDefinitionArnComponents" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents"></a>

Parsed components of a automation-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMAutomationDefinitionArnComponents: ssm.SSMAutomationDefinitionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.automationDefinitionName">automationDefinitionName</a></code> | <code>string</code> | The AutomationDefinitionName component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automationDefinitionName`<sup>Required</sup> <a name="automationDefinitionName" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.automationDefinitionName"></a>

```typescript
public readonly automationDefinitionName: string;
```

- *Type:* string

The AutomationDefinitionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnComponents.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component.

---

### SSMAutomationDefinitionArnProps <a name="SSMAutomationDefinitionArnProps" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps"></a>

Properties for building a automation-definition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMAutomationDefinitionArnProps: ssm.SSMAutomationDefinitionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.automationDefinitionName">automationDefinitionName</a></code> | <code>string</code> | The AutomationDefinitionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.versionId">versionId</a></code> | <code>string</code> | The VersionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automationDefinitionName`<sup>Required</sup> <a name="automationDefinitionName" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.automationDefinitionName"></a>

```typescript
public readonly automationDefinitionName: string;
```

- *Type:* string

The AutomationDefinitionName component of the ARN.

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

The VersionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMAutomationExecutionArnComponents <a name="SSMAutomationExecutionArnComponents" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents"></a>

Parsed components of a automation-execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMAutomationExecutionArnComponents: ssm.SSMAutomationExecutionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.property.automationExecutionId">automationExecutionId</a></code> | <code>string</code> | The AutomationExecutionId component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `automationExecutionId`<sup>Required</sup> <a name="automationExecutionId" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.property.automationExecutionId"></a>

```typescript
public readonly automationExecutionId: string;
```

- *Type:* string

The AutomationExecutionId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMAutomationExecutionArnProps <a name="SSMAutomationExecutionArnProps" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps"></a>

Properties for building a automation-execution ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMAutomationExecutionArnProps: ssm.SSMAutomationExecutionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.property.automationExecutionId">automationExecutionId</a></code> | <code>string</code> | The AutomationExecutionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `automationExecutionId`<sup>Required</sup> <a name="automationExecutionId" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.property.automationExecutionId"></a>

```typescript
public readonly automationExecutionId: string;
```

- *Type:* string

The AutomationExecutionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMBucketArnComponents <a name="SSMBucketArnComponents" id="@cdk_utils/iam.ssm.SSMBucketArnComponents"></a>

Parsed components of a bucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMBucketArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMBucketArnComponents: ssm.SSMBucketArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMBucketArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMBucketArnComponents.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMBucketArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMBucketArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMBucketArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.ssm.SSMBucketArnComponents.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMBucketArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMBucketArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMBucketArnProps <a name="SSMBucketArnProps" id="@cdk_utils/iam.ssm.SSMBucketArnProps"></a>

Properties for building a bucket ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMBucketArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMBucketArnProps: ssm.SSMBucketArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMBucketArnProps.property.bucketName">bucketName</a></code> | <code>string</code> | The BucketName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMBucketArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMBucketArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMBucketArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdk_utils/iam.ssm.SSMBucketArnProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The BucketName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMBucketArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMBucketArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMBucketArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMCloudConnectorArnComponents <a name="SSMCloudConnectorArnComponents" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents"></a>

Parsed components of a cloud-connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMCloudConnectorArnComponents: ssm.SSMCloudConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.property.cloudConnectorId">cloudConnectorId</a></code> | <code>string</code> | The CloudConnectorId component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cloudConnectorId`<sup>Required</sup> <a name="cloudConnectorId" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.property.cloudConnectorId"></a>

```typescript
public readonly cloudConnectorId: string;
```

- *Type:* string

The CloudConnectorId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMCloudConnectorArnProps <a name="SSMCloudConnectorArnProps" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnProps"></a>

Properties for building a cloud-connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMCloudConnectorArnProps: ssm.SSMCloudConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.property.cloudConnectorId">cloudConnectorId</a></code> | <code>string</code> | The CloudConnectorId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cloudConnectorId`<sup>Required</sup> <a name="cloudConnectorId" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.property.cloudConnectorId"></a>

```typescript
public readonly cloudConnectorId: string;
```

- *Type:* string

The CloudConnectorId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMCloudConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMDocumentArnComponents <a name="SSMDocumentArnComponents" id="@cdk_utils/iam.ssm.SSMDocumentArnComponents"></a>

Parsed components of a document ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMDocumentArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMDocumentArnComponents: ssm.SSMDocumentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMDocumentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMDocumentArnComponents.property.documentName">documentName</a></code> | <code>string</code> | The DocumentName component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMDocumentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMDocumentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMDocumentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdk_utils/iam.ssm.SSMDocumentArnComponents.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

The DocumentName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMDocumentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMDocumentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMDocumentArnProps <a name="SSMDocumentArnProps" id="@cdk_utils/iam.ssm.SSMDocumentArnProps"></a>

Properties for building a document ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMDocumentArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMDocumentArnProps: ssm.SSMDocumentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMDocumentArnProps.property.documentName">documentName</a></code> | <code>string</code> | The DocumentName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMDocumentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMDocumentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMDocumentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `documentName`<sup>Required</sup> <a name="documentName" id="@cdk_utils/iam.ssm.SSMDocumentArnProps.property.documentName"></a>

```typescript
public readonly documentName: string;
```

- *Type:* string

The DocumentName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMDocumentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMDocumentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMDocumentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMIAMRoleArnComponents <a name="SSMIAMRoleArnComponents" id="@cdk_utils/iam.ssm.SSMIAMRoleArnComponents"></a>

Parsed components of a iam-role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMIAMRoleArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMIAMRoleArnComponents: ssm.SSMIAMRoleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMIAMRoleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMIAMRoleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMIAMRoleArnComponents.property.roleName">roleName</a></code> | <code>string</code> | The RoleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMIAMRoleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMIAMRoleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdk_utils/iam.ssm.SSMIAMRoleArnComponents.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The RoleName component.

---

### SSMIAMRoleArnProps <a name="SSMIAMRoleArnProps" id="@cdk_utils/iam.ssm.SSMIAMRoleArnProps"></a>

Properties for building a iam-role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMIAMRoleArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMIAMRoleArnProps: ssm.SSMIAMRoleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMIAMRoleArnProps.property.roleName">roleName</a></code> | <code>string</code> | The RoleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMIAMRoleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMIAMRoleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdk_utils/iam.ssm.SSMIAMRoleArnProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The RoleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMIAMRoleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMIAMRoleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### SSMInstanceArnComponents <a name="SSMInstanceArnComponents" id="@cdk_utils/iam.ssm.SSMInstanceArnComponents"></a>

Parsed components of a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMInstanceArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMInstanceArnComponents: ssm.SSMInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMInstanceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.ssm.SSMInstanceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMInstanceArnProps <a name="SSMInstanceArnProps" id="@cdk_utils/iam.ssm.SSMInstanceArnProps"></a>

Properties for building a instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMInstanceArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMInstanceArnProps: ssm.SSMInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMInstanceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.ssm.SSMInstanceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMMaintenancewindowArnComponents <a name="SSMMaintenancewindowArnComponents" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents"></a>

Parsed components of a maintenancewindow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMMaintenancewindowArnComponents: ssm.SSMMaintenancewindowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SSMMaintenancewindowArnProps <a name="SSMMaintenancewindowArnProps" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps"></a>

Properties for building a maintenancewindow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMMaintenancewindowArnProps: ssm.SSMMaintenancewindowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMManagedInstanceArnComponents <a name="SSMManagedInstanceArnComponents" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents"></a>

Parsed components of a managed-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMManagedInstanceArnComponents: ssm.SSMManagedInstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMManagedInstanceArnProps <a name="SSMManagedInstanceArnProps" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnProps"></a>

Properties for building a managed-instance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMManagedInstanceArnProps: ssm.SSMManagedInstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMManagedInstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMManagedInstanceInventoryArnComponents <a name="SSMManagedInstanceInventoryArnComponents" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents"></a>

Parsed components of a managed-instance-inventory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMManagedInstanceInventoryArnComponents: ssm.SSMManagedInstanceInventoryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMManagedInstanceInventoryArnProps <a name="SSMManagedInstanceInventoryArnProps" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps"></a>

Properties for building a managed-instance-inventory ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMManagedInstanceInventoryArnProps: ssm.SSMManagedInstanceInventoryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.property.instanceId">instanceId</a></code> | <code>string</code> | The InstanceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

The InstanceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMOpsitemArnComponents <a name="SSMOpsitemArnComponents" id="@cdk_utils/iam.ssm.SSMOpsitemArnComponents"></a>

Parsed components of a opsitem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMOpsitemArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMOpsitemArnComponents: ssm.SSMOpsitemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMOpsitemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMOpsitemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMOpsitemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ssm.SSMOpsitemArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SSMOpsitemArnProps <a name="SSMOpsitemArnProps" id="@cdk_utils/iam.ssm.SSMOpsitemArnProps"></a>

Properties for building a opsitem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMOpsitemArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMOpsitemArnProps: ssm.SSMOpsitemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ssm.SSMOpsitemArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMOpsitemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMOpsitemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMOpsitemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMOpsitemgroupArnComponents <a name="SSMOpsitemgroupArnComponents" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnComponents"></a>

Parsed components of a opsitemgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMOpsitemgroupArnComponents: ssm.SSMOpsitemgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMOpsitemgroupArnProps <a name="SSMOpsitemgroupArnProps" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps"></a>

Properties for building a opsitemgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMOpsitemgroupArnProps: ssm.SSMOpsitemgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMOpsmetadataArnComponents <a name="SSMOpsmetadataArnComponents" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents"></a>

Parsed components of a opsmetadata ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMOpsmetadataArnComponents: ssm.SSMOpsmetadataArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SSMOpsmetadataArnProps <a name="SSMOpsmetadataArnProps" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnProps"></a>

Properties for building a opsmetadata ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMOpsmetadataArnProps: ssm.SSMOpsmetadataArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMOpsmetadataArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMParameterArnComponents <a name="SSMParameterArnComponents" id="@cdk_utils/iam.ssm.SSMParameterArnComponents"></a>

Parsed components of a parameter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMParameterArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMParameterArnComponents: ssm.SSMParameterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMParameterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMParameterArnComponents.property.parameterNameWithoutLeadingSlash">parameterNameWithoutLeadingSlash</a></code> | <code>string</code> | The ParameterNameWithoutLeadingSlash component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMParameterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMParameterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMParameterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `parameterNameWithoutLeadingSlash`<sup>Required</sup> <a name="parameterNameWithoutLeadingSlash" id="@cdk_utils/iam.ssm.SSMParameterArnComponents.property.parameterNameWithoutLeadingSlash"></a>

```typescript
public readonly parameterNameWithoutLeadingSlash: string;
```

- *Type:* string

The ParameterNameWithoutLeadingSlash component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMParameterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMParameterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMParameterArnProps <a name="SSMParameterArnProps" id="@cdk_utils/iam.ssm.SSMParameterArnProps"></a>

Properties for building a parameter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMParameterArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMParameterArnProps: ssm.SSMParameterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMParameterArnProps.property.parameterNameWithoutLeadingSlash">parameterNameWithoutLeadingSlash</a></code> | <code>string</code> | The ParameterNameWithoutLeadingSlash component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMParameterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMParameterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMParameterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `parameterNameWithoutLeadingSlash`<sup>Required</sup> <a name="parameterNameWithoutLeadingSlash" id="@cdk_utils/iam.ssm.SSMParameterArnProps.property.parameterNameWithoutLeadingSlash"></a>

```typescript
public readonly parameterNameWithoutLeadingSlash: string;
```

- *Type:* string

The ParameterNameWithoutLeadingSlash component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMParameterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMParameterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMParameterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMPatchbaselineArnComponents <a name="SSMPatchbaselineArnComponents" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents"></a>

Parsed components of a patchbaseline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMPatchbaselineArnComponents: ssm.SSMPatchbaselineArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.property.patchBaselineIdResourceId">patchBaselineIdResourceId</a></code> | <code>string</code> | The PatchBaselineIdResourceId component. |
| <code><a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `patchBaselineIdResourceId`<sup>Required</sup> <a name="patchBaselineIdResourceId" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.property.patchBaselineIdResourceId"></a>

```typescript
public readonly patchBaselineIdResourceId: string;
```

- *Type:* string

The PatchBaselineIdResourceId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SSMPatchbaselineArnProps <a name="SSMPatchbaselineArnProps" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnProps"></a>

Properties for building a patchbaseline ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMPatchbaselineArnProps: ssm.SSMPatchbaselineArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.property.patchBaselineIdResourceId">patchBaselineIdResourceId</a></code> | <code>string</code> | The PatchBaselineIdResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `patchBaselineIdResourceId`<sup>Required</sup> <a name="patchBaselineIdResourceId" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.property.patchBaselineIdResourceId"></a>

```typescript
public readonly patchBaselineIdResourceId: string;
```

- *Type:* string

The PatchBaselineIdResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMPatchbaselineArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMResourcedatasyncArnComponents <a name="SSMResourcedatasyncArnComponents" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents"></a>

Parsed components of a resourcedatasync ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMResourcedatasyncArnComponents: ssm.SSMResourcedatasyncArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.property.syncName">syncName</a></code> | <code>string</code> | The SyncName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `syncName`<sup>Required</sup> <a name="syncName" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnComponents.property.syncName"></a>

```typescript
public readonly syncName: string;
```

- *Type:* string

The SyncName component.

---

### SSMResourcedatasyncArnProps <a name="SSMResourcedatasyncArnProps" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps"></a>

Properties for building a resourcedatasync ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMResourcedatasyncArnProps: ssm.SSMResourcedatasyncArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.property.syncName">syncName</a></code> | <code>string</code> | The SyncName component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `syncName`<sup>Required</sup> <a name="syncName" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.property.syncName"></a>

```typescript
public readonly syncName: string;
```

- *Type:* string

The SyncName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMServicesettingArnComponents <a name="SSMServicesettingArnComponents" id="@cdk_utils/iam.ssm.SSMServicesettingArnComponents"></a>

Parsed components of a servicesetting ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMServicesettingArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMServicesettingArnComponents: ssm.SSMServicesettingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMServicesettingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMServicesettingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMServicesettingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMServicesettingArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMServicesettingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMServicesettingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMServicesettingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ssm.SSMServicesettingArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SSMServicesettingArnProps <a name="SSMServicesettingArnProps" id="@cdk_utils/iam.ssm.SSMServicesettingArnProps"></a>

Properties for building a servicesetting ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMServicesettingArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMServicesettingArnProps: ssm.SSMServicesettingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMServicesettingArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMServicesettingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMServicesettingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMServicesettingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ssm.SSMServicesettingArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMServicesettingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMServicesettingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMServicesettingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMSessionArnComponents <a name="SSMSessionArnComponents" id="@cdk_utils/iam.ssm.SSMSessionArnComponents"></a>

Parsed components of a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMSessionArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMSessionArnComponents: ssm.SSMSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMSessionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMSessionArnComponents.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMSessionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.ssm.SSMSessionArnComponents.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component.

---

### SSMSessionArnProps <a name="SSMSessionArnProps" id="@cdk_utils/iam.ssm.SSMSessionArnProps"></a>

Properties for building a session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMSessionArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMSessionArnProps: ssm.SSMSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMSessionArnProps.property.sessionId">sessionId</a></code> | <code>string</code> | The SessionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMSessionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdk_utils/iam.ssm.SSMSessionArnProps.property.sessionId"></a>

```typescript
public readonly sessionId: string;
```

- *Type:* string

The SessionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMSessionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMTaskArnComponents <a name="SSMTaskArnComponents" id="@cdk_utils/iam.ssm.SSMTaskArnComponents"></a>

Parsed components of a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMTaskArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMTaskArnComponents: ssm.SSMTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMTaskArnComponents.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.ssm.SSMTaskArnComponents.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component.

---

### SSMTaskArnProps <a name="SSMTaskArnProps" id="@cdk_utils/iam.ssm.SSMTaskArnProps"></a>

Properties for building a task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMTaskArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMTaskArnProps: ssm.SSMTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMTaskArnProps.property.taskId">taskId</a></code> | <code>string</code> | The TaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdk_utils/iam.ssm.SSMTaskArnProps.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The TaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMWindowtargetArnComponents <a name="SSMWindowtargetArnComponents" id="@cdk_utils/iam.ssm.SSMWindowtargetArnComponents"></a>

Parsed components of a windowtarget ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMWindowtargetArnComponents: ssm.SSMWindowtargetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.property.windowTargetId">windowTargetId</a></code> | <code>string</code> | The WindowTargetId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `windowTargetId`<sup>Required</sup> <a name="windowTargetId" id="@cdk_utils/iam.ssm.SSMWindowtargetArnComponents.property.windowTargetId"></a>

```typescript
public readonly windowTargetId: string;
```

- *Type:* string

The WindowTargetId component.

---

### SSMWindowtargetArnProps <a name="SSMWindowtargetArnProps" id="@cdk_utils/iam.ssm.SSMWindowtargetArnProps"></a>

Properties for building a windowtarget ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMWindowtargetArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMWindowtargetArnProps: ssm.SSMWindowtargetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnProps.property.windowTargetId">windowTargetId</a></code> | <code>string</code> | The WindowTargetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `windowTargetId`<sup>Required</sup> <a name="windowTargetId" id="@cdk_utils/iam.ssm.SSMWindowtargetArnProps.property.windowTargetId"></a>

```typescript
public readonly windowTargetId: string;
```

- *Type:* string

The WindowTargetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMWindowtargetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMWindowtargetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMWindowtargetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SSMWindowtaskArnComponents <a name="SSMWindowtaskArnComponents" id="@cdk_utils/iam.ssm.SSMWindowtaskArnComponents"></a>

Parsed components of a windowtask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMWindowtaskArnComponents: ssm.SSMWindowtaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.property.windowTaskId">windowTaskId</a></code> | <code>string</code> | The WindowTaskId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `windowTaskId`<sup>Required</sup> <a name="windowTaskId" id="@cdk_utils/iam.ssm.SSMWindowtaskArnComponents.property.windowTaskId"></a>

```typescript
public readonly windowTaskId: string;
```

- *Type:* string

The WindowTaskId component.

---

### SSMWindowtaskArnProps <a name="SSMWindowtaskArnProps" id="@cdk_utils/iam.ssm.SSMWindowtaskArnProps"></a>

Properties for building a windowtask ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ssm.SSMWindowtaskArnProps.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

const sSMWindowtaskArnProps: ssm.SSMWindowtaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnProps.property.windowTaskId">windowTaskId</a></code> | <code>string</code> | The WindowTaskId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `windowTaskId`<sup>Required</sup> <a name="windowTaskId" id="@cdk_utils/iam.ssm.SSMWindowtaskArnProps.property.windowTaskId"></a>

```typescript
public readonly windowTaskId: string;
```

- *Type:* string

The WindowTaskId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ssm.SSMWindowtaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ssm.SSMWindowtaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ssm.SSMWindowtaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SSMActions <a name="SSMActions" id="@cdk_utils/iam.ssm.SSMActions"></a>

IAM action constants for the ssm service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm.SSMActions.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

new ssm.SSMActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetAccessToken">actionGetAccessToken</a></code> | <code>string</code> | [Read] ssm:GetAccessToken. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetAutomationExecution">actionGetAutomationExecution</a></code> | <code>string</code> | [Read] ssm:GetAutomationExecution. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetCalendar">actionGetCalendar</a></code> | <code>string</code> | [Read] ssm:GetCalendar. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetCalendarState">actionGetCalendarState</a></code> | <code>string</code> | [Read] ssm:GetCalendarState. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetCloudConnector">actionGetCloudConnector</a></code> | <code>string</code> | [Read] ssm:GetCloudConnector. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetCommandInvocation">actionGetCommandInvocation</a></code> | <code>string</code> | [Read] ssm:GetCommandInvocation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetConnectionStatus">actionGetConnectionStatus</a></code> | <code>string</code> | [Read] ssm:GetConnectionStatus. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetDefaultPatchBaseline">actionGetDefaultPatchBaseline</a></code> | <code>string</code> | [Read] ssm:GetDefaultPatchBaseline. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetDeployablePatchSnapshotForInstance">actionGetDeployablePatchSnapshotForInstance</a></code> | <code>string</code> | [Read] ssm:GetDeployablePatchSnapshotForInstance. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetDocument">actionGetDocument</a></code> | <code>string</code> | [Read] ssm:GetDocument. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetExecutionPreview">actionGetExecutionPreview</a></code> | <code>string</code> | [Read] ssm:GetExecutionPreview. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetInventory">actionGetInventory</a></code> | <code>string</code> | [Read] ssm:GetInventory. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetInventorySchema">actionGetInventorySchema</a></code> | <code>string</code> | [Read] ssm:GetInventorySchema. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindow">actionGetMaintenanceWindow</a></code> | <code>string</code> | [Read] ssm:GetMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindowExecution">actionGetMaintenanceWindowExecution</a></code> | <code>string</code> | [Read] ssm:GetMaintenanceWindowExecution. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindowExecutionTask">actionGetMaintenanceWindowExecutionTask</a></code> | <code>string</code> | [Read] ssm:GetMaintenanceWindowExecutionTask. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindowExecutionTaskInvocation">actionGetMaintenanceWindowExecutionTaskInvocation</a></code> | <code>string</code> | [Read] ssm:GetMaintenanceWindowExecutionTaskInvocation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindowTask">actionGetMaintenanceWindowTask</a></code> | <code>string</code> | [Read] ssm:GetMaintenanceWindowTask. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetManifest">actionGetManifest</a></code> | <code>string</code> | [Read] ssm:GetManifest. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetOpsItem">actionGetOpsItem</a></code> | <code>string</code> | [Read] ssm:GetOpsItem. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetOpsMetadata">actionGetOpsMetadata</a></code> | <code>string</code> | [Read] ssm:GetOpsMetadata. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetOpsSummary">actionGetOpsSummary</a></code> | <code>string</code> | [Read] ssm:GetOpsSummary. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetParameter">actionGetParameter</a></code> | <code>string</code> | [Read] ssm:GetParameter. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetParameterHistory">actionGetParameterHistory</a></code> | <code>string</code> | [Read] ssm:GetParameterHistory. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetParameters">actionGetParameters</a></code> | <code>string</code> | [Read] ssm:GetParameters. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetParametersByPath">actionGetParametersByPath</a></code> | <code>string</code> | [Read] ssm:GetParametersByPath. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetPatchBaseline">actionGetPatchBaseline</a></code> | <code>string</code> | [Read] ssm:GetPatchBaseline. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetPatchBaselineForPatchGroup">actionGetPatchBaselineForPatchGroup</a></code> | <code>string</code> | [Read] ssm:GetPatchBaselineForPatchGroup. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetResourcePolicies">actionGetResourcePolicies</a></code> | <code>string</code> | [List] ssm:GetResourcePolicies. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.actionGetServiceSetting">actionGetServiceSetting</a></code> | <code>string</code> | [Read] ssm:GetServiceSetting. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string</code> | [Tagging] ssm:AddTagsToResource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.AssociateOpsItemRelatedItem">AssociateOpsItemRelatedItem</a></code> | <code>string</code> | [Write] ssm:AssociateOpsItemRelatedItem. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CancelCommand">CancelCommand</a></code> | <code>string</code> | [Write] ssm:CancelCommand. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CancelMaintenanceWindowExecution">CancelMaintenanceWindowExecution</a></code> | <code>string</code> | [Write] ssm:CancelMaintenanceWindowExecution. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateActivation">CreateActivation</a></code> | <code>string</code> | [Write] ssm:CreateActivation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateAssociation">CreateAssociation</a></code> | <code>string</code> | [Write] ssm:CreateAssociation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateAssociationBatch">CreateAssociationBatch</a></code> | <code>string</code> | [Write] ssm:CreateAssociationBatch. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateCloudConnector">CreateCloudConnector</a></code> | <code>string</code> | [Write] ssm:CreateCloudConnector. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateDocument">CreateDocument</a></code> | <code>string</code> | [Write] ssm:CreateDocument. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateMaintenanceWindow">CreateMaintenanceWindow</a></code> | <code>string</code> | [Write] ssm:CreateMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateOpsItem">CreateOpsItem</a></code> | <code>string</code> | [Write] ssm:CreateOpsItem. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateOpsMetadata">CreateOpsMetadata</a></code> | <code>string</code> | [Write] ssm:CreateOpsMetadata. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreatePatchBaseline">CreatePatchBaseline</a></code> | <code>string</code> | [Write] ssm:CreatePatchBaseline. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.CreateResourceDataSync">CreateResourceDataSync</a></code> | <code>string</code> | [Write] ssm:CreateResourceDataSync. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteActivation">DeleteActivation</a></code> | <code>string</code> | [Write] ssm:DeleteActivation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteAssociation">DeleteAssociation</a></code> | <code>string</code> | [Write] ssm:DeleteAssociation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteCloudConnector">DeleteCloudConnector</a></code> | <code>string</code> | [Write] ssm:DeleteCloudConnector. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteDocument">DeleteDocument</a></code> | <code>string</code> | [Write] ssm:DeleteDocument. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteInventory">DeleteInventory</a></code> | <code>string</code> | [Write] ssm:DeleteInventory. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteMaintenanceWindow">DeleteMaintenanceWindow</a></code> | <code>string</code> | [Write] ssm:DeleteMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteOpsItem">DeleteOpsItem</a></code> | <code>string</code> | [Write] ssm:DeleteOpsItem. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteOpsMetadata">DeleteOpsMetadata</a></code> | <code>string</code> | [Write] ssm:DeleteOpsMetadata. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteParameter">DeleteParameter</a></code> | <code>string</code> | [Write] ssm:DeleteParameter. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteParameters">DeleteParameters</a></code> | <code>string</code> | [Write] ssm:DeleteParameters. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeletePatchBaseline">DeletePatchBaseline</a></code> | <code>string</code> | [Write] ssm:DeletePatchBaseline. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteResourceDataSync">DeleteResourceDataSync</a></code> | <code>string</code> | [Write] ssm:DeleteResourceDataSync. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] ssm:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeregisterManagedInstance">DeregisterManagedInstance</a></code> | <code>string</code> | [Write] ssm:DeregisterManagedInstance. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeregisterPatchBaselineForPatchGroup">DeregisterPatchBaselineForPatchGroup</a></code> | <code>string</code> | [Write] ssm:DeregisterPatchBaselineForPatchGroup. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeregisterTargetFromMaintenanceWindow">DeregisterTargetFromMaintenanceWindow</a></code> | <code>string</code> | [Write] ssm:DeregisterTargetFromMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DeregisterTaskFromMaintenanceWindow">DeregisterTaskFromMaintenanceWindow</a></code> | <code>string</code> | [Write] ssm:DeregisterTaskFromMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeActivations">DescribeActivations</a></code> | <code>string</code> | [Read] ssm:DescribeActivations. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeAssociation">DescribeAssociation</a></code> | <code>string</code> | [Read] ssm:DescribeAssociation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeAssociationExecutions">DescribeAssociationExecutions</a></code> | <code>string</code> | [Read] ssm:DescribeAssociationExecutions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeAssociationExecutionTargets">DescribeAssociationExecutionTargets</a></code> | <code>string</code> | [Read] ssm:DescribeAssociationExecutionTargets. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeAutomationExecutions">DescribeAutomationExecutions</a></code> | <code>string</code> | [Read] ssm:DescribeAutomationExecutions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeAutomationStepExecutions">DescribeAutomationStepExecutions</a></code> | <code>string</code> | [Read] ssm:DescribeAutomationStepExecutions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeAvailablePatches">DescribeAvailablePatches</a></code> | <code>string</code> | [Read] ssm:DescribeAvailablePatches. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeDocument">DescribeDocument</a></code> | <code>string</code> | [Read] ssm:DescribeDocument. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeDocumentParameters">DescribeDocumentParameters</a></code> | <code>string</code> | [Read] ssm:DescribeDocumentParameters. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeDocumentPermission">DescribeDocumentPermission</a></code> | <code>string</code> | [Read] ssm:DescribeDocumentPermission. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeEffectiveInstanceAssociations">DescribeEffectiveInstanceAssociations</a></code> | <code>string</code> | [Read] ssm:DescribeEffectiveInstanceAssociations. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeEffectivePatchesForPatchBaseline">DescribeEffectivePatchesForPatchBaseline</a></code> | <code>string</code> | [Read] ssm:DescribeEffectivePatchesForPatchBaseline. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeInstanceAssociationsStatus">DescribeInstanceAssociationsStatus</a></code> | <code>string</code> | [Read] ssm:DescribeInstanceAssociationsStatus. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeInstanceInformation">DescribeInstanceInformation</a></code> | <code>string</code> | [Read] ssm:DescribeInstanceInformation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeInstancePatches">DescribeInstancePatches</a></code> | <code>string</code> | [Read] ssm:DescribeInstancePatches. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeInstancePatchStates">DescribeInstancePatchStates</a></code> | <code>string</code> | [Read] ssm:DescribeInstancePatchStates. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeInstancePatchStatesForPatchGroup">DescribeInstancePatchStatesForPatchGroup</a></code> | <code>string</code> | [Read] ssm:DescribeInstancePatchStatesForPatchGroup. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeInstanceProperties">DescribeInstanceProperties</a></code> | <code>string</code> | [Read] ssm:DescribeInstanceProperties. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeInventoryDeletions">DescribeInventoryDeletions</a></code> | <code>string</code> | [Read] ssm:DescribeInventoryDeletions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowExecutions">DescribeMaintenanceWindowExecutions</a></code> | <code>string</code> | [List] ssm:DescribeMaintenanceWindowExecutions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowExecutionTaskInvocations">DescribeMaintenanceWindowExecutionTaskInvocations</a></code> | <code>string</code> | [List] ssm:DescribeMaintenanceWindowExecutionTaskInvocations. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowExecutionTasks">DescribeMaintenanceWindowExecutionTasks</a></code> | <code>string</code> | [List] ssm:DescribeMaintenanceWindowExecutionTasks. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindows">DescribeMaintenanceWindows</a></code> | <code>string</code> | [List] ssm:DescribeMaintenanceWindows. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowSchedule">DescribeMaintenanceWindowSchedule</a></code> | <code>string</code> | [List] ssm:DescribeMaintenanceWindowSchedule. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowsForTarget">DescribeMaintenanceWindowsForTarget</a></code> | <code>string</code> | [List] ssm:DescribeMaintenanceWindowsForTarget. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowTargets">DescribeMaintenanceWindowTargets</a></code> | <code>string</code> | [List] ssm:DescribeMaintenanceWindowTargets. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowTasks">DescribeMaintenanceWindowTasks</a></code> | <code>string</code> | [List] ssm:DescribeMaintenanceWindowTasks. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeOpsItems">DescribeOpsItems</a></code> | <code>string</code> | [Read] ssm:DescribeOpsItems. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeParameters">DescribeParameters</a></code> | <code>string</code> | [List] ssm:DescribeParameters. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribePatchBaselines">DescribePatchBaselines</a></code> | <code>string</code> | [List] ssm:DescribePatchBaselines. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribePatchGroups">DescribePatchGroups</a></code> | <code>string</code> | [List] ssm:DescribePatchGroups. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribePatchGroupState">DescribePatchGroupState</a></code> | <code>string</code> | [List] ssm:DescribePatchGroupState. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribePatchProperties">DescribePatchProperties</a></code> | <code>string</code> | [List] ssm:DescribePatchProperties. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DescribeSessions">DescribeSessions</a></code> | <code>string</code> | [List] ssm:DescribeSessions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.DisassociateOpsItemRelatedItem">DisassociateOpsItemRelatedItem</a></code> | <code>string</code> | [Write] ssm:DisassociateOpsItemRelatedItem. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ExecuteAPI">ExecuteAPI</a></code> | <code>string</code> | [Read] ssm:ExecuteAPI. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.LabelParameterVersion">LabelParameterVersion</a></code> | <code>string</code> | [Write] ssm:LabelParameterVersion. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListAssociations">ListAssociations</a></code> | <code>string</code> | [List] ssm:ListAssociations. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListAssociationVersions">ListAssociationVersions</a></code> | <code>string</code> | [List] ssm:ListAssociationVersions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListCloudConnectors">ListCloudConnectors</a></code> | <code>string</code> | [List] ssm:ListCloudConnectors. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListCommandInvocations">ListCommandInvocations</a></code> | <code>string</code> | [List] ssm:ListCommandInvocations. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListCommands">ListCommands</a></code> | <code>string</code> | [List] ssm:ListCommands. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListComplianceItems">ListComplianceItems</a></code> | <code>string</code> | [List] ssm:ListComplianceItems. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListComplianceSummaries">ListComplianceSummaries</a></code> | <code>string</code> | [List] ssm:ListComplianceSummaries. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListDocumentMetadataHistory">ListDocumentMetadataHistory</a></code> | <code>string</code> | [List] ssm:ListDocumentMetadataHistory. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListDocuments">ListDocuments</a></code> | <code>string</code> | [List] ssm:ListDocuments. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListDocumentVersions">ListDocumentVersions</a></code> | <code>string</code> | [List] ssm:ListDocumentVersions. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListInstanceAssociations">ListInstanceAssociations</a></code> | <code>string</code> | [List] ssm:ListInstanceAssociations. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListInventoryEntries">ListInventoryEntries</a></code> | <code>string</code> | [List] ssm:ListInventoryEntries. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListNodes">ListNodes</a></code> | <code>string</code> | [List] ssm:ListNodes. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListNodesSummary">ListNodesSummary</a></code> | <code>string</code> | [List] ssm:ListNodesSummary. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListOpsItemEvents">ListOpsItemEvents</a></code> | <code>string</code> | [List] ssm:ListOpsItemEvents. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListOpsItemRelatedItems">ListOpsItemRelatedItems</a></code> | <code>string</code> | [List] ssm:ListOpsItemRelatedItems. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListOpsMetadata">ListOpsMetadata</a></code> | <code>string</code> | [List] ssm:ListOpsMetadata. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListResourceComplianceSummaries">ListResourceComplianceSummaries</a></code> | <code>string</code> | [List] ssm:ListResourceComplianceSummaries. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListResourceDataSync">ListResourceDataSync</a></code> | <code>string</code> | [List] ssm:ListResourceDataSync. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] ssm:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ModifyDocumentPermission">ModifyDocumentPermission</a></code> | <code>string</code> | [PermissionManagement] ssm:ModifyDocumentPermission. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.PutCalendar">PutCalendar</a></code> | <code>string</code> | [Write] ssm:PutCalendar. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.PutComplianceItems">PutComplianceItems</a></code> | <code>string</code> | [Write] ssm:PutComplianceItems. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.PutConfigurePackageResult">PutConfigurePackageResult</a></code> | <code>string</code> | [Read] ssm:PutConfigurePackageResult. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.PutInventory">PutInventory</a></code> | <code>string</code> | [Write] ssm:PutInventory. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.PutParameter">PutParameter</a></code> | <code>string</code> | [Write] ssm:PutParameter. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] ssm:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.RegisterDefaultPatchBaseline">RegisterDefaultPatchBaseline</a></code> | <code>string</code> | [Write] ssm:RegisterDefaultPatchBaseline. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.RegisterManagedInstance">RegisterManagedInstance</a></code> | <code>string</code> | [Write] ssm:RegisterManagedInstance. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.RegisterPatchBaselineForPatchGroup">RegisterPatchBaselineForPatchGroup</a></code> | <code>string</code> | [Write] ssm:RegisterPatchBaselineForPatchGroup. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.RegisterTargetWithMaintenanceWindow">RegisterTargetWithMaintenanceWindow</a></code> | <code>string</code> | [Write] ssm:RegisterTargetWithMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.RegisterTaskWithMaintenanceWindow">RegisterTaskWithMaintenanceWindow</a></code> | <code>string</code> | [Write] ssm:RegisterTaskWithMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string</code> | [Tagging] ssm:RemoveTagsFromResource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.RequestManagedInstanceRoleToken">RequestManagedInstanceRoleToken</a></code> | <code>string</code> | [Write] ssm:RequestManagedInstanceRoleToken. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ResetServiceSetting">ResetServiceSetting</a></code> | <code>string</code> | [Write] ssm:ResetServiceSetting. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ResumeSession">ResumeSession</a></code> | <code>string</code> | [Write] ssm:ResumeSession. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.SendAutomationSignal">SendAutomationSignal</a></code> | <code>string</code> | [Write] ssm:SendAutomationSignal. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.SendCommand">SendCommand</a></code> | <code>string</code> | [Write] ssm:SendCommand. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.StartAccessRequest">StartAccessRequest</a></code> | <code>string</code> | [Write] ssm:StartAccessRequest. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.StartAssociationsOnce">StartAssociationsOnce</a></code> | <code>string</code> | [Write] ssm:StartAssociationsOnce. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.StartAutomationExecution">StartAutomationExecution</a></code> | <code>string</code> | [Write] ssm:StartAutomationExecution. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.StartChangeRequestExecution">StartChangeRequestExecution</a></code> | <code>string</code> | [Write] ssm:StartChangeRequestExecution. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.StartExecutionPreview">StartExecutionPreview</a></code> | <code>string</code> | [Read] ssm:StartExecutionPreview. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.StartSession">StartSession</a></code> | <code>string</code> | [Write] ssm:StartSession. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.StopAutomationExecution">StopAutomationExecution</a></code> | <code>string</code> | [Write] ssm:StopAutomationExecution. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.TerminateSession">TerminateSession</a></code> | <code>string</code> | [Write] ssm:TerminateSession. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UnlabelParameterVersion">UnlabelParameterVersion</a></code> | <code>string</code> | [Write] ssm:UnlabelParameterVersion. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateAssociation">UpdateAssociation</a></code> | <code>string</code> | [Write] ssm:UpdateAssociation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateAssociationStatus">UpdateAssociationStatus</a></code> | <code>string</code> | [Write] ssm:UpdateAssociationStatus. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateCloudConnector">UpdateCloudConnector</a></code> | <code>string</code> | [Write] ssm:UpdateCloudConnector. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateDocument">UpdateDocument</a></code> | <code>string</code> | [Write] ssm:UpdateDocument. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateDocumentDefaultVersion">UpdateDocumentDefaultVersion</a></code> | <code>string</code> | [Write] ssm:UpdateDocumentDefaultVersion. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateDocumentMetadata">UpdateDocumentMetadata</a></code> | <code>string</code> | [Write] ssm:UpdateDocumentMetadata. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateInstanceAssociationStatus">UpdateInstanceAssociationStatus</a></code> | <code>string</code> | [Write] ssm:UpdateInstanceAssociationStatus. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateInstanceInformation">UpdateInstanceInformation</a></code> | <code>string</code> | [Write] ssm:UpdateInstanceInformation. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateMaintenanceWindow">UpdateMaintenanceWindow</a></code> | <code>string</code> | [Write] ssm:UpdateMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateMaintenanceWindowTarget">UpdateMaintenanceWindowTarget</a></code> | <code>string</code> | [Write] ssm:UpdateMaintenanceWindowTarget. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateMaintenanceWindowTask">UpdateMaintenanceWindowTask</a></code> | <code>string</code> | [Write] ssm:UpdateMaintenanceWindowTask. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateManagedInstancePublicKey">UpdateManagedInstancePublicKey</a></code> | <code>string</code> | [Write] ssm:UpdateManagedInstancePublicKey. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateManagedInstanceRole">UpdateManagedInstanceRole</a></code> | <code>string</code> | [Write] ssm:UpdateManagedInstanceRole. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateOpsItem">UpdateOpsItem</a></code> | <code>string</code> | [Write] ssm:UpdateOpsItem. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateOpsMetadata">UpdateOpsMetadata</a></code> | <code>string</code> | [Write] ssm:UpdateOpsMetadata. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdatePatchBaseline">UpdatePatchBaseline</a></code> | <code>string</code> | [Write] ssm:UpdatePatchBaseline. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateResourceDataSync">UpdateResourceDataSync</a></code> | <code>string</code> | [Write] ssm:UpdateResourceDataSync. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.UpdateServiceSetting">UpdateServiceSetting</a></code> | <code>string</code> | [Write] ssm:UpdateServiceSetting. |
| <code><a href="#@cdk_utils/iam.ssm.SSMActions.property.ValidateCloudConnector">ValidateCloudConnector</a></code> | <code>string</code> | [Read] ssm:ValidateCloudConnector. |

---

##### `actionGetAccessToken`<sup>Required</sup> <a name="actionGetAccessToken" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetAccessToken"></a>

```typescript
public readonly actionGetAccessToken: string;
```

- *Type:* string

[Read] ssm:GetAccessToken.

---

##### `actionGetAutomationExecution`<sup>Required</sup> <a name="actionGetAutomationExecution" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetAutomationExecution"></a>

```typescript
public readonly actionGetAutomationExecution: string;
```

- *Type:* string

[Read] ssm:GetAutomationExecution.

---

##### `actionGetCalendar`<sup>Required</sup> <a name="actionGetCalendar" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetCalendar"></a>

```typescript
public readonly actionGetCalendar: string;
```

- *Type:* string

[Read] ssm:GetCalendar.

---

##### `actionGetCalendarState`<sup>Required</sup> <a name="actionGetCalendarState" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetCalendarState"></a>

```typescript
public readonly actionGetCalendarState: string;
```

- *Type:* string

[Read] ssm:GetCalendarState.

---

##### `actionGetCloudConnector`<sup>Required</sup> <a name="actionGetCloudConnector" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetCloudConnector"></a>

```typescript
public readonly actionGetCloudConnector: string;
```

- *Type:* string

[Read] ssm:GetCloudConnector.

---

##### `actionGetCommandInvocation`<sup>Required</sup> <a name="actionGetCommandInvocation" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetCommandInvocation"></a>

```typescript
public readonly actionGetCommandInvocation: string;
```

- *Type:* string

[Read] ssm:GetCommandInvocation.

---

##### `actionGetConnectionStatus`<sup>Required</sup> <a name="actionGetConnectionStatus" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetConnectionStatus"></a>

```typescript
public readonly actionGetConnectionStatus: string;
```

- *Type:* string

[Read] ssm:GetConnectionStatus.

---

##### `actionGetDefaultPatchBaseline`<sup>Required</sup> <a name="actionGetDefaultPatchBaseline" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetDefaultPatchBaseline"></a>

```typescript
public readonly actionGetDefaultPatchBaseline: string;
```

- *Type:* string

[Read] ssm:GetDefaultPatchBaseline.

---

##### `actionGetDeployablePatchSnapshotForInstance`<sup>Required</sup> <a name="actionGetDeployablePatchSnapshotForInstance" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetDeployablePatchSnapshotForInstance"></a>

```typescript
public readonly actionGetDeployablePatchSnapshotForInstance: string;
```

- *Type:* string

[Read] ssm:GetDeployablePatchSnapshotForInstance.

---

##### `actionGetDocument`<sup>Required</sup> <a name="actionGetDocument" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetDocument"></a>

```typescript
public readonly actionGetDocument: string;
```

- *Type:* string

[Read] ssm:GetDocument.

---

##### `actionGetExecutionPreview`<sup>Required</sup> <a name="actionGetExecutionPreview" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetExecutionPreview"></a>

```typescript
public readonly actionGetExecutionPreview: string;
```

- *Type:* string

[Read] ssm:GetExecutionPreview.

---

##### `actionGetInventory`<sup>Required</sup> <a name="actionGetInventory" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetInventory"></a>

```typescript
public readonly actionGetInventory: string;
```

- *Type:* string

[Read] ssm:GetInventory.

---

##### `actionGetInventorySchema`<sup>Required</sup> <a name="actionGetInventorySchema" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetInventorySchema"></a>

```typescript
public readonly actionGetInventorySchema: string;
```

- *Type:* string

[Read] ssm:GetInventorySchema.

---

##### `actionGetMaintenanceWindow`<sup>Required</sup> <a name="actionGetMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindow"></a>

```typescript
public readonly actionGetMaintenanceWindow: string;
```

- *Type:* string

[Read] ssm:GetMaintenanceWindow.

---

##### `actionGetMaintenanceWindowExecution`<sup>Required</sup> <a name="actionGetMaintenanceWindowExecution" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindowExecution"></a>

```typescript
public readonly actionGetMaintenanceWindowExecution: string;
```

- *Type:* string

[Read] ssm:GetMaintenanceWindowExecution.

---

##### `actionGetMaintenanceWindowExecutionTask`<sup>Required</sup> <a name="actionGetMaintenanceWindowExecutionTask" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindowExecutionTask"></a>

```typescript
public readonly actionGetMaintenanceWindowExecutionTask: string;
```

- *Type:* string

[Read] ssm:GetMaintenanceWindowExecutionTask.

---

##### `actionGetMaintenanceWindowExecutionTaskInvocation`<sup>Required</sup> <a name="actionGetMaintenanceWindowExecutionTaskInvocation" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindowExecutionTaskInvocation"></a>

```typescript
public readonly actionGetMaintenanceWindowExecutionTaskInvocation: string;
```

- *Type:* string

[Read] ssm:GetMaintenanceWindowExecutionTaskInvocation.

---

##### `actionGetMaintenanceWindowTask`<sup>Required</sup> <a name="actionGetMaintenanceWindowTask" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetMaintenanceWindowTask"></a>

```typescript
public readonly actionGetMaintenanceWindowTask: string;
```

- *Type:* string

[Read] ssm:GetMaintenanceWindowTask.

---

##### `actionGetManifest`<sup>Required</sup> <a name="actionGetManifest" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetManifest"></a>

```typescript
public readonly actionGetManifest: string;
```

- *Type:* string

[Read] ssm:GetManifest.

---

##### `actionGetOpsItem`<sup>Required</sup> <a name="actionGetOpsItem" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetOpsItem"></a>

```typescript
public readonly actionGetOpsItem: string;
```

- *Type:* string

[Read] ssm:GetOpsItem.

---

##### `actionGetOpsMetadata`<sup>Required</sup> <a name="actionGetOpsMetadata" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetOpsMetadata"></a>

```typescript
public readonly actionGetOpsMetadata: string;
```

- *Type:* string

[Read] ssm:GetOpsMetadata.

---

##### `actionGetOpsSummary`<sup>Required</sup> <a name="actionGetOpsSummary" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetOpsSummary"></a>

```typescript
public readonly actionGetOpsSummary: string;
```

- *Type:* string

[Read] ssm:GetOpsSummary.

---

##### `actionGetParameter`<sup>Required</sup> <a name="actionGetParameter" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetParameter"></a>

```typescript
public readonly actionGetParameter: string;
```

- *Type:* string

[Read] ssm:GetParameter.

---

##### `actionGetParameterHistory`<sup>Required</sup> <a name="actionGetParameterHistory" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetParameterHistory"></a>

```typescript
public readonly actionGetParameterHistory: string;
```

- *Type:* string

[Read] ssm:GetParameterHistory.

---

##### `actionGetParameters`<sup>Required</sup> <a name="actionGetParameters" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetParameters"></a>

```typescript
public readonly actionGetParameters: string;
```

- *Type:* string

[Read] ssm:GetParameters.

---

##### `actionGetParametersByPath`<sup>Required</sup> <a name="actionGetParametersByPath" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetParametersByPath"></a>

```typescript
public readonly actionGetParametersByPath: string;
```

- *Type:* string

[Read] ssm:GetParametersByPath.

---

##### `actionGetPatchBaseline`<sup>Required</sup> <a name="actionGetPatchBaseline" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetPatchBaseline"></a>

```typescript
public readonly actionGetPatchBaseline: string;
```

- *Type:* string

[Read] ssm:GetPatchBaseline.

---

##### `actionGetPatchBaselineForPatchGroup`<sup>Required</sup> <a name="actionGetPatchBaselineForPatchGroup" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetPatchBaselineForPatchGroup"></a>

```typescript
public readonly actionGetPatchBaselineForPatchGroup: string;
```

- *Type:* string

[Read] ssm:GetPatchBaselineForPatchGroup.

---

##### `actionGetResourcePolicies`<sup>Required</sup> <a name="actionGetResourcePolicies" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetResourcePolicies"></a>

```typescript
public readonly actionGetResourcePolicies: string;
```

- *Type:* string

[List] ssm:GetResourcePolicies.

---

##### `actionGetServiceSetting`<sup>Required</sup> <a name="actionGetServiceSetting" id="@cdk_utils/iam.ssm.SSMActions.property.actionGetServiceSetting"></a>

```typescript
public readonly actionGetServiceSetting: string;
```

- *Type:* string

[Read] ssm:GetServiceSetting.

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.ssm.SSMActions.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string;
```

- *Type:* string

[Tagging] ssm:AddTagsToResource.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ssm.SSMActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ssm.SSMActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ssm.SSMActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ssm.SSMActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ssm.SSMActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateOpsItemRelatedItem`<sup>Required</sup> <a name="AssociateOpsItemRelatedItem" id="@cdk_utils/iam.ssm.SSMActions.property.AssociateOpsItemRelatedItem"></a>

```typescript
public readonly AssociateOpsItemRelatedItem: string;
```

- *Type:* string

[Write] ssm:AssociateOpsItemRelatedItem.

---

##### `CancelCommand`<sup>Required</sup> <a name="CancelCommand" id="@cdk_utils/iam.ssm.SSMActions.property.CancelCommand"></a>

```typescript
public readonly CancelCommand: string;
```

- *Type:* string

[Write] ssm:CancelCommand.

---

##### `CancelMaintenanceWindowExecution`<sup>Required</sup> <a name="CancelMaintenanceWindowExecution" id="@cdk_utils/iam.ssm.SSMActions.property.CancelMaintenanceWindowExecution"></a>

```typescript
public readonly CancelMaintenanceWindowExecution: string;
```

- *Type:* string

[Write] ssm:CancelMaintenanceWindowExecution.

---

##### `CreateActivation`<sup>Required</sup> <a name="CreateActivation" id="@cdk_utils/iam.ssm.SSMActions.property.CreateActivation"></a>

```typescript
public readonly CreateActivation: string;
```

- *Type:* string

[Write] ssm:CreateActivation.

---

##### `CreateAssociation`<sup>Required</sup> <a name="CreateAssociation" id="@cdk_utils/iam.ssm.SSMActions.property.CreateAssociation"></a>

```typescript
public readonly CreateAssociation: string;
```

- *Type:* string

[Write] ssm:CreateAssociation.

---

##### `CreateAssociationBatch`<sup>Required</sup> <a name="CreateAssociationBatch" id="@cdk_utils/iam.ssm.SSMActions.property.CreateAssociationBatch"></a>

```typescript
public readonly CreateAssociationBatch: string;
```

- *Type:* string

[Write] ssm:CreateAssociationBatch.

---

##### `CreateCloudConnector`<sup>Required</sup> <a name="CreateCloudConnector" id="@cdk_utils/iam.ssm.SSMActions.property.CreateCloudConnector"></a>

```typescript
public readonly CreateCloudConnector: string;
```

- *Type:* string

[Write] ssm:CreateCloudConnector.

---

##### `CreateDocument`<sup>Required</sup> <a name="CreateDocument" id="@cdk_utils/iam.ssm.SSMActions.property.CreateDocument"></a>

```typescript
public readonly CreateDocument: string;
```

- *Type:* string

[Write] ssm:CreateDocument.

---

##### `CreateMaintenanceWindow`<sup>Required</sup> <a name="CreateMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMActions.property.CreateMaintenanceWindow"></a>

```typescript
public readonly CreateMaintenanceWindow: string;
```

- *Type:* string

[Write] ssm:CreateMaintenanceWindow.

---

##### `CreateOpsItem`<sup>Required</sup> <a name="CreateOpsItem" id="@cdk_utils/iam.ssm.SSMActions.property.CreateOpsItem"></a>

```typescript
public readonly CreateOpsItem: string;
```

- *Type:* string

[Write] ssm:CreateOpsItem.

---

##### `CreateOpsMetadata`<sup>Required</sup> <a name="CreateOpsMetadata" id="@cdk_utils/iam.ssm.SSMActions.property.CreateOpsMetadata"></a>

```typescript
public readonly CreateOpsMetadata: string;
```

- *Type:* string

[Write] ssm:CreateOpsMetadata.

---

##### `CreatePatchBaseline`<sup>Required</sup> <a name="CreatePatchBaseline" id="@cdk_utils/iam.ssm.SSMActions.property.CreatePatchBaseline"></a>

```typescript
public readonly CreatePatchBaseline: string;
```

- *Type:* string

[Write] ssm:CreatePatchBaseline.

---

##### `CreateResourceDataSync`<sup>Required</sup> <a name="CreateResourceDataSync" id="@cdk_utils/iam.ssm.SSMActions.property.CreateResourceDataSync"></a>

```typescript
public readonly CreateResourceDataSync: string;
```

- *Type:* string

[Write] ssm:CreateResourceDataSync.

---

##### `DeleteActivation`<sup>Required</sup> <a name="DeleteActivation" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteActivation"></a>

```typescript
public readonly DeleteActivation: string;
```

- *Type:* string

[Write] ssm:DeleteActivation.

---

##### `DeleteAssociation`<sup>Required</sup> <a name="DeleteAssociation" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteAssociation"></a>

```typescript
public readonly DeleteAssociation: string;
```

- *Type:* string

[Write] ssm:DeleteAssociation.

---

##### `DeleteCloudConnector`<sup>Required</sup> <a name="DeleteCloudConnector" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteCloudConnector"></a>

```typescript
public readonly DeleteCloudConnector: string;
```

- *Type:* string

[Write] ssm:DeleteCloudConnector.

---

##### `DeleteDocument`<sup>Required</sup> <a name="DeleteDocument" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteDocument"></a>

```typescript
public readonly DeleteDocument: string;
```

- *Type:* string

[Write] ssm:DeleteDocument.

---

##### `DeleteInventory`<sup>Required</sup> <a name="DeleteInventory" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteInventory"></a>

```typescript
public readonly DeleteInventory: string;
```

- *Type:* string

[Write] ssm:DeleteInventory.

---

##### `DeleteMaintenanceWindow`<sup>Required</sup> <a name="DeleteMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteMaintenanceWindow"></a>

```typescript
public readonly DeleteMaintenanceWindow: string;
```

- *Type:* string

[Write] ssm:DeleteMaintenanceWindow.

---

##### `DeleteOpsItem`<sup>Required</sup> <a name="DeleteOpsItem" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteOpsItem"></a>

```typescript
public readonly DeleteOpsItem: string;
```

- *Type:* string

[Write] ssm:DeleteOpsItem.

---

##### `DeleteOpsMetadata`<sup>Required</sup> <a name="DeleteOpsMetadata" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteOpsMetadata"></a>

```typescript
public readonly DeleteOpsMetadata: string;
```

- *Type:* string

[Write] ssm:DeleteOpsMetadata.

---

##### `DeleteParameter`<sup>Required</sup> <a name="DeleteParameter" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteParameter"></a>

```typescript
public readonly DeleteParameter: string;
```

- *Type:* string

[Write] ssm:DeleteParameter.

---

##### `DeleteParameters`<sup>Required</sup> <a name="DeleteParameters" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteParameters"></a>

```typescript
public readonly DeleteParameters: string;
```

- *Type:* string

[Write] ssm:DeleteParameters.

---

##### `DeletePatchBaseline`<sup>Required</sup> <a name="DeletePatchBaseline" id="@cdk_utils/iam.ssm.SSMActions.property.DeletePatchBaseline"></a>

```typescript
public readonly DeletePatchBaseline: string;
```

- *Type:* string

[Write] ssm:DeletePatchBaseline.

---

##### `DeleteResourceDataSync`<sup>Required</sup> <a name="DeleteResourceDataSync" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteResourceDataSync"></a>

```typescript
public readonly DeleteResourceDataSync: string;
```

- *Type:* string

[Write] ssm:DeleteResourceDataSync.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.ssm.SSMActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] ssm:DeleteResourcePolicy.

---

##### `DeregisterManagedInstance`<sup>Required</sup> <a name="DeregisterManagedInstance" id="@cdk_utils/iam.ssm.SSMActions.property.DeregisterManagedInstance"></a>

```typescript
public readonly DeregisterManagedInstance: string;
```

- *Type:* string

[Write] ssm:DeregisterManagedInstance.

---

##### `DeregisterPatchBaselineForPatchGroup`<sup>Required</sup> <a name="DeregisterPatchBaselineForPatchGroup" id="@cdk_utils/iam.ssm.SSMActions.property.DeregisterPatchBaselineForPatchGroup"></a>

```typescript
public readonly DeregisterPatchBaselineForPatchGroup: string;
```

- *Type:* string

[Write] ssm:DeregisterPatchBaselineForPatchGroup.

---

##### `DeregisterTargetFromMaintenanceWindow`<sup>Required</sup> <a name="DeregisterTargetFromMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMActions.property.DeregisterTargetFromMaintenanceWindow"></a>

```typescript
public readonly DeregisterTargetFromMaintenanceWindow: string;
```

- *Type:* string

[Write] ssm:DeregisterTargetFromMaintenanceWindow.

---

##### `DeregisterTaskFromMaintenanceWindow`<sup>Required</sup> <a name="DeregisterTaskFromMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMActions.property.DeregisterTaskFromMaintenanceWindow"></a>

```typescript
public readonly DeregisterTaskFromMaintenanceWindow: string;
```

- *Type:* string

[Write] ssm:DeregisterTaskFromMaintenanceWindow.

---

##### `DescribeActivations`<sup>Required</sup> <a name="DescribeActivations" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeActivations"></a>

```typescript
public readonly DescribeActivations: string;
```

- *Type:* string

[Read] ssm:DescribeActivations.

---

##### `DescribeAssociation`<sup>Required</sup> <a name="DescribeAssociation" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeAssociation"></a>

```typescript
public readonly DescribeAssociation: string;
```

- *Type:* string

[Read] ssm:DescribeAssociation.

---

##### `DescribeAssociationExecutions`<sup>Required</sup> <a name="DescribeAssociationExecutions" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeAssociationExecutions"></a>

```typescript
public readonly DescribeAssociationExecutions: string;
```

- *Type:* string

[Read] ssm:DescribeAssociationExecutions.

---

##### `DescribeAssociationExecutionTargets`<sup>Required</sup> <a name="DescribeAssociationExecutionTargets" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeAssociationExecutionTargets"></a>

```typescript
public readonly DescribeAssociationExecutionTargets: string;
```

- *Type:* string

[Read] ssm:DescribeAssociationExecutionTargets.

---

##### `DescribeAutomationExecutions`<sup>Required</sup> <a name="DescribeAutomationExecutions" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeAutomationExecutions"></a>

```typescript
public readonly DescribeAutomationExecutions: string;
```

- *Type:* string

[Read] ssm:DescribeAutomationExecutions.

---

##### `DescribeAutomationStepExecutions`<sup>Required</sup> <a name="DescribeAutomationStepExecutions" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeAutomationStepExecutions"></a>

```typescript
public readonly DescribeAutomationStepExecutions: string;
```

- *Type:* string

[Read] ssm:DescribeAutomationStepExecutions.

---

##### `DescribeAvailablePatches`<sup>Required</sup> <a name="DescribeAvailablePatches" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeAvailablePatches"></a>

```typescript
public readonly DescribeAvailablePatches: string;
```

- *Type:* string

[Read] ssm:DescribeAvailablePatches.

---

##### `DescribeDocument`<sup>Required</sup> <a name="DescribeDocument" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeDocument"></a>

```typescript
public readonly DescribeDocument: string;
```

- *Type:* string

[Read] ssm:DescribeDocument.

---

##### `DescribeDocumentParameters`<sup>Required</sup> <a name="DescribeDocumentParameters" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeDocumentParameters"></a>

```typescript
public readonly DescribeDocumentParameters: string;
```

- *Type:* string

[Read] ssm:DescribeDocumentParameters.

---

##### `DescribeDocumentPermission`<sup>Required</sup> <a name="DescribeDocumentPermission" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeDocumentPermission"></a>

```typescript
public readonly DescribeDocumentPermission: string;
```

- *Type:* string

[Read] ssm:DescribeDocumentPermission.

---

##### `DescribeEffectiveInstanceAssociations`<sup>Required</sup> <a name="DescribeEffectiveInstanceAssociations" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeEffectiveInstanceAssociations"></a>

```typescript
public readonly DescribeEffectiveInstanceAssociations: string;
```

- *Type:* string

[Read] ssm:DescribeEffectiveInstanceAssociations.

---

##### `DescribeEffectivePatchesForPatchBaseline`<sup>Required</sup> <a name="DescribeEffectivePatchesForPatchBaseline" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeEffectivePatchesForPatchBaseline"></a>

```typescript
public readonly DescribeEffectivePatchesForPatchBaseline: string;
```

- *Type:* string

[Read] ssm:DescribeEffectivePatchesForPatchBaseline.

---

##### `DescribeInstanceAssociationsStatus`<sup>Required</sup> <a name="DescribeInstanceAssociationsStatus" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeInstanceAssociationsStatus"></a>

```typescript
public readonly DescribeInstanceAssociationsStatus: string;
```

- *Type:* string

[Read] ssm:DescribeInstanceAssociationsStatus.

---

##### `DescribeInstanceInformation`<sup>Required</sup> <a name="DescribeInstanceInformation" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeInstanceInformation"></a>

```typescript
public readonly DescribeInstanceInformation: string;
```

- *Type:* string

[Read] ssm:DescribeInstanceInformation.

---

##### `DescribeInstancePatches`<sup>Required</sup> <a name="DescribeInstancePatches" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeInstancePatches"></a>

```typescript
public readonly DescribeInstancePatches: string;
```

- *Type:* string

[Read] ssm:DescribeInstancePatches.

---

##### `DescribeInstancePatchStates`<sup>Required</sup> <a name="DescribeInstancePatchStates" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeInstancePatchStates"></a>

```typescript
public readonly DescribeInstancePatchStates: string;
```

- *Type:* string

[Read] ssm:DescribeInstancePatchStates.

---

##### `DescribeInstancePatchStatesForPatchGroup`<sup>Required</sup> <a name="DescribeInstancePatchStatesForPatchGroup" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeInstancePatchStatesForPatchGroup"></a>

```typescript
public readonly DescribeInstancePatchStatesForPatchGroup: string;
```

- *Type:* string

[Read] ssm:DescribeInstancePatchStatesForPatchGroup.

---

##### `DescribeInstanceProperties`<sup>Required</sup> <a name="DescribeInstanceProperties" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeInstanceProperties"></a>

```typescript
public readonly DescribeInstanceProperties: string;
```

- *Type:* string

[Read] ssm:DescribeInstanceProperties.

---

##### `DescribeInventoryDeletions`<sup>Required</sup> <a name="DescribeInventoryDeletions" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeInventoryDeletions"></a>

```typescript
public readonly DescribeInventoryDeletions: string;
```

- *Type:* string

[Read] ssm:DescribeInventoryDeletions.

---

##### `DescribeMaintenanceWindowExecutions`<sup>Required</sup> <a name="DescribeMaintenanceWindowExecutions" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowExecutions"></a>

```typescript
public readonly DescribeMaintenanceWindowExecutions: string;
```

- *Type:* string

[List] ssm:DescribeMaintenanceWindowExecutions.

---

##### `DescribeMaintenanceWindowExecutionTaskInvocations`<sup>Required</sup> <a name="DescribeMaintenanceWindowExecutionTaskInvocations" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowExecutionTaskInvocations"></a>

```typescript
public readonly DescribeMaintenanceWindowExecutionTaskInvocations: string;
```

- *Type:* string

[List] ssm:DescribeMaintenanceWindowExecutionTaskInvocations.

---

##### `DescribeMaintenanceWindowExecutionTasks`<sup>Required</sup> <a name="DescribeMaintenanceWindowExecutionTasks" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowExecutionTasks"></a>

```typescript
public readonly DescribeMaintenanceWindowExecutionTasks: string;
```

- *Type:* string

[List] ssm:DescribeMaintenanceWindowExecutionTasks.

---

##### `DescribeMaintenanceWindows`<sup>Required</sup> <a name="DescribeMaintenanceWindows" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindows"></a>

```typescript
public readonly DescribeMaintenanceWindows: string;
```

- *Type:* string

[List] ssm:DescribeMaintenanceWindows.

---

##### `DescribeMaintenanceWindowSchedule`<sup>Required</sup> <a name="DescribeMaintenanceWindowSchedule" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowSchedule"></a>

```typescript
public readonly DescribeMaintenanceWindowSchedule: string;
```

- *Type:* string

[List] ssm:DescribeMaintenanceWindowSchedule.

---

##### `DescribeMaintenanceWindowsForTarget`<sup>Required</sup> <a name="DescribeMaintenanceWindowsForTarget" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowsForTarget"></a>

```typescript
public readonly DescribeMaintenanceWindowsForTarget: string;
```

- *Type:* string

[List] ssm:DescribeMaintenanceWindowsForTarget.

---

##### `DescribeMaintenanceWindowTargets`<sup>Required</sup> <a name="DescribeMaintenanceWindowTargets" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowTargets"></a>

```typescript
public readonly DescribeMaintenanceWindowTargets: string;
```

- *Type:* string

[List] ssm:DescribeMaintenanceWindowTargets.

---

##### `DescribeMaintenanceWindowTasks`<sup>Required</sup> <a name="DescribeMaintenanceWindowTasks" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeMaintenanceWindowTasks"></a>

```typescript
public readonly DescribeMaintenanceWindowTasks: string;
```

- *Type:* string

[List] ssm:DescribeMaintenanceWindowTasks.

---

##### `DescribeOpsItems`<sup>Required</sup> <a name="DescribeOpsItems" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeOpsItems"></a>

```typescript
public readonly DescribeOpsItems: string;
```

- *Type:* string

[Read] ssm:DescribeOpsItems.

---

##### `DescribeParameters`<sup>Required</sup> <a name="DescribeParameters" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeParameters"></a>

```typescript
public readonly DescribeParameters: string;
```

- *Type:* string

[List] ssm:DescribeParameters.

---

##### `DescribePatchBaselines`<sup>Required</sup> <a name="DescribePatchBaselines" id="@cdk_utils/iam.ssm.SSMActions.property.DescribePatchBaselines"></a>

```typescript
public readonly DescribePatchBaselines: string;
```

- *Type:* string

[List] ssm:DescribePatchBaselines.

---

##### `DescribePatchGroups`<sup>Required</sup> <a name="DescribePatchGroups" id="@cdk_utils/iam.ssm.SSMActions.property.DescribePatchGroups"></a>

```typescript
public readonly DescribePatchGroups: string;
```

- *Type:* string

[List] ssm:DescribePatchGroups.

---

##### `DescribePatchGroupState`<sup>Required</sup> <a name="DescribePatchGroupState" id="@cdk_utils/iam.ssm.SSMActions.property.DescribePatchGroupState"></a>

```typescript
public readonly DescribePatchGroupState: string;
```

- *Type:* string

[List] ssm:DescribePatchGroupState.

---

##### `DescribePatchProperties`<sup>Required</sup> <a name="DescribePatchProperties" id="@cdk_utils/iam.ssm.SSMActions.property.DescribePatchProperties"></a>

```typescript
public readonly DescribePatchProperties: string;
```

- *Type:* string

[List] ssm:DescribePatchProperties.

---

##### `DescribeSessions`<sup>Required</sup> <a name="DescribeSessions" id="@cdk_utils/iam.ssm.SSMActions.property.DescribeSessions"></a>

```typescript
public readonly DescribeSessions: string;
```

- *Type:* string

[List] ssm:DescribeSessions.

---

##### `DisassociateOpsItemRelatedItem`<sup>Required</sup> <a name="DisassociateOpsItemRelatedItem" id="@cdk_utils/iam.ssm.SSMActions.property.DisassociateOpsItemRelatedItem"></a>

```typescript
public readonly DisassociateOpsItemRelatedItem: string;
```

- *Type:* string

[Write] ssm:DisassociateOpsItemRelatedItem.

---

##### `ExecuteAPI`<sup>Required</sup> <a name="ExecuteAPI" id="@cdk_utils/iam.ssm.SSMActions.property.ExecuteAPI"></a>

```typescript
public readonly ExecuteAPI: string;
```

- *Type:* string

[Read] ssm:ExecuteAPI.

---

##### `LabelParameterVersion`<sup>Required</sup> <a name="LabelParameterVersion" id="@cdk_utils/iam.ssm.SSMActions.property.LabelParameterVersion"></a>

```typescript
public readonly LabelParameterVersion: string;
```

- *Type:* string

[Write] ssm:LabelParameterVersion.

---

##### `ListAssociations`<sup>Required</sup> <a name="ListAssociations" id="@cdk_utils/iam.ssm.SSMActions.property.ListAssociations"></a>

```typescript
public readonly ListAssociations: string;
```

- *Type:* string

[List] ssm:ListAssociations.

---

##### `ListAssociationVersions`<sup>Required</sup> <a name="ListAssociationVersions" id="@cdk_utils/iam.ssm.SSMActions.property.ListAssociationVersions"></a>

```typescript
public readonly ListAssociationVersions: string;
```

- *Type:* string

[List] ssm:ListAssociationVersions.

---

##### `ListCloudConnectors`<sup>Required</sup> <a name="ListCloudConnectors" id="@cdk_utils/iam.ssm.SSMActions.property.ListCloudConnectors"></a>

```typescript
public readonly ListCloudConnectors: string;
```

- *Type:* string

[List] ssm:ListCloudConnectors.

---

##### `ListCommandInvocations`<sup>Required</sup> <a name="ListCommandInvocations" id="@cdk_utils/iam.ssm.SSMActions.property.ListCommandInvocations"></a>

```typescript
public readonly ListCommandInvocations: string;
```

- *Type:* string

[List] ssm:ListCommandInvocations.

---

##### `ListCommands`<sup>Required</sup> <a name="ListCommands" id="@cdk_utils/iam.ssm.SSMActions.property.ListCommands"></a>

```typescript
public readonly ListCommands: string;
```

- *Type:* string

[List] ssm:ListCommands.

---

##### `ListComplianceItems`<sup>Required</sup> <a name="ListComplianceItems" id="@cdk_utils/iam.ssm.SSMActions.property.ListComplianceItems"></a>

```typescript
public readonly ListComplianceItems: string;
```

- *Type:* string

[List] ssm:ListComplianceItems.

---

##### `ListComplianceSummaries`<sup>Required</sup> <a name="ListComplianceSummaries" id="@cdk_utils/iam.ssm.SSMActions.property.ListComplianceSummaries"></a>

```typescript
public readonly ListComplianceSummaries: string;
```

- *Type:* string

[List] ssm:ListComplianceSummaries.

---

##### `ListDocumentMetadataHistory`<sup>Required</sup> <a name="ListDocumentMetadataHistory" id="@cdk_utils/iam.ssm.SSMActions.property.ListDocumentMetadataHistory"></a>

```typescript
public readonly ListDocumentMetadataHistory: string;
```

- *Type:* string

[List] ssm:ListDocumentMetadataHistory.

---

##### `ListDocuments`<sup>Required</sup> <a name="ListDocuments" id="@cdk_utils/iam.ssm.SSMActions.property.ListDocuments"></a>

```typescript
public readonly ListDocuments: string;
```

- *Type:* string

[List] ssm:ListDocuments.

---

##### `ListDocumentVersions`<sup>Required</sup> <a name="ListDocumentVersions" id="@cdk_utils/iam.ssm.SSMActions.property.ListDocumentVersions"></a>

```typescript
public readonly ListDocumentVersions: string;
```

- *Type:* string

[List] ssm:ListDocumentVersions.

---

##### `ListInstanceAssociations`<sup>Required</sup> <a name="ListInstanceAssociations" id="@cdk_utils/iam.ssm.SSMActions.property.ListInstanceAssociations"></a>

```typescript
public readonly ListInstanceAssociations: string;
```

- *Type:* string

[List] ssm:ListInstanceAssociations.

---

##### `ListInventoryEntries`<sup>Required</sup> <a name="ListInventoryEntries" id="@cdk_utils/iam.ssm.SSMActions.property.ListInventoryEntries"></a>

```typescript
public readonly ListInventoryEntries: string;
```

- *Type:* string

[List] ssm:ListInventoryEntries.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.ssm.SSMActions.property.ListNodes"></a>

```typescript
public readonly ListNodes: string;
```

- *Type:* string

[List] ssm:ListNodes.

---

##### `ListNodesSummary`<sup>Required</sup> <a name="ListNodesSummary" id="@cdk_utils/iam.ssm.SSMActions.property.ListNodesSummary"></a>

```typescript
public readonly ListNodesSummary: string;
```

- *Type:* string

[List] ssm:ListNodesSummary.

---

##### `ListOpsItemEvents`<sup>Required</sup> <a name="ListOpsItemEvents" id="@cdk_utils/iam.ssm.SSMActions.property.ListOpsItemEvents"></a>

```typescript
public readonly ListOpsItemEvents: string;
```

- *Type:* string

[List] ssm:ListOpsItemEvents.

---

##### `ListOpsItemRelatedItems`<sup>Required</sup> <a name="ListOpsItemRelatedItems" id="@cdk_utils/iam.ssm.SSMActions.property.ListOpsItemRelatedItems"></a>

```typescript
public readonly ListOpsItemRelatedItems: string;
```

- *Type:* string

[List] ssm:ListOpsItemRelatedItems.

---

##### `ListOpsMetadata`<sup>Required</sup> <a name="ListOpsMetadata" id="@cdk_utils/iam.ssm.SSMActions.property.ListOpsMetadata"></a>

```typescript
public readonly ListOpsMetadata: string;
```

- *Type:* string

[List] ssm:ListOpsMetadata.

---

##### `ListResourceComplianceSummaries`<sup>Required</sup> <a name="ListResourceComplianceSummaries" id="@cdk_utils/iam.ssm.SSMActions.property.ListResourceComplianceSummaries"></a>

```typescript
public readonly ListResourceComplianceSummaries: string;
```

- *Type:* string

[List] ssm:ListResourceComplianceSummaries.

---

##### `ListResourceDataSync`<sup>Required</sup> <a name="ListResourceDataSync" id="@cdk_utils/iam.ssm.SSMActions.property.ListResourceDataSync"></a>

```typescript
public readonly ListResourceDataSync: string;
```

- *Type:* string

[List] ssm:ListResourceDataSync.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm.SSMActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] ssm:ListTagsForResource.

---

##### `ModifyDocumentPermission`<sup>Required</sup> <a name="ModifyDocumentPermission" id="@cdk_utils/iam.ssm.SSMActions.property.ModifyDocumentPermission"></a>

```typescript
public readonly ModifyDocumentPermission: string;
```

- *Type:* string

[PermissionManagement] ssm:ModifyDocumentPermission.

---

##### `PutCalendar`<sup>Required</sup> <a name="PutCalendar" id="@cdk_utils/iam.ssm.SSMActions.property.PutCalendar"></a>

```typescript
public readonly PutCalendar: string;
```

- *Type:* string

[Write] ssm:PutCalendar.

---

##### `PutComplianceItems`<sup>Required</sup> <a name="PutComplianceItems" id="@cdk_utils/iam.ssm.SSMActions.property.PutComplianceItems"></a>

```typescript
public readonly PutComplianceItems: string;
```

- *Type:* string

[Write] ssm:PutComplianceItems.

---

##### `PutConfigurePackageResult`<sup>Required</sup> <a name="PutConfigurePackageResult" id="@cdk_utils/iam.ssm.SSMActions.property.PutConfigurePackageResult"></a>

```typescript
public readonly PutConfigurePackageResult: string;
```

- *Type:* string

[Read] ssm:PutConfigurePackageResult.

---

##### `PutInventory`<sup>Required</sup> <a name="PutInventory" id="@cdk_utils/iam.ssm.SSMActions.property.PutInventory"></a>

```typescript
public readonly PutInventory: string;
```

- *Type:* string

[Write] ssm:PutInventory.

---

##### `PutParameter`<sup>Required</sup> <a name="PutParameter" id="@cdk_utils/iam.ssm.SSMActions.property.PutParameter"></a>

```typescript
public readonly PutParameter: string;
```

- *Type:* string

[Write] ssm:PutParameter.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.ssm.SSMActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] ssm:PutResourcePolicy.

---

##### `RegisterDefaultPatchBaseline`<sup>Required</sup> <a name="RegisterDefaultPatchBaseline" id="@cdk_utils/iam.ssm.SSMActions.property.RegisterDefaultPatchBaseline"></a>

```typescript
public readonly RegisterDefaultPatchBaseline: string;
```

- *Type:* string

[Write] ssm:RegisterDefaultPatchBaseline.

---

##### `RegisterManagedInstance`<sup>Required</sup> <a name="RegisterManagedInstance" id="@cdk_utils/iam.ssm.SSMActions.property.RegisterManagedInstance"></a>

```typescript
public readonly RegisterManagedInstance: string;
```

- *Type:* string

[Write] ssm:RegisterManagedInstance.

---

##### `RegisterPatchBaselineForPatchGroup`<sup>Required</sup> <a name="RegisterPatchBaselineForPatchGroup" id="@cdk_utils/iam.ssm.SSMActions.property.RegisterPatchBaselineForPatchGroup"></a>

```typescript
public readonly RegisterPatchBaselineForPatchGroup: string;
```

- *Type:* string

[Write] ssm:RegisterPatchBaselineForPatchGroup.

---

##### `RegisterTargetWithMaintenanceWindow`<sup>Required</sup> <a name="RegisterTargetWithMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMActions.property.RegisterTargetWithMaintenanceWindow"></a>

```typescript
public readonly RegisterTargetWithMaintenanceWindow: string;
```

- *Type:* string

[Write] ssm:RegisterTargetWithMaintenanceWindow.

---

##### `RegisterTaskWithMaintenanceWindow`<sup>Required</sup> <a name="RegisterTaskWithMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMActions.property.RegisterTaskWithMaintenanceWindow"></a>

```typescript
public readonly RegisterTaskWithMaintenanceWindow: string;
```

- *Type:* string

[Write] ssm:RegisterTaskWithMaintenanceWindow.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.ssm.SSMActions.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string;
```

- *Type:* string

[Tagging] ssm:RemoveTagsFromResource.

---

##### `RequestManagedInstanceRoleToken`<sup>Required</sup> <a name="RequestManagedInstanceRoleToken" id="@cdk_utils/iam.ssm.SSMActions.property.RequestManagedInstanceRoleToken"></a>

```typescript
public readonly RequestManagedInstanceRoleToken: string;
```

- *Type:* string

[Write] ssm:RequestManagedInstanceRoleToken.

---

##### `ResetServiceSetting`<sup>Required</sup> <a name="ResetServiceSetting" id="@cdk_utils/iam.ssm.SSMActions.property.ResetServiceSetting"></a>

```typescript
public readonly ResetServiceSetting: string;
```

- *Type:* string

[Write] ssm:ResetServiceSetting.

---

##### `ResumeSession`<sup>Required</sup> <a name="ResumeSession" id="@cdk_utils/iam.ssm.SSMActions.property.ResumeSession"></a>

```typescript
public readonly ResumeSession: string;
```

- *Type:* string

[Write] ssm:ResumeSession.

---

##### `SendAutomationSignal`<sup>Required</sup> <a name="SendAutomationSignal" id="@cdk_utils/iam.ssm.SSMActions.property.SendAutomationSignal"></a>

```typescript
public readonly SendAutomationSignal: string;
```

- *Type:* string

[Write] ssm:SendAutomationSignal.

---

##### `SendCommand`<sup>Required</sup> <a name="SendCommand" id="@cdk_utils/iam.ssm.SSMActions.property.SendCommand"></a>

```typescript
public readonly SendCommand: string;
```

- *Type:* string

[Write] ssm:SendCommand.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ssm.SSMActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAccessRequest`<sup>Required</sup> <a name="StartAccessRequest" id="@cdk_utils/iam.ssm.SSMActions.property.StartAccessRequest"></a>

```typescript
public readonly StartAccessRequest: string;
```

- *Type:* string

[Write] ssm:StartAccessRequest.

---

##### `StartAssociationsOnce`<sup>Required</sup> <a name="StartAssociationsOnce" id="@cdk_utils/iam.ssm.SSMActions.property.StartAssociationsOnce"></a>

```typescript
public readonly StartAssociationsOnce: string;
```

- *Type:* string

[Write] ssm:StartAssociationsOnce.

---

##### `StartAutomationExecution`<sup>Required</sup> <a name="StartAutomationExecution" id="@cdk_utils/iam.ssm.SSMActions.property.StartAutomationExecution"></a>

```typescript
public readonly StartAutomationExecution: string;
```

- *Type:* string

[Write] ssm:StartAutomationExecution.

---

##### `StartChangeRequestExecution`<sup>Required</sup> <a name="StartChangeRequestExecution" id="@cdk_utils/iam.ssm.SSMActions.property.StartChangeRequestExecution"></a>

```typescript
public readonly StartChangeRequestExecution: string;
```

- *Type:* string

[Write] ssm:StartChangeRequestExecution.

---

##### `StartExecutionPreview`<sup>Required</sup> <a name="StartExecutionPreview" id="@cdk_utils/iam.ssm.SSMActions.property.StartExecutionPreview"></a>

```typescript
public readonly StartExecutionPreview: string;
```

- *Type:* string

[Read] ssm:StartExecutionPreview.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.ssm.SSMActions.property.StartSession"></a>

```typescript
public readonly StartSession: string;
```

- *Type:* string

[Write] ssm:StartSession.

---

##### `StopAutomationExecution`<sup>Required</sup> <a name="StopAutomationExecution" id="@cdk_utils/iam.ssm.SSMActions.property.StopAutomationExecution"></a>

```typescript
public readonly StopAutomationExecution: string;
```

- *Type:* string

[Write] ssm:StopAutomationExecution.

---

##### `TerminateSession`<sup>Required</sup> <a name="TerminateSession" id="@cdk_utils/iam.ssm.SSMActions.property.TerminateSession"></a>

```typescript
public readonly TerminateSession: string;
```

- *Type:* string

[Write] ssm:TerminateSession.

---

##### `UnlabelParameterVersion`<sup>Required</sup> <a name="UnlabelParameterVersion" id="@cdk_utils/iam.ssm.SSMActions.property.UnlabelParameterVersion"></a>

```typescript
public readonly UnlabelParameterVersion: string;
```

- *Type:* string

[Write] ssm:UnlabelParameterVersion.

---

##### `UpdateAssociation`<sup>Required</sup> <a name="UpdateAssociation" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateAssociation"></a>

```typescript
public readonly UpdateAssociation: string;
```

- *Type:* string

[Write] ssm:UpdateAssociation.

---

##### `UpdateAssociationStatus`<sup>Required</sup> <a name="UpdateAssociationStatus" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateAssociationStatus"></a>

```typescript
public readonly UpdateAssociationStatus: string;
```

- *Type:* string

[Write] ssm:UpdateAssociationStatus.

---

##### `UpdateCloudConnector`<sup>Required</sup> <a name="UpdateCloudConnector" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateCloudConnector"></a>

```typescript
public readonly UpdateCloudConnector: string;
```

- *Type:* string

[Write] ssm:UpdateCloudConnector.

---

##### `UpdateDocument`<sup>Required</sup> <a name="UpdateDocument" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateDocument"></a>

```typescript
public readonly UpdateDocument: string;
```

- *Type:* string

[Write] ssm:UpdateDocument.

---

##### `UpdateDocumentDefaultVersion`<sup>Required</sup> <a name="UpdateDocumentDefaultVersion" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateDocumentDefaultVersion"></a>

```typescript
public readonly UpdateDocumentDefaultVersion: string;
```

- *Type:* string

[Write] ssm:UpdateDocumentDefaultVersion.

---

##### `UpdateDocumentMetadata`<sup>Required</sup> <a name="UpdateDocumentMetadata" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateDocumentMetadata"></a>

```typescript
public readonly UpdateDocumentMetadata: string;
```

- *Type:* string

[Write] ssm:UpdateDocumentMetadata.

---

##### `UpdateInstanceAssociationStatus`<sup>Required</sup> <a name="UpdateInstanceAssociationStatus" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateInstanceAssociationStatus"></a>

```typescript
public readonly UpdateInstanceAssociationStatus: string;
```

- *Type:* string

[Write] ssm:UpdateInstanceAssociationStatus.

---

##### `UpdateInstanceInformation`<sup>Required</sup> <a name="UpdateInstanceInformation" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateInstanceInformation"></a>

```typescript
public readonly UpdateInstanceInformation: string;
```

- *Type:* string

[Write] ssm:UpdateInstanceInformation.

---

##### `UpdateMaintenanceWindow`<sup>Required</sup> <a name="UpdateMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateMaintenanceWindow"></a>

```typescript
public readonly UpdateMaintenanceWindow: string;
```

- *Type:* string

[Write] ssm:UpdateMaintenanceWindow.

---

##### `UpdateMaintenanceWindowTarget`<sup>Required</sup> <a name="UpdateMaintenanceWindowTarget" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateMaintenanceWindowTarget"></a>

```typescript
public readonly UpdateMaintenanceWindowTarget: string;
```

- *Type:* string

[Write] ssm:UpdateMaintenanceWindowTarget.

---

##### `UpdateMaintenanceWindowTask`<sup>Required</sup> <a name="UpdateMaintenanceWindowTask" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateMaintenanceWindowTask"></a>

```typescript
public readonly UpdateMaintenanceWindowTask: string;
```

- *Type:* string

[Write] ssm:UpdateMaintenanceWindowTask.

---

##### `UpdateManagedInstancePublicKey`<sup>Required</sup> <a name="UpdateManagedInstancePublicKey" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateManagedInstancePublicKey"></a>

```typescript
public readonly UpdateManagedInstancePublicKey: string;
```

- *Type:* string

[Write] ssm:UpdateManagedInstancePublicKey.

---

##### `UpdateManagedInstanceRole`<sup>Required</sup> <a name="UpdateManagedInstanceRole" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateManagedInstanceRole"></a>

```typescript
public readonly UpdateManagedInstanceRole: string;
```

- *Type:* string

[Write] ssm:UpdateManagedInstanceRole.

---

##### `UpdateOpsItem`<sup>Required</sup> <a name="UpdateOpsItem" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateOpsItem"></a>

```typescript
public readonly UpdateOpsItem: string;
```

- *Type:* string

[Write] ssm:UpdateOpsItem.

---

##### `UpdateOpsMetadata`<sup>Required</sup> <a name="UpdateOpsMetadata" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateOpsMetadata"></a>

```typescript
public readonly UpdateOpsMetadata: string;
```

- *Type:* string

[Write] ssm:UpdateOpsMetadata.

---

##### `UpdatePatchBaseline`<sup>Required</sup> <a name="UpdatePatchBaseline" id="@cdk_utils/iam.ssm.SSMActions.property.UpdatePatchBaseline"></a>

```typescript
public readonly UpdatePatchBaseline: string;
```

- *Type:* string

[Write] ssm:UpdatePatchBaseline.

---

##### `UpdateResourceDataSync`<sup>Required</sup> <a name="UpdateResourceDataSync" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateResourceDataSync"></a>

```typescript
public readonly UpdateResourceDataSync: string;
```

- *Type:* string

[Write] ssm:UpdateResourceDataSync.

---

##### `UpdateServiceSetting`<sup>Required</sup> <a name="UpdateServiceSetting" id="@cdk_utils/iam.ssm.SSMActions.property.UpdateServiceSetting"></a>

```typescript
public readonly UpdateServiceSetting: string;
```

- *Type:* string

[Write] ssm:UpdateServiceSetting.

---

##### `ValidateCloudConnector`<sup>Required</sup> <a name="ValidateCloudConnector" id="@cdk_utils/iam.ssm.SSMActions.property.ValidateCloudConnector"></a>

```typescript
public readonly ValidateCloudConnector: string;
```

- *Type:* string

[Read] ssm:ValidateCloudConnector.

---

### SSMConditions <a name="SSMConditions" id="@cdk_utils/iam.ssm.SSMConditions"></a>

Condition key constants and builders for ssm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm.SSMConditions.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

new ssm.SSMConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.accessRequestId">accessRequestId</a></code> | Generates a condition block for `ssm:AccessRequestId`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.autoApprove">autoApprove</a></code> | Generates a condition block for `ssm:AutoApprove`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.documentCategories">documentCategories</a></code> | Generates a condition block for `ssm:DocumentCategories`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.documentType">documentType</a></code> | Generates a condition block for `ssm:DocumentType`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.documentVersion">documentVersion</a></code> | Generates a condition block for `ssm:DocumentVersion`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.inventoryTypeName">inventoryTypeName</a></code> | Generates a condition block for `ssm:InventoryTypeName`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.nodeAccountId">nodeAccountId</a></code> | Generates a condition block for `ssm:NodeAccountId`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.nodeOrgId">nodeOrgId</a></code> | Generates a condition block for `ssm:NodeOrgId`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.overwrite">overwrite</a></code> | Generates a condition block for `ssm:Overwrite`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.policies">policies</a></code> | Generates a condition block for `ssm:Policies`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.recursive">recursive</a></code> | Generates a condition block for `ssm:Recursive`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.resourceTagAWSSsmmessagesSessionId">resourceTagAWSSsmmessagesSessionId</a></code> | Generates a condition block for `ssm:resourceTag/aws:ssmmessages:session-id`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.resourceTagAWSSsmmessagesTargetId">resourceTagAWSSsmmessagesTargetId</a></code> | Generates a condition block for `ssm:resourceTag/aws:ssmmessages:target-id`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.resourceTagTagKey">resourceTagTagKey</a></code> | Generates a condition block for `ssm:resourceTag/tag-key`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.sessionDocumentAccessCheck">sessionDocumentAccessCheck</a></code> | Generates a condition block for `ssm:SessionDocumentAccessCheck`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.sourceInstanceARN">sourceInstanceARN</a></code> | Generates a condition block for `ssm:SourceInstanceARN`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.syncType">syncType</a></code> | Generates a condition block for `ssm:SyncType`. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `accessRequestId` <a name="accessRequestId" id="@cdk_utils/iam.ssm.SSMConditions.accessRequestId"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.accessRequestId(value: string)
```

Generates a condition block for `ssm:AccessRequestId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.accessRequestId.parameter.value"></a>

- *Type:* string

---

##### `autoApprove` <a name="autoApprove" id="@cdk_utils/iam.ssm.SSMConditions.autoApprove"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.autoApprove(value: boolean)
```

Generates a condition block for `ssm:AutoApprove`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.autoApprove.parameter.value"></a>

- *Type:* boolean

---

##### `documentCategories` <a name="documentCategories" id="@cdk_utils/iam.ssm.SSMConditions.documentCategories"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.documentCategories(values: string[])
```

Generates a condition block for `ssm:DocumentCategories`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ssm.SSMConditions.documentCategories.parameter.values"></a>

- *Type:* string[]

---

##### `documentType` <a name="documentType" id="@cdk_utils/iam.ssm.SSMConditions.documentType"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.documentType(value: string)
```

Generates a condition block for `ssm:DocumentType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.documentType.parameter.value"></a>

- *Type:* string

---

##### `documentVersion` <a name="documentVersion" id="@cdk_utils/iam.ssm.SSMConditions.documentVersion"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.documentVersion(values: string[])
```

Generates a condition block for `ssm:DocumentVersion`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ssm.SSMConditions.documentVersion.parameter.values"></a>

- *Type:* string[]

---

##### `inventoryTypeName` <a name="inventoryTypeName" id="@cdk_utils/iam.ssm.SSMConditions.inventoryTypeName"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.inventoryTypeName(values: string[])
```

Generates a condition block for `ssm:InventoryTypeName`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ssm.SSMConditions.inventoryTypeName.parameter.values"></a>

- *Type:* string[]

---

##### `nodeAccountId` <a name="nodeAccountId" id="@cdk_utils/iam.ssm.SSMConditions.nodeAccountId"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.nodeAccountId(value: string)
```

Generates a condition block for `ssm:NodeAccountId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.nodeAccountId.parameter.value"></a>

- *Type:* string

---

##### `nodeOrgId` <a name="nodeOrgId" id="@cdk_utils/iam.ssm.SSMConditions.nodeOrgId"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.nodeOrgId(value: string)
```

Generates a condition block for `ssm:NodeOrgId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.nodeOrgId.parameter.value"></a>

- *Type:* string

---

##### `overwrite` <a name="overwrite" id="@cdk_utils/iam.ssm.SSMConditions.overwrite"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.overwrite(value: string)
```

Generates a condition block for `ssm:Overwrite`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.overwrite.parameter.value"></a>

- *Type:* string

---

##### `policies` <a name="policies" id="@cdk_utils/iam.ssm.SSMConditions.policies"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.policies(value: string)
```

Generates a condition block for `ssm:Policies`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.policies.parameter.value"></a>

- *Type:* string

---

##### `recursive` <a name="recursive" id="@cdk_utils/iam.ssm.SSMConditions.recursive"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.recursive(value: string)
```

Generates a condition block for `ssm:Recursive`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.recursive.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ssm.SSMConditions.requestTag"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ssm.SSMConditions.resourceTag"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTagAWSSsmmessagesSessionId` <a name="resourceTagAWSSsmmessagesSessionId" id="@cdk_utils/iam.ssm.SSMConditions.resourceTagAWSSsmmessagesSessionId"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.resourceTagAWSSsmmessagesSessionId(value: string)
```

Generates a condition block for `ssm:resourceTag/aws:ssmmessages:session-id`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.resourceTagAWSSsmmessagesSessionId.parameter.value"></a>

- *Type:* string

---

##### `resourceTagAWSSsmmessagesTargetId` <a name="resourceTagAWSSsmmessagesTargetId" id="@cdk_utils/iam.ssm.SSMConditions.resourceTagAWSSsmmessagesTargetId"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.resourceTagAWSSsmmessagesTargetId(value: string)
```

Generates a condition block for `ssm:resourceTag/aws:ssmmessages:target-id`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.resourceTagAWSSsmmessagesTargetId.parameter.value"></a>

- *Type:* string

---

##### `resourceTagTagKey` <a name="resourceTagTagKey" id="@cdk_utils/iam.ssm.SSMConditions.resourceTagTagKey"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.resourceTagTagKey(value: string)
```

Generates a condition block for `ssm:resourceTag/tag-key`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.resourceTagTagKey.parameter.value"></a>

- *Type:* string

---

##### `sessionDocumentAccessCheck` <a name="sessionDocumentAccessCheck" id="@cdk_utils/iam.ssm.SSMConditions.sessionDocumentAccessCheck"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.sessionDocumentAccessCheck(value: boolean)
```

Generates a condition block for `ssm:SessionDocumentAccessCheck`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.sessionDocumentAccessCheck.parameter.value"></a>

- *Type:* boolean

---

##### `sourceInstanceARN` <a name="sourceInstanceARN" id="@cdk_utils/iam.ssm.SSMConditions.sourceInstanceARN"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.sourceInstanceARN(value: string)
```

Generates a condition block for `ssm:SourceInstanceARN`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.sourceInstanceARN.parameter.value"></a>

- *Type:* string

---

##### `syncType` <a name="syncType" id="@cdk_utils/iam.ssm.SSMConditions.syncType"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.syncType(value: string)
```

Generates a condition block for `ssm:SyncType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ssm.SSMConditions.syncType.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ssm.SSMConditions.tagKeys"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ssm.SSMConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ACCESS_REQUEST_ID">ACCESS_REQUEST_ID</a></code> | <code>string</code> | Condition key: ssm:AccessRequestId (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.actionGetAutomationExecutionConditionKeys">actionGetAutomationExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAutomationExecution action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.actionGetCloudConnectorConditionKeys">actionGetCloudConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCloudConnector action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.actionGetConnectionStatusConditionKeys">actionGetConnectionStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetConnectionStatus action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.actionGetDocumentConditionKeys">actionGetDocumentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDocument action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.actionGetParameterConditionKeys">actionGetParameterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetParameter action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.actionGetParameterHistoryConditionKeys">actionGetParameterHistoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetParameterHistory action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.actionGetParametersByPathConditionKeys">actionGetParametersByPathConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetParametersByPath action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.actionGetParametersConditionKeys">actionGetParametersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetParameters action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.AddTagsToResourceConditionKeys">AddTagsToResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTagsToResource action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.AUTO_APPROVE">AUTO_APPROVE</a></code> | <code>string</code> | Condition key: ssm:AutoApprove (Bool). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateActivationConditionKeys">CreateActivationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateActivation action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateAssociationBatchConditionKeys">CreateAssociationBatchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAssociationBatch action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateAssociationConditionKeys">CreateAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAssociation action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateCloudConnectorConditionKeys">CreateCloudConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCloudConnector action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateDocumentConditionKeys">CreateDocumentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDocument action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateMaintenanceWindowConditionKeys">CreateMaintenanceWindowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMaintenanceWindow action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateOpsItemConditionKeys">CreateOpsItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOpsItem action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateOpsMetadataConditionKeys">CreateOpsMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOpsMetadata action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreatePatchBaselineConditionKeys">CreatePatchBaselineConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePatchBaseline action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.CreateResourceDataSyncConditionKeys">CreateResourceDataSyncConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResourceDataSync action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DeleteAssociationConditionKeys">DeleteAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAssociation action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DeleteCloudConnectorConditionKeys">DeleteCloudConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCloudConnector action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DeleteDocumentConditionKeys">DeleteDocumentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDocument action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DeleteParameterConditionKeys">DeleteParameterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteParameter action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DeleteParametersConditionKeys">DeleteParametersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteParameters action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DeleteResourceDataSyncConditionKeys">DeleteResourceDataSyncConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourceDataSync action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DeregisterManagedInstanceConditionKeys">DeregisterManagedInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterManagedInstance action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeAssociationConditionKeys">DescribeAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAssociation action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeAssociationExecutionsConditionKeys">DescribeAssociationExecutionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAssociationExecutions action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeAssociationExecutionTargetsConditionKeys">DescribeAssociationExecutionTargetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeAssociationExecutionTargets action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeDocumentConditionKeys">DescribeDocumentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDocument action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeDocumentPermissionConditionKeys">DescribeDocumentPermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDocumentPermission action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeEffectiveInstanceAssociationsConditionKeys">DescribeEffectiveInstanceAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeEffectiveInstanceAssociations action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeInstanceAssociationsStatusConditionKeys">DescribeInstanceAssociationsStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeInstanceAssociationsStatus action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeInstancePatchesConditionKeys">DescribeInstancePatchesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeInstancePatches action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DescribeInstancePatchStatesConditionKeys">DescribeInstancePatchStatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeInstancePatchStates action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DOCUMENT_CATEGORIES">DOCUMENT_CATEGORIES</a></code> | <code>string</code> | Condition key: ssm:DocumentCategories (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DOCUMENT_TYPE">DOCUMENT_TYPE</a></code> | <code>string</code> | Condition key: ssm:DocumentType (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.DOCUMENT_VERSION">DOCUMENT_VERSION</a></code> | <code>string</code> | Condition key: ssm:DocumentVersion (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.INVENTORY_TYPE_NAME">INVENTORY_TYPE_NAME</a></code> | <code>string</code> | Condition key: ssm:InventoryTypeName (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.LabelParameterVersionConditionKeys">LabelParameterVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the LabelParameterVersion action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ListAssociationVersionsConditionKeys">ListAssociationVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAssociationVersions action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ListDocumentMetadataHistoryConditionKeys">ListDocumentMetadataHistoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDocumentMetadataHistory action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ListDocumentVersionsConditionKeys">ListDocumentVersionsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDocumentVersions action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ListInstanceAssociationsConditionKeys">ListInstanceAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListInstanceAssociations action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ListResourceDataSyncConditionKeys">ListResourceDataSyncConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceDataSync action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ModifyDocumentPermissionConditionKeys">ModifyDocumentPermissionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyDocumentPermission action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.NODE_ACCOUNT_ID">NODE_ACCOUNT_ID</a></code> | <code>string</code> | Condition key: ssm:NodeAccountId (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.NODE_ORG_ID">NODE_ORG_ID</a></code> | <code>string</code> | Condition key: ssm:NodeOrgId (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.OVERWRITE">OVERWRITE</a></code> | <code>string</code> | Condition key: ssm:Overwrite (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.POLICIES">POLICIES</a></code> | <code>string</code> | Condition key: ssm:Policies (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.PutComplianceItemsConditionKeys">PutComplianceItemsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutComplianceItems action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.PutInventoryConditionKeys">PutInventoryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutInventory action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.PutParameterConditionKeys">PutParameterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutParameter action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.RECURSIVE">RECURSIVE</a></code> | <code>string</code> | Condition key: ssm:Recursive (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.RegisterManagedInstanceConditionKeys">RegisterManagedInstanceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterManagedInstance action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.RemoveTagsFromResourceConditionKeys">RemoveTagsFromResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTagsFromResource action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.RequestManagedInstanceRoleTokenConditionKeys">RequestManagedInstanceRoleTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RequestManagedInstanceRoleToken action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: ssm:resourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID">RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID</a></code> | <code>string</code> | Condition key: ssm:resourceTag/aws:ssmmessages:session-id (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID">RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID</a></code> | <code>string</code> | Condition key: ssm:resourceTag/aws:ssmmessages:target-id (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.RESOURCE_TAG_TAG_KEY">RESOURCE_TAG_TAG_KEY</a></code> | <code>string</code> | Condition key: ssm:resourceTag/tag-key (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ResumeSessionConditionKeys">ResumeSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ResumeSession action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.SendAutomationSignalConditionKeys">SendAutomationSignalConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendAutomationSignal action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.SendCommandConditionKeys">SendCommandConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendCommand action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.SESSION_DOCUMENT_ACCESS_CHECK">SESSION_DOCUMENT_ACCESS_CHECK</a></code> | <code>string</code> | Condition key: ssm:SessionDocumentAccessCheck (Bool). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.SOURCE_INSTANCE_ARN">SOURCE_INSTANCE_ARN</a></code> | <code>string</code> | Condition key: ec2:SourceInstanceARN (ARN). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.StartAccessRequestConditionKeys">StartAccessRequestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAccessRequest action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.StartAssociationsOnceConditionKeys">StartAssociationsOnceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAssociationsOnce action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.StartAutomationExecutionConditionKeys">StartAutomationExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartAutomationExecution action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.StartChangeRequestExecutionConditionKeys">StartChangeRequestExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartChangeRequestExecution action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.StartSessionConditionKeys">StartSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSession action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.StopAutomationExecutionConditionKeys">StopAutomationExecutionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StopAutomationExecution action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.SYNC_TYPE">SYNC_TYPE</a></code> | <code>string</code> | Condition key: ssm:SyncType (String). |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.TerminateSessionConditionKeys">TerminateSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TerminateSession action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UnlabelParameterVersionConditionKeys">UnlabelParameterVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UnlabelParameterVersion action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateAssociationConditionKeys">UpdateAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAssociation action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateAssociationStatusConditionKeys">UpdateAssociationStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAssociationStatus action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateCloudConnectorConditionKeys">UpdateCloudConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCloudConnector action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateDocumentConditionKeys">UpdateDocumentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDocument action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateDocumentDefaultVersionConditionKeys">UpdateDocumentDefaultVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDocumentDefaultVersion action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateDocumentMetadataConditionKeys">UpdateDocumentMetadataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDocumentMetadata action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateInstanceAssociationStatusConditionKeys">UpdateInstanceAssociationStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInstanceAssociationStatus action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateInstanceInformationConditionKeys">UpdateInstanceInformationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInstanceInformation action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateManagedInstancePublicKeyConditionKeys">UpdateManagedInstancePublicKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateManagedInstancePublicKey action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateManagedInstanceRoleConditionKeys">UpdateManagedInstanceRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateManagedInstanceRole action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.UpdateResourceDataSyncConditionKeys">UpdateResourceDataSyncConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateResourceDataSync action. |
| <code><a href="#@cdk_utils/iam.ssm.SSMConditions.property.ValidateCloudConnectorConditionKeys">ValidateCloudConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ValidateCloudConnector action. |

---

##### `ACCESS_REQUEST_ID`<sup>Required</sup> <a name="ACCESS_REQUEST_ID" id="@cdk_utils/iam.ssm.SSMConditions.property.ACCESS_REQUEST_ID"></a>

```typescript
public readonly ACCESS_REQUEST_ID: string;
```

- *Type:* string

Condition key: ssm:AccessRequestId (String).

---

##### `actionGetAutomationExecutionConditionKeys`<sup>Required</sup> <a name="actionGetAutomationExecutionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.actionGetAutomationExecutionConditionKeys"></a>

```typescript
public readonly actionGetAutomationExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAutomationExecution action.

---

##### `actionGetCloudConnectorConditionKeys`<sup>Required</sup> <a name="actionGetCloudConnectorConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.actionGetCloudConnectorConditionKeys"></a>

```typescript
public readonly actionGetCloudConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCloudConnector action.

---

##### `actionGetConnectionStatusConditionKeys`<sup>Required</sup> <a name="actionGetConnectionStatusConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.actionGetConnectionStatusConditionKeys"></a>

```typescript
public readonly actionGetConnectionStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetConnectionStatus action.

---

##### `actionGetDocumentConditionKeys`<sup>Required</sup> <a name="actionGetDocumentConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.actionGetDocumentConditionKeys"></a>

```typescript
public readonly actionGetDocumentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDocument action.

---

##### `actionGetParameterConditionKeys`<sup>Required</sup> <a name="actionGetParameterConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.actionGetParameterConditionKeys"></a>

```typescript
public readonly actionGetParameterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetParameter action.

---

##### `actionGetParameterHistoryConditionKeys`<sup>Required</sup> <a name="actionGetParameterHistoryConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.actionGetParameterHistoryConditionKeys"></a>

```typescript
public readonly actionGetParameterHistoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetParameterHistory action.

---

##### `actionGetParametersByPathConditionKeys`<sup>Required</sup> <a name="actionGetParametersByPathConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.actionGetParametersByPathConditionKeys"></a>

```typescript
public readonly actionGetParametersByPathConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetParametersByPath action.

---

##### `actionGetParametersConditionKeys`<sup>Required</sup> <a name="actionGetParametersConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.actionGetParametersConditionKeys"></a>

```typescript
public readonly actionGetParametersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetParameters action.

---

##### `AddTagsToResourceConditionKeys`<sup>Required</sup> <a name="AddTagsToResourceConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.AddTagsToResourceConditionKeys"></a>

```typescript
public readonly AddTagsToResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTagsToResource action.

---

##### `AUTO_APPROVE`<sup>Required</sup> <a name="AUTO_APPROVE" id="@cdk_utils/iam.ssm.SSMConditions.property.AUTO_APPROVE"></a>

```typescript
public readonly AUTO_APPROVE: string;
```

- *Type:* string

Condition key: ssm:AutoApprove (Bool).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ssm.SSMConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ssm.SSMConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ssm.SSMConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateActivationConditionKeys`<sup>Required</sup> <a name="CreateActivationConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateActivationConditionKeys"></a>

```typescript
public readonly CreateActivationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateActivation action.

---

##### `CreateAssociationBatchConditionKeys`<sup>Required</sup> <a name="CreateAssociationBatchConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateAssociationBatchConditionKeys"></a>

```typescript
public readonly CreateAssociationBatchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAssociationBatch action.

---

##### `CreateAssociationConditionKeys`<sup>Required</sup> <a name="CreateAssociationConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateAssociationConditionKeys"></a>

```typescript
public readonly CreateAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAssociation action.

---

##### `CreateCloudConnectorConditionKeys`<sup>Required</sup> <a name="CreateCloudConnectorConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateCloudConnectorConditionKeys"></a>

```typescript
public readonly CreateCloudConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCloudConnector action.

---

##### `CreateDocumentConditionKeys`<sup>Required</sup> <a name="CreateDocumentConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateDocumentConditionKeys"></a>

```typescript
public readonly CreateDocumentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDocument action.

---

##### `CreateMaintenanceWindowConditionKeys`<sup>Required</sup> <a name="CreateMaintenanceWindowConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateMaintenanceWindowConditionKeys"></a>

```typescript
public readonly CreateMaintenanceWindowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMaintenanceWindow action.

---

##### `CreateOpsItemConditionKeys`<sup>Required</sup> <a name="CreateOpsItemConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateOpsItemConditionKeys"></a>

```typescript
public readonly CreateOpsItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOpsItem action.

---

##### `CreateOpsMetadataConditionKeys`<sup>Required</sup> <a name="CreateOpsMetadataConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateOpsMetadataConditionKeys"></a>

```typescript
public readonly CreateOpsMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOpsMetadata action.

---

##### `CreatePatchBaselineConditionKeys`<sup>Required</sup> <a name="CreatePatchBaselineConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreatePatchBaselineConditionKeys"></a>

```typescript
public readonly CreatePatchBaselineConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePatchBaseline action.

---

##### `CreateResourceDataSyncConditionKeys`<sup>Required</sup> <a name="CreateResourceDataSyncConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.CreateResourceDataSyncConditionKeys"></a>

```typescript
public readonly CreateResourceDataSyncConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResourceDataSync action.

---

##### `DeleteAssociationConditionKeys`<sup>Required</sup> <a name="DeleteAssociationConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DeleteAssociationConditionKeys"></a>

```typescript
public readonly DeleteAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAssociation action.

---

##### `DeleteCloudConnectorConditionKeys`<sup>Required</sup> <a name="DeleteCloudConnectorConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DeleteCloudConnectorConditionKeys"></a>

```typescript
public readonly DeleteCloudConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCloudConnector action.

---

##### `DeleteDocumentConditionKeys`<sup>Required</sup> <a name="DeleteDocumentConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DeleteDocumentConditionKeys"></a>

```typescript
public readonly DeleteDocumentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDocument action.

---

##### `DeleteParameterConditionKeys`<sup>Required</sup> <a name="DeleteParameterConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DeleteParameterConditionKeys"></a>

```typescript
public readonly DeleteParameterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteParameter action.

---

##### `DeleteParametersConditionKeys`<sup>Required</sup> <a name="DeleteParametersConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DeleteParametersConditionKeys"></a>

```typescript
public readonly DeleteParametersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteParameters action.

---

##### `DeleteResourceDataSyncConditionKeys`<sup>Required</sup> <a name="DeleteResourceDataSyncConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DeleteResourceDataSyncConditionKeys"></a>

```typescript
public readonly DeleteResourceDataSyncConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourceDataSync action.

---

##### `DeregisterManagedInstanceConditionKeys`<sup>Required</sup> <a name="DeregisterManagedInstanceConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DeregisterManagedInstanceConditionKeys"></a>

```typescript
public readonly DeregisterManagedInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterManagedInstance action.

---

##### `DescribeAssociationConditionKeys`<sup>Required</sup> <a name="DescribeAssociationConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeAssociationConditionKeys"></a>

```typescript
public readonly DescribeAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAssociation action.

---

##### `DescribeAssociationExecutionsConditionKeys`<sup>Required</sup> <a name="DescribeAssociationExecutionsConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeAssociationExecutionsConditionKeys"></a>

```typescript
public readonly DescribeAssociationExecutionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAssociationExecutions action.

---

##### `DescribeAssociationExecutionTargetsConditionKeys`<sup>Required</sup> <a name="DescribeAssociationExecutionTargetsConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeAssociationExecutionTargetsConditionKeys"></a>

```typescript
public readonly DescribeAssociationExecutionTargetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeAssociationExecutionTargets action.

---

##### `DescribeDocumentConditionKeys`<sup>Required</sup> <a name="DescribeDocumentConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeDocumentConditionKeys"></a>

```typescript
public readonly DescribeDocumentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDocument action.

---

##### `DescribeDocumentPermissionConditionKeys`<sup>Required</sup> <a name="DescribeDocumentPermissionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeDocumentPermissionConditionKeys"></a>

```typescript
public readonly DescribeDocumentPermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDocumentPermission action.

---

##### `DescribeEffectiveInstanceAssociationsConditionKeys`<sup>Required</sup> <a name="DescribeEffectiveInstanceAssociationsConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeEffectiveInstanceAssociationsConditionKeys"></a>

```typescript
public readonly DescribeEffectiveInstanceAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeEffectiveInstanceAssociations action.

---

##### `DescribeInstanceAssociationsStatusConditionKeys`<sup>Required</sup> <a name="DescribeInstanceAssociationsStatusConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeInstanceAssociationsStatusConditionKeys"></a>

```typescript
public readonly DescribeInstanceAssociationsStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeInstanceAssociationsStatus action.

---

##### `DescribeInstancePatchesConditionKeys`<sup>Required</sup> <a name="DescribeInstancePatchesConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeInstancePatchesConditionKeys"></a>

```typescript
public readonly DescribeInstancePatchesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeInstancePatches action.

---

##### `DescribeInstancePatchStatesConditionKeys`<sup>Required</sup> <a name="DescribeInstancePatchStatesConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.DescribeInstancePatchStatesConditionKeys"></a>

```typescript
public readonly DescribeInstancePatchStatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeInstancePatchStates action.

---

##### `DOCUMENT_CATEGORIES`<sup>Required</sup> <a name="DOCUMENT_CATEGORIES" id="@cdk_utils/iam.ssm.SSMConditions.property.DOCUMENT_CATEGORIES"></a>

```typescript
public readonly DOCUMENT_CATEGORIES: string;
```

- *Type:* string

Condition key: ssm:DocumentCategories (ArrayOfString).

---

##### `DOCUMENT_TYPE`<sup>Required</sup> <a name="DOCUMENT_TYPE" id="@cdk_utils/iam.ssm.SSMConditions.property.DOCUMENT_TYPE"></a>

```typescript
public readonly DOCUMENT_TYPE: string;
```

- *Type:* string

Condition key: ssm:DocumentType (String).

---

##### `DOCUMENT_VERSION`<sup>Required</sup> <a name="DOCUMENT_VERSION" id="@cdk_utils/iam.ssm.SSMConditions.property.DOCUMENT_VERSION"></a>

```typescript
public readonly DOCUMENT_VERSION: string;
```

- *Type:* string

Condition key: ssm:DocumentVersion (ArrayOfString).

---

##### `INVENTORY_TYPE_NAME`<sup>Required</sup> <a name="INVENTORY_TYPE_NAME" id="@cdk_utils/iam.ssm.SSMConditions.property.INVENTORY_TYPE_NAME"></a>

```typescript
public readonly INVENTORY_TYPE_NAME: string;
```

- *Type:* string

Condition key: ssm:InventoryTypeName (ArrayOfString).

---

##### `LabelParameterVersionConditionKeys`<sup>Required</sup> <a name="LabelParameterVersionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.LabelParameterVersionConditionKeys"></a>

```typescript
public readonly LabelParameterVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the LabelParameterVersion action.

---

##### `ListAssociationVersionsConditionKeys`<sup>Required</sup> <a name="ListAssociationVersionsConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ListAssociationVersionsConditionKeys"></a>

```typescript
public readonly ListAssociationVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAssociationVersions action.

---

##### `ListDocumentMetadataHistoryConditionKeys`<sup>Required</sup> <a name="ListDocumentMetadataHistoryConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ListDocumentMetadataHistoryConditionKeys"></a>

```typescript
public readonly ListDocumentMetadataHistoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDocumentMetadataHistory action.

---

##### `ListDocumentVersionsConditionKeys`<sup>Required</sup> <a name="ListDocumentVersionsConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ListDocumentVersionsConditionKeys"></a>

```typescript
public readonly ListDocumentVersionsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDocumentVersions action.

---

##### `ListInstanceAssociationsConditionKeys`<sup>Required</sup> <a name="ListInstanceAssociationsConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ListInstanceAssociationsConditionKeys"></a>

```typescript
public readonly ListInstanceAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListInstanceAssociations action.

---

##### `ListResourceDataSyncConditionKeys`<sup>Required</sup> <a name="ListResourceDataSyncConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ListResourceDataSyncConditionKeys"></a>

```typescript
public readonly ListResourceDataSyncConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceDataSync action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ModifyDocumentPermissionConditionKeys`<sup>Required</sup> <a name="ModifyDocumentPermissionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ModifyDocumentPermissionConditionKeys"></a>

```typescript
public readonly ModifyDocumentPermissionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyDocumentPermission action.

---

##### `NODE_ACCOUNT_ID`<sup>Required</sup> <a name="NODE_ACCOUNT_ID" id="@cdk_utils/iam.ssm.SSMConditions.property.NODE_ACCOUNT_ID"></a>

```typescript
public readonly NODE_ACCOUNT_ID: string;
```

- *Type:* string

Condition key: ssm:NodeAccountId (String).

---

##### `NODE_ORG_ID`<sup>Required</sup> <a name="NODE_ORG_ID" id="@cdk_utils/iam.ssm.SSMConditions.property.NODE_ORG_ID"></a>

```typescript
public readonly NODE_ORG_ID: string;
```

- *Type:* string

Condition key: ssm:NodeOrgId (String).

---

##### `OVERWRITE`<sup>Required</sup> <a name="OVERWRITE" id="@cdk_utils/iam.ssm.SSMConditions.property.OVERWRITE"></a>

```typescript
public readonly OVERWRITE: string;
```

- *Type:* string

Condition key: ssm:Overwrite (String).

---

##### `POLICIES`<sup>Required</sup> <a name="POLICIES" id="@cdk_utils/iam.ssm.SSMConditions.property.POLICIES"></a>

```typescript
public readonly POLICIES: string;
```

- *Type:* string

Condition key: ssm:Policies (String).

---

##### `PutComplianceItemsConditionKeys`<sup>Required</sup> <a name="PutComplianceItemsConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.PutComplianceItemsConditionKeys"></a>

```typescript
public readonly PutComplianceItemsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutComplianceItems action.

---

##### `PutInventoryConditionKeys`<sup>Required</sup> <a name="PutInventoryConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.PutInventoryConditionKeys"></a>

```typescript
public readonly PutInventoryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutInventory action.

---

##### `PutParameterConditionKeys`<sup>Required</sup> <a name="PutParameterConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.PutParameterConditionKeys"></a>

```typescript
public readonly PutParameterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutParameter action.

---

##### `RECURSIVE`<sup>Required</sup> <a name="RECURSIVE" id="@cdk_utils/iam.ssm.SSMConditions.property.RECURSIVE"></a>

```typescript
public readonly RECURSIVE: string;
```

- *Type:* string

Condition key: ssm:Recursive (String).

---

##### `RegisterManagedInstanceConditionKeys`<sup>Required</sup> <a name="RegisterManagedInstanceConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.RegisterManagedInstanceConditionKeys"></a>

```typescript
public readonly RegisterManagedInstanceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterManagedInstance action.

---

##### `RemoveTagsFromResourceConditionKeys`<sup>Required</sup> <a name="RemoveTagsFromResourceConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.RemoveTagsFromResourceConditionKeys"></a>

```typescript
public readonly RemoveTagsFromResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTagsFromResource action.

---

##### `RequestManagedInstanceRoleTokenConditionKeys`<sup>Required</sup> <a name="RequestManagedInstanceRoleTokenConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.RequestManagedInstanceRoleTokenConditionKeys"></a>

```typescript
public readonly RequestManagedInstanceRoleTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RequestManagedInstanceRoleToken action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.ssm.SSMConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: ssm:resourceTag/${TagKey} (String).

---

##### `RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID`<sup>Required</sup> <a name="RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID" id="@cdk_utils/iam.ssm.SSMConditions.property.RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID"></a>

```typescript
public readonly RESOURCE_TAG_AWS_SSMMESSAGES_SESSION_ID: string;
```

- *Type:* string

Condition key: ssm:resourceTag/aws:ssmmessages:session-id (String).

---

##### `RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID`<sup>Required</sup> <a name="RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID" id="@cdk_utils/iam.ssm.SSMConditions.property.RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID"></a>

```typescript
public readonly RESOURCE_TAG_AWS_SSMMESSAGES_TARGET_ID: string;
```

- *Type:* string

Condition key: ssm:resourceTag/aws:ssmmessages:target-id (String).

---

##### `RESOURCE_TAG_TAG_KEY`<sup>Required</sup> <a name="RESOURCE_TAG_TAG_KEY" id="@cdk_utils/iam.ssm.SSMConditions.property.RESOURCE_TAG_TAG_KEY"></a>

```typescript
public readonly RESOURCE_TAG_TAG_KEY: string;
```

- *Type:* string

Condition key: ssm:resourceTag/tag-key (String).

---

##### `ResumeSessionConditionKeys`<sup>Required</sup> <a name="ResumeSessionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ResumeSessionConditionKeys"></a>

```typescript
public readonly ResumeSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ResumeSession action.

---

##### `SendAutomationSignalConditionKeys`<sup>Required</sup> <a name="SendAutomationSignalConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.SendAutomationSignalConditionKeys"></a>

```typescript
public readonly SendAutomationSignalConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendAutomationSignal action.

---

##### `SendCommandConditionKeys`<sup>Required</sup> <a name="SendCommandConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.SendCommandConditionKeys"></a>

```typescript
public readonly SendCommandConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendCommand action.

---

##### `SESSION_DOCUMENT_ACCESS_CHECK`<sup>Required</sup> <a name="SESSION_DOCUMENT_ACCESS_CHECK" id="@cdk_utils/iam.ssm.SSMConditions.property.SESSION_DOCUMENT_ACCESS_CHECK"></a>

```typescript
public readonly SESSION_DOCUMENT_ACCESS_CHECK: string;
```

- *Type:* string

Condition key: ssm:SessionDocumentAccessCheck (Bool).

---

##### `SOURCE_INSTANCE_ARN`<sup>Required</sup> <a name="SOURCE_INSTANCE_ARN" id="@cdk_utils/iam.ssm.SSMConditions.property.SOURCE_INSTANCE_ARN"></a>

```typescript
public readonly SOURCE_INSTANCE_ARN: string;
```

- *Type:* string

Condition key: ec2:SourceInstanceARN (ARN).

---

##### `StartAccessRequestConditionKeys`<sup>Required</sup> <a name="StartAccessRequestConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.StartAccessRequestConditionKeys"></a>

```typescript
public readonly StartAccessRequestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAccessRequest action.

---

##### `StartAssociationsOnceConditionKeys`<sup>Required</sup> <a name="StartAssociationsOnceConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.StartAssociationsOnceConditionKeys"></a>

```typescript
public readonly StartAssociationsOnceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAssociationsOnce action.

---

##### `StartAutomationExecutionConditionKeys`<sup>Required</sup> <a name="StartAutomationExecutionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.StartAutomationExecutionConditionKeys"></a>

```typescript
public readonly StartAutomationExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartAutomationExecution action.

---

##### `StartChangeRequestExecutionConditionKeys`<sup>Required</sup> <a name="StartChangeRequestExecutionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.StartChangeRequestExecutionConditionKeys"></a>

```typescript
public readonly StartChangeRequestExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartChangeRequestExecution action.

---

##### `StartSessionConditionKeys`<sup>Required</sup> <a name="StartSessionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.StartSessionConditionKeys"></a>

```typescript
public readonly StartSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSession action.

---

##### `StopAutomationExecutionConditionKeys`<sup>Required</sup> <a name="StopAutomationExecutionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.StopAutomationExecutionConditionKeys"></a>

```typescript
public readonly StopAutomationExecutionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StopAutomationExecution action.

---

##### `SYNC_TYPE`<sup>Required</sup> <a name="SYNC_TYPE" id="@cdk_utils/iam.ssm.SSMConditions.property.SYNC_TYPE"></a>

```typescript
public readonly SYNC_TYPE: string;
```

- *Type:* string

Condition key: ssm:SyncType (String).

---

##### `TerminateSessionConditionKeys`<sup>Required</sup> <a name="TerminateSessionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.TerminateSessionConditionKeys"></a>

```typescript
public readonly TerminateSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TerminateSession action.

---

##### `UnlabelParameterVersionConditionKeys`<sup>Required</sup> <a name="UnlabelParameterVersionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UnlabelParameterVersionConditionKeys"></a>

```typescript
public readonly UnlabelParameterVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UnlabelParameterVersion action.

---

##### `UpdateAssociationConditionKeys`<sup>Required</sup> <a name="UpdateAssociationConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateAssociationConditionKeys"></a>

```typescript
public readonly UpdateAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAssociation action.

---

##### `UpdateAssociationStatusConditionKeys`<sup>Required</sup> <a name="UpdateAssociationStatusConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateAssociationStatusConditionKeys"></a>

```typescript
public readonly UpdateAssociationStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAssociationStatus action.

---

##### `UpdateCloudConnectorConditionKeys`<sup>Required</sup> <a name="UpdateCloudConnectorConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateCloudConnectorConditionKeys"></a>

```typescript
public readonly UpdateCloudConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCloudConnector action.

---

##### `UpdateDocumentConditionKeys`<sup>Required</sup> <a name="UpdateDocumentConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateDocumentConditionKeys"></a>

```typescript
public readonly UpdateDocumentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDocument action.

---

##### `UpdateDocumentDefaultVersionConditionKeys`<sup>Required</sup> <a name="UpdateDocumentDefaultVersionConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateDocumentDefaultVersionConditionKeys"></a>

```typescript
public readonly UpdateDocumentDefaultVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDocumentDefaultVersion action.

---

##### `UpdateDocumentMetadataConditionKeys`<sup>Required</sup> <a name="UpdateDocumentMetadataConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateDocumentMetadataConditionKeys"></a>

```typescript
public readonly UpdateDocumentMetadataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDocumentMetadata action.

---

##### `UpdateInstanceAssociationStatusConditionKeys`<sup>Required</sup> <a name="UpdateInstanceAssociationStatusConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateInstanceAssociationStatusConditionKeys"></a>

```typescript
public readonly UpdateInstanceAssociationStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInstanceAssociationStatus action.

---

##### `UpdateInstanceInformationConditionKeys`<sup>Required</sup> <a name="UpdateInstanceInformationConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateInstanceInformationConditionKeys"></a>

```typescript
public readonly UpdateInstanceInformationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInstanceInformation action.

---

##### `UpdateManagedInstancePublicKeyConditionKeys`<sup>Required</sup> <a name="UpdateManagedInstancePublicKeyConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateManagedInstancePublicKeyConditionKeys"></a>

```typescript
public readonly UpdateManagedInstancePublicKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateManagedInstancePublicKey action.

---

##### `UpdateManagedInstanceRoleConditionKeys`<sup>Required</sup> <a name="UpdateManagedInstanceRoleConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateManagedInstanceRoleConditionKeys"></a>

```typescript
public readonly UpdateManagedInstanceRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateManagedInstanceRole action.

---

##### `UpdateResourceDataSyncConditionKeys`<sup>Required</sup> <a name="UpdateResourceDataSyncConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.UpdateResourceDataSyncConditionKeys"></a>

```typescript
public readonly UpdateResourceDataSyncConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateResourceDataSync action.

---

##### `ValidateCloudConnectorConditionKeys`<sup>Required</sup> <a name="ValidateCloudConnectorConditionKeys" id="@cdk_utils/iam.ssm.SSMConditions.property.ValidateCloudConnectorConditionKeys"></a>

```typescript
public readonly ValidateCloudConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ValidateCloudConnector action.

---

### SSMOperations <a name="SSMOperations" id="@cdk_utils/iam.ssm.SSMOperations"></a>

API operation to required IAM actions mapping for ssm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm.SSMOperations.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

new ssm.SSMOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToResource API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.AssociateOpsItemRelatedItem">AssociateOpsItemRelatedItem</a></code> | <code>string[]</code> | IAM actions required for the AssociateOpsItemRelatedItem API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CancelCommand">CancelCommand</a></code> | <code>string[]</code> | IAM actions required for the CancelCommand API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CancelMaintenanceWindowExecution">CancelMaintenanceWindowExecution</a></code> | <code>string[]</code> | IAM actions required for the CancelMaintenanceWindowExecution API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateActivation">CreateActivation</a></code> | <code>string[]</code> | IAM actions required for the CreateActivation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateAssociation">CreateAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateAssociation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateAssociationBatch">CreateAssociationBatch</a></code> | <code>string[]</code> | IAM actions required for the CreateAssociationBatch API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateCloudConnector">CreateCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudConnector API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateDocument">CreateDocument</a></code> | <code>string[]</code> | IAM actions required for the CreateDocument API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateMaintenanceWindow">CreateMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the CreateMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateOpsItem">CreateOpsItem</a></code> | <code>string[]</code> | IAM actions required for the CreateOpsItem API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateOpsMetadata">CreateOpsMetadata</a></code> | <code>string[]</code> | IAM actions required for the CreateOpsMetadata API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreatePatchBaseline">CreatePatchBaseline</a></code> | <code>string[]</code> | IAM actions required for the CreatePatchBaseline API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.CreateResourceDataSync">CreateResourceDataSync</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceDataSync API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteActivation">DeleteActivation</a></code> | <code>string[]</code> | IAM actions required for the DeleteActivation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteAssociation">DeleteAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteAssociation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteCloudConnector">DeleteCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteCloudConnector API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteDocument">DeleteDocument</a></code> | <code>string[]</code> | IAM actions required for the DeleteDocument API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteInventory">DeleteInventory</a></code> | <code>string[]</code> | IAM actions required for the DeleteInventory API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteMaintenanceWindow">DeleteMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the DeleteMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteOpsItem">DeleteOpsItem</a></code> | <code>string[]</code> | IAM actions required for the DeleteOpsItem API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteOpsMetadata">DeleteOpsMetadata</a></code> | <code>string[]</code> | IAM actions required for the DeleteOpsMetadata API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteParameter">DeleteParameter</a></code> | <code>string[]</code> | IAM actions required for the DeleteParameter API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteParameters">DeleteParameters</a></code> | <code>string[]</code> | IAM actions required for the DeleteParameters API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeletePatchBaseline">DeletePatchBaseline</a></code> | <code>string[]</code> | IAM actions required for the DeletePatchBaseline API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteResourceDataSync">DeleteResourceDataSync</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceDataSync API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeregisterManagedInstance">DeregisterManagedInstance</a></code> | <code>string[]</code> | IAM actions required for the DeregisterManagedInstance API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeregisterPatchBaselineForPatchGroup">DeregisterPatchBaselineForPatchGroup</a></code> | <code>string[]</code> | IAM actions required for the DeregisterPatchBaselineForPatchGroup API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeregisterTargetFromMaintenanceWindow">DeregisterTargetFromMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the DeregisterTargetFromMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DeregisterTaskFromMaintenanceWindow">DeregisterTaskFromMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the DeregisterTaskFromMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeActivations">DescribeActivations</a></code> | <code>string[]</code> | IAM actions required for the DescribeActivations API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeAssociation">DescribeAssociation</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssociation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeAssociationExecutions">DescribeAssociationExecutions</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssociationExecutions API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeAssociationExecutionTargets">DescribeAssociationExecutionTargets</a></code> | <code>string[]</code> | IAM actions required for the DescribeAssociationExecutionTargets API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeAutomationExecutions">DescribeAutomationExecutions</a></code> | <code>string[]</code> | IAM actions required for the DescribeAutomationExecutions API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeAutomationStepExecutions">DescribeAutomationStepExecutions</a></code> | <code>string[]</code> | IAM actions required for the DescribeAutomationStepExecutions API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeAvailablePatches">DescribeAvailablePatches</a></code> | <code>string[]</code> | IAM actions required for the DescribeAvailablePatches API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeDocument">DescribeDocument</a></code> | <code>string[]</code> | IAM actions required for the DescribeDocument API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeDocumentPermission">DescribeDocumentPermission</a></code> | <code>string[]</code> | IAM actions required for the DescribeDocumentPermission API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeEffectiveInstanceAssociations">DescribeEffectiveInstanceAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeEffectiveInstanceAssociations API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeEffectivePatchesForPatchBaseline">DescribeEffectivePatchesForPatchBaseline</a></code> | <code>string[]</code> | IAM actions required for the DescribeEffectivePatchesForPatchBaseline API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstanceAssociationsStatus">DescribeInstanceAssociationsStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceAssociationsStatus API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstanceInformation">DescribeInstanceInformation</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceInformation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstancePatches">DescribeInstancePatches</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstancePatches API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstancePatchStates">DescribeInstancePatchStates</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstancePatchStates API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstancePatchStatesForPatchGroup">DescribeInstancePatchStatesForPatchGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstancePatchStatesForPatchGroup API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstanceProperties">DescribeInstanceProperties</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceProperties API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeInventoryDeletions">DescribeInventoryDeletions</a></code> | <code>string[]</code> | IAM actions required for the DescribeInventoryDeletions API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowExecutions">DescribeMaintenanceWindowExecutions</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceWindowExecutions API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowExecutionTaskInvocations">DescribeMaintenanceWindowExecutionTaskInvocations</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceWindowExecutionTaskInvocations API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowExecutionTasks">DescribeMaintenanceWindowExecutionTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceWindowExecutionTasks API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindows">DescribeMaintenanceWindows</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceWindows API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowSchedule">DescribeMaintenanceWindowSchedule</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceWindowSchedule API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowsForTarget">DescribeMaintenanceWindowsForTarget</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceWindowsForTarget API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowTargets">DescribeMaintenanceWindowTargets</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceWindowTargets API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowTasks">DescribeMaintenanceWindowTasks</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceWindowTasks API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeOpsItems">DescribeOpsItems</a></code> | <code>string[]</code> | IAM actions required for the DescribeOpsItems API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeParameters">DescribeParameters</a></code> | <code>string[]</code> | IAM actions required for the DescribeParameters API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribePatchBaselines">DescribePatchBaselines</a></code> | <code>string[]</code> | IAM actions required for the DescribePatchBaselines API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribePatchGroups">DescribePatchGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribePatchGroups API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribePatchGroupState">DescribePatchGroupState</a></code> | <code>string[]</code> | IAM actions required for the DescribePatchGroupState API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribePatchProperties">DescribePatchProperties</a></code> | <code>string[]</code> | IAM actions required for the DescribePatchProperties API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DescribeSessions">DescribeSessions</a></code> | <code>string[]</code> | IAM actions required for the DescribeSessions API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.DisassociateOpsItemRelatedItem">DisassociateOpsItemRelatedItem</a></code> | <code>string[]</code> | IAM actions required for the DisassociateOpsItemRelatedItem API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.LabelParameterVersion">LabelParameterVersion</a></code> | <code>string[]</code> | IAM actions required for the LabelParameterVersion API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListAssociations">ListAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListAssociations API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListAssociationVersions">ListAssociationVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAssociationVersions API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListCloudConnectors">ListCloudConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListCloudConnectors API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListCommandInvocations">ListCommandInvocations</a></code> | <code>string[]</code> | IAM actions required for the ListCommandInvocations API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListCommands">ListCommands</a></code> | <code>string[]</code> | IAM actions required for the ListCommands API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListComplianceItems">ListComplianceItems</a></code> | <code>string[]</code> | IAM actions required for the ListComplianceItems API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListComplianceSummaries">ListComplianceSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListComplianceSummaries API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListDocumentMetadataHistory">ListDocumentMetadataHistory</a></code> | <code>string[]</code> | IAM actions required for the ListDocumentMetadataHistory API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListDocuments">ListDocuments</a></code> | <code>string[]</code> | IAM actions required for the ListDocuments API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListDocumentVersions">ListDocumentVersions</a></code> | <code>string[]</code> | IAM actions required for the ListDocumentVersions API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListInventoryEntries">ListInventoryEntries</a></code> | <code>string[]</code> | IAM actions required for the ListInventoryEntries API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListNodes">ListNodes</a></code> | <code>string[]</code> | IAM actions required for the ListNodes API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListNodesSummary">ListNodesSummary</a></code> | <code>string[]</code> | IAM actions required for the ListNodesSummary API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListOpsItemEvents">ListOpsItemEvents</a></code> | <code>string[]</code> | IAM actions required for the ListOpsItemEvents API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListOpsItemRelatedItems">ListOpsItemRelatedItems</a></code> | <code>string[]</code> | IAM actions required for the ListOpsItemRelatedItems API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListOpsMetadata">ListOpsMetadata</a></code> | <code>string[]</code> | IAM actions required for the ListOpsMetadata API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListResourceComplianceSummaries">ListResourceComplianceSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListResourceComplianceSummaries API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListResourceDataSync">ListResourceDataSync</a></code> | <code>string[]</code> | IAM actions required for the ListResourceDataSync API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ModifyDocumentPermission">ModifyDocumentPermission</a></code> | <code>string[]</code> | IAM actions required for the ModifyDocumentPermission API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetAccessToken">opGetAccessToken</a></code> | <code>string[]</code> | IAM actions required for the GetAccessToken API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetAutomationExecution">opGetAutomationExecution</a></code> | <code>string[]</code> | IAM actions required for the GetAutomationExecution API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetCalendarState">opGetCalendarState</a></code> | <code>string[]</code> | IAM actions required for the GetCalendarState API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetCloudConnector">opGetCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the GetCloudConnector API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetCommandInvocation">opGetCommandInvocation</a></code> | <code>string[]</code> | IAM actions required for the GetCommandInvocation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetConnectionStatus">opGetConnectionStatus</a></code> | <code>string[]</code> | IAM actions required for the GetConnectionStatus API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetDefaultPatchBaseline">opGetDefaultPatchBaseline</a></code> | <code>string[]</code> | IAM actions required for the GetDefaultPatchBaseline API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetDeployablePatchSnapshotForInstance">opGetDeployablePatchSnapshotForInstance</a></code> | <code>string[]</code> | IAM actions required for the GetDeployablePatchSnapshotForInstance API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetDocument">opGetDocument</a></code> | <code>string[]</code> | IAM actions required for the GetDocument API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetExecutionPreview">opGetExecutionPreview</a></code> | <code>string[]</code> | IAM actions required for the GetExecutionPreview API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetInventory">opGetInventory</a></code> | <code>string[]</code> | IAM actions required for the GetInventory API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetInventorySchema">opGetInventorySchema</a></code> | <code>string[]</code> | IAM actions required for the GetInventorySchema API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindow">opGetMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the GetMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindowExecution">opGetMaintenanceWindowExecution</a></code> | <code>string[]</code> | IAM actions required for the GetMaintenanceWindowExecution API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindowExecutionTask">opGetMaintenanceWindowExecutionTask</a></code> | <code>string[]</code> | IAM actions required for the GetMaintenanceWindowExecutionTask API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindowExecutionTaskInvocation">opGetMaintenanceWindowExecutionTaskInvocation</a></code> | <code>string[]</code> | IAM actions required for the GetMaintenanceWindowExecutionTaskInvocation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindowTask">opGetMaintenanceWindowTask</a></code> | <code>string[]</code> | IAM actions required for the GetMaintenanceWindowTask API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetOpsItem">opGetOpsItem</a></code> | <code>string[]</code> | IAM actions required for the GetOpsItem API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetOpsMetadata">opGetOpsMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetOpsMetadata API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetOpsSummary">opGetOpsSummary</a></code> | <code>string[]</code> | IAM actions required for the GetOpsSummary API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetParameter">opGetParameter</a></code> | <code>string[]</code> | IAM actions required for the GetParameter API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetParameterHistory">opGetParameterHistory</a></code> | <code>string[]</code> | IAM actions required for the GetParameterHistory API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetParameters">opGetParameters</a></code> | <code>string[]</code> | IAM actions required for the GetParameters API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetParametersByPath">opGetParametersByPath</a></code> | <code>string[]</code> | IAM actions required for the GetParametersByPath API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetPatchBaseline">opGetPatchBaseline</a></code> | <code>string[]</code> | IAM actions required for the GetPatchBaseline API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetPatchBaselineForPatchGroup">opGetPatchBaselineForPatchGroup</a></code> | <code>string[]</code> | IAM actions required for the GetPatchBaselineForPatchGroup API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetResourcePolicies">opGetResourcePolicies</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicies API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.opGetServiceSetting">opGetServiceSetting</a></code> | <code>string[]</code> | IAM actions required for the GetServiceSetting API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.PutComplianceItems">PutComplianceItems</a></code> | <code>string[]</code> | IAM actions required for the PutComplianceItems API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.PutInventory">PutInventory</a></code> | <code>string[]</code> | IAM actions required for the PutInventory API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.PutParameter">PutParameter</a></code> | <code>string[]</code> | IAM actions required for the PutParameter API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.RegisterDefaultPatchBaseline">RegisterDefaultPatchBaseline</a></code> | <code>string[]</code> | IAM actions required for the RegisterDefaultPatchBaseline API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.RegisterPatchBaselineForPatchGroup">RegisterPatchBaselineForPatchGroup</a></code> | <code>string[]</code> | IAM actions required for the RegisterPatchBaselineForPatchGroup API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.RegisterTargetWithMaintenanceWindow">RegisterTargetWithMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the RegisterTargetWithMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.RegisterTaskWithMaintenanceWindow">RegisterTaskWithMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the RegisterTaskWithMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromResource API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ResetServiceSetting">ResetServiceSetting</a></code> | <code>string[]</code> | IAM actions required for the ResetServiceSetting API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ResumeSession">ResumeSession</a></code> | <code>string[]</code> | IAM actions required for the ResumeSession API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.SendAutomationSignal">SendAutomationSignal</a></code> | <code>string[]</code> | IAM actions required for the SendAutomationSignal API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.SendCommand">SendCommand</a></code> | <code>string[]</code> | IAM actions required for the SendCommand API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.StartAccessRequest">StartAccessRequest</a></code> | <code>string[]</code> | IAM actions required for the StartAccessRequest API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.StartAssociationsOnce">StartAssociationsOnce</a></code> | <code>string[]</code> | IAM actions required for the StartAssociationsOnce API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.StartAutomationExecution">StartAutomationExecution</a></code> | <code>string[]</code> | IAM actions required for the StartAutomationExecution API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.StartChangeRequestExecution">StartChangeRequestExecution</a></code> | <code>string[]</code> | IAM actions required for the StartChangeRequestExecution API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.StartExecutionPreview">StartExecutionPreview</a></code> | <code>string[]</code> | IAM actions required for the StartExecutionPreview API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.StartSession">StartSession</a></code> | <code>string[]</code> | IAM actions required for the StartSession API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.StopAutomationExecution">StopAutomationExecution</a></code> | <code>string[]</code> | IAM actions required for the StopAutomationExecution API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.TerminateSession">TerminateSession</a></code> | <code>string[]</code> | IAM actions required for the TerminateSession API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UnlabelParameterVersion">UnlabelParameterVersion</a></code> | <code>string[]</code> | IAM actions required for the UnlabelParameterVersion API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateAssociation">UpdateAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssociation API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateAssociationStatus">UpdateAssociationStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateAssociationStatus API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateCloudConnector">UpdateCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateCloudConnector API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateDocument">UpdateDocument</a></code> | <code>string[]</code> | IAM actions required for the UpdateDocument API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateDocumentDefaultVersion">UpdateDocumentDefaultVersion</a></code> | <code>string[]</code> | IAM actions required for the UpdateDocumentDefaultVersion API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateDocumentMetadata">UpdateDocumentMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateDocumentMetadata API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateMaintenanceWindow">UpdateMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the UpdateMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateMaintenanceWindowTarget">UpdateMaintenanceWindowTarget</a></code> | <code>string[]</code> | IAM actions required for the UpdateMaintenanceWindowTarget API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateMaintenanceWindowTask">UpdateMaintenanceWindowTask</a></code> | <code>string[]</code> | IAM actions required for the UpdateMaintenanceWindowTask API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateManagedInstanceRole">UpdateManagedInstanceRole</a></code> | <code>string[]</code> | IAM actions required for the UpdateManagedInstanceRole API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateOpsItem">UpdateOpsItem</a></code> | <code>string[]</code> | IAM actions required for the UpdateOpsItem API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateOpsMetadata">UpdateOpsMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateOpsMetadata API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdatePatchBaseline">UpdatePatchBaseline</a></code> | <code>string[]</code> | IAM actions required for the UpdatePatchBaseline API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateResourceDataSync">UpdateResourceDataSync</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceDataSync API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.UpdateServiceSetting">UpdateServiceSetting</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceSetting API call. |
| <code><a href="#@cdk_utils/iam.ssm.SSMOperations.property.ValidateCloudConnector">ValidateCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the ValidateCloudConnector API call. |

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.ssm.SSMOperations.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToResource API call.

---

##### `AssociateOpsItemRelatedItem`<sup>Required</sup> <a name="AssociateOpsItemRelatedItem" id="@cdk_utils/iam.ssm.SSMOperations.property.AssociateOpsItemRelatedItem"></a>

```typescript
public readonly AssociateOpsItemRelatedItem: string[];
```

- *Type:* string[]

IAM actions required for the AssociateOpsItemRelatedItem API call.

---

##### `CancelCommand`<sup>Required</sup> <a name="CancelCommand" id="@cdk_utils/iam.ssm.SSMOperations.property.CancelCommand"></a>

```typescript
public readonly CancelCommand: string[];
```

- *Type:* string[]

IAM actions required for the CancelCommand API call.

---

##### `CancelMaintenanceWindowExecution`<sup>Required</sup> <a name="CancelMaintenanceWindowExecution" id="@cdk_utils/iam.ssm.SSMOperations.property.CancelMaintenanceWindowExecution"></a>

```typescript
public readonly CancelMaintenanceWindowExecution: string[];
```

- *Type:* string[]

IAM actions required for the CancelMaintenanceWindowExecution API call.

---

##### `CreateActivation`<sup>Required</sup> <a name="CreateActivation" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateActivation"></a>

```typescript
public readonly CreateActivation: string[];
```

- *Type:* string[]

IAM actions required for the CreateActivation API call.

---

##### `CreateAssociation`<sup>Required</sup> <a name="CreateAssociation" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateAssociation"></a>

```typescript
public readonly CreateAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssociation API call.

---

##### `CreateAssociationBatch`<sup>Required</sup> <a name="CreateAssociationBatch" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateAssociationBatch"></a>

```typescript
public readonly CreateAssociationBatch: string[];
```

- *Type:* string[]

IAM actions required for the CreateAssociationBatch API call.

---

##### `CreateCloudConnector`<sup>Required</sup> <a name="CreateCloudConnector" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateCloudConnector"></a>

```typescript
public readonly CreateCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudConnector API call.

---

##### `CreateDocument`<sup>Required</sup> <a name="CreateDocument" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateDocument"></a>

```typescript
public readonly CreateDocument: string[];
```

- *Type:* string[]

IAM actions required for the CreateDocument API call.

---

##### `CreateMaintenanceWindow`<sup>Required</sup> <a name="CreateMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateMaintenanceWindow"></a>

```typescript
public readonly CreateMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the CreateMaintenanceWindow API call.

---

##### `CreateOpsItem`<sup>Required</sup> <a name="CreateOpsItem" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateOpsItem"></a>

```typescript
public readonly CreateOpsItem: string[];
```

- *Type:* string[]

IAM actions required for the CreateOpsItem API call.

---

##### `CreateOpsMetadata`<sup>Required</sup> <a name="CreateOpsMetadata" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateOpsMetadata"></a>

```typescript
public readonly CreateOpsMetadata: string[];
```

- *Type:* string[]

IAM actions required for the CreateOpsMetadata API call.

---

##### `CreatePatchBaseline`<sup>Required</sup> <a name="CreatePatchBaseline" id="@cdk_utils/iam.ssm.SSMOperations.property.CreatePatchBaseline"></a>

```typescript
public readonly CreatePatchBaseline: string[];
```

- *Type:* string[]

IAM actions required for the CreatePatchBaseline API call.

---

##### `CreateResourceDataSync`<sup>Required</sup> <a name="CreateResourceDataSync" id="@cdk_utils/iam.ssm.SSMOperations.property.CreateResourceDataSync"></a>

```typescript
public readonly CreateResourceDataSync: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceDataSync API call.

---

##### `DeleteActivation`<sup>Required</sup> <a name="DeleteActivation" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteActivation"></a>

```typescript
public readonly DeleteActivation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteActivation API call.

---

##### `DeleteAssociation`<sup>Required</sup> <a name="DeleteAssociation" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteAssociation"></a>

```typescript
public readonly DeleteAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAssociation API call.

---

##### `DeleteCloudConnector`<sup>Required</sup> <a name="DeleteCloudConnector" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteCloudConnector"></a>

```typescript
public readonly DeleteCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCloudConnector API call.

---

##### `DeleteDocument`<sup>Required</sup> <a name="DeleteDocument" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteDocument"></a>

```typescript
public readonly DeleteDocument: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDocument API call.

---

##### `DeleteInventory`<sup>Required</sup> <a name="DeleteInventory" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteInventory"></a>

```typescript
public readonly DeleteInventory: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInventory API call.

---

##### `DeleteMaintenanceWindow`<sup>Required</sup> <a name="DeleteMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteMaintenanceWindow"></a>

```typescript
public readonly DeleteMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMaintenanceWindow API call.

---

##### `DeleteOpsItem`<sup>Required</sup> <a name="DeleteOpsItem" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteOpsItem"></a>

```typescript
public readonly DeleteOpsItem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOpsItem API call.

---

##### `DeleteOpsMetadata`<sup>Required</sup> <a name="DeleteOpsMetadata" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteOpsMetadata"></a>

```typescript
public readonly DeleteOpsMetadata: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOpsMetadata API call.

---

##### `DeleteParameter`<sup>Required</sup> <a name="DeleteParameter" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteParameter"></a>

```typescript
public readonly DeleteParameter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteParameter API call.

---

##### `DeleteParameters`<sup>Required</sup> <a name="DeleteParameters" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteParameters"></a>

```typescript
public readonly DeleteParameters: string[];
```

- *Type:* string[]

IAM actions required for the DeleteParameters API call.

---

##### `DeletePatchBaseline`<sup>Required</sup> <a name="DeletePatchBaseline" id="@cdk_utils/iam.ssm.SSMOperations.property.DeletePatchBaseline"></a>

```typescript
public readonly DeletePatchBaseline: string[];
```

- *Type:* string[]

IAM actions required for the DeletePatchBaseline API call.

---

##### `DeleteResourceDataSync`<sup>Required</sup> <a name="DeleteResourceDataSync" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteResourceDataSync"></a>

```typescript
public readonly DeleteResourceDataSync: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceDataSync API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.ssm.SSMOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeregisterManagedInstance`<sup>Required</sup> <a name="DeregisterManagedInstance" id="@cdk_utils/iam.ssm.SSMOperations.property.DeregisterManagedInstance"></a>

```typescript
public readonly DeregisterManagedInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterManagedInstance API call.

---

##### `DeregisterPatchBaselineForPatchGroup`<sup>Required</sup> <a name="DeregisterPatchBaselineForPatchGroup" id="@cdk_utils/iam.ssm.SSMOperations.property.DeregisterPatchBaselineForPatchGroup"></a>

```typescript
public readonly DeregisterPatchBaselineForPatchGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterPatchBaselineForPatchGroup API call.

---

##### `DeregisterTargetFromMaintenanceWindow`<sup>Required</sup> <a name="DeregisterTargetFromMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMOperations.property.DeregisterTargetFromMaintenanceWindow"></a>

```typescript
public readonly DeregisterTargetFromMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterTargetFromMaintenanceWindow API call.

---

##### `DeregisterTaskFromMaintenanceWindow`<sup>Required</sup> <a name="DeregisterTaskFromMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMOperations.property.DeregisterTaskFromMaintenanceWindow"></a>

```typescript
public readonly DeregisterTaskFromMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterTaskFromMaintenanceWindow API call.

---

##### `DescribeActivations`<sup>Required</sup> <a name="DescribeActivations" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeActivations"></a>

```typescript
public readonly DescribeActivations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeActivations API call.

---

##### `DescribeAssociation`<sup>Required</sup> <a name="DescribeAssociation" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeAssociation"></a>

```typescript
public readonly DescribeAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssociation API call.

---

##### `DescribeAssociationExecutions`<sup>Required</sup> <a name="DescribeAssociationExecutions" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeAssociationExecutions"></a>

```typescript
public readonly DescribeAssociationExecutions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssociationExecutions API call.

---

##### `DescribeAssociationExecutionTargets`<sup>Required</sup> <a name="DescribeAssociationExecutionTargets" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeAssociationExecutionTargets"></a>

```typescript
public readonly DescribeAssociationExecutionTargets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAssociationExecutionTargets API call.

---

##### `DescribeAutomationExecutions`<sup>Required</sup> <a name="DescribeAutomationExecutions" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeAutomationExecutions"></a>

```typescript
public readonly DescribeAutomationExecutions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAutomationExecutions API call.

---

##### `DescribeAutomationStepExecutions`<sup>Required</sup> <a name="DescribeAutomationStepExecutions" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeAutomationStepExecutions"></a>

```typescript
public readonly DescribeAutomationStepExecutions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAutomationStepExecutions API call.

---

##### `DescribeAvailablePatches`<sup>Required</sup> <a name="DescribeAvailablePatches" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeAvailablePatches"></a>

```typescript
public readonly DescribeAvailablePatches: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAvailablePatches API call.

---

##### `DescribeDocument`<sup>Required</sup> <a name="DescribeDocument" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeDocument"></a>

```typescript
public readonly DescribeDocument: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDocument API call.

---

##### `DescribeDocumentPermission`<sup>Required</sup> <a name="DescribeDocumentPermission" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeDocumentPermission"></a>

```typescript
public readonly DescribeDocumentPermission: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDocumentPermission API call.

---

##### `DescribeEffectiveInstanceAssociations`<sup>Required</sup> <a name="DescribeEffectiveInstanceAssociations" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeEffectiveInstanceAssociations"></a>

```typescript
public readonly DescribeEffectiveInstanceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEffectiveInstanceAssociations API call.

---

##### `DescribeEffectivePatchesForPatchBaseline`<sup>Required</sup> <a name="DescribeEffectivePatchesForPatchBaseline" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeEffectivePatchesForPatchBaseline"></a>

```typescript
public readonly DescribeEffectivePatchesForPatchBaseline: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEffectivePatchesForPatchBaseline API call.

---

##### `DescribeInstanceAssociationsStatus`<sup>Required</sup> <a name="DescribeInstanceAssociationsStatus" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstanceAssociationsStatus"></a>

```typescript
public readonly DescribeInstanceAssociationsStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceAssociationsStatus API call.

---

##### `DescribeInstanceInformation`<sup>Required</sup> <a name="DescribeInstanceInformation" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstanceInformation"></a>

```typescript
public readonly DescribeInstanceInformation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceInformation API call.

---

##### `DescribeInstancePatches`<sup>Required</sup> <a name="DescribeInstancePatches" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstancePatches"></a>

```typescript
public readonly DescribeInstancePatches: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstancePatches API call.

---

##### `DescribeInstancePatchStates`<sup>Required</sup> <a name="DescribeInstancePatchStates" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstancePatchStates"></a>

```typescript
public readonly DescribeInstancePatchStates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstancePatchStates API call.

---

##### `DescribeInstancePatchStatesForPatchGroup`<sup>Required</sup> <a name="DescribeInstancePatchStatesForPatchGroup" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstancePatchStatesForPatchGroup"></a>

```typescript
public readonly DescribeInstancePatchStatesForPatchGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstancePatchStatesForPatchGroup API call.

---

##### `DescribeInstanceProperties`<sup>Required</sup> <a name="DescribeInstanceProperties" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeInstanceProperties"></a>

```typescript
public readonly DescribeInstanceProperties: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceProperties API call.

---

##### `DescribeInventoryDeletions`<sup>Required</sup> <a name="DescribeInventoryDeletions" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeInventoryDeletions"></a>

```typescript
public readonly DescribeInventoryDeletions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInventoryDeletions API call.

---

##### `DescribeMaintenanceWindowExecutions`<sup>Required</sup> <a name="DescribeMaintenanceWindowExecutions" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowExecutions"></a>

```typescript
public readonly DescribeMaintenanceWindowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceWindowExecutions API call.

---

##### `DescribeMaintenanceWindowExecutionTaskInvocations`<sup>Required</sup> <a name="DescribeMaintenanceWindowExecutionTaskInvocations" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowExecutionTaskInvocations"></a>

```typescript
public readonly DescribeMaintenanceWindowExecutionTaskInvocations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceWindowExecutionTaskInvocations API call.

---

##### `DescribeMaintenanceWindowExecutionTasks`<sup>Required</sup> <a name="DescribeMaintenanceWindowExecutionTasks" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowExecutionTasks"></a>

```typescript
public readonly DescribeMaintenanceWindowExecutionTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceWindowExecutionTasks API call.

---

##### `DescribeMaintenanceWindows`<sup>Required</sup> <a name="DescribeMaintenanceWindows" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindows"></a>

```typescript
public readonly DescribeMaintenanceWindows: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceWindows API call.

---

##### `DescribeMaintenanceWindowSchedule`<sup>Required</sup> <a name="DescribeMaintenanceWindowSchedule" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowSchedule"></a>

```typescript
public readonly DescribeMaintenanceWindowSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceWindowSchedule API call.

---

##### `DescribeMaintenanceWindowsForTarget`<sup>Required</sup> <a name="DescribeMaintenanceWindowsForTarget" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowsForTarget"></a>

```typescript
public readonly DescribeMaintenanceWindowsForTarget: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceWindowsForTarget API call.

---

##### `DescribeMaintenanceWindowTargets`<sup>Required</sup> <a name="DescribeMaintenanceWindowTargets" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowTargets"></a>

```typescript
public readonly DescribeMaintenanceWindowTargets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceWindowTargets API call.

---

##### `DescribeMaintenanceWindowTasks`<sup>Required</sup> <a name="DescribeMaintenanceWindowTasks" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeMaintenanceWindowTasks"></a>

```typescript
public readonly DescribeMaintenanceWindowTasks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceWindowTasks API call.

---

##### `DescribeOpsItems`<sup>Required</sup> <a name="DescribeOpsItems" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeOpsItems"></a>

```typescript
public readonly DescribeOpsItems: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOpsItems API call.

---

##### `DescribeParameters`<sup>Required</sup> <a name="DescribeParameters" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeParameters"></a>

```typescript
public readonly DescribeParameters: string[];
```

- *Type:* string[]

IAM actions required for the DescribeParameters API call.

---

##### `DescribePatchBaselines`<sup>Required</sup> <a name="DescribePatchBaselines" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribePatchBaselines"></a>

```typescript
public readonly DescribePatchBaselines: string[];
```

- *Type:* string[]

IAM actions required for the DescribePatchBaselines API call.

---

##### `DescribePatchGroups`<sup>Required</sup> <a name="DescribePatchGroups" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribePatchGroups"></a>

```typescript
public readonly DescribePatchGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribePatchGroups API call.

---

##### `DescribePatchGroupState`<sup>Required</sup> <a name="DescribePatchGroupState" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribePatchGroupState"></a>

```typescript
public readonly DescribePatchGroupState: string[];
```

- *Type:* string[]

IAM actions required for the DescribePatchGroupState API call.

---

##### `DescribePatchProperties`<sup>Required</sup> <a name="DescribePatchProperties" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribePatchProperties"></a>

```typescript
public readonly DescribePatchProperties: string[];
```

- *Type:* string[]

IAM actions required for the DescribePatchProperties API call.

---

##### `DescribeSessions`<sup>Required</sup> <a name="DescribeSessions" id="@cdk_utils/iam.ssm.SSMOperations.property.DescribeSessions"></a>

```typescript
public readonly DescribeSessions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSessions API call.

---

##### `DisassociateOpsItemRelatedItem`<sup>Required</sup> <a name="DisassociateOpsItemRelatedItem" id="@cdk_utils/iam.ssm.SSMOperations.property.DisassociateOpsItemRelatedItem"></a>

```typescript
public readonly DisassociateOpsItemRelatedItem: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateOpsItemRelatedItem API call.

---

##### `LabelParameterVersion`<sup>Required</sup> <a name="LabelParameterVersion" id="@cdk_utils/iam.ssm.SSMOperations.property.LabelParameterVersion"></a>

```typescript
public readonly LabelParameterVersion: string[];
```

- *Type:* string[]

IAM actions required for the LabelParameterVersion API call.

---

##### `ListAssociations`<sup>Required</sup> <a name="ListAssociations" id="@cdk_utils/iam.ssm.SSMOperations.property.ListAssociations"></a>

```typescript
public readonly ListAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociations API call.

---

##### `ListAssociationVersions`<sup>Required</sup> <a name="ListAssociationVersions" id="@cdk_utils/iam.ssm.SSMOperations.property.ListAssociationVersions"></a>

```typescript
public readonly ListAssociationVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociationVersions API call.

---

##### `ListCloudConnectors`<sup>Required</sup> <a name="ListCloudConnectors" id="@cdk_utils/iam.ssm.SSMOperations.property.ListCloudConnectors"></a>

```typescript
public readonly ListCloudConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListCloudConnectors API call.

---

##### `ListCommandInvocations`<sup>Required</sup> <a name="ListCommandInvocations" id="@cdk_utils/iam.ssm.SSMOperations.property.ListCommandInvocations"></a>

```typescript
public readonly ListCommandInvocations: string[];
```

- *Type:* string[]

IAM actions required for the ListCommandInvocations API call.

---

##### `ListCommands`<sup>Required</sup> <a name="ListCommands" id="@cdk_utils/iam.ssm.SSMOperations.property.ListCommands"></a>

```typescript
public readonly ListCommands: string[];
```

- *Type:* string[]

IAM actions required for the ListCommands API call.

---

##### `ListComplianceItems`<sup>Required</sup> <a name="ListComplianceItems" id="@cdk_utils/iam.ssm.SSMOperations.property.ListComplianceItems"></a>

```typescript
public readonly ListComplianceItems: string[];
```

- *Type:* string[]

IAM actions required for the ListComplianceItems API call.

---

##### `ListComplianceSummaries`<sup>Required</sup> <a name="ListComplianceSummaries" id="@cdk_utils/iam.ssm.SSMOperations.property.ListComplianceSummaries"></a>

```typescript
public readonly ListComplianceSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListComplianceSummaries API call.

---

##### `ListDocumentMetadataHistory`<sup>Required</sup> <a name="ListDocumentMetadataHistory" id="@cdk_utils/iam.ssm.SSMOperations.property.ListDocumentMetadataHistory"></a>

```typescript
public readonly ListDocumentMetadataHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListDocumentMetadataHistory API call.

---

##### `ListDocuments`<sup>Required</sup> <a name="ListDocuments" id="@cdk_utils/iam.ssm.SSMOperations.property.ListDocuments"></a>

```typescript
public readonly ListDocuments: string[];
```

- *Type:* string[]

IAM actions required for the ListDocuments API call.

---

##### `ListDocumentVersions`<sup>Required</sup> <a name="ListDocumentVersions" id="@cdk_utils/iam.ssm.SSMOperations.property.ListDocumentVersions"></a>

```typescript
public readonly ListDocumentVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListDocumentVersions API call.

---

##### `ListInventoryEntries`<sup>Required</sup> <a name="ListInventoryEntries" id="@cdk_utils/iam.ssm.SSMOperations.property.ListInventoryEntries"></a>

```typescript
public readonly ListInventoryEntries: string[];
```

- *Type:* string[]

IAM actions required for the ListInventoryEntries API call.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.ssm.SSMOperations.property.ListNodes"></a>

```typescript
public readonly ListNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListNodes API call.

---

##### `ListNodesSummary`<sup>Required</sup> <a name="ListNodesSummary" id="@cdk_utils/iam.ssm.SSMOperations.property.ListNodesSummary"></a>

```typescript
public readonly ListNodesSummary: string[];
```

- *Type:* string[]

IAM actions required for the ListNodesSummary API call.

---

##### `ListOpsItemEvents`<sup>Required</sup> <a name="ListOpsItemEvents" id="@cdk_utils/iam.ssm.SSMOperations.property.ListOpsItemEvents"></a>

```typescript
public readonly ListOpsItemEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListOpsItemEvents API call.

---

##### `ListOpsItemRelatedItems`<sup>Required</sup> <a name="ListOpsItemRelatedItems" id="@cdk_utils/iam.ssm.SSMOperations.property.ListOpsItemRelatedItems"></a>

```typescript
public readonly ListOpsItemRelatedItems: string[];
```

- *Type:* string[]

IAM actions required for the ListOpsItemRelatedItems API call.

---

##### `ListOpsMetadata`<sup>Required</sup> <a name="ListOpsMetadata" id="@cdk_utils/iam.ssm.SSMOperations.property.ListOpsMetadata"></a>

```typescript
public readonly ListOpsMetadata: string[];
```

- *Type:* string[]

IAM actions required for the ListOpsMetadata API call.

---

##### `ListResourceComplianceSummaries`<sup>Required</sup> <a name="ListResourceComplianceSummaries" id="@cdk_utils/iam.ssm.SSMOperations.property.ListResourceComplianceSummaries"></a>

```typescript
public readonly ListResourceComplianceSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceComplianceSummaries API call.

---

##### `ListResourceDataSync`<sup>Required</sup> <a name="ListResourceDataSync" id="@cdk_utils/iam.ssm.SSMOperations.property.ListResourceDataSync"></a>

```typescript
public readonly ListResourceDataSync: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceDataSync API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ssm.SSMOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ModifyDocumentPermission`<sup>Required</sup> <a name="ModifyDocumentPermission" id="@cdk_utils/iam.ssm.SSMOperations.property.ModifyDocumentPermission"></a>

```typescript
public readonly ModifyDocumentPermission: string[];
```

- *Type:* string[]

IAM actions required for the ModifyDocumentPermission API call.

---

##### `opGetAccessToken`<sup>Required</sup> <a name="opGetAccessToken" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetAccessToken"></a>

```typescript
public readonly opGetAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessToken API call.

---

##### `opGetAutomationExecution`<sup>Required</sup> <a name="opGetAutomationExecution" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetAutomationExecution"></a>

```typescript
public readonly opGetAutomationExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetAutomationExecution API call.

---

##### `opGetCalendarState`<sup>Required</sup> <a name="opGetCalendarState" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetCalendarState"></a>

```typescript
public readonly opGetCalendarState: string[];
```

- *Type:* string[]

IAM actions required for the GetCalendarState API call.

---

##### `opGetCloudConnector`<sup>Required</sup> <a name="opGetCloudConnector" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetCloudConnector"></a>

```typescript
public readonly opGetCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudConnector API call.

---

##### `opGetCommandInvocation`<sup>Required</sup> <a name="opGetCommandInvocation" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetCommandInvocation"></a>

```typescript
public readonly opGetCommandInvocation: string[];
```

- *Type:* string[]

IAM actions required for the GetCommandInvocation API call.

---

##### `opGetConnectionStatus`<sup>Required</sup> <a name="opGetConnectionStatus" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetConnectionStatus"></a>

```typescript
public readonly opGetConnectionStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectionStatus API call.

---

##### `opGetDefaultPatchBaseline`<sup>Required</sup> <a name="opGetDefaultPatchBaseline" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetDefaultPatchBaseline"></a>

```typescript
public readonly opGetDefaultPatchBaseline: string[];
```

- *Type:* string[]

IAM actions required for the GetDefaultPatchBaseline API call.

---

##### `opGetDeployablePatchSnapshotForInstance`<sup>Required</sup> <a name="opGetDeployablePatchSnapshotForInstance" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetDeployablePatchSnapshotForInstance"></a>

```typescript
public readonly opGetDeployablePatchSnapshotForInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetDeployablePatchSnapshotForInstance API call.

---

##### `opGetDocument`<sup>Required</sup> <a name="opGetDocument" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetDocument"></a>

```typescript
public readonly opGetDocument: string[];
```

- *Type:* string[]

IAM actions required for the GetDocument API call.

---

##### `opGetExecutionPreview`<sup>Required</sup> <a name="opGetExecutionPreview" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetExecutionPreview"></a>

```typescript
public readonly opGetExecutionPreview: string[];
```

- *Type:* string[]

IAM actions required for the GetExecutionPreview API call.

---

##### `opGetInventory`<sup>Required</sup> <a name="opGetInventory" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetInventory"></a>

```typescript
public readonly opGetInventory: string[];
```

- *Type:* string[]

IAM actions required for the GetInventory API call.

---

##### `opGetInventorySchema`<sup>Required</sup> <a name="opGetInventorySchema" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetInventorySchema"></a>

```typescript
public readonly opGetInventorySchema: string[];
```

- *Type:* string[]

IAM actions required for the GetInventorySchema API call.

---

##### `opGetMaintenanceWindow`<sup>Required</sup> <a name="opGetMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindow"></a>

```typescript
public readonly opGetMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the GetMaintenanceWindow API call.

---

##### `opGetMaintenanceWindowExecution`<sup>Required</sup> <a name="opGetMaintenanceWindowExecution" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindowExecution"></a>

```typescript
public readonly opGetMaintenanceWindowExecution: string[];
```

- *Type:* string[]

IAM actions required for the GetMaintenanceWindowExecution API call.

---

##### `opGetMaintenanceWindowExecutionTask`<sup>Required</sup> <a name="opGetMaintenanceWindowExecutionTask" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindowExecutionTask"></a>

```typescript
public readonly opGetMaintenanceWindowExecutionTask: string[];
```

- *Type:* string[]

IAM actions required for the GetMaintenanceWindowExecutionTask API call.

---

##### `opGetMaintenanceWindowExecutionTaskInvocation`<sup>Required</sup> <a name="opGetMaintenanceWindowExecutionTaskInvocation" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindowExecutionTaskInvocation"></a>

```typescript
public readonly opGetMaintenanceWindowExecutionTaskInvocation: string[];
```

- *Type:* string[]

IAM actions required for the GetMaintenanceWindowExecutionTaskInvocation API call.

---

##### `opGetMaintenanceWindowTask`<sup>Required</sup> <a name="opGetMaintenanceWindowTask" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetMaintenanceWindowTask"></a>

```typescript
public readonly opGetMaintenanceWindowTask: string[];
```

- *Type:* string[]

IAM actions required for the GetMaintenanceWindowTask API call.

---

##### `opGetOpsItem`<sup>Required</sup> <a name="opGetOpsItem" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetOpsItem"></a>

```typescript
public readonly opGetOpsItem: string[];
```

- *Type:* string[]

IAM actions required for the GetOpsItem API call.

---

##### `opGetOpsMetadata`<sup>Required</sup> <a name="opGetOpsMetadata" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetOpsMetadata"></a>

```typescript
public readonly opGetOpsMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetOpsMetadata API call.

---

##### `opGetOpsSummary`<sup>Required</sup> <a name="opGetOpsSummary" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetOpsSummary"></a>

```typescript
public readonly opGetOpsSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetOpsSummary API call.

---

##### `opGetParameter`<sup>Required</sup> <a name="opGetParameter" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetParameter"></a>

```typescript
public readonly opGetParameter: string[];
```

- *Type:* string[]

IAM actions required for the GetParameter API call.

---

##### `opGetParameterHistory`<sup>Required</sup> <a name="opGetParameterHistory" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetParameterHistory"></a>

```typescript
public readonly opGetParameterHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetParameterHistory API call.

---

##### `opGetParameters`<sup>Required</sup> <a name="opGetParameters" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetParameters"></a>

```typescript
public readonly opGetParameters: string[];
```

- *Type:* string[]

IAM actions required for the GetParameters API call.

---

##### `opGetParametersByPath`<sup>Required</sup> <a name="opGetParametersByPath" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetParametersByPath"></a>

```typescript
public readonly opGetParametersByPath: string[];
```

- *Type:* string[]

IAM actions required for the GetParametersByPath API call.

---

##### `opGetPatchBaseline`<sup>Required</sup> <a name="opGetPatchBaseline" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetPatchBaseline"></a>

```typescript
public readonly opGetPatchBaseline: string[];
```

- *Type:* string[]

IAM actions required for the GetPatchBaseline API call.

---

##### `opGetPatchBaselineForPatchGroup`<sup>Required</sup> <a name="opGetPatchBaselineForPatchGroup" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetPatchBaselineForPatchGroup"></a>

```typescript
public readonly opGetPatchBaselineForPatchGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetPatchBaselineForPatchGroup API call.

---

##### `opGetResourcePolicies`<sup>Required</sup> <a name="opGetResourcePolicies" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetResourcePolicies"></a>

```typescript
public readonly opGetResourcePolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicies API call.

---

##### `opGetServiceSetting`<sup>Required</sup> <a name="opGetServiceSetting" id="@cdk_utils/iam.ssm.SSMOperations.property.opGetServiceSetting"></a>

```typescript
public readonly opGetServiceSetting: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceSetting API call.

---

##### `PutComplianceItems`<sup>Required</sup> <a name="PutComplianceItems" id="@cdk_utils/iam.ssm.SSMOperations.property.PutComplianceItems"></a>

```typescript
public readonly PutComplianceItems: string[];
```

- *Type:* string[]

IAM actions required for the PutComplianceItems API call.

---

##### `PutInventory`<sup>Required</sup> <a name="PutInventory" id="@cdk_utils/iam.ssm.SSMOperations.property.PutInventory"></a>

```typescript
public readonly PutInventory: string[];
```

- *Type:* string[]

IAM actions required for the PutInventory API call.

---

##### `PutParameter`<sup>Required</sup> <a name="PutParameter" id="@cdk_utils/iam.ssm.SSMOperations.property.PutParameter"></a>

```typescript
public readonly PutParameter: string[];
```

- *Type:* string[]

IAM actions required for the PutParameter API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.ssm.SSMOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RegisterDefaultPatchBaseline`<sup>Required</sup> <a name="RegisterDefaultPatchBaseline" id="@cdk_utils/iam.ssm.SSMOperations.property.RegisterDefaultPatchBaseline"></a>

```typescript
public readonly RegisterDefaultPatchBaseline: string[];
```

- *Type:* string[]

IAM actions required for the RegisterDefaultPatchBaseline API call.

---

##### `RegisterPatchBaselineForPatchGroup`<sup>Required</sup> <a name="RegisterPatchBaselineForPatchGroup" id="@cdk_utils/iam.ssm.SSMOperations.property.RegisterPatchBaselineForPatchGroup"></a>

```typescript
public readonly RegisterPatchBaselineForPatchGroup: string[];
```

- *Type:* string[]

IAM actions required for the RegisterPatchBaselineForPatchGroup API call.

---

##### `RegisterTargetWithMaintenanceWindow`<sup>Required</sup> <a name="RegisterTargetWithMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMOperations.property.RegisterTargetWithMaintenanceWindow"></a>

```typescript
public readonly RegisterTargetWithMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the RegisterTargetWithMaintenanceWindow API call.

---

##### `RegisterTaskWithMaintenanceWindow`<sup>Required</sup> <a name="RegisterTaskWithMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMOperations.property.RegisterTaskWithMaintenanceWindow"></a>

```typescript
public readonly RegisterTaskWithMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the RegisterTaskWithMaintenanceWindow API call.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.ssm.SSMOperations.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromResource API call.

---

##### `ResetServiceSetting`<sup>Required</sup> <a name="ResetServiceSetting" id="@cdk_utils/iam.ssm.SSMOperations.property.ResetServiceSetting"></a>

```typescript
public readonly ResetServiceSetting: string[];
```

- *Type:* string[]

IAM actions required for the ResetServiceSetting API call.

---

##### `ResumeSession`<sup>Required</sup> <a name="ResumeSession" id="@cdk_utils/iam.ssm.SSMOperations.property.ResumeSession"></a>

```typescript
public readonly ResumeSession: string[];
```

- *Type:* string[]

IAM actions required for the ResumeSession API call.

---

##### `SendAutomationSignal`<sup>Required</sup> <a name="SendAutomationSignal" id="@cdk_utils/iam.ssm.SSMOperations.property.SendAutomationSignal"></a>

```typescript
public readonly SendAutomationSignal: string[];
```

- *Type:* string[]

IAM actions required for the SendAutomationSignal API call.

---

##### `SendCommand`<sup>Required</sup> <a name="SendCommand" id="@cdk_utils/iam.ssm.SSMOperations.property.SendCommand"></a>

```typescript
public readonly SendCommand: string[];
```

- *Type:* string[]

IAM actions required for the SendCommand API call.

---

##### `StartAccessRequest`<sup>Required</sup> <a name="StartAccessRequest" id="@cdk_utils/iam.ssm.SSMOperations.property.StartAccessRequest"></a>

```typescript
public readonly StartAccessRequest: string[];
```

- *Type:* string[]

IAM actions required for the StartAccessRequest API call.

---

##### `StartAssociationsOnce`<sup>Required</sup> <a name="StartAssociationsOnce" id="@cdk_utils/iam.ssm.SSMOperations.property.StartAssociationsOnce"></a>

```typescript
public readonly StartAssociationsOnce: string[];
```

- *Type:* string[]

IAM actions required for the StartAssociationsOnce API call.

---

##### `StartAutomationExecution`<sup>Required</sup> <a name="StartAutomationExecution" id="@cdk_utils/iam.ssm.SSMOperations.property.StartAutomationExecution"></a>

```typescript
public readonly StartAutomationExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartAutomationExecution API call.

---

##### `StartChangeRequestExecution`<sup>Required</sup> <a name="StartChangeRequestExecution" id="@cdk_utils/iam.ssm.SSMOperations.property.StartChangeRequestExecution"></a>

```typescript
public readonly StartChangeRequestExecution: string[];
```

- *Type:* string[]

IAM actions required for the StartChangeRequestExecution API call.

---

##### `StartExecutionPreview`<sup>Required</sup> <a name="StartExecutionPreview" id="@cdk_utils/iam.ssm.SSMOperations.property.StartExecutionPreview"></a>

```typescript
public readonly StartExecutionPreview: string[];
```

- *Type:* string[]

IAM actions required for the StartExecutionPreview API call.

---

##### `StartSession`<sup>Required</sup> <a name="StartSession" id="@cdk_utils/iam.ssm.SSMOperations.property.StartSession"></a>

```typescript
public readonly StartSession: string[];
```

- *Type:* string[]

IAM actions required for the StartSession API call.

---

##### `StopAutomationExecution`<sup>Required</sup> <a name="StopAutomationExecution" id="@cdk_utils/iam.ssm.SSMOperations.property.StopAutomationExecution"></a>

```typescript
public readonly StopAutomationExecution: string[];
```

- *Type:* string[]

IAM actions required for the StopAutomationExecution API call.

---

##### `TerminateSession`<sup>Required</sup> <a name="TerminateSession" id="@cdk_utils/iam.ssm.SSMOperations.property.TerminateSession"></a>

```typescript
public readonly TerminateSession: string[];
```

- *Type:* string[]

IAM actions required for the TerminateSession API call.

---

##### `UnlabelParameterVersion`<sup>Required</sup> <a name="UnlabelParameterVersion" id="@cdk_utils/iam.ssm.SSMOperations.property.UnlabelParameterVersion"></a>

```typescript
public readonly UnlabelParameterVersion: string[];
```

- *Type:* string[]

IAM actions required for the UnlabelParameterVersion API call.

---

##### `UpdateAssociation`<sup>Required</sup> <a name="UpdateAssociation" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateAssociation"></a>

```typescript
public readonly UpdateAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssociation API call.

---

##### `UpdateAssociationStatus`<sup>Required</sup> <a name="UpdateAssociationStatus" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateAssociationStatus"></a>

```typescript
public readonly UpdateAssociationStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAssociationStatus API call.

---

##### `UpdateCloudConnector`<sup>Required</sup> <a name="UpdateCloudConnector" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateCloudConnector"></a>

```typescript
public readonly UpdateCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCloudConnector API call.

---

##### `UpdateDocument`<sup>Required</sup> <a name="UpdateDocument" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateDocument"></a>

```typescript
public readonly UpdateDocument: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDocument API call.

---

##### `UpdateDocumentDefaultVersion`<sup>Required</sup> <a name="UpdateDocumentDefaultVersion" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateDocumentDefaultVersion"></a>

```typescript
public readonly UpdateDocumentDefaultVersion: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDocumentDefaultVersion API call.

---

##### `UpdateDocumentMetadata`<sup>Required</sup> <a name="UpdateDocumentMetadata" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateDocumentMetadata"></a>

```typescript
public readonly UpdateDocumentMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDocumentMetadata API call.

---

##### `UpdateMaintenanceWindow`<sup>Required</sup> <a name="UpdateMaintenanceWindow" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateMaintenanceWindow"></a>

```typescript
public readonly UpdateMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMaintenanceWindow API call.

---

##### `UpdateMaintenanceWindowTarget`<sup>Required</sup> <a name="UpdateMaintenanceWindowTarget" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateMaintenanceWindowTarget"></a>

```typescript
public readonly UpdateMaintenanceWindowTarget: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMaintenanceWindowTarget API call.

---

##### `UpdateMaintenanceWindowTask`<sup>Required</sup> <a name="UpdateMaintenanceWindowTask" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateMaintenanceWindowTask"></a>

```typescript
public readonly UpdateMaintenanceWindowTask: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMaintenanceWindowTask API call.

---

##### `UpdateManagedInstanceRole`<sup>Required</sup> <a name="UpdateManagedInstanceRole" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateManagedInstanceRole"></a>

```typescript
public readonly UpdateManagedInstanceRole: string[];
```

- *Type:* string[]

IAM actions required for the UpdateManagedInstanceRole API call.

---

##### `UpdateOpsItem`<sup>Required</sup> <a name="UpdateOpsItem" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateOpsItem"></a>

```typescript
public readonly UpdateOpsItem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOpsItem API call.

---

##### `UpdateOpsMetadata`<sup>Required</sup> <a name="UpdateOpsMetadata" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateOpsMetadata"></a>

```typescript
public readonly UpdateOpsMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOpsMetadata API call.

---

##### `UpdatePatchBaseline`<sup>Required</sup> <a name="UpdatePatchBaseline" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdatePatchBaseline"></a>

```typescript
public readonly UpdatePatchBaseline: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePatchBaseline API call.

---

##### `UpdateResourceDataSync`<sup>Required</sup> <a name="UpdateResourceDataSync" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateResourceDataSync"></a>

```typescript
public readonly UpdateResourceDataSync: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceDataSync API call.

---

##### `UpdateServiceSetting`<sup>Required</sup> <a name="UpdateServiceSetting" id="@cdk_utils/iam.ssm.SSMOperations.property.UpdateServiceSetting"></a>

```typescript
public readonly UpdateServiceSetting: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceSetting API call.

---

##### `ValidateCloudConnector`<sup>Required</sup> <a name="ValidateCloudConnector" id="@cdk_utils/iam.ssm.SSMOperations.property.ValidateCloudConnector"></a>

```typescript
public readonly ValidateCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the ValidateCloudConnector API call.

---

### SSMResources <a name="SSMResources" id="@cdk_utils/iam.ssm.SSMResources"></a>

ARN builders, validators, and parsers for ssm resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ssm.SSMResources.Initializer"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

new ssm.SSMResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.association">association</a></code> | Builds an ARN for the association resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.automationDefinition">automationDefinition</a></code> | Builds an ARN for the automation-definition resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.automationExecution">automationExecution</a></code> | Builds an ARN for the automation-execution resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.bucket">bucket</a></code> | Builds an ARN for the bucket resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.cloudConnector">cloudConnector</a></code> | Builds an ARN for the cloud-connector resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.document">document</a></code> | Builds an ARN for the document resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.iamRole">iamRole</a></code> | Builds an ARN for the iam-role resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.instance">instance</a></code> | Builds an ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidAssociationArn">isValidAssociationArn</a></code> | Validates whether a string is a valid ARN for the association resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidAutomationDefinitionArn">isValidAutomationDefinitionArn</a></code> | Validates whether a string is a valid ARN for the automation-definition resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidAutomationExecutionArn">isValidAutomationExecutionArn</a></code> | Validates whether a string is a valid ARN for the automation-execution resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidBucketArn">isValidBucketArn</a></code> | Validates whether a string is a valid ARN for the bucket resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidCloudConnectorArn">isValidCloudConnectorArn</a></code> | Validates whether a string is a valid ARN for the cloud-connector resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidDocumentArn">isValidDocumentArn</a></code> | Validates whether a string is a valid ARN for the document resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidIAMRoleArn">isValidIAMRoleArn</a></code> | Validates whether a string is a valid ARN for the iam-role resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidInstanceArn">isValidInstanceArn</a></code> | Validates whether a string is a valid ARN for the instance resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidMaintenancewindowArn">isValidMaintenancewindowArn</a></code> | Validates whether a string is a valid ARN for the maintenancewindow resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidManagedInstanceArn">isValidManagedInstanceArn</a></code> | Validates whether a string is a valid ARN for the managed-instance resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidManagedInstanceInventoryArn">isValidManagedInstanceInventoryArn</a></code> | Validates whether a string is a valid ARN for the managed-instance-inventory resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidOpsitemArn">isValidOpsitemArn</a></code> | Validates whether a string is a valid ARN for the opsitem resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidOpsitemgroupArn">isValidOpsitemgroupArn</a></code> | Validates whether a string is a valid ARN for the opsitemgroup resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidOpsmetadataArn">isValidOpsmetadataArn</a></code> | Validates whether a string is a valid ARN for the opsmetadata resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidParameterArn">isValidParameterArn</a></code> | Validates whether a string is a valid ARN for the parameter resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidPatchbaselineArn">isValidPatchbaselineArn</a></code> | Validates whether a string is a valid ARN for the patchbaseline resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidResourcedatasyncArn">isValidResourcedatasyncArn</a></code> | Validates whether a string is a valid ARN for the resourcedatasync resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidServicesettingArn">isValidServicesettingArn</a></code> | Validates whether a string is a valid ARN for the servicesetting resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidSessionArn">isValidSessionArn</a></code> | Validates whether a string is a valid ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidTaskArn">isValidTaskArn</a></code> | Validates whether a string is a valid ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidWindowtargetArn">isValidWindowtargetArn</a></code> | Validates whether a string is a valid ARN for the windowtarget resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.isValidWindowtaskArn">isValidWindowtaskArn</a></code> | Validates whether a string is a valid ARN for the windowtask resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.maintenancewindow">maintenancewindow</a></code> | Builds an ARN for the maintenancewindow resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.managedInstance">managedInstance</a></code> | Builds an ARN for the managed-instance resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.managedInstanceInventory">managedInstanceInventory</a></code> | Builds an ARN for the managed-instance-inventory resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.opsitem">opsitem</a></code> | Builds an ARN for the opsitem resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.opsitemgroup">opsitemgroup</a></code> | Builds an ARN for the opsitemgroup resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.opsmetadata">opsmetadata</a></code> | Builds an ARN for the opsmetadata resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parameter">parameter</a></code> | Builds an ARN for the parameter resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseAssociationArn">parseAssociationArn</a></code> | Parses a association ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseAutomationDefinitionArn">parseAutomationDefinitionArn</a></code> | Parses a automation-definition ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseAutomationExecutionArn">parseAutomationExecutionArn</a></code> | Parses a automation-execution ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseBucketArn">parseBucketArn</a></code> | Parses a bucket ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseCloudConnectorArn">parseCloudConnectorArn</a></code> | Parses a cloud-connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseDocumentArn">parseDocumentArn</a></code> | Parses a document ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseIAMRoleArn">parseIAMRoleArn</a></code> | Parses a iam-role ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseInstanceArn">parseInstanceArn</a></code> | Parses a instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseMaintenancewindowArn">parseMaintenancewindowArn</a></code> | Parses a maintenancewindow ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseManagedInstanceArn">parseManagedInstanceArn</a></code> | Parses a managed-instance ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseManagedInstanceInventoryArn">parseManagedInstanceInventoryArn</a></code> | Parses a managed-instance-inventory ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseOpsitemArn">parseOpsitemArn</a></code> | Parses a opsitem ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseOpsitemgroupArn">parseOpsitemgroupArn</a></code> | Parses a opsitemgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseOpsmetadataArn">parseOpsmetadataArn</a></code> | Parses a opsmetadata ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseParameterArn">parseParameterArn</a></code> | Parses a parameter ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parsePatchbaselineArn">parsePatchbaselineArn</a></code> | Parses a patchbaseline ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseResourcedatasyncArn">parseResourcedatasyncArn</a></code> | Parses a resourcedatasync ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseServicesettingArn">parseServicesettingArn</a></code> | Parses a servicesetting ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseSessionArn">parseSessionArn</a></code> | Parses a session ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseTaskArn">parseTaskArn</a></code> | Parses a task ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseWindowtargetArn">parseWindowtargetArn</a></code> | Parses a windowtarget ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.parseWindowtaskArn">parseWindowtaskArn</a></code> | Parses a windowtask ARN into its components. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.patchbaseline">patchbaseline</a></code> | Builds an ARN for the patchbaseline resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.resourcedatasync">resourcedatasync</a></code> | Builds an ARN for the resourcedatasync resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.servicesetting">servicesetting</a></code> | Builds an ARN for the servicesetting resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.session">session</a></code> | Builds an ARN for the session resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.task">task</a></code> | Builds an ARN for the task resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.windowtarget">windowtarget</a></code> | Builds an ARN for the windowtarget resource. |
| <code><a href="#@cdk_utils/iam.ssm.SSMResources.windowtask">windowtask</a></code> | Builds an ARN for the windowtask resource. |

---

##### `association` <a name="association" id="@cdk_utils/iam.ssm.SSMResources.association"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.association(props: SSMAssociationArnProps)
```

Builds an ARN for the association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.association.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMAssociationArnProps">SSMAssociationArnProps</a>

---

##### `automationDefinition` <a name="automationDefinition" id="@cdk_utils/iam.ssm.SSMResources.automationDefinition"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.automationDefinition(props: SSMAutomationDefinitionArnProps)
```

Builds an ARN for the automation-definition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.automationDefinition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMAutomationDefinitionArnProps">SSMAutomationDefinitionArnProps</a>

---

##### `automationExecution` <a name="automationExecution" id="@cdk_utils/iam.ssm.SSMResources.automationExecution"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.automationExecution(props: SSMAutomationExecutionArnProps)
```

Builds an ARN for the automation-execution resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.automationExecution.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMAutomationExecutionArnProps">SSMAutomationExecutionArnProps</a>

---

##### `bucket` <a name="bucket" id="@cdk_utils/iam.ssm.SSMResources.bucket"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.bucket(props: SSMBucketArnProps)
```

Builds an ARN for the bucket resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.bucket.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMBucketArnProps">SSMBucketArnProps</a>

---

##### `cloudConnector` <a name="cloudConnector" id="@cdk_utils/iam.ssm.SSMResources.cloudConnector"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.cloudConnector(props: SSMCloudConnectorArnProps)
```

Builds an ARN for the cloud-connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.cloudConnector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMCloudConnectorArnProps">SSMCloudConnectorArnProps</a>

---

##### `document` <a name="document" id="@cdk_utils/iam.ssm.SSMResources.document"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.document(props: SSMDocumentArnProps)
```

Builds an ARN for the document resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.document.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMDocumentArnProps">SSMDocumentArnProps</a>

---

##### `iamRole` <a name="iamRole" id="@cdk_utils/iam.ssm.SSMResources.iamRole"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.iamRole(props: SSMIAMRoleArnProps)
```

Builds an ARN for the iam-role resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.iamRole.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMIAMRoleArnProps">SSMIAMRoleArnProps</a>

---

##### `instance` <a name="instance" id="@cdk_utils/iam.ssm.SSMResources.instance"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.instance(props: SSMInstanceArnProps)
```

Builds an ARN for the instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.instance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMInstanceArnProps">SSMInstanceArnProps</a>

---

##### `isValidAssociationArn` <a name="isValidAssociationArn" id="@cdk_utils/iam.ssm.SSMResources.isValidAssociationArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomationDefinitionArn` <a name="isValidAutomationDefinitionArn" id="@cdk_utils/iam.ssm.SSMResources.isValidAutomationDefinitionArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidAutomationDefinitionArn(arn: string)
```

Validates whether a string is a valid ARN for the automation-definition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidAutomationDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAutomationExecutionArn` <a name="isValidAutomationExecutionArn" id="@cdk_utils/iam.ssm.SSMResources.isValidAutomationExecutionArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidAutomationExecutionArn(arn: string)
```

Validates whether a string is a valid ARN for the automation-execution resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidAutomationExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBucketArn` <a name="isValidBucketArn" id="@cdk_utils/iam.ssm.SSMResources.isValidBucketArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidBucketArn(arn: string)
```

Validates whether a string is a valid ARN for the bucket resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCloudConnectorArn` <a name="isValidCloudConnectorArn" id="@cdk_utils/iam.ssm.SSMResources.isValidCloudConnectorArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidCloudConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the cloud-connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidCloudConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDocumentArn` <a name="isValidDocumentArn" id="@cdk_utils/iam.ssm.SSMResources.isValidDocumentArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidDocumentArn(arn: string)
```

Validates whether a string is a valid ARN for the document resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidDocumentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIAMRoleArn` <a name="isValidIAMRoleArn" id="@cdk_utils/iam.ssm.SSMResources.isValidIAMRoleArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidIAMRoleArn(arn: string)
```

Validates whether a string is a valid ARN for the iam-role resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidIAMRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInstanceArn` <a name="isValidInstanceArn" id="@cdk_utils/iam.ssm.SSMResources.isValidInstanceArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMaintenancewindowArn` <a name="isValidMaintenancewindowArn" id="@cdk_utils/iam.ssm.SSMResources.isValidMaintenancewindowArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidMaintenancewindowArn(arn: string)
```

Validates whether a string is a valid ARN for the maintenancewindow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidMaintenancewindowArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedInstanceArn` <a name="isValidManagedInstanceArn" id="@cdk_utils/iam.ssm.SSMResources.isValidManagedInstanceArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidManagedInstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the managed-instance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidManagedInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedInstanceInventoryArn` <a name="isValidManagedInstanceInventoryArn" id="@cdk_utils/iam.ssm.SSMResources.isValidManagedInstanceInventoryArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidManagedInstanceInventoryArn(arn: string)
```

Validates whether a string is a valid ARN for the managed-instance-inventory resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidManagedInstanceInventoryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOpsitemArn` <a name="isValidOpsitemArn" id="@cdk_utils/iam.ssm.SSMResources.isValidOpsitemArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidOpsitemArn(arn: string)
```

Validates whether a string is a valid ARN for the opsitem resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidOpsitemArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOpsitemgroupArn` <a name="isValidOpsitemgroupArn" id="@cdk_utils/iam.ssm.SSMResources.isValidOpsitemgroupArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidOpsitemgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the opsitemgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidOpsitemgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOpsmetadataArn` <a name="isValidOpsmetadataArn" id="@cdk_utils/iam.ssm.SSMResources.isValidOpsmetadataArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidOpsmetadataArn(arn: string)
```

Validates whether a string is a valid ARN for the opsmetadata resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidOpsmetadataArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidParameterArn` <a name="isValidParameterArn" id="@cdk_utils/iam.ssm.SSMResources.isValidParameterArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidParameterArn(arn: string)
```

Validates whether a string is a valid ARN for the parameter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidParameterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPatchbaselineArn` <a name="isValidPatchbaselineArn" id="@cdk_utils/iam.ssm.SSMResources.isValidPatchbaselineArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidPatchbaselineArn(arn: string)
```

Validates whether a string is a valid ARN for the patchbaseline resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidPatchbaselineArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourcedatasyncArn` <a name="isValidResourcedatasyncArn" id="@cdk_utils/iam.ssm.SSMResources.isValidResourcedatasyncArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidResourcedatasyncArn(arn: string)
```

Validates whether a string is a valid ARN for the resourcedatasync resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidResourcedatasyncArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServicesettingArn` <a name="isValidServicesettingArn" id="@cdk_utils/iam.ssm.SSMResources.isValidServicesettingArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidServicesettingArn(arn: string)
```

Validates whether a string is a valid ARN for the servicesetting resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidServicesettingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSessionArn` <a name="isValidSessionArn" id="@cdk_utils/iam.ssm.SSMResources.isValidSessionArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTaskArn` <a name="isValidTaskArn" id="@cdk_utils/iam.ssm.SSMResources.isValidTaskArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWindowtargetArn` <a name="isValidWindowtargetArn" id="@cdk_utils/iam.ssm.SSMResources.isValidWindowtargetArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidWindowtargetArn(arn: string)
```

Validates whether a string is a valid ARN for the windowtarget resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidWindowtargetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWindowtaskArn` <a name="isValidWindowtaskArn" id="@cdk_utils/iam.ssm.SSMResources.isValidWindowtaskArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.isValidWindowtaskArn(arn: string)
```

Validates whether a string is a valid ARN for the windowtask resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.isValidWindowtaskArn.parameter.arn"></a>

- *Type:* string

---

##### `maintenancewindow` <a name="maintenancewindow" id="@cdk_utils/iam.ssm.SSMResources.maintenancewindow"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.maintenancewindow(props: SSMMaintenancewindowArnProps)
```

Builds an ARN for the maintenancewindow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.maintenancewindow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMMaintenancewindowArnProps">SSMMaintenancewindowArnProps</a>

---

##### `managedInstance` <a name="managedInstance" id="@cdk_utils/iam.ssm.SSMResources.managedInstance"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.managedInstance(props: SSMManagedInstanceArnProps)
```

Builds an ARN for the managed-instance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.managedInstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMManagedInstanceArnProps">SSMManagedInstanceArnProps</a>

---

##### `managedInstanceInventory` <a name="managedInstanceInventory" id="@cdk_utils/iam.ssm.SSMResources.managedInstanceInventory"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.managedInstanceInventory(props: SSMManagedInstanceInventoryArnProps)
```

Builds an ARN for the managed-instance-inventory resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.managedInstanceInventory.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMManagedInstanceInventoryArnProps">SSMManagedInstanceInventoryArnProps</a>

---

##### `opsitem` <a name="opsitem" id="@cdk_utils/iam.ssm.SSMResources.opsitem"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.opsitem(props: SSMOpsitemArnProps)
```

Builds an ARN for the opsitem resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.opsitem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMOpsitemArnProps">SSMOpsitemArnProps</a>

---

##### `opsitemgroup` <a name="opsitemgroup" id="@cdk_utils/iam.ssm.SSMResources.opsitemgroup"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.opsitemgroup(props: SSMOpsitemgroupArnProps)
```

Builds an ARN for the opsitemgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.opsitemgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMOpsitemgroupArnProps">SSMOpsitemgroupArnProps</a>

---

##### `opsmetadata` <a name="opsmetadata" id="@cdk_utils/iam.ssm.SSMResources.opsmetadata"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.opsmetadata(props: SSMOpsmetadataArnProps)
```

Builds an ARN for the opsmetadata resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.opsmetadata.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMOpsmetadataArnProps">SSMOpsmetadataArnProps</a>

---

##### `parameter` <a name="parameter" id="@cdk_utils/iam.ssm.SSMResources.parameter"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parameter(props: SSMParameterArnProps)
```

Builds an ARN for the parameter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.parameter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMParameterArnProps">SSMParameterArnProps</a>

---

##### `parseAssociationArn` <a name="parseAssociationArn" id="@cdk_utils/iam.ssm.SSMResources.parseAssociationArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseAssociationArn(arn: string)
```

Parses a association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationDefinitionArn` <a name="parseAutomationDefinitionArn" id="@cdk_utils/iam.ssm.SSMResources.parseAutomationDefinitionArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseAutomationDefinitionArn(arn: string)
```

Parses a automation-definition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseAutomationDefinitionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAutomationExecutionArn` <a name="parseAutomationExecutionArn" id="@cdk_utils/iam.ssm.SSMResources.parseAutomationExecutionArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseAutomationExecutionArn(arn: string)
```

Parses a automation-execution ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseAutomationExecutionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBucketArn` <a name="parseBucketArn" id="@cdk_utils/iam.ssm.SSMResources.parseBucketArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseBucketArn(arn: string)
```

Parses a bucket ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseBucketArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCloudConnectorArn` <a name="parseCloudConnectorArn" id="@cdk_utils/iam.ssm.SSMResources.parseCloudConnectorArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseCloudConnectorArn(arn: string)
```

Parses a cloud-connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseCloudConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDocumentArn` <a name="parseDocumentArn" id="@cdk_utils/iam.ssm.SSMResources.parseDocumentArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseDocumentArn(arn: string)
```

Parses a document ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseDocumentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIAMRoleArn` <a name="parseIAMRoleArn" id="@cdk_utils/iam.ssm.SSMResources.parseIAMRoleArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseIAMRoleArn(arn: string)
```

Parses a iam-role ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseIAMRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstanceArn` <a name="parseInstanceArn" id="@cdk_utils/iam.ssm.SSMResources.parseInstanceArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseInstanceArn(arn: string)
```

Parses a instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMaintenancewindowArn` <a name="parseMaintenancewindowArn" id="@cdk_utils/iam.ssm.SSMResources.parseMaintenancewindowArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseMaintenancewindowArn(arn: string)
```

Parses a maintenancewindow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseMaintenancewindowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedInstanceArn` <a name="parseManagedInstanceArn" id="@cdk_utils/iam.ssm.SSMResources.parseManagedInstanceArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseManagedInstanceArn(arn: string)
```

Parses a managed-instance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseManagedInstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedInstanceInventoryArn` <a name="parseManagedInstanceInventoryArn" id="@cdk_utils/iam.ssm.SSMResources.parseManagedInstanceInventoryArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseManagedInstanceInventoryArn(arn: string)
```

Parses a managed-instance-inventory ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseManagedInstanceInventoryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOpsitemArn` <a name="parseOpsitemArn" id="@cdk_utils/iam.ssm.SSMResources.parseOpsitemArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseOpsitemArn(arn: string)
```

Parses a opsitem ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseOpsitemArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOpsitemgroupArn` <a name="parseOpsitemgroupArn" id="@cdk_utils/iam.ssm.SSMResources.parseOpsitemgroupArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseOpsitemgroupArn(arn: string)
```

Parses a opsitemgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseOpsitemgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOpsmetadataArn` <a name="parseOpsmetadataArn" id="@cdk_utils/iam.ssm.SSMResources.parseOpsmetadataArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseOpsmetadataArn(arn: string)
```

Parses a opsmetadata ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseOpsmetadataArn.parameter.arn"></a>

- *Type:* string

---

##### `parseParameterArn` <a name="parseParameterArn" id="@cdk_utils/iam.ssm.SSMResources.parseParameterArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseParameterArn(arn: string)
```

Parses a parameter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseParameterArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePatchbaselineArn` <a name="parsePatchbaselineArn" id="@cdk_utils/iam.ssm.SSMResources.parsePatchbaselineArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parsePatchbaselineArn(arn: string)
```

Parses a patchbaseline ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parsePatchbaselineArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourcedatasyncArn` <a name="parseResourcedatasyncArn" id="@cdk_utils/iam.ssm.SSMResources.parseResourcedatasyncArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseResourcedatasyncArn(arn: string)
```

Parses a resourcedatasync ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseResourcedatasyncArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServicesettingArn` <a name="parseServicesettingArn" id="@cdk_utils/iam.ssm.SSMResources.parseServicesettingArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseServicesettingArn(arn: string)
```

Parses a servicesetting ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseServicesettingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSessionArn` <a name="parseSessionArn" id="@cdk_utils/iam.ssm.SSMResources.parseSessionArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseSessionArn(arn: string)
```

Parses a session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTaskArn` <a name="parseTaskArn" id="@cdk_utils/iam.ssm.SSMResources.parseTaskArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseTaskArn(arn: string)
```

Parses a task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWindowtargetArn` <a name="parseWindowtargetArn" id="@cdk_utils/iam.ssm.SSMResources.parseWindowtargetArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseWindowtargetArn(arn: string)
```

Parses a windowtarget ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseWindowtargetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWindowtaskArn` <a name="parseWindowtaskArn" id="@cdk_utils/iam.ssm.SSMResources.parseWindowtaskArn"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.parseWindowtaskArn(arn: string)
```

Parses a windowtask ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ssm.SSMResources.parseWindowtaskArn.parameter.arn"></a>

- *Type:* string

---

##### `patchbaseline` <a name="patchbaseline" id="@cdk_utils/iam.ssm.SSMResources.patchbaseline"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.patchbaseline(props: SSMPatchbaselineArnProps)
```

Builds an ARN for the patchbaseline resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.patchbaseline.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMPatchbaselineArnProps">SSMPatchbaselineArnProps</a>

---

##### `resourcedatasync` <a name="resourcedatasync" id="@cdk_utils/iam.ssm.SSMResources.resourcedatasync"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.resourcedatasync(props: SSMResourcedatasyncArnProps)
```

Builds an ARN for the resourcedatasync resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.resourcedatasync.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMResourcedatasyncArnProps">SSMResourcedatasyncArnProps</a>

---

##### `servicesetting` <a name="servicesetting" id="@cdk_utils/iam.ssm.SSMResources.servicesetting"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.servicesetting(props: SSMServicesettingArnProps)
```

Builds an ARN for the servicesetting resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.servicesetting.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMServicesettingArnProps">SSMServicesettingArnProps</a>

---

##### `session` <a name="session" id="@cdk_utils/iam.ssm.SSMResources.session"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.session(props: SSMSessionArnProps)
```

Builds an ARN for the session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.session.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMSessionArnProps">SSMSessionArnProps</a>

---

##### `task` <a name="task" id="@cdk_utils/iam.ssm.SSMResources.task"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.task(props: SSMTaskArnProps)
```

Builds an ARN for the task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.task.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMTaskArnProps">SSMTaskArnProps</a>

---

##### `windowtarget` <a name="windowtarget" id="@cdk_utils/iam.ssm.SSMResources.windowtarget"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.windowtarget(props: SSMWindowtargetArnProps)
```

Builds an ARN for the windowtarget resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.windowtarget.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMWindowtargetArnProps">SSMWindowtargetArnProps</a>

---

##### `windowtask` <a name="windowtask" id="@cdk_utils/iam.ssm.SSMResources.windowtask"></a>

```typescript
import { ssm } from '@cdk_utils/iam'

ssm.SSMResources.windowtask(props: SSMWindowtaskArnProps)
```

Builds an ARN for the windowtask resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ssm.SSMResources.windowtask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ssm.SSMWindowtaskArnProps">SSMWindowtaskArnProps</a>

---




