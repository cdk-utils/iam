# `fis` Submodule <a name="`fis` Submodule" id="@cdk_utils/iam.fis"></a>


## Structs <a name="Structs" id="Structs"></a>

### FisActionArnComponents <a name="FisActionArnComponents" id="@cdk_utils/iam.fis.FisActionArnComponents"></a>

Parsed components of a action ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fis.FisActionArnComponents.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

const fisActionArnComponents: fis.FisActionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisActionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fis.FisActionArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.fis.FisActionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fis.FisActionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fis.FisActionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fis.FisActionArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fis.FisActionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fis.FisActionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FisActionArnProps <a name="FisActionArnProps" id="@cdk_utils/iam.fis.FisActionArnProps"></a>

Properties for building a action ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fis.FisActionArnProps.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

const fisActionArnProps: fis.FisActionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisActionArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.fis.FisActionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fis.FisActionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fis.FisActionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fis.FisActionArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fis.FisActionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fis.FisActionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fis.FisActionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FisExperimentArnComponents <a name="FisExperimentArnComponents" id="@cdk_utils/iam.fis.FisExperimentArnComponents"></a>

Parsed components of a experiment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fis.FisExperimentArnComponents.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

const fisExperimentArnComponents: fis.FisExperimentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fis.FisExperimentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fis.FisExperimentArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fis.FisExperimentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fis.FisExperimentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FisExperimentArnProps <a name="FisExperimentArnProps" id="@cdk_utils/iam.fis.FisExperimentArnProps"></a>

Properties for building a experiment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fis.FisExperimentArnProps.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

const fisExperimentArnProps: fis.FisExperimentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fis.FisExperimentArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fis.FisExperimentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fis.FisExperimentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fis.FisExperimentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FisExperimentTemplateArnComponents <a name="FisExperimentTemplateArnComponents" id="@cdk_utils/iam.fis.FisExperimentTemplateArnComponents"></a>

Parsed components of a experiment-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

const fisExperimentTemplateArnComponents: fis.FisExperimentTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fis.FisExperimentTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FisExperimentTemplateArnProps <a name="FisExperimentTemplateArnProps" id="@cdk_utils/iam.fis.FisExperimentTemplateArnProps"></a>

Properties for building a experiment-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fis.FisExperimentTemplateArnProps.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

const fisExperimentTemplateArnProps: fis.FisExperimentTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fis.FisExperimentTemplateArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fis.FisExperimentTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fis.FisExperimentTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fis.FisExperimentTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### FisSafetyLeverArnComponents <a name="FisSafetyLeverArnComponents" id="@cdk_utils/iam.fis.FisSafetyLeverArnComponents"></a>

Parsed components of a safety-lever ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fis.FisSafetyLeverArnComponents.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

const fisSafetyLeverArnComponents: fis.FisSafetyLeverArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisSafetyLeverArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fis.FisSafetyLeverArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.fis.FisSafetyLeverArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fis.FisSafetyLeverArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.fis.FisSafetyLeverArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fis.FisSafetyLeverArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.fis.FisSafetyLeverArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.fis.FisSafetyLeverArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### FisSafetyLeverArnProps <a name="FisSafetyLeverArnProps" id="@cdk_utils/iam.fis.FisSafetyLeverArnProps"></a>

Properties for building a safety-lever ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.fis.FisSafetyLeverArnProps.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

const fisSafetyLeverArnProps: fis.FisSafetyLeverArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisSafetyLeverArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.fis.FisSafetyLeverArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.fis.FisSafetyLeverArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.fis.FisSafetyLeverArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.fis.FisSafetyLeverArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.fis.FisSafetyLeverArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.fis.FisSafetyLeverArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.fis.FisSafetyLeverArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### FisActions <a name="FisActions" id="@cdk_utils/iam.fis.FisActions"></a>

IAM action constants for the fis service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fis.FisActions.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

new fis.FisActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.actionGetAction">actionGetAction</a></code> | <code>string</code> | [Read] fis:GetAction. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.actionGetExperiment">actionGetExperiment</a></code> | <code>string</code> | [Read] fis:GetExperiment. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.actionGetExperimentTargetAccountConfiguration">actionGetExperimentTargetAccountConfiguration</a></code> | <code>string</code> | [Read] fis:GetExperimentTargetAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.actionGetExperimentTemplate">actionGetExperimentTemplate</a></code> | <code>string</code> | [Read] fis:GetExperimentTemplate. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.actionGetSafetyLever">actionGetSafetyLever</a></code> | <code>string</code> | [Read] fis:GetSafetyLever. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.actionGetTargetAccountConfiguration">actionGetTargetAccountConfiguration</a></code> | <code>string</code> | [Read] fis:GetTargetAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.actionGetTargetResourceType">actionGetTargetResourceType</a></code> | <code>string</code> | [Read] fis:GetTargetResourceType. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.CreateExperimentTemplate">CreateExperimentTemplate</a></code> | <code>string</code> | [Write] fis:CreateExperimentTemplate. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.CreateTargetAccountConfiguration">CreateTargetAccountConfiguration</a></code> | <code>string</code> | [Write] fis:CreateTargetAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.DeleteExperimentTemplate">DeleteExperimentTemplate</a></code> | <code>string</code> | [Write] fis:DeleteExperimentTemplate. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.DeleteTargetAccountConfiguration">DeleteTargetAccountConfiguration</a></code> | <code>string</code> | [Write] fis:DeleteTargetAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.InjectApiInternalError">InjectApiInternalError</a></code> | <code>string</code> | [Write] fis:InjectApiInternalError. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.InjectApiThrottleError">InjectApiThrottleError</a></code> | <code>string</code> | [Write] fis:InjectApiThrottleError. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.InjectApiUnavailableError">InjectApiUnavailableError</a></code> | <code>string</code> | [Write] fis:InjectApiUnavailableError. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.ListActions">ListActions</a></code> | <code>string</code> | [List] fis:ListActions. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.ListExperimentResolvedTargets">ListExperimentResolvedTargets</a></code> | <code>string</code> | [List] fis:ListExperimentResolvedTargets. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.ListExperiments">ListExperiments</a></code> | <code>string</code> | [List] fis:ListExperiments. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.ListExperimentTargetAccountConfigurations">ListExperimentTargetAccountConfigurations</a></code> | <code>string</code> | [List] fis:ListExperimentTargetAccountConfigurations. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.ListExperimentTemplates">ListExperimentTemplates</a></code> | <code>string</code> | [List] fis:ListExperimentTemplates. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] fis:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.ListTargetAccountConfigurations">ListTargetAccountConfigurations</a></code> | <code>string</code> | [List] fis:ListTargetAccountConfigurations. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.ListTargetResourceTypes">ListTargetResourceTypes</a></code> | <code>string</code> | [List] fis:ListTargetResourceTypes. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.StartExperiment">StartExperiment</a></code> | <code>string</code> | [Write] fis:StartExperiment. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.StopExperiment">StopExperiment</a></code> | <code>string</code> | [Write] fis:StopExperiment. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] fis:TagResource. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] fis:UntagResource. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.UpdateExperimentTemplate">UpdateExperimentTemplate</a></code> | <code>string</code> | [Write] fis:UpdateExperimentTemplate. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.UpdateSafetyLeverState">UpdateSafetyLeverState</a></code> | <code>string</code> | [Write] fis:UpdateSafetyLeverState. |
| <code><a href="#@cdk_utils/iam.fis.FisActions.property.UpdateTargetAccountConfiguration">UpdateTargetAccountConfiguration</a></code> | <code>string</code> | [Write] fis:UpdateTargetAccountConfiguration. |

---

##### `actionGetAction`<sup>Required</sup> <a name="actionGetAction" id="@cdk_utils/iam.fis.FisActions.property.actionGetAction"></a>

```typescript
public readonly actionGetAction: string;
```

- *Type:* string

[Read] fis:GetAction.

---

##### `actionGetExperiment`<sup>Required</sup> <a name="actionGetExperiment" id="@cdk_utils/iam.fis.FisActions.property.actionGetExperiment"></a>

```typescript
public readonly actionGetExperiment: string;
```

- *Type:* string

[Read] fis:GetExperiment.

---

##### `actionGetExperimentTargetAccountConfiguration`<sup>Required</sup> <a name="actionGetExperimentTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisActions.property.actionGetExperimentTargetAccountConfiguration"></a>

```typescript
public readonly actionGetExperimentTargetAccountConfiguration: string;
```

- *Type:* string

[Read] fis:GetExperimentTargetAccountConfiguration.

---

##### `actionGetExperimentTemplate`<sup>Required</sup> <a name="actionGetExperimentTemplate" id="@cdk_utils/iam.fis.FisActions.property.actionGetExperimentTemplate"></a>

```typescript
public readonly actionGetExperimentTemplate: string;
```

- *Type:* string

[Read] fis:GetExperimentTemplate.

---

##### `actionGetSafetyLever`<sup>Required</sup> <a name="actionGetSafetyLever" id="@cdk_utils/iam.fis.FisActions.property.actionGetSafetyLever"></a>

```typescript
public readonly actionGetSafetyLever: string;
```

- *Type:* string

[Read] fis:GetSafetyLever.

---

##### `actionGetTargetAccountConfiguration`<sup>Required</sup> <a name="actionGetTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisActions.property.actionGetTargetAccountConfiguration"></a>

```typescript
public readonly actionGetTargetAccountConfiguration: string;
```

- *Type:* string

[Read] fis:GetTargetAccountConfiguration.

---

##### `actionGetTargetResourceType`<sup>Required</sup> <a name="actionGetTargetResourceType" id="@cdk_utils/iam.fis.FisActions.property.actionGetTargetResourceType"></a>

```typescript
public readonly actionGetTargetResourceType: string;
```

- *Type:* string

[Read] fis:GetTargetResourceType.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.fis.FisActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.fis.FisActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.fis.FisActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.fis.FisActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.fis.FisActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateExperimentTemplate`<sup>Required</sup> <a name="CreateExperimentTemplate" id="@cdk_utils/iam.fis.FisActions.property.CreateExperimentTemplate"></a>

```typescript
public readonly CreateExperimentTemplate: string;
```

- *Type:* string

[Write] fis:CreateExperimentTemplate.

---

##### `CreateTargetAccountConfiguration`<sup>Required</sup> <a name="CreateTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisActions.property.CreateTargetAccountConfiguration"></a>

```typescript
public readonly CreateTargetAccountConfiguration: string;
```

- *Type:* string

[Write] fis:CreateTargetAccountConfiguration.

---

##### `DeleteExperimentTemplate`<sup>Required</sup> <a name="DeleteExperimentTemplate" id="@cdk_utils/iam.fis.FisActions.property.DeleteExperimentTemplate"></a>

```typescript
public readonly DeleteExperimentTemplate: string;
```

- *Type:* string

[Write] fis:DeleteExperimentTemplate.

---

##### `DeleteTargetAccountConfiguration`<sup>Required</sup> <a name="DeleteTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisActions.property.DeleteTargetAccountConfiguration"></a>

```typescript
public readonly DeleteTargetAccountConfiguration: string;
```

- *Type:* string

[Write] fis:DeleteTargetAccountConfiguration.

---

##### `InjectApiInternalError`<sup>Required</sup> <a name="InjectApiInternalError" id="@cdk_utils/iam.fis.FisActions.property.InjectApiInternalError"></a>

```typescript
public readonly InjectApiInternalError: string;
```

- *Type:* string

[Write] fis:InjectApiInternalError.

---

##### `InjectApiThrottleError`<sup>Required</sup> <a name="InjectApiThrottleError" id="@cdk_utils/iam.fis.FisActions.property.InjectApiThrottleError"></a>

```typescript
public readonly InjectApiThrottleError: string;
```

- *Type:* string

[Write] fis:InjectApiThrottleError.

---

##### `InjectApiUnavailableError`<sup>Required</sup> <a name="InjectApiUnavailableError" id="@cdk_utils/iam.fis.FisActions.property.InjectApiUnavailableError"></a>

```typescript
public readonly InjectApiUnavailableError: string;
```

- *Type:* string

[Write] fis:InjectApiUnavailableError.

---

##### `ListActions`<sup>Required</sup> <a name="ListActions" id="@cdk_utils/iam.fis.FisActions.property.ListActions"></a>

```typescript
public readonly ListActions: string;
```

- *Type:* string

[List] fis:ListActions.

---

##### `ListExperimentResolvedTargets`<sup>Required</sup> <a name="ListExperimentResolvedTargets" id="@cdk_utils/iam.fis.FisActions.property.ListExperimentResolvedTargets"></a>

```typescript
public readonly ListExperimentResolvedTargets: string;
```

- *Type:* string

[List] fis:ListExperimentResolvedTargets.

---

##### `ListExperiments`<sup>Required</sup> <a name="ListExperiments" id="@cdk_utils/iam.fis.FisActions.property.ListExperiments"></a>

```typescript
public readonly ListExperiments: string;
```

- *Type:* string

[List] fis:ListExperiments.

---

##### `ListExperimentTargetAccountConfigurations`<sup>Required</sup> <a name="ListExperimentTargetAccountConfigurations" id="@cdk_utils/iam.fis.FisActions.property.ListExperimentTargetAccountConfigurations"></a>

```typescript
public readonly ListExperimentTargetAccountConfigurations: string;
```

- *Type:* string

[List] fis:ListExperimentTargetAccountConfigurations.

---

##### `ListExperimentTemplates`<sup>Required</sup> <a name="ListExperimentTemplates" id="@cdk_utils/iam.fis.FisActions.property.ListExperimentTemplates"></a>

```typescript
public readonly ListExperimentTemplates: string;
```

- *Type:* string

[List] fis:ListExperimentTemplates.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.fis.FisActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] fis:ListTagsForResource.

---

##### `ListTargetAccountConfigurations`<sup>Required</sup> <a name="ListTargetAccountConfigurations" id="@cdk_utils/iam.fis.FisActions.property.ListTargetAccountConfigurations"></a>

```typescript
public readonly ListTargetAccountConfigurations: string;
```

- *Type:* string

[List] fis:ListTargetAccountConfigurations.

---

##### `ListTargetResourceTypes`<sup>Required</sup> <a name="ListTargetResourceTypes" id="@cdk_utils/iam.fis.FisActions.property.ListTargetResourceTypes"></a>

```typescript
public readonly ListTargetResourceTypes: string;
```

- *Type:* string

[List] fis:ListTargetResourceTypes.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.fis.FisActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartExperiment`<sup>Required</sup> <a name="StartExperiment" id="@cdk_utils/iam.fis.FisActions.property.StartExperiment"></a>

```typescript
public readonly StartExperiment: string;
```

- *Type:* string

[Write] fis:StartExperiment.

---

##### `StopExperiment`<sup>Required</sup> <a name="StopExperiment" id="@cdk_utils/iam.fis.FisActions.property.StopExperiment"></a>

```typescript
public readonly StopExperiment: string;
```

- *Type:* string

[Write] fis:StopExperiment.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.fis.FisActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] fis:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.fis.FisActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] fis:UntagResource.

---

##### `UpdateExperimentTemplate`<sup>Required</sup> <a name="UpdateExperimentTemplate" id="@cdk_utils/iam.fis.FisActions.property.UpdateExperimentTemplate"></a>

```typescript
public readonly UpdateExperimentTemplate: string;
```

- *Type:* string

[Write] fis:UpdateExperimentTemplate.

---

##### `UpdateSafetyLeverState`<sup>Required</sup> <a name="UpdateSafetyLeverState" id="@cdk_utils/iam.fis.FisActions.property.UpdateSafetyLeverState"></a>

```typescript
public readonly UpdateSafetyLeverState: string;
```

- *Type:* string

[Write] fis:UpdateSafetyLeverState.

---

##### `UpdateTargetAccountConfiguration`<sup>Required</sup> <a name="UpdateTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisActions.property.UpdateTargetAccountConfiguration"></a>

```typescript
public readonly UpdateTargetAccountConfiguration: string;
```

- *Type:* string

[Write] fis:UpdateTargetAccountConfiguration.

---

### FisConditions <a name="FisConditions" id="@cdk_utils/iam.fis.FisConditions"></a>

Condition key constants and builders for fis.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fis.FisConditions.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

new fis.FisConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.operations">operations</a></code> | Generates a condition block for `fis:Operations`. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.percentage">percentage</a></code> | Generates a condition block for `fis:Percentage`. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.service">service</a></code> | Generates a condition block for `fis:Service`. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.targets">targets</a></code> | Generates a condition block for `fis:Targets`. |

---

##### `operations` <a name="operations" id="@cdk_utils/iam.fis.FisConditions.operations"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisConditions.operations(values: string[])
```

Generates a condition block for `fis:Operations`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.fis.FisConditions.operations.parameter.values"></a>

- *Type:* string[]

---

##### `percentage` <a name="percentage" id="@cdk_utils/iam.fis.FisConditions.percentage"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisConditions.percentage(value: number)
```

Generates a condition block for `fis:Percentage`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fis.FisConditions.percentage.parameter.value"></a>

- *Type:* number

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.fis.FisConditions.requestTag"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fis.FisConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.fis.FisConditions.resourceTag"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fis.FisConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.fis.FisConditions.service"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisConditions.service(value: string)
```

Generates a condition block for `fis:Service`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.fis.FisConditions.service.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.fis.FisConditions.tagKeys"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.fis.FisConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `targets` <a name="targets" id="@cdk_utils/iam.fis.FisConditions.targets"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisConditions.targets(values: string[])
```

Generates a condition block for `fis:Targets`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.fis.FisConditions.targets.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.actionGetActionConditionKeys">actionGetActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAction action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.actionGetExperimentConditionKeys">actionGetExperimentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExperiment action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.actionGetExperimentTemplateConditionKeys">actionGetExperimentTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetExperimentTemplate action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.CreateExperimentTemplateConditionKeys">CreateExperimentTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateExperimentTemplate action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.InjectApiInternalErrorConditionKeys">InjectApiInternalErrorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InjectApiInternalError action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.InjectApiThrottleErrorConditionKeys">InjectApiThrottleErrorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InjectApiThrottleError action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.InjectApiUnavailableErrorConditionKeys">InjectApiUnavailableErrorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InjectApiUnavailableError action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.OPERATIONS">OPERATIONS</a></code> | <code>string</code> | Condition key: fis:Operations (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.PERCENTAGE">PERCENTAGE</a></code> | <code>string</code> | Condition key: fis:Percentage (Numeric). |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.SERVICE">SERVICE</a></code> | <code>string</code> | Condition key: fis:Service (String). |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.StartExperimentConditionKeys">StartExperimentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartExperiment action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.TARGETS">TARGETS</a></code> | <code>string</code> | Condition key: fis:Targets (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.fis.FisConditions.property.UpdateExperimentTemplateConditionKeys">UpdateExperimentTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateExperimentTemplate action. |

---

##### `actionGetActionConditionKeys`<sup>Required</sup> <a name="actionGetActionConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.actionGetActionConditionKeys"></a>

```typescript
public readonly actionGetActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAction action.

---

##### `actionGetExperimentConditionKeys`<sup>Required</sup> <a name="actionGetExperimentConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.actionGetExperimentConditionKeys"></a>

```typescript
public readonly actionGetExperimentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExperiment action.

---

##### `actionGetExperimentTemplateConditionKeys`<sup>Required</sup> <a name="actionGetExperimentTemplateConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.actionGetExperimentTemplateConditionKeys"></a>

```typescript
public readonly actionGetExperimentTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetExperimentTemplate action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.fis.FisConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.fis.FisConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.fis.FisConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateExperimentTemplateConditionKeys`<sup>Required</sup> <a name="CreateExperimentTemplateConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.CreateExperimentTemplateConditionKeys"></a>

```typescript
public readonly CreateExperimentTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateExperimentTemplate action.

---

##### `InjectApiInternalErrorConditionKeys`<sup>Required</sup> <a name="InjectApiInternalErrorConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.InjectApiInternalErrorConditionKeys"></a>

```typescript
public readonly InjectApiInternalErrorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InjectApiInternalError action.

---

##### `InjectApiThrottleErrorConditionKeys`<sup>Required</sup> <a name="InjectApiThrottleErrorConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.InjectApiThrottleErrorConditionKeys"></a>

```typescript
public readonly InjectApiThrottleErrorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InjectApiThrottleError action.

---

##### `InjectApiUnavailableErrorConditionKeys`<sup>Required</sup> <a name="InjectApiUnavailableErrorConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.InjectApiUnavailableErrorConditionKeys"></a>

```typescript
public readonly InjectApiUnavailableErrorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InjectApiUnavailableError action.

---

##### `OPERATIONS`<sup>Required</sup> <a name="OPERATIONS" id="@cdk_utils/iam.fis.FisConditions.property.OPERATIONS"></a>

```typescript
public readonly OPERATIONS: string;
```

- *Type:* string

Condition key: fis:Operations (ArrayOfString).

---

##### `PERCENTAGE`<sup>Required</sup> <a name="PERCENTAGE" id="@cdk_utils/iam.fis.FisConditions.property.PERCENTAGE"></a>

```typescript
public readonly PERCENTAGE: string;
```

- *Type:* string

Condition key: fis:Percentage (Numeric).

---

##### `SERVICE`<sup>Required</sup> <a name="SERVICE" id="@cdk_utils/iam.fis.FisConditions.property.SERVICE"></a>

```typescript
public readonly SERVICE: string;
```

- *Type:* string

Condition key: fis:Service (String).

---

##### `StartExperimentConditionKeys`<sup>Required</sup> <a name="StartExperimentConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.StartExperimentConditionKeys"></a>

```typescript
public readonly StartExperimentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartExperiment action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TARGETS`<sup>Required</sup> <a name="TARGETS" id="@cdk_utils/iam.fis.FisConditions.property.TARGETS"></a>

```typescript
public readonly TARGETS: string;
```

- *Type:* string

Condition key: fis:Targets (ArrayOfString).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateExperimentTemplateConditionKeys`<sup>Required</sup> <a name="UpdateExperimentTemplateConditionKeys" id="@cdk_utils/iam.fis.FisConditions.property.UpdateExperimentTemplateConditionKeys"></a>

```typescript
public readonly UpdateExperimentTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateExperimentTemplate action.

---

### FisOperations <a name="FisOperations" id="@cdk_utils/iam.fis.FisOperations"></a>

API operation to required IAM actions mapping for fis.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fis.FisOperations.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

new fis.FisOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.CreateExperimentTemplate">CreateExperimentTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateExperimentTemplate API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.CreateTargetAccountConfiguration">CreateTargetAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateTargetAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.DeleteExperimentTemplate">DeleteExperimentTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteExperimentTemplate API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.DeleteTargetAccountConfiguration">DeleteTargetAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteTargetAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.ListActions">ListActions</a></code> | <code>string[]</code> | IAM actions required for the ListActions API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.ListExperimentResolvedTargets">ListExperimentResolvedTargets</a></code> | <code>string[]</code> | IAM actions required for the ListExperimentResolvedTargets API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.ListExperiments">ListExperiments</a></code> | <code>string[]</code> | IAM actions required for the ListExperiments API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.ListExperimentTargetAccountConfigurations">ListExperimentTargetAccountConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListExperimentTargetAccountConfigurations API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.ListExperimentTemplates">ListExperimentTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListExperimentTemplates API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.ListTargetAccountConfigurations">ListTargetAccountConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListTargetAccountConfigurations API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.ListTargetResourceTypes">ListTargetResourceTypes</a></code> | <code>string[]</code> | IAM actions required for the ListTargetResourceTypes API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.opGetAction">opGetAction</a></code> | <code>string[]</code> | IAM actions required for the GetAction API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.opGetExperiment">opGetExperiment</a></code> | <code>string[]</code> | IAM actions required for the GetExperiment API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.opGetExperimentTargetAccountConfiguration">opGetExperimentTargetAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetExperimentTargetAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.opGetExperimentTemplate">opGetExperimentTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetExperimentTemplate API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.opGetSafetyLever">opGetSafetyLever</a></code> | <code>string[]</code> | IAM actions required for the GetSafetyLever API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.opGetTargetAccountConfiguration">opGetTargetAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetTargetAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.opGetTargetResourceType">opGetTargetResourceType</a></code> | <code>string[]</code> | IAM actions required for the GetTargetResourceType API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.StartExperiment">StartExperiment</a></code> | <code>string[]</code> | IAM actions required for the StartExperiment API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.StopExperiment">StopExperiment</a></code> | <code>string[]</code> | IAM actions required for the StopExperiment API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.UpdateExperimentTemplate">UpdateExperimentTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateExperimentTemplate API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.UpdateSafetyLeverState">UpdateSafetyLeverState</a></code> | <code>string[]</code> | IAM actions required for the UpdateSafetyLeverState API call. |
| <code><a href="#@cdk_utils/iam.fis.FisOperations.property.UpdateTargetAccountConfiguration">UpdateTargetAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateTargetAccountConfiguration API call. |

---

##### `CreateExperimentTemplate`<sup>Required</sup> <a name="CreateExperimentTemplate" id="@cdk_utils/iam.fis.FisOperations.property.CreateExperimentTemplate"></a>

```typescript
public readonly CreateExperimentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateExperimentTemplate API call.

---

##### `CreateTargetAccountConfiguration`<sup>Required</sup> <a name="CreateTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisOperations.property.CreateTargetAccountConfiguration"></a>

```typescript
public readonly CreateTargetAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateTargetAccountConfiguration API call.

---

##### `DeleteExperimentTemplate`<sup>Required</sup> <a name="DeleteExperimentTemplate" id="@cdk_utils/iam.fis.FisOperations.property.DeleteExperimentTemplate"></a>

```typescript
public readonly DeleteExperimentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteExperimentTemplate API call.

---

##### `DeleteTargetAccountConfiguration`<sup>Required</sup> <a name="DeleteTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisOperations.property.DeleteTargetAccountConfiguration"></a>

```typescript
public readonly DeleteTargetAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTargetAccountConfiguration API call.

---

##### `ListActions`<sup>Required</sup> <a name="ListActions" id="@cdk_utils/iam.fis.FisOperations.property.ListActions"></a>

```typescript
public readonly ListActions: string[];
```

- *Type:* string[]

IAM actions required for the ListActions API call.

---

##### `ListExperimentResolvedTargets`<sup>Required</sup> <a name="ListExperimentResolvedTargets" id="@cdk_utils/iam.fis.FisOperations.property.ListExperimentResolvedTargets"></a>

```typescript
public readonly ListExperimentResolvedTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListExperimentResolvedTargets API call.

---

##### `ListExperiments`<sup>Required</sup> <a name="ListExperiments" id="@cdk_utils/iam.fis.FisOperations.property.ListExperiments"></a>

```typescript
public readonly ListExperiments: string[];
```

- *Type:* string[]

IAM actions required for the ListExperiments API call.

---

##### `ListExperimentTargetAccountConfigurations`<sup>Required</sup> <a name="ListExperimentTargetAccountConfigurations" id="@cdk_utils/iam.fis.FisOperations.property.ListExperimentTargetAccountConfigurations"></a>

```typescript
public readonly ListExperimentTargetAccountConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListExperimentTargetAccountConfigurations API call.

---

##### `ListExperimentTemplates`<sup>Required</sup> <a name="ListExperimentTemplates" id="@cdk_utils/iam.fis.FisOperations.property.ListExperimentTemplates"></a>

```typescript
public readonly ListExperimentTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListExperimentTemplates API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.fis.FisOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTargetAccountConfigurations`<sup>Required</sup> <a name="ListTargetAccountConfigurations" id="@cdk_utils/iam.fis.FisOperations.property.ListTargetAccountConfigurations"></a>

```typescript
public readonly ListTargetAccountConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetAccountConfigurations API call.

---

##### `ListTargetResourceTypes`<sup>Required</sup> <a name="ListTargetResourceTypes" id="@cdk_utils/iam.fis.FisOperations.property.ListTargetResourceTypes"></a>

```typescript
public readonly ListTargetResourceTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetResourceTypes API call.

---

##### `opGetAction`<sup>Required</sup> <a name="opGetAction" id="@cdk_utils/iam.fis.FisOperations.property.opGetAction"></a>

```typescript
public readonly opGetAction: string[];
```

- *Type:* string[]

IAM actions required for the GetAction API call.

---

##### `opGetExperiment`<sup>Required</sup> <a name="opGetExperiment" id="@cdk_utils/iam.fis.FisOperations.property.opGetExperiment"></a>

```typescript
public readonly opGetExperiment: string[];
```

- *Type:* string[]

IAM actions required for the GetExperiment API call.

---

##### `opGetExperimentTargetAccountConfiguration`<sup>Required</sup> <a name="opGetExperimentTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisOperations.property.opGetExperimentTargetAccountConfiguration"></a>

```typescript
public readonly opGetExperimentTargetAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetExperimentTargetAccountConfiguration API call.

---

##### `opGetExperimentTemplate`<sup>Required</sup> <a name="opGetExperimentTemplate" id="@cdk_utils/iam.fis.FisOperations.property.opGetExperimentTemplate"></a>

```typescript
public readonly opGetExperimentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetExperimentTemplate API call.

---

##### `opGetSafetyLever`<sup>Required</sup> <a name="opGetSafetyLever" id="@cdk_utils/iam.fis.FisOperations.property.opGetSafetyLever"></a>

```typescript
public readonly opGetSafetyLever: string[];
```

- *Type:* string[]

IAM actions required for the GetSafetyLever API call.

---

##### `opGetTargetAccountConfiguration`<sup>Required</sup> <a name="opGetTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisOperations.property.opGetTargetAccountConfiguration"></a>

```typescript
public readonly opGetTargetAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetTargetAccountConfiguration API call.

---

##### `opGetTargetResourceType`<sup>Required</sup> <a name="opGetTargetResourceType" id="@cdk_utils/iam.fis.FisOperations.property.opGetTargetResourceType"></a>

```typescript
public readonly opGetTargetResourceType: string[];
```

- *Type:* string[]

IAM actions required for the GetTargetResourceType API call.

---

##### `StartExperiment`<sup>Required</sup> <a name="StartExperiment" id="@cdk_utils/iam.fis.FisOperations.property.StartExperiment"></a>

```typescript
public readonly StartExperiment: string[];
```

- *Type:* string[]

IAM actions required for the StartExperiment API call.

---

##### `StopExperiment`<sup>Required</sup> <a name="StopExperiment" id="@cdk_utils/iam.fis.FisOperations.property.StopExperiment"></a>

```typescript
public readonly StopExperiment: string[];
```

- *Type:* string[]

IAM actions required for the StopExperiment API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.fis.FisOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.fis.FisOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateExperimentTemplate`<sup>Required</sup> <a name="UpdateExperimentTemplate" id="@cdk_utils/iam.fis.FisOperations.property.UpdateExperimentTemplate"></a>

```typescript
public readonly UpdateExperimentTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateExperimentTemplate API call.

---

##### `UpdateSafetyLeverState`<sup>Required</sup> <a name="UpdateSafetyLeverState" id="@cdk_utils/iam.fis.FisOperations.property.UpdateSafetyLeverState"></a>

```typescript
public readonly UpdateSafetyLeverState: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSafetyLeverState API call.

---

##### `UpdateTargetAccountConfiguration`<sup>Required</sup> <a name="UpdateTargetAccountConfiguration" id="@cdk_utils/iam.fis.FisOperations.property.UpdateTargetAccountConfiguration"></a>

```typescript
public readonly UpdateTargetAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTargetAccountConfiguration API call.

---

### FisResources <a name="FisResources" id="@cdk_utils/iam.fis.FisResources"></a>

ARN builders, validators, and parsers for fis resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.fis.FisResources.Initializer"></a>

```typescript
import { fis } from '@cdk_utils/iam'

new fis.FisResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.fis.FisResources.action">action</a></code> | Builds an ARN for the action resource. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.experiment">experiment</a></code> | Builds an ARN for the experiment resource. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.experimentTemplate">experimentTemplate</a></code> | Builds an ARN for the experiment-template resource. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.isValidActionArn">isValidActionArn</a></code> | Validates whether a string is a valid ARN for the action resource. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.isValidExperimentArn">isValidExperimentArn</a></code> | Validates whether a string is a valid ARN for the experiment resource. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.isValidExperimentTemplateArn">isValidExperimentTemplateArn</a></code> | Validates whether a string is a valid ARN for the experiment-template resource. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.isValidSafetyLeverArn">isValidSafetyLeverArn</a></code> | Validates whether a string is a valid ARN for the safety-lever resource. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.parseActionArn">parseActionArn</a></code> | Parses a action ARN into its components. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.parseExperimentArn">parseExperimentArn</a></code> | Parses a experiment ARN into its components. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.parseExperimentTemplateArn">parseExperimentTemplateArn</a></code> | Parses a experiment-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.parseSafetyLeverArn">parseSafetyLeverArn</a></code> | Parses a safety-lever ARN into its components. |
| <code><a href="#@cdk_utils/iam.fis.FisResources.safetyLever">safetyLever</a></code> | Builds an ARN for the safety-lever resource. |

---

##### `action` <a name="action" id="@cdk_utils/iam.fis.FisResources.action"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.action(props: FisActionArnProps)
```

Builds an ARN for the action resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fis.FisResources.action.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fis.FisActionArnProps">FisActionArnProps</a>

---

##### `experiment` <a name="experiment" id="@cdk_utils/iam.fis.FisResources.experiment"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.experiment(props: FisExperimentArnProps)
```

Builds an ARN for the experiment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fis.FisResources.experiment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fis.FisExperimentArnProps">FisExperimentArnProps</a>

---

##### `experimentTemplate` <a name="experimentTemplate" id="@cdk_utils/iam.fis.FisResources.experimentTemplate"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.experimentTemplate(props: FisExperimentTemplateArnProps)
```

Builds an ARN for the experiment-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fis.FisResources.experimentTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fis.FisExperimentTemplateArnProps">FisExperimentTemplateArnProps</a>

---

##### `isValidActionArn` <a name="isValidActionArn" id="@cdk_utils/iam.fis.FisResources.isValidActionArn"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.isValidActionArn(arn: string)
```

Validates whether a string is a valid ARN for the action resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fis.FisResources.isValidActionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExperimentArn` <a name="isValidExperimentArn" id="@cdk_utils/iam.fis.FisResources.isValidExperimentArn"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.isValidExperimentArn(arn: string)
```

Validates whether a string is a valid ARN for the experiment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fis.FisResources.isValidExperimentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidExperimentTemplateArn` <a name="isValidExperimentTemplateArn" id="@cdk_utils/iam.fis.FisResources.isValidExperimentTemplateArn"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.isValidExperimentTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the experiment-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fis.FisResources.isValidExperimentTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSafetyLeverArn` <a name="isValidSafetyLeverArn" id="@cdk_utils/iam.fis.FisResources.isValidSafetyLeverArn"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.isValidSafetyLeverArn(arn: string)
```

Validates whether a string is a valid ARN for the safety-lever resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fis.FisResources.isValidSafetyLeverArn.parameter.arn"></a>

- *Type:* string

---

##### `parseActionArn` <a name="parseActionArn" id="@cdk_utils/iam.fis.FisResources.parseActionArn"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.parseActionArn(arn: string)
```

Parses a action ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fis.FisResources.parseActionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExperimentArn` <a name="parseExperimentArn" id="@cdk_utils/iam.fis.FisResources.parseExperimentArn"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.parseExperimentArn(arn: string)
```

Parses a experiment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fis.FisResources.parseExperimentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseExperimentTemplateArn` <a name="parseExperimentTemplateArn" id="@cdk_utils/iam.fis.FisResources.parseExperimentTemplateArn"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.parseExperimentTemplateArn(arn: string)
```

Parses a experiment-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fis.FisResources.parseExperimentTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSafetyLeverArn` <a name="parseSafetyLeverArn" id="@cdk_utils/iam.fis.FisResources.parseSafetyLeverArn"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.parseSafetyLeverArn(arn: string)
```

Parses a safety-lever ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.fis.FisResources.parseSafetyLeverArn.parameter.arn"></a>

- *Type:* string

---

##### `safetyLever` <a name="safetyLever" id="@cdk_utils/iam.fis.FisResources.safetyLever"></a>

```typescript
import { fis } from '@cdk_utils/iam'

fis.FisResources.safetyLever(props: FisSafetyLeverArnProps)
```

Builds an ARN for the safety-lever resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.fis.FisResources.safetyLever.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.fis.FisSafetyLeverArnProps">FisSafetyLeverArnProps</a>

---




